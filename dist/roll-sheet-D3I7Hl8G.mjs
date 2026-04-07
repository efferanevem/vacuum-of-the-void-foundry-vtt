import { V as $, c as Y } from "./vacuum-of-the-void-DO3QeEpN.mjs";
class A extends Application {
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
      actor: s,
      skillKey: a,
      label: o,
      baseModifier: h,
      injuryModifier: y,
      injuryPenalty: i,
      isWeaponAttack: e,
      isInitiativeRoll: m,
      weaponSlotKey: d,
      weaponItemId: c,
      weaponDamageFormula: u
    } = t;
    super(t), this._actor = s, this._skillKey = a ?? "", this._label = o ?? a ?? "", this._baseModifier = Number(h) || 0, this._injuryModifier = Number(y) || 0, this._injuryPenalty = Number(i) || 0, this._isWeaponAttack = !!e, this._isInitiativeRoll = !!m, this._weaponSlotKey = d || "", this._weaponItemId = c || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, s = {}) {
    const a = await super.render(t, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, M, _, g, S;
    const t = this, s = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((M = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : M.call(f, "form.votv.roll-sheet")) ?? ((g = (_ = this.element) == null ? void 0 : _.matches) != null && g.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    t._isInitiativeRoll && (a.dataset.initiativeRoll = "1");
    const o = a.querySelector("input[name='advantage']"), h = a.querySelectorAll(".roll-sheet-advantage-d6"), y = (r) => {
      const n = Math.min(3, Math.max(-3, parseInt(r, 10) || 0));
      o && (o.value = String(n)), h.forEach((l) => {
        const p = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", p === n);
      });
    };
    h.forEach((r) => {
      r.addEventListener("click", (n) => {
        n.preventDefault(), y(r.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), y((o == null ? void 0 : o.value) ?? "0");
    const i = a.querySelector(".roll-sheet-morale-wrap"), e = Math.min(3, Math.max(0, parseInt(((S = i == null ? void 0 : i.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), d = a.querySelectorAll(".roll-sheet-morale-d8"), c = (r) => {
      let n = Math.min(3, Math.max(0, parseInt(r, 10) || 0));
      n = Math.min(n, e), m && (m.value = String(n)), d.forEach((l, p) => {
        l.classList.toggle("selected", p < n), l.style.pointerEvents = p < e ? "" : "none", l.style.opacity = p < e ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((r) => {
      r.addEventListener("click", (n) => {
        if (n.preventDefault(), r.classList.contains("roll-sheet-morale-d8") && parseInt(r.dataset.moraleValue ?? "0", 10) > e) return;
        const l = r.dataset.moraleValue ?? "0";
        c(l), t._updateFormulaPreview(a);
      });
    }), c((m == null ? void 0 : m.value) ?? "0");
    const u = a.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(a)), u && u.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (r) => {
      var n, l, p, I;
      if ((l = (n = r.target) == null ? void 0 : n.closest) != null && l.call(n, ".roll-sheet-close")) {
        r.preventDefault(), t.close();
        return;
      }
      (I = (p = r.target) == null ? void 0 : p.closest) != null && I.call(p, ".roll-sheet-do-roll") && (r.preventDefault(), r.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var u, f, M, _, g, S, r;
    const s = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const a = parseInt(((u = t.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, o = parseInt(((f = t.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, h = parseInt(((M = t.dataset) == null ? void 0 : M.injuryMod) ?? "0", 10) || 0, y = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, i = o + h + y + a;
    if (((g = t.dataset) == null ? void 0 : g.initiativeRoll) === "1") {
      s.innerHTML = "";
      const n = document.createElement("span");
      n.textContent = i !== 0 ? `Összesítve: 1d20 ${i > 0 ? "+ " + i : i}` : "Összesítve: 1d20", s.appendChild(n);
      return;
    }
    const e = parseInt(((S = t.querySelector("input[name='advantage']")) == null ? void 0 : S.value) ?? "0", 10) || 0, m = parseInt(((r = t.querySelector("input[name='moraleDice']")) == null ? void 0 : r.value) ?? "0", 10) || 0, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", d[0].appendChild(c), e !== 0) {
      const n = document.createElement("span");
      n.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const l = document.createElement("img");
      l.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", l.alt = e > 0 ? "előny d6" : "hátrány d6", l.className = "roll-sheet-preview-die", n.appendChild(l), d.push(n);
    }
    if (m > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${m} `;
      const l = document.createElement("img");
      l.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", l.alt = "d8", l.className = "roll-sheet-preview-die", n.appendChild(l), d.push(n);
    }
    if (i !== 0) {
      const n = document.createElement("span");
      n.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, d.push(n);
    }
    s.innerHTML = "", s.append(...d);
  }
  getData(t = {}) {
    var y, i, e, m;
    const s = this.actor, a = Math.max(0, Number(((i = (y = s == null ? void 0 : s.system) == null ? void 0 : y.resources) == null ? void 0 : i.morale) ?? 0) || 0);
    let o;
    if (this._isInitiativeRoll)
      o = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const d = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", u = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      o = ["3d6", d, c, u].filter(Boolean).join(" ") || "3d6";
    }
    let h = "";
    if (this._isWeaponAttack && ((m = (e = game.user) == null ? void 0 : e.targets) != null && m.size)) {
      const c = Array.from(game.user.targets)[0], u = (c == null ? void 0 : c.actor) ?? null;
      h = (u == null ? void 0 : u.name) || (c == null ? void 0 : c.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: o,
      moraleCurrent: a,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: h,
      isInitiativeRoll: this._isInitiativeRoll
    };
  }
  activateListeners(t) {
    var s;
    (s = super.activateListeners) == null || s.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var I, j, k, N, C, F, B;
    const s = this.actor;
    if (!s) return;
    const a = t.querySelector("[name='constantBonus']"), o = parseInt((a == null ? void 0 : a.value) ?? "0", 10) || 0, h = this._baseModifier, y = this._injuryModifier, i = this._injuryPenalty || 0, e = h + y + i + o;
    if (this._isInitiativeRoll) {
      const b = e !== 0 ? `1d20${e > 0 ? "+" : ""}${e}` : "1d20", L = new Roll(b);
      await L.evaluate({ async: !0 });
      const w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
      await L.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
        flavor: "Kezdeményezés",
        flags: { "vacuum-of-the-void": {} },
        rollMode: w
      }), this.close();
      return;
    }
    const m = t.querySelector("[name='moraleDice']"), d = t.querySelector("[name='advantage']"), c = Math.min(3, Math.max(0, parseInt((m == null ? void 0 : m.value) ?? "0", 10) || 0)), u = Math.max(0, Number(((j = (I = s.system) == null ? void 0 : I.resources) == null ? void 0 : j.morale) ?? 0) || 0), f = Math.min(c, u), M = Math.min(3, Math.max(-3, parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0)), _ = [
      "3d6",
      M > 0 ? `+${M}d6` : M < 0 ? `-${Math.abs(M)}d6` : "",
      f > 0 ? `+${f}d8` : "",
      e !== 0 ? e > 0 ? `+${e}` : `${e}` : ""
    ].filter(Boolean).join(" "), g = new Roll(_);
    await g.evaluate({ async: !0 });
    const { resultType: S, label: r } = Y(g), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let l = this._label;
    const p = { resultType: S, critLabel: r };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const L = Array.from(game.user.targets)[0], w = (L == null ? void 0 : L.actor) ?? null;
      if (w) {
        const E = ((C = w.system) == null ? void 0 : C.combat) ?? {}, T = Number(E.defense ?? 0) || 0, W = Number(E.defenseBonus ?? 0) || 0, H = Number(E.givenProtection ?? 0) || 0;
        let V = 0;
        if (w.type === "Karakter") {
          const R = (((F = w.items) == null ? void 0 : F.contents) ?? []).filter(
            (x) => {
              var q;
              return x.type === "Pancel" && ((q = x.system) == null ? void 0 : q.equipped) === !0;
            }
          );
          for (const x of R) {
            const q = String(((B = x.system) == null ? void 0 : B.protectionBonus) ?? "").trim().replace(",", "."), O = Number(q);
            Number.isFinite(O) && (V += O);
          }
        }
        const z = T + W + H + V, K = (Number(g.total ?? 0) || 0) >= z, U = w.name ?? L.name ?? "Célpont";
        let P = null, D = null;
        if (K && w.type === "Karakter")
          try {
            const R = new Roll("1d8");
            await R.evaluate({ async: !0 }), P = Number(R.total ?? 0) || 1, P === 1 ? D = "Fej" : P >= 2 && P <= 4 ? D = "Törzs" : P === 5 || P === 6 ? D = "Karok" : D = "Lábak";
          } catch (R) {
            console.warn("VOTV hit location roll failed:", R);
          }
        p.weaponAttack = !0, p.weapon = {
          actorId: s.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: w.id ?? null,
          targetName: U,
          defense: z,
          isHit: K,
          hitLocationRoll: P ?? null,
          hitLocationName: D ?? null
        };
      }
    }
    if (await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: l,
      flags: { "vacuum-of-the-void": p },
      rollMode: n
    }), f > 0) {
      const b = Math.max(0, u - f);
      await s.update({ "system.resources.morale": b });
    }
    this.close();
  }
}
function Q(v, t, s) {
  var i, e;
  if (!v) return;
  const a = Number(((e = (i = v.system) == null ? void 0 : i.skills) == null ? void 0 : e[t]) ?? 0) || 0, o = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(v, t) : void 0;
  let h = 0;
  o === 1 ? h = -6 : o === 2 && (h = -3), new A({
    actor: v,
    skillKey: t,
    label: s || t,
    baseModifier: a,
    injuryModifier: h
  }).render(!0);
}
function X(v, t) {
  var p, I, j, k, N, C, F, B;
  if (!v || !t) return;
  const s = v, o = (((p = s.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, h = ((I = s.system) == null ? void 0 : I.skills) ?? {}, y = ((k = (j = s.items) == null ? void 0 : j.filter) == null ? void 0 : k.call(j, (b) => b.type === "Fegyver")) ?? [], i = (o.itemId ?? "").trim(), e = i ? y.find((b) => b.id === i) ?? null : null, m = ((e == null ? void 0 : e.name) ?? o.name ?? "").trim() || "Fegyver", d = Number(o.bonus || ((N = e == null ? void 0 : e.system) == null ? void 0 : N.bonus) || 0) || 0, c = ((C = e == null ? void 0 : e.system) == null ? void 0 : C.type) || "kinetic", u = (((F = e == null ? void 0 : e.system) == null ? void 0 : F.skillKey) ?? "").trim(), f = u && h[u] !== void 0 ? u : c === "explosive" ? "grenadeUse" : "firearms", M = Number(h[f] || 0) || 0, _ = d + M;
  let g = 0;
  if (v.type === "Karakter") {
    const b = $._getSkillHealthStatusStatic(v, f);
    b === 1 ? g = -6 : b === 2 && (g = -3);
  }
  const S = (((B = e == null ? void 0 : e.system) == null ? void 0 : B.damage) ?? "").trim(), r = (o.damage ?? "").trim(), n = S || r || "";
  new A({
    actor: v,
    skillKey: f,
    label: m,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: g,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (e == null ? void 0 : e.id) ?? i,
    weaponDamageFormula: n
  }).render(!0);
}
function Z(v) {
  var a, o;
  if (!v) return;
  const t = Number(((o = (a = v.system) == null ? void 0 : a.skills) == null ? void 0 : o.quickThinking) ?? 0) || 0;
  new A({
    actor: v,
    label: "Kezdeményezés",
    baseModifier: t,
    injuryModifier: 0,
    injuryPenalty: 0,
    isInitiativeRoll: !0
  }).render(!0);
}
export {
  A as VoidRollSheet,
  Z as openRollSheetForInitiative,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-D3I7Hl8G.mjs.map
