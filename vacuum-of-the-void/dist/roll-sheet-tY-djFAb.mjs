import { V as G, c as re } from "./vacuum-of-the-void-CeM07IST.mjs";
class te extends Application {
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
      skillKey: a,
      label: c,
      baseModifier: f,
      injuryModifier: S,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: h,
      weaponItemId: l,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = c ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = h || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var y, I, M, _, b;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((I = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : I.call(y, "form.votv.roll-sheet")) ?? ((_ = (M = this.element) == null ? void 0 : M.matches) != null && _.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const c = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), S = (n) => {
      const i = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      c && (c.value = String(i)), f.forEach((o) => {
        const r = parseInt(o.dataset.advantageValue ?? "0", 10);
        o.classList.toggle("selected", r === i);
      });
    };
    f.forEach((n) => {
      n.addEventListener("click", (i) => {
        i.preventDefault(), S(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), S((c == null ? void 0 : c.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((b = u == null ? void 0 : u.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), h = a.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
      let i = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      i = Math.min(i, s), d && (d.value = String(i)), h.forEach((o, r) => {
        o.classList.toggle("selected", r < i), o.style.pointerEvents = r < s ? "" : "none", o.style.opacity = r < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (i) => {
        if (i.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const o = n.dataset.moraleValue ?? "0";
        l(o), t._updateFormulaPreview(a);
      });
    }), l((d == null ? void 0 : d.value) ?? "0");
    const p = a.querySelector("input[name='constantBonus']");
    p && p.addEventListener("input", () => t._updateFormulaPreview(a)), p && p.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var i, o, r, m;
      if ((o = (i = n.target) == null ? void 0 : i.closest) != null && o.call(i, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (m = (r = n.target) == null ? void 0 : r.closest) != null && m.call(r, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var y, I, M, _, b, n, i, o, r, m, P, B;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, c = parseInt(((I = t.querySelector("input[name='moraleDice']")) == null ? void 0 : I.value) ?? "0", 10) || 0, f = parseInt(((M = t.querySelector("input[name='constantBonus']")) == null ? void 0 : M.value) ?? "0", 10) || 0, S = parseInt(((_ = t.dataset) == null ? void 0 : _.baseMod) ?? "0", 10) || 0, u = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, d = (r = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && r.call(o, "diseased") || (B = (P = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : P.has) != null && B.call(P, "poisoned") ? -1 : 0, h = S + u + s + f + d, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", l[0].appendChild(p), a !== 0) {
      const g = document.createElement("span");
      g.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const v = document.createElement("img");
      v.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", v.alt = a > 0 ? "előny d6" : "hátrány d6", v.className = "roll-sheet-preview-die", g.appendChild(v), l.push(g);
    }
    if (c > 0) {
      const g = document.createElement("span");
      g.textContent = ` + ${c} `;
      const v = document.createElement("img");
      v.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", v.alt = "d8", v.className = "roll-sheet-preview-die", g.appendChild(v), l.push(g);
    }
    if (h !== 0) {
      const g = document.createElement("span");
      g.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, l.push(g);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var _, b, n, i, o, r, m, P, B, g, v, D, L, A;
    const e = this.actor, a = Math.max(0, Number(((b = (_ = e == null ? void 0 : e.system) == null ? void 0 : _.resources) == null ? void 0 : b.morale) ?? 0) || 0), c = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", c, f, S].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const h = [], l = [];
    let p = 0;
    if (this._isWeaponAttack && ((i = (n = game.user) == null ? void 0 : n.targets) != null && i.size)) {
      const V = Array.from(game.user.targets)[0], w = (V == null ? void 0 : V.actor) ?? null;
      s = (w == null ? void 0 : w.name) || (V == null ? void 0 : V.name) || "", (r = (o = w == null ? void 0 : w.statuses) == null ? void 0 : o.has) != null && r.call(o, "stunned") && (d = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (P = (m = w == null ? void 0 : w.statuses) == null ? void 0 : m.has) != null && P.call(m, "dodge") && (p = 1, l.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (g = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && g.call(B, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (D = (v = e == null ? void 0 : e.statuses) == null ? void 0 : v.has) != null && D.call(v, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const y = ((A = (L = e == null ? void 0 : e.statuses) == null ? void 0 : L.has) == null ? void 0 : A.call(L, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    y && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const I = Math.min(3, Math.max(
      -3,
      d - p + (y ? -1 : 0)
    )), M = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: I,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
      blockHeavyInHalfCoverMessage: M,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: s
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
    var b, n, i, o, r;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((b = t.system) == null ? void 0 : b.weapons) ?? {})[this._weaponSlotKey] ?? {}, c = ((i = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : i.call(n, (m) => m.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), S = f ? c.find((m) => m.id === f) ?? null : null, u = (o = S == null ? void 0 : S.system) == null ? void 0 : o.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", h = s != null && String(s).trim() !== "", p = Number(d ? u : h ? s : 0) || 0, y = this._skillKey, I = ((r = t.system) == null ? void 0 : r.skills) ?? {}, M = Number(I[y] ?? 0) || 0;
    let _ = 0;
    if (t.type === "Karakter" && y) {
      const m = G._getSkillHealthStatusStatic(t, y);
      m === 1 ? _ = -6 : m === 2 && (_ = -3);
    }
    return p + M + _;
  }
  async _doRoll(t) {
    var a, c, f, S, u, s, d, h, l, p, y, I, M, _, b, n, i;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._blockHeavyInHalfCover) {
        const o = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
        (c = (a = ui.notifications) == null ? void 0 : a.warn) == null || c.call(a, o);
        return;
      }
      try {
        const o = t.querySelector("[name='moraleDice']"), r = t.querySelector("[name='advantage']"), m = t.querySelector("[name='constantBonus']"), P = Math.min(3, Math.max(0, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), B = Math.max(0, Number(((S = (f = e.system) == null ? void 0 : f.resources) == null ? void 0 : S.morale) ?? 0) || 0), g = Math.min(P, B), v = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), D = parseInt((m == null ? void 0 : m.value) ?? "0", 10) || 0, L = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, A = this._isWeaponAttack ? 0 : this._injuryModifier, O = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, w = ((s = (u = e.statuses) == null ? void 0 : u.has) == null ? void 0 : s.call(u, "diseased")) || ((h = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : h.call(d, "poisoned")) ? -1 : 0, F = L + A + O + D + w, K = [
          "3d6",
          v > 0 ? `+${v}d6` : v < 0 ? `-${Math.abs(v)}d6` : "",
          g > 0 ? `+${g}d8` : "",
          F !== 0 ? F > 0 ? `+${F}` : `${F}` : ""
        ].filter(Boolean).join(" "), N = new Roll(K);
        await N.evaluate({ async: !0 });
        const { resultType: W, label: E } = re(N), $ = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let R = this._label;
        const z = { resultType: W, critLabel: E };
        if (this._isWeaponAttack && ((p = (l = game.user) == null ? void 0 : l.targets) != null && p.size)) {
          const H = Array.from(game.user.targets)[0], k = (H == null ? void 0 : H.actor) ?? null;
          if (k) {
            const J = ((y = k.system) == null ? void 0 : y.combat) ?? {}, se = Number(J.defense ?? 0) || 0, ae = Number(J.defenseBonus ?? 0) || 0, ne = Number(J.givenProtection ?? 0) || 0, oe = (M = (I = k.statuses) == null ? void 0 : I.has) != null && M.call(I, "lookaround") ? 1 : 0, ie = (b = (_ = k.statuses) == null ? void 0 : _.has) != null && b.call(_, "halfcover") ? 3 : 0;
            let Q = 0;
            if (k.type === "Karakter") {
              const T = (((n = k.items) == null ? void 0 : n.contents) ?? []).filter(
                (U) => {
                  var Y;
                  return U.type === "Pancel" && ((Y = U.system) == null ? void 0 : Y.equipped) === !0;
                }
              );
              for (const U of T) {
                const Y = String(((i = U.system) == null ? void 0 : i.protectionBonus) ?? "").trim().replace(",", "."), ee = Number(Y);
                Number.isFinite(ee) && (Q += ee);
              }
            }
            const X = se + ae + ne + Q + oe + ie, Z = (Number(N.total ?? 0) || 0) >= X, le = k.name ?? H.name ?? "Célpont";
            let x = null, q = null;
            if (Z && k.type === "Karakter")
              try {
                const T = new Roll("1d8");
                await T.evaluate({ async: !0 }), x = Number(T.total ?? 0) || 1, x === 1 ? q = "Fej" : x >= 2 && x <= 4 ? q = "Törzs" : x === 5 || x === 6 ? q = "Karok" : q = "Lábak";
              } catch (T) {
                console.warn("VOTV hit location roll failed:", T);
              }
            z.weaponAttack = !0, z.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: k.id ?? null,
              targetName: le,
              defense: X,
              isHit: Z,
              hitLocationRoll: x ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await N.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: R,
          flags: { "vacuum-of-the-void": z },
          rollMode: $
        }), g > 0) {
          const j = Math.max(0, B - g);
          await e.update({ "system.resources.morale": j });
        }
        if (this._isInitiativeRoll)
          try {
            const j = Number(N.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": j });
            const H = e.apps ?? [];
            for (const k of H)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (j) {
            console.warn("VOTV initiative result update:", j);
          }
      } finally {
        this.close();
      }
    }
  }
}
function de(C, t, e) {
  var s, d;
  if (!C) return;
  const a = Number(((d = (s = C.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, c = G.BODY_PART_BY_SKILL[t] ? G._getSkillHealthStatusStatic(C, t) : void 0;
  let f = 0;
  c === 1 ? f = -6 : c === 2 && (f = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new te({
    actor: C,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: S
  }).render(!0);
}
function me(C, t) {
  var O, V, w, F, K, N, W, E, $, R, z;
  if (!C || !t) return;
  const e = C, c = (((O = e.system) == null ? void 0 : O.weapons) ?? {})[t] ?? {}, f = ((V = e.system) == null ? void 0 : V.skills) ?? {}, S = ((F = (w = e.items) == null ? void 0 : w.filter) == null ? void 0 : F.call(w, (j) => j.type === "Fegyver")) ?? [], u = (c.itemId ?? "").trim(), s = u ? S.find((j) => j.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? c.name ?? "").trim() || "Fegyver", h = (K = s == null ? void 0 : s.system) == null ? void 0 : K.bonus, l = c.bonus, p = h != null && String(h).trim() !== "", y = l != null && String(l).trim() !== "", M = Number(p ? h : y ? l : 0) || 0, _ = ((N = s == null ? void 0 : s.system) == null ? void 0 : N.type) || "kinetic", b = (((W = s == null ? void 0 : s.system) == null ? void 0 : W.skillKey) ?? "").trim(), n = b && f[b] !== void 0 ? b : _ === "explosive" ? "grenadeUse" : "firearms", i = Number(f[n] || 0) || 0, o = M + i;
  let r = 0;
  if (e.type === "Karakter") {
    const j = G._getSkillHealthStatusStatic(e, n);
    j === 1 ? r = -6 : j === 2 && (r = -3);
  }
  const m = (((E = s == null ? void 0 : s.system) == null ? void 0 : E.damage) ?? "").trim(), P = (c.damage ?? "").trim(), B = m || P || "", g = (($ = s == null ? void 0 : s.system) == null ? void 0 : $.size) ?? c.size ?? "", v = String(g).toLowerCase() === "heavy", D = ((z = (R = e.statuses) == null ? void 0 : R.has) == null ? void 0 : z.call(R, "halfcover")) ?? !1, L = v && D;
  new te({
    actor: C,
    skillKey: n,
    label: d,
    baseModifier: o,
    injuryModifier: 0,
    injuryPenalty: r,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: B,
    blockHeavyInHalfCover: L
  }).render(!0);
}
export {
  te as VoidRollSheet,
  de as openRollSheetForSkill,
  me as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-tY-djFAb.mjs.map
