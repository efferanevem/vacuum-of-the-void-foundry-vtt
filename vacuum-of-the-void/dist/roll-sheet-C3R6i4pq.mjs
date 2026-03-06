import { V as q, c as Y } from "./vacuum-of-the-void-DmWxQOL7.mjs";
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
      isWeaponAttack: i,
      weaponSlotKey: l,
      weaponItemId: c
    } = t;
    super(t), this._actor = n, this._skillKey = e, this._label = o ?? e, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(r) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!i, this._weaponSlotKey = l || "", this._weaponItemId = c || "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, n = {}) {
    const e = await super.render(t, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), e;
  }
  _bindRollSheetListeners() {
    var v, d, p, b, _;
    const t = this, n = this.id ?? "votv-roll-sheet", e = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((d = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : d.call(v, "form.votv.roll-sheet")) ?? ((b = (p = this.element) == null ? void 0 : p.matches) != null && b.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!e || e._votvRollBound) return;
    const o = e.querySelector("input[name='advantage']"), u = e.querySelectorAll(".roll-sheet-advantage-d6"), r = (s) => {
      const a = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      o && (o.value = String(a)), u.forEach((h) => {
        const g = parseInt(h.dataset.advantageValue ?? "0", 10);
        h.classList.toggle("selected", g === a);
      });
    };
    u.forEach((s) => {
      s.addEventListener("click", (a) => {
        a.preventDefault(), r(s.dataset.advantageValue ?? "0"), t._updateFormulaPreview(e);
      });
    }), r((o == null ? void 0 : o.value) ?? "0");
    const m = e.querySelector(".roll-sheet-morale-wrap"), i = Math.min(3, Math.max(0, parseInt(((_ = m == null ? void 0 : m.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), l = e.querySelector("input[name='moraleDice']"), c = e.querySelectorAll(".roll-sheet-morale-d8"), y = (s) => {
      let a = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      a = Math.min(a, i), l && (l.value = String(a)), c.forEach((h, g) => {
        h.classList.toggle("selected", g < a), h.style.pointerEvents = g < i ? "" : "none", h.style.opacity = g < i ? "" : "0.35";
      });
    };
    e.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (a) => {
        if (a.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > i) return;
        const h = s.dataset.moraleValue ?? "0";
        y(h), t._updateFormulaPreview(e);
      });
    }), y((l == null ? void 0 : l.value) ?? "0");
    const f = e.querySelector("input[name='constantBonus']");
    f && f.addEventListener("input", () => t._updateFormulaPreview(e)), f && f.addEventListener("change", () => t._updateFormulaPreview(e)), t._updateFormulaPreview(e), e._votvRollBound = !0, e.addEventListener("click", (s) => {
      var a, h, g, j;
      if ((h = (a = s.target) == null ? void 0 : a.closest) != null && h.call(a, ".roll-sheet-close")) {
        s.preventDefault(), t.close();
        return;
      }
      (j = (g = s.target) == null ? void 0 : g.closest) != null && j.call(g, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), t._doRoll(e));
    });
  }
  _updateFormulaPreview(t) {
    var f, v, d, p, b, _;
    const n = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const e = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, o = parseInt(((v = t.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((d = t.querySelector("input[name='constantBonus']")) == null ? void 0 : d.value) ?? "0", 10) || 0, r = parseInt(((p = t.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, m = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, i = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, l = r + m + i + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const y = document.createElement("img");
    if (y.src = "systems/vacuum-of-the-void/assets/d6.svg", y.alt = "d6", y.className = "roll-sheet-preview-die", c[0].appendChild(y), e !== 0) {
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
    var l, c, y, f;
    const n = this.actor, e = Math.max(0, Number(((c = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : c.morale) ?? 0) || 0), o = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", r = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", o, u, r].filter(Boolean).join(" ") || "3d6";
    let i = "";
    if (this._isWeaponAttack && ((f = (y = game.user) == null ? void 0 : y.targets) != null && f.size)) {
      const d = Array.from(game.user.targets)[0], p = (d == null ? void 0 : d.actor) ?? null;
      i = (p == null ? void 0 : p.name) || (d == null ? void 0 : d.name) || "";
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
    var j, B, R, C, E, V, A;
    const n = this.actor;
    if (!n) return;
    const e = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), u = t.querySelector("[name='constantBonus']"), r = Math.min(3, Math.max(0, parseInt((e == null ? void 0 : e.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((B = (j = n.system) == null ? void 0 : j.resources) == null ? void 0 : B.morale) ?? 0) || 0), i = Math.min(r, m), l = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), c = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, y = this._baseModifier, f = this._injuryModifier, v = this._injuryPenalty || 0, d = y + f + v + c, p = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      i > 0 ? `+${i}d8` : "",
      d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""
    ].filter(Boolean).join(" "), b = new Roll(p);
    await b.evaluate({ async: !0 });
    const { resultType: _, label: s } = Y(b), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let h = this._label;
    const g = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((C = (R = game.user) == null ? void 0 : R.targets) != null && C.size)) {
      const P = Array.from(game.user.targets)[0], S = (P == null ? void 0 : P.actor) ?? null;
      if (S) {
        const x = ((E = S.system) == null ? void 0 : E.combat) ?? {}, z = Number(x.defense ?? 0) || 0, W = Number(x.defenseBonus ?? 0) || 0, H = Number(x.givenProtection ?? 0) || 0;
        let $ = 0;
        if (S.type === "Karakter") {
          const I = (((V = S.items) == null ? void 0 : V.contents) ?? []).filter(
            (N) => {
              var k;
              return N.type === "Pancel" && ((k = N.system) == null ? void 0 : k.equipped) === !0;
            }
          );
          for (const N of I) {
            const k = String(((A = N.system) == null ? void 0 : A.protectionBonus) ?? "").trim().replace(",", "."), T = Number(k);
            Number.isFinite(T) && ($ += T);
          }
        }
        const F = z + W + H + $, O = (Number(b.total ?? 0) || 0) >= F, U = S.name ?? P.name ?? "Célpont";
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
          targetActorId: S.id ?? null,
          targetName: U,
          defense: F,
          isHit: O,
          hitLocationRoll: w ?? null,
          hitLocationName: L ?? null
        };
      }
    }
    if (await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: h,
      flags: { "vacuum-of-the-void": g },
      rollMode: a
    }), i > 0) {
      const D = Math.max(0, m - i);
      await n.update({ "system.resources.morale": D });
    }
    this.close();
  }
}
function Q(M, t, n) {
  var m, i;
  if (!M) return;
  const e = Number(((i = (m = M.system) == null ? void 0 : m.skills) == null ? void 0 : i[t]) ?? 0) || 0, o = q.BODY_PART_BY_SKILL[t] ? q._getSkillHealthStatusStatic(M, t) : void 0;
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
  var p, b, _, s, a;
  if (!M || !t) return;
  const e = (((p = M.system) == null ? void 0 : p.weapons) ?? {})[t] ?? {}, o = (e.itemId ?? "").trim(), u = ((b = M.items) == null ? void 0 : b.filter((h) => h.type === "Fegyver")) ?? [], r = o ? u.find((h) => h.id === o) : null, m = (r == null ? void 0 : r.name) || e.name || `Fegyver (${t})`, i = Number(e.bonus ?? 0) || 0, c = (((_ = r == null ? void 0 : r.system) == null ? void 0 : _.type) ?? "kinetic") === "explosive" ? "grenadeUse" : "firearms", y = Number(((a = (s = M.system) == null ? void 0 : s.skills) == null ? void 0 : a[c]) ?? 0) || 0, f = M.type === "Karakter" ? q._getSkillHealthStatusStatic(M, c) : void 0;
  let v = 0;
  f === 1 ? v = -6 : f === 2 && (v = -3), new K({
    actor: M,
    skillKey: c,
    label: m,
    baseModifier: y,
    injuryModifier: i,
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
//# sourceMappingURL=roll-sheet-C3R6i4pq.mjs.map
