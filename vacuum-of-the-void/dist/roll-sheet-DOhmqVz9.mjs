import { V as X, c as _e } from "./vacuum-of-the-void-Bd7E39RE.mjs";
class oe extends Application {
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
      label: r,
      baseModifier: v,
      injuryModifier: g,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: h,
      weaponItemId: i,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: m,
      blockMediumHeavyInThreeQuarterCover: k
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = h || "", this._weaponItemId = i || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!m, this._blockMediumHeavyInThreeQuarterCover = !!k;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var m, k, M, I, S;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((k = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : k.call(m, "form.votv.roll-sheet")) ?? ((I = (M = this.element) == null ? void 0 : M.matches) != null && I.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), v = a.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), v.forEach((l) => {
        const c = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", c === o);
      });
    };
    v.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), g((r == null ? void 0 : r.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), h = a.querySelectorAll(".roll-sheet-morale-d8"), i = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), d && (d.value = String(o)), h.forEach((l, c) => {
        l.classList.toggle("selected", c < o), l.style.pointerEvents = c < s ? "" : "none", l.style.opacity = c < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const l = n.dataset.moraleValue ?? "0";
        i(l), t._updateFormulaPreview(a);
      });
    }), i((d == null ? void 0 : d.value) ?? "0");
    const p = a.querySelector("input[name='constantBonus']");
    p && p.addEventListener("input", () => t._updateFormulaPreview(a)), p && p.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, l, c, f;
      if ((l = (o = n.target) == null ? void 0 : o.closest) != null && l.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (f = (c = n.target) == null ? void 0 : c.closest) != null && f.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var m, k, M, I, S, n, o, l, c, f, j, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((m = t.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, r = parseInt(((k = t.querySelector("input[name='moraleDice']")) == null ? void 0 : k.value) ?? "0", 10) || 0, v = parseInt(((M = t.querySelector("input[name='constantBonus']")) == null ? void 0 : M.value) ?? "0", 10) || 0, g = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, u = parseInt(((S = t.dataset) == null ? void 0 : S.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, d = (c = (l = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : l.has) != null && c.call(l, "diseased") || (V = (j = (f = this.actor) == null ? void 0 : f.statuses) == null ? void 0 : j.has) != null && V.call(j, "poisoned") ? -1 : 0, h = g + u + s + v + d, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", i[0].appendChild(p), a !== 0) {
      const _ = document.createElement("span");
      _.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const y = document.createElement("img");
      y.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", y.alt = a > 0 ? "előny d6" : "hátrány d6", y.className = "roll-sheet-preview-die", _.appendChild(y), i.push(_);
    }
    if (r > 0) {
      const _ = document.createElement("span");
      _.textContent = ` + ${r} `;
      const y = document.createElement("img");
      y.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", y.alt = "d8", y.className = "roll-sheet-preview-die", _.appendChild(y), i.push(_);
    }
    if (h !== 0) {
      const _ = document.createElement("span");
      _.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, i.push(_);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var n, o, l, c, f, j, V, _, y, D, P, O, z, L;
    const e = this.actor, a = Math.max(0, Number(((o = (n = e == null ? void 0 : e.system) == null ? void 0 : n.resources) == null ? void 0 : o.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", r, v, g].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const h = [], i = [];
    let p = 0;
    if (this._isWeaponAttack && ((c = (l = game.user) == null ? void 0 : l.targets) != null && c.size)) {
      const w = Array.from(game.user.targets)[0], b = (w == null ? void 0 : w.actor) ?? null;
      s = (b == null ? void 0 : b.name) || (w == null ? void 0 : w.name) || "", (j = (f = b == null ? void 0 : b.statuses) == null ? void 0 : f.has) != null && j.call(f, "stunned") && (d = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (_ = (V = b == null ? void 0 : b.statuses) == null ? void 0 : V.has) != null && _.call(V, "dodge") && (p = 1, i.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (D = (y = e == null ? void 0 : e.statuses) == null ? void 0 : y.has) != null && D.call(y, "diseased") && i.push(game.i18n.localize("VOTV.StatusDiseased")), (O = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) != null && O.call(P, "poisoned") && i.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const m = ((L = (z = e == null ? void 0 : e.statuses) == null ? void 0 : z.has) == null ? void 0 : L.call(z, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    m && i.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const k = Math.min(3, Math.max(
      -3,
      d - p + (m ? -1 : 0)
    )), M = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", S = (this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "") || M;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: k,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: i.length ? i.join(", ") : "",
      blockRollWarningMessage: S,
      disableRollButton: this._blockHeavyInHalfCover || this._blockMediumHeavyInThreeQuarterCover,
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
    var S, n, o, l, c;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((S = t.system) == null ? void 0 : S.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (f) => f.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), g = v ? r.find((f) => f.id === v) ?? null : null, u = (l = g == null ? void 0 : g.system) == null ? void 0 : l.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", h = s != null && String(s).trim() !== "", p = Number(d ? u : h ? s : 0) || 0, m = this._skillKey, k = ((c = t.system) == null ? void 0 : c.skills) ?? {}, M = Number(k[m] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && m) {
      const f = X._getSkillHealthStatusStatic(t, m);
      f === 1 ? I = -6 : f === 2 && (I = -3);
    }
    return p + M + I;
  }
  async _doRoll(t) {
    var a, r, v, g, u, s, d, h, i, p, m, k, M, I, S, n, o, l, c, f, j, V, _, y, D, P, O, z, L;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const w = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, b = (w.itemId ?? "").trim(), R = b ? (((v = (r = e.items) == null ? void 0 : r.filter) == null ? void 0 : v.call(r, (C) => C.type === "Fegyver")) ?? []).find((C) => C.id === b) ?? null : null, T = (((g = R == null ? void 0 : R.system) == null ? void 0 : g.size) ?? w.size ?? "").toString().toLowerCase();
        if ((s = (u = e.statuses) == null ? void 0 : u.has) != null && s.call(u, "threequarteredcover") && (T === "medium" || T === "heavy")) {
          const C = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (h = (d = ui.notifications) == null ? void 0 : d.warn) == null || h.call(d, C);
          return;
        }
        if ((p = (i = e.statuses) == null ? void 0 : i.has) != null && p.call(i, "halfcover") && T === "heavy") {
          const C = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (k = (m = ui.notifications) == null ? void 0 : m.warn) == null || k.call(m, C);
          return;
        }
      }
      try {
        const H = t.querySelector("[name='moraleDice']"), w = t.querySelector("[name='advantage']"), b = t.querySelector("[name='constantBonus']"), R = Math.min(3, Math.max(0, parseInt((H == null ? void 0 : H.value) ?? "0", 10) || 0)), T = Math.max(0, Number(((I = (M = e.system) == null ? void 0 : M.resources) == null ? void 0 : I.morale) ?? 0) || 0), C = Math.min(R, T), x = Math.min(3, Math.max(-3, parseInt((w == null ? void 0 : w.value) ?? "0", 10) || 0)), W = parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0, U = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, F = this._isWeaponAttack ? 0 : this._injuryModifier, ie = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, re = ((n = (S = e.statuses) == null ? void 0 : S.has) == null ? void 0 : n.call(S, "diseased")) || ((l = (o = e.statuses) == null ? void 0 : o.has) == null ? void 0 : l.call(o, "poisoned")) ? -1 : 0, G = U + F + ie + W + re, le = [
          "3d6",
          x > 0 ? `+${x}d6` : x < 0 ? `-${Math.abs(x)}d6` : "",
          C > 0 ? `+${C}d8` : "",
          G !== 0 ? G > 0 ? `+${G}` : `${G}` : ""
        ].filter(Boolean).join(" "), $ = new Roll(le);
        await $.evaluate({ async: !0 });
        const { resultType: ce, label: ue } = _e($), de = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let me = this._label;
        const Z = { resultType: ce, critLabel: ue };
        if (this._isWeaponAttack && ((f = (c = game.user) == null ? void 0 : c.targets) != null && f.size)) {
          const A = Array.from(game.user.targets)[0], B = (A == null ? void 0 : A.actor) ?? null;
          if (B) {
            const ee = ((j = B.system) == null ? void 0 : j.combat) ?? {}, he = Number(ee.defense ?? 0) || 0, pe = Number(ee.defenseBonus ?? 0) || 0, fe = Number(ee.givenProtection ?? 0) || 0, ve = (_ = (V = B.statuses) == null ? void 0 : V.has) != null && _.call(V, "lookaround") ? 1 : 0, ye = (D = (y = B.statuses) == null ? void 0 : y.has) != null && D.call(y, "halfcover") ? 3 : 0, ge = (O = (P = B.statuses) == null ? void 0 : P.has) != null && O.call(P, "threequarteredcover") ? 6 : 0;
            let te = 0;
            if (B.type === "Karakter") {
              const E = (((z = B.items) == null ? void 0 : z.contents) ?? []).filter(
                (Y) => {
                  var J;
                  return Y.type === "Pancel" && ((J = Y.system) == null ? void 0 : J.equipped) === !0;
                }
              );
              for (const Y of E) {
                const J = String(((L = Y.system) == null ? void 0 : L.protectionBonus) ?? "").trim().replace(",", "."), ne = Number(J);
                Number.isFinite(ne) && (te += ne);
              }
            }
            const Se = fe + te + ve + ye + ge, se = he + pe + Se, ae = (Number($.total ?? 0) || 0) >= se, be = B.name ?? A.name ?? "Célpont";
            let q = null, Q = null;
            if (ae && B.type === "Karakter")
              try {
                const E = new Roll("1d8");
                await E.evaluate({ async: !0 }), q = Number(E.total ?? 0) || 1, q === 1 ? Q = "Fej" : q >= 2 && q <= 4 ? Q = "Törzs" : q === 5 || q === 6 ? Q = "Karok" : Q = "Lábak";
              } catch (E) {
                console.warn("VOTV hit location roll failed:", E);
              }
            Z.weaponAttack = !0, Z.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: B.id ?? null,
              targetName: be,
              defense: se,
              isHit: ae,
              hitLocationRoll: q ?? null,
              hitLocationName: Q ?? null
            };
          }
        }
        if (await $.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: me,
          flags: { "vacuum-of-the-void": Z },
          rollMode: de
        }), C > 0) {
          const K = Math.max(0, T - C);
          await e.update({ "system.resources.morale": K });
        }
        if (this._isInitiativeRoll)
          try {
            const K = Number($.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": K });
            const A = e.apps ?? [];
            for (const B of A)
              typeof (B == null ? void 0 : B.render) == "function" && B.render(!0);
          } catch (K) {
            console.warn("VOTV initiative result update:", K);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ie(N, t, e) {
  var s, d;
  if (!N) return;
  const a = Number(((d = (s = N.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, r = X.BODY_PART_BY_SKILL[t] ? X._getSkillHealthStatusStatic(N, t) : void 0;
  let v = 0;
  r === 1 ? v = -6 : r === 2 && (v = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new oe({
    actor: N,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: g
  }).render(!0);
}
function Ce(N, t) {
  var z, L, H, w, b, R, T, C, x, W, U;
  if (!N || !t) return;
  const e = N, r = (((z = e.system) == null ? void 0 : z.weapons) ?? {})[t] ?? {}, v = ((L = e.system) == null ? void 0 : L.skills) ?? {}, g = ((w = (H = e.items) == null ? void 0 : H.filter) == null ? void 0 : w.call(H, (F) => F.type === "Fegyver")) ?? [], u = (r.itemId ?? "").trim(), s = u ? g.find((F) => F.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", h = (b = s == null ? void 0 : s.system) == null ? void 0 : b.bonus, i = r.bonus, p = h != null && String(h).trim() !== "", m = i != null && String(i).trim() !== "", M = Number(p ? h : m ? i : 0) || 0, I = ((R = s == null ? void 0 : s.system) == null ? void 0 : R.type) || "kinetic", S = (((T = s == null ? void 0 : s.system) == null ? void 0 : T.skillKey) ?? "").trim(), n = S && v[S] !== void 0 ? S : I === "explosive" ? "grenadeUse" : "firearms", o = Number(v[n] || 0) || 0, l = M + o;
  let c = 0;
  if (e.type === "Karakter") {
    const F = X._getSkillHealthStatusStatic(e, n);
    F === 1 ? c = -6 : F === 2 && (c = -3);
  }
  const f = (((C = s == null ? void 0 : s.system) == null ? void 0 : C.damage) ?? "").trim(), j = (r.damage ?? "").trim(), V = f || j || "", _ = ((x = s == null ? void 0 : s.system) == null ? void 0 : x.size) ?? r.size ?? "", y = String(_).toLowerCase() === "heavy", D = ((U = (W = e.statuses) == null ? void 0 : W.has) == null ? void 0 : U.call(W, "halfcover")) ?? !1, P = y && D;
  new oe({
    actor: N,
    skillKey: n,
    label: d,
    baseModifier: l,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: V,
    blockHeavyInHalfCover: P
  }).render(!0);
}
export {
  oe as VoidRollSheet,
  Ie as openRollSheetForSkill,
  Ce as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DOhmqVz9.mjs.map
