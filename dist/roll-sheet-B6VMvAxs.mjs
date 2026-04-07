import { V as T, c as ee } from "./vacuum-of-the-void-DbdmVTsH.mjs";
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
  constructor(e = {}) {
    const {
      actor: s,
      skillKey: t,
      label: i,
      baseModifier: c,
      injuryModifier: g,
      injuryPenalty: m,
      isWeaponAttack: a,
      isInitiativeRoll: u,
      weaponSlotKey: y,
      weaponItemId: d,
      weaponDamageFormula: l
    } = e;
    super(e), this._actor = s, this._skillKey = t ?? "", this._label = i ?? t ?? "", this._baseModifier = Number(c) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(m) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!u, this._weaponSlotKey = y || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, s = {}) {
    const t = await super.render(e, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var f, S, v, h, b;
    const e = this, s = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((S = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : S.call(f, "form.votv.roll-sheet")) ?? ((h = (v = this.element) == null ? void 0 : v.matches) != null && h.call(v, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const i = t.querySelector("input[name='advantage']"), c = t.querySelectorAll(".roll-sheet-advantage-d6"), g = (r) => {
      const n = Math.min(3, Math.max(-3, parseInt(r, 10) || 0));
      i && (i.value = String(n)), c.forEach((o) => {
        const p = parseInt(o.dataset.advantageValue ?? "0", 10);
        o.classList.toggle("selected", p === n);
      });
    };
    c.forEach((r) => {
      r.addEventListener("click", (n) => {
        n.preventDefault(), g(r.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), g((i == null ? void 0 : i.value) ?? "0");
    const m = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((b = m == null ? void 0 : m.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), u = t.querySelector("input[name='moraleDice']"), y = t.querySelectorAll(".roll-sheet-morale-d8"), d = (r) => {
      let n = Math.min(3, Math.max(0, parseInt(r, 10) || 0));
      n = Math.min(n, a), u && (u.value = String(n)), y.forEach((o, p) => {
        o.classList.toggle("selected", p < n), o.style.pointerEvents = p < a ? "" : "none", o.style.opacity = p < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((r) => {
      r.addEventListener("click", (n) => {
        if (n.preventDefault(), r.classList.contains("roll-sheet-morale-d8") && parseInt(r.dataset.moraleValue ?? "0", 10) > a) return;
        const o = r.dataset.moraleValue ?? "0";
        d(o), e._updateFormulaPreview(t);
      });
    }), d((u == null ? void 0 : u.value) ?? "0");
    const l = t.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => e._updateFormulaPreview(t)), l && l.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (r) => {
      var n, o, p, L;
      if ((o = (n = r.target) == null ? void 0 : n.closest) != null && o.call(n, ".roll-sheet-close")) {
        r.preventDefault(), e.close();
        return;
      }
      (L = (p = r.target) == null ? void 0 : p.closest) != null && L.call(p, ".roll-sheet-do-roll") && (r.preventDefault(), r.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var f, S, v, h, b, r, n, o, p, L, P, N;
    const s = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const t = parseInt(((f = e.querySelector("input[name='advantage']")) == null ? void 0 : f.value) ?? "0", 10) || 0, i = parseInt(((S = e.querySelector("input[name='moraleDice']")) == null ? void 0 : S.value) ?? "0", 10) || 0, c = parseInt(((v = e.querySelector("input[name='constantBonus']")) == null ? void 0 : v.value) ?? "0", 10) || 0, g = parseInt(((h = e.dataset) == null ? void 0 : h.baseMod) ?? "0", 10) || 0, m = parseInt(((b = e.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, a = parseInt(((r = e.dataset) == null ? void 0 : r.injuryPenalty) ?? "0", 10) || 0, u = (p = (o = (n = this.actor) == null ? void 0 : n.statuses) == null ? void 0 : o.has) != null && p.call(o, "diseased") || (N = (P = (L = this.actor) == null ? void 0 : L.statuses) == null ? void 0 : P.has) != null && N.call(P, "poisoned") ? -1 : 0, y = g + m + a + c + u, d = [];
    d.push(document.createElement("span")), d[0].textContent = "Összesítve: 3 ";
    const l = document.createElement("img");
    if (l.src = "systems/vacuum-of-the-void/assets/d6.svg", l.alt = "d6", l.className = "roll-sheet-preview-die", d[0].appendChild(l), t !== 0) {
      const M = document.createElement("span");
      M.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const _ = document.createElement("img");
      _.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", _.alt = t > 0 ? "előny d6" : "hátrány d6", _.className = "roll-sheet-preview-die", M.appendChild(_), d.push(M);
    }
    if (i > 0) {
      const M = document.createElement("span");
      M.textContent = ` + ${i} `;
      const _ = document.createElement("img");
      _.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", _.alt = "d8", _.className = "roll-sheet-preview-die", M.appendChild(_), d.push(M);
    }
    if (y !== 0) {
      const M = document.createElement("span");
      M.textContent = y > 0 ? ` + ${y}` : ` − ${Math.abs(y)}`, d.push(M);
    }
    s.innerHTML = "", s.append(...d);
  }
  getData(e = {}) {
    var l, f, S, v, h, b;
    const s = this.actor, t = Math.max(0, Number(((f = (l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) == null ? void 0 : f.morale) ?? 0) || 0), i = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", m = ["3d6", i, c, g].filter(Boolean).join(" ") || "3d6";
    let a = "", u = 0;
    const y = [], d = [];
    if (this._isWeaponAttack && ((v = (S = game.user) == null ? void 0 : S.targets) != null && v.size)) {
      const n = Array.from(game.user.targets)[0], o = (n == null ? void 0 : n.actor) ?? null;
      a = (o == null ? void 0 : o.name) || (n == null ? void 0 : n.name) || "", (b = (h = o == null ? void 0 : o.statuses) == null ? void 0 : h.has) != null && b.call(h, "stunned") && (u = 1, y.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: m,
      moraleCurrent: t,
      advantageValue: u,
      advantageSourcesText: y.length ? y.join(", ") : "",
      disadvantageSourcesText: d.length ? d.join(", ") : "",
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: a
    };
  }
  activateListeners(e) {
    var s;
    (s = super.activateListeners) == null || s.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var t, i, c, g, m, a, u, y, d, l, f;
    const s = this.actor;
    if (s)
      try {
        const S = e.querySelector("[name='moraleDice']"), v = e.querySelector("[name='advantage']"), h = e.querySelector("[name='constantBonus']"), b = Math.min(3, Math.max(0, parseInt((S == null ? void 0 : S.value) ?? "0", 10) || 0)), r = Math.max(0, Number(((i = (t = s.system) == null ? void 0 : t.resources) == null ? void 0 : i.morale) ?? 0) || 0), n = Math.min(b, r), o = Math.min(3, Math.max(-3, parseInt((v == null ? void 0 : v.value) ?? "0", 10) || 0)), p = parseInt((h == null ? void 0 : h.value) ?? "0", 10) || 0, L = this._baseModifier, P = this._injuryModifier, N = this._injuryPenalty || 0, _ = ((g = (c = s.statuses) == null ? void 0 : c.has) == null ? void 0 : g.call(c, "diseased")) || ((a = (m = s.statuses) == null ? void 0 : m.has) == null ? void 0 : a.call(m, "poisoned")) ? -1 : 0, k = L + P + N + p + _, V = [
          "3d6",
          o > 0 ? `+${o}d6` : o < 0 ? `-${Math.abs(o)}d6` : "",
          n > 0 ? `+${n}d8` : "",
          k !== 0 ? k > 0 ? `+${k}` : `${k}` : ""
        ].filter(Boolean).join(" "), w = new Roll(V);
        await w.evaluate({ async: !0 });
        const { resultType: H, label: U } = ee(w), Y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let G = this._label;
        const E = { resultType: H, critLabel: U };
        if (this._isWeaponAttack && ((y = (u = game.user) == null ? void 0 : u.targets) != null && y.size)) {
          const x = Array.from(game.user.targets)[0], I = (x == null ? void 0 : x.actor) ?? null;
          if (I) {
            const A = ((d = I.system) == null ? void 0 : d.combat) ?? {}, J = Number(A.defense ?? 0) || 0, Q = Number(A.defenseBonus ?? 0) || 0, X = Number(A.givenProtection ?? 0) || 0;
            let $ = 0;
            if (I.type === "Karakter") {
              const D = (((l = I.items) == null ? void 0 : l.contents) ?? []).filter(
                (q) => {
                  var C;
                  return q.type === "Pancel" && ((C = q.system) == null ? void 0 : C.equipped) === !0;
                }
              );
              for (const q of D) {
                const C = String(((f = q.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), z = Number(C);
                Number.isFinite(z) && ($ += z);
              }
            }
            const O = J + Q + X + $, K = (Number(w.total ?? 0) || 0) >= O, Z = I.name ?? x.name ?? "Célpont";
            let R = null, B = null;
            if (K && I.type === "Karakter")
              try {
                const D = new Roll("1d8");
                await D.evaluate({ async: !0 }), R = Number(D.total ?? 0) || 1, R === 1 ? B = "Fej" : R >= 2 && R <= 4 ? B = "Törzs" : R === 5 || R === 6 ? B = "Karok" : B = "Lábak";
              } catch (D) {
                console.warn("VOTV hit location roll failed:", D);
              }
            E.weaponAttack = !0, E.weapon = {
              actorId: s.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: I.id ?? null,
              targetName: Z,
              defense: O,
              isHit: K,
              hitLocationRoll: R ?? null,
              hitLocationName: B ?? null
            };
          }
        }
        if (await w.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
          flavor: G,
          flags: { "vacuum-of-the-void": E },
          rollMode: Y
        }), n > 0) {
          const F = Math.max(0, r - n);
          await s.update({ "system.resources.morale": F });
        }
        if (this._isInitiativeRoll)
          try {
            const F = Number(w.total) ?? 0;
            await s.update({ "system.combat.initiativeResult": F });
            const x = s.apps ?? [];
            for (const I of x)
              typeof (I == null ? void 0 : I.render) == "function" && I.render(!0);
          } catch (F) {
            console.warn("VOTV initiative result update:", F);
          }
      } finally {
        this.close();
      }
  }
}
function ae(j, e, s) {
  var a, u;
  if (!j) return;
  const t = Number(((u = (a = j.system) == null ? void 0 : a.skills) == null ? void 0 : u[e]) ?? 0) || 0, i = T.BODY_PART_BY_SKILL[e] ? T._getSkillHealthStatusStatic(j, e) : void 0;
  let c = 0;
  i === 1 ? c = -6 : i === 2 && (c = -3);
  const g = (s || "").trim() === "Kezdeményezés";
  new W({
    actor: j,
    skillKey: e,
    label: s || e,
    baseModifier: t,
    injuryModifier: c,
    isInitiativeRoll: g
  }).render(!0);
}
function ne(j, e) {
  var p, L, P, N, M, _, k, V;
  if (!j || !e) return;
  const s = j, i = (((p = s.system) == null ? void 0 : p.weapons) ?? {})[e] ?? {}, c = ((L = s.system) == null ? void 0 : L.skills) ?? {}, g = ((N = (P = s.items) == null ? void 0 : P.filter) == null ? void 0 : N.call(P, (w) => w.type === "Fegyver")) ?? [], m = (i.itemId ?? "").trim(), a = m ? g.find((w) => w.id === m) ?? null : null, u = ((a == null ? void 0 : a.name) ?? i.name ?? "").trim() || "Fegyver", y = Number(i.bonus || ((M = a == null ? void 0 : a.system) == null ? void 0 : M.bonus) || 0) || 0, d = ((_ = a == null ? void 0 : a.system) == null ? void 0 : _.type) || "kinetic", l = (((k = a == null ? void 0 : a.system) == null ? void 0 : k.skillKey) ?? "").trim(), f = l && c[l] !== void 0 ? l : d === "explosive" ? "grenadeUse" : "firearms", S = Number(c[f] || 0) || 0, v = y + S;
  let h = 0;
  if (j.type === "Karakter") {
    const w = T._getSkillHealthStatusStatic(j, f);
    w === 1 ? h = -6 : w === 2 && (h = -3);
  }
  const b = (((V = a == null ? void 0 : a.system) == null ? void 0 : V.damage) ?? "").trim(), r = (i.damage ?? "").trim(), n = b || r || "";
  new W({
    actor: j,
    skillKey: f,
    label: u,
    baseModifier: v,
    injuryModifier: 0,
    injuryPenalty: h,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? m,
    weaponDamageFormula: n
  }).render(!0);
}
export {
  W as VoidRollSheet,
  ae as openRollSheetForSkill,
  ne as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-B6VMvAxs.mjs.map
