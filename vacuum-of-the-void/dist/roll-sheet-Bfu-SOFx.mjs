import { V as K, c as oe } from "./vacuum-of-the-void-D1oF6ae2.mjs";
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
      label: u,
      baseModifier: y,
      injuryModifier: S,
      injuryPenalty: v,
      isWeaponAttack: a,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: r,
      weaponDamageFormula: l
    } = t;
    super(t), this._actor = e, this._skillKey = s ?? "", this._label = u ?? s ?? "", this._baseModifier = Number(y) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(v) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = r || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const s = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var g, P, M, _, b;
    const t = this, e = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((P = (g = this.element) == null ? void 0 : g.querySelector) == null ? void 0 : P.call(g, "form.votv.roll-sheet")) ?? ((_ = (M = this.element) == null ? void 0 : M.matches) != null && _.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const u = s.querySelector("input[name='advantage']"), y = s.querySelectorAll(".roll-sheet-advantage-d6"), S = (o) => {
      const n = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      u && (u.value = String(n)), y.forEach((c) => {
        const i = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", i === n);
      });
    };
    y.forEach((o) => {
      o.addEventListener("click", (n) => {
        n.preventDefault(), S(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), S((u == null ? void 0 : u.value) ?? "0");
    const v = s.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = v == null ? void 0 : v.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), h = s.querySelector("input[name='moraleDice']"), p = s.querySelectorAll(".roll-sheet-morale-d8"), r = (o) => {
      let n = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      n = Math.min(n, a), h && (h.value = String(n)), p.forEach((c, i) => {
        c.classList.toggle("selected", i < n), c.style.pointerEvents = i < a ? "" : "none", c.style.opacity = i < a ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (n) => {
        if (n.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > a) return;
        const c = o.dataset.moraleValue ?? "0";
        r(c), t._updateFormulaPreview(s);
      });
    }), r((h == null ? void 0 : h.value) ?? "0");
    const l = s.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => t._updateFormulaPreview(s)), l && l.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (o) => {
      var n, c, i, I;
      if ((c = (n = o.target) == null ? void 0 : n.closest) != null && c.call(n, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (I = (i = o.target) == null ? void 0 : i.closest) != null && I.call(i, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var g, P, M, _, b, o, n, c, i, I, w, j, f, N, k, x, L;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    let s = parseInt(((g = t.querySelector("input[name='advantage']")) == null ? void 0 : g.value) ?? "0", 10) || 0;
    if (this._isWeaponAttack && ((M = (P = game.user) == null ? void 0 : P.targets) != null && M.size)) {
      const d = ((_ = Array.from(game.user.targets)[0]) == null ? void 0 : _.actor) ?? null;
      (o = (b = d == null ? void 0 : d.statuses) == null ? void 0 : b.has) != null && o.call(b, "dodge") && (s = Math.max(-3, s - 1));
    }
    const u = parseInt(((n = t.querySelector("input[name='moraleDice']")) == null ? void 0 : n.value) ?? "0", 10) || 0, y = parseInt(((c = t.querySelector("input[name='constantBonus']")) == null ? void 0 : c.value) ?? "0", 10) || 0, S = parseInt(((i = t.dataset) == null ? void 0 : i.baseMod) ?? "0", 10) || 0, v = parseInt(((I = t.dataset) == null ? void 0 : I.injuryMod) ?? "0", 10) || 0, a = parseInt(((w = t.dataset) == null ? void 0 : w.injuryPenalty) ?? "0", 10) || 0, h = (N = (f = (j = this.actor) == null ? void 0 : j.statuses) == null ? void 0 : f.has) != null && N.call(f, "diseased") || (L = (x = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : x.has) != null && L.call(x, "poisoned") ? -1 : 0, p = S + v + a + y + h, r = [];
    r.push(document.createElement("span")), r[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", r[0].appendChild(l), s !== 0) {
      const d = document.createElement("span");
      d.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const m = document.createElement("img");
      m.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", m.alt = s > 0 ? "előny d6" : "hátrány d6", m.className = "roll-sheet-preview-die", d.appendChild(m), r.push(d);
    }
    if (u > 0) {
      const d = document.createElement("span");
      d.textContent = ` + ${u} `;
      const m = document.createElement("img");
      m.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", m.alt = "d8", m.className = "roll-sheet-preview-die", d.appendChild(m), r.push(d);
    }
    if (p !== 0) {
      const d = document.createElement("span");
      d.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, r.push(d);
    }
    e.innerHTML = "", e.append(...r);
  }
  getData(t = {}) {
    var M, _, b, o, n, c, i, I, w, j, f, N, k, x;
    const e = this.actor, s = Math.max(0, Number(((_ = (M = e == null ? void 0 : e.system) == null ? void 0 : M.resources) == null ? void 0 : _.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", v = ["3d6", u, y, S].filter(Boolean).join(" ") || "3d6";
    let a = "", h = 0;
    const p = [], r = [];
    let l = 0;
    if (this._isWeaponAttack && ((o = (b = game.user) == null ? void 0 : b.targets) != null && o.size)) {
      const d = Array.from(game.user.targets)[0], m = (d == null ? void 0 : d.actor) ?? null;
      a = (m == null ? void 0 : m.name) || (d == null ? void 0 : d.name) || "", (c = (n = m == null ? void 0 : m.statuses) == null ? void 0 : n.has) != null && c.call(n, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (I = (i = m == null ? void 0 : m.statuses) == null ? void 0 : i.has) != null && I.call(i, "dodge") && (l = 1, r.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (j = (w = e == null ? void 0 : e.statuses) == null ? void 0 : w.has) != null && j.call(w, "diseased") && r.push(game.i18n.localize("VOTV.StatusDiseased")), (N = (f = e == null ? void 0 : e.statuses) == null ? void 0 : f.has) != null && N.call(f, "poisoned") && r.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const g = ((x = (k = e == null ? void 0 : e.statuses) == null ? void 0 : k.has) == null ? void 0 : x.call(k, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    g && r.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const P = Math.min(3, Math.max(
      -3,
      h - l + (g ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: v,
      moraleCurrent: s,
      advantageValue: P,
      advantageSourcesText: p.length ? p.join(", ") : "",
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
    var s, u, y, S, v, a, h, p, r, l, g, P, M, _, b, o;
    const e = this.actor;
    if (e)
      try {
        const n = t.querySelector("[name='moraleDice']"), c = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), I = Math.min(3, Math.max(0, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), w = Math.max(0, Number(((u = (s = e.system) == null ? void 0 : s.resources) == null ? void 0 : u.morale) ?? 0) || 0), j = Math.min(I, w);
        let f = Math.min(3, Math.max(-3, parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0));
        if (this._isWeaponAttack && ((S = (y = game.user) == null ? void 0 : y.targets) != null && S.size)) {
          const F = ((v = Array.from(game.user.targets)[0]) == null ? void 0 : v.actor) ?? null;
          (h = (a = F == null ? void 0 : F.statuses) == null ? void 0 : a.has) != null && h.call(a, "dodge") && (f = Math.max(-3, f - 1));
        }
        const N = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, k = this._baseModifier, x = this._injuryModifier, L = this._injuryPenalty || 0, m = ((r = (p = e.statuses) == null ? void 0 : p.has) == null ? void 0 : r.call(p, "diseased")) || ((g = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : g.call(l, "poisoned")) ? -1 : 0, E = k + x + L + N + m, J = [
          "3d6",
          f > 0 ? `+${f}d6` : f < 0 ? `-${Math.abs(f)}d6` : "",
          j > 0 ? `+${j}d8` : "",
          E !== 0 ? E > 0 ? `+${E}` : `${E}` : ""
        ].filter(Boolean).join(" "), q = new Roll(J);
        await q.evaluate({ async: !0 });
        const { resultType: Q, label: X } = oe(q), Z = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ee = this._label;
        const z = { resultType: Q, critLabel: X };
        if (this._isWeaponAttack && ((M = (P = game.user) == null ? void 0 : P.targets) != null && M.size)) {
          const B = Array.from(game.user.targets)[0], V = (B == null ? void 0 : B.actor) ?? null;
          if (V) {
            const $ = ((_ = V.system) == null ? void 0 : _.combat) ?? {}, te = Number($.defense ?? 0) || 0, se = Number($.defenseBonus ?? 0) || 0, ae = Number($.givenProtection ?? 0) || 0;
            let W = 0;
            if (V.type === "Karakter") {
              const T = (((b = V.items) == null ? void 0 : b.contents) ?? []).filter(
                (O) => {
                  var A;
                  return O.type === "Pancel" && ((A = O.system) == null ? void 0 : A.equipped) === !0;
                }
              );
              for (const O of T) {
                const A = String(((o = O.system) == null ? void 0 : o.protectionBonus) ?? "").trim().replace(",", "."), Y = Number(A);
                Number.isFinite(Y) && (W += Y);
              }
            }
            const H = te + se + ae + W, U = (Number(q.total ?? 0) || 0) >= H, ne = V.name ?? B.name ?? "Célpont";
            let R = null, C = null;
            if (U && V.type === "Karakter")
              try {
                const T = new Roll("1d8");
                await T.evaluate({ async: !0 }), R = Number(T.total ?? 0) || 1, R === 1 ? C = "Fej" : R >= 2 && R <= 4 ? C = "Törzs" : R === 5 || R === 6 ? C = "Karok" : C = "Lábak";
              } catch (T) {
                console.warn("VOTV hit location roll failed:", T);
              }
            z.weaponAttack = !0, z.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: V.id ?? null,
              targetName: ne,
              defense: H,
              isHit: U,
              hitLocationRoll: R ?? null,
              hitLocationName: C ?? null
            };
          }
        }
        if (await q.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ee,
          flags: { "vacuum-of-the-void": z },
          rollMode: Z
        }), j > 0) {
          const F = Math.max(0, w - j);
          await e.update({ "system.resources.morale": F });
        }
        if (this._isInitiativeRoll)
          try {
            const F = Number(q.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": F });
            const B = e.apps ?? [];
            for (const V of B)
              typeof (V == null ? void 0 : V.render) == "function" && V.render(!0);
          } catch (F) {
            console.warn("VOTV initiative result update:", F);
          }
      } finally {
        this.close();
      }
  }
}
function le(D, t, e) {
  var a, h;
  if (!D) return;
  const s = Number(((h = (a = D.system) == null ? void 0 : a.skills) == null ? void 0 : h[t]) ?? 0) || 0, u = K.BODY_PART_BY_SKILL[t] ? K._getSkillHealthStatusStatic(D, t) : void 0;
  let y = 0;
  u === 1 ? y = -6 : u === 2 && (y = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new G({
    actor: D,
    skillKey: t,
    label: e || t,
    baseModifier: s,
    injuryModifier: y,
    isInitiativeRoll: S
  }).render(!0);
}
function ue(D, t) {
  var i, I, w, j, f, N, k, x;
  if (!D || !t) return;
  const e = D, u = (((i = e.system) == null ? void 0 : i.weapons) ?? {})[t] ?? {}, y = ((I = e.system) == null ? void 0 : I.skills) ?? {}, S = ((j = (w = e.items) == null ? void 0 : w.filter) == null ? void 0 : j.call(w, (L) => L.type === "Fegyver")) ?? [], v = (u.itemId ?? "").trim(), a = v ? S.find((L) => L.id === v) ?? null : null, h = ((a == null ? void 0 : a.name) ?? u.name ?? "").trim() || "Fegyver", p = Number(u.bonus || ((f = a == null ? void 0 : a.system) == null ? void 0 : f.bonus) || 0) || 0, r = ((N = a == null ? void 0 : a.system) == null ? void 0 : N.type) || "kinetic", l = (((k = a == null ? void 0 : a.system) == null ? void 0 : k.skillKey) ?? "").trim(), g = l && y[l] !== void 0 ? l : r === "explosive" ? "grenadeUse" : "firearms", P = Number(y[g] || 0) || 0, M = p + P;
  let _ = 0;
  if (D.type === "Karakter") {
    const L = K._getSkillHealthStatusStatic(D, g);
    L === 1 ? _ = -6 : L === 2 && (_ = -3);
  }
  const b = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.damage) ?? "").trim(), o = (u.damage ?? "").trim(), n = b || o || "";
  new G({
    actor: D,
    skillKey: g,
    label: h,
    baseModifier: M,
    injuryModifier: 0,
    injuryPenalty: _,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (a == null ? void 0 : a.id) ?? v,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  G as VoidRollSheet,
  le as openRollSheetForSkill,
  ue as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-Bfu-SOFx.mjs.map
