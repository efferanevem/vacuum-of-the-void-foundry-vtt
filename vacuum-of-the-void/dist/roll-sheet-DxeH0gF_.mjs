import { V as fe, c as Ke } from "./vacuum-of-the-void-C3FsNCGh.mjs";
class we extends Application {
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
      injuryPenalty: m,
      isWeaponAttack: s,
      isInitiativeRoll: h,
      weaponSlotKey: p,
      weaponItemId: o,
      weaponDamageFormula: u,
      blockHeavyInHalfCover: f,
      blockMediumHeavyInThreeQuarterCover: _,
      blockNonThrownInFullCover: k
    } = t;
    super(t), this._actor = e, this._skillKey = a ?? "", this._label = i ?? a ?? "", this._baseModifier = Number(y) || 0, this._injuryModifier = Number(b) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!h, this._weaponSlotKey = p || "", this._weaponItemId = o || "", this._weaponDamageFormula = typeof u == "string" ? u.trim() : "", this._blockHeavyInHalfCover = !!f, this._blockMediumHeavyInThreeQuarterCover = !!_, this._blockNonThrownInFullCover = !!k;
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, e = {}) {
    const a = await super.render(t, e);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, _, k, M, I;
    const t = this, e = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(e)}"]`) ?? ((_ = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : _.call(f, "form.votv.roll-sheet")) ?? ((M = (k = this.element) == null ? void 0 : k.matches) != null && M.call(k, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const i = a.querySelector("input[name='advantage']"), y = a.querySelectorAll(".roll-sheet-advantage-d6"), b = (n) => {
      const r = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      i && (i.value = String(r)), y.forEach((c) => {
        const l = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", l === r);
      });
    };
    y.forEach((n) => {
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
    var f, _, k, M, I, n, r, c, l, g, z, R;
    const e = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!e) return;
    const a = parseInt(((f = t.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((_ = t.querySelector("input[name='moraleDice']")) == null ? void 0 : _.value) ?? "0", 10) || 0, y = parseInt(((k = t.querySelector("input[name='constantBonus']")) == null ? void 0 : k.value) ?? "0", 10) || 0, b = parseInt(((M = t.dataset) == null ? void 0 : M.baseMod) ?? "0", 10) || 0, m = parseInt(((I = t.dataset) == null ? void 0 : I.injuryMod) ?? "0", 10) || 0, s = parseInt(((n = t.dataset) == null ? void 0 : n.injuryPenalty) ?? "0", 10) || 0, h = ((l = (c = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : c.has) != null && l.call(c, "diseased") ? -1 : 0) + ((R = (z = (g = this.actor) == null ? void 0 : g.statuses) == null ? void 0 : z.has) != null && R.call(z, "poisoned") ? -1 : 0), p = b + m + s + y + h, o = [];
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
    var l, g, z, R, S, w, q, U, D, Z, L, Y, E, X, H, $, F, K, B, J;
    const e = this.actor, a = Math.max(0, Number(((g = (l = e == null ? void 0 : e.system) == null ? void 0 : l.resources) == null ? void 0 : g.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", y = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", b = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", i, y, b].filter(Boolean).join(" ") || "3d6";
    let s = "", h = !1, p = 0;
    const o = [], u = [];
    let f = 0;
    if ((R = (z = game.user) == null ? void 0 : z.targets) != null && R.size) {
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
      (U = (q = d == null ? void 0 : d.statuses) == null ? void 0 : q.has) != null && U.call(q, "stunned") && (p += 1, o.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget"))), (Z = (D = d == null ? void 0 : d.statuses) == null ? void 0 : D.has) != null && Z.call(D, "unconscious") && (p += 1, o.push(game.i18n.localize("VOTV.StatusUnconscious"))), (Y = (L = d == null ? void 0 : d.statuses) == null ? void 0 : L.has) != null && Y.call(L, "grappled") && (p += 1, o.push(game.i18n.localize("VOTV.StatusGrappled"))), (X = (E = d == null ? void 0 : d.statuses) == null ? void 0 : E.has) != null && X.call(E, "dodge") && (f = 1, u.push(game.i18n.localize("VOTV.StatusDodge")));
    }
    let _ = f;
    ($ = (H = e == null ? void 0 : e.statuses) == null ? void 0 : H.has) != null && $.call(H, "diseased") && u.push(`${game.i18n.localize("VOTV.StatusDiseased")} (-1)`), (K = (F = e == null ? void 0 : e.statuses) == null ? void 0 : F.has) != null && K.call(F, "poisoned") && u.push(`${game.i18n.localize("VOTV.StatusPoisoned")} (-1)`), ((J = (B = e == null ? void 0 : e.statuses) == null ? void 0 : B.has) == null ? void 0 : J.call(B, "intoxicated")) && this._skillKey !== "music" && this._skillKey !== "luck" && (_ += 1, u.push(game.i18n.localize("VOTV.StatusIntoxicated")));
    const M = Math.min(3, Math.max(-3, p - _)), I = this._blockHeavyInHalfCover ? game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!" : "", n = this._blockMediumHeavyInThreeQuarterCover ? game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!" : "", c = (this._blockNonThrownInFullCover ? game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!" : "") || n || I;
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: a,
      advantageValue: M,
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
    const t = this.actor, a = (((I = t.system) == null ? void 0 : I.weapons) ?? {})[this._weaponSlotKey] ?? {}, i = ((r = (n = t.items) == null ? void 0 : n.filter) == null ? void 0 : r.call(n, (g) => g.type === "Fegyver")) ?? [], y = (a.itemId ?? "").trim(), b = y ? i.find((g) => g.id === y) ?? null : null, m = (c = b == null ? void 0 : b.system) == null ? void 0 : c.bonus, s = a.bonus, h = m != null && String(m).trim() !== "", p = s != null && String(s).trim() !== "", u = Number(h ? m : p ? s : 0) || 0, f = this._skillKey, _ = ((l = t.system) == null ? void 0 : l.skills) ?? {}, k = Number(_[f] ?? 0) || 0;
    let M = 0;
    if (t.type === "Karakter" && f) {
      const g = fe._getSkillHealthStatusStatic(t, f);
      g === 1 ? M = -6 : g === 2 && (M = -3);
    }
    return u + k + M;
  }
  async _doRoll(t) {
    var a, i, y, b, m, s, h, p, o, u, f, _, k, M, I, n, r, c, l, g, z, R, S, w, q, U, D, Z, L, Y, E, X, H, $, F, K, B, J, G, P, d, ee, Q, ne, W, oe;
    const e = this.actor;
    if (e) {
      if (this._isWeaponAttack && this._weaponSlotKey) {
        const A = (((a = e.system) == null ? void 0 : a.weapons) ?? {})[this._weaponSlotKey] ?? {}, V = (A.itemId ?? "").trim(), ie = V ? (((y = (i = e.items) == null ? void 0 : i.filter) == null ? void 0 : y.call(i, (T) => T.type === "Fegyver")) ?? []).find((T) => T.id === V) ?? null : null, te = (((b = ie == null ? void 0 : ie.system) == null ? void 0 : b.size) ?? A.size ?? "").toString().toLowerCase();
        if ((s = (m = e.statuses) == null ? void 0 : m.has) != null && s.call(m, "fullcover") && te !== "thrown") {
          const T = game.i18n.localize("VOTV.RollSheet.NoNonThrownWeaponInFullCover") || "Teljes-fedezékben csak dobható fegyverekkel támadhatsz!";
          (p = (h = ui.notifications) == null ? void 0 : h.warn) == null || p.call(h, T);
          return;
        }
        if ((u = (o = e.statuses) == null ? void 0 : o.has) != null && u.call(o, "threequarteredcover") && (te === "medium" || te === "heavy")) {
          const T = game.i18n.localize("VOTV.RollSheet.NoMediumHeavyWeaponInThreeQuarterCover") || "Háromnegyed-fedezékben csak könnyű és dobható fegyverekkel támadhatsz!";
          (_ = (f = ui.notifications) == null ? void 0 : f.warn) == null || _.call(f, T);
          return;
        }
        if ((M = (k = e.statuses) == null ? void 0 : k.has) != null && M.call(k, "halfcover") && te === "heavy") {
          const T = game.i18n.localize("VOTV.RollSheet.NoHeavyWeaponInHalfCover") || "Fél-fedezékben nem támadhatsz nehéz fegyverekkel!";
          (n = (I = ui.notifications) == null ? void 0 : I.warn) == null || n.call(I, T);
          return;
        }
      }
      try {
        const O = t.querySelector("[name='moraleDice']"), A = t.querySelector("[name='advantage']"), V = t.querySelector("[name='constantBonus']"), ie = Math.min(3, Math.max(0, parseInt((O == null ? void 0 : O.value) ?? "0", 10) || 0)), te = Math.max(0, Number(((c = (r = e.system) == null ? void 0 : r.resources) == null ? void 0 : c.morale) ?? 0) || 0), T = Math.min(ie, te), ce = Math.min(3, Math.max(-3, parseInt((A == null ? void 0 : A.value) ?? "0", 10) || 0)), _e = parseInt((V == null ? void 0 : V.value) ?? "0", 10) || 0, Me = this._isWeaponAttack ? this._getCurrentWeaponBaseModifier() : this._baseModifier, Ce = this._isWeaponAttack ? 0 : this._injuryModifier, ze = this._isWeaponAttack ? 0 : this._injuryPenalty || 0, Te = ((g = (l = e.statuses) == null ? void 0 : l.has) != null && g.call(l, "diseased") ? -1 : 0) + ((R = (z = e.statuses) == null ? void 0 : z.has) != null && R.call(z, "poisoned") ? -1 : 0), de = Me + Ce + ze + _e + Te, Ne = [
          "3d6",
          ce > 0 ? `+${ce}d6` : ce < 0 ? `-${Math.abs(ce)}d6` : "",
          T > 0 ? `+${T}d8` : "",
          de !== 0 ? de > 0 ? `+${de}` : `${de}` : ""
        ].filter(Boolean).join(" "), re = new Roll(Ne);
        await re.evaluate({ async: !0 });
        const { resultType: Ve, label: Fe } = Ke(re), Be = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let Pe = this._label;
        const le = { resultType: Ve, critLabel: Fe };
        if ((w = (S = game.user) == null ? void 0 : S.targets) != null && w.size) {
          const ae = Array.from(game.user.targets)[0], v = (ae == null ? void 0 : ae.actor) ?? null;
          if (v) {
            let ve = 0;
            const je = (((U = (q = v.system) == null ? void 0 : q.identity) == null ? void 0 : U.size) ?? "").toString().trim();
            if ([
              "Jármű (Kicsi)",
              "Jármű (Közepes)",
              "Jármű (Nagy)",
              "Gigantikus (Kicsi)",
              "Gigantikus (Közepes)",
              "Gigantikus (Nagy)"
            ].includes(je) || v.type === "Jarmu") {
              const C = t.querySelector("input[name='targetDistance']"), N = ((C == null ? void 0 : C.value) ?? "").trim();
              if (N === "") {
                (Z = (D = ui.notifications) == null ? void 0 : D.warn) == null || Z.call(D, "Távolság megadása kötelező ennél a célpontnál.");
                return;
              }
              const j = Number(N);
              if (!Number.isFinite(j) || j < 0) {
                (Y = (L = ui.notifications) == null ? void 0 : L.warn) == null || Y.call(L, "A Távolság mezőben nem érvényes szám szerepel.");
                return;
              }
              ve = j;
            }
            const ye = ((E = v.system) == null ? void 0 : E.combat) ?? {}, be = Number(ye.defense ?? 0) || 0, De = Number(ye.defenseBonus ?? 0) || 0;
            let ue;
            if (v.type === "Jarmu") {
              const C = (((X = v.items) == null ? void 0 : X.contents) ?? []).filter((me) => me.type === "Jarmuegyseg").length;
              let N = 0;
              C >= 11 ? N = -6 : C >= 6 && (N = -3);
              const j = ($ = (H = v.statuses) == null ? void 0 : H.has) != null && $.call(H, "halfcover") ? 3 : 0, Se = (K = (F = v.statuses) == null ? void 0 : F.has) != null && K.call(F, "threequarteredcover") ? 6 : 0;
              ue = be + N + j + Se + ve;
            } else {
              const C = Number(ye.givenProtection ?? 0) || 0, N = (J = (B = v.statuses) == null ? void 0 : B.has) != null && J.call(B, "lookaround") ? 1 : 0, j = (P = (G = v.statuses) == null ? void 0 : G.has) != null && P.call(G, "halfcover") ? 3 : 0, Se = (ee = (d = v.statuses) == null ? void 0 : d.has) != null && ee.call(d, "threequarteredcover") ? 6 : 0;
              let me = 0;
              if (v.type === "Karakter") {
                const He = (((Q = v.items) == null ? void 0 : Q.contents) ?? []).filter(
                  (he) => {
                    var pe;
                    return he.type === "Pancel" && ((pe = he.system) == null ? void 0 : pe.equipped) === !0;
                  }
                );
                for (const he of He) {
                  const pe = String(((ne = he.system) == null ? void 0 : ne.protectionBonus) ?? "").trim().replace(",", "."), Ie = Number(pe);
                  Number.isFinite(Ie) && (me += Ie);
                }
              }
              const Re = C + me + N + j + Se;
              ue = be + De + Re + ve;
            }
            const Le = Number(re.total ?? 0) || 0, ge = !(((oe = (W = v.statuses) == null ? void 0 : W.has) == null ? void 0 : oe.call(W, "fullcover")) ?? !1) && Le >= ue, ke = v.name ?? ae.name ?? "Célpont";
            if (this._isWeaponAttack) {
              let C = null, N = null;
              if (ge && v.type === "Karakter")
                try {
                  const j = new Roll("1d8");
                  await j.evaluate({ async: !0 }), C = Number(j.total ?? 0) || 1, C === 1 ? N = "Fej" : C >= 2 && C <= 4 ? N = "Törzs" : C === 5 || C === 6 ? N = "Karok" : N = "Lábak";
                } catch (j) {
                  console.warn("VOTV hit location roll failed:", j);
                }
              le.weaponAttack = !0, le.weapon = {
                actorId: e.id ?? null,
                itemId: this._weaponItemId || null,
                slotKey: this._weaponSlotKey || null,
                damageFormula: this._weaponDamageFormula || null,
                targetActorId: v.id ?? null,
                targetName: ke,
                defense: ue,
                isHit: ge,
                hitLocationRoll: C ?? null,
                hitLocationName: N ?? null
              };
            } else
              le.vsDefense = !0, le.vsDefenseInfo = {
                targetActorId: v.id ?? null,
                targetName: ke,
                defense: ue,
                isHit: ge
              };
          }
        }
        if (await re.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
          flavor: Pe,
          flags: { "vacuum-of-the-void": le },
          rollMode: Be
        }), T > 0) {
          const se = Math.max(0, te - T);
          await e.update({ "system.resources.morale": se });
        }
        if (this._isInitiativeRoll)
          try {
            const se = Number(re.total) ?? 0;
            await e.update({ "system.combat.initiativeResult": se });
            const ae = e.apps ?? [];
            for (const v of ae)
              typeof (v == null ? void 0 : v.render) == "function" && v.render(!0);
          } catch (se) {
            console.warn("VOTV initiative result update:", se);
          }
      } finally {
        this.close();
      }
    }
  }
}
function Oe(x, t, e) {
  var s, h;
  if (!x) return;
  const a = Number(((h = (s = x.system) == null ? void 0 : s.skills) == null ? void 0 : h[t]) ?? 0) || 0, i = fe.BODY_PART_BY_SKILL[t] ? fe._getSkillHealthStatusStatic(x, t) : void 0;
  let y = 0;
  i === 1 ? y = -6 : i === 2 && (y = -3);
  const b = (e || "").trim() === "Kezdeményezés";
  new we({
    actor: x,
    skillKey: t,
    label: e || t,
    baseModifier: a,
    injuryModifier: y,
    isInitiativeRoll: b
  }).render(!0);
}
function Ae(x, t) {
  var $, F, K, B, J, G, P, d, ee, Q, ne, W, oe, O, A;
  if (!x || !t) return;
  const e = x, i = ((($ = e.system) == null ? void 0 : $.weapons) ?? {})[t] ?? {}, y = ((F = e.system) == null ? void 0 : F.skills) ?? {}, b = ((B = (K = e.items) == null ? void 0 : K.filter) == null ? void 0 : B.call(K, (V) => V.type === "Fegyver")) ?? [], m = (i.itemId ?? "").trim(), s = m ? b.find((V) => V.id === m) ?? null : null, h = ((s == null ? void 0 : s.name) ?? i.name ?? "").trim() || "Fegyver", p = (J = s == null ? void 0 : s.system) == null ? void 0 : J.bonus, o = i.bonus, u = p != null && String(p).trim() !== "", f = o != null && String(o).trim() !== "", k = Number(u ? p : f ? o : 0) || 0, M = ((G = s == null ? void 0 : s.system) == null ? void 0 : G.type) || "kinetic", I = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.skillKey) ?? "").trim(), n = I && y[I] !== void 0 ? I : M === "explosive" ? "grenadeUse" : "firearms", r = Number(y[n] || 0) || 0, c = k + r;
  let l = 0;
  if (e.type === "Karakter") {
    const V = fe._getSkillHealthStatusStatic(e, n);
    V === 1 ? l = -6 : V === 2 && (l = -3);
  }
  const g = (((d = s == null ? void 0 : s.system) == null ? void 0 : d.damage) ?? "").trim(), z = (i.damage ?? "").trim(), R = g || z || "", S = (((ee = s == null ? void 0 : s.system) == null ? void 0 : ee.size) ?? i.size ?? "").toString().toLowerCase(), w = S === "heavy", q = S === "medium", U = S === "thrown", D = ((ne = (Q = e.statuses) == null ? void 0 : Q.has) == null ? void 0 : ne.call(Q, "halfcover")) ?? !1, Z = ((oe = (W = e.statuses) == null ? void 0 : W.has) == null ? void 0 : oe.call(W, "threequarteredcover")) ?? !1, L = ((A = (O = e.statuses) == null ? void 0 : O.has) == null ? void 0 : A.call(O, "fullcover")) ?? !1, Y = w && D, E = Z && (q || w), X = L && !U;
  new we({
    actor: x,
    skillKey: n,
    label: h,
    baseModifier: c,
    injuryModifier: 0,
    injuryPenalty: l,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (s == null ? void 0 : s.id) ?? m,
    weaponDamageFormula: R,
    blockHeavyInHalfCover: Y,
    blockMediumHeavyInThreeQuarterCover: E,
    blockNonThrownInFullCover: X
  }).render(!0);
}
export {
  we as VoidRollSheet,
  Oe as openRollSheetForSkill,
  Ae as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DxeH0gF_.mjs.map
