import { V as A, c as ee } from "./vacuum-of-the-void-B7_a5Ylk.mjs";
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
      weaponSlotKey: p,
      weaponItemId: l,
      weaponDamageFormula: u
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = r ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = p || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var f, b, v, g, j;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((b = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : b.call(f, "form.votv.roll-sheet")) ?? ((g = (v = this.element) == null ? void 0 : v.matches) != null && g.call(v, "form.votv.roll-sheet") ? this.element : null);
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
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((j = h == null ? void 0 : h.dataset) == null ? void 0 : j.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), p = s.querySelectorAll(".roll-sheet-morale-d8"), l = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), m && (m.value = String(o)), p.forEach((i, c) => {
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
      var o, i, c, M;
      if ((i = (o = n.target) == null ? void 0 : o.closest) != null && i.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (M = (c = n.target) == null ? void 0 : c.closest) != null && M.call(c, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var f, b, v, g, j, n, o, i, c, M, w, P;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, r = parseInt(((b = t.querySelector("input[name='moraleDice']")) == null ? void 0 : b.value) ?? "0", 10) || 0, d = parseInt(((v = t.querySelector("input[name='constantBonus']")) == null ? void 0 : v.value) ?? "0", 10) || 0, S = parseInt(((g = t.dataset) == null ? void 0 : g.baseMod) ?? "0", 10) || 0, h = parseInt(((j = t.dataset) == null ? void 0 : j.injuryMod) ?? "0", 10) || 0, a = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = (c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "diseased") || (P = (w = (M = this.actor) == null ? void 0 : M.statuses) == null ? void 0 : w.has) != null && P.call(w, "poisoned") ? -1 : 0, p = S + h + a + d + m, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const u = document.createElement("img");
    if (u.src = "systems/vacuum-of-the-void/assets/d6.svg", u.alt = "d6", u.className = "roll-sheet-preview-die", l[0].appendChild(u), s !== 0) {
      const y = document.createElement("span");
      y.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const _ = document.createElement("img");
      _.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", _.alt = s > 0 ? "előny d6" : "hátrány d6", _.className = "roll-sheet-preview-die", y.appendChild(_), l.push(y);
    }
    if (r > 0) {
      const y = document.createElement("span");
      y.textContent = ` + ${r} `;
      const _ = document.createElement("img");
      _.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", _.alt = "d8", _.className = "roll-sheet-preview-die", y.appendChild(_), l.push(y);
    }
    if (p !== 0) {
      const y = document.createElement("span");
      y.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, l.push(y);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var b, v, g, j, n, o, i, c, M, w, P, y;
    const e = this.actor, s = Math.max(0, Number(((v = (b = e == null ? void 0 : e.system) == null ? void 0 : b.resources) == null ? void 0 : v.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, d, S].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const p = [], l = [];
    if (this._isWeaponAttack && ((j = (g = game.user) == null ? void 0 : g.targets) != null && j.size)) {
      const I = Array.from(game.user.targets)[0], V = (I == null ? void 0 : I.actor) ?? null;
      a = (V == null ? void 0 : V.name) || (I == null ? void 0 : I.name) || "", (o = (n = V == null ? void 0 : V.statuses) == null ? void 0 : n.has) != null && o.call(n, "stunned") && (m = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    (c = (i = e == null ? void 0 : e.statuses) == null ? void 0 : i.has) != null && c.call(i, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (w = (M = e == null ? void 0 : e.statuses) == null ? void 0 : M.has) != null && w.call(M, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const u = ((y = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) == null ? void 0 : y.call(P, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    u && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const f = Math.min(3, Math.max(-3, m + (u ? -1 : 0)));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: f,
      advantageSourcesText: p.length ? p.join(", ") : "",
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
    var s, r, d, S, h, a, m, p, l, u, f;
    const e = this.actor;
    if (e)
      try {
        const b = t.querySelector("[name='moraleDice']"), v = t.querySelector("[name='advantage']"), g = t.querySelector("[name='constantBonus']"), j = Math.min(3, Math.max(0, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0)), n = Math.max(0, Number(((r = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : r.morale) ?? 0) || 0), o = Math.min(j, n), i = Math.min(3, Math.max(-3, parseInt((v == null ? void 0 : v.value) ?? "0", 10) || 0)), c = parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0, M = this._baseModifier, w = this._injuryModifier, P = this._injuryPenalty || 0, _ = ((S = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : S.call(d, "diseased")) || ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "poisoned")) ? -1 : 0, I = M + w + P + c + _, V = [
          "3d6",
          i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
          o > 0 ? `+${o}d8` : "",
          I !== 0 ? I > 0 ? `+${I}` : `${I}` : ""
        ].filter(Boolean).join(" "), L = new Roll(V);
        await L.evaluate({ async: !0 });
        const { resultType: H, label: U } = ee(L), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const E = { resultType: H, critLabel: U };
        if (this._isWeaponAttack && ((p = (m = game.user) == null ? void 0 : m.targets) != null && p.size)) {
          const R = Array.from(game.user.targets)[0], k = (R == null ? void 0 : R.actor) ?? null;
          if (k) {
            const T = ((l = k.system) == null ? void 0 : l.combat) ?? {}, J = Number(T.defense ?? 0) || 0, Q = Number(T.defenseBonus ?? 0) || 0, X = Number(T.givenProtection ?? 0) || 0;
            let O = 0;
            if (k.type === "Karakter") {
              const F = (((u = k.items) == null ? void 0 : u.contents) ?? []).filter(
                (q) => {
                  var C;
                  return q.type === "Pancel" && ((C = q.system) == null ? void 0 : C.equipped) === !0;
                }
              );
              for (const q of F) {
                const C = String(((f = q.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), z = Number(C);
                Number.isFinite(z) && (O += z);
              }
            }
            const $ = J + Q + X + O, K = (Number(L.total ?? 0) || 0) >= $, Z = k.name ?? R.name ?? "Célpont";
            let N = null, B = null;
            if (K && k.type === "Karakter")
              try {
                const F = new Roll("1d8");
                await F.evaluate({ async: !0 }), N = Number(F.total ?? 0) || 1, N === 1 ? B = "Fej" : N >= 2 && N <= 4 ? B = "Törzs" : N === 5 || N === 6 ? B = "Karok" : B = "Lábak";
              } catch (F) {
                console.warn("VOTV hit location roll failed:", F);
              }
            E.weaponAttack = !0, E.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: k.id ?? null,
              targetName: Z,
              defense: $,
              isHit: K,
              hitLocationRoll: N ?? null,
              hitLocationName: B ?? null
            };
          }
        }
        if (await L.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: G,
          flags: { "vacuum-of-the-void": E },
          rollMode: Y
        }), o > 0) {
          const D = Math.max(0, n - o);
          await e.update({ "system.resources.morale": D });
        }
        if (this._isInitiativeRoll)
          try {
            const D = Number(L.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": D });
            const R = e.apps ?? [];
            for (const k of R)
              typeof (k == null ? void 0 : k.render) == "function" && k.render(!0);
          } catch (D) {
            console.warn("VOTV initiative result update:", D);
          }
      } finally {
        this.close();
      }
  }
}
function ae(x, t, e) {
  var a, m;
  if (!x) return;
  const s = Number(((m = (a = x.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, r = A.BODY_PART_BY_SKILL[t] ? A._getSkillHealthStatusStatic(x, t) : void 0;
  let d = 0;
  r === 1 ? d = -6 : r === 2 && (d = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new W({
    actor: x,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: S
  }).render(!0);
}
function ne(x, t) {
  var c, M, w, P, y, _, I, V;
  if (!x || !t) return;
  const e = x, r = (((c = e.system) == null ? void 0 : c.weapons) ?? {})[t] ?? {}, d = ((M = e.system) == null ? void 0 : M.skills) ?? {}, S = ((P = (w = e.items) == null ? void 0 : w.filter) == null ? void 0 : P.call(w, (L) => L.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), a = h ? S.find((L) => L.id === h) ?? null : null, m = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", p = Number(r.bonus || ((y = a == null ? void 0 : a.system) == null ? void 0 : y.bonus) || 0) || 0, l = ((_ = a == null ? void 0 : a.system) == null ? void 0 : _.type) || "kinetic", u = (((I = a == null ? void 0 : a.system) == null ? void 0 : I.skillKey) ?? "").trim(), f = u && d[u] !== void 0 ? u : l === "explosive" ? "grenadeUse" : "firearms", b = Number(d[f] || 0) || 0, v = p + b;
  let g = 0;
  if (x.type === "Karakter") {
    const L = A._getSkillHealthStatusStatic(x, f);
    L === 1 ? g = -6 : L === 2 && (g = -3);
  }
  const j = (((V = a == null ? void 0 : a.system) == null ? void 0 : V.damage) ?? "").trim(), n = (r.damage ?? "").trim(), o = j || n || "";
  new W({
    actor: x,
    skillKey: f,
    label: m,
    baseModifier: v,
    injuryModifier: 0,
    injuryPenalty: g,
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
//# sourceMappingURL=roll-sheet-BZlf3F2b.mjs.map
