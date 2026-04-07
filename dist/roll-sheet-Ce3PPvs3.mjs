import { V as q, c as Y } from "./vacuum-of-the-void-DC1aScx9.mjs";
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
      actor: a,
      skillKey: e,
      label: o,
      baseModifier: u,
      injuryModifier: d,
      injuryPenalty: m,
      isWeaponAttack: i,
      weaponSlotKey: r,
      weaponItemId: c
    } = t;
    super(t), this._actor = a, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(d) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!i, this._weaponSlotKey = r || "", this._weaponItemId = c || "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, a = {}) {
    const e = await super.render(t, a);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var y, l, p, g, _;
    const t = this, a = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(a)}"]`) ?? ((l = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : l.call(y, "form.votv.roll-sheet")) ?? ((g = (p = this.element) == null ? void 0 : p.matches) != null && g.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), u = e.querySelectorAll(".roll-sheet-advantage-d6"), d = (s) => {
      const n = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(n)), u.forEach((M) => {
        const f = parseInt(M.dataset.advantageValue ?? "0", 10);
        M.classList.toggle("selected", f === n);
      });
    };
    u.forEach((s) => {
      s.addEventListener("click", (n) => {
        n.preventDefault(), d(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), d((o == null ? void 0 : o.value) ?? "0");
    const m = e.querySelector(".roll-sheet-morale-wrap"), i = Math.min(3, Math.max(0, parseInt(((_ = m == null ? void 0 : m.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), r = e.querySelector("input[name='moraleDice']"), c = e.querySelectorAll(".roll-sheet-morale-d8"), h = (s) => {
      let n = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      n = Math.min(n, i), r && (r.value = String(n)), c.forEach((M, f) => {
        M.classList.toggle("selected", f < n), M.style.pointerEvents = f < i ? "" : "none", M.style.opacity = f < i ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (n) => {
        if (n.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > i) return;
        const M = s.dataset.moraleValue ?? "0";
        h(M), t._updateFormulaPreview(e);
      });
    }), h((r == null ? void 0 : r.value) ?? "0");
    const v = e.querySelector("input[name='constantBonus']");
    v && v.addEventListener("input", () => t._updateFormulaPreview(e)), v && v.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var n, M, f, j;
      if ((M = (n = s.target) == null ? void 0 : n.closest) != null && M.call(n, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (j = (f = s.target) == null ? void 0 : f.closest) != null && j.call(f, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var v, y, l, p, g, _;
    const a = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!a) return;
    const e = parseInt(((v = t.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0, o = parseInt(((y = t.querySelector("input[name='moraleDice']")) == null ? void 0 : y.value) ?? "0", 10) || 0, u = parseInt(((l = t.querySelector("input[name='constantBonus']")) == null ? void 0 : l.value) ?? "0", 10) || 0, d = parseInt(((p = t.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, m = parseInt(((g = t.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, i = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, r = d + m + i + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", c[0].appendChild(h), e !== 0) {
      const s = document.createElement("span");
      s.textContent = e > 0 ? ` + ${e} ` : ` − ${Math.abs(e)} `;
      const n = document.createElement("img");
      n.src = e > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", n.alt = e > 0 ? "előny d6" : "hátrány d6", n.className = "roll-sheet-preview-die", s.appendChild(n), c.push(s);
    }
    if (o > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${o} `;
      const n = document.createElement("img");
      n.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", n.alt = "d8", n.className = "roll-sheet-preview-die", s.appendChild(n), c.push(s);
    }
    if (r !== 0) {
      const s = document.createElement("span");
      s.textContent = r > 0 ? ` + ${r}` : ` − ${Math.abs(r)}`, c.push(s);
    }
    a.innerHTML = "", a.append(...c);
  }
  getData(t = {}) {
    var r, c, h, v;
    const a = this.actor, e = Math.max(0, Number(((c = (r = a == null ? void 0 : a.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", d = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", o, u, d].filter(Boolean).join(" ") || "3d6";
    let i = "";
    if (this._isWeaponAttack && ((v = (h = game.user) == null ? void 0 : h.targets) != null && v.size)) {
      const l = Array.from(game.user.targets)[0], p = (l == null ? void 0 : l.actor) ?? null;
      i = (p == null ? void 0 : p.name) || (l == null ? void 0 : l.name) || "";
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
    var a;
    (a = super.activateListeners) == null || a.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var j, B, R, C, E, A, D;
    const a = this.actor;
    if (!a) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), u = t.querySelector("[name='constantBonus']"), d = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((B = (j = a.system) == null ? void 0 : j.resources) == null ? void 0 : B.morale) ?? 0) || 0), i = Math.min(d, m), r = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), c = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, h = this._baseModifier, v = this._injuryModifier, y = this._injuryPenalty || 0, l = h + v + y + c, p = [
      "3d6",
      r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
      i > 0 ? `+${i}d8` : "",
      l !== 0 ? l > 0 ? `+${l}` : `${l}` : ""
    ].filter(Boolean).join(" "), g = new Roll(p);
    await g.evaluate({ async: !0 });
    const { resultType: _, label: s } = Y(g), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let M = this._label;
    const f = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((C = (R = game.user) == null ? void 0 : R.targets) != null && C.size)) {
      const P = Array.from(game.user.targets)[0], S = (P == null ? void 0 : P.actor) ?? null;
      if (S) {
        const k = ((E = S.system) == null ? void 0 : E.combat) ?? {}, U = Number(k.defense ?? 0) || 0, z = Number(k.defenseBonus ?? 0) || 0, W = Number(k.givenProtection ?? 0) || 0;
        let $ = 0;
        if (S.type === "Karakter") {
          const I = (((A = S.items) == null ? void 0 : A.contents) ?? []).filter(
            (N) => {
              var x;
              return N.type === "Pancel" && ((x = N.system) == null ? void 0 : x.equipped) === !0;
            }
          );
          for (const N of I) {
            const x = String(((D = N.system) == null ? void 0 : D.protectionBonus) ?? "").trim().replace(",", "."), K = Number(x);
            Number.isFinite(K) && ($ += K);
          }
        }
        const F = U + z + W + $, O = (Number(g.total ?? 0) || 0) >= F, H = S.name ?? P.name ?? "Célpont";
        let w = null, L = null;
        if (O && S.type === "Karakter")
          try {
            const I = new Roll("1d8");
            await I.evaluate({ async: !0 }), w = Number(I.total ?? 0) || 1, w === 1 ? L = "Fej" : w >= 2 && w <= 4 ? L = "Törzs" : w === 5 || w === 6 ? L = "Karok" : L = "Lábak";
          } catch (I) {
            console.warn("VOTV hit location roll failed:", I);
          }
        f.weaponAttack = !0, f.weapon = {
          actorId: a.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          targetActorId: S.id ?? null,
          targetName: H,
          defense: F,
          isHit: O,
          hitLocationRoll: w ?? null,
          hitLocationName: L ?? null
        };
      }
    }
    if (await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: a, alias: (a == null ? void 0 : a.name) ?? void 0 }),
      flavor: M,
      flags: { "vacuum-of-the-void": f },
      rollMode: n
    }), i > 0) {
      const V = Math.max(0, m - i);
      await a.update({ "system.resources.morale": V });
    }
    this.close();
  }
}
function Q(b, t, a) {
  var m, i;
  if (!b) return;
  const e = Number(((i = (m = b.system) == null ? void 0 : m.skills) == null ? void 0 : i[t]) ?? 0) || 0, o = q.BODY_PART_BY_SKILL[t] ? q._getSkillHealthStatusStatic(b, t) : void 0;
  let u = 0;
  o === 1 ? u = -6 : o === 2 && (u = -3), new T({
    actor: b,
    skillKey: t,
    label: a || t,
    baseModifier: e,
    injuryModifier: u
  }).render(!0);
}
function X(b, t) {
  var y, l, p, g;
  if (!b || !t) return;
  const e = (((y = b.system) == null ? void 0 : y.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), u = ((l = b.items) == null ? void 0 : l.filter((_) => _.type === "Fegyver")) ?? [], d = o ? u.find((_) => _.id === o) : null, m = (d == null ? void 0 : d.name) || e.name || `Fegyver (${t})`, i = Number(e.bonus ?? 0) || 0, r = Number(((g = (p = b.system) == null ? void 0 : p.skills) == null ? void 0 : g.grenadeUse) ?? 0) || 0, c = q._getSkillHealthStatusStatic(b, "grenadeUse");
  let h = 0;
  c === 1 ? h = -6 : c === 2 && (h = -3), new T({
    actor: b,
    skillKey: "grenadeUse",
    label: m,
    baseModifier: r,
    injuryModifier: i,
    injuryPenalty: h,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (d == null ? void 0 : d.id) ?? o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Ce3PPvs3.mjs.map
