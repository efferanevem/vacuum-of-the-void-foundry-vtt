import { V as D, c as Y } from "./vacuum-of-the-void-McymhF6g.mjs";
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
      baseModifier: u,
      injuryModifier: r,
      injuryPenalty: m,
      isWeaponAttack: l,
      weaponSlotKey: i,
      weaponItemId: c,
      weaponDamageFormula: h
    } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(r) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!l, this._weaponSlotKey = i || "", this._weaponItemId = c || "", this._weaponDamageFormula = typeof h == "string" ? h.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var v, d, f, _, b;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((d = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : d.call(v, "form.votv.roll-sheet")) ?? ((_ = (f = this.element) == null ? void 0 : f.matches) != null && _.call(f, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), u = e.querySelectorAll(".roll-sheet-advantage-d6"), r = (a) => {
      const s = Math.min(3, Math.max(-3, parseInt(a, 10) || 0));
      o && (o.value = String(s)), u.forEach((p) => {
        const g = parseInt(p.dataset.advantageValue ?? "0", 10);
        p.classList.toggle("selected", g === s);
      });
    };
    u.forEach((a) => {
      a.addEventListener("click", (s) => {
        s.preventDefault(), r(a.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), r((o == null ? void 0 : o.value) ?? "0");
    const m = e.querySelector(".roll-sheet-morale-wrap"), l = Math.min(3, Math.max(0, parseInt(((b = m == null ? void 0 : m.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), i = e.querySelector("input[name='moraleDice']"), c = e.querySelectorAll(".roll-sheet-morale-d8"), h = (a) => {
      let s = Math.min(3, Math.max(0, parseInt(a, 10) || 0));
      s = Math.min(s, l), i && (i.value = String(s)), c.forEach((p, g) => {
        p.classList.toggle("selected", g < s), p.style.pointerEvents = g < l ? "" : "none", p.style.opacity = g < l ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((a) => {
      a.addEventListener("click", (s) => {
        if (s.preventDefault(), a.classList.contains("roll-sheet-morale-d8") && parseInt(a.dataset.moraleValue ?? "0", 10) > l) return;
        const p = a.dataset.moraleValue ?? "0";
        h(p), t._updateFormulaPreview(e);
      });
    }), h((i == null ? void 0 : i.value) ?? "0");
    const y = e.querySelector("input[name='constantBonus']");
    y && y.addEventListener("input", () => t._updateFormulaPreview(e)), y && y.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (a) => {
      var s, p, g, j;
      if ((p = (s = a.target) == null ? void 0 : s.closest) != null && p.call(s, ".roll-sheet-close")) {
        a.preventDefault(), t.close();
        return;
      }
      (j = (g = a.target) == null ? void 0 : g.closest) != null && j.call(g, ".roll-sheet-do-roll") && (a.preventDefault(), a.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var y, v, d, f, _, b;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, o = parseInt(((v = t.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((d = t.querySelector("input[name='constantBonus']")) == null ? void 0 : d.value) ?? "0", 10) || 0, r = parseInt(((f = t.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, m = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryMod) ?? "0", 10) || 0, l = parseInt(((b = t.dataset) == null ? void 0 : b.injuryPenalty) ?? "0", 10) || 0, i = r + m + l + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", c[0].appendChild(h), e !== 0) {
      const a = document.createElement("span");
      a.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const s = document.createElement("img");
      s.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", s.alt = e > 0 ? "előny d6" : "hátrány d6", s.className = "roll-sheet-preview-die", a.appendChild(s), c.push(a);
    }
    if (o > 0) {
      const a = document.createElement("span");
      a.textContent = ` + ${o} `;
      const s = document.createElement("img");
      s.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", s.alt = "d8", s.className = "roll-sheet-preview-die", a.appendChild(s), c.push(a);
    }
    if (i !== 0) {
      const a = document.createElement("span");
      a.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, c.push(a);
    }
    n.innerHTML = "", n.append(...c);
  }
  getData(t = {}) {
    var i, c, h, y;
    const n = this.actor, e = Math.max(0, Number(((c = (i = n == null ? void 0 : n.system) == null ? void 0 : i.resources) == null ? void 0 : c.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", r = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", o, u, r].filter(Boolean).join(" ") || "3d6";
    let l = "";
    if (this._isWeaponAttack && ((y = (h = game.user) == null ? void 0 : h.targets) != null && y.size)) {
      const d = Array.from(game.user.targets)[0], f = (d == null ? void 0 : d.actor) ?? null;
      l = (f == null ? void 0 : f.name) || (d == null ? void 0 : d.name) || "";
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
      targetLabel: l
    };
  }
  activateListeners(t) {
    var n;
    (n = super.activateListeners) == null || n.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var j, q, B, R, C, E, F;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), u = t.querySelector("[name='constantBonus']"), r = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((q = (j = n.system) == null ? void 0 : j.resources) == null ? void 0 : q.morale) ?? 0) || 0), l = Math.min(r, m), i = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), c = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, h = this._baseModifier, y = this._injuryModifier, v = this._injuryPenalty || 0, d = h + y + v + c, f = [
      "3d6",
      i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
      l > 0 ? `+${l}d8` : "",
      d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""
    ].filter(Boolean).join(" "), _ = new Roll(f);
    await _.evaluate({ async: !0 });
    const { resultType: b, label: a } = Y(_), s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let p = this._label;
    const g = { resultType: b, critLabel: a };
    if (this._isWeaponAttack && ((R = (B = game.user) == null ? void 0 : B.targets) != null && R.size)) {
      const P = Array.from(game.user.targets)[0], S = (P == null ? void 0 : P.actor) ?? null;
      if (S) {
        const x = ((C = S.system) == null ? void 0 : C.combat) ?? {}, z = Number(x.defense ?? 0) || 0, W = Number(x.defenseBonus ?? 0) || 0, H = Number(x.givenProtection ?? 0) || 0;
        let A = 0;
        if (S.type === "Karakter") {
          const I = (((E = S.items) == null ? void 0 : E.contents) ?? []).filter(
            (N) => {
              var k;
              return N.type === "Pancel" && ((k = N.system) == null ? void 0 : k.equipped) === !0;
            }
          );
          for (const N of I) {
            const k = String(((F = N.system) == null ? void 0 : F.protectionBonus) ?? "").trim().replace(",", "."), T = Number(k);
            Number.isFinite(T) && (A += T);
          }
        }
        const $ = z + W + H + A, O = (Number(_.total ?? 0) || 0) >= $, U = S.name ?? P.name ?? "Célpont";
        let w = null, L = null;
        if (O && S.type === "Karakter")
          try {
            const I = new Roll("1d8");
            await I.evaluate({ async: !0 }), w = Number(I.total ?? 0) || 1, w === 1 ? L = "Fej" : w >= 2 && w <= 4 ? L = "Törzs" : w === 5 || w === 6 ? L = "Karok" : L = "Lábak";
          } catch (I) {
            console.warn("VOTV hit location roll failed:", I);
          }
        g.weaponAttack = !0, g.weapon = {
          actorId: n.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: S.id ?? null,
          targetName: U,
          defense: $,
          isHit: O,
          hitLocationRoll: w ?? null,
          hitLocationName: L ?? null
        };
      }
    }
    if (await _.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: p,
      flags: { "vacuum-of-the-void": g },
      rollMode: s
    }), l > 0) {
      const V = Math.max(0, m - l);
      await n.update({ "system.resources.morale": V });
    }
    this.close();
  }
}
function Q(M, t, n) {
  var m, l;
  if (!M) return;
  const e = Number(((l = (m = M.system) == null ? void 0 : m.skills) == null ? void 0 : l[t]) ?? 0) || 0, o = D.BODY_PART_BY_SKILL[t] ? D._getSkillHealthStatusStatic(M, t) : void 0;
  let u = 0;
  o === 1 ? u = -6 : o === 2 && (u = -3), new K({
    actor: M,
    skillKey: t,
    label: n || t,
    baseModifier: e,
    injuryModifier: u
  }).render(!0);
}
function X(M, t) {
  var f, _, b, a, s;
  if (!M || !t) return;
  const e = (((f = M.system) == null ? void 0 : f.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), u = ((_ = M.items) == null ? void 0 : _.filter((p) => p.type === "Fegyver")) ?? [], r = o ? u.find((p) => p.id === o) : null, m = (r == null ? void 0 : r.name) || e.name || `Fegyver (${t})`, l = Number(e.bonus ?? 0) || 0, c = (((b = r == null ? void 0 : r.system) == null ? void 0 : b.type) ?? "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(((s = (a = M.system) == null ? void 0 : a.skills) == null ? void 0 : s[c]) ?? 0) || 0, y = M.type === "Karakter" ? D._getSkillHealthStatusStatic(M, c) : void 0;
  let v = 0;
  y === 1 ? v = -6 : y === 2 && (v = -3), new K({
    actor: M,
    skillKey: c,
    label: m,
    baseModifier: h,
    injuryModifier: l,
    injuryPenalty: v,
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
//# sourceMappingURL=roll-sheet-B1bzwTFt.mjs.map
