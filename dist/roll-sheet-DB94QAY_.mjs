import { V as $, c as oe } from "./vacuum-of-the-void-C_XPoOre.mjs";
class Y extends Application {
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
      skillKey: a,
      label: u,
      baseModifier: f,
      injuryModifier: g,
      injuryPenalty: y,
      isWeaponAttack: s,
      isInitiativeRoll: m,
      weaponSlotKey: h,
      weaponItemId: r,
      weaponDamageFormula: l
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = u ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(y) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!m, this._weaponSlotKey = h || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var v, j, S, M, P;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : j.call(v, "form.votv.roll-sheet")) ?? ((M = (S = this.element) == null ? void 0 : S.matches) != null && M.call(S, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const u = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), f.forEach((i) => {
        const c = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", c === o);
      });
    };
    f.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), g((u == null ? void 0 : u.value) ?? "0");
    const y = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((P = y == null ? void 0 : y.dataset) == null ? void 0 : P.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), h = a.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), m && (m.value = String(o)), h.forEach((i, c) => {
        i.classList.toggle("selected", c < o), i.style.pointerEvents = c < s ? "" : "none", i.style.opacity = c < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const i = n.dataset.moraleValue ?? "0";
        r(i), t._updateFormulaPreview(a);
      });
    }), r((m == null ? void 0 : m.value) ?? "0");
    const l = a.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => t._updateFormulaPreview(a)), l && l.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, i, c, _;
      if ((i = (o = n.target) == null ? void 0 : o.closest) != null && i.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (_ = (c = n.target) == null ? void 0 : c.closest) != null && _.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var v, j, S, M, P, n, o, i, c, _, b, w;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((v = t.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((j = t.querySelector("input[name='moraleDice']")) == null ? void 0 : j.value) ?? "0", 10) || 0, f = parseInt(((S = t.querySelector("input[name='constantBonus']")) == null ? void 0 : S.value) ?? "0", 10) || 0, g = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, y = parseInt(((P = t.dataset) == null ? void 0 : P.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = (c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "diseased") || (w = (b = (_ = this.actor) == null ? void 0 : _.statuses) == null ? void 0 : b.has) != null && w.call(b, "poisoned") ? -1 : 0, h = g + y + s + f + m, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", r[0].appendChild(l), a !== 0) {
      const d = document.createElement("span");
      d.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const p = document.createElement("img");
      p.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", p.alt = a > 0 ? "előny d6" : "hátrány d6", p.className = "roll-sheet-preview-die", d.appendChild(p), r.push(d);
    }
    if (u > 0) {
      const d = document.createElement("span");
      d.textContent = ` + ${u} `;
      const p = document.createElement("img");
      p.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", p.alt = "d8", p.className = "roll-sheet-preview-die", d.appendChild(p), r.push(d);
    }
    if (h !== 0) {
      const d = document.createElement("span");
      d.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, r.push(d);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var j, S, M, P, n, o, i, c, _, b, w, d, p, D;
    const e = this.actor, a = Math.max(0, Number(((S = (j = e == null ? void 0 : e.system) == null ? void 0 : j.resources) == null ? void 0 : S.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", y = ["3d6", u, f, g].filter(Boolean).join(" ") || "3d6";
    let s = "", m = 0;
    const h = [], r = [];
    if (this._isWeaponAttack && ((P = (M = game.user) == null ? void 0 : M.targets) != null && P.size)) {
      const I = Array.from(game.user.targets)[0], V = (I == null ? void 0 : I.actor) ?? null;
      s = (V == null ? void 0 : V.name) || (I == null ? void 0 : I.name) || "", (o = (n = V == null ? void 0 : V.statuses) == null ? void 0 : n.has) != null && o.call(n, "stunned") && (m = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (c = (i = V == null ? void 0 : V.statuses) == null ? void 0 : i.has) != null && c.call(i, "dodge") && r.push(game.i18n.localize("VOTV.StatusDodge"));
    }
    (b = (_ = e == null ? void 0 : e.statuses) == null ? void 0 : _.has) != null && b.call(_, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (d = (w = e == null ? void 0 : e.statuses) == null ? void 0 : w.has) != null && d.call(w, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const l = ((D = (p = e == null ? void 0 : e.statuses) == null ? void 0 : p.has) == null ? void 0 : D.call(p, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    l && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const v = Math.min(3, Math.max(
      -3,
      m + (l ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: y,
      moraleCurrent: a,
      advantageValue: v,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: r.length ? r.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: s
    };
  }
  activateListeners(t) {
    var e;
    (e = super.activateListeners) == null || e.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var a, u, f, g, y, s, m, h, r, l, v, j, S, M, P, n;
    const e = this.actor;
    if (e)
      try {
        const o = t.querySelector("[name='moraleDice']"), i = t.querySelector("[name='advantage']"), c = t.querySelector("[name='constantBonus']"), _ = Math.min(3, Math.max(0, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), b = Math.max(0, Number(((u = (a = e.system) == null ? void 0 : a.resources) == null ? void 0 : u.morale) ?? 0) || 0), w = Math.min(_, b);
        let d = Math.min(3, Math.max(-3, parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0));
        if (this._isWeaponAttack && ((g = (f = game.user) == null ? void 0 : f.targets) != null && g.size)) {
          const x = ((y = Array.from(game.user.targets)[0]) == null ? void 0 : y.actor) ?? null;
          (m = (s = x == null ? void 0 : x.statuses) == null ? void 0 : s.has) != null && m.call(s, "dodge") && (d = Math.max(-3, d - 1));
        }
        const p = parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0, D = this._baseModifier, B = this._injuryModifier, I = this._injuryPenalty || 0, G = ((r = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : r.call(h, "diseased")) || ((v = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : v.call(l, "poisoned")) ? -1 : 0, C = D + B + I + p + G, J = [
          "3d6",
          d > 0 ? `+${d}d6` : d < 0 ? `-${Math.abs(d)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          C !== 0 ? C > 0 ? `+${C}` : `${C}` : ""
        ].filter(Boolean).join(" "), q = new Roll(J);
        await q.evaluate({ async: !0 });
        const { resultType: Q, label: X } = oe(q), Z = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ee = this._label;
        const A = { resultType: Q, critLabel: X };
        if (this._isWeaponAttack && ((S = (j = game.user) == null ? void 0 : j.targets) != null && S.size)) {
          const R = Array.from(game.user.targets)[0], k = (R == null ? void 0 : R.actor) ?? null;
          if (k) {
            const z = ((M = k.system) == null ? void 0 : M.combat) ?? {}, te = Number(z.defense ?? 0) || 0, se = Number(z.defenseBonus ?? 0) || 0, ae = Number(z.givenProtection ?? 0) || 0;
            let K = 0;
            if (k.type === "Karakter") {
              const F = (((P = k.items) == null ? void 0 : P.contents) ?? []).filter(
                (E) => {
                  var O;
                  return E.type === "Pancel" && ((O = E.system) == null ? void 0 : O.equipped) === !0;
                }
              );
              for (const E of F) {
                const O = String(((n = E.system) == null ? void 0 : n.protectionBonus) ?? "").trim().replace(",", "."), U = Number(O);
                Number.isFinite(U) && (K += U);
              }
            }
            const W = te + se + ae + K, H = (Number(q.total ?? 0) || 0) >= W, ne = k.name ?? R.name ?? "Célpont";
            let N = null, T = null;
            if (H && k.type === "Karakter")
              try {
                const F = new Roll("1d8");
                await F.evaluate({ async: !0 }), N = Number(F.total ?? 0) || 1, N === 1 ? T = "Fej" : N >= 2 && N <= 4 ? T = "Törzs" : N === 5 || N === 6 ? T = "Karok" : T = "Lábak";
              } catch (F) {
                console.warn("VOTV hit location roll failed:", F);
              }
            A.weaponAttack = !0, A.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: k.id ?? null,
              targetName: ne,
              defense: W,
              isHit: H,
              hitLocationRoll: N ?? null,
              hitLocationName: T ?? null
            };
          }
        }
        if (await q.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ee,
          flags: { "vacuum-of-the-void": A },
          rollMode: Z
        }), w > 0) {
          const x = Math.max(0, b - w);
          await e.update({ "system.resources.morale": x });
        }
        if (this._isInitiativeRoll)
          try {
            const x = Number(q.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": x });
            const R = e.apps ?? [];
            for (const k of R)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (x) {
            console.warn("VOTV initiative result update:", x);
          }
      } finally {
        this.close();
      }
  }
}
function le(L, t, e) {
  var s, m;
  if (!L) return;
  const a = Number(((m = (s = L.system) == null ? void 0 : s.skills) == null ? void 0 : m[t]) ?? 0) || 0, u = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(L, t) : void 0;
  let f = 0;
  u === 1 ? f = -6 : u === 2 && (f = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new Y({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: g
  }).render(!0);
}
function ue(L, t) {
  var c, _, b, w, d, p, D, B;
  if (!L || !t) return;
  const e = L, u = (((c = e.system) == null ? void 0 : c.weapons) ?? {})[t] ?? {}, f = ((_ = e.system) == null ? void 0 : _.skills) ?? {}, g = ((w = (b = e.items) == null ? void 0 : b.filter) == null ? void 0 : w.call(b, (I) => I.type === "Fegyver")) ?? [], y = (u.itemId ?? "").trim(), s = y ? g.find((I) => I.id === y) ?? null : null, m = ((s == null ? void 0 : s.name) ?? u.name ?? "").trim() || "Fegyver", h = Number(u.bonus || ((d = s == null ? void 0 : s.system) == null ? void 0 : d.bonus) || 0) || 0, r = ((p = s == null ? void 0 : s.system) == null ? void 0 : p.type) || "kinetic", l = (((D = s == null ? void 0 : s.system) == null ? void 0 : D.skillKey) ?? "").trim(), v = l && f[l] !== void 0 ? l : r === "explosive" ? "grenadeUse" : "firearms", j = Number(f[v] || 0) || 0, S = h + j;
  let M = 0;
  if (L.type === "Karakter") {
    const I = $._getSkillHealthStatusStatic(L, v);
    I === 1 ? M = -6 : I === 2 && (M = -3);
  }
  const P = (((B = s == null ? void 0 : s.system) == null ? void 0 : B.damage) ?? "").trim(), n = (u.damage ?? "").trim(), o = P || n || "";
  new Y({
    actor: L,
    skillKey: v,
    label: m,
    baseModifier: S,
    injuryModifier: 0,
    injuryPenalty: M,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? y,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  Y as VoidRollSheet,
  le as openRollSheetForSkill,
  ue as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DB94QAY_.mjs.map
