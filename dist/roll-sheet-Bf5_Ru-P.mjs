import { V as K, c as ae } from "./vacuum-of-the-void-DKxKWnE8.mjs";
class U extends Application {
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
      skillKey: s,
      label: u,
      baseModifier: d,
      injuryModifier: g,
      injuryPenalty: h,
      isWeaponAttack: a,
      isInitiativeRoll: c,
      weaponSlotKey: f,
      weaponItemId: r,
      weaponDamageFormula: o
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!c, this._weaponSlotKey = f || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof o == "string" ? o.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var p, S, _, v, b;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((S = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : S.call(p, "form.votv.roll-sheet")) ?? ((v = (_ = this.element) == null ? void 0 : _.matches) != null && v.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const i = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(i)), d.forEach((m) => {
        const l = parseInt(m.dataset.advantageValue ?? "0", 10);
        m.classList.toggle("selected", l === i);
      });
    };
    d.forEach((n) => {
      n.addEventListener("click", (i) => {
        i.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), g((u == null ? void 0 : u.value) ?? "0");
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = h == null ? void 0 : h.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), c = s.querySelector("input[name='moraleDice']"), f = s.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let i = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      i = Math.min(i, a), c && (c.value = String(i)), f.forEach((m, l) => {
        m.classList.toggle("selected", l < i), m.style.pointerEvents = l < a ? "" : "none", m.style.opacity = l < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (i) => {
        if (i.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const m = n.dataset.moraleValue ?? "0";
        r(m), t._updateFormulaPreview(s);
      });
    }), r((c == null ? void 0 : c.value) ?? "0");
    const o = s.querySelector("input[name='constantBonus']");
    o && o.addEventListener("input", () => t._updateFormulaPreview(s)), o && o.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var i, m, l, w;
      if ((m = (i = n.target) == null ? void 0 : i.closest) != null && m.call(i, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (w = (l = n.target) == null ? void 0 : l.closest) != null && w.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var p, S, _, v, b, n, i, m, l, w, I, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((p = t.querySelector("input[name='advantage']")) == null ? void 0 : p.value) ?? "0", 10) || 0, u = parseInt(((S = t.querySelector("input[name='moraleDice']")) == null ? void 0 : S.value) ?? "0", 10) || 0, d = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, g = parseInt(((v = t.dataset) == null ? void 0 : v.baseMod) ?? "0", 10) || 0, h = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, c = (l = (m = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : m.has) != null && l.call(m, "diseased") || (V = (I = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : I.has) != null && V.call(I, "poisoned") ? -1 : 0, f = g + h + a + d + c, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const o = document.createElement("img");
    if (o.src = "systems/vacuum-of-the-void/assets/d6.svg", o.alt = "d6", o.className = "roll-sheet-preview-die", r[0].appendChild(o), s !== 0) {
      const y = document.createElement("span");
      y.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const M = document.createElement("img");
      M.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", M.alt = s > 0 ? "előny d6" : "hátrány d6", M.className = "roll-sheet-preview-die", y.appendChild(M), r.push(y);
    }
    if (u > 0) {
      const y = document.createElement("span");
      y.textContent = ` + ${u} `;
      const M = document.createElement("img");
      M.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", M.alt = "d8", M.className = "roll-sheet-preview-die", y.appendChild(M), r.push(y);
    }
    if (f !== 0) {
      const y = document.createElement("span");
      y.textContent = f > 0 ? ` + ${f}` : ` − ${Math.abs(f)}`, r.push(y);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var _, v, b, n, i, m, l, w, I, V, y, M, N, B;
    const e = this.actor, s = Math.max(0, Number(((v = (_ = e == null ? void 0 : e.system) == null ? void 0 : _.resources) == null ? void 0 : v.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", u, d, g].filter(Boolean).join(" ") || "3d6";
    let a = "", c = 0;
    const f = [], r = [];
    let o = 0;
    if (this._isWeaponAttack && ((n = (b = game.user) == null ? void 0 : b.targets) != null && n.size)) {
      const x = Array.from(game.user.targets)[0], k = (x == null ? void 0 : x.actor) ?? null;
      a = (k == null ? void 0 : k.name) || (x == null ? void 0 : x.name) || "", (m = (i = k == null ? void 0 : k.statuses) == null ? void 0 : i.has) != null && m.call(i, "stunned") && (c = 1, f.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (w = (l = k == null ? void 0 : k.statuses) == null ? void 0 : l.has) != null && w.call(l, "dodge") && (o = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (V = (I = e == null ? void 0 : e.statuses) == null ? void 0 : I.has) != null && V.call(I, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (M = (y = e == null ? void 0 : e.statuses) == null ? void 0 : y.has) != null && M.call(y, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const p = ((B = (N = e == null ? void 0 : e.statuses) == null ? void 0 : N.has) == null ? void 0 : B.call(N, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    p && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const S = Math.min(3, Math.max(
      -3,
      c - o + (p ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: S,
      advantageSourcesText: f.length ? f.join(", ") : "",
      disadvantageSourcesText: r.length ? r.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: a
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
    var p, S, _, v, b;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor.id ? game.actors.get(this.actor.id) ?? this.actor : this.actor, s = (((p = t.system) == null ? void 0 : p.weapons) ?? {})[this._weaponSlotKey] ?? {}, u = ((_ = (S = t.items) == null ? void 0 : S.filter) == null ? void 0 : _.call(S, (n) => n.type === "Fegyver")) ?? [], d = (s.itemId ?? "").trim(), g = d ? u.find((n) => n.id === d) ?? null : null, h = g != null ? ((v = g.system) == null ? void 0 : v.bonus) ?? s.bonus : s.bonus, a = Number(h ?? 0) || 0, c = this._skillKey, f = ((b = t.system) == null ? void 0 : b.skills) ?? {}, r = Number(f[c] ?? 0) || 0;
    let o = 0;
    if (t.type === "Karakter" && c) {
      const n = K._getSkillHealthStatusStatic(t, c);
      n === 1 ? o = -6 : n === 2 && (o = -3);
    }
    return a + r + o;
  }
  async _doRoll(t) {
    var s, u, d, g, h, a, c, f, r, o, p, S, _;
    const e = this.actor;
    if (e)
      try {
        const v = t.querySelector("[name='moraleDice']"), b = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), i = Math.min(3, Math.max(0, parseInt((v == null ? void 0 : v.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), l = Math.min(i, m), w = Math.min(3, Math.max(-3, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0)), I = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, V = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, y = this._isWeaponAttack ? 0 : this._injuryModifier, M = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, B = ((g = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : g.call(d, "diseased")) || ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "poisoned")) ? -1 : 0, P = V + y + M + I + B, x = [
          "3d6",
          w > 0 ? `+${w}d6` : w < 0 ? `-${Math.abs(w)}d6` : "",
          l > 0 ? `+${l}d8` : "",
          P !== 0 ? P > 0 ? `+${P}` : `${P}` : ""
        ].filter(Boolean).join(" "), k = new Roll(x);
        await k.evaluate({ async: !0 });
        const { resultType: Y, label: G } = ae(k), J = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const E = { resultType: Y, critLabel: G };
        if (this._isWeaponAttack && ((f = (c = game.user) == null ? void 0 : c.targets) != null && f.size)) {
          const R = Array.from(game.user.targets)[0], j = (R == null ? void 0 : R.actor) ?? null;
          if (j) {
            const O = ((r = j.system) == null ? void 0 : r.combat) ?? {}, X = Number(O.defense ?? 0) || 0, Z = Number(O.defenseBonus ?? 0) || 0, ee = Number(O.givenProtection ?? 0) || 0, te = (p = (o = j.statuses) == null ? void 0 : o.has) != null && p.call(o, "lookaround") ? 1 : 0;
            let W = 0;
            if (j.type === "Karakter") {
              const C = (((S = j.items) == null ? void 0 : S.contents) ?? []).filter(
                (q) => {
                  var A;
                  return q.type === "Pancel" && ((A = q.system) == null ? void 0 : A.equipped) === !0;
                }
              );
              for (const q of C) {
                const A = String(((_ = q.system) == null ? void 0 : _.protectionBonus) ?? "").trim().replace(",", "."), H = Number(A);
                Number.isFinite(H) && (W += H);
              }
            }
            const $ = X + Z + ee + W + te, z = (Number(k.total ?? 0) || 0) >= $, se = j.name ?? R.name ?? "Célpont";
            let D = null, T = null;
            if (z && j.type === "Karakter")
              try {
                const C = new Roll("1d8");
                await C.evaluate({ async: !0 }), D = Number(C.total ?? 0) || 1, D === 1 ? T = "Fej" : D >= 2 && D <= 4 ? T = "Törzs" : D === 5 || D === 6 ? T = "Karok" : T = "Lábak";
              } catch (C) {
                console.warn("VOTV hit location roll failed:", C);
              }
            E.weaponAttack = !0, E.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: j.id ?? null,
              targetName: se,
              defense: $,
              isHit: z,
              hitLocationRoll: D ?? null,
              hitLocationName: T ?? null
            };
          }
        }
        if (await k.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": E },
          rollMode: J
        }), l > 0) {
          const F = Math.max(0, m - l);
          await e.update({ "system.resources.morale": F });
        }
        if (this._isInitiativeRoll)
          try {
            const F = Number(k.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": F });
            const R = e.apps ?? [];
            for (const j of R)
              typeof (j == null ? void 0 : j.render) == "function" && j.render(!0);
          } catch (F) {
            console.warn("VOTV initiative result update:", F);
          }
      } finally {
        this.close();
      }
  }
}
function ie(L, t, e) {
  var a, c;
  if (!L) return;
  const s = Number(((c = (a = L.system) == null ? void 0 : a.skills) == null ? void 0 : c[t]) ?? 0) || 0, u = K.BODY_PART_BY_SKILL[t] ? K._getSkillHealthStatusStatic(L, t) : void 0;
  let d = 0;
  u === 1 ? d = -6 : u === 2 && (d = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: g
  }).render(!0);
}
function re(L, t) {
  var l, w, I, V, y, M, N, B;
  if (!L || !t) return;
  const e = L, u = (((l = e.system) == null ? void 0 : l.weapons) ?? {})[t] ?? {}, d = ((w = e.system) == null ? void 0 : w.skills) ?? {}, g = ((V = (I = e.items) == null ? void 0 : I.filter) == null ? void 0 : V.call(I, (P) => P.type === "Fegyver")) ?? [], h = (u.itemId ?? "").trim(), a = h ? g.find((P) => P.id === h) ?? null : null, c = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", f = Number(u.bonus || ((y = a == null ? void 0 : a.system) == null ? void 0 : y.bonus) || 0) || 0, r = ((M = a == null ? void 0 : a.system) == null ? void 0 : M.type) || "kinetic", o = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.skillKey) ?? "").trim(), p = o && d[o] !== void 0 ? o : r === "explosive" ? "grenadeUse" : "firearms", S = Number(d[p] || 0) || 0, _ = f + S;
  let v = 0;
  if (L.type === "Karakter") {
    const P = K._getSkillHealthStatusStatic(L, p);
    P === 1 ? v = -6 : P === 2 && (v = -3);
  }
  const b = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), n = (u.damage ?? "").trim(), i = b || n || "";
  new U({
    actor: L,
    skillKey: p,
    label: c,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: v,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? h,
    weaponDamageFormula: i
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Bf5_Ru-P.mjs.map
