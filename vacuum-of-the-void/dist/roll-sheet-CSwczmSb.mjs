import { V as O, c as ee } from "./vacuum-of-the-void-Dm9rbD3K.mjs";
class H extends Application {
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
      label: u,
      baseModifier: c,
      injuryModifier: S,
      injuryPenalty: p,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: M,
      weaponItemId: h,
      weaponDamageFormula: i
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(c) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = M || "", this._weaponItemId = h || "", this._weaponDamageFormula = typeof i == "string" ? i.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var f, b, g, v, j;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((b = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : b.call(f, "form.votv.roll-sheet")) ?? ((v = (g = this.element) == null ? void 0 : g.matches) != null && v.call(g, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), c = s.querySelectorAll(".roll-sheet-advantage-d6"), S = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), c.forEach((r) => {
        const d = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", d === o);
      });
    };
    c.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), S(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), S((u == null ? void 0 : u.value) ?? "0");
    const p = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((j = p == null ? void 0 : p.dataset) == null ? void 0 : j.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), M = s.querySelectorAll(".roll-sheet-morale-d8"), h = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), m && (m.value = String(o)), M.forEach((r, d) => {
        r.classList.toggle("selected", d < o), r.style.pointerEvents = d < a ? "" : "none", r.style.opacity = d < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const r = n.dataset.moraleValue ?? "0";
        h(r), t._updateFormulaPreview(s);
      });
    }), h((m == null ? void 0 : m.value) ?? "0");
    const i = s.querySelector("input[name='constantBonus']");
    i && i.addEventListener("input", () => t._updateFormulaPreview(s)), i && i.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, r, d, _;
      if ((r = (o = n.target) == null ? void 0 : o.closest) != null && r.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (_ = (d = n.target) == null ? void 0 : d.closest) != null && _.call(d, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var b, g, v, j, n, o, r, d, _, P, w, D, V, y, I;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((b = t.querySelector("input[name='advantage']")) == null ? void 0 : b.value) ?? "0", 10) || 0;
    ((j = (v = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : v.has) == null ? void 0 : j.call(v, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (s = Math.max(-3, s - 1));
    const c = parseInt(((n = t.querySelector("input[name='moraleDice']")) == null ? void 0 : n.value) ?? "0", 10) || 0, S = parseInt(((o = t.querySelector("input[name='constantBonus']")) == null ? void 0 : o.value) ?? "0", 10) || 0, p = parseInt(((r = t.dataset) == null ? void 0 : r.baseMod) ?? "0", 10) || 0, a = parseInt(((d = t.dataset) == null ? void 0 : d.injuryMod) ?? "0", 10) || 0, m = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, M = (D = (w = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : w.has) != null && D.call(w, "diseased") || (I = (y = (V = this.actor) == null ? void 0 : V.statuses) == null ? void 0 : y.has) != null && I.call(y, "poisoned") ? -1 : 0, h = p + a + m + S + M, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", i[0].appendChild(f), s !== 0) {
      const l = document.createElement("span");
      l.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const L = document.createElement("img");
      L.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", L.alt = s > 0 ? "előny d6" : "hátrány d6", L.className = "roll-sheet-preview-die", l.appendChild(L), i.push(l);
    }
    if (c > 0) {
      const l = document.createElement("span");
      l.textContent = ` + ${c} `;
      const L = document.createElement("img");
      L.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", L.alt = "d8", L.className = "roll-sheet-preview-die", l.appendChild(L), i.push(l);
    }
    if (h !== 0) {
      const l = document.createElement("span");
      l.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, i.push(l);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var b, g, v, j, n, o, r, d, _, P, w, D;
    const e = this.actor, s = Math.max(0, Number(((g = (b = e == null ? void 0 : e.system) == null ? void 0 : b.resources) == null ? void 0 : g.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", u, c, S].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const M = [], h = [];
    if (this._isWeaponAttack && ((j = (v = game.user) == null ? void 0 : v.targets) != null && j.size)) {
      const y = Array.from(game.user.targets)[0], I = (y == null ? void 0 : y.actor) ?? null;
      a = (I == null ? void 0 : I.name) || (y == null ? void 0 : y.name) || "", (o = (n = I == null ? void 0 : I.statuses) == null ? void 0 : n.has) != null && o.call(n, "stunned") && (m = 1, M.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    (d = (r = e == null ? void 0 : e.statuses) == null ? void 0 : r.has) != null && d.call(r, "diseased") && h.push(game.i18n.localize("VOTV.StatusDiseased")), (P = (_ = e == null ? void 0 : e.statuses) == null ? void 0 : _.has) != null && P.call(_, "poisoned") && h.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const i = ((D = (w = e == null ? void 0 : e.statuses) == null ? void 0 : w.has) == null ? void 0 : D.call(w, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    i && h.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const f = Math.min(3, Math.max(-3, m + (i ? -1 : 0)));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: s,
      advantageValue: f,
      advantageSourcesText: M.length ? M.join(", ") : "",
      disadvantageSourcesText: h.length ? h.join(", ") : "",
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
    var s, u, c, S, p, a, m, M, h, i, f;
    const e = this.actor;
    if (e)
      try {
        const b = t.querySelector("[name='moraleDice']"), g = t.querySelector("[name='advantage']"), v = t.querySelector("[name='constantBonus']"), j = Math.min(3, Math.max(0, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0)), n = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), o = Math.min(j, n), r = Math.min(3, Math.max(-3, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), d = parseInt((v == null ? void 0 : v.value) ?? "0", 10) || 0, _ = this._baseModifier, P = this._injuryModifier, w = this._injuryPenalty || 0, V = ((S = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : S.call(c, "diseased")) || ((a = (p = e.statuses) == null ? void 0 : p.has) == null ? void 0 : a.call(p, "poisoned")) ? -1 : 0, y = _ + P + w + d + V, I = [
          "3d6",
          r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
          o > 0 ? `+${o}d8` : "",
          y !== 0 ? y > 0 ? `+${y}` : `${y}` : ""
        ].filter(Boolean).join(" "), l = new Roll(I);
        await l.evaluate({ async: !0 });
        const { resultType: L, label: U } = ee(l), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const T = { resultType: L, critLabel: U };
        if (this._isWeaponAttack && ((M = (m = game.user) == null ? void 0 : m.targets) != null && M.size)) {
          const F = Array.from(game.user.targets)[0], k = (F == null ? void 0 : F.actor) ?? null;
          if (k) {
            const A = ((h = k.system) == null ? void 0 : h.combat) ?? {}, J = Number(A.defense ?? 0) || 0, Q = Number(A.defenseBonus ?? 0) || 0, X = Number(A.givenProtection ?? 0) || 0;
            let K = 0;
            if (k.type === "Karakter") {
              const B = (((i = k.items) == null ? void 0 : i.contents) ?? []).filter(
                (C) => {
                  var E;
                  return C.type === "Pancel" && ((E = C.system) == null ? void 0 : E.equipped) === !0;
                }
              );
              for (const C of B) {
                const E = String(((f = C.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), W = Number(E);
                Number.isFinite(W) && (K += W);
              }
            }
            const $ = J + Q + X + K, z = (Number(l.total ?? 0) || 0) >= $, Z = k.name ?? F.name ?? "Célpont";
            let N = null, q = null;
            if (z && k.type === "Karakter")
              try {
                const B = new Roll("1d8");
                await B.evaluate({ async: !0 }), N = Number(B.total ?? 0) || 1, N === 1 ? q = "Fej" : N >= 2 && N <= 4 ? q = "Törzs" : N === 5 || N === 6 ? q = "Karok" : q = "Lábak";
              } catch (B) {
                console.warn("VOTV hit location roll failed:", B);
              }
            T.weaponAttack = !0, T.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: k.id ?? null,
              targetName: Z,
              defense: $,
              isHit: z,
              hitLocationRoll: N ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await l.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: G,
          flags: { "vacuum-of-the-void": T },
          rollMode: Y
        }), o > 0) {
          const R = Math.max(0, n - o);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(l.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const F = e.apps ?? [];
            for (const k of F)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ae(x, t, e) {
  var a, m;
  if (!x) return;
  const s = Number(((m = (a = x.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, u = O.BODY_PART_BY_SKILL[t] ? O._getSkillHealthStatusStatic(x, t) : void 0;
  let c = 0;
  u === 1 ? c = -6 : u === 2 && (c = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new H({
    actor: x,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: c,
    isInitiativeRoll: S
  }).render(!0);
}
function ne(x, t) {
  var d, _, P, w, D, V, y, I;
  if (!x || !t) return;
  const e = x, u = (((d = e.system) == null ? void 0 : d.weapons) ?? {})[t] ?? {}, c = ((_ = e.system) == null ? void 0 : _.skills) ?? {}, S = ((w = (P = e.items) == null ? void 0 : P.filter) == null ? void 0 : w.call(P, (l) => l.type === "Fegyver")) ?? [], p = (u.itemId ?? "").trim(), a = p ? S.find((l) => l.id === p) ?? null : null, m = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", M = Number(u.bonus || ((D = a == null ? void 0 : a.system) == null ? void 0 : D.bonus) || 0) || 0, h = ((V = a == null ? void 0 : a.system) == null ? void 0 : V.type) || "kinetic", i = (((y = a == null ? void 0 : a.system) == null ? void 0 : y.skillKey) ?? "").trim(), f = i && c[i] !== void 0 ? i : h === "explosive" ? "grenadeUse" : "firearms", b = Number(c[f] || 0) || 0, g = M + b;
  let v = 0;
  if (x.type === "Karakter") {
    const l = O._getSkillHealthStatusStatic(x, f);
    l === 1 ? v = -6 : l === 2 && (v = -3);
  }
  const j = (((I = a == null ? void 0 : a.system) == null ? void 0 : I.damage) ?? "").trim(), n = (u.damage ?? "").trim(), o = j || n || "";
  new H({
    actor: x,
    skillKey: f,
    label: m,
    baseModifier: g,
    injuryModifier: 0,
    injuryPenalty: v,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? p,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  H as VoidRollSheet,
  ae as openRollSheetForSkill,
  ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-CSwczmSb.mjs.map
