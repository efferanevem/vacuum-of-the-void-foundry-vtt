import { V as T, c as ee } from "./vacuum-of-the-void-Dn6tIHtq.mjs";
class W extends Application {
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
      actor: a,
      skillKey: s,
      label: i,
      baseModifier: c,
      injuryModifier: v,
      injuryPenalty: m,
      isWeaponAttack: n,
      isInitiativeRoll: l,
      weaponSlotKey: u,
      weaponItemId: p,
      weaponDamageFormula: d
    } = t;
    super(t), this._actor = a, this._skillKey = s ?? "", this._label = i ?? s ?? "", this._baseModifier = Number(c) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!n, this._isInitiativeRoll = !!l, this._weaponSlotKey = u || "", this._weaponItemId = p || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(t = !1, a = {}) {
    const s = await super.render(t, a);
    return setTimeout(() => this._bindRollSheetListeners(), 50), s;
  }
  _bindRollSheetListeners() {
    var y, S, f, h, M;
    const t = this, a = this.id ?? "votv-roll-sheet", s = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(a)}"]`) ?? ((S = (y = this.element) == null ? void 0 : y.querySelector) == null ? void 0 : S.call(y, "form.votv.roll-sheet")) ?? ((h = (f = this.element) == null ? void 0 : f.matches) != null && h.call(f, "form.votv.roll-sheet") ? this.element : null);
    if (!s || s._votvRollBound) return;
    const i = s.querySelector("input[name='advantage']"), c = s.querySelectorAll(".roll-sheet-advantage-d6"), v = (o) => {
      const e = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      i && (i.value = String(e)), c.forEach((r) => {
        const g = parseInt(r.dataset.advantageValue ?? "0", 10);
        r.classList.toggle("selected", g === e);
      });
    };
    c.forEach((o) => {
      o.addEventListener("click", (e) => {
        e.preventDefault(), v(o.dataset.advantageValue ?? "0"), t._updateFormulaPreview(s);
      });
    }), v((i == null ? void 0 : i.value) ?? "0");
    const m = s.querySelector(".roll-sheet-morale-wrap"), n = Math.min(3, Math.max(0, parseInt(((M = m == null ? void 0 : m.dataset) == null ? void 0 : M.moraleMax) ?? "3", 10) || 0)), l = s.querySelector("input[name='moraleDice']"), u = s.querySelectorAll(".roll-sheet-morale-d8"), p = (o) => {
      let e = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      e = Math.min(e, n), l && (l.value = String(e)), u.forEach((r, g) => {
        r.classList.toggle("selected", g < e), r.style.pointerEvents = g < n ? "" : "none", r.style.opacity = g < n ? "" : "0.35";
      });
    };
    s.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (e) => {
        if (e.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > n) return;
        const r = o.dataset.moraleValue ?? "0";
        p(r), t._updateFormulaPreview(s);
      });
    }), p((l == null ? void 0 : l.value) ?? "0");
    const d = s.querySelector("input[name='constantBonus']");
    d && d.addEventListener("input", () => t._updateFormulaPreview(s)), d && d.addEventListener("change", () => t._updateFormulaPreview(s)), t._updateFormulaPreview(s), s._votvRollBound = !0, s.addEventListener("click", (o) => {
      var e, r, g, I;
      if ((r = (e = o.target) == null ? void 0 : e.closest) != null && r.call(e, ".roll-sheet-close")) {
        o.preventDefault(), t.close();
        return;
      }
      (I = (g = o.target) == null ? void 0 : g.closest) != null && I.call(g, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), t._doRoll(s));
    });
  }
  _updateFormulaPreview(t) {
    var d, y, S, f, h, M;
    const a = t == null ? void 0 : t.querySelector(".roll-sheet-formula-preview");
    if (!a) return;
    const s = parseInt(((d = t.querySelector("input[name='advantage']")) == null ? void 0 : d.value) ?? "0", 10) || 0, i = parseInt(((y = t.querySelector("input[name='moraleDice']")) == null ? void 0 : y.value) ?? "0", 10) || 0, c = parseInt(((S = t.querySelector("input[name='constantBonus']")) == null ? void 0 : S.value) ?? "0", 10) || 0, v = parseInt(((f = t.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, m = parseInt(((h = t.dataset) == null ? void 0 : h.injuryMod) ?? "0", 10) || 0, n = parseInt(((M = t.dataset) == null ? void 0 : M.injuryPenalty) ?? "0", 10) || 0, l = v + m + n + c, u = [];
    u.push(document.createElement("span")), u[0].textContent = "Összesítve: 3 ";
    const p = document.createElement("img");
    if (p.src = "systems/vacuum-of-the-void/assets/d6.svg", p.alt = "d6", p.className = "roll-sheet-preview-die", u[0].appendChild(p), s !== 0) {
      const o = document.createElement("span");
      o.textContent = s > 0 ? ` + ${s} ` : ` − ${Math.abs(s)} `;
      const e = document.createElement("img");
      e.src = s > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", e.alt = s > 0 ? "előny d6" : "hátrány d6", e.className = "roll-sheet-preview-die", o.appendChild(e), u.push(o);
    }
    if (i > 0) {
      const o = document.createElement("span");
      o.textContent = ` + ${i} `;
      const e = document.createElement("img");
      e.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", e.alt = "d8", e.className = "roll-sheet-preview-die", o.appendChild(e), u.push(o);
    }
    if (l !== 0) {
      const o = document.createElement("span");
      o.textContent = l > 0 ? ` + ${l}` : ` − ${Math.abs(l)}`, u.push(o);
    }
    a.innerHTML = "", a.append(...u);
  }
  getData(t = {}) {
    var d, y, S, f, h, M;
    const a = this.actor, s = Math.max(0, Number(((y = (d = a == null ? void 0 : a.system) == null ? void 0 : d.resources) == null ? void 0 : y.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", i, c, v].filter(Boolean).join(" ") || "3d6";
    let n = "", l = 0;
    const u = [], p = [];
    if (this._isWeaponAttack && ((f = (S = game.user) == null ? void 0 : S.targets) != null && f.size)) {
      const e = Array.from(game.user.targets)[0], r = (e == null ? void 0 : e.actor) ?? null;
      n = (r == null ? void 0 : r.name) || (e == null ? void 0 : e.name) || "", (M = (h = r == null ? void 0 : r.statuses) == null ? void 0 : h.has) != null && M.call(h, "stunned") && (l = 1, u.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: s,
      advantageValue: l,
      advantageSourcesText: u.length ? u.join(", ") : "",
      disadvantageSourcesText: p.length ? p.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: n
    };
  }
  activateListeners(t) {
    var a;
    (a = super.activateListeners) == null || a.call(this, t), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(t) {
    var s, i, c, v, m, n, l, u, p, d, y;
    const a = this.actor;
    if (a)
      try {
        const S = t.querySelector("[name='moraleDice']"), f = t.querySelector("[name='advantage']"), h = t.querySelector("[name='constantBonus']"), M = Math.min(3, Math.max(0, parseInt((S == null ? void 0 : S.value) ?? "0", 10) || 0)), o = Math.max(0, Number(((i = (s = a.system) == null ? void 0 : s.resources) == null ? void 0 : i.morale) ?? 0) || 0), e = Math.min(M, o), r = Math.min(3, Math.max(-3, parseInt((f == null ? void 0 : f.value) ?? "0", 10) || 0)), g = parseInt((h == null ? void 0 : h.value) ?? "0", 10) || 0, I = this._baseModifier, L = this._injuryModifier, x = this._injuryPenalty || 0, D = ((v = (c = a.statuses) == null ? void 0 : c.has) == null ? void 0 : v.call(c, "diseased")) || ((n = (m = a.statuses) == null ? void 0 : m.has) == null ? void 0 : n.call(m, "poisoned")) ? -1 : 0, j = I + L + x + g + D, B = [
          "3d6",
          r > 0 ? `+${r}d6` : r < 0 ? `-${Math.abs(r)}d6` : "",
          e > 0 ? `+${e}d8` : "",
          j !== 0 ? j > 0 ? `+${j}` : `${j}` : ""
        ].filter(Boolean).join(" "), _ = new Roll(B);
        await _.evaluate({ async: !0 });
        const { resultType: H, label: U } = ee(_), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const E = { resultType: H, critLabel: U };
        if (this._isWeaponAttack && ((u = (l = game.user) == null ? void 0 : l.targets) != null && u.size)) {
          const k = Array.from(game.user.targets)[0], b = (k == null ? void 0 : k.actor) ?? null;
          if (b) {
            const A = ((p = b.system) == null ? void 0 : p.combat) ?? {}, J = Number(A.defense ?? 0) || 0, Q = Number(A.defenseBonus ?? 0) || 0, X = Number(A.givenProtection ?? 0) || 0;
            let $ = 0;
            if (b.type === "Karakter") {
              const R = (((d = b.items) == null ? void 0 : d.contents) ?? []).filter(
                (V) => {
                  var q;
                  return V.type === "Pancel" && ((q = V.system) == null ? void 0 : q.equipped) === !0;
                }
              );
              for (const V of R) {
                const q = String(((y = V.system) == null ? void 0 : y.protectionBonus) ?? "").trim().replace(",", "."), z = Number(q);
                Number.isFinite(z) && ($ += z);
              }
            }
            const O = J + Q + X + $, K = (Number(_.total ?? 0) || 0) >= O, Z = b.name ?? k.name ?? "Célpont";
            let P = null, F = null;
            if (K && b.type === "Karakter")
              try {
                const R = new Roll("1d8");
                await R.evaluate({ async: !0 }), P = Number(R.total ?? 0) || 1, P === 1 ? F = "Fej" : P >= 2 && P <= 4 ? F = "Törzs" : P === 5 || P === 6 ? F = "Karok" : F = "Lábak";
              } catch (R) {
                console.warn("VOTV hit location roll failed:", R);
              }
            E.weaponAttack = !0, E.weapon = {
              actorId: a.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: b.id ?? null,
              targetName: Z,
              defense: O,
              isHit: K,
              hitLocationRoll: P ?? null,
              hitLocationName: F ?? null
            };
          }
        }
        if (await _.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: a, alias: (a == null ? void 0 : a.name) ?? void 0 }),
          flavor: G,
          flags: { "vacuum-of-the-void": E },
          rollMode: Y
        }), e > 0) {
          const N = Math.max(0, o - e);
          await a.update({ "system.resources.morale": N });
        }
        if (this._isInitiativeRoll)
          try {
            const N = Number(_.total) ?? 0;
            await a.update({ "system.combat.initiativeResult": N });
            const k = a.apps ?? [];
            for (const b of k)
              typeof (b == null ? void 0 : b.render) == "function" && b.render(!0);
          } catch (N) {
            console.warn("VOTV initiative result update:", N);
          }
      } finally {
        this.close();
      }
  }
}
function ae(w, t, a) {
  var n, l;
  if (!w) return;
  const s = Number(((l = (n = w.system) == null ? void 0 : n.skills) == null ? void 0 : l[t]) ?? 0) || 0, i = T.BODY_PART_BY_SKILL[t] ? T._getSkillHealthStatusStatic(w, t) : void 0;
  let c = 0;
  i === 1 ? c = -6 : i === 2 && (c = -3);
  const v = (a || "").trim() === "Kezdeményezés";
  new W({
    actor: w,
    skillKey: t,
    label: a || t,
    baseModifier: s,
    injuryModifier: c,
    isInitiativeRoll: v
  }).render(!0);
}
function ne(w, t) {
  var g, I, L, x, C, D, j, B;
  if (!w || !t) return;
  const a = w, i = (((g = a.system) == null ? void 0 : g.weapons) ?? {})[t] ?? {}, c = ((I = a.system) == null ? void 0 : I.skills) ?? {}, v = ((x = (L = a.items) == null ? void 0 : L.filter) == null ? void 0 : x.call(L, (_) => _.type === "Fegyver")) ?? [], m = (i.itemId ?? "").trim(), n = m ? v.find((_) => _.id === m) ?? null : null, l = ((n == null ? void 0 : n.name) ?? i.name ?? "").trim() || "Fegyver", u = Number(i.bonus || ((C = n == null ? void 0 : n.system) == null ? void 0 : C.bonus) || 0) || 0, p = ((D = n == null ? void 0 : n.system) == null ? void 0 : D.type) || "kinetic", d = (((j = n == null ? void 0 : n.system) == null ? void 0 : j.skillKey) ?? "").trim(), y = d && c[d] !== void 0 ? d : p === "explosive" ? "grenadeUse" : "firearms", S = Number(c[y] || 0) || 0, f = u + S;
  let h = 0;
  if (w.type === "Karakter") {
    const _ = T._getSkillHealthStatusStatic(w, y);
    _ === 1 ? h = -6 : _ === 2 && (h = -3);
  }
  const M = (((B = n == null ? void 0 : n.system) == null ? void 0 : B.damage) ?? "").trim(), o = (i.damage ?? "").trim(), e = M || o || "";
  new W({
    actor: w,
    skillKey: y,
    label: l,
    baseModifier: f,
    injuryModifier: 0,
    injuryPenalty: h,
    isWeaponAttack: !0,
    weaponSlotKey: t,
    weaponItemId: (n == null ? void 0 : n.id) ?? m,
    weaponDamageFormula: e
  }).render(!0);
}
export {
  W as VoidRollSheet,
  ae as openRollSheetForSkill,
  ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-C_myPWf3.mjs.map
