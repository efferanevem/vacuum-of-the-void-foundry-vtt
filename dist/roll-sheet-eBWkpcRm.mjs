import { V as G, c as pe } from "./vacuum-of-the-void-Da9lPOsa.mjs";
class ae extends Application {
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
      baseModifier: y,
      injuryModifier: v,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: u,
      weaponSlotKey: p,
      weaponItemId: l,
      weaponDamageFormula: f,
      blockHeavyInHalfCover: m
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(y) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!u, this._weaponSlotKey = p || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof f == "string" ? f.trim() : "", this._blockHeavyInHalfCover = !!m;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var m, j, b, I, w;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : j.call(m, "form.votv.roll-sheet")) ?? ((I = (b = this.element) == null ? void 0 : b.matches) != null && I.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), y = a.querySelectorAll(".roll-sheet-advantage-d6"), v = (n) => {
      const i = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(i)), y.forEach((o) => {
        const c = parseInt(o.dataset.advantageValue ?? "0", 10);
        o.classList.toggle("selected", c === i);
      });
    };
    y.forEach((n) => {
      n.addEventListener("click", (i) => {
        i.preventDefault(), v(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), v((r == null ? void 0 : r.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((w = h == null ? void 0 : h.dataset) == null ? void 0 : w.moraleMax) ?? "3", 10) || 0)), u = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
      let i = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      i = Math.min(i, s), u && (u.value = String(i)), p.forEach((o, c) => {
        o.classList.toggle("selected", c < i), o.style.pointerEvents = c < s ? "" : "none", o.style.opacity = c < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (i) => {
        if (i.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const o = n.dataset.moraleValue ?? "0";
        l(o), t._updateFormulaPreview(a);
      });
    }), l((u == null ? void 0 : u.value) ?? "0");
    const f = a.querySelector("input[name='constantBonus']");
    f && f.addEventListener("input", () => t._updateFormulaPreview(a)), f && f.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var i, o, c, d;
      if ((o = (i = n.target) == null ? void 0 : i.closest) != null && o.call(i, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (d = (c = n.target) == null ? void 0 : c.closest) != null && d.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var m, j, b, I, w, n, i, o, c, d, P, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((m = t.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, r = parseInt(((j = t.querySelector("input[name='moraleDice']")) == null ? void 0 : j.value) ?? "0", 10) || 0, y = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, v = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, h = parseInt(((w = t.dataset) == null ? void 0 : w.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, u = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "diseased") || (V = (P = (d = this.actor) == null ? void 0 : d.statuses) == null ? void 0 : P.has) != null && V.call(P, "poisoned") ? -1 : 0, p = v + h + s + y + u, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", l[0].appendChild(f), a !== 0) {
      const M = document.createElement("span");
      M.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const g = document.createElement("img");
      g.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", g.alt = a > 0 ? "előny d6" : "hátrány d6", g.className = "roll-sheet-preview-die", M.appendChild(g), l.push(M);
    }
    if (r > 0) {
      const M = document.createElement("span");
      M.textContent = ` + ${r} `;
      const g = document.createElement("img");
      g.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", g.alt = "d8", g.className = "roll-sheet-preview-die", M.appendChild(g), l.push(M);
    }
    if (p !== 0) {
      const M = document.createElement("span");
      M.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, l.push(M);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var I, w, n, i, o, c, d, P, V, M, g, L, B, z;
    const e = this.actor, a = Math.max(0, Number(((w = (I = e == null ? void 0 : e.system) == null ? void 0 : I.resources) == null ? void 0 : w.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, y, v].filter(Boolean).join(" ") || "3d6";
    let s = "", u = 0;
    const p = [], l = [];
    let f = 0;
    if (this._isWeaponAttack && ((i = (n = game.user) == null ? void 0 : n.targets) != null && i.size)) {
      const S = Array.from(game.user.targets)[0], _ = (S == null ? void 0 : S.actor) ?? null;
      s = (_ == null ? void 0 : _.name) || (S == null ? void 0 : S.name) || "", (c = (o = _ == null ? void 0 : _.statuses) == null ? void 0 : o.has) != null && c.call(o, "stunned") && (u = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (P = (d = _ == null ? void 0 : _.statuses) == null ? void 0 : d.has) != null && P.call(d, "dodge") && (f = 1, l.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (M = (V = e == null ? void 0 : e.statuses) == null ? void 0 : V.has) != null && M.call(V, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (L = (g = e == null ? void 0 : e.statuses) == null ? void 0 : g.has) != null && L.call(g, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const m = ((z = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) == null ? void 0 : z.call(B, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    m && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const j = Math.min(3, Math.max(
      -3,
      u - f + (m ? -1 : 0)
    )), b = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: j,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
      blockHeavyInHalfCoverMessage: b,
      disableRollButton: this._blockHeavyInHalfCover,
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
    var w, n, i, o, c;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((w = t.system) == null ? void 0 : w.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((i = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : i.call(n, (d) => d.type === "Fegyver")) ?? [], y = (a.itemId ?? "").trim(), v = y ? r.find((d) => d.id === y) ?? null : null, h = (o = v == null ? void 0 : v.system) == null ? void 0 : o.bonus, s = a.bonus, u = h != null && String(h).trim() !== "", p = s != null && String(s).trim() !== "", f = Number(u ? h : p ? s : 0) || 0, m = this._skillKey, j = ((c = t.system) == null ? void 0 : c.skills) ?? {}, b = Number(j[m] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && m) {
      const d = G._getSkillHealthStatusStatic(t, m);
      d === 1 ? I = -6 : d === 2 && (I = -3);
    }
    return f + b + I;
  }
  async _doRoll(t) {
    var a, r, y, v, h, s, u, p, l, f, m, j, b, I, w, n, i, o, c, d, P, V, M;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey && ((r = (a = e.statuses) == null ? void 0 : a.has) != null && r.call(a, "halfcover"))) {
        const L = (((y = e.system) == null ? void 0 : y.weapons) ?? {})[this._weaponSlotKey] ?? {}, B = (L.itemId ?? "").trim(), z = B ? (((h = (v = e.items) == null ? void 0 : v.filter) == null ? void 0 : h.call(v, (S) => S.type === "Fegyver")) ?? []).find((S) => S.id === B) ?? null : null;
        if ((((s = z == null ? void 0 : z.system) == null ? void 0 : s.size) ?? L.size ?? "").toString().toLowerCase() === "heavy") {
          const S = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (p = (u = ui.notifications) == null ? void 0 : u.warn) == null || p.call(u, S);
          return;
        }
      }
      try {
        const g = t.querySelector("[name='moraleDice']"), L = t.querySelector("[name='advantage']"), B = t.querySelector("[name='constantBonus']"), z = Math.min(3, Math.max(0, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), D = Math.max(0, Number(((f = (l = e.system) == null ? void 0 : l.resources) == null ? void 0 : f.morale) ?? 0) || 0), S = Math.min(z, D), _ = Math.min(3, Math.max(-3, parseInt((L == null ? void 0 : L.value) ?? "0", 10) || 0)), A = parseInt((B == null ? void 0 : B.value) ?? "0", 10) || 0, O = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, q = this._isWeaponAttack ? 0 : this._injuryModifier, W = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, E = ((j = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : j.call(m, "diseased")) || ((I = (b = e.statuses) == null ? void 0 : b.has) == null ? void 0 : I.call(b, "poisoned")) ? -1 : 0, F = O + q + W + A + E, $ = [
          "3d6",
          _ > 0 ? `+${_}d6` : _ < 0 ? `-${Math.abs(_)}d6` : "",
          S > 0 ? `+${S}d8` : "",
          F !== 0 ? F > 0 ? `+${F}` : `${F}` : ""
        ].filter(Boolean).join(" "), C = new Roll($);
        await C.evaluate({ async: !0 });
        const { resultType: ne, label: oe } = pe(C), ie = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let le = this._label;
        const Q = { resultType: ne, critLabel: oe };
        if (this._isWeaponAttack && ((n = (w = game.user) == null ? void 0 : w.targets) != null && n.size)) {
          const H = Array.from(game.user.targets)[0], k = (H == null ? void 0 : H.actor) ?? null;
          if (k) {
            const X = ((i = k.system) == null ? void 0 : i.combat) ?? {}, re = Number(X.defense ?? 0) || 0, ce = Number(X.defenseBonus ?? 0) || 0, ue = Number(X.givenProtection ?? 0) || 0, de = (c = (o = k.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, me = (P = (d = k.statuses) == null ? void 0 : d.has) != null && P.call(d, "halfcover") ? 3 : 0;
            let Z = 0;
            if (k.type === "Karakter") {
              const T = (((V = k.items) == null ? void 0 : V.contents) ?? []).filter(
                (U) => {
                  var Y;
                  return U.type === "Pancel" && ((Y = U.system) == null ? void 0 : Y.equipped) === !0;
                }
              );
              for (const U of T) {
                const Y = String(((M = U.system) == null ? void 0 : M.protectionBonus) ?? "").trim().replace(",", "."), se = Number(Y);
                Number.isFinite(se) && (Z += se);
              }
            }
            const ee = re + ce + ue + Z + de + me, te = (Number(C.total ?? 0) || 0) >= ee, he = k.name ?? H.name ?? "Célpont";
            let R = null, K = null;
            if (te && k.type === "Karakter")
              try {
                const T = new Roll("1d8");
                await T.evaluate({ async: !0 }), R = Number(T.total ?? 0) || 1, R === 1 ? K = "Fej" : R >= 2 && R <= 4 ? K = "Törzs" : R === 5 || R === 6 ? K = "Karok" : K = "Lábak";
              } catch (T) {
                console.warn("VOTV hit location roll failed:", T);
              }
            Q.weaponAttack = !0, Q.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: k.id ?? null,
              targetName: he,
              defense: ee,
              isHit: te,
              hitLocationRoll: R ?? null,
              hitLocationName: K ?? null
            };
          }
        }
        if (await C.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: le,
          flags: { "vacuum-of-the-void": Q },
          rollMode: ie
        }), S > 0) {
          const x = Math.max(0, D - S);
          await e.update({ "system.resources.morale": x });
        }
        if (this._isInitiativeRoll)
          try {
            const x = Number(C.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": x });
            const H = e.apps ?? [];
            for (const k of H)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (x) {
            console.warn("VOTV initiative result update:", x);
          }
      } finally {
        this.close();
      }
    }
  }
}
function ve(N, t, e) {
  var s, u;
  if (!N) return;
  const a = Number(((u = (s = N.system) == null ? void 0 : s.skills) == null ? void 0 : u[t]) ?? 0) || 0, r = G.BODY_PART_BY_SKILL[t] ? G._getSkillHealthStatusStatic(N, t) : void 0;
  let y = 0;
  r === 1 ? y = -6 : r === 2 && (y = -3);
  const v = (e || "").trim() === "Kezdeményezés";
  new ae({
    actor: N,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: y,
    isInitiativeRoll: v
  }).render(!0);
}
function ge(N, t) {
  var D, S, _, A, O, q, W, J, E, F, $;
  if (!N || !t) return;
  const e = N, r = (((D = e.system) == null ? void 0 : D.weapons) ?? {})[t] ?? {}, y = ((S = e.system) == null ? void 0 : S.skills) ?? {}, v = ((A = (_ = e.items) == null ? void 0 : _.filter) == null ? void 0 : A.call(_, (C) => C.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), s = h ? v.find((C) => C.id === h) ?? null : null, u = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", p = (O = s == null ? void 0 : s.system) == null ? void 0 : O.bonus, l = r.bonus, f = p != null && String(p).trim() !== "", m = l != null && String(l).trim() !== "", b = Number(f ? p : m ? l : 0) || 0, I = ((q = s == null ? void 0 : s.system) == null ? void 0 : q.type) || "kinetic", w = (((W = s == null ? void 0 : s.system) == null ? void 0 : W.skillKey) ?? "").trim(), n = w && y[w] !== void 0 ? w : I === "explosive" ? "grenadeUse" : "firearms", i = Number(y[n] || 0) || 0, o = b + i;
  let c = 0;
  if (e.type === "Karakter") {
    const C = G._getSkillHealthStatusStatic(e, n);
    C === 1 ? c = -6 : C === 2 && (c = -3);
  }
  const d = (((J = s == null ? void 0 : s.system) == null ? void 0 : J.damage) ?? "").trim(), P = (r.damage ?? "").trim(), V = d || P || "", M = ((E = s == null ? void 0 : s.system) == null ? void 0 : E.size) ?? r.size ?? "", g = String(M).toLowerCase() === "heavy", L = (($ = (F = e.statuses) == null ? void 0 : F.has) == null ? void 0 : $.call(F, "halfcover")) ?? !1, B = g && L;
  new ae({
    actor: N,
    skillKey: n,
    label: u,
    baseModifier: o,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: V,
    blockHeavyInHalfCover: B
  }).render(!0);
}
export {
  ae as VoidRollSheet,
  ve as openRollSheetForSkill,
  ge as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-eBWkpcRm.mjs.map
