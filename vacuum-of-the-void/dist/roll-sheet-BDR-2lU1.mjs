import { V as ae, c as je } from "./vacuum-of-the-void-Bw2U7WwP.mjs";
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
      injuryModifier: g,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: h,
      weaponItemId: o,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: m,
      blockMediumHeavyInThreeQuarterCover: w
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = h || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!m, this._blockMediumHeavyInThreeQuarterCover = !!w;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var m, w, _, I, S;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((w = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : w.call(m, "form.votv.roll-sheet")) ?? ((I = (_ = this.element) == null ? void 0 : _.matches) != null && I.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const r = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(r)), f.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    f.forEach((n) => {
      n.addEventListener("click", (r) => {
        r.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), g((i == null ? void 0 : i.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), h = a.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let r = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      r = Math.min(r, s), d && (d.value = String(r)), h.forEach((c, l) => {
        c.classList.toggle("selected", l < r), c.style.pointerEvents = l < s ? "" : "none", c.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (r) => {
        if (r.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const c = n.dataset.moraleValue ?? "0";
        o(c), t._updateFormulaPreview(a);
      });
    }), o((d == null ? void 0 : d.value) ?? "0");
    const p = a.querySelector("input[name='constantBonus']");
    p && p.addEventListener("input", () => t._updateFormulaPreview(a)), p && p.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var r, c, l, v;
      if ((c = (r = n.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (v = (l = n.target) == null ? void 0 : l.closest) != null && v.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var m, w, _, I, S, n, r, c, l, v, V, j;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((m = t.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, i = parseInt(((w = t.querySelector("input[name='moraleDice']")) == null ? void 0 : w.value) ?? "0", 10) || 0, f = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, g = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, u = parseInt(((S = t.dataset) == null ? void 0 : S.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, d = (l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") || (j = (V = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : V.has) != null && j.call(V, "poisoned") ? -1 : 0, h = g + u + s + f + d, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", o[0].appendChild(p), a !== 0) {
      const b = document.createElement("span");
      b.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const y = document.createElement("img");
      y.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", y.alt = a > 0 ? "előny d6" : "hátrány d6", y.className = "roll-sheet-preview-die", b.appendChild(y), o.push(b);
    }
    if (i > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${i} `;
      const y = document.createElement("img");
      y.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", y.alt = "d8", y.className = "roll-sheet-preview-die", b.appendChild(y), o.push(b);
    }
    if (h !== 0) {
      const b = document.createElement("span");
      b.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, o.push(b);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var n, r, c, l, v, V, j, b, y, x, T, W, P, q;
    const e = this.actor, a = Math.max(0, Number(((r = (n = e == null ? void 0 : e.system) == null ? void 0 : n.resources) == null ? void 0 : r.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", i, f, g].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const h = [], o = [];
    let p = 0;
    if (this._isWeaponAttack && ((l = (c = game.user) == null ? void 0 : c.targets) != null && l.size)) {
      const z = Array.from(game.user.targets)[0], C = (z == null ? void 0 : z.actor) ?? null;
      s = (C == null ? void 0 : C.name) || (z == null ? void 0 : z.name) || "", (V = (v = C == null ? void 0 : C.statuses) == null ? void 0 : v.has) != null && V.call(v, "stunned") && (d = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (b = (j = C == null ? void 0 : C.statuses) == null ? void 0 : j.has) != null && b.call(j, "dodge") && (p = 1, o.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (x = (y = e == null ? void 0 : e.statuses) == null ? void 0 : y.has) != null && x.call(y, "diseased") && o.push(game.i18n.localize("VOTV.StatusDiseased")), (W = (T = e == null ? void 0 : e.statuses) == null ? void 0 : T.has) != null && W.call(T, "poisoned") && o.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const m = ((q = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) == null ? void 0 : q.call(P, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    m && o.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const w = Math.min(3, Math.max(
      -3,
      d - p + (m ? -1 : 0)
    )), _ = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", S = (this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "") || _;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: w,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: o.length ? o.join(", ") : "",
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
    var S, n, r, c, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((S = t.system) == null ? void 0 : S.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : r.call(n, (v) => v.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), g = f ? i.find((v) => v.id === f) ?? null : null, u = (c = g == null ? void 0 : g.system) == null ? void 0 : c.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", h = s != null && String(s).trim() !== "", p = Number(d ? u : h ? s : 0) || 0, m = this._skillKey, w = ((l = t.system) == null ? void 0 : l.skills) ?? {}, _ = Number(w[m] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && m) {
      const v = ae._getSkillHealthStatusStatic(t, m);
      v === 1 ? I = -6 : v === 2 && (I = -3);
    }
    return p + _ + I;
  }
  async _doRoll(t) {
    var a, i, f, g, u, s, d, h, o, p, m, w, _, I, S, n, r, c, l, v, V, j, b, y, x, T, W, P, q, $, z, C, O, K, Y;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const N = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, F = (N.itemId ?? "").trim(), L = F ? (((f = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : f.call(i, (k) => k.type === "Fegyver")) ?? []).find((k) => k.id === F) ?? null : null, B = (((g = L == null ? void 0 : L.system) == null ? void 0 : g.size) ?? N.size ?? "").toString().toLowerCase();
        if ((s = (u = e.statuses) == null ? void 0 : u.has) != null && s.call(u, "fullcover") && B !== "thrown") {
          const k = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (h = (d = ui.notifications) == null ? void 0 : d.warn) == null || h.call(d, k);
          return;
        }
        if ((p = (o = e.statuses) == null ? void 0 : o.has) != null && p.call(o, "threequarteredcover") && (B === "medium" || B === "heavy")) {
          const k = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (w = (m = ui.notifications) == null ? void 0 : m.warn) == null || w.call(m, k);
          return;
        }
        if ((I = (_ = e.statuses) == null ? void 0 : _.has) != null && I.call(_, "halfcover") && B === "heavy") {
          const k = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (S = ui.notifications) == null ? void 0 : S.warn) == null || n.call(S, k);
          return;
        }
      }
      try {
        const A = t.querySelector("[name='moraleDice']"), N = t.querySelector("[name='advantage']"), F = t.querySelector("[name='constantBonus']"), L = Math.min(3, Math.max(0, parseInt((A == null ? void 0 : A.value) ?? "0", 10) || 0)), B = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), k = Math.min(L, B), R = Math.min(3, Math.max(-3, parseInt((N == null ? void 0 : N.value) ?? "0", 10) || 0)), Z = parseInt((F == null ? void 0 : F.value) ?? "0", 10) || 0, D = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, de = this._isWeaponAttack ? 0 : this._injuryModifier, me = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, he = ((v = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : v.call(l, "diseased")) || ((j = (V = e.statuses) == null ? void 0 : V.has) == null ? void 0 : j.call(V, "poisoned")) ? -1 : 0, ee = D + de + me + Z + he, pe = [
          "3d6",
          R > 0 ? `+${R}d6` : R < 0 ? `-${Math.abs(R)}d6` : "",
          k > 0 ? `+${k}d8` : "",
          ee !== 0 ? ee > 0 ? `+${ee}` : `${ee}` : ""
        ].filter(Boolean).join(" "), J = new Roll(pe);
        await J.evaluate({ async: !0 });
        const { resultType: ve, label: fe } = je(J), ye = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ge = this._label;
        const ne = { resultType: ve, critLabel: fe };
        if (this._isWeaponAttack && ((y = (b = game.user) == null ? void 0 : b.targets) != null && y.size)) {
          const U = Array.from(game.user.targets)[0], M = (U == null ? void 0 : U.actor) ?? null;
          if (M) {
            const oe = ((x = M.system) == null ? void 0 : x.combat) ?? {}, Se = Number(oe.defense ?? 0) || 0, be = Number(oe.defenseBonus ?? 0) || 0, _e = Number(oe.givenProtection ?? 0) || 0, ke = (W = (T = M.statuses) == null ? void 0 : T.has) != null && W.call(T, "lookaround") ? 1 : 0, Me = (q = (P = M.statuses) == null ? void 0 : P.has) != null && q.call(P, "halfcover") ? 3 : 0, we = (z = ($ = M.statuses) == null ? void 0 : $.has) != null && z.call($, "threequarteredcover") ? 6 : 0;
            let re = 0;
            if (M.type === "Karakter") {
              const G = (((C = M.items) == null ? void 0 : C.contents) ?? []).filter(
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
            const Ie = _e + re + ke + Me + we, ie = Se + be + Ie, Ce = Number(J.total ?? 0) || 0, le = !(((Y = (K = M.statuses) == null ? void 0 : K.has) == null ? void 0 : Y.call(K, "fullcover")) ?? !1) && Ce >= ie, Ve = M.name ?? U.name ?? "Célpont";
            let E = null, X = null;
            if (le && M.type === "Karakter")
              try {
                const G = new Roll("1d8");
                await G.evaluate({ async: !0 }), E = Number(G.total ?? 0) || 1, E === 1 ? X = "Fej" : E >= 2 && E <= 4 ? X = "Törzs" : E === 5 || E === 6 ? X = "Karok" : X = "Lábak";
              } catch (G) {
                console.warn("VOTV hit location roll failed:", G);
              }
            ne.weaponAttack = !0, ne.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: M.id ?? null,
              targetName: Ve,
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
          flags: { "vacuum-of-the-void": ne },
          rollMode: ye
        }), k > 0) {
          const Q = Math.max(0, B - k);
          await e.update({ "system.resources.morale": Q });
        }
        if (this._isInitiativeRoll)
          try {
            const Q = Number(J.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": Q });
            const U = e.apps ?? [];
            for (const M of U)
              typeof (M == null ? void 0 : M.render) == "function" && M.render(!0);
          } catch (Q) {
            console.warn("VOTV initiative result update:", Q);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Pe(H, t, e) {
  var s, d;
  if (!H) return;
  const a = Number(((d = (s = H.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, i = ae.BODY_PART_BY_SKILL[t] ? ae._getSkillHealthStatusStatic(H, t) : void 0;
  let f = 0;
  i === 1 ? f = -6 : i === 2 && (f = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new ue({
    actor: H,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: g
  }).render(!0);
}
function He(H, t) {
  var z, C, O, K, Y, A, N, F, L, B, k, R, Z;
  if (!H || !t) return;
  const e = H, i = (((z = e.system) == null ? void 0 : z.weapons) ?? {})[t] ?? {}, f = ((C = e.system) == null ? void 0 : C.skills) ?? {}, g = ((K = (O = e.items) == null ? void 0 : O.filter) == null ? void 0 : K.call(O, (D) => D.type === "Fegyver")) ?? [], u = (i.itemId ?? "").trim(), s = u ? g.find((D) => D.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", h = (Y = s == null ? void 0 : s.system) == null ? void 0 : Y.bonus, o = i.bonus, p = h != null && String(h).trim() !== "", m = o != null && String(o).trim() !== "", _ = Number(p ? h : m ? o : 0) || 0, I = ((A = s == null ? void 0 : s.system) == null ? void 0 : A.type) || "kinetic", S = (((N = s == null ? void 0 : s.system) == null ? void 0 : N.skillKey) ?? "").trim(), n = S && f[S] !== void 0 ? S : I === "explosive" ? "grenadeUse" : "firearms", r = Number(f[n] || 0) || 0, c = _ + r;
  let l = 0;
  if (e.type === "Karakter") {
    const D = ae._getSkillHealthStatusStatic(e, n);
    D === 1 ? l = -6 : D === 2 && (l = -3);
  }
  const v = (((F = s == null ? void 0 : s.system) == null ? void 0 : F.damage) ?? "").trim(), V = (i.damage ?? "").trim(), j = v || V || "", b = (((L = s == null ? void 0 : s.system) == null ? void 0 : L.size) ?? i.size ?? "").toString().toLowerCase(), y = b === "heavy", x = b === "medium", T = ((k = (B = e.statuses) == null ? void 0 : B.has) == null ? void 0 : k.call(B, "halfcover")) ?? !1, W = ((Z = (R = e.statuses) == null ? void 0 : R.has) == null ? void 0 : Z.call(R, "threequarteredcover")) ?? !1, P = y && T, q = W && (x || y);
  new ue({
    actor: H,
    skillKey: n,
    label: d,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: j,
    blockHeavyInHalfCover: P,
    blockMediumHeavyInThreeQuarterCover: q
  }).render(!0);
}
export {
  ue as VoidRollSheet,
  Pe as openRollSheetForSkill,
  He as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BDR-2lU1.mjs.map
