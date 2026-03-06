import { V as P, c as F } from "./vacuum-of-the-void-QwtaMrmD.mjs";
class B extends Application {
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
      skillKey: e,
      label: o,
      baseModifier: u,
      injuryModifier: d,
      injuryPenalty: m,
      isWeaponAttack: l,
      weaponSlotKey: r,
      weaponItemId: c
    } = t;
    super(t), this._actor = a, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(d) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!l, this._weaponSlotKey = r || "", this._weaponItemId = c || "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, a = {}) {
    const e = await super.render(t, a);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var g, i, p, M, b;
    const t = this, a = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(a)}"]`) ?? ((i = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : i.call(g, "form.votv.roll-sheet")) ?? ((M = (p = this.element) == null ? void 0 : p.matches) != null && M.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), u = e.querySelectorAll(".roll-sheet-advantage-d6"), d = (s) => {
      const n = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(n)), u.forEach((v) => {
        const f = parseInt(v.dataset.advantageValue ?? "0", 10);
        v.classList.toggle("selected", f === n);
      });
    };
    u.forEach((s) => {
      s.addEventListener("click", (n) => {
        n.preventDefault(), d(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), d((o == null ? void 0 : o.value) ?? "0");
    const m = e.querySelector(".roll-sheet-morale-wrap"), l = Math.min(3, Math.max(0, parseInt(((b = m == null ? void 0 : m.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), r = e.querySelector("input[name='moraleDice']"), c = e.querySelectorAll(".roll-sheet-morale-d8"), h = (s) => {
      let n = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      n = Math.min(n, l), r && (r.value = String(n)), c.forEach((v, f) => {
        v.classList.toggle("selected", f < n), v.style.pointerEvents = f < l ? "" : "none", v.style.opacity = f < l ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (n) => {
        if (n.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > l) return;
        const v = s.dataset.moraleValue ?? "0";
        h(v), t._updateFormulaPreview(e);
      });
    }), h((r == null ? void 0 : r.value) ?? "0");
    const y = e.querySelector("input[name='constantBonus']");
    y && y.addEventListener("input", () => t._updateFormulaPreview(e)), y && y.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var n, v, f, S;
      if ((v = (n = s.target) == null ? void 0 : n.closest) != null && v.call(n, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (S = (f = s.target) == null ? void 0 : f.closest) != null && S.call(f, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var y, g, i, p, M, b;
    const a = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!a) return;
    const e = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, o = parseInt(((g = t.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, u = parseInt(((i = t.querySelector("input[name='constantBonus']")) == null ? void 0 : i.value) ?? "0", 10) || 0, d = parseInt(((p = t.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, m = parseInt(((M = t.dataset) == null ? void 0 : M.injuryMod) ?? "0", 10) || 0, l = parseInt(((b = t.dataset) == null ? void 0 : b.injuryPenalty) ?? "0", 10) || 0, r = d + m + l + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", c[0].appendChild(h), e !== 0) {
      const s = document.createElement("span");
      s.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const n = document.createElement("img");
      n.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", n.alt = e > 0 ? "előny d6" : "hátrány d6", n.className = "roll-sheet-preview-die", s.appendChild(n), c.push(s);
    }
    if (o > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${o} `;
      const n = document.createElement("img");
      n.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", n.alt = "d8", n.className = "roll-sheet-preview-die", s.appendChild(n), c.push(s);
    }
    if (r !== 0) {
      const s = document.createElement("span");
      s.textContent = r > 0 ? ` + ${r}` : ` − ${Math.abs(r)}`, c.push(s);
    }
    a.innerHTML = "", a.append(...c);
  }
  getData(t = {}) {
    var r, c, h, y;
    const a = this.actor, e = Math.max(0, Number(((c = (r = a == null ? void 0 : a.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", d = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", o, u, d].filter(Boolean).join(" ") || "3d6";
    let l = "";
    if (this._isWeaponAttack && ((y = (h = game.user) == null ? void 0 : h.targets) != null && y.size)) {
      const i = Array.from(game.user.targets)[0], p = (i == null ? void 0 : i.actor) ?? null;
      l = (p == null ? void 0 : p.name) || (i == null ? void 0 : i.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: e,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: l
    };
  }
  activateListeners(t) {
    var a;
    (a = super.activateListeners) == null || a.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var S, L, x, N, $;
    const a = this.actor;
    if (!a) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), u = t.querySelector("[name='constantBonus']"), d = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((L = (S = a.system) == null ? void 0 : S.resources) == null ? void 0 : L.morale) ?? 0) || 0), l = Math.min(d, m), r = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), c = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, h = this._baseModifier, y = this._injuryModifier, g = this._injuryPenalty || 0, i = h + y + g + c, p = [
      "3d6",
      r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
      l > 0 ? `+${l}d8` : "",
      i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""
    ].filter(Boolean).join(" "), M = new Roll(p);
    await M.evaluate({ async: !0 });
    const { resultType: b, label: s } = F(M), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let v = this._label;
    const f = { resultType: b, critLabel: s };
    if (this._isWeaponAttack && ((N = (x = game.user) == null ? void 0 : x.targets) != null && N.size)) {
      const w = Array.from(game.user.targets)[0], I = (w == null ? void 0 : w.actor) ?? null;
      if (I) {
        const j = (($ = I.system) == null ? void 0 : $.combat) ?? {}, D = Number(j.defense ?? 0) || 0, R = Number(j.defenseBonus ?? 0) || 0, k = Number(j.givenProtection ?? 0) || 0, C = D + R + k, E = (Number(M.total ?? 0) || 0) >= C, A = I.name ?? w.name ?? "Célpont", V = E ? "talált" : "nem talált";
        v = `${this._label} – ${A} (${V})`, f.weaponAttack = !0, f.weapon = {
          actorId: a.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          targetActorId: I.id ?? null,
          targetName: A,
          defense: C,
          isHit: E
        };
      }
    }
    if (await M.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: a, alias: (a == null ? void 0 : a.name) ?? void 0 }),
      flavor: v,
      flags: { "vacuum-of-the-void": f },
      rollMode: n
    }), l > 0) {
      const q = Math.max(0, m - l);
      await a.update({ "system.resources.morale": q });
    }
    this.close();
  }
}
function T(_, t, a) {
  var m, l;
  if (!_) return;
  const e = Number(((l = (m = _.system) == null ? void 0 : m.skills) == null ? void 0 : l[t]) ?? 0) || 0, o = P.BODY_PART_BY_SKILL[t] ? P._getSkillHealthStatusStatic(_, t) : void 0;
  let u = 0;
  o === 1 ? u = -6 : o === 2 && (u = -3), new B({
    actor: _,
    skillKey: t,
    label: a || t,
    baseModifier: e,
    injuryModifier: u
  }).render(!0);
}
function W(_, t) {
  var g, i, p, M;
  if (!_ || !t) return;
  const e = (((g = _.system) == null ? void 0 : g.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), u = ((i = _.items) == null ? void 0 : i.filter((b) => b.type === "Fegyver")) ?? [], d = o ? u.find((b) => b.id === o) : null, m = (d == null ? void 0 : d.name) || e.name || `Fegyver (${t})`, l = Number(e.bonus ?? 0) || 0, r = Number(((M = (p = _.system) == null ? void 0 : p.skills) == null ? void 0 : M.grenadeUse) ?? 0) || 0, c = P._getSkillHealthStatusStatic(_, "grenadeUse");
  let h = 0;
  c === 1 ? h = -6 : c === 2 && (h = -3), new B({
    actor: _,
    skillKey: "grenadeUse",
    label: m,
    baseModifier: r,
    injuryModifier: l,
    injuryPenalty: h,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (d == null ? void 0 : d.id) ?? o
  }).render(!0);
}
export {
  B as VoidRollSheet,
  T as openRollSheetForSkill,
  W as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-B5GUjHbe.mjs.map
