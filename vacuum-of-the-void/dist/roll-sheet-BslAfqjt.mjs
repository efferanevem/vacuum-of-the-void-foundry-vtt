import { V as _ } from "./vacuum-of-the-void-Bpy1DUxo.mjs";
class I extends Application {
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
    const { actor: s, skillKey: e, label: n, baseModifier: c, injuryModifier: m } = t;
    super(t), this._actor = s, this._skillKey = e, this._label = n ?? e, this._baseModifier = Number(c) || 0, this._injuryModifier = Number(m) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, s = {}) {
    const e = await super.render(t, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var h, b, p, i, u;
    const t = this, s = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((b = (h = this.element) == null ? void 0 : h.querySelector) == null ? void 0 : b.call(h, "form.votv.roll-sheet")) ?? ((i = (p = this.element) == null ? void 0 : p.matches) != null && i.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const n = e.querySelector("input[name='advantage']"), c = e.querySelectorAll(".roll-sheet-advantage-d6"), m = (r) => {
      const a = Math.min(3, Math.max(-3, parseInt(r, 10) || 0));
      n && (n.value = String(a)), c.forEach((v) => {
        const M = parseInt(v.dataset.advantageValue ?? "0", 10);
        v.classList.toggle("selected", M === a);
      });
    };
    c.forEach((r) => {
      r.addEventListener("click", (a) => {
        a.preventDefault(), m(r.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), m((n == null ? void 0 : n.value) ?? "0");
    const d = e.querySelector(".roll-sheet-morale-wrap"), o = Math.min(3, Math.max(0, parseInt(((u = d == null ? void 0 : d.dataset) == null ? void 0 : u.moraleMax) ?? "3", 10) || 0)), l = e.querySelector("input[name='moraleDice']"), g = e.querySelectorAll(".roll-sheet-morale-d8"), y = (r) => {
      let a = Math.min(3, Math.max(0, parseInt(r, 10) || 0));
      a = Math.min(a, o), l && (l.value = String(a)), g.forEach((v, M) => {
        v.classList.toggle("selected", M < a), v.style.pointerEvents = M < o ? "" : "none", v.style.opacity = M < o ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((r) => {
      r.addEventListener("click", (a) => {
        if (a.preventDefault(), r.classList.contains("roll-sheet-morale-d8") && parseInt(r.dataset.moraleValue ?? "0", 10) > o) return;
        const v = r.dataset.moraleValue ?? "0";
        y(v), t._updateFormulaPreview(e);
      });
    }), y((l == null ? void 0 : l.value) ?? "0");
    const S = e.querySelector("input[name='constantBonus']");
    S && S.addEventListener("input", () => t._updateFormulaPreview(e)), S && S.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (r) => {
      var a, v, M, w;
      if ((v = (a = r.target) == null ? void 0 : a.closest) != null && v.call(a, ".roll-sheet-close")) {
        r.preventDefault(), t.close();
        return;
      }
      (w = (M = r.target) == null ? void 0 : M.closest) != null && w.call(M, ".roll-sheet-do-roll") && (r.preventDefault(), r.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var y, S, h, b, p;
    const s = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const e = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, n = parseInt(((S = t.querySelector("input[name='moraleDice']")) == null ? void 0 : S.value) ?? "0", 10) || 0, c = parseInt(((h = t.querySelector("input[name='constantBonus']")) == null ? void 0 : h.value) ?? "0", 10) || 0, m = parseInt(((b = t.dataset) == null ? void 0 : b.baseMod) ?? "0", 10) || 0, d = parseInt(((p = t.dataset) == null ? void 0 : p.injuryMod) ?? "0", 10) || 0, o = m + d + c, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const g = document.createElement("img");
    if (g.src = "systems/vacuum-of-the-void/assets/d6.svg", g.alt = "d6", g.className = "roll-sheet-preview-die", l[0].appendChild(g), e !== 0) {
      const i = document.createElement("span");
      i.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const u = document.createElement("img");
      u.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", u.alt = e > 0 ? "előny d6" : "hátrány d6", u.className = "roll-sheet-preview-die", i.appendChild(u), l.push(i);
    }
    if (n > 0) {
      const i = document.createElement("span");
      i.textContent = ` + ${n} `;
      const u = document.createElement("img");
      u.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", u.alt = "d8", u.className = "roll-sheet-preview-die", i.appendChild(u), l.push(i);
    }
    if (o !== 0) {
      const i = document.createElement("span");
      i.textContent = o > 0 ? ` + ${o}` : ` − ${Math.abs(o)}`, l.push(i);
    }
    s.innerHTML = "", s.append(...l);
  }
  getData(t = {}) {
    var d, o;
    const s = this.actor, e = Math.max(0, Number(((o = (d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) == null ? void 0 : o.morale) ?? 0) || 0), n = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", m = ["3d6", n, c].filter(Boolean).join(" ") || "3d6";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: e,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier
    };
  }
  activateListeners(t) {
    var s;
    (s = super.activateListeners) == null || s.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var a, v;
    const s = this.actor;
    if (!s) return;
    const e = t.querySelector("[name='moraleDice']"), n = t.querySelector("[name='advantage']"), c = t.querySelector("[name='constantBonus']"), m = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((v = (a = s.system) == null ? void 0 : a.resources) == null ? void 0 : v.morale) ?? 0) || 0), o = Math.min(m, d), l = Math.min(3, Math.max(-3, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), g = parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0, y = this._baseModifier, S = this._injuryModifier, h = y + S + g, b = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      o > 0 ? `+${o}d8` : "",
      h !== 0 ? h > 0 ? `+${h}` : `${h}` : ""
    ].filter(Boolean).join(" "), p = new Roll(b);
    await p.evaluate({ async: !0 });
    const i = p.total, u = i >= 18 ? "critical" : i <= 3 ? "fumble" : null, r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType: u } },
      rollMode: r
    }), o > 0) {
      const M = Math.max(0, d - o);
      await s.update({ "system.resources.morale": M });
    }
    this.close();
  }
}
function j(f, t, s) {
  var d, o;
  if (!f) return;
  const e = Number(((o = (d = f.system) == null ? void 0 : d.skills) == null ? void 0 : o[t]) ?? 0) || 0, n = _.BODY_PART_BY_SKILL[t] ? _._getSkillHealthStatusStatic(f, t) : void 0;
  let c = 0;
  n === 1 ? c = -6 : n === 2 && (c = -3), new I({
    actor: f,
    skillKey: t,
    label: s || t,
    baseModifier: e,
    injuryModifier: c
  }).render(!0);
}
function x(f, t) {
  var p, i, u, r;
  if (!f || !t) return;
  const e = (((p = f.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, n = (e.itemId ?? "").trim(), c = ((i = f.items) == null ? void 0 : i.filter((a) => a.type === "Fegyver")) ?? [], m = n ? c.find((a) => a.id === n) : null, d = (m == null ? void 0 : m.name) || e.name || `Fegyver (${t})`, o = Number(e.bonus ?? 0) || 0, l = Number(((r = (u = f.system) == null ? void 0 : u.skills) == null ? void 0 : r.grenadeUse) ?? 0) || 0, g = _._getSkillHealthStatusStatic(f, "grenadeUse");
  let y = 0;
  g === 1 ? y = -6 : g === 2 && (y = -3);
  const S = l, h = o + y;
  new I({
    actor: f,
    skillKey: "grenadeUse",
    label: d,
    baseModifier: S,
    injuryModifier: h
  }).render(!0);
}
export {
  I as VoidRollSheet,
  j as openRollSheetForSkill,
  x as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BslAfqjt.mjs.map
