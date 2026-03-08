import { V as E, c as Y } from "./vacuum-of-the-void-CkKigNNC.mjs";
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
      baseModifier: c,
      injuryModifier: p,
      injuryPenalty: u,
      isWeaponAttack: a,
      weaponSlotKey: l,
      weaponItemId: d,
      weaponDamageFormula: i
    } = e;
    super(e), this._actor = n, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(c) || 0, this._injuryModifier = Number(p) || 0, this._injuryPenalty = Number(u) || 0, this._isWeaponAttack = !!a, this._weaponSlotKey = l || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof i == "string" ? i.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var v, g, M, f, _;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((g = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : g.call(v, "form.votv.roll-sheet")) ?? ((f = (M = this.element) == null ? void 0 : M.matches) != null && f.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), c = t.querySelectorAll(".roll-sheet-advantage-d6"), p = (s) => {
      const o = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      r && (r.value = String(o)), c.forEach((y) => {
        const h = parseInt(y.dataset.advantageValue ?? "0", 10);
        y.classList.toggle("selected", h === o);
      });
    };
    c.forEach((s) => {
      s.addEventListener("click", (o) => {
        o.preventDefault(), p(s.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), p((r == null ? void 0 : r.value) ?? "0");
    const u = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((_ = u == null ? void 0 : u.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), l = t.querySelector("input[name='moraleDice']"), d = t.querySelectorAll(".roll-sheet-morale-d8"), i = (s) => {
      let o = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      o = Math.min(o, a), l && (l.value = String(o)), d.forEach((y, h) => {
        y.classList.toggle("selected", h < o), y.style.pointerEvents = h < a ? "" : "none", y.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (o) => {
        if (o.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > a) return;
        const y = s.dataset.moraleValue ?? "0";
        i(y), e._updateFormulaPreview(t);
      });
    }), i((l == null ? void 0 : l.value) ?? "0");
    const m = t.querySelector("input[name='constantBonus']");
    m && m.addEventListener("input", () => e._updateFormulaPreview(t)), m && m.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (s) => {
      var o, y, h, w;
      if ((y = (o = s.target) == null ? void 0 : o.closest) != null && y.call(o, ".roll-sheet-close")) {
        s.preventDefault(), e.close();
        return;
      }
      (w = (h = s.target) == null ? void 0 : h.closest) != null && w.call(h, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var m, v, g, M, f, _;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((m = e.querySelector("input[name='advantage']")) == null ? void 0 : m.value) ?? "0", 10) || 0, r = parseInt(((v = e.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, c = parseInt(((g = e.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, p = parseInt(((M = e.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, u = parseInt(((f = e.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, a = parseInt(((_ = e.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, l = p + u + a + c, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const i = document.createElement("img");
    if (i.src = "systems/vacuum-of-the-void/assets/d6.svg", i.alt = "d6", i.className = "roll-sheet-preview-die", d[0].appendChild(i), t !== 0) {
      const s = document.createElement("span");
      s.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", s.appendChild(o), d.push(s);
    }
    if (r > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", s.appendChild(o), d.push(s);
    }
    if (l !== 0) {
      const s = document.createElement("span");
      s.textContent = l > 0 ? ` + ${l}` : ` − ${Math.abs(l)}`, d.push(s);
    }
    n.innerHTML = "", n.append(...d);
  }
  getData(e = {}) {
    var p, u, a, l;
    const n = this.actor, t = Math.max(0, Number(((u = (p = n == null ? void 0 : n.system) == null ? void 0 : p.resources) == null ? void 0 : u.morale) ?? 0) || 0);
    let r;
    if (this._isInitiativeRoll)
      r = ["1d20", this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : ""].filter(Boolean).join(" ") || "1d20";
    else {
      const d = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", m = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "";
      r = ["3d6", d, i, m].filter(Boolean).join(" ") || "3d6";
    }
    let c = "";
    if (this._isWeaponAttack && ((l = (a = game.user) == null ? void 0 : a.targets) != null && l.size)) {
      const i = Array.from(game.user.targets)[0], m = (i == null ? void 0 : i.actor) ?? null;
      c = (m == null ? void 0 : m.name) || (i == null ? void 0 : i.name) || "";
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
      targetLabel: c,
      isInitiativeRoll: this._isInitiativeRoll
    };
  }
  activateListeners(e) {
    var n;
    (n = super.activateListeners) == null || n.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var w, I, k, N, F, B, R;
    const n = this.actor;
    if (!n) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), c = e.querySelector("[name='constantBonus']"), p = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), u = Math.max(0, Number(((I = (w = n.system) == null ? void 0 : w.resources) == null ? void 0 : I.morale) ?? 0) || 0), a = Math.min(p, u), l = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), d = parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0, i = this._baseModifier, m = this._injuryModifier, v = this._injuryPenalty || 0, g = i + m + v + d, M = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      g !== 0 ? g > 0 ? `+${g}` : `${g}` : ""
    ].filter(Boolean).join(" "), f = new Roll(M);
    await f.evaluate({ async: !0 });
    const { resultType: _, label: s } = Y(f), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let y = this._label;
    const h = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const D = Array.from(game.user.targets)[0], j = (D == null ? void 0 : D.actor) ?? null;
      if (j) {
        const C = ((F = j.system) == null ? void 0 : F.combat) ?? {}, W = Number(C.defense ?? 0) || 0, z = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
        let V = 0;
        if (j.type === "Karakter") {
          const L = (((B = j.items) == null ? void 0 : B.contents) ?? []).filter(
            (q) => {
              var A;
              return q.type === "Pancel" && ((A = q.system) == null ? void 0 : A.equipped) === !0;
            }
          );
          for (const q of L) {
            const A = String(((R = q.system) == null ? void 0 : R.protectionBonus) ?? "").trim().replace(",", "."), O = Number(A);
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
    }), a > 0) {
      const S = Math.max(0, u - a);
      await n.update({ "system.resources.morale": S });
    }
    this.close();
  }
}
function Q(b, e, n) {
  var u, a;
  if (!b) return;
  const t = Number(((a = (u = b.system) == null ? void 0 : u.skills) == null ? void 0 : a[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(b, e) : void 0;
  let c = 0;
  r === 1 ? c = -6 : r === 2 && (c = -3), new T({
    actor: b,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: c
  }).render(!0);
}
function X(b, e) {
  var h, w, I, k, N, F, B, R;
  if (!b || !e) return;
  const n = b, r = (((h = n.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, c = ((w = n.system) == null ? void 0 : w.skills) ?? {}, p = ((k = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : k.call(I, (S) => S.type === "Fegyver")) ?? [], u = (r.itemId ?? "").trim(), a = u ? p.find((S) => S.id === u) ?? null : null, l = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", d = Number(r.bonus || ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) || 0) || 0, i = ((F = a == null ? void 0 : a.system) == null ? void 0 : F.type) || "kinetic", m = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.skillKey) ?? "").trim(), v = m && c[m] !== void 0 ? m : i === "explosive" ? "grenadeUse" : "firearms", g = Number(c[v] || 0) || 0, M = d + g;
  let f = 0;
  if (b.type === "Karakter") {
    const S = E._getSkillHealthStatusStatic(b, v);
    S === 1 ? f = -6 : S === 2 && (f = -3);
  }
  const _ = (((R = a == null ? void 0 : a.system) == null ? void 0 : R.damage) ?? "").trim(), s = (r.damage ?? "").trim(), o = _ || s || "";
  new T({
    actor: b,
    skillKey: v,
    label: l,
    baseModifier: M,
    injuryModifier: 0,
    injuryPenalty: f,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? u,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Doy6S-u3.mjs.map
