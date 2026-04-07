var et = Object.defineProperty;
var tt = Object.getPrototypeOf;
var rt = Reflect.get;
var st = (N, r, e) => r in N ? et(N, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[r] = e;
var U = (N, r, e) => st(N, typeof r != "symbol" ? r + "" : r, e);
var K = (N, r, e) => rt(tt(N), e, r);
const { HTMLField: it, NumberField: S, SchemaField: _, StringField: f, BooleanField: R, ArrayField: le } = foundry.data.fields;
class at extends foundry.abstract.TypeDataModel {
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
            active: new R({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
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
    var s, a, n, u;
    if (!r) return { form: null, windowContent: null };
    const e = ((s = r.querySelector) == null ? void 0 : s.call(r, "form.votv.karakter-sheet")) ?? ((a = r.querySelector) == null ? void 0 : a.call(r, "form.votv")) ?? null, t = ((n = r.querySelector) == null ? void 0 : n.call(r, ".votv-scroll")) ?? ((u = r.querySelector) == null ? void 0 : u.call(r, ".window-content")) ?? null;
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
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, n = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, h = n.contains(m), v = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && v && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const w = this.element, b = this.form ?? this.element, k = u.scrollState, i = u.focus, o = typeof (k == null ? void 0 : k.formScrollTop) == "number" || typeof (k == null ? void 0 : k.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(w, k), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const v = ((m = b.querySelector) == null ? void 0 : m.call(b, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (h = b.querySelector) == null ? void 0 : h.call(b, `[name="${CSS.escape(i.name)}"]`) : null);
        v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && (v.focus({ preventScroll: !0 }), typeof v.selectionStart == "number" && (v.selectionStart = i.selectionStart ?? 0, v.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(w, k);
    };
    return (o || i) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(r, e) {
    const t = Number(r), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const a = Math.floor(s / 3), n = Math.floor(2 * s / 3);
    return t <= a ? 1 : t <= n ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(r = null) {
    var b, k, i, o, c, l, m, h, v;
    const e = r ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((i = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : i.resources) ?? {}, a = ((c = (o = s.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : c.value) ?? 0, n = ((l = s.currentHealth) == null ? void 0 : l.legs) ?? 0, u = C._healthStatusFromRatio(n, a), p = Number(((v = (h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let w;
    u === 0 ? w = 0 : u === 1 ? w = -6 : u === 2 ? w = -3 : w = p, t.textContent = String(w);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var n, u, p, w;
    const e = C.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, s = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((w = t.currentHealth) == null ? void 0 : w[e]) ?? 0;
    return C._healthStatusFromRatio(a, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var u, p, w, b;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((u = r == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, a = ((w = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : w.value) ?? 0, n = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return C._healthStatusFromRatio(n, a);
  }
  async _prepareContext(r) {
    var qe, Te, De, Oe, _e, Le, Ae, Fe, Ee, Ne, $e, Ce, xe, je, Pe, Me, Ke;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Te = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : Te.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, a = s.hitLocations ?? {}, n = s.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const T = ((Oe = a[d]) == null ? void 0 : Oe.value) ?? 0, D = n[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(D, T);
    }
    const p = (Number(n.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((d) => (Number(n[d]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const k = e.computedHealthStatus.legs ?? 3, i = Number(((Le = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : Le.givenSpeed) ?? 0) || 0;
    let o;
    k === 0 ? o = 0 : k === 1 ? o = -6 : k === 2 ? o = -3 : o = i, e.effectiveGivenSpeed = o, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: o } },
      { inplace: !1 }
    );
    const c = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, T] of Object.entries(c)) {
      const D = e.computedHealthStatus[T];
      e.skillHealthStatus[d] = D, e.skillDisabled[d] = D === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const l = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], h = (l.slotOrder ?? "").trim(), v = h ? h.split(/\s*,\s*/).filter((d) => m.includes(d)) : [], y = (Ae = this.actor.system.gear) == null ? void 0 : Ae.microchips, I = y && typeof y == "object" && !Array.isArray(y) ? y : {}, E = (((Fe = I.slot1) == null ? void 0 : Fe.itemId) ?? "").trim(), q = (((Ee = I.slot2) == null ? void 0 : Ee.itemId) ?? "").trim(), O = (((Ne = I.slot3) == null ? void 0 : Ne.itemId) ?? "").trim(), A = this.actor.items.contents.filter((d) => d.type !== "ability").slice().sort((d, T) => {
      const D = typeof d.sort == "number" ? d.sort : 0, L = typeof T.sort == "number" ? T.sort : 0;
      return D - L;
    }).map((d) => {
      var te, ne, oe, re, se, ie;
      const T = d.type === "Fegyver", D = d.type === "microchip";
      let L = 0, F = "", j = null;
      for (let Q = 0; Q < v.length; Q++) {
        const ee = v[Q];
        if ((((te = l[ee]) == null ? void 0 : te.itemId) ?? "") === d.id) {
          L = Q + 1, F = ((ne = l[ee]) == null ? void 0 : ne.bonus) ?? "", j = ee;
          break;
        }
      }
      let M = null;
      D && (E === d.id ? M = "slot1" : q === d.id ? M = "slot2" : O === d.id && (M = "slot3"));
      const V = T && ((oe = d.system) != null && oe.damage) ? d.system.damage : "", X = T && typeof ((re = d.system) == null ? void 0 : re.range) == "string" ? (d.system.range || "").trim() : "", Y = j ? Number((se = l[j]) == null ? void 0 : se.bonus) || 0 : "";
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
        rangeStr: X,
        slotBonusNum: Y,
        quantity: Number(((ie = d.system) == null ? void 0 : ie.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = A;
    const x = ((($e = this.actor.items) == null ? void 0 : $e.contents) ?? []).filter((d) => d.type === "Fegyver"), P = x.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = P;
    const J = "— Nincs fegyver —", H = v.filter((d) => {
      const D = ((l[d] ?? {}).itemId ?? "").trim();
      return D ? !!x.find((F) => F.id === D) : !1;
    });
    e.weaponSlots = H.map((d, T) => {
      const D = l[d] ?? {}, L = (D.itemId ?? "").trim(), F = P.find((j) => j.id === L);
      return {
        slotKey: d,
        slotNum: T + 1,
        displayName: (F == null ? void 0 : F.name) || D.name || J,
        img: (F == null ? void 0 : F.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const W = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Qe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = x.map((d) => {
      var Q, ee, Re;
      const T = d.id;
      let D = null, L = {};
      for (const ue of v)
        if ((((Q = l[ue]) == null ? void 0 : Q.itemId) ?? "").trim() === T) {
          D = ue, L = l[ue] ?? {};
          break;
        }
      const F = !!D, j = ((ee = d.system) == null ? void 0 : ee.equipped) !== void 0 && ((Re = d.system) == null ? void 0 : Re.equipped) !== null ? !!d.system.equipped : F, M = (d == null ? void 0 : d.system) ?? {}, V = typeof M.range == "string" ? (M.range || "").trim() : "", X = M.type ?? "", Y = (W[X] ?? X) || "—", te = M.size ?? "", ne = (Qe[te] ?? te) || "", oe = [Y, ne].filter(Boolean).join(", ") || Y || "—", re = Y === "Lövedékes", se = M.quantity, ie = se != null ? String(se).trim() : "1";
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
      var V, X;
      const T = `slot${d}`, D = I[T] ?? {}, L = (D.itemId ?? "").trim(), F = he.find((Y) => Y.id === L), j = ((V = F == null ? void 0 : F.system) == null ? void 0 : V.abilityType) ?? "", M = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—";
      return {
        slotKey: T,
        itemId: L,
        name: (F == null ? void 0 : F.name) ?? D.name ?? we,
        typeLabel: M,
        description: (((X = F == null ? void 0 : F.system) == null ? void 0 : X.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", ce = (d) => {
      const T = [];
      return d !== 1 && T.push(E), d !== 2 && T.push(q), d !== 3 && T.push(O), T;
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
    var b, k;
    super._attachFrameListeners(r);
    const e = this.form ?? ((b = r == null ? void 0 : r.querySelector) == null ? void 0 : b.call(r, "form.votv.karakter-sheet")) ?? r ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const s = (i) => {
      var l;
      const o = i ? i.currentTarget : (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const c = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const a = (k = e.querySelector) == null ? void 0 : k.call(e, 'input[name="system.resources.stress.value"]');
    a && s({ currentTarget: a }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget, c = o.dataset.skill, l = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: m } = await import("./roll-sheet-hXM0sgiN.mjs");
      m(this.actor, c, l);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const n = (i, o) => {
      var m;
      const c = i.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (l) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (m = l.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, c = o.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      let m = Number(o.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await l.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor, m = l.items.get(c), h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = l.system.weapons ?? {}, y = (v.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = y ? y.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = E.find((O) => {
          var g;
          return (((g = v[O]) == null ? void 0 : g.itemId) ?? "").trim() === c;
        });
        if (q) {
          const O = E.filter((g) => g !== q);
          h["system.weapons.slotOrder"] = O.join(","), h[`system.weapons.${q}.itemId`] = "", h[`system.weapons.${q}.name`] = "", h[`system.weapons.${q}.damage`] = "", h[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      c && await this._rollWeapon(c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      i.preventDefault();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const h = (((this.actor.system.weapons ?? {})[c] ?? {}).itemId ?? "").trim();
      h && await this._rollWeaponDamage(h);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, O;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, h = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = h ? h.split(/\s*,\s*/).filter((g) => v.includes(g)) : [], I = y.find((g) => {
        var A;
        return (((A = m[g]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let g = y.find((x) => {
          var P;
          return !((P = m[x]) != null && P.itemId);
        });
        const A = new Set(y);
        if (!g) {
          const x = v.find((P) => !A.has(P));
          if (!x) return;
          g = x, y.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${g}.itemId`]: c,
          [`system.weapons.${g}.name`]: (l == null ? void 0 : l.name) ?? "",
          [`system.weapons.${g}.damage`]: ((q = l == null ? void 0 : l.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((O = l == null ? void 0 : l.system) == null ? void 0 : O.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (I) {
        const g = y.filter((A) => A !== I);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".karakter-microchip-slot-select-wrap"), l = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !l && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var g;
      i.preventDefault();
      const o = i.currentTarget, c = o.closest(".karakter-microchip-slot-select-wrap"), l = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), m = l == null ? void 0 : l.dataset.slot;
      if (!m) return;
      const h = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((g = o.textContent) == null ? void 0 : g.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", y = (o.dataset.itemImg ?? "").trim(), I = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = v);
      let E = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      y ? (E || (E = document.createElement("img"), E.className = "karakter-microchip-slot-thumb", E.alt = "", l == null || l.insertBefore(E, I)), E.src = y, E.style.display = "") : E && E.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const q = h ? this.actor.items.get(h) : null, O = {
        [`system.gear.microchips.${m}.itemId`]: h,
        [`system.gear.microchips.${m}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      h && (O[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const c = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${o}.active`]: c });
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const c = o.dataset.slot;
      o.addEventListener("dragover", (l) => this._onMicrochipSlotDragOver(l, c)), o.addEventListener("dragleave", (l) => {
        var m;
        return (m = l.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (l) => this._onMicrochipSlotDrop(l, c));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const c = o.dataset.slot;
      c && (o.addEventListener("dragover", (l) => this._onAbilitySingleDragOver(l, c)), o.addEventListener("dragleave", (l) => {
        var m;
        return (m = l.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (l) => {
        var m;
        (m = l.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const c = o.dataset.area;
      c && (o.addEventListener("dragover", (l) => this._onAbilityAreaDragOver(l, c)), o.addEventListener("dragleave", (l) => {
        var m;
        return (m = l.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (l) => {
        var m;
        (m = l.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!o || !c) return;
      const l = this.actor.system.abilities ?? {}, h = (Array.isArray((v = l[o]) == null ? void 0 : v.items) ? l[o].items.slice() : []).filter((y) => y !== c);
      await this.actor.update({ [`system.abilities.${o}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var m;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      (m = l == null ? void 0 : l.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("input", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "Fegyver") return;
      const m = (o.value ?? "").trim();
      await l.update({ "system.quantity": m });
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, O;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, h = (m.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = h ? h.split(/\s*,\s*/).filter((g) => v.includes(g)) : [], I = y.find((g) => {
        var A;
        return (((A = m[g]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (I) return;
        let g = y.find((x) => {
          var P;
          return !((P = m[x]) != null && P.itemId);
        });
        const A = new Set(y);
        if (!g) {
          const x = v.find((P) => !A.has(P));
          if (!x) return;
          g = x, y.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${g}.itemId`]: c,
          [`system.weapons.${g}.name`]: l.name ?? "",
          [`system.weapons.${g}.damage`]: ((q = l.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((O = l.system) == null ? void 0 : O.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (I) {
        const g = y.filter((A) => A !== I);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor, m = l.items.get(c), h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = l.system.weapons ?? {}, y = (v.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = y ? y.split(/\s*,\s*/).filter((O) => I.includes(O)) : [], q = E.find((O) => {
          var g;
          return (((g = v[O]) == null ? void 0 : g.itemId) ?? "").trim() === c;
        });
        if (q) {
          const O = E.filter((g) => g !== q);
          h["system.weapons.slotOrder"] = O.join(","), h[`system.weapons.${q}.itemId`] = "", h[`system.weapons.${q}.name`] = "", h[`system.weapons.${q}.damage`] = "", h[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-remove", async (i) => {
      var l, m;
      i.preventDefault();
      const o = parseInt(i.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const c = Array.isArray((m = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      c.splice(o, 1), await this.actor.update({ "system.gear.armor": c });
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var c, l, m, h;
      i.preventDefault();
      const o = i.currentTarget.dataset.gearArray;
      if (o === "armor") {
        const v = Array.isArray((l = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : l.armor) ? [...this.actor.system.gear.armor] : [];
        v.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": v });
      } else if (o === "generalItems") {
        const v = Array.isArray((h = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : h.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        v.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": v });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.slotKey;
      o && await this.actor.update({
        [`system.gear.microchips.${o}.itemId`]: "",
        [`system.gear.microchips.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var l, m;
      i.preventDefault();
      const o = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const c = Array.isArray((m = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      c.splice(o, 1), await this.actor.update({ "system.gear.generalItems": c });
    });
    const u = this, p = (i) => {
      var l, m, h, v;
      if (!i) return;
      const o = u._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((m = (l = o.system) == null ? void 0 : l.resources) == null ? void 0 : m.currentHealth) != null || ((v = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(o).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((y) => console.warn("VoidKarakterSheet save failed", y));
    }, w = (i) => {
      var o, c, l;
      return i && (((c = (o = u.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || u.id && ((l = i.closest) == null ? void 0 : l.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = o.form;
      w(l) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(l));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var u, p, w;
    const e = {};
    for (const b of r.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let k;
      b.type === "checkbox" ? k = b.checked : b.type === "number" ? k = b.value === "" ? 0 : Number(b.value) : k = b.value ?? "", foundry.utils.setProperty(e, b.name, k);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, a = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const b of n) {
      const k = ((w = s[b]) == null ? void 0 : w.value) ?? 0, i = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, C._healthStatusFromRatio(i, k));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var n, u, p, w, b, k, i, o, c, l, m, h;
    const t = r.target, s = (n = t == null ? void 0 : t.closest) == null ? void 0 : n.call(t, ".karakter-ability-slot-single"), a = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let v = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!v && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            v = y;
            break;
          }
      }
      if (v) {
        const y = await fromUuid(v);
        if (y && y.documentName === "Item" && y.type === "ability") {
          let I = y.id;
          ((w = y.parent) == null ? void 0 : w.id) !== this.actor.id && (I = ((b = (await this.actor.createEmbeddedDocuments("Item", [y.toObject()]))[0]) == null ? void 0 : b.id) ?? I);
          const E = (((k = y.system) == null ? void 0 : k.kind) ?? "passive").toString(), q = this.actor.system.abilities ?? {};
          if (s) {
            const A = s.dataset.slot;
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
              const x = Array.isArray((i = q[A]) == null ? void 0 : i.items) ? q[A].items.slice() : Array.isArray(q[A]) ? q[A].slice() : [];
              x.includes(I) || x.push(I), await this.actor.update({ [`system.abilities.${A}.items`]: x });
              return;
            }
          }
          if (E === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": I,
              "system.abilities.faji.name": y.name
            });
            return;
          }
          if (E === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": I,
              "system.abilities.hatter.name": y.name
            });
            return;
          }
          const O = E === "active" ? "active" : "passive", g = Array.isArray((o = q[O]) == null ? void 0 : o.items) ? q[O].items.slice() : Array.isArray(q[O]) ? q[O].slice() : [];
          g.includes(I) || g.push(I), await this.actor.update({ [`system.abilities.${O}.items`]: g });
          return;
        }
      }
    }
    if (e) {
      let v = e.uuid ?? e.documentUuid ?? ((c = e.data) == null ? void 0 : c.uuid) ?? (typeof e == "string" ? e : null);
      if (!v && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            v = y;
            break;
          }
      }
      if (v) {
        const y = await fromUuid(v);
        if (y && y.documentName === "Item" && y.type === "Fegyver") {
          const I = this.actor, E = ((l = y.parent) == null ? void 0 : l.id) !== I.id;
          let q = y.id;
          if (E) {
            const O = foundry.utils.mergeObject(y.toObject(), { system: { ...y.toObject().system ?? {}, equipped: !1 } });
            q = ((m = (await I.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : m.id) ?? q;
          }
          if (E) {
            const O = ((h = I.system) == null ? void 0 : h.weapons) ?? {}, g = (O.slotOrder ?? "").trim(), A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], x = g ? g.split(/\s*,\s*/).filter((J) => A.includes(J)) : [], P = x.filter((J) => {
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
    var a, n, u;
    const t = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(r, e) {
    var u, p, w, b, k, i;
    r.preventDefault(), r.stopPropagation(), (u = r.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((w = r.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const a = await fromUuid(s.uuid);
    if (!a || a.type !== "Fegyver") return;
    if (((b = a.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [o]);
      return;
    }
    const n = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((k = a.system) == null ? void 0 : k.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = a.system) == null ? void 0 : i.bonus) ?? ""
    }), await a.update({ "system.equipped": !0 });
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
    var w, b;
    r.preventDefault(), (w = r.currentTarget) == null || w.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = r.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((k, i) => {
      const o = typeof k.sort == "number" ? k.sort : 0, c = typeof i.sort == "number" ? i.sort : 0;
      return o - c;
    }).map((k) => k.id), n = a.indexOf(t), u = a.indexOf(e);
    if (n === -1 || u === -1) return;
    a.splice(n, 1), a.splice(u, 0, t);
    const p = a.map((k, i) => ({
      _id: k,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(r) {
    var s, a, n;
    const e = ((s = r.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = r.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (r.preventDefault(), (n = r.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(r) {
    var e;
    (e = r.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  /**
   * Lőszer mező: alapból keskeny (CSS), ha a szöveg kilóg, mező szélességét növeli.
   * @param {HTMLInputElement} input
   */
  _resizeWeaponQuantityInput(r) {
    if (!r || r.type !== "text") return;
    const e = 32, t = 12;
    if (!r.value || String(r.value).trim() === "") {
      r.style.width = "";
      return;
    }
    const s = r.scrollWidth + t;
    r.style.width = `${Math.max(e, s)}px`;
  }
  async _postAbilityToChat(r) {
    var b, k, i;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((k = e.system) == null ? void 0 : k.kp) ?? 0) || 0, a = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = a ? `<p>${a}</p>` : "", w = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: w,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(r) {
    var s, a;
    const e = ((s = r.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = r.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    var n, u, p;
    r.preventDefault(), (n = r.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "ability") return;
    let a = s.id;
    ((u = s.parent) == null ? void 0 : u.id) !== this.actor.id && (a = ((p = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : p.id) ?? a), await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(r, e) {
    var s;
    this._parseAbilityDrop(r) && (r.preventDefault(), (s = r.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(r, e) {
    var p, w, b, k;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "ability") return;
    let a = s.id;
    ((w = s.parent) == null ? void 0 : w.id) !== this.actor.id && (a = ((b = (await this.actor.createEmbeddedDocuments("Item", [s.toObject()]))[0]) == null ? void 0 : b.id) ?? a);
    const n = this.actor.system.abilities ?? {}, u = Array.isArray((k = n[e]) == null ? void 0 : k.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(r, e) {
    var a, n, u;
    const t = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(r, e) {
    var u, p, w, b, k;
    r.preventDefault(), (u = r.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((w = r.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const a = await fromUuid(s.uuid);
    if (!a || a.type !== "microchip") return;
    let n = a.id;
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (n = ((k = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : k.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(r, e) {
    const s = (this.actor.system.skills ?? {})[r] ?? 0;
    let a = Number(s) || 0;
    const n = this._getSkillHealthStatus(r);
    n === 1 ? a -= 6 : n === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, w = new Roll(p);
    await w.evaluate({ async: !0 });
    const b = w.total >= 18 ? "critical" : w.total <= 3 ? "fumble" : null, k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return w.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: k
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
    const s = Math.max(0, r - 1);
    await this.actor.update({ "system.resources.morale": s });
  }
  async _rollWeapon(r) {
    var v;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, s = this.actor.system.skills ?? {}, a = this.actor.items.filter((y) => y.type === "Fegyver");
    let n = null;
    t.itemId && (n = a.find((y) => y.id === t.itemId) ?? null);
    const u = n && n.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, b = (((v = n == null ? void 0 : n.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", k = Number(s[b] || 0) || 0, i = p + k, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, l = new Roll(c);
    await l.evaluate({ async: !0 });
    const m = l.total >= 18 ? "critical" : l.total <= 3 ? "fumble" : null, h = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: h
    });
  }
  async _rollWeaponDamage(r) {
    var n;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "Fegyver") return;
    const t = (((n = e.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!t) return;
    const s = new Roll(t);
    await s.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return s.toMessage({
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
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, s = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, w;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      s(n) && t(n);
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
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, s = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, w;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      s(n) && t(n);
    }, e._votvInput = (a) => {
      var u, p, w;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      s(n) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(n), 300));
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
var Xe;
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
    const e = this, t = (a) => {
      if (!a) return;
      const n = e._getFormDataForUpdate(a);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, s = (a) => {
      var n, u, p;
      return a && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, w;
      const n = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      s(n) && t(n);
    }, e._votvInput = (a) => {
      var p;
      const n = a.target;
      if ((n == null ? void 0 : n.name) === "name") return;
      const u = (n == null ? void 0 : n.form) ?? ((p = n == null ? void 0 : n.closest) == null ? void 0 : p.call(n, "form"));
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
U(G, "PARTS", foundry.utils.mergeObject(K(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), U(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xe = K(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
const pt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, s, a;
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
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pe, {
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
  const N = 500;
  Hooks.on("updateActor", (n, u, p, w) => {
    var y, I, E, q, O;
    const b = n == null ? void 0 : n.id;
    if (!b) return;
    const k = document.activeElement, i = k && (k.tagName === "INPUT" && k.type !== "checkbox" && k.type !== "radio" || k.tagName === "TEXTAREA" || k.isContentEditable), o = [], c = (y = game.actors) == null ? void 0 : y.get(b);
    c != null && c.apps && o.push(...Array.from(c.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const g of l)
      ((I = g.document) == null ? void 0 : I.id) !== b || ((E = g.document) == null ? void 0 : E.documentName) !== "Actor" || ((q = g.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || o.includes(g) || o.push(g);
    if (i && o.some((g) => {
      const A = (g == null ? void 0 : g.form) ?? (g == null ? void 0 : g.element);
      return A && A.contains(k);
    })) return;
    const h = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, v = h && Date.now() - h.at < N ? h.appId : null;
    setTimeout(() => {
      for (const g of o)
        !(g != null && g.rendered) || typeof g.render != "function" || g.id !== v && g.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var s, a, n, u, p, w;
      if (!((a = (s = N.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
      const r = (u = (n = N.target) == null ? void 0 : n.closest) == null ? void 0 : u.call(n, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((w = game.actors) != null && w.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, r, e) => {
  var n, u;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, s = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = s ? (u = game.actors) == null ? void 0 : u.get(s) : null;
  !a || a.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, r) => {
  var e;
  (e = r == null ? void 0 : r.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": pt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, r, e) => {
  var a, n, u;
  const t = (n = (a = N.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : n.resultType;
  if (!t) return;
  const s = (u = r == null ? void 0 : r.querySelector) == null ? void 0 : u.call(r, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void-_zqdTwhm.mjs.map
