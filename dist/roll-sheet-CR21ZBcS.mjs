import { V as W, c as ie } from "./vacuum-of-the-void-BbF6XnOI.mjs";
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
      injuryModifier: v,
      injuryPenalty: c,
      isWeaponAttack: s,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: i,
      weaponDamageFormula: d,
      blockHeavyInHalfCover: f
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = u ?? a ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = i || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "", this._blockHeavyInHalfCover = !!f;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, k, _, b, g;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((k = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : k.call(f, "form.votv.roll-sheet")) ?? ((b = (_ = this.element) == null ? void 0 : _.matches) != null && b.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const u = a.querySelector("input[name='advantage']"), m = a.querySelectorAll(".roll-sheet-advantage-d6"), v = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), m.forEach((r) => {
        const l = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", l === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), v(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), v((u == null ? void 0 : u.value) ?? "0");
    const c = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((g = c == null ? void 0 : c.dataset) == null ? void 0 : g.moraleMax) ?? "3", 10) || 0)), h = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), i = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), h && (h.value = String(o)), p.forEach((r, l) => {
        r.classList.toggle("selected", l < o), r.style.pointerEvents = l < s ? "" : "none", r.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const r = n.dataset.moraleValue ?? "0";
        i(r), t._updateFormulaPreview(a);
      });
    }), i((h == null ? void 0 : h.value) ?? "0");
    const d = a.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(a)), d && d.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, r, l, y;
      if ((r = (o = n.target) == null ? void 0 : o.closest) != null && r.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (y = (l = n.target) == null ? void 0 : l.closest) != null && y.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var f, k, _, b, g, n, o, r, l, y, I, B;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, u = parseInt(((k = t.querySelector("input[name='moraleDice']")) == null ? void 0 : k.value) ?? "0", 10) || 0, m = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, v = parseInt(((b = t.dataset) == null ? void 0 : b.baseMod) ?? "0", 10) || 0, c = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = (l = (r = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : r.has) != null && l.call(r, "diseased") || (B = (I = (y = this.actor) == null ? void 0 : y.statuses) == null ? void 0 : I.has) != null && B.call(I, "poisoned") ? -1 : 0, p = v + c + s + m + h, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", i[0].appendChild(d), a !== 0) {
      const S = document.createElement("span");
      S.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const M = document.createElement("img");
      M.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", M.alt = a > 0 ? "előny d6" : "hátrány d6", M.className = "roll-sheet-preview-die", S.appendChild(M), i.push(S);
    }
    if (u > 0) {
      const S = document.createElement("span");
      S.textContent = ` + ${u} `;
      const M = document.createElement("img");
      M.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", M.alt = "d8", M.className = "roll-sheet-preview-die", S.appendChild(M), i.push(S);
    }
    if (p !== 0) {
      const S = document.createElement("span");
      S.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, i.push(S);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var _, b, g, n, o, r, l, y, I, B, S, M, V, N;
    const e = this.actor, a = Math.max(0, Number(((b = (_ = e == null ? void 0 : e.system) == null ? void 0 : _.resources) == null ? void 0 : b.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", u, m, v].filter(Boolean).join(" ") || "3d6";
    let s = "", h = 0;
    const p = [], i = [];
    let d = 0;
    if (this._isWeaponAttack && ((n = (g = game.user) == null ? void 0 : g.targets) != null && n.size)) {
      const P = Array.from(game.user.targets)[0], w = (P == null ? void 0 : P.actor) ?? null;
      s = (w == null ? void 0 : w.name) || (P == null ? void 0 : P.name) || "", (r = (o = w == null ? void 0 : w.statuses) == null ? void 0 : o.has) != null && r.call(o, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (y = (l = w == null ? void 0 : w.statuses) == null ? void 0 : l.has) != null && y.call(l, "dodge") && (d = 1, i.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (B = (I = e == null ? void 0 : e.statuses) == null ? void 0 : I.has) != null && B.call(I, "diseased") && i.push(game.i18n.localize("VOTV.StatusDiseased")), (M = (S = e == null ? void 0 : e.statuses) == null ? void 0 : S.has) != null && M.call(S, "poisoned") && i.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const f = ((N = (V = e == null ? void 0 : e.statuses) == null ? void 0 : V.has) == null ? void 0 : N.call(V, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    f && i.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const k = Math.min(3, Math.max(
      -3,
      h - d + (f ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: c,
      moraleCurrent: a,
      advantageValue: k,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: i.length ? i.join(", ") : "",
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
    var g, n, o, r, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((g = t.system) == null ? void 0 : g.weapons) ?? {})[this._weaponSlotKey] ?? {}, u = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (y) => y.type === "Fegyver")) ?? [], m = (a.itemId ?? "").trim(), v = m ? u.find((y) => y.id === m) ?? null : null, c = (r = v == null ? void 0 : v.system) == null ? void 0 : r.bonus, s = a.bonus, h = c != null && String(c).trim() !== "", p = s != null && String(s).trim() !== "", d = Number(h ? c : p ? s : 0) || 0, f = this._skillKey, k = ((l = t.system) == null ? void 0 : l.skills) ?? {}, _ = Number(k[f] ?? 0) || 0;
    let b = 0;
    if (t.type === "Karakter" && f) {
      const y = W._getSkillHealthStatusStatic(t, f);
      y === 1 ? b = -6 : y === 2 && (b = -3);
    }
    return d + _ + b;
  }
  async _doRoll(t) {
    var a, u, m, v, c, s, h, p, i, d, f, k, _, b, g;
    const e = this.actor;
    if (e)
      try {
        const n = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), r = t.querySelector("[name='constantBonus']"), l = Math.min(3, Math.max(0, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), y = Math.max(0, Number(((u = (a = e.system) == null ? void 0 : a.resources) == null ? void 0 : u.morale) ?? 0) || 0), I = Math.min(l, y), B = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), S = parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0, M = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, V = this._isWeaponAttack ? 0 : this._injuryModifier, N = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, P = ((v = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : v.call(m, "diseased")) || ((s = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : s.call(c, "poisoned")) ? -1 : 0, w = M + V + N + S + P, K = [
          "3d6",
          B > 0 ? `+${B}d6` : B < 0 ? `-${Math.abs(B)}d6` : "",
          I > 0 ? `+${I}d8` : "",
          w !== 0 ? w > 0 ? `+${w}` : `${w}` : ""
        ].filter(Boolean).join(" "), x = new Roll(K);
        await x.evaluate({ async: !0 });
        const { resultType: D, label: Q } = ie(x), X = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Z = this._label;
        const $ = { resultType: D, critLabel: Q };
        if (this._isWeaponAttack && ((p = (h = game.user) == null ? void 0 : h.targets) != null && p.size)) {
          const C = Array.from(game.user.targets)[0], j = (C == null ? void 0 : C.actor) ?? null;
          if (j) {
            const z = ((i = j.system) == null ? void 0 : i.combat) ?? {}, ee = Number(z.defense ?? 0) || 0, te = Number(z.defenseBonus ?? 0) || 0, se = Number(z.givenProtection ?? 0) || 0, ae = (f = (d = j.statuses) == null ? void 0 : d.has) != null && f.call(d, "lookaround") ? 1 : 0, ne = (_ = (k = j.statuses) == null ? void 0 : k.has) != null && _.call(k, "halfcover") ? 3 : 0;
            let H = 0;
            if (j.type === "Karakter") {
              const T = (((b = j.items) == null ? void 0 : b.contents) ?? []).filter(
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
            const U = ee + te + se + H + ae + ne, Y = (Number(x.total ?? 0) || 0) >= U, oe = j.name ?? C.name ?? "Célpont";
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
              targetName: oe,
              defense: U,
              isHit: Y,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await x.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Z,
          flags: { "vacuum-of-the-void": $ },
          rollMode: X
        }), I > 0) {
          const R = Math.max(0, y - I);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(x.total) ?? 0;
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
function ue(L, t, e) {
  var s, h;
  if (!L) return;
  const a = Number(((h = (s = L.system) == null ? void 0 : s.skills) == null ? void 0 : h[t]) ?? 0) || 0, u = W.BODY_PART_BY_SKILL[t] ? W._getSkillHealthStatusStatic(L, t) : void 0;
  let m = 0;
  u === 1 ? m = -6 : u === 2 && (m = -3);
  const v = (e || "").trim() === "Kezdeményezés";
  new J({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: m,
    isInitiativeRoll: v
  }).render(!0);
}
function ce(L, t) {
  var M, V, N, A, P, w, K, x;
  if (!L || !t) return;
  const e = L, u = (((M = e.system) == null ? void 0 : M.weapons) ?? {})[t] ?? {}, m = ((V = e.system) == null ? void 0 : V.skills) ?? {}, v = ((A = (N = e.items) == null ? void 0 : N.filter) == null ? void 0 : A.call(N, (D) => D.type === "Fegyver")) ?? [], c = (u.itemId ?? "").trim(), s = c ? v.find((D) => D.id === c) ?? null : null, h = ((s == null ? void 0 : s.name) ?? u.name ?? "").trim() || "Fegyver", p = (P = s == null ? void 0 : s.system) == null ? void 0 : P.bonus, i = u.bonus, d = p != null && String(p).trim() !== "", f = i != null && String(i).trim() !== "", _ = Number(d ? p : f ? i : 0) || 0, b = ((w = s == null ? void 0 : s.system) == null ? void 0 : w.type) || "kinetic", g = (((K = s == null ? void 0 : s.system) == null ? void 0 : K.skillKey) ?? "").trim(), n = g && m[g] !== void 0 ? g : b === "explosive" ? "grenadeUse" : "firearms", o = Number(m[n] || 0) || 0, r = _ + o;
  let l = 0;
  if (e.type === "Karakter") {
    const D = W._getSkillHealthStatusStatic(e, n);
    D === 1 ? l = -6 : D === 2 && (l = -3);
  }
  const y = (((x = s == null ? void 0 : s.system) == null ? void 0 : x.damage) ?? "").trim(), I = (u.damage ?? "").trim(), B = y || I || "";
  new J({
    actor: L,
    skillKey: n,
    label: h,
    baseModifier: r,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? c,
    weaponDamageFormula: B
  }).render(!0);
}
export {
  J as VoidRollSheet,
  ue as openRollSheetForSkill,
  ce as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-CR21ZBcS.mjs.map
