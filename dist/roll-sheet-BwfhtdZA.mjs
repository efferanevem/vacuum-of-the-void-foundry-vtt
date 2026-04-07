import { V as $, c as ae } from "./vacuum-of-the-void-B7lVKU1F.mjs";
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
      injuryModifier: _,
      injuryPenalty: p,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: f,
      weaponItemId: r,
      weaponDamageFormula: l
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(_) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = f || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var y, P, b, g, I;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((P = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : P.call(y, "form.votv.roll-sheet")) ?? ((g = (b = this.element) == null ? void 0 : b.matches) != null && g.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), _ = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), d.forEach((c) => {
        const i = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", i === o);
      });
    };
    d.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), _(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), _((u == null ? void 0 : u.value) ?? "0");
    const p = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((I = p == null ? void 0 : p.dataset) == null ? void 0 : I.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), f = s.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), m && (m.value = String(o)), f.forEach((c, i) => {
        c.classList.toggle("selected", i < o), c.style.pointerEvents = i < a ? "" : "none", c.style.opacity = i < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const c = n.dataset.moraleValue ?? "0";
        r(c), t._updateFormulaPreview(s);
      });
    }), r((m == null ? void 0 : m.value) ?? "0");
    const l = s.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => t._updateFormulaPreview(s)), l && l.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, c, i, S;
      if ((c = (o = n.target) == null ? void 0 : o.closest) != null && c.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (S = (i = n.target) == null ? void 0 : i.closest) != null && S.call(i, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var y, P, b, g, I, n, o, c, i, S, M, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, u = parseInt(((P = t.querySelector("input[name='moraleDice']")) == null ? void 0 : P.value) ?? "0", 10) || 0, d = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, _ = parseInt(((g = t.dataset) == null ? void 0 : g.baseMod) ?? "0", 10) || 0, p = parseInt(((I = t.dataset) == null ? void 0 : I.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = (i = (c = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : c.has) != null && i.call(c, "diseased") || (V = (M = (S = this.actor) == null ? void 0 : S.statuses) == null ? void 0 : M.has) != null && V.call(M, "poisoned") ? -1 : 0, f = _ + p + a + d + m, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", r[0].appendChild(l), s !== 0) {
      const h = document.createElement("span");
      h.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const v = document.createElement("img");
      v.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", v.alt = s > 0 ? "előny d6" : "hátrány d6", v.className = "roll-sheet-preview-die", h.appendChild(v), r.push(h);
    }
    if (u > 0) {
      const h = document.createElement("span");
      h.textContent = ` + ${u} `;
      const v = document.createElement("img");
      v.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", v.alt = "d8", v.className = "roll-sheet-preview-die", h.appendChild(v), r.push(h);
    }
    if (f !== 0) {
      const h = document.createElement("span");
      h.textContent = f > 0 ? ` + ${f}` : ` − ${Math.abs(f)}`, r.push(h);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var b, g, I, n, o, c, i, S, M, V, h, v, x, N;
    const e = this.actor, s = Math.max(0, Number(((g = (b = e == null ? void 0 : e.system) == null ? void 0 : b.resources) == null ? void 0 : g.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", _ = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", u, d, _].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const f = [], r = [];
    let l = 0;
    if (this._isWeaponAttack && ((n = (I = game.user) == null ? void 0 : I.targets) != null && n.size)) {
      const D = Array.from(game.user.targets)[0], w = (D == null ? void 0 : D.actor) ?? null;
      a = (w == null ? void 0 : w.name) || (D == null ? void 0 : D.name) || "", (c = (o = w == null ? void 0 : w.statuses) == null ? void 0 : o.has) != null && c.call(o, "stunned") && (m = 1, f.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (S = (i = w == null ? void 0 : w.statuses) == null ? void 0 : i.has) != null && S.call(i, "dodge") && (l = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (V = (M = e == null ? void 0 : e.statuses) == null ? void 0 : M.has) != null && V.call(M, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (v = (h = e == null ? void 0 : e.statuses) == null ? void 0 : h.has) != null && v.call(h, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const y = ((N = (x = e == null ? void 0 : e.statuses) == null ? void 0 : x.has) == null ? void 0 : N.call(x, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    y && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const P = Math.min(3, Math.max(
      -3,
      m - l + (y ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: s,
      advantageValue: P,
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
  async _doRoll(t) {
    var s, u, d, _, p, a, m, f, r, l, y, P, b;
    const e = this.actor;
    if (e)
      try {
        const g = t.querySelector("[name='moraleDice']"), I = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), i = Math.min(o, c), S = Math.min(3, Math.max(-3, parseInt((I == null ? void 0 : I.value) ?? "0", 10) || 0)), M = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, V = this._baseModifier, h = this._injuryModifier, v = this._injuryPenalty || 0, N = ((_ = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : _.call(d, "diseased")) || ((a = (p = e.statuses) == null ? void 0 : p.has) == null ? void 0 : a.call(p, "poisoned")) ? -1 : 0, k = V + h + v + M + N, D = [
          "3d6",
          S > 0 ? `+${S}d6` : S < 0 ? `-${Math.abs(S)}d6` : "",
          i > 0 ? `+${i}d8` : "",
          k !== 0 ? k > 0 ? `+${k}` : `${k}` : ""
        ].filter(Boolean).join(" "), w = new Roll(D);
        await w.evaluate({ async: !0 });
        const { resultType: Y, label: G } = ae(w), J = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const O = { resultType: Y, critLabel: G };
        if (this._isWeaponAttack && ((f = (m = game.user) == null ? void 0 : m.targets) != null && f.size)) {
          const B = Array.from(game.user.targets)[0], j = (B == null ? void 0 : B.actor) ?? null;
          if (j) {
            const A = ((r = j.system) == null ? void 0 : r.combat) ?? {}, X = Number(A.defense ?? 0) || 0, Z = Number(A.defenseBonus ?? 0) || 0, ee = Number(A.givenProtection ?? 0) || 0, te = (y = (l = j.statuses) == null ? void 0 : l.has) != null && y.call(l, "lookaround") ? 1 : 0;
            let z = 0;
            if (j.type === "Karakter") {
              const T = (((P = j.items) == null ? void 0 : P.contents) ?? []).filter(
                (C) => {
                  var E;
                  return C.type === "Pancel" && ((E = C.system) == null ? void 0 : E.equipped) === !0;
                }
              );
              for (const C of T) {
                const E = String(((b = C.system) == null ? void 0 : b.protectionBonus) ?? "").trim().replace(",", "."), H = Number(E);
                Number.isFinite(H) && (z += H);
              }
            }
            const K = X + Z + ee + z + te, W = (Number(w.total ?? 0) || 0) >= K, se = j.name ?? B.name ?? "Célpont";
            let F = null, q = null;
            if (W && j.type === "Karakter")
              try {
                const T = new Roll("1d8");
                await T.evaluate({ async: !0 }), F = Number(T.total ?? 0) || 1, F === 1 ? q = "Fej" : F >= 2 && F <= 4 ? q = "Törzs" : F === 5 || F === 6 ? q = "Karok" : q = "Lábak";
              } catch (T) {
                console.warn("VOTV hit location roll failed:", T);
              }
            O.weaponAttack = !0, O.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: j.id ?? null,
              targetName: se,
              defense: K,
              isHit: W,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await w.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": O },
          rollMode: J
        }), i > 0) {
          const R = Math.max(0, c - i);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(w.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const B = e.apps ?? [];
            for (const j of B)
              typeof (j == null ? void 0 : j.render) == "function" && j.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ie(L, t, e) {
  var a, m;
  if (!L) return;
  const s = Number(((m = (a = L.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, u = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(L, t) : void 0;
  let d = 0;
  u === 1 ? d = -6 : u === 2 && (d = -3);
  const _ = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: _
  }).render(!0);
}
function re(L, t) {
  var i, S, M, V, h, v, x, N;
  if (!L || !t) return;
  const e = L, u = (((i = e.system) == null ? void 0 : i.weapons) ?? {})[t] ?? {}, d = ((S = e.system) == null ? void 0 : S.skills) ?? {}, _ = ((V = (M = e.items) == null ? void 0 : M.filter) == null ? void 0 : V.call(M, (k) => k.type === "Fegyver")) ?? [], p = (u.itemId ?? "").trim(), a = p ? _.find((k) => k.id === p) ?? null : null, m = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", f = Number(u.bonus || ((h = a == null ? void 0 : a.system) == null ? void 0 : h.bonus) || 0) || 0, r = ((v = a == null ? void 0 : a.system) == null ? void 0 : v.type) || "kinetic", l = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), y = l && d[l] !== void 0 ? l : r === "explosive" ? "grenadeUse" : "firearms", P = Number(d[y] || 0) || 0, b = f + P;
  let g = 0;
  if (L.type === "Karakter") {
    const k = $._getSkillHealthStatusStatic(L, y);
    k === 1 ? g = -6 : k === 2 && (g = -3);
  }
  const I = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.damage) ?? "").trim(), n = (u.damage ?? "").trim(), o = I || n || "";
  new U({
    actor: L,
    skillKey: y,
    label: m,
    baseModifier: b,
    injuryModifier: 0,
    injuryPenalty: g,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? p,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BwfhtdZA.mjs.map
