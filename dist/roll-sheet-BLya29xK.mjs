import { V as P, c as V } from "./vacuum-of-the-void-CmWA3uZk.mjs";
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
      baseModifier: i,
      injuryModifier: u,
      injuryPenalty: c,
      isWeaponAttack: l,
      weaponSlotKey: r,
      weaponItemId: d
    } = t;
    super(t), this._actor = a, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(i) || 0, this._injuryModifier = Number(u) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!l, this._weaponSlotKey = r || "", this._weaponItemId = d || "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, a = {}) {
    const e = await super.render(t, a);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var g, v, M, f, _;
    const t = this, a = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(a)}"]`) ?? ((v = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : v.call(g, "form.votv.roll-sheet")) ?? ((f = (M = this.element) == null ? void 0 : M.matches) != null && f.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), i = e.querySelectorAll(".roll-sheet-advantage-d6"), u = (s) => {
      const n = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(n)), i.forEach((m) => {
        const h = parseInt(m.dataset.advantageValue ?? "0", 10);
        m.classList.toggle("selected", h === n);
      });
    };
    i.forEach((s) => {
      s.addEventListener("click", (n) => {
        n.preventDefault(), u(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), u((o == null ? void 0 : o.value) ?? "0");
    const c = e.querySelector(".roll-sheet-morale-wrap"), l = Math.min(3, Math.max(0, parseInt(((_ = c == null ? void 0 : c.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), r = e.querySelector("input[name='moraleDice']"), d = e.querySelectorAll(".roll-sheet-morale-d8"), p = (s) => {
      let n = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      n = Math.min(n, l), r && (r.value = String(n)), d.forEach((m, h) => {
        m.classList.toggle("selected", h < n), m.style.pointerEvents = h < l ? "" : "none", m.style.opacity = h < l ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (n) => {
        if (n.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > l) return;
        const m = s.dataset.moraleValue ?? "0";
        p(m), t._updateFormulaPreview(e);
      });
    }), p((r == null ? void 0 : r.value) ?? "0");
    const b = e.querySelector("input[name='constantBonus']");
    b && b.addEventListener("input", () => t._updateFormulaPreview(e)), b && b.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var n, m, h, S;
      if ((m = (n = s.target) == null ? void 0 : n.closest) != null && m.call(n, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (S = (h = s.target) == null ? void 0 : h.closest) != null && S.call(h, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var b, g, v, M, f, _;
    const a = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!a) return;
    const e = parseInt(((b = t.querySelector("input[name='advantage']")) == null ? void 0 : b.value) ?? "0", 10) || 0, o = parseInt(((g = t.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, i = parseInt(((v = t.querySelector("input[name='constantBonus']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, c = parseInt(((f = t.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, l = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, r = u + c + l + i, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", d[0].appendChild(p), e !== 0) {
      const s = document.createElement("span");
      s.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const n = document.createElement("img");
      n.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", n.alt = e > 0 ? "előny d6" : "hátrány d6", n.className = "roll-sheet-preview-die", s.appendChild(n), d.push(s);
    }
    if (o > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${o} `;
      const n = document.createElement("img");
      n.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", n.alt = "d8", n.className = "roll-sheet-preview-die", s.appendChild(n), d.push(s);
    }
    if (r !== 0) {
      const s = document.createElement("span");
      s.textContent = r > 0 ? ` + ${r}` : ` − ${Math.abs(r)}`, d.push(s);
    }
    a.innerHTML = "", a.append(...d);
  }
  getData(t = {}) {
    var l, r;
    const a = this.actor, e = Math.max(0, Number(((r = (l = a == null ? void 0 : a.system) == null ? void 0 : l.resources) == null ? void 0 : r.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", u = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", o, i, u].filter(Boolean).join(" ") || "3d6";
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
    var a;
    (a = super.activateListeners) == null || a.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var S, L, x, N, q;
    const a = this.actor;
    if (!a) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), u = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((L = (S = a.system) == null ? void 0 : S.resources) == null ? void 0 : L.morale) ?? 0) || 0), l = Math.min(u, c), r = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), d = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, p = this._baseModifier, b = this._injuryModifier, g = this._injuryPenalty || 0, v = p + b + g + d, M = [
      "3d6",
      r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
      l > 0 ? `+${l}d8` : "",
      v !== 0 ? v > 0 ? `+${v}` : `${v}` : ""
    ].filter(Boolean).join(" "), f = new Roll(M);
    await f.evaluate({ async: !0 });
    const { resultType: _, label: s } = V(f), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let m = this._label;
    const h = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((N = (x = game.user) == null ? void 0 : x.targets) != null && N.size)) {
      const w = Array.from(game.user.targets)[0], I = (w == null ? void 0 : w.actor) ?? null;
      if (I) {
        const j = ((q = I.system) == null ? void 0 : q.combat) ?? {}, C = Number(j.defense ?? 0) || 0, D = Number(j.defenseBonus ?? 0) || 0, A = Number(j.givenProtection ?? 0) || 0, $ = C + D + A, k = (Number(f.total ?? 0) || 0) >= $, R = k ? "talált" : "nem talált";
        m = `${this._label} – ${R}`, h.weaponAttack = !0, h.weapon = {
          actorId: a.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          targetActorId: I.id ?? null,
          defense: $,
          isHit: k
        };
      }
    }
    if (await f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: a, alias: (a == null ? void 0 : a.name) ?? void 0 }),
      flavor: m,
      flags: { "vacuum-of-the-void": h },
      rollMode: n
    }), l > 0) {
      const E = Math.max(0, c - l);
      await a.update({ "system.resources.morale": E });
    }
    this.close();
  }
}
function O(y, t, a) {
  var c, l;
  if (!y) return;
  const e = Number(((l = (c = y.system) == null ? void 0 : c.skills) == null ? void 0 : l[t]) ?? 0) || 0, o = P.BODY_PART_BY_SKILL[t] ? P._getSkillHealthStatusStatic(y, t) : void 0;
  let i = 0;
  o === 1 ? i = -6 : o === 2 && (i = -3), new B({
    actor: y,
    skillKey: t,
    label: a || t,
    baseModifier: e,
    injuryModifier: i
  }).render(!0);
}
function U(y, t) {
  var g, v, M, f;
  if (!y || !t) return;
  const e = (((g = y.system) == null ? void 0 : g.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), i = ((v = y.items) == null ? void 0 : v.filter((_) => _.type === "Fegyver")) ?? [], u = o ? i.find((_) => _.id === o) : null, c = (u == null ? void 0 : u.name) || e.name || `Fegyver (${t})`, l = Number(e.bonus ?? 0) || 0, r = Number(((f = (M = y.system) == null ? void 0 : M.skills) == null ? void 0 : f.grenadeUse) ?? 0) || 0, d = P._getSkillHealthStatusStatic(y, "grenadeUse");
  let p = 0;
  d === 1 ? p = -6 : d === 2 && (p = -3), new B({
    actor: y,
    skillKey: "grenadeUse",
    label: c,
    baseModifier: r,
    injuryModifier: l,
    injuryPenalty: p,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (u == null ? void 0 : u.id) ?? o
  }).render(!0);
}
export {
  B as VoidRollSheet,
  O as openRollSheetForSkill,
  U as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BLya29xK.mjs.map
