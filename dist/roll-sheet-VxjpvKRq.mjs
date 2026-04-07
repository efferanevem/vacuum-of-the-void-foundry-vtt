import { V as $, c as ae } from "./vacuum-of-the-void-B0egtDJx.mjs";
class U extends Application {
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
      label: l,
      baseModifier: m,
      injuryModifier: S,
      injuryPenalty: h,
      isWeaponAttack: a,
      isInitiativeRoll: u,
      weaponSlotKey: y,
      weaponItemId: c,
      weaponDamageFormula: d
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = l ?? s ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!u, this._weaponSlotKey = y || "", this._weaponItemId = c || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var f, j, _, p, b;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : j.call(f, "form.votv.roll-sheet")) ?? ((p = (_ = this.element) == null ? void 0 : _.matches) != null && p.call(_, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const l = s.querySelector("input[name='advantage']"), m = s.querySelectorAll(".roll-sheet-advantage-d6"), S = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      l && (l.value = String(o)), m.forEach((i) => {
        const r = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", r === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), S(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), S((l == null ? void 0 : l.value) ?? "0");
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = h == null ? void 0 : h.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), u = s.querySelector("input[name='moraleDice']"), y = s.querySelectorAll(".roll-sheet-morale-d8"), c = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), u && (u.value = String(o)), y.forEach((i, r) => {
        i.classList.toggle("selected", r < o), i.style.pointerEvents = r < a ? "" : "none", i.style.opacity = r < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const i = n.dataset.moraleValue ?? "0";
        c(i), t._updateFormulaPreview(s);
      });
    }), c((u == null ? void 0 : u.value) ?? "0");
    const d = s.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(s)), d && d.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, i, r, g;
      if ((i = (o = n.target) == null ? void 0 : o.closest) != null && i.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (g = (r = n.target) == null ? void 0 : r.closest) != null && g.call(r, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var f, j, _, p, b, n, o, i, r, g, v, w;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, l = parseInt(((j = t.querySelector("input[name='moraleDice']")) == null ? void 0 : j.value) ?? "0", 10) || 0, m = parseInt(((_ = t.querySelector("input[name='constantBonus']")) == null ? void 0 : _.value) ?? "0", 10) || 0, S = parseInt(((p = t.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, h = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, u = (r = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && r.call(i, "diseased") || (w = (v = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : v.has) != null && w.call(v, "poisoned") ? -1 : 0, y = S + h + a + m + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", c[0].appendChild(d), s !== 0) {
      const M = document.createElement("span");
      M.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const I = document.createElement("img");
      I.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", I.alt = s > 0 ? "előny d6" : "hátrány d6", I.className = "roll-sheet-preview-die", M.appendChild(I), c.push(M);
    }
    if (l > 0) {
      const M = document.createElement("span");
      M.textContent = ` + ${l} `;
      const I = document.createElement("img");
      I.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", I.alt = "d8", I.className = "roll-sheet-preview-die", M.appendChild(I), c.push(M);
    }
    if (y !== 0) {
      const M = document.createElement("span");
      M.textContent = y > 0 ? ` + ${y}` : ` − ${Math.abs(y)}`, c.push(M);
    }
    e.innerHTML = "", e.append(...c);
  }
  getData(t = {}) {
    var d, f, j, _, p, b, n, o, i, r;
    const e = this.actor, s = Math.max(0, Number(((f = (d = e == null ? void 0 : e.system) == null ? void 0 : d.resources) == null ? void 0 : f.morale) ?? 0) || 0), l = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", l, m, S].filter(Boolean).join(" ") || "3d6";
    let a = "", u = 0;
    const y = [], c = [];
    if (this._isWeaponAttack && ((_ = (j = game.user) == null ? void 0 : j.targets) != null && _.size)) {
      const v = Array.from(game.user.targets)[0], w = (v == null ? void 0 : v.actor) ?? null;
      a = (w == null ? void 0 : w.name) || (v == null ? void 0 : v.name) || "", (b = (p = w == null ? void 0 : w.statuses) == null ? void 0 : p.has) != null && b.call(p, "stunned") && (u = 1, y.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return (o = (n = e == null ? void 0 : e.statuses) == null ? void 0 : n.has) != null && o.call(n, "diseased") && c.push(game.i18n.localize("VOTV.StatusDiseased")), (r = (i = e == null ? void 0 : e.statuses) == null ? void 0 : i.has) != null && r.call(i, "poisoned") && c.push(game.i18n.localize("VOTV.StatusPoisoned")), {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: u,
      advantageSourcesText: y.length ? y.join(", ") : "",
      disadvantageSourcesText: c.length ? c.join(", ") : "",
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
    var s, l, m, S, h, a, u, y, c, d, f, j, _;
    const e = this.actor;
    if (e)
      try {
        const p = t.querySelector("[name='moraleDice']"), b = t.querySelector("[name='advantage']"), n = t.querySelector("[name='constantBonus']"), o = Math.min(3, Math.max(0, parseInt((p == null ? void 0 : p.value) ?? "0", 10) || 0)), i = Math.max(0, Number(((l = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : l.morale) ?? 0) || 0), r = Math.min(o, i);
        let g = Math.min(3, Math.max(-3, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0));
        ((S = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : S.call(m, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (g = Math.max(-3, g - 1));
        const w = parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0, M = this._baseModifier, I = this._injuryModifier, B = this._injuryPenalty || 0, k = ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "diseased")) || ((y = (u = e.statuses) == null ? void 0 : u.has) == null ? void 0 : y.call(u, "poisoned")) ? -1 : 0, q = M + I + B + w + k, Y = [
          "3d6",
          g > 0 ? `+${g}d6` : g < 0 ? `-${Math.abs(g)}d6` : "",
          r > 0 ? `+${r}d8` : "",
          q !== 0 ? q > 0 ? `+${q}` : `${q}` : ""
        ].filter(Boolean).join(" "), V = new Roll(Y);
        await V.evaluate({ async: !0 });
        const { resultType: G, label: J } = ae(V), Q = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let X = this._label;
        const T = { resultType: G, critLabel: J };
        if (this._isWeaponAttack && ((d = (c = game.user) == null ? void 0 : c.targets) != null && d.size)) {
          const N = Array.from(game.user.targets)[0], P = (N == null ? void 0 : N.actor) ?? null;
          if (P) {
            const O = ((f = P.system) == null ? void 0 : f.combat) ?? {}, Z = Number(O.defense ?? 0) || 0, ee = Number(O.defenseBonus ?? 0) || 0, te = Number(O.givenProtection ?? 0) || 0;
            let K = 0;
            if (P.type === "Karakter") {
              const R = (((j = P.items) == null ? void 0 : j.contents) ?? []).filter(
                (C) => {
                  var E;
                  return C.type === "Pancel" && ((E = C.system) == null ? void 0 : E.equipped) === !0;
                }
              );
              for (const C of R) {
                const E = String(((_ = C.system) == null ? void 0 : _.protectionBonus) ?? "").trim().replace(",", "."), H = Number(E);
                Number.isFinite(H) && (K += H);
              }
            }
            const z = Z + ee + te + K, W = (Number(V.total ?? 0) || 0) >= z, se = P.name ?? N.name ?? "Célpont";
            let x = null, F = null;
            if (W && P.type === "Karakter")
              try {
                const R = new Roll("1d8");
                await R.evaluate({ async: !0 }), x = Number(R.total ?? 0) || 1, x === 1 ? F = "Fej" : x >= 2 && x <= 4 ? F = "Törzs" : x === 5 || x === 6 ? F = "Karok" : F = "Lábak";
              } catch (R) {
                console.warn("VOTV hit location roll failed:", R);
              }
            T.weaponAttack = !0, T.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: P.id ?? null,
              targetName: se,
              defense: z,
              isHit: W,
              hitLocationRoll: x ?? null,
              hitLocationName: F ?? null
            };
          }
        }
        if (await V.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: X,
          flags: { "vacuum-of-the-void": T },
          rollMode: Q
        }), r > 0) {
          const D = Math.max(0, i - r);
          await e.update({ "system.resources.morale": D });
        }
        if (this._isInitiativeRoll)
          try {
            const D = Number(V.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": D });
            const N = e.apps ?? [];
            for (const P of N)
              typeof (P == null ? void 0 : P.render) == "function" && P.render(!0);
          } catch (D) {
            console.warn("VOTV initiative result update:", D);
          }
      } finally {
        this.close();
      }
  }
}
function ie(L, t, e) {
  var a, u;
  if (!L) return;
  const s = Number(((u = (a = L.system) == null ? void 0 : a.skills) == null ? void 0 : u[t]) ?? 0) || 0, l = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(L, t) : void 0;
  let m = 0;
  l === 1 ? m = -6 : l === 2 && (m = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: m,
    isInitiativeRoll: S
  }).render(!0);
}
function re(L, t) {
  var r, g, v, w, M, I, B, A;
  if (!L || !t) return;
  const e = L, l = (((r = e.system) == null ? void 0 : r.weapons) ?? {})[t] ?? {}, m = ((g = e.system) == null ? void 0 : g.skills) ?? {}, S = ((w = (v = e.items) == null ? void 0 : v.filter) == null ? void 0 : w.call(v, (k) => k.type === "Fegyver")) ?? [], h = (l.itemId ?? "").trim(), a = h ? S.find((k) => k.id === h) ?? null : null, u = ((a == null ? void 0 : a.name) ?? l.name ?? "").trim() || "Fegyver", y = Number(l.bonus || ((M = a == null ? void 0 : a.system) == null ? void 0 : M.bonus) || 0) || 0, c = ((I = a == null ? void 0 : a.system) == null ? void 0 : I.type) || "kinetic", d = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.skillKey) ?? "").trim(), f = d && m[d] !== void 0 ? d : c === "explosive" ? "grenadeUse" : "firearms", j = Number(m[f] || 0) || 0, _ = y + j;
  let p = 0;
  if (L.type === "Karakter") {
    const k = $._getSkillHealthStatusStatic(L, f);
    k === 1 ? p = -6 : k === 2 && (p = -3);
  }
  const b = (((A = a == null ? void 0 : a.system) == null ? void 0 : A.damage) ?? "").trim(), n = (l.damage ?? "").trim(), o = b || n || "";
  new U({
    actor: L,
    skillKey: f,
    label: u,
    baseModifier: _,
    injuryModifier: 0,
    injuryPenalty: p,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? h,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ie as openRollSheetForSkill,
  re as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-VxjpvKRq.mjs.map
