import { V as E, c as ae } from "./vacuum-of-the-void-zDUnfDM_.mjs";
class Y extends Application {
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
      label: l,
      baseModifier: m,
      injuryModifier: g,
      injuryPenalty: c,
      isWeaponAttack: a,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: r,
      weaponDamageFormula: d
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = l ?? s ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var M, w, y, f, b;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((w = (M = this.element) == null ? void 0 : M.querySelector) == null ? void 0 : w.call(M, "form.votv.roll-sheet")) ?? ((f = (y = this.element) == null ? void 0 : y.matches) != null && f.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const l = s.querySelector("input[name='advantage']"), m = s.querySelectorAll(".roll-sheet-advantage-d6"), g = (o) => {
      const n = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      l && (l.value = String(n)), m.forEach((i) => {
        const u = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", u === n);
      });
    };
    m.forEach((o) => {
      o.addEventListener("click", (n) => {
        n.preventDefault(), g(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), g((l == null ? void 0 : l.value) ?? "0");
    const c = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = c == null ? void 0 : c.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), h = s.querySelector("input[name='moraleDice']"), p = s.querySelectorAll(".roll-sheet-morale-d8"), r = (o) => {
      let n = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      n = Math.min(n, a), h && (h.value = String(n)), p.forEach((i, u) => {
        i.classList.toggle("selected", u < n), i.style.pointerEvents = u < a ? "" : "none", i.style.opacity = u < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (n) => {
        if (n.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > a) return;
        const i = o.dataset.moraleValue ?? "0";
        r(i), t._updateFormulaPreview(s);
      });
    }), r((h == null ? void 0 : h.value) ?? "0");
    const d = s.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(s)), d && d.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (o) => {
      var n, i, u, I;
      if ((i = (n = o.target) == null ? void 0 : n.closest) != null && i.call(n, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (I = (u = o.target) == null ? void 0 : u.closest) != null && I.call(u, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var M, w, y, f, b, o, n, i, u, I, j, L;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((M = t.querySelector("input[name='advantage']")) == null ? void 0 : M.value) ?? "0", 10) || 0, l = parseInt(((w = t.querySelector("input[name='moraleDice']")) == null ? void 0 : w.value) ?? "0", 10) || 0, m = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, g = parseInt(((f = t.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, c = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, a = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, h = (u = (i = (n = this.actor) == null ? void 0 : n.statuses) == null ? void 0 : i.has) != null && u.call(i, "diseased") || (L = (j = (I = this.actor) == null ? void 0 : I.statuses) == null ? void 0 : j.has) != null && L.call(j, "poisoned") ? -1 : 0, p = g + c + a + m + h, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", r[0].appendChild(d), s !== 0) {
      const v = document.createElement("span");
      v.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const S = document.createElement("img");
      S.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", S.alt = s > 0 ? "előny d6" : "hátrány d6", S.className = "roll-sheet-preview-die", v.appendChild(S), r.push(v);
    }
    if (l > 0) {
      const v = document.createElement("span");
      v.textContent = ` + ${l} `;
      const S = document.createElement("img");
      S.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", S.alt = "d8", S.className = "roll-sheet-preview-die", v.appendChild(S), r.push(v);
    }
    if (p !== 0) {
      const v = document.createElement("span");
      v.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, r.push(v);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var y, f, b, o, n, i, u, I, j, L, v, S, B, D;
    const e = this.actor, s = Math.max(0, Number(((f = (y = e == null ? void 0 : e.system) == null ? void 0 : y.resources) == null ? void 0 : f.morale) ?? 0) || 0), l = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", l, m, g].filter(Boolean).join(" ") || "3d6";
    let a = "", h = 0;
    const p = [], r = [];
    let d = 0;
    if (this._isWeaponAttack && ((o = (b = game.user) == null ? void 0 : b.targets) != null && o.size)) {
      const P = Array.from(game.user.targets)[0], _ = (P == null ? void 0 : P.actor) ?? null;
      a = (_ == null ? void 0 : _.name) || (P == null ? void 0 : P.name) || "", (i = (n = _ == null ? void 0 : _.statuses) == null ? void 0 : n.has) != null && i.call(n, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (I = (u = _ == null ? void 0 : _.statuses) == null ? void 0 : u.has) != null && I.call(u, "dodge") && (d = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (L = (j = e == null ? void 0 : e.statuses) == null ? void 0 : j.has) != null && L.call(j, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (S = (v = e == null ? void 0 : e.statuses) == null ? void 0 : v.has) != null && S.call(v, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const M = ((D = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) == null ? void 0 : D.call(B, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    M && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
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
    var y, f, b, o, n;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor.id ? game.actors.get(this.actor.id) ?? this.actor : this.actor, s = (((y = t.system) == null ? void 0 : y.weapons) ?? {})[this._weaponSlotKey] ?? {}, l = ((b = (f = t.items) == null ? void 0 : f.filter) == null ? void 0 : b.call(f, (i) => i.type === "Fegyver")) ?? [], m = (s.itemId ?? "").trim(), g = m ? l.find((i) => i.id === m) ?? null : null, c = (o = g == null ? void 0 : g.system) == null ? void 0 : o.bonus, a = s.bonus, h = c != null && String(c).trim() !== "" ? c : a ?? 0, p = Number(h) || 0, r = this._skillKey, d = ((n = t.system) == null ? void 0 : n.skills) ?? {}, M = Number(d[r] ?? 0) || 0;
    let w = 0;
    if (t.type === "Karakter" && r) {
      const i = E._getSkillHealthStatusStatic(t, r);
      i === 1 ? w = -6 : i === 2 && (w = -3);
    }
    return p + M + w;
  }
  async _doRoll(t) {
    var s, l, m, g, c, a, h, p, r, d, M, w, y;
    const e = this.actor;
    if (e)
      try {
        const f = t.querySelector("[name='moraleDice']"), b = t.querySelector("[name='advantage']"), o = t.querySelector("[name='constantBonus']"), n = Math.min(3, Math.max(0, parseInt((f == null ? void 0 : f.value) ?? "0", 10) || 0)), i = Math.max(0, Number(((l = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : l.morale) ?? 0) || 0), u = Math.min(n, i), I = Math.min(3, Math.max(-3, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0)), j = parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0, L = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, v = this._isWeaponAttack ? 0 : this._injuryModifier, S = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, D = ((g = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : g.call(m, "diseased")) || ((a = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : a.call(c, "poisoned")) ? -1 : 0, N = L + v + S + j + D, P = [
          "3d6",
          I > 0 ? `+${I}d6` : I < 0 ? `-${Math.abs(I)}d6` : "",
          u > 0 ? `+${u}d8` : "",
          N !== 0 ? N > 0 ? `+${N}` : `${N}` : ""
        ].filter(Boolean).join(" "), _ = new Roll(P);
        await _.evaluate({ async: !0 });
        const { resultType: x, label: G } = ae(_), J = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const O = { resultType: x, critLabel: G };
        if (this._isWeaponAttack && ((p = (h = game.user) == null ? void 0 : h.targets) != null && p.size)) {
          const C = Array.from(game.user.targets)[0], k = (C == null ? void 0 : C.actor) ?? null;
          if (k) {
            const W = ((r = k.system) == null ? void 0 : r.combat) ?? {}, X = Number(W.defense ?? 0) || 0, Z = Number(W.defenseBonus ?? 0) || 0, ee = Number(W.givenProtection ?? 0) || 0, te = (M = (d = k.statuses) == null ? void 0 : d.has) != null && M.call(d, "lookaround") ? 1 : 0;
            let $ = 0;
            if (k.type === "Karakter") {
              const T = (((w = k.items) == null ? void 0 : w.contents) ?? []).filter(
                (A) => {
                  var K;
                  return A.type === "Pancel" && ((K = A.system) == null ? void 0 : K.equipped) === !0;
                }
              );
              for (const A of T) {
                const K = String(((y = A.system) == null ? void 0 : y.protectionBonus) ?? "").trim().replace(",", "."), U = Number(K);
                Number.isFinite(U) && ($ += U);
              }
            }
            const z = X + Z + ee + $ + te, H = (Number(_.total ?? 0) || 0) >= z, se = k.name ?? C.name ?? "Célpont";
            let F = null, q = null;
            if (H && k.type === "Karakter")
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
              targetActorId: k.id ?? null,
              targetName: se,
              defense: z,
              isHit: H,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await _.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": O },
          rollMode: J
        }), u > 0) {
          const R = Math.max(0, i - u);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(_.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const C = e.apps ?? [];
            for (const k of C)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ie(V, t, e) {
  var a, h;
  if (!V) return;
  const s = Number(((h = (a = V.system) == null ? void 0 : a.skills) == null ? void 0 : h[t]) ?? 0) || 0, l = E.BODY_PART_BY_SKILL[t] ? E._getSkillHealthStatusStatic(V, t) : void 0;
  let m = 0;
  l === 1 ? m = -6 : l === 2 && (m = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new Y({
    actor: V,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: m,
    isInitiativeRoll: g
  }).render(!0);
}
function re(V, t) {
  var L, v, S, B, D, N, P, _;
  if (!V || !t) return;
  const e = V, l = (((L = e.system) == null ? void 0 : L.weapons) ?? {})[t] ?? {}, m = ((v = e.system) == null ? void 0 : v.skills) ?? {}, g = ((B = (S = e.items) == null ? void 0 : S.filter) == null ? void 0 : B.call(S, (x) => x.type === "Fegyver")) ?? [], c = (l.itemId ?? "").trim(), a = c ? g.find((x) => x.id === c) ?? null : null, h = ((a == null ? void 0 : a.name) ?? l.name ?? "").trim() || "Fegyver", p = (D = a == null ? void 0 : a.system) == null ? void 0 : D.bonus, r = l.bonus, d = p != null && String(p).trim() !== "" ? p : r ?? 0, M = Number(d) || 0, w = ((N = a == null ? void 0 : a.system) == null ? void 0 : N.type) || "kinetic", y = (((P = a == null ? void 0 : a.system) == null ? void 0 : P.skillKey) ?? "").trim(), f = y && m[y] !== void 0 ? y : w === "explosive" ? "grenadeUse" : "firearms", b = Number(m[f] || 0) || 0, o = M + b;
  let n = 0;
  if (e.type === "Karakter") {
    const x = E._getSkillHealthStatusStatic(e, f);
    x === 1 ? n = -6 : x === 2 && (n = -3);
  }
  const i = (((_ = a == null ? void 0 : a.system) == null ? void 0 : _.damage) ?? "").trim(), u = (l.damage ?? "").trim(), I = i || u || "";
  new Y({
    actor: e,
    skillKey: f,
    label: h,
    baseModifier: o,
    injuryModifier: 0,
    injuryPenalty: n,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? c,
    weaponDamageFormula: I
  }).render(!0);
}
export {
  Y as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DakhxV6d.mjs.map
