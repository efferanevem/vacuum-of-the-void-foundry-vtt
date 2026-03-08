import { V as ae, c as Ve } from "./vacuum-of-the-void-B2WZnXtm.mjs";
class ue extends Application {
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
      baseModifier: f,
      injuryModifier: S,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: m,
      weaponItemId: n,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: h,
      blockMediumHeavyInThreeQuarterCover: M,
      blockNonThrownInFullCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = m || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!h, this._blockMediumHeavyInThreeQuarterCover = !!M, this._blockNonThrownInFullCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var h, M, y, I, b;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((M = (h = this.element) == null ? void 0 : h.querySelector) == null ? void 0 : M.call(h, "form.votv.roll-sheet")) ?? ((I = (y = this.element) == null ? void 0 : y.matches) != null && I.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), S = (o) => {
      const r = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      i && (i.value = String(r)), f.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    f.forEach((o) => {
      o.addEventListener("click", (r) => {
        r.preventDefault(), S(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), S((i == null ? void 0 : i.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((b = u == null ? void 0 : u.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), m = a.querySelectorAll(".roll-sheet-morale-d8"), n = (o) => {
      let r = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      r = Math.min(r, s), d && (d.value = String(r)), m.forEach((c, l) => {
        c.classList.toggle("selected", l < r), c.style.pointerEvents = l < s ? "" : "none", c.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (r) => {
        if (r.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const c = o.dataset.moraleValue ?? "0";
        n(c), t._updateFormulaPreview(a);
      });
    }), n((d == null ? void 0 : d.value) ?? "0");
    const p = a.querySelector("input[name='constantBonus']");
    p && p.addEventListener("input", () => t._updateFormulaPreview(a)), p && p.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (o) => {
      var r, c, l, v;
      if ((c = (r = o.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (v = (l = o.target) == null ? void 0 : l.closest) != null && v.call(l, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var h, M, y, I, b, o, r, c, l, v, T, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((h = t.querySelector("input[name='advantage']")) == null ? void 0 : h.value) ?? "0", 10) || 0, i = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, f = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, S = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, u = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, d = (l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") || (V = (T = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : T.has) != null && V.call(T, "poisoned") ? -1 : 0, m = S + u + s + f + d, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", n[0].appendChild(p), a !== 0) {
      const _ = document.createElement("span");
      _.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const g = document.createElement("img");
      g.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", g.alt = a > 0 ? "előny d6" : "hátrány d6", g.className = "roll-sheet-preview-die", _.appendChild(g), n.push(_);
    }
    if (i > 0) {
      const _ = document.createElement("span");
      _.textContent = ` + ${i} `;
      const g = document.createElement("img");
      g.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", g.alt = "d8", g.className = "roll-sheet-preview-die", _.appendChild(g), n.push(_);
    }
    if (m !== 0) {
      const _ = document.createElement("span");
      _.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, n.push(_);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var o, r, c, l, v, T, V, _, g, x, B, W, N, q;
    const e = this.actor, a = Math.max(0, Number(((r = (o = e == null ? void 0 : e.system) == null ? void 0 : o.resources) == null ? void 0 : r.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", i, f, S].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const m = [], n = [];
    let p = 0;
    if (this._isWeaponAttack && ((l = (c = game.user) == null ? void 0 : c.targets) != null && l.size)) {
      const j = Array.from(game.user.targets)[0], C = (j == null ? void 0 : j.actor) ?? null;
      s = (C == null ? void 0 : C.name) || (j == null ? void 0 : j.name) || "", (T = (v = C == null ? void 0 : C.statuses) == null ? void 0 : v.has) != null && T.call(v, "stunned") && (d = 1, m.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (_ = (V = C == null ? void 0 : C.statuses) == null ? void 0 : V.has) != null && _.call(V, "dodge") && (p = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (x = (g = e == null ? void 0 : e.statuses) == null ? void 0 : g.has) != null && x.call(g, "diseased") && n.push(game.i18n.localize("VOTV.StatusDiseased")), (W = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && W.call(B, "poisoned") && n.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const h = ((q = (N = e == null ? void 0 : e.statuses) == null ? void 0 : N.has) == null ? void 0 : q.call(N, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    h && n.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const M = Math.min(3, Math.max(
      -3,
      d - p + (h ? -1 : 0)
    )), y = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", b = (this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "") || y;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: M,
      advantageSourcesText: m.length ? m.join(", ") : "",
      disadvantageSourcesText: n.length ? n.join(", ") : "",
      blockRollWarningMessage: b,
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
    var b, o, r, c, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((b = t.system) == null ? void 0 : b.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : r.call(o, (v) => v.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), S = f ? i.find((v) => v.id === f) ?? null : null, u = (c = S == null ? void 0 : S.system) == null ? void 0 : c.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", m = s != null && String(s).trim() !== "", p = Number(d ? u : m ? s : 0) || 0, h = this._skillKey, M = ((l = t.system) == null ? void 0 : l.skills) ?? {}, y = Number(M[h] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && h) {
      const v = ae._getSkillHealthStatusStatic(t, h);
      v === 1 ? I = -6 : v === 2 && (I = -3);
    }
    return p + y + I;
  }
  async _doRoll(t) {
    var a, i, f, S, u, s, d, m, n, p, h, M, y, I, b, o, r, c, l, v, T, V, _, g, x, B, W, N, q, $, j, C, O, K, Y;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const F = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, H = (F.itemId ?? "").trim(), L = H ? (((f = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : f.call(i, (k) => k.type === "Fegyver")) ?? []).find((k) => k.id === H) ?? null : null, z = (((S = L == null ? void 0 : L.system) == null ? void 0 : S.size) ?? F.size ?? "").toString().toLowerCase();
        if ((s = (u = e.statuses) == null ? void 0 : u.has) != null && s.call(u, "fullcover") && z !== "thrown") {
          const k = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (m = (d = ui.notifications) == null ? void 0 : d.warn) == null || m.call(d, k);
          return;
        }
        if ((p = (n = e.statuses) == null ? void 0 : n.has) != null && p.call(n, "threequarteredcover") && (z === "medium" || z === "heavy")) {
          const k = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (M = (h = ui.notifications) == null ? void 0 : h.warn) == null || M.call(h, k);
          return;
        }
        if ((I = (y = e.statuses) == null ? void 0 : y.has) != null && I.call(y, "halfcover") && z === "heavy") {
          const k = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (b = ui.notifications) == null ? void 0 : b.warn) == null || o.call(b, k);
          return;
        }
      }
      try {
        const A = t.querySelector("[name='moraleDice']"), F = t.querySelector("[name='advantage']"), H = t.querySelector("[name='constantBonus']"), L = Math.min(3, Math.max(0, parseInt((A == null ? void 0 : A.value) ?? "0", 10) || 0)), z = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), k = Math.min(L, z), R = Math.min(3, Math.max(-3, parseInt((F == null ? void 0 : F.value) ?? "0", 10) || 0)), Z = parseInt((H == null ? void 0 : H.value) ?? "0", 10) || 0, D = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, de = this._isWeaponAttack ? 0 : this._injuryModifier, he = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, me = ((v = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : v.call(l, "diseased")) || ((V = (T = e.statuses) == null ? void 0 : T.has) == null ? void 0 : V.call(T, "poisoned")) ? -1 : 0, ee = D + de + he + Z + me, pe = [
          "3d6",
          R > 0 ? `+${R}d6` : R < 0 ? `-${Math.abs(R)}d6` : "",
          k > 0 ? `+${k}d8` : "",
          ee !== 0 ? ee > 0 ? `+${ee}` : `${ee}` : ""
        ].filter(Boolean).join(" "), J = new Roll(pe);
        await J.evaluate({ async: !0 });
        const { resultType: ve, label: fe } = Ve(J), ye = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ge = this._label;
        const oe = { resultType: ve, critLabel: fe };
        if (this._isWeaponAttack && ((g = (_ = game.user) == null ? void 0 : _.targets) != null && g.size)) {
          const U = Array.from(game.user.targets)[0], w = (U == null ? void 0 : U.actor) ?? null;
          if (w) {
            const ne = ((x = w.system) == null ? void 0 : x.combat) ?? {}, Se = Number(ne.defense ?? 0) || 0, be = Number(ne.defenseBonus ?? 0) || 0, _e = Number(ne.givenProtection ?? 0) || 0, ke = (W = (B = w.statuses) == null ? void 0 : B.has) != null && W.call(B, "lookaround") ? 1 : 0, we = (q = (N = w.statuses) == null ? void 0 : N.has) != null && q.call(N, "halfcover") ? 3 : 0, Me = (j = ($ = w.statuses) == null ? void 0 : $.has) != null && j.call($, "threequarteredcover") ? 6 : 0;
            let re = 0;
            if (w.type === "Karakter") {
              const G = (((C = w.items) == null ? void 0 : C.contents) ?? []).filter(
                (te) => {
                  var se;
                  return te.type === "Pancel" && ((se = te.system) == null ? void 0 : se.equipped) === !0;
                }
              );
              for (const te of G) {
                const se = String(((O = te.system) == null ? void 0 : O.protectionBonus) ?? "").trim().replace(",", "."), ce = Number(se);
                Number.isFinite(ce) && (re += ce);
              }
            }
            const Ie = _e + re + ke + we + Me, ie = Se + be + Ie, Ce = Number(J.total ?? 0) || 0, le = !(((Y = (K = w.statuses) == null ? void 0 : K.has) == null ? void 0 : Y.call(K, "fullcover")) ?? !1) && Ce >= ie, Te = w.name ?? U.name ?? "Célpont";
            let E = null, X = null;
            if (le && w.type === "Karakter")
              try {
                const G = new Roll("1d8");
                await G.evaluate({ async: !0 }), E = Number(G.total ?? 0) || 1, E === 1 ? X = "Fej" : E >= 2 && E <= 4 ? X = "Törzs" : E === 5 || E === 6 ? X = "Karok" : X = "Lábak";
              } catch (G) {
                console.warn("VOTV hit location roll failed:", G);
              }
            oe.weaponAttack = !0, oe.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: w.id ?? null,
              targetName: Te,
              defense: ie,
              isHit: le,
              hitLocationRoll: E ?? null,
              hitLocationName: X ?? null
            };
          }
        }
        if (await J.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ge,
          flags: { "vacuum-of-the-void": oe },
          rollMode: ye
        }), k > 0) {
          const Q = Math.max(0, z - k);
          await e.update({ "system.resources.morale": Q });
        }
        if (this._isInitiativeRoll)
          try {
            const Q = Number(J.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": Q });
            const U = e.apps ?? [];
            for (const w of U)
              typeof (w == null ? void 0 : w.render) == "function" && w.render(!0);
          } catch (Q) {
            console.warn("VOTV initiative result update:", Q);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ne(P, t, e) {
  var s, d;
  if (!P) return;
  const a = Number(((d = (s = P.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, i = ae.BODY_PART_BY_SKILL[t] ? ae._getSkillHealthStatusStatic(P, t) : void 0;
  let f = 0;
  i === 1 ? f = -6 : i === 2 && (f = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new ue({
    actor: P,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: S
  }).render(!0);
}
function Pe(P, t) {
  var j, C, O, K, Y, A, F, H, L, z, k, R, Z;
  if (!P || !t) return;
  const e = P, i = (((j = e.system) == null ? void 0 : j.weapons) ?? {})[t] ?? {}, f = ((C = e.system) == null ? void 0 : C.skills) ?? {}, S = ((K = (O = e.items) == null ? void 0 : O.filter) == null ? void 0 : K.call(O, (D) => D.type === "Fegyver")) ?? [], u = (i.itemId ?? "").trim(), s = u ? S.find((D) => D.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", m = (Y = s == null ? void 0 : s.system) == null ? void 0 : Y.bonus, n = i.bonus, p = m != null && String(m).trim() !== "", h = n != null && String(n).trim() !== "", y = Number(p ? m : h ? n : 0) || 0, I = ((A = s == null ? void 0 : s.system) == null ? void 0 : A.type) || "kinetic", b = (((F = s == null ? void 0 : s.system) == null ? void 0 : F.skillKey) ?? "").trim(), o = b && f[b] !== void 0 ? b : I === "explosive" ? "grenadeUse" : "firearms", r = Number(f[o] || 0) || 0, c = y + r;
  let l = 0;
  if (e.type === "Karakter") {
    const D = ae._getSkillHealthStatusStatic(e, o);
    D === 1 ? l = -6 : D === 2 && (l = -3);
  }
  const v = (((H = s == null ? void 0 : s.system) == null ? void 0 : H.damage) ?? "").trim(), T = (i.damage ?? "").trim(), V = v || T || "", _ = (((L = s == null ? void 0 : s.system) == null ? void 0 : L.size) ?? i.size ?? "").toString().toLowerCase(), g = _ === "heavy", x = _ === "medium", B = ((k = (z = e.statuses) == null ? void 0 : z.has) == null ? void 0 : k.call(z, "halfcover")) ?? !1, W = ((Z = (R = e.statuses) == null ? void 0 : R.has) == null ? void 0 : Z.call(R, "threequarteredcover")) ?? !1, N = g && B, q = W && (x || g);
  new ue({
    actor: P,
    skillKey: o,
    label: d,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: V,
    blockHeavyInHalfCover: N,
    blockMediumHeavyInThreeQuarterCover: q
  }).render(!0);
}
export {
  ue as VoidRollSheet,
  Ne as openRollSheetForSkill,
  Pe as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-B5n1Y2Ha.mjs.map
