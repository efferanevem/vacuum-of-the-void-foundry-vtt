import { V as q, c as Y } from "./vacuum-of-the-void-DYdHWdw2.mjs";
class K extends Application {
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
      skillKey: e,
      label: o,
      baseModifier: d,
      injuryModifier: r,
      injuryPenalty: m,
      isWeaponAttack: i,
      weaponSlotKey: l,
      weaponItemId: c
    } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(d) || 0, this._injuryModifier = Number(r) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!i, this._weaponSlotKey = l || "", this._weaponItemId = c || "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var b, u, p, g, _;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((u = (b = this.element) == null ? void 0 : b.querySelector) == null ? void 0 : u.call(b, "form.votv.roll-sheet")) ?? ((g = (p = this.element) == null ? void 0 : p.matches) != null && g.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), d = e.querySelectorAll(".roll-sheet-advantage-d6"), r = (s) => {
      const a = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(a)), d.forEach((M) => {
        const y = parseInt(M.dataset.advantageValue ?? "0", 10);
        M.classList.toggle("selected", y === a);
      });
    };
    d.forEach((s) => {
      s.addEventListener("click", (a) => {
        a.preventDefault(), r(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), r((o == null ? void 0 : o.value) ?? "0");
    const m = e.querySelector(".roll-sheet-morale-wrap"), i = Math.min(3, Math.max(0, parseInt(((_ = m == null ? void 0 : m.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), l = e.querySelector("input[name='moraleDice']"), c = e.querySelectorAll(".roll-sheet-morale-d8"), f = (s) => {
      let a = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      a = Math.min(a, i), l && (l.value = String(a)), c.forEach((M, y) => {
        M.classList.toggle("selected", y < a), M.style.pointerEvents = y < i ? "" : "none", M.style.opacity = y < i ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (a) => {
        if (a.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > i) return;
        const M = s.dataset.moraleValue ?? "0";
        f(M), t._updateFormulaPreview(e);
      });
    }), f((l == null ? void 0 : l.value) ?? "0");
    const h = e.querySelector("input[name='constantBonus']");
    h && h.addEventListener("input", () => t._updateFormulaPreview(e)), h && h.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var a, M, y, j;
      if ((M = (a = s.target) == null ? void 0 : a.closest) != null && M.call(a, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (j = (y = s.target) == null ? void 0 : y.closest) != null && j.call(y, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var h, b, u, p, g, _;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((h = t.querySelector("input[name='advantage']")) == null ? void 0 : h.value) ?? "0", 10) || 0, o = parseInt(((b = t.querySelector("input[name='moraleDice']")) == null ? void 0 : b.value) ?? "0", 10) || 0, d = parseInt(((u = t.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, r = parseInt(((p = t.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, m = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, i = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, l = r + m + i + d, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", c[0].appendChild(f), e !== 0) {
      const s = document.createElement("span");
      s.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const a = document.createElement("img");
      a.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", a.alt = e > 0 ? "előny d6" : "hátrány d6", a.className = "roll-sheet-preview-die", s.appendChild(a), c.push(s);
    }
    if (o > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${o} `;
      const a = document.createElement("img");
      a.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", a.alt = "d8", a.className = "roll-sheet-preview-die", s.appendChild(a), c.push(s);
    }
    if (l !== 0) {
      const s = document.createElement("span");
      s.textContent = l > 0 ? ` + ${l}` : ` − ${Math.abs(l)}`, c.push(s);
    }
    n.innerHTML = "", n.append(...c);
  }
  getData(t = {}) {
    var l, c, f, h;
    const n = this.actor, e = Math.max(0, Number(((c = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : c.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", r = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", o, d, r].filter(Boolean).join(" ") || "3d6";
    let i = "";
    if (this._isWeaponAttack && ((h = (f = game.user) == null ? void 0 : f.targets) != null && h.size)) {
      const u = Array.from(game.user.targets)[0], p = (u == null ? void 0 : u.actor) ?? null;
      i = (p == null ? void 0 : p.name) || (u == null ? void 0 : u.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: e,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: i
    };
  }
  activateListeners(t) {
    var n;
    (n = super.activateListeners) == null || n.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var j, B, R, C, E, A, D;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), d = t.querySelector("[name='constantBonus']"), r = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((B = (j = n.system) == null ? void 0 : j.resources) == null ? void 0 : B.morale) ?? 0) || 0), i = Math.min(r, m), l = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), c = parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0, f = this._baseModifier, h = this._injuryModifier, b = this._injuryPenalty || 0, u = f + h + b + c, p = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      i > 0 ? `+${i}d8` : "",
      u !== 0 ? u > 0 ? `+${u}` : `${u}` : ""
    ].filter(Boolean).join(" "), g = new Roll(p);
    await g.evaluate({ async: !0 });
    const { resultType: _, label: s } = Y(g), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let M = this._label;
    const y = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((C = (R = game.user) == null ? void 0 : R.targets) != null && C.size)) {
      const P = Array.from(game.user.targets)[0], S = (P == null ? void 0 : P.actor) ?? null;
      if (S) {
        const x = ((E = S.system) == null ? void 0 : E.combat) ?? {}, z = Number(x.defense ?? 0) || 0, W = Number(x.defenseBonus ?? 0) || 0, H = Number(x.givenProtection ?? 0) || 0;
        let $ = 0;
        if (S.type === "Karakter") {
          const I = (((A = S.items) == null ? void 0 : A.contents) ?? []).filter(
            (N) => {
              var k;
              return N.type === "Pancel" && ((k = N.system) == null ? void 0 : k.equipped) === !0;
            }
          );
          for (const N of I) {
            const k = String(((D = N.system) == null ? void 0 : D.protectionBonus) ?? "").trim().replace(",", "."), T = Number(k);
            Number.isFinite(T) && ($ += T);
          }
        }
        const F = z + W + H + $, O = (Number(g.total ?? 0) || 0) >= F, U = S.name ?? P.name ?? "Célpont";
        let w = null, L = null;
        if (O && S.type === "Karakter")
          try {
            const I = new Roll("1d8");
            await I.evaluate({ async: !0 }), w = Number(I.total ?? 0) || 1, w === 1 ? L = "Fej" : w >= 2 && w <= 4 ? L = "Törzs" : w === 5 || w === 6 ? L = "Karok" : L = "Lábak";
          } catch (I) {
            console.warn("VOTV hit location roll failed:", I);
          }
        y.weaponAttack = !0, y.weapon = {
          actorId: n.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          targetActorId: S.id ?? null,
          targetName: U,
          defense: F,
          isHit: O,
          hitLocationRoll: w ?? null,
          hitLocationName: L ?? null
        };
      }
    }
    if (await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: M,
      flags: { "vacuum-of-the-void": y },
      rollMode: a
    }), i > 0) {
      const V = Math.max(0, m - i);
      await n.update({ "system.resources.morale": V });
    }
    this.close();
  }
}
function Q(v, t, n) {
  var m, i;
  if (!v) return;
  const e = Number(((i = (m = v.system) == null ? void 0 : m.skills) == null ? void 0 : i[t]) ?? 0) || 0, o = q.BODY_PART_BY_SKILL[t] ? q._getSkillHealthStatusStatic(v, t) : void 0;
  let d = 0;
  o === 1 ? d = -6 : o === 2 && (d = -3), new K({
    actor: v,
    skillKey: t,
    label: n || t,
    baseModifier: e,
    injuryModifier: d
  }).render(!0);
}
function X(v, t) {
  var u, p, g, _, s;
  if (!v || !t) return;
  const e = (((u = v.system) == null ? void 0 : u.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), d = ((p = v.items) == null ? void 0 : p.filter((a) => a.type === "Fegyver")) ?? [], r = o ? d.find((a) => a.id === o) : null, m = (r == null ? void 0 : r.name) || e.name || `Fegyver (${t})`, i = Number(e.bonus ?? 0) || 0, c = (((g = r == null ? void 0 : r.system) == null ? void 0 : g.type) ?? "kinetic") === "explosive" ? "grenadeUse" : "firearms";
  Number(((s = (_ = v.system) == null ? void 0 : _.skills) == null ? void 0 : s[c]) ?? 0);
  const f = v.type === "Karakter" ? q._getSkillHealthStatusStatic(v, c) : void 0;
  let h = 0;
  f === 1 ? h = -6 : f === 2 && (h = -3), new K({
    actor: v,
    skillKey: c,
    label: m,
    baseModifier: grenadeUse,
    injuryModifier: i,
    injuryPenalty: h,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (r == null ? void 0 : r.id) ?? o
  }).render(!0);
}
export {
  K as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BDo1d1CW.mjs.map
