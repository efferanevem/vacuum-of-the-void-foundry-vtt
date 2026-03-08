import { V as K, c as oe } from "./vacuum-of-the-void-Cxw25ly9.mjs";
class G extends Application {
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
      label: c,
      baseModifier: p,
      injuryModifier: S,
      injuryPenalty: y,
      isWeaponAttack: a,
      isInitiativeRoll: m,
      weaponSlotKey: h,
      weaponItemId: r,
      weaponDamageFormula: l
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = c ?? s ?? "", this._baseModifier = Number(p) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(y) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!m, this._weaponSlotKey = h || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var g, j, M, _, b;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : j.call(g, "form.votv.roll-sheet")) ?? ((_ = (M = this.element) == null ? void 0 : M.matches) != null && _.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const c = s.querySelector("input[name='advantage']"), p = s.querySelectorAll(".roll-sheet-advantage-d6"), S = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      c && (c.value = String(o)), p.forEach((u) => {
        const d = parseInt(u.dataset.advantageValue ?? "0", 10);
        u.classList.toggle("selected", d === o);
      });
    };
    p.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), S(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), S((c == null ? void 0 : c.value) ?? "0");
    const y = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = y == null ? void 0 : y.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), m = s.querySelector("input[name='moraleDice']"), h = s.querySelectorAll(".roll-sheet-morale-d8"), r = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), m && (m.value = String(o)), h.forEach((u, d) => {
        u.classList.toggle("selected", d < o), u.style.pointerEvents = d < a ? "" : "none", u.style.opacity = d < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const u = n.dataset.moraleValue ?? "0";
        r(u), t._updateFormulaPreview(s);
      });
    }), r((m == null ? void 0 : m.value) ?? "0");
    const l = s.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => t._updateFormulaPreview(s)), l && l.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (n) => {
      var o, u, d, w;
      if ((u = (o = n.target) == null ? void 0 : o.closest) != null && u.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (w = (d = n.target) == null ? void 0 : d.closest) != null && w.call(d, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var g, j, M, _, b, n, o, u, d, w, P, I, v, k, D, N, f;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((g = t.querySelector("input[name='advantage']")) == null ? void 0 : g.value) ?? "0", 10) || 0;
    if (this._isWeaponAttack && ((M = (j = game.user) == null ? void 0 : j.targets) != null && M.size)) {
      const i = ((_ = Array.from(game.user.targets)[0]) == null ? void 0 : _.actor) ?? null;
      (n = (b = i == null ? void 0 : i.statuses) == null ? void 0 : b.has) != null && n.call(b, "dodge") && (s = Math.max(-3, s - 1));
    }
    const c = parseInt(((o = t.querySelector("input[name='moraleDice']")) == null ? void 0 : o.value) ?? "0", 10) || 0, p = parseInt(((u = t.querySelector("input[name='constantBonus']")) == null ? void 0 : u.value) ?? "0", 10) || 0, S = parseInt(((d = t.dataset) == null ? void 0 : d.baseMod) ?? "0", 10) || 0, y = parseInt(((w = t.dataset) == null ? void 0 : w.injuryMod) ?? "0", 10) || 0, a = parseInt(((P = t.dataset) == null ? void 0 : P.injuryPenalty) ?? "0", 10) || 0, m = (k = (v = (I = this.actor) == null ? void 0 : I.statuses) == null ? void 0 : v.has) != null && k.call(v, "diseased") || (f = (N = (D = this.actor) == null ? void 0 : D.statuses) == null ? void 0 : N.has) != null && f.call(N, "poisoned") ? -1 : 0, h = S + y + a + p + m, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", r[0].appendChild(l), s !== 0) {
      const i = document.createElement("span");
      i.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const V = document.createElement("img");
      V.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", V.alt = s > 0 ? "előny d6" : "hátrány d6", V.className = "roll-sheet-preview-die", i.appendChild(V), r.push(i);
    }
    if (c > 0) {
      const i = document.createElement("span");
      i.textContent = ` + ${c} `;
      const V = document.createElement("img");
      V.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", V.alt = "d8", V.className = "roll-sheet-preview-die", i.appendChild(V), r.push(i);
    }
    if (h !== 0) {
      const i = document.createElement("span");
      i.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, r.push(i);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var j, M, _, b, n, o, u, d, w, P, I, v, k, D;
    const e = this.actor, s = Math.max(0, Number(((M = (j = e == null ? void 0 : e.system) == null ? void 0 : j.resources) == null ? void 0 : M.morale) ?? 0) || 0), c = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", p = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", y = ["3d6", c, p, S].filter(Boolean).join(" ") || "3d6";
    let a = "", m = 0;
    const h = [], r = [];
    if (this._isWeaponAttack && ((b = (_ = game.user) == null ? void 0 : _.targets) != null && b.size)) {
      const f = Array.from(game.user.targets)[0], i = (f == null ? void 0 : f.actor) ?? null;
      a = (i == null ? void 0 : i.name) || (f == null ? void 0 : f.name) || "", (o = (n = i == null ? void 0 : i.statuses) == null ? void 0 : n.has) != null && o.call(n, "stunned") && (m = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (d = (u = i == null ? void 0 : i.statuses) == null ? void 0 : u.has) != null && d.call(u, "dodge") && r.push(game.i18n.localize("VOTV.StatusDodge"));
    }
    (P = (w = e == null ? void 0 : e.statuses) == null ? void 0 : w.has) != null && P.call(w, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (v = (I = e == null ? void 0 : e.statuses) == null ? void 0 : I.has) != null && v.call(I, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const l = ((D = (k = e == null ? void 0 : e.statuses) == null ? void 0 : k.has) == null ? void 0 : D.call(k, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    l && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const g = Math.min(3, Math.max(
      -3,
      m + (l ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: y,
      moraleCurrent: s,
      advantageValue: g,
      advantageSourcesText: h.length ? h.join(", ") : "",
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
    var s, c, p, S, y, a, m, h, r, l, g, j, M, _, b, n;
    const e = this.actor;
    if (e)
      try {
        const o = t.querySelector("[name='moraleDice']"), u = t.querySelector("[name='advantage']"), d = t.querySelector("[name='constantBonus']"), w = Math.min(3, Math.max(0, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), P = Math.max(0, Number(((c = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : c.morale) ?? 0) || 0), I = Math.min(w, P);
        let v = Math.min(3, Math.max(-3, parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0));
        if (this._isWeaponAttack && ((S = (p = game.user) == null ? void 0 : p.targets) != null && S.size)) {
          const R = ((y = Array.from(game.user.targets)[0]) == null ? void 0 : y.actor) ?? null;
          (m = (a = R == null ? void 0 : R.statuses) == null ? void 0 : a.has) != null && m.call(a, "dodge") && (v = Math.max(-3, v - 1));
        }
        const k = parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0, D = this._baseModifier, N = this._injuryModifier, f = this._injuryPenalty || 0, V = ((r = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : r.call(h, "diseased")) || ((g = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : g.call(l, "poisoned")) ? -1 : 0, E = D + N + f + k + V, J = [
          "3d6",
          v > 0 ? `+${v}d6` : v < 0 ? `-${Math.abs(v)}d6` : "",
          I > 0 ? `+${I}d8` : "",
          E !== 0 ? E > 0 ? `+${E}` : `${E}` : ""
        ].filter(Boolean).join(" "), T = new Roll(J);
        await T.evaluate({ async: !0 });
        const { resultType: Q, label: X } = oe(T), Z = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ee = this._label;
        const z = { resultType: Q, critLabel: X };
        if (this._isWeaponAttack && ((M = (j = game.user) == null ? void 0 : j.targets) != null && M.size)) {
          const B = Array.from(game.user.targets)[0], x = (B == null ? void 0 : B.actor) ?? null;
          if (x) {
            const $ = ((_ = x.system) == null ? void 0 : _.combat) ?? {}, te = Number($.defense ?? 0) || 0, se = Number($.defenseBonus ?? 0) || 0, ae = Number($.givenProtection ?? 0) || 0;
            let W = 0;
            if (x.type === "Karakter") {
              const q = (((b = x.items) == null ? void 0 : b.contents) ?? []).filter(
                (O) => {
                  var A;
                  return O.type === "Pancel" && ((A = O.system) == null ? void 0 : A.equipped) === !0;
                }
              );
              for (const O of q) {
                const A = String(((n = O.system) == null ? void 0 : n.protectionBonus) ?? "").trim().replace(",", "."), Y = Number(A);
                Number.isFinite(Y) && (W += Y);
              }
            }
            const H = te + se + ae + W, U = (Number(T.total ?? 0) || 0) >= H, ne = x.name ?? B.name ?? "Célpont";
            let F = null, C = null;
            if (U && x.type === "Karakter")
              try {
                const q = new Roll("1d8");
                await q.evaluate({ async: !0 }), F = Number(q.total ?? 0) || 1, F === 1 ? C = "Fej" : F >= 2 && F <= 4 ? C = "Törzs" : F === 5 || F === 6 ? C = "Karok" : C = "Lábak";
              } catch (q) {
                console.warn("VOTV hit location roll failed:", q);
              }
            z.weaponAttack = !0, z.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: x.id ?? null,
              targetName: ne,
              defense: H,
              isHit: U,
              hitLocationRoll: F ?? null,
              hitLocationName: C ?? null
            };
          }
        }
        if (await T.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ee,
          flags: { "vacuum-of-the-void": z },
          rollMode: Z
        }), I > 0) {
          const R = Math.max(0, P - I);
          await e.update({ "system.resources.morale": R });
        }
        if (this._isInitiativeRoll)
          try {
            const R = Number(T.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": R });
            const B = e.apps ?? [];
            for (const x of B)
              typeof (x == null ? void 0 : x.render) == "function" && x.render(!0);
          } catch (R) {
            console.warn("VOTV initiative result update:", R);
          }
      } finally {
        this.close();
      }
  }
}
function le(L, t, e) {
  var a, m;
  if (!L) return;
  const s = Number(((m = (a = L.system) == null ? void 0 : a.skills) == null ? void 0 : m[t]) ?? 0) || 0, c = K.BODY_PART_BY_SKILL[t] ? K._getSkillHealthStatusStatic(L, t) : void 0;
  let p = 0;
  c === 1 ? p = -6 : c === 2 && (p = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new G({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: p,
    isInitiativeRoll: S
  }).render(!0);
}
function ue(L, t) {
  var d, w, P, I, v, k, D, N;
  if (!L || !t) return;
  const e = L, c = (((d = e.system) == null ? void 0 : d.weapons) ?? {})[t] ?? {}, p = ((w = e.system) == null ? void 0 : w.skills) ?? {}, S = ((I = (P = e.items) == null ? void 0 : P.filter) == null ? void 0 : I.call(P, (f) => f.type === "Fegyver")) ?? [], y = (c.itemId ?? "").trim(), a = y ? S.find((f) => f.id === y) ?? null : null, m = ((a == null ? void 0 : a.name) ?? c.name ?? "").trim() || "Fegyver", h = Number(c.bonus || ((v = a == null ? void 0 : a.system) == null ? void 0 : v.bonus) || 0) || 0, r = ((k = a == null ? void 0 : a.system) == null ? void 0 : k.type) || "kinetic", l = (((D = a == null ? void 0 : a.system) == null ? void 0 : D.skillKey) ?? "").trim(), g = l && p[l] !== void 0 ? l : r === "explosive" ? "grenadeUse" : "firearms", j = Number(p[g] || 0) || 0, M = h + j;
  let _ = 0;
  if (L.type === "Karakter") {
    const f = K._getSkillHealthStatusStatic(L, g);
    f === 1 ? _ = -6 : f === 2 && (_ = -3);
  }
  const b = (((N = a == null ? void 0 : a.system) == null ? void 0 : N.damage) ?? "").trim(), n = (c.damage ?? "").trim(), o = b || n || "";
  new G({
    actor: L,
    skillKey: g,
    label: m,
    baseModifier: M,
    injuryModifier: 0,
    injuryPenalty: _,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? y,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  G as VoidRollSheet,
  le as openRollSheetForSkill,
  ue as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Bifc8ciR.mjs.map
