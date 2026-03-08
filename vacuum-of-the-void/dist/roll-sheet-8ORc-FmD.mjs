import { V as W, c as ae } from "./vacuum-of-the-void-C3UCXeJd.mjs";
class J extends Application {
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
      baseModifier: m,
      injuryModifier: f,
      injuryPenalty: c,
      isWeaponAttack: a,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: o,
      weaponDamageFormula: d
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(f) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var M, w, g, y, v;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((w = (M = this.element) == null ? void 0 : M.querySelector) == null ? void 0 : w.call(M, "form.votv.roll-sheet")) ?? ((y = (g = this.element) == null ? void 0 : g.matches) != null && y.call(g, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), m = s.querySelectorAll(".roll-sheet-advantage-d6"), f = (n) => {
      const i = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(i)), m.forEach((r) => {
        const l = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", l === i);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (i) => {
        i.preventDefault(), f(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), f((u == null ? void 0 : u.value) ?? "0");
    const c = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((v = c == null ? void 0 : c.dataset) == null ? void 0 : v.moraleMax) ?? "3", 10) || 0)), h = s.querySelector("input[name='moraleDice']"), p = s.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let i = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      i = Math.min(i, a), h && (h.value = String(i)), p.forEach((r, l) => {
        r.classList.toggle("selected", l < i), r.style.pointerEvents = l < a ? "" : "none", r.style.opacity = l < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (i) => {
        if (i.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const r = n.dataset.moraleValue ?? "0";
        o(r), t._updateFormulaPreview(s);
      });
    }), o((h == null ? void 0 : h.value) ?? "0");
    const d = s.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(s)), d && d.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var i, r, l, I;
      if ((r = (i = n.target) == null ? void 0 : i.closest) != null && r.call(i, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (I = (l = n.target) == null ? void 0 : l.closest) != null && I.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var M, w, g, y, v, n, i, r, l, I, k, L;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((M = t.querySelector("input[name='advantage']")) == null ? void 0 : M.value) ?? "0", 10) || 0, u = parseInt(((w = t.querySelector("input[name='moraleDice']")) == null ? void 0 : w.value) ?? "0", 10) || 0, m = parseInt(((g = t.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, f = parseInt(((y = t.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, c = parseInt(((v = t.dataset) == null ? void 0 : v.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = (l = (r = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : r.has) != null && l.call(r, "diseased") || (L = (k = (I = this.actor) == null ? void 0 : I.statuses) == null ? void 0 : k.has) != null && L.call(k, "poisoned") ? -1 : 0, p = f + c + a + m + h, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", o[0].appendChild(d), s !== 0) {
      const S = document.createElement("span");
      S.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const b = document.createElement("img");
      b.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", b.alt = s > 0 ? "előny d6" : "hátrány d6", b.className = "roll-sheet-preview-die", S.appendChild(b), o.push(S);
    }
    if (u > 0) {
      const S = document.createElement("span");
      S.textContent = ` + ${u} `;
      const b = document.createElement("img");
      b.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", b.alt = "d8", b.className = "roll-sheet-preview-die", S.appendChild(b), o.push(S);
    }
    if (p !== 0) {
      const S = document.createElement("span");
      S.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, o.push(S);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var g, y, v, n, i, r, l, I, k, L, S, b, N, V;
    const e = this.actor, s = Math.max(0, Number(((y = (g = e == null ? void 0 : e.system) == null ? void 0 : g.resources) == null ? void 0 : y.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", f = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", u, m, f].filter(Boolean).join(" ") || "3d6";
    let a = "", h = 0;
    const p = [], o = [];
    let d = 0;
    if (this._isWeaponAttack && ((n = (v = game.user) == null ? void 0 : v.targets) != null && n.size)) {
      const P = Array.from(game.user.targets)[0], _ = (P == null ? void 0 : P.actor) ?? null;
      a = (_ == null ? void 0 : _.name) || (P == null ? void 0 : P.name) || "", (r = (i = _ == null ? void 0 : _.statuses) == null ? void 0 : i.has) != null && r.call(i, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (I = (l = _ == null ? void 0 : _.statuses) == null ? void 0 : l.has) != null && I.call(l, "dodge") && (d = 1, o.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (L = (k = e == null ? void 0 : e.statuses) == null ? void 0 : k.has) != null && L.call(k, "diseased") && o.push(game.i18n.localize("VOTV.StatusDiseased")), (b = (S = e == null ? void 0 : e.statuses) == null ? void 0 : S.has) != null && b.call(S, "poisoned") && o.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const M = ((V = (N = e == null ? void 0 : e.statuses) == null ? void 0 : N.has) == null ? void 0 : V.call(N, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    M && o.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const w = Math.min(3, Math.max(
      -3,
      h - d + (M ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: c,
      moraleCurrent: s,
      advantageValue: w,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: o.length ? o.join(", ") : "",
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
    var g, y, v, n, i;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, s = (((g = t.system) == null ? void 0 : g.weapons) ?? {})[this._weaponSlotKey] ?? {}, u = ((v = (y = t.items) == null ? void 0 : y.filter) == null ? void 0 : v.call(y, (r) => r.type === "Fegyver")) ?? [], m = (s.itemId ?? "").trim(), f = m ? u.find((r) => r.id === m) ?? null : null, c = (n = f == null ? void 0 : f.system) == null ? void 0 : n.bonus, a = s.bonus, h = c != null && String(c).trim() !== "" ? c : a ?? 0, p = Number(h) || 0, o = this._skillKey, d = ((i = t.system) == null ? void 0 : i.skills) ?? {}, M = Number(d[o] ?? 0) || 0;
    let w = 0;
    if (t.type === "Karakter" && o) {
      const r = W._getSkillHealthStatusStatic(t, o);
      r === 1 ? w = -6 : r === 2 && (w = -3);
    }
    return p + M + w;
  }
  async _doRoll(t) {
    var s, u, m, f, c, a, h, p, o, d, M, w, g;
    const e = this.actor;
    if (e)
      try {
        const y = t.querySelector("[name='moraleDice']"), v = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), i = Math.min(3, Math.max(0, parseInt((y == null ? void 0 : y.value) ?? "0", 10) || 0)), r = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), l = Math.min(i, r), I = Math.min(3, Math.max(-3, parseInt((v == null ? void 0 : v.value) ?? "0", 10) || 0)), k = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, L = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, S = this._isWeaponAttack ? 0 : this._injuryModifier, b = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, V = ((f = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : f.call(m, "diseased")) || ((a = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : a.call(c, "poisoned")) ? -1 : 0, x = L + S + b + k + V, P = [
          "3d6",
          I > 0 ? `+${I}d6` : I < 0 ? `-${Math.abs(I)}d6` : "",
          l > 0 ? `+${l}d8` : "",
          x !== 0 ? x > 0 ? `+${x}` : `${x}` : ""
        ].filter(Boolean).join(" "), _ = new Roll(P);
        await _.evaluate({ async: !0 });
        const { resultType: A, label: K } = ae(_), D = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const $ = { resultType: A, critLabel: K };
        if (this._isWeaponAttack && ((p = (h = game.user) == null ? void 0 : h.targets) != null && p.size)) {
          const C = Array.from(game.user.targets)[0], j = (C == null ? void 0 : C.actor) ?? null;
          if (j) {
            const z = ((o = j.system) == null ? void 0 : o.combat) ?? {}, X = Number(z.defense ?? 0) || 0, Z = Number(z.defenseBonus ?? 0) || 0, ee = Number(z.givenProtection ?? 0) || 0, te = (M = (d = j.statuses) == null ? void 0 : d.has) != null && M.call(d, "lookaround") ? 1 : 0;
            let H = 0;
            if (j.type === "Karakter") {
              const T = (((w = j.items) == null ? void 0 : w.contents) ?? []).filter(
                (E) => {
                  var O;
                  return E.type === "Pancel" && ((O = E.system) == null ? void 0 : O.equipped) === !0;
                }
              );
              for (const E of T) {
                const O = String(((g = E.system) == null ? void 0 : g.protectionBonus) ?? "").trim().replace(",", "."), G = Number(O);
                Number.isFinite(G) && (H += G);
              }
            }
            const U = X + Z + ee + H + te, Y = (Number(_.total ?? 0) || 0) >= U, se = j.name ?? C.name ?? "Célpont";
            let F = null, q = null;
            if (Y && j.type === "Karakter")
              try {
                const T = new Roll("1d8");
                await T.evaluate({ async: !0 }), F = Number(T.total ?? 0) || 1, F === 1 ? q = "Fej" : F >= 2 && F <= 4 ? q = "Törzs" : F === 5 || F === 6 ? q = "Karok" : q = "Lábak";
              } catch (T) {
                console.warn("VOTV hit location roll failed:", T);
              }
            $.weaponAttack = !0, $.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: j.id ?? null,
              targetName: se,
              defense: U,
              isHit: Y,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await _.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": $ },
          rollMode: D
        }), l > 0) {
          const R = Math.max(0, r - l);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(_.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const C = e.apps ?? [];
            for (const j of C)
              typeof (j == null ? void 0 : j.render) == "function" && j.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ie(B, t, e) {
  var a, h;
  if (!B) return;
  const s = Number(((h = (a = B.system) == null ? void 0 : a.skills) == null ? void 0 : h[t]) ?? 0) || 0, u = W.BODY_PART_BY_SKILL[t] ? W._getSkillHealthStatusStatic(B, t) : void 0;
  let m = 0;
  u === 1 ? m = -6 : u === 2 && (m = -3);
  const f = (e || "").trim() === "Kezdeményezés";
  new J({
    actor: B,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: m,
    isInitiativeRoll: f
  }).render(!0);
}
function re(B, t) {
  var b, N, V, x, P, _, A, K;
  if (!B || !t) return;
  const e = B, u = (((b = e.system) == null ? void 0 : b.weapons) ?? {})[t] ?? {}, m = ((N = e.system) == null ? void 0 : N.skills) ?? {}, f = ((x = (V = e.items) == null ? void 0 : V.filter) == null ? void 0 : x.call(V, (D) => D.type === "Fegyver")) ?? [], c = (u.itemId ?? "").trim(), a = c ? f.find((D) => D.id === c) ?? null : null, h = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", p = (P = a == null ? void 0 : a.system) == null ? void 0 : P.bonus, o = u.bonus, d = p != null && String(p).trim() !== "", M = o != null && String(o).trim() !== "", g = Number(d ? p : M ? o : 0) || 0, y = ((_ = a == null ? void 0 : a.system) == null ? void 0 : _.type) || "kinetic", v = (((A = a == null ? void 0 : a.system) == null ? void 0 : A.skillKey) ?? "").trim(), n = v && m[v] !== void 0 ? v : y === "explosive" ? "grenadeUse" : "firearms", i = Number(m[n] || 0) || 0, r = g + i;
  let l = 0;
  if (e.type === "Karakter") {
    const D = W._getSkillHealthStatusStatic(e, n);
    D === 1 ? l = -6 : D === 2 && (l = -3);
  }
  const I = (((K = a == null ? void 0 : a.system) == null ? void 0 : K.damage) ?? "").trim(), k = (u.damage ?? "").trim(), L = I || k || "";
  new J({
    actor: B,
    skillKey: n,
    label: h,
    baseModifier: r,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? c,
    weaponDamageFormula: L
  }).render(!0);
}
export {
  J as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-8ORc-FmD.mjs.map
