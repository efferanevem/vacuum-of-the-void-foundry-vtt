import { V as ie, c as ze } from "./vacuum-of-the-void-DQk47nwy.mjs";
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
      label: i,
      baseModifier: f,
      injuryModifier: k,
      injuryPenalty: m,
      isWeaponAttack: s,
      isInitiativeRoll: u,
      weaponSlotKey: p,
      weaponItemId: n,
      weaponDamageFormula: v,
      blockHeavyInHalfCover: d,
      blockMediumHeavyInThreeQuarterCover: T,
      blockNonThrownInFullCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(k) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!u, this._weaponSlotKey = p || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof v == "string" ? v.trim() : "", this._blockHeavyInHalfCover = !!d, this._blockMediumHeavyInThreeQuarterCover = !!T, this._blockNonThrownInFullCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var d, T, y, I, _;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((T = (d = this.element) == null ? void 0 : d.querySelector) == null ? void 0 : T.call(d, "form.votv.roll-sheet")) ?? ((I = (y = this.element) == null ? void 0 : y.matches) != null && I.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), k = (o) => {
      const r = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      i && (i.value = String(r)), f.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    f.forEach((o) => {
      o.addEventListener("click", (r) => {
        r.preventDefault(), k(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), k((i == null ? void 0 : i.value) ?? "0");
    const m = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((_ = m == null ? void 0 : m.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), u = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), n = (o) => {
      let r = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      r = Math.min(r, s), u && (u.value = String(r)), p.forEach((c, l) => {
        c.classList.toggle("selected", l < r), c.style.pointerEvents = l < s ? "" : "none", c.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (r) => {
        if (r.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const c = o.dataset.moraleValue ?? "0";
        n(c), t._updateFormulaPreview(a);
      });
    }), n((u == null ? void 0 : u.value) ?? "0");
    const v = a.querySelector("input[name='constantBonus']");
    v && v.addEventListener("input", () => t._updateFormulaPreview(a)), v && v.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (o) => {
      var r, c, l, g;
      if ((c = (r = o.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (g = (l = o.target) == null ? void 0 : l.closest) != null && g.call(l, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var d, T, y, I, _, o, r, c, l, g, V, z;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((d = t.querySelector("input[name='advantage']")) == null ? void 0 : d.value) ?? "0", 10) || 0, i = parseInt(((T = t.querySelector("input[name='moraleDice']")) == null ? void 0 : T.value) ?? "0", 10) || 0, f = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, k = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, m = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, u = (l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") || (z = (V = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : V.has) != null && z.call(V, "poisoned") ? -1 : 0, p = k + m + s + f + u, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const v = document.createElement("img");
    if (v.src = "systems/vacuum-of-the-void/assets/d6.svg", v.alt = "d6", v.className = "roll-sheet-preview-die", n[0].appendChild(v), a !== 0) {
      const b = document.createElement("span");
      b.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const S = document.createElement("img");
      S.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", S.alt = a > 0 ? "előny d6" : "hátrány d6", S.className = "roll-sheet-preview-die", b.appendChild(S), n.push(b);
    }
    if (i > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${i} `;
      const S = document.createElement("img");
      S.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", S.alt = "d8", S.className = "roll-sheet-preview-die", b.appendChild(S), n.push(b);
    }
    if (p !== 0) {
      const b = document.createElement("span");
      b.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, n.push(b);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var c, l, g, V, z, b, S, W, N, q, j, K, B, E, D, Q, F, x;
    const e = this.actor, a = Math.max(0, Number(((l = (c = e == null ? void 0 : e.system) == null ? void 0 : c.resources) == null ? void 0 : l.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", k = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", i, f, k].filter(Boolean).join(" ") || "3d6";
    let s = "", u = 0;
    const p = [], n = [];
    let v = 0;
    if (this._isWeaponAttack && ((V = (g = game.user) == null ? void 0 : g.targets) != null && V.size)) {
      const M = Array.from(game.user.targets)[0], h = (M == null ? void 0 : M.actor) ?? null;
      s = (h == null ? void 0 : h.name) || (M == null ? void 0 : M.name) || "", (b = (z = h == null ? void 0 : h.statuses) == null ? void 0 : z.has) != null && b.call(z, "stunned") && (u += 1, p.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (W = (S = h == null ? void 0 : h.statuses) == null ? void 0 : S.has) != null && W.call(S, "unconscious") && (u += 1, p.push(game.i18n.localize("VOTV.StatusUnconscious"))), (q = (N = h == null ? void 0 : h.statuses) == null ? void 0 : N.has) != null && q.call(N, "grappled") && (u += 1, p.push(game.i18n.localize("VOTV.StatusGrappled"))), (K = (j = h == null ? void 0 : h.statuses) == null ? void 0 : j.has) != null && K.call(j, "dodge") && (v = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let d = v;
    (E = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && E.call(B, "diseased") && (d += 1, n.push(game.i18n.localize("VOTV.StatusDiseased"))), (Q = (D = e == null ? void 0 : e.statuses) == null ? void 0 : D.has) != null && Q.call(D, "poisoned") && (d += 1, n.push(game.i18n.localize("VOTV.StatusPoisoned"))), ((x = (F = e == null ? void 0 : e.statuses) == null ? void 0 : F.has) == null ? void 0 : x.call(F, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (d += 1, n.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const y = Math.min(3, Math.max(-3, u - d)), I = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", _ = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", r = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || _ || I;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: a,
      advantageValue: y,
      advantageSourcesText: p.length ? p.join(", ") : "",
      disadvantageSourcesText: n.length ? n.join(", ") : "",
      blockRollWarningMessage: r,
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
    var _, o, r, c, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((_ = t.system) == null ? void 0 : _.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : r.call(o, (g) => g.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), k = f ? i.find((g) => g.id === f) ?? null : null, m = (c = k == null ? void 0 : k.system) == null ? void 0 : c.bonus, s = a.bonus, u = m != null && String(m).trim() !== "", p = s != null && String(s).trim() !== "", v = Number(u ? m : p ? s : 0) || 0, d = this._skillKey, T = ((l = t.system) == null ? void 0 : l.skills) ?? {}, y = Number(T[d] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && d) {
      const g = ie._getSkillHealthStatusStatic(t, d);
      g === 1 ? I = -6 : g === 2 && (I = -3);
    }
    return v + y + I;
  }
  async _doRoll(t) {
    var a, i, f, k, m, s, u, p, n, v, d, T, y, I, _, o, r, c, l, g, V, z, b, S, W, N, q, j, K, B, E, D, Q, F, x;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const M = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, h = (M.itemId ?? "").trim(), O = h ? (((f = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : f.call(i, (w) => w.type === "Fegyver")) ?? []).find((w) => w.id === h) ?? null : null, R = (((k = O == null ? void 0 : O.system) == null ? void 0 : k.size) ?? M.size ?? "").toString().toLowerCase();
        if ((s = (m = e.statuses) == null ? void 0 : m.has) != null && s.call(m, "fullcover") && R !== "thrown") {
          const w = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (u = ui.notifications) == null ? void 0 : u.warn) == null || p.call(u, w);
          return;
        }
        if ((v = (n = e.statuses) == null ? void 0 : n.has) != null && v.call(n, "threequarteredcover") && (R === "medium" || R === "heavy")) {
          const w = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (T = (d = ui.notifications) == null ? void 0 : d.warn) == null || T.call(d, w);
          return;
        }
        if ((I = (y = e.statuses) == null ? void 0 : y.has) != null && I.call(y, "halfcover") && R === "heavy") {
          const w = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (_ = ui.notifications) == null ? void 0 : _.warn) == null || o.call(_, w);
          return;
        }
      }
      try {
        const H = t.querySelector("[name='moraleDice']"), M = t.querySelector("[name='advantage']"), h = t.querySelector("[name='constantBonus']"), O = Math.min(3, Math.max(0, parseInt((H == null ? void 0 : H.value) ?? "0", 10) || 0)), R = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), w = Math.min(O, R), A = Math.min(3, Math.max(-3, parseInt((M == null ? void 0 : M.value) ?? "0", 10) || 0)), U = parseInt((h == null ? void 0 : h.value) ?? "0", 10) || 0, se = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, G = this._isWeaponAttack ? 0 : this._injuryModifier, ae = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, oe = ((g = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : g.call(l, "diseased")) || ((z = (V = e.statuses) == null ? void 0 : V.has) == null ? void 0 : z.call(V, "poisoned")) ? -1 : 0, P = se + G + ae + U + oe, ve = [
          "3d6",
          A > 0 ? `+${A}d6` : A < 0 ? `-${Math.abs(A)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          P !== 0 ? P > 0 ? `+${P}` : `${P}` : ""
        ].filter(Boolean).join(" "), ee = new Roll(ve);
        await ee.evaluate({ async: !0 });
        const { resultType: fe, label: ye } = ze(ee), ge = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let be = this._label;
        const le = { resultType: fe, critLabel: ye };
        if (this._isWeaponAttack && ((S = (b = game.user) == null ? void 0 : b.targets) != null && S.size)) {
          const J = Array.from(game.user.targets)[0], C = (J == null ? void 0 : J.actor) ?? null;
          if (C) {
            const ce = ((W = C.system) == null ? void 0 : W.combat) ?? {}, Se = Number(ce.defense ?? 0) || 0, ke = Number(ce.defenseBonus ?? 0) || 0, _e = Number(ce.givenProtection ?? 0) || 0, we = (q = (N = C.statuses) == null ? void 0 : N.has) != null && q.call(N, "lookaround") ? 1 : 0, Ie = (K = (j = C.statuses) == null ? void 0 : j.has) != null && K.call(j, "halfcover") ? 3 : 0, Me = (E = (B = C.statuses) == null ? void 0 : B.has) != null && E.call(B, "threequarteredcover") ? 6 : 0;
            let ue = 0;
            if (C.type === "Karakter") {
              const X = (((D = C.items) == null ? void 0 : D.contents) ?? []).filter(
                (ne) => {
                  var re;
                  return ne.type === "Pancel" && ((re = ne.system) == null ? void 0 : re.equipped) === !0;
                }
              );
              for (const ne of X) {
                const re = String(((Q = ne.system) == null ? void 0 : Q.protectionBonus) ?? "").trim().replace(",", "."), me = Number(re);
                Number.isFinite(me) && (ue += me);
              }
            }
            const Ce = _e + ue + we + Ie + Me, de = Se + ke + Ce, Te = Number(ee.total ?? 0) || 0, he = !(((x = (F = C.statuses) == null ? void 0 : F.has) == null ? void 0 : x.call(F, "fullcover")) ?? !1) && Te >= de, Ve = C.name ?? J.name ?? "Célpont";
            let $ = null, te = null;
            if (he && C.type === "Karakter")
              try {
                const X = new Roll("1d8");
                await X.evaluate({ async: !0 }), $ = Number(X.total ?? 0) || 1, $ === 1 ? te = "Fej" : $ >= 2 && $ <= 4 ? te = "Törzs" : $ === 5 || $ === 6 ? te = "Karok" : te = "Lábak";
              } catch (X) {
                console.warn("VOTV hit location roll failed:", X);
              }
            le.weaponAttack = !0, le.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: C.id ?? null,
              targetName: Ve,
              defense: de,
              isHit: he,
              hitLocationRoll: $ ?? null,
              hitLocationName: te ?? null
            };
          }
        }
        if (await ee.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: be,
          flags: { "vacuum-of-the-void": le },
          rollMode: ge
        }), w > 0) {
          const Y = Math.max(0, R - w);
          await e.update({ "system.resources.morale": Y });
        }
        if (this._isInitiativeRoll)
          try {
            const Y = Number(ee.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": Y });
            const J = e.apps ?? [];
            for (const C of J)
              typeof (C == null ? void 0 : C.render) == "function" && C.render(!0);
          } catch (Y) {
            console.warn("VOTV initiative result update:", Y);
          }
      } finally {
        this.close();
      }
    }
  }
}
function je(L, t, e) {
  var s, u;
  if (!L) return;
  const a = Number(((u = (s = L.system) == null ? void 0 : s.skills) == null ? void 0 : u[t]) ?? 0) || 0, i = ie.BODY_PART_BY_SKILL[t] ? ie._getSkillHealthStatusStatic(L, t) : void 0;
  let f = 0;
  i === 1 ? f = -6 : i === 2 && (f = -3);
  const k = (e || "").trim() === "Kezdeményezés";
  new pe({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: k
  }).render(!0);
}
function Be(L, t) {
  var F, x, H, M, h, O, R, w, A, U, se, G, ae, Z, oe;
  if (!L || !t) return;
  const e = L, i = (((F = e.system) == null ? void 0 : F.weapons) ?? {})[t] ?? {}, f = ((x = e.system) == null ? void 0 : x.skills) ?? {}, k = ((M = (H = e.items) == null ? void 0 : H.filter) == null ? void 0 : M.call(H, (P) => P.type === "Fegyver")) ?? [], m = (i.itemId ?? "").trim(), s = m ? k.find((P) => P.id === m) ?? null : null, u = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", p = (h = s == null ? void 0 : s.system) == null ? void 0 : h.bonus, n = i.bonus, v = p != null && String(p).trim() !== "", d = n != null && String(n).trim() !== "", y = Number(v ? p : d ? n : 0) || 0, I = ((O = s == null ? void 0 : s.system) == null ? void 0 : O.type) || "kinetic", _ = (((R = s == null ? void 0 : s.system) == null ? void 0 : R.skillKey) ?? "").trim(), o = _ && f[_] !== void 0 ? _ : I === "explosive" ? "grenadeUse" : "firearms", r = Number(f[o] || 0) || 0, c = y + r;
  let l = 0;
  if (e.type === "Karakter") {
    const P = ie._getSkillHealthStatusStatic(e, o);
    P === 1 ? l = -6 : P === 2 && (l = -3);
  }
  const g = (((w = s == null ? void 0 : s.system) == null ? void 0 : w.damage) ?? "").trim(), V = (i.damage ?? "").trim(), z = g || V || "", b = (((A = s == null ? void 0 : s.system) == null ? void 0 : A.size) ?? i.size ?? "").toString().toLowerCase(), S = b === "heavy", W = b === "medium", N = b === "thrown", q = ((se = (U = e.statuses) == null ? void 0 : U.has) == null ? void 0 : se.call(U, "halfcover")) ?? !1, j = ((ae = (G = e.statuses) == null ? void 0 : G.has) == null ? void 0 : ae.call(G, "threequarteredcover")) ?? !1, K = ((oe = (Z = e.statuses) == null ? void 0 : Z.has) == null ? void 0 : oe.call(Z, "fullcover")) ?? !1, B = S && q, E = j && (W || S), D = K && !N;
  new pe({
    actor: L,
    skillKey: o,
    label: u,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? m,
    weaponDamageFormula: z,
    blockHeavyInHalfCover: B,
    blockMediumHeavyInThreeQuarterCover: E,
    blockNonThrownInFullCover: D
  }).render(!0);
}
export {
  pe as VoidRollSheet,
  je as openRollSheetForSkill,
  Be as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-B0YpEVin.mjs.map
