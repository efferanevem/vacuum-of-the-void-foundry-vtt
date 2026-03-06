import { V as A, c as Y } from "./vacuum-of-the-void-DPiChfak.mjs";
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
      injuryModifier: g,
      injuryPenalty: i,
      isWeaponAttack: a,
      weaponSlotKey: l,
      weaponItemId: d,
      weaponDamageFormula: h
    } = e;
    super(e), this._actor = n, this._skillKey = t, this._label = r ?? t, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(i) || 0, this._isWeaponAttack = !!a, this._weaponSlotKey = l || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof h == "string" ? h.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var M, c, m, b, _;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((c = (M = this.element) == null ? void 0 : M.querySelector) == null ? void 0 : c.call(M, "form.votv.roll-sheet")) ?? ((b = (m = this.element) == null ? void 0 : m.matches) != null && b.call(m, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), u = t.querySelectorAll(".roll-sheet-advantage-d6"), g = (s) => {
      const o = Math.min(3, Math.max(-3, parseInt(s, 10) || 0));
      r && (r.value = String(o)), u.forEach((f) => {
        const p = parseInt(f.dataset.advantageValue ?? "0", 10);
        f.classList.toggle("selected", p === o);
      });
    };
    u.forEach((s) => {
      s.addEventListener("click", (o) => {
        o.preventDefault(), g(s.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), g((r == null ? void 0 : r.value) ?? "0");
    const i = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((_ = i == null ? void 0 : i.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), l = t.querySelector("input[name='moraleDice']"), d = t.querySelectorAll(".roll-sheet-morale-d8"), h = (s) => {
      let o = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      o = Math.min(o, a), l && (l.value = String(o)), d.forEach((f, p) => {
        f.classList.toggle("selected", p < o), f.style.pointerEvents = p < a ? "" : "none", f.style.opacity = p < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (o) => {
        if (o.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > a) return;
        const f = s.dataset.moraleValue ?? "0";
        h(f), e._updateFormulaPreview(t);
      });
    }), h((l == null ? void 0 : l.value) ?? "0");
    const y = t.querySelector("input[name='constantBonus']");
    y && y.addEventListener("input", () => e._updateFormulaPreview(t)), y && y.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (s) => {
      var o, f, p, w;
      if ((f = (o = s.target) == null ? void 0 : o.closest) != null && f.call(o, ".roll-sheet-close")) {
        s.preventDefault(), e.close();
        return;
      }
      (w = (p = s.target) == null ? void 0 : p.closest) != null && w.call(p, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var y, M, c, m, b, _;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((y = e.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, r = parseInt(((M = e.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, u = parseInt(((c = e.querySelector("input[name='constantBonus']")) == null ? void 0 : c.value) ?? "0", 10) || 0, g = parseInt(((m = e.dataset) == null ? void 0 : m.baseMod) ?? "0", 10) || 0, i = parseInt(((b = e.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, a = parseInt(((_ = e.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, l = g + i + a + u, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", d[0].appendChild(h), t !== 0) {
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
    var l, d, h, y;
    const n = this.actor, t = Math.max(0, Number(((d = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : d.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", i = ["3d6", r, u, g].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((y = (h = game.user) == null ? void 0 : h.targets) != null && y.size)) {
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
    var w, P, N, k, F, S, C;
    const n = this.actor;
    if (!n) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), u = e.querySelector("[name='constantBonus']"), g = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), i = Math.max(0, Number(((P = (w = n.system) == null ? void 0 : w.resources) == null ? void 0 : P.morale) ?? 0) || 0), a = Math.min(g, i), l = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), d = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, h = this._baseModifier, y = this._injuryModifier, M = this._injuryPenalty || 0, c = h + y + M + d, m = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""
    ].filter(Boolean).join(" "), b = new Roll(m);
    await b.evaluate({ async: !0 });
    const { resultType: _, label: s } = Y(b), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let f = this._label;
    const p = { resultType: _, critLabel: s };
    if (this._isWeaponAttack && ((k = (N = game.user) == null ? void 0 : N.targets) != null && k.size)) {
      const B = Array.from(game.user.targets)[0], I = (B == null ? void 0 : B.actor) ?? null;
      if (I) {
        const R = ((F = I.system) == null ? void 0 : F.combat) ?? {}, W = Number(R.defense ?? 0) || 0, z = Number(R.defenseBonus ?? 0) || 0, H = Number(R.givenProtection ?? 0) || 0;
        let V = 0;
        if (I.type === "Karakter") {
          const L = (((S = I.items) == null ? void 0 : S.contents) ?? []).filter(
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
        const $ = W + z + H + V, K = (Number(b.total ?? 0) || 0) >= $, U = I.name ?? B.name ?? "Célpont";
        let j = null, x = null;
        if (K && I.type === "Karakter")
          try {
            const L = new Roll("1d8");
            await L.evaluate({ async: !0 }), j = Number(L.total ?? 0) || 1, j === 1 ? x = "Fej" : j >= 2 && j <= 4 ? x = "Törzs" : j === 5 || j === 6 ? x = "Karok" : x = "Lábak";
          } catch (L) {
            console.warn("VOTV hit location roll failed:", L);
          }
        p.weaponAttack = !0, p.weapon = {
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
    if (await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
      flavor: f,
      flags: { "vacuum-of-the-void": p },
      rollMode: o
    }), a > 0) {
      const E = Math.max(0, i - a);
      await n.update({ "system.resources.morale": E });
    }
    this.close();
  }
}
function Q(v, e, n) {
  var i, a;
  if (!v) return;
  const t = Number(((a = (i = v.system) == null ? void 0 : i.skills) == null ? void 0 : a[e]) ?? 0) || 0, r = A.BODY_PART_BY_SKILL[e] ? A._getSkillHealthStatusStatic(v, e) : void 0;
  let u = 0;
  r === 1 ? u = -6 : r === 2 && (u = -3), new T({
    actor: v,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: u
  }).render(!0);
}
function X(v, e) {
  var f, p, w, P, N, k, F;
  if (!v || !e) return;
  const n = v.type === "Npc" && v.id ? ((f = game.actors) == null ? void 0 : f.get(v.id)) ?? v : v, r = (((p = n.system) == null ? void 0 : p.weapons) ?? {})[e] ?? {}, u = ((w = n.system) == null ? void 0 : w.skills) ?? {}, g = ((P = n.items) == null ? void 0 : P.filter((S) => S.type === "Fegyver")) ?? [], i = (r.itemId ?? "").trim(), a = i ? g.find((S) => S.id === i) ?? null : null, l = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", d = Number(r.bonus || ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) || 0) || 0, y = (((k = a == null ? void 0 : a.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", M = Number(u[y] || 0) || 0, c = d + M;
  let m = 0;
  if (v.type === "Karakter") {
    const S = A._getSkillHealthStatusStatic(v, y);
    S === 1 ? m = -6 : S === 2 && (m = -3);
  }
  const b = (((F = a == null ? void 0 : a.system) == null ? void 0 : F.damage) ?? "").trim(), _ = (r.damage ?? "").trim(), s = b || _ || "";
  new T({
    actor: v,
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
//# sourceMappingURL=roll-sheet-MQjJJXGA.mjs.map
