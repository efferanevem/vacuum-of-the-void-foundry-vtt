import { V as ie, c as Ce } from "./vacuum-of-the-void-Dw0wFe5P.mjs";
class me extends Application {
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
      label: r,
      baseModifier: v,
      injuryModifier: S,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: m,
      weaponSlotKey: p,
      weaponItemId: i,
      weaponDamageFormula: c,
      blockHeavyInHalfCover: f,
      blockMediumHeavyInThreeQuarterCover: M,
      blockNonThrownInFullCover: b
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!m, this._weaponSlotKey = p || "", this._weaponItemId = i || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "", this._blockHeavyInHalfCover = !!f, this._blockMediumHeavyInThreeQuarterCover = !!M, this._blockNonThrownInFullCover = !!b;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, M, b, C, k;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((M = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : M.call(f, "form.votv.roll-sheet")) ?? ((C = (b = this.element) == null ? void 0 : b.matches) != null && C.call(b, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), v = a.querySelectorAll(".roll-sheet-advantage-d6"), S = (o) => {
      const l = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      r && (r.value = String(l)), v.forEach((d) => {
        const u = parseInt(d.dataset.advantageValue ?? "0", 10);
        d.classList.toggle("selected", u === l);
      });
    };
    v.forEach((o) => {
      o.addEventListener("click", (l) => {
        l.preventDefault(), S(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), S((r == null ? void 0 : r.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((k = h == null ? void 0 : h.dataset) == null ? void 0 : k.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), i = (o) => {
      let l = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      l = Math.min(l, s), m && (m.value = String(l)), p.forEach((d, u) => {
        d.classList.toggle("selected", u < l), d.style.pointerEvents = u < s ? "" : "none", d.style.opacity = u < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (l) => {
        if (l.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const d = o.dataset.moraleValue ?? "0";
        i(d), t._updateFormulaPreview(a);
      });
    }), i((m == null ? void 0 : m.value) ?? "0");
    const c = a.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => t._updateFormulaPreview(a)), c && c.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (o) => {
      var l, d, u, y;
      if ((d = (l = o.target) == null ? void 0 : l.closest) != null && d.call(l, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (y = (u = o.target) == null ? void 0 : u.closest) != null && y.call(u, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var f, M, b, C, k, o, l, d, u, y, T, F;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, r = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, v = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, S = parseInt(((C = t.dataset) == null ? void 0 : C.baseMod) ?? "0", 10) || 0, h = parseInt(((k = t.dataset) == null ? void 0 : k.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, m = ((u = (d = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : d.has) != null && u.call(d, "diseased") ? -1 : 0) + ((F = (T = (y = this.actor) == null ? void 0 : y.statuses) == null ? void 0 : T.has) != null && F.call(T, "poisoned") ? -1 : 0), p = S + h + s + v + m, i = [];
    i.push(document.createElement("span")), i[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", i[0].appendChild(c), a !== 0) {
      const g = document.createElement("span");
      g.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const I = document.createElement("img");
      I.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", I.alt = a > 0 ? "előny d6" : "hátrány d6", I.className = "roll-sheet-preview-die", g.appendChild(I), i.push(g);
    }
    if (r > 0) {
      const g = document.createElement("span");
      g.textContent = ` + ${r} `;
      const I = document.createElement("img");
      I.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", I.alt = "d8", I.className = "roll-sheet-preview-die", g.appendChild(I), i.push(g);
    }
    if (p !== 0) {
      const g = document.createElement("span");
      g.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, i.push(g);
    }
    e.innerHTML = "", e.append(...i);
  }
  getData(t = {}) {
    var u, y, T, F, g, I, R, L, D, x, K, W, q, U, Q, j, B, V, z, N;
    const e = this.actor, a = Math.max(0, Number(((y = (u = e == null ? void 0 : e.system) == null ? void 0 : u.resources) == null ? void 0 : y.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, v, S].filter(Boolean).join(" ") || "3d6";
    let s = "", m = !1, p = 0;
    const i = [], c = [];
    let f = 0;
    if ((F = (T = game.user) == null ? void 0 : T.targets) != null && F.size) {
      const _ = Array.from(game.user.targets)[0], n = (_ == null ? void 0 : _.actor) ?? null;
      if (s = (n == null ? void 0 : n.name) || (_ == null ? void 0 : _.name) || "", n) {
        const E = (((I = (g = n.system) == null ? void 0 : g.identity) == null ? void 0 : I.size) ?? "").toString().trim();
        [
          "Jármű (Kicsi)",
          "Jármű (Közepes)",
          "Jármű (Nagy)",
          "Gigantikus (Kicsi)",
          "Gigantikus (Közepes)",
          "Gigantikus (Nagy)"
        ].includes(E) && (m = !0);
      }
      (L = (R = n == null ? void 0 : n.statuses) == null ? void 0 : R.has) != null && L.call(R, "stunned") && (p += 1, i.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (x = (D = n == null ? void 0 : n.statuses) == null ? void 0 : D.has) != null && x.call(D, "unconscious") && (p += 1, i.push(game.i18n.localize("VOTV.StatusUnconscious"))), (W = (K = n == null ? void 0 : n.statuses) == null ? void 0 : K.has) != null && W.call(K, "grappled") && (p += 1, i.push(game.i18n.localize("VOTV.StatusGrappled"))), (U = (q = n == null ? void 0 : n.statuses) == null ? void 0 : q.has) != null && U.call(q, "dodge") && (f = 1, c.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let M = f;
    (j = (Q = e == null ? void 0 : e.statuses) == null ? void 0 : Q.has) != null && j.call(Q, "diseased") && c.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (V = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && V.call(B, "poisoned") && c.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((N = (z = e == null ? void 0 : e.statuses) == null ? void 0 : z.has) == null ? void 0 : N.call(z, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (M += 1, c.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const C = Math.min(3, Math.max(-3, p - M)), k = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", o = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", d = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || o || k;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: C,
      advantageSourcesText: i.length ? i.join(", ") : "",
      disadvantageSourcesText: c.length ? c.join(", ") : "",
      blockRollWarningMessage: d,
      disableRollButton: this._blockHeavyInHalfCover || this._blockMediumHeavyInThreeQuarterCover || this._blockNonThrownInFullCover,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: s,
      requireDistanceVsDefense: m
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
    var k, o, l, d, u;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((k = t.system) == null ? void 0 : k.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((l = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : l.call(o, (y) => y.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), S = v ? r.find((y) => y.id === v) ?? null : null, h = (d = S == null ? void 0 : S.system) == null ? void 0 : d.bonus, s = a.bonus, m = h != null && String(h).trim() !== "", p = s != null && String(s).trim() !== "", c = Number(m ? h : p ? s : 0) || 0, f = this._skillKey, M = ((u = t.system) == null ? void 0 : u.skills) ?? {}, b = Number(M[f] ?? 0) || 0;
    let C = 0;
    if (t.type === "Karakter" && f) {
      const y = ie._getSkillHealthStatusStatic(t, f);
      y === 1 ? C = -6 : y === 2 && (C = -3);
    }
    return c + b + C;
  }
  async _doRoll(t) {
    var a, r, v, S, h, s, m, p, i, c, f, M, b, C, k, o, l, d, u, y, T, F, g, I, R, L, D, x, K, W, q, U, Q, j, B;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const z = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, N = (z.itemId ?? "").trim(), O = N ? (((v = (r = e.items) == null ? void 0 : r.filter) == null ? void 0 : v.call(r, (n) => n.type === "Fegyver")) ?? []).find((n) => n.id === N) ?? null : null, _ = (((S = O == null ? void 0 : O.system) == null ? void 0 : S.size) ?? z.size ?? "").toString().toLowerCase();
        if ((s = (h = e.statuses) == null ? void 0 : h.has) != null && s.call(h, "fullcover") && _ !== "thrown") {
          const n = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (m = ui.notifications) == null ? void 0 : m.warn) == null || p.call(m, n);
          return;
        }
        if ((c = (i = e.statuses) == null ? void 0 : i.has) != null && c.call(i, "threequarteredcover") && (_ === "medium" || _ === "heavy")) {
          const n = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (M = (f = ui.notifications) == null ? void 0 : f.warn) == null || M.call(f, n);
          return;
        }
        if ((C = (b = e.statuses) == null ? void 0 : b.has) != null && C.call(b, "halfcover") && _ === "heavy") {
          const n = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (k = ui.notifications) == null ? void 0 : k.warn) == null || o.call(k, n);
          return;
        }
      }
      try {
        const V = t.querySelector("[name='moraleDice']"), z = t.querySelector("[name='advantage']"), N = t.querySelector("[name='constantBonus']"), O = Math.min(3, Math.max(0, parseInt((V == null ? void 0 : V.value) ?? "0", 10) || 0)), _ = Math.max(0, Number(((d = (l = e.system) == null ? void 0 : l.resources) == null ? void 0 : d.morale) ?? 0) || 0), n = Math.min(O, _), E = Math.min(3, Math.max(-3, parseInt((z == null ? void 0 : z.value) ?? "0", 10) || 0)), J = parseInt((N == null ? void 0 : N.value) ?? "0", 10) || 0, ne = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, Z = this._isWeaponAttack ? 0 : this._injuryModifier, oe = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, X = ((y = (u = e.statuses) == null ? void 0 : u.has) != null && y.call(u, "diseased") ? -1 : 0) + ((F = (T = e.statuses) == null ? void 0 : T.has) != null && F.call(T, "poisoned") ? -1 : 0), Y = ne + Z + oe + J + X, G = [
          "3d6",
          E > 0 ? `+${E}d6` : E < 0 ? `-${Math.abs(E)}d6` : "",
          n > 0 ? `+${n}d8` : "",
          Y !== 0 ? Y > 0 ? `+${Y}` : `${Y}` : ""
        ].filter(Boolean).join(" "), se = new Roll(G);
        await se.evaluate({ async: !0 });
        const { resultType: pe, label: fe } = Ce(se), ve = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ye = this._label;
        const ae = { resultType: pe, critLabel: fe };
        if ((I = (g = game.user) == null ? void 0 : g.targets) != null && I.size) {
          const te = Array.from(game.user.targets)[0], w = (te == null ? void 0 : te.actor) ?? null;
          if (w) {
            const re = ((R = w.system) == null ? void 0 : R.combat) ?? {}, ge = Number(re.defense ?? 0) || 0, Se = Number(re.defenseBonus ?? 0) || 0, be = Number(re.givenProtection ?? 0) || 0, ke = (D = (L = w.statuses) == null ? void 0 : L.has) != null && D.call(L, "lookaround") ? 1 : 0, Ie = (K = (x = w.statuses) == null ? void 0 : x.has) != null && K.call(x, "halfcover") ? 3 : 0, _e = (q = (W = w.statuses) == null ? void 0 : W.has) != null && q.call(W, "threequarteredcover") ? 6 : 0;
            let ce = 0;
            if (w.type === "Karakter") {
              const A = (((U = w.items) == null ? void 0 : U.contents) ?? []).filter(
                (P) => {
                  var $;
                  return P.type === "Pancel" && (($ = P.system) == null ? void 0 : $.equipped) === !0;
                }
              );
              for (const P of A) {
                const $ = String(((Q = P.system) == null ? void 0 : Q.protectionBonus) ?? "").trim().replace(",", "."), he = Number($);
                Number.isFinite(he) && (ce += he);
              }
            }
            const we = be + ce + ke + Ie + _e, le = ge + Se + we, Me = Number(se.total ?? 0) || 0, ue = !(((B = (j = w.statuses) == null ? void 0 : j.has) == null ? void 0 : B.call(j, "fullcover")) ?? !1) && Me >= le, de = w.name ?? te.name ?? "Célpont";
            if (this._isWeaponAttack) {
              let A = null, P = null;
              if (ue && w.type === "Karakter")
                try {
                  const $ = new Roll("1d8");
                  await $.evaluate({ async: !0 }), A = Number($.total ?? 0) || 1, A === 1 ? P = "Fej" : A >= 2 && A <= 4 ? P = "Törzs" : A === 5 || A === 6 ? P = "Karok" : P = "Lábak";
                } catch ($) {
                  console.warn("VOTV hit location roll failed:", $);
                }
              ae.weaponAttack = !0, ae.weapon = {
                actorId: e.id ?? null,
                itemId: this._weaponItemId || null,
                slotKey: this._weaponSlotKey || null,
                damageFormula: this._weaponDamageFormula || null,
                targetActorId: w.id ?? null,
                targetName: de,
                defense: le,
                isHit: ue,
                hitLocationRoll: A ?? null,
                hitLocationName: P ?? null
              };
            } else
              ae.vsDefense = !0, ae.vsDefenseInfo = {
                targetActorId: w.id ?? null,
                targetName: de,
                defense: le,
                isHit: ue
              };
          }
        }
        if (await se.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ye,
          flags: { "vacuum-of-the-void": ae },
          rollMode: ve
        }), n > 0) {
          const ee = Math.max(0, _ - n);
          await e.update({ "system.resources.morale": ee });
        }
        if (this._isInitiativeRoll)
          try {
            const ee = Number(se.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": ee });
            const te = e.apps ?? [];
            for (const w of te)
              typeof (w == null ? void 0 : w.render) == "function" && w.render(!0);
          } catch (ee) {
            console.warn("VOTV initiative result update:", ee);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ve(H, t, e) {
  var s, m;
  if (!H) return;
  const a = Number(((m = (s = H.system) == null ? void 0 : s.skills) == null ? void 0 : m[t]) ?? 0) || 0, r = ie.BODY_PART_BY_SKILL[t] ? ie._getSkillHealthStatusStatic(H, t) : void 0;
  let v = 0;
  r === 1 ? v = -6 : r === 2 && (v = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new me({
    actor: H,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: S
  }).render(!0);
}
function Ne(H, t) {
  var j, B, V, z, N, O, _, n, E, J, ne, Z, oe, X, Y;
  if (!H || !t) return;
  const e = H, r = (((j = e.system) == null ? void 0 : j.weapons) ?? {})[t] ?? {}, v = ((B = e.system) == null ? void 0 : B.skills) ?? {}, S = ((z = (V = e.items) == null ? void 0 : V.filter) == null ? void 0 : z.call(V, (G) => G.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), s = h ? S.find((G) => G.id === h) ?? null : null, m = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", p = (N = s == null ? void 0 : s.system) == null ? void 0 : N.bonus, i = r.bonus, c = p != null && String(p).trim() !== "", f = i != null && String(i).trim() !== "", b = Number(c ? p : f ? i : 0) || 0, C = ((O = s == null ? void 0 : s.system) == null ? void 0 : O.type) || "kinetic", k = (((_ = s == null ? void 0 : s.system) == null ? void 0 : _.skillKey) ?? "").trim(), o = k && v[k] !== void 0 ? k : C === "explosive" ? "grenadeUse" : "firearms", l = Number(v[o] || 0) || 0, d = b + l;
  let u = 0;
  if (e.type === "Karakter") {
    const G = ie._getSkillHealthStatusStatic(e, o);
    G === 1 ? u = -6 : G === 2 && (u = -3);
  }
  const y = (((n = s == null ? void 0 : s.system) == null ? void 0 : n.damage) ?? "").trim(), T = (r.damage ?? "").trim(), F = y || T || "", g = (((E = s == null ? void 0 : s.system) == null ? void 0 : E.size) ?? r.size ?? "").toString().toLowerCase(), I = g === "heavy", R = g === "medium", L = g === "thrown", D = ((ne = (J = e.statuses) == null ? void 0 : J.has) == null ? void 0 : ne.call(J, "halfcover")) ?? !1, x = ((oe = (Z = e.statuses) == null ? void 0 : Z.has) == null ? void 0 : oe.call(Z, "threequarteredcover")) ?? !1, K = ((Y = (X = e.statuses) == null ? void 0 : X.has) == null ? void 0 : Y.call(X, "fullcover")) ?? !1, W = I && D, q = x && (R || I), U = K && !L;
  new me({
    actor: H,
    skillKey: o,
    label: m,
    baseModifier: d,
    injuryModifier: 0,
    injuryPenalty: u,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: F,
    blockHeavyInHalfCover: W,
    blockMediumHeavyInThreeQuarterCover: q,
    blockNonThrownInFullCover: U
  }).render(!0);
}
export {
  me as VoidRollSheet,
  Ve as openRollSheetForSkill,
  Ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-By0jXchk.mjs.map
