import { V as T, c as ee } from "./vacuum-of-the-void-we9zXkPy.mjs";
class W extends Application {
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
      actor: e,
      skillKey: s,
      label: r,
      baseModifier: d,
      injuryModifier: S,
      injuryPenalty: h,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: y,
      weaponItemId: l,
      weaponDamageFormula: u
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = r ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = y || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var v, M, g, p, I;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((M = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : M.call(v, "form.votv.roll-sheet")) ?? ((p = (g = this.element) == null ? void 0 : g.matches) != null && p.call(g, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const r = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), S = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), d.forEach((i) => {
        const c = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", c === o);
      });
    };
    d.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), S(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), S((r == null ? void 0 : r.value) ?? "0");
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((I = h == null ? void 0 : h.dataset) == null ? void 0 : I.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), y = s.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), m && (m.value = String(o)), y.forEach((i, c) => {
        i.classList.toggle("selected", c < o), i.style.pointerEvents = c < a ? "" : "none", i.style.opacity = c < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const i = n.dataset.moraleValue ?? "0";
        l(i), t._updateFormulaPreview(s);
      });
    }), l((m == null ? void 0 : m.value) ?? "0");
    const u = s.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(s)), u && u.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, i, c, N;
      if ((i = (o = n.target) == null ? void 0 : o.closest) != null && i.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (N = (c = n.target) == null ? void 0 : c.closest) != null && N.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var v, M, g, p, I, n, o, i, c, N, f, _;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((v = t.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0, r = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, d = parseInt(((g = t.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, S = parseInt(((p = t.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, h = parseInt(((I = t.dataset) == null ? void 0 : I.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = (c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "diseased") || (_ = (f = (N = this.actor) == null ? void 0 : N.statuses) == null ? void 0 : f.has) != null && _.call(f, "poisoned") ? -1 : 0, y = S + h + a + d + m, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const u = document.createElement("img");
    if (u.src = "systems/vacuum-of-the-void/assets/d6.svg", u.alt = "d6", u.className = "roll-sheet-preview-die", l[0].appendChild(u), s !== 0) {
      const b = document.createElement("span");
      b.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const w = document.createElement("img");
      w.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", w.alt = s > 0 ? "előny d6" : "hátrány d6", w.className = "roll-sheet-preview-die", b.appendChild(w), l.push(b);
    }
    if (r > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${r} `;
      const w = document.createElement("img");
      w.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", w.alt = "d8", w.className = "roll-sheet-preview-die", b.appendChild(w), l.push(b);
    }
    if (y !== 0) {
      const b = document.createElement("span");
      b.textContent = y > 0 ? ` + ${y}` : ` − ${Math.abs(y)}`, l.push(b);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var u, v, M, g, p, I, n, o, i, c;
    const e = this.actor, s = Math.max(0, Number(((v = (u = e == null ? void 0 : e.system) == null ? void 0 : u.resources) == null ? void 0 : v.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, d, S].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const y = [], l = [];
    if (this._isWeaponAttack && ((g = (M = game.user) == null ? void 0 : M.targets) != null && g.size)) {
      const f = Array.from(game.user.targets)[0], _ = (f == null ? void 0 : f.actor) ?? null;
      a = (_ == null ? void 0 : _.name) || (f == null ? void 0 : f.name) || "", (I = (p = _ == null ? void 0 : _.statuses) == null ? void 0 : p.has) != null && I.call(p, "stunned") && (m = 1, y.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return (o = (n = e == null ? void 0 : e.statuses) == null ? void 0 : n.has) != null && o.call(n, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (c = (i = e == null ? void 0 : e.statuses) == null ? void 0 : i.has) != null && c.call(i, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned")), {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: m,
      advantageSourcesText: y.length ? y.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: a
    };
  }
  activateListeners(t) {
    var e;
    (e = super.activateListeners) == null || e.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var s, r, d, S, h, a, m, y, l, u, v;
    const e = this.actor;
    if (e)
      try {
        const M = t.querySelector("[name='moraleDice']"), g = t.querySelector("[name='advantage']"), p = t.querySelector("[name='constantBonus']"), I = Math.min(3, Math.max(0, parseInt((M == null ? void 0 : M.value) ?? "0", 10) || 0)), n = Math.max(0, Number(((r = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : r.morale) ?? 0) || 0), o = Math.min(I, n), i = Math.min(3, Math.max(-3, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), c = parseInt((p == null ? void 0 : p.value) ?? "0", 10) || 0, N = this._baseModifier, f = this._injuryModifier, _ = this._injuryPenalty || 0, w = ((S = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : S.call(d, "diseased")) || ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "poisoned")) ? -1 : 0, k = N + f + _ + c + w, B = [
          "3d6",
          i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
          o > 0 ? `+${o}d8` : "",
          k !== 0 ? k > 0 ? `+${k}` : `${k}` : ""
        ].filter(Boolean).join(" "), j = new Roll(B);
        await j.evaluate({ async: !0 });
        const { resultType: H, label: U } = ee(j), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const E = { resultType: H, critLabel: U };
        if (this._isWeaponAttack && ((y = (m = game.user) == null ? void 0 : m.targets) != null && y.size)) {
          const D = Array.from(game.user.targets)[0], P = (D == null ? void 0 : D.actor) ?? null;
          if (P) {
            const A = ((l = P.system) == null ? void 0 : l.combat) ?? {}, J = Number(A.defense ?? 0) || 0, Q = Number(A.defenseBonus ?? 0) || 0, X = Number(A.givenProtection ?? 0) || 0;
            let O = 0;
            if (P.type === "Karakter") {
              const F = (((u = P.items) == null ? void 0 : u.contents) ?? []).filter(
                (q) => {
                  var C;
                  return q.type === "Pancel" && ((C = q.system) == null ? void 0 : C.equipped) === !0;
                }
              );
              for (const q of F) {
                const C = String(((v = q.system) == null ? void 0 : v.protectionBonus) ?? "").trim().replace(",", "."), K = Number(C);
                Number.isFinite(K) && (O += K);
              }
            }
            const $ = J + Q + X + O, z = (Number(j.total ?? 0) || 0) >= $, Z = P.name ?? D.name ?? "Célpont";
            let R = null, x = null;
            if (z && P.type === "Karakter")
              try {
                const F = new Roll("1d8");
                await F.evaluate({ async: !0 }), R = Number(F.total ?? 0) || 1, R === 1 ? x = "Fej" : R >= 2 && R <= 4 ? x = "Törzs" : R === 5 || R === 6 ? x = "Karok" : x = "Lábak";
              } catch (F) {
                console.warn("VOTV hit location roll failed:", F);
              }
            E.weaponAttack = !0, E.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: P.id ?? null,
              targetName: Z,
              defense: $,
              isHit: z,
              hitLocationRoll: R ?? null,
              hitLocationName: x ?? null
            };
          }
        }
        if (await j.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: G,
          flags: { "vacuum-of-the-void": E },
          rollMode: Y
        }), o > 0) {
          const V = Math.max(0, n - o);
          await e.update({ "system.resources.morale": V });
        }
        if (this._isInitiativeRoll)
          try {
            const V = Number(j.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": V });
            const D = e.apps ?? [];
            for (const P of D)
              typeof (P == null ? void 0 : P.render) == "function" && P.render(!0);
          } catch (V) {
            console.warn("VOTV initiative result update:", V);
          }
      } finally {
        this.close();
      }
  }
}
function ae(L, t, e) {
  var a, m;
  if (!L) return;
  const s = Number(((m = (a = L.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, r = T.BODY_PART_BY_SKILL[t] ? T._getSkillHealthStatusStatic(L, t) : void 0;
  let d = 0;
  r === 1 ? d = -6 : r === 2 && (d = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new W({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: S
  }).render(!0);
}
function ne(L, t) {
  var c, N, f, _, b, w, k, B;
  if (!L || !t) return;
  const e = L, r = (((c = e.system) == null ? void 0 : c.weapons) ?? {})[t] ?? {}, d = ((N = e.system) == null ? void 0 : N.skills) ?? {}, S = ((_ = (f = e.items) == null ? void 0 : f.filter) == null ? void 0 : _.call(f, (j) => j.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), a = h ? S.find((j) => j.id === h) ?? null : null, m = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", y = Number(r.bonus || ((b = a == null ? void 0 : a.system) == null ? void 0 : b.bonus) || 0) || 0, l = ((w = a == null ? void 0 : a.system) == null ? void 0 : w.type) || "kinetic", u = (((k = a == null ? void 0 : a.system) == null ? void 0 : k.skillKey) ?? "").trim(), v = u && d[u] !== void 0 ? u : l === "explosive" ? "grenadeUse" : "firearms", M = Number(d[v] || 0) || 0, g = y + M;
  let p = 0;
  if (L.type === "Karakter") {
    const j = T._getSkillHealthStatusStatic(L, v);
    j === 1 ? p = -6 : j === 2 && (p = -3);
  }
  const I = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), n = (r.damage ?? "").trim(), o = I || n || "";
  new W({
    actor: L,
    skillKey: v,
    label: m,
    baseModifier: g,
    injuryModifier: 0,
    injuryPenalty: p,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? h,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  W as VoidRollSheet,
  ae as openRollSheetForSkill,
  ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-C2fKGw7O.mjs.map
