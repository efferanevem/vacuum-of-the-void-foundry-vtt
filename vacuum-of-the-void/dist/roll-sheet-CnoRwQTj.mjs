import { V as $, c as Y } from "./vacuum-of-the-void-C8VR_J8r.mjs";
class z extends Application {
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
      actor: a,
      skillKey: s,
      label: l,
      baseModifier: h,
      injuryModifier: v,
      injuryPenalty: o,
      isWeaponAttack: e,
      weaponSlotKey: m,
      weaponItemId: u,
      weaponDamageFormula: c
    } = t;
    super(t), this._actor = a, this._skillKey = s ?? "", this._label = l ?? s ?? "", this._baseModifier = Number(h) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(o) || 0, this._isWeaponAttack = !!e, this._weaponSlotKey = m || "", this._weaponItemId = u || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, a = {}) {
    const s = await super.render(t, a);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var f, g, _, y, S;
    const t = this, a = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(a)}"]`) ?? ((g = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : g.call(f, "form.votv.roll-sheet")) ?? ((y = (_ = this.element) == null ? void 0 : _.matches) != null && y.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    t._isInitiativeRoll && (s.dataset.initiativeRoll = "1");
    const l = s.querySelector("input[name='advantage']"), h = s.querySelectorAll(".roll-sheet-advantage-d6"), v = (r) => {
      const n = Math.min(3, Math.max(-3, parseInt(r, 10) || 0));
      l && (l.value = String(n)), h.forEach((i) => {
        const p = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", p === n);
      });
    };
    h.forEach((r) => {
      r.addEventListener("click", (n) => {
        n.preventDefault(), v(r.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), v((l == null ? void 0 : l.value) ?? "0");
    const o = s.querySelector(".roll-sheet-morale-wrap"), e = Math.min(3, Math.max(0, parseInt(((S = o == null ? void 0 : o.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), u = s.querySelectorAll(".roll-sheet-morale-d8"), c = (r) => {
      let n = Math.min(3, Math.max(0, parseInt(r, 10) || 0));
      n = Math.min(n, e), m && (m.value = String(n)), u.forEach((i, p) => {
        i.classList.toggle("selected", p < n), i.style.pointerEvents = p < e ? "" : "none", i.style.opacity = p < e ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((r) => {
      r.addEventListener("click", (n) => {
        if (n.preventDefault(), r.classList.contains("roll-sheet-morale-d8") && parseInt(r.dataset.moraleValue ?? "0", 10) > e) return;
        const i = r.dataset.moraleValue ?? "0";
        c(i), t._updateFormulaPreview(s);
      });
    }), c((m == null ? void 0 : m.value) ?? "0");
    const d = s.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(s)), d && d.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (r) => {
      var n, i, p, I;
      if ((i = (n = r.target) == null ? void 0 : n.closest) != null && i.call(n, ".roll-sheet-close")) {
        r.preventDefault(), t.close();
        return;
      }
      (I = (p = r.target) == null ? void 0 : p.closest) != null && I.call(p, ".roll-sheet-do-roll") && (r.preventDefault(), r.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var d, f, g, _, y, S, r;
    const a = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!a) return;
    const s = parseInt(((d = t.querySelector("input[name='constantBonus']")) == null ? void 0 : d.value) ?? "0", 10) || 0, l = parseInt(((f = t.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, h = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, v = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, o = l + h + v + s;
    if (((y = t.dataset) == null ? void 0 : y.initiativeRoll) === "1") {
      a.innerHTML = "";
      const n = document.createElement("span");
      n.textContent = o !== 0 ? `Összesítve: 1d20 ${o > 0 ? "+ " + o : o}` : "Összesítve: 1d20", a.appendChild(n);
      return;
    }
    const e = parseInt(((S = t.querySelector("input[name='advantage']")) == null ? void 0 : S.value) ?? "0", 10) || 0, m = parseInt(((r = t.querySelector("input[name='moraleDice']")) == null ? void 0 : r.value) ?? "0", 10) || 0, u = [];
    u.push(document.createElement("span")), u[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", u[0].appendChild(c), e !== 0) {
      const n = document.createElement("span");
      n.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const i = document.createElement("img");
      i.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", i.alt = e > 0 ? "előny d6" : "hátrány d6", i.className = "roll-sheet-preview-die", n.appendChild(i), u.push(n);
    }
    if (m > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${m} `;
      const i = document.createElement("img");
      i.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", i.alt = "d8", i.className = "roll-sheet-preview-die", n.appendChild(i), u.push(n);
    }
    if (o !== 0) {
      const n = document.createElement("span");
      n.textContent = o > 0 ? ` + ${o}` : ` − ${Math.abs(o)}`, u.push(n);
    }
    a.innerHTML = "", a.append(...u);
  }
  getData(t = {}) {
    var v, o, e, m;
    const a = this.actor, s = Math.max(0, Number(((o = (v = a == null ? void 0 : a.system) == null ? void 0 : v.resources) == null ? void 0 : o.morale) ?? 0) || 0);
    let l;
    if (this._isInitiativeRoll)
      l = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", d = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      l = ["3d6", u, c, d].filter(Boolean).join(" ") || "3d6";
    }
    let h = "";
    if (this._isWeaponAttack && ((m = (e = game.user) == null ? void 0 : e.targets) != null && m.size)) {
      const c = Array.from(game.user.targets)[0], d = (c == null ? void 0 : c.actor) ?? null;
      h = (d == null ? void 0 : d.name) || (c == null ? void 0 : c.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: l,
      moraleCurrent: s,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: h,
      isInitiativeRoll: this._isInitiativeRoll
    };
  }
  activateListeners(t) {
    var a;
    (a = super.activateListeners) == null || a.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var I, j, k, N, C, B, D;
    const a = this.actor;
    if (!a) return;
    const s = t.querySelector("[name='constantBonus']"), l = parseInt((s == null ? void 0 : s.value) ?? "0", 10) || 0, h = this._baseModifier, v = this._injuryModifier, o = this._injuryPenalty || 0, e = h + v + o + l;
    if (this._isInitiativeRoll) {
      const b = e !== 0 ? `1d20${e > 0 ? "+" : ""}${e}` : "1d20", L = new Roll(b);
      await L.evaluate({ async: !0 });
      const w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
      await L.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: a, alias: (a == null ? void 0 : a.name) ?? void 0 }),
        flavor: "Kezdeményezés",
        flags: { "vacuum-of-the-void": {} },
        rollMode: w
      }), this.close();
      return;
    }
    const m = t.querySelector("[name='moraleDice']"), u = t.querySelector("[name='advantage']"), c = Math.min(3, Math.max(0, parseInt((m == null ? void 0 : m.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((j = (I = a.system) == null ? void 0 : I.resources) == null ? void 0 : j.morale) ?? 0) || 0), f = Math.min(c, d), g = Math.min(3, Math.max(-3, parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0)), _ = [
      "3d6",
      g > 0 ? `+${g}d6` : g < 0 ? `-${Math.abs(g)}d6` : "",
      f > 0 ? `+${f}d8` : "",
      e !== 0 ? e > 0 ? `+${e}` : `${e}` : ""
    ].filter(Boolean).join(" "), y = new Roll(_);
    await y.evaluate({ async: !0 });
    const { resultType: S, label: r } = Y(y), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let i = this._label;
    const p = { resultType: S, critLabel: r };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const L = Array.from(game.user.targets)[0], w = (L == null ? void 0 : L.actor) ?? null;
      if (w) {
        const q = ((C = w.system) == null ? void 0 : C.combat) ?? {}, T = Number(q.defense ?? 0) || 0, W = Number(q.defenseBonus ?? 0) || 0, H = Number(q.givenProtection ?? 0) || 0;
        let A = 0;
        if (w.type === "Karakter") {
          const R = (((B = w.items) == null ? void 0 : B.contents) ?? []).filter(
            (x) => {
              var E;
              return x.type === "Pancel" && ((E = x.system) == null ? void 0 : E.equipped) === !0;
            }
          );
          for (const x of R) {
            const E = String(((D = x.system) == null ? void 0 : D.protectionBonus) ?? "").trim().replace(",", "."), K = Number(E);
            Number.isFinite(K) && (A += K);
          }
        }
        const V = T + W + H + A, O = (Number(y.total ?? 0) || 0) >= V, U = w.name ?? L.name ?? "Célpont";
        let P = null, F = null;
        if (O && w.type === "Karakter")
          try {
            const R = new Roll("1d8");
            await R.evaluate({ async: !0 }), P = Number(R.total ?? 0) || 1, P === 1 ? F = "Fej" : P >= 2 && P <= 4 ? F = "Törzs" : P === 5 || P === 6 ? F = "Karok" : F = "Lábak";
          } catch (R) {
            console.warn("VOTV hit location roll failed:", R);
          }
        p.weaponAttack = !0, p.weapon = {
          actorId: a.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: w.id ?? null,
          targetName: U,
          defense: V,
          isHit: O,
          hitLocationRoll: P ?? null,
          hitLocationName: F ?? null
        };
      }
    }
    if (await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: a, alias: (a == null ? void 0 : a.name) ?? void 0 }),
      flavor: i,
      flags: { "vacuum-of-the-void": p },
      rollMode: n
    }), f > 0) {
      const b = Math.max(0, d - f);
      await a.update({ "system.resources.morale": b });
    }
    this.close();
  }
}
function Q(M, t, a) {
  var o, e;
  if (!M) return;
  const s = Number(((e = (o = M.system) == null ? void 0 : o.skills) == null ? void 0 : e[t]) ?? 0) || 0, l = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(M, t) : void 0;
  let h = 0;
  l === 1 ? h = -6 : l === 2 && (h = -3), new z({
    actor: M,
    skillKey: t,
    label: a || t,
    baseModifier: s,
    injuryModifier: h
  }).render(!0);
}
function X(M, t) {
  var p, I, j, k, N, C, B, D;
  if (!M || !t) return;
  const a = M, l = (((p = a.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, h = ((I = a.system) == null ? void 0 : I.skills) ?? {}, v = ((k = (j = a.items) == null ? void 0 : j.filter) == null ? void 0 : k.call(j, (b) => b.type === "Fegyver")) ?? [], o = (l.itemId ?? "").trim(), e = o ? v.find((b) => b.id === o) ?? null : null, m = ((e == null ? void 0 : e.name) ?? l.name ?? "").trim() || "Fegyver", u = Number(l.bonus || ((N = e == null ? void 0 : e.system) == null ? void 0 : N.bonus) || 0) || 0, c = ((C = e == null ? void 0 : e.system) == null ? void 0 : C.type) || "kinetic", d = (((B = e == null ? void 0 : e.system) == null ? void 0 : B.skillKey) ?? "").trim(), f = d && h[d] !== void 0 ? d : c === "explosive" ? "grenadeUse" : "firearms", g = Number(h[f] || 0) || 0, _ = u + g;
  let y = 0;
  if (M.type === "Karakter") {
    const b = $._getSkillHealthStatusStatic(M, f);
    b === 1 ? y = -6 : b === 2 && (y = -3);
  }
  const S = (((D = e == null ? void 0 : e.system) == null ? void 0 : D.damage) ?? "").trim(), r = (l.damage ?? "").trim(), n = S || r || "";
  new z({
    actor: M,
    skillKey: f,
    label: m,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: y,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (e == null ? void 0 : e.id) ?? o,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  z as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-CnoRwQTj.mjs.map
