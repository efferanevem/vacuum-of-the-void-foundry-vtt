import { V as E, c as Y } from "./vacuum-of-the-void-BUqQSiYd.mjs";
class z extends Application {
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
      label: i,
      baseModifier: l,
      injuryModifier: v,
      injuryPenalty: m,
      isWeaponAttack: a,
      isInitiativeRoll: r,
      weaponSlotKey: d,
      weaponItemId: p,
      weaponDamageFormula: c
    } = e;
    super(e), this._actor = s, this._skillKey = t ?? "", this._label = i ?? t ?? "", this._baseModifier = Number(l) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!r, this._weaponSlotKey = d || "", this._weaponItemId = p || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, s = {}) {
    const t = await super.render(e, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var g, u, y, f, w;
    const e = this, s = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((u = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : u.call(g, "form.votv.roll-sheet")) ?? ((f = (y = this.element) == null ? void 0 : y.matches) != null && f.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const i = t.querySelector("input[name='advantage']"), l = t.querySelectorAll(".roll-sheet-advantage-d6"), v = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(o)), l.forEach((b) => {
        const h = parseInt(b.dataset.advantageValue ?? "0", 10);
        b.classList.toggle("selected", h === o);
      });
    };
    l.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), v(n.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), v((i == null ? void 0 : i.value) ?? "0");
    const m = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((w = m == null ? void 0 : m.dataset) == null ? void 0 : w.moraleMax) ?? "3", 10) || 0)), r = t.querySelector("input[name='moraleDice']"), d = t.querySelectorAll(".roll-sheet-morale-d8"), p = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), r && (r.value = String(o)), d.forEach((b, h) => {
        b.classList.toggle("selected", h < o), b.style.pointerEvents = h < a ? "" : "none", b.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const b = n.dataset.moraleValue ?? "0";
        p(b), e._updateFormulaPreview(t);
      });
    }), p((r == null ? void 0 : r.value) ?? "0");
    const c = t.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => e._updateFormulaPreview(t)), c && c.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (n) => {
      var o, b, h, j;
      if ((b = (o = n.target) == null ? void 0 : o.closest) != null && b.call(o, ".roll-sheet-close")) {
        n.preventDefault(), e.close();
        return;
      }
      (j = (h = n.target) == null ? void 0 : h.closest) != null && j.call(h, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var c, g, u, y, f, w;
    const s = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const t = parseInt(((c = e.querySelector("input[name='advantage']")) == null ? void 0 : c.value) ?? "0", 10) || 0, i = parseInt(((g = e.querySelector("input[name='moraleDice']")) == null ? void 0 : g.value) ?? "0", 10) || 0, l = parseInt(((u = e.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, v = parseInt(((y = e.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, m = parseInt(((f = e.dataset) == null ? void 0 : f.injuryMod) ?? "0", 10) || 0, a = parseInt(((w = e.dataset) == null ? void 0 : w.injuryPenalty) ?? "0", 10) || 0, r = v + m + a + l, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", d[0].appendChild(p), t !== 0) {
      const n = document.createElement("span");
      n.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", n.appendChild(o), d.push(n);
    }
    if (i > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${i} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", n.appendChild(o), d.push(n);
    }
    if (r !== 0) {
      const n = document.createElement("span");
      n.textContent = r > 0 ? ` + ${r}` : ` − ${Math.abs(r)}`, d.push(n);
    }
    s.innerHTML = "", s.append(...d);
  }
  getData(e = {}) {
    var r, d, p, c;
    const s = this.actor, t = Math.max(0, Number(((d = (r = s == null ? void 0 : s.system) == null ? void 0 : r.resources) == null ? void 0 : d.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", l = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", i, l, v].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((c = (p = game.user) == null ? void 0 : p.targets) != null && c.size)) {
      const u = Array.from(game.user.targets)[0], y = (u == null ? void 0 : u.actor) ?? null;
      a = (y == null ? void 0 : y.name) || (u == null ? void 0 : u.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
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
    var j, L, k, R, F, x, B;
    const s = this.actor;
    if (!s) return;
    const t = e.querySelector("[name='moraleDice']"), i = e.querySelector("[name='advantage']"), l = e.querySelector("[name='constantBonus']"), v = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), m = Math.max(0, Number(((L = (j = s.system) == null ? void 0 : j.resources) == null ? void 0 : L.morale) ?? 0) || 0), a = Math.min(v, m), r = Math.min(3, Math.max(-3, parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0)), d = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, p = this._baseModifier, c = this._injuryModifier, g = this._injuryPenalty || 0, u = p + c + g + d, y = [
      "3d6",
      r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
      a > 0 ? `+${a}d8` : "",
      u !== 0 ? u > 0 ? `+${u}` : `${u}` : ""
    ].filter(Boolean).join(" "), f = new Roll(y);
    await f.evaluate({ async: !0 });
    const { resultType: w, label: n } = Y(f), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let b = this._label;
    const h = { resultType: w, critLabel: n };
    if (this._isWeaponAttack && ((R = (k = game.user) == null ? void 0 : k.targets) != null && R.size)) {
      const I = Array.from(game.user.targets)[0], S = (I == null ? void 0 : I.actor) ?? null;
      if (S) {
        const C = ((F = S.system) == null ? void 0 : F.combat) ?? {}, T = Number(C.defense ?? 0) || 0, W = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
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
        const $ = T + W + H + V, K = (Number(f.total ?? 0) || 0) >= $, U = S.name ?? I.name ?? "Célpont";
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
    if (await f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: b,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), a > 0) {
      const _ = Math.max(0, m - a);
      await s.update({ "system.resources.morale": _ });
    }
    if (this._isInitiativeRoll) {
      const _ = Number(f.total) ?? 0;
      await s.update({ "system.combat.initiativeResult": _ });
      const I = Object.values(ui.windows).find((S) => S.actor === s || S.document === s);
      I != null && I.render && I.render(!0);
    }
    this.close();
  }
}
function Q(M, e, s) {
  var a, r;
  if (!M) return;
  const t = Number(((r = (a = M.system) == null ? void 0 : a.skills) == null ? void 0 : r[e]) ?? 0) || 0, i = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(M, e) : void 0;
  let l = 0;
  i === 1 ? l = -6 : i === 2 && (l = -3);
  const v = (s || "").trim() === "Kezdeményezés";
  new z({
    actor: M,
    skillKey: e,
    label: s || e,
    baseModifier: t,
    injuryModifier: l,
    isInitiativeRoll: v
  }).render(!0);
}
function X(M, e) {
  var h, j, L, k, R, F, x, B;
  if (!M || !e) return;
  const s = M, i = (((h = s.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, l = ((j = s.system) == null ? void 0 : j.skills) ?? {}, v = ((k = (L = s.items) == null ? void 0 : L.filter) == null ? void 0 : k.call(L, (_) => _.type === "Fegyver")) ?? [], m = (i.itemId ?? "").trim(), a = m ? v.find((_) => _.id === m) ?? null : null, r = ((a == null ? void 0 : a.name) ?? i.name ?? "").trim() || "Fegyver", d = Number(i.bonus || ((R = a == null ? void 0 : a.system) == null ? void 0 : R.bonus) || 0) || 0, p = ((F = a == null ? void 0 : a.system) == null ? void 0 : F.type) || "kinetic", c = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.skillKey) ?? "").trim(), g = c && l[c] !== void 0 ? c : p === "explosive" ? "grenadeUse" : "firearms", u = Number(l[g] || 0) || 0, y = d + u;
  let f = 0;
  if (M.type === "Karakter") {
    const _ = E._getSkillHealthStatusStatic(M, g);
    _ === 1 ? f = -6 : _ === 2 && (f = -3);
  }
  const w = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), n = (i.damage ?? "").trim(), o = w || n || "";
  new z({
    actor: M,
    skillKey: g,
    label: r,
    baseModifier: y,
    injuryModifier: 0,
    injuryPenalty: f,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? m,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  z as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-B_5fPey0.mjs.map
