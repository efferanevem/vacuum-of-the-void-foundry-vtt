import { V as A, c as Y } from "./vacuum-of-the-void-CAZ6A6Wn.mjs";
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
      actor: n,
      skillKey: s,
      label: i,
      baseModifier: d,
      injuryModifier: f,
      injuryPenalty: o,
      isWeaponAttack: e,
      isInitiativeRoll: m,
      weaponSlotKey: h,
      weaponItemId: c,
      weaponDamageFormula: u
    } = t;
    super(t), this._actor = n, this._skillKey = s ?? "", this._label = i ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(f) || 0, this._injuryPenalty = Number(o) || 0, this._isWeaponAttack = !!e, this._isInitiativeRoll = !!m, this._weaponSlotKey = h || "", this._weaponItemId = c || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const s = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var y, g, M, v, b;
    const t = this, n = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((g = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : g.call(y, "form.votv.roll-sheet")) ?? ((v = (M = this.element) == null ? void 0 : M.matches) != null && v.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    t._isInitiativeRoll && (s.dataset.initiativeRoll = "1");
    const i = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), f = (r) => {
      const a = Math.min(3, Math.max(-3, parseInt(r, 10) || 0));
      i && (i.value = String(a)), d.forEach((l) => {
        const p = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", p === a);
      });
    };
    d.forEach((r) => {
      r.addEventListener("click", (a) => {
        a.preventDefault(), f(r.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), f((i == null ? void 0 : i.value) ?? "0");
    const o = s.querySelector(".roll-sheet-morale-wrap"), e = Math.min(3, Math.max(0, parseInt(((b = o == null ? void 0 : o.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), h = s.querySelectorAll(".roll-sheet-morale-d8"), c = (r) => {
      let a = Math.min(3, Math.max(0, parseInt(r, 10) || 0));
      a = Math.min(a, e), m && (m.value = String(a)), h.forEach((l, p) => {
        l.classList.toggle("selected", p < a), l.style.pointerEvents = p < e ? "" : "none", l.style.opacity = p < e ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((r) => {
      r.addEventListener("click", (a) => {
        if (a.preventDefault(), r.classList.contains("roll-sheet-morale-d8") && parseInt(r.dataset.moraleValue ?? "0", 10) > e) return;
        const l = r.dataset.moraleValue ?? "0";
        c(l), t._updateFormulaPreview(s);
      });
    }), c((m == null ? void 0 : m.value) ?? "0");
    const u = s.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(s)), u && u.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (r) => {
      var a, l, p, w;
      if ((l = (a = r.target) == null ? void 0 : a.closest) != null && l.call(a, ".roll-sheet-close")) {
        r.preventDefault(), t.close();
        return;
      }
      (w = (p = r.target) == null ? void 0 : p.closest) != null && w.call(p, ".roll-sheet-do-roll") && (r.preventDefault(), r.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var u, y, g, M, v, b, r;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const s = parseInt(((u = t.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, i = parseInt(((y = t.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, d = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, f = parseInt(((M = t.dataset) == null ? void 0 : M.injuryPenalty) ?? "0", 10) || 0, o = i + d + f + s;
    if (((v = t.dataset) == null ? void 0 : v.initiativeRoll) === "1") {
      n.innerHTML = "";
      const a = document.createElement("span");
      a.textContent = o !== 0 ? `Összesítve: 1d20 ${o > 0 ? "+ " + o : o}` : "Összesítve: 1d20", n.appendChild(a);
      return;
    }
    const e = parseInt(((b = t.querySelector("input[name='advantage']")) == null ? void 0 : b.value) ?? "0", 10) || 0, m = parseInt(((r = t.querySelector("input[name='moraleDice']")) == null ? void 0 : r.value) ?? "0", 10) || 0, h = [];
    h.push(document.createElement("span")), h[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", h[0].appendChild(c), e !== 0) {
      const a = document.createElement("span");
      a.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const l = document.createElement("img");
      l.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", l.alt = e > 0 ? "előny d6" : "hátrány d6", l.className = "roll-sheet-preview-die", a.appendChild(l), h.push(a);
    }
    if (m > 0) {
      const a = document.createElement("span");
      a.textContent = ` + ${m} `;
      const l = document.createElement("img");
      l.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", l.alt = "d8", l.className = "roll-sheet-preview-die", a.appendChild(l), h.push(a);
    }
    if (o !== 0) {
      const a = document.createElement("span");
      a.textContent = o > 0 ? ` + ${o}` : ` − ${Math.abs(o)}`, h.push(a);
    }
    n.innerHTML = "", n.append(...h);
  }
  getData(t = {}) {
    var f, o, e, m;
    const n = this.actor, s = Math.max(0, Number(((o = (f = n == null ? void 0 : n.system) == null ? void 0 : f.resources) == null ? void 0 : o.morale) ?? 0) || 0);
    let i;
    if (this._isInitiativeRoll)
      i = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const h = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", u = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      i = ["3d6", h, c, u].filter(Boolean).join(" ") || "3d6";
    }
    let d = "";
    if (this._isWeaponAttack && ((m = (e = game.user) == null ? void 0 : e.targets) != null && m.size)) {
      const c = Array.from(game.user.targets)[0], u = (c == null ? void 0 : c.actor) ?? null;
      d = (u == null ? void 0 : u.name) || (c == null ? void 0 : c.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: i,
      moraleCurrent: s,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: d,
      isInitiativeRoll: this._isInitiativeRoll
    };
  }
  activateListeners(t) {
    var n;
    (n = super.activateListeners) == null || n.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var w, I, R, k, N, F, x;
    const n = this.actor;
    if (!n) return;
    const s = t.querySelector("[name='moraleDice']"), i = t.querySelector("[name='advantage']"), d = t.querySelector("[name='constantBonus']"), f = Math.min(3, Math.max(0, parseInt((s == null ? void 0 : s.value) ?? "0", 10) || 0)), o = Math.max(0, Number(((I = (w = n.system) == null ? void 0 : w.resources) == null ? void 0 : I.morale) ?? 0) || 0), e = Math.min(f, o), m = Math.min(3, Math.max(-3, parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0)), h = parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0, c = this._baseModifier, u = this._injuryModifier, y = this._injuryPenalty || 0, g = c + u + y + h, M = [
      "3d6",
      m > 0 ? `+${m}d6` : m < 0 ? `-${Math.abs(m)}d6` : "",
      e > 0 ? `+${e}d8` : "",
      g !== 0 ? g > 0 ? `+${g}` : `${g}` : ""
    ].filter(Boolean).join(" "), v = new Roll(M);
    await v.evaluate({ async: !0 });
    const { resultType: b, label: r } = Y(v), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let l = this._label;
    const p = { resultType: b, critLabel: r };
    if (this._isWeaponAttack && ((k = (R = game.user) == null ? void 0 : R.targets) != null && k.size)) {
      const D = Array.from(game.user.targets)[0], j = (D == null ? void 0 : D.actor) ?? null;
      if (j) {
        const E = ((N = j.system) == null ? void 0 : N.combat) ?? {}, z = Number(E.defense ?? 0) || 0, W = Number(E.defenseBonus ?? 0) || 0, H = Number(E.givenProtection ?? 0) || 0;
        let V = 0;
        if (j.type === "Karakter") {
          const L = (((F = j.items) == null ? void 0 : F.contents) ?? []).filter(
            (C) => {
              var q;
              return C.type === "Pancel" && ((q = C.system) == null ? void 0 : q.equipped) === !0;
            }
          );
          for (const C of L) {
            const q = String(((x = C.system) == null ? void 0 : x.protectionBonus) ?? "").trim().replace(",", "."), O = Number(q);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = z + W + H + V, K = (Number(v.total ?? 0) || 0) >= $, U = j.name ?? D.name ?? "Célpont";
        let P = null, B = null;
        if (K && j.type === "Karakter")
          try {
            const L = new Roll("1d8");
            await L.evaluate({ async: !0 }), P = Number(L.total ?? 0) || 1, P === 1 ? B = "Fej" : P >= 2 && P <= 4 ? B = "Törzs" : P === 5 || P === 6 ? B = "Karok" : B = "Lábak";
          } catch (L) {
            console.warn("VOTV hit location roll failed:", L);
          }
        p.weaponAttack = !0, p.weapon = {
          actorId: n.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: j.id ?? null,
          targetName: U,
          defense: $,
          isHit: K,
          hitLocationRoll: P ?? null,
          hitLocationName: B ?? null
        };
      }
    }
    if (await v.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: l,
      flags: { "vacuum-of-the-void": p },
      rollMode: a
    }), e > 0) {
      const S = Math.max(0, o - e);
      await n.update({ "system.resources.morale": S });
    }
    this.close();
  }
}
function Q(_, t, n) {
  var o, e;
  if (!_) return;
  const s = Number(((e = (o = _.system) == null ? void 0 : o.skills) == null ? void 0 : e[t]) ?? 0) || 0, i = A.BODY_PART_BY_SKILL[t] ? A._getSkillHealthStatusStatic(_, t) : void 0;
  let d = 0;
  i === 1 ? d = -6 : i === 2 && (d = -3), new T({
    actor: _,
    skillKey: t,
    label: n || t,
    baseModifier: s,
    injuryModifier: d
  }).render(!0);
}
function X(_, t) {
  var p, w, I, R, k, N, F, x;
  if (!_ || !t) return;
  const n = _, i = (((p = n.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, d = ((w = n.system) == null ? void 0 : w.skills) ?? {}, f = ((R = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : R.call(I, (S) => S.type === "Fegyver")) ?? [], o = (i.itemId ?? "").trim(), e = o ? f.find((S) => S.id === o) ?? null : null, m = ((e == null ? void 0 : e.name) ?? i.name ?? "").trim() || "Fegyver", h = Number(i.bonus || ((k = e == null ? void 0 : e.system) == null ? void 0 : k.bonus) || 0) || 0, c = ((N = e == null ? void 0 : e.system) == null ? void 0 : N.type) || "kinetic", u = (((F = e == null ? void 0 : e.system) == null ? void 0 : F.skillKey) ?? "").trim(), y = u && d[u] !== void 0 ? u : c === "explosive" ? "grenadeUse" : "firearms", g = Number(d[y] || 0) || 0, M = h + g;
  let v = 0;
  if (_.type === "Karakter") {
    const S = A._getSkillHealthStatusStatic(_, y);
    S === 1 ? v = -6 : S === 2 && (v = -3);
  }
  const b = (((x = e == null ? void 0 : e.system) == null ? void 0 : x.damage) ?? "").trim(), r = (i.damage ?? "").trim(), a = b || r || "";
  new T({
    actor: _,
    skillKey: y,
    label: m,
    baseModifier: M,
    injuryModifier: 0,
    injuryPenalty: v,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (e == null ? void 0 : e.id) ?? o,
    weaponDamageFormula: a
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BnJyGb8z.mjs.map
