import { V as E, c as Y } from "./vacuum-of-the-void-ChAnH8YF.mjs";
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
      baseModifier: c,
      injuryModifier: y,
      injuryPenalty: d,
      isWeaponAttack: l,
      weaponSlotKey: a,
      weaponItemId: u,
      weaponDamageFormula: m
    } = e;
    super(e), this._actor = s, this._skillKey = t, this._label = r ?? t, this._baseModifier = Number(c) || 0, this._injuryModifier = Number(y) || 0, this._injuryPenalty = Number(d) || 0, this._isWeaponAttack = !!l, this._weaponSlotKey = a || "", this._weaponItemId = u || "", this._weaponDamageFormula = typeof m == "string" ? m.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, s = {}) {
    const t = await super.render(e, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var f, i, p, v, S;
    const e = this, s = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((i = (f = this.element) == null ? void 0 : f.querySelector) == null ? void 0 : i.call(f, "form.votv.roll-sheet")) ?? ((v = (p = this.element) == null ? void 0 : p.matches) != null && v.call(p, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), c = t.querySelectorAll(".roll-sheet-advantage-d6"), y = (n) => {
      const o = Math.min(3, Math.max(-3, parseInt(n, 10) || 0));
      r && (r.value = String(o)), c.forEach((g) => {
        const h = parseInt(g.dataset.advantageValue ?? "0", 10);
        g.classList.toggle("selected", h === o);
      });
    };
    c.forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), y(n.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), y((r == null ? void 0 : r.value) ?? "0");
    const d = t.querySelector(".roll-sheet-morale-wrap"), l = Math.min(3, Math.max(0, parseInt(((S = d == null ? void 0 : d.dataset) == null ? void 0 : S.moraleMax) ?? "3", 10) || 0)), a = t.querySelector("input[name='moraleDice']"), u = t.querySelectorAll(".roll-sheet-morale-d8"), m = (n) => {
      let o = Math.min(3, Math.max(0, parseInt(n, 10) || 0));
      o = Math.min(o, l), a && (a.value = String(o)), u.forEach((g, h) => {
        g.classList.toggle("selected", h < o), g.style.pointerEvents = h < l ? "" : "none", g.style.opacity = h < l ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((n) => {
      n.addEventListener("click", (o) => {
        if (o.preventDefault(), n.classList.contains("roll-sheet-morale-d8") && parseInt(n.dataset.moraleValue ?? "0", 10) > l) return;
        const g = n.dataset.moraleValue ?? "0";
        m(g), e._updateFormulaPreview(t);
      });
    }), m((a == null ? void 0 : a.value) ?? "0");
    const M = t.querySelector("input[name='constantBonus']");
    M && M.addEventListener("input", () => e._updateFormulaPreview(t)), M && M.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (n) => {
      var o, g, h, w;
      if ((g = (o = n.target) == null ? void 0 : o.closest) != null && g.call(o, ".roll-sheet-close")) {
        n.preventDefault(), e.close();
        return;
      }
      (w = (h = n.target) == null ? void 0 : h.closest) != null && w.call(h, ".roll-sheet-do-roll") && (n.preventDefault(), n.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var M, f, i, p, v, S;
    const s = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const t = parseInt(((M = e.querySelector("input[name='advantage']")) == null ? void 0 : M.value) ?? "0", 10) || 0, r = parseInt(((f = e.querySelector("input[name='moraleDice']")) == null ? void 0 : f.value) ?? "0", 10) || 0, c = parseInt(((i = e.querySelector("input[name='constantBonus']")) == null ? void 0 : i.value) ?? "0", 10) || 0, y = parseInt(((p = e.dataset) == null ? void 0 : p.baseMod) ?? "0", 10) || 0, d = parseInt(((v = e.dataset) == null ? void 0 : v.injuryMod) ?? "0", 10) || 0, l = parseInt(((S = e.dataset) == null ? void 0 : S.injuryPenalty) ?? "0", 10) || 0, a = y + d + l + c, u = [];
    u.push(document.createElement("span")), u[0].textContent = "Összesítve: 3 ";
    const m = document.createElement("img");
    if (m.src = "systems/vacuum-of-the-void/assets/d6.svg", m.alt = "d6", m.className = "roll-sheet-preview-die", u[0].appendChild(m), t !== 0) {
      const n = document.createElement("span");
      n.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", n.appendChild(o), u.push(n);
    }
    if (r > 0) {
      const n = document.createElement("span");
      n.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", n.appendChild(o), u.push(n);
    }
    if (a !== 0) {
      const n = document.createElement("span");
      n.textContent = a > 0 ? ` + ${a}` : ` − ${Math.abs(a)}`, u.push(n);
    }
    s.innerHTML = "", s.append(...u);
  }
  getData(e = {}) {
    var a, u, m, M;
    const s = this.actor, t = Math.max(0, Number(((u = (a = s == null ? void 0 : s.system) == null ? void 0 : a.resources) == null ? void 0 : u.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", c = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", y = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", d = ["3d6", r, c, y].filter(Boolean).join(" ") || "3d6";
    let l = "";
    if (this._isWeaponAttack && ((M = (m = game.user) == null ? void 0 : m.targets) != null && M.size)) {
      const i = Array.from(game.user.targets)[0], p = (i == null ? void 0 : i.actor) ?? null;
      l = (p == null ? void 0 : p.name) || (i == null ? void 0 : i.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: d,
      moraleCurrent: t,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: l
    };
  }
  activateListeners(e) {
    var s;
    (s = super.activateListeners) == null || s.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var w, N, I, F, k, x, B;
    const s = this.actor;
    if (!s) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), c = e.querySelector("[name='constantBonus']"), y = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), d = Math.max(0, Number(((N = (w = s.system) == null ? void 0 : w.resources) == null ? void 0 : N.morale) ?? 0) || 0), l = Math.min(y, d), a = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), u = parseInt((c == null ? void 0 : c.value) ?? "0", 10) || 0, m = this._baseModifier, M = this._injuryModifier, f = this._injuryPenalty || 0, i = m + M + f + u, p = [
      "3d6",
      a > 0 ? `+${a}d6` : a < 0 ? `-${Math.abs(a)}d6` : "",
      l > 0 ? `+${l}d8` : "",
      i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""
    ].filter(Boolean).join(" "), v = new Roll(p);
    await v.evaluate({ async: !0 });
    const { resultType: S, label: n } = Y(v), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let g = this._label;
    const h = { resultType: S, critLabel: n };
    if (this._isWeaponAttack && ((F = (I = game.user) == null ? void 0 : I.targets) != null && F.size)) {
      const A = Array.from(game.user.targets)[0], j = (A == null ? void 0 : A.actor) ?? null;
      if (j) {
        const C = ((k = j.system) == null ? void 0 : k.combat) ?? {}, W = Number(C.defense ?? 0) || 0, z = Number(C.defenseBonus ?? 0) || 0, H = Number(C.givenProtection ?? 0) || 0;
        let V = 0;
        if (j.type === "Karakter") {
          const P = (((x = j.items) == null ? void 0 : x.contents) ?? []).filter(
            (q) => {
              var R;
              return q.type === "Pancel" && ((R = q.system) == null ? void 0 : R.equipped) === !0;
            }
          );
          for (const q of P) {
            const R = String(((B = q.system) == null ? void 0 : B.protectionBonus) ?? "").trim().replace(",", "."), O = Number(R);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = W + z + H + V, K = (Number(v.total ?? 0) || 0) >= $, U = j.name ?? A.name ?? "Célpont";
        let L = null, D = null;
        if (K && j.type === "Karakter")
          try {
            const P = new Roll("1d8");
            await P.evaluate({ async: !0 }), L = Number(P.total ?? 0) || 1, L === 1 ? D = "Fej" : L >= 2 && L <= 4 ? D = "Törzs" : L === 5 || L === 6 ? D = "Karok" : D = "Lábak";
          } catch (P) {
            console.warn("VOTV hit location roll failed:", P);
          }
        h.weaponAttack = !0, h.weapon = {
          actorId: s.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: j.id ?? null,
          targetName: U,
          defense: $,
          isHit: K,
          hitLocationRoll: L ?? null,
          hitLocationName: D ?? null
        };
      }
    }
    if (await v.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: g,
      flags: { "vacuum-of-the-void": h },
      rollMode: o
    }), l > 0) {
      const _ = Math.max(0, d - l);
      await s.update({ "system.resources.morale": _ });
    }
    this.close();
  }
}
function Q(b, e, s) {
  var d, l;
  if (!b) return;
  const t = Number(((l = (d = b.system) == null ? void 0 : d.skills) == null ? void 0 : l[e]) ?? 0) || 0, r = E.BODY_PART_BY_SKILL[e] ? E._getSkillHealthStatusStatic(b, e) : void 0;
  let c = 0;
  r === 1 ? c = -6 : r === 2 && (c = -3), new T({
    actor: b,
    skillKey: e,
    label: s || e,
    baseModifier: t,
    injuryModifier: c
  }).render(!0);
}
function X(b, e) {
  var h, w, N, I, F, k, x, B;
  if (!b || !e) return;
  const s = b, r = (((h = s.system) == null ? void 0 : h.weapons) ?? {})[e] ?? {}, c = ((w = s.system) == null ? void 0 : w.skills) ?? {}, y = ((N = s.items) == null ? void 0 : N.contents) ?? s.items, d = Array.isArray(y) ? y.filter((_) => _.type === "Fegyver") : ((F = (I = s.items) == null ? void 0 : I.filter) == null ? void 0 : F.call(I, (_) => _.type === "Fegyver")) ?? [], l = (r.itemId ?? "").trim(), a = l ? d.find((_) => _.id === l) ?? null : null, u = ((a == null ? void 0 : a.name) ?? r.name ?? "").trim() || "Fegyver", m = Number(r.bonus || ((k = a == null ? void 0 : a.system) == null ? void 0 : k.bonus) || 0) || 0, f = (((x = a == null ? void 0 : a.system) == null ? void 0 : x.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", i = Number(c[f] || 0) || 0, p = m + i;
  let v = 0;
  if (b.type === "Karakter") {
    const _ = E._getSkillHealthStatusStatic(b, f);
    _ === 1 ? v = -6 : _ === 2 && (v = -3);
  }
  const S = (((B = a == null ? void 0 : a.system) == null ? void 0 : B.damage) ?? "").trim(), n = (r.damage ?? "").trim(), o = S || n || "";
  new T({
    actor: b,
    skillKey: f,
    label: u,
    baseModifier: p,
    injuryModifier: 0,
    injuryPenalty: v,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (a == null ? void 0 : a.id) ?? l,
    weaponDamageFormula: o
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-C0UXHO-Y.mjs.map
