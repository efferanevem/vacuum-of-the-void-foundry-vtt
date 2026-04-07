import { V as j } from "./vacuum-of-the-void-DicO6GI_.mjs";
class w extends Application {
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
    const { actor: n, skillKey: e, label: o, baseModifier: i, injuryModifier: c, injuryPenalty: u } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(i) || 0, this._injuryModifier = Number(c) || 0, this._injuryPenalty = Number(u) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var g, _, y, f, S;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((_ = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : _.call(g, "form.votv.roll-sheet")) ?? ((f = (y = this.element) == null ? void 0 : y.matches) != null && f.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), i = e.querySelectorAll(".roll-sheet-advantage-d6"), c = (s) => {
      const a = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(a)), i.forEach((h) => {
        const p = parseInt(h.dataset.advantageValue ?? "0", 10);
        h.classList.toggle("selected", p === a);
      });
    };
    i.forEach((s) => {
      s.addEventListener("click", (a) => {
        a.preventDefault(), c(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), c((o == null ? void 0 : o.value) ?? "0");
    const u = e.querySelector(".roll-sheet-morale-wrap"), l = Math.min(3, Math.max(0, parseInt(((S = u == null ? void 0 : u.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), r = e.querySelector("input[name='moraleDice']"), d = e.querySelectorAll(".roll-sheet-morale-d8"), m = (s) => {
      let a = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      a = Math.min(a, l), r && (r.value = String(a)), d.forEach((h, p) => {
        h.classList.toggle("selected", p < a), h.style.pointerEvents = p < l ? "" : "none", h.style.opacity = p < l ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (a) => {
        if (a.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > l) return;
        const h = s.dataset.moraleValue ?? "0";
        m(h), t._updateFormulaPreview(e);
      });
    }), m((r == null ? void 0 : r.value) ?? "0");
    const M = e.querySelector("input[name='constantBonus']");
    M && M.addEventListener("input", () => t._updateFormulaPreview(e)), M && M.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var a, h, p, b;
      if ((h = (a = s.target) == null ? void 0 : a.closest) != null && h.call(a, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (b = (p = s.target) == null ? void 0 : p.closest) != null && b.call(p, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var M, g, _, y, f, S;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((M = t.querySelector("input[name='advantage']")) == null ? void 0 : M.value) ?? "0", 10) || 0, o = parseInt(((g = t.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, i = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, c = parseInt(((y = t.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, u = parseInt(((f = t.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, l = parseInt(((S = t.dataset) == null ? void 0 : S.injuryPenalty) ?? "0", 10) || 0, r = c + u + l + i, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const m = document.createElement("img");
    if (m.src = "systems/vacuum-of-the-void/assets/d6.svg", m.alt = "d6", m.className = "roll-sheet-preview-die", d[0].appendChild(m), e !== 0) {
      const s = document.createElement("span");
      s.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const a = document.createElement("img");
      a.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", a.alt = e > 0 ? "előny d6" : "hátrány d6", a.className = "roll-sheet-preview-die", s.appendChild(a), d.push(s);
    }
    if (o > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${o} `;
      const a = document.createElement("img");
      a.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", a.alt = "d8", a.className = "roll-sheet-preview-die", s.appendChild(a), d.push(s);
    }
    if (r !== 0) {
      const s = document.createElement("span");
      s.textContent = r > 0 ? ` + ${r}` : ` − ${Math.abs(r)}`, d.push(s);
    }
    n.innerHTML = "", n.append(...d);
  }
  getData(t = {}) {
    var l, r;
    const n = this.actor, e = Math.max(0, Number(((r = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : r.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", c = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", o, i, c].filter(Boolean).join(" ") || "3d6";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: u,
      moraleCurrent: e,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty
    };
  }
  activateListeners(t) {
    var n;
    (n = super.activateListeners) == null || n.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var h, p;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), c = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), u = Math.max(0, Number(((p = (h = n.system) == null ? void 0 : h.resources) == null ? void 0 : p.morale) ?? 0) || 0), l = Math.min(c, u), r = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), d = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, m = this._baseModifier, M = this._injuryModifier, g = this._injuryPenalty || 0, _ = m + M + g + d, y = [
      "3d6",
      r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
      l > 0 ? `+${l}d8` : "",
      _ !== 0 ? _ > 0 ? `+${_}` : `${_}` : ""
    ].filter(Boolean).join(" "), f = new Roll(y);
    await f.evaluate({ async: !0 });
    const S = f.total, s = S >= 18 ? "critical" : S <= 3 ? "fumble" : null, a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType: s } },
      rollMode: a
    }), l > 0) {
      const b = Math.max(0, u - l);
      await n.update({ "system.resources.morale": b });
    }
    this.close();
  }
}
function P(v, t, n) {
  var u, l;
  if (!v) return;
  const e = Number(((l = (u = v.system) == null ? void 0 : u.skills) == null ? void 0 : l[t]) ?? 0) || 0, o = j.BODY_PART_BY_SKILL[t] ? j._getSkillHealthStatusStatic(v, t) : void 0;
  let i = 0;
  o === 1 ? i = -6 : o === 2 && (i = -3), new w({
    actor: v,
    skillKey: t,
    label: n || t,
    baseModifier: e,
    injuryModifier: i
  }).render(!0);
}
function L(v, t) {
  var y, f, S, s;
  if (!v || !t) return;
  const e = (((y = v.system) == null ? void 0 : y.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), i = ((f = v.items) == null ? void 0 : f.filter((a) => a.type === "Fegyver")) ?? [], c = o ? i.find((a) => a.id === o) : null, u = (c == null ? void 0 : c.name) || e.name || `Fegyver (${t})`, l = Number(e.bonus ?? 0) || 0, r = Number(((s = (S = v.system) == null ? void 0 : S.skills) == null ? void 0 : s.grenadeUse) ?? 0) || 0, d = j._getSkillHealthStatusStatic(v, "grenadeUse");
  let m = 0;
  d === 1 ? m = -6 : d === 2 && (m = -3);
  const M = r, g = l + m;
  new w({
    actor: v,
    skillKey: "grenadeUse",
    label: u,
    baseModifier: M,
    injuryModifier: g
  }).render(!0);
}
export {
  w as VoidRollSheet,
  P as openRollSheetForSkill,
  L as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DblcuAJo.mjs.map
