import { V as le, c as Ce } from "./vacuum-of-the-void-Dph9fuOy.mjs";
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
      baseModifier: f,
      injuryModifier: k,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: c,
      weaponSlotKey: m,
      weaponItemId: o,
      weaponDamageFormula: v,
      blockHeavyInHalfCover: p,
      blockMediumHeavyInThreeQuarterCover: T,
      blockNonThrownInFullCover: y
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(f) || 0, this._injuryModifier = Number(k) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!c, this._weaponSlotKey = m || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof v == "string" ? v.trim() : "", this._blockHeavyInHalfCover = !!p, this._blockMediumHeavyInThreeQuarterCover = !!T, this._blockNonThrownInFullCover = !!y;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var p, T, y, M, _;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((T = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : T.call(p, "form.votv.roll-sheet")) ?? ((M = (y = this.element) == null ? void 0 : y.matches) != null && M.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), f = a.querySelectorAll(".roll-sheet-advantage-d6"), k = (n) => {
      const l = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(l)), f.forEach((u) => {
        const i = parseInt(u.dataset.advantageValue ?? "0", 10);
        u.classList.toggle("selected", i === l);
      });
    };
    f.forEach((n) => {
      n.addEventListener("click", (l) => {
        l.preventDefault(), k(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), k((r == null ? void 0 : r.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((_ = h == null ? void 0 : h.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), c = a.querySelector("input[name='moraleDice']"), m = a.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let l = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      l = Math.min(l, s), c && (c.value = String(l)), m.forEach((u, i) => {
        u.classList.toggle("selected", i < l), u.style.pointerEvents = i < s ? "" : "none", u.style.opacity = i < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (l) => {
        if (l.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const u = n.dataset.moraleValue ?? "0";
        o(u), t._updateFormulaPreview(a);
      });
    }), o((c == null ? void 0 : c.value) ?? "0");
    const v = a.querySelector("input[name='constantBonus']");
    v && v.addEventListener("input", () => t._updateFormulaPreview(a)), v && v.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var l, u, i, g;
      if ((u = (l = n.target) == null ? void 0 : l.closest) != null && u.call(l, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (g = (i = n.target) == null ? void 0 : i.closest) != null && g.call(i, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var p, T, y, M, _, n, l, u, i, g, V, z;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((p = t.querySelector("input[name='advantage']")) == null ? void 0 : p.value) ?? "0", 10) || 0, r = parseInt(((T = t.querySelector("input[name='moraleDice']")) == null ? void 0 : T.value) ?? "0", 10) || 0, f = parseInt(((y = t.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, k = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, h = parseInt(((_ = t.dataset) == null ? void 0 : _.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, c = ((i = (u = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : u.has) != null && i.call(u, "diseased") ? -1 : 0) + ((z = (V = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : V.has) != null && z.call(V, "poisoned") ? -1 : 0), m = k + h + s + f + c, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const v = document.createElement("img");
    if (v.src = "systems/vacuum-of-the-void/assets/d6.svg", v.alt = "d6", v.className = "roll-sheet-preview-die", o[0].appendChild(v), a !== 0) {
      const b = document.createElement("span");
      b.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const S = document.createElement("img");
      S.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", S.alt = a > 0 ? "előny d6" : "hátrány d6", S.className = "roll-sheet-preview-die", b.appendChild(S), o.push(b);
    }
    if (r > 0) {
      const b = document.createElement("span");
      b.textContent = ` + ${r} `;
      const S = document.createElement("img");
      S.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", S.alt = "d8", S.className = "roll-sheet-preview-die", b.appendChild(S), o.push(b);
    }
    if (m !== 0) {
      const b = document.createElement("span");
      b.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, o.push(b);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var u, i, g, V, z, b, S, E, N, $, j, A, B, Q, D, Y, F, O;
    const e = this.actor, a = Math.max(0, Number(((i = (u = e == null ? void 0 : e.system) == null ? void 0 : u.resources) == null ? void 0 : i.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", f = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", k = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, f, k].filter(Boolean).join(" ") || "3d6";
    let s = "", c = 0;
    const m = [], o = [];
    let v = 0;
    if ((V = (g = game.user) == null ? void 0 : g.targets) != null && V.size) {
      const C = Array.from(game.user.targets)[0], d = (C == null ? void 0 : C.actor) ?? null;
      s = (d == null ? void 0 : d.name) || (C == null ? void 0 : C.name) || "", (b = (z = d == null ? void 0 : d.statuses) == null ? void 0 : z.has) != null && b.call(z, "stunned") && (c += 1, m.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (E = (S = d == null ? void 0 : d.statuses) == null ? void 0 : S.has) != null && E.call(S, "unconscious") && (c += 1, m.push(game.i18n.localize("VOTV.StatusUnconscious"))), ($ = (N = d == null ? void 0 : d.statuses) == null ? void 0 : N.has) != null && $.call(N, "grappled") && (c += 1, m.push(game.i18n.localize("VOTV.StatusGrappled"))), (A = (j = d == null ? void 0 : d.statuses) == null ? void 0 : j.has) != null && A.call(j, "dodge") && (v = 1, o.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let p = v;
    (Q = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) != null && Q.call(B, "diseased") && o.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (Y = (D = e == null ? void 0 : e.statuses) == null ? void 0 : D.has) != null && Y.call(D, "poisoned") && o.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((O = (F = e == null ? void 0 : e.statuses) == null ? void 0 : F.has) == null ? void 0 : O.call(F, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (p += 1, o.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const y = Math.min(3, Math.max(-3, c - p)), M = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", _ = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", l = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || _ || M;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: y,
      advantageSourcesText: m.length ? m.join(", ") : "",
      disadvantageSourcesText: o.length ? o.join(", ") : "",
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
    var _, n, l, u, i;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((_ = t.system) == null ? void 0 : _.weapons) ?? {})[this._weaponSlotKey] ?? {}, r = ((l = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : l.call(n, (g) => g.type === "Fegyver")) ?? [], f = (a.itemId ?? "").trim(), k = f ? r.find((g) => g.id === f) ?? null : null, h = (u = k == null ? void 0 : k.system) == null ? void 0 : u.bonus, s = a.bonus, c = h != null && String(h).trim() !== "", m = s != null && String(s).trim() !== "", v = Number(c ? h : m ? s : 0) || 0, p = this._skillKey, T = ((i = t.system) == null ? void 0 : i.skills) ?? {}, y = Number(T[p] ?? 0) || 0;
    let M = 0;
    if (t.type === "Karakter" && p) {
      const g = le._getSkillHealthStatusStatic(t, p);
      g === 1 ? M = -6 : g === 2 && (M = -3);
    }
    return v + y + M;
  }
  async _doRoll(t) {
    var a, r, f, k, h, s, c, m, o, v, p, T, y, M, _, n, l, u, i, g, V, z, b, S, E, N, $, j, A, B, Q, D, Y, F, O;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const C = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, d = (C.itemId ?? "").trim(), q = d ? (((f = (r = e.items) == null ? void 0 : r.filter) == null ? void 0 : f.call(r, (w) => w.type === "Fegyver")) ?? []).find((w) => w.id === d) ?? null : null, P = (((k = q == null ? void 0 : q.system) == null ? void 0 : k.size) ?? C.size ?? "").toString().toLowerCase();
        if ((s = (h = e.statuses) == null ? void 0 : h.has) != null && s.call(h, "fullcover") && P !== "thrown") {
          const w = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (m = (c = ui.notifications) == null ? void 0 : c.warn) == null || m.call(c, w);
          return;
        }
        if ((v = (o = e.statuses) == null ? void 0 : o.has) != null && v.call(o, "threequarteredcover") && (P === "medium" || P === "heavy")) {
          const w = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (T = (p = ui.notifications) == null ? void 0 : p.warn) == null || T.call(p, w);
          return;
        }
        if ((M = (y = e.statuses) == null ? void 0 : y.has) != null && M.call(y, "halfcover") && P === "heavy") {
          const w = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (_ = ui.notifications) == null ? void 0 : _.warn) == null || n.call(_, w);
          return;
        }
      }
      try {
        const H = t.querySelector("[name='moraleDice']"), C = t.querySelector("[name='advantage']"), d = t.querySelector("[name='constantBonus']"), q = Math.min(3, Math.max(0, parseInt((H == null ? void 0 : H.value) ?? "0", 10) || 0)), P = Math.max(0, Number(((u = (l = e.system) == null ? void 0 : l.resources) == null ? void 0 : u.morale) ?? 0) || 0), w = Math.min(q, P), U = Math.min(3, Math.max(-3, parseInt((C == null ? void 0 : C.value) ?? "0", 10) || 0)), J = parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0, ne = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, X = this._isWeaponAttack ? 0 : this._injuryModifier, oe = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, Z = ((g = (i = e.statuses) == null ? void 0 : i.has) != null && g.call(i, "diseased") ? -1 : 0) + ((z = (V = e.statuses) == null ? void 0 : V.has) != null && z.call(V, "poisoned") ? -1 : 0), G = ne + X + oe + J + Z, K = [
          "3d6",
          U > 0 ? `+${U}d6` : U < 0 ? `-${Math.abs(U)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          G !== 0 ? G > 0 ? `+${G}` : `${G}` : ""
        ].filter(Boolean).join(" "), se = new Roll(K);
        await se.evaluate({ async: !0 });
        const { resultType: pe, label: ve } = Ce(se), fe = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let ye = this._label;
        const ae = { resultType: pe, critLabel: ve };
        if ((S = (b = game.user) == null ? void 0 : b.targets) != null && S.size) {
          const te = Array.from(game.user.targets)[0], I = (te == null ? void 0 : te.actor) ?? null;
          if (I) {
            const re = ((E = I.system) == null ? void 0 : E.combat) ?? {}, ge = Number(re.defense ?? 0) || 0, be = Number(re.defenseBonus ?? 0) || 0, Se = Number(re.givenProtection ?? 0) || 0, ke = ($ = (N = I.statuses) == null ? void 0 : N.has) != null && $.call(N, "lookaround") ? 1 : 0, _e = (A = (j = I.statuses) == null ? void 0 : j.has) != null && A.call(j, "halfcover") ? 3 : 0, we = (Q = (B = I.statuses) == null ? void 0 : B.has) != null && Q.call(B, "threequarteredcover") ? 6 : 0;
            let ce = 0;
            if (I.type === "Karakter") {
              const x = (((D = I.items) == null ? void 0 : D.contents) ?? []).filter(
                (R) => {
                  var W;
                  return R.type === "Pancel" && ((W = R.system) == null ? void 0 : W.equipped) === !0;
                }
              );
              for (const R of x) {
                const W = String(((Y = R.system) == null ? void 0 : Y.protectionBonus) ?? "").trim().replace(",", "."), he = Number(W);
                Number.isFinite(he) && (ce += he);
              }
            }
            const Ie = Se + ce + ke + _e + we, ie = ge + be + Ie, Me = Number(se.total ?? 0) || 0, ue = !(((O = (F = I.statuses) == null ? void 0 : F.has) == null ? void 0 : O.call(F, "fullcover")) ?? !1) && Me >= ie, de = I.name ?? te.name ?? "Célpont";
            if (this._isWeaponAttack) {
              let x = null, R = null;
              if (ue && I.type === "Karakter")
                try {
                  const W = new Roll("1d8");
                  await W.evaluate({ async: !0 }), x = Number(W.total ?? 0) || 1, x === 1 ? R = "Fej" : x >= 2 && x <= 4 ? R = "Törzs" : x === 5 || x === 6 ? R = "Karok" : R = "Lábak";
                } catch (W) {
                  console.warn("VOTV hit location roll failed:", W);
                }
              ae.weaponAttack = !0, ae.weapon = {
                actorId: e.id ?? null,
                itemId: this._weaponItemId || null,
                slotKey: this._weaponSlotKey || null,
                damageFormula: this._weaponDamageFormula || null,
                targetActorId: I.id ?? null,
                targetName: de,
                defense: ie,
                isHit: ue,
                hitLocationRoll: x ?? null,
                hitLocationName: R ?? null
              };
            } else
              ae.vsDefense = !0, ae.vsDefenseInfo = {
                targetActorId: I.id ?? null,
                targetName: de,
                defense: ie,
                isHit: ue
              };
          }
        }
        if (await se.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: ye,
          flags: { "vacuum-of-the-void": ae },
          rollMode: fe
        }), w > 0) {
          const ee = Math.max(0, P - w);
          await e.update({ "system.resources.morale": ee });
        }
        if (this._isInitiativeRoll)
          try {
            const ee = Number(se.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": ee });
            const te = e.apps ?? [];
            for (const I of te)
              typeof (I == null ? void 0 : I.render) == "function" && I.render(!0);
          } catch (ee) {
            console.warn("VOTV initiative result update:", ee);
          }
      } finally {
        this.close();
      }
    }
  }
}
function ze(L, t, e) {
  var s, c;
  if (!L) return;
  const a = Number(((c = (s = L.system) == null ? void 0 : s.skills) == null ? void 0 : c[t]) ?? 0) || 0, r = le.BODY_PART_BY_SKILL[t] ? le._getSkillHealthStatusStatic(L, t) : void 0;
  let f = 0;
  r === 1 ? f = -6 : r === 2 && (f = -3);
  const k = (e || "").trim() === "Kezdeményezés";
  new me({
    actor: L,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: f,
    isInitiativeRoll: k
  }).render(!0);
}
function Fe(L, t) {
  var F, O, H, C, d, q, P, w, U, J, ne, X, oe, Z, G;
  if (!L || !t) return;
  const e = L, r = (((F = e.system) == null ? void 0 : F.weapons) ?? {})[t] ?? {}, f = ((O = e.system) == null ? void 0 : O.skills) ?? {}, k = ((C = (H = e.items) == null ? void 0 : H.filter) == null ? void 0 : C.call(H, (K) => K.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), s = h ? k.find((K) => K.id === h) ?? null : null, c = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", m = (d = s == null ? void 0 : s.system) == null ? void 0 : d.bonus, o = r.bonus, v = m != null && String(m).trim() !== "", p = o != null && String(o).trim() !== "", y = Number(v ? m : p ? o : 0) || 0, M = ((q = s == null ? void 0 : s.system) == null ? void 0 : q.type) || "kinetic", _ = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.skillKey) ?? "").trim(), n = _ && f[_] !== void 0 ? _ : M === "explosive" ? "grenadeUse" : "firearms", l = Number(f[n] || 0) || 0, u = y + l;
  let i = 0;
  if (e.type === "Karakter") {
    const K = le._getSkillHealthStatusStatic(e, n);
    K === 1 ? i = -6 : K === 2 && (i = -3);
  }
  const g = (((w = s == null ? void 0 : s.system) == null ? void 0 : w.damage) ?? "").trim(), V = (r.damage ?? "").trim(), z = g || V || "", b = (((U = s == null ? void 0 : s.system) == null ? void 0 : U.size) ?? r.size ?? "").toString().toLowerCase(), S = b === "heavy", E = b === "medium", N = b === "thrown", $ = ((ne = (J = e.statuses) == null ? void 0 : J.has) == null ? void 0 : ne.call(J, "halfcover")) ?? !1, j = ((oe = (X = e.statuses) == null ? void 0 : X.has) == null ? void 0 : oe.call(X, "threequarteredcover")) ?? !1, A = ((G = (Z = e.statuses) == null ? void 0 : Z.has) == null ? void 0 : G.call(Z, "fullcover")) ?? !1, B = S && $, Q = j && (E || S), D = A && !N;
  new me({
    actor: L,
    skillKey: n,
    label: c,
    baseModifier: u,
    injuryModifier: 0,
    injuryPenalty: i,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: z,
    blockHeavyInHalfCover: B,
    blockMediumHeavyInThreeQuarterCover: Q,
    blockNonThrownInFullCover: D
  }).render(!0);
}
export {
  me as VoidRollSheet,
  ze as openRollSheetForSkill,
  Fe as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-C7z9EZf-.mjs.map
