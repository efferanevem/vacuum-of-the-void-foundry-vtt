import { V as K, c as oe } from "./vacuum-of-the-void-BtvjUVLK.mjs";
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
      skillKey: a,
      label: d,
      baseModifier: p,
      injuryModifier: S,
      injuryPenalty: f,
      isWeaponAttack: s,
      isInitiativeRoll: m,
      weaponSlotKey: h,
      weaponItemId: l,
      weaponDamageFormula: u
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = d ?? a ?? "", this._baseModifier = Number(p) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(f) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!m, this._weaponSlotKey = h || "", this._weaponItemId = l || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var y, j, M, _, b;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : j.call(y, "form.votv.roll-sheet")) ?? ((_ = (M = this.element) == null ? void 0 : M.matches) != null && _.call(M, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const d = a.querySelector("input[name='advantage']"), p = a.querySelectorAll(".roll-sheet-advantage-d6"), S = (o) => {
      const n = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      d && (d.value = String(n)), p.forEach((c) => {
        const i = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", i === n);
      });
    };
    p.forEach((o) => {
      o.addEventListener("click", (n) => {
        n.preventDefault(), S(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), S((d == null ? void 0 : d.value) ?? "0");
    const f = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((b = f == null ? void 0 : f.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), h = a.querySelectorAll(".roll-sheet-morale-d8"), l = (o) => {
      let n = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      n = Math.min(n, s), m && (m.value = String(n)), h.forEach((c, i) => {
        c.classList.toggle("selected", i < n), c.style.pointerEvents = i < s ? "" : "none", c.style.opacity = i < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (n) => {
        if (n.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const c = o.dataset.moraleValue ?? "0";
        l(c), t._updateFormulaPreview(a);
      });
    }), l((m == null ? void 0 : m.value) ?? "0");
    const u = a.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(a)), u && u.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (o) => {
      var n, c, i, w;
      if ((c = (n = o.target) == null ? void 0 : n.closest) != null && c.call(n, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (w = (i = o.target) == null ? void 0 : i.closest) != null && w.call(i, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var y, j, M, _, b, o, n, c, i, w, v, I;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((y = t.querySelector("input[name='advantage']")) == null ? void 0 : y.value) ?? "0", 10) || 0, d = parseInt(((j = t.querySelector("input[name='moraleDice']")) == null ? void 0 : j.value) ?? "0", 10) || 0, p = parseInt(((M = t.querySelector("input[name='constantBonus']")) == null ? void 0 : M.value) ?? "0", 10) || 0, S = parseInt(((_ = t.dataset) == null ? void 0 : _.baseMod) ?? "0", 10) || 0, f = parseInt(((b = t.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, m = (i = (c = (n = this.actor) == null ? void 0 : n.statuses) == null ? void 0 : c.has) != null && i.call(c, "diseased") || (I = (v = (w = this.actor) == null ? void 0 : w.statuses) == null ? void 0 : v.has) != null && I.call(v, "poisoned") ? -1 : 0, h = S + f + s + p + m, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const u = document.createElement("img");
    if (u.src = "systems/vacuum-of-the-void/assets/d6.svg", u.alt = "d6", u.className = "roll-sheet-preview-die", l[0].appendChild(u), a !== 0) {
      const r = document.createElement("span");
      r.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const g = document.createElement("img");
      g.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", g.alt = a > 0 ? "előny d6" : "hátrány d6", g.className = "roll-sheet-preview-die", r.appendChild(g), l.push(r);
    }
    if (d > 0) {
      const r = document.createElement("span");
      r.textContent = ` + ${d} `;
      const g = document.createElement("img");
      g.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", g.alt = "d8", g.className = "roll-sheet-preview-die", r.appendChild(g), l.push(r);
    }
    if (h !== 0) {
      const r = document.createElement("span");
      r.textContent = h > 0 ? ` + ${h}` : ` − ${Math.abs(h)}`, l.push(r);
    }
    e.innerHTML = "", e.append(...l);
  }
  getData(t = {}) {
    var M, _, b, o, n, c, i, w, v, I, r, g, x, N;
    const e = this.actor, a = Math.max(0, Number(((_ = (M = e == null ? void 0 : e.system) == null ? void 0 : M.resources) == null ? void 0 : _.morale) ?? 0) || 0), d = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", p = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", f = ["3d6", d, p, S].filter(Boolean).join(" ") || "3d6";
    let s = "", m = 0;
    const h = [], l = [];
    let u = 0;
    if (this._isWeaponAttack && ((o = (b = game.user) == null ? void 0 : b.targets) != null && o.size)) {
      const F = Array.from(game.user.targets)[0], L = (F == null ? void 0 : F.actor) ?? null;
      s = (L == null ? void 0 : L.name) || (F == null ? void 0 : F.name) || "", (c = (n = L == null ? void 0 : L.statuses) == null ? void 0 : n.has) != null && c.call(n, "stunned") && (m = 1, h.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (w = (i = L == null ? void 0 : L.statuses) == null ? void 0 : i.has) != null && w.call(i, "dodge") && (u = 1, l.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (I = (v = e == null ? void 0 : e.statuses) == null ? void 0 : v.has) != null && I.call(v, "diseased") && l.push(game.i18n.localize("VOTV.StatusDiseased")), (g = (r = e == null ? void 0 : e.statuses) == null ? void 0 : r.has) != null && g.call(r, "poisoned") && l.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const y = ((N = (x = e == null ? void 0 : e.statuses) == null ? void 0 : x.has) == null ? void 0 : N.call(x, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    y && l.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const j = Math.min(3, Math.max(
      -3,
      m - u + (y ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: f,
      moraleCurrent: a,
      advantageValue: j,
      advantageSourcesText: h.length ? h.join(", ") : "",
      disadvantageSourcesText: l.length ? l.join(", ") : "",
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
    var a, d, p, S, f, s, m, h, l, u, y, j, M, _, b, o;
    const e = this.actor;
    if (e)
      try {
        const n = t.querySelector("[name='moraleDice']"), c = t.querySelector("[name='advantage']"), i = t.querySelector("[name='constantBonus']"), w = Math.min(3, Math.max(0, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), v = Math.max(0, Number(((d = (a = e.system) == null ? void 0 : a.resources) == null ? void 0 : d.morale) ?? 0) || 0), I = Math.min(w, v);
        let r = Math.min(3, Math.max(-3, parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0));
        if (this._isWeaponAttack && ((S = (p = game.user) == null ? void 0 : p.targets) != null && S.size)) {
          const V = ((f = Array.from(game.user.targets)[0]) == null ? void 0 : f.actor) ?? null;
          (m = (s = V == null ? void 0 : V.statuses) == null ? void 0 : s.has) != null && m.call(s, "dodge") && (r = Math.max(-3, r - 1));
        }
        const g = parseInt((i == null ? void 0 : i.value) ?? "0", 10) || 0, x = this._baseModifier, N = this._injuryModifier, D = this._injuryPenalty || 0, L = ((l = (h = e.statuses) == null ? void 0 : h.has) == null ? void 0 : l.call(h, "diseased")) || ((y = (u = e.statuses) == null ? void 0 : u.has) == null ? void 0 : y.call(u, "poisoned")) ? -1 : 0, E = x + N + D + g + L, J = [
          "3d6",
          r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
          I > 0 ? `+${I}d8` : "",
          E !== 0 ? E > 0 ? `+${E}` : `${E}` : ""
        ].filter(Boolean).join(" "), q = new Roll(J);
        await q.evaluate({ async: !0 });
        const { resultType: Q, label: X } = oe(q), Z = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ee = this._label;
        const z = { resultType: Q, critLabel: X };
        if (this._isWeaponAttack && ((M = (j = game.user) == null ? void 0 : j.targets) != null && M.size)) {
          const B = Array.from(game.user.targets)[0], P = (B == null ? void 0 : B.actor) ?? null;
          if (P) {
            const $ = ((_ = P.system) == null ? void 0 : _.combat) ?? {}, te = Number($.defense ?? 0) || 0, se = Number($.defenseBonus ?? 0) || 0, ae = Number($.givenProtection ?? 0) || 0;
            let W = 0;
            if (P.type === "Karakter") {
              const T = (((b = P.items) == null ? void 0 : b.contents) ?? []).filter(
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
            const H = te + se + ae + W, U = (Number(q.total ?? 0) || 0) >= H, ne = P.name ?? B.name ?? "Célpont";
            let R = null, C = null;
            if (U && P.type === "Karakter")
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
              targetActorId: P.id ?? null,
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
        }), I > 0) {
          const V = Math.max(0, v - I);
          await e.update({ "system.resources.morale": V });
        }
        if (this._isInitiativeRoll)
          try {
            const V = Number(q.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": V });
            const B = e.apps ?? [];
            for (const P of B)
              typeof (P == null ? void 0 : P.render) == "function" && P.render(!0);
          } catch (V) {
            console.warn("VOTV initiative result update:", V);
          }
      } finally {
        this.close();
      }
  }
}
function le(k, t, e) {
  var s, m;
  if (!k) return;
  const a = Number(((m = (s = k.system) == null ? void 0 : s.skills) == null ? void 0 : m[t]) ?? 0) || 0, d = K.BODY_PART_BY_SKILL[t] ? K._getSkillHealthStatusStatic(k, t) : void 0;
  let p = 0;
  d === 1 ? p = -6 : d === 2 && (p = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new G({
    actor: k,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: p,
    isInitiativeRoll: S
  }).render(!0);
}
function ue(k, t) {
  var i, w, v, I, r, g, x, N;
  if (!k || !t) return;
  const e = k, d = (((i = e.system) == null ? void 0 : i.weapons) ?? {})[t] ?? {}, p = ((w = e.system) == null ? void 0 : w.skills) ?? {}, S = ((I = (v = e.items) == null ? void 0 : v.filter) == null ? void 0 : I.call(v, (D) => D.type === "Fegyver")) ?? [], f = (d.itemId ?? "").trim(), s = f ? S.find((D) => D.id === f) ?? null : null, m = ((s == null ? void 0 : s.name) ?? d.name ?? "").trim() || "Fegyver", h = Number(d.bonus || ((r = s == null ? void 0 : s.system) == null ? void 0 : r.bonus) || 0) || 0, l = ((g = s == null ? void 0 : s.system) == null ? void 0 : g.type) || "kinetic", u = (((x = s == null ? void 0 : s.system) == null ? void 0 : x.skillKey) ?? "").trim(), y = u && p[u] !== void 0 ? u : l === "explosive" ? "grenadeUse" : "firearms", j = Number(p[y] || 0) || 0, M = h + j;
  let _ = 0;
  if (k.type === "Karakter") {
    const D = K._getSkillHealthStatusStatic(k, y);
    D === 1 ? _ = -6 : D === 2 && (_ = -3);
  }
  const b = (((N = s == null ? void 0 : s.system) == null ? void 0 : N.damage) ?? "").trim(), o = (d.damage ?? "").trim(), n = b || o || "";
  new G({
    actor: k,
    skillKey: y,
    label: m,
    baseModifier: M,
    injuryModifier: 0,
    injuryPenalty: _,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? f,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  G as VoidRollSheet,
  le as openRollSheetForSkill,
  ue as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DlYjb9Sv.mjs.map
