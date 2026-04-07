import { V as le, c as Ne } from "./vacuum-of-the-void-DSqw_kPw.mjs";
class pe extends Application {
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
      label: l,
      baseModifier: f,
      injuryModifier: b,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: m,
      weaponItemId: n,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: h,
      blockMediumHeavyInThreeQuarterCover: C,
      blockNonThrownInFullCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = l ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = m || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!h, this._blockMediumHeavyInThreeQuarterCover = !!C, this._blockNonThrownInFullCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var h, C, y, w, S;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((C = (h = this.element) == null ? void 0 : h.querySelector) == null ? void 0 : C.call(h, "form.votv.roll-sheet")) ?? ((w = (y = this.element) == null ? void 0 : y.matches) != null && w.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const l = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), b = (o) => {
      const r = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      l && (l.value = String(r)), f.forEach((c) => {
        const i = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", i === r);
      });
    };
    f.forEach((o) => {
      o.addEventListener("click", (r) => {
        r.preventDefault(), b(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), b((l == null ? void 0 : l.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), m = a.querySelectorAll(".roll-sheet-morale-d8"), n = (o) => {
      let r = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      r = Math.min(r, s), d && (d.value = String(r)), m.forEach((c, i) => {
        c.classList.toggle("selected", i < r), c.style.pointerEvents = i < s ? "" : "none", c.style.opacity = i < s ? "" : "0.35";
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
      var r, c, i, g;
      if ((c = (r = o.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (g = (i = o.target) == null ? void 0 : i.closest) != null && g.call(i, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var h, C, y, w, S, o, r, c, i, g, I, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((h = t.querySelector("input[name='advantage']")) == null ? void 0 : h.value) ?? "0", 10) || 0, l = parseInt(((C = t.querySelector("input[name='moraleDice']")) == null ? void 0 : C.value) ?? "0", 10) || 0, f = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, b = parseInt(((w = t.dataset) == null ? void 0 : w.baseMod) ?? "0", 10) || 0, u = parseInt(((S = t.dataset) == null ? void 0 : S.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, d = (i = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && i.call(c, "diseased") || (V = (I = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : I.has) != null && V.call(I, "poisoned") ? -1 : 0, m = b + u + s + f + d, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", n[0].appendChild(p), a !== 0) {
      const v = document.createElement("span");
      v.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const k = document.createElement("img");
      k.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", k.alt = a > 0 ? "előny d6" : "hátrány d6", k.className = "roll-sheet-preview-die", v.appendChild(k), n.push(v);
    }
    if (l > 0) {
      const v = document.createElement("span");
      v.textContent = ` + ${l} `;
      const k = document.createElement("img");
      k.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", k.alt = "d8", k.className = "roll-sheet-preview-die", v.appendChild(k), n.push(v);
    }
    if (m !== 0) {
      const v = document.createElement("span");
      v.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, n.push(v);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var r, c, i, g, I, V, v, k, B, P, H, R, L, D;
    const e = this.actor, a = Math.max(0, Number(((c = (r = e == null ? void 0 : e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), l = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", l, f, b].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const m = [], n = [];
    let p = 0;
    if (this._isWeaponAttack && ((g = (i = game.user) == null ? void 0 : i.targets) != null && g.size)) {
      const F = Array.from(game.user.targets)[0], T = (F == null ? void 0 : F.actor) ?? null;
      s = (T == null ? void 0 : T.name) || (F == null ? void 0 : F.name) || "", (V = (I = T == null ? void 0 : T.statuses) == null ? void 0 : I.has) != null && V.call(I, "stunned") && (d = 1, m.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (k = (v = T == null ? void 0 : T.statuses) == null ? void 0 : v.has) != null && k.call(v, "dodge") && (p = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (P = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && P.call(B, "diseased") && n.push(game.i18n.localize("VOTV.StatusDiseased")), (R = (H = e == null ? void 0 : e.statuses) == null ? void 0 : H.has) != null && R.call(H, "poisoned") && n.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const h = ((D = (L = e == null ? void 0 : e.statuses) == null ? void 0 : L.has) == null ? void 0 : D.call(L, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    h && n.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const C = Math.min(3, Math.max(
      -3,
      d - p + (h ? -1 : 0)
    )), y = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", w = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", o = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || w || y;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: C,
      advantageSourcesText: m.length ? m.join(", ") : "",
      disadvantageSourcesText: n.length ? n.join(", ") : "",
      blockRollWarningMessage: o,
      disableRollButton: this._blockHeavyInHalfCover || this._blockMediumHeavyInThreeQuarterCover || this._blockNonThrownInFullCover,
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
    var S, o, r, c, i;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((S = t.system) == null ? void 0 : S.weapons) ?? {})[this._weaponSlotKey] ?? {}, l = ((r = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : r.call(o, (g) => g.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), b = f ? l.find((g) => g.id === f) ?? null : null, u = (c = b == null ? void 0 : b.system) == null ? void 0 : c.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", m = s != null && String(s).trim() !== "", p = Number(d ? u : m ? s : 0) || 0, h = this._skillKey, C = ((i = t.system) == null ? void 0 : i.skills) ?? {}, y = Number(C[h] ?? 0) || 0;
    let w = 0;
    if (t.type === "Karakter" && h) {
      const g = le._getSkillHealthStatusStatic(t, h);
      g === 1 ? w = -6 : g === 2 && (w = -3);
    }
    return p + y + w;
  }
  async _doRoll(t) {
    var a, l, f, b, u, s, d, m, n, p, h, C, y, w, S, o, r, c, i, g, I, V, v, k, B, P, H, R, L, D, J, F, T, K, X;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const W = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, O = (W.itemId ?? "").trim(), q = O ? (((f = (l = e.items) == null ? void 0 : l.filter) == null ? void 0 : f.call(l, (_) => _.type === "Fegyver")) ?? []).find((_) => _.id === O) ?? null : null, z = (((b = q == null ? void 0 : q.system) == null ? void 0 : b.size) ?? W.size ?? "").toString().toLowerCase();
        if ((s = (u = e.statuses) == null ? void 0 : u.has) != null && s.call(u, "fullcover") && z !== "thrown") {
          const _ = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (m = (d = ui.notifications) == null ? void 0 : d.warn) == null || m.call(d, _);
          return;
        }
        if ((p = (n = e.statuses) == null ? void 0 : n.has) != null && p.call(n, "threequarteredcover") && (z === "medium" || z === "heavy")) {
          const _ = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (C = (h = ui.notifications) == null ? void 0 : h.warn) == null || C.call(h, _);
          return;
        }
        if ((w = (y = e.statuses) == null ? void 0 : y.has) != null && w.call(y, "halfcover") && z === "heavy") {
          const _ = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (S = ui.notifications) == null ? void 0 : S.warn) == null || o.call(S, _);
          return;
        }
      }
      try {
        const x = t.querySelector("[name='moraleDice']"), W = t.querySelector("[name='advantage']"), O = t.querySelector("[name='constantBonus']"), q = Math.min(3, Math.max(0, parseInt((x == null ? void 0 : x.value) ?? "0", 10) || 0)), z = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), _ = Math.min(q, z), A = Math.min(3, Math.max(-3, parseInt((W == null ? void 0 : W.value) ?? "0", 10) || 0)), $ = parseInt((O == null ? void 0 : O.value) ?? "0", 10) || 0, se = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, Q = this._isWeaponAttack ? 0 : this._injuryModifier, ae = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, oe = ((g = (i = e.statuses) == null ? void 0 : i.has) == null ? void 0 : g.call(i, "diseased")) || ((V = (I = e.statuses) == null ? void 0 : I.has) == null ? void 0 : V.call(I, "poisoned")) ? -1 : 0, N = se + Q + ae + $ + oe, ve = [
          "3d6",
          A > 0 ? `+${A}d6` : A < 0 ? `-${Math.abs(A)}d6` : "",
          _ > 0 ? `+${_}d8` : "",
          N !== 0 ? N > 0 ? `+${N}` : `${N}` : ""
        ].filter(Boolean).join(" "), ee = new Roll(ve);
        await ee.evaluate({ async: !0 });
        const { resultType: fe, label: ye } = Ne(ee), ge = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let be = this._label;
        const ie = { resultType: fe, critLabel: ye };
        if (this._isWeaponAttack && ((k = (v = game.user) == null ? void 0 : v.targets) != null && k.size)) {
          const G = Array.from(game.user.targets)[0], M = (G == null ? void 0 : G.actor) ?? null;
          if (M) {
            const ce = ((B = M.system) == null ? void 0 : B.combat) ?? {}, Se = Number(ce.defense ?? 0) || 0, ke = Number(ce.defenseBonus ?? 0) || 0, _e = Number(ce.givenProtection ?? 0) || 0, we = (H = (P = M.statuses) == null ? void 0 : P.has) != null && H.call(P, "lookaround") ? 1 : 0, Ie = (L = (R = M.statuses) == null ? void 0 : R.has) != null && L.call(R, "halfcover") ? 3 : 0, Me = (J = (D = M.statuses) == null ? void 0 : D.has) != null && J.call(D, "threequarteredcover") ? 6 : 0;
            let ue = 0;
            if (M.type === "Karakter") {
              const Y = (((F = M.items) == null ? void 0 : F.contents) ?? []).filter(
                (ne) => {
                  var re;
                  return ne.type === "Pancel" && ((re = ne.system) == null ? void 0 : re.equipped) === !0;
                }
              );
              for (const ne of Y) {
                const re = String(((T = ne.system) == null ? void 0 : T.protectionBonus) ?? "").trim().replace(",", "."), me = Number(re);
                Number.isFinite(me) && (ue += me);
              }
            }
            const Ce = _e + ue + we + Ie + Me, de = Se + ke + Ce, Te = Number(ee.total ?? 0) || 0, he = !(((X = (K = M.statuses) == null ? void 0 : K.has) == null ? void 0 : X.call(K, "fullcover")) ?? !1) && Te >= de, Fe = M.name ?? G.name ?? "Célpont";
            let E = null, te = null;
            if (he && M.type === "Karakter")
              try {
                const Y = new Roll("1d8");
                await Y.evaluate({ async: !0 }), E = Number(Y.total ?? 0) || 1, E === 1 ? te = "Fej" : E >= 2 && E <= 4 ? te = "Törzs" : E === 5 || E === 6 ? te = "Karok" : te = "Lábak";
              } catch (Y) {
                console.warn("VOTV hit location roll failed:", Y);
              }
            ie.weaponAttack = !0, ie.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: M.id ?? null,
              targetName: Fe,
              defense: de,
              isHit: he,
              hitLocationRoll: E ?? null,
              hitLocationName: te ?? null
            };
          }
        }
        if (await ee.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: be,
          flags: { "vacuum-of-the-void": ie },
          rollMode: ge
        }), _ > 0) {
          const U = Math.max(0, z - _);
          await e.update({ "system.resources.morale": U });
        }
        if (this._isInitiativeRoll)
          try {
            const U = Number(ee.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": U });
            const G = e.apps ?? [];
            for (const M of G)
              typeof (M == null ? void 0 : M.render) == "function" && M.render(!0);
          } catch (U) {
            console.warn("VOTV initiative result update:", U);
          }
      } finally {
        this.close();
      }
    }
  }
}
function je(j, t, e) {
  var s, d;
  if (!j) return;
  const a = Number(((d = (s = j.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, l = le.BODY_PART_BY_SKILL[t] ? le._getSkillHealthStatusStatic(j, t) : void 0;
  let f = 0;
  l === 1 ? f = -6 : l === 2 && (f = -3);
  const b = (e || "").trim() === "Kezdeményezés";
  new pe({
    actor: j,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: b
  }).render(!0);
}
function Be(j, t) {
  var K, X, x, W, O, q, z, _, A, $, se, Q, ae, Z, oe;
  if (!j || !t) return;
  const e = j, l = (((K = e.system) == null ? void 0 : K.weapons) ?? {})[t] ?? {}, f = ((X = e.system) == null ? void 0 : X.skills) ?? {}, b = ((W = (x = e.items) == null ? void 0 : x.filter) == null ? void 0 : W.call(x, (N) => N.type === "Fegyver")) ?? [], u = (l.itemId ?? "").trim(), s = u ? b.find((N) => N.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? l.name ?? "").trim() || "Fegyver", m = (O = s == null ? void 0 : s.system) == null ? void 0 : O.bonus, n = l.bonus, p = m != null && String(m).trim() !== "", h = n != null && String(n).trim() !== "", y = Number(p ? m : h ? n : 0) || 0, w = ((q = s == null ? void 0 : s.system) == null ? void 0 : q.type) || "kinetic", S = (((z = s == null ? void 0 : s.system) == null ? void 0 : z.skillKey) ?? "").trim(), o = S && f[S] !== void 0 ? S : w === "explosive" ? "grenadeUse" : "firearms", r = Number(f[o] || 0) || 0, c = y + r;
  let i = 0;
  if (e.type === "Karakter") {
    const N = le._getSkillHealthStatusStatic(e, o);
    N === 1 ? i = -6 : N === 2 && (i = -3);
  }
  const g = (((_ = s == null ? void 0 : s.system) == null ? void 0 : _.damage) ?? "").trim(), I = (l.damage ?? "").trim(), V = g || I || "", v = (((A = s == null ? void 0 : s.system) == null ? void 0 : A.size) ?? l.size ?? "").toString().toLowerCase(), k = v === "heavy", B = v === "medium", P = v === "thrown", H = ((se = ($ = e.statuses) == null ? void 0 : $.has) == null ? void 0 : se.call($, "halfcover")) ?? !1, R = ((ae = (Q = e.statuses) == null ? void 0 : Q.has) == null ? void 0 : ae.call(Q, "threequarteredcover")) ?? !1, L = ((oe = (Z = e.statuses) == null ? void 0 : Z.has) == null ? void 0 : oe.call(Z, "fullcover")) ?? !1, D = k && H, J = R && (B || k), F = L && !P;
  new pe({
    actor: j,
    skillKey: o,
    label: d,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: i,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: V,
    blockHeavyInHalfCover: D,
    blockMediumHeavyInThreeQuarterCover: J,
    blockNonThrownInFullCover: F
  }).render(!0);
}
export {
  pe as VoidRollSheet,
  je as openRollSheetForSkill,
  Be as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-CR07X1uE.mjs.map
