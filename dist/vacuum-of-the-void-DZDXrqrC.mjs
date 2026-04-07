var Qe = Object.defineProperty;
var Ve = Object.getPrototypeOf;
var et = Reflect.get;
var tt = (E, r, e) => r in E ? Qe(E, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[r] = e;
var U = (E, r, e) => tt(E, typeof r != "symbol" ? r + "" : r, e);
var M = (E, r, e) => et(Ve(E), e, r);
const { HTMLField: rt, NumberField: S, SchemaField: _, StringField: f, BooleanField: K, ArrayField: le } = foundry.data.fields;
class it extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new _({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new S({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new _({
        health: new _({
          value: new S({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new S({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new _({
          head: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new _({
          head: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new S({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new _({
          head: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new S({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new _({
          value: new S({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new S({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new S({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new _({
        defense: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new S({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new _({
        deception: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new S({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new _({
        slotOrder: new f({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new _({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new _({
        microchips: new _({
          slot1: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new _({
            name: new f({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new f({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new f({ required: !1, blank: !0, initial: "" }),
            level: new f({ required: !1, blank: !0, initial: "" }),
            other: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new _({
            name: new f({ required: !1, blank: !0, initial: "" }),
            quantity: new S({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new _({
        faji: new _({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new _({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        passive: new _({
          items: new le(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new le(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new _({
        biography: new rt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: me, SchemaField: st } = foundry.data.fields;
class at extends it {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new st({
        body: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: nt, StringField: V } = foundry.data.fields;
class ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new V({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new V({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new V({ required: !1, blank: !0, initial: "" }),
      damage: new V({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new V({ required: !1, blank: !0, initial: "" }),
      special: new V({ required: !1, blank: !0, initial: "" }),
      quantity: new nt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: pe, StringField: Re } = foundry.data.fields;
class lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Re({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Re({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new pe({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new pe({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new pe({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ct, StringField: He } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new He({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new He({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ct({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Ue, Be, Ge, ze;
const x = class x extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(r) {
    var s, n, o, u;
    if (!r) return { form: null, windowContent: null };
    const e = ((s = r.querySelector) == null ? void 0 : s.call(r, "form.votv.karakter-sheet")) ?? ((n = r.querySelector) == null ? void 0 : n.call(r, "form.votv")) ?? null, t = ((o = r.querySelector) == null ? void 0 : o.call(r, ".votv-scroll")) ?? ((u = r.querySelector) == null ? void 0 : u.call(r, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(r) {
    const { form: e, windowContent: t } = this._getScrollContainers(r), s = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (s.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (s.windowScrollTop = t.scrollTop), s;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(r, e) {
    if (!r || !e) return;
    const { form: t, windowContent: s } = this._getScrollContainers(r);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && s && (s.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(r = !1, e = {}) {
    var m;
    const t = (m = game.votv) == null ? void 0 : m._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (n) {
      u.scrollState = this._saveScrollState(n);
      const y = document.activeElement, I = o.contains(y), w = y && (y.tagName === "INPUT" && y.type !== "checkbox" && y.type !== "radio" || y.tagName === "TEXTAREA");
      I && w && (u.focus = {
        name: y.name || null,
        id: y.id || null,
        selectionStart: "selectionStart" in y ? y.selectionStart : 0,
        selectionEnd: "selectionEnd" in y ? y.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const g = this.element, h = this.form ?? this.element, i = u.scrollState, a = u.focus, l = typeof (i == null ? void 0 : i.formScrollTop) == "number" || typeof (i == null ? void 0 : i.windowScrollTop) == "number", c = () => {
      var y, I;
      if (this._applyScrollState(g, i), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const w = ((y = h.querySelector) == null ? void 0 : y.call(h, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (I = h.querySelector) == null ? void 0 : I.call(h, `[name="${CSS.escape(a.name)}"]`) : null);
        w && (w.tagName === "INPUT" || w.tagName === "TEXTAREA") && (w.focus({ preventScroll: !0 }), typeof w.selectionStart == "number" && (w.selectionStart = a.selectionStart ?? 0, w.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(g, i);
    };
    return (l || a) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(r, e) {
    const t = Number(r), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const n = Math.floor(s / 3), o = Math.floor(2 * s / 3);
    return t <= n ? 1 : t <= o ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(r = null) {
    var h, i, a, l, c, m, y, I, w;
    const e = r ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((a = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, n = ((c = (l = s.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : c.value) ?? 0, o = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, u = x._healthStatusFromRatio(o, n), p = Number(((w = (I = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : I.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
    let g;
    u === 0 ? g = 0 : u === 1 ? g = -6 : u === 2 ? g = -3 : g = p, t.textContent = String(g);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var o, u, p, g;
    const e = x.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, s = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, n = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return x._healthStatusFromRatio(n, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var u, p, g, h;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((u = r == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, n = ((g = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, o = ((h = s.currentHealth) == null ? void 0 : h[t]) ?? 0;
    return x._healthStatusFromRatio(o, n);
  }
  async _prepareContext(r) {
    var qe, Te, De, Oe, _e, Le, Ae, Fe, Ne, Ee, $e, Ce, xe, je, Pe, Me, Ke;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Te = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : Te.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, n = s.hitLocations ?? {}, o = s.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const q = ((Oe = n[d]) == null ? void 0 : Oe.value) ?? 0, T = o[d] ?? 0;
      e.computedHealthStatus[d] = x._healthStatusFromRatio(T, q);
    }
    const p = (Number(o.head) || 0) === 0, h = ["torso", "arms", "legs"].filter((d) => (Number(o[d]) || 0) === 0).length;
    e.showDeathSkull = p || h >= 2;
    const i = e.computedHealthStatus.legs ?? 3, a = Number(((Le = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : Le.givenSpeed) ?? 0) || 0;
    let l;
    i === 0 ? l = 0 : i === 1 ? l = -6 : i === 2 ? l = -3 : l = a, e.effectiveGivenSpeed = l, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l } },
      { inplace: !1 }
    );
    const c = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, q] of Object.entries(c)) {
      const T = e.computedHealthStatus[q];
      e.skillHealthStatus[d] = T, e.skillDisabled[d] = T === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const m = this.actor.system.weapons ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (m.slotOrder ?? "").trim(), w = I ? I.split(/\s*,\s*/).filter((d) => y.includes(d)) : [], L = (Ae = this.actor.system.gear) == null ? void 0 : Ae.microchips, b = L && typeof L == "object" && !Array.isArray(L) ? L : {}, O = (((Fe = b.slot1) == null ? void 0 : Fe.itemId) ?? "").trim(), D = (((Ne = b.slot2) == null ? void 0 : Ne.itemId) ?? "").trim(), k = (((Ee = b.slot3) == null ? void 0 : Ee.itemId) ?? "").trim(), P = this.actor.items.contents.filter((d) => d.type !== "ability").slice().sort((d, q) => {
      const T = typeof d.sort == "number" ? d.sort : 0, F = typeof q.sort == "number" ? q.sort : 0;
      return T - F;
    }).map((d) => {
      var ae, ne, ee, te, re, Q;
      const q = d.type === "Fegyver", T = d.type === "microchip";
      let F = 0, N = "", C = null;
      for (let oe = 0; oe < w.length; oe++) {
        const de = w[oe];
        if ((((ae = m[de]) == null ? void 0 : ae.itemId) ?? "") === d.id) {
          F = oe + 1, N = ((ne = m[de]) == null ? void 0 : ne.bonus) ?? "", C = de;
          break;
        }
      }
      let Y = null;
      T && (O === d.id ? Y = "slot1" : D === d.id ? Y = "slot2" : k === d.id && (Y = "slot3"));
      const X = q && ((ee = d.system) != null && ee.damage) ? d.system.damage : "", J = q && typeof ((te = d.system) == null ? void 0 : te.range) == "string" ? (d.system.range || "").trim() : "", Z = C ? Number((re = m[C]) == null ? void 0 : re.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: q,
        slotAssignment: F,
        slotBonus: N,
        slotKey: C,
        microchipSlotKey: Y,
        isEquipped: !!(C || Y),
        damage: X,
        rangeStr: J,
        slotBonusNum: Z,
        quantity: Number(((Q = d.system) == null ? void 0 : Q.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = P;
    const A = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((d) => d.type === "Fegyver"), j = A.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = j;
    const W = "— Nincs fegyver —", ce = w.filter((d) => {
      const T = ((m[d] ?? {}).itemId ?? "").trim();
      return T ? !!A.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = ce.map((d, q) => {
      const T = m[d] ?? {}, F = (T.itemId ?? "").trim(), N = j.find((C) => C.id === F);
      return {
        slotKey: d,
        slotNum: q + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || W,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const H = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, R = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = A.map((d) => {
      var re;
      const q = d.id;
      let T = null, F = {};
      for (const Q of w)
        if ((((re = m[Q]) == null ? void 0 : re.itemId) ?? "").trim() === q) {
          T = Q, F = m[Q] ?? {};
          break;
        }
      const N = !!T, C = (d == null ? void 0 : d.system) ?? {}, Y = typeof C.range == "string" ? (C.range || "").trim() : "", X = C.type ?? "", J = (H[X] ?? X) || "—", Z = C.size ?? "", ae = (R[Z] ?? Z) || "", ne = [J, ae].filter(Boolean).join(", ") || J || "—", ee = J === "Lövedékes", te = Number(C.quantity ?? 1) || 1;
      return {
        slotKey: T ?? "",
        itemId: q,
        name: (d == null ? void 0 : d.name) ?? W,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(F.bonus ?? "").trim() || "0",
        damage: F.damage ?? C.damage ?? "",
        rangeStr: Y || "—",
        typeLabel: J,
        typeAndSize: ne,
        quantity: te,
        quantityDisplay: ee ? te : "—",
        isProjectile: ee,
        equipped: N,
        special: (C.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((Pe = (je = this.actor.system) == null ? void 0 : je.gear) == null ? void 0 : Pe.generalItems) ? this.actor.system.gear.generalItems : [];
    const ie = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).filter((d) => d.type === "microchip"), se = ie.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var X, J;
      const q = `slot${d}`, T = b[q] ?? {}, F = (T.itemId ?? "").trim(), N = ie.find((Z) => Z.id === F), C = ((X = N == null ? void 0 : N.system) == null ? void 0 : X.abilityType) ?? "", Y = C === "active" ? "Aktív" : C === "passive" ? "Passzív" : C || "—";
      return {
        slotKey: q,
        itemId: F,
        name: (N == null ? void 0 : N.name) ?? T.name ?? be,
        typeLabel: Y,
        description: (((J = N == null ? void 0 : N.system) == null ? void 0 : J.description) ?? "").trim() || "—"
      };
    });
    const be = "— Nincs Mikro-Chip —", ue = (d) => {
      const q = [];
      return d !== 1 && q.push(O), d !== 2 && q.push(D), d !== 3 && q.push(k), q;
    };
    e.microchipItemsSlot1 = se.filter((d) => !ue(1).includes(d.id)), e.microchipItemsSlot2 = se.filter((d) => !ue(2).includes(d.id)), e.microchipItemsSlot3 = se.filter((d) => !ue(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const q = `slot${d}`, T = b[q] ?? {}, F = (T.itemId ?? "").trim(), N = se.find((C) => C.id === F);
      e[`microchip${d}ItemId`] = F, e[`microchip${d}DisplayName`] = (N == null ? void 0 : N.name) || T.name || be, e[`microchip${d}Img`] = (N == null ? void 0 : N.img) || "", e[`microchip${d}Active`] = T.active === !0;
    });
    const we = this.actor.system.abilities ?? {}, Xe = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).map((d) => {
      var q, T, F;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((q = d.system) == null ? void 0 : q.kind) ?? "passive",
        description: ((T = d.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((F = d.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), ke = new Map(Xe.map((d) => [d.id, d])), Ze = "— Nincs képesség —", ve = (d) => {
      const q = we[d] ?? {}, T = (q.itemId ?? "").trim(), F = T ? ke.get(T) : null, N = (F == null ? void 0 : F.description) ?? "", C = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: T,
        displayName: (F == null ? void 0 : F.name) || q.name || Ze,
        img: (F == null ? void 0 : F.img) || "",
        description: N,
        kp: C
      };
    };
    e.abilityFajiSlot = ve("faji"), e.abilityHatterSlot = ve("hatter");
    const Ie = (d) => {
      const q = we[d];
      return q ? Array.isArray(q == null ? void 0 : q.items) ? q.items : Array.isArray(q) ? q : [] : [];
    }, Se = (d) => d.map((q) => {
      const T = ke.get(q);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Se(Ie("passive")), e.abilityActiveList = Se(Ie("active")), e;
  }
  _attachFrameListeners(r) {
    var h;
    super._attachFrameListeners(r);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const s = (i) => {
      var c;
      const a = i ? i.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const l = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const n = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    n && s({ currentTarget: n }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (a) => {
          a && this.actor.update({ img: a });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var y;
      i.preventDefault();
      const a = i.currentTarget, l = a.dataset.skill, c = ((y = a.textContent) == null ? void 0 : y.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-BCIoOrGg.mjs");
      m(this.actor, l, c);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const o = (i, a) => {
      var m;
      const l = i.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (c) {
        if (i.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
          const y = i.dataset.weaponSlot;
          y && this._rollWeapon(y);
          return;
        }
        (m = c.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), o(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), o(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const a = i.currentTarget, l = a.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c) return;
      let m = Number(a.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor, m = c.items.get(l), y = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const I = c.system.weapons ?? {}, w = (I.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = w ? w.split(/\s*,\s*/).filter((D) => L.includes(D)) : [], O = b.find((D) => {
          var k;
          return (((k = I[D]) == null ? void 0 : k.itemId) ?? "").trim() === l;
        });
        if (O) {
          const D = b.filter((k) => k !== O);
          y["system.weapons.slotOrder"] = D.join(","), y[`system.weapons.${O}.itemId`] = "", y[`system.weapons.${O}.name`] = "", y[`system.weapons.${O}.damage`] = "", y[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      i.preventDefault();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const y = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      y && await this._rollWeaponDamage(y);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var b, O;
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.system.weapons ?? {}, m = (c.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = m ? m.split(/\s*,\s*/).filter((D) => y.includes(D)) : [], w = I.find((D) => {
        var k;
        return (((k = c[D]) == null ? void 0 : k.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (w) return;
        let D = I.find((A) => {
          var j;
          return !((j = c[A]) != null && j.itemId);
        });
        const k = new Set(I);
        if (!D) {
          const A = y.find((j) => !k.has(j));
          if (!A) return;
          D = A, I.push(A);
        }
        const v = this.actor.items.get(l), P = {
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${D}.itemId`]: l,
          [`system.weapons.${D}.name`]: (v == null ? void 0 : v.name) ?? "",
          [`system.weapons.${D}.damage`]: ((b = v == null ? void 0 : v.system) == null ? void 0 : b.damage) ?? "",
          [`system.weapons.${D}.bonus`]: ((O = v == null ? void 0 : v.system) == null ? void 0 : O.bonus) ?? ""
        };
        await this.actor.update(P);
      } else if (w) {
        const k = {
          "system.weapons.slotOrder": I.filter((v) => v !== w).join(",")
        };
        k[`system.weapons.${w}.itemId`] = "", k[`system.weapons.${w}.name`] = "", k[`system.weapons.${w}.damage`] = "", k[`system.weapons.${w}.bonus`] = "", await this.actor.update(k);
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const a = i.currentTarget;
      if (a.disabled) return;
      const l = a.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var k;
      i.preventDefault();
      const a = i.currentTarget, l = a.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const y = (a.dataset.itemId ?? "").trim(), I = (a.dataset.itemName ?? ((k = a.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (a.dataset.itemImg ?? "").trim(), L = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      L && (L.textContent = I);
      let b = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      w ? (b || (b = document.createElement("img"), b.className = "karakter-microchip-slot-thumb", b.alt = "", c == null || c.insertBefore(b, L)), b.src = w, b.style.display = "") : b && b.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const O = y ? this.actor.items.get(y) : null, D = {
        [`system.gear.microchips.${m}.itemId`]: y,
        [`system.gear.microchips.${m}.name`]: (O == null ? void 0 : O.name) ?? ""
      };
      y && (D[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const a = i.currentTarget.dataset.slot;
      if (!a) return;
      const l = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${a}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((i, a) => {
      const l = a.dataset.slot;
      a.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, l)), a.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, l));
    }), t.find(".karakter-ability-slot-single").each((i, a) => {
      const l = a.dataset.slot;
      l && (a.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, l)), a.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, a) => {
      const l = a.dataset.area;
      l && (a.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, l)), a.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var I;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!a || !l) return;
      const c = this.actor.system.abilities ?? {}, y = (Array.isArray((I = c[a]) == null ? void 0 : I.items) ? c[a].items.slice() : []).filter((w) => w !== l);
      await this.actor.update({ [`system.abilities.${a}.items`]: y });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-weapon-unequip", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.slotKey;
      a && await this.actor.update({
        [`system.weapons.${a}.itemId`]: "",
        [`system.weapons.${a}.name`]: "",
        [`system.weapons.${a}.bonus`]: "",
        [`system.weapons.${a}.damage`]: ""
      });
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = Math.max(0, parseInt(a.value, 10));
      Number.isFinite(m) && await c.update({ "system.quantity": m });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var O, D;
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, y = (m.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = y ? y.split(/\s*,\s*/).filter((k) => I.includes(k)) : [], L = w.find((k) => {
        var v;
        return (((v = m[k]) == null ? void 0 : v.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (L) return;
        let k = w.find((A) => {
          var j;
          return !((j = m[A]) != null && j.itemId);
        });
        const v = new Set(w);
        if (!k) {
          const A = I.find((j) => !v.has(j));
          if (!A) return;
          k = A, w.push(A);
        }
        const P = {
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${k}.itemId`]: l,
          [`system.weapons.${k}.name`]: c.name ?? "",
          [`system.weapons.${k}.damage`]: ((O = c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((D = c.system) == null ? void 0 : D.bonus) ?? ""
        };
        await this.actor.update(P);
      } else if (L) {
        const k = w.filter((v) => v !== L);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${L}.itemId`]: "",
          [`system.weapons.${L}.name`]: "",
          [`system.weapons.${L}.damage`]: "",
          [`system.weapons.${L}.bonus`]: ""
        });
      }
    }), t.on("click", ".karakter-armor-remove", async (i) => {
      var c, m;
      i.preventDefault();
      const a = parseInt(i.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(a) || a < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(a, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var l, c, m, y;
      i.preventDefault();
      const a = i.currentTarget.dataset.gearArray;
      if (a === "armor") {
        const I = Array.isArray((c = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : c.armor) ? [...this.actor.system.gear.armor] : [];
        I.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": I });
      } else if (a === "generalItems") {
        const I = Array.isArray((y = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : y.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        I.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": I });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.slotKey;
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var c, m;
      i.preventDefault();
      const a = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(a) || a < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(a, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const u = this, p = (i) => {
      var c, m, y, I;
      if (!i) return;
      const a = u._getFormDataForUpdate(i);
      if (Object.keys(a).length === 0) return;
      const l = ((m = (c = a.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((I = (y = a.system) == null ? void 0 : y.resources) == null ? void 0 : I.hitLocations) != null;
      u.actor.update(a).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, g = (i) => {
      var a, l, c;
      return i && (((l = (a = u.element) == null ? void 0 : a.contains) == null ? void 0 : l.call(a, i)) || u.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      const a = i.target;
      if (!a || !a.form) return;
      const l = a.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const c = a.form;
      g(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var u, p, g;
    const e = {};
    for (const h of r.elements) {
      if (!h.name || h.disabled || h.type === "radio" && !h.checked || h.name.startsWith("system.resources.healthStatus.")) continue;
      let i;
      h.type === "checkbox" ? i = h.checked : h.type === "number" ? i = h.value === "" ? 0 : Number(h.value) : i = h.value ?? "", foundry.utils.setProperty(e, h.name, i);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, n = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const h of o) {
      const i = ((g = s[h]) == null ? void 0 : g.value) ?? 0, a = n[h] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${h}`, x._healthStatusFromRatio(a, i));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var o, u, p, g, h, i, a, l, c, m, y, I, w;
    const t = r.target, s = (o = t == null ? void 0 : t.closest) == null ? void 0 : o.call(t, ".karakter-ability-slot-single"), n = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let L = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!L && typeof e == "object") {
        for (const b of Object.values(e))
          if (typeof b == "string" && b.includes(".") && b.startsWith("Item.")) {
            L = b;
            break;
          }
      }
      if (L) {
        const b = await fromUuid(L);
        if (b && b.documentName === "Item" && b.type === "ability") {
          let O = b.id;
          ((g = b.parent) == null ? void 0 : g.id) !== this.actor.id && (O = ((h = (await this.actor.createEmbeddedDocuments("Item", [b.toObject()]))[0]) == null ? void 0 : h.id) ?? O);
          const D = (((i = b.system) == null ? void 0 : i.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
          if (s) {
            const A = s.dataset.slot;
            if (A) {
              await this.actor.update({
                [`system.abilities.${A}.itemId`]: O,
                [`system.abilities.${A}.name`]: b.name
              });
              return;
            }
          } else if (n) {
            const A = n.dataset.area;
            if (A) {
              const j = Array.isArray((a = k[A]) == null ? void 0 : a.items) ? k[A].items.slice() : Array.isArray(k[A]) ? k[A].slice() : [];
              j.includes(O) || j.push(O), await this.actor.update({ [`system.abilities.${A}.items`]: j });
              return;
            }
          }
          if (D === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": O,
              "system.abilities.faji.name": b.name
            });
            return;
          }
          if (D === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": O,
              "system.abilities.hatter.name": b.name
            });
            return;
          }
          const v = D === "active" ? "active" : "passive", P = Array.isArray((l = k[v]) == null ? void 0 : l.items) ? k[v].items.slice() : Array.isArray(k[v]) ? k[v].slice() : [];
          P.includes(O) || P.push(O), await this.actor.update({ [`system.abilities.${v}.items`]: P });
          return;
        }
      }
    }
    if (e) {
      let L = e.uuid ?? e.documentUuid ?? ((c = e.data) == null ? void 0 : c.uuid) ?? (typeof e == "string" ? e : null);
      if (!L && typeof e == "object") {
        for (const b of Object.values(e))
          if (typeof b == "string" && b.includes(".") && b.startsWith("Item.")) {
            L = b;
            break;
          }
      }
      if (L) {
        const b = await fromUuid(L);
        if (b && b.documentName === "Item" && b.type === "Fegyver") {
          const O = this.actor;
          let D = b.id;
          ((m = b.parent) == null ? void 0 : m.id) !== O.id && (D = ((y = (await O.createEmbeddedDocuments("Item", [b.toObject()]))[0]) == null ? void 0 : y.id) ?? D);
          const k = O.system.weapons ?? {}, v = (k.slotOrder ?? "").trim(), P = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = v ? v.split(/\s*,\s*/).filter((H) => P.includes(H)) : [];
          if (A.find((H) => {
            var R;
            return (((R = k[H]) == null ? void 0 : R.itemId) ?? "").trim() === D;
          })) return;
          let W = A.find((H) => {
            var R;
            return !((R = k[H]) != null && R.itemId);
          });
          if (!W) {
            const H = new Set(A), R = P.find((ie) => !H.has(ie));
            if (!R) return;
            W = R, A.push(R);
          }
          const ce = {
            "system.weapons.slotOrder": A.join(","),
            [`system.weapons.${W}.itemId`]: D,
            [`system.weapons.${W}.name`]: b.name ?? "",
            [`system.weapons.${W}.damage`]: ((I = b.system) == null ? void 0 : I.damage) ?? "",
            [`system.weapons.${W}.bonus`]: ((w = b.system) == null ? void 0 : w.bonus) ?? ""
          };
          await O.update(ce);
          return;
        }
      }
    }
    return super._onDropItem(r, e);
  }
  _onWeaponSlotDragOver(r, e) {
    var n, o, u;
    const t = ((n = r.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = r.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(r, e) {
    var p, g, h, i, a, l, c;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = r.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((h = r.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const n = await fromUuid(s.uuid);
    if (!n || n.type !== "Fegyver") return;
    let o = n.id;
    ((i = n.parent) == null ? void 0 : i.id) !== this.actor.id && (o = ((a = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : a.id) ?? o);
    const u = {
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((l = n.system) == null ? void 0 : l.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((c = n.system) == null ? void 0 : c.bonus) ?? ""
    };
    await this.actor.update(u);
  }
  _onInventoryDragHandleStart(r, e, t) {
    t && (r.dataTransfer && (r.dataTransfer.setData("text/plain", e), r.dataTransfer.effectAllowed = "move", typeof r.dataTransfer.setDragImage == "function" && r.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(r, e) {
    var s;
    const t = this._draggingInventoryItemId;
    !t || t === e || (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "move"), (s = r.currentTarget) == null || s.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(r, e) {
    var t;
    (t = r.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(r, e) {
    var g, h;
    r.preventDefault(), (g = r.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((h = r.dataTransfer) == null ? void 0 : h.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((i, a) => {
      const l = typeof i.sort == "number" ? i.sort : 0, c = typeof a.sort == "number" ? a.sort : 0;
      return l - c;
    }).map((i) => i.id), o = n.indexOf(t), u = n.indexOf(e);
    if (o === -1 || u === -1) return;
    n.splice(o, 1), n.splice(u, 0, t);
    const p = n.map((i, a) => ({
      _id: i,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(r) {
    var s, n, o;
    const e = ((s = r.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (r.preventDefault(), (o = r.currentTarget) == null || o.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  async _postAbilityToChat(r) {
    var h, i, a;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((h = e.system) == null ? void 0 : h.kind) ?? "passive", s = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, n = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = n ? `<p>${n}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: g,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(r) {
    var s, n;
    const e = ((s = r.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    if (!e) return null;
    let t;
    try {
      t = typeof e == "string" ? JSON.parse(e) : e;
    } catch {
      return null;
    }
    return !t || t.type !== "Item" || !t.uuid ? null : t;
  }
  _onAbilitySingleDragOver(r, e) {
    var s;
    this._parseAbilityDrop(r) && (r.preventDefault(), (s = r.currentTarget) == null || s.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(r, e) {
    var o, u, p;
    r.preventDefault(), (o = r.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "ability") return;
    let n = s.id;
    ((u = s.parent) == null ? void 0 : u.id) !== this.actor.id && (n = ((p = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : p.id) ?? n), await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(r, e) {
    var s;
    this._parseAbilityDrop(r) && (r.preventDefault(), (s = r.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(r, e) {
    var p, g, h, i;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "ability") return;
    let n = s.id;
    ((g = s.parent) == null ? void 0 : g.id) !== this.actor.id && (n = ((h = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : h.id) ?? n);
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((i = o[e]) == null ? void 0 : i.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(n) || u.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(r, e) {
    var n, o, u;
    const t = ((n = r.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = r.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(r, e) {
    var u, p, g, h, i;
    r.preventDefault(), (u = r.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = r.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const n = await fromUuid(s.uuid);
    if (!n || n.type !== "microchip") return;
    let o = n.id;
    ((h = n.parent) == null ? void 0 : h.id) !== this.actor.id && (o = ((i = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : i.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(r, e) {
    const s = (this.actor.system.skills ?? {})[r] ?? 0;
    let n = Number(s) || 0;
    const o = this._getSkillHealthStatus(r);
    o === 1 ? n -= 6 : o === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, g = new Roll(p);
    await g.evaluate({ async: !0 });
    const h = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: h } },
      rollMode: i
    });
  }
  async _rollMorale() {
    var n;
    const r = Number(((n = this.actor.system.resources) == null ? void 0 : n.morale) ?? 0) || 0;
    if (r <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const s = Math.max(0, r - 1);
    await this.actor.update({ "system.resources.morale": s });
  }
  async _rollWeapon(r) {
    var w;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, s = this.actor.system.skills ?? {}, n = this.actor.items.filter((L) => L.type === "Fegyver");
    let o = null;
    t.itemId && (o = n.find((L) => L.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, h = (((w = o == null ? void 0 : o.system) == null ? void 0 : w.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", i = Number(s[h] || 0) || 0, a = p + i, c = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, m = new Roll(c);
    await m.evaluate({ async: !0 });
    const y = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y } },
      rollMode: I
    });
  }
  async _rollWeaponDamage(r) {
    var o;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "Fegyver") return;
    const t = (((o = e.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!t) return;
    const s = new Roll(t);
    await s.evaluate({ async: !0 });
    const n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return s.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: n
    });
  }
};
U(x, "PARTS", foundry.utils.mergeObject(M(x, x, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), U(x, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(x, x, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ue = M(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Be = M(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : Be.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((ze = (Ge = M(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) == null ? void 0 : ze.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
U(x, "BODY_PART_BY_SKILL", {
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
let fe = x;
var We;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, s = (n) => {
      var o, u, p;
      return n && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(o) && t(o);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    const e = {};
    for (const t of r.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(r) {
    const e = await super._prepareContext(r) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), e.system = t, e;
  }
};
U(B, "PARTS", foundry.utils.mergeObject(M(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), U(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((We = M(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 })
}));
let ye = B;
var Ye;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, s = (n) => {
      var o, u, p;
      return n && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(o) && t(o);
    }, e._votvInput = (n) => {
      var u, p, g;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    const e = {};
    for (const t of r.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
U(G, "PARTS", foundry.utils.mergeObject(M(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), U(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ye = M(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
var Je;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, s = (n) => {
      var o, u, p;
      return n && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(o) && t(o);
    }, e._votvInput = (n) => {
      var p;
      const o = n.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const u = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
      s(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    const e = {};
    for (const t of r.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", !(t.name === "name" && typeof s == "string" && s.trim() === "") && foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
U(z, "PARTS", foundry.utils.mergeObject(M(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = M(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let he = z;
const dt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, s, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (r = CONFIG.Actor).dataModels ?? (r.dataModels = {}), CONFIG.Actor.dataModels.Karakter = at, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ot, CONFIG.Item.dataModels.microchip = lt, CONFIG.Item.dataModels.ability = ut, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", fe, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const E = 500;
  Hooks.on("updateActor", (o, u, p, g) => {
    var L, b, O, D, k;
    const h = o == null ? void 0 : o.id;
    if (!h) return;
    const i = document.activeElement, a = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), l = [], c = (L = game.actors) == null ? void 0 : L.get(h);
    c != null && c.apps && l.push(...Array.from(c.apps));
    const m = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const v of m)
      ((b = v.document) == null ? void 0 : b.id) !== h || ((O = v.document) == null ? void 0 : O.documentName) !== "Actor" || ((D = v.constructor) == null ? void 0 : D.name) !== "VoidKarakterSheet" || l.includes(v) || l.push(v);
    if (a && l.some((v) => {
      const P = (v == null ? void 0 : v.form) ?? (v == null ? void 0 : v.element);
      return P && P.contains(i);
    })) return;
    const I = (k = game.votv) == null ? void 0 : k._lastKarakterSheetBlurSave, w = I && Date.now() - I.at < E ? I.appId : null;
    setTimeout(() => {
      for (const v of l)
        !(v != null && v.rendered) || typeof v.render != "function" || v.id !== w && v.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var s, n, o, u, p, g;
      if (!((n = (s = E.target) == null ? void 0 : s.closest) != null && n.call(s, "#actors"))) return;
      const r = (u = (o = E.target) == null ? void 0 : o.closest) == null ? void 0 : u.call(o, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, r, e) => {
  var o, u;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, s = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = s ? (u = game.actors) == null ? void 0 : u.get(s) : null;
  !n || n.type !== "Karakter" || E.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (E, r) => {
  var e;
  (e = r == null ? void 0 : r.background) != null && e.src || E.updateSource({
    width: 1920,
    height: 1080,
    "background.src": dt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (E, r, e) => {
  var n, o, u;
  const t = (o = (n = E.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const s = (u = r == null ? void 0 : r.querySelector) == null ? void 0 : u.call(r, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  fe as V
};
//# sourceMappingURL=vacuum-of-the-void-DZDXrqrC.mjs.map
