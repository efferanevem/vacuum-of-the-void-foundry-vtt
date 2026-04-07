import { V as ie, c as ze } from "./vacuum-of-the-void-BLPYlD2a.mjs";
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
      baseModifier: y,
      injuryModifier: S,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: u,
      weaponSlotKey: m,
      weaponItemId: n,
      weaponDamageFormula: v,
      blockHeavyInHalfCover: p,
      blockMediumHeavyInThreeQuarterCover: V,
      blockNonThrownInFullCover: g
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(y) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!u, this._weaponSlotKey = m || "", this._weaponItemId = n || "", this._weaponDamageFormula = typeof v == "string" ? v.trim() : "", this._blockHeavyInHalfCover = !!p, this._blockMediumHeavyInThreeQuarterCover = !!V, this._blockNonThrownInFullCover = !!g;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var p, V, g, I, k;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((V = (p = this.element) == null ? void 0 : p.querySelector) == null ? void 0 : V.call(p, "form.votv.roll-sheet")) ?? ((I = (g = this.element) == null ? void 0 : g.matches) != null && I.call(g, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), y = a.querySelectorAll(".roll-sheet-advantage-d6"), S = (o) => {
      const r = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      i && (i.value = String(r)), y.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    y.forEach((o) => {
      o.addEventListener("click", (r) => {
        r.preventDefault(), S(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), S((i == null ? void 0 : i.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((k = h == null ? void 0 : h.dataset) == null ? void 0 : k.moraleMax) ?? "3", 10) || 0)), u = a.querySelector("input[name='moraleDice']"), m = a.querySelectorAll(".roll-sheet-morale-d8"), n = (o) => {
      let r = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      r = Math.min(r, s), u && (u.value = String(r)), m.forEach((c, l) => {
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
      var r, c, l, b;
      if ((c = (r = o.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (b = (l = o.target) == null ? void 0 : l.closest) != null && b.call(l, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var p, V, g, I, k, o, r, c, l, b, M, F;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((p = t.querySelector("input[name='advantage']")) == null ? void 0 : p.value) ?? "0", 10) || 0, i = parseInt(((V = t.querySelector("input[name='moraleDice']")) == null ? void 0 : V.value) ?? "0", 10) || 0, y = parseInt(((g = t.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, S = parseInt(((I = t.dataset) == null ? void 0 : I.baseMod) ?? "0", 10) || 0, h = parseInt(((k = t.dataset) == null ? void 0 : k.injuryMod) ?? "0", 10) || 0, s = parseInt(((o = t.dataset) == null ? void 0 : o.injuryPenalty) ?? "0", 10) || 0, u = (l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") || (F = (M = (b = this.actor) == null ? void 0 : b.statuses) == null ? void 0 : M.has) != null && F.call(M, "poisoned") ? -1 : 0, m = S + h + s + y + u, n = [];
    n.push(document.createElement("span")), n[0].textContent = "Összesítve: 3 ";
    const v = document.createElement("img");
    if (v.src = "systems/vacuum-of-the-void/assets/d6.svg", v.alt = "d6", v.className = "roll-sheet-preview-die", n[0].appendChild(v), a !== 0) {
      const f = document.createElement("span");
      f.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const _ = document.createElement("img");
      _.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", _.alt = a > 0 ? "előny d6" : "hátrány d6", _.className = "roll-sheet-preview-die", f.appendChild(_), n.push(f);
    }
    if (i > 0) {
      const f = document.createElement("span");
      f.textContent = ` + ${i} `;
      const _ = document.createElement("img");
      _.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", _.alt = "d8", _.className = "roll-sheet-preview-die", f.appendChild(_), n.push(f);
    }
    if (m !== 0) {
      const f = document.createElement("span");
      f.textContent = m > 0 ? ` + ${m}` : ` − ${Math.abs(m)}`, n.push(f);
    }
    e.innerHTML = "", e.append(...n);
  }
  getData(t = {}) {
    var r, c, l, b, M, F, f, _, P, H, R, L, D, x, O, E, q, N;
    const e = this.actor, a = Math.max(0, Number(((c = (r = e == null ? void 0 : e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", i, y, S].filter(Boolean).join(" ") || "3d6";
    let s = "", u = 0;
    const m = [], n = [];
    let v = 0;
    if (this._isWeaponAttack && ((b = (l = game.user) == null ? void 0 : l.targets) != null && b.size)) {
      const C = Array.from(game.user.targets)[0], d = (C == null ? void 0 : C.actor) ?? null;
      s = (d == null ? void 0 : d.name) || (C == null ? void 0 : C.name) || "", (F = (M = d == null ? void 0 : d.statuses) == null ? void 0 : M.has) != null && F.call(M, "stunned") && (u = 1, m.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (_ = (f = d == null ? void 0 : d.statuses) == null ? void 0 : f.has) != null && _.call(f, "unconscious") && (u = 1, m.push(game.i18n.localize("VOTV.StatusUnconscious"))), (H = (P = d == null ? void 0 : d.statuses) == null ? void 0 : P.has) != null && H.call(P, "grappled") && (u = 1, m.push(game.i18n.localize("VOTV.StatusGrappled"))), (L = (R = d == null ? void 0 : d.statuses) == null ? void 0 : R.has) != null && L.call(R, "dodge") && (v = 1, n.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    (x = (D = e == null ? void 0 : e.statuses) == null ? void 0 : D.has) != null && x.call(D, "diseased") && n.push(game.i18n.localize("VOTV.StatusDiseased")), (E = (O = e == null ? void 0 : e.statuses) == null ? void 0 : O.has) != null && E.call(O, "poisoned") && n.push(game.i18n.localize("VOTV.StatusPoisoned"));
    const p = ((N = (q = e == null ? void 0 : e.statuses) == null ? void 0 : q.has) == null ? void 0 : N.call(q, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck";
    p && n.push(game.i18n.localize("VOTV.StatusIntoxicated"));
    const V = Math.min(3, Math.max(
      -3,
      u - v + (p ? -1 : 0)
    )), g = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", I = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", o = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || I || g;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: V,
      advantageSourcesText: m.length ? m.join(", ") : "",
      disadvantageSourcesText: n.length ? n.join(", ") : "",
      blockRollWarningMessage: o,
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
    var k, o, r, c, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((k = t.system) == null ? void 0 : k.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (o = t.items) == null ? void 0 : o.filter) == null ? void 0 : r.call(o, (b) => b.type === "Fegyver")) ?? [], y = (a.itemId ?? "").trim(), S = y ? i.find((b) => b.id === y) ?? null : null, h = (c = S == null ? void 0 : S.system) == null ? void 0 : c.bonus, s = a.bonus, u = h != null && String(h).trim() !== "", m = s != null && String(s).trim() !== "", v = Number(u ? h : m ? s : 0) || 0, p = this._skillKey, V = ((l = t.system) == null ? void 0 : l.skills) ?? {}, g = Number(V[p] ?? 0) || 0;
    let I = 0;
    if (t.type === "Karakter" && p) {
      const b = ie._getSkillHealthStatusStatic(t, p);
      b === 1 ? I = -6 : b === 2 && (I = -3);
    }
    return v + g + I;
  }
  async _doRoll(t) {
    var a, i, y, S, h, s, u, m, n, v, p, V, g, I, k, o, r, c, l, b, M, F, f, _, P, H, R, L, D, x, O, E, q, N, Q;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const d = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, W = (d.itemId ?? "").trim(), K = W ? (((y = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : y.call(i, (w) => w.type === "Fegyver")) ?? []).find((w) => w.id === W) ?? null : null, j = (((S = K == null ? void 0 : K.system) == null ? void 0 : S.size) ?? d.size ?? "").toString().toLowerCase();
        if ((s = (h = e.statuses) == null ? void 0 : h.has) != null && s.call(h, "fullcover") && j !== "thrown") {
          const w = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (m = (u = ui.notifications) == null ? void 0 : u.warn) == null || m.call(u, w);
          return;
        }
        if ((v = (n = e.statuses) == null ? void 0 : n.has) != null && v.call(n, "threequarteredcover") && (j === "medium" || j === "heavy")) {
          const w = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (V = (p = ui.notifications) == null ? void 0 : p.warn) == null || V.call(p, w);
          return;
        }
        if ((I = (g = e.statuses) == null ? void 0 : g.has) != null && I.call(g, "halfcover") && j === "heavy") {
          const w = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (o = (k = ui.notifications) == null ? void 0 : k.warn) == null || o.call(k, w);
          return;
        }
      }
      try {
        const C = t.querySelector("[name='moraleDice']"), d = t.querySelector("[name='advantage']"), W = t.querySelector("[name='constantBonus']"), K = Math.min(3, Math.max(0, parseInt((C == null ? void 0 : C.value) ?? "0", 10) || 0)), j = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), w = Math.min(K, j), A = Math.min(3, Math.max(-3, parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0)), U = parseInt((W == null ? void 0 : W.value) ?? "0", 10) || 0, se = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, G = this._isWeaponAttack ? 0 : this._injuryModifier, ae = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, oe = ((b = (l = e.statuses) == null ? void 0 : l.has) == null ? void 0 : b.call(l, "diseased")) || ((F = (M = e.statuses) == null ? void 0 : M.has) == null ? void 0 : F.call(M, "poisoned")) ? -1 : 0, z = se + G + ae + U + oe, ve = [
          "3d6",
          A > 0 ? `+${A}d6` : A < 0 ? `-${Math.abs(A)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          z !== 0 ? z > 0 ? `+${z}` : `${z}` : ""
        ].filter(Boolean).join(" "), ee = new Roll(ve);
        await ee.evaluate({ async: !0 });
        const { resultType: fe, label: ye } = ze(ee), ge = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let be = this._label;
        const le = { resultType: fe, critLabel: ye };
        if (this._isWeaponAttack && ((_ = (f = game.user) == null ? void 0 : f.targets) != null && _.size)) {
          const J = Array.from(game.user.targets)[0], T = (J == null ? void 0 : J.actor) ?? null;
          if (T) {
            const ce = ((P = T.system) == null ? void 0 : P.combat) ?? {}, Se = Number(ce.defense ?? 0) || 0, ke = Number(ce.defenseBonus ?? 0) || 0, _e = Number(ce.givenProtection ?? 0) || 0, we = (R = (H = T.statuses) == null ? void 0 : H.has) != null && R.call(H, "lookaround") ? 1 : 0, Ie = (D = (L = T.statuses) == null ? void 0 : L.has) != null && D.call(L, "halfcover") ? 3 : 0, Me = (O = (x = T.statuses) == null ? void 0 : x.has) != null && O.call(x, "threequarteredcover") ? 6 : 0;
            let ue = 0;
            if (T.type === "Karakter") {
              const X = (((E = T.items) == null ? void 0 : E.contents) ?? []).filter(
                (ne) => {
                  var re;
                  return ne.type === "Pancel" && ((re = ne.system) == null ? void 0 : re.equipped) === !0;
                }
              );
              for (const ne of X) {
                const re = String(((q = ne.system) == null ? void 0 : q.protectionBonus) ?? "").trim().replace(",", "."), me = Number(re);
                Number.isFinite(me) && (ue += me);
              }
            }
            const Ce = _e + ue + we + Ie + Me, de = Se + ke + Ce, Te = Number(ee.total ?? 0) || 0, he = !(((Q = (N = T.statuses) == null ? void 0 : N.has) == null ? void 0 : Q.call(N, "fullcover")) ?? !1) && Te >= de, Ve = T.name ?? J.name ?? "Célpont";
            let $ = null, te = null;
            if (he && T.type === "Karakter")
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
              targetActorId: T.id ?? null,
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
          const Y = Math.max(0, j - w);
          await e.update({ "system.resources.morale": Y });
        }
        if (this._isInitiativeRoll)
          try {
            const Y = Number(ee.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": Y });
            const J = e.apps ?? [];
            for (const T of J)
              typeof (T == null ? void 0 : T.render) == "function" && T.render(!0);
          } catch (Y) {
            console.warn("VOTV initiative result update:", Y);
          }
      } finally {
        this.close();
      }
    }
  }
}
function je(B, t, e) {
  var s, u;
  if (!B) return;
  const a = Number(((u = (s = B.system) == null ? void 0 : s.skills) == null ? void 0 : u[t]) ?? 0) || 0, i = ie.BODY_PART_BY_SKILL[t] ? ie._getSkillHealthStatusStatic(B, t) : void 0;
  let y = 0;
  i === 1 ? y = -6 : i === 2 && (y = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new pe({
    actor: B,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: y,
    isInitiativeRoll: S
  }).render(!0);
}
function Be(B, t) {
  var N, Q, C, d, W, K, j, w, A, U, se, G, ae, Z, oe;
  if (!B || !t) return;
  const e = B, i = (((N = e.system) == null ? void 0 : N.weapons) ?? {})[t] ?? {}, y = ((Q = e.system) == null ? void 0 : Q.skills) ?? {}, S = ((d = (C = e.items) == null ? void 0 : C.filter) == null ? void 0 : d.call(C, (z) => z.type === "Fegyver")) ?? [], h = (i.itemId ?? "").trim(), s = h ? S.find((z) => z.id === h) ?? null : null, u = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", m = (W = s == null ? void 0 : s.system) == null ? void 0 : W.bonus, n = i.bonus, v = m != null && String(m).trim() !== "", p = n != null && String(n).trim() !== "", g = Number(v ? m : p ? n : 0) || 0, I = ((K = s == null ? void 0 : s.system) == null ? void 0 : K.type) || "kinetic", k = (((j = s == null ? void 0 : s.system) == null ? void 0 : j.skillKey) ?? "").trim(), o = k && y[k] !== void 0 ? k : I === "explosive" ? "grenadeUse" : "firearms", r = Number(y[o] || 0) || 0, c = g + r;
  let l = 0;
  if (e.type === "Karakter") {
    const z = ie._getSkillHealthStatusStatic(e, o);
    z === 1 ? l = -6 : z === 2 && (l = -3);
  }
  const b = (((w = s == null ? void 0 : s.system) == null ? void 0 : w.damage) ?? "").trim(), M = (i.damage ?? "").trim(), F = b || M || "", f = (((A = s == null ? void 0 : s.system) == null ? void 0 : A.size) ?? i.size ?? "").toString().toLowerCase(), _ = f === "heavy", P = f === "medium", H = f === "thrown", R = ((se = (U = e.statuses) == null ? void 0 : U.has) == null ? void 0 : se.call(U, "halfcover")) ?? !1, L = ((ae = (G = e.statuses) == null ? void 0 : G.has) == null ? void 0 : ae.call(G, "threequarteredcover")) ?? !1, D = ((oe = (Z = e.statuses) == null ? void 0 : Z.has) == null ? void 0 : oe.call(Z, "fullcover")) ?? !1, x = _ && R, O = L && (P || _), E = D && !H;
  new pe({
    actor: B,
    skillKey: o,
    label: u,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: F,
    blockHeavyInHalfCover: x,
    blockMediumHeavyInThreeQuarterCover: O,
    blockNonThrownInFullCover: E
  }).render(!0);
}
export {
  pe as VoidRollSheet,
  je as openRollSheetForSkill,
  Be as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-CSEaIB3h.mjs.map
