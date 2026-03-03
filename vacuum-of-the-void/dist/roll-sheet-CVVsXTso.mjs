import { V as I } from "./vacuum-of-the-void--zkbml0a.mjs";
class L extends Application {
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
    const { actor: a, skillKey: e, label: o, baseModifier: i, injuryModifier: v } = t;
    super(t), this._actor = a, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(i) || 0, this._injuryModifier = Number(v) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, a = {}) {
    const e = await super.render(t, a);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var m, _, f, c, d;
    const t = this, a = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(a)}"]`) ?? ((_ = (m = this.element) == null ? void 0 : m.querySelector) == null ? void 0 : _.call(m, "form.votv.roll-sheet")) ?? ((c = (f = this.element) == null ? void 0 : f.matches) != null && c.call(f, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), i = e.querySelectorAll(".roll-sheet-advantage-d6"), v = (n) => {
      const r = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      o && (o.value = String(r)), i.forEach((h) => {
        const p = parseInt(h.dataset.advantageValue ?? "0", 10);
        h.classList.toggle("selected", p === r);
      });
    };
    i.forEach((n) => {
      n.addEventListener("click", (r) => {
        r.preventDefault(), v(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), v((o == null ? void 0 : o.value) ?? "0");
    const u = e.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((d = u == null ? void 0 : u.dataset) == null ? void 0 : d.moraleMax) ?? "3", 10) || 0)), l = e.querySelector("input[name='moraleDice']"), y = e.querySelectorAll(".roll-sheet-morale-d8"), g = (n) => {
      let r = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      r = Math.min(r, s), l && (l.value = String(r)), y.forEach((h, p) => {
        h.classList.toggle("selected", p < r), h.style.pointerEvents = p < s ? "" : "none", h.style.opacity = p < s ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (r) => {
        if (r.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const h = n.dataset.moraleValue ?? "0";
        g(h), t._updateFormulaPreview(e);
      });
    }), g((l == null ? void 0 : l.value) ?? "0");
    const M = e.querySelector("input[name='constantBonus']");
    M && M.addEventListener("input", () => t._updateFormulaPreview(e)), M && M.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (n) => {
      var r, h, p, b;
      if ((h = (r = n.target) == null ? void 0 : r.closest) != null && h.call(r, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (b = (p = n.target) == null ? void 0 : p.closest) != null && b.call(p, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var g, M, m, _, f;
    const a = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!a) return;
    const e = parseInt(((g = t.querySelector("input[name='advantage']")) == null ? void 0 : g.value) ?? "0", 10) || 0, o = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, i = parseInt(((m = t.querySelector("input[name='constantBonus']")) == null ? void 0 : m.value) ?? "0", 10) || 0, v = parseInt(((_ = t.dataset) == null ? void 0 : _.baseMod) ?? "0", 10) || 0, u = parseInt(((f = t.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, s = v + u + i, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const y = document.createElement("img");
    if (y.src = "systems/vacuum-of-the-void/assets/d6.svg", y.alt = "d6", y.className = "roll-sheet-preview-die", l[0].appendChild(y), e !== 0) {
      const c = document.createElement("span");
      c.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const d = document.createElement("img");
      d.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", d.alt = e > 0 ? "előny d6" : "hátrány d6", d.className = "roll-sheet-preview-die", c.appendChild(d), l.push(c);
    }
    if (o > 0) {
      const c = document.createElement("span");
      c.textContent = ` + ${o} `;
      const d = document.createElement("img");
      d.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", d.alt = "d8", d.className = "roll-sheet-preview-die", c.appendChild(d), l.push(c);
    }
    if (s !== 0) {
      const c = document.createElement("span");
      c.textContent = s > 0 ? ` + ${s}` : ` − ${Math.abs(s)}`, l.push(c);
    }
    a.innerHTML = "", a.append(...l);
  }
  getData(t = {}) {
    var u, s;
    const a = this.actor, e = Math.max(0, Number(((s = (u = a == null ? void 0 : a.system) == null ? void 0 : u.resources) == null ? void 0 : s.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = ["3d6", o, i].filter(Boolean).join(" ") || "3d6";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: v,
      moraleCurrent: e,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier
    };
  }
  activateListeners(t) {
    var a;
    (a = super.activateListeners) == null || a.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var r, h;
    const a = this.actor;
    if (!a) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), v = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), u = Math.max(0, Number(((h = (r = a.system) == null ? void 0 : r.resources) == null ? void 0 : h.morale) ?? 0) || 0), s = Math.min(v, u), l = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), y = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, g = this._baseModifier, M = this._injuryModifier, m = g + M + y, _ = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      s > 0 ? `+${s}d8` : "",
      m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""
    ].filter(Boolean).join(" "), f = new Roll(_);
    await f.evaluate({ async: !0 });
    const c = f.total, d = c >= 18 ? "critical" : c <= 3 ? "fumble" : null, n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: a }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType: d } },
      rollMode: n
    }), s > 0) {
      const p = Math.max(0, u - s);
      await a.update({ "system.resources.morale": p });
    }
    this.close();
  }
}
function x(S, t, a) {
  var u, s;
  if (!S) return;
  const e = Number(((s = (u = S.system) == null ? void 0 : u.skills) == null ? void 0 : s[t]) ?? 0) || 0, o = I.BODY_PART_BY_SKILL[t] ? I._getSkillHealthStatusStatic(S, t) : void 0;
  let i = 0;
  o === 1 ? i = -6 : o === 2 && (i = -3), new L({
    actor: S,
    skillKey: t,
    label: a || t,
    baseModifier: e,
    injuryModifier: i
  }).render(!0);
}
export {
  L as VoidRollSheet,
  x as openRollSheetForSkill
};
//# sourceMappingURL=roll-sheet-CVVsXTso.mjs.map
