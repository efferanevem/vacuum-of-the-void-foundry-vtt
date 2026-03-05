import { V as j, c as P } from "./vacuum-of-the-void-BO-FC4CA.mjs";
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
    const { actor: n, skillKey: e, label: o, baseModifier: l, injuryModifier: c, injuryPenalty: u } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(l) || 0, this._injuryModifier = Number(c) || 0, this._injuryPenalty = Number(u) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var f, m, M, g, _;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((m = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : m.call(f, "form.votv.roll-sheet")) ?? ((g = (M = this.element) == null ? void 0 : M.matches) != null && g.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), l = e.querySelectorAll(".roll-sheet-advantage-d6"), c = (s) => {
      const a = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(a)), l.forEach((p) => {
        const v = parseInt(p.dataset.advantageValue ?? "0", 10);
        p.classList.toggle("selected", v === a);
      });
    };
    l.forEach((s) => {
      s.addEventListener("click", (a) => {
        a.preventDefault(), c(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), c((o == null ? void 0 : o.value) ?? "0");
    const u = e.querySelector(".roll-sheet-morale-wrap"), i = Math.min(3, Math.max(0, parseInt(((_ = u == null ? void 0 : u.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), r = e.querySelector("input[name='moraleDice']"), d = e.querySelectorAll(".roll-sheet-morale-d8"), h = (s) => {
      let a = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      a = Math.min(a, i), r && (r.value = String(a)), d.forEach((p, v) => {
        p.classList.toggle("selected", v < a), p.style.pointerEvents = v < i ? "" : "none", p.style.opacity = v < i ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (a) => {
        if (a.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > i) return;
        const p = s.dataset.moraleValue ?? "0";
        h(p), t._updateFormulaPreview(e);
      });
    }), h((r == null ? void 0 : r.value) ?? "0");
    const S = e.querySelector("input[name='constantBonus']");
    S && S.addEventListener("input", () => t._updateFormulaPreview(e)), S && S.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var a, p, v, b;
      if ((p = (a = s.target) == null ? void 0 : a.closest) != null && p.call(a, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (b = (v = s.target) == null ? void 0 : v.closest) != null && b.call(v, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var S, f, m, M, g, _;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((S = t.querySelector("input[name='advantage']")) == null ? void 0 : S.value) ?? "0", 10) || 0, o = parseInt(((f = t.querySelector("input[name='moraleDice']")) == null ? void 0 : f.value) ?? "0", 10) || 0, l = parseInt(((m = t.querySelector("input[name='constantBonus']")) == null ? void 0 : m.value) ?? "0", 10) || 0, c = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, u = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, i = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, r = c + u + i + l, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", d[0].appendChild(h), e !== 0) {
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
    var i, r;
    const n = this.actor, e = Math.max(0, Number(((r = (i = n == null ? void 0 : n.system) == null ? void 0 : i.resources) == null ? void 0 : r.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", l = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", c = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", u = ["3d6", o, l, c].filter(Boolean).join(" ") || "3d6";
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
    var v, b;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), l = t.querySelector("[name='constantBonus']"), c = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), u = Math.max(0, Number(((b = (v = n.system) == null ? void 0 : v.resources) == null ? void 0 : b.morale) ?? 0) || 0), i = Math.min(c, u), r = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), d = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, h = this._baseModifier, S = this._injuryModifier, f = this._injuryPenalty || 0, m = h + S + f + d, M = [
      "3d6",
      r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
      i > 0 ? `+${i}d8` : "",
      m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""
    ].filter(Boolean).join(" "), g = new Roll(M);
    await g.evaluate({ async: !0 });
    const { resultType: _, label: s } = P(g), a = s ? ` – ${s}` : "", p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n }),
      flavor: `${this._label}${a}`,
      flags: { "vacuum-of-the-void": { resultType: _, critLabel: s } },
      rollMode: p
    }), i > 0) {
      const I = Math.max(0, u - i);
      await n.update({ "system.resources.morale": I });
    }
    this.close();
  }
}
function x(y, t, n) {
  var u, i;
  if (!y) return;
  const e = Number(((i = (u = y.system) == null ? void 0 : u.skills) == null ? void 0 : i[t]) ?? 0) || 0, o = j.BODY_PART_BY_SKILL[t] ? j._getSkillHealthStatusStatic(y, t) : void 0;
  let l = 0;
  o === 1 ? l = -6 : o === 2 && (l = -3), new w({
    actor: y,
    skillKey: t,
    label: n || t,
    baseModifier: e,
    injuryModifier: l
  }).render(!0);
}
function E(y, t) {
  var f, m, M, g;
  if (!y || !t) return;
  const e = (((f = y.system) == null ? void 0 : f.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), l = ((m = y.items) == null ? void 0 : m.filter((_) => _.type === "Fegyver")) ?? [], c = o ? l.find((_) => _.id === o) : null, u = (c == null ? void 0 : c.name) || e.name || `Fegyver (${t})`, i = Number(e.bonus ?? 0) || 0, r = Number(((g = (M = y.system) == null ? void 0 : M.skills) == null ? void 0 : g.grenadeUse) ?? 0) || 0, d = j._getSkillHealthStatusStatic(y, "grenadeUse");
  let h = 0;
  d === 1 ? h = -6 : d === 2 && (h = -3), new w({
    actor: y,
    skillKey: "grenadeUse",
    label: u,
    baseModifier: r,
    injuryModifier: i,
    injuryPenalty: h
  }).render(!0);
}
export {
  w as VoidRollSheet,
  x as openRollSheetForSkill,
  E as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DbUnzBNT.mjs.map
