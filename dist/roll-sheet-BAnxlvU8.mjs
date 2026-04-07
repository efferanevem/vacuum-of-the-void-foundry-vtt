import { V as ce, c as De } from "./vacuum-of-the-void-Sv7E6elw.mjs";
class ge extends Application {
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
      injuryPenalty: m,
      isWeaponAttack: s,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: o,
      weaponDamageFormula: u,
      blockHeavyInHalfCover: f,
      blockMediumHeavyInThreeQuarterCover: M,
      blockNonThrownInFullCover: k
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "", this._blockHeavyInHalfCover = !!f, this._blockMediumHeavyInThreeQuarterCover = !!M, this._blockNonThrownInFullCover = !!k;
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
    const m = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((I = m == null ? void 0 : m.dataset) == null ? void 0 : I.moraleMax) ?? "3", 10) || 0)), h = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let r = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      r = Math.min(r, s), h && (h.value = String(r)), p.forEach((c, l) => {
        c.classList.toggle("selected", l < r), c.style.pointerEvents = l < s ? "" : "none", c.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (r) => {
        if (r.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const c = n.dataset.moraleValue ?? "0";
        o(c), t._updateFormulaPreview(a);
      });
    }), o((h == null ? void 0 : h.value) ?? "0");
    const u = a.querySelector("input[name='constantBonus']");
    u && u.addEventListener("input", () => t._updateFormulaPreview(a)), u && u.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var r, c, l, g;
      if ((c = (r = n.target) == null ? void 0 : r.closest) != null && c.call(r, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (g = (l = n.target) == null ? void 0 : l.closest) != null && g.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var f, M, k, C, I, n, r, c, l, g, T, K;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, v = parseInt(((k = t.querySelector("input[name='constantBonus']")) == null ? void 0 : k.value) ?? "0", 10) || 0, b = parseInt(((C = t.dataset) == null ? void 0 : C.baseMod) ?? "0", 10) || 0, m = parseInt(((I = t.dataset) == null ? void 0 : I.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = ((l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") ? -1 : 0) + ((K = (T = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : T.has) != null && K.call(T, "poisoned") ? -1 : 0), p = b + m + s + v + h, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const u = document.createElement("img");
    if (u.src = "systems/vacuum-of-the-void/assets/d6.svg", u.alt = "d6", u.className = "roll-sheet-preview-die", o[0].appendChild(u), a !== 0) {
      const S = document.createElement("span");
      S.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const w = document.createElement("img");
      w.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", w.alt = a > 0 ? "előny d6" : "hátrány d6", w.className = "roll-sheet-preview-die", S.appendChild(w), o.push(S);
    }
    if (i > 0) {
      const S = document.createElement("span");
      S.textContent = ` + ${i} `;
      const w = document.createElement("img");
      w.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", w.alt = "d8", w.className = "roll-sheet-preview-die", S.appendChild(w), o.push(S);
    }
    if (p !== 0) {
      const S = document.createElement("span");
      S.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, o.push(S);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var l, g, T, K, S, w, O, U, D, Z, L, Y, A, X, x, J, V, E, F, G;
    const e = this.actor, a = Math.max(0, Number(((g = (l = e == null ? void 0 : e.system) == null ? void 0 : l.resources) == null ? void 0 : g.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", i, v, b].filter(Boolean).join(" ") || "3d6";
    let s = "", h = !1, p = 0;
    const o = [], u = [];
    let f = 0;
    if ((K = (T = game.user) == null ? void 0 : T.targets) != null && K.size) {
      const P = Array.from(game.user.targets)[0], d = (P == null ? void 0 : P.actor) ?? null;
      if (s = (d == null ? void 0 : d.name) || (P == null ? void 0 : P.name) || "", d) {
        const ee = (((w = (S = d.system) == null ? void 0 : S.identity) == null ? void 0 : w.size) ?? "").toString().trim();
        ([
          "Jármű (Kicsi)",
          "Jármű (Közepes)",
          "Jármű (Nagy)",
          "Gigantikus (Kicsi)",
          "Gigantikus (Közepes)",
          "Gigantikus (Nagy)"
        ].includes(ee) || d.type === "Jarmu") && (h = !0);
      }
      (U = (O = d == null ? void 0 : d.statuses) == null ? void 0 : O.has) != null && U.call(O, "stunned") && (p += 1, o.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (Z = (D = d == null ? void 0 : d.statuses) == null ? void 0 : D.has) != null && Z.call(D, "unconscious") && (p += 1, o.push(game.i18n.localize("VOTV.StatusUnconscious"))), (Y = (L = d == null ? void 0 : d.statuses) == null ? void 0 : L.has) != null && Y.call(L, "grappled") && (p += 1, o.push(game.i18n.localize("VOTV.StatusGrappled"))), (X = (A = d == null ? void 0 : d.statuses) == null ? void 0 : A.has) != null && X.call(A, "dodge") && (f = 1, u.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let M = f;
    (J = (x = e == null ? void 0 : e.statuses) == null ? void 0 : x.has) != null && J.call(x, "diseased") && u.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (E = (V = e == null ? void 0 : e.statuses) == null ? void 0 : V.has) != null && E.call(V, "poisoned") && u.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((G = (F = e == null ? void 0 : e.statuses) == null ? void 0 : F.has) == null ? void 0 : G.call(F, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (M += 1, u.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const C = Math.min(3, Math.max(-3, p - M)), I = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", n = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", c = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || n || I;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
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
      requireDistanceVsDefense: h
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
    const t = this.actor, a = (((I = t.system) == null ? void 0 : I.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : r.call(n, (g) => g.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), b = v ? i.find((g) => g.id === v) ?? null : null, m = (c = b == null ? void 0 : b.system) == null ? void 0 : c.bonus, s = a.bonus, h = m != null && String(m).trim() !== "", p = s != null && String(s).trim() !== "", u = Number(h ? m : p ? s : 0) || 0, f = this._skillKey, M = ((l = t.system) == null ? void 0 : l.skills) ?? {}, k = Number(M[f] ?? 0) || 0;
    let C = 0;
    if (t.type === "Karakter" && f) {
      const g = ce._getSkillHealthStatusStatic(t, f);
      g === 1 ? C = -6 : g === 2 && (C = -3);
    }
    return u + k + C;
  }
  async _doRoll(t) {
    var a, i, v, b, m, s, h, p, o, u, f, M, k, C, I, n, r, c, l, g, T, K, S, w, O, U, D, Z, L, Y, A, X, x, J, V, E, F, G, te, P, d, ee;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const $ = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, R = ($.itemId ?? "").trim(), Q = R ? (((v = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : v.call(i, (_) => _.type === "Fegyver")) ?? []).find((_) => _.id === R) ?? null : null, j = (((b = Q == null ? void 0 : Q.system) == null ? void 0 : b.size) ?? $.size ?? "").toString().toLowerCase();
        if ((s = (m = e.statuses) == null ? void 0 : m.has) != null && s.call(m, "fullcover") && j !== "thrown") {
          const _ = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (h = ui.notifications) == null ? void 0 : h.warn) == null || p.call(h, _);
          return;
        }
        if ((u = (o = e.statuses) == null ? void 0 : o.has) != null && u.call(o, "threequarteredcover") && (j === "medium" || j === "heavy")) {
          const _ = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (M = (f = ui.notifications) == null ? void 0 : f.warn) == null || M.call(f, _);
          return;
        }
        if ((C = (k = e.statuses) == null ? void 0 : k.has) != null && C.call(k, "halfcover") && j === "heavy") {
          const _ = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (I = ui.notifications) == null ? void 0 : I.warn) == null || n.call(I, _);
          return;
        }
      }
      try {
        const q = t.querySelector("[name='moraleDice']"), $ = t.querySelector("[name='advantage']"), R = t.querySelector("[name='constantBonus']"), Q = Math.min(3, Math.max(0, parseInt((q == null ? void 0 : q.value) ?? "0", 10) || 0)), j = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), _ = Math.min(Q, j), H = Math.min(3, Math.max(-3, parseInt(($ == null ? void 0 : $.value) ?? "0", 10) || 0)), Se = parseInt((R == null ? void 0 : R.value) ?? "0", 10) || 0, be = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, ke = this._isWeaponAttack ? 0 : this._injuryModifier, Ie = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, we = ((g = (l = e.statuses) == null ? void 0 : l.has) != null && g.call(l, "diseased") ? -1 : 0) + ((K = (T = e.statuses) == null ? void 0 : T.has) != null && K.call(T, "poisoned") ? -1 : 0), re = be + ke + Ie + Se + we, _e = [
          "3d6",
          H > 0 ? `+${H}d6` : H < 0 ? `-${Math.abs(H)}d6` : "",
          _ > 0 ? `+${_}d8` : "",
          re !== 0 ? re > 0 ? `+${re}` : `${re}` : ""
        ].filter(Boolean).join(" "), ne = new Roll(_e);
        await ne.evaluate({ async: !0 });
        const { resultType: Me, label: Ce } = De(ne), ze = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Te = this._label;
        const oe = { resultType: Me, critLabel: Ce };
        if ((w = (S = game.user) == null ? void 0 : S.targets) != null && w.size) {
          const ae = Array.from(game.user.targets)[0], y = (ae == null ? void 0 : ae.actor) ?? null;
          if (y) {
            let de = 0;
            const Ne = (((U = (O = y.system) == null ? void 0 : O.identity) == null ? void 0 : U.size) ?? "").toString().trim();
            if ([
              "Jármű (Kicsi)",
              "Jármű (Közepes)",
              "Jármű (Nagy)",
              "Gigantikus (Kicsi)",
              "Gigantikus (Közepes)",
              "Gigantikus (Nagy)"
            ].includes(Ne) || y.type === "Jarmu") {
              const z = t.querySelector("input[name='targetDistance']"), N = ((z == null ? void 0 : z.value) ?? "").trim();
              if (N === "") {
                (Z = (D = ui.notifications) == null ? void 0 : D.warn) == null || Z.call(D, "Távolság megadása kötelező ennél a célpontnál.");
                return;
              }
              const B = Number(N);
              if (!Number.isFinite(B) || B < 0) {
                (Y = (L = ui.notifications) == null ? void 0 : L.warn) == null || Y.call(L, "A Távolság mezőben nem érvényes szám szerepel.");
                return;
              }
              de = B;
            }
            const me = ((A = y.system) == null ? void 0 : A.combat) ?? {}, pe = Number(me.defense ?? 0) || 0, Ve = Number(me.defenseBonus ?? 0) || 0;
            let ie;
            if (y.type === "Jarmu") {
              const z = (((X = y.items) == null ? void 0 : X.contents) ?? []).filter((B) => B.type === "Jarmuegyseg").length;
              let N = 0;
              z >= 11 ? N = -6 : z >= 6 && (N = -3), ie = pe + N + de;
            } else {
              const z = Number(me.givenProtection ?? 0) || 0, N = (J = (x = y.statuses) == null ? void 0 : x.has) != null && J.call(x, "lookaround") ? 1 : 0, B = (E = (V = y.statuses) == null ? void 0 : V.has) != null && E.call(V, "halfcover") ? 3 : 0, Pe = (G = (F = y.statuses) == null ? void 0 : F.has) != null && G.call(F, "threequarteredcover") ? 6 : 0;
              let ve = 0;
              if (y.type === "Karakter") {
                const Be = (((te = y.items) == null ? void 0 : te.contents) ?? []).filter(
                  (le) => {
                    var ue;
                    return le.type === "Pancel" && ((ue = le.system) == null ? void 0 : ue.equipped) === !0;
                  }
                );
                for (const le of Be) {
                  const ue = String(((P = le.system) == null ? void 0 : P.protectionBonus) ?? "").trim().replace(",", "."), ye = Number(ue);
                  Number.isFinite(ye) && (ve += ye);
                }
              }
              const je = z + ve + N + B + Pe;
              ie = pe + Ve + je + de;
            }
            const Fe = Number(ne.total ?? 0) || 0, he = !(((ee = (d = y.statuses) == null ? void 0 : d.has) == null ? void 0 : ee.call(d, "fullcover")) ?? !1) && Fe >= ie, fe = y.name ?? ae.name ?? "Célpont";
            if (this._isWeaponAttack) {
              let z = null, N = null;
              if (he && y.type === "Karakter")
                try {
                  const B = new Roll("1d8");
                  await B.evaluate({ async: !0 }), z = Number(B.total ?? 0) || 1, z === 1 ? N = "Fej" : z >= 2 && z <= 4 ? N = "Törzs" : z === 5 || z === 6 ? N = "Karok" : N = "Lábak";
                } catch (B) {
                  console.warn("VOTV hit location roll failed:", B);
                }
              oe.weaponAttack = !0, oe.weapon = {
                actorId: e.id ?? null,
                itemId: this._weaponItemId || null,
                slotKey: this._weaponSlotKey || null,
                damageFormula: this._weaponDamageFormula || null,
                targetActorId: y.id ?? null,
                targetName: fe,
                defense: ie,
                isHit: he,
                hitLocationRoll: z ?? null,
                hitLocationName: N ?? null
              };
            } else
              oe.vsDefense = !0, oe.vsDefenseInfo = {
                targetActorId: y.id ?? null,
                targetName: fe,
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
        }), _ > 0) {
          const se = Math.max(0, j - _);
          await e.update({ "system.resources.morale": se });
        }
        if (this._isInitiativeRoll)
          try {
            const se = Number(ne.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": se });
            const ae = e.apps ?? [];
            for (const y of ae)
              typeof (y == null ? void 0 : y.render) == "function" && y.render(!0);
          } catch (se) {
            console.warn("VOTV initiative result update:", se);
          }
      } finally {
        this.close();
      }
    }
  }
}
function xe(W, t, e) {
  var s, h;
  if (!W) return;
  const a = Number(((h = (s = W.system) == null ? void 0 : s.skills) == null ? void 0 : h[t]) ?? 0) || 0, i = ce.BODY_PART_BY_SKILL[t] ? ce._getSkillHealthStatusStatic(W, t) : void 0;
  let v = 0;
  i === 1 ? v = -6 : i === 2 && (v = -3);
  const b = (e || "").trim() === "Kezdeményezés";
  new ge({
    actor: W,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: b
  }).render(!0);
}
function Ee(W, t) {
  var J, V, E, F, G, te, P, d, ee, q, $, R, Q, j, _;
  if (!W || !t) return;
  const e = W, i = (((J = e.system) == null ? void 0 : J.weapons) ?? {})[t] ?? {}, v = ((V = e.system) == null ? void 0 : V.skills) ?? {}, b = ((F = (E = e.items) == null ? void 0 : E.filter) == null ? void 0 : F.call(E, (H) => H.type === "Fegyver")) ?? [], m = (i.itemId ?? "").trim(), s = m ? b.find((H) => H.id === m) ?? null : null, h = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", p = (G = s == null ? void 0 : s.system) == null ? void 0 : G.bonus, o = i.bonus, u = p != null && String(p).trim() !== "", f = o != null && String(o).trim() !== "", k = Number(u ? p : f ? o : 0) || 0, C = ((te = s == null ? void 0 : s.system) == null ? void 0 : te.type) || "kinetic", I = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.skillKey) ?? "").trim(), n = I && v[I] !== void 0 ? I : C === "explosive" ? "grenadeUse" : "firearms", r = Number(v[n] || 0) || 0, c = k + r;
  let l = 0;
  if (e.type === "Karakter") {
    const H = ce._getSkillHealthStatusStatic(e, n);
    H === 1 ? l = -6 : H === 2 && (l = -3);
  }
  const g = (((d = s == null ? void 0 : s.system) == null ? void 0 : d.damage) ?? "").trim(), T = (i.damage ?? "").trim(), K = g || T || "", S = (((ee = s == null ? void 0 : s.system) == null ? void 0 : ee.size) ?? i.size ?? "").toString().toLowerCase(), w = S === "heavy", O = S === "medium", U = S === "thrown", D = (($ = (q = e.statuses) == null ? void 0 : q.has) == null ? void 0 : $.call(q, "halfcover")) ?? !1, Z = ((Q = (R = e.statuses) == null ? void 0 : R.has) == null ? void 0 : Q.call(R, "threequarteredcover")) ?? !1, L = ((_ = (j = e.statuses) == null ? void 0 : j.has) == null ? void 0 : _.call(j, "fullcover")) ?? !1, Y = w && D, A = Z && (O || w), X = L && !U;
  new ge({
    actor: W,
    skillKey: n,
    label: h,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? m,
    weaponDamageFormula: K,
    blockHeavyInHalfCover: Y,
    blockMediumHeavyInThreeQuarterCover: A,
    blockNonThrownInFullCover: X
  }).render(!0);
}
export {
  ge as VoidRollSheet,
  xe as openRollSheetForSkill,
  Ee as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BAnxlvU8.mjs.map
