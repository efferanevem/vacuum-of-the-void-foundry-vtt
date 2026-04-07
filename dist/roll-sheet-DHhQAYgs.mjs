import { V as O, c as ae } from "./vacuum-of-the-void-6O17s4sR.mjs";
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
      label: c,
      baseModifier: d,
      injuryModifier: g,
      injuryPenalty: y,
      isWeaponAttack: a,
      isInitiativeRoll: u,
      weaponSlotKey: S,
      weaponItemId: m,
      weaponDamageFormula: i
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = c ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(y) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!u, this._weaponSlotKey = S || "", this._weaponItemId = m || "", this._weaponDamageFormula = typeof i == "string" ? i.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var f, j, _, h, M;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : j.call(f, "form.votv.roll-sheet")) ?? ((h = (_ = this.element) == null ? void 0 : _.matches) != null && h.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const c = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      c && (c.value = String(o)), d.forEach((r) => {
        const l = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", l === o);
      });
    };
    d.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), g((c == null ? void 0 : c.value) ?? "0");
    const y = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((M = y == null ? void 0 : y.dataset) == null ? void 0 : M.moraleMax) ?? "3", 10) || 0)), u = s.querySelector("input[name='moraleDice']"), S = s.querySelectorAll(".roll-sheet-morale-d8"), m = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), u && (u.value = String(o)), S.forEach((r, l) => {
        r.classList.toggle("selected", l < o), r.style.pointerEvents = l < a ? "" : "none", r.style.opacity = l < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const r = n.dataset.moraleValue ?? "0";
        m(r), t._updateFormulaPreview(s);
      });
    }), m((u == null ? void 0 : u.value) ?? "0");
    const i = s.querySelector("input[name='constantBonus']");
    i && i.addEventListener("input", () => t._updateFormulaPreview(s)), i && i.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, r, l, p;
      if ((r = (o = n.target) == null ? void 0 : o.closest) != null && r.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (p = (l = n.target) == null ? void 0 : l.closest) != null && p.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var j, _, h, M, n, o, r, l, p, x, L, b, w, D, N;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((j = t.querySelector("input[name='advantage']")) == null ? void 0 : j.value) ?? "0", 10) || 0;
    ((M = (h = (_ = this.actor) == null ? void 0 : _.statuses) == null ? void 0 : h.has) == null ? void 0 : M.call(h, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (s = Math.max(-3, s - 1));
    const d = parseInt(((n = t.querySelector("input[name='moraleDice']")) == null ? void 0 : n.value) ?? "0", 10) || 0, g = parseInt(((o = t.querySelector("input[name='constantBonus']")) == null ? void 0 : o.value) ?? "0", 10) || 0, y = parseInt(((r = t.dataset) == null ? void 0 : r.baseMod) ?? "0", 10) || 0, a = parseInt(((l = t.dataset) == null ? void 0 : l.injuryMod) ?? "0", 10) || 0, u = parseInt(((p = t.dataset) == null ? void 0 : p.injuryPenalty) ?? "0", 10) || 0, S = (b = (L = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : L.has) != null && b.call(L, "diseased") || (N = (D = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : D.has) != null && N.call(D, "poisoned") ? -1 : 0, m = y + a + u + g + S, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", i[0].appendChild(f), s !== 0) {
      const v = document.createElement("span");
      v.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const I = document.createElement("img");
      I.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", I.alt = s > 0 ? "előny d6" : "hátrány d6", I.className = "roll-sheet-preview-die", v.appendChild(I), i.push(v);
    }
    if (d > 0) {
      const v = document.createElement("span");
      v.textContent = ` + ${d} `;
      const I = document.createElement("img");
      I.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", I.alt = "d8", I.className = "roll-sheet-preview-die", v.appendChild(I), i.push(v);
    }
    if (m !== 0) {
      const v = document.createElement("span");
      v.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, i.push(v);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var i, f, j, _, h, M, n, o, r, l, p, x;
    const e = this.actor, s = Math.max(0, Number(((f = (i = e == null ? void 0 : e.system) == null ? void 0 : i.resources) == null ? void 0 : f.morale) ?? 0) || 0), c = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", y = ["3d6", c, d, g].filter(Boolean).join(" ") || "3d6";
    let a = "", u = 0;
    const S = [], m = [];
    if (this._isWeaponAttack && ((_ = (j = game.user) == null ? void 0 : j.targets) != null && _.size)) {
      const b = Array.from(game.user.targets)[0], w = (b == null ? void 0 : b.actor) ?? null;
      a = (w == null ? void 0 : w.name) || (b == null ? void 0 : b.name) || "", (M = (h = w == null ? void 0 : w.statuses) == null ? void 0 : h.has) != null && M.call(h, "stunned") && (u = 1, S.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return (o = (n = e == null ? void 0 : e.statuses) == null ? void 0 : n.has) != null && o.call(n, "diseased") && m.push(game.i18n.localize("VOTV.StatusDiseased")), (l = (r = e == null ? void 0 : e.statuses) == null ? void 0 : r.has) != null && l.call(r, "poisoned") && m.push(game.i18n.localize("VOTV.StatusPoisoned")), (x = (p = e == null ? void 0 : e.statuses) == null ? void 0 : p.has) != null && x.call(p, "intoxicated") && this._skillKey !== "music" && this._skillKey !== "luck" && m.push(game.i18n.localize("VOTV.StatusIntoxicated")), {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: y,
      moraleCurrent: s,
      advantageValue: u,
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
    var s, c, d, g, y, a, u, S, m, i, f, j, _;
    const e = this.actor;
    if (e)
      try {
        const h = t.querySelector("[name='moraleDice']"), M = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((h == null ? void 0 : h.value) ?? "0", 10) || 0)), r = Math.max(0, Number(((c = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : c.morale) ?? 0) || 0), l = Math.min(o, r);
        let p = Math.min(3, Math.max(-3, parseInt((M == null ? void 0 : M.value) ?? "0", 10) || 0));
        ((g = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : g.call(d, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (p = Math.max(-3, p - 1));
        const L = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, b = this._baseModifier, w = this._injuryModifier, D = this._injuryPenalty || 0, v = ((a = (y = e.statuses) == null ? void 0 : y.has) == null ? void 0 : a.call(y, "diseased")) || ((S = (u = e.statuses) == null ? void 0 : u.has) == null ? void 0 : S.call(u, "poisoned")) ? -1 : 0, I = b + w + D + L + v, Y = [
          "3d6",
          p > 0 ? `+${p}d6` : p < 0 ? `-${Math.abs(p)}d6` : "",
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
                const K = String(((_ = E.system) == null ? void 0 : _.protectionBonus) ?? "").trim().replace(",", "."), H = Number(K);
                Number.isFinite(H) && ($ += H);
              }
            }
            const z = Z + ee + te + $, W = (Number(q.total ?? 0) || 0) >= z, se = k.name ?? F.name ?? "Célpont";
            let V = null, C = null;
            if (W && k.type === "Karakter")
              try {
                const B = new Roll("1d8");
                await B.evaluate({ async: !0 }), V = Number(B.total ?? 0) || 1, V === 1 ? C = "Fej" : V >= 2 && V <= 4 ? C = "Törzs" : V === 5 || V === 6 ? C = "Karok" : C = "Lábak";
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
              hitLocationRoll: V ?? null,
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
  var a, u;
  if (!P) return;
  const s = Number(((u = (a = P.system) == null ? void 0 : a.skills) == null ? void 0 : u[t]) ?? 0) || 0, c = O.BODY_PART_BY_SKILL[t] ? O._getSkillHealthStatusStatic(P, t) : void 0;
  let d = 0;
  c === 1 ? d = -6 : c === 2 && (d = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: P,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: g
  }).render(!0);
}
function le(P, t) {
  var l, p, x, L, b, w, D, N;
  if (!P || !t) return;
  const e = P, c = (((l = e.system) == null ? void 0 : l.weapons) ?? {})[t] ?? {}, d = ((p = e.system) == null ? void 0 : p.skills) ?? {}, g = ((L = (x = e.items) == null ? void 0 : x.filter) == null ? void 0 : L.call(x, (v) => v.type === "Fegyver")) ?? [], y = (c.itemId ?? "").trim(), a = y ? g.find((v) => v.id === y) ?? null : null, u = ((a == null ? void 0 : a.name) ?? c.name ?? "").trim() || "Fegyver", S = Number(c.bonus || ((b = a == null ? void 0 : a.system) == null ? void 0 : b.bonus) || 0) || 0, m = ((w = a == null ? void 0 : a.system) == null ? void 0 : w.type) || "kinetic", i = (((D = a == null ? void 0 : a.system) == null ? void 0 : D.skillKey) ?? "").trim(), f = i && d[i] !== void 0 ? i : m === "explosive" ? "grenadeUse" : "firearms", j = Number(d[f] || 0) || 0, _ = S + j;
  let h = 0;
  if (P.type === "Karakter") {
    const v = O._getSkillHealthStatusStatic(P, f);
    v === 1 ? h = -6 : v === 2 && (h = -3);
  }
  const M = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.damage) ?? "").trim(), n = (c.damage ?? "").trim(), o = M || n || "";
  new U({
    actor: P,
    skillKey: f,
    label: u,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: h,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? y,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  le as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DHhQAYgs.mjs.map
