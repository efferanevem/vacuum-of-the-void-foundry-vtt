import { V as E, c as Y } from "./vacuum-of-the-void-CwHztwV3.mjs";
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
  constructor(e = {}) {
    const {
      actor: n,
      skillKey: t,
      label: r,
      baseModifier: u,
      injuryModifier: p,
      injuryPenalty: d,
      isWeaponAttack: s,
      isInitiativeRoll: i,
      weaponSlotKey: m,
      weaponItemId: l,
      weaponDamageFormula: c
    } = e;
    super(e), this._actor = n, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(u) || 0, this._injuryModifier = Number(p) || 0, this._injuryPenalty = Number(d) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!i, this._weaponSlotKey = m || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var v, g, b, f, M;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((g = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : g.call(v, "form.votv.roll-sheet")) ?? ((f = (b = this.element) == null ? void 0 : b.matches) != null && f.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), u = t.querySelectorAll(".roll-sheet-advantage-d6"), p = (a) => {
      const o = Math.min(3, Math.max(-3, parseInt(a, 10) || 0));
      r && (r.value = String(o)), u.forEach((y) => {
        const h = parseInt(y.dataset.advantageValue ?? "0", 10);
        y.classList.toggle("selected", h === o);
      });
    };
    u.forEach((a) => {
      a.addEventListener("click", (o) => {
        o.preventDefault(), p(a.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), p((r == null ? void 0 : r.value) ?? "0");
    const d = t.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((M = d == null ? void 0 : d.dataset) == null ? void 0 : M.moraleMax) ?? "3", 10) || 0)), i = t.querySelector("input[name='moraleDice']"), m = t.querySelectorAll(".roll-sheet-morale-d8"), l = (a) => {
      let o = Math.min(3, Math.max(0, parseInt(a, 10) || 0));
      o = Math.min(o, s), i && (i.value = String(o)), m.forEach((y, h) => {
        y.classList.toggle("selected", h < o), y.style.pointerEvents = h < s ? "" : "none", y.style.opacity = h < s ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((a) => {
      a.addEventListener("click", (o) => {
        if (o.preventDefault(), a.classList.contains("roll-sheet-morale-d8") && parseInt(a.dataset.moraleValue ?? "0", 10) > s) return;
        const y = a.dataset.moraleValue ?? "0";
        l(y), e._updateFormulaPreview(t);
      });
    }), l((i == null ? void 0 : i.value) ?? "0");
    const c = t.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => e._updateFormulaPreview(t)), c && c.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (a) => {
      var o, y, h, w;
      if ((y = (o = a.target) == null ? void 0 : o.closest) != null && y.call(o, ".roll-sheet-close")) {
        a.preventDefault(), e.close();
        return;
      }
      (w = (h = a.target) == null ? void 0 : h.closest) != null && w.call(h, ".roll-sheet-do-roll") && (a.preventDefault(), a.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var c, v, g, b, f, M;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((c = e.querySelector("input[name='advantage']")) == null ? void 0 : c.value) ?? "0", 10) || 0, r = parseInt(((v = e.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((g = e.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, p = parseInt(((b = e.dataset) == null ? void 0 : b.baseMod) ?? "0", 10) || 0, d = parseInt(((f = e.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, s = parseInt(((M = e.dataset) == null ? void 0 : M.injuryPenalty) ?? "0", 10) || 0, i = p + d + s + u, m = [];
    m.push(document.createElement("span")), m[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", m[0].appendChild(l), t !== 0) {
      const a = document.createElement("span");
      a.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", a.appendChild(o), m.push(a);
    }
    if (r > 0) {
      const a = document.createElement("span");
      a.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", a.appendChild(o), m.push(a);
    }
    if (i !== 0) {
      const a = document.createElement("span");
      a.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, m.push(a);
    }
    n.innerHTML = "", n.append(...m);
  }
  getData(e = {}) {
    var p, d, s, i;
    const n = this.actor, t = Math.max(0, Number(((d = (p = n == null ? void 0 : n.system) == null ? void 0 : p.resources) == null ? void 0 : d.morale) ?? 0) || 0);
    let r;
    if (this._isInitiativeRoll)
      r = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const m = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", l = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", c = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      r = ["3d6", m, l, c].filter(Boolean).join(" ") || "3d6";
    }
    let u = "";
    if (this._isWeaponAttack && ((i = (s = game.user) == null ? void 0 : s.targets) != null && i.size)) {
      const l = Array.from(game.user.targets)[0], c = (l == null ? void 0 : l.actor) ?? null;
      u = (c == null ? void 0 : c.name) || (l == null ? void 0 : l.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: r,
      moraleCurrent: t,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: u,
      isInitiativeRoll: this._isInitiativeRoll
    };
  }
  activateListeners(e) {
    var n;
    (n = super.activateListeners) == null || n.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var w, I, k, N, R, F, B;
    const n = this.actor;
    if (!n) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), u = e.querySelector("[name='constantBonus']"), p = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((I = (w = n.system) == null ? void 0 : w.resources) == null ? void 0 : I.morale) ?? 0) || 0), s = Math.min(p, d), i = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), m = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, l = this._baseModifier, c = this._injuryModifier, v = this._injuryPenalty || 0, g = l + c + v + m, b = [
      "3d6",
      i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
      s > 0 ? `+${s}d8` : "",
      g !== 0 ? g > 0 ? `+${g}` : `${g}` : ""
    ].filter(Boolean).join(" "), f = new Roll(b);
    await f.evaluate({ async: !0 });
    const { resultType: M, label: a } = Y(f), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let y = this._label;
    const h = { resultType: M, critLabel: a };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const D = Array.from(game.user.targets)[0], j = (D == null ? void 0 : D.actor) ?? null;
      if (j) {
        const C = ((R = j.system) == null ? void 0 : R.combat) ?? {}, W = Number(C.defense ?? 0) || 0, z = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
        let V = 0;
        if (j.type === "Karakter") {
          const L = (((F = j.items) == null ? void 0 : F.contents) ?? []).filter(
            (q) => {
              var A;
              return q.type === "Pancel" && ((A = q.system) == null ? void 0 : A.equipped) === !0;
            }
          );
          for (const q of L) {
            const A = String(((B = q.system) == null ? void 0 : B.protectionBonus) ?? "").trim().replace(",", "."), O = Number(A);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = W + z + H + V, K = (Number(f.total ?? 0) || 0) >= $, U = j.name ?? D.name ?? "Célpont";
        let P = null, x = null;
        if (K && j.type === "Karakter")
          try {
            const L = new Roll("1d8");
            await L.evaluate({ async: !0 }), P = Number(L.total ?? 0) || 1, P === 1 ? x = "Fej" : P >= 2 && P <= 4 ? x = "Törzs" : P === 5 || P === 6 ? x = "Karok" : x = "Lábak";
          } catch (L) {
            console.warn("VOTV hit location roll failed:", L);
          }
        h.weaponAttack = !0, h.weapon = {
          actorId: n.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: j.id ?? null,
          targetName: U,
          defense: $,
          isHit: K,
          hitLocationRoll: P ?? null,
          hitLocationName: x ?? null
        };
      }
    }
    if (await f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: y,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), s > 0) {
      const S = Math.max(0, d - s);
      await n.update({ "system.resources.morale": S });
    }
    this.close();
  }
}
function Q(_, e, n) {
  var d, s;
  if (!_) return;
  const t = Number(((s = (d = _.system) == null ? void 0 : d.skills) == null ? void 0 : s[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(_, e) : void 0;
  let u = 0;
  r === 1 ? u = -6 : r === 2 && (u = -3), new T({
    actor: _,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: u
  }).render(!0);
}
function X(_, e) {
  var h, w, I, k, N, R, F, B;
  if (!_ || !e) return;
  const n = _, r = (((h = n.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, u = ((w = n.system) == null ? void 0 : w.skills) ?? {}, p = ((k = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : k.call(I, (S) => S.type === "Fegyver")) ?? [], d = (r.itemId ?? "").trim(), s = d ? p.find((S) => S.id === d) ?? null : null, i = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", m = Number(r.bonus || ((N = s == null ? void 0 : s.system) == null ? void 0 : N.bonus) || 0) || 0, l = ((R = s == null ? void 0 : s.system) == null ? void 0 : R.type) || "kinetic", c = (((F = s == null ? void 0 : s.system) == null ? void 0 : F.skillKey) ?? "").trim(), v = c && u[c] !== void 0 ? c : l === "explosive" ? "grenadeUse" : "firearms", g = Number(u[v] || 0) || 0, b = m + g;
  let f = 0;
  if (_.type === "Karakter") {
    const S = E._getSkillHealthStatusStatic(_, v);
    S === 1 ? f = -6 : S === 2 && (f = -3);
  }
  const M = (((B = s == null ? void 0 : s.system) == null ? void 0 : B.damage) ?? "").trim(), a = (r.damage ?? "").trim(), o = M || a || "";
  new T({
    actor: _,
    skillKey: v,
    label: i,
    baseModifier: b,
    injuryModifier: 0,
    injuryPenalty: f,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (s == null ? void 0 : s.id) ?? d,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-JXteaNBT.mjs.map
