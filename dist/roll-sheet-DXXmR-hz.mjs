import { V as C, c as Y } from "./vacuum-of-the-void-o88HkUsM.mjs";
class T extends Application {
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
      label: r,
      baseModifier: u,
      injuryModifier: f,
      injuryPenalty: p,
      isWeaponAttack: a,
      isInitiativeRoll: i,
      weaponSlotKey: c,
      weaponItemId: d,
      weaponDamageFormula: l
    } = e;
    super(e), this._actor = s, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(u) || 0, this._injuryModifier = Number(f) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!a, this._isInitiativeRoll = !!i, this._weaponSlotKey = c || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, s = {}) {
    const t = await super.render(e, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var v, y, m, g, I;
    const e = this, s = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((y = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : y.call(v, "form.votv.roll-sheet")) ?? ((g = (m = this.element) == null ? void 0 : m.matches) != null && g.call(m, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), u = t.querySelectorAll(".roll-sheet-advantage-d6"), f = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), u.forEach((M) => {
        const h = parseInt(M.dataset.advantageValue ?? "0", 10);
        M.classList.toggle("selected", h === o);
      });
    };
    u.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), f(n.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), f((r == null ? void 0 : r.value) ?? "0");
    const p = t.querySelector(".roll-sheet-morale-wrap"), a = Math.min(3, Math.max(0, parseInt(((I = p == null ? void 0 : p.dataset) == null ? void 0 : I.moraleMax) ?? "3", 10) || 0)), i = t.querySelector("input[name='moraleDice']"), c = t.querySelectorAll(".roll-sheet-morale-d8"), d = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, a), i && (i.value = String(o)), c.forEach((M, h) => {
        M.classList.toggle("selected", h < o), M.style.pointerEvents = h < a ? "" : "none", M.style.opacity = h < a ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > a) return;
        const M = n.dataset.moraleValue ?? "0";
        d(M), e._updateFormulaPreview(t);
      });
    }), d((i == null ? void 0 : i.value) ?? "0");
    const l = t.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => e._updateFormulaPreview(t)), l && l.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (n) => {
      var o, M, h, j;
      if ((M = (o = n.target) == null ? void 0 : o.closest) != null && M.call(o, ".roll-sheet-close")) {
        n.preventDefault(), e.close();
        return;
      }
      (j = (h = n.target) == null ? void 0 : h.closest) != null && j.call(h, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var l, v, y, m, g, I;
    const s = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const t = parseInt(((l = e.querySelector("input[name='advantage']")) == null ? void 0 : l.value) ?? "0", 10) || 0, r = parseInt(((v = e.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, u = parseInt(((y = e.querySelector("input[name='constantBonus']")) == null ? void 0 : y.value) ?? "0", 10) || 0, f = parseInt(((m = e.dataset) == null ? void 0 : m.baseMod) ?? "0", 10) || 0, p = parseInt(((g = e.dataset) == null ? void 0 : g.injuryMod) ?? "0", 10) || 0, a = parseInt(((I = e.dataset) == null ? void 0 : I.injuryPenalty) ?? "0", 10) || 0, i = f + p + a + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", c[0].appendChild(d), t !== 0) {
      const n = document.createElement("span");
      n.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", n.appendChild(o), c.push(n);
    }
    if (r > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", n.appendChild(o), c.push(n);
    }
    if (i !== 0) {
      const n = document.createElement("span");
      n.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, c.push(n);
    }
    s.innerHTML = "", s.append(...c);
  }
  getData(e = {}) {
    var i, c, d, l;
    const s = this.actor, t = Math.max(0, Number(((c = (i = s == null ? void 0 : s.system) == null ? void 0 : i.resources) == null ? void 0 : c.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", f = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", r, u, f].filter(Boolean).join(" ") || "3d6";
    let a = "";
    if (this._isWeaponAttack && ((l = (d = game.user) == null ? void 0 : d.targets) != null && l.size)) {
      const y = Array.from(game.user.targets)[0], m = (y == null ? void 0 : y.actor) ?? null;
      a = (m == null ? void 0 : m.name) || (y == null ? void 0 : y.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: t,
      advantageValue: 0,
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
    var t, r, u, f, p, a, i;
    const s = this.actor;
    if (s)
      try {
        const c = e.querySelector("[name='moraleDice']"), d = e.querySelector("[name='advantage']"), l = e.querySelector("[name='constantBonus']"), v = Math.min(3, Math.max(0, parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0)), y = Math.max(0, Number(((r = (t = s.system) == null ? void 0 : t.resources) == null ? void 0 : r.morale) ?? 0) || 0), m = Math.min(v, y), g = Math.min(3, Math.max(-3, parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0)), I = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, n = this._baseModifier, o = this._injuryModifier, M = this._injuryPenalty || 0, h = n + o + M + I, j = [
          "3d6",
          g > 0 ? `+${g}d6` : g < 0 ? `-${Math.abs(g)}d6` : "",
          m > 0 ? `+${m}d8` : "",
          h !== 0 ? h > 0 ? `+${h}` : `${h}` : ""
        ].filter(Boolean).join(" "), w = new Roll(j);
        await w.evaluate({ async: !0 });
        const { resultType: F, label: x } = Y(w), B = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let D = this._label;
        const P = { resultType: F, critLabel: x };
        if (this._isWeaponAttack && ((f = (u = game.user) == null ? void 0 : u.targets) != null && f.size)) {
          const N = Array.from(game.user.targets)[0], b = (N == null ? void 0 : N.actor) ?? null;
          if (b) {
            const A = ((p = b.system) == null ? void 0 : p.combat) ?? {}, z = Number(A.defense ?? 0) || 0, W = Number(A.defenseBonus ?? 0) || 0, H = Number(A.givenProtection ?? 0) || 0;
            let E = 0;
            if (b.type === "Karakter") {
              const k = (((a = b.items) == null ? void 0 : a.contents) ?? []).filter(
                (q) => {
                  var V;
                  return q.type === "Pancel" && ((V = q.system) == null ? void 0 : V.equipped) === !0;
                }
              );
              for (const q of k) {
                const V = String(((i = q.system) == null ? void 0 : i.protectionBonus) ?? "").trim().replace(",", "."), O = Number(V);
                Number.isFinite(O) && (E += O);
              }
            }
            const $ = z + W + H + E, K = (Number(w.total ?? 0) || 0) >= $, U = b.name ?? N.name ?? "Célpont";
            let L = null, R = null;
            if (K && b.type === "Karakter")
              try {
                const k = new Roll("1d8");
                await k.evaluate({ async: !0 }), L = Number(k.total ?? 0) || 1, L === 1 ? R = "Fej" : L >= 2 && L <= 4 ? R = "Törzs" : L === 5 || L === 6 ? R = "Karok" : R = "Lábak";
              } catch (k) {
                console.warn("VOTV hit location roll failed:", k);
              }
            P.weaponAttack = !0, P.weapon = {
              actorId: s.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: b.id ?? null,
              targetName: U,
              defense: $,
              isHit: K,
              hitLocationRoll: L ?? null,
              hitLocationName: R ?? null
            };
          }
        }
        if (await w.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
          flavor: D,
          flags: { "vacuum-of-the-void": P },
          rollMode: B
        }), m > 0) {
          const _ = Math.max(0, y - m);
          await s.update({ "system.resources.morale": _ });
        }
        if (this._isInitiativeRoll)
          try {
            const _ = Number(w.total) ?? 0;
            await s.update({ "system.combat.initiativeResult": _ });
            const N = s.apps ?? [];
            for (const b of N)
              typeof (b == null ? void 0 : b.render) == "function" && b.render(!0);
          } catch (_) {
            console.warn("VOTV initiative result update:", _);
          }
      } finally {
        this.close();
      }
  }
}
function Q(S, e, s) {
  var a, i;
  if (!S) return;
  const t = Number(((i = (a = S.system) == null ? void 0 : a.skills) == null ? void 0 : i[e]) ?? 0) || 0, r = C.BODY_PART_BY_SKILL[e] ? C._getSkillHealthStatusStatic(S, e) : void 0;
  let u = 0;
  r === 1 ? u = -6 : r === 2 && (u = -3);
  const f = (s || "").trim() === "Kezdeményezés";
  new T({
    actor: S,
    skillKey: e,
    label: s || e,
    baseModifier: t,
    injuryModifier: u,
    isInitiativeRoll: f
  }).render(!0);
}
function X(S, e) {
  var h, j, w, F, x, B, D, P;
  if (!S || !e) return;
  const s = S, r = (((h = s.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, u = ((j = s.system) == null ? void 0 : j.skills) ?? {}, f = ((F = (w = s.items) == null ? void 0 : w.filter) == null ? void 0 : F.call(w, (_) => _.type === "Fegyver")) ?? [], p = (r.itemId ?? "").trim(), a = p ? f.find((_) => _.id === p) ?? null : null, i = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", c = Number(r.bonus || ((x = a == null ? void 0 : a.system) == null ? void 0 : x.bonus) || 0) || 0, d = ((B = a == null ? void 0 : a.system) == null ? void 0 : B.type) || "kinetic", l = (((D = a == null ? void 0 : a.system) == null ? void 0 : D.skillKey) ?? "").trim(), v = l && u[l] !== void 0 ? l : d === "explosive" ? "grenadeUse" : "firearms", y = Number(u[v] || 0) || 0, m = c + y;
  let g = 0;
  if (S.type === "Karakter") {
    const _ = C._getSkillHealthStatusStatic(S, v);
    _ === 1 ? g = -6 : _ === 2 && (g = -3);
  }
  const I = (((P = a == null ? void 0 : a.system) == null ? void 0 : P.damage) ?? "").trim(), n = (r.damage ?? "").trim(), o = I || n || "";
  new T({
    actor: S,
    skillKey: v,
    label: i,
    baseModifier: m,
    injuryModifier: 0,
    injuryPenalty: g,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? p,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-DXXmR-hz.mjs.map
