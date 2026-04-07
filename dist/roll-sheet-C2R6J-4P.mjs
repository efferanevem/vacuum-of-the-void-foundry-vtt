import { V as ae, c as Ve } from "./vacuum-of-the-void-C7EXCUxa.mjs";
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
      baseModifier: v,
      injuryModifier: b,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: d,
      weaponSlotKey: m,
      weaponItemId: n,
      weaponDamageFormula: p,
      blockHeavyInHalfCover: h,
      blockMediumHeavyInThreeQuarterCover: T,
      blockNonThrownInFullCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!d, this._weaponSlotKey = m || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "", this._blockHeavyInHalfCover = !!h, this._blockMediumHeavyInThreeQuarterCover = !!T, this._blockNonThrownInFullCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var h, T, y, M, S;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((T = (h = this.element) == null ? void 0 : h.querySelector) == null ? void 0 : T.call(h, "form.votv.roll-sheet")) ?? ((M = (y = this.element) == null ? void 0 : y.matches) != null && M.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), v = a.querySelectorAll(".roll-sheet-advantage-d6"), b = (o) => {
      const r = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      i && (i.value = String(r)), v.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    v.forEach((o) => {
      o.addEventListener("click", (r) => {
        r.preventDefault(), b(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), b((i == null ? void 0 : i.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), d = a.querySelector("input[name='moraleDice']"), m = a.querySelectorAll(".roll-sheet-morale-d8"), n = (o) => {
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
      var r, c, l, g;
      if ((c = (r = o.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (g = (l = o.target) == null ? void 0 : l.closest) != null && g.call(l, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var h, T, y, M, S, o, r, c, l, g, I, N;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((h = t.querySelector("input[name='advantage']")) == null ? void 0 : h.value) ?? "0", 10) || 0, i = parseInt(((T = t.querySelector("input[name='moraleDice']")) == null ? void 0 : T.value) ?? "0", 10) || 0, v = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, b = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, u = parseInt(((S = t.dataset) == null ? void 0 : S.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, d = (l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") || (N = (I = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : I.has) != null && N.call(I, "poisoned") ? -1 : 0, m = b + u + s + v + d, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", n[0].appendChild(p), a !== 0) {
      const f = document.createElement("span");
      f.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const k = document.createElement("img");
      k.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", k.alt = a > 0 ? "előny d6" : "hátrány d6", k.className = "roll-sheet-preview-die", f.appendChild(k), n.push(f);
    }
    if (i > 0) {
      const f = document.createElement("span");
      f.textContent = ` + ${i} `;
      const k = document.createElement("img");
      k.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", k.alt = "d8", k.className = "roll-sheet-preview-die", f.appendChild(k), n.push(f);
    }
    if (m !== 0) {
      const f = document.createElement("span");
      f.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, n.push(f);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var r, c, l, g, I, N, f, k, j, B, P, H, R, W;
    const e = this.actor, a = Math.max(0, Number(((c = (r = e == null ? void 0 : e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", i, v, b].filter(Boolean).join(" ") || "3d6";
    let s = "", d = 0;
    const m = [], n = [];
    let p = 0;
    if (this._isWeaponAttack && ((g = (l = game.user) == null ? void 0 : l.targets) != null && g.size)) {
      const V = Array.from(game.user.targets)[0], _ = (V == null ? void 0 : V.actor) ?? null;
      s = (_ == null ? void 0 : _.name) || (V == null ? void 0 : V.name) || "", (N = (I = _ == null ? void 0 : _.statuses) == null ? void 0 : I.has) != null && N.call(I, "stunned") && (d = 1, m.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (k = (f = _ == null ? void 0 : _.statuses) == null ? void 0 : f.has) != null && k.call(f, "dodge") && (p = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (B = (j = e == null ? void 0 : e.statuses) == null ? void 0 : j.has) != null && B.call(j, "diseased") && n.push(game.i18n.localize("VOTV.StatusDiseased")), (H = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) != null && H.call(P, "poisoned") && n.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const h = ((W = (R = e == null ? void 0 : e.statuses) == null ? void 0 : R.has) == null ? void 0 : W.call(R, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    h && n.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const T = Math.min(3, Math.max(
      -3,
      d - p + (h ? -1 : 0)
    )), y = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", M = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", o = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || M || y;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: T,
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
    var S, o, r, c, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((S = t.system) == null ? void 0 : S.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : r.call(o, (g) => g.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), b = v ? i.find((g) => g.id === v) ?? null : null, u = (c = b == null ? void 0 : b.system) == null ? void 0 : c.bonus, s = a.bonus, d = u != null && String(u).trim() !== "", m = s != null && String(s).trim() !== "", p = Number(d ? u : m ? s : 0) || 0, h = this._skillKey, T = ((l = t.system) == null ? void 0 : l.skills) ?? {}, y = Number(T[h] ?? 0) || 0;
    let M = 0;
    if (t.type === "Karakter" && h) {
      const g = ae._getSkillHealthStatusStatic(t, h);
      g === 1 ? M = -6 : g === 2 && (M = -3);
    }
    return p + y + M;
  }
  async _doRoll(t) {
    var a, i, v, b, u, s, d, m, n, p, h, T, y, M, S, o, r, c, l, g, I, N, f, k, j, B, P, H, R, W, $, V, _, K, Y;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const L = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, D = (L.itemId ?? "").trim(), O = D ? (((v = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : v.call(i, (w) => w.type === "Fegyver")) ?? []).find((w) => w.id === D) ?? null : null, z = (((b = O == null ? void 0 : O.system) == null ? void 0 : b.size) ?? L.size ?? "").toString().toLowerCase();
        if ((s = (u = e.statuses) == null ? void 0 : u.has) != null && s.call(u, "fullcover") && z !== "thrown") {
          const w = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (m = (d = ui.notifications) == null ? void 0 : d.warn) == null || m.call(d, w);
          return;
        }
        if ((p = (n = e.statuses) == null ? void 0 : n.has) != null && p.call(n, "threequarteredcover") && (z === "medium" || z === "heavy")) {
          const w = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (T = (h = ui.notifications) == null ? void 0 : h.warn) == null || T.call(h, w);
          return;
        }
        if ((M = (y = e.statuses) == null ? void 0 : y.has) != null && M.call(y, "halfcover") && z === "heavy") {
          const w = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (S = ui.notifications) == null ? void 0 : S.warn) == null || o.call(S, w);
          return;
        }
      }
      try {
        const A = t.querySelector("[name='moraleDice']"), L = t.querySelector("[name='advantage']"), D = t.querySelector("[name='constantBonus']"), O = Math.min(3, Math.max(0, parseInt((A == null ? void 0 : A.value) ?? "0", 10) || 0)), z = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), w = Math.min(O, z), x = Math.min(3, Math.max(-3, parseInt((L == null ? void 0 : L.value) ?? "0", 10) || 0)), Z = parseInt((D == null ? void 0 : D.value) ?? "0", 10) || 0, q = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, de = this._isWeaponAttack ? 0 : this._injuryModifier, he = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, me = ((g = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : g.call(l, "diseased")) || ((N = (I = e.statuses) == null ? void 0 : I.has) == null ? void 0 : N.call(I, "poisoned")) ? -1 : 0, ee = q + de + he + Z + me, pe = [
          "3d6",
          x > 0 ? `+${x}d6` : x < 0 ? `-${Math.abs(x)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          ee !== 0 ? ee > 0 ? `+${ee}` : `${ee}` : ""
        ].filter(Boolean).join(" "), J = new Roll(pe);
        await J.evaluate({ async: !0 });
        const { resultType: ve, label: fe } = Ve(J), ye = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ge = this._label;
        const oe = { resultType: ve, critLabel: fe };
        if (this._isWeaponAttack && ((k = (f = game.user) == null ? void 0 : f.targets) != null && k.size)) {
          const U = Array.from(game.user.targets)[0], C = (U == null ? void 0 : U.actor) ?? null;
          if (C) {
            const ne = ((j = C.system) == null ? void 0 : j.combat) ?? {}, be = Number(ne.defense ?? 0) || 0, Se = Number(ne.defenseBonus ?? 0) || 0, ke = Number(ne.givenProtection ?? 0) || 0, _e = (P = (B = C.statuses) == null ? void 0 : B.has) != null && P.call(B, "lookaround") ? 1 : 0, we = (R = (H = C.statuses) == null ? void 0 : H.has) != null && R.call(H, "halfcover") ? 3 : 0, Me = ($ = (W = C.statuses) == null ? void 0 : W.has) != null && $.call(W, "threequarteredcover") ? 6 : 0;
            let re = 0;
            if (C.type === "Karakter") {
              const G = (((V = C.items) == null ? void 0 : V.contents) ?? []).filter(
                (te) => {
                  var se;
                  return te.type === "Pancel" && ((se = te.system) == null ? void 0 : se.equipped) === !0;
                }
              );
              for (const te of G) {
                const se = String(((_ = te.system) == null ? void 0 : _.protectionBonus) ?? "").trim().replace(",", "."), ce = Number(se);
                Number.isFinite(ce) && (re += ce);
              }
            }
            const Ie = ke + re + _e + we + Me, ie = be + Se + Ie, Ce = Number(J.total ?? 0) || 0, le = !(((Y = (K = C.statuses) == null ? void 0 : K.has) == null ? void 0 : Y.call(K, "fullcover")) ?? !1) && Ce >= ie, Te = C.name ?? U.name ?? "Célpont";
            let E = null, X = null;
            if (le && C.type === "Karakter")
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
              targetActorId: C.id ?? null,
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
        }), w > 0) {
          const Q = Math.max(0, z - w);
          await e.update({ "system.resources.morale": Q });
        }
        if (this._isInitiativeRoll)
          try {
            const Q = Number(J.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": Q });
            const U = e.apps ?? [];
            for (const C of U)
              typeof (C == null ? void 0 : C.render) == "function" && C.render(!0);
          } catch (Q) {
            console.warn("VOTV initiative result update:", Q);
          }
      } finally {
        this.close();
      }
    }
  }
}
function je(F, t, e) {
  var s, d;
  if (!F) return;
  const a = Number(((d = (s = F.system) == null ? void 0 : s.skills) == null ? void 0 : d[t]) ?? 0) || 0, i = ae.BODY_PART_BY_SKILL[t] ? ae._getSkillHealthStatusStatic(F, t) : void 0;
  let v = 0;
  i === 1 ? v = -6 : i === 2 && (v = -3);
  const b = (e || "").trim() === "Kezdeményezés";
  new ue({
    actor: F,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: b
  }).render(!0);
}
function Be(F, t) {
  var $, V, _, K, Y, A, L, D, O, z, w, x, Z;
  if (!F || !t) return;
  const e = F, i = ((($ = e.system) == null ? void 0 : $.weapons) ?? {})[t] ?? {}, v = ((V = e.system) == null ? void 0 : V.skills) ?? {}, b = ((K = (_ = e.items) == null ? void 0 : _.filter) == null ? void 0 : K.call(_, (q) => q.type === "Fegyver")) ?? [], u = (i.itemId ?? "").trim(), s = u ? b.find((q) => q.id === u) ?? null : null, d = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", m = (Y = s == null ? void 0 : s.system) == null ? void 0 : Y.bonus, n = i.bonus, p = m != null && String(m).trim() !== "", h = n != null && String(n).trim() !== "", y = Number(p ? m : h ? n : 0) || 0, M = ((A = s == null ? void 0 : s.system) == null ? void 0 : A.type) || "kinetic", S = (((L = s == null ? void 0 : s.system) == null ? void 0 : L.skillKey) ?? "").trim(), o = S && v[S] !== void 0 ? S : M === "explosive" ? "grenadeUse" : "firearms", r = Number(v[o] || 0) || 0, c = y + r;
  let l = 0;
  if (e.type === "Karakter") {
    const q = ae._getSkillHealthStatusStatic(e, o);
    q === 1 ? l = -6 : q === 2 && (l = -3);
  }
  const g = (((D = s == null ? void 0 : s.system) == null ? void 0 : D.damage) ?? "").trim(), I = (i.damage ?? "").trim(), N = g || I || "", f = (((O = s == null ? void 0 : s.system) == null ? void 0 : O.size) ?? i.size ?? "").toString().toLowerCase(), k = f === "heavy", j = f === "medium", B = ((w = (z = e.statuses) == null ? void 0 : z.has) == null ? void 0 : w.call(z, "halfcover")) ?? !1, P = ((Z = (x = e.statuses) == null ? void 0 : x.has) == null ? void 0 : Z.call(x, "threequarteredcover")) ?? !1, H = k && B, R = P && (j || k);
  new ue({
    actor: F,
    skillKey: o,
    label: d,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: N,
    blockHeavyInHalfCover: H,
    blockMediumHeavyInThreeQuarterCover: R
  }).render(!0);
}
export {
  ue as VoidRollSheet,
  je as openRollSheetForSkill,
  Be as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-C2R6J-4P.mjs.map
