import { V as re, c as Ve } from "./vacuum-of-the-void-ByJumZu0.mjs";
class pe extends Application {
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
      baseModifier: f,
      injuryModifier: k,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: u,
      weaponSlotKey: m,
      weaponItemId: n,
      weaponDamageFormula: v,
      blockHeavyInHalfCover: p,
      blockMediumHeavyInThreeQuarterCover: T,
      blockNonThrownInFullCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(k) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!u, this._weaponSlotKey = m || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof v == "string" ? v.trim() : "", this._blockHeavyInHalfCover = !!p, this._blockMediumHeavyInThreeQuarterCover = !!T, this._blockNonThrownInFullCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var p, T, y, I, _;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((T = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : T.call(p, "form.votv.roll-sheet")) ?? ((I = (y = this.element) == null ? void 0 : y.matches) != null && I.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), k = (o) => {
      const l = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      r && (r.value = String(l)), f.forEach((c) => {
        const i = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", i === l);
      });
    };
    f.forEach((o) => {
      o.addEventListener("click", (l) => {
        l.preventDefault(), k(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), k((r == null ? void 0 : r.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((_ = h == null ? void 0 : h.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), u = a.querySelector("input[name='moraleDice']"), m = a.querySelectorAll(".roll-sheet-morale-d8"), n = (o) => {
      let l = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      l = Math.min(l, s), u && (u.value = String(l)), m.forEach((c, i) => {
        c.classList.toggle("selected", i < l), c.style.pointerEvents = i < s ? "" : "none", c.style.opacity = i < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (l) => {
        if (l.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const c = o.dataset.moraleValue ?? "0";
        n(c), t._updateFormulaPreview(a);
      });
    }), n((u == null ? void 0 : u.value) ?? "0");
    const v = a.querySelector("input[name='constantBonus']");
    v && v.addEventListener("input", () => t._updateFormulaPreview(a)), v && v.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (o) => {
      var l, c, i, g;
      if ((c = (l = o.target) == null ? void 0 : l.closest) != null && c.call(l, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (g = (i = o.target) == null ? void 0 : i.closest) != null && g.call(i, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var p, T, y, I, _, o, l, c, i, g, V, z;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((p = t.querySelector("input[name='advantage']")) == null ? void 0 : p.value) ?? "0", 10) || 0, r = parseInt(((T = t.querySelector("input[name='moraleDice']")) == null ? void 0 : T.value) ?? "0", 10) || 0, f = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, k = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, h = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, u = ((i = (c = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : c.has) != null && i.call(c, "diseased") ? -1 : 0) + ((z = (V = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : V.has) != null && z.call(V, "poisoned") ? -1 : 0), m = k + h + s + f + u, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const v = document.createElement("img");
    if (v.src = "systems/vacuum-of-the-void/assets/d6.svg", v.alt = "d6", v.className = "roll-sheet-preview-die", n[0].appendChild(v), a !== 0) {
      const b = document.createElement("span");
      b.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const S = document.createElement("img");
      S.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", S.alt = a > 0 ? "előny d6" : "hátrány d6", S.className = "roll-sheet-preview-die", b.appendChild(S), n.push(b);
    }
    if (r > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${r} `;
      const S = document.createElement("img");
      S.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", S.alt = "d8", S.className = "roll-sheet-preview-die", b.appendChild(S), n.push(b);
    }
    if (m !== 0) {
      const b = document.createElement("span");
      b.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, n.push(b);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var c, i, g, V, z, b, S, O, N, q, j, K, B, E, L, U, F, x;
    const e = this.actor, a = Math.max(0, Number(((i = (c = e == null ? void 0 : e.system) == null ? void 0 : c.resources) == null ? void 0 : i.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", k = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, f, k].filter(Boolean).join(" ") || "3d6";
    let s = "", u = 0;
    const m = [], n = [];
    let v = 0;
    if (this._isWeaponAttack && ((V = (g = game.user) == null ? void 0 : g.targets) != null && V.size)) {
      const M = Array.from(game.user.targets)[0], d = (M == null ? void 0 : M.actor) ?? null;
      s = (d == null ? void 0 : d.name) || (M == null ? void 0 : M.name) || "", (b = (z = d == null ? void 0 : d.statuses) == null ? void 0 : z.has) != null && b.call(z, "stunned") && (u += 1, m.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (O = (S = d == null ? void 0 : d.statuses) == null ? void 0 : S.has) != null && O.call(S, "unconscious") && (u += 1, m.push(game.i18n.localize("VOTV.StatusUnconscious"))), (q = (N = d == null ? void 0 : d.statuses) == null ? void 0 : N.has) != null && q.call(N, "grappled") && (u += 1, m.push(game.i18n.localize("VOTV.StatusGrappled"))), (K = (j = d == null ? void 0 : d.statuses) == null ? void 0 : j.has) != null && K.call(j, "dodge") && (v = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let p = v;
    (E = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && E.call(B, "diseased") && n.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (U = (L = e == null ? void 0 : e.statuses) == null ? void 0 : L.has) != null && U.call(L, "poisoned") && n.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((x = (F = e == null ? void 0 : e.statuses) == null ? void 0 : F.has) == null ? void 0 : x.call(F, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (p += 1, n.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const y = Math.min(3, Math.max(-3, u - p)), I = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", _ = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", l = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || _ || I;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: y,
      advantageSourcesText: m.length ? m.join(", ") : "",
      disadvantageSourcesText: n.length ? n.join(", ") : "",
      blockRollWarningMessage: l,
      disableRollButton: this._blockHeavyInHalfCover || this._blockMediumHeavyInThreeQuarterCover || this._blockNonThrownInFullCover,
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
    var _, o, l, c, i;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((_ = t.system) == null ? void 0 : _.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((l = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : l.call(o, (g) => g.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), k = f ? r.find((g) => g.id === f) ?? null : null, h = (c = k == null ? void 0 : k.system) == null ? void 0 : c.bonus, s = a.bonus, u = h != null && String(h).trim() !== "", m = s != null && String(s).trim() !== "", v = Number(u ? h : m ? s : 0) || 0, p = this._skillKey, T = ((i = t.system) == null ? void 0 : i.skills) ?? {}, y = Number(T[p] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && p) {
      const g = re._getSkillHealthStatusStatic(t, p);
      g === 1 ? I = -6 : g === 2 && (I = -3);
    }
    return v + y + I;
  }
  async _doRoll(t) {
    var a, r, f, k, h, s, u, m, n, v, p, T, y, I, _, o, l, c, i, g, V, z, b, S, O, N, q, j, K, B, E, L, U, F, x;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const M = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, d = (M.itemId ?? "").trim(), D = d ? (((f = (r = e.items) == null ? void 0 : r.filter) == null ? void 0 : f.call(r, (w) => w.type === "Fegyver")) ?? []).find((w) => w.id === d) ?? null : null, P = (((k = D == null ? void 0 : D.system) == null ? void 0 : k.size) ?? M.size ?? "").toString().toLowerCase();
        if ((s = (h = e.statuses) == null ? void 0 : h.has) != null && s.call(h, "fullcover") && P !== "thrown") {
          const w = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (m = (u = ui.notifications) == null ? void 0 : u.warn) == null || m.call(u, w);
          return;
        }
        if ((v = (n = e.statuses) == null ? void 0 : n.has) != null && v.call(n, "threequarteredcover") && (P === "medium" || P === "heavy")) {
          const w = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (T = (p = ui.notifications) == null ? void 0 : p.warn) == null || T.call(p, w);
          return;
        }
        if ((I = (y = e.statuses) == null ? void 0 : y.has) != null && I.call(y, "halfcover") && P === "heavy") {
          const w = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (_ = ui.notifications) == null ? void 0 : _.warn) == null || o.call(_, w);
          return;
        }
      }
      try {
        const H = t.querySelector("[name='moraleDice']"), M = t.querySelector("[name='advantage']"), d = t.querySelector("[name='constantBonus']"), D = Math.min(3, Math.max(0, parseInt((H == null ? void 0 : H.value) ?? "0", 10) || 0)), P = Math.max(0, Number(((c = (l = e.system) == null ? void 0 : l.resources) == null ? void 0 : c.morale) ?? 0) || 0), w = Math.min(D, P), $ = Math.min(3, Math.max(-3, parseInt((M == null ? void 0 : M.value) ?? "0", 10) || 0)), G = parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0, ae = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, Y = this._isWeaponAttack ? 0 : this._injuryModifier, oe = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, J = ((g = (i = e.statuses) == null ? void 0 : i.has) != null && g.call(i, "diseased") ? -1 : 0) + ((z = (V = e.statuses) == null ? void 0 : V.has) != null && z.call(V, "poisoned") ? -1 : 0), A = ae + Y + oe + G + J, W = [
          "3d6",
          $ > 0 ? `+${$}d6` : $ < 0 ? `-${Math.abs($)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          A !== 0 ? A > 0 ? `+${A}` : `${A}` : ""
        ].filter(Boolean).join(" "), te = new Roll(W);
        await te.evaluate({ async: !0 });
        const { resultType: ve, label: fe } = Ve(te), ye = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ge = this._label;
        const ie = { resultType: ve, critLabel: fe };
        if (this._isWeaponAttack && ((S = (b = game.user) == null ? void 0 : b.targets) != null && S.size)) {
          const Z = Array.from(game.user.targets)[0], C = (Z == null ? void 0 : Z.actor) ?? null;
          if (C) {
            const ce = ((O = C.system) == null ? void 0 : O.combat) ?? {}, be = Number(ce.defense ?? 0) || 0, Se = Number(ce.defenseBonus ?? 0) || 0, ke = Number(ce.givenProtection ?? 0) || 0, _e = (q = (N = C.statuses) == null ? void 0 : N.has) != null && q.call(N, "lookaround") ? 1 : 0, we = (K = (j = C.statuses) == null ? void 0 : j.has) != null && K.call(j, "halfcover") ? 3 : 0, Ie = (E = (B = C.statuses) == null ? void 0 : B.has) != null && E.call(B, "threequarteredcover") ? 6 : 0;
            let ue = 0;
            if (C.type === "Karakter") {
              const ee = (((L = C.items) == null ? void 0 : L.contents) ?? []).filter(
                (ne) => {
                  var le;
                  return ne.type === "Pancel" && ((le = ne.system) == null ? void 0 : le.equipped) === !0;
                }
              );
              for (const ne of ee) {
                const le = String(((U = ne.system) == null ? void 0 : U.protectionBonus) ?? "").trim().replace(",", "."), me = Number(le);
                Number.isFinite(me) && (ue += me);
              }
            }
            const Me = ke + ue + _e + we + Ie, de = be + Se + Me, Ce = Number(te.total ?? 0) || 0, he = !(((x = (F = C.statuses) == null ? void 0 : F.has) == null ? void 0 : x.call(F, "fullcover")) ?? !1) && Ce >= de, Te = C.name ?? Z.name ?? "Célpont";
            let Q = null, se = null;
            if (he && C.type === "Karakter")
              try {
                const ee = new Roll("1d8");
                await ee.evaluate({ async: !0 }), Q = Number(ee.total ?? 0) || 1, Q === 1 ? se = "Fej" : Q >= 2 && Q <= 4 ? se = "Törzs" : Q === 5 || Q === 6 ? se = "Karok" : se = "Lábak";
              } catch (ee) {
                console.warn("VOTV hit location roll failed:", ee);
              }
            ie.weaponAttack = !0, ie.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: C.id ?? null,
              targetName: Te,
              defense: de,
              isHit: he,
              hitLocationRoll: Q ?? null,
              hitLocationName: se ?? null
            };
          }
        }
        if (await te.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ge,
          flags: { "vacuum-of-the-void": ie },
          rollMode: ye
        }), w > 0) {
          const X = Math.max(0, P - w);
          await e.update({ "system.resources.morale": X });
        }
        if (this._isInitiativeRoll)
          try {
            const X = Number(te.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": X });
            const Z = e.apps ?? [];
            for (const C of Z)
              typeof (C == null ? void 0 : C.render) == "function" && C.render(!0);
          } catch (X) {
            console.warn("VOTV initiative result update:", X);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ne(R, t, e) {
  var s, u;
  if (!R) return;
  const a = Number(((u = (s = R.system) == null ? void 0 : s.skills) == null ? void 0 : u[t]) ?? 0) || 0, r = re.BODY_PART_BY_SKILL[t] ? re._getSkillHealthStatusStatic(R, t) : void 0;
  let f = 0;
  r === 1 ? f = -6 : r === 2 && (f = -3);
  const k = (e || "").trim() === "Kezdeményezés";
  new pe({
    actor: R,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: k
  }).render(!0);
}
function je(R, t) {
  var F, x, H, M, d, D, P, w, $, G, ae, Y, oe, J, A;
  if (!R || !t) return;
  const e = R, r = (((F = e.system) == null ? void 0 : F.weapons) ?? {})[t] ?? {}, f = ((x = e.system) == null ? void 0 : x.skills) ?? {}, k = ((M = (H = e.items) == null ? void 0 : H.filter) == null ? void 0 : M.call(H, (W) => W.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), s = h ? k.find((W) => W.id === h) ?? null : null, u = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", m = (d = s == null ? void 0 : s.system) == null ? void 0 : d.bonus, n = r.bonus, v = m != null && String(m).trim() !== "", p = n != null && String(n).trim() !== "", y = Number(v ? m : p ? n : 0) || 0, I = ((D = s == null ? void 0 : s.system) == null ? void 0 : D.type) || "kinetic", _ = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.skillKey) ?? "").trim(), o = _ && f[_] !== void 0 ? _ : I === "explosive" ? "grenadeUse" : "firearms", l = Number(f[o] || 0) || 0, c = y + l;
  let i = 0;
  if (e.type === "Karakter") {
    const W = re._getSkillHealthStatusStatic(e, o);
    W === 1 ? i = -6 : W === 2 && (i = -3);
  }
  const g = (((w = s == null ? void 0 : s.system) == null ? void 0 : w.damage) ?? "").trim(), V = (r.damage ?? "").trim(), z = g || V || "", b = ((($ = s == null ? void 0 : s.system) == null ? void 0 : $.size) ?? r.size ?? "").toString().toLowerCase(), S = b === "heavy", O = b === "medium", N = b === "thrown", q = ((ae = (G = e.statuses) == null ? void 0 : G.has) == null ? void 0 : ae.call(G, "halfcover")) ?? !1, j = ((oe = (Y = e.statuses) == null ? void 0 : Y.has) == null ? void 0 : oe.call(Y, "threequarteredcover")) ?? !1, K = ((A = (J = e.statuses) == null ? void 0 : J.has) == null ? void 0 : A.call(J, "fullcover")) ?? !1, B = S && q, E = j && (O || S), L = K && !N;
  new pe({
    actor: R,
    skillKey: o,
    label: u,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: i,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: z,
    blockHeavyInHalfCover: B,
    blockMediumHeavyInThreeQuarterCover: E,
    blockNonThrownInFullCover: L
  }).render(!0);
}
export {
  pe as VoidRollSheet,
  Ne as openRollSheetForSkill,
  je as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-uCwXIVqB.mjs.map
