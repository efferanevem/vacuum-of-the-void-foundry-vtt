import { V as $, c as ie } from "./vacuum-of-the-void-ChSWZfWA.mjs";
class Z extends Application {
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
      baseModifier: m,
      injuryModifier: g,
      injuryPenalty: c,
      isWeaponAttack: s,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: i,
      weaponDamageFormula: d,
      blockHeavyInHalfCover: f
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = u ?? a ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(c) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = i || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "", this._blockHeavyInHalfCover = !!f;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, j, b, M, _;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((j = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : j.call(f, "form.votv.roll-sheet")) ?? ((M = (b = this.element) == null ? void 0 : b.matches) != null && M.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const u = a.querySelector("input[name='advantage']"), m = a.querySelectorAll(".roll-sheet-advantage-d6"), g = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      u && (u.value = String(o)), m.forEach((r) => {
        const l = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", l === o);
      });
    };
    m.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), g(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), g((u == null ? void 0 : u.value) ?? "0");
    const c = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((_ = c == null ? void 0 : c.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), h = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), i = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, s), h && (h.value = String(o)), p.forEach((r, l) => {
        r.classList.toggle("selected", l < o), r.style.pointerEvents = l < s ? "" : "none", r.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const r = n.dataset.moraleValue ?? "0";
        i(r), t._updateFormulaPreview(a);
      });
    }), i((h == null ? void 0 : h.value) ?? "0");
    const d = a.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(a)), d && d.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var o, r, l, v;
      if ((r = (o = n.target) == null ? void 0 : o.closest) != null && r.call(o, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (v = (l = n.target) == null ? void 0 : l.closest) != null && v.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var f, j, b, M, _, n, o, r, l, v, I, B;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, u = parseInt(((j = t.querySelector("input[name='moraleDice']")) == null ? void 0 : j.value) ?? "0", 10) || 0, m = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, g = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, c = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = (l = (r = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : r.has) != null && l.call(r, "diseased") || (B = (I = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : I.has) != null && B.call(I, "poisoned") ? -1 : 0, p = g + c + s + m + h, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", i[0].appendChild(d), a !== 0) {
      const S = document.createElement("span");
      S.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const k = document.createElement("img");
      k.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", k.alt = a > 0 ? "előny d6" : "hátrány d6", k.className = "roll-sheet-preview-die", S.appendChild(k), i.push(S);
    }
    if (u > 0) {
      const S = document.createElement("span");
      S.textContent = ` + ${u} `;
      const k = document.createElement("img");
      k.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", k.alt = "d8", k.className = "roll-sheet-preview-die", S.appendChild(k), i.push(S);
    }
    if (p !== 0) {
      const S = document.createElement("span");
      S.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, i.push(S);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var b, M, _, n, o, r, l, v, I, B, S, k, x, C;
    const e = this.actor, a = Math.max(0, Number(((M = (b = e == null ? void 0 : e.system) == null ? void 0 : b.resources) == null ? void 0 : M.morale) ?? 0) || 0), u = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", c = ["3d6", u, m, g].filter(Boolean).join(" ") || "3d6";
    let s = "", h = 0;
    const p = [], i = [];
    let d = 0;
    if (this._isWeaponAttack && ((n = (_ = game.user) == null ? void 0 : _.targets) != null && n.size)) {
      const P = Array.from(game.user.targets)[0], w = (P == null ? void 0 : P.actor) ?? null;
      s = (w == null ? void 0 : w.name) || (P == null ? void 0 : P.name) || "", (r = (o = w == null ? void 0 : w.statuses) == null ? void 0 : o.has) != null && r.call(o, "stunned") && (h = 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (v = (l = w == null ? void 0 : w.statuses) == null ? void 0 : l.has) != null && v.call(l, "dodge") && (d = 1, i.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (B = (I = e == null ? void 0 : e.statuses) == null ? void 0 : I.has) != null && B.call(I, "diseased") && i.push(game.i18n.localize("VOTV.StatusDiseased")), (k = (S = e == null ? void 0 : e.statuses) == null ? void 0 : S.has) != null && k.call(S, "poisoned") && i.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const f = ((C = (x = e == null ? void 0 : e.statuses) == null ? void 0 : x.has) == null ? void 0 : C.call(x, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    f && i.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const j = Math.min(3, Math.max(
      -3,
      h - d + (f ? -1 : 0)
    ));
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: c,
      moraleCurrent: a,
      advantageValue: j,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: i.length ? i.join(", ") : "",
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
  /**
   * Fegyvertámadásnál a lap megnyitásakor rögzített bónusz helyett mindig a jelenlegi actor/slot adatot használjuk.
   * @returns {number} baseModifier a dobáshoz (weaponBonus + skillBonus; Karakternél + injuryPenalty)
   */
  _getCurrentWeaponBaseModifier() {
    var _, n, o, r, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((_ = t.system) == null ? void 0 : _.weapons) ?? {})[this._weaponSlotKey] ?? {}, u = ((o = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : o.call(n, (v) => v.type === "Fegyver")) ?? [], m = (a.itemId ?? "").trim(), g = m ? u.find((v) => v.id === m) ?? null : null, c = (r = g == null ? void 0 : g.system) == null ? void 0 : r.bonus, s = a.bonus, h = c != null && String(c).trim() !== "", p = s != null && String(s).trim() !== "", d = Number(h ? c : p ? s : 0) || 0, f = this._skillKey, j = ((l = t.system) == null ? void 0 : l.skills) ?? {}, b = Number(j[f] ?? 0) || 0;
    let M = 0;
    if (t.type === "Karakter" && f) {
      const v = $._getSkillHealthStatusStatic(t, f);
      v === 1 ? M = -6 : v === 2 && (M = -3);
    }
    return d + b + M;
  }
  async _doRoll(t) {
    var a, u, m, g, c, s, h, p, i, d, f, j, b, M, _;
    const e = this.actor;
    if (e)
      try {
        const n = t.querySelector("[name='moraleDice']"), o = t.querySelector("[name='advantage']"), r = t.querySelector("[name='constantBonus']"), l = Math.min(3, Math.max(0, parseInt((n == null ? void 0 : n.value) ?? "0", 10) || 0)), v = Math.max(0, Number(((u = (a = e.system) == null ? void 0 : a.resources) == null ? void 0 : u.morale) ?? 0) || 0), I = Math.min(l, v), B = Math.min(3, Math.max(-3, parseInt((o == null ? void 0 : o.value) ?? "0", 10) || 0)), S = parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0, k = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, x = this._isWeaponAttack ? 0 : this._injuryModifier, C = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, P = ((g = (m = e.statuses) == null ? void 0 : m.has) == null ? void 0 : g.call(m, "diseased")) || ((s = (c = e.statuses) == null ? void 0 : c.has) == null ? void 0 : s.call(c, "poisoned")) ? -1 : 0, w = k + x + C + S + P, R = [
          "3d6",
          B > 0 ? `+${B}d6` : B < 0 ? `-${Math.abs(B)}d6` : "",
          I > 0 ? `+${I}d8` : "",
          w !== 0 ? w > 0 ? `+${w}` : `${w}` : ""
        ].filter(Boolean).join(" "), D = new Roll(R);
        await D.evaluate({ async: !0 });
        const { resultType: K, label: E } = ie(D), O = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let z = this._label;
        const T = { resultType: K, critLabel: E };
        if (this._isWeaponAttack && ((p = (h = game.user) == null ? void 0 : h.targets) != null && p.size)) {
          const N = Array.from(game.user.targets)[0], y = (N == null ? void 0 : N.actor) ?? null;
          if (y) {
            const U = ((i = y.system) == null ? void 0 : i.combat) ?? {}, ee = Number(U.defense ?? 0) || 0, te = Number(U.defenseBonus ?? 0) || 0, se = Number(U.givenProtection ?? 0) || 0, ae = (f = (d = y.statuses) == null ? void 0 : d.has) != null && f.call(d, "lookaround") ? 1 : 0, ne = (b = (j = y.statuses) == null ? void 0 : j.has) != null && b.call(j, "halfcover") ? 3 : 0;
            let G = 0;
            if (y.type === "Karakter") {
              const q = (((M = y.items) == null ? void 0 : M.contents) ?? []).filter(
                (W) => {
                  var H;
                  return W.type === "Pancel" && ((H = W.system) == null ? void 0 : H.equipped) === !0;
                }
              );
              for (const W of q) {
                const H = String(((_ = W.system) == null ? void 0 : _.protectionBonus) ?? "").trim().replace(",", "."), X = Number(H);
                Number.isFinite(X) && (G += X);
              }
            }
            const J = ee + te + se + G + ae + ne, Q = (Number(D.total ?? 0) || 0) >= J, oe = y.name ?? N.name ?? "Célpont";
            let F = null, A = null;
            if (Q && y.type === "Karakter")
              try {
                const q = new Roll("1d8");
                await q.evaluate({ async: !0 }), F = Number(q.total ?? 0) || 1, F === 1 ? A = "Fej" : F >= 2 && F <= 4 ? A = "Törzs" : F === 5 || F === 6 ? A = "Karok" : A = "Lábak";
              } catch (q) {
                console.warn("VOTV hit location roll failed:", q);
              }
            T.weaponAttack = !0, T.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: y.id ?? null,
              targetName: oe,
              defense: J,
              isHit: Q,
              hitLocationRoll: F ?? null,
              hitLocationName: A ?? null
            };
          }
        }
        if (await D.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: z,
          flags: { "vacuum-of-the-void": T },
          rollMode: O
        }), I > 0) {
          const L = Math.max(0, v - I);
          await e.update({ "system.resources.morale": L });
        }
        if (this._isInitiativeRoll)
          try {
            const L = Number(D.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": L });
            const N = e.apps ?? [];
            for (const y of N)
              typeof (y == null ? void 0 : y.render) == "function" && y.render(!0);
          } catch (L) {
            console.warn("VOTV initiative result update:", L);
          }
      } finally {
        this.close();
      }
  }
}
function ue(V, t, e) {
  var s, h;
  if (!V) return;
  const a = Number(((h = (s = V.system) == null ? void 0 : s.skills) == null ? void 0 : h[t]) ?? 0) || 0, u = $.BODY_PART_BY_SKILL[t] ? $._getSkillHealthStatusStatic(V, t) : void 0;
  let m = 0;
  u === 1 ? m = -6 : u === 2 && (m = -3);
  const g = (e || "").trim() === "Kezdeményezés";
  new Z({
    actor: V,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: m,
    isInitiativeRoll: g
  }).render(!0);
}
function ce(V, t) {
  var P, w, R, D, K, E, O, z, T, L, N;
  if (!V || !t) return;
  const e = V, u = (((P = e.system) == null ? void 0 : P.weapons) ?? {})[t] ?? {}, m = ((w = e.system) == null ? void 0 : w.skills) ?? {}, g = ((D = (R = e.items) == null ? void 0 : R.filter) == null ? void 0 : D.call(R, (y) => y.type === "Fegyver")) ?? [], c = (u.itemId ?? "").trim(), s = c ? g.find((y) => y.id === c) ?? null : null, h = ((s == null ? void 0 : s.name) ?? u.name ?? "").trim() || "Fegyver", p = (K = s == null ? void 0 : s.system) == null ? void 0 : K.bonus, i = u.bonus, d = p != null && String(p).trim() !== "", f = i != null && String(i).trim() !== "", b = Number(d ? p : f ? i : 0) || 0, M = ((E = s == null ? void 0 : s.system) == null ? void 0 : E.type) || "kinetic", _ = (((O = s == null ? void 0 : s.system) == null ? void 0 : O.skillKey) ?? "").trim(), n = _ && m[_] !== void 0 ? _ : M === "explosive" ? "grenadeUse" : "firearms", o = Number(m[n] || 0) || 0, r = b + o;
  let l = 0;
  if (e.type === "Karakter") {
    const y = $._getSkillHealthStatusStatic(e, n);
    y === 1 ? l = -6 : y === 2 && (l = -3);
  }
  const v = (((z = s == null ? void 0 : s.system) == null ? void 0 : z.damage) ?? "").trim(), I = (u.damage ?? "").trim(), B = v || I || "", S = ((T = s == null ? void 0 : s.system) == null ? void 0 : T.size) ?? u.size ?? "", k = String(S).toLowerCase() === "heavy", x = ((N = (L = e.statuses) == null ? void 0 : L.has) == null ? void 0 : N.call(L, "halfcover")) ?? !1, C = k && x;
  new Z({
    actor: V,
    skillKey: n,
    label: h,
    baseModifier: r,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? c,
    weaponDamageFormula: B,
    blockHeavyInHalfCover: C
  }).render(!0);
}
export {
  Z as VoidRollSheet,
  ue as openRollSheetForSkill,
  ce as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DlnrGt0y.mjs.map
