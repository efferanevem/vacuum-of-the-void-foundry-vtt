import { V as te, c as Me } from "./vacuum-of-the-void-CcCWmxfF.mjs";
class ce extends Application {
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
      label: i,
      baseModifier: y,
      injuryModifier: g,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: h,
      weaponItemId: r,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: m,
      blockMediumHeavyInThreeQuarterCover: w
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(y) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = h || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!m, this._blockMediumHeavyInThreeQuarterCover = !!w;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var m, w, M, I, S;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((w = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : w.call(m, "form.votv.roll-sheet")) ?? ((I = (M = this.element) == null ? void 0 : M.matches) != null && I.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), y = a.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(o)), y.forEach((l) => {
        const c = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", c === o);
      });
    };
    y.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), g((i == null ? void 0 : i.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), h = a.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), d && (d.value = String(o)), h.forEach((l, c) => {
        l.classList.toggle("selected", c < o), l.style.pointerEvents = c < s ? "" : "none", l.style.opacity = c < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const l = n.dataset.moraleValue ?? "0";
        r(l), t._updateFormulaPreview(a);
      });
    }), r((d == null ? void 0 : d.value) ?? "0");
    const p = a.querySelector("input[name='constantBonus']");
    p && p.addEventListener("input", () => t._updateFormulaPreview(a)), p && p.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, l, c, v;
      if ((l = (o = n.target) == null ? void 0 : o.closest) != null && l.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (v = (c = n.target) == null ? void 0 : c.closest) != null && v.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var m, w, M, I, S, n, o, l, c, v, j, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((m = t.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, i = parseInt(((w = t.querySelector("input[name='moraleDice']")) == null ? void 0 : w.value) ?? "0", 10) || 0, y = parseInt(((M = t.querySelector("input[name='constantBonus']")) == null ? void 0 : M.value) ?? "0", 10) || 0, g = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, u = parseInt(((S = t.dataset) == null ? void 0 : S.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, d = (c = (l = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : l.has) != null && c.call(l, "diseased") || (V = (j = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : j.has) != null && V.call(j, "poisoned") ? -1 : 0, h = g + u + s + y + d, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", r[0].appendChild(p), a !== 0) {
      const b = document.createElement("span");
      b.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const f = document.createElement("img");
      f.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", f.alt = a > 0 ? "előny d6" : "hátrány d6", f.className = "roll-sheet-preview-die", b.appendChild(f), r.push(b);
    }
    if (i > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${i} `;
      const f = document.createElement("img");
      f.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", f.alt = "d8", f.className = "roll-sheet-preview-die", b.appendChild(f), r.push(b);
    }
    if (h !== 0) {
      const b = document.createElement("span");
      b.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, r.push(b);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var n, o, l, c, v, j, V, b, f, R, P, F, T, D;
    const e = this.actor, a = Math.max(0, Number(((o = (n = e == null ? void 0 : e.system) == null ? void 0 : n.resources) == null ? void 0 : o.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", i, y, g].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const h = [], r = [];
    let p = 0;
    if (this._isWeaponAttack && ((c = (l = game.user) == null ? void 0 : l.targets) != null && c.size)) {
      const k = Array.from(game.user.targets)[0], _ = (k == null ? void 0 : k.actor) ?? null;
      s = (_ == null ? void 0 : _.name) || (k == null ? void 0 : k.name) || "", (j = (v = _ == null ? void 0 : _.statuses) == null ? void 0 : v.has) != null && j.call(v, "stunned") && (d = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (b = (V = _ == null ? void 0 : _.statuses) == null ? void 0 : V.has) != null && b.call(V, "dodge") && (p = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (R = (f = e == null ? void 0 : e.statuses) == null ? void 0 : f.has) != null && R.call(f, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (F = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) != null && F.call(P, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const m = ((D = (T = e == null ? void 0 : e.statuses) == null ? void 0 : T.has) == null ? void 0 : D.call(T, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    m && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const w = Math.min(3, Math.max(
      -3,
      d - p + (m ? -1 : 0)
    )), M = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", S = (this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "") || M;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: w,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: r.length ? r.join(", ") : "",
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
    const t = this.actor, a = (((S = t.system) == null ? void 0 : S.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (v) => v.type === "Fegyver")) ?? [], y = (a.itemId ?? "").trim(), g = y ? i.find((v) => v.id === y) ?? null : null, u = (l = g == null ? void 0 : g.system) == null ? void 0 : l.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", h = s != null && String(s).trim() !== "", p = Number(d ? u : h ? s : 0) || 0, m = this._skillKey, w = ((c = t.system) == null ? void 0 : c.skills) ?? {}, M = Number(w[m] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && m) {
      const v = te._getSkillHealthStatusStatic(t, m);
      v === 1 ? I = -6 : v === 2 && (I = -3);
    }
    return p + M + I;
  }
  async _doRoll(t) {
    var a, i, y, g, u, s, d, h, r, p, m, w, M, I, S, n, o, l, c, v, j, V, b, f, R, P, F, T, D;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const k = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, _ = (k.itemId ?? "").trim(), z = _ ? (((y = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : y.call(i, (C) => C.type === "Fegyver")) ?? []).find((C) => C.id === _) ?? null : null, N = (((g = z == null ? void 0 : z.system) == null ? void 0 : g.size) ?? k.size ?? "").toString().toLowerCase();
        if ((s = (u = e.statuses) == null ? void 0 : u.has) != null && s.call(u, "threequarteredcover") && (N === "medium" || N === "heavy")) {
          const C = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (h = (d = ui.notifications) == null ? void 0 : d.warn) == null || h.call(d, C);
          return;
        }
        if ((p = (r = e.statuses) == null ? void 0 : r.has) != null && p.call(r, "halfcover") && N === "heavy") {
          const C = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (w = (m = ui.notifications) == null ? void 0 : m.warn) == null || w.call(m, C);
          return;
        }
      }
      try {
        const O = t.querySelector("[name='moraleDice']"), k = t.querySelector("[name='advantage']"), _ = t.querySelector("[name='constantBonus']"), z = Math.min(3, Math.max(0, parseInt((O == null ? void 0 : O.value) ?? "0", 10) || 0)), N = Math.max(0, Number(((I = (M = e.system) == null ? void 0 : M.resources) == null ? void 0 : I.morale) ?? 0) || 0), C = Math.min(z, N), x = Math.min(3, Math.max(-3, parseInt((k == null ? void 0 : k.value) ?? "0", 10) || 0)), Y = parseInt((_ == null ? void 0 : _.value) ?? "0", 10) || 0, J = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, X = this._isWeaponAttack ? 0 : this._injuryModifier, K = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, A = ((n = (S = e.statuses) == null ? void 0 : S.has) == null ? void 0 : n.call(S, "diseased")) || ((l = (o = e.statuses) == null ? void 0 : o.has) == null ? void 0 : l.call(o, "poisoned")) ? -1 : 0, q = J + X + K + Y + A, L = [
          "3d6",
          x > 0 ? `+${x}d6` : x < 0 ? `-${Math.abs(x)}d6` : "",
          C > 0 ? `+${C}d8` : "",
          q !== 0 ? q > 0 ? `+${q}` : `${q}` : ""
        ].filter(Boolean).join(" "), U = new Roll(L);
        await U.evaluate({ async: !0 });
        const { resultType: ue, label: de } = Me(U), me = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let he = this._label;
        const ae = { resultType: ue, critLabel: de };
        if (this._isWeaponAttack && ((v = (c = game.user) == null ? void 0 : c.targets) != null && v.size)) {
          const $ = Array.from(game.user.targets)[0], B = ($ == null ? void 0 : $.actor) ?? null;
          if (B) {
            const ne = ((j = B.system) == null ? void 0 : j.combat) ?? {}, pe = Number(ne.defense ?? 0) || 0, ve = Number(ne.defenseBonus ?? 0) || 0, fe = Number(ne.givenProtection ?? 0) || 0, ye = (b = (V = B.statuses) == null ? void 0 : V.has) != null && b.call(V, "lookaround") ? 1 : 0, ge = (R = (f = B.statuses) == null ? void 0 : f.has) != null && R.call(f, "halfcover") ? 3 : 0, Se = (F = (P = B.statuses) == null ? void 0 : P.has) != null && F.call(P, "threequarteredcover") ? 6 : 0;
            let oe = 0;
            if (B.type === "Karakter") {
              const Q = (((T = B.items) == null ? void 0 : T.contents) ?? []).filter(
                (Z) => {
                  var ee;
                  return Z.type === "Pancel" && ((ee = Z.system) == null ? void 0 : ee.equipped) === !0;
                }
              );
              for (const Z of Q) {
                const ee = String(((D = Z.system) == null ? void 0 : D.protectionBonus) ?? "").trim().replace(",", "."), le = Number(ee);
                Number.isFinite(le) && (oe += le);
              }
            }
            const be = fe + oe + ye + ge + Se, re = pe + ve + be, ie = (Number(U.total ?? 0) || 0) >= re, _e = B.name ?? $.name ?? "Célpont";
            let W = null, G = null;
            if (ie && B.type === "Karakter")
              try {
                const Q = new Roll("1d8");
                await Q.evaluate({ async: !0 }), W = Number(Q.total ?? 0) || 1, W === 1 ? G = "Fej" : W >= 2 && W <= 4 ? G = "Törzs" : W === 5 || W === 6 ? G = "Karok" : G = "Lábak";
              } catch (Q) {
                console.warn("VOTV hit location roll failed:", Q);
              }
            ae.weaponAttack = !0, ae.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: B.id ?? null,
              targetName: _e,
              defense: re,
              isHit: ie,
              hitLocationRoll: W ?? null,
              hitLocationName: G ?? null
            };
          }
        }
        if (await U.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: he,
          flags: { "vacuum-of-the-void": ae },
          rollMode: me
        }), C > 0) {
          const E = Math.max(0, N - C);
          await e.update({ "system.resources.morale": E });
        }
        if (this._isInitiativeRoll)
          try {
            const E = Number(U.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": E });
            const $ = e.apps ?? [];
            for (const B of $)
              typeof (B == null ? void 0 : B.render) == "function" && B.render(!0);
          } catch (E) {
            console.warn("VOTV initiative result update:", E);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ie(H, t, e) {
  var s, d;
  if (!H) return;
  const a = Number(((d = (s = H.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, i = te.BODY_PART_BY_SKILL[t] ? te._getSkillHealthStatusStatic(H, t) : void 0;
  let y = 0;
  i === 1 ? y = -6 : i === 2 && (y = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new ce({
    actor: H,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: y,
    isInitiativeRoll: g
  }).render(!0);
}
function Ce(H, t) {
  var k, _, z, N, C, x, Y, J, X, K, se, A, q;
  if (!H || !t) return;
  const e = H, i = (((k = e.system) == null ? void 0 : k.weapons) ?? {})[t] ?? {}, y = ((_ = e.system) == null ? void 0 : _.skills) ?? {}, g = ((N = (z = e.items) == null ? void 0 : z.filter) == null ? void 0 : N.call(z, (L) => L.type === "Fegyver")) ?? [], u = (i.itemId ?? "").trim(), s = u ? g.find((L) => L.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", h = (C = s == null ? void 0 : s.system) == null ? void 0 : C.bonus, r = i.bonus, p = h != null && String(h).trim() !== "", m = r != null && String(r).trim() !== "", M = Number(p ? h : m ? r : 0) || 0, I = ((x = s == null ? void 0 : s.system) == null ? void 0 : x.type) || "kinetic", S = (((Y = s == null ? void 0 : s.system) == null ? void 0 : Y.skillKey) ?? "").trim(), n = S && y[S] !== void 0 ? S : I === "explosive" ? "grenadeUse" : "firearms", o = Number(y[n] || 0) || 0, l = M + o;
  let c = 0;
  if (e.type === "Karakter") {
    const L = te._getSkillHealthStatusStatic(e, n);
    L === 1 ? c = -6 : L === 2 && (c = -3);
  }
  const v = (((J = s == null ? void 0 : s.system) == null ? void 0 : J.damage) ?? "").trim(), j = (i.damage ?? "").trim(), V = v || j || "", b = (((X = s == null ? void 0 : s.system) == null ? void 0 : X.size) ?? i.size ?? "").toString().toLowerCase(), f = b === "heavy", R = b === "medium", P = ((se = (K = e.statuses) == null ? void 0 : K.has) == null ? void 0 : se.call(K, "halfcover")) ?? !1, F = ((q = (A = e.statuses) == null ? void 0 : A.has) == null ? void 0 : q.call(A, "threequarteredcover")) ?? !1, T = f && P, D = F && (R || f);
  new ce({
    actor: H,
    skillKey: n,
    label: d,
    baseModifier: l,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: V,
    blockHeavyInHalfCover: T,
    blockMediumHeavyInThreeQuarterCover: D
  }).render(!0);
}
export {
  ce as VoidRollSheet,
  Ie as openRollSheetForSkill,
  Ce as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DHsUm7FG.mjs.map
