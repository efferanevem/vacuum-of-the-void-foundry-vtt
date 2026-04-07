import { V as K, c as ae } from "./vacuum-of-the-void-CZt1bPaJ.mjs";
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
      label: i,
      baseModifier: m,
      injuryModifier: _,
      injuryPenalty: h,
      isWeaponAttack: a,
      isInitiativeRoll: u,
      weaponSlotKey: f,
      weaponItemId: l,
      weaponDamageFormula: r
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = i ?? s ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(_) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!u, this._weaponSlotKey = f || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof r == "string" ? r.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var p, v, S, b, g;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((v = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : v.call(p, "form.votv.roll-sheet")) ?? ((b = (S = this.element) == null ? void 0 : S.matches) != null && b.call(S, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const i = s.querySelector("input[name='advantage']"), m = s.querySelectorAll(".roll-sheet-advantage-d6"), _ = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(o)), m.forEach((c) => {
        const d = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", d === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), _(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), _((i == null ? void 0 : i.value) ?? "0");
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((g = h == null ? void 0 : h.dataset) == null ? void 0 : g.moraleMax) ?? "3", 10) || 0)), u = s.querySelector("input[name='moraleDice']"), f = s.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), u && (u.value = String(o)), f.forEach((c, d) => {
        c.classList.toggle("selected", d < o), c.style.pointerEvents = d < a ? "" : "none", c.style.opacity = d < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const c = n.dataset.moraleValue ?? "0";
        l(c), t._updateFormulaPreview(s);
      });
    }), l((u == null ? void 0 : u.value) ?? "0");
    const r = s.querySelector("input[name='constantBonus']");
    r && r.addEventListener("input", () => t._updateFormulaPreview(s)), r && r.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, c, d, w;
      if ((c = (o = n.target) == null ? void 0 : o.closest) != null && c.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (w = (d = n.target) == null ? void 0 : d.closest) != null && w.call(d, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var p, v, S, b, g, n, o, c, d, w, P, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((p = t.querySelector("input[name='advantage']")) == null ? void 0 : p.value) ?? "0", 10) || 0, i = parseInt(((v = t.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, m = parseInt(((S = t.querySelector("input[name='constantBonus']")) == null ? void 0 : S.value) ?? "0", 10) || 0, _ = parseInt(((b = t.dataset) == null ? void 0 : b.baseMod) ?? "0", 10) || 0, h = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, u = (d = (c = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : c.has) != null && d.call(c, "diseased") || (V = (P = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : P.has) != null && V.call(P, "poisoned") ? -1 : 0, f = _ + h + a + m + u, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const r = document.createElement("img");
    if (r.src = "systems/vacuum-of-the-void/assets/d6.svg", r.alt = "d6", r.className = "roll-sheet-preview-die", l[0].appendChild(r), s !== 0) {
      const y = document.createElement("span");
      y.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const M = document.createElement("img");
      M.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", M.alt = s > 0 ? "előny d6" : "hátrány d6", M.className = "roll-sheet-preview-die", y.appendChild(M), l.push(y);
    }
    if (i > 0) {
      const y = document.createElement("span");
      y.textContent = ` + ${i} `;
      const M = document.createElement("img");
      M.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", M.alt = "d8", M.className = "roll-sheet-preview-die", y.appendChild(M), l.push(y);
    }
    if (f !== 0) {
      const y = document.createElement("span");
      y.textContent = f > 0 ? ` + ${f}` : ` − ${Math.abs(f)}`, l.push(y);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var S, b, g, n, o, c, d, w, P, V, y, M, B, x;
    const e = this.actor, s = Math.max(0, Number(((b = (S = e == null ? void 0 : e.system) == null ? void 0 : S.resources) == null ? void 0 : b.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", _ = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", i, m, _].filter(Boolean).join(" ") || "3d6";
    let a = "", u = 0;
    const f = [], l = [];
    let r = 0;
    if (this._isWeaponAttack && ((n = (g = game.user) == null ? void 0 : g.targets) != null && n.size)) {
      const k = Array.from(game.user.targets)[0], j = (k == null ? void 0 : k.actor) ?? null;
      a = (j == null ? void 0 : j.name) || (k == null ? void 0 : k.name) || "", (c = (o = j == null ? void 0 : j.statuses) == null ? void 0 : o.has) != null && c.call(o, "stunned") && (u = 1, f.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (w = (d = j == null ? void 0 : j.statuses) == null ? void 0 : d.has) != null && w.call(d, "dodge") && (r = 1, l.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (V = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) != null && V.call(P, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (M = (y = e == null ? void 0 : e.statuses) == null ? void 0 : y.has) != null && M.call(y, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const p = ((x = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) == null ? void 0 : x.call(B, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    p && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const v = Math.min(3, Math.max(
      -3,
      u - r + (p ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: v,
      advantageSourcesText: f.length ? f.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
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
    var p, v, S, b, g;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor.id ? game.actors.get(this.actor.id) ?? this.actor : this.actor, s = (((p = t.system) == null ? void 0 : p.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((S = (v = t.items) == null ? void 0 : v.filter) == null ? void 0 : S.call(v, (n) => n.type === "Fegyver")) ?? [], m = (s.itemId ?? "").trim(), _ = m ? i.find((n) => n.id === m) ?? null : null, h = _ != null ? ((b = _.system) == null ? void 0 : b.bonus) ?? s.bonus : s.bonus, a = Number(h ?? 0) || 0, u = this._skillKey, f = ((g = t.system) == null ? void 0 : g.skills) ?? {}, l = Number(f[u] ?? 0) || 0;
    let r = 0;
    if (t.type === "Karakter" && u) {
      const n = K._getSkillHealthStatusStatic(t, u);
      n === 1 ? r = -6 : n === 2 && (r = -3);
    }
    return a + l + r;
  }
  async _doRoll(t) {
    var s, i, m, _, h, a, u, f, l, r, p, v, S;
    const e = this.actor;
    if (e)
      try {
        const b = t.querySelector("[name='moraleDice']"), g = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((i = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : i.morale) ?? 0) || 0), d = Math.min(o, c), w = Math.min(3, Math.max(-3, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), P = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, V = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, y = this._isWeaponAttack ? 0 : this._injuryModifier, M = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, x = ((_ = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : _.call(m, "diseased")) || ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "poisoned")) ? -1 : 0, N = V + y + M + P + x, k = [
          "3d6",
          w > 0 ? `+${w}d6` : w < 0 ? `-${Math.abs(w)}d6` : "",
          d > 0 ? `+${d}d8` : "",
          N !== 0 ? N > 0 ? `+${N}` : `${N}` : ""
        ].filter(Boolean).join(" "), j = new Roll(k);
        await j.evaluate({ async: !0 });
        const { resultType: Y, label: G } = ae(j), J = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const E = { resultType: Y, critLabel: G };
        if (this._isWeaponAttack && ((f = (u = game.user) == null ? void 0 : u.targets) != null && f.size)) {
          const R = Array.from(game.user.targets)[0], L = (R == null ? void 0 : R.actor) ?? null;
          if (L) {
            const O = ((l = L.system) == null ? void 0 : l.combat) ?? {}, X = Number(O.defense ?? 0) || 0, Z = Number(O.defenseBonus ?? 0) || 0, ee = Number(O.givenProtection ?? 0) || 0, te = (p = (r = L.statuses) == null ? void 0 : r.has) != null && p.call(r, "lookaround") ? 1 : 0;
            let W = 0;
            if (L.type === "Karakter") {
              const C = (((v = L.items) == null ? void 0 : v.contents) ?? []).filter(
                (q) => {
                  var A;
                  return q.type === "Pancel" && ((A = q.system) == null ? void 0 : A.equipped) === !0;
                }
              );
              for (const q of C) {
                const A = String(((S = q.system) == null ? void 0 : S.protectionBonus) ?? "").trim().replace(",", "."), H = Number(A);
                Number.isFinite(H) && (W += H);
              }
            }
            const $ = X + Z + ee + W + te, z = (Number(j.total ?? 0) || 0) >= $, se = L.name ?? R.name ?? "Célpont";
            let D = null, T = null;
            if (z && L.type === "Karakter")
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
              targetActorId: L.id ?? null,
              targetName: se,
              defense: $,
              isHit: z,
              hitLocationRoll: D ?? null,
              hitLocationName: T ?? null
            };
          }
        }
        if (await j.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": E },
          rollMode: J
        }), d > 0) {
          const F = Math.max(0, c - d);
          await e.update({ "system.resources.morale": F });
        }
        if (this._isInitiativeRoll)
          try {
            const F = Number(j.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": F });
            const R = e.apps ?? [];
            for (const L of R)
              typeof (L == null ? void 0 : L.render) == "function" && L.render(!0);
          } catch (F) {
            console.warn("VOTV initiative result update:", F);
          }
      } finally {
        this.close();
      }
  }
}
function ie(I, t, e) {
  var a, u;
  if (!I) return;
  const s = Number(((u = (a = I.system) == null ? void 0 : a.skills) == null ? void 0 : u[t]) ?? 0) || 0, i = K.BODY_PART_BY_SKILL[t] ? K._getSkillHealthStatusStatic(I, t) : void 0;
  let m = 0;
  i === 1 ? m = -6 : i === 2 && (m = -3);
  const _ = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: I,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: m,
    isInitiativeRoll: _
  }).render(!0);
}
function le(I, t) {
  var w, P, V, y, M, B, x, N;
  if (!I || !t) return;
  const e = I != null && I.id ? game.actors.get(I.id) ?? I : I, i = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[t] ?? {}, m = ((P = e.system) == null ? void 0 : P.skills) ?? {}, _ = ((y = (V = e.items) == null ? void 0 : V.filter) == null ? void 0 : y.call(V, (k) => k.type === "Fegyver")) ?? [], h = (i.itemId ?? "").trim(), a = h ? _.find((k) => k.id === h) ?? null : null, u = ((a == null ? void 0 : a.name) ?? i.name ?? "").trim() || "Fegyver", f = a != null ? ((M = a.system) == null ? void 0 : M.bonus) ?? i.bonus : i.bonus, l = Number(f ?? 0) || 0, r = ((B = a == null ? void 0 : a.system) == null ? void 0 : B.type) || "kinetic", p = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), v = p && m[p] !== void 0 ? p : r === "explosive" ? "grenadeUse" : "firearms", S = Number(m[v] || 0) || 0, b = l + S;
  let g = 0;
  if (I.type === "Karakter") {
    const k = K._getSkillHealthStatusStatic(I, v);
    k === 1 ? g = -6 : k === 2 && (g = -3);
  }
  const n = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.damage) ?? "").trim(), o = (i.damage ?? "").trim(), c = n || o || "";
  new U({
    actor: e,
    skillKey: v,
    label: u,
    baseModifier: b,
    injuryModifier: 0,
    injuryPenalty: g,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? h,
    weaponDamageFormula: c
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  le as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-CV_fNllx.mjs.map
