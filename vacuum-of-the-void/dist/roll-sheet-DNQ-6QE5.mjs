import { V as E, c as Y } from "./vacuum-of-the-void-tsMloQPy.mjs";
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
      actor: s,
      skillKey: t,
      label: r,
      baseModifier: l,
      injuryModifier: b,
      injuryPenalty: c,
      isWeaponAttack: a,
      isInitiativeRoll: i,
      weaponSlotKey: m,
      weaponItemId: p,
      weaponDamageFormula: u
    } = e;
    super(e), this._actor = s, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(l) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!i, this._weaponSlotKey = m || "", this._weaponItemId = p || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, s = {}) {
    const t = await super.render(e, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var v, d, f, y, w;
    const e = this, s = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((d = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : d.call(v, "form.votv.roll-sheet")) ?? ((y = (f = this.element) == null ? void 0 : f.matches) != null && y.call(f, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), l = t.querySelectorAll(".roll-sheet-advantage-d6"), b = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), l.forEach((g) => {
        const h = parseInt(g.dataset.advantageValue ?? "0", 10);
        g.classList.toggle("selected", h === o);
      });
    };
    l.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), b(n.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), b((r == null ? void 0 : r.value) ?? "0");
    const c = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((w = c == null ? void 0 : c.dataset) == null ? void 0 : w.moraleMax) ?? "3", 10) || 0)), i = t.querySelector("input[name='moraleDice']"), m = t.querySelectorAll(".roll-sheet-morale-d8"), p = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), i && (i.value = String(o)), m.forEach((g, h) => {
        g.classList.toggle("selected", h < o), g.style.pointerEvents = h < a ? "" : "none", g.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const g = n.dataset.moraleValue ?? "0";
        p(g), e._updateFormulaPreview(t);
      });
    }), p((i == null ? void 0 : i.value) ?? "0");
    const u = t.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => e._updateFormulaPreview(t)), u && u.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (n) => {
      var o, g, h, j;
      if ((g = (o = n.target) == null ? void 0 : o.closest) != null && g.call(o, ".roll-sheet-close")) {
        n.preventDefault(), e.close();
        return;
      }
      (j = (h = n.target) == null ? void 0 : h.closest) != null && j.call(h, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var u, v, d, f, y, w;
    const s = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const t = parseInt(((u = e.querySelector("input[name='advantage']")) == null ? void 0 : u.value) ?? "0", 10) || 0, r = parseInt(((v = e.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, l = parseInt(((d = e.querySelector("input[name='constantBonus']")) == null ? void 0 : d.value) ?? "0", 10) || 0, b = parseInt(((f = e.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, c = parseInt(((y = e.dataset) == null ? void 0 : y.injuryMod) ?? "0", 10) || 0, a = parseInt(((w = e.dataset) == null ? void 0 : w.injuryPenalty) ?? "0", 10) || 0, i = b + c + a + l, m = [];
    m.push(document.createElement("span")), m[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", m[0].appendChild(p), t !== 0) {
      const n = document.createElement("span");
      n.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", n.appendChild(o), m.push(n);
    }
    if (r > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", n.appendChild(o), m.push(n);
    }
    if (i !== 0) {
      const n = document.createElement("span");
      n.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, m.push(n);
    }
    s.innerHTML = "", s.append(...m);
  }
  getData(e = {}) {
    var i, m, p, u;
    const s = this.actor, t = Math.max(0, Number(((m = (i = s == null ? void 0 : s.system) == null ? void 0 : i.resources) == null ? void 0 : m.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", l = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", r, l, b].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((u = (p = game.user) == null ? void 0 : p.targets) != null && u.size)) {
      const d = Array.from(game.user.targets)[0], f = (d == null ? void 0 : d.actor) ?? null;
      a = (f == null ? void 0 : f.name) || (d == null ? void 0 : d.name) || "";
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
    var s;
    (s = super.activateListeners) == null || s.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var j, L, k, F, R, x, B;
    const s = this.actor;
    if (!s) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), l = e.querySelector("[name='constantBonus']"), b = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), c = Math.max(0, Number(((L = (j = s.system) == null ? void 0 : j.resources) == null ? void 0 : L.morale) ?? 0) || 0), a = Math.min(b, c), i = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), m = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, p = this._baseModifier, u = this._injuryModifier, v = this._injuryPenalty || 0, d = p + u + v + m, f = [
      "3d6",
      i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""
    ].filter(Boolean).join(" "), y = new Roll(f);
    await y.evaluate({ async: !0 });
    const { resultType: w, label: n } = Y(y), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let g = this._label;
    const h = { resultType: w, critLabel: n };
    if (this._isWeaponAttack && ((F = (k = game.user) == null ? void 0 : k.targets) != null && F.size)) {
      const I = Array.from(game.user.targets)[0], S = (I == null ? void 0 : I.actor) ?? null;
      if (S) {
        const C = ((R = S.system) == null ? void 0 : R.combat) ?? {}, W = Number(C.defense ?? 0) || 0, z = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
        let V = 0;
        if (S.type === "Karakter") {
          const N = (((x = S.items) == null ? void 0 : x.contents) ?? []).filter(
            (q) => {
              var A;
              return q.type === "Pancel" && ((A = q.system) == null ? void 0 : A.equipped) === !0;
            }
          );
          for (const q of N) {
            const A = String(((B = q.system) == null ? void 0 : B.protectionBonus) ?? "").trim().replace(",", "."), O = Number(A);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = W + z + H + V, K = (Number(y.total ?? 0) || 0) >= $, U = S.name ?? I.name ?? "Célpont";
        let P = null, D = null;
        if (K && S.type === "Karakter")
          try {
            const N = new Roll("1d8");
            await N.evaluate({ async: !0 }), P = Number(N.total ?? 0) || 1, P === 1 ? D = "Fej" : P >= 2 && P <= 4 ? D = "Törzs" : P === 5 || P === 6 ? D = "Karok" : D = "Lábak";
          } catch (N) {
            console.warn("VOTV hit location roll failed:", N);
          }
        h.weaponAttack = !0, h.weapon = {
          actorId: s.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: S.id ?? null,
          targetName: U,
          defense: $,
          isHit: K,
          hitLocationRoll: P ?? null,
          hitLocationName: D ?? null
        };
      }
    }
    if (await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: g,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), a > 0) {
      const _ = Math.max(0, c - a);
      await s.update({ "system.resources.morale": _ });
    }
    if (this._isInitiativeRoll) {
      const _ = Number(y.total) ?? 0;
      await s.update({ "system.combat.initiativeResult": _ });
      const I = Object.values(ui.windows).find((S) => S.actor === s || S.document === s);
      I != null && I.render && I.render(!0);
    }
    this.close();
  }
}
function Q(M, e, s) {
  var c, a;
  if (!M) return;
  const t = Number(((a = (c = M.system) == null ? void 0 : c.skills) == null ? void 0 : a[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(M, e) : void 0;
  let l = 0;
  r === 1 ? l = -6 : r === 2 && (l = -3), new T({
    actor: M,
    skillKey: e,
    label: s || e,
    baseModifier: t,
    injuryModifier: l
  }).render(!0);
}
function X(M, e) {
  var h, j, L, k, F, R, x, B;
  if (!M || !e) return;
  const s = M, r = (((h = s.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, l = ((j = s.system) == null ? void 0 : j.skills) ?? {}, b = ((k = (L = s.items) == null ? void 0 : L.filter) == null ? void 0 : k.call(L, (_) => _.type === "Fegyver")) ?? [], c = (r.itemId ?? "").trim(), a = c ? b.find((_) => _.id === c) ?? null : null, i = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", m = Number(r.bonus || ((F = a == null ? void 0 : a.system) == null ? void 0 : F.bonus) || 0) || 0, p = ((R = a == null ? void 0 : a.system) == null ? void 0 : R.type) || "kinetic", u = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), v = u && l[u] !== void 0 ? u : p === "explosive" ? "grenadeUse" : "firearms", d = Number(l[v] || 0) || 0, f = m + d;
  let y = 0;
  if (M.type === "Karakter") {
    const _ = E._getSkillHealthStatusStatic(M, v);
    _ === 1 ? y = -6 : _ === 2 && (y = -3);
  }
  const w = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), n = (r.damage ?? "").trim(), o = w || n || "";
  new T({
    actor: M,
    skillKey: v,
    label: i,
    baseModifier: f,
    injuryModifier: 0,
    injuryPenalty: y,
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
//# sourceMappingURL=roll-sheet-DNQ-6QE5.mjs.map
