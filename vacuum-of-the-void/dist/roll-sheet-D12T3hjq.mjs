import { V as j } from "./vacuum-of-the-void-DsnUGGUv.mjs";
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
    const { actor: s, skillKey: e, label: n, baseModifier: u, injuryModifier: h, injuryPenalty: d } = t;
    super(t), this._actor = s, this._skillKey = e, this._label = n ?? e, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(h) || 0, this._injuryPenalty = Number(d) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, s = {}) {
    const e = await super.render(t, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var _, S, f, i, c;
    const t = this, s = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((S = (_ = this.element) == null ? void 0 : _.querySelector) == null ? void 0 : S.call(_, "form.votv.roll-sheet")) ?? ((i = (f = this.element) == null ? void 0 : f.matches) != null && i.call(f, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const n = e.querySelector("input[name='advantage']"), u = e.querySelectorAll(".roll-sheet-advantage-d6"), h = (r) => {
      const l = Math.min(3, Math.max(-3, parseInt(r, 10) || 0));
      n && (n.value = String(l)), u.forEach((m) => {
        const p = parseInt(m.dataset.advantageValue ?? "0", 10);
        m.classList.toggle("selected", p === l);
      });
    };
    u.forEach((r) => {
      r.addEventListener("click", (l) => {
        l.preventDefault(), h(r.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), h((n == null ? void 0 : n.value) ?? "0");
    const d = e.querySelector(".roll-sheet-morale-wrap"), o = Math.min(3, Math.max(0, parseInt(((c = d == null ? void 0 : d.dataset) == null ? void 0 : c.moraleMax) ?? "3", 10) || 0)), a = e.querySelector("input[name='moraleDice']"), y = e.querySelectorAll(".roll-sheet-morale-d8"), M = (r) => {
      let l = Math.min(3, Math.max(0, parseInt(r, 10) || 0));
      l = Math.min(l, o), a && (a.value = String(l)), y.forEach((m, p) => {
        m.classList.toggle("selected", p < l), m.style.pointerEvents = p < o ? "" : "none", m.style.opacity = p < o ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((r) => {
      r.addEventListener("click", (l) => {
        if (l.preventDefault(), r.classList.contains("roll-sheet-morale-d8") && parseInt(r.dataset.moraleValue ?? "0", 10) > o) return;
        const m = r.dataset.moraleValue ?? "0";
        M(m), t._updateFormulaPreview(e);
      });
    }), M((a == null ? void 0 : a.value) ?? "0");
    const g = e.querySelector("input[name='constantBonus']");
    g && g.addEventListener("input", () => t._updateFormulaPreview(e)), g && g.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (r) => {
      var l, m, p, b;
      if ((m = (l = r.target) == null ? void 0 : l.closest) != null && m.call(l, ".roll-sheet-close")) {
        r.preventDefault(), t.close();
        return;
      }
      (b = (p = r.target) == null ? void 0 : p.closest) != null && b.call(p, ".roll-sheet-do-roll") && (r.preventDefault(), r.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var M, g, _, S, f;
    const s = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const e = parseInt(((M = t.querySelector("input[name='advantage']")) == null ? void 0 : M.value) ?? "0", 10) || 0, n = parseInt(((g = t.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, u = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, h = parseInt(((S = t.dataset) == null ? void 0 : S.baseMod) ?? "0", 10) || 0, d = parseInt(((f = t.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, o = h + d + u, a = [];
    a.push(document.createElement("span")), a[0].textContent = "Összesítve: 3 ";
    const y = document.createElement("img");
    if (y.src = "systems/vacuum-of-the-void/assets/d6.svg", y.alt = "d6", y.className = "roll-sheet-preview-die", a[0].appendChild(y), e !== 0) {
      const i = document.createElement("span");
      i.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const c = document.createElement("img");
      c.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", c.alt = e > 0 ? "előny d6" : "hátrány d6", c.className = "roll-sheet-preview-die", i.appendChild(c), a.push(i);
    }
    if (n > 0) {
      const i = document.createElement("span");
      i.textContent = ` + ${n} `;
      const c = document.createElement("img");
      c.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", c.alt = "d8", c.className = "roll-sheet-preview-die", i.appendChild(c), a.push(i);
    }
    if (o !== 0) {
      const i = document.createElement("span");
      i.textContent = o > 0 ? ` + ${o}` : ` − ${Math.abs(o)}`, a.push(i);
    }
    s.innerHTML = "", s.append(...a);
  }
  getData(t = {}) {
    var o, a;
    const s = this.actor, e = Math.max(0, Number(((a = (o = s == null ? void 0 : s.system) == null ? void 0 : o.resources) == null ? void 0 : a.morale) ?? 0) || 0), n = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", h = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", d = ["3d6", n, u, h].filter(Boolean).join(" ") || "3d6";
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: d,
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
    var m, p;
    const s = this.actor;
    if (!s) return;
    const e = t.querySelector("[name='moraleDice']"), n = t.querySelector("[name='advantage']"), u = t.querySelector("[name='constantBonus']"), h = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((p = (m = s.system) == null ? void 0 : m.resources) == null ? void 0 : p.morale) ?? 0) || 0), o = Math.min(h, d), a = Math.min(3, Math.max(-3, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), y = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, M = this._baseModifier, g = this._injuryModifier, _ = this._injuryPenalty || 0, S = M + g + _ + y, f = [
      "3d6",
      a > 0 ? `+${a}d6` : a < 0 ? `-${Math.abs(a)}d6` : "",
      o > 0 ? `+${o}d8` : "",
      S !== 0 ? S > 0 ? `+${S}` : `${S}` : ""
    ].filter(Boolean).join(" "), i = new Roll(f);
    await i.evaluate({ async: !0 });
    const c = i.total, r = c >= 18 ? "critical" : c <= 3 ? "fumble" : null, l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await i.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s }),
      flavor: this._label,
      flags: { "vacuum-of-the-void": { resultType: r } },
      rollMode: l
    }), o > 0) {
      const b = Math.max(0, d - o);
      await s.update({ "system.resources.morale": b });
    }
    this.close();
  }
}
function P(v, t, s) {
  var d, o;
  if (!v) return;
  const e = Number(((o = (d = v.system) == null ? void 0 : d.skills) == null ? void 0 : o[t]) ?? 0) || 0, n = j.BODY_PART_BY_SKILL[t] ? j._getSkillHealthStatusStatic(v, t) : void 0;
  let u = 0;
  n === 1 ? u = -6 : n === 2 && (u = -3), new w({
    actor: v,
    skillKey: t,
    label: s || t,
    baseModifier: e,
    injuryModifier: u
  }).render(!0);
}
function L(v, t) {
  var f, i, c, r;
  if (!v || !t) return;
  const e = (((f = v.system) == null ? void 0 : f.weapons) ?? {})[t] ?? {}, n = (e.itemId ?? "").trim(), u = ((i = v.items) == null ? void 0 : i.filter((l) => l.type === "Fegyver")) ?? [], h = n ? u.find((l) => l.id === n) : null, d = (h == null ? void 0 : h.name) || e.name || `Fegyver (${t})`, o = Number(e.bonus ?? 0) || 0, a = Number(((r = (c = v.system) == null ? void 0 : c.skills) == null ? void 0 : r.grenadeUse) ?? 0) || 0, y = j._getSkillHealthStatusStatic(v, "grenadeUse");
  let M = 0;
  y === 1 ? M = -6 : y === 2 && (M = -3);
  const g = a, _ = o + M;
  new w({
    actor: v,
    skillKey: "grenadeUse",
    label: d,
    baseModifier: g,
    injuryModifier: _
  }).render(!0);
}
export {
  w as VoidRollSheet,
  P as openRollSheetForSkill,
  L as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-D12T3hjq.mjs.map
