import { V as W, c as ae } from "./vacuum-of-the-void-aoo6w1x7.mjs";
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
      skillKey: a,
      label: u,
      baseModifier: m,
      injuryModifier: y,
      injuryPenalty: c,
      isWeaponAttack: s,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: r,
      weaponDamageFormula: d
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = u ?? a ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(y) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var v, I, b, S, g;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((I = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : I.call(v, "form.votv.roll-sheet")) ?? ((S = (b = this.element) == null ? void 0 : b.matches) != null && S.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const u = a.querySelector("input[name='advantage']"), m = a.querySelectorAll(".roll-sheet-advantage-d6"), y = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), m.forEach((l) => {
        const i = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", i === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), y(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), y((u == null ? void 0 : u.value) ?? "0");
    const c = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((g = c == null ? void 0 : c.dataset) == null ? void 0 : g.moraleMax) ?? "3", 10) || 0)), h = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), h && (h.value = String(o)), p.forEach((l, i) => {
        l.classList.toggle("selected", i < o), l.style.pointerEvents = i < s ? "" : "none", l.style.opacity = i < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const l = n.dataset.moraleValue ?? "0";
        r(l), t._updateFormulaPreview(a);
      });
    }), r((h == null ? void 0 : h.value) ?? "0");
    const d = a.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(a)), d && d.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, l, i, f;
      if ((l = (o = n.target) == null ? void 0 : o.closest) != null && l.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (f = (i = n.target) == null ? void 0 : i.closest) != null && f.call(i, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var v, I, b, S, g, n, o, l, i, f, k, L;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((v = t.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((I = t.querySelector("input[name='moraleDice']")) == null ? void 0 : I.value) ?? "0", 10) || 0, m = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, y = parseInt(((S = t.dataset) == null ? void 0 : S.baseMod) ?? "0", 10) || 0, c = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = (i = (l = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : l.has) != null && i.call(l, "diseased") || (L = (k = (f = this.actor) == null ? void 0 : f.statuses) == null ? void 0 : k.has) != null && L.call(k, "poisoned") ? -1 : 0, p = y + c + s + m + h, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", r[0].appendChild(d), a !== 0) {
      const _ = document.createElement("span");
      _.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const w = document.createElement("img");
      w.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", w.alt = a > 0 ? "előny d6" : "hátrány d6", w.className = "roll-sheet-preview-die", _.appendChild(w), r.push(_);
    }
    if (u > 0) {
      const _ = document.createElement("span");
      _.textContent = ` + ${u} `;
      const w = document.createElement("img");
      w.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", w.alt = "d8", w.className = "roll-sheet-preview-die", _.appendChild(w), r.push(_);
    }
    if (p !== 0) {
      const _ = document.createElement("span");
      _.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, r.push(_);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var b, S, g, n, o, l, i, f, k, L, _, w, N, V;
    const e = this.actor, a = Math.max(0, Number(((S = (b = e == null ? void 0 : e.system) == null ? void 0 : b.resources) == null ? void 0 : S.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", y = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", u, m, y].filter(Boolean).join(" ") || "3d6";
    let s = "", h = 0;
    const p = [], r = [];
    let d = 0;
    if (this._isWeaponAttack && ((n = (g = game.user) == null ? void 0 : g.targets) != null && n.size)) {
      const P = Array.from(game.user.targets)[0], M = (P == null ? void 0 : P.actor) ?? null;
      s = (M == null ? void 0 : M.name) || (P == null ? void 0 : P.name) || "", (l = (o = M == null ? void 0 : M.statuses) == null ? void 0 : o.has) != null && l.call(o, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (f = (i = M == null ? void 0 : M.statuses) == null ? void 0 : i.has) != null && f.call(i, "dodge") && (d = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (L = (k = e == null ? void 0 : e.statuses) == null ? void 0 : k.has) != null && L.call(k, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (w = (_ = e == null ? void 0 : e.statuses) == null ? void 0 : _.has) != null && w.call(_, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const v = ((V = (N = e == null ? void 0 : e.statuses) == null ? void 0 : N.has) == null ? void 0 : V.call(N, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    v && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const I = Math.min(3, Math.max(
      -3,
      h - d + (v ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: c,
      moraleCurrent: a,
      advantageValue: I,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: r.length ? r.join(", ") : "",
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
    var g, n, o, l, i;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((g = t.system) == null ? void 0 : g.weapons) ?? {})[this._weaponSlotKey] ?? {}, u = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (f) => f.type === "Fegyver")) ?? [], m = (a.itemId ?? "").trim(), y = m ? u.find((f) => f.id === m) ?? null : null, c = (l = y == null ? void 0 : y.system) == null ? void 0 : l.bonus, s = a.bonus, h = c != null && String(c).trim() !== "", p = s != null && String(s).trim() !== "", d = Number(h ? c : p ? s : 0) || 0, v = this._skillKey, I = ((i = t.system) == null ? void 0 : i.skills) ?? {}, b = Number(I[v] ?? 0) || 0;
    let S = 0;
    if (t.type === "Karakter" && v) {
      const f = W._getSkillHealthStatusStatic(t, v);
      f === 1 ? S = -6 : f === 2 && (S = -3);
    }
    return d + b + S;
  }
  async _doRoll(t) {
    var a, u, m, y, c, s, h, p, r, d, v, I, b;
    const e = this.actor;
    if (e)
      try {
        const S = t.querySelector("[name='moraleDice']"), g = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((S == null ? void 0 : S.value) ?? "0", 10) || 0)), l = Math.max(0, Number(((u = (a = e.system) == null ? void 0 : a.resources) == null ? void 0 : u.morale) ?? 0) || 0), i = Math.min(o, l), f = Math.min(3, Math.max(-3, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), k = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, L = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, _ = this._isWeaponAttack ? 0 : this._injuryModifier, w = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, V = ((y = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : y.call(m, "diseased")) || ((s = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : s.call(c, "poisoned")) ? -1 : 0, x = L + _ + w + k + V, P = [
          "3d6",
          f > 0 ? `+${f}d6` : f < 0 ? `-${Math.abs(f)}d6` : "",
          i > 0 ? `+${i}d8` : "",
          x !== 0 ? x > 0 ? `+${x}` : `${x}` : ""
        ].filter(Boolean).join(" "), M = new Roll(P);
        await M.evaluate({ async: !0 });
        const { resultType: A, label: K } = ae(M), D = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const $ = { resultType: A, critLabel: K };
        if (this._isWeaponAttack && ((p = (h = game.user) == null ? void 0 : h.targets) != null && p.size)) {
          const C = Array.from(game.user.targets)[0], j = (C == null ? void 0 : C.actor) ?? null;
          if (j) {
            const z = ((r = j.system) == null ? void 0 : r.combat) ?? {}, X = Number(z.defense ?? 0) || 0, Z = Number(z.defenseBonus ?? 0) || 0, ee = Number(z.givenProtection ?? 0) || 0, te = (v = (d = j.statuses) == null ? void 0 : d.has) != null && v.call(d, "lookaround") ? 1 : 0;
            let H = 0;
            if (j.type === "Karakter") {
              const T = (((I = j.items) == null ? void 0 : I.contents) ?? []).filter(
                (E) => {
                  var O;
                  return E.type === "Pancel" && ((O = E.system) == null ? void 0 : O.equipped) === !0;
                }
              );
              for (const E of T) {
                const O = String(((b = E.system) == null ? void 0 : b.protectionBonus) ?? "").trim().replace(",", "."), G = Number(O);
                Number.isFinite(G) && (H += G);
              }
            }
            const U = X + Z + ee + H + te, Y = (Number(M.total ?? 0) || 0) >= U, se = j.name ?? C.name ?? "Célpont";
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
        if (await M.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": $ },
          rollMode: D
        }), i > 0) {
          const R = Math.max(0, l - i);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(M.total) ?? 0;
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
  var s, h;
  if (!B) return;
  const a = Number(((h = (s = B.system) == null ? void 0 : s.skills) == null ? void 0 : h[t]) ?? 0) || 0, u = W.BODY_PART_BY_SKILL[t] ? W._getSkillHealthStatusStatic(B, t) : void 0;
  let m = 0;
  u === 1 ? m = -6 : u === 2 && (m = -3);
  const y = (e || "").trim() === "Kezdeményezés";
  new J({
    actor: B,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: m,
    isInitiativeRoll: y
  }).render(!0);
}
function re(B, t) {
  var w, N, V, x, P, M, A, K;
  if (!B || !t) return;
  const e = B, u = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[t] ?? {}, m = ((N = e.system) == null ? void 0 : N.skills) ?? {}, y = ((x = (V = e.items) == null ? void 0 : V.filter) == null ? void 0 : x.call(V, (D) => D.type === "Fegyver")) ?? [], c = (u.itemId ?? "").trim(), s = c ? y.find((D) => D.id === c) ?? null : null, h = ((s == null ? void 0 : s.name) ?? u.name ?? "").trim() || "Fegyver", p = (P = s == null ? void 0 : s.system) == null ? void 0 : P.bonus, r = u.bonus, d = p != null && String(p).trim() !== "", v = r != null && String(r).trim() !== "", b = Number(d ? p : v ? r : 0) || 0, S = ((M = s == null ? void 0 : s.system) == null ? void 0 : M.type) || "kinetic", g = (((A = s == null ? void 0 : s.system) == null ? void 0 : A.skillKey) ?? "").trim(), n = g && m[g] !== void 0 ? g : S === "explosive" ? "grenadeUse" : "firearms", o = Number(m[n] || 0) || 0, l = b + o;
  let i = 0;
  if (e.type === "Karakter") {
    const D = W._getSkillHealthStatusStatic(e, n);
    D === 1 ? i = -6 : D === 2 && (i = -3);
  }
  const f = (((K = s == null ? void 0 : s.system) == null ? void 0 : K.damage) ?? "").trim(), k = (u.damage ?? "").trim(), L = f || k || "";
  new J({
    actor: B,
    skillKey: n,
    label: h,
    baseModifier: l,
    injuryModifier: 0,
    injuryPenalty: i,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? c,
    weaponDamageFormula: L
  }).render(!0);
}
export {
  J as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DOi27J63.mjs.map
