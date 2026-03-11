import { V as ce, c as Pe } from "./vacuum-of-the-void-2EQklbye.mjs";
class Se extends Application {
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
      baseModifier: v,
      injuryModifier: b,
      injuryPenalty: d,
      isWeaponAttack: s,
      isInitiativeRoll: m,
      weaponSlotKey: p,
      weaponItemId: o,
      weaponDamageFormula: u,
      blockHeavyInHalfCover: f,
      blockMediumHeavyInThreeQuarterCover: M,
      blockNonThrownInFullCover: k
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(d) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!m, this._weaponSlotKey = p || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "", this._blockHeavyInHalfCover = !!f, this._blockMediumHeavyInThreeQuarterCover = !!M, this._blockNonThrownInFullCover = !!k;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, M, k, C, I;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((M = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : M.call(f, "form.votv.roll-sheet")) ?? ((C = (k = this.element) == null ? void 0 : k.matches) != null && C.call(k, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), v = a.querySelectorAll(".roll-sheet-advantage-d6"), b = (n) => {
      const r = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(r)), v.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    v.forEach((n) => {
      n.addEventListener("click", (r) => {
        r.preventDefault(), b(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), b((i == null ? void 0 : i.value) ?? "0");
    const d = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((I = d == null ? void 0 : d.dataset) == null ? void 0 : I.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let r = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      r = Math.min(r, s), m && (m.value = String(r)), p.forEach((c, l) => {
        c.classList.toggle("selected", l < r), c.style.pointerEvents = l < s ? "" : "none", c.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (r) => {
        if (r.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const c = n.dataset.moraleValue ?? "0";
        o(c), t._updateFormulaPreview(a);
      });
    }), o((m == null ? void 0 : m.value) ?? "0");
    const u = a.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(a)), u && u.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var r, c, l, y;
      if ((c = (r = n.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (y = (l = n.target) == null ? void 0 : l.closest) != null && y.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var f, M, k, C, I, n, r, c, l, y, z, P;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, v = parseInt(((k = t.querySelector("input[name='constantBonus']")) == null ? void 0 : k.value) ?? "0", 10) || 0, b = parseInt(((C = t.dataset) == null ? void 0 : C.baseMod) ?? "0", 10) || 0, d = parseInt(((I = t.dataset) == null ? void 0 : I.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = ((l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") ? -1 : 0) + ((P = (z = (y = this.actor) == null ? void 0 : y.statuses) == null ? void 0 : z.has) != null && P.call(z, "poisoned") ? -1 : 0), p = b + d + s + v + m, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const u = document.createElement("img");
    if (u.src = "systems/vacuum-of-the-void/assets/d6.svg", u.alt = "d6", u.className = "roll-sheet-preview-die", o[0].appendChild(u), a !== 0) {
      const g = document.createElement("span");
      g.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const _ = document.createElement("img");
      _.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", _.alt = a > 0 ? "előny d6" : "hátrány d6", _.className = "roll-sheet-preview-die", g.appendChild(_), o.push(g);
    }
    if (i > 0) {
      const g = document.createElement("span");
      g.textContent = ` + ${i} `;
      const _ = document.createElement("img");
      _.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", _.alt = "d8", _.className = "roll-sheet-preview-die", g.appendChild(_), o.push(g);
    }
    if (p !== 0) {
      const g = document.createElement("span");
      g.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, o.push(g);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var l, y, z, P, g, _, W, Z, j, Y, B, X, O, A, J, D, L, V, R, Q;
    const e = this.actor, a = Math.max(0, Number(((y = (l = e == null ? void 0 : e.system) == null ? void 0 : l.resources) == null ? void 0 : y.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", d = ["3d6", i, v, b].filter(Boolean).join(" ") || "3d6";
    let s = "", m = !1, p = 0;
    const o = [], u = [];
    let f = 0;
    if ((P = (z = game.user) == null ? void 0 : z.targets) != null && P.size) {
      const T = Array.from(game.user.targets)[0], h = (T == null ? void 0 : T.actor) ?? null;
      if (s = (h == null ? void 0 : h.name) || (T == null ? void 0 : T.name) || "", h) {
        const $ = (((_ = (g = h.system) == null ? void 0 : g.identity) == null ? void 0 : _.size) ?? "").toString().trim();
        ([
          "Jármű (Kicsi)",
          "Jármű (Közepes)",
          "Jármű (Nagy)",
          "Gigantikus (Kicsi)",
          "Gigantikus (Közepes)",
          "Gigantikus (Nagy)"
        ].includes($) || h.type === "Jarmu") && (m = !0);
      }
      (Z = (W = h == null ? void 0 : h.statuses) == null ? void 0 : W.has) != null && Z.call(W, "stunned") && (p += 1, o.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (Y = (j = h == null ? void 0 : h.statuses) == null ? void 0 : j.has) != null && Y.call(j, "unconscious") && (p += 1, o.push(game.i18n.localize("VOTV.StatusUnconscious"))), (X = (B = h == null ? void 0 : h.statuses) == null ? void 0 : B.has) != null && X.call(B, "grappled") && (p += 1, o.push(game.i18n.localize("VOTV.StatusGrappled"))), (A = (O = h == null ? void 0 : h.statuses) == null ? void 0 : O.has) != null && A.call(O, "dodge") && (f = 1, u.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let M = f;
    (D = (J = e == null ? void 0 : e.statuses) == null ? void 0 : J.has) != null && D.call(J, "diseased") && u.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (V = (L = e == null ? void 0 : e.statuses) == null ? void 0 : L.has) != null && V.call(L, "poisoned") && u.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((Q = (R = e == null ? void 0 : e.statuses) == null ? void 0 : R.has) == null ? void 0 : Q.call(R, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (M += 1, u.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const C = Math.min(3, Math.max(-3, p - M)), I = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", n = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", c = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || n || I;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: d,
      moraleCurrent: a,
      advantageValue: C,
      advantageSourcesText: o.length ? o.join(", ") : "",
      disadvantageSourcesText: u.length ? u.join(", ") : "",
      blockRollWarningMessage: c,
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
    var I, n, r, c, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((I = t.system) == null ? void 0 : I.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : r.call(n, (y) => y.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), b = v ? i.find((y) => y.id === v) ?? null : null, d = (c = b == null ? void 0 : b.system) == null ? void 0 : c.bonus, s = a.bonus, m = d != null && String(d).trim() !== "", p = s != null && String(s).trim() !== "", u = Number(m ? d : p ? s : 0) || 0, f = this._skillKey, M = ((l = t.system) == null ? void 0 : l.skills) ?? {}, k = Number(M[f] ?? 0) || 0;
    let C = 0;
    if (t.type === "Karakter" && f) {
      const y = ce._getSkillHealthStatusStatic(t, f);
      y === 1 ? C = -6 : y === 2 && (C = -3);
    }
    return u + k + C;
  }
  async _doRoll(t) {
    var a, i, v, b, d, s, m, p, o, u, f, M, k, C, I, n, r, c, l, y, z, P, g, _, W, Z, j, Y, B, X, O, A, J, D, L, V, R, Q, te, T, h;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const F = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, G = (F.itemId ?? "").trim(), H = G ? (((v = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : v.call(i, (w) => w.type === "Fegyver")) ?? []).find((w) => w.id === G) ?? null : null, K = (((b = H == null ? void 0 : H.system) == null ? void 0 : b.size) ?? F.size ?? "").toString().toLowerCase();
        if ((s = (d = e.statuses) == null ? void 0 : d.has) != null && s.call(d, "fullcover") && K !== "thrown") {
          const w = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (m = ui.notifications) == null ? void 0 : m.warn) == null || p.call(m, w);
          return;
        }
        if ((u = (o = e.statuses) == null ? void 0 : o.has) != null && u.call(o, "threequarteredcover") && (K === "medium" || K === "heavy")) {
          const w = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (M = (f = ui.notifications) == null ? void 0 : f.warn) == null || M.call(f, w);
          return;
        }
        if ((C = (k = e.statuses) == null ? void 0 : k.has) != null && C.call(k, "halfcover") && K === "heavy") {
          const w = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (I = ui.notifications) == null ? void 0 : I.warn) == null || n.call(I, w);
          return;
        }
      }
      try {
        const $ = t.querySelector("[name='moraleDice']"), F = t.querySelector("[name='advantage']"), G = t.querySelector("[name='constantBonus']"), H = Math.min(3, Math.max(0, parseInt(($ == null ? void 0 : $.value) ?? "0", 10) || 0)), K = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), w = Math.min(H, K), ee = Math.min(3, Math.max(-3, parseInt((F == null ? void 0 : F.value) ?? "0", 10) || 0)), U = parseInt((G == null ? void 0 : G.value) ?? "0", 10) || 0, be = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, ke = this._isWeaponAttack ? 0 : this._injuryModifier, Ie = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, we = ((y = (l = e.statuses) == null ? void 0 : l.has) != null && y.call(l, "diseased") ? -1 : 0) + ((P = (z = e.statuses) == null ? void 0 : z.has) != null && P.call(z, "poisoned") ? -1 : 0), re = be + ke + Ie + U + we, _e = [
          "3d6",
          ee > 0 ? `+${ee}d6` : ee < 0 ? `-${Math.abs(ee)}d6` : "",
          w > 0 ? `+${w}d8` : "",
          re !== 0 ? re > 0 ? `+${re}` : `${re}` : ""
        ].filter(Boolean).join(" "), ne = new Roll(_e);
        await ne.evaluate({ async: !0 });
        const { resultType: Me, label: Ce } = Pe(ne), ze = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Te = this._label;
        const oe = { resultType: Me, critLabel: Ce };
        if ((_ = (g = game.user) == null ? void 0 : g.targets) != null && _.size) {
          const ae = Array.from(game.user.targets)[0], S = (ae == null ? void 0 : ae.actor) ?? null;
          if (S) {
            let de = 0;
            const Ne = (((Z = (W = S.system) == null ? void 0 : W.identity) == null ? void 0 : Z.size) ?? "").toString().trim();
            if ([
              "Jármű (Kicsi)",
              "Jármű (Közepes)",
              "Jármű (Nagy)",
              "Gigantikus (Kicsi)",
              "Gigantikus (Közepes)",
              "Gigantikus (Nagy)"
            ].includes(Ne) || S.type === "Jarmu") {
              const N = t.querySelector("input[name='targetDistance']"), x = ((N == null ? void 0 : N.value) ?? "").trim();
              if (x === "") {
                (Y = (j = ui.notifications) == null ? void 0 : j.warn) == null || Y.call(j, "Távolság megadása kötelező ennél a célpontnál.");
                return;
              }
              const E = Number(x);
              if (!Number.isFinite(E) || E < 0) {
                (X = (B = ui.notifications) == null ? void 0 : B.warn) == null || X.call(B, "A Távolság mezőben nem érvényes szám szerepel.");
                return;
              }
              de = E;
            }
            const me = ((O = S.system) == null ? void 0 : O.combat) ?? {}, pe = Number(me.defense ?? 0) || 0, fe = Number(me.defenseBonus ?? 0) || 0;
            let ie;
            if (S.type === "Jarmu")
              ie = pe + fe + de;
            else {
              const N = Number(me.givenProtection ?? 0) || 0, x = (J = (A = S.statuses) == null ? void 0 : A.has) != null && J.call(A, "lookaround") ? 1 : 0, E = (L = (D = S.statuses) == null ? void 0 : D.has) != null && L.call(D, "halfcover") ? 3 : 0, Fe = (R = (V = S.statuses) == null ? void 0 : V.has) != null && R.call(V, "threequarteredcover") ? 6 : 0;
              let ye = 0;
              if (S.type === "Karakter") {
                const Be = (((Q = S.items) == null ? void 0 : Q.contents) ?? []).filter(
                  (le) => {
                    var ue;
                    return le.type === "Pancel" && ((ue = le.system) == null ? void 0 : ue.equipped) === !0;
                  }
                );
                for (const le of Be) {
                  const ue = String(((te = le.system) == null ? void 0 : te.protectionBonus) ?? "").trim().replace(",", "."), ge = Number(ue);
                  Number.isFinite(ge) && (ye += ge);
                }
              }
              const je = N + ye + x + E + Fe;
              ie = pe + fe + je + de;
            }
            const Ve = Number(ne.total ?? 0) || 0, he = !(((h = (T = S.statuses) == null ? void 0 : T.has) == null ? void 0 : h.call(T, "fullcover")) ?? !1) && Ve >= ie, ve = S.name ?? ae.name ?? "Célpont";
            if (this._isWeaponAttack) {
              let N = null, x = null;
              if (he && S.type === "Karakter")
                try {
                  const E = new Roll("1d8");
                  await E.evaluate({ async: !0 }), N = Number(E.total ?? 0) || 1, N === 1 ? x = "Fej" : N >= 2 && N <= 4 ? x = "Törzs" : N === 5 || N === 6 ? x = "Karok" : x = "Lábak";
                } catch (E) {
                  console.warn("VOTV hit location roll failed:", E);
                }
              oe.weaponAttack = !0, oe.weapon = {
                actorId: e.id ?? null,
                itemId: this._weaponItemId || null,
                slotKey: this._weaponSlotKey || null,
                damageFormula: this._weaponDamageFormula || null,
                targetActorId: S.id ?? null,
                targetName: ve,
                defense: ie,
                isHit: he,
                hitLocationRoll: N ?? null,
                hitLocationName: x ?? null
              };
            } else
              oe.vsDefense = !0, oe.vsDefenseInfo = {
                targetActorId: S.id ?? null,
                targetName: ve,
                defense: ie,
                isHit: he
              };
          }
        }
        if (await ne.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Te,
          flags: { "vacuum-of-the-void": oe },
          rollMode: ze
        }), w > 0) {
          const se = Math.max(0, K - w);
          await e.update({ "system.resources.morale": se });
        }
        if (this._isInitiativeRoll)
          try {
            const se = Number(ne.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": se });
            const ae = e.apps ?? [];
            for (const S of ae)
              typeof (S == null ? void 0 : S.render) == "function" && S.render(!0);
          } catch (se) {
            console.warn("VOTV initiative result update:", se);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ke(q, t, e) {
  var s, m;
  if (!q) return;
  const a = Number(((m = (s = q.system) == null ? void 0 : s.skills) == null ? void 0 : m[t]) ?? 0) || 0, i = ce.BODY_PART_BY_SKILL[t] ? ce._getSkillHealthStatusStatic(q, t) : void 0;
  let v = 0;
  i === 1 ? v = -6 : i === 2 && (v = -3);
  const b = (e || "").trim() === "Kezdeményezés";
  new Se({
    actor: q,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: b
  }).render(!0);
}
function xe(q, t) {
  var D, L, V, R, Q, te, T, h, $, F, G, H, K, w, ee;
  if (!q || !t) return;
  const e = q, i = (((D = e.system) == null ? void 0 : D.weapons) ?? {})[t] ?? {}, v = ((L = e.system) == null ? void 0 : L.skills) ?? {}, b = ((R = (V = e.items) == null ? void 0 : V.filter) == null ? void 0 : R.call(V, (U) => U.type === "Fegyver")) ?? [], d = (i.itemId ?? "").trim(), s = d ? b.find((U) => U.id === d) ?? null : null, m = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", p = (Q = s == null ? void 0 : s.system) == null ? void 0 : Q.bonus, o = i.bonus, u = p != null && String(p).trim() !== "", f = o != null && String(o).trim() !== "", k = Number(u ? p : f ? o : 0) || 0, C = ((te = s == null ? void 0 : s.system) == null ? void 0 : te.type) || "kinetic", I = (((T = s == null ? void 0 : s.system) == null ? void 0 : T.skillKey) ?? "").trim(), n = I && v[I] !== void 0 ? I : C === "explosive" ? "grenadeUse" : "firearms", r = Number(v[n] || 0) || 0, c = k + r;
  let l = 0;
  if (e.type === "Karakter") {
    const U = ce._getSkillHealthStatusStatic(e, n);
    U === 1 ? l = -6 : U === 2 && (l = -3);
  }
  const y = (((h = s == null ? void 0 : s.system) == null ? void 0 : h.damage) ?? "").trim(), z = (i.damage ?? "").trim(), P = y || z || "", g = ((($ = s == null ? void 0 : s.system) == null ? void 0 : $.size) ?? i.size ?? "").toString().toLowerCase(), _ = g === "heavy", W = g === "medium", Z = g === "thrown", j = ((G = (F = e.statuses) == null ? void 0 : F.has) == null ? void 0 : G.call(F, "halfcover")) ?? !1, Y = ((K = (H = e.statuses) == null ? void 0 : H.has) == null ? void 0 : K.call(H, "threequarteredcover")) ?? !1, B = ((ee = (w = e.statuses) == null ? void 0 : w.has) == null ? void 0 : ee.call(w, "fullcover")) ?? !1, X = _ && j, O = Y && (W || _), A = B && !Z;
  new Se({
    actor: q,
    skillKey: n,
    label: m,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? d,
    weaponDamageFormula: P,
    blockHeavyInHalfCover: X,
    blockMediumHeavyInThreeQuarterCover: O,
    blockNonThrownInFullCover: A
  }).render(!0);
}
export {
  Se as VoidRollSheet,
  Ke as openRollSheetForSkill,
  xe as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DSTN9c9d.mjs.map
