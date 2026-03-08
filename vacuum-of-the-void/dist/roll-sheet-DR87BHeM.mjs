import { V as $, c as Y } from "./vacuum-of-the-void-DZrkXXY7.mjs";
class z extends Application {
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
      label: l,
      baseModifier: h,
      injuryModifier: v,
      injuryPenalty: o,
      isWeaponAttack: e,
      isInitiativeRoll: m,
      weaponSlotKey: d,
      weaponItemId: u,
      weaponDamageFormula: c
    } = t;
    super(t), this._actor = s, this._skillKey = a ?? "", this._label = l ?? a ?? "", this._baseModifier = Number(h) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(o) || 0, this._isWeaponAttack = !!e, this._isInitiativeRoll = !!m, this._weaponSlotKey = d || "", this._weaponItemId = u || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, s = {}) {
    const a = await super.render(t, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, g, _, y, S;
    const t = this, s = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((g = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : g.call(f, "form.votv.roll-sheet")) ?? ((y = (_ = this.element) == null ? void 0 : _.matches) != null && y.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    t._isInitiativeRoll && (a.dataset.initiativeRoll = "1");
    const l = a.querySelector("input[name='advantage']"), h = a.querySelectorAll(".roll-sheet-advantage-d6"), v = (i) => {
      const n = Math.min(3, Math.max(-3, parseInt(i, 10) || 0));
      l && (l.value = String(n)), h.forEach((r) => {
        const p = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", p === n);
      });
    };
    h.forEach((i) => {
      i.addEventListener("click", (n) => {
        n.preventDefault(), v(i.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), v((l == null ? void 0 : l.value) ?? "0");
    const o = a.querySelector(".roll-sheet-morale-wrap"), e = Math.min(3, Math.max(0, parseInt(((S = o == null ? void 0 : o.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), d = a.querySelectorAll(".roll-sheet-morale-d8"), u = (i) => {
      let n = Math.min(3, Math.max(0, parseInt(i, 10) || 0));
      n = Math.min(n, e), m && (m.value = String(n)), d.forEach((r, p) => {
        r.classList.toggle("selected", p < n), r.style.pointerEvents = p < e ? "" : "none", r.style.opacity = p < e ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((i) => {
      i.addEventListener("click", (n) => {
        if (n.preventDefault(), i.classList.contains("roll-sheet-morale-d8") && parseInt(i.dataset.moraleValue ?? "0", 10) > e) return;
        const r = i.dataset.moraleValue ?? "0";
        u(r), t._updateFormulaPreview(a);
      });
    }), u((m == null ? void 0 : m.value) ?? "0");
    const c = a.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => t._updateFormulaPreview(a)), c && c.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (i) => {
      var n, r, p, I;
      if ((r = (n = i.target) == null ? void 0 : n.closest) != null && r.call(n, ".roll-sheet-close")) {
        i.preventDefault(), t.close();
        return;
      }
      (I = (p = i.target) == null ? void 0 : p.closest) != null && I.call(p, ".roll-sheet-do-roll") && (i.preventDefault(), i.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var c, f, g, _, y, S, i;
    const s = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const a = parseInt(((c = t.querySelector("input[name='constantBonus']")) == null ? void 0 : c.value) ?? "0", 10) || 0, l = parseInt(((f = t.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, h = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, v = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, o = l + h + v + a;
    if (((y = t.dataset) == null ? void 0 : y.initiativeRoll) === "1") {
      s.innerHTML = "";
      const n = document.createElement("span");
      n.textContent = o !== 0 ? `Összesítve: 1d20 ${o > 0 ? "+ " + o : o}` : "Összesítve: 1d20", s.appendChild(n);
      return;
    }
    const e = parseInt(((S = t.querySelector("input[name='advantage']")) == null ? void 0 : S.value) ?? "0", 10) || 0, m = parseInt(((i = t.querySelector("input[name='moraleDice']")) == null ? void 0 : i.value) ?? "0", 10) || 0, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const u = document.createElement("img");
    if (u.src = "systems/vacuum-of-the-void/assets/d6.svg", u.alt = "d6", u.className = "roll-sheet-preview-die", d[0].appendChild(u), e !== 0) {
      const n = document.createElement("span");
      n.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const r = document.createElement("img");
      r.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", r.alt = e > 0 ? "előny d6" : "hátrány d6", r.className = "roll-sheet-preview-die", n.appendChild(r), d.push(n);
    }
    if (m > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${m} `;
      const r = document.createElement("img");
      r.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", r.alt = "d8", r.className = "roll-sheet-preview-die", n.appendChild(r), d.push(n);
    }
    if (o !== 0) {
      const n = document.createElement("span");
      n.textContent = o > 0 ? ` + ${o}` : ` − ${Math.abs(o)}`, d.push(n);
    }
    s.innerHTML = "", s.append(...d);
  }
  getData(t = {}) {
    var v, o, e, m;
    const s = this.actor, a = Math.max(0, Number(((o = (v = s == null ? void 0 : s.system) == null ? void 0 : v.resources) == null ? void 0 : o.morale) ?? 0) || 0);
    let l;
    if (this._isInitiativeRoll)
      l = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const d = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", c = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      l = ["3d6", d, u, c].filter(Boolean).join(" ") || "3d6";
    }
    let h = "";
    if (this._isWeaponAttack && ((m = (e = game.user) == null ? void 0 : e.targets) != null && m.size)) {
      const u = Array.from(game.user.targets)[0], c = (u == null ? void 0 : u.actor) ?? null;
      h = (c == null ? void 0 : c.name) || (u == null ? void 0 : u.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: l,
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
    var I, j, k, N, C, B, D;
    const s = this.actor;
    if (!s) return;
    const a = t.querySelector("[name='constantBonus']"), l = parseInt((a == null ? void 0 : a.value) ?? "0", 10) || 0, h = this._baseModifier, v = this._injuryModifier, o = this._injuryPenalty || 0, e = h + v + o + l;
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
    const m = t.querySelector("[name='moraleDice']"), d = t.querySelector("[name='advantage']"), u = Math.min(3, Math.max(0, parseInt((m == null ? void 0 : m.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((j = (I = s.system) == null ? void 0 : I.resources) == null ? void 0 : j.morale) ?? 0) || 0), f = Math.min(u, c), g = Math.min(3, Math.max(-3, parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0)), _ = [
      "3d6",
      g > 0 ? `+${g}d6` : g < 0 ? `-${Math.abs(g)}d6` : "",
      f > 0 ? `+${f}d8` : "",
      e !== 0 ? e > 0 ? `+${e}` : `${e}` : ""
    ].filter(Boolean).join(" "), y = new Roll(_);
    await y.evaluate({ async: !0 });
    const { resultType: S, label: i } = Y(y), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let r = this._label;
    const p = { resultType: S, critLabel: i };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const L = Array.from(game.user.targets)[0], w = (L == null ? void 0 : L.actor) ?? null;
      if (w) {
        const q = ((C = w.system) == null ? void 0 : C.combat) ?? {}, T = Number(q.defense ?? 0) || 0, W = Number(q.defenseBonus ?? 0) || 0, H = Number(q.givenProtection ?? 0) || 0;
        let A = 0;
        if (w.type === "Karakter") {
          const R = (((B = w.items) == null ? void 0 : B.contents) ?? []).filter(
            (x) => {
              var E;
              return x.type === "Pancel" && ((E = x.system) == null ? void 0 : E.equipped) === !0;
            }
          );
          for (const x of R) {
            const E = String(((D = x.system) == null ? void 0 : D.protectionBonus) ?? "").trim().replace(",", "."), K = Number(E);
            Number.isFinite(K) && (A += K);
          }
        }
        const V = T + W + H + A, O = (Number(y.total ?? 0) || 0) >= V, U = w.name ?? L.name ?? "Célpont";
        let P = null, F = null;
        if (O && w.type === "Karakter")
          try {
            const R = new Roll("1d8");
            await R.evaluate({ async: !0 }), P = Number(R.total ?? 0) || 1, P === 1 ? F = "Fej" : P >= 2 && P <= 4 ? F = "Törzs" : P === 5 || P === 6 ? F = "Karok" : F = "Lábak";
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
          defense: V,
          isHit: O,
          hitLocationRoll: P ?? null,
          hitLocationName: F ?? null
        };
      }
    }
    if (await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: r,
      flags: { "vacuum-of-the-void": p },
      rollMode: n
    }), f > 0) {
      const b = Math.max(0, c - f);
      await s.update({ "system.resources.morale": b });
    }
    this.close();
  }
}
function Q(M, t, s) {
  var o, e;
  if (!M) return;
  const a = Number(((e = (o = M.system) == null ? void 0 : o.skills) == null ? void 0 : e[t]) ?? 0) || 0, l = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(M, t) : void 0;
  let h = 0;
  l === 1 ? h = -6 : l === 2 && (h = -3), new z({
    actor: M,
    skillKey: t,
    label: s || t,
    baseModifier: a,
    injuryModifier: h
  }).render(!0);
}
function X(M, t) {
  var p, I, j, k, N, C, B, D;
  if (!M || !t) return;
  const s = M, l = (((p = s.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, h = ((I = s.system) == null ? void 0 : I.skills) ?? {}, v = ((k = (j = s.items) == null ? void 0 : j.filter) == null ? void 0 : k.call(j, (b) => b.type === "Fegyver")) ?? [], o = (l.itemId ?? "").trim(), e = o ? v.find((b) => b.id === o) ?? null : null, m = ((e == null ? void 0 : e.name) ?? l.name ?? "").trim() || "Fegyver", d = Number(l.bonus || ((N = e == null ? void 0 : e.system) == null ? void 0 : N.bonus) || 0) || 0, u = ((C = e == null ? void 0 : e.system) == null ? void 0 : C.type) || "kinetic", c = (((B = e == null ? void 0 : e.system) == null ? void 0 : B.skillKey) ?? "").trim(), f = c && h[c] !== void 0 ? c : u === "explosive" ? "grenadeUse" : "firearms", g = Number(h[f] || 0) || 0, _ = d + g;
  let y = 0;
  if (M.type === "Karakter") {
    const b = $._getSkillHealthStatusStatic(M, f);
    b === 1 ? y = -6 : b === 2 && (y = -3);
  }
  const S = (((D = e == null ? void 0 : e.system) == null ? void 0 : D.damage) ?? "").trim(), i = (l.damage ?? "").trim(), n = S || i || "";
  new z({
    actor: M,
    skillKey: f,
    label: m,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: y,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (e == null ? void 0 : e.id) ?? o,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  z as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DR87BHeM.mjs.map
