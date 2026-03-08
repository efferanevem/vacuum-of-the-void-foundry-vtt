import { V as E, c as ae } from "./vacuum-of-the-void-2VBETJa0.mjs";
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
      label: r,
      baseModifier: d,
      injuryModifier: S,
      injuryPenalty: p,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: h,
      weaponItemId: n,
      weaponDamageFormula: l
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = r ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = h || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var y, w, v, _, f;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((w = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : w.call(y, "form.votv.roll-sheet")) ?? ((_ = (v = this.element) == null ? void 0 : v.matches) != null && _.call(v, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const r = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), S = (i) => {
      const o = Math.min(3, Math.max(-3, parseInt(i, 10) || 0));
      r && (r.value = String(o)), d.forEach((c) => {
        const u = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", u === o);
      });
    };
    d.forEach((i) => {
      i.addEventListener("click", (o) => {
        o.preventDefault(), S(i.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), S((r == null ? void 0 : r.value) ?? "0");
    const p = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((f = p == null ? void 0 : p.dataset) == null ? void 0 : f.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), h = s.querySelectorAll(".roll-sheet-morale-d8"), n = (i) => {
      let o = Math.min(3, Math.max(0, parseInt(i, 10) || 0));
      o = Math.min(o, a), m && (m.value = String(o)), h.forEach((c, u) => {
        c.classList.toggle("selected", u < o), c.style.pointerEvents = u < a ? "" : "none", c.style.opacity = u < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((i) => {
      i.addEventListener("click", (o) => {
        if (o.preventDefault(), i.classList.contains("roll-sheet-morale-d8") && parseInt(i.dataset.moraleValue ?? "0", 10) > a) return;
        const c = i.dataset.moraleValue ?? "0";
        n(c), t._updateFormulaPreview(s);
      });
    }), n((m == null ? void 0 : m.value) ?? "0");
    const l = s.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => t._updateFormulaPreview(s)), l && l.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (i) => {
      var o, c, u, I;
      if ((c = (o = i.target) == null ? void 0 : o.closest) != null && c.call(o, ".roll-sheet-close")) {
        i.preventDefault(), t.close();
        return;
      }
      (I = (u = i.target) == null ? void 0 : u.closest) != null && I.call(u, ".roll-sheet-do-roll") && (i.preventDefault(), i.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var y, w, v, _, f, i, o, c, u, I, P, V;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, r = parseInt(((w = t.querySelector("input[name='moraleDice']")) == null ? void 0 : w.value) ?? "0", 10) || 0, d = parseInt(((v = t.querySelector("input[name='constantBonus']")) == null ? void 0 : v.value) ?? "0", 10) || 0, S = parseInt(((_ = t.dataset) == null ? void 0 : _.baseMod) ?? "0", 10) || 0, p = parseInt(((f = t.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, a = parseInt(((i = t.dataset) == null ? void 0 : i.injuryPenalty) ?? "0", 10) || 0, m = (u = (c = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : c.has) != null && u.call(c, "diseased") || (V = (P = (I = this.actor) == null ? void 0 : I.statuses) == null ? void 0 : P.has) != null && V.call(P, "poisoned") ? -1 : 0, h = S + p + a + d + m, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", n[0].appendChild(l), s !== 0) {
      const g = document.createElement("span");
      g.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const M = document.createElement("img");
      M.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", M.alt = s > 0 ? "előny d6" : "hátrány d6", M.className = "roll-sheet-preview-die", g.appendChild(M), n.push(g);
    }
    if (r > 0) {
      const g = document.createElement("span");
      g.textContent = ` + ${r} `;
      const M = document.createElement("img");
      M.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", M.alt = "d8", M.className = "roll-sheet-preview-die", g.appendChild(M), n.push(g);
    }
    if (h !== 0) {
      const g = document.createElement("span");
      g.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, n.push(g);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var v, _, f, i, o, c, u, I, P, V, g, M, N, D;
    const e = this.actor, s = Math.max(0, Number(((_ = (v = e == null ? void 0 : e.system) == null ? void 0 : v.resources) == null ? void 0 : _.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", r, d, S].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const h = [], n = [];
    let l = 0;
    if (this._isWeaponAttack && ((i = (f = game.user) == null ? void 0 : f.targets) != null && i.size)) {
      const L = Array.from(game.user.targets)[0], b = (L == null ? void 0 : L.actor) ?? null;
      a = (b == null ? void 0 : b.name) || (L == null ? void 0 : L.name) || "", (c = (o = b == null ? void 0 : b.statuses) == null ? void 0 : o.has) != null && c.call(o, "stunned") && (m = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (I = (u = b == null ? void 0 : b.statuses) == null ? void 0 : u.has) != null && I.call(u, "dodge") && (l = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (V = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) != null && V.call(P, "diseased") && n.push(game.i18n.localize("VOTV.StatusDiseased")), (M = (g = e == null ? void 0 : e.statuses) == null ? void 0 : g.has) != null && M.call(g, "poisoned") && n.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const y = ((D = (N = e == null ? void 0 : e.statuses) == null ? void 0 : N.has) == null ? void 0 : D.call(N, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    y && n.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const w = Math.min(3, Math.max(
      -3,
      m - l + (y ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: s,
      advantageValue: w,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: n.length ? n.join(", ") : "",
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
    var l, y, w, v, _;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor.id ? game.actors.get(this.actor.id) ?? this.actor : this.actor, s = (((l = t.system) == null ? void 0 : l.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((w = (y = t.items) == null ? void 0 : y.filter) == null ? void 0 : w.call(y, (f) => f.type === "Fegyver")) ?? [], d = (s.itemId ?? "").trim(), S = d ? r.find((f) => f.id === d) ?? null : null, p = Number(s.bonus ?? ((v = S == null ? void 0 : S.system) == null ? void 0 : v.bonus) ?? 0) || 0, a = this._skillKey, m = ((_ = t.system) == null ? void 0 : _.skills) ?? {}, h = Number(m[a] ?? 0) || 0;
    let n = 0;
    if (t.type === "Karakter" && a) {
      const f = E._getSkillHealthStatusStatic(t, a);
      f === 1 ? n = -6 : f === 2 && (n = -3);
    }
    return p + h + n;
  }
  async _doRoll(t) {
    var s, r, d, S, p, a, m, h, n, l, y, w, v;
    const e = this.actor;
    if (e)
      try {
        const _ = t.querySelector("[name='moraleDice']"), f = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((_ == null ? void 0 : _.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((r = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : r.morale) ?? 0) || 0), u = Math.min(o, c), I = Math.min(3, Math.max(-3, parseInt((f == null ? void 0 : f.value) ?? "0", 10) || 0)), P = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, V = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, g = this._isWeaponAttack ? 0 : this._injuryModifier, M = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, D = ((S = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : S.call(d, "diseased")) || ((a = (p = e.statuses) == null ? void 0 : p.has) == null ? void 0 : a.call(p, "poisoned")) ? -1 : 0, x = V + g + M + P + D, L = [
          "3d6",
          I > 0 ? `+${I}d6` : I < 0 ? `-${Math.abs(I)}d6` : "",
          u > 0 ? `+${u}d8` : "",
          x !== 0 ? x > 0 ? `+${x}` : `${x}` : ""
        ].filter(Boolean).join(" "), b = new Roll(L);
        await b.evaluate({ async: !0 });
        const { resultType: B, label: G } = ae(b), J = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Q = this._label;
        const O = { resultType: B, critLabel: G };
        if (this._isWeaponAttack && ((h = (m = game.user) == null ? void 0 : m.targets) != null && h.size)) {
          const C = Array.from(game.user.targets)[0], j = (C == null ? void 0 : C.actor) ?? null;
          if (j) {
            const W = ((n = j.system) == null ? void 0 : n.combat) ?? {}, X = Number(W.defense ?? 0) || 0, Z = Number(W.defenseBonus ?? 0) || 0, ee = Number(W.givenProtection ?? 0) || 0, te = (y = (l = j.statuses) == null ? void 0 : l.has) != null && y.call(l, "lookaround") ? 1 : 0;
            let $ = 0;
            if (j.type === "Karakter") {
              const T = (((w = j.items) == null ? void 0 : w.contents) ?? []).filter(
                (A) => {
                  var K;
                  return A.type === "Pancel" && ((K = A.system) == null ? void 0 : K.equipped) === !0;
                }
              );
              for (const A of T) {
                const K = String(((v = A.system) == null ? void 0 : v.protectionBonus) ?? "").trim().replace(",", "."), U = Number(K);
                Number.isFinite(U) && ($ += U);
              }
            }
            const z = X + Z + ee + $ + te, H = (Number(b.total ?? 0) || 0) >= z, se = j.name ?? C.name ?? "Célpont";
            let F = null, q = null;
            if (H && j.type === "Karakter")
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
              defense: z,
              isHit: H,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await b.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Q,
          flags: { "vacuum-of-the-void": O },
          rollMode: J
        }), u > 0) {
          const R = Math.max(0, c - u);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(b.total) ?? 0;
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
function ie(k, t, e) {
  var a, m;
  if (!k) return;
  const s = Number(((m = (a = k.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[t] ? E._getSkillHealthStatusStatic(k, t) : void 0;
  let d = 0;
  r === 1 ? d = -6 : r === 2 && (d = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new Y({
    actor: k,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: S
  }).render(!0);
}
function re(k, t) {
  var V, g, M, N, D, x, L, b;
  if (!k || !t) return;
  const e = k != null && k.id ? game.actors.get(k.id) ?? k : k, r = (((V = e.system) == null ? void 0 : V.weapons) ?? {})[t] ?? {}, d = ((g = e.system) == null ? void 0 : g.skills) ?? {}, S = ((N = (M = e.items) == null ? void 0 : M.filter) == null ? void 0 : N.call(M, (B) => B.type === "Fegyver")) ?? [], p = (r.itemId ?? "").trim(), a = p ? S.find((B) => B.id === p) ?? null : null, m = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", h = (D = a == null ? void 0 : a.system) == null ? void 0 : D.bonus, n = r.bonus, l = h != null && String(h).trim() !== "" ? h : n ?? 0, y = Number(l) || 0, w = ((x = a == null ? void 0 : a.system) == null ? void 0 : x.type) || "kinetic", v = (((L = a == null ? void 0 : a.system) == null ? void 0 : L.skillKey) ?? "").trim(), _ = v && d[v] !== void 0 ? v : w === "explosive" ? "grenadeUse" : "firearms", f = Number(d[_] || 0) || 0, i = y + f;
  let o = 0;
  if (e.type === "Karakter") {
    const B = E._getSkillHealthStatusStatic(e, _);
    B === 1 ? o = -6 : B === 2 && (o = -3);
  }
  const c = (((b = a == null ? void 0 : a.system) == null ? void 0 : b.damage) ?? "").trim(), u = (r.damage ?? "").trim(), I = c || u || "";
  new Y({
    actor: e,
    skillKey: _,
    label: m,
    baseModifier: i,
    injuryModifier: 0,
    injuryPenalty: o,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? p,
    weaponDamageFormula: I
  }).render(!0);
}
export {
  Y as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DJzIJGFe.mjs.map
