import { V as A, c as Y } from "./vacuum-of-the-void-BJRRfrVx.mjs";
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
      injuryModifier: v,
      injuryPenalty: i,
      isWeaponAttack: a,
      weaponSlotKey: l,
      weaponItemId: d,
      weaponDamageFormula: p
    } = e;
    super(e), this._actor = n, this._skillKey = t, this._label = r ?? t, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(i) || 0, this._isWeaponAttack = !!a, this._weaponSlotKey = l || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof p == "string" ? p.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var g, c, m, M, S;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((c = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : c.call(g, "form.votv.roll-sheet")) ?? ((M = (m = this.element) == null ? void 0 : m.matches) != null && M.call(m, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), u = t.querySelectorAll(".roll-sheet-advantage-d6"), v = (s) => {
      const o = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      r && (r.value = String(o)), u.forEach((f) => {
        const h = parseInt(f.dataset.advantageValue ?? "0", 10);
        f.classList.toggle("selected", h === o);
      });
    };
    u.forEach((s) => {
      s.addEventListener("click", (o) => {
        o.preventDefault(), v(s.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), v((r == null ? void 0 : r.value) ?? "0");
    const i = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((S = i == null ? void 0 : i.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), l = t.querySelector("input[name='moraleDice']"), d = t.querySelectorAll(".roll-sheet-morale-d8"), p = (s) => {
      let o = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      o = Math.min(o, a), l && (l.value = String(o)), d.forEach((f, h) => {
        f.classList.toggle("selected", h < o), f.style.pointerEvents = h < a ? "" : "none", f.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (o) => {
        if (o.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > a) return;
        const f = s.dataset.moraleValue ?? "0";
        p(f), e._updateFormulaPreview(t);
      });
    }), p((l == null ? void 0 : l.value) ?? "0");
    const y = t.querySelector("input[name='constantBonus']");
    y && y.addEventListener("input", () => e._updateFormulaPreview(t)), y && y.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (s) => {
      var o, f, h, _;
      if ((f = (o = s.target) == null ? void 0 : o.closest) != null && f.call(o, ".roll-sheet-close")) {
        s.preventDefault(), e.close();
        return;
      }
      (_ = (h = s.target) == null ? void 0 : h.closest) != null && _.call(h, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var y, g, c, m, M, S;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((y = e.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, r = parseInt(((g = e.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, u = parseInt(((c = e.querySelector("input[name='constantBonus']")) == null ? void 0 : c.value) ?? "0", 10) || 0, v = parseInt(((m = e.dataset) == null ? void 0 : m.baseMod) ?? "0", 10) || 0, i = parseInt(((M = e.dataset) == null ? void 0 : M.injuryMod) ?? "0", 10) || 0, a = parseInt(((S = e.dataset) == null ? void 0 : S.injuryPenalty) ?? "0", 10) || 0, l = v + i + a + u, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", d[0].appendChild(p), t !== 0) {
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
    var l, d, p, y;
    const n = this.actor, t = Math.max(0, Number(((d = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : d.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", i = ["3d6", r, u, v].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((y = (p = game.user) == null ? void 0 : p.targets) != null && y.size)) {
      const c = Array.from(game.user.targets)[0], m = (c == null ? void 0 : c.actor) ?? null;
      a = (m == null ? void 0 : m.name) || (c == null ? void 0 : c.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: i,
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
    var _, P, N, k, F, w, C;
    const n = this.actor;
    if (!n) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), u = e.querySelector("[name='constantBonus']"), v = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), i = Math.max(0, Number(((P = (_ = n.system) == null ? void 0 : _.resources) == null ? void 0 : P.morale) ?? 0) || 0), a = Math.min(v, i), l = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), d = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, p = this._baseModifier, y = this._injuryModifier, g = this._injuryPenalty || 0, c = p + y + g + d, m = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""
    ].filter(Boolean).join(" "), M = new Roll(m);
    await M.evaluate({ async: !0 });
    const { resultType: S, label: s } = Y(M), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let f = this._label;
    const h = { resultType: S, critLabel: s };
    if (this._isWeaponAttack && ((k = (N = game.user) == null ? void 0 : N.targets) != null && k.size)) {
      const B = Array.from(game.user.targets)[0], I = (B == null ? void 0 : B.actor) ?? null;
      if (I) {
        const R = ((F = I.system) == null ? void 0 : F.combat) ?? {}, W = Number(R.defense ?? 0) || 0, z = Number(R.defenseBonus ?? 0) || 0, H = Number(R.givenProtection ?? 0) || 0;
        let V = 0;
        if (I.type === "Karakter") {
          const L = (((w = I.items) == null ? void 0 : w.contents) ?? []).filter(
            (D) => {
              var q;
              return D.type === "Pancel" && ((q = D.system) == null ? void 0 : q.equipped) === !0;
            }
          );
          for (const D of L) {
            const q = String(((C = D.system) == null ? void 0 : C.protectionBonus) ?? "").trim().replace(",", "."), O = Number(q);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = W + z + H + V, K = (Number(M.total ?? 0) || 0) >= $, U = I.name ?? B.name ?? "Célpont";
        let j = null, x = null;
        if (K && I.type === "Karakter")
          try {
            const L = new Roll("1d8");
            await L.evaluate({ async: !0 }), j = Number(L.total ?? 0) || 1, j === 1 ? x = "Fej" : j >= 2 && j <= 4 ? x = "Törzs" : j === 5 || j === 6 ? x = "Karok" : x = "Lábak";
          } catch (L) {
            console.warn("VOTV hit location roll failed:", L);
          }
        h.weaponAttack = !0, h.weapon = {
          actorId: n.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: I.id ?? null,
          targetName: U,
          defense: $,
          isHit: K,
          hitLocationRoll: j ?? null,
          hitLocationName: x ?? null
        };
      }
    }
    if (await M.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: f,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), a > 0) {
      const E = Math.max(0, i - a);
      await n.update({ "system.resources.morale": E });
    }
    this.close();
  }
}
function Q(b, e, n) {
  var i, a;
  if (!b) return;
  const t = Number(((a = (i = b.system) == null ? void 0 : i.skills) == null ? void 0 : a[e]) ?? 0) || 0, r = A.BODY_PART_BY_SKILL[e] ? A._getSkillHealthStatusStatic(b, e) : void 0;
  let u = 0;
  r === 1 ? u = -6 : r === 2 && (u = -3), new T({
    actor: b,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: u
  }).render(!0);
}
function X(b, e) {
  var f, h, _, P, N, k, F;
  if (!b || !e) return;
  const n = b, r = (((f = n.system) == null ? void 0 : f.weapons) ?? {})[e] ?? {}, u = ((h = n.system) == null ? void 0 : h.skills) ?? {}, v = ((P = (_ = n.items) == null ? void 0 : _.filter) == null ? void 0 : P.call(_, (w) => w.type === "Fegyver")) ?? [], i = (r.itemId ?? "").trim(), a = i ? v.find((w) => w.id === i) ?? null : null, l = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", d = Number(r.bonus || ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) || 0) || 0, y = (((k = a == null ? void 0 : a.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", g = Number(u[y] || 0) || 0, c = d + g;
  let m = 0;
  if (b.type === "Karakter") {
    const w = A._getSkillHealthStatusStatic(b, y);
    w === 1 ? m = -6 : w === 2 && (m = -3);
  }
  const M = (((F = a == null ? void 0 : a.system) == null ? void 0 : F.damage) ?? "").trim(), S = (r.damage ?? "").trim(), s = M || S || "";
  new T({
    actor: b,
    skillKey: y,
    label: l,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: m,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? i,
    weaponDamageFormula: s
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DOq3Ymaa.mjs.map
