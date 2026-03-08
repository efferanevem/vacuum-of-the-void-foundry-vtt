import { V as E, c as ae } from "./vacuum-of-the-void-Nhuxmktc.mjs";
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
      baseModifier: c,
      injuryModifier: v,
      injuryPenalty: p,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: g,
      weaponItemId: o,
      weaponDamageFormula: r
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(c) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = g || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof r == "string" ? r.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var h, I, _, S, y;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((I = (h = this.element) == null ? void 0 : h.querySelector) == null ? void 0 : I.call(h, "form.votv.roll-sheet")) ?? ((S = (_ = this.element) == null ? void 0 : _.matches) != null && S.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), c = s.querySelectorAll(".roll-sheet-advantage-d6"), v = (n) => {
      const i = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(i)), c.forEach((d) => {
        const l = parseInt(d.dataset.advantageValue ?? "0", 10);
        d.classList.toggle("selected", l === i);
      });
    };
    c.forEach((n) => {
      n.addEventListener("click", (i) => {
        i.preventDefault(), v(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), v((u == null ? void 0 : u.value) ?? "0");
    const p = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((y = p == null ? void 0 : p.dataset) == null ? void 0 : y.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), g = s.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let i = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      i = Math.min(i, a), m && (m.value = String(i)), g.forEach((d, l) => {
        d.classList.toggle("selected", l < i), d.style.pointerEvents = l < a ? "" : "none", d.style.opacity = l < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (i) => {
        if (i.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const d = n.dataset.moraleValue ?? "0";
        o(d), t._updateFormulaPreview(s);
      });
    }), o((m == null ? void 0 : m.value) ?? "0");
    const r = s.querySelector("input[name='constantBonus']");
    r && r.addEventListener("input", () => t._updateFormulaPreview(s)), r && r.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var i, d, l, b;
      if ((d = (i = n.target) == null ? void 0 : i.closest) != null && d.call(i, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (b = (l = n.target) == null ? void 0 : l.closest) != null && b.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var h, I, _, S, y, n, i, d, l, b, w, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((h = t.querySelector("input[name='advantage']")) == null ? void 0 : h.value) ?? "0", 10) || 0, u = parseInt(((I = t.querySelector("input[name='moraleDice']")) == null ? void 0 : I.value) ?? "0", 10) || 0, c = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, v = parseInt(((S = t.dataset) == null ? void 0 : S.baseMod) ?? "0", 10) || 0, p = parseInt(((y = t.dataset) == null ? void 0 : y.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = (l = (d = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : d.has) != null && l.call(d, "diseased") || (V = (w = (b = this.actor) == null ? void 0 : b.statuses) == null ? void 0 : w.has) != null && V.call(w, "poisoned") ? -1 : 0, g = v + p + a + c + m, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const r = document.createElement("img");
    if (r.src = "systems/vacuum-of-the-void/assets/d6.svg", r.alt = "d6", r.className = "roll-sheet-preview-die", o[0].appendChild(r), s !== 0) {
      const f = document.createElement("span");
      f.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const M = document.createElement("img");
      M.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", M.alt = s > 0 ? "előny d6" : "hátrány d6", M.className = "roll-sheet-preview-die", f.appendChild(M), o.push(f);
    }
    if (u > 0) {
      const f = document.createElement("span");
      f.textContent = ` + ${u} `;
      const M = document.createElement("img");
      M.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", M.alt = "d8", M.className = "roll-sheet-preview-die", f.appendChild(M), o.push(f);
    }
    if (g !== 0) {
      const f = document.createElement("span");
      f.textContent = g > 0 ? ` + ${g}` : ` − ${Math.abs(g)}`, o.push(f);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var _, S, y, n, i, d, l, b, w, V, f, M, N, D;
    const e = this.actor, s = Math.max(0, Number(((S = (_ = e == null ? void 0 : e.system) == null ? void 0 : _.resources) == null ? void 0 : S.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", u, c, v].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const g = [], o = [];
    let r = 0;
    if (this._isWeaponAttack && ((n = (y = game.user) == null ? void 0 : y.targets) != null && n.size)) {
      const x = Array.from(game.user.targets)[0], k = (x == null ? void 0 : x.actor) ?? null;
      a = (k == null ? void 0 : k.name) || (x == null ? void 0 : x.name) || "", (d = (i = k == null ? void 0 : k.statuses) == null ? void 0 : i.has) != null && d.call(i, "stunned") && (m = 1, g.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (b = (l = k == null ? void 0 : k.statuses) == null ? void 0 : l.has) != null && b.call(l, "dodge") && (r = 1, o.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (V = (w = e == null ? void 0 : e.statuses) == null ? void 0 : w.has) != null && V.call(w, "diseased") && o.push(game.i18n.localize("VOTV.StatusDiseased")), (M = (f = e == null ? void 0 : e.statuses) == null ? void 0 : f.has) != null && M.call(f, "poisoned") && o.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const h = ((D = (N = e == null ? void 0 : e.statuses) == null ? void 0 : N.has) == null ? void 0 : D.call(N, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    h && o.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const I = Math.min(3, Math.max(
      -3,
      m - r + (h ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: s,
      advantageValue: I,
      advantageSourcesText: g.length ? g.join(", ") : "",
      disadvantageSourcesText: o.length ? o.join(", ") : "",
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
  /**
   * Fegyvertámadásnál a lap megnyitásakor rögzített bónusz helyett mindig a jelenlegi actor/slot adatot használjuk.
   * @returns {number} baseModifier a dobáshoz (weaponBonus + skillBonus; Karakternél + injuryPenalty)
   */
  _getCurrentWeaponBaseModifier() {
    var r, h, I, _, S;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor.id ? game.actors.get(this.actor.id) ?? this.actor : this.actor, s = (((r = t.system) == null ? void 0 : r.weapons) ?? {})[this._weaponSlotKey] ?? {}, u = ((I = (h = t.items) == null ? void 0 : h.filter) == null ? void 0 : I.call(h, (y) => y.type === "Fegyver")) ?? [], c = (s.itemId ?? "").trim(), v = c ? u.find((y) => y.id === c) ?? null : null, p = Number(s.bonus || ((_ = v == null ? void 0 : v.system) == null ? void 0 : _.bonus) || 0) || 0, a = this._skillKey, m = ((S = t.system) == null ? void 0 : S.skills) ?? {}, g = Number(m[a] ?? 0) || 0;
    let o = 0;
    if (t.type === "Karakter" && a) {
      const y = E._getSkillHealthStatusStatic(t, a);
      y === 1 ? o = -6 : y === 2 && (o = -3);
    }
    return p + g + o;
  }
  async _doRoll(t) {
    var s, u, c, v, p, a, m, g, o, r, h, I, _;
    const e = this.actor;
    if (e)
      try {
        const S = t.querySelector("[name='moraleDice']"), y = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), i = Math.min(3, Math.max(0, parseInt((S == null ? void 0 : S.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), l = Math.min(i, d), b = Math.min(3, Math.max(-3, parseInt((y == null ? void 0 : y.value) ?? "0", 10) || 0)), w = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, V = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, f = this._injuryModifier, M = this._injuryPenalty || 0, D = ((v = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : v.call(c, "diseased")) || ((a = (p = e.statuses) == null ? void 0 : p.has) == null ? void 0 : a.call(p, "poisoned")) ? -1 : 0, P = V + f + M + w + D, x = [
          "3d6",
          b > 0 ? `+${b}d6` : b < 0 ? `-${Math.abs(b)}d6` : "",
          l > 0 ? `+${l}d8` : "",
          P !== 0 ? P > 0 ? `+${P}` : `${P}` : ""
        ].filter(Boolean).join(" "), k = new Roll(x);
        await k.evaluate({ async: !0 });
        const { resultType: Y, label: G } = ae(k), J = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const O = { resultType: Y, critLabel: G };
        if (this._isWeaponAttack && ((g = (m = game.user) == null ? void 0 : m.targets) != null && g.size)) {
          const R = Array.from(game.user.targets)[0], j = (R == null ? void 0 : R.actor) ?? null;
          if (j) {
            const A = ((o = j.system) == null ? void 0 : o.combat) ?? {}, X = Number(A.defense ?? 0) || 0, Z = Number(A.defenseBonus ?? 0) || 0, ee = Number(A.givenProtection ?? 0) || 0, te = (h = (r = j.statuses) == null ? void 0 : r.has) != null && h.call(r, "lookaround") ? 1 : 0;
            let $ = 0;
            if (j.type === "Karakter") {
              const C = (((I = j.items) == null ? void 0 : I.contents) ?? []).filter(
                (q) => {
                  var K;
                  return q.type === "Pancel" && ((K = q.system) == null ? void 0 : K.equipped) === !0;
                }
              );
              for (const q of C) {
                const K = String(((_ = q.system) == null ? void 0 : _.protectionBonus) ?? "").trim().replace(",", "."), H = Number(K);
                Number.isFinite(H) && ($ += H);
              }
            }
            const z = X + Z + ee + $ + te, W = (Number(k.total ?? 0) || 0) >= z, se = j.name ?? R.name ?? "Célpont";
            let B = null, T = null;
            if (W && j.type === "Karakter")
              try {
                const C = new Roll("1d8");
                await C.evaluate({ async: !0 }), B = Number(C.total ?? 0) || 1, B === 1 ? T = "Fej" : B >= 2 && B <= 4 ? T = "Törzs" : B === 5 || B === 6 ? T = "Karok" : T = "Lábak";
              } catch (C) {
                console.warn("VOTV hit location roll failed:", C);
              }
            O.weaponAttack = !0, O.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: j.id ?? null,
              targetName: se,
              defense: z,
              isHit: W,
              hitLocationRoll: B ?? null,
              hitLocationName: T ?? null
            };
          }
        }
        if (await k.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": O },
          rollMode: J
        }), l > 0) {
          const F = Math.max(0, d - l);
          await e.update({ "system.resources.morale": F });
        }
        if (this._isInitiativeRoll)
          try {
            const F = Number(k.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": F });
            const R = e.apps ?? [];
            for (const j of R)
              typeof (j == null ? void 0 : j.render) == "function" && j.render(!0);
          } catch (F) {
            console.warn("VOTV initiative result update:", F);
          }
      } finally {
        this.close();
      }
  }
}
function ie(L, t, e) {
  var a, m;
  if (!L) return;
  const s = Number(((m = (a = L.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, u = E.BODY_PART_BY_SKILL[t] ? E._getSkillHealthStatusStatic(L, t) : void 0;
  let c = 0;
  u === 1 ? c = -6 : u === 2 && (c = -3);
  const v = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: c,
    isInitiativeRoll: v
  }).render(!0);
}
function re(L, t) {
  var l, b, w, V, f, M, N, D;
  if (!L || !t) return;
  const e = L, u = (((l = e.system) == null ? void 0 : l.weapons) ?? {})[t] ?? {}, c = ((b = e.system) == null ? void 0 : b.skills) ?? {}, v = ((V = (w = e.items) == null ? void 0 : w.filter) == null ? void 0 : V.call(w, (P) => P.type === "Fegyver")) ?? [], p = (u.itemId ?? "").trim(), a = p ? v.find((P) => P.id === p) ?? null : null, m = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", g = Number(u.bonus || ((f = a == null ? void 0 : a.system) == null ? void 0 : f.bonus) || 0) || 0, o = ((M = a == null ? void 0 : a.system) == null ? void 0 : M.type) || "kinetic", r = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.skillKey) ?? "").trim(), h = r && c[r] !== void 0 ? r : o === "explosive" ? "grenadeUse" : "firearms", I = Number(c[h] || 0) || 0, _ = g + I;
  let S = 0;
  if (L.type === "Karakter") {
    const P = E._getSkillHealthStatusStatic(L, h);
    P === 1 ? S = -6 : P === 2 && (S = -3);
  }
  const y = (((D = a == null ? void 0 : a.system) == null ? void 0 : D.damage) ?? "").trim(), n = (u.damage ?? "").trim(), i = y || n || "";
  new U({
    actor: L,
    skillKey: h,
    label: m,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: S,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? p,
    weaponDamageFormula: i
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-x9a1GS68.mjs.map
