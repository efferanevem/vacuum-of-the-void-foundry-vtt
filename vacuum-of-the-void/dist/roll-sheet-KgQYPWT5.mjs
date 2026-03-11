import { V as Me, c as $e } from "./vacuum-of-the-void-D7AX8f1L.mjs";
class Fe extends Application {
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
      injuryModifier: b,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: f,
      weaponSlotKey: p,
      weaponItemId: o,
      weaponDamageFormula: c,
      blockHeavyInHalfCover: v,
      blockMediumHeavyInThreeQuarterCover: M,
      blockNonThrownInFullCover: k
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(y) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!f, this._weaponSlotKey = p || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "", this._blockHeavyInHalfCover = !!v, this._blockMediumHeavyInThreeQuarterCover = !!M, this._blockNonThrownInFullCover = !!k;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var v, M, k, z, w;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((M = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : M.call(v, "form.votv.roll-sheet")) ?? ((z = (k = this.element) == null ? void 0 : k.matches) != null && z.call(k, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), y = a.querySelectorAll(".roll-sheet-advantage-d6"), b = (n) => {
      const r = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(r)), y.forEach((u) => {
        const l = parseInt(u.dataset.advantageValue ?? "0", 10);
        u.classList.toggle("selected", l === r);
      });
    };
    y.forEach((n) => {
      n.addEventListener("click", (r) => {
        r.preventDefault(), b(n.dataset.advantageValue ?? "0"), t._updateFormulaPreview(a);
      });
    }), b((i == null ? void 0 : i.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((w = h == null ? void 0 : h.dataset) == null ? void 0 : w.moraleMax) ?? "3", 10) || 0)), f = a.querySelector("input[name='moraleDice']"), p = a.querySelectorAll(".roll-sheet-morale-d8"), o = (n) => {
      let r = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      r = Math.min(r, s), f && (f.value = String(r)), p.forEach((u, l) => {
        u.classList.toggle("selected", l < r), u.style.pointerEvents = l < s ? "" : "none", u.style.opacity = l < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (r) => {
        if (r.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > s) return;
        const u = n.dataset.moraleValue ?? "0";
        o(u), t._updateFormulaPreview(a);
      });
    }), o((f == null ? void 0 : f.value) ?? "0");
    const c = a.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => t._updateFormulaPreview(a)), c && c.addEventListener("change", () => t._updateFormulaPreview(a)), t._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (n) => {
      var r, u, l, g;
      if ((u = (r = n.target) == null ? void 0 : r.closest) != null && u.call(r, ".roll-sheet-close")) {
        n.preventDefault(), t.close();
        return;
      }
      (g = (l = n.target) == null ? void 0 : l.closest) != null && g.call(l, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), t._doRoll(a));
    });
  }
  _updateFormulaPreview(t) {
    var v, M, k, z, w, n, r, u, l, g, C, H;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((v = t.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0, i = parseInt(((M = t.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, y = parseInt(((k = t.querySelector("input[name='constantBonus']")) == null ? void 0 : k.value) ?? "0", 10) || 0, b = parseInt(((z = t.dataset) == null ? void 0 : z.baseMod) ?? "0", 10) || 0, h = parseInt(((w = t.dataset) == null ? void 0 : w.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, f = ((l = (u = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : u.has) != null && l.call(u, "diseased") ? -1 : 0) + ((H = (C = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : C.has) != null && H.call(C, "poisoned") ? -1 : 0), p = b + h + s + y + f, o = [];
    o.push(document.createElement("span")), o[0].textContent = "Összesítve: 3 ";
    const c = document.createElement("img");
    if (c.src = "systems/vacuum-of-the-void/assets/d6.svg", c.alt = "d6", c.className = "roll-sheet-preview-die", o[0].appendChild(c), a !== 0) {
      const S = document.createElement("span");
      S.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const I = document.createElement("img");
      I.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", I.alt = a > 0 ? "előny d6" : "hátrány d6", I.className = "roll-sheet-preview-die", S.appendChild(I), o.push(S);
    }
    if (i > 0) {
      const S = document.createElement("span");
      S.textContent = ` + ${i} `;
      const I = document.createElement("img");
      I.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", I.alt = "d8", I.className = "roll-sheet-preview-die", S.appendChild(I), o.push(S);
    }
    if (p !== 0) {
      const S = document.createElement("span");
      S.textContent = p > 0 ? ` + ${p}` : ` − ${Math.abs(p)}`, o.push(S);
    }
    e.innerHTML = "", e.append(...o);
  }
  getData(t = {}) {
    var l, g, C, H, S, I, E, X, j, ee, L, te, O, se, x, Q, F, K, B, U;
    const e = this.actor, a = Math.max(0, Number(((g = (l = e == null ? void 0 : e.system) == null ? void 0 : l.resources) == null ? void 0 : g.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", i, y, b].filter(Boolean).join(" ") || "3d6";
    let s = "", f = !1, p = 0;
    const o = [], c = [];
    let v = 0;
    if ((H = (C = game.user) == null ? void 0 : C.targets) != null && H.size) {
      const P = Array.from(game.user.targets)[0], d = (P == null ? void 0 : P.actor) ?? null;
      if (s = (d == null ? void 0 : d.name) || (P == null ? void 0 : P.name) || "", d) {
        const ae = (((I = (S = d.system) == null ? void 0 : S.identity) == null ? void 0 : I.size) ?? "").toString().trim();
        ([
          "Jármű (Kicsi)",
          "Jármű (Közepes)",
          "Jármű (Nagy)",
          "Gigantikus (Kicsi)",
          "Gigantikus (Közepes)",
          "Gigantikus (Nagy)"
        ].includes(ae) || d.type === "Jarmu") && (f = !0);
      }
      (X = (E = d == null ? void 0 : d.statuses) == null ? void 0 : E.has) != null && X.call(E, "stunned") && (p += 1, o.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (ee = (j = d == null ? void 0 : d.statuses) == null ? void 0 : j.has) != null && ee.call(j, "unconscious") && (p += 1, o.push(game.i18n.localize("VOTV.StatusUnconscious"))), (te = (L = d == null ? void 0 : d.statuses) == null ? void 0 : L.has) != null && te.call(L, "grappled") && (p += 1, o.push(game.i18n.localize("VOTV.StatusGrappled"))), (se = (O = d == null ? void 0 : d.statuses) == null ? void 0 : O.has) != null && se.call(O, "dodge") && (v = 1, c.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let M = v;
    (Q = (x = e == null ? void 0 : e.statuses) == null ? void 0 : x.has) != null && Q.call(x, "diseased") && c.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (K = (F = e == null ? void 0 : e.statuses) == null ? void 0 : F.has) != null && K.call(F, "poisoned") && c.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((U = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) == null ? void 0 : U.call(B, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (M += 1, c.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const z = Math.min(3, Math.max(-3, p - M)), w = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", n = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", u = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || n || w;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: z,
      advantageSourcesText: o.length ? o.join(", ") : "",
      disadvantageSourcesText: c.length ? c.join(", ") : "",
      blockRollWarningMessage: u,
      disableRollButton: this._blockHeavyInHalfCover || this._blockMediumHeavyInThreeQuarterCover || this._blockNonThrownInFullCover,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: s,
      requireDistanceVsDefense: f
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
    var w, n, r, u, l;
    if (!this._isWeaponAttack || !this._weaponSlotKey || !this.actor) return this._baseModifier;
    const t = this.actor, a = (((w = t.system) == null ? void 0 : w.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : r.call(n, (g) => g.type === "Fegyver")) ?? [], y = (a.itemId ?? "").trim(), b = y ? i.find((g) => g.id === y) ?? null : null, h = (u = b == null ? void 0 : b.system) == null ? void 0 : u.bonus, s = a.bonus, f = h != null && String(h).trim() !== "", p = s != null && String(s).trim() !== "", c = Number(f ? h : p ? s : 0) || 0, v = this._skillKey, M = ((l = t.system) == null ? void 0 : l.skills) ?? {}, k = Number(M[v] ?? 0) || 0;
    let z = 0;
    if (t.type === "Karakter" && v) {
      const g = Me._getSkillHealthStatusStatic(t, v);
      g === 1 ? z = -6 : g === 2 && (z = -3);
    }
    return c + k + z;
  }
  async _doRoll(t) {
    var a, i, y, b, h, s, f, p, o, c, v, M, k, z, w, n, r, u, l, g, C, H, S, I, E, X, j, ee, L, te, O, se, x, Q, F, K, B, U, Z, P, d, ae, Y, pe, W, ve, ne;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const V = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, me = (V.itemId ?? "").trim(), ye = me ? (((y = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : y.call(i, (N) => N.type === "Fegyver")) ?? []).find((N) => N.id === me) ?? null : null, ie = (((b = ye == null ? void 0 : ye.system) == null ? void 0 : b.size) ?? V.size ?? "").toString().toLowerCase();
        if ((s = (h = e.statuses) == null ? void 0 : h.has) != null && s.call(h, "fullcover") && ie !== "thrown") {
          const N = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (f = ui.notifications) == null ? void 0 : f.warn) == null || p.call(f, N);
          return;
        }
        if ((c = (o = e.statuses) == null ? void 0 : o.has) != null && c.call(o, "threequarteredcover") && (ie === "medium" || ie === "heavy")) {
          const N = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (M = (v = ui.notifications) == null ? void 0 : v.warn) == null || M.call(v, N);
          return;
        }
        if ((z = (k = e.statuses) == null ? void 0 : k.has) != null && z.call(k, "halfcover") && ie === "heavy") {
          const N = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (w = ui.notifications) == null ? void 0 : w.warn) == null || n.call(w, N);
          return;
        }
      }
      try {
        const oe = t.querySelector("[name='moraleDice']"), V = t.querySelector("[name='advantage']"), me = t.querySelector("[name='constantBonus']"), ye = Math.min(3, Math.max(0, parseInt((oe == null ? void 0 : oe.value) ?? "0", 10) || 0)), ie = Math.max(0, Number(((u = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : u.morale) ?? 0) || 0), N = Math.min(ye, ie), we = Math.min(3, Math.max(-3, parseInt((V == null ? void 0 : V.value) ?? "0", 10) || 0)), Be = parseInt((me == null ? void 0 : me.value) ?? "0", 10) || 0, Pe = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, Re = this._isWeaponAttack ? 0 : this._injuryModifier, je = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, Le = ((g = (l = e.statuses) == null ? void 0 : l.has) != null && g.call(l, "diseased") ? -1 : 0) + ((H = (C = e.statuses) == null ? void 0 : C.has) != null && H.call(C, "poisoned") ? -1 : 0), Ie = Pe + Re + je + Be + Le, De = [
          "3d6",
          we > 0 ? `+${we}d6` : we < 0 ? `-${Math.abs(we)}d6` : "",
          N > 0 ? `+${N}d8` : "",
          Ie !== 0 ? Ie > 0 ? `+${Ie}` : `${Ie}` : ""
        ].filter(Boolean).join(" "), ge = new Roll(De);
        await ge.evaluate({ async: !0 });
        const { resultType: He, label: xe } = $e(ge), Ke = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let qe = this._label;
        const Se = { resultType: He, critLabel: xe };
        if ((I = (S = game.user) == null ? void 0 : S.targets) != null && I.size) {
          const fe = Array.from(game.user.targets)[0], m = (fe == null ? void 0 : fe.actor) ?? null;
          if (m) {
            let ze = 0;
            const Ee = (((X = (E = m.system) == null ? void 0 : E.identity) == null ? void 0 : X.size) ?? "").toString().trim();
            if ([
              "Jármű (Kicsi)",
              "Jármű (Közepes)",
              "Jármű (Nagy)",
              "Gigantikus (Kicsi)",
              "Gigantikus (Közepes)",
              "Gigantikus (Nagy)"
            ].includes(Ee) || m.type === "Jarmu") {
              const _ = t.querySelector("input[name='targetDistance']"), R = ((_ == null ? void 0 : _.value) ?? "").trim();
              if (R === "") {
                (ee = (j = ui.notifications) == null ? void 0 : j.warn) == null || ee.call(j, "Távolság megadása kötelező ennél a célpontnál.");
                return;
              }
              const T = Number(R);
              if (!Number.isFinite(T) || T < 0) {
                (te = (L = ui.notifications) == null ? void 0 : L.warn) == null || te.call(L, "A Távolság mezőben nem érvényes szám szerepel.");
                return;
              }
              ze = T;
            }
            const Ce = ((O = m.system) == null ? void 0 : O.combat) ?? {}, Te = Number(Ce.defense ?? 0) || 0, Oe = Number(Ce.defenseBonus ?? 0) || 0;
            let be;
            if (m.type === "Jarmu") {
              const _ = (((se = m.items) == null ? void 0 : se.contents) ?? []).filter(($) => $.type === "Jarmuegyseg").length;
              let R = 0;
              _ >= 11 ? R = -6 : _ >= 6 && (R = -3);
              const T = (Q = (x = m.statuses) == null ? void 0 : x.has) != null && Q.call(x, "halfcover") ? 3 : 0, D = (K = (F = m.statuses) == null ? void 0 : F.has) != null && K.call(F, "threequarteredcover") ? 6 : 0;
              be = Te + R + T + D + ze;
            } else {
              const _ = Number(Ce.givenProtection ?? 0) || 0, R = (U = (B = m.statuses) == null ? void 0 : B.has) != null && U.call(B, "lookaround") ? 1 : 0, T = (P = (Z = m.statuses) == null ? void 0 : Z.has) != null && P.call(Z, "halfcover") ? 3 : 0, D = (ae = (d = m.statuses) == null ? void 0 : d.has) != null && ae.call(d, "threequarteredcover") ? 6 : 0;
              let $ = 0;
              if (m.type === "Karakter") {
                const _e = (((Y = m.items) == null ? void 0 : Y.contents) ?? []).filter(
                  (J) => {
                    var G;
                    return J.type === "Pancel" && ((G = J.system) == null ? void 0 : G.equipped) === !0;
                  }
                );
                for (const J of _e) {
                  const G = String(((pe = J.system) == null ? void 0 : pe.protectionBonus) ?? "").trim().replace(",", "."), ce = Number(G);
                  Number.isFinite(ce) && ($ += ce);
                }
              }
              const le = _ + $ + R + T + D;
              be = Te + Oe + le + ze;
            }
            const We = Number(ge.total ?? 0) || 0, Ne = !(((ve = (W = m.statuses) == null ? void 0 : W.has) == null ? void 0 : ve.call(W, "fullcover")) ?? !1) && We >= be, Ve = m.name ?? fe.name ?? "Célpont";
            let A = null, re = null;
            if (Ne) {
              if (m.type === "Karakter")
                try {
                  const _ = new Roll("1d8");
                  await _.evaluate({ async: !0 }), A = Number(_.total ?? 0) || 1, A === 1 ? re = "Fej" : A >= 2 && A <= 4 ? re = "Törzs" : A === 5 || A === 6 ? re = "Karok" : re = "Lábak";
                } catch (_) {
                  console.warn("VOTV hit location roll failed:", _);
                }
              else if (m.type === "Jarmu")
                try {
                  const _ = (((ne = m.items) == null ? void 0 : ne.contents) ?? []).filter((D) => D.type === "Jarmuegyseg"), R = [];
                  let T = 0;
                  for (const D of _) {
                    const le = ((D.system ?? {}).hit ?? "").toString().trim();
                    if (!le) continue;
                    const J = le.replace(/[–—]/g, "-").split(/[,;\s]+/), G = [];
                    for (const ce of J)
                      if (ce)
                        if (ce.includes("-")) {
                          const [ue, Ae] = ce.split("-");
                          let ke = Number(ue), de = Number(Ae);
                          if (!Number.isFinite(ke) || !Number.isFinite(de)) continue;
                          de < ke && ([ke, de] = [de, ke]), G.push({ from: ke, to: de }), de > T && (T = de);
                        } else {
                          const ue = Number(ce);
                          if (!Number.isFinite(ue)) continue;
                          G.push({ from: ue, to: ue }), ue > T && (T = ue);
                        }
                    G.length && R.push({ unit: D, segments: G });
                  }
                  if (T >= 1 && R.length) {
                    const D = new Roll(`1d${T}`);
                    await D.evaluate({ async: !0 });
                    const $ = Number(D.total ?? 0) || 1, le = R.filter(
                      (_e) => _e.segments.some((J) => $ >= J.from && $ <= J.to)
                    );
                    le.length === 1 && (A = $, re = le[0].unit.name ?? "");
                  }
                } catch (_) {
                  console.warn("VOTV vehicle hit-location roll failed:", _);
                }
            }
            this._isWeaponAttack ? (Se.weaponAttack = !0, Se.weapon = {
              actorId: e.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: m.id ?? null,
              targetName: Ve,
              defense: be,
              isHit: Ne,
              hitLocationRoll: A ?? null,
              hitLocationName: re ?? null
            }) : (Se.vsDefense = !0, Se.vsDefenseInfo = {
              targetActorId: m.id ?? null,
              targetName: Ve,
              defense: be,
              isHit: Ne,
              hitLocationRoll: A ?? null,
              hitLocationName: re ?? null
            });
          }
        }
        if (await ge.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: qe,
          flags: { "vacuum-of-the-void": Se },
          rollMode: Ke
        }), N > 0) {
          const he = Math.max(0, ie - N);
          await e.update({ "system.resources.morale": he });
        }
        if (this._isInitiativeRoll)
          try {
            const he = Number(ge.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": he });
            const fe = e.apps ?? [];
            for (const m of fe)
              typeof (m == null ? void 0 : m.render) == "function" && m.render(!0);
          } catch (he) {
            console.warn("VOTV initiative result update:", he);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Ze(q, t, e) {
  var s, f;
  if (!q) return;
  const a = Number(((f = (s = q.system) == null ? void 0 : s.skills) == null ? void 0 : f[t]) ?? 0) || 0, i = Me.BODY_PART_BY_SKILL[t] ? Me._getSkillHealthStatusStatic(q, t) : void 0;
  let y = 0;
  i === 1 ? y = -6 : i === 2 && (y = -3);
  const b = (e || "").trim() === "Kezdeményezés";
  new Fe({
    actor: q,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: y,
    isInitiativeRoll: b
  }).render(!0);
}
function Ye(q, t) {
  var Q, F, K, B, U, Z, P, d, ae, Y, pe, W, ve, ne, oe;
  if (!q || !t) return;
  const e = q, i = (((Q = e.system) == null ? void 0 : Q.weapons) ?? {})[t] ?? {}, y = ((F = e.system) == null ? void 0 : F.skills) ?? {}, b = ((B = (K = e.items) == null ? void 0 : K.filter) == null ? void 0 : B.call(K, (V) => V.type === "Fegyver")) ?? [], h = (i.itemId ?? "").trim(), s = h ? b.find((V) => V.id === h) ?? null : null, f = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", p = (U = s == null ? void 0 : s.system) == null ? void 0 : U.bonus, o = i.bonus, c = p != null && String(p).trim() !== "", v = o != null && String(o).trim() !== "", k = Number(c ? p : v ? o : 0) || 0, z = ((Z = s == null ? void 0 : s.system) == null ? void 0 : Z.type) || "kinetic", w = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.skillKey) ?? "").trim(), n = w && y[w] !== void 0 ? w : z === "explosive" ? "grenadeUse" : "firearms", r = Number(y[n] || 0) || 0, u = k + r;
  let l = 0;
  if (e.type === "Karakter") {
    const V = Me._getSkillHealthStatusStatic(e, n);
    V === 1 ? l = -6 : V === 2 && (l = -3);
  }
  const g = (((d = s == null ? void 0 : s.system) == null ? void 0 : d.damage) ?? "").trim(), C = (i.damage ?? "").trim(), H = g || C || "", S = (((ae = s == null ? void 0 : s.system) == null ? void 0 : ae.size) ?? i.size ?? "").toString().toLowerCase(), I = S === "heavy", E = S === "medium", X = S === "thrown", j = ((pe = (Y = e.statuses) == null ? void 0 : Y.has) == null ? void 0 : pe.call(Y, "halfcover")) ?? !1, ee = ((ve = (W = e.statuses) == null ? void 0 : W.has) == null ? void 0 : ve.call(W, "threequarteredcover")) ?? !1, L = ((oe = (ne = e.statuses) == null ? void 0 : ne.has) == null ? void 0 : oe.call(ne, "fullcover")) ?? !1, te = I && j, O = ee && (E || I), se = L && !X;
  new Fe({
    actor: q,
    skillKey: n,
    label: f,
    baseModifier: u,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: H,
    blockHeavyInHalfCover: te,
    blockMediumHeavyInThreeQuarterCover: O,
    blockNonThrownInFullCover: se
  }).render(!0);
}
export {
  Fe as VoidRollSheet,
  Ze as openRollSheetForSkill,
  Ye as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-KgQYPWT5.mjs.map
