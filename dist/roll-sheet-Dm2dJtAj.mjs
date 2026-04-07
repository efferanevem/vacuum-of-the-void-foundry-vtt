import { V as b } from "./vacuum-of-the-void-DKI9uBhY.mjs";
class j extends Application {
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
    const { actor: s, skillKey: e, label: o, baseModifier: u, injuryModifier: m, injuryPenalty: c } = t;
    super(t), this._actor = s, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(m) || 0, this._injuryPenalty = Number(c) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, s = {}) {
    const e = await super.render(t, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var h, _, p, i, d;
    const t = this, s = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((_ = (h = this.element) == null ? void 0 : h.querySelector) == null ? void 0 : _.call(h, "form.votv.roll-sheet")) ?? ((i = (p = this.element) == null ? void 0 : p.matches) != null && i.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), u = e.querySelectorAll(".roll-sheet-advantage-d6"), m = (l) => {
      const n = Math.min(3, Math.max(-3, parseInt(l, 10) || 0));
      o && (o.value = String(n)), u.forEach((v) => {
        const y = parseInt(v.dataset.advantageValue ?? "0", 10);
        v.classList.toggle("selected", y === n);
      });
    };
    u.forEach((l) => {
      l.addEventListener("click", (n) => {
        n.preventDefault(), m(l.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), m((o == null ? void 0 : o.value) ?? "0");
    const c = e.querySelector(".roll-sheet-morale-wrap"), r = Math.min(3, Math.max(0, parseInt(((d = c == null ? void 0 : c.dataset) == null ? void 0 : d.moraleMax) ?? "3", 10) || 0)), a = e.querySelector("input[name='moraleDice']"), M = e.querySelectorAll(".roll-sheet-morale-d8"), g = (l) => {
      let n = Math.min(3, Math.max(0, parseInt(l, 10) || 0));
      n = Math.min(n, r), a && (a.value = String(n)), M.forEach((v, y) => {
        v.classList.toggle("selected", y < n), v.style.pointerEvents = y < r ? "" : "none", v.style.opacity = y < r ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((l) => {
      l.addEventListener("click", (n) => {
        if (n.preventDefault(), l.classList.contains("roll-sheet-morale-d8") && parseInt(l.dataset.moraleValue ?? "0", 10) > r) return;
        const v = l.dataset.moraleValue ?? "0";
        g(v), t._updateFormulaPreview(e);
      });
    }), g((a == null ? void 0 : a.value) ?? "0");
    const S = e.querySelector("input[name='constantBonus']");
    S && S.addEventListener("input", () => t._updateFormulaPreview(e)), S && S.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (l) => {
      var n, v, y, w;
      if ((v = (n = l.target) == null ? void 0 : n.closest) != null && v.call(n, ".roll-sheet-close")) {
        l.preventDefault(), t.close();
        return;
      }
      (w = (y = l.target) == null ? void 0 : y.closest) != null && w.call(y, ".roll-sheet-do-roll") && (l.preventDefault(), l.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var g, S, h, _, p;
    const s = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const e = parseInt(((g = t.querySelector("input[name='advantage']")) == null ? void 0 : g.value) ?? "0", 10) || 0, o = parseInt(((S = t.querySelector("input[name='moraleDice']")) == null ? void 0 : S.value) ?? "0", 10) || 0, u = parseInt(((h = t.querySelector("input[name='constantBonus']")) == null ? void 0 : h.value) ?? "0", 10) || 0, m = parseInt(((_ = t.dataset) == null ? void 0 : _.baseMod) ?? "0", 10) || 0, c = parseInt(((p = t.dataset) == null ? void 0 : p.injuryMod) ?? "0", 10) || 0, r = m + c + u, a = [];
    a.push(document.createElement("span")), a[0].textContent = "Összesítve: 3 ";
    const M = document.createElement("img");
    if (M.src = "systems/vacuum-of-the-void/assets/d6.svg", M.alt = "d6", M.className = "roll-sheet-preview-die", a[0].appendChild(M), e !== 0) {
      const i = document.createElement("span");
      i.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const d = document.createElement("img");
      d.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", d.alt = e > 0 ? "előny d6" : "hátrány d6", d.className = "roll-sheet-preview-die", i.appendChild(d), a.push(i);
    }
    if (o > 0) {
      const i = document.createElement("span");
      i.textContent = ` + ${o} `;
      const d = document.createElement("img");
      d.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", d.alt = "d8", d.className = "roll-sheet-preview-die", i.appendChild(d), a.push(i);
    }
    if (r !== 0) {
      const i = document.createElement("span");
      i.textContent = r > 0 ? ` + ${r}` : ` − ${Math.abs(r)}`, a.push(i);
    }
    s.innerHTML = "", s.append(...a);
  }
  getData(t = {}) {
    var r, a;
    const s = this.actor, e = Math.max(0, Number(((a = (r = s == null ? void 0 : s.system) == null ? void 0 : r.resources) == null ? void 0 : a.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", m = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", o, u, m].filter(Boolean).join(" ") || "3d6";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: c,
      moraleCurrent: e,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty
    };
  }
  activateListeners(t) {
    var s;
    (s = super.activateListeners) == null || s.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var n, v;
    const s = this.actor;
    if (!s) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), u = t.querySelector("[name='constantBonus']"), m = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((v = (n = s.system) == null ? void 0 : n.resources) == null ? void 0 : v.morale) ?? 0) || 0), r = Math.min(m, c), a = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), M = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, g = this._baseModifier, S = this._injuryModifier, h = g + S + M, _ = [
      "3d6",
      a > 0 ? `+${a}d6` : a < 0 ? `-${Math.abs(a)}d6` : "",
      r > 0 ? `+${r}d8` : "",
      h !== 0 ? h > 0 ? `+${h}` : `${h}` : ""
    ].filter(Boolean).join(" "), p = new Roll(_);
    await p.evaluate({ async: !0 });
    const i = p.total, d = i >= 18 ? "critical" : i <= 3 ? "fumble" : null, l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType: d } },
      rollMode: l
    }), r > 0) {
      const y = Math.max(0, c - r);
      await s.update({ "system.resources.morale": y });
    }
    this.close();
  }
}
function L(f, t, s) {
  var c, r;
  if (!f) return;
  const e = Number(((r = (c = f.system) == null ? void 0 : c.skills) == null ? void 0 : r[t]) ?? 0) || 0, o = b.BODY_PART_BY_SKILL[t] ? b._getSkillHealthStatusStatic(f, t) : void 0;
  let u = 0;
  o === 1 ? u = -6 : o === 2 && (u = -3), new j({
    actor: f,
    skillKey: t,
    label: s || t,
    baseModifier: e,
    injuryModifier: u
  }).render(!0);
}
function P(f, t) {
  var p, i, d, l;
  if (!f || !t) return;
  const e = (((p = f.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), u = ((i = f.items) == null ? void 0 : i.filter((n) => n.type === "Fegyver")) ?? [], m = o ? u.find((n) => n.id === o) : null, c = (m == null ? void 0 : m.name) || e.name || `Fegyver (${t})`, r = Number(e.bonus ?? 0) || 0, a = Number(((l = (d = f.system) == null ? void 0 : d.skills) == null ? void 0 : l.grenadeUse) ?? 0) || 0, M = b._getSkillHealthStatusStatic(f, "grenadeUse");
  let g = 0;
  M === 1 ? g = -6 : M === 2 && (g = -3);
  const S = a, h = r + g;
  new j({
    actor: f,
    skillKey: "grenadeUse",
    label: c,
    baseModifier: S,
    injuryModifier: h
  }).render(!0);
}
export {
  j as VoidRollSheet,
  L as openRollSheetForSkill,
  P as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Dm2dJtAj.mjs.map
