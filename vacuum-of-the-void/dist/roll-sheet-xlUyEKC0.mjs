import { V as R, c as Y } from "./vacuum-of-the-void-BH3PRae8.mjs";
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
      label: r,
      baseModifier: d,
      injuryModifier: o,
      injuryPenalty: m,
      isWeaponAttack: l,
      weaponSlotKey: i,
      weaponItemId: c,
      weaponDamageFormula: h
    } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = r ?? e, this._baseModifier = Number(d) || 0, this._injuryModifier = Number(o) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!l, this._weaponSlotKey = i || "", this._weaponItemId = c || "", this._weaponDamageFormula = typeof h == "string" ? h.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var g, u, v, b, _;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((u = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : u.call(g, "form.votv.roll-sheet")) ?? ((b = (v = this.element) == null ? void 0 : v.matches) != null && b.call(v, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const r = e.querySelector("input[name='advantage']"), d = e.querySelectorAll(".roll-sheet-advantage-d6"), o = (a) => {
      const s = Math.min(3, Math.max(-3, parseInt(a, 10) || 0));
      r && (r.value = String(s)), d.forEach((y) => {
        const p = parseInt(y.dataset.advantageValue ?? "0", 10);
        y.classList.toggle("selected", p === s);
      });
    };
    d.forEach((a) => {
      a.addEventListener("click", (s) => {
        s.preventDefault(), o(a.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), o((r == null ? void 0 : r.value) ?? "0");
    const m = e.querySelector(".roll-sheet-morale-wrap"), l = Math.min(3, Math.max(0, parseInt(((_ = m == null ? void 0 : m.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), i = e.querySelector("input[name='moraleDice']"), c = e.querySelectorAll(".roll-sheet-morale-d8"), h = (a) => {
      let s = Math.min(3, Math.max(0, parseInt(a, 10) || 0));
      s = Math.min(s, l), i && (i.value = String(s)), c.forEach((y, p) => {
        y.classList.toggle("selected", p < s), y.style.pointerEvents = p < l ? "" : "none", y.style.opacity = p < l ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((a) => {
      a.addEventListener("click", (s) => {
        if (s.preventDefault(), a.classList.contains("roll-sheet-morale-d8") && parseInt(a.dataset.moraleValue ?? "0", 10) > l) return;
        const y = a.dataset.moraleValue ?? "0";
        h(y), t._updateFormulaPreview(e);
      });
    }), h((i == null ? void 0 : i.value) ?? "0");
    const f = e.querySelector("input[name='constantBonus']");
    f && f.addEventListener("input", () => t._updateFormulaPreview(e)), f && f.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (a) => {
      var s, y, p, S;
      if ((y = (s = a.target) == null ? void 0 : s.closest) != null && y.call(s, ".roll-sheet-close")) {
        a.preventDefault(), t.close();
        return;
      }
      (S = (p = a.target) == null ? void 0 : p.closest) != null && S.call(p, ".roll-sheet-do-roll") && (a.preventDefault(), a.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var f, g, u, v, b, _;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, r = parseInt(((g = t.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, d = parseInt(((u = t.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, o = parseInt(((v = t.dataset) == null ? void 0 : v.baseMod) ?? "0", 10) || 0, m = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, l = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, i = o + m + l + d, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", c[0].appendChild(h), e !== 0) {
      const a = document.createElement("span");
      a.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const s = document.createElement("img");
      s.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", s.alt = e > 0 ? "előny d6" : "hátrány d6", s.className = "roll-sheet-preview-die", a.appendChild(s), c.push(a);
    }
    if (r > 0) {
      const a = document.createElement("span");
      a.textContent = ` + ${r} `;
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
    var i, c, h, f;
    const n = this.actor, e = Math.max(0, Number(((c = (i = n == null ? void 0 : n.system) == null ? void 0 : i.resources) == null ? void 0 : c.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", o = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", r, d, o].filter(Boolean).join(" ") || "3d6";
    let l = "";
    if (this._isWeaponAttack && ((f = (h = game.user) == null ? void 0 : h.targets) != null && f.size)) {
      const u = Array.from(game.user.targets)[0], v = (u == null ? void 0 : u.actor) ?? null;
      l = (v == null ? void 0 : v.name) || (u == null ? void 0 : u.name) || "";
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
    var S, P, N, F, j, C, E;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), r = t.querySelector("[name='advantage']"), d = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((P = (S = n.system) == null ? void 0 : S.resources) == null ? void 0 : P.morale) ?? 0) || 0), l = Math.min(o, m), i = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), c = parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0, h = this._baseModifier, f = this._injuryModifier, g = this._injuryPenalty || 0, u = h + f + g + c, v = [
      "3d6",
      i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
      l > 0 ? `+${l}d8` : "",
      u !== 0 ? u > 0 ? `+${u}` : `${u}` : ""
    ].filter(Boolean).join(" "), b = new Roll(v);
    await b.evaluate({ async: !0 });
    const { resultType: _, label: a } = Y(b), s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let y = this._label;
    const p = { resultType: _, critLabel: a };
    if (this._isWeaponAttack && ((F = (N = game.user) == null ? void 0 : N.targets) != null && F.size)) {
      const x = Array.from(game.user.targets)[0], w = (x == null ? void 0 : x.actor) ?? null;
      if (w) {
        const q = ((j = w.system) == null ? void 0 : j.combat) ?? {}, z = Number(q.defense ?? 0) || 0, W = Number(q.defenseBonus ?? 0) || 0, H = Number(q.givenProtection ?? 0) || 0;
        let A = 0;
        if (w.type === "Karakter") {
          const L = (((C = w.items) == null ? void 0 : C.contents) ?? []).filter(
            (D) => {
              var B;
              return D.type === "Pancel" && ((B = D.system) == null ? void 0 : B.equipped) === !0;
            }
          );
          for (const D of L) {
            const B = String(((E = D.system) == null ? void 0 : E.protectionBonus) ?? "").trim().replace(",", "."), T = Number(B);
            Number.isFinite(T) && (A += T);
          }
        }
        const $ = z + W + H + A, O = (Number(b.total ?? 0) || 0) >= $, U = w.name ?? x.name ?? "Célpont";
        let I = null, k = null;
        if (O && w.type === "Karakter")
          try {
            const L = new Roll("1d8");
            await L.evaluate({ async: !0 }), I = Number(L.total ?? 0) || 1, I === 1 ? k = "Fej" : I >= 2 && I <= 4 ? k = "Törzs" : I === 5 || I === 6 ? k = "Karok" : k = "Lábak";
          } catch (L) {
            console.warn("VOTV hit location roll failed:", L);
          }
        p.weaponAttack = !0, p.weapon = {
          actorId: n.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: w.id ?? null,
          targetName: U,
          defense: $,
          isHit: O,
          hitLocationRoll: I ?? null,
          hitLocationName: k ?? null
        };
      }
    }
    if (await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: y,
      flags: { "vacuum-of-the-void": p },
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
  const e = Number(((l = (m = M.system) == null ? void 0 : m.skills) == null ? void 0 : l[t]) ?? 0) || 0, r = R.BODY_PART_BY_SKILL[t] ? R._getSkillHealthStatusStatic(M, t) : void 0;
  let d = 0;
  r === 1 ? d = -6 : r === 2 && (d = -3), new K({
    actor: M,
    skillKey: t,
    label: n || t,
    baseModifier: e,
    injuryModifier: d
  }).render(!0);
}
function X(M, t) {
  var s, y, p, S, P, N, F;
  if (!M || !t) return;
  const e = (((s = M.system) == null ? void 0 : s.weapons) ?? {})[t] ?? {}, r = (e.itemId ?? "").trim(), d = ((y = M.items) == null ? void 0 : y.filter((j) => j.type === "Fegyver")) ?? [], o = r ? d.find((j) => j.id === r) : null, m = (o == null ? void 0 : o.name) || e.name || `Fegyver (${t})`, l = Number(e.bonus ?? ((p = o == null ? void 0 : o.system) == null ? void 0 : p.bonus) ?? 0) || 0, c = (((S = o == null ? void 0 : o.system) == null ? void 0 : S.type) ?? "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(((N = (P = M.system) == null ? void 0 : P.skills) == null ? void 0 : N[c]) ?? 0) || 0, f = M.type === "Karakter" ? R._getSkillHealthStatusStatic(M, c) : void 0;
  let g = 0;
  f === 1 ? g = -6 : f === 2 && (g = -3);
  const u = (((F = o == null ? void 0 : o.system) == null ? void 0 : F.damage) ?? "").trim(), v = (e.damage ?? "").trim(), b = u || v || "", _ = h + l;
  new K({
    actor: M,
    skillKey: c,
    label: m,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: g,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (o == null ? void 0 : o.id) ?? r,
    weaponDamageFormula: b
  }).render(!0);
}
export {
  K as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-xlUyEKC0.mjs.map
