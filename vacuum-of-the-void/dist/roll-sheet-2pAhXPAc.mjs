import { V as J, c as ge } from "./vacuum-of-the-void-5THlJuGZ.mjs";
class ne extends Application {
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
      baseModifier: v,
      injuryModifier: y,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: u,
      weaponSlotKey: p,
      weaponItemId: r,
      weaponDamageFormula: f,
      blockHeavyInHalfCover: m,
      blockMediumHeavyInThreeQuarterCover: k
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = l ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(y) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!u, this._weaponSlotKey = p || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof f == "string" ? f.trim() : "", this._blockHeavyInHalfCover = !!m, this._blockMediumHeavyInThreeQuarterCover = !!k;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var m, k, b, I, M;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((k = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : k.call(m, "form.votv.roll-sheet")) ?? ((I = (b = this.element) == null ? void 0 : b.matches) != null && I.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const l = a.querySelector("input[name='advantage']"), v = a.querySelectorAll(".roll-sheet-advantage-d6"), y = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      l && (l.value = String(o)), v.forEach((i) => {
        const c = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", c === o);
      });
    };
    v.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), y(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), y((l == null ? void 0 : l.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((M = h == null ? void 0 : h.dataset) == null ? void 0 : M.moraleMax) ?? "3", 10) || 0)), u = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), u && (u.value = String(o)), p.forEach((i, c) => {
        i.classList.toggle("selected", c < o), i.style.pointerEvents = c < s ? "" : "none", i.style.opacity = c < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const i = n.dataset.moraleValue ?? "0";
        r(i), t._updateFormulaPreview(a);
      });
    }), r((u == null ? void 0 : u.value) ?? "0");
    const f = a.querySelector("input[name='constantBonus']");
    f && f.addEventListener("input", () => t._updateFormulaPreview(a)), f && f.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, i, c, d;
      if ((i = (o = n.target) == null ? void 0 : o.closest) != null && i.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (d = (c = n.target) == null ? void 0 : c.closest) != null && d.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var m, k, b, I, M, n, o, i, c, d, P, B;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((m = t.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, l = parseInt(((k = t.querySelector("input[name='moraleDice']")) == null ? void 0 : k.value) ?? "0", 10) || 0, v = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, y = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, h = parseInt(((M = t.dataset) == null ? void 0 : M.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, u = (c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "diseased") || (B = (P = (d = this.actor) == null ? void 0 : d.statuses) == null ? void 0 : P.has) != null && B.call(P, "poisoned") ? -1 : 0, p = y + h + s + v + u, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", r[0].appendChild(f), a !== 0) {
      const _ = document.createElement("span");
      _.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const S = document.createElement("img");
      S.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", S.alt = a > 0 ? "előny d6" : "hátrány d6", S.className = "roll-sheet-preview-die", _.appendChild(S), r.push(_);
    }
    if (l > 0) {
      const _ = document.createElement("span");
      _.textContent = ` + ${l} `;
      const S = document.createElement("img");
      S.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", S.alt = "d8", S.className = "roll-sheet-preview-die", _.appendChild(S), r.push(_);
    }
    if (p !== 0) {
      const _ = document.createElement("span");
      _.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, r.push(_);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var n, o, i, c, d, P, B, _, S, T, V, L, j, z;
    const e = this.actor, a = Math.max(0, Number(((o = (n = e == null ? void 0 : e.system) == null ? void 0 : n.resources) == null ? void 0 : o.morale) ?? 0) || 0), l = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", y = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", l, v, y].filter(Boolean).join(" ") || "3d6";
    let s = "", u = 0;
    const p = [], r = [];
    let f = 0;
    if (this._isWeaponAttack && ((c = (i = game.user) == null ? void 0 : i.targets) != null && c.size)) {
      const g = Array.from(game.user.targets)[0], w = (g == null ? void 0 : g.actor) ?? null;
      s = (w == null ? void 0 : w.name) || (g == null ? void 0 : g.name) || "", (P = (d = w == null ? void 0 : w.statuses) == null ? void 0 : d.has) != null && P.call(d, "stunned") && (u = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (_ = (B = w == null ? void 0 : w.statuses) == null ? void 0 : B.has) != null && _.call(B, "dodge") && (f = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (T = (S = e == null ? void 0 : e.statuses) == null ? void 0 : S.has) != null && T.call(S, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (L = (V = e == null ? void 0 : e.statuses) == null ? void 0 : V.has) != null && L.call(V, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const m = ((z = (j = e == null ? void 0 : e.statuses) == null ? void 0 : j.has) == null ? void 0 : z.call(j, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    m && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const k = Math.min(3, Math.max(
      -3,
      u - f + (m ? -1 : 0)
    )), b = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", M = (this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "") || b;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: k,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: r.length ? r.join(", ") : "",
      blockRollWarningMessage: M,
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
    var M, n, o, i, c;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((M = t.system) == null ? void 0 : M.weapons) ?? {})[this._weaponSlotKey] ?? {}, l = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (d) => d.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), y = v ? l.find((d) => d.id === v) ?? null : null, h = (i = y == null ? void 0 : y.system) == null ? void 0 : i.bonus, s = a.bonus, u = h != null && String(h).trim() !== "", p = s != null && String(s).trim() !== "", f = Number(u ? h : p ? s : 0) || 0, m = this._skillKey, k = ((c = t.system) == null ? void 0 : c.skills) ?? {}, b = Number(k[m] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && m) {
      const d = J._getSkillHealthStatusStatic(t, m);
      d === 1 ? I = -6 : d === 2 && (I = -3);
    }
    return f + b + I;
  }
  async _doRoll(t) {
    var a, l, v, y, h, s, u, p, r, f, m, k, b, I, M, n, o, i, c, d, P, B, _, S, T;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey && ((l = (a = e.statuses) == null ? void 0 : a.has) != null && l.call(a, "halfcover"))) {
        const L = (((v = e.system) == null ? void 0 : v.weapons) ?? {})[this._weaponSlotKey] ?? {}, j = (L.itemId ?? "").trim(), z = j ? (((h = (y = e.items) == null ? void 0 : y.filter) == null ? void 0 : h.call(y, (g) => g.type === "Fegyver")) ?? []).find((g) => g.id === j) ?? null : null;
        if ((((s = z == null ? void 0 : z.system) == null ? void 0 : s.size) ?? L.size ?? "").toString().toLowerCase() === "heavy") {
          const g = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (p = (u = ui.notifications) == null ? void 0 : u.warn) == null || p.call(u, g);
          return;
        }
      }
      try {
        const V = t.querySelector("[name='moraleDice']"), L = t.querySelector("[name='advantage']"), j = t.querySelector("[name='constantBonus']"), z = Math.min(3, Math.max(0, parseInt((V == null ? void 0 : V.value) ?? "0", 10) || 0)), R = Math.max(0, Number(((f = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : f.morale) ?? 0) || 0), g = Math.min(z, R), w = Math.min(3, Math.max(-3, parseInt((L == null ? void 0 : L.value) ?? "0", 10) || 0)), A = parseInt((j == null ? void 0 : j.value) ?? "0", 10) || 0, E = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, $ = this._isWeaponAttack ? 0 : this._injuryModifier, Q = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, U = ((k = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : k.call(m, "diseased")) || ((I = (b = e.statuses) == null ? void 0 : b.has) == null ? void 0 : I.call(b, "poisoned")) ? -1 : 0, H = E + $ + Q + A + U, oe = [
          "3d6",
          w > 0 ? `+${w}d6` : w < 0 ? `-${Math.abs(w)}d6` : "",
          g > 0 ? `+${g}d8` : "",
          H !== 0 ? H > 0 ? `+${H}` : `${H}` : ""
        ].filter(Boolean).join(" "), O = new Roll(oe);
        await O.evaluate({ async: !0 });
        const { resultType: ie, label: re } = ge(O), le = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ce = this._label;
        const X = { resultType: ie, critLabel: re };
        if (this._isWeaponAttack && ((n = (M = game.user) == null ? void 0 : M.targets) != null && n.size)) {
          const x = Array.from(game.user.targets)[0], C = (x == null ? void 0 : x.actor) ?? null;
          if (C) {
            const Z = ((o = C.system) == null ? void 0 : o.combat) ?? {}, ue = Number(Z.defense ?? 0) || 0, de = Number(Z.defenseBonus ?? 0) || 0, me = Number(Z.givenProtection ?? 0) || 0, he = (c = (i = C.statuses) == null ? void 0 : i.has) != null && c.call(i, "lookaround") ? 1 : 0, pe = (P = (d = C.statuses) == null ? void 0 : d.has) != null && P.call(d, "halfcover") ? 3 : 0, fe = (_ = (B = C.statuses) == null ? void 0 : B.has) != null && _.call(B, "threequarteredcover") ? 6 : 0;
            let ee = 0;
            if (C.type === "Karakter") {
              const q = (((S = C.items) == null ? void 0 : S.contents) ?? []).filter(
                (G) => {
                  var Y;
                  return G.type === "Pancel" && ((Y = G.system) == null ? void 0 : Y.equipped) === !0;
                }
              );
              for (const G of q) {
                const Y = String(((T = G.system) == null ? void 0 : T.protectionBonus) ?? "").trim().replace(",", "."), ae = Number(Y);
                Number.isFinite(ae) && (ee += ae);
              }
            }
            const ve = me + ee + he + pe + fe, te = ue + de + ve, se = (Number(O.total ?? 0) || 0) >= te, ye = C.name ?? x.name ?? "Célpont";
            let F = null, W = null;
            if (se && C.type === "Karakter")
              try {
                const q = new Roll("1d8");
                await q.evaluate({ async: !0 }), F = Number(q.total ?? 0) || 1, F === 1 ? W = "Fej" : F >= 2 && F <= 4 ? W = "Törzs" : F === 5 || F === 6 ? W = "Karok" : W = "Lábak";
              } catch (q) {
                console.warn("VOTV hit location roll failed:", q);
              }
            X.weaponAttack = !0, X.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: C.id ?? null,
              targetName: ye,
              defense: te,
              isHit: se,
              hitLocationRoll: F ?? null,
              hitLocationName: W ?? null
            };
          }
        }
        if (await O.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ce,
          flags: { "vacuum-of-the-void": X },
          rollMode: le
        }), g > 0) {
          const D = Math.max(0, R - g);
          await e.update({ "system.resources.morale": D });
        }
        if (this._isInitiativeRoll)
          try {
            const D = Number(O.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": D });
            const x = e.apps ?? [];
            for (const C of x)
              typeof (C == null ? void 0 : C.render) == "function" && C.render(!0);
          } catch (D) {
            console.warn("VOTV initiative result update:", D);
          }
      } finally {
        this.close();
      }
    }
  }
}
function _e(N, t, e) {
  var s, u;
  if (!N) return;
  const a = Number(((u = (s = N.system) == null ? void 0 : s.skills) == null ? void 0 : u[t]) ?? 0) || 0, l = J.BODY_PART_BY_SKILL[t] ? J._getSkillHealthStatusStatic(N, t) : void 0;
  let v = 0;
  l === 1 ? v = -6 : l === 2 && (v = -3);
  const y = (e || "").trim() === "Kezdeményezés";
  new ne({
    actor: N,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: y
  }).render(!0);
}
function Me(N, t) {
  var j, z, R, g, w, A, E, $, Q, K, U;
  if (!N || !t) return;
  const e = N, l = (((j = e.system) == null ? void 0 : j.weapons) ?? {})[t] ?? {}, v = ((z = e.system) == null ? void 0 : z.skills) ?? {}, y = ((g = (R = e.items) == null ? void 0 : R.filter) == null ? void 0 : g.call(R, (H) => H.type === "Fegyver")) ?? [], h = (l.itemId ?? "").trim(), s = h ? y.find((H) => H.id === h) ?? null : null, u = ((s == null ? void 0 : s.name) ?? l.name ?? "").trim() || "Fegyver", p = (w = s == null ? void 0 : s.system) == null ? void 0 : w.bonus, r = l.bonus, f = p != null && String(p).trim() !== "", m = r != null && String(r).trim() !== "", b = Number(f ? p : m ? r : 0) || 0, I = ((A = s == null ? void 0 : s.system) == null ? void 0 : A.type) || "kinetic", M = (((E = s == null ? void 0 : s.system) == null ? void 0 : E.skillKey) ?? "").trim(), n = M && v[M] !== void 0 ? M : I === "explosive" ? "grenadeUse" : "firearms", o = Number(v[n] || 0) || 0, i = b + o;
  let c = 0;
  if (e.type === "Karakter") {
    const H = J._getSkillHealthStatusStatic(e, n);
    H === 1 ? c = -6 : H === 2 && (c = -3);
  }
  const d = ((($ = s == null ? void 0 : s.system) == null ? void 0 : $.damage) ?? "").trim(), P = (l.damage ?? "").trim(), B = d || P || "", _ = ((Q = s == null ? void 0 : s.system) == null ? void 0 : Q.size) ?? l.size ?? "", S = String(_).toLowerCase() === "heavy", T = ((U = (K = e.statuses) == null ? void 0 : K.has) == null ? void 0 : U.call(K, "halfcover")) ?? !1, V = S && T;
  new ne({
    actor: N,
    skillKey: n,
    label: u,
    baseModifier: i,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: B,
    blockHeavyInHalfCover: V
  }).render(!0);
}
export {
  ne as VoidRollSheet,
  _e as openRollSheetForSkill,
  Me as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-2pAhXPAc.mjs.map
