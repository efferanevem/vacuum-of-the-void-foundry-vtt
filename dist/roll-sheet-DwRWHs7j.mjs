import { V as A, c as Y } from "./vacuum-of-the-void-D1ufKsev.mjs";
class T extends Application {
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
      label: r,
      baseModifier: m,
      injuryModifier: f,
      injuryPenalty: d,
      isWeaponAttack: e,
      weaponSlotKey: l,
      weaponItemId: c,
      weaponDamageFormula: i
    } = t;
    super(t), this._actor = s, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(f) || 0, this._injuryPenalty = Number(d) || 0, this._isWeaponAttack = !!e, this._weaponSlotKey = l || "", this._weaponItemId = c || "", this._weaponDamageFormula = typeof i == "string" ? i.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, s = {}) {
    const a = await super.render(t, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var p, g, _, y, S;
    const t = this, s = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((g = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : g.call(p, "form.votv.roll-sheet")) ?? ((y = (_ = this.element) == null ? void 0 : _.matches) != null && y.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), m = a.querySelectorAll(".roll-sheet-advantage-d6"), f = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), m.forEach((v) => {
        const h = parseInt(v.dataset.advantageValue ?? "0", 10);
        v.classList.toggle("selected", h === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), f(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), f((r == null ? void 0 : r.value) ?? "0");
    const d = a.querySelector(".roll-sheet-morale-wrap"), e = Math.min(3, Math.max(0, parseInt(((S = d == null ? void 0 : d.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), l = a.querySelector("input[name='moraleDice']"), c = a.querySelectorAll(".roll-sheet-morale-d8"), i = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, e), l && (l.value = String(o)), c.forEach((v, h) => {
        v.classList.toggle("selected", h < o), v.style.pointerEvents = h < e ? "" : "none", v.style.opacity = h < e ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > e) return;
        const v = n.dataset.moraleValue ?? "0";
        i(v), t._updateFormulaPreview(a);
      });
    }), i((l == null ? void 0 : l.value) ?? "0");
    const u = a.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(a)), u && u.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, v, h, I;
      if ((v = (o = n.target) == null ? void 0 : o.closest) != null && v.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (I = (h = n.target) == null ? void 0 : h.closest) != null && I.call(h, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var u, p, g, _, y, S;
    const s = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const a = parseInt(((u = t.querySelector("input[name='advantage']")) == null ? void 0 : u.value) ?? "0", 10) || 0, r = parseInt(((p = t.querySelector("input[name='moraleDice']")) == null ? void 0 : p.value) ?? "0", 10) || 0, m = parseInt(((g = t.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, f = parseInt(((_ = t.dataset) == null ? void 0 : _.baseMod) ?? "0", 10) || 0, d = parseInt(((y = t.dataset) == null ? void 0 : y.injuryMod) ?? "0", 10) || 0, e = parseInt(((S = t.dataset) == null ? void 0 : S.injuryPenalty) ?? "0", 10) || 0, l = f + d + e + m, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const i = document.createElement("img");
    if (i.src = "systems/vacuum-of-the-void/assets/d6.svg", i.alt = "d6", i.className = "roll-sheet-preview-die", c[0].appendChild(i), a !== 0) {
      const n = document.createElement("span");
      n.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const o = document.createElement("img");
      o.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = a > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", n.appendChild(o), c.push(n);
    }
    if (r > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", n.appendChild(o), c.push(n);
    }
    if (l !== 0) {
      const n = document.createElement("span");
      n.textContent = l > 0 ? ` + ${l}` : ` − ${Math.abs(l)}`, c.push(n);
    }
    s.innerHTML = "", s.append(...c);
  }
  getData(t = {}) {
    var f, d, e, l;
    const s = this.actor, a = Math.max(0, Number(((d = (f = s == null ? void 0 : s.system) == null ? void 0 : f.resources) == null ? void 0 : d.morale) ?? 0) || 0);
    let r;
    if (this._isInitiativeRoll)
      r = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const c = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", u = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      r = ["3d6", c, i, u].filter(Boolean).join(" ") || "3d6";
    }
    let m = "";
    if (this._isWeaponAttack && ((l = (e = game.user) == null ? void 0 : e.targets) != null && l.size)) {
      const i = Array.from(game.user.targets)[0], u = (i == null ? void 0 : i.actor) ?? null;
      m = (u == null ? void 0 : u.name) || (i == null ? void 0 : i.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: r,
      moraleCurrent: a,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: m,
      isInitiativeRoll: this._isInitiativeRoll
    };
  }
  activateListeners(t) {
    var s;
    (s = super.activateListeners) == null || s.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var I, j, N, R, B, D, F;
    const s = this.actor;
    if (!s) return;
    const a = t.querySelector("[name='constantBonus']"), r = parseInt((a == null ? void 0 : a.value) ?? "0", 10) || 0, m = this._baseModifier, f = this._injuryModifier, d = this._injuryPenalty || 0, e = m + f + d + r;
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
    const l = t.querySelector("[name='moraleDice']"), c = t.querySelector("[name='advantage']"), i = Math.min(3, Math.max(0, parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0)), u = Math.max(0, Number(((j = (I = s.system) == null ? void 0 : I.resources) == null ? void 0 : j.morale) ?? 0) || 0), p = Math.min(i, u), g = Math.min(3, Math.max(-3, parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0)), _ = [
      "3d6",
      g > 0 ? `+${g}d6` : g < 0 ? `-${Math.abs(g)}d6` : "",
      p > 0 ? `+${p}d8` : "",
      e !== 0 ? e > 0 ? `+${e}` : `${e}` : ""
    ].filter(Boolean).join(" "), y = new Roll(_);
    await y.evaluate({ async: !0 });
    const { resultType: S, label: n } = Y(y), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let v = this._label;
    const h = { resultType: S, critLabel: n };
    if (this._isWeaponAttack && ((R = (N = game.user) == null ? void 0 : N.targets) != null && R.size)) {
      const L = Array.from(game.user.targets)[0], w = (L == null ? void 0 : L.actor) ?? null;
      if (w) {
        const q = ((B = w.system) == null ? void 0 : B.combat) ?? {}, z = Number(q.defense ?? 0) || 0, W = Number(q.defenseBonus ?? 0) || 0, H = Number(q.givenProtection ?? 0) || 0;
        let $ = 0;
        if (w.type === "Karakter") {
          const k = (((D = w.items) == null ? void 0 : D.contents) ?? []).filter(
            (x) => {
              var E;
              return x.type === "Pancel" && ((E = x.system) == null ? void 0 : E.equipped) === !0;
            }
          );
          for (const x of k) {
            const E = String(((F = x.system) == null ? void 0 : F.protectionBonus) ?? "").trim().replace(",", "."), K = Number(E);
            Number.isFinite(K) && ($ += K);
          }
        }
        const V = z + W + H + $, O = (Number(y.total ?? 0) || 0) >= V, U = w.name ?? L.name ?? "Célpont";
        let P = null, C = null;
        if (O && w.type === "Karakter")
          try {
            const k = new Roll("1d8");
            await k.evaluate({ async: !0 }), P = Number(k.total ?? 0) || 1, P === 1 ? C = "Fej" : P >= 2 && P <= 4 ? C = "Törzs" : P === 5 || P === 6 ? C = "Karok" : C = "Lábak";
          } catch (k) {
            console.warn("VOTV hit location roll failed:", k);
          }
        h.weaponAttack = !0, h.weapon = {
          actorId: s.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: w.id ?? null,
          targetName: U,
          defense: V,
          isHit: O,
          hitLocationRoll: P ?? null,
          hitLocationName: C ?? null
        };
      }
    }
    if (await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: v,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), p > 0) {
      const b = Math.max(0, u - p);
      await s.update({ "system.resources.morale": b });
    }
    this.close();
  }
}
function Q(M, t, s) {
  var d, e;
  if (!M) return;
  const a = Number(((e = (d = M.system) == null ? void 0 : d.skills) == null ? void 0 : e[t]) ?? 0) || 0, r = A.BODY_PART_BY_SKILL[t] ? A._getSkillHealthStatusStatic(M, t) : void 0;
  let m = 0;
  r === 1 ? m = -6 : r === 2 && (m = -3), new T({
    actor: M,
    skillKey: t,
    label: s || t,
    baseModifier: a,
    injuryModifier: m
  }).render(!0);
}
function X(M, t) {
  var h, I, j, N, R, B, D, F;
  if (!M || !t) return;
  const s = M, r = (((h = s.system) == null ? void 0 : h.weapons) ?? {})[t] ?? {}, m = ((I = s.system) == null ? void 0 : I.skills) ?? {}, f = ((N = (j = s.items) == null ? void 0 : j.filter) == null ? void 0 : N.call(j, (b) => b.type === "Fegyver")) ?? [], d = (r.itemId ?? "").trim(), e = d ? f.find((b) => b.id === d) ?? null : null, l = ((e == null ? void 0 : e.name) ?? r.name ?? "").trim() || "Fegyver", c = Number(r.bonus || ((R = e == null ? void 0 : e.system) == null ? void 0 : R.bonus) || 0) || 0, i = ((B = e == null ? void 0 : e.system) == null ? void 0 : B.type) || "kinetic", u = (((D = e == null ? void 0 : e.system) == null ? void 0 : D.skillKey) ?? "").trim(), p = u && m[u] !== void 0 ? u : i === "explosive" ? "grenadeUse" : "firearms", g = Number(m[p] || 0) || 0, _ = c + g;
  let y = 0;
  if (M.type === "Karakter") {
    const b = A._getSkillHealthStatusStatic(M, p);
    b === 1 ? y = -6 : b === 2 && (y = -3);
  }
  const S = (((F = e == null ? void 0 : e.system) == null ? void 0 : F.damage) ?? "").trim(), n = (r.damage ?? "").trim(), o = S || n || "";
  new T({
    actor: M,
    skillKey: p,
    label: l,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: y,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (e == null ? void 0 : e.id) ?? d,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DwRWHs7j.mjs.map
