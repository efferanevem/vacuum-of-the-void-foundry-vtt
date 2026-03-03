var Ze = Object.defineProperty;
var Qe = Object.getPrototypeOf;
var Ve = Reflect.get;
var et = (L, i, e) => i in L ? Ze(L, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : L[i] = e;
var P = (L, i, e) => et(L, typeof i != "symbol" ? i + "" : i, e);
var C = (L, i, e) => Ve(Qe(L), e, i);
const { HTMLField: tt, NumberField: v, SchemaField: T, StringField: h, BooleanField: x, ArrayField: Ne } = foundry.data.fields;
class it extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new T({
        name: new h({ required: !1, blank: !0, initial: "" }),
        player: new h({ required: !1, blank: !0, initial: "" }),
        level: new v({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new h({ required: !1, blank: !0, initial: "" }),
        assignment: new h({ required: !1, blank: !0, initial: "" }),
        subAssignment: new h({ required: !1, blank: !0, initial: "" }),
        background: new h({ required: !1, blank: !0, initial: "" }),
        languages: new h({ required: !1, blank: !0, initial: "" })
      }),
      resources: new T({
        health: new T({
          value: new v({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new v({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new T({
          head: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          torso: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          arms: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          legs: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new T({
          head: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new v({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new T({
          head: new v({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new v({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new v({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new v({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new T({
          value: new v({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new v({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new v({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new T({
        defense: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new v({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new T({
        deception: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new v({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new T({
        slotOrder: new h({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new T({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new T({
        microchips: new T({
          slot1: new T({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !1 })
          }),
          slot2: new T({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !1 })
          }),
          slot3: new T({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" })
      }),
      abilities: new T({
        faji: new T({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new T({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        passive: new T({
          items: new Ne(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new T({
          items: new Ne(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new T({
        biography: new tt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Z, SchemaField: rt } = foundry.data.fields;
class at extends it {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new rt({
        body: new Z({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Z({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Z({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: K, SchemaField: nt, StringField: Q } = foundry.data.fields;
class st extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new Q({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new Q({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new nt({
        short: new K({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new K({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new K({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new Q({ required: !1, blank: !0, initial: "" }),
      quantity: new K({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: V, StringField: Ce } = foundry.data.fields;
class ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ce({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ce({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new V({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new V({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new V({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: lt, StringField: $e } = foundry.data.fields;
class ct extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new $e({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new $e({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new lt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var xe, Me, Pe, je;
const A = class A extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var r, a, s, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv.karakter-sheet")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, "form.votv")) ?? null, t = ((s = i.querySelector) == null ? void 0 : s.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, s = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const d = document.activeElement, w = s.contains(d), b = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      w && b && (u.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const m = await super.render(i, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const f = this.element, g = this.form ?? this.element, y = u.scrollState, n = u.focus, c = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", l = () => {
      var d, w;
      if (this._applyScrollState(f, y), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const b = ((d = g.querySelector) == null ? void 0 : d.call(g, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (w = g.querySelector) == null ? void 0 : w.call(g, `[name="${CSS.escape(n.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = n.selectionStart ?? 0, b.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(f, y);
    };
    return (c || n) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const a = Math.floor(r / 3), s = Math.floor(2 * r / 3);
    return t <= a ? 1 : t <= s ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(i = null) {
    var g, y, n, c, l, o, d, w, b;
    const e = i ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((n = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : n.resources) ?? {}, a = ((l = (c = r.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : l.value) ?? 0, s = ((o = r.currentHealth) == null ? void 0 : o.legs) ?? 0, u = A._healthStatusFromRatio(s, a), m = Number(((b = (w = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : w.combat) == null ? void 0 : b.givenSpeed) ?? 0) || 0;
    let f;
    u === 0 ? f = 0 : u === 1 ? f = -6 : u === 2 ? f = -3 : f = m, t.textContent = String(f);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var s, u, m, f;
    const e = A.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((s = this.actor.system) == null ? void 0 : s.resources) ?? {}, r = ((m = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : m.value) ?? 0, a = ((f = t.currentHealth) == null ? void 0 : f[e]) ?? 0;
    return A._healthStatusFromRatio(a, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var u, m, f, g;
    const t = A.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((u = i == null ? void 0 : i.system) == null ? void 0 : u.resources) ?? {}, a = ((f = (m = r.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : f.value) ?? 0, s = ((g = r.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return A._healthStatusFromRatio(s, a);
  }
  async _prepareContext(i) {
    var ce, ue, de, me, pe, fe, ge, he, ye, be, we, ve, ke;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((de = (ue = (ce = this.actor.system) == null ? void 0 : ce.resources) == null ? void 0 : ue.stress) == null ? void 0 : de.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, a = r.hitLocations ?? {}, s = r.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of u) {
      const S = ((me = a[p]) == null ? void 0 : me.value) ?? 0, q = s[p] ?? 0;
      e.computedHealthStatus[p] = A._healthStatusFromRatio(q, S);
    }
    const m = (Number(s.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((p) => (Number(s[p]) || 0) === 0).length;
    e.showDeathSkull = m || g >= 2;
    const y = e.computedHealthStatus.legs ?? 3, n = Number(((fe = (pe = this.actor.system) == null ? void 0 : pe.combat) == null ? void 0 : fe.givenSpeed) ?? 0) || 0;
    let c;
    y === 0 ? c = 0 : y === 1 ? c = -6 : y === 2 ? c = -3 : c = n, e.effectiveGivenSpeed = c, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: c } },
      { inplace: !1 }
    );
    const l = A.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, S] of Object.entries(l)) {
      const q = e.computedHealthStatus[S];
      e.skillHealthStatus[p] = q, e.skillDisabled[p] = q === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const o = this.actor.system.weapons ?? {}, d = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = (o.slotOrder ?? "").trim(), b = w ? w.split(/\s*,\s*/).filter((p) => d.includes(p)) : [], I = (ge = this.actor.system.gear) == null ? void 0 : ge.microchips, N = I && typeof I == "object" && !Array.isArray(I) ? I : {}, D = (((he = N.slot1) == null ? void 0 : he.itemId) ?? "").trim(), _ = (((ye = N.slot2) == null ? void 0 : ye.itemId) ?? "").trim(), k = (((be = N.slot3) == null ? void 0 : be.itemId) ?? "").trim(), Y = this.actor.items.contents.filter((p) => p.type !== "ability").slice().sort((p, S) => {
      const q = typeof p.sort == "number" ? p.sort : 0, O = typeof S.sort == "number" ? S.sort : 0;
      return q - O;
    }).map((p) => {
      var Te, qe, De, _e, Oe, Le, Ae, Ee, Fe;
      const S = p.type === "weapon", q = p.type === "microchip";
      let O = 0, F = "", M = null;
      for (let W = 0; W < b.length; W++) {
        const X = b[W];
        if ((((Te = o[X]) == null ? void 0 : Te.itemId) ?? "") === p.id) {
          O = W + 1, F = ((qe = o[X]) == null ? void 0 : qe.bonus) ?? "", M = X;
          break;
        }
      }
      let G = null;
      q && (D === p.id ? G = "slot1" : _ === p.id ? G = "slot2" : k === p.id && (G = "slot3"));
      const Ye = S && ((De = p.system) != null && De.damage) ? p.system.damage : "", Ie = S && ((Oe = (_e = p.system) == null ? void 0 : _e.range) == null ? void 0 : Oe.short) != null ? p.system.range.short : null, Se = S && ((Ae = (Le = p.system) == null ? void 0 : Le.range) == null ? void 0 : Ae.long) != null ? p.system.range.long : null, Je = Ie != null && Se != null ? `${Ie} / ${Se} m` : "", Xe = M ? Number((Ee = o[M]) == null ? void 0 : Ee.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: S,
        slotAssignment: O,
        slotBonus: F,
        slotKey: M,
        microchipSlotKey: G,
        isEquipped: !!(M || G),
        damage: Ye,
        rangeStr: Je,
        slotBonusNum: Xe,
        quantity: Number(((Fe = p.system) == null ? void 0 : Fe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = Y;
    const U = (((we = this.actor.items) == null ? void 0 : we.contents) ?? []).filter((p) => p.type === "weapon"), B = U.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = B;
    const Be = "— Nincs fegyver —", Ke = b.filter((p) => {
      const q = ((o[p] ?? {}).itemId ?? "").trim();
      return q ? !!U.find((F) => F.id === q) : !1;
    });
    e.weaponSlots = Ke.map((p, S) => {
      const q = o[p] ?? {}, O = (q.itemId ?? "").trim(), F = B.find((M) => M.id === O);
      return {
        slotKey: p,
        slotNum: S + 1,
        displayName: (F == null ? void 0 : F.name) || q.name || Be,
        img: (F == null ? void 0 : F.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const z = (((ve = this.actor.items) == null ? void 0 : ve.contents) ?? []).filter((p) => p.type === "microchip").map((p) => ({ id: p.id, name: p.name, img: p.img })), Ge = "— Nincs chip —", J = (p) => {
      const S = [];
      return p !== 1 && S.push(D), p !== 2 && S.push(_), p !== 3 && S.push(k), S;
    };
    e.microchipItemsSlot1 = z.filter((p) => !J(1).includes(p.id)), e.microchipItemsSlot2 = z.filter((p) => !J(2).includes(p.id)), e.microchipItemsSlot3 = z.filter((p) => !J(3).includes(p.id)), ["1", "2", "3"].forEach((p) => {
      const S = `slot${p}`, q = N[S] ?? {}, O = (q.itemId ?? "").trim(), F = z.find((M) => M.id === O);
      e[`microchip${p}ItemId`] = O, e[`microchip${p}DisplayName`] = (F == null ? void 0 : F.name) || q.name || Ge, e[`microchip${p}Img`] = (F == null ? void 0 : F.img) || "", e[`microchip${p}Active`] = q.active === !0;
    });
    const ae = this.actor.system.abilities ?? {}, ze = (((ke = this.actor.items) == null ? void 0 : ke.contents) ?? []).map((p) => {
      var S, q, O;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((S = p.system) == null ? void 0 : S.kind) ?? "passive",
        description: ((q = p.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((O = p.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), ne = new Map(ze.map((p) => [p.id, p])), We = "— Nincs képesség —", se = (p) => {
      const S = ae[p] ?? {}, q = (S.itemId ?? "").trim(), O = q ? ne.get(q) : null, F = (O == null ? void 0 : O.description) ?? "", M = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: q,
        displayName: (O == null ? void 0 : O.name) || S.name || We,
        img: (O == null ? void 0 : O.img) || "",
        description: F,
        kp: M
      };
    };
    e.abilityFajiSlot = se("faji"), e.abilityHatterSlot = se("hatter");
    const oe = (p) => {
      const S = ae[p];
      return S ? Array.isArray(S == null ? void 0 : S.items) ? S.items : Array.isArray(S) ? S : [] : [];
    }, le = (p) => p.map((S) => {
      const q = ne.get(S);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = le(oe("passive")), e.abilityActiveList = le(oe("active")), e;
  }
  _attachFrameListeners(i) {
    var y;
    super._attachFrameListeners(i);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const r = (n) => {
      var o;
      const c = n ? n.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const a = (y = e.querySelector) == null ? void 0 : y.call(e, 'input[name="system.resources.stress.value"]');
    a && r({ currentTarget: a }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (n) => {
      n.preventDefault(), n.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var w;
      n.preventDefault();
      const c = n.currentTarget, l = c.dataset.skill, o = ((w = c.textContent) == null ? void 0 : w.trim()) || l, { openRollSheetForSkill: d } = await import("./roll-sheet-BjgOhNbW.mjs");
      d(this.actor, l, o);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const s = (n, c) => {
      var d;
      const l = n.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (o) {
        if (n.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const w = n.dataset.weaponSlot;
          w && this._rollWeapon(w);
          return;
        }
        (d = o.sheet) == null || d.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), s(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), s(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const c = n.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      let d = Number(c.value);
      (!Number.isFinite(d) || d < 0) && (d = 0), await o.update({ "system.quantity": d });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, d = o.items.get(l), w = {};
      if ((d == null ? void 0 : d.type) === "weapon") {
        const b = o.system.weapons ?? {}, I = (b.slotOrder ?? "").trim(), N = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((k) => N.includes(k)) : [], _ = D.find((k) => {
          var E;
          return (((E = b[k]) == null ? void 0 : E.itemId) ?? "").trim() === l;
        });
        if (_) {
          const k = D.filter((E) => E !== _);
          w["system.weapons.slotOrder"] = k.join(","), w[`system.weapons.${_}.itemId`] = "", w[`system.weapons.${_}.name`] = "", w[`system.weapons.${_}.damage`] = "", w[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(w).length && await o.update(w), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault();
      const l = (n.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      n.preventDefault();
      const l = (n.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const w = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      w && await this._rollWeaponDamage(w);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var D;
      const c = n.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.system.weapons ?? {}, d = (o.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = d ? d.split(/\s*,\s*/).filter((_) => w.includes(_)) : [], I = b.find((_) => {
        var k;
        return (((k = o[_]) == null ? void 0 : k.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (I) return;
        let _ = b.find((U) => {
          var B;
          return !((B = o[U]) != null && B.itemId);
        });
        const k = new Set(b);
        if (!_) {
          const U = w.find((B) => !k.has(B));
          if (!U) return;
          _ = U, b.push(U);
        }
        const E = this.actor.items.get(l), Y = {
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${_}.itemId`]: l,
          [`system.weapons.${_}.name`]: (E == null ? void 0 : E.name) ?? "",
          [`system.weapons.${_}.damage`]: ((D = E == null ? void 0 : E.system) == null ? void 0 : D.damage) ?? ""
        };
        await this.actor.update(Y);
      } else if (I) {
        const k = {
          "system.weapons.slotOrder": b.filter((E) => E !== I).join(",")
        };
        k[`system.weapons.${I}.itemId`] = "", k[`system.weapons.${I}.name`] = "", k[`system.weapons.${I}.damage`] = "", k[`system.weapons.${I}.bonus`] = "", await this.actor.update(k);
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const c = n.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var E;
      n.preventDefault();
      const c = n.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), d = o == null ? void 0 : o.dataset.slot;
      if (!d) return;
      const w = (c.dataset.itemId ?? "").trim(), b = (c.dataset.itemName ?? ((E = c.textContent) == null ? void 0 : E.trim()) ?? "").trim() || "— Nincs chip —", I = (c.dataset.itemImg ?? "").trim(), N = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      N && (N.textContent = b);
      let D = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      I ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", o == null || o.insertBefore(D, N)), D.src = I, D.style.display = "") : D && D.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const _ = w ? this.actor.items.get(w) : null, k = {
        [`system.gear.microchips.${d}.itemId`]: w,
        [`system.gear.microchips.${d}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      w && (k[`system.gear.microchips.${d}.active`] = !0), await this.actor.update(k);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (n) => {
      const c = n.currentTarget.dataset.slot;
      if (!c) return;
      const l = n.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${c}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((n, c) => {
      const l = c.dataset.slot;
      c.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, l)), c.addEventListener("dragleave", (o) => {
        var d;
        return (d = o.currentTarget) == null ? void 0 : d.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, l));
    }), t.find(".karakter-ability-slot-single").each((n, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, l)), c.addEventListener("dragleave", (o) => {
        var d;
        return (d = o.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (o) => {
        var d;
        (d = o.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, l)), c.addEventListener("dragleave", (o) => {
        var d;
        return (d = o.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (o) => {
        var d;
        (d = o.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var b;
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.area, l = n.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const o = this.actor.system.abilities ?? {}, w = (Array.isArray((b = o[c]) == null ? void 0 : b.items) ? o[c].items.slice() : []).filter((I) => I !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: w });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var d;
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      (d = o == null ? void 0 : o.sheet) == null || d.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.find(".karakter-actions-drag-handle").each((n, c) => {
      var w, b;
      const l = c, o = l.closest(".karakter-actions-row"), d = ((w = o == null ? void 0 : o.dataset) == null ? void 0 : w.itemId) ?? ((b = l.dataset) == null ? void 0 : b.itemId);
      d && l.addEventListener("dragstart", (I) => this._onInventoryDragHandleStart(I, d, o));
    }), t.find(".karakter-actions-row").each((n, c) => {
      const l = c, o = l.dataset.itemId;
      o && (l.addEventListener("dragover", (d) => this._onInventoryRowDragOver(d, o)), l.addEventListener("dragleave", (d) => this._onInventoryRowDragLeave(d, o)), l.addEventListener("drop", (d) => this._onInventoryRowDrop(d, o)));
    });
    const u = t.find(".karakter-actions-table")[0];
    u && (u.addEventListener("dragover", (n) => this._onInventoryAreaDragOver(n)), u.addEventListener("dragleave", (n) => this._onInventoryAreaDragLeave(n)), u.addEventListener("drop", (n) => this._onInventoryAreaDrop(n)));
    const m = this, f = (n) => {
      var o, d, w, b;
      if (!n) return;
      const c = m._getFormDataForUpdate(n);
      if (Object.keys(c).length === 0) return;
      const l = ((d = (o = c.system) == null ? void 0 : o.resources) == null ? void 0 : d.currentHealth) != null || ((b = (w = c.system) == null ? void 0 : w.resources) == null ? void 0 : b.hitLocations) != null;
      m.actor.update(c).then(() => {
        l && setTimeout(() => m.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (n) => {
      var c, l, o;
      return n && (((l = (c = m.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, n)) || m.id && ((o = n.closest) == null ? void 0 : o.call(n, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (n) => {
      const c = n.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = c.form;
      g(o) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), f(o));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var u, m, f;
    const e = {};
    for (const g of i.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      g.type === "checkbox" ? y = g.checked : g.type === "number" ? y = g.value === "" ? 0 : Number(g.value) : y = g.value ?? "", foundry.utils.setProperty(e, g.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), r = t.hitLocations ?? {}, a = t.currentHealth ?? {}, s = ["head", "torso", "arms", "legs"];
    for (const g of s) {
      const y = ((f = r[g]) == null ? void 0 : f.value) ?? 0, n = a[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, A._healthStatusFromRatio(n, y));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var s, u, m, f, g, y, n, c;
    const t = i.target, r = (s = t == null ? void 0 : t.closest) == null ? void 0 : s.call(t, ".karakter-ability-slot-single"), a = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const o of Object.values(e))
          if (typeof o == "string" && o.includes(".") && o.startsWith("Item.")) {
            l = o;
            break;
          }
      }
      if (l) {
        const o = await fromUuid(l);
        if (o && o.documentName === "Item" && o.type === "ability") {
          let d = o.id;
          ((f = o.parent) == null ? void 0 : f.id) !== this.actor.id && (d = ((g = (await this.actor.createEmbeddedDocuments("Item", [o.toObject()]))[0]) == null ? void 0 : g.id) ?? d);
          const w = (((y = o.system) == null ? void 0 : y.kind) ?? "passive").toString(), b = this.actor.system.abilities ?? {};
          if (r) {
            const D = r.dataset.slot;
            if (D) {
              await this.actor.update({
                [`system.abilities.${D}.itemId`]: d,
                [`system.abilities.${D}.name`]: o.name
              });
              return;
            }
          } else if (a) {
            const D = a.dataset.area;
            if (D) {
              const _ = Array.isArray((n = b[D]) == null ? void 0 : n.items) ? b[D].items.slice() : Array.isArray(b[D]) ? b[D].slice() : [];
              _.includes(d) || _.push(d), await this.actor.update({ [`system.abilities.${D}.items`]: _ });
              return;
            }
          }
          if (w === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": d,
              "system.abilities.faji.name": o.name
            });
            return;
          }
          if (w === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": d,
              "system.abilities.hatter.name": o.name
            });
            return;
          }
          const I = w === "active" ? "active" : "passive", N = Array.isArray((c = b[I]) == null ? void 0 : c.items) ? b[I].items.slice() : Array.isArray(b[I]) ? b[I].slice() : [];
          N.includes(d) || N.push(d), await this.actor.update({ [`system.abilities.${I}.items`]: N });
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var a, s, u;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var m, f, g, y, n, c;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((g = i.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const a = await fromUuid(r.uuid);
    if (!a || a.type !== "weapon") return;
    let s = a.id;
    ((y = a.parent) == null ? void 0 : y.id) !== this.actor.id && (s = ((n = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : n.id) ?? s);
    const u = {
      [`system.weapons.${e}.itemId`]: s,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((c = a.system) == null ? void 0 : c.damage) ?? ""
    };
    await this.actor.update(u);
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (r = i.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var f, g;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((y, n) => {
      const c = typeof y.sort == "number" ? y.sort : 0, l = typeof n.sort == "number" ? n.sort : 0;
      return c - l;
    }).map((y) => y.id), s = a.indexOf(t), u = a.indexOf(e);
    if (s === -1 || u === -1) return;
    a.splice(s, 1), a.splice(u, 0, t);
    const m = a.map((y, n) => ({
      _id: y,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(i) {
    var r, a, s;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  async _postAbilityToChat(i) {
    var g, y, n;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", r = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, a = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), s = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", m = a ? `<p>${a}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${s}</p>
      ${u}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var r, a;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    if (!e) return null;
    let t;
    try {
      t = typeof e == "string" ? JSON.parse(e) : e;
    } catch {
      return null;
    }
    return !t || t.type !== "Item" || !t.uuid ? null : t;
  }
  _onAbilitySingleDragOver(i, e) {
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var s, u, m;
    i.preventDefault(), (s = i.currentTarget) == null || s.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "ability") return;
    let a = r.id;
    ((u = r.parent) == null ? void 0 : u.id) !== this.actor.id && (a = ((m = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : m.id) ?? a), await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var m, f, g, y;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "ability") return;
    let a = r.id;
    ((f = r.parent) == null ? void 0 : f.id) !== this.actor.id && (a = ((g = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : g.id) ?? a);
    const s = this.actor.system.abilities ?? {}, u = Array.isArray((y = s[e]) == null ? void 0 : y.items) ? s[e].items.slice() : Array.isArray(s[e]) ? s[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(i, e) {
    var a, s, u;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var u, m, f, g, y;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((f = i.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const a = await fromUuid(r.uuid);
    if (!a || a.type !== "microchip") return;
    let s = a.id;
    ((g = a.parent) == null ? void 0 : g.id) !== this.actor.id && (s = ((y = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : y.id) ?? s), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: s,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const r = (this.actor.system.skills ?? {})[i] ?? 0;
    let a = Number(r) || 0;
    const s = this._getSkillHealthStatus(i);
    s === 1 ? a -= 6 : s === 2 && (a -= 3);
    const m = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, f = new Roll(m);
    await f.evaluate({ async: !0 });
    const g = f.total >= 18 ? "critical" : f.total <= 3 ? "fumble" : null, y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g } },
      rollMode: y
    });
  }
  async _rollMorale() {
    var a;
    const i = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
    if (i <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const r = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollWeapon(i) {
    var b;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, r = this.actor.system.skills ?? {}, a = this.actor.items.filter((I) => I.type === "weapon");
    let s = null;
    t.itemId && (s = a.find((I) => I.id === t.itemId) ?? null);
    const u = s && s.name || t.name || `Fegyver (${i})`, m = Number(t.bonus || 0) || 0, g = (((b = s == null ? void 0 : s.system) == null ? void 0 : b.type) || "light") === "thrown" ? "grenadeUse" : "firearms", y = Number(r[g] || 0) || 0, n = m + y, l = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, o = new Roll(l);
    await o.evaluate({ async: !0 });
    const d = o.total >= 18 ? "critical" : o.total <= 3 ? "fumble" : null, w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: d } },
      rollMode: w
    });
  }
  async _rollWeaponDamage(i) {
    var s;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "weapon") return;
    const t = (((s = e.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!t) return;
    const r = new Roll(t);
    await r.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }
};
P(A, "PARTS", foundry.utils.mergeObject(C(A, A, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), P(A, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(A, A, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((xe = C(A, A, "DEFAULT_OPTIONS")) == null ? void 0 : xe.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Me = C(A, A, "DEFAULT_OPTIONS")) == null ? void 0 : Me.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((je = (Pe = C(A, A, "DEFAULT_OPTIONS")) == null ? void 0 : Pe.window) == null ? void 0 : je.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
P(A, "BODY_PART_BY_SKILL", {
  deception: "head",
  medicalCare: "head",
  perception: "head",
  cooking: "head",
  quickThinking: "head",
  combatTraining: "head",
  mentalStrength: "head",
  intimidation: "head",
  persuasion: "head",
  memory: "head",
  languages: "head",
  luck: "head",
  technicalKnowledge: "head",
  lexicalKnowledge: "head",
  music: "head",
  endurance: "torso",
  firearms: "torso",
  vehicleOperation: "arms",
  grenadeUse: "arms",
  stealth: "legs"
});
let ee = A;
var He;
const j = class j extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const s = e._getFormDataForUpdate(a);
      Object.keys(s).length !== 0 && e.document.update(s).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, r = (a) => {
      var s, u, m;
      return a && (((u = (s = e.element) == null ? void 0 : s.contains) == null ? void 0 : u.call(s, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, m, f;
      const s = ((u = a.target) == null ? void 0 : u.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      r(s) && t(s);
    }, e._votvInput = (a) => {
      var u, m, f;
      const s = ((u = a.target) == null ? void 0 : u.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      r(s) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(s), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
P(j, "PARTS", foundry.utils.mergeObject(C(j, j, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), P(j, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(j, j, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((He = C(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : He.form) ?? {}, { submitOnChange: !0 })
}));
let te = j;
var Re;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const s = e._getFormDataForUpdate(a);
      Object.keys(s).length !== 0 && e.document.update(s).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, r = (a) => {
      var s, u, m;
      return a && (((u = (s = e.element) == null ? void 0 : s.contains) == null ? void 0 : u.call(s, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, m, f;
      const s = ((u = a.target) == null ? void 0 : u.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      r(s) && t(s);
    }, e._votvInput = (a) => {
      var u, m, f;
      const s = ((u = a.target) == null ? void 0 : u.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      r(s) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(s), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
P(H, "PARTS", foundry.utils.mergeObject(C(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), P(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Re = C(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : Re.form) ?? {}, { submitOnChange: !0 })
}));
let ie = H;
var Ue;
const R = class R extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const s = e._getFormDataForUpdate(a);
      Object.keys(s).length !== 0 && e.document.update(s).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, r = (a) => {
      var s, u, m;
      return a && (((u = (s = e.element) == null ? void 0 : s.contains) == null ? void 0 : u.call(s, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, m, f;
      const s = ((u = a.target) == null ? void 0 : u.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      r(s) && t(s);
    }, e._votvInput = (a) => {
      var m;
      const s = a.target;
      if ((s == null ? void 0 : s.name) === "name") return;
      const u = (s == null ? void 0 : s.form) ?? ((m = s == null ? void 0 : s.closest) == null ? void 0 : m.call(s, "form"));
      r(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
P(R, "PARTS", foundry.utils.mergeObject(C(R, R, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), P(R, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(R, R, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ue = C(R, R, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.form) ?? {}, { submitOnChange: !0 })
}));
let re = R;
const ut = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = at, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.weapon = st, CONFIG.Item.dataModels.microchip = ot, CONFIG.Item.dataModels.ability = ct, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ee, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", te, {
    types: ["weapon"],
    makeDefault: !0,
    label: "Void Weapon"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ie, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", re, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const L = 500;
  Hooks.on("updateActor", (a, s, u, m) => {
    var b, I, N, D, _;
    const f = a == null ? void 0 : a.id;
    if (!f) return;
    const g = document.activeElement, y = g && (g.tagName === "INPUT" && g.type !== "checkbox" && g.type !== "radio" || g.tagName === "TEXTAREA" || g.isContentEditable), n = [], c = (b = game.actors) == null ? void 0 : b.get(f);
    c != null && c.apps && n.push(...Array.from(c.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of l)
      ((I = k.document) == null ? void 0 : I.id) !== f || ((N = k.document) == null ? void 0 : N.documentName) !== "Actor" || ((D = k.constructor) == null ? void 0 : D.name) !== "VoidKarakterSheet" || n.includes(k) || n.push(k);
    if (y && n.some((k) => {
      const E = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return E && E.contains(g);
    })) return;
    const d = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, w = d && Date.now() - d.at < L ? d.appId : null;
    setTimeout(() => {
      for (const k of n)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== w && k.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (L) => {
      var r, a, s, u, m, f;
      if (!((a = (r = L.target) == null ? void 0 : r.closest) != null && a.call(r, "#actors"))) return;
      const i = (u = (s = L.target) == null ? void 0 : s.closest) == null ? void 0 : u.call(s, "[data-document-id]"), e = (m = i == null ? void 0 : i.getAttribute) == null ? void 0 : m.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((f = game.actors) != null && f.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (L, i, e) => {
  var s, u;
  const t = (s = game.votv) == null ? void 0 : s._dragSourceActorId, r = t ?? L.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = r ? (u = game.actors) == null ? void 0 : u.get(r) : null;
  !a || a.type !== "Karakter" || L.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (L, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || L.updateSource({
    width: 1920,
    height: 1080,
    "background.src": ut,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (L, i, e) => {
  var a, s, u;
  const t = (s = (a = L.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : s.resultType;
  if (!t) return;
  const r = (u = i == null ? void 0 : i.querySelector) == null ? void 0 : u.call(i, ".dice-roll");
  r && r.classList.add(`votv-${t}`);
});
export {
  ee as V
};
//# sourceMappingURL=vacuum-of-the-void-CmtGSssk.mjs.map
