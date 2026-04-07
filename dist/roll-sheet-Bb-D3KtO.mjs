import { V as j } from "./vacuum-of-the-void-BWSevvTQ.mjs";
function P(f) {
  if (!f || !Array.isArray(f.terms)) return { resultType: null, label: null };
  const t = [], n = [], e = [];
  let r = !1;
  const l = (c, b = 1) => {
    if (!Array.isArray(c)) return;
    let m = b;
    for (const o of c) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        l(o.terms, m);
        continue;
      }
      if (typeof o.operator == "string") {
        m = o.operator === "-" ? -1 : 1;
        continue;
      }
      const y = typeof o.faces == "number" ? o.faces : void 0, M = Array.isArray(o.results) ? o.results : null;
      if (!y || !M || y === 8 || y !== 6) continue;
      const s = !r && m >= 0 && (o.number === 3 || o.number === "3") ? (r = !0, t) : m >= 0 ? n : e;
      for (const a of M) {
        if (!a || a.discarded || a.hidden) continue;
        const g = Number(a.result ?? a);
        Number.isFinite(g) && s.push(g);
      }
    }
  };
  l(f.terms, 1);
  const h = t.filter((c) => c === 6).length, d = t.filter((c) => c === 1).length, u = n.filter((c) => c === 6).length, i = e.filter((c) => c === 6).length, p = h + u, v = d + i;
  return p >= 3 ? { resultType: "critical", label: "Brutális Siker" } : p === 2 ? { resultType: "critical", label: "Kritikus Siker" } : v >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : v === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
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
    const { actor: n, skillKey: e, label: r, baseModifier: l, injuryModifier: h, injuryPenalty: d } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = r ?? e, this._baseModifier = Number(l) || 0, this._injuryModifier = Number(h) || 0, this._injuryPenalty = Number(d) || 0;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var b, m, o, y, M;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((m = (b = this.element) == null ? void 0 : b.querySelector) == null ? void 0 : m.call(b, "form.votv.roll-sheet")) ?? ((y = (o = this.element) == null ? void 0 : o.matches) != null && y.call(o, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const r = e.querySelector("input[name='advantage']"), l = e.querySelectorAll(".roll-sheet-advantage-d6"), h = (s) => {
      const a = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      r && (r.value = String(a)), l.forEach((g) => {
        const S = parseInt(g.dataset.advantageValue ?? "0", 10);
        g.classList.toggle("selected", S === a);
      });
    };
    l.forEach((s) => {
      s.addEventListener("click", (a) => {
        a.preventDefault(), h(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), h((r == null ? void 0 : r.value) ?? "0");
    const d = e.querySelector(".roll-sheet-morale-wrap"), u = Math.min(3, Math.max(0, parseInt(((M = d == null ? void 0 : d.dataset) == null ? void 0 : M.moraleMax) ?? "3", 10) || 0)), i = e.querySelector("input[name='moraleDice']"), p = e.querySelectorAll(".roll-sheet-morale-d8"), v = (s) => {
      let a = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      a = Math.min(a, u), i && (i.value = String(a)), p.forEach((g, S) => {
        g.classList.toggle("selected", S < a), g.style.pointerEvents = S < u ? "" : "none", g.style.opacity = S < u ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (a) => {
        if (a.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > u) return;
        const g = s.dataset.moraleValue ?? "0";
        v(g), t._updateFormulaPreview(e);
      });
    }), v((i == null ? void 0 : i.value) ?? "0");
    const c = e.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => t._updateFormulaPreview(e)), c && c.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var a, g, S, _;
      if ((g = (a = s.target) == null ? void 0 : a.closest) != null && g.call(a, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (_ = (S = s.target) == null ? void 0 : S.closest) != null && _.call(S, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var c, b, m, o, y, M;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((c = t.querySelector("input[name='advantage']")) == null ? void 0 : c.value) ?? "0", 10) || 0, r = parseInt(((b = t.querySelector("input[name='moraleDice']")) == null ? void 0 : b.value) ?? "0", 10) || 0, l = parseInt(((m = t.querySelector("input[name='constantBonus']")) == null ? void 0 : m.value) ?? "0", 10) || 0, h = parseInt(((o = t.dataset) == null ? void 0 : o.baseMod) ?? "0", 10) || 0, d = parseInt(((y = t.dataset) == null ? void 0 : y.injuryMod) ?? "0", 10) || 0, u = parseInt(((M = t.dataset) == null ? void 0 : M.injuryPenalty) ?? "0", 10) || 0, i = h + d + u + l, p = [];
    p.push(document.createElement("span")), p[0].textContent = "Összesítve: 3 ";
    const v = document.createElement("img");
    if (v.src = "systems/vacuum-of-the-void/assets/d6.svg", v.alt = "d6", v.className = "roll-sheet-preview-die", p[0].appendChild(v), e !== 0) {
      const s = document.createElement("span");
      s.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const a = document.createElement("img");
      a.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", a.alt = e > 0 ? "előny d6" : "hátrány d6", a.className = "roll-sheet-preview-die", s.appendChild(a), p.push(s);
    }
    if (r > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${r} `;
      const a = document.createElement("img");
      a.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", a.alt = "d8", a.className = "roll-sheet-preview-die", s.appendChild(a), p.push(s);
    }
    if (i !== 0) {
      const s = document.createElement("span");
      s.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, p.push(s);
    }
    n.innerHTML = "", n.append(...p);
  }
  getData(t = {}) {
    var u, i;
    const n = this.actor, e = Math.max(0, Number(((i = (u = n == null ? void 0 : n.system) == null ? void 0 : u.resources) == null ? void 0 : i.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", l = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", h = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", d = ["3d6", r, l, h].filter(Boolean).join(" ") || "3d6";
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
    var n;
    (n = super.activateListeners) == null || n.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var S, _;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), r = t.querySelector("[name='advantage']"), l = t.querySelector("[name='constantBonus']"), h = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((_ = (S = n.system) == null ? void 0 : S.resources) == null ? void 0 : _.morale) ?? 0) || 0), u = Math.min(h, d), i = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), p = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, v = this._baseModifier, c = this._injuryModifier, b = this._injuryPenalty || 0, m = v + c + b + p, o = [
      "3d6",
      i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
      u > 0 ? `+${u}d8` : "",
      m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""
    ].filter(Boolean).join(" "), y = new Roll(o);
    await y.evaluate({ async: !0 });
    const { resultType: M, label: s } = P(y), a = s ? ` – ${s}` : "", g = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    if (await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n }),
      flavor: `${this._label}${a}`,
      flags: { "vacuum-of-the-void": { resultType: M, critLabel: s } },
      rollMode: g
    }), u > 0) {
      const I = Math.max(0, d - u);
      await n.update({ "system.resources.morale": I });
    }
    this.close();
  }
}
function L(f, t, n) {
  var d, u;
  if (!f) return;
  const e = Number(((u = (d = f.system) == null ? void 0 : d.skills) == null ? void 0 : u[t]) ?? 0) || 0, r = j.BODY_PART_BY_SKILL[t] ? j._getSkillHealthStatusStatic(f, t) : void 0;
  let l = 0;
  r === 1 ? l = -6 : r === 2 && (l = -3), new w({
    actor: f,
    skillKey: t,
    label: n || t,
    baseModifier: e,
    injuryModifier: l
  }).render(!0);
}
function k(f, t) {
  var b, m, o, y;
  if (!f || !t) return;
  const e = (((b = f.system) == null ? void 0 : b.weapons) ?? {})[t] ?? {}, r = (e.itemId ?? "").trim(), l = ((m = f.items) == null ? void 0 : m.filter((M) => M.type === "Fegyver")) ?? [], h = r ? l.find((M) => M.id === r) : null, d = (h == null ? void 0 : h.name) || e.name || `Fegyver (${t})`, u = Number(e.bonus ?? 0) || 0, i = Number(((y = (o = f.system) == null ? void 0 : o.skills) == null ? void 0 : y.grenadeUse) ?? 0) || 0, p = j._getSkillHealthStatusStatic(f, "grenadeUse");
  let v = 0;
  p === 1 ? v = -6 : p === 2 && (v = -3), new w({
    actor: f,
    skillKey: "grenadeUse",
    label: d,
    baseModifier: i,
    injuryModifier: u,
    injuryPenalty: v
  }).render(!0);
}
export {
  w as VoidRollSheet,
  L as openRollSheetForSkill,
  k as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Bb-D3KtO.mjs.map
