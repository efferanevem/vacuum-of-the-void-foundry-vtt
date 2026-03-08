import { V as E, c as Y } from "./vacuum-of-the-void-KaC52LJK.mjs";
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
      baseModifier: i,
      injuryModifier: M,
      injuryPenalty: c,
      isWeaponAttack: a,
      weaponSlotKey: l,
      weaponItemId: d,
      weaponDamageFormula: m
    } = e;
    super(e), this._actor = n, this._skillKey = t, this._label = r ?? t, this._baseModifier = Number(i) || 0, this._injuryModifier = Number(M) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!a, this._weaponSlotKey = l || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof m == "string" ? m.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var f, u, y, v, _;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((u = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : u.call(f, "form.votv.roll-sheet")) ?? ((v = (y = this.element) == null ? void 0 : y.matches) != null && v.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), i = t.querySelectorAll(".roll-sheet-advantage-d6"), M = (s) => {
      const o = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      r && (r.value = String(o)), i.forEach((g) => {
        const h = parseInt(g.dataset.advantageValue ?? "0", 10);
        g.classList.toggle("selected", h === o);
      });
    };
    i.forEach((s) => {
      s.addEventListener("click", (o) => {
        o.preventDefault(), M(s.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), M((r == null ? void 0 : r.value) ?? "0");
    const c = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((_ = c == null ? void 0 : c.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), l = t.querySelector("input[name='moraleDice']"), d = t.querySelectorAll(".roll-sheet-morale-d8"), m = (s) => {
      let o = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      o = Math.min(o, a), l && (l.value = String(o)), d.forEach((g, h) => {
        g.classList.toggle("selected", h < o), g.style.pointerEvents = h < a ? "" : "none", g.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (o) => {
        if (o.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > a) return;
        const g = s.dataset.moraleValue ?? "0";
        m(g), e._updateFormulaPreview(t);
      });
    }), m((l == null ? void 0 : l.value) ?? "0");
    const p = t.querySelector("input[name='constantBonus']");
    p && p.addEventListener("input", () => e._updateFormulaPreview(t)), p && p.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (s) => {
      var o, g, h, w;
      if ((g = (o = s.target) == null ? void 0 : o.closest) != null && g.call(o, ".roll-sheet-close")) {
        s.preventDefault(), e.close();
        return;
      }
      (w = (h = s.target) == null ? void 0 : h.closest) != null && w.call(h, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var p, f, u, y, v, _;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((p = e.querySelector("input[name='advantage']")) == null ? void 0 : p.value) ?? "0", 10) || 0, r = parseInt(((f = e.querySelector("input[name='moraleDice']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((u = e.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, M = parseInt(((y = e.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, c = parseInt(((v = e.dataset) == null ? void 0 : v.injuryMod) ?? "0", 10) || 0, a = parseInt(((_ = e.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, l = M + c + a + i, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const m = document.createElement("img");
    if (m.src = "systems/vacuum-of-the-void/assets/d6.svg", m.alt = "d6", m.className = "roll-sheet-preview-die", d[0].appendChild(m), t !== 0) {
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
    var l, d, m, p;
    const n = this.actor, t = Math.max(0, Number(((d = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : d.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", M = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", r, i, M].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((p = (m = game.user) == null ? void 0 : m.targets) != null && p.size)) {
      const u = Array.from(game.user.targets)[0], y = (u == null ? void 0 : u.actor) ?? null;
      a = (y == null ? void 0 : y.name) || (u == null ? void 0 : u.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: c,
      moraleCurrent: t,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: a
    };
  }
  activateListeners(e) {
    var n;
    (n = super.activateListeners) == null || n.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var w, I, k, N, F, x, B;
    const n = this.actor;
    if (!n) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), i = e.querySelector("[name='constantBonus']"), M = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((I = (w = n.system) == null ? void 0 : w.resources) == null ? void 0 : I.morale) ?? 0) || 0), a = Math.min(M, c), l = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), d = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, m = this._baseModifier, p = this._injuryModifier, f = this._injuryPenalty || 0, u = m + p + f + d, y = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      u !== 0 ? u > 0 ? `+${u}` : `${u}` : ""
    ].filter(Boolean).join(" "), v = new Roll(y);
    await v.evaluate({ async: !0 });
    const { resultType: _, label: s } = Y(v), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let g = this._label;
    const h = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const q = Array.from(game.user.targets)[0], j = (q == null ? void 0 : q.actor) ?? null;
      if (j) {
        const C = ((F = j.system) == null ? void 0 : F.combat) ?? {}, W = Number(C.defense ?? 0) || 0, z = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
        let V = 0;
        if (j.type === "Karakter") {
          const P = (((x = j.items) == null ? void 0 : x.contents) ?? []).filter(
            (R) => {
              var A;
              return R.type === "Pancel" && ((A = R.system) == null ? void 0 : A.equipped) === !0;
            }
          );
          for (const R of P) {
            const A = String(((B = R.system) == null ? void 0 : B.protectionBonus) ?? "").trim().replace(",", "."), O = Number(A);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = W + z + H + V, K = (Number(v.total ?? 0) || 0) >= $, U = j.name ?? q.name ?? "Célpont";
        let L = null, D = null;
        if (K && j.type === "Karakter")
          try {
            const P = new Roll("1d8");
            await P.evaluate({ async: !0 }), L = Number(P.total ?? 0) || 1, L === 1 ? D = "Fej" : L >= 2 && L <= 4 ? D = "Törzs" : L === 5 || L === 6 ? D = "Karok" : D = "Lábak";
          } catch (P) {
            console.warn("VOTV hit location roll failed:", P);
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
          hitLocationRoll: L ?? null,
          hitLocationName: D ?? null
        };
      }
    }
    if (await v.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: g,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), a > 0) {
      const S = Math.max(0, c - a);
      await n.update({ "system.resources.morale": S });
    }
    this.close();
  }
}
function Q(b, e, n) {
  var c, a;
  if (!b) return;
  const t = Number(((a = (c = b.system) == null ? void 0 : c.skills) == null ? void 0 : a[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(b, e) : void 0;
  let i = 0;
  r === 1 ? i = -6 : r === 2 && (i = -3), new T({
    actor: b,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: i
  }).render(!0);
}
function X(b, e) {
  var h, w, I, k, N, F, x, B;
  if (!b || !e) return;
  const n = b, r = (((h = n.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, i = ((w = n.system) == null ? void 0 : w.skills) ?? {}, M = ((k = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : k.call(I, (S) => S.type === "Fegyver")) ?? [], c = (r.itemId ?? "").trim(), a = c ? M.find((S) => S.id === c) ?? null : null, l = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", d = Number(r.bonus || ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) || 0) || 0, m = ((F = a == null ? void 0 : a.system) == null ? void 0 : F.type) || "kinetic", p = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), f = p && i[p] !== void 0 ? p : m === "explosive" ? "grenadeUse" : "firearms", u = Number(i[f] || 0) || 0, y = d + u;
  let v = 0;
  if (b.type === "Karakter") {
    const S = E._getSkillHealthStatusStatic(b, f);
    S === 1 ? v = -6 : S === 2 && (v = -3);
  }
  const _ = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), s = (r.damage ?? "").trim(), o = _ || s || "";
  new T({
    actor: b,
    skillKey: f,
    label: l,
    baseModifier: y,
    injuryModifier: 0,
    injuryPenalty: v,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? c,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BxZvlCP_.mjs.map
