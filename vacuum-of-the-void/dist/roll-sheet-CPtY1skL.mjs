import { V as E, c as Y } from "./vacuum-of-the-void-DoNY__hL.mjs";
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
      isInitiativeRoll: l,
      weaponSlotKey: m,
      weaponItemId: p,
      weaponDamageFormula: u
    } = e;
    super(e), this._actor = n, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(i) || 0, this._injuryModifier = Number(M) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!l, this._weaponSlotKey = m || "", this._weaponItemId = p || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var f, d, y, v, b;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((d = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : d.call(f, "form.votv.roll-sheet")) ?? ((v = (y = this.element) == null ? void 0 : y.matches) != null && v.call(y, "form.votv.roll-sheet") ? this.element : null);
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
    const c = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = c == null ? void 0 : c.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), l = t.querySelector("input[name='moraleDice']"), m = t.querySelectorAll(".roll-sheet-morale-d8"), p = (s) => {
      let o = Math.min(3, Math.max(0, parseInt(s, 10) || 0));
      o = Math.min(o, a), l && (l.value = String(o)), m.forEach((g, h) => {
        g.classList.toggle("selected", h < o), g.style.pointerEvents = h < a ? "" : "none", g.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((s) => {
      s.addEventListener("click", (o) => {
        if (o.preventDefault(), s.classList.contains("roll-sheet-morale-d8") && parseInt(s.dataset.moraleValue ?? "0", 10) > a) return;
        const g = s.dataset.moraleValue ?? "0";
        p(g), e._updateFormulaPreview(t);
      });
    }), p((l == null ? void 0 : l.value) ?? "0");
    const u = t.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => e._updateFormulaPreview(t)), u && u.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (s) => {
      var o, g, h, w;
      if ((g = (o = s.target) == null ? void 0 : o.closest) != null && g.call(o, ".roll-sheet-close")) {
        s.preventDefault(), e.close();
        return;
      }
      (w = (h = s.target) == null ? void 0 : h.closest) != null && w.call(h, ".roll-sheet-do-roll") && (s.preventDefault(), s.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var u, f, d, y, v, b;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((u = e.querySelector("input[name='advantage']")) == null ? void 0 : u.value) ?? "0", 10) || 0, r = parseInt(((f = e.querySelector("input[name='moraleDice']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((d = e.querySelector("input[name='constantBonus']")) == null ? void 0 : d.value) ?? "0", 10) || 0, M = parseInt(((y = e.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, c = parseInt(((v = e.dataset) == null ? void 0 : v.injuryMod) ?? "0", 10) || 0, a = parseInt(((b = e.dataset) == null ? void 0 : b.injuryPenalty) ?? "0", 10) || 0, l = M + c + a + i, m = [];
    m.push(document.createElement("span")), m[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", m[0].appendChild(p), t !== 0) {
      const s = document.createElement("span");
      s.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", s.appendChild(o), m.push(s);
    }
    if (r > 0) {
      const s = document.createElement("span");
      s.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", s.appendChild(o), m.push(s);
    }
    if (l !== 0) {
      const s = document.createElement("span");
      s.textContent = l > 0 ? ` + ${l}` : ` − ${Math.abs(l)}`, m.push(s);
    }
    n.innerHTML = "", n.append(...m);
  }
  getData(e = {}) {
    var l, m, p, u;
    const n = this.actor, t = Math.max(0, Number(((m = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : m.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", i = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", M = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", r, i, M].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((u = (p = game.user) == null ? void 0 : p.targets) != null && u.size)) {
      const d = Array.from(game.user.targets)[0], y = (d == null ? void 0 : d.actor) ?? null;
      a = (y == null ? void 0 : y.name) || (d == null ? void 0 : d.name) || "";
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
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), i = e.querySelector("[name='constantBonus']"), M = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((I = (w = n.system) == null ? void 0 : w.resources) == null ? void 0 : I.morale) ?? 0) || 0), a = Math.min(M, c), l = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), m = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, p = this._baseModifier, u = this._injuryModifier, f = this._injuryPenalty || 0, d = p + u + f + m, y = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""
    ].filter(Boolean).join(" "), v = new Roll(y);
    await v.evaluate({ async: !0 });
    const { resultType: b, label: s } = Y(v), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let g = this._label;
    const h = { resultType: b, critLabel: s };
    if (this._isWeaponAttack && ((N = (k = game.user) == null ? void 0 : k.targets) != null && N.size)) {
      const R = Array.from(game.user.targets)[0], j = (R == null ? void 0 : R.actor) ?? null;
      if (j) {
        const C = ((F = j.system) == null ? void 0 : F.combat) ?? {}, W = Number(C.defense ?? 0) || 0, z = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
        let V = 0;
        if (j.type === "Karakter") {
          const P = (((x = j.items) == null ? void 0 : x.contents) ?? []).filter(
            (q) => {
              var A;
              return q.type === "Pancel" && ((A = q.system) == null ? void 0 : A.equipped) === !0;
            }
          );
          for (const q of P) {
            const A = String(((B = q.system) == null ? void 0 : B.protectionBonus) ?? "").trim().replace(",", "."), O = Number(A);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = W + z + H + V, K = (Number(v.total ?? 0) || 0) >= $, U = j.name ?? R.name ?? "Célpont";
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
function Q(_, e, n) {
  var c, a;
  if (!_) return;
  const t = Number(((a = (c = _.system) == null ? void 0 : c.skills) == null ? void 0 : a[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(_, e) : void 0;
  let i = 0;
  r === 1 ? i = -6 : r === 2 && (i = -3), new T({
    actor: _,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: i
  }).render(!0);
}
function X(_, e) {
  var h, w, I, k, N, F, x, B;
  if (!_ || !e) return;
  const n = _, r = (((h = n.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, i = ((w = n.system) == null ? void 0 : w.skills) ?? {}, M = ((k = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : k.call(I, (S) => S.type === "Fegyver")) ?? [], c = (r.itemId ?? "").trim(), a = c ? M.find((S) => S.id === c) ?? null : null, l = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", m = Number(r.bonus || ((N = a == null ? void 0 : a.system) == null ? void 0 : N.bonus) || 0) || 0, p = ((F = a == null ? void 0 : a.system) == null ? void 0 : F.type) || "kinetic", u = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), f = u && i[u] !== void 0 ? u : p === "explosive" ? "grenadeUse" : "firearms", d = Number(i[f] || 0) || 0, y = m + d;
  let v = 0;
  if (_.type === "Karakter") {
    const S = E._getSkillHealthStatusStatic(_, f);
    S === 1 ? v = -6 : S === 2 && (v = -3);
  }
  const b = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), s = (r.damage ?? "").trim(), o = b || s || "";
  new T({
    actor: _,
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
//# sourceMappingURL=roll-sheet-CPtY1skL.mjs.map
