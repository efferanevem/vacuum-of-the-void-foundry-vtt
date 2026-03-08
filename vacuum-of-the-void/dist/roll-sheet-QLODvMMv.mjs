import { V as E, c as Y } from "./vacuum-of-the-void-rNU9xQA5.mjs";
class O extends Application {
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
      actor: n,
      skillKey: t,
      label: r,
      baseModifier: m,
      injuryModifier: g,
      injuryPenalty: p,
      isWeaponAttack: s,
      isInitiativeRoll: i,
      weaponSlotKey: u,
      weaponItemId: f,
      weaponDamageFormula: l
    } = e;
    super(e), this._actor = n, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(p) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!i, this._weaponSlotKey = u || "", this._weaponItemId = f || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var v, M, y, d, b;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((M = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : M.call(v, "form.votv.roll-sheet")) ?? ((d = (y = this.element) == null ? void 0 : y.matches) != null && d.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), m = t.querySelectorAll(".roll-sheet-advantage-d6"), g = (o) => {
      const a = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      r && (r.value = String(a)), m.forEach((c) => {
        const h = parseInt(c.dataset.advantageValue ?? "0", 10);
        c.classList.toggle("selected", h === a);
      });
    };
    m.forEach((o) => {
      o.addEventListener("click", (a) => {
        a.preventDefault(), g(o.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), g((r == null ? void 0 : r.value) ?? "0");
    const p = t.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((b = p == null ? void 0 : p.dataset) == null ? void 0 : b.moraleMax) ?? "3", 10) || 0)), i = t.querySelector("input[name='moraleDice']"), u = t.querySelectorAll(".roll-sheet-morale-d8"), f = (o) => {
      let a = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      a = Math.min(a, s), i && (i.value = String(a)), u.forEach((c, h) => {
        c.classList.toggle("selected", h < a), c.style.pointerEvents = h < s ? "" : "none", c.style.opacity = h < s ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (a) => {
        if (a.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const c = o.dataset.moraleValue ?? "0";
        f(c), e._updateFormulaPreview(t);
      });
    }), f((i == null ? void 0 : i.value) ?? "0");
    const l = t.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => e._updateFormulaPreview(t)), l && l.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (o) => {
      var a, c, h, j;
      if ((c = (a = o.target) == null ? void 0 : a.closest) != null && c.call(a, ".roll-sheet-close")) {
        o.preventDefault(), e.close();
        return;
      }
      (j = (h = o.target) == null ? void 0 : h.closest) != null && j.call(h, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var l, v, M, y, d, b;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((l = e.querySelector("input[name='advantage']")) == null ? void 0 : l.value) ?? "0", 10) || 0, r = parseInt(((v = e.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, m = parseInt(((M = e.querySelector("input[name='constantBonus']")) == null ? void 0 : M.value) ?? "0", 10) || 0, g = parseInt(((y = e.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, p = parseInt(((d = e.dataset) == null ? void 0 : d.injuryMod) ?? "0", 10) || 0, s = parseInt(((b = e.dataset) == null ? void 0 : b.injuryPenalty) ?? "0", 10) || 0, i = g + p + s + m, u = [];
    u.push(document.createElement("span")), u[0].textContent = "Összesítve: 3 ";
    const f = document.createElement("img");
    if (f.src = "systems/vacuum-of-the-void/assets/d6.svg", f.alt = "d6", f.className = "roll-sheet-preview-die", u[0].appendChild(f), t !== 0) {
      const o = document.createElement("span");
      o.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const a = document.createElement("img");
      a.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", a.alt = t > 0 ? "előny d6" : "hátrány d6", a.className = "roll-sheet-preview-die", o.appendChild(a), u.push(o);
    }
    if (r > 0) {
      const o = document.createElement("span");
      o.textContent = ` + ${r} `;
      const a = document.createElement("img");
      a.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", a.alt = "d8", a.className = "roll-sheet-preview-die", o.appendChild(a), u.push(o);
    }
    if (i !== 0) {
      const o = document.createElement("span");
      o.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, u.push(o);
    }
    n.innerHTML = "", n.append(...u);
  }
  getData(e = {}) {
    var l, v, M, y, d, b;
    const n = this.actor, t = Math.max(0, Number(((v = (l = n == null ? void 0 : n.system) == null ? void 0 : l.resources) == null ? void 0 : v.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", p = ["3d6", r, m, g].filter(Boolean).join(" ") || "3d6";
    let s = "", i = 0;
    const u = [], f = [];
    if (this._isWeaponAttack && ((y = (M = game.user) == null ? void 0 : M.targets) != null && y.size)) {
      const a = Array.from(game.user.targets)[0], c = (a == null ? void 0 : a.actor) ?? null;
      s = (c == null ? void 0 : c.name) || (a == null ? void 0 : a.name) || "", (b = (d = c == null ? void 0 : c.statuses) == null ? void 0 : d.has) != null && b.call(d, "stunned") && (i = 1, u.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: p,
      moraleCurrent: t,
      advantageValue: i,
      advantageSources: u,
      disadvantageSources: f,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: s
    };
  }
  activateListeners(e) {
    var n;
    (n = super.activateListeners) == null || n.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var t, r, m, g, p, s, i;
    const n = this.actor;
    if (n)
      try {
        const u = e.querySelector("[name='moraleDice']"), f = e.querySelector("[name='advantage']"), l = e.querySelector("[name='constantBonus']"), v = Math.min(3, Math.max(0, parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0)), M = Math.max(0, Number(((r = (t = n.system) == null ? void 0 : t.resources) == null ? void 0 : r.morale) ?? 0) || 0), y = Math.min(v, M), d = Math.min(3, Math.max(-3, parseInt((f == null ? void 0 : f.value) ?? "0", 10) || 0)), b = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, o = this._baseModifier, a = this._injuryModifier, c = this._injuryPenalty || 0, h = o + a + c + b, j = [
          "3d6",
          d > 0 ? `+${d}d6` : d < 0 ? `-${Math.abs(d)}d6` : "",
          y > 0 ? `+${y}d8` : "",
          h !== 0 ? h > 0 ? `+${h}` : `${h}` : ""
        ].filter(Boolean).join(" "), I = new Roll(j);
        await I.evaluate({ async: !0 });
        const { resultType: F, label: x } = Y(I), B = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let D = this._label;
        const P = { resultType: F, critLabel: x };
        if (this._isWeaponAttack && ((g = (m = game.user) == null ? void 0 : m.targets) != null && g.size)) {
          const N = Array.from(game.user.targets)[0], S = (N == null ? void 0 : N.actor) ?? null;
          if (S) {
            const C = ((p = S.system) == null ? void 0 : p.combat) ?? {}, z = Number(C.defense ?? 0) || 0, W = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
            let A = 0;
            if (S.type === "Karakter") {
              const k = (((s = S.items) == null ? void 0 : s.contents) ?? []).filter(
                (V) => {
                  var q;
                  return V.type === "Pancel" && ((q = V.system) == null ? void 0 : q.equipped) === !0;
                }
              );
              for (const V of k) {
                const q = String(((i = V.system) == null ? void 0 : i.protectionBonus) ?? "").trim().replace(",", "."), K = Number(q);
                Number.isFinite(K) && (A += K);
              }
            }
            const $ = z + W + H + A, T = (Number(I.total ?? 0) || 0) >= $, U = S.name ?? N.name ?? "Célpont";
            let L = null, R = null;
            if (T && S.type === "Karakter")
              try {
                const k = new Roll("1d8");
                await k.evaluate({ async: !0 }), L = Number(k.total ?? 0) || 1, L === 1 ? R = "Fej" : L >= 2 && L <= 4 ? R = "Törzs" : L === 5 || L === 6 ? R = "Karok" : R = "Lábak";
              } catch (k) {
                console.warn("VOTV hit location roll failed:", k);
              }
            P.weaponAttack = !0, P.weapon = {
              actorId: n.id ?? null,
              itemId: this._weaponItemId || null,
              slotKey: this._weaponSlotKey || null,
              damageFormula: this._weaponDamageFormula || null,
              targetActorId: S.id ?? null,
              targetName: U,
              defense: $,
              isHit: T,
              hitLocationRoll: L ?? null,
              hitLocationName: R ?? null
            };
          }
        }
        if (await I.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
          flavor: D,
          flags: { "vacuum-of-the-void": P },
          rollMode: B
        }), y > 0) {
          const _ = Math.max(0, M - y);
          await n.update({ "system.resources.morale": _ });
        }
        if (this._isInitiativeRoll)
          try {
            const _ = Number(I.total) ?? 0;
            await n.update({ "system.combat.initiativeResult": _ });
            const N = n.apps ?? [];
            for (const S of N)
              typeof (S == null ? void 0 : S.render) == "function" && S.render(!0);
          } catch (_) {
            console.warn("VOTV initiative result update:", _);
          }
      } finally {
        this.close();
      }
  }
}
function Q(w, e, n) {
  var s, i;
  if (!w) return;
  const t = Number(((i = (s = w.system) == null ? void 0 : s.skills) == null ? void 0 : i[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(w, e) : void 0;
  let m = 0;
  r === 1 ? m = -6 : r === 2 && (m = -3);
  const g = (n || "").trim() === "Kezdeményezés";
  new O({
    actor: w,
    skillKey: e,
    label: n || e,
    baseModifier: t,
    injuryModifier: m,
    isInitiativeRoll: g
  }).render(!0);
}
function X(w, e) {
  var h, j, I, F, x, B, D, P;
  if (!w || !e) return;
  const n = w, r = (((h = n.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, m = ((j = n.system) == null ? void 0 : j.skills) ?? {}, g = ((F = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : F.call(I, (_) => _.type === "Fegyver")) ?? [], p = (r.itemId ?? "").trim(), s = p ? g.find((_) => _.id === p) ?? null : null, i = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", u = Number(r.bonus || ((x = s == null ? void 0 : s.system) == null ? void 0 : x.bonus) || 0) || 0, f = ((B = s == null ? void 0 : s.system) == null ? void 0 : B.type) || "kinetic", l = (((D = s == null ? void 0 : s.system) == null ? void 0 : D.skillKey) ?? "").trim(), v = l && m[l] !== void 0 ? l : f === "explosive" ? "grenadeUse" : "firearms", M = Number(m[v] || 0) || 0, y = u + M;
  let d = 0;
  if (w.type === "Karakter") {
    const _ = E._getSkillHealthStatusStatic(w, v);
    _ === 1 ? d = -6 : _ === 2 && (d = -3);
  }
  const b = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.damage) ?? "").trim(), o = (r.damage ?? "").trim(), a = b || o || "";
  new O({
    actor: w,
    skillKey: v,
    label: i,
    baseModifier: y,
    injuryModifier: 0,
    injuryPenalty: d,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (s == null ? void 0 : s.id) ?? p,
    weaponDamageFormula: a
  }).render(!0);
}
export {
  O as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-QLODvMMv.mjs.map
