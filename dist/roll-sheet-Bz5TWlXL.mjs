import { V as z, c as ee } from "./vacuum-of-the-void-DJjYWFiq.mjs";
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
      label: r,
      baseModifier: h,
      injuryModifier: _,
      injuryPenalty: f,
      isWeaponAttack: a,
      isInitiativeRoll: p,
      weaponSlotKey: y,
      weaponItemId: i,
      weaponDamageFormula: d
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = r ?? s ?? "", this._baseModifier = Number(h) || 0, this._injuryModifier = Number(_) || 0, this._injuryPenalty = Number(f) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!p, this._weaponSlotKey = y || "", this._weaponItemId = i || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var v, j, g, S, w;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : j.call(v, "form.votv.roll-sheet")) ?? ((S = (g = this.element) == null ? void 0 : g.matches) != null && S.call(g, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const r = s.querySelector("input[name='advantage']"), h = s.querySelectorAll(".roll-sheet-advantage-d6"), _ = (o) => {
      const n = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      r && (r.value = String(n)), h.forEach((l) => {
        const u = parseInt(l.dataset.advantageValue ?? "0", 10);
        l.classList.toggle("selected", u === n);
      });
    };
    h.forEach((o) => {
      o.addEventListener("click", (n) => {
        n.preventDefault(), _(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), _((r == null ? void 0 : r.value) ?? "0");
    const f = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((w = f == null ? void 0 : f.dataset) == null ? void 0 : w.moraleMax) ?? "3", 10) || 0)), p = s.querySelector("input[name='moraleDice']"), y = s.querySelectorAll(".roll-sheet-morale-d8"), i = (o) => {
      let n = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      n = Math.min(n, a), p && (p.value = String(n)), y.forEach((l, u) => {
        l.classList.toggle("selected", u < n), l.style.pointerEvents = u < a ? "" : "none", l.style.opacity = u < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (n) => {
        if (n.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > a) return;
        const l = o.dataset.moraleValue ?? "0";
        i(l), t._updateFormulaPreview(s);
      });
    }), i((p == null ? void 0 : p.value) ?? "0");
    const d = s.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(s)), d && d.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (o) => {
      var n, l, u, P;
      if ((l = (n = o.target) == null ? void 0 : n.closest) != null && l.call(n, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (P = (u = o.target) == null ? void 0 : u.closest) != null && P.call(u, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var v, j, g, S, w, o, n, l, u, P, I, D, k, N, b, L, M;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((v = t.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0;
    if (this._isWeaponAttack && ((g = (j = game.user) == null ? void 0 : j.targets) != null && g.size)) {
      const c = ((S = Array.from(game.user.targets)[0]) == null ? void 0 : S.actor) ?? null;
      (o = (w = c == null ? void 0 : c.statuses) == null ? void 0 : w.has) != null && o.call(w, "dodge") && (s = Math.max(-3, s - 1));
    }
    const r = parseInt(((n = t.querySelector("input[name='moraleDice']")) == null ? void 0 : n.value) ?? "0", 10) || 0, h = parseInt(((l = t.querySelector("input[name='constantBonus']")) == null ? void 0 : l.value) ?? "0", 10) || 0, _ = parseInt(((u = t.dataset) == null ? void 0 : u.baseMod) ?? "0", 10) || 0, f = parseInt(((P = t.dataset) == null ? void 0 : P.injuryMod) ?? "0", 10) || 0, a = parseInt(((I = t.dataset) == null ? void 0 : I.injuryPenalty) ?? "0", 10) || 0, p = (N = (k = (D = this.actor) == null ? void 0 : D.statuses) == null ? void 0 : k.has) != null && N.call(k, "diseased") || (M = (L = (b = this.actor) == null ? void 0 : b.statuses) == null ? void 0 : L.has) != null && M.call(L, "poisoned") ? -1 : 0, y = _ + f + a + h + p, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", i[0].appendChild(d), s !== 0) {
      const c = document.createElement("span");
      c.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const m = document.createElement("img");
      m.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", m.alt = s > 0 ? "előny d6" : "hátrány d6", m.className = "roll-sheet-preview-die", c.appendChild(m), i.push(c);
    }
    if (r > 0) {
      const c = document.createElement("span");
      c.textContent = ` + ${r} `;
      const m = document.createElement("img");
      m.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", m.alt = "d8", m.className = "roll-sheet-preview-die", c.appendChild(m), i.push(c);
    }
    if (y !== 0) {
      const c = document.createElement("span");
      c.textContent = y > 0 ? ` + ${y}` : ` − ${Math.abs(y)}`, i.push(c);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var g, S, w, o, n, l, u, P, I, D, k, N, b, L;
    const e = this.actor, s = Math.max(0, Number(((S = (g = e == null ? void 0 : e.system) == null ? void 0 : g.resources) == null ? void 0 : S.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", h = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", _ = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", f = ["3d6", r, h, _].filter(Boolean).join(" ") || "3d6";
    let a = "", p = 0;
    const y = [], i = [];
    let d = 0;
    if (this._isWeaponAttack && ((o = (w = game.user) == null ? void 0 : w.targets) != null && o.size)) {
      const c = Array.from(game.user.targets)[0], m = (c == null ? void 0 : c.actor) ?? null;
      a = (m == null ? void 0 : m.name) || (c == null ? void 0 : c.name) || "", (l = (n = m == null ? void 0 : m.statuses) == null ? void 0 : n.has) != null && l.call(n, "stunned") && (p = 1, y.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (P = (u = m == null ? void 0 : m.statuses) == null ? void 0 : u.has) != null && P.call(u, "dodge") && (d = 1, i.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (D = (I = e == null ? void 0 : e.statuses) == null ? void 0 : I.has) != null && D.call(I, "diseased") && i.push(game.i18n.localize("VOTV.StatusDiseased")), (N = (k = e == null ? void 0 : e.statuses) == null ? void 0 : k.has) != null && N.call(k, "poisoned") && i.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const v = ((L = (b = e == null ? void 0 : e.statuses) == null ? void 0 : b.has) == null ? void 0 : L.call(b, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    v && i.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const j = Math.min(3, Math.max(
      -3,
      p - d + (v ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: f,
      moraleCurrent: s,
      advantageValue: j,
      advantageSourcesText: y.length ? y.join(", ") : "",
      disadvantageSourcesText: i.length ? i.join(", ") : "",
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
    var s, r, h, _, f, a, p, y, i, d, v;
    const e = this.actor;
    if (e)
      try {
        const j = t.querySelector("[name='moraleDice']"), g = t.querySelector("[name='advantage']"), S = t.querySelector("[name='constantBonus']"), w = Math.min(3, Math.max(0, parseInt((j == null ? void 0 : j.value) ?? "0", 10) || 0)), o = Math.max(0, Number(((r = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : r.morale) ?? 0) || 0), n = Math.min(w, o), l = Math.min(3, Math.max(-3, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), u = parseInt((S == null ? void 0 : S.value) ?? "0", 10) || 0, P = this._baseModifier, I = this._injuryModifier, D = this._injuryPenalty || 0, N = ((_ = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : _.call(h, "diseased")) || ((a = (f = e.statuses) == null ? void 0 : f.has) == null ? void 0 : a.call(f, "poisoned")) ? -1 : 0, b = P + I + D + u + N, L = [
          "3d6",
          l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
          n > 0 ? `+${n}d8` : "",
          b !== 0 ? b > 0 ? `+${b}` : `${b}` : ""
        ].filter(Boolean).join(" "), M = new Roll(L);
        await M.evaluate({ async: !0 });
        const { resultType: c, label: m } = ee(M), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const O = { resultType: c, critLabel: m };
        if (this._isWeaponAttack && ((y = (p = game.user) == null ? void 0 : p.targets) != null && y.size)) {
          const B = Array.from(game.user.targets)[0], V = (B == null ? void 0 : B.actor) ?? null;
          if (V) {
            const A = ((i = V.system) == null ? void 0 : i.combat) ?? {}, J = Number(A.defense ?? 0) || 0, Q = Number(A.defenseBonus ?? 0) || 0, X = Number(A.givenProtection ?? 0) || 0;
            let $ = 0;
            if (V.type === "Karakter") {
              const T = (((d = V.items) == null ? void 0 : d.contents) ?? []).filter(
                (C) => {
                  var E;
                  return C.type === "Pancel" && ((E = C.system) == null ? void 0 : E.equipped) === !0;
                }
              );
              for (const C of T) {
                const E = String(((v = C.system) == null ? void 0 : v.protectionBonus) ?? "").trim().replace(",", "."), H = Number(E);
                Number.isFinite(H) && ($ += H);
              }
            }
            const K = J + Q + X + $, W = (Number(M.total ?? 0) || 0) >= K, Z = V.name ?? B.name ?? "Célpont";
            let F = null, q = null;
            if (W && V.type === "Karakter")
              try {
                const T = new Roll("1d8");
                await T.evaluate({ async: !0 }), F = Number(T.total ?? 0) || 1, F === 1 ? q = "Fej" : F >= 2 && F <= 4 ? q = "Törzs" : F === 5 || F === 6 ? q = "Karok" : q = "Lábak";
              } catch (T) {
                console.warn("VOTV hit location roll failed:", T);
              }
            O.weaponAttack = !0, O.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: V.id ?? null,
              targetName: Z,
              defense: K,
              isHit: W,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await M.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: G,
          flags: { "vacuum-of-the-void": O },
          rollMode: Y
        }), n > 0) {
          const R = Math.max(0, o - n);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(M.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const B = e.apps ?? [];
            for (const V of B)
              typeof (V == null ? void 0 : V.render) == "function" && V.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ae(x, t, e) {
  var a, p;
  if (!x) return;
  const s = Number(((p = (a = x.system) == null ? void 0 : a.skills) == null ? void 0 : p[t]) ?? 0) || 0, r = z.BODY_PART_BY_SKILL[t] ? z._getSkillHealthStatusStatic(x, t) : void 0;
  let h = 0;
  r === 1 ? h = -6 : r === 2 && (h = -3);
  const _ = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: x,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: h,
    isInitiativeRoll: _
  }).render(!0);
}
function ne(x, t) {
  var u, P, I, D, k, N, b, L;
  if (!x || !t) return;
  const e = x, r = (((u = e.system) == null ? void 0 : u.weapons) ?? {})[t] ?? {}, h = ((P = e.system) == null ? void 0 : P.skills) ?? {}, _ = ((D = (I = e.items) == null ? void 0 : I.filter) == null ? void 0 : D.call(I, (M) => M.type === "Fegyver")) ?? [], f = (r.itemId ?? "").trim(), a = f ? _.find((M) => M.id === f) ?? null : null, p = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", y = Number(r.bonus || ((k = a == null ? void 0 : a.system) == null ? void 0 : k.bonus) || 0) || 0, i = ((N = a == null ? void 0 : a.system) == null ? void 0 : N.type) || "kinetic", d = (((b = a == null ? void 0 : a.system) == null ? void 0 : b.skillKey) ?? "").trim(), v = d && h[d] !== void 0 ? d : i === "explosive" ? "grenadeUse" : "firearms", j = Number(h[v] || 0) || 0, g = y + j;
  let S = 0;
  if (x.type === "Karakter") {
    const M = z._getSkillHealthStatusStatic(x, v);
    M === 1 ? S = -6 : M === 2 && (S = -3);
  }
  const w = (((L = a == null ? void 0 : a.system) == null ? void 0 : L.damage) ?? "").trim(), o = (r.damage ?? "").trim(), n = w || o || "";
  new U({
    actor: x,
    skillKey: v,
    label: p,
    baseModifier: g,
    injuryModifier: 0,
    injuryPenalty: S,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? f,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ae as openRollSheetForSkill,
  ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Bz5TWlXL.mjs.map
