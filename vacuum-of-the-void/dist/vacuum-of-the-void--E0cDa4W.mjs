var et = Object.defineProperty;
var tt = Object.getPrototypeOf;
var rt = Reflect.get;
var st = (E, r, e) => r in E ? et(E, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[r] = e;
var U = (E, r, e) => st(E, typeof r != "symbol" ? r + "" : r, e);
var K = (E, r, e) => rt(tt(E), e, r);
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
const C = class C extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(r) {
    var i, a, c, u;
    if (!r) return { form: null, windowContent: null };
    const e = ((i = r.querySelector) == null ? void 0 : i.call(r, "form.votv.karakter-sheet")) ?? ((a = r.querySelector) == null ? void 0 : a.call(r, "form.votv")) ?? null, t = ((c = r.querySelector) == null ? void 0 : c.call(r, ".votv-scroll")) ?? ((u = r.querySelector) == null ? void 0 : u.call(r, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(r) {
    const { form: e, windowContent: t } = this._getScrollContainers(r), i = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (i.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (i.windowScrollTop = t.scrollTop), i;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(r, e) {
    if (!r || !e) return;
    const { form: t, windowContent: i } = this._getScrollContainers(r);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && i && (i.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(r = !1, e = {}) {
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, c = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = c.contains(m), w = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && w && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const b = this.element, k = this.form ?? this.element, v = u.scrollState, s = u.focus, n = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", l = () => {
      var m, f;
      if (this._applyScrollState(b, v), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const w = ((m = k.querySelector) == null ? void 0 : m.call(k, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (f = k.querySelector) == null ? void 0 : f.call(k, `[name="${CSS.escape(s.name)}"]`) : null);
        w && (w.tagName === "INPUT" || w.tagName === "TEXTAREA") && (w.focus({ preventScroll: !0 }), typeof w.selectionStart == "number" && (w.selectionStart = s.selectionStart ?? 0, w.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(b, v);
    };
    return (n || s) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(r, e) {
    const t = Number(r), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), c = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= c ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(r = null) {
    var k, v, s, n, l, o, m, f, w;
    const e = r ?? this.form ?? this.element;
    let t = (k = e == null ? void 0 : e.querySelector) == null ? void 0 : k.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((s = (v = this.actor) == null ? void 0 : v.system) == null ? void 0 : s.resources) ?? {}, a = ((l = (n = i.hitLocations) == null ? void 0 : n.legs) == null ? void 0 : l.value) ?? 0, c = ((o = i.currentHealth) == null ? void 0 : o.legs) ?? 0, u = C._healthStatusFromRatio(c, a), p = Number(((w = (f = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : f.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
    let b;
    u === 0 ? b = 0 : u === 1 ? b = -6 : u === 2 ? b = -3 : b = p, t.textContent = String(b);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var c, u, p, b;
    const e = C.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((b = t.currentHealth) == null ? void 0 : b[e]) ?? 0;
    return C._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var u, p, b, k;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = r == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, a = ((b = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : b.value) ?? 0, c = ((k = i.currentHealth) == null ? void 0 : k[t]) ?? 0;
    return C._healthStatusFromRatio(c, a);
  }
  async _prepareContext(r) {
    var qe, Te, De, Oe, _e, Le, Ae, Fe, Ne, $e, Ee, Ce, xe, je, Pe, Me, Ke;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Te = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : Te.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, c = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const T = ((Oe = a[d]) == null ? void 0 : Oe.value) ?? 0, D = c[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(D, T);
    }
    const p = (Number(c.head) || 0) === 0, k = ["torso", "arms", "legs"].filter((d) => (Number(c[d]) || 0) === 0).length;
    e.showDeathSkull = p || k >= 2;
    const v = e.computedHealthStatus.legs ?? 3, s = Number(((Le = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : Le.givenSpeed) ?? 0) || 0;
    let n;
    v === 0 ? n = 0 : v === 1 ? n = -6 : v === 2 ? n = -3 : n = s, e.effectiveGivenSpeed = n, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: n } },
      { inplace: !1 }
    );
    const l = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, T] of Object.entries(l)) {
      const D = e.computedHealthStatus[T];
      e.skillHealthStatus[d] = D, e.skillDisabled[d] = D === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const o = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (o.slotOrder ?? "").trim(), w = f ? f.split(/\s*,\s*/).filter((d) => m.includes(d)) : [], y = (Ae = this.actor.system.gear) == null ? void 0 : Ae.microchips, I = y && typeof y == "object" && !Array.isArray(y) ? y : {}, N = (((Fe = I.slot1) == null ? void 0 : Fe.itemId) ?? "").trim(), q = (((Ne = I.slot2) == null ? void 0 : Ne.itemId) ?? "").trim(), O = ((($e = I.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), A = this.actor.items.contents.filter((d) => d.type !== "ability").slice().sort((d, T) => {
      const D = typeof d.sort == "number" ? d.sort : 0, L = typeof T.sort == "number" ? T.sort : 0;
      return D - L;
    }).map((d) => {
      var te, ne, oe, re, se, ie;
      const T = d.type === "Fegyver", D = d.type === "microchip";
      let L = 0, F = "", j = null;
      for (let X = 0; X < w.length; X++) {
        const ee = w[X];
        if ((((te = o[ee]) == null ? void 0 : te.itemId) ?? "") === d.id) {
          L = X + 1, F = ((ne = o[ee]) == null ? void 0 : ne.bonus) ?? "", j = ee;
          break;
        }
      }
      let M = null;
      D && (N === d.id ? M = "slot1" : q === d.id ? M = "slot2" : O === d.id && (M = "slot3"));
      const V = T && ((oe = d.system) != null && oe.damage) ? d.system.damage : "", Q = T && typeof ((re = d.system) == null ? void 0 : re.range) == "string" ? (d.system.range || "").trim() : "", Y = j ? Number((se = o[j]) == null ? void 0 : se.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: T,
        slotAssignment: L,
        slotBonus: F,
        slotKey: j,
        microchipSlotKey: M,
        isEquipped: !!(j || M),
        damage: V,
        rangeStr: Q,
        slotBonusNum: Y,
        quantity: Number(((ie = d.system) == null ? void 0 : ie.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = A;
    const x = (((Ee = this.actor.items) == null ? void 0 : Ee.contents) ?? []).filter((d) => d.type === "Fegyver"), P = x.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = P;
    const J = "— Nincs fegyver —", H = w.filter((d) => {
      const D = ((o[d] ?? {}).itemId ?? "").trim();
      return D ? !!x.find((F) => F.id === D) : !1;
    });
    e.weaponSlots = H.map((d, T) => {
      const D = o[d] ?? {}, L = (D.itemId ?? "").trim(), F = P.find((j) => j.id === L);
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
    e.weaponsTable = x.map((d) => {
      var X, ee, Re;
      const T = d.id;
      let D = null, L = {};
      for (const ue of w)
        if ((((X = o[ue]) == null ? void 0 : X.itemId) ?? "").trim() === T) {
          D = ue, L = o[ue] ?? {};
          break;
        }
      const F = !!D, j = ((ee = d.system) == null ? void 0 : ee.equipped) !== void 0 && ((Re = d.system) == null ? void 0 : Re.equipped) !== null ? !!d.system.equipped : F, M = (d == null ? void 0 : d.system) ?? {}, V = typeof M.range == "string" ? (M.range || "").trim() : "", Q = M.type ?? "", Y = (W[Q] ?? Q) || "—", te = M.size ?? "", ne = (Xe[te] ?? te) || "", oe = [Y, ne].filter(Boolean).join(", ") || Y || "—", re = Y === "Lövedékes", se = M.quantity, ie = se != null ? String(se).trim() : "1";
      return {
        slotKey: D ?? "",
        itemId: T,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? J,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(L.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: L.damage ?? M.damage ?? "",
        rangeStr: V || "—",
        typeLabel: Y,
        typeAndSize: oe,
        quantity: ie,
        quantityDisplay: re ? ie : "—",
        isProjectile: re,
        equipped: j,
        special: (M.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((Pe = (je = this.actor.system) == null ? void 0 : je.gear) == null ? void 0 : Pe.generalItems) ? this.actor.system.gear.generalItems : [];
    const he = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).filter((d) => d.type === "microchip"), ae = he.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var V, Q;
      const T = `slot${d}`, D = I[T] ?? {}, L = (D.itemId ?? "").trim(), F = he.find((Y) => Y.id === L), j = ((V = F == null ? void 0 : F.system) == null ? void 0 : V.abilityType) ?? "", M = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—";
      return {
        slotKey: T,
        itemId: L,
        name: (F == null ? void 0 : F.name) ?? D.name ?? we,
        typeLabel: M,
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
    const be = this.actor.system.abilities ?? {}, Ze = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).map((d) => {
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
  _attachFrameListeners(r) {
    var k, v;
    super._attachFrameListeners(r);
    const e = this.form ?? ((k = r == null ? void 0 : r.querySelector) == null ? void 0 : k.call(r, "form.votv.karakter-sheet")) ?? r ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const l = (s.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-UdIXTcKF.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var o, m, f;
      s.preventDefault(), s.stopPropagation();
      const n = s.currentTarget;
      let l = (n.dataset.itemId ?? "").trim();
      if (!l) {
        const w = (n.dataset.slot ?? "").trim();
        if (!w) return;
        l = (((((m = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : m.weapons) ?? {})[w] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((f = n.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (s) => {
      var o;
      const n = s ? s.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!n) return;
      const l = Number(n.value) || 0;
      n.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (s) => {
      s.preventDefault(), s.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (n) => {
          n && this.actor.update({ img: n });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var f;
      s.preventDefault();
      const n = s.currentTarget, l = n.dataset.skill, o = ((f = n.textContent) == null ? void 0 : f.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-UdIXTcKF.mjs");
      m(this.actor, l, o);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    });
    const c = (s, n) => {
      var m;
      const l = s.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (o) {
        if (s.classList.contains("karakter-weapon-label") && (n.altKey || n.shiftKey || n.ctrlKey || n.metaKey)) {
          const f = s.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = o.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), c(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), c(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const n = s.currentTarget, l = n.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      let m = Number(n.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await o.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, m = o.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const w = o.system.weapons ?? {}, y = (w.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = y ? y.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = N.find((O) => {
          var h;
          return (((h = w[O]) == null ? void 0 : h.itemId) ?? "").trim() === l;
        });
        if (q) {
          const O = N.filter((h) => h !== q);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${q}.itemId`] = "", f[`system.weapons.${q}.name`] = "", f[`system.weapons.${q}.damage`] = "", f[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault();
      const l = (s.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-UdIXTcKF.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var o;
      s.preventDefault();
      const n = s.currentTarget;
      let l = (n.dataset.itemId ?? "").trim();
      if (!l) {
        const m = (n.dataset.slot ?? "").trim();
        if (!m) return;
        l = (((((o = this.actor.system) == null ? void 0 : o.weapons) ?? {})[m] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var q, O;
      const n = s.currentTarget, l = (n.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = f ? f.split(/\s*,\s*/).filter((h) => w.includes(h)) : [], I = y.find((h) => {
        var A;
        return (((A = m[h]) == null ? void 0 : A.itemId) ?? "").trim() === l;
      }) ?? null;
      if (n.checked) {
        if (I) return;
        let h = y.find((x) => {
          var P;
          return !((P = m[x]) != null && P.itemId);
        });
        const A = new Set(y);
        if (!h) {
          const x = w.find((P) => !A.has(P));
          if (!x) return;
          h = x, y.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${h}.itemId`]: l,
          [`system.weapons.${h}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${h}.damage`]: ((q = o == null ? void 0 : o.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${h}.bonus`]: ((O = o == null ? void 0 : o.system) == null ? void 0 : O.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (I) {
        const h = y.filter((A) => A !== I);
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const n = s.currentTarget;
      if (n.disabled) return;
      const l = n.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var h;
      s.preventDefault();
      const n = s.currentTarget, l = n.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = o == null ? void 0 : o.dataset.slot;
      if (!m) return;
      const f = (n.dataset.itemId ?? "").trim(), w = (n.dataset.itemName ?? ((h = n.textContent) == null ? void 0 : h.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", y = (n.dataset.itemImg ?? "").trim(), I = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = w);
      let N = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      y ? (N || (N = document.createElement("img"), N.className = "karakter-microchip-slot-thumb", N.alt = "", o == null || o.insertBefore(N, I)), N.src = y, N.style.display = "") : N && N.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const q = f ? this.actor.items.get(f) : null, O = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      f && (O[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (s) => {
      const n = s.currentTarget.dataset.slot;
      if (!n) return;
      const l = s.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${n}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((s, n) => {
      const l = n.dataset.slot;
      n.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, l)), n.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), n.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, l));
    }), t.find(".karakter-ability-slot-single").each((s, n) => {
      const l = n.dataset.slot;
      l && (n.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, l)), n.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), n.addEventListener("drop", (o) => {
        var m;
        (m = o.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, n) => {
      const l = n.dataset.area;
      l && (n.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, l)), n.addEventListener("dragleave", (o) => {
        var m;
        return (m = o.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), n.addEventListener("drop", (o) => {
        var m;
        (m = o.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const n = s.currentTarget.dataset.slot;
      n && await this.actor.update({
        [`system.abilities.${n}.itemId`]: "",
        [`system.abilities.${n}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var w;
      if (s.preventDefault(), !s.altKey) return;
      const n = s.currentTarget.dataset.area, l = s.currentTarget.dataset.itemId;
      if (!n || !l) return;
      const o = this.actor.system.abilities ?? {}, f = (Array.isArray((w = o[n]) == null ? void 0 : w.items) ? o[n].items.slice() : []).filter((y) => y !== l);
      await this.actor.update({ [`system.abilities.${n}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var m;
      s.preventDefault();
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      (m = o == null ? void 0 : o.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const l = s.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, n) => {
      this._resizeWeaponQuantityInput(n);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const n = s.currentTarget, l = (n.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const m = (n.value ?? "").trim();
      await o.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, w = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        w && this._resizeWeaponQuantityInput(w);
      }, 80);
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var q, O;
      const n = s.currentTarget, l = (n.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = f ? f.split(/\s*,\s*/).filter((h) => w.includes(h)) : [], I = y.find((h) => {
        var A;
        return (((A = m[h]) == null ? void 0 : A.itemId) ?? "").trim() === l;
      }) ?? null;
      if (n.checked) {
        if (I) return;
        let h = y.find((x) => {
          var P;
          return !((P = m[x]) != null && P.itemId);
        });
        const A = new Set(y);
        if (!h) {
          const x = w.find((P) => !A.has(P));
          if (!x) return;
          h = x, y.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${h}.itemId`]: l,
          [`system.weapons.${h}.name`]: o.name ?? "",
          [`system.weapons.${h}.damage`]: ((q = o.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${h}.bonus`]: ((O = o.system) == null ? void 0 : O.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (I) {
        const h = y.filter((A) => A !== I);
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, m = o.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const w = o.system.weapons ?? {}, y = (w.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = y ? y.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = N.find((O) => {
          var h;
          return (((h = w[O]) == null ? void 0 : h.itemId) ?? "").trim() === l;
        });
        if (q) {
          const O = N.filter((h) => h !== q);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${q}.itemId`] = "", f[`system.weapons.${q}.name`] = "", f[`system.weapons.${q}.damage`] = "", f[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-remove", async (s) => {
      var o, m;
      s.preventDefault();
      const n = parseInt(s.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(n) || n < 0) return;
      const l = Array.isArray((m = (o = this.actor.system) == null ? void 0 : o.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(n, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (s) => {
      var l, o, m, f;
      s.preventDefault();
      const n = s.currentTarget.dataset.gearArray;
      if (n === "armor") {
        const w = Array.isArray((o = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : o.armor) ? [...this.actor.system.gear.armor] : [];
        w.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": w });
      } else if (n === "generalItems") {
        const w = Array.isArray((f = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : f.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        w.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": w });
      }
    }), t.on("click", ".karakter-microchip-clear", async (s) => {
      s.preventDefault();
      const n = s.currentTarget.dataset.slotKey;
      n && await this.actor.update({
        [`system.gear.microchips.${n}.itemId`]: "",
        [`system.gear.microchips.${n}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (s) => {
      var o, m;
      s.preventDefault();
      const n = parseInt(s.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(n) || n < 0) return;
      const l = Array.isArray((m = (o = this.actor.system) == null ? void 0 : o.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(n, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const u = this, p = (s) => {
      var o, m, f, w;
      if (!s) return;
      const n = u._getFormDataForUpdate(s);
      if (Object.keys(n).length === 0) return;
      const l = ((m = (o = n.system) == null ? void 0 : o.resources) == null ? void 0 : m.currentHealth) != null || ((w = (f = n.system) == null ? void 0 : f.resources) == null ? void 0 : w.hitLocations) != null;
      u.actor.update(n).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((y) => console.warn("VoidKarakterSheet save failed", y));
    }, b = (s) => {
      var n, l, o;
      return s && (((l = (n = u.element) == null ? void 0 : n.contains) == null ? void 0 : l.call(n, s)) || u.id && ((o = s.closest) == null ? void 0 : o.call(s, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (s) => {
      const n = s.target;
      if (!n || !n.form) return;
      const l = n.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = n.form;
      b(o) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(o));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var u, p, b;
    const e = {};
    for (const k of r.elements) {
      if (!k.name || k.disabled || k.type === "radio" && !k.checked || k.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      k.type === "checkbox" ? v = k.checked : k.type === "number" ? v = k.value === "" ? 0 : Number(k.value) : v = k.value ?? "", foundry.utils.setProperty(e, k.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const k of c) {
      const v = ((b = i[k]) == null ? void 0 : b.value) ?? 0, s = a[k] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${k}`, C._healthStatusFromRatio(s, v));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var c, u, p, b, k, v, s, n, l, o, m, f;
    const t = r.target, i = (c = t == null ? void 0 : t.closest) == null ? void 0 : c.call(t, ".karakter-ability-slot-single"), a = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let w = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!w && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            w = y;
            break;
          }
      }
      if (w) {
        const y = await fromUuid(w);
        if (y && y.documentName === "Item" && y.type === "ability") {
          let I = y.id;
          ((b = y.parent) == null ? void 0 : b.id) !== this.actor.id && (I = ((k = (await this.actor.createEmbeddedDocuments("Item", [y.toObject()]))[0]) == null ? void 0 : k.id) ?? I);
          const N = (((v = y.system) == null ? void 0 : v.kind) ?? "passive").toString(), q = this.actor.system.abilities ?? {};
          if (i) {
            const A = i.dataset.slot;
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
              const x = Array.isArray((s = q[A]) == null ? void 0 : s.items) ? q[A].items.slice() : Array.isArray(q[A]) ? q[A].slice() : [];
              x.includes(I) || x.push(I), await this.actor.update({ [`system.abilities.${A}.items`]: x });
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
          const O = N === "active" ? "active" : "passive", h = Array.isArray((n = q[O]) == null ? void 0 : n.items) ? q[O].items.slice() : Array.isArray(q[O]) ? q[O].slice() : [];
          h.includes(I) || h.push(I), await this.actor.update({ [`system.abilities.${O}.items`]: h });
          return;
        }
      }
    }
    if (e) {
      let w = e.uuid ?? e.documentUuid ?? ((l = e.data) == null ? void 0 : l.uuid) ?? (typeof e == "string" ? e : null);
      if (!w && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            w = y;
            break;
          }
      }
      if (w) {
        const y = await fromUuid(w);
        if (y && y.documentName === "Item" && y.type === "Fegyver") {
          const I = this.actor, N = ((o = y.parent) == null ? void 0 : o.id) !== I.id;
          let q = y.id;
          if (N) {
            const O = foundry.utils.mergeObject(y.toObject(), { system: { ...y.toObject().system ?? {}, equipped: !1 } });
            q = ((m = (await I.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : m.id) ?? q;
          }
          if (N) {
            const O = ((f = I.system) == null ? void 0 : f.weapons) ?? {}, h = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], x = h ? h.split(/\s*,\s*/).filter((J) => A.includes(J)) : [], P = x.filter((J) => {
              var H;
              return (((H = O[J]) == null ? void 0 : H.itemId) ?? "").trim() === q;
            });
            if (P.length > 0) {
              const H = {
                "system.weapons.slotOrder": x.filter((W) => !P.includes(W)).join(",")
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
    return super._onDropItem(r, e);
  }
  _onWeaponSlotDragOver(r, e) {
    var a, c, u;
    const t = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((c = r.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(r, e) {
    var u, p, b, k, v, s;
    r.preventDefault(), r.stopPropagation(), (u = r.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((b = r.dataTransfer) == null ? void 0 : b.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "Fegyver") return;
    if (((k = a.parent) == null ? void 0 : k.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [n]);
      return;
    }
    const c = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((v = a.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((s = a.system) == null ? void 0 : s.bonus) ?? ""
    }), await a.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(r, e, t) {
    t && (r.dataTransfer && (r.dataTransfer.setData("text/plain", e), r.dataTransfer.effectAllowed = "move", typeof r.dataTransfer.setDragImage == "function" && r.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(r, e) {
    var i;
    const t = this._draggingInventoryItemId;
    !t || t === e || (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "move"), (i = r.currentTarget) == null || i.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(r, e) {
    var t;
    (t = r.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(r, e) {
    var b, k;
    r.preventDefault(), (b = r.currentTarget) == null || b.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((k = r.dataTransfer) == null ? void 0 : k.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((v, s) => {
      const n = typeof v.sort == "number" ? v.sort : 0, l = typeof s.sort == "number" ? s.sort : 0;
      return n - l;
    }).map((v) => v.id), c = a.indexOf(t), u = a.indexOf(e);
    if (c === -1 || u === -1) return;
    a.splice(c, 1), a.splice(u, 0, t);
    const p = a.map((v, s) => ({
      _id: v,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(r) {
    var i, a, c;
    const e = ((i = r.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = r.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (r.preventDefault(), (c = r.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  /** Lőszer mező: mindig fit-content (CSS field-sizing + JS fallback az input klónjával). */
  _resizeWeaponQuantityInput(r) {
    if (!r || r.type !== "text") return;
    const e = 20;
    if (!r.value || String(r.value).trim() === "") {
      r.style.width = "";
      return;
    }
    const t = r.cloneNode(!1);
    t.value = r.value, t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "0", t.style.width = "1px", t.style.visibility = "hidden", t.removeAttribute("data-item-id"), document.body.appendChild(t);
    const i = t.scrollWidth;
    document.body.removeChild(t), r.style.width = `${Math.max(e, i)}px`;
  }
  async _postAbilityToChat(r) {
    var k, v, s;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((k = e.system) == null ? void 0 : k.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, a = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", b = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: b,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(r) {
    var i, a;
    const e = ((i = r.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = r.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    var i;
    this._parseAbilityDrop(r) && (r.preventDefault(), (i = r.currentTarget) == null || i.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(r, e) {
    var c, u, p;
    r.preventDefault(), (c = r.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "ability") return;
    let a = i.id;
    ((u = i.parent) == null ? void 0 : u.id) !== this.actor.id && (a = ((p = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : p.id) ?? a), await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(r, e) {
    var i;
    this._parseAbilityDrop(r) && (r.preventDefault(), (i = r.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(r, e) {
    var p, b, k, v;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "ability") return;
    let a = i.id;
    ((b = i.parent) == null ? void 0 : b.id) !== this.actor.id && (a = ((k = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : k.id) ?? a);
    const c = this.actor.system.abilities ?? {}, u = Array.isArray((v = c[e]) == null ? void 0 : v.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(r, e) {
    var a, c, u;
    const t = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((c = r.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(r, e) {
    var u, p, b, k, v;
    r.preventDefault(), (u = r.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((b = r.dataTransfer) == null ? void 0 : b.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "microchip") return;
    let c = a.id;
    ((k = a.parent) == null ? void 0 : k.id) !== this.actor.id && (c = ((v = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : v.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(r, e) {
    const i = (this.actor.system.skills ?? {})[r] ?? 0;
    let a = Number(i) || 0;
    const c = this._getSkillHealthStatus(r);
    c === 1 ? a -= 6 : c === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, b = new Roll(p);
    await b.evaluate({ async: !0 });
    const k = b.total >= 18 ? "critical" : b.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: k } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var a;
    const r = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
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
    const i = Math.max(0, r - 1);
    await this.actor.update({ "system.resources.morale": i });
  }
  async _rollWeapon(r) {
    var w;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, i = this.actor.system.skills ?? {}, a = this.actor.items.filter((y) => y.type === "Fegyver");
    let c = null;
    t.itemId && (c = a.find((y) => y.id === t.itemId) ?? null);
    const u = c && c.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, k = (((w = c == null ? void 0 : c.system) == null ? void 0 : w.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[k] || 0) || 0, s = p + v, l = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, o = new Roll(l);
    await o.evaluate({ async: !0 });
    const m = o.total >= 18 ? "critical" : o.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(r) {
    var c;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "Fegyver") return;
    const t = (((c = e.system) == null ? void 0 : c.damage) ?? "").trim();
    if (!t) return;
    const i = new Roll(t);
    await i.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return i.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }
};
U(C, "PARTS", foundry.utils.mergeObject(K(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), U(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Be = K(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Be.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((ze = K(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : ze.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((We = (Ge = K(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) == null ? void 0 : We.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
U(C, "BODY_PART_BY_SKILL", {
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
let pe = C;
var Ye;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const c = e._getFormDataForUpdate(a);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (a) => {
      var c, u, p;
      return a && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, b;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((b = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      i(c) && t(c);
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
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
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
U(B, "PARTS", foundry.utils.mergeObject(K(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), U(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ye = K(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !1 })
}));
let fe = B;
var Je;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const c = e._getFormDataForUpdate(a);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (a) => {
      var c, u, p;
      return a && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, b;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((b = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      i(c) && t(c);
    }, e._votvInput = (a) => {
      var u, p, b;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((b = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      i(c) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(c), 300));
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
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
U(z, "PARTS", foundry.utils.mergeObject(K(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), U(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let ye = z;
var Qe;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(r) {
    if (super._attachFrameListeners(r), !this.isEditable) return;
    const e = this, t = (a) => {
      if (!a) return;
      const c = e._getFormDataForUpdate(a);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (a) => {
      var c, u, p;
      return a && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, b;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((b = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      i(c) && t(c);
    }, e._votvInput = (a) => {
      var p;
      const c = a.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const u = (c == null ? void 0 : c.form) ?? ((p = c == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      i(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", !(t.name === "name" && typeof i == "string" && i.trim() === "") && foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
U(G, "PARTS", foundry.utils.mergeObject(K(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qe = K(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
const pt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, i, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (r = CONFIG.Actor).dataModels ?? (r.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ot, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ct, CONFIG.Item.dataModels.microchip = ut, CONFIG.Item.dataModels.ability = mt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pe, {
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
    types: ["ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const E = 500;
  Hooks.on("updateActor", (c, u, p, b) => {
    var y, I, N, q, O;
    const k = c == null ? void 0 : c.id;
    if (!k) return;
    const v = document.activeElement, s = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), n = [], l = (y = game.actors) == null ? void 0 : y.get(k);
    l != null && l.apps && n.push(...Array.from(l.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const h of o)
      ((I = h.document) == null ? void 0 : I.id) !== k || ((N = h.document) == null ? void 0 : N.documentName) !== "Actor" || ((q = h.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || n.includes(h) || n.push(h);
    if (s && n.some((h) => {
      const A = (h == null ? void 0 : h.form) ?? (h == null ? void 0 : h.element);
      return A && A.contains(v);
    })) return;
    const f = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, w = f && Date.now() - f.at < E ? f.appId : null;
    setTimeout(() => {
      for (const h of n)
        !(h != null && h.rendered) || typeof h.render != "function" || h.id !== w && h.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var i, a, c, u, p, b;
      if (!((a = (i = E.target) == null ? void 0 : i.closest) != null && a.call(i, "#actors"))) return;
      const r = (u = (c = E.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((b = game.actors) != null && b.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, r, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, i = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = i ? (u = game.actors) == null ? void 0 : u.get(i) : null;
  !a || a.type !== "Karakter" || E.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (E, r) => {
  var e;
  (e = r == null ? void 0 : r.background) != null && e.src || E.updateSource({
    width: 1920,
    height: 1080,
    "background.src": pt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (E, r, e) => {
  var a, c, u;
  const t = (c = (a = E.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : c.resultType;
  if (!t) return;
  const i = (u = r == null ? void 0 : r.querySelector) == null ? void 0 : u.call(r, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void--E0cDa4W.mjs.map
