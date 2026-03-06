import { V as C, c as Y } from "./vacuum-of-the-void-B7IZS9tt.mjs";
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
      injuryModifier: g,
      injuryPenalty: n,
      isWeaponAttack: i,
      weaponSlotKey: l,
      weaponItemId: m,
      weaponDamageFormula: d
    } = e;
    super(e), this._actor = s, this._skillKey = t, this._label = r ?? t, this._baseModifier = Number(u) || 0, this._injuryModifier = Number(g) || 0, this._injuryPenalty = Number(n) || 0, this._isWeaponAttack = !!i, this._weaponSlotKey = l || "", this._weaponItemId = m || "", this._weaponDamageFormula = typeof d == "string" ? d.trim() : "";
  }
  get actor() {
    return this._actor;
  }
  async render(e = !1, s = {}) {
    const t = await super.render(e, s);
    return setTimeout(() => this._bindRollSheetListeners(), 50), t;
  }
  _bindRollSheetListeners() {
    var M, c, f, b, _;
    const e = this, s = this.id ?? "votv-roll-sheet", t = document.querySelector(`form.votv.roll-sheet[data-votv-roll-sheet="${CSS.escape(s)}"]`) ?? ((c = (M = this.element) == null ? void 0 : M.querySelector) == null ? void 0 : c.call(M, "form.votv.roll-sheet")) ?? ((b = (f = this.element) == null ? void 0 : f.matches) != null && b.call(f, "form.votv.roll-sheet") ? this.element : null);
    if (!t || t._votvRollBound) return;
    const r = t.querySelector("input[name='advantage']"), u = t.querySelectorAll(".roll-sheet-advantage-d6"), g = (a) => {
      const o = Math.min(3, Math.max(-3, parseInt(a, 10) || 0));
      r && (r.value = String(o)), u.forEach((h) => {
        const p = parseInt(h.dataset.advantageValue ?? "0", 10);
        h.classList.toggle("selected", p === o);
      });
    };
    u.forEach((a) => {
      a.addEventListener("click", (o) => {
        o.preventDefault(), g(a.dataset.advantageValue ?? "0"), e._updateFormulaPreview(t);
      });
    }), g((r == null ? void 0 : r.value) ?? "0");
    const n = t.querySelector(".roll-sheet-morale-wrap"), i = Math.min(3, Math.max(0, parseInt(((_ = n == null ? void 0 : n.dataset) == null ? void 0 : _.moraleMax) ?? "3", 10) || 0)), l = t.querySelector("input[name='moraleDice']"), m = t.querySelectorAll(".roll-sheet-morale-d8"), d = (a) => {
      let o = Math.min(3, Math.max(0, parseInt(a, 10) || 0));
      o = Math.min(o, i), l && (l.value = String(o)), m.forEach((h, p) => {
        h.classList.toggle("selected", p < o), h.style.pointerEvents = p < i ? "" : "none", h.style.opacity = p < i ? "" : "0.35";
      });
    };
    t.querySelectorAll(".roll-sheet-morale-reset, .roll-sheet-morale-d8").forEach((a) => {
      a.addEventListener("click", (o) => {
        if (o.preventDefault(), a.classList.contains("roll-sheet-morale-d8") && parseInt(a.dataset.moraleValue ?? "0", 10) > i) return;
        const h = a.dataset.moraleValue ?? "0";
        d(h), e._updateFormulaPreview(t);
      });
    }), d((l == null ? void 0 : l.value) ?? "0");
    const v = t.querySelector("input[name='constantBonus']");
    v && v.addEventListener("input", () => e._updateFormulaPreview(t)), v && v.addEventListener("change", () => e._updateFormulaPreview(t)), e._updateFormulaPreview(t), t._votvRollBound = !0, t.addEventListener("click", (a) => {
      var o, h, p, S;
      if ((h = (o = a.target) == null ? void 0 : o.closest) != null && h.call(o, ".roll-sheet-close")) {
        a.preventDefault(), e.close();
        return;
      }
      (S = (p = a.target) == null ? void 0 : p.closest) != null && S.call(p, ".roll-sheet-do-roll") && (a.preventDefault(), a.stopPropagation(), e._doRoll(t));
    });
  }
  _updateFormulaPreview(e) {
    var v, M, c, f, b, _;
    const s = e == null ? void 0 : e.querySelector(".roll-sheet-formula-preview");
    if (!s) return;
    const t = parseInt(((v = e.querySelector("input[name='advantage']")) == null ? void 0 : v.value) ?? "0", 10) || 0, r = parseInt(((M = e.querySelector("input[name='moraleDice']")) == null ? void 0 : M.value) ?? "0", 10) || 0, u = parseInt(((c = e.querySelector("input[name='constantBonus']")) == null ? void 0 : c.value) ?? "0", 10) || 0, g = parseInt(((f = e.dataset) == null ? void 0 : f.baseMod) ?? "0", 10) || 0, n = parseInt(((b = e.dataset) == null ? void 0 : b.injuryMod) ?? "0", 10) || 0, i = parseInt(((_ = e.dataset) == null ? void 0 : _.injuryPenalty) ?? "0", 10) || 0, l = g + n + i + u, m = [];
    m.push(document.createElement("span")), m[0].textContent = "Összesítve: 3 ";
    const d = document.createElement("img");
    if (d.src = "systems/vacuum-of-the-void/assets/d6.svg", d.alt = "d6", d.className = "roll-sheet-preview-die", m[0].appendChild(d), t !== 0) {
      const a = document.createElement("span");
      a.textContent = t > 0 ? ` + ${t} ` : ` − ${Math.abs(t)} `;
      const o = document.createElement("img");
      o.src = t > 0 ? "systems/vacuum-of-the-void/assets/advantage_d6.svg" : "systems/vacuum-of-the-void/assets/disadvantage_d6.svg", o.alt = t > 0 ? "előny d6" : "hátrány d6", o.className = "roll-sheet-preview-die", a.appendChild(o), m.push(a);
    }
    if (r > 0) {
      const a = document.createElement("span");
      a.textContent = ` + ${r} `;
      const o = document.createElement("img");
      o.src = "systems/vacuum-of-the-void/assets/moral_d8.svg", o.alt = "d8", o.className = "roll-sheet-preview-die", a.appendChild(o), m.push(a);
    }
    if (l !== 0) {
      const a = document.createElement("span");
      a.textContent = l > 0 ? ` + ${l}` : ` − ${Math.abs(l)}`, m.push(a);
    }
    s.innerHTML = "", s.append(...m);
  }
  getData(e = {}) {
    var l, m, d, v;
    const s = this.actor, t = Math.max(0, Number(((m = (l = s == null ? void 0 : s.system) == null ? void 0 : l.resources) == null ? void 0 : m.morale) ?? 0) || 0), r = this._baseModifier !== 0 ? this._baseModifier > 0 ? `+${this._baseModifier}` : String(this._baseModifier) : "", u = this._injuryModifier !== 0 ? this._injuryModifier > 0 ? `+${this._injuryModifier}` : String(this._injuryModifier) : "", g = this._injuryPenalty !== 0 ? String(this._injuryPenalty) : "", n = ["3d6", r, u, g].filter(Boolean).join(" ") || "3d6";
    let i = "";
    if (this._isWeaponAttack && ((v = (d = game.user) == null ? void 0 : d.targets) != null && v.size)) {
      const c = Array.from(game.user.targets)[0], f = (c == null ? void 0 : c.actor) ?? null;
      i = (f == null ? void 0 : f.name) || (c == null ? void 0 : c.name) || "";
    }
    return {
      appId: this.id ?? "votv-roll-sheet",
      skillLabel: this._label,
      formulaText: n,
      moraleCurrent: t,
      advantageValue: 0,
      baseModifier: this._baseModifier,
      injuryModifier: this._injuryModifier,
      injuryPenalty: this._injuryPenalty,
      targetLabel: i
    };
  }
  activateListeners(e) {
    var s;
    (s = super.activateListeners) == null || s.call(this, e), setTimeout(() => this._bindRollSheetListeners(), 0);
  }
  async _doRoll(e) {
    var S, P, N, F, k, x, j;
    const s = this.actor;
    if (!s) return;
    const t = e.querySelector("[name='moraleDice']"), r = e.querySelector("[name='advantage']"), u = e.querySelector("[name='constantBonus']"), g = Math.min(3, Math.max(0, parseInt((t == null ? void 0 : t.value) ?? "0", 10) || 0)), n = Math.max(0, Number(((P = (S = s.system) == null ? void 0 : S.resources) == null ? void 0 : P.morale) ?? 0) || 0), i = Math.min(g, n), l = Math.min(3, Math.max(-3, parseInt((r == null ? void 0 : r.value) ?? "0", 10) || 0)), m = parseInt((u == null ? void 0 : u.value) ?? "0", 10) || 0, d = this._baseModifier, v = this._injuryModifier, M = this._injuryPenalty || 0, c = d + v + M + m, f = [
      "3d6",
      l > 0 ? `+${l}d6` : l < 0 ? `-${Math.abs(l)}d6` : "",
      i > 0 ? `+${i}d8` : "",
      c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""
    ].filter(Boolean).join(" "), b = new Roll(f);
    await b.evaluate({ async: !0 });
    const { resultType: _, label: a } = Y(b), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    let h = this._label;
    const p = { resultType: _, critLabel: a };
    if (this._isWeaponAttack && ((F = (N = game.user) == null ? void 0 : N.targets) != null && F.size)) {
      const B = Array.from(game.user.targets)[0], w = (B == null ? void 0 : B.actor) ?? null;
      if (w) {
        const A = ((k = w.system) == null ? void 0 : k.combat) ?? {}, z = Number(A.defense ?? 0) || 0, W = Number(A.defenseBonus ?? 0) || 0, H = Number(A.givenProtection ?? 0) || 0;
        let V = 0;
        if (w.type === "Karakter") {
          const L = (((x = w.items) == null ? void 0 : x.contents) ?? []).filter(
            (q) => {
              var R;
              return q.type === "Pancel" && ((R = q.system) == null ? void 0 : R.equipped) === !0;
            }
          );
          for (const q of L) {
            const R = String(((j = q.system) == null ? void 0 : j.protectionBonus) ?? "").trim().replace(",", "."), O = Number(R);
            Number.isFinite(O) && (V += O);
          }
        }
        const $ = z + W + H + V, K = (Number(b.total ?? 0) || 0) >= $, U = w.name ?? B.name ?? "Célpont";
        let I = null, D = null;
        if (K && w.type === "Karakter")
          try {
            const L = new Roll("1d8");
            await L.evaluate({ async: !0 }), I = Number(L.total ?? 0) || 1, I === 1 ? D = "Fej" : I >= 2 && I <= 4 ? D = "Törzs" : I === 5 || I === 6 ? D = "Karok" : D = "Lábak";
          } catch (L) {
            console.warn("VOTV hit location roll failed:", L);
          }
        p.weaponAttack = !0, p.weapon = {
          actorId: s.id ?? null,
          itemId: this._weaponItemId || null,
          slotKey: this._weaponSlotKey || null,
          damageFormula: this._weaponDamageFormula || null,
          targetActorId: w.id ?? null,
          targetName: U,
          defense: $,
          isHit: K,
          hitLocationRoll: I ?? null,
          hitLocationName: D ?? null
        };
      }
    }
    if (await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: s, alias: (s == null ? void 0 : s.name) ?? void 0 }),
      flavor: h,
      flags: { "vacuum-of-the-void": p },
      rollMode: o
    }), i > 0) {
      const E = Math.max(0, n - i);
      await s.update({ "system.resources.morale": E });
    }
    this.close();
  }
}
function Q(y, e, s) {
  var n, i;
  if (!y) return;
  const t = Number(((i = (n = y.system) == null ? void 0 : n.skills) == null ? void 0 : i[e]) ?? 0) || 0, r = C.BODY_PART_BY_SKILL[e] ? C._getSkillHealthStatusStatic(y, e) : void 0;
  let u = 0;
  r === 1 ? u = -6 : r === 2 && (u = -3), new T({
    actor: y,
    skillKey: e,
    label: s || e,
    baseModifier: t,
    injuryModifier: u
  }).render(!0);
}
function X(y, e) {
  var h, p, S, P, N, F, k, x;
  if (!y || !e) return;
  const s = y.type === "Npc" && y.id ? ((h = game.actors) == null ? void 0 : h.get(y.id)) ?? y : y, r = (((p = s.system) == null ? void 0 : p.weapons) ?? {})[e] ?? {}, u = (r.itemId ?? "").trim(), g = ((S = s.items) == null ? void 0 : S.filter((j) => j.type === "Fegyver")) ?? [], n = u ? g.find((j) => j.id === u) : null, i = ((n == null ? void 0 : n.name) ?? r.name ?? "").trim() || "Fegyver", l = Number(r.bonus ?? ((P = n == null ? void 0 : n.system) == null ? void 0 : P.bonus) ?? 0) || 0, d = (((N = n == null ? void 0 : n.system) == null ? void 0 : N.type) ?? "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(((k = (F = s.system) == null ? void 0 : F.skills) == null ? void 0 : k[d]) ?? 0) || 0, M = y.type === "Karakter" ? C._getSkillHealthStatusStatic(y, d) : void 0;
  let c = 0;
  M === 1 ? c = -6 : M === 2 && (c = -3);
  const f = (((x = n == null ? void 0 : n.system) == null ? void 0 : x.damage) ?? "").trim(), b = (r.damage ?? "").trim(), _ = f || b || "", a = v + l;
  new T({
    actor: y,
    skillKey: d,
    label: i,
    baseModifier: a,
    injuryModifier: 0,
    injuryPenalty: c,
    isWeaponAttack: !0,
    weaponSlotKey: e,
    weaponItemId: (n == null ? void 0 : n.id) ?? u,
    weaponDamageFormula: _
  }).render(!0);
}
export {
  T as VoidRollSheet,
  Q as openRollSheetForSkill,
  X as openRollSheetForWeapon
};
//# sourceMappingURL=roll-sheet-IHiXw_59.mjs.map
