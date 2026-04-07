import { V as O, c as ae } from "./vacuum-of-the-void-BGglv3Ef.mjs";
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
      injuryPenalty: p,
      isWeaponAttack: a,
      isInitiativeRoll: c,
      weaponSlotKey: S,
      weaponItemId: m,
      weaponDamageFormula: i
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(_) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!c, this._weaponSlotKey = S || "", this._weaponItemId = m || "", this._weaponDamageFormula = typeof i == "string" ? i.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var f, j, M, v, b;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : j.call(f, "form.votv.roll-sheet")) ?? ((v = (M = this.element) == null ? void 0 : M.matches) != null && v.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), _ = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), d.forEach((r) => {
        const l = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", l === o);
      });
    };
    d.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), _(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), _((u == null ? void 0 : u.value) ?? "0");
    const p = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = p == null ? void 0 : p.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), c = s.querySelector("input[name='moraleDice']"), S = s.querySelectorAll(".roll-sheet-morale-d8"), m = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), c && (c.value = String(o)), S.forEach((r, l) => {
        r.classList.toggle("selected", l < o), r.style.pointerEvents = l < a ? "" : "none", r.style.opacity = l < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const r = n.dataset.moraleValue ?? "0";
        m(r), t._updateFormulaPreview(s);
      });
    }), m((c == null ? void 0 : c.value) ?? "0");
    const i = s.querySelector("input[name='constantBonus']");
    i && i.addEventListener("input", () => t._updateFormulaPreview(s)), i && i.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, r, l, h;
      if ((r = (o = n.target) == null ? void 0 : o.closest) != null && r.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (h = (l = n.target) == null ? void 0 : l.closest) != null && h.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var j, M, v, b, n, o, r, l, h, D, w, L, V, g, x;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((j = t.querySelector("input[name='advantage']")) == null ? void 0 : j.value) ?? "0", 10) || 0;
    ((b = (v = (M = this.actor) == null ? void 0 : M.statuses) == null ? void 0 : v.has) == null ? void 0 : b.call(v, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (s = Math.max(-3, s - 1));
    const d = parseInt(((n = t.querySelector("input[name='moraleDice']")) == null ? void 0 : n.value) ?? "0", 10) || 0, _ = parseInt(((o = t.querySelector("input[name='constantBonus']")) == null ? void 0 : o.value) ?? "0", 10) || 0, p = parseInt(((r = t.dataset) == null ? void 0 : r.baseMod) ?? "0", 10) || 0, a = parseInt(((l = t.dataset) == null ? void 0 : l.injuryMod) ?? "0", 10) || 0, c = parseInt(((h = t.dataset) == null ? void 0 : h.injuryPenalty) ?? "0", 10) || 0, S = (L = (w = (D = this.actor) == null ? void 0 : D.statuses) == null ? void 0 : w.has) != null && L.call(w, "diseased") || (x = (g = (V = this.actor) == null ? void 0 : V.statuses) == null ? void 0 : g.has) != null && x.call(g, "poisoned") ? -1 : 0, m = p + a + c + _ + S, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", i[0].appendChild(f), s !== 0) {
      const y = document.createElement("span");
      y.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const I = document.createElement("img");
      I.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", I.alt = s > 0 ? "előny d6" : "hátrány d6", I.className = "roll-sheet-preview-die", y.appendChild(I), i.push(y);
    }
    if (d > 0) {
      const y = document.createElement("span");
      y.textContent = ` + ${d} `;
      const I = document.createElement("img");
      I.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", I.alt = "d8", I.className = "roll-sheet-preview-die", y.appendChild(I), i.push(y);
    }
    if (m !== 0) {
      const y = document.createElement("span");
      y.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, i.push(y);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var j, M, v, b, n, o, r, l, h, D, w, L;
    const e = this.actor, s = Math.max(0, Number(((M = (j = e == null ? void 0 : e.system) == null ? void 0 : j.resources) == null ? void 0 : M.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", _ = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", u, d, _].filter(Boolean).join(" ") || "3d6";
    let a = "", c = 0;
    const S = [], m = [];
    if (this._isWeaponAttack && ((b = (v = game.user) == null ? void 0 : v.targets) != null && b.size)) {
      const g = Array.from(game.user.targets)[0], x = (g == null ? void 0 : g.actor) ?? null;
      a = (x == null ? void 0 : x.name) || (g == null ? void 0 : g.name) || "", (o = (n = x == null ? void 0 : x.statuses) == null ? void 0 : n.has) != null && o.call(n, "stunned") && (c = 1, S.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    (l = (r = e == null ? void 0 : e.statuses) == null ? void 0 : r.has) != null && l.call(r, "diseased") && m.push(game.i18n.localize("VOTV.StatusDiseased")), (D = (h = e == null ? void 0 : e.statuses) == null ? void 0 : h.has) != null && D.call(h, "poisoned") && m.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const i = ((L = (w = e == null ? void 0 : e.statuses) == null ? void 0 : w.has) == null ? void 0 : L.call(w, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    i && m.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const f = Math.min(3, Math.max(-3, c + (i ? -1 : 0)));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: s,
      advantageValue: f,
      advantageSourcesText: S.length ? S.join(", ") : "",
      disadvantageSourcesText: m.length ? m.join(", ") : "",
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
    var s, u, d, _, p, a, c, S, m, i, f, j, M;
    const e = this.actor;
    if (e)
      try {
        const v = t.querySelector("[name='moraleDice']"), b = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((v == null ? void 0 : v.value) ?? "0", 10) || 0)), r = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), l = Math.min(o, r);
        let h = Math.min(3, Math.max(-3, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0));
        ((_ = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : _.call(d, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (h = Math.max(-3, h - 1));
        const w = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, L = this._baseModifier, V = this._injuryModifier, g = this._injuryPenalty || 0, y = ((a = (p = e.statuses) == null ? void 0 : p.has) == null ? void 0 : a.call(p, "diseased")) || ((S = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : S.call(c, "poisoned")) ? -1 : 0, I = L + V + g + w + y, Y = [
          "3d6",
          h > 0 ? `+${h}d6` : h < 0 ? `-${Math.abs(h)}d6` : "",
          l > 0 ? `+${l}d8` : "",
          I !== 0 ? I > 0 ? `+${I}` : `${I}` : ""
        ].filter(Boolean).join(" "), q = new Roll(Y);
        await q.evaluate({ async: !0 });
        const { resultType: G, label: J } = ae(q), Q = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let X = this._label;
        const T = { resultType: G, critLabel: J };
        if (this._isWeaponAttack && ((i = (m = game.user) == null ? void 0 : m.targets) != null && i.size)) {
          const F = Array.from(game.user.targets)[0], k = (F == null ? void 0 : F.actor) ?? null;
          if (k) {
            const A = ((f = k.system) == null ? void 0 : f.combat) ?? {}, Z = Number(A.defense ?? 0) || 0, ee = Number(A.defenseBonus ?? 0) || 0, te = Number(A.givenProtection ?? 0) || 0;
            let $ = 0;
            if (k.type === "Karakter") {
              const B = (((j = k.items) == null ? void 0 : j.contents) ?? []).filter(
                (E) => {
                  var K;
                  return E.type === "Pancel" && ((K = E.system) == null ? void 0 : K.equipped) === !0;
                }
              );
              for (const E of B) {
                const K = String(((M = E.system) == null ? void 0 : M.protectionBonus) ?? "").trim().replace(",", "."), H = Number(K);
                Number.isFinite(H) && ($ += H);
              }
            }
            const z = Z + ee + te + $, W = (Number(q.total ?? 0) || 0) >= z, se = k.name ?? F.name ?? "Célpont";
            let N = null, C = null;
            if (W && k.type === "Karakter")
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
              targetActorId: k.id ?? null,
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
        }), l > 0) {
          const R = Math.max(0, r - l);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(q.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const F = e.apps ?? [];
            for (const k of F)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ie(P, t, e) {
  var a, c;
  if (!P) return;
  const s = Number(((c = (a = P.system) == null ? void 0 : a.skills) == null ? void 0 : c[t]) ?? 0) || 0, u = O.BODY_PART_BY_SKILL[t] ? O._getSkillHealthStatusStatic(P, t) : void 0;
  let d = 0;
  u === 1 ? d = -6 : u === 2 && (d = -3);
  const _ = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: P,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: _
  }).render(!0);
}
function le(P, t) {
  var l, h, D, w, L, V, g, x;
  if (!P || !t) return;
  const e = P, u = (((l = e.system) == null ? void 0 : l.weapons) ?? {})[t] ?? {}, d = ((h = e.system) == null ? void 0 : h.skills) ?? {}, _ = ((w = (D = e.items) == null ? void 0 : D.filter) == null ? void 0 : w.call(D, (y) => y.type === "Fegyver")) ?? [], p = (u.itemId ?? "").trim(), a = p ? _.find((y) => y.id === p) ?? null : null, c = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", S = Number(u.bonus || ((L = a == null ? void 0 : a.system) == null ? void 0 : L.bonus) || 0) || 0, m = ((V = a == null ? void 0 : a.system) == null ? void 0 : V.type) || "kinetic", i = (((g = a == null ? void 0 : a.system) == null ? void 0 : g.skillKey) ?? "").trim(), f = i && d[i] !== void 0 ? i : m === "explosive" ? "grenadeUse" : "firearms", j = Number(d[f] || 0) || 0, M = S + j;
  let v = 0;
  if (P.type === "Karakter") {
    const y = O._getSkillHealthStatusStatic(P, f);
    y === 1 ? v = -6 : y === 2 && (v = -3);
  }
  const b = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.damage) ?? "").trim(), n = (u.damage ?? "").trim(), o = b || n || "";
  new U({
    actor: P,
    skillKey: f,
    label: c,
    baseModifier: M,
    injuryModifier: 0,
    injuryPenalty: v,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? p,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  le as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-B7wj73Gm.mjs.map
