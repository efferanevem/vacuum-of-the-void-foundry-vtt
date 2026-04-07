import { V as $, c as ee } from "./vacuum-of-the-void-Dlwb7Uqz.mjs";
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
      baseModifier: d,
      injuryModifier: _,
      injuryPenalty: h,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: f,
      weaponItemId: r,
      weaponDamageFormula: c
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = l ?? s ?? "", this._baseModifier = Number(d) || 0, this._injuryModifier = Number(_) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = f || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var y, b, g, S, j;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((b = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : b.call(y, "form.votv.roll-sheet")) ?? ((S = (g = this.element) == null ? void 0 : g.matches) != null && S.call(g, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const l = s.querySelector("input[name='advantage']"), d = s.querySelectorAll(".roll-sheet-advantage-d6"), _ = (o) => {
      const n = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      l && (l.value = String(n)), d.forEach((i) => {
        const u = parseInt(i.dataset.advantageValue ?? "0", 10);
        i.classList.toggle("selected", u === n);
      });
    };
    d.forEach((o) => {
      o.addEventListener("click", (n) => {
        n.preventDefault(), _(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), _((l == null ? void 0 : l.value) ?? "0");
    const h = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((j = h == null ? void 0 : h.dataset) == null ? void 0 : j.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), f = s.querySelectorAll(".roll-sheet-morale-d8"), r = (o) => {
      let n = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      n = Math.min(n, a), m && (m.value = String(n)), f.forEach((i, u) => {
        i.classList.toggle("selected", u < n), i.style.pointerEvents = u < a ? "" : "none", i.style.opacity = u < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (n) => {
        if (n.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > a) return;
        const i = o.dataset.moraleValue ?? "0";
        r(i), t._updateFormulaPreview(s);
      });
    }), r((m == null ? void 0 : m.value) ?? "0");
    const c = s.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => t._updateFormulaPreview(s)), c && c.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (o) => {
      var n, i, u, w;
      if ((i = (n = o.target) == null ? void 0 : n.closest) != null && i.call(n, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (w = (u = o.target) == null ? void 0 : u.closest) != null && w.call(u, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var y, b, g, S, j, o, n, i, u, w, M, x;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const s = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, l = parseInt(((b = t.querySelector("input[name='moraleDice']")) == null ? void 0 : b.value) ?? "0", 10) || 0, d = parseInt(((g = t.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, _ = parseInt(((S = t.dataset) == null ? void 0 : S.baseMod) ?? "0", 10) || 0, h = parseInt(((j = t.dataset) == null ? void 0 : j.injuryMod) ?? "0", 10) || 0, a = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, m = (u = (i = (n = this.actor) == null ? void 0 : n.statuses) == null ? void 0 : i.has) != null && u.call(i, "diseased") || (x = (M = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : M.has) != null && x.call(M, "poisoned") ? -1 : 0, f = _ + h + a + d + m, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", r[0].appendChild(c), s !== 0) {
      const p = document.createElement("span");
      p.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const v = document.createElement("img");
      v.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", v.alt = s > 0 ? "előny d6" : "hátrány d6", v.className = "roll-sheet-preview-die", p.appendChild(v), r.push(p);
    }
    if (l > 0) {
      const p = document.createElement("span");
      p.textContent = ` + ${l} `;
      const v = document.createElement("img");
      v.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", v.alt = "d8", v.className = "roll-sheet-preview-die", p.appendChild(v), r.push(p);
    }
    if (f !== 0) {
      const p = document.createElement("span");
      p.textContent = f > 0 ? ` + ${f}` : ` − ${Math.abs(f)}`, r.push(p);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var g, S, j, o, n, i, u, w, M, x, p, v, P, N;
    const e = this.actor, s = Math.max(0, Number(((S = (g = e == null ? void 0 : e.system) == null ? void 0 : g.resources) == null ? void 0 : S.morale) ?? 0) || 0), l = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", d = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", _ = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", l, d, _].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const f = [], r = [];
    let c = 0;
    if (this._isWeaponAttack && ((o = (j = game.user) == null ? void 0 : j.targets) != null && o.size)) {
      const D = Array.from(game.user.targets)[0], k = (D == null ? void 0 : D.actor) ?? null;
      a = (k == null ? void 0 : k.name) || (D == null ? void 0 : D.name) || "", (i = (n = k == null ? void 0 : k.statuses) == null ? void 0 : n.has) != null && i.call(n, "stunned") && (m = 1, f.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (w = (u = k == null ? void 0 : k.statuses) == null ? void 0 : u.has) != null && w.call(u, "dodge") && (c = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (x = (M = e == null ? void 0 : e.statuses) == null ? void 0 : M.has) != null && x.call(M, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (v = (p = e == null ? void 0 : e.statuses) == null ? void 0 : p.has) != null && v.call(p, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const y = ((N = (P = e == null ? void 0 : e.statuses) == null ? void 0 : P.has) == null ? void 0 : N.call(P, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    y && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const b = Math.min(3, Math.max(
      -3,
      m - c + (y ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: s,
      advantageValue: b,
      advantageSourcesText: f.length ? f.join(", ") : "",
      disadvantageSourcesText: r.length ? r.join(", ") : "",
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
    var s, l, d, _, h, a, m, f, r, c, y;
    const e = this.actor;
    if (e)
      try {
        const b = t.querySelector("[name='moraleDice']"), g = t.querySelector("[name='advantage']"), S = t.querySelector("[name='constantBonus']"), j = Math.min(3, Math.max(0, parseInt((b == null ? void 0 : b.value) ?? "0", 10) || 0)), o = Math.max(0, Number(((l = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : l.morale) ?? 0) || 0), n = Math.min(j, o), i = Math.min(3, Math.max(-3, parseInt((g == null ? void 0 : g.value) ?? "0", 10) || 0)), u = parseInt((S == null ? void 0 : S.value) ?? "0", 10) || 0, w = this._baseModifier, M = this._injuryModifier, x = this._injuryPenalty || 0, v = ((_ = (d = e.statuses) == null ? void 0 : d.has) == null ? void 0 : _.call(d, "diseased")) || ((a = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : a.call(h, "poisoned")) ? -1 : 0, P = w + M + x + u + v, N = [
          "3d6",
          i > 0 ? `+${i}d6` : i < 0 ? `-${Math.abs(i)}d6` : "",
          n > 0 ? `+${n}d8` : "",
          P !== 0 ? P > 0 ? `+${P}` : `${P}` : ""
        ].filter(Boolean).join(" "), I = new Roll(N);
        await I.evaluate({ async: !0 });
        const { resultType: D, label: k } = ee(I), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const O = { resultType: D, critLabel: k };
        if (this._isWeaponAttack && ((f = (m = game.user) == null ? void 0 : m.targets) != null && f.size)) {
          const B = Array.from(game.user.targets)[0], L = (B == null ? void 0 : B.actor) ?? null;
          if (L) {
            const A = ((r = L.system) == null ? void 0 : r.combat) ?? {}, J = Number(A.defense ?? 0) || 0, Q = Number(A.defenseBonus ?? 0) || 0, X = Number(A.givenProtection ?? 0) || 0;
            let z = 0;
            if (L.type === "Karakter") {
              const T = (((c = L.items) == null ? void 0 : c.contents) ?? []).filter(
                (C) => {
                  var E;
                  return C.type === "Pancel" && ((E = C.system) == null ? void 0 : E.equipped) === !0;
                }
              );
              for (const C of T) {
                const E = String(((y = C.system) == null ? void 0 : y.protectionBonus) ?? "").trim().replace(",", "."), H = Number(E);
                Number.isFinite(H) && (z += H);
              }
            }
            const K = J + Q + X + z, W = (Number(I.total ?? 0) || 0) >= K, Z = L.name ?? B.name ?? "Célpont";
            let F = null, q = null;
            if (W && L.type === "Karakter")
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
              targetActorId: L.id ?? null,
              targetName: Z,
              defense: K,
              isHit: W,
              hitLocationRoll: F ?? null,
              hitLocationName: q ?? null
            };
          }
        }
        if (await I.toMessage({
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
            const R = Number(I.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const B = e.apps ?? [];
            for (const L of B)
              typeof (L == null ? void 0 : L.render) == "function" && L.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function ae(V, t, e) {
  var a, m;
  if (!V) return;
  const s = Number(((m = (a = V.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, l = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(V, t) : void 0;
  let d = 0;
  l === 1 ? d = -6 : l === 2 && (d = -3);
  const _ = (e || "").trim() === "Kezdeményezés";
  new U({
    actor: V,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: d,
    isInitiativeRoll: _
  }).render(!0);
}
function ne(V, t) {
  var u, w, M, x, p, v, P, N;
  if (!V || !t) return;
  const e = V, l = (((u = e.system) == null ? void 0 : u.weapons) ?? {})[t] ?? {}, d = ((w = e.system) == null ? void 0 : w.skills) ?? {}, _ = ((x = (M = e.items) == null ? void 0 : M.filter) == null ? void 0 : x.call(M, (I) => I.type === "Fegyver")) ?? [], h = (l.itemId ?? "").trim(), a = h ? _.find((I) => I.id === h) ?? null : null, m = ((a == null ? void 0 : a.name) ?? l.name ?? "").trim() || "Fegyver", f = Number(l.bonus || ((p = a == null ? void 0 : a.system) == null ? void 0 : p.bonus) || 0) || 0, r = ((v = a == null ? void 0 : a.system) == null ? void 0 : v.type) || "kinetic", c = (((P = a == null ? void 0 : a.system) == null ? void 0 : P.skillKey) ?? "").trim(), y = c && d[c] !== void 0 ? c : r === "explosive" ? "grenadeUse" : "firearms", b = Number(d[y] || 0) || 0, g = f + b;
  let S = 0;
  if (V.type === "Karakter") {
    const I = $._getSkillHealthStatusStatic(V, y);
    I === 1 ? S = -6 : I === 2 && (S = -3);
  }
  const j = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.damage) ?? "").trim(), o = (l.damage ?? "").trim(), n = j || o || "";
  new U({
    actor: V,
    skillKey: y,
    label: m,
    baseModifier: g,
    injuryModifier: 0,
    injuryPenalty: S,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? h,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  U as VoidRollSheet,
  ae as openRollSheetForSkill,
  ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DXRjJEtp.mjs.map
