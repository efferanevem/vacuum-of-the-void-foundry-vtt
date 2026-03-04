var et = Object.defineProperty;
var tt = Object.getPrototypeOf;
var st = Reflect.get;
var rt = (E, s, e) => s in E ? et(E, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[s] = e;
var U = (E, s, e) => rt(E, typeof s != "symbol" ? s + "" : s, e);
var M = (E, s, e) => st(tt(E), e, s);
const { HTMLField: it, NumberField: S, SchemaField: _, StringField: g, BooleanField: R, ArrayField: le } = foundry.data.fields;
class at extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new _({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new S({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
      }),
      resources: new _({
        health: new _({
          value: new S({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new S({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new _({
          head: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new S({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
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
        slotOrder: new g({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new _({
          name: new g({ required: !1, blank: !0, initial: "" }),
          bonus: new g({ required: !1, blank: !0, initial: "" }),
          damage: new g({ required: !1, blank: !0, initial: "" }),
          itemId: new g({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new _({
        microchips: new _({
          slot1: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          })
        }),
        equipment: new g({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new g({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new g({ required: !1, blank: !0, initial: "" }),
            level: new g({ required: !1, blank: !0, initial: "" }),
            other: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            quantity: new S({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new _({
        faji: new _({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new _({
          itemId: new g({ required: !1, blank: !0, initial: "" }),
          name: new g({ required: !1, blank: !0, initial: "" })
        }),
        passive: new _({
          items: new le(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new le(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new _({
        biography: new it({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: de, SchemaField: nt } = foundry.data.fields;
class ot extends at {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new nt({
        body: new de({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new de({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new de({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: lt, NumberField: yt, StringField: Z } = foundry.data.fields;
class ct extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new lt({ required: !1, initial: !1 }),
      type: new Z({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Z({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Z({ required: !1, blank: !0, initial: "" }),
      damage: new Z({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Z({ required: !1, blank: !0, initial: "" }),
      special: new Z({ required: !1, blank: !0, initial: "" }),
      quantity: new Z({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { NumberField: me, StringField: He } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new He({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new He({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new me({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new me({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new me({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: dt, StringField: Ue } = foundry.data.fields;
class mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Ue({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Ue({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new dt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Be, ze, Ge, We;
const x = class x extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
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
  _getScrollContainers(s) {
    var r, a, l, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, l = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = l.contains(m), h = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && h && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const k = this.element, b = this.form ?? this.element, v = u.scrollState, i = u.focus, o = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", c = () => {
      var m, f;
      if (this._applyScrollState(k, v), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const h = ((m = b.querySelector) == null ? void 0 : m.call(b, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(i.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = i.selectionStart ?? 0, h.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(k, v);
    };
    return (o || i) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const a = Math.floor(r / 3), l = Math.floor(2 * r / 3);
    return t <= a ? 1 : t <= l ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, v, i, o, c, n, m, f, h;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((i = (v = this.actor) == null ? void 0 : v.system) == null ? void 0 : i.resources) ?? {}, a = ((c = (o = r.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : c.value) ?? 0, l = ((n = r.currentHealth) == null ? void 0 : n.legs) ?? 0, u = x._healthStatusFromRatio(l, a), p = Number(((h = (f = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : f.combat) == null ? void 0 : h.givenSpeed) ?? 0) || 0;
    let k;
    u === 0 ? k = 0 : u === 1 ? k = -6 : u === 2 ? k = -3 : k = p, t.textContent = String(k);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, u, p, k;
    const e = x.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, r = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((k = t.currentHealth) == null ? void 0 : k[e]) ?? 0;
    return x._healthStatusFromRatio(a, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, k, b;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, a = ((k = (p = r.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : k.value) ?? 0, l = ((b = r.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return x._healthStatusFromRatio(l, a);
  }
  async _prepareContext(s) {
    var qe, Te, De, Oe, _e, Le, Ae, Fe, Ne, $e, Ee, Ce, xe, je, Pe, Ke, Me;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Te = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : Te.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, a = r.hitLocations ?? {}, l = r.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const T = ((Oe = a[d]) == null ? void 0 : Oe.value) ?? 0, D = l[d] ?? 0;
      e.computedHealthStatus[d] = x._healthStatusFromRatio(D, T);
    }
    const p = (Number(l.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((d) => (Number(l[d]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, i = Number(((Le = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : Le.givenSpeed) ?? 0) || 0;
    let o;
    v === 0 ? o = 0 : v === 1 ? o = -6 : v === 2 ? o = -3 : o = i, e.effectiveGivenSpeed = o, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: o } },
      { inplace: !1 }
    );
    const c = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, T] of Object.entries(c)) {
      const D = e.computedHealthStatus[T];
      e.skillHealthStatus[d] = D, e.skillDisabled[d] = D === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const n = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (n.slotOrder ?? "").trim(), h = f ? f.split(/\s*,\s*/).filter((d) => m.includes(d)) : [], y = (Ae = this.actor.system.gear) == null ? void 0 : Ae.microchips, I = y && typeof y == "object" && !Array.isArray(y) ? y : {}, N = (((Fe = I.slot1) == null ? void 0 : Fe.itemId) ?? "").trim(), q = (((Ne = I.slot2) == null ? void 0 : Ne.itemId) ?? "").trim(), O = ((($e = I.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), A = this.actor.items.contents.filter((d) => d.type !== "Képesség" && d.type !== "ability").slice().sort((d, T) => {
      const D = typeof d.sort == "number" ? d.sort : 0, L = typeof T.sort == "number" ? T.sort : 0;
      return D - L;
    }).map((d) => {
      var te, ne, oe, se, re, ie;
      const T = d.type === "Fegyver", D = d.type === "microchip";
      let L = 0, F = "", j = null;
      for (let X = 0; X < h.length; X++) {
        const ee = h[X];
        if ((((te = n[ee]) == null ? void 0 : te.itemId) ?? "") === d.id) {
          L = X + 1, F = ((ne = n[ee]) == null ? void 0 : ne.bonus) ?? "", j = ee;
          break;
        }
      }
      let K = null;
      D && (N === d.id ? K = "slot1" : q === d.id ? K = "slot2" : O === d.id && (K = "slot3"));
      const V = T && ((oe = d.system) != null && oe.damage) ? d.system.damage : "", Q = T && typeof ((se = d.system) == null ? void 0 : se.range) == "string" ? (d.system.range || "").trim() : "", Y = j ? Number((re = n[j]) == null ? void 0 : re.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: T,
        slotAssignment: L,
        slotBonus: F,
        slotKey: j,
        microchipSlotKey: K,
        isEquipped: !!(j || K),
        damage: V,
        rangeStr: Q,
        slotBonusNum: Y,
        quantity: Number(((ie = d.system) == null ? void 0 : ie.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = A;
    const C = (((Ee = this.actor.items) == null ? void 0 : Ee.contents) ?? []).filter((d) => d.type === "Fegyver"), P = C.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = P;
    const J = "— Nincs fegyver —", H = h.filter((d) => {
      const D = ((n[d] ?? {}).itemId ?? "").trim();
      return D ? !!C.find((F) => F.id === D) : !1;
    });
    e.weaponSlots = H.map((d, T) => {
      const D = n[d] ?? {}, L = (D.itemId ?? "").trim(), F = P.find((j) => j.id === L);
      return {
        slotKey: d,
        itemId: L,
        slotNum: T + 1,
        displayName: (F == null ? void 0 : F.name) || D.name || J,
        img: (F == null ? void 0 : F.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const W = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Xe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = C.map((d) => {
      var X, ee, Re;
      const T = d.id;
      let D = null, L = {};
      for (const ue of h)
        if ((((X = n[ue]) == null ? void 0 : X.itemId) ?? "").trim() === T) {
          D = ue, L = n[ue] ?? {};
          break;
        }
      const F = !!D, j = ((ee = d.system) == null ? void 0 : ee.equipped) !== void 0 && ((Re = d.system) == null ? void 0 : Re.equipped) !== null ? !!d.system.equipped : F, K = (d == null ? void 0 : d.system) ?? {}, V = typeof K.range == "string" ? (K.range || "").trim() : "", Q = K.type ?? "", Y = (W[Q] ?? Q) || "—", te = K.size ?? "", ne = (Xe[te] ?? te) || "", oe = [Y, ne].filter(Boolean).join(", ") || Y || "—", se = Y === "Lövedékes", re = K.quantity, ie = re != null ? String(re).trim() : "1";
      return {
        slotKey: D ?? "",
        itemId: T,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? J,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(L.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: L.damage ?? K.damage ?? "",
        rangeStr: V || "—",
        typeLabel: Y,
        typeAndSize: oe,
        quantity: ie,
        quantityDisplay: se ? ie : "—",
        isProjectile: se,
        equipped: j,
        special: (K.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((Pe = (je = this.actor.system) == null ? void 0 : je.gear) == null ? void 0 : Pe.generalItems) ? this.actor.system.gear.generalItems : [];
    const he = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((d) => d.type === "microchip"), ae = he.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var V, Q;
      const T = `slot${d}`, D = I[T] ?? {}, L = (D.itemId ?? "").trim(), F = he.find((Y) => Y.id === L), j = ((V = F == null ? void 0 : F.system) == null ? void 0 : V.abilityType) ?? "", K = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—";
      return {
        slotKey: T,
        itemId: L,
        name: (F == null ? void 0 : F.name) ?? D.name ?? we,
        typeLabel: K,
        description: (((Q = F == null ? void 0 : F.system) == null ? void 0 : Q.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", ce = (d) => {
      const T = [];
      return d !== 1 && T.push(N), d !== 2 && T.push(q), d !== 3 && T.push(O), T;
    };
    e.microchipItemsSlot1 = ae.filter((d) => !ce(1).includes(d.id)), e.microchipItemsSlot2 = ae.filter((d) => !ce(2).includes(d.id)), e.microchipItemsSlot3 = ae.filter((d) => !ce(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const T = `slot${d}`, D = I[T] ?? {}, L = (D.itemId ?? "").trim(), F = ae.find((j) => j.id === L);
      e[`microchip${d}ItemId`] = L, e[`microchip${d}DisplayName`] = (F == null ? void 0 : F.name) || D.name || we, e[`microchip${d}Img`] = (F == null ? void 0 : F.img) || "", e[`microchip${d}Active`] = D.active === !0;
    });
    const be = this.actor.system.abilities ?? {}, Ze = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).map((d) => {
      var T, D, L;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((T = d.system) == null ? void 0 : T.kind) ?? "passive",
        description: ((D = d.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((L = d.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), ke = new Map(Ze.map((d) => [d.id, d])), Ve = "— Nincs képesség —", ve = (d) => {
      const T = be[d] ?? {}, D = (T.itemId ?? "").trim(), L = D ? ke.get(D) : null, F = (L == null ? void 0 : L.description) ?? "", j = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: D,
        displayName: (L == null ? void 0 : L.name) || T.name || Ve,
        img: (L == null ? void 0 : L.img) || "",
        description: F,
        kp: j
      };
    };
    e.abilityFajiSlot = ve("faji"), e.abilityHatterSlot = ve("hatter");
    const Ie = (d) => {
      const T = be[d];
      return T ? Array.isArray(T == null ? void 0 : T.items) ? T.items : Array.isArray(T) ? T : [] : [];
    }, Se = (d) => d.map((T) => {
      const D = ke.get(T);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Se(Ie("passive")), e.abilityActiveList = Se(Ie("active")), e;
  }
  _attachFrameListeners(s) {
    var b, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-XczQoaja.mjs");
      n(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, m, f;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let c = (o.dataset.itemId ?? "").trim();
      if (!c) {
        const h = (o.dataset.slot ?? "").trim();
        if (!h) return;
        c = (((((m = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : m.weapons) ?? {})[h] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((f = o.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (i) => {
      var n;
      const o = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const c = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const a = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    a && r({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var f;
      i.preventDefault();
      const o = i.currentTarget, c = o.dataset.skill, n = ((f = o.textContent) == null ? void 0 : f.trim()) || c, { openRollSheetForSkill: m } = await import("./roll-sheet-XczQoaja.mjs");
      m(this.actor, c, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const l = (i, o) => {
      var m;
      const c = i.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const f = i.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = n.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), l(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, c = o.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n) return;
      let m = Number(o.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await n.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor, m = n.items.get(c), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = n.system.weapons ?? {}, y = (h.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = y ? y.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = N.find((O) => {
          var w;
          return (((w = h[O]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (q) {
          const O = N.filter((w) => w !== q);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${q}.itemId`] = "", f[`system.weapons.${q}.name`] = "", f[`system.weapons.${q}.damage`] = "", f[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, O;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], I = y.find((w) => {
        var A;
        return (((A = m[w]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let w = y.find((C) => {
          var P;
          return !((P = m[C]) != null && P.itemId);
        });
        const A = new Set(y);
        if (!w) {
          const C = h.find((P) => !A.has(P));
          if (!C) return;
          w = C, y.push(C);
        }
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${w}.damage`]: ((q = n == null ? void 0 : n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = n == null ? void 0 : n.system) == null ? void 0 : O.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (I) {
        const w = y.filter((A) => A !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".karakter-microchip-slot-select-wrap"), n = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const o = i.currentTarget, c = o.closest(".karakter-microchip-slot-select-wrap"), n = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), m = n == null ? void 0 : n.dataset.slot;
      if (!m) return;
      const f = (o.dataset.itemId ?? "").trim(), h = (o.dataset.itemName ?? ((w = o.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", y = (o.dataset.itemImg ?? "").trim(), I = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = h);
      let N = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      y ? (N || (N = document.createElement("img"), N.className = "karakter-microchip-slot-thumb", N.alt = "", n == null || n.insertBefore(N, I)), N.src = y, N.style.display = "") : N && N.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const q = f ? this.actor.items.get(f) : null, O = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      f && (O[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const c = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${o}.active`]: c });
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const c = o.dataset.slot;
      o.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, c)), o.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, c));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const c = o.dataset.slot;
      c && (o.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, c)), o.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const c = o.dataset.area;
      c && (o.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, c)), o.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var h;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!o || !c) return;
      const n = this.actor.system.abilities ?? {}, f = (Array.isArray((h = n[o]) == null ? void 0 : h.items) ? n[o].items.slice() : []).filter((y) => y !== c);
      await this.actor.update({ [`system.abilities.${o}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      (m = n == null ? void 0 : n.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const m = (o.value ?? "").trim();
      await n.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, h = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        h && this._resizeWeaponQuantityInput(h);
      }, 80);
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, O;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], I = y.find((w) => {
        var A;
        return (((A = m[w]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let w = y.find((C) => {
          var P;
          return !((P = m[C]) != null && P.itemId);
        });
        const A = new Set(y);
        if (!w) {
          const C = h.find((P) => !A.has(P));
          if (!C) return;
          w = C, y.push(C);
        }
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: n.name ?? "",
          [`system.weapons.${w}.damage`]: ((q = n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = n.system) == null ? void 0 : O.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (I) {
        const w = y.filter((A) => A !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor, m = n.items.get(c), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = n.system.weapons ?? {}, y = (h.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = y ? y.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = N.find((O) => {
          var w;
          return (((w = h[O]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (q) {
          const O = N.filter((w) => w !== q);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${q}.itemId`] = "", f[`system.weapons.${q}.name`] = "", f[`system.weapons.${q}.damage`] = "", f[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-remove", async (i) => {
      var n, m;
      i.preventDefault();
      const o = parseInt(i.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const c = Array.isArray((m = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      c.splice(o, 1), await this.actor.update({ "system.gear.armor": c });
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var c, n, m, f;
      i.preventDefault();
      const o = i.currentTarget.dataset.gearArray;
      if (o === "armor") {
        const h = Array.isArray((n = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : n.armor) ? [...this.actor.system.gear.armor] : [];
        h.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": h });
      } else if (o === "generalItems") {
        const h = Array.isArray((f = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : f.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        h.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": h });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.slotKey;
      o && await this.actor.update({
        [`system.gear.microchips.${o}.itemId`]: "",
        [`system.gear.microchips.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var n, m;
      i.preventDefault();
      const o = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const c = Array.isArray((m = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      c.splice(o, 1), await this.actor.update({ "system.gear.generalItems": c });
    });
    const u = this, p = (i) => {
      var n, m, f, h;
      if (!i) return;
      const o = u._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((m = (n = o.system) == null ? void 0 : n.resources) == null ? void 0 : m.currentHealth) != null || ((h = (f = o.system) == null ? void 0 : f.resources) == null ? void 0 : h.hitLocations) != null;
      u.actor.update(o).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((y) => console.warn("VoidKarakterSheet save failed", y));
    }, k = (i) => {
      var o, c, n;
      return i && (((c = (o = u.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || u.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const n = o.form;
      k(n) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, k;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), r = t.hitLocations ?? {}, a = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const b of l) {
      const v = ((k = r[b]) == null ? void 0 : k.value) ?? 0, i = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, x._healthStatusFromRatio(i, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var l, u, p, k, b, v, i, o, c, n, m, f;
    const t = s.target, r = (l = t == null ? void 0 : t.closest) == null ? void 0 : l.call(t, ".karakter-ability-slot-single"), a = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!h && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            h = y;
            break;
          }
      }
      if (h) {
        const y = await fromUuid(h);
        if (y && y.documentName === "Item" && (y.type === "Képesség" || y.type === "ability")) {
          let I = y.id;
          if (((k = y.parent) == null ? void 0 : k.id) !== this.actor.id) {
            const A = foundry.utils.mergeObject(y.toObject(), { type: "Képesség" });
            I = ((b = (await this.actor.createEmbeddedDocuments("Item", [A]))[0]) == null ? void 0 : b.id) ?? I;
          }
          const N = (((v = y.system) == null ? void 0 : v.kind) ?? "passive").toString(), q = this.actor.system.abilities ?? {};
          if (r) {
            const A = r.dataset.slot;
            if (A) {
              await this.actor.update({
                [`system.abilities.${A}.itemId`]: I,
                [`system.abilities.${A}.name`]: y.name
              });
              return;
            }
          } else if (a) {
            const A = a.dataset.area;
            if (A) {
              const C = Array.isArray((i = q[A]) == null ? void 0 : i.items) ? q[A].items.slice() : Array.isArray(q[A]) ? q[A].slice() : [];
              C.includes(I) || C.push(I), await this.actor.update({ [`system.abilities.${A}.items`]: C });
              return;
            }
          }
          if (N === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": I,
              "system.abilities.faji.name": y.name
            });
            return;
          }
          if (N === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": I,
              "system.abilities.hatter.name": y.name
            });
            return;
          }
          const O = N === "active" ? "active" : "passive", w = Array.isArray((o = q[O]) == null ? void 0 : o.items) ? q[O].items.slice() : Array.isArray(q[O]) ? q[O].slice() : [];
          w.includes(I) || w.push(I), await this.actor.update({ [`system.abilities.${O}.items`]: w });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((c = e.data) == null ? void 0 : c.uuid) ?? (typeof e == "string" ? e : null);
      if (!h && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            h = y;
            break;
          }
      }
      if (h) {
        const y = await fromUuid(h);
        if (y && y.documentName === "Item" && y.type === "Fegyver") {
          const I = this.actor, N = ((n = y.parent) == null ? void 0 : n.id) !== I.id;
          let q = y.id;
          if (N) {
            const O = foundry.utils.mergeObject(y.toObject(), { system: { ...y.toObject().system ?? {}, equipped: !1 } });
            q = ((m = (await I.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : m.id) ?? q;
          }
          if (N) {
            const O = ((f = I.system) == null ? void 0 : f.weapons) ?? {}, w = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = w ? w.split(/\s*,\s*/).filter((J) => A.includes(J)) : [], P = C.filter((J) => {
              var H;
              return (((H = O[J]) == null ? void 0 : H.itemId) ?? "").trim() === q;
            });
            if (P.length > 0) {
              const H = {
                "system.weapons.slotOrder": C.filter((W) => !P.includes(W)).join(",")
              };
              for (const W of P)
                H[`system.weapons.${W}.itemId`] = "", H[`system.weapons.${W}.name`] = "", H[`system.weapons.${W}.damage`] = "", H[`system.weapons.${W}.bonus`] = "";
              await I.update(H);
            }
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var a, l, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, k, b, v, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((k = s.dataTransfer) == null ? void 0 : k.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const a = await fromUuid(r.uuid);
    if (!a || a.type !== "Fegyver") return;
    if (((b = a.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [o]);
      return;
    }
    const l = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((v = a.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = a.system) == null ? void 0 : i.bonus) ?? ""
    }), await a.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (r = s.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(s, e) {
    var t;
    (t = s.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(s, e) {
    var k, b;
    s.preventDefault(), (k = s.currentTarget) == null || k.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = s.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((v, i) => {
      const o = typeof v.sort == "number" ? v.sort : 0, c = typeof i.sort == "number" ? i.sort : 0;
      return o - c;
    }).map((v) => v.id), l = a.indexOf(t), u = a.indexOf(e);
    if (l === -1 || u === -1) return;
    a.splice(l, 1), a.splice(u, 0, t);
    const p = a.map((v, i) => ({
      _id: v,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var r, a, l;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(s) {
    var e;
    (e = s.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(s) {
    var e;
    (e = s.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  /** Lőszer mező: mindig fit-content (CSS field-sizing + JS fallback az input klónjával). */
  _resizeWeaponQuantityInput(s) {
    if (!s || s.type !== "text") return;
    const e = 20;
    if (!s.value || String(s.value).trim() === "") {
      s.style.width = "";
      return;
    }
    const t = s.cloneNode(!1);
    t.value = s.value, t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "0", t.style.width = "1px", t.style.visibility = "hidden", t.removeAttribute("data-item-id"), document.body.appendChild(t);
    const r = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, r)}px`;
  }
  async _postAbilityToChat(s) {
    var b, v, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Képesség" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", r = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, a = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", p = a ? `<p>${a}</p>` : "", k = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: k,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var r, a;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    if (!e) return null;
    let t;
    try {
      t = typeof e == "string" ? JSON.parse(e) : e;
    } catch {
      return null;
    }
    return !t || t.type !== "Item" || !t.uuid ? null : t;
  }
  _onAbilitySingleDragOver(s, e) {
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var l, u, p;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Képesség" && r.type !== "ability") return;
    let a = r.id;
    ((u = r.parent) == null ? void 0 : u.id) !== this.actor.id && (a = ((p = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : p.id) ?? a), await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, k, b, v;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Képesség" && r.type !== "ability") return;
    let a = r.id;
    ((k = r.parent) == null ? void 0 : k.id) !== this.actor.id && (a = ((b = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : b.id) ?? a);
    const l = this.actor.system.abilities ?? {}, u = Array.isArray((v = l[e]) == null ? void 0 : v.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, l, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, k, b, v;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((k = s.dataTransfer) == null ? void 0 : k.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const a = await fromUuid(r.uuid);
    if (!a || a.type !== "microchip") return;
    let l = a.id;
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (l = ((v = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : v.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const r = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(r) || 0;
    const l = this._getSkillHealthStatus(s);
    l === 1 ? a -= 6 : l === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, k = new Roll(p);
    await k.evaluate({ async: !0 });
    const b = k.total >= 18 ? "critical" : k.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return k.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var a;
    const s = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
    if (s <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const r = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollWeapon(s) {
    var h;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, r = this.actor.system.skills ?? {}, a = this.actor.items.filter((y) => y.type === "Fegyver");
    let l = null;
    t.itemId && (l = a.find((y) => y.id === t.itemId) ?? null);
    const u = l && l.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((h = l == null ? void 0 : l.system) == null ? void 0 : h.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(r[b] || 0) || 0, i = p + v, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(c);
    await n.evaluate({ async: !0 });
    const m = n.total >= 18 ? "critical" : n.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, k, b, v, i, o, c, n, m, f;
    const t = this.actor;
    if (!t) return;
    let r = ((k = (p = t.items).get) == null ? void 0 : k.call(p, s)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (h) => h.id === s));
    if (!r || r.type !== "Fegyver") return;
    let a = (((i = r.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!a && e && (a = (((((o = t.system) == null ? void 0 : o.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((m = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : m.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(a);
    await l.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
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
  form: foundry.utils.mergeObject(((Be = M(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : Be.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((ze = M(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : ze.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((We = (Ge = M(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) == null ? void 0 : We.contentClasses) ?? [],
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
let pe = x;
var Ye;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, r = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, k;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((k = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : k.call(p, "form"));
      r(l) && t(l);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
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
  form: foundry.utils.mergeObject(((Ye = M(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !1 })
}));
let fe = B;
var Je;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, r = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, k;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((k = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : k.call(p, "form"));
      r(l) && t(l);
    }, e._votvInput = (a) => {
      var u, p, k;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((k = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : k.call(p, "form"));
      r(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(l), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
U(z, "PARTS", foundry.utils.mergeObject(M(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), U(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = M(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let ye = z;
var Qe;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const l = e._getFormDataForUpdate(a);
      Object.keys(l).length !== 0 && e.document.update(l).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, r = (a) => {
      var l, u, p;
      return a && (((u = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, k;
      const l = ((u = a.target) == null ? void 0 : u.form) ?? ((k = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : k.call(p, "form"));
      r(l) && t(l);
    }, e._votvInput = (a) => {
      var p;
      const l = a.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const u = (l == null ? void 0 : l.form) ?? ((p = l == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      r(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
U(G, "PARTS", foundry.utils.mergeObject(M(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Képesség"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qe = M(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
const pt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, r, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ot, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ct, CONFIG.Item.dataModels.microchip = ut, CONFIG.Item.dataModels.Képesség = mt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Képesség = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pe, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["Képesség"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const E = 500;
  Hooks.on("updateActor", (l, u, p, k) => {
    var y, I, N, q, O;
    const b = l == null ? void 0 : l.id;
    if (!b) return;
    const v = document.activeElement, i = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), o = [], c = (y = game.actors) == null ? void 0 : y.get(b);
    c != null && c.apps && o.push(...Array.from(c.apps));
    const n = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of n)
      ((I = w.document) == null ? void 0 : I.id) !== b || ((N = w.document) == null ? void 0 : N.documentName) !== "Actor" || ((q = w.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || o.includes(w) || o.push(w);
    if (i && o.some((w) => {
      const A = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return A && A.contains(v);
    })) return;
    const f = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, h = f && Date.now() - f.at < E ? f.appId : null;
    setTimeout(() => {
      for (const w of o)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== h && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var r, a, l, u, p, k;
      if (!((a = (r = E.target) == null ? void 0 : r.closest) != null && a.call(r, "#actors"))) return;
      const s = (u = (l = E.target) == null ? void 0 : l.closest) == null ? void 0 : u.call(l, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((k = game.actors) != null && k.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, s, e) => {
  var l, u;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, r = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = r ? (u = game.actors) == null ? void 0 : u.get(r) : null;
  !a || a.type !== "Karakter" || E.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (E, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || E.updateSource({
    width: 1920,
    height: 1080,
    "background.src": pt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (E, s, e) => {
  var a, l, u;
  const t = (l = (a = E.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : l.resultType;
  if (!t) return;
  const r = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  r && r.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void-3By2c6GQ.mjs.map
