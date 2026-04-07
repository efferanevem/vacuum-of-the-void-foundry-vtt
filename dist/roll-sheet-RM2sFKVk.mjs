import { V as Q, c as ge } from "./vacuum-of-the-void-CzWc90aT.mjs";
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
    var m, j, S, M, _;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : j.call(m, "form.votv.roll-sheet")) ?? ((M = (S = this.element) == null ? void 0 : S.matches) != null && M.call(S, "form.votv.roll-sheet") ? this.element : null);
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
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((_ = h == null ? void 0 : h.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), u = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
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
    var m, j, S, M, _, n, i, o, c, d, V, B;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((m = t.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, r = parseInt(((j = t.querySelector("input[name='moraleDice']")) == null ? void 0 : j.value) ?? "0", 10) || 0, y = parseInt(((S = t.querySelector("input[name='constantBonus']")) == null ? void 0 : S.value) ?? "0", 10) || 0, v = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, h = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, u = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "diseased") || (B = (V = (d = this.actor) == null ? void 0 : d.statuses) == null ? void 0 : V.has) != null && B.call(V, "poisoned") ? -1 : 0, p = v + h + s + y + u, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", l[0].appendChild(f), a !== 0) {
      const b = document.createElement("span");
      b.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const g = document.createElement("img");
      g.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", g.alt = a > 0 ? "előny d6" : "hátrány d6", g.className = "roll-sheet-preview-die", b.appendChild(g), l.push(b);
    }
    if (r > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${r} `;
      const g = document.createElement("img");
      g.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", g.alt = "d8", g.className = "roll-sheet-preview-die", b.appendChild(g), l.push(b);
    }
    if (p !== 0) {
      const b = document.createElement("span");
      b.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, l.push(b);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var M, _, n, i, o, c, d, V, B, b, g, D, C, N;
    const e = this.actor, a = Math.max(0, Number(((_ = (M = e == null ? void 0 : e.system) == null ? void 0 : M.resources) == null ? void 0 : _.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, y, v].filter(Boolean).join(" ") || "3d6";
    let s = "", u = 0;
    const p = [], l = [];
    let f = 0;
    if (this._isWeaponAttack && ((i = (n = game.user) == null ? void 0 : n.targets) != null && i.size)) {
      const I = Array.from(game.user.targets)[0], w = (I == null ? void 0 : I.actor) ?? null;
      s = (w == null ? void 0 : w.name) || (I == null ? void 0 : I.name) || "", (c = (o = w == null ? void 0 : w.statuses) == null ? void 0 : o.has) != null && c.call(o, "stunned") && (u = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (V = (d = w == null ? void 0 : w.statuses) == null ? void 0 : d.has) != null && V.call(d, "dodge") && (f = 1, l.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (b = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && b.call(B, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (D = (g = e == null ? void 0 : e.statuses) == null ? void 0 : g.has) != null && D.call(g, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const m = ((N = (C = e == null ? void 0 : e.statuses) == null ? void 0 : C.has) == null ? void 0 : N.call(C, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    m && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const j = Math.min(3, Math.max(
      -3,
      u - f + (m ? -1 : 0)
    )), S = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: j,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
      blockHeavyInHalfCoverMessage: S,
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
    var _, n, i, o, c;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((_ = t.system) == null ? void 0 : _.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((i = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : i.call(n, (d) => d.type === "Fegyver")) ?? [], y = (a.itemId ?? "").trim(), v = y ? r.find((d) => d.id === y) ?? null : null, h = (o = v == null ? void 0 : v.system) == null ? void 0 : o.bonus, s = a.bonus, u = h != null && String(h).trim() !== "", p = s != null && String(s).trim() !== "", f = Number(u ? h : p ? s : 0) || 0, m = this._skillKey, j = ((c = t.system) == null ? void 0 : c.skills) ?? {}, S = Number(j[m] ?? 0) || 0;
    let M = 0;
    if (t.type === "Karakter" && m) {
      const d = Q._getSkillHealthStatusStatic(t, m);
      d === 1 ? M = -6 : d === 2 && (M = -3);
    }
    return f + S + M;
  }
  async _doRoll(t) {
    var a, r, y, v, h, s, u, p, l, f, m, j, S, M, _, n, i, o, c, d, V, B, b, g, D;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey && ((r = (a = e.statuses) == null ? void 0 : a.has) != null && r.call(a, "halfcover"))) {
        const N = (((y = e.system) == null ? void 0 : y.weapons) ?? {})[this._weaponSlotKey] ?? {}, z = (N.itemId ?? "").trim(), I = z ? (((h = (v = e.items) == null ? void 0 : v.filter) == null ? void 0 : h.call(v, (P) => P.type === "Fegyver")) ?? []).find((P) => P.id === z) ?? null : null;
        if ((((s = I == null ? void 0 : I.system) == null ? void 0 : s.size) ?? N.size ?? "").toString().toLowerCase() === "heavy") {
          const P = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (p = (u = ui.notifications) == null ? void 0 : u.warn) == null || p.call(u, P);
          return;
        }
      }
      try {
        const C = t.querySelector("[name='moraleDice']"), N = t.querySelector("[name='advantage']"), z = t.querySelector("[name='constantBonus']"), I = Math.min(3, Math.max(0, parseInt((C == null ? void 0 : C.value) ?? "0", 10) || 0)), w = Math.max(0, Number(((f = (l = e.system) == null ? void 0 : l.resources) == null ? void 0 : f.morale) ?? 0) || 0), P = Math.min(I, w), R = Math.min(3, Math.max(-3, parseInt((N == null ? void 0 : N.value) ?? "0", 10) || 0)), W = parseInt((z == null ? void 0 : z.value) ?? "0", 10) || 0, E = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, $ = this._isWeaponAttack ? 0 : this._injuryModifier, U = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, G = ((j = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : j.call(m, "diseased")) || ((M = (S = e.statuses) == null ? void 0 : S.has) == null ? void 0 : M.call(S, "poisoned")) ? -1 : 0, L = E + $ + U + W + G, oe = [
          "3d6",
          R > 0 ? `+${R}d6` : R < 0 ? `-${Math.abs(R)}d6` : "",
          P > 0 ? `+${P}d8` : "",
          L !== 0 ? L > 0 ? `+${L}` : `${L}` : ""
        ].filter(Boolean).join(" "), A = new Roll(oe);
        await A.evaluate({ async: !0 });
        const { resultType: ie, label: le } = ge(A), re = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ce = this._label;
        const X = { resultType: ie, critLabel: le };
        if (this._isWeaponAttack && ((n = (_ = game.user) == null ? void 0 : _.targets) != null && n.size)) {
          const T = Array.from(game.user.targets)[0], k = (T == null ? void 0 : T.actor) ?? null;
          if (k) {
            const Z = ((i = k.system) == null ? void 0 : i.combat) ?? {}, ue = Number(Z.defense ?? 0) || 0, de = Number(Z.defenseBonus ?? 0) || 0, me = Number(Z.givenProtection ?? 0) || 0, he = (c = (o = k.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, pe = (V = (d = k.statuses) == null ? void 0 : d.has) != null && V.call(d, "halfcover") ? 3 : 0, fe = (b = (B = k.statuses) == null ? void 0 : B.has) != null && b.call(B, "threequarteredcover") ? 6 : 0;
            let ee = 0;
            if (k.type === "Karakter") {
              const q = (((g = k.items) == null ? void 0 : g.contents) ?? []).filter(
                (Y) => {
                  var J;
                  return Y.type === "Pancel" && ((J = Y.system) == null ? void 0 : J.equipped) === !0;
                }
              );
              for (const Y of q) {
                const J = String(((D = Y.system) == null ? void 0 : D.protectionBonus) ?? "").trim().replace(",", "."), ae = Number(J);
                Number.isFinite(ae) && (ee += ae);
              }
            }
            const ye = me + ee + he + pe + fe, te = ue + de + ye, se = (Number(A.total ?? 0) || 0) >= te, ve = k.name ?? T.name ?? "Célpont";
            let x = null, O = null;
            if (se && k.type === "Karakter")
              try {
                const q = new Roll("1d8");
                await q.evaluate({ async: !0 }), x = Number(q.total ?? 0) || 1, x === 1 ? O = "Fej" : x >= 2 && x <= 4 ? O = "Törzs" : x === 5 || x === 6 ? O = "Karok" : O = "Lábak";
              } catch (q) {
                console.warn("VOTV hit location roll failed:", q);
              }
            X.weaponAttack = !0, X.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: k.id ?? null,
              targetName: ve,
              defense: te,
              isHit: se,
              hitLocationRoll: x ?? null,
              hitLocationName: O ?? null
            };
          }
        }
        if (await A.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ce,
          flags: { "vacuum-of-the-void": X },
          rollMode: re
        }), P > 0) {
          const H = Math.max(0, w - P);
          await e.update({ "system.resources.morale": H });
        }
        if (this._isInitiativeRoll)
          try {
            const H = Number(A.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": H });
            const T = e.apps ?? [];
            for (const k of T)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (H) {
            console.warn("VOTV initiative result update:", H);
          }
      } finally {
        this.close();
      }
    }
  }
}
function be(F, t, e) {
  var s, u;
  if (!F) return;
  const a = Number(((u = (s = F.system) == null ? void 0 : s.skills) == null ? void 0 : u[t]) ?? 0) || 0, r = Q.BODY_PART_BY_SKILL[t] ? Q._getSkillHealthStatusStatic(F, t) : void 0;
  let y = 0;
  r === 1 ? y = -6 : r === 2 && (y = -3);
  const v = (e || "").trim() === "Kezdeményezés";
  new ne({
    actor: F,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: y,
    isInitiativeRoll: v
  }).render(!0);
}
function we(F, t) {
  var z, I, w, P, R, W, E, $, U, K, G;
  if (!F || !t) return;
  const e = F, r = (((z = e.system) == null ? void 0 : z.weapons) ?? {})[t] ?? {}, y = ((I = e.system) == null ? void 0 : I.skills) ?? {}, v = ((P = (w = e.items) == null ? void 0 : w.filter) == null ? void 0 : P.call(w, (L) => L.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), s = h ? v.find((L) => L.id === h) ?? null : null, u = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", p = (R = s == null ? void 0 : s.system) == null ? void 0 : R.bonus, l = r.bonus, f = p != null && String(p).trim() !== "", m = l != null && String(l).trim() !== "", S = Number(f ? p : m ? l : 0) || 0, M = ((W = s == null ? void 0 : s.system) == null ? void 0 : W.type) || "kinetic", _ = (((E = s == null ? void 0 : s.system) == null ? void 0 : E.skillKey) ?? "").trim(), n = _ && y[_] !== void 0 ? _ : M === "explosive" ? "grenadeUse" : "firearms", i = Number(y[n] || 0) || 0, o = S + i;
  let c = 0;
  if (e.type === "Karakter") {
    const L = Q._getSkillHealthStatusStatic(e, n);
    L === 1 ? c = -6 : L === 2 && (c = -3);
  }
  const d = ((($ = s == null ? void 0 : s.system) == null ? void 0 : $.damage) ?? "").trim(), V = (r.damage ?? "").trim(), B = d || V || "", b = ((U = s == null ? void 0 : s.system) == null ? void 0 : U.size) ?? r.size ?? "", g = String(b).toLowerCase() === "heavy", D = ((G = (K = e.statuses) == null ? void 0 : K.has) == null ? void 0 : G.call(K, "halfcover")) ?? !1, C = g && D;
  new ne({
    actor: F,
    skillKey: n,
    label: u,
    baseModifier: o,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: B,
    blockHeavyInHalfCover: C
  }).render(!0);
}
export {
  ne as VoidRollSheet,
  be as openRollSheetForSkill,
  we as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-RM2sFKVk.mjs.map
