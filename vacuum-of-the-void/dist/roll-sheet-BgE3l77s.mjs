import { V as re, c as Pe } from "./vacuum-of-the-void-Y6tcGgSb.mjs";
class fe extends Application {
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
      injuryModifier: S,
      injuryPenalty: d,
      isWeaponAttack: s,
      isInitiativeRoll: m,
      weaponSlotKey: p,
      weaponItemId: o,
      weaponDamageFormula: c,
      blockHeavyInHalfCover: f,
      blockMediumHeavyInThreeQuarterCover: M,
      blockNonThrownInFullCover: b
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(v) || 0, this._injuryModifier = Number(S) || 0, this._injuryPenalty = Number(d) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!m, this._weaponSlotKey = p || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "", this._blockHeavyInHalfCover = !!f, this._blockMediumHeavyInThreeQuarterCover = !!M, this._blockNonThrownInFullCover = !!b;
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
    const i = a.querySelector("input[name='advantage']"), v = a.querySelectorAll(".roll-sheet-advantage-d6"), S = (n) => {
      const r = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(r)), v.forEach((u) => {
        const l = parseInt(u.dataset.advantageValue ?? "0", 10);
        u.classList.toggle("selected", l === r);
      });
    };
    v.forEach((n) => {
      n.addEventListener("click", (r) => {
        r.preventDefault(), S(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), S((i == null ? void 0 : i.value) ?? "0");
    const d = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((k = d == null ? void 0 : d.dataset) == null ? void 0 : k.moraleMax) ?? "3", 10) || 0)), m = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let r = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      r = Math.min(r, s), m && (m.value = String(r)), p.forEach((u, l) => {
        u.classList.toggle("selected", l < r), u.style.pointerEvents = l < s ? "" : "none", u.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (r) => {
        if (r.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const u = n.dataset.moraleValue ?? "0";
        o(u), t._updateFormulaPreview(a);
      });
    }), o((m == null ? void 0 : m.value) ?? "0");
    const c = a.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => t._updateFormulaPreview(a)), c && c.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var r, u, l, y;
      if ((u = (r = n.target) == null ? void 0 : r.closest) != null && u.call(r, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (y = (l = n.target) == null ? void 0 : l.closest) != null && y.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var f, M, b, C, k, n, r, u, l, y, z, L;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, v = parseInt(((b = t.querySelector("input[name='constantBonus']")) == null ? void 0 : b.value) ?? "0", 10) || 0, S = parseInt(((C = t.dataset) == null ? void 0 : C.baseMod) ?? "0", 10) || 0, d = parseInt(((k = t.dataset) == null ? void 0 : k.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, m = ((l = (u = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : u.has) != null && l.call(u, "diseased") ? -1 : 0) + ((L = (z = (y = this.actor) == null ? void 0 : y.statuses) == null ? void 0 : z.has) != null && L.call(z, "poisoned") ? -1 : 0), p = S + d + s + v + m, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", o[0].appendChild(c), a !== 0) {
      const g = document.createElement("span");
      g.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const w = document.createElement("img");
      w.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", w.alt = a > 0 ? "előny d6" : "hátrány d6", w.className = "roll-sheet-preview-die", g.appendChild(w), o.push(g);
    }
    if (i > 0) {
      const g = document.createElement("span");
      g.textContent = ` + ${i} `;
      const w = document.createElement("img");
      w.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", w.alt = "d8", w.className = "roll-sheet-preview-die", g.appendChild(w), o.push(g);
    }
    if (p !== 0) {
      const g = document.createElement("span");
      g.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, o.push(g);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var l, y, z, L, g, w, W, Z, P, Y, D, X, O, A, Q, R, H, j, K, J;
    const e = this.actor, a = Math.max(0, Number(((y = (l = e == null ? void 0 : e.system) == null ? void 0 : l.resources) == null ? void 0 : y.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", v = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", S = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", d = ["3d6", i, v, S].filter(Boolean).join(" ") || "3d6";
    let s = "", m = !1, p = 0;
    const o = [], c = [];
    let f = 0;
    if ((L = (z = game.user) == null ? void 0 : z.targets) != null && L.size) {
      const T = Array.from(game.user.targets)[0], h = (T == null ? void 0 : T.actor) ?? null;
      if (s = (h == null ? void 0 : h.name) || (T == null ? void 0 : T.name) || "", h) {
        const $ = (((w = (g = h.system) == null ? void 0 : g.identity) == null ? void 0 : w.size) ?? "").toString().trim();
        ([
          "Jármű (Kicsi)",
          "Jármű (Közepes)",
          "Jármű (Nagy)",
          "Gigantikus (Kicsi)",
          "Gigantikus (Közepes)",
          "Gigantikus (Nagy)"
        ].includes($) || h.type === "Jarmu") && (m = !0);
      }
      (Z = (W = h == null ? void 0 : h.statuses) == null ? void 0 : W.has) != null && Z.call(W, "stunned") && (p += 1, o.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (Y = (P = h == null ? void 0 : h.statuses) == null ? void 0 : P.has) != null && Y.call(P, "unconscious") && (p += 1, o.push(game.i18n.localize("VOTV.StatusUnconscious"))), (X = (D = h == null ? void 0 : h.statuses) == null ? void 0 : D.has) != null && X.call(D, "grappled") && (p += 1, o.push(game.i18n.localize("VOTV.StatusGrappled"))), (A = (O = h == null ? void 0 : h.statuses) == null ? void 0 : O.has) != null && A.call(O, "dodge") && (f = 1, c.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let M = f;
    (R = (Q = e == null ? void 0 : e.statuses) == null ? void 0 : Q.has) != null && R.call(Q, "diseased") && c.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (j = (H = e == null ? void 0 : e.statuses) == null ? void 0 : H.has) != null && j.call(H, "poisoned") && c.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((J = (K = e == null ? void 0 : e.statuses) == null ? void 0 : K.has) == null ? void 0 : J.call(K, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (M += 1, c.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const C = Math.min(3, Math.max(-3, p - M)), k = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", n = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", u = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || n || k;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: d,
      moraleCurrent: a,
      advantageValue: C,
      advantageSourcesText: o.length ? o.join(", ") : "",
      disadvantageSourcesText: c.length ? c.join(", ") : "",
      blockRollWarningMessage: u,
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
    var k, n, r, u, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((k = t.system) == null ? void 0 : k.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : r.call(n, (y) => y.type === "Fegyver")) ?? [], v = (a.itemId ?? "").trim(), S = v ? i.find((y) => y.id === v) ?? null : null, d = (u = S == null ? void 0 : S.system) == null ? void 0 : u.bonus, s = a.bonus, m = d != null && String(d).trim() !== "", p = s != null && String(s).trim() !== "", c = Number(m ? d : p ? s : 0) || 0, f = this._skillKey, M = ((l = t.system) == null ? void 0 : l.skills) ?? {}, b = Number(M[f] ?? 0) || 0;
    let C = 0;
    if (t.type === "Karakter" && f) {
      const y = re._getSkillHealthStatusStatic(t, f);
      y === 1 ? C = -6 : y === 2 && (C = -3);
    }
    return c + b + C;
  }
  async _doRoll(t) {
    var a, i, v, S, d, s, m, p, o, c, f, M, b, C, k, n, r, u, l, y, z, L, g, w, W, Z, P, Y, D, X, O, A, Q, R, H, j, K, J, te, T, h;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const B = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, G = (B.itemId ?? "").trim(), x = G ? (((v = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : v.call(i, (I) => I.type === "Fegyver")) ?? []).find((I) => I.id === G) ?? null : null, E = (((S = x == null ? void 0 : x.system) == null ? void 0 : S.size) ?? B.size ?? "").toString().toLowerCase();
        if ((s = (d = e.statuses) == null ? void 0 : d.has) != null && s.call(d, "fullcover") && E !== "thrown") {
          const I = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (m = ui.notifications) == null ? void 0 : m.warn) == null || p.call(m, I);
          return;
        }
        if ((c = (o = e.statuses) == null ? void 0 : o.has) != null && c.call(o, "threequarteredcover") && (E === "medium" || E === "heavy")) {
          const I = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (M = (f = ui.notifications) == null ? void 0 : f.warn) == null || M.call(f, I);
          return;
        }
        if ((C = (b = e.statuses) == null ? void 0 : b.has) != null && C.call(b, "halfcover") && E === "heavy") {
          const I = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (k = ui.notifications) == null ? void 0 : k.warn) == null || n.call(k, I);
          return;
        }
      }
      try {
        const $ = t.querySelector("[name='moraleDice']"), B = t.querySelector("[name='advantage']"), G = t.querySelector("[name='constantBonus']"), x = Math.min(3, Math.max(0, parseInt(($ == null ? void 0 : $.value) ?? "0", 10) || 0)), E = Math.max(0, Number(((u = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : u.morale) ?? 0) || 0), I = Math.min(x, E), ee = Math.min(3, Math.max(-3, parseInt((B == null ? void 0 : B.value) ?? "0", 10) || 0)), U = parseInt((G == null ? void 0 : G.value) ?? "0", 10) || 0, ve = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, ye = this._isWeaponAttack ? 0 : this._injuryModifier, ge = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, Se = ((y = (l = e.statuses) == null ? void 0 : l.has) != null && y.call(l, "diseased") ? -1 : 0) + ((L = (z = e.statuses) == null ? void 0 : z.has) != null && L.call(z, "poisoned") ? -1 : 0), ie = ve + ye + ge + U + Se, be = [
          "3d6",
          ee > 0 ? `+${ee}d6` : ee < 0 ? `-${Math.abs(ee)}d6` : "",
          I > 0 ? `+${I}d8` : "",
          ie !== 0 ? ie > 0 ? `+${ie}` : `${ie}` : ""
        ].filter(Boolean).join(" "), ne = new Roll(be);
        await ne.evaluate({ async: !0 });
        const { resultType: ke, label: Ie } = Pe(ne), we = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let _e = this._label;
        const oe = { resultType: ke, critLabel: Ie };
        if ((w = (g = game.user) == null ? void 0 : g.targets) != null && w.size) {
          const ae = Array.from(game.user.targets)[0], _ = (ae == null ? void 0 : ae.actor) ?? null;
          if (_) {
            let de = 0;
            const Me = (((Z = (W = _.system) == null ? void 0 : W.identity) == null ? void 0 : Z.size) ?? "").toString().trim();
            if ([
              "Jármű (Kicsi)",
              "Jármű (Közepes)",
              "Jármű (Nagy)",
              "Gigantikus (Kicsi)",
              "Gigantikus (Közepes)",
              "Gigantikus (Nagy)"
            ].includes(Me)) {
              const N = t.querySelector("input[name='targetDistance']"), V = ((N == null ? void 0 : N.value) ?? "").trim();
              if (V === "") {
                (Y = (P = ui.notifications) == null ? void 0 : P.warn) == null || Y.call(P, "Távolság megadása kötelező ennél a célpontnál.");
                return;
              }
              const F = Number(V);
              if (!Number.isFinite(F) || F < 0) {
                (X = (D = ui.notifications) == null ? void 0 : D.warn) == null || X.call(D, "A Távolság mezőben nem érvényes szám szerepel.");
                return;
              }
              de = F;
            }
            const le = ((O = _.system) == null ? void 0 : O.combat) ?? {}, Ce = Number(le.defense ?? 0) || 0, ze = Number(le.defenseBonus ?? 0) || 0, Te = Number(le.givenProtection ?? 0) || 0, Ne = (Q = (A = _.statuses) == null ? void 0 : A.has) != null && Q.call(A, "lookaround") ? 1 : 0, Ve = (H = (R = _.statuses) == null ? void 0 : R.has) != null && H.call(R, "halfcover") ? 3 : 0, Fe = (K = (j = _.statuses) == null ? void 0 : j.has) != null && K.call(j, "threequarteredcover") ? 6 : 0;
            let me = 0;
            if (_.type === "Karakter") {
              const N = (((J = _.items) == null ? void 0 : J.contents) ?? []).filter(
                (V) => {
                  var F;
                  return V.type === "Pancel" && ((F = V.system) == null ? void 0 : F.equipped) === !0;
                }
              );
              for (const V of N) {
                const F = String(((te = V.system) == null ? void 0 : te.protectionBonus) ?? "").trim().replace(",", "."), pe = Number(F);
                Number.isFinite(pe) && (me += pe);
              }
            }
            const je = Te + me + Ne + Ve + Fe, ce = Ce + ze + je + de, Be = Number(ne.total ?? 0) || 0, ue = !(((h = (T = _.statuses) == null ? void 0 : T.has) == null ? void 0 : h.call(T, "fullcover")) ?? !1) && Be >= ce, he = _.name ?? ae.name ?? "Célpont";
            if (this._isWeaponAttack) {
              let N = null, V = null;
              if (ue && _.type === "Karakter")
                try {
                  const F = new Roll("1d8");
                  await F.evaluate({ async: !0 }), N = Number(F.total ?? 0) || 1, N === 1 ? V = "Fej" : N >= 2 && N <= 4 ? V = "Törzs" : N === 5 || N === 6 ? V = "Karok" : V = "Lábak";
                } catch (F) {
                  console.warn("VOTV hit location roll failed:", F);
                }
              oe.weaponAttack = !0, oe.weapon = {
                actorId: e.id ?? null,
                itemId: this._weaponItemId || null,
                slotKey: this._weaponSlotKey || null,
                damageFormula: this._weaponDamageFormula || null,
                targetActorId: _.id ?? null,
                targetName: he,
                defense: ce,
                isHit: ue,
                hitLocationRoll: N ?? null,
                hitLocationName: V ?? null
              };
            } else
              oe.vsDefense = !0, oe.vsDefenseInfo = {
                targetActorId: _.id ?? null,
                targetName: he,
                defense: ce,
                isHit: ue
              };
          }
        }
        if (await ne.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: _e,
          flags: { "vacuum-of-the-void": oe },
          rollMode: we
        }), I > 0) {
          const se = Math.max(0, E - I);
          await e.update({ "system.resources.morale": se });
        }
        if (this._isInitiativeRoll)
          try {
            const se = Number(ne.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": se });
            const ae = e.apps ?? [];
            for (const _ of ae)
              typeof (_ == null ? void 0 : _.render) == "function" && _.render(!0);
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
  const a = Number(((m = (s = q.system) == null ? void 0 : s.skills) == null ? void 0 : m[t]) ?? 0) || 0, i = re.BODY_PART_BY_SKILL[t] ? re._getSkillHealthStatusStatic(q, t) : void 0;
  let v = 0;
  i === 1 ? v = -6 : i === 2 && (v = -3);
  const S = (e || "").trim() === "Kezdeményezés";
  new fe({
    actor: q,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: v,
    isInitiativeRoll: S
  }).render(!0);
}
function xe(q, t) {
  var R, H, j, K, J, te, T, h, $, B, G, x, E, I, ee;
  if (!q || !t) return;
  const e = q, i = (((R = e.system) == null ? void 0 : R.weapons) ?? {})[t] ?? {}, v = ((H = e.system) == null ? void 0 : H.skills) ?? {}, S = ((K = (j = e.items) == null ? void 0 : j.filter) == null ? void 0 : K.call(j, (U) => U.type === "Fegyver")) ?? [], d = (i.itemId ?? "").trim(), s = d ? S.find((U) => U.id === d) ?? null : null, m = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", p = (J = s == null ? void 0 : s.system) == null ? void 0 : J.bonus, o = i.bonus, c = p != null && String(p).trim() !== "", f = o != null && String(o).trim() !== "", b = Number(c ? p : f ? o : 0) || 0, C = ((te = s == null ? void 0 : s.system) == null ? void 0 : te.type) || "kinetic", k = (((T = s == null ? void 0 : s.system) == null ? void 0 : T.skillKey) ?? "").trim(), n = k && v[k] !== void 0 ? k : C === "explosive" ? "grenadeUse" : "firearms", r = Number(v[n] || 0) || 0, u = b + r;
  let l = 0;
  if (e.type === "Karakter") {
    const U = re._getSkillHealthStatusStatic(e, n);
    U === 1 ? l = -6 : U === 2 && (l = -3);
  }
  const y = (((h = s == null ? void 0 : s.system) == null ? void 0 : h.damage) ?? "").trim(), z = (i.damage ?? "").trim(), L = y || z || "", g = ((($ = s == null ? void 0 : s.system) == null ? void 0 : $.size) ?? i.size ?? "").toString().toLowerCase(), w = g === "heavy", W = g === "medium", Z = g === "thrown", P = ((G = (B = e.statuses) == null ? void 0 : B.has) == null ? void 0 : G.call(B, "halfcover")) ?? !1, Y = ((E = (x = e.statuses) == null ? void 0 : x.has) == null ? void 0 : E.call(x, "threequarteredcover")) ?? !1, D = ((ee = (I = e.statuses) == null ? void 0 : I.has) == null ? void 0 : ee.call(I, "fullcover")) ?? !1, X = w && P, O = Y && (W || w), A = D && !Z;
  new fe({
    actor: q,
    skillKey: n,
    label: m,
    baseModifier: u,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? d,
    weaponDamageFormula: L,
    blockHeavyInHalfCover: X,
    blockMediumHeavyInThreeQuarterCover: O,
    blockNonThrownInFullCover: A
  }).render(!0);
}
export {
  fe as VoidRollSheet,
  Ke as openRollSheetForSkill,
  xe as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BgE3l77s.mjs.map
