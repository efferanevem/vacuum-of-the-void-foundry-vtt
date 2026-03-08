import { V as U, c as ie } from "./vacuum-of-the-void-CUGBhBIf.mjs";
class Z extends Application {
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
      baseModifier: m,
      injuryModifier: g,
      injuryPenalty: u,
      isWeaponAttack: s,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: l,
      weaponDamageFormula: d,
      blockHeavyInHalfCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "", this._blockHeavyInHalfCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var y, k, w, b, S;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((k = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : k.call(y, "form.votv.roll-sheet")) ?? ((b = (w = this.element) == null ? void 0 : w.matches) != null && b.call(w, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), m = a.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), m.forEach((i) => {
        const c = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", c === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), g((r == null ? void 0 : r.value) ?? "0");
    const u = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), h = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), h && (h.value = String(o)), p.forEach((i, c) => {
        i.classList.toggle("selected", c < o), i.style.pointerEvents = c < s ? "" : "none", i.style.opacity = c < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const i = n.dataset.moraleValue ?? "0";
        l(i), t._updateFormulaPreview(a);
      });
    }), l((h == null ? void 0 : h.value) ?? "0");
    const d = a.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(a)), d && d.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, i, c, f;
      if ((i = (o = n.target) == null ? void 0 : o.closest) != null && i.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (f = (c = n.target) == null ? void 0 : c.closest) != null && f.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var y, k, w, b, S, n, o, i, c, f, j, B;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, r = parseInt(((k = t.querySelector("input[name='moraleDice']")) == null ? void 0 : k.value) ?? "0", 10) || 0, m = parseInt(((w = t.querySelector("input[name='constantBonus']")) == null ? void 0 : w.value) ?? "0", 10) || 0, g = parseInt(((b = t.dataset) == null ? void 0 : b.baseMod) ?? "0", 10) || 0, u = parseInt(((S = t.dataset) == null ? void 0 : S.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = (c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "diseased") || (B = (j = (f = this.actor) == null ? void 0 : f.statuses) == null ? void 0 : j.has) != null && B.call(j, "poisoned") ? -1 : 0, p = g + u + s + m + h, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", l[0].appendChild(d), a !== 0) {
      const M = document.createElement("span");
      M.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const _ = document.createElement("img");
      _.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", _.alt = a > 0 ? "előny d6" : "hátrány d6", _.className = "roll-sheet-preview-die", M.appendChild(_), l.push(M);
    }
    if (r > 0) {
      const M = document.createElement("span");
      M.textContent = ` + ${r} `;
      const _ = document.createElement("img");
      _.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", _.alt = "d8", _.className = "roll-sheet-preview-die", M.appendChild(_), l.push(M);
    }
    if (p !== 0) {
      const M = document.createElement("span");
      M.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, l.push(M);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var b, S, n, o, i, c, f, j, B, M, _, F, C, q;
    const e = this.actor, a = Math.max(0, Number(((S = (b = e == null ? void 0 : e.system) == null ? void 0 : b.resources) == null ? void 0 : S.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", r, m, g].filter(Boolean).join(" ") || "3d6";
    let s = "", h = 0;
    const p = [], l = [];
    let d = 0;
    if (this._isWeaponAttack && ((o = (n = game.user) == null ? void 0 : n.targets) != null && o.size)) {
      const P = Array.from(game.user.targets)[0], I = (P == null ? void 0 : P.actor) ?? null;
      s = (I == null ? void 0 : I.name) || (P == null ? void 0 : P.name) || "", (c = (i = I == null ? void 0 : I.statuses) == null ? void 0 : i.has) != null && c.call(i, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (j = (f = I == null ? void 0 : I.statuses) == null ? void 0 : f.has) != null && j.call(f, "dodge") && (d = 1, l.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (M = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && M.call(B, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (F = (_ = e == null ? void 0 : e.statuses) == null ? void 0 : _.has) != null && F.call(_, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const y = ((q = (C = e == null ? void 0 : e.statuses) == null ? void 0 : C.has) == null ? void 0 : q.call(C, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    y && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const k = Math.min(3, Math.max(
      -3,
      h - d + (y ? -1 : 0)
    )), w = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: a,
      advantageValue: k,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
      blockHeavyInHalfCoverMessage: w,
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
    var S, n, o, i, c;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((S = t.system) == null ? void 0 : S.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (f) => f.type === "Fegyver")) ?? [], m = (a.itemId ?? "").trim(), g = m ? r.find((f) => f.id === m) ?? null : null, u = (i = g == null ? void 0 : g.system) == null ? void 0 : i.bonus, s = a.bonus, h = u != null && String(u).trim() !== "", p = s != null && String(s).trim() !== "", d = Number(h ? u : p ? s : 0) || 0, y = this._skillKey, k = ((c = t.system) == null ? void 0 : c.skills) ?? {}, w = Number(k[y] ?? 0) || 0;
    let b = 0;
    if (t.type === "Karakter" && y) {
      const f = U._getSkillHealthStatusStatic(t, y);
      f === 1 ? b = -6 : f === 2 && (b = -3);
    }
    return d + w + b;
  }
  async _doRoll(t) {
    var a, r, m, g, u, s, h, p, l, d, y, k, w, b, S;
    const e = this.actor;
    if (e)
      try {
        const n = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), c = Math.min(3, Math.max(0, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), f = Math.max(0, Number(((r = (a = e.system) == null ? void 0 : a.resources) == null ? void 0 : r.morale) ?? 0) || 0), j = Math.min(c, f), B = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), M = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, _ = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, F = this._isWeaponAttack ? 0 : this._injuryModifier, C = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, H = ((g = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : g.call(m, "diseased")) || ((s = (u = e.statuses) == null ? void 0 : u.has) == null ? void 0 : s.call(u, "poisoned")) ? -1 : 0, P = _ + F + C + M + H, I = [
          "3d6",
          B > 0 ? `+${B}d6` : B < 0 ? `-${Math.abs(B)}d6` : "",
          j > 0 ? `+${j}d8` : "",
          P !== 0 ? P > 0 ? `+${P}` : `${P}` : ""
        ].filter(Boolean).join(" "), x = new Roll(I);
        await x.evaluate({ async: !0 });
        const { resultType: A, label: K } = ie(x), O = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let E = this._label;
        const R = { resultType: A, critLabel: K };
        if (this._isWeaponAttack && ((p = (h = game.user) == null ? void 0 : h.targets) != null && p.size)) {
          const N = Array.from(game.user.targets)[0], v = (N == null ? void 0 : N.actor) ?? null;
          if (v) {
            const Y = ((l = v.system) == null ? void 0 : l.combat) ?? {}, ee = Number(Y.defense ?? 0) || 0, te = Number(Y.defenseBonus ?? 0) || 0, se = Number(Y.givenProtection ?? 0) || 0, ae = (y = (d = v.statuses) == null ? void 0 : d.has) != null && y.call(d, "lookaround") ? 1 : 0, ne = (w = (k = v.statuses) == null ? void 0 : k.has) != null && w.call(k, "halfcover") ? 3 : 0;
            let G = 0;
            if (v.type === "Karakter") {
              const z = (((b = v.items) == null ? void 0 : b.contents) ?? []).filter(
                (W) => {
                  var $;
                  return W.type === "Pancel" && (($ = W.system) == null ? void 0 : $.equipped) === !0;
                }
              );
              for (const W of z) {
                const $ = String(((S = W.system) == null ? void 0 : S.protectionBonus) ?? "").trim().replace(",", "."), X = Number($);
                Number.isFinite(X) && (G += X);
              }
            }
            const J = ee + te + se + G + ae + ne, Q = (Number(x.total ?? 0) || 0) >= J, oe = v.name ?? N.name ?? "Célpont";
            let D = null, T = null;
            if (Q && v.type === "Karakter")
              try {
                const z = new Roll("1d8");
                await z.evaluate({ async: !0 }), D = Number(z.total ?? 0) || 1, D === 1 ? T = "Fej" : D >= 2 && D <= 4 ? T = "Törzs" : D === 5 || D === 6 ? T = "Karok" : T = "Lábak";
              } catch (z) {
                console.warn("VOTV hit location roll failed:", z);
              }
            R.weaponAttack = !0, R.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: v.id ?? null,
              targetName: oe,
              defense: J,
              isHit: Q,
              hitLocationRoll: D ?? null,
              hitLocationName: T ?? null
            };
          }
        }
        if (await x.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: E,
          flags: { "vacuum-of-the-void": R },
          rollMode: O
        }), j > 0) {
          const V = Math.max(0, f - j);
          await e.update({ "system.resources.morale": V });
        }
        if (this._isInitiativeRoll)
          try {
            const V = Number(x.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": V });
            const N = e.apps ?? [];
            for (const v of N)
              typeof (v == null ? void 0 : v.render) == "function" && v.render(!0);
          } catch (V) {
            console.warn("VOTV initiative result update:", V);
          }
      } finally {
        this.close();
      }
  }
}
function ce(L, t, e) {
  var s, h;
  if (!L) return;
  const a = Number(((h = (s = L.system) == null ? void 0 : s.skills) == null ? void 0 : h[t]) ?? 0) || 0, r = U.BODY_PART_BY_SKILL[t] ? U._getSkillHealthStatusStatic(L, t) : void 0;
  let m = 0;
  r === 1 ? m = -6 : r === 2 && (m = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new Z({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: m,
    isInitiativeRoll: g
  }).render(!0);
}
function ue(L, t) {
  var H, P, I, x, A, K, O, E, R, V, N;
  if (!L || !t) return;
  const e = L, r = (((H = e.system) == null ? void 0 : H.weapons) ?? {})[t] ?? {}, m = ((P = e.system) == null ? void 0 : P.skills) ?? {}, g = ((x = (I = e.items) == null ? void 0 : I.filter) == null ? void 0 : x.call(I, (v) => v.type === "Fegyver")) ?? [], u = (r.itemId ?? "").trim(), s = u ? g.find((v) => v.id === u) ?? null : null, h = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", p = (A = s == null ? void 0 : s.system) == null ? void 0 : A.bonus, l = r.bonus, d = p != null && String(p).trim() !== "", y = l != null && String(l).trim() !== "", w = Number(d ? p : y ? l : 0) || 0, b = ((K = s == null ? void 0 : s.system) == null ? void 0 : K.type) || "kinetic", S = (((O = s == null ? void 0 : s.system) == null ? void 0 : O.skillKey) ?? "").trim(), n = S && m[S] !== void 0 ? S : b === "explosive" ? "grenadeUse" : "firearms", o = Number(m[n] || 0) || 0, i = w + o;
  let c = 0;
  if (e.type === "Karakter") {
    const v = U._getSkillHealthStatusStatic(e, n);
    v === 1 ? c = -6 : v === 2 && (c = -3);
  }
  const f = (((E = s == null ? void 0 : s.system) == null ? void 0 : E.damage) ?? "").trim(), j = (r.damage ?? "").trim(), B = f || j || "", M = ((R = s == null ? void 0 : s.system) == null ? void 0 : R.size) ?? r.size ?? "", _ = String(M).toLowerCase() === "heavy", F = ((N = (V = e.statuses) == null ? void 0 : V.has) == null ? void 0 : N.call(V, "halfcover")) ?? !1, C = _ && F;
  new Z({
    actor: L,
    skillKey: n,
    label: h,
    baseModifier: i,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? u,
    weaponDamageFormula: B,
    blockHeavyInHalfCover: C
  }).render(!0);
}
export {
  Z as VoidRollSheet,
  ce as openRollSheetForSkill,
  ue as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DjjvqI8M.mjs.map
