import { V as O, c as ae } from "./vacuum-of-the-void-oqflxv_V.mjs";
class U extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions ?? {}, {
      id: "votv-roll-sheet",
      title: "Dobás",
      template: "systems/vacuum-of-the-void/templates/app/roll-sheet.hbs",
      width: 380,
      height: "auto",
      classes: ["vacuum-of-the-void", "roll-sheet"],
      resizable: !1
    });
  }
  constructor(t = {}) {
    const {
      actor: e,
      skillKey: s,
      label: u,
      baseModifier: d,
      injuryModifier: _,
      injuryPenalty: h,
      isWeaponAttack: a,
      isInitiativeRoll: c,
      weaponSlotKey: b,
      weaponItemId: p,
      weaponDamageFormula: i
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(_) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!c, this._weaponSlotKey = b || "", this._weaponItemId = p || "", this._weaponDamageFormula = typeof i == "string" ? i.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var y, j, S, m, w;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : j.call(y, "form.votv.roll-sheet")) ?? ((m = (S = this.element) == null ? void 0 : S.matches) != null && m.call(S, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), _ = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), d.forEach((l) => {
        const r = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", r === o);
      });
    };
    d.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), _(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), _((u == null ? void 0 : u.value) ?? "0");
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((w = h == null ? void 0 : h.dataset) == null ? void 0 : w.moraleMax) ?? "3", 10) || 0)), c = s.querySelector("input[name='moraleDice']"), b = s.querySelectorAll(".roll-sheet-morale-d8"), p = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), c && (c.value = String(o)), b.forEach((l, r) => {
        l.classList.toggle("selected", r < o), l.style.pointerEvents = r < a ? "" : "none", l.style.opacity = r < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const l = n.dataset.moraleValue ?? "0";
        p(l), t._updateFormulaPreview(s);
      });
    }), p((c == null ? void 0 : c.value) ?? "0");
    const i = s.querySelector("input[name='constantBonus']");
    i && i.addEventListener("input", () => t._updateFormulaPreview(s)), i && i.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, l, r, v;
      if ((l = (o = n.target) == null ? void 0 : o.closest) != null && l.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (v = (r = n.target) == null ? void 0 : r.closest) != null && v.call(r, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var j, S, m, w, n, o, l, r, v, M, g, L, D, x, R;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((j = t.querySelector("input[name='advantage']")) == null ? void 0 : j.value) ?? "0", 10) || 0;
    ((w = (m = (S = this.actor) == null ? void 0 : S.statuses) == null ? void 0 : m.has) == null ? void 0 : w.call(m, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (s = Math.max(-3, s - 1));
    const d = parseInt(((n = t.querySelector("input[name='moraleDice']")) == null ? void 0 : n.value) ?? "0", 10) || 0, _ = parseInt(((o = t.querySelector("input[name='constantBonus']")) == null ? void 0 : o.value) ?? "0", 10) || 0, h = parseInt(((l = t.dataset) == null ? void 0 : l.baseMod) ?? "0", 10) || 0, a = parseInt(((r = t.dataset) == null ? void 0 : r.injuryMod) ?? "0", 10) || 0, c = parseInt(((v = t.dataset) == null ? void 0 : v.injuryPenalty) ?? "0", 10) || 0, b = (L = (g = (M = this.actor) == null ? void 0 : M.statuses) == null ? void 0 : g.has) != null && L.call(g, "diseased") || (R = (x = (D = this.actor) == null ? void 0 : D.statuses) == null ? void 0 : x.has) != null && R.call(x, "poisoned") ? -1 : 0, p = h + a + c + _ + b, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const y = document.createElement("img");
    if (y.src = "systems/vacuum-of-the-void/assets/d6.svg", y.alt = "d6", y.className = "roll-sheet-preview-die", i[0].appendChild(y), s !== 0) {
      const f = document.createElement("span");
      f.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const I = document.createElement("img");
      I.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", I.alt = s > 0 ? "előny d6" : "hátrány d6", I.className = "roll-sheet-preview-die", f.appendChild(I), i.push(f);
    }
    if (d > 0) {
      const f = document.createElement("span");
      f.textContent = ` + ${d} `;
      const I = document.createElement("img");
      I.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", I.alt = "d8", I.className = "roll-sheet-preview-die", f.appendChild(I), i.push(f);
    }
    if (p !== 0) {
      const f = document.createElement("span");
      f.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, i.push(f);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var i, y, j, S, m, w, n, o, l, r;
    const e = this.actor, s = Math.max(0, Number(((y = (i = e == null ? void 0 : e.system) == null ? void 0 : i.resources) == null ? void 0 : y.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", _ = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", u, d, _].filter(Boolean).join(" ") || "3d6";
    let a = "", c = 0;
    const b = [], p = [];
    if (this._isWeaponAttack && ((S = (j = game.user) == null ? void 0 : j.targets) != null && S.size)) {
      const M = Array.from(game.user.targets)[0], g = (M == null ? void 0 : M.actor) ?? null;
      a = (g == null ? void 0 : g.name) || (M == null ? void 0 : M.name) || "", (w = (m = g == null ? void 0 : g.statuses) == null ? void 0 : m.has) != null && w.call(m, "stunned") && (c = 1, b.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return (o = (n = e == null ? void 0 : e.statuses) == null ? void 0 : n.has) != null && o.call(n, "diseased") && p.push(game.i18n.localize("VOTV.StatusDiseased")), (r = (l = e == null ? void 0 : e.statuses) == null ? void 0 : l.has) != null && r.call(l, "poisoned") && p.push(game.i18n.localize("VOTV.StatusPoisoned")), {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: c,
      advantageSourcesText: b.length ? b.join(", ") : "",
      disadvantageSourcesText: p.length ? p.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: a
    };
  }
  activateListeners(t) {
    var e;
    (e = super.activateListeners) == null || e.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var s, u, d, _, h, a, c, b, p, i, y, j, S;
    const e = this.actor;
    if (e)
      try {
        const m = t.querySelector("[name='moraleDice']"), w = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((m == null ? void 0 : m.value) ?? "0", 10) || 0)), l = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), r = Math.min(o, l);
        let v = Math.min(3, Math.max(-3, parseInt((w == null ? void 0 : w.value) ?? "0", 10) || 0));
        ((_ = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : _.call(d, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (v = Math.max(-3, v - 1));
        const g = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, L = this._baseModifier, D = this._injuryModifier, x = this._injuryPenalty || 0, f = ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "diseased")) || ((b = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : b.call(c, "poisoned")) ? -1 : 0, I = L + D + x + g + f, Y = [
          "3d6",
          v > 0 ? `+${v}d6` : v < 0 ? `-${Math.abs(v)}d6` : "",
          r > 0 ? `+${r}d8` : "",
          I !== 0 ? I > 0 ? `+${I}` : `${I}` : ""
        ].filter(Boolean).join(" "), q = new Roll(Y);
        await q.evaluate({ async: !0 });
        const { resultType: G, label: J } = ae(q), Q = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let X = this._label;
        const T = { resultType: G, critLabel: J };
        if (this._isWeaponAttack && ((i = (p = game.user) == null ? void 0 : p.targets) != null && i.size)) {
          const F = Array.from(game.user.targets)[0], P = (F == null ? void 0 : F.actor) ?? null;
          if (P) {
            const K = ((y = P.system) == null ? void 0 : y.combat) ?? {}, Z = Number(K.defense ?? 0) || 0, ee = Number(K.defenseBonus ?? 0) || 0, te = Number(K.givenProtection ?? 0) || 0;
            let $ = 0;
            if (P.type === "Karakter") {
              const B = (((j = P.items) == null ? void 0 : j.contents) ?? []).filter(
                (E) => {
                  var A;
                  return E.type === "Pancel" && ((A = E.system) == null ? void 0 : A.equipped) === !0;
                }
              );
              for (const E of B) {
                const A = String(((S = E.system) == null ? void 0 : S.protectionBonus) ?? "").trim().replace(",", "."), H = Number(A);
                Number.isFinite(H) && ($ += H);
              }
            }
            const z = Z + ee + te + $, W = (Number(q.total ?? 0) || 0) >= z, se = P.name ?? F.name ?? "Célpont";
            let N = null, C = null;
            if (W && P.type === "Karakter")
              try {
                const B = new Roll("1d8");
                await B.evaluate({ async: !0 }), N = Number(B.total ?? 0) || 1, N === 1 ? C = "Fej" : N >= 2 && N <= 4 ? C = "Törzs" : N === 5 || N === 6 ? C = "Karok" : C = "Lábak";
              } catch (B) {
                console.warn("VOTV hit location roll failed:", B);
              }
            T.weaponAttack = !0, T.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: P.id ?? null,
              targetName: se,
              defense: z,
              isHit: W,
              hitLocationRoll: N ?? null,
              hitLocationName: C ?? null
            };
          }
        }
        if (await q.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: X,
          flags: { "vacuum-of-the-void": T },
          rollMode: Q
        }), r > 0) {
          const V = Math.max(0, l - r);
          await e.update({ "system.resources.morale": V });
        }
        if (this._isInitiativeRoll)
          try {
            const V = Number(q.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": V });
            const F = e.apps ?? [];
            for (const P of F)
              typeof (P == null ? void 0 : P.render) == "function" && P.render(!0);
          } catch (V) {
            console.warn("VOTV initiative result update:", V);
          }
      } finally {
        this.close();
      }
  }
}
function ie(k, t, e) {
  var a, c;
  if (!k) return;
  const s = Number(((c = (a = k.system) == null ? void 0 : a.skills) == null ? void 0 : c[t]) ?? 0) || 0, u = O.BODY_PART_BY_SKILL[t] ? O._getSkillHealthStatusStatic(k, t) : void 0;
  let d = 0;
  u === 1 ? d = -6 : u === 2 && (d = -3);
  const _ = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: k,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: _
  }).render(!0);
}
function re(k, t) {
  var r, v, M, g, L, D, x, R;
  if (!k || !t) return;
  const e = k, u = (((r = e.system) == null ? void 0 : r.weapons) ?? {})[t] ?? {}, d = ((v = e.system) == null ? void 0 : v.skills) ?? {}, _ = ((g = (M = e.items) == null ? void 0 : M.filter) == null ? void 0 : g.call(M, (f) => f.type === "Fegyver")) ?? [], h = (u.itemId ?? "").trim(), a = h ? _.find((f) => f.id === h) ?? null : null, c = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", b = Number(u.bonus || ((L = a == null ? void 0 : a.system) == null ? void 0 : L.bonus) || 0) || 0, p = ((D = a == null ? void 0 : a.system) == null ? void 0 : D.type) || "kinetic", i = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), y = i && d[i] !== void 0 ? i : p === "explosive" ? "grenadeUse" : "firearms", j = Number(d[y] || 0) || 0, S = b + j;
  let m = 0;
  if (k.type === "Karakter") {
    const f = O._getSkillHealthStatusStatic(k, y);
    f === 1 ? m = -6 : f === 2 && (m = -3);
  }
  const w = (((R = a == null ? void 0 : a.system) == null ? void 0 : R.damage) ?? "").trim(), n = (u.damage ?? "").trim(), o = w || n || "";
  new U({
    actor: k,
    skillKey: y,
    label: c,
    baseModifier: S,
    injuryModifier: 0,
    injuryPenalty: m,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? h,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-8pc_qet5.mjs.map
