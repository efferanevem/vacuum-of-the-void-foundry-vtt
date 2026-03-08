import { V as E, c as Y } from "./vacuum-of-the-void-CNHhMeJd.mjs";
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
      injuryPenalty: f,
      isWeaponAttack: s,
      isInitiativeRoll: i,
      weaponSlotKey: l,
      weaponItemId: h,
      weaponDamageFormula: c
    } = e;
    super(e), this._actor = n, this._skillKey = t ?? "", this._label = r ?? t ?? "", this._baseModifier = Number(m) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(f) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!i, this._weaponSlotKey = l || "", this._weaponItemId = h || "", this._weaponDamageFormula = typeof c == "string" ? c.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const t = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var v, S, y, d, _;
    const e = this, n = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((S = (v = this.element) == null ? void 0 : v.querySelector) == null ? void 0 : S.call(v, "form.votv.roll-sheet")) ?? ((d = (y = this.element) == null ? void 0 : y.matches) != null && d.call(y, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), m = t.querySelectorAll(".roll-sheet-advantage-d6"), g = (o) => {
      const a = Math.min(3, Math.max(-3, parseInt(o, 10) || 0));
      r && (r.value = String(a)), m.forEach((u) => {
        const p = parseInt(u.dataset.advantageValue ?? "0", 10);
        u.classList.toggle("selected", p === a);
      });
    };
    m.forEach((o) => {
      o.addEventListener("click", (a) => {
        a.preventDefault(), g(o.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), g((r == null ? void 0 : r.value) ?? "0");
    const f = t.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((_ = f == null ? void 0 : f.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), i = t.querySelector("input[name='moraleDice']"), l = t.querySelectorAll(".roll-sheet-morale-d8"), h = (o) => {
      let a = Math.min(3, Math.max(0, parseInt(o, 10) || 0));
      a = Math.min(a, s), i && (i.value = String(a)), l.forEach((u, p) => {
        u.classList.toggle("selected", p < a), u.style.pointerEvents = p < s ? "" : "none", u.style.opacity = p < s ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((o) => {
      o.addEventListener("click", (a) => {
        if (a.preventDefault(), o.classList.contains("roll-sheet-morale-d8") && parseInt(o.dataset.moraleValue ?? "0", 10) > s) return;
        const u = o.dataset.moraleValue ?? "0";
        h(u), e._updateFormulaPreview(t);
      });
    }), h((i == null ? void 0 : i.value) ?? "0");
    const c = t.querySelector("input[name='constantBonus']");
    c && c.addEventListener("input", () => e._updateFormulaPreview(t)), c && c.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (o) => {
      var a, u, p, j;
      if ((u = (a = o.target) == null ? void 0 : a.closest) != null && u.call(a, ".roll-sheet-close")) {
        o.preventDefault(), e.close();
        return;
      }
      (j = (p = o.target) == null ? void 0 : p.closest) != null && j.call(p, ".roll-sheet-do-roll") && (o.preventDefault(), o.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var c, v, S, y, d, _;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const t = parseInt(((c = e.querySelector("input[name='advantage']")) == null ? void 0 : c.value) ?? "0", 10) || 0, r = parseInt(((v = e.querySelector("input[name='moraleDice']")) == null ? void 0 : v.value) ?? "0", 10) || 0, m = parseInt(((S = e.querySelector("input[name='constantBonus']")) == null ? void 0 : S.value) ?? "0", 10) || 0, g = parseInt(((y = e.dataset) == null ? void 0 : y.baseMod) ?? "0", 10) || 0, f = parseInt(((d = e.dataset) == null ? void 0 : d.injuryMod) ?? "0", 10) || 0, s = parseInt(((_ = e.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, i = g + f + s + m, l = [];
    l.push(document.createElement("span")), l[0].textContent = "Összesítve: 3 ";
    const h = document.createElement("img");
    if (h.src = "systems/vacuum-of-the-void/assets/d6.svg", h.alt = "d6", h.className = "roll-sheet-preview-die", l[0].appendChild(h), t !== 0) {
      const o = document.createElement("span");
      o.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const a = document.createElement("img");
      a.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", a.alt = t > 0 ? "előny d6" : "hátrány d6", a.className = "roll-sheet-preview-die", o.appendChild(a), l.push(o);
    }
    if (r > 0) {
      const o = document.createElement("span");
      o.textContent = ` + ${r} `;
      const a = document.createElement("img");
      a.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", a.alt = "d8", a.className = "roll-sheet-preview-die", o.appendChild(a), l.push(o);
    }
    if (i !== 0) {
      const o = document.createElement("span");
      o.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, l.push(o);
    }
    n.innerHTML = "", n.append(...l);
  }
  getData(e = {}) {
    var c, v, S, y, d, _;
    const n = this.actor, t = Math.max(0, Number(((v = (c = n == null ? void 0 : n.system) == null ? void 0 : c.resources) == null ? void 0 : v.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", m = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", f = ["3d6", r, m, g].filter(Boolean).join(" ") || "3d6";
    let s = "", i = 0;
    const l = [], h = [];
    if (this._isWeaponAttack && ((y = (S = game.user) == null ? void 0 : S.targets) != null && y.size)) {
      const a = Array.from(game.user.targets)[0], u = (a == null ? void 0 : a.actor) ?? null;
      s = (u == null ? void 0 : u.name) || (a == null ? void 0 : a.name) || "", (_ = (d = u == null ? void 0 : u.statuses) == null ? void 0 : d.has) != null && _.call(d, "stunned") && (i = 1, l.push(game.i18n.localize("VOTV.RollSheet.AdvantageStunnedTarget")));
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: f,
      moraleCurrent: t,
      advantageValue: i,
      advantageSourcesText: l.length ? l.join(", ") : "",
      disadvantageSourcesText: h.length ? h.join(", ") : "",
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
    var t, r, m, g, f, s, i;
    const n = this.actor;
    if (n)
      try {
        const l = e.querySelector("[name='moraleDice']"), h = e.querySelector("[name='advantage']"), c = e.querySelector("[name='constantBonus']"), v = Math.min(3, Math.max(0, parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0)), S = Math.max(0, Number(((r = (t = n.system) == null ? void 0 : t.resources) == null ? void 0 : r.morale) ?? 0) || 0), y = Math.min(v, S), d = Math.min(3, Math.max(-3, parseInt((h == null ? void 0 : h.value) ?? "0", 10) || 0)), _ = parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0, o = this._baseModifier, a = this._injuryModifier, u = this._injuryPenalty || 0, p = o + a + u + _, j = [
          "3d6",
          d > 0 ? `+${d}d6` : d < 0 ? `-${Math.abs(d)}d6` : "",
          y > 0 ? `+${y}d8` : "",
          p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""
        ].filter(Boolean).join(" "), I = new Roll(j);
        await I.evaluate({ async: !0 });
        const { resultType: F, label: x } = Y(I), B = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let D = this._label;
        const P = { resultType: F, critLabel: x };
        if (this._isWeaponAttack && ((g = (m = game.user) == null ? void 0 : m.targets) != null && g.size)) {
          const N = Array.from(game.user.targets)[0], b = (N == null ? void 0 : N.actor) ?? null;
          if (b) {
            const C = ((f = b.system) == null ? void 0 : f.combat) ?? {}, z = Number(C.defense ?? 0) || 0, W = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
            let A = 0;
            if (b.type === "Karakter") {
              const k = (((s = b.items) == null ? void 0 : s.contents) ?? []).filter(
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
            const T = z + W + H + A, $ = (Number(I.total ?? 0) || 0) >= T, U = b.name ?? N.name ?? "Célpont";
            let L = null, R = null;
            if ($ && b.type === "Karakter")
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
              targetActorId: b.id ?? null,
              targetName: U,
              defense: T,
              isHit: $,
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
          const M = Math.max(0, S - y);
          await n.update({ "system.resources.morale": M });
        }
        if (this._isInitiativeRoll)
          try {
            const M = Number(I.total) ?? 0;
            await n.update({ "system.combat.initiativeResult": M });
            const N = n.apps ?? [];
            for (const b of N)
              typeof (b == null ? void 0 : b.render) == "function" && b.render(!0);
          } catch (M) {
            console.warn("VOTV initiative result update:", M);
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
  var p, j, I, F, x, B, D, P;
  if (!w || !e) return;
  const n = w, r = (((p = n.system) == null ? void 0 : p.weapons) ?? {})[e] ?? {}, m = ((j = n.system) == null ? void 0 : j.skills) ?? {}, g = ((F = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : F.call(I, (M) => M.type === "Fegyver")) ?? [], f = (r.itemId ?? "").trim(), s = f ? g.find((M) => M.id === f) ?? null : null, i = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", l = Number(r.bonus || ((x = s == null ? void 0 : s.system) == null ? void 0 : x.bonus) || 0) || 0, h = ((B = s == null ? void 0 : s.system) == null ? void 0 : B.type) || "kinetic", c = (((D = s == null ? void 0 : s.system) == null ? void 0 : D.skillKey) ?? "").trim(), v = c && m[c] !== void 0 ? c : h === "explosive" ? "grenadeUse" : "firearms", S = Number(m[v] || 0) || 0, y = l + S;
  let d = 0;
  if (w.type === "Karakter") {
    const M = E._getSkillHealthStatusStatic(w, v);
    M === 1 ? d = -6 : M === 2 && (d = -3);
  }
  const _ = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.damage) ?? "").trim(), o = (r.damage ?? "").trim(), a = _ || o || "";
  new O({
    actor: w,
    skillKey: v,
    label: i,
    baseModifier: y,
    injuryModifier: 0,
    injuryPenalty: d,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (s == null ? void 0 : s.id) ?? f,
    weaponDamageFormula: a
  }).render(!0);
}
export {
  O as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BL1ZLAzX.mjs.map
