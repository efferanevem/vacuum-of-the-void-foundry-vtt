import { V as E, c as Y } from "./vacuum-of-the-void-0pNCjGfq.mjs";
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
      actor: n,
      skillKey: a,
      label: r,
      baseModifier: u,
      injuryModifier: v,
      injuryPenalty: h,
      isWeaponAttack: s,
      isInitiativeRoll: i,
      weaponSlotKey: c,
      weaponItemId: d,
      weaponDamageFormula: l
    } = e;
    super(e), this._actor = n, this._skillKey = a ?? "", this._label = r ?? a ?? "", this._baseModifier = Number(u) || 0, this._injuryModifier = Number(v) || 0, this._injuryPenalty = Number(h) || 0, this._isWeaponAttack = !!s, this._isInitiativeRoll = !!i, this._weaponSlotKey = c || "", this._weaponItemId = d || "", this._weaponDamageFormula = typeof l == "string" ? l.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, n = {}) {
    const a = await super.render(e, n);
    return setTimeout(() => this._bindRollSheetListeners(), 50), a;
  }
  _bindRollSheetListeners() {
    var f, g, p, M, y;
    const e = this, n = this.id ?? "votv-roll-sheet", a = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(n)}"]`) ?? ((g = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : g.call(f, "form.votv.roll-sheet")) ?? ((M = (p = this.element) == null ? void 0 : p.matches) != null && M.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!a || a._votvRollBound) return;
    const r = a.querySelector("input[name='advantage']"), u = a.querySelectorAll(".roll-sheet-advantage-d6"), v = (t) => {
      const o = Math.min(3, Math.max(-3, parseInt(t, 10) || 0));
      r && (r.value = String(o)), u.forEach((_) => {
        const m = parseInt(_.dataset.advantageValue ?? "0", 10);
        _.classList.toggle("selected", m === o);
      });
    };
    u.forEach((t) => {
      t.addEventListener("click", (o) => {
        o.preventDefault(), v(t.dataset.advantageValue ?? "0"), e._updateFormulaPreview(a);
      });
    }), v((r == null ? void 0 : r.value) ?? "0");
    const h = a.querySelector(".roll-sheet-morale-wrap"), s = Math.min(3, Math.max(0, parseInt(((y = h == null ? void 0 : h.dataset) == null ? void 0 : y.moraleMax) ?? "3", 10) || 0)), i = a.querySelector("input[name='moraleDice']"), c = a.querySelectorAll(".roll-sheet-morale-d8"), d = (t) => {
      let o = Math.min(3, Math.max(0, parseInt(t, 10) || 0));
      o = Math.min(o, s), i && (i.value = String(o)), c.forEach((_, m) => {
        _.classList.toggle("selected", m < o), _.style.pointerEvents = m < s ? "" : "none", _.style.opacity = m < s ? "" : "0.35";
      });
    };
    a.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((t) => {
      t.addEventListener("click", (o) => {
        if (o.preventDefault(), t.classList.contains("roll-sheet-morale-d8") && parseInt(t.dataset.moraleValue ?? "0", 10) > s) return;
        const _ = t.dataset.moraleValue ?? "0";
        d(_), e._updateFormulaPreview(a);
      });
    }), d((i == null ? void 0 : i.value) ?? "0");
    const l = a.querySelector("input[name='constantBonus']");
    l && l.addEventListener("input", () => e._updateFormulaPreview(a)), l && l.addEventListener("change", () => e._updateFormulaPreview(a)), e._updateFormulaPreview(a), a._votvRollBound = !0, a.addEventListener("click", (t) => {
      var o, _, m, j;
      if ((_ = (o = t.target) == null ? void 0 : o.closest) != null && _.call(o, ".roll-sheet-close")) {
        t.preventDefault(), e.close();
        return;
      }
      (j = (m = t.target) == null ? void 0 : m.closest) != null && j.call(m, ".roll-sheet-do-roll") && (t.preventDefault(), t.stopPropagation(), e._doRoll(a));
    });
  }
  _updateFormulaPreview(e) {
    var l, f, g, p, M, y;
    const n = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!n) return;
    const a = parseInt(((l = e.querySelector("input[name='advantage']")) == null ? void 0 : l.value) ?? "0", 10) || 0, r = parseInt(((f = e.querySelector("input[name='moraleDice']")) == null ? void 0 : f.value) ?? "0", 10) || 0, u = parseInt(((g = e.querySelector("input[name='constantBonus']")) == null ? void 0 : g.value) ?? "0", 10) || 0, v = parseInt(((p = e.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, h = parseInt(((M = e.dataset) == null ? void 0 : M.injuryMod) ?? "0", 10) || 0, s = parseInt(((y = e.dataset) == null ? void 0 : y.injuryPenalty) ?? "0", 10) || 0, i = v + h + s + u, c = [];
    c.push(document.createElement("span")), c[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", c[0].appendChild(d), a !== 0) {
      const t = document.createElement("span");
      t.textContent = a > 0 ? ` + ${a} ` : ` − ${Math.abs(a)} `;
      const o = document.createElement("img");
      o.src = a > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = a > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", t.appendChild(o), c.push(t);
    }
    if (r > 0) {
      const t = document.createElement("span");
      t.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", t.appendChild(o), c.push(t);
    }
    if (i !== 0) {
      const t = document.createElement("span");
      t.textContent = i > 0 ? ` + ${i}` : ` − ${Math.abs(i)}`, c.push(t);
    }
    n.innerHTML = "", n.append(...c);
  }
  getData(e = {}) {
    var c, d, l, f, g, p;
    const n = this.actor, a = Math.max(0, Number(((d = (c = n == null ? void 0 : n.system) == null ? void 0 : c.resources) == null ? void 0 : d.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", v = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", h = ["3d6", r, u, v].filter(Boolean).join(" ") || "3d6";
    let s = "", i = 0;
    if (this._isWeaponAttack && ((f = (l = game.user) == null ? void 0 : l.targets) != null && f.size)) {
      const y = Array.from(game.user.targets)[0], t = (y == null ? void 0 : y.actor) ?? null;
      s = (t == null ? void 0 : t.name) || (y == null ? void 0 : y.name) || "", (p = (g = t == null ? void 0 : t.statuses) == null ? void 0 : g.has) != null && p.call(g, "stunned") && (i = 1);
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: h,
      moraleCurrent: a,
      advantageValue: i,
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
    var a, r, u, v, h, s, i;
    const n = this.actor;
    if (n)
      try {
        const c = e.querySelector("[name='moraleDice']"), d = e.querySelector("[name='advantage']"), l = e.querySelector("[name='constantBonus']"), f = Math.min(3, Math.max(0, parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0)), g = Math.max(0, Number(((r = (a = n.system) == null ? void 0 : a.resources) == null ? void 0 : r.morale) ?? 0) || 0), p = Math.min(f, g), M = Math.min(3, Math.max(-3, parseInt((d == null ? void 0 : d.value) ?? "0", 10) || 0)), y = parseInt((l == null ? void 0 : l.value) ?? "0", 10) || 0, t = this._baseModifier, o = this._injuryModifier, _ = this._injuryPenalty || 0, m = t + o + _ + y, j = [
          "3d6",
          M > 0 ? `+${M}d6` : M < 0 ? `-${Math.abs(M)}d6` : "",
          p > 0 ? `+${p}d8` : "",
          m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""
        ].filter(Boolean).join(" "), I = new Roll(j);
        await I.evaluate({ async: !0 });
        const { resultType: R, label: x } = Y(I), B = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
        let D = this._label;
        const P = { resultType: R, critLabel: x };
        if (this._isWeaponAttack && ((v = (u = game.user) == null ? void 0 : u.targets) != null && v.size)) {
          const N = Array.from(game.user.targets)[0], S = (N == null ? void 0 : N.actor) ?? null;
          if (S) {
            const C = ((h = S.system) == null ? void 0 : h.combat) ?? {}, z = Number(C.defense ?? 0) || 0, W = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
            let A = 0;
            if (S.type === "Karakter") {
              const k = (((s = S.items) == null ? void 0 : s.contents) ?? []).filter(
                (q) => {
                  var V;
                  return q.type === "Pancel" && ((V = q.system) == null ? void 0 : V.equipped) === !0;
                }
              );
              for (const q of k) {
                const V = String(((i = q.system) == null ? void 0 : i.protectionBonus) ?? "").trim().replace(",", "."), O = Number(V);
                Number.isFinite(O) && (A += O);
              }
            }
            const $ = z + W + H + A, K = (Number(I.total ?? 0) || 0) >= $, U = S.name ?? N.name ?? "Célpont";
            let L = null, F = null;
            if (K && S.type === "Karakter")
              try {
                const k = new Roll("1d8");
                await k.evaluate({ async: !0 }), L = Number(k.total ?? 0) || 1, L === 1 ? F = "Fej" : L >= 2 && L <= 4 ? F = "Törzs" : L === 5 || L === 6 ? F = "Karok" : F = "Lábak";
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
              isHit: K,
              hitLocationRoll: L ?? null,
              hitLocationName: F ?? null
            };
          }
        }
        if (await I.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: n, alias: (n == null ? void 0 : n.name) ?? void 0 }),
          flavor: D,
          flags: { "vacuum-of-the-void": P },
          rollMode: B
        }), p > 0) {
          const b = Math.max(0, g - p);
          await n.update({ "system.resources.morale": b });
        }
        if (this._isInitiativeRoll)
          try {
            const b = Number(I.total) ?? 0;
            await n.update({ "system.combat.initiativeResult": b });
            const N = n.apps ?? [];
            for (const S of N)
              typeof (S == null ? void 0 : S.render) == "function" && S.render(!0);
          } catch (b) {
            console.warn("VOTV initiative result update:", b);
          }
      } finally {
        this.close();
      }
  }
}
function Q(w, e, n) {
  var s, i;
  if (!w) return;
  const a = Number(((i = (s = w.system) == null ? void 0 : s.skills) == null ? void 0 : i[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(w, e) : void 0;
  let u = 0;
  r === 1 ? u = -6 : r === 2 && (u = -3);
  const v = (n || "").trim() === "Kezdeményezés";
  new T({
    actor: w,
    skillKey: e,
    label: n || e,
    baseModifier: a,
    injuryModifier: u,
    isInitiativeRoll: v
  }).render(!0);
}
function X(w, e) {
  var m, j, I, R, x, B, D, P;
  if (!w || !e) return;
  const n = w, r = (((m = n.system) == null ? void 0 : m.weapons) ?? {})[e] ?? {}, u = ((j = n.system) == null ? void 0 : j.skills) ?? {}, v = ((R = (I = n.items) == null ? void 0 : I.filter) == null ? void 0 : R.call(I, (b) => b.type === "Fegyver")) ?? [], h = (r.itemId ?? "").trim(), s = h ? v.find((b) => b.id === h) ?? null : null, i = ((s == null ? void 0 : s.name) ?? r.name ?? "").trim() || "Fegyver", c = Number(r.bonus || ((x = s == null ? void 0 : s.system) == null ? void 0 : x.bonus) || 0) || 0, d = ((B = s == null ? void 0 : s.system) == null ? void 0 : B.type) || "kinetic", l = (((D = s == null ? void 0 : s.system) == null ? void 0 : D.skillKey) ?? "").trim(), f = l && u[l] !== void 0 ? l : d === "explosive" ? "grenadeUse" : "firearms", g = Number(u[f] || 0) || 0, p = c + g;
  let M = 0;
  if (w.type === "Karakter") {
    const b = E._getSkillHealthStatusStatic(w, f);
    b === 1 ? M = -6 : b === 2 && (M = -3);
  }
  const y = (((P = s == null ? void 0 : s.system) == null ? void 0 : P.damage) ?? "").trim(), t = (r.damage ?? "").trim(), o = y || t || "";
  new T({
    actor: w,
    skillKey: f,
    label: i,
    baseModifier: p,
    injuryModifier: 0,
    injuryPenalty: M,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (s == null ? void 0 : s.id) ?? h,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-BjxFquMO.mjs.map
