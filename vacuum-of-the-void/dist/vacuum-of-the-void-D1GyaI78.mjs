var et = Object.defineProperty;
var tt = Object.getPrototypeOf;
var st = Reflect.get;
var rt = (E, s, e) => s in E ? et(E, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[s] = e;
var U = (E, s, e) => rt(E, typeof s != "symbol" ? s + "" : s, e);
var M = (E, s, e) => st(tt(E), e, s);
const { HTMLField: it, NumberField: q, SchemaField: A, StringField: y, BooleanField: R, ArrayField: le } = foundry.data.fields;
class at extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new A({
        name: new y({ required: !1, blank: !0, initial: "" }),
        player: new y({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new y({ required: !1, blank: !0, initial: "" }),
        assignment: new y({ required: !1, blank: !0, initial: "" }),
        subAssignment: new y({ required: !1, blank: !0, initial: "" }),
        background: new y({ required: !1, blank: !0, initial: "" }),
        languages: new y({ required: !1, blank: !0, initial: "" })
      }),
      resources: new A({
        health: new A({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new A({
          head: new A({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          torso: new A({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          arms: new A({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          }),
          legs: new A({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new R({ required: !1, initial: !1 }),
            box2: new R({ required: !1, initial: !1 }),
            box3: new R({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new A({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new A({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new A({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new A({
        defense: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new A({
        deception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new A({
        slotOrder: new y({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new A({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new A({
        microchips: new A({
          slot1: new A({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot2: new A({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          }),
          slot3: new A({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new R({ required: !1, initial: !1 })
          })
        }),
        equipment: new y({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new A({
            name: new y({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new y({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new y({ required: !1, blank: !0, initial: "" }),
            level: new y({ required: !1, blank: !0, initial: "" }),
            other: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new A({
            name: new y({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new A({
        faji: new A({
          itemId: new y({ required: !1, blank: !0, initial: "" }),
          name: new y({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new A({
          itemId: new y({ required: !1, blank: !0, initial: "" }),
          name: new y({ required: !1, blank: !0, initial: "" })
        }),
        passive: new A({
          items: new le(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new A({
          items: new le(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new A({
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
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var i, a, c, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), i = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (i.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (i.windowScrollTop = t.scrollTop), i;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: i } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && i && (i.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, c = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, g = c.contains(m), f = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      g && f && (u.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const w = this.element, b = this.form ?? this.element, k = u.scrollState, r = u.focus, o = typeof (k == null ? void 0 : k.formScrollTop) == "number" || typeof (k == null ? void 0 : k.windowScrollTop) == "number", l = () => {
      var m, g;
      if (this._applyScrollState(w, k), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const f = ((m = b.querySelector) == null ? void 0 : m.call(b, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (g = b.querySelector) == null ? void 0 : g.call(b, `[name="${CSS.escape(r.name)}"]`) : null);
        f && (f.tagName === "INPUT" || f.tagName === "TEXTAREA") && (f.focus({ preventScroll: !0 }), typeof f.selectionStart == "number" && (f.selectionStart = r.selectionStart ?? 0, f.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(w, k);
    };
    return (o || r) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), c = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= c ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(s = null) {
    var b, k, r, o, l, n, m, g, f;
    const e = s ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((r = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : r.resources) ?? {}, a = ((l = (o = i.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : l.value) ?? 0, c = ((n = i.currentHealth) == null ? void 0 : n.legs) ?? 0, u = x._healthStatusFromRatio(c, a), p = Number(((f = (g = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : g.combat) == null ? void 0 : f.givenSpeed) ?? 0) || 0;
    let w;
    u === 0 ? w = 0 : u === 1 ? w = -6 : u === 2 ? w = -3 : w = p, t.textContent = String(w);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, u, p, w;
    const e = x.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((w = t.currentHealth) == null ? void 0 : w[e]) ?? 0;
    return x._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, w, b;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, a = ((w = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : w.value) ?? 0, c = ((b = i.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return x._healthStatusFromRatio(c, a);
  }
  async _prepareContext(s) {
    var qe, Te, De, Oe, _e, Ae, Le, Fe, Ne, $e, Ee, Ce, xe, je, Pe, Ke, Me;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Te = (qe = this.actor.system) == null ? void 0 : qe.resources) == null ? void 0 : Te.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, c = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const D = ((Oe = a[d]) == null ? void 0 : Oe.value) ?? 0, O = c[d] ?? 0;
      e.computedHealthStatus[d] = x._healthStatusFromRatio(O, D);
    }
    const p = (Number(c.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((d) => (Number(c[d]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const k = e.computedHealthStatus.legs ?? 3, r = Number(((Ae = (_e = this.actor.system) == null ? void 0 : _e.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let o;
    k === 0 ? o = 0 : k === 1 ? o = -6 : k === 2 ? o = -3 : o = r, e.effectiveGivenSpeed = o, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: o } },
      { inplace: !1 }
    );
    const l = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, D] of Object.entries(l)) {
      const O = e.computedHealthStatus[D];
      e.skillHealthStatus[d] = O, e.skillDisabled[d] = O === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const n = this.actor.system.weapons ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], g = (n.slotOrder ?? "").trim(), f = g ? g.split(/\s*,\s*/).filter((d) => m.includes(d)) : [], h = (Le = this.actor.system.gear) == null ? void 0 : Le.microchips, S = h && typeof h == "object" && !Array.isArray(h) ? h : {}, N = (((Fe = S.slot1) == null ? void 0 : Fe.itemId) ?? "").trim(), T = (((Ne = S.slot2) == null ? void 0 : Ne.itemId) ?? "").trim(), _ = ((($e = S.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), I = this.actor.items.contents.filter((d) => d.type !== "Képesség").slice().sort((d, D) => {
      const O = typeof d.sort == "number" ? d.sort : 0, L = typeof D.sort == "number" ? D.sort : 0;
      return O - L;
    }).map((d) => {
      var te, ne, oe, se, re, ie;
      const D = d.type === "Fegyver", O = d.type === "microchip";
      let L = 0, F = "", j = null;
      for (let X = 0; X < f.length; X++) {
        const ee = f[X];
        if ((((te = n[ee]) == null ? void 0 : te.itemId) ?? "") === d.id) {
          L = X + 1, F = ((ne = n[ee]) == null ? void 0 : ne.bonus) ?? "", j = ee;
          break;
        }
      }
      let K = null;
      O && (N === d.id ? K = "slot1" : T === d.id ? K = "slot2" : _ === d.id && (K = "slot3"));
      const V = D && ((oe = d.system) != null && oe.damage) ? d.system.damage : "", Q = D && typeof ((se = d.system) == null ? void 0 : se.range) == "string" ? (d.system.range || "").trim() : "", Y = j ? Number((re = n[j]) == null ? void 0 : re.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: D,
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
    e.actionsTable = I;
    const C = (((Ee = this.actor.items) == null ? void 0 : Ee.contents) ?? []).filter((d) => d.type === "Fegyver"), P = C.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = P;
    const J = "— Nincs fegyver —", H = f.filter((d) => {
      const O = ((n[d] ?? {}).itemId ?? "").trim();
      return O ? !!C.find((F) => F.id === O) : !1;
    });
    e.weaponSlots = H.map((d, D) => {
      const O = n[d] ?? {}, L = (O.itemId ?? "").trim(), F = P.find((j) => j.id === L);
      return {
        slotKey: d,
        itemId: L,
        slotNum: D + 1,
        displayName: (F == null ? void 0 : F.name) || O.name || J,
        img: (F == null ? void 0 : F.img) || "",
        bonus: Number(O.bonus) || 0,
        damage: O.damage ?? ""
      };
    });
    const W = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Xe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = C.map((d) => {
      var X, ee, Re;
      const D = d.id;
      let O = null, L = {};
      for (const ue of f)
        if ((((X = n[ue]) == null ? void 0 : X.itemId) ?? "").trim() === D) {
          O = ue, L = n[ue] ?? {};
          break;
        }
      const F = !!O, j = ((ee = d.system) == null ? void 0 : ee.equipped) !== void 0 && ((Re = d.system) == null ? void 0 : Re.equipped) !== null ? !!d.system.equipped : F, K = (d == null ? void 0 : d.system) ?? {}, V = typeof K.range == "string" ? (K.range || "").trim() : "", Q = K.type ?? "", Y = (W[Q] ?? Q) || "—", te = K.size ?? "", ne = (Xe[te] ?? te) || "", oe = [Y, ne].filter(Boolean).join(", ") || Y || "—", se = Y === "Lövedékes", re = K.quantity, ie = re != null ? String(re).trim() : "1";
      return {
        slotKey: O ?? "",
        itemId: D,
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
      const D = `slot${d}`, O = S[D] ?? {}, L = (O.itemId ?? "").trim(), F = he.find((Y) => Y.id === L), j = ((V = F == null ? void 0 : F.system) == null ? void 0 : V.abilityType) ?? "", K = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—";
      return {
        slotKey: D,
        itemId: L,
        name: (F == null ? void 0 : F.name) ?? O.name ?? we,
        typeLabel: K,
        description: (((Q = F == null ? void 0 : F.system) == null ? void 0 : Q.description) ?? "").trim() || "—"
      };
    });
    const we = "— Nincs Mikro-Chip —", ce = (d) => {
      const D = [];
      return d !== 1 && D.push(N), d !== 2 && D.push(T), d !== 3 && D.push(_), D;
    };
    e.microchipItemsSlot1 = ae.filter((d) => !ce(1).includes(d.id)), e.microchipItemsSlot2 = ae.filter((d) => !ce(2).includes(d.id)), e.microchipItemsSlot3 = ae.filter((d) => !ce(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const D = `slot${d}`, O = S[D] ?? {}, L = (O.itemId ?? "").trim(), F = ae.find((j) => j.id === L);
      e[`microchip${d}ItemId`] = L, e[`microchip${d}DisplayName`] = (F == null ? void 0 : F.name) || O.name || we, e[`microchip${d}Img`] = (F == null ? void 0 : F.img) || "", e[`microchip${d}Active`] = O.active === !0;
    });
    const be = this.actor.system.abilities ?? {}, Ze = (((Me = this.actor.items) == null ? void 0 : Me.contents) ?? []).filter((d) => d.type === "Képesség").map((d) => {
      var D, O, L;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((D = d.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((O = d.system) == null ? void 0 : O.description) ?? "",
        kp: Number(((L = d.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), ke = new Map(Ze.map((d) => [d.id, d])), Ve = "— Nincs képesség —", ve = (d) => {
      const D = be[d] ?? {}, O = (D.itemId ?? "").trim(), L = O ? ke.get(O) : null, F = (L == null ? void 0 : L.description) ?? "", j = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: O,
        displayName: (L == null ? void 0 : L.name) || D.name || Ve,
        img: (L == null ? void 0 : L.img) || "",
        description: F,
        kp: j
      };
    };
    e.abilityFajiSlot = ve("faji"), e.abilityHatterSlot = ve("hatter");
    const Ie = (d) => {
      const D = be[d];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, Se = (d) => d.map((D) => {
      const O = ke.get(D);
      return O ? {
        id: O.id,
        name: O.name,
        img: O.img,
        description: O.description,
        kp: O.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Se(Ie("passive")), e.abilityActiveList = Se(Ie("active")), e;
  }
  _attachFrameListeners(s) {
    var b, k;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (r) => {
      r.preventDefault(), r.stopPropagation();
      const l = (r.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-WtuF6HRw.mjs");
      n(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var n, m, g;
      r.preventDefault(), r.stopPropagation();
      const o = r.currentTarget;
      let l = (o.dataset.itemId ?? "").trim();
      if (!l) {
        const f = (o.dataset.slot ?? "").trim();
        if (!f) return;
        l = (((((m = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : m.weapons) ?? {})[f] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = o.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (r) => {
      var n;
      const o = r ? r.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const l = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (k = e.querySelector) == null ? void 0 : k.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (r) => {
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var g;
      r.preventDefault();
      const o = r.currentTarget, l = o.dataset.skill, n = ((g = o.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-WtuF6HRw.mjs");
      m(this.actor, l, n);
    }), t.on("click", ".karakter-roll-morale-d8", (r) => {
      r.preventDefault(), this._rollMorale();
    });
    const c = (r, o) => {
      var m;
      const l = r.dataset.itemId;
      if (!l) return;
      const n = this.actor.items.get(l);
      if (n) {
        if (r.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const g = r.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (m = n.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), c(r.currentTarget, r);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), c(r.currentTarget, r);
    }), t.on("change", ".karakter-item-qty", async (r) => {
      const o = r.currentTarget, l = o.dataset.itemId;
      if (!l) return;
      const n = this.actor.items.get(l);
      if (!n) return;
      let m = Number(o.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await n.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const n = this.actor, m = n.items.get(l), g = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const f = n.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = h ? h.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], T = N.find((_) => {
          var v;
          return (((v = f[_]) == null ? void 0 : v.itemId) ?? "").trim() === l;
        });
        if (T) {
          const _ = N.filter((v) => v !== T);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${T}.itemId`] = "", g[`system.weapons.${T}.name`] = "", g[`system.weapons.${T}.damage`] = "", g[`system.weapons.${T}.bonus`] = "";
        }
      }
      Object.keys(g).length && await n.update(g), await n.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (r) => {
      var T, _;
      const o = r.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const n = this.actor.items.get(l);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, g = (m.slotOrder ?? "").trim(), f = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], h = g ? g.split(/\s*,\s*/).filter((v) => f.includes(v)) : [], S = h.find((v) => {
        var I;
        return (((I = m[v]) == null ? void 0 : I.itemId) ?? "").trim() === l;
      }) ?? null;
      if (o.checked) {
        if (S) return;
        let v = h.find((C) => {
          var P;
          return !((P = m[C]) != null && P.itemId);
        });
        const I = new Set(h);
        if (!v) {
          const C = f.find((P) => !I.has(P));
          if (!C) return;
          v = C, h.push(C);
        }
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${v}.itemId`]: l,
          [`system.weapons.${v}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${v}.damage`]: ((T = n == null ? void 0 : n.system) == null ? void 0 : T.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((_ = n == null ? void 0 : n.system) == null ? void 0 : _.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const v = h.filter((I) => I !== S);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (r) => {
      r.preventDefault();
      const o = r.currentTarget;
      if (o.disabled) return;
      const l = o.closest(".karakter-microchip-slot-select-wrap"), n = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (r) => {
      var v;
      r.preventDefault();
      const o = r.currentTarget, l = o.closest(".karakter-microchip-slot-select-wrap"), n = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = n == null ? void 0 : n.dataset.slot;
      if (!m) return;
      const g = (o.dataset.itemId ?? "").trim(), f = (o.dataset.itemName ?? ((v = o.textContent) == null ? void 0 : v.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", h = (o.dataset.itemImg ?? "").trim(), S = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = f);
      let N = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      h ? (N || (N = document.createElement("img"), N.className = "karakter-microchip-slot-thumb", N.alt = "", n == null || n.insertBefore(N, S)), N.src = h, N.style.display = "") : N && N.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const T = g ? this.actor.items.get(g) : null, _ = {
        [`system.gear.microchips.${m}.itemId`]: g,
        [`system.gear.microchips.${m}.name`]: (T == null ? void 0 : T.name) ?? ""
      };
      g && (_[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (r) => {
      $(r.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (r) => {
      const o = r.currentTarget.dataset.slot;
      if (!o) return;
      const l = r.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${o}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((r, o) => {
      const l = o.dataset.slot;
      o.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, l)), o.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, l));
    }), t.find(".karakter-ability-slot-single").each((r, o) => {
      const l = o.dataset.slot;
      l && (o.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, l)), o.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((r, o) => {
      const l = o.dataset.area;
      l && (o.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, l)), o.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const o = r.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var f;
      if (r.preventDefault(), !r.altKey) return;
      const o = r.currentTarget.dataset.area, l = r.currentTarget.dataset.itemId;
      if (!o || !l) return;
      const n = this.actor.system.abilities ?? {}, g = (Array.isArray((f = n[o]) == null ? void 0 : f.items) ? n[o].items.slice() : []).filter((h) => h !== l);
      await this.actor.update({ [`system.abilities.${o}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (r) => {
      var m;
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const n = this.actor.items.get(l);
      (m = n == null ? void 0 : n.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (r) => {
      this._resizeWeaponQuantityInput(r.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((r, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (r) => {
      const o = r.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const n = this.actor.items.get(l);
      if (!n || n.type !== "Fegyver") return;
      const m = (o.value ?? "").trim();
      await n.update({ "system.quantity": m }), setTimeout(() => {
        const g = this.form ?? this.element, f = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        f && this._resizeWeaponQuantityInput(f);
      }, 80);
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (r) => {
      var T, _;
      const o = r.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const n = this.actor.items.get(l);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, g = (m.slotOrder ?? "").trim(), f = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], h = g ? g.split(/\s*,\s*/).filter((v) => f.includes(v)) : [], S = h.find((v) => {
        var I;
        return (((I = m[v]) == null ? void 0 : I.itemId) ?? "").trim() === l;
      }) ?? null;
      if (o.checked) {
        if (S) return;
        let v = h.find((C) => {
          var P;
          return !((P = m[C]) != null && P.itemId);
        });
        const I = new Set(h);
        if (!v) {
          const C = f.find((P) => !I.has(P));
          if (!C) return;
          v = C, h.push(C);
        }
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${v}.itemId`]: l,
          [`system.weapons.${v}.name`]: n.name ?? "",
          [`system.weapons.${v}.damage`]: ((T = n.system) == null ? void 0 : T.damage) ?? "",
          [`system.weapons.${v}.bonus`]: ((_ = n.system) == null ? void 0 : _.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const v = h.filter((I) => I !== S);
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const n = this.actor, m = n.items.get(l), g = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const f = n.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = h ? h.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], T = N.find((_) => {
          var v;
          return (((v = f[_]) == null ? void 0 : v.itemId) ?? "").trim() === l;
        });
        if (T) {
          const _ = N.filter((v) => v !== T);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${T}.itemId`] = "", g[`system.weapons.${T}.name`] = "", g[`system.weapons.${T}.damage`] = "", g[`system.weapons.${T}.bonus`] = "";
        }
      }
      Object.keys(g).length && await n.update(g), await n.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-remove", async (r) => {
      var n, m;
      r.preventDefault();
      const o = parseInt(r.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const l = Array.isArray((m = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(o, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (r) => {
      var l, n, m, g;
      r.preventDefault();
      const o = r.currentTarget.dataset.gearArray;
      if (o === "armor") {
        const f = Array.isArray((n = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : n.armor) ? [...this.actor.system.gear.armor] : [];
        f.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": f });
      } else if (o === "generalItems") {
        const f = Array.isArray((g = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : g.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        f.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": f });
      }
    }), t.on("click", ".karakter-microchip-clear", async (r) => {
      r.preventDefault();
      const o = r.currentTarget.dataset.slotKey;
      o && await this.actor.update({
        [`system.gear.microchips.${o}.itemId`]: "",
        [`system.gear.microchips.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (r) => {
      var n, m;
      r.preventDefault();
      const o = parseInt(r.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(o) || o < 0) return;
      const l = Array.isArray((m = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(o, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const u = this, p = (r) => {
      var n, m, g, f;
      if (!r) return;
      const o = u._getFormDataForUpdate(r);
      if (Object.keys(o).length === 0) return;
      const l = ((m = (n = o.system) == null ? void 0 : n.resources) == null ? void 0 : m.currentHealth) != null || ((f = (g = o.system) == null ? void 0 : g.resources) == null ? void 0 : f.hitLocations) != null;
      u.actor.update(o).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((h) => console.warn("VoidKarakterSheet save failed", h));
    }, w = (r) => {
      var o, l, n;
      return r && (((l = (o = u.element) == null ? void 0 : o.contains) == null ? void 0 : l.call(o, r)) || u.id && ((n = r.closest) == null ? void 0 : n.call(r, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (r) => {
      const o = r.target;
      if (!o || !o.form) return;
      const l = o.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const n = o.form;
      w(n) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, w;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let k;
      b.type === "checkbox" ? k = b.checked : b.type === "number" ? k = b.value === "" ? 0 : Number(b.value) : k = b.value ?? "", foundry.utils.setProperty(e, b.name, k);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const b of c) {
      const k = ((w = i[b]) == null ? void 0 : w.value) ?? 0, r = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, x._healthStatusFromRatio(r, k));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var c, u, p, w, b, k, r, o, l, n, m, g;
    const t = s.target, i = (c = t == null ? void 0 : t.closest) == null ? void 0 : c.call(t, ".karakter-ability-slot-single"), a = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let f = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!f && typeof e == "object") {
        for (const h of Object.values(e))
          if (typeof h == "string" && h.includes(".") && h.startsWith("Item.")) {
            f = h;
            break;
          }
      }
      if (f) {
        const h = await fromUuid(f);
        if (h && h.documentName === "Item" && h.type === "Képesség") {
          let S = h.id;
          ((w = h.parent) == null ? void 0 : w.id) !== this.actor.id && (S = ((b = (await this.actor.createEmbeddedDocuments("Item", [h.toObject()]))[0]) == null ? void 0 : b.id) ?? S);
          const N = (((k = h.system) == null ? void 0 : k.kind) ?? "passive").toString(), T = this.actor.system.abilities ?? {};
          if (i) {
            const I = i.dataset.slot;
            if (I) {
              await this.actor.update({
                [`system.abilities.${I}.itemId`]: S,
                [`system.abilities.${I}.name`]: h.name
              });
              return;
            }
          } else if (a) {
            const I = a.dataset.area;
            if (I) {
              const C = Array.isArray((r = T[I]) == null ? void 0 : r.items) ? T[I].items.slice() : Array.isArray(T[I]) ? T[I].slice() : [];
              C.includes(S) || C.push(S), await this.actor.update({ [`system.abilities.${I}.items`]: C });
              return;
            }
          }
          if (N === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": S,
              "system.abilities.faji.name": h.name
            });
            return;
          }
          if (N === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": S,
              "system.abilities.hatter.name": h.name
            });
            return;
          }
          const _ = N === "active" ? "active" : "passive", v = Array.isArray((o = T[_]) == null ? void 0 : o.items) ? T[_].items.slice() : Array.isArray(T[_]) ? T[_].slice() : [];
          v.includes(S) || v.push(S), await this.actor.update({ [`system.abilities.${_}.items`]: v });
          return;
        }
      }
    }
    if (e) {
      let f = e.uuid ?? e.documentUuid ?? ((l = e.data) == null ? void 0 : l.uuid) ?? (typeof e == "string" ? e : null);
      if (!f && typeof e == "object") {
        for (const h of Object.values(e))
          if (typeof h == "string" && h.includes(".") && h.startsWith("Item.")) {
            f = h;
            break;
          }
      }
      if (f) {
        const h = await fromUuid(f);
        if (h && h.documentName === "Item" && h.type === "Fegyver") {
          const S = this.actor, N = ((n = h.parent) == null ? void 0 : n.id) !== S.id;
          let T = h.id;
          if (N) {
            const _ = foundry.utils.mergeObject(h.toObject(), { system: { ...h.toObject().system ?? {}, equipped: !1 } });
            T = ((m = (await S.createEmbeddedDocuments("Item", [_]))[0]) == null ? void 0 : m.id) ?? T;
          }
          if (N) {
            const _ = ((g = S.system) == null ? void 0 : g.weapons) ?? {}, v = (_.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((J) => I.includes(J)) : [], P = C.filter((J) => {
              var H;
              return (((H = _[J]) == null ? void 0 : H.itemId) ?? "").trim() === T;
            });
            if (P.length > 0) {
              const H = {
                "system.weapons.slotOrder": C.filter((W) => !P.includes(W)).join(",")
              };
              for (const W of P)
                H[`system.weapons.${W}.itemId`] = "", H[`system.weapons.${W}.name`] = "", H[`system.weapons.${W}.damage`] = "", H[`system.weapons.${W}.bonus`] = "";
              await S.update(H);
            }
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var a, c, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, w, b, k, r;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((w = s.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "Fegyver") return;
    if (((b = a.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [o]);
      return;
    }
    const c = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((k = a.system) == null ? void 0 : k.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((r = a.system) == null ? void 0 : r.bonus) ?? ""
    }), await a.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var i;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (i = s.currentTarget) == null || i.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(s, e) {
    var t;
    (t = s.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(s, e) {
    var w, b;
    s.preventDefault(), (w = s.currentTarget) == null || w.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = s.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((k, r) => {
      const o = typeof k.sort == "number" ? k.sort : 0, l = typeof r.sort == "number" ? r.sort : 0;
      return o - l;
    }).map((k) => k.id), c = a.indexOf(t), u = a.indexOf(e);
    if (c === -1 || u === -1) return;
    a.splice(c, 1), a.splice(u, 0, t);
    const p = a.map((k, r) => ({
      _id: k,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, a, c;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
    const i = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, i)}px`;
  }
  async _postAbilityToChat(s) {
    var b, k, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Képesség") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", i = Number(((k = e.system) == null ? void 0 : k.kp) ?? 0) || 0, a = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", w = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: w,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var i, a;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var c, u, p;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Képesség") return;
    let a = i.id;
    ((u = i.parent) == null ? void 0 : u.id) !== this.actor.id && (a = ((p = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : p.id) ?? a), await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, w, b, k;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Képesség") return;
    let a = i.id;
    ((w = i.parent) == null ? void 0 : w.id) !== this.actor.id && (a = ((b = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : b.id) ?? a);
    const c = this.actor.system.abilities ?? {}, u = Array.isArray((k = c[e]) == null ? void 0 : k.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, c, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, w, b, k;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((w = s.dataTransfer) == null ? void 0 : w.getData("application/json")) || "";
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
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (c = ((k = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : k.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(i) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? a -= 6 : c === 2 && (a -= 3);
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
    const i = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": i });
  }
  async _rollWeapon(s) {
    var f;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, a = this.actor.items.filter((h) => h.type === "Fegyver");
    let c = null;
    t.itemId && (c = a.find((h) => h.id === t.itemId) ?? null);
    const u = c && c.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((f = c == null ? void 0 : c.system) == null ? void 0 : f.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", k = Number(i[b] || 0) || 0, r = p + k, l = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, n = new Roll(l);
    await n.evaluate({ async: !0 });
    const m = n.total >= 18 ? "critical" : n.total <= 3 ? "fumble" : null, g = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: g
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, w, b, k, r, o, l, n, m, g;
    const t = this.actor;
    if (!t) return;
    let i = ((w = (p = t.items).get) == null ? void 0 : w.call(p, s)) ?? ((k = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : k.call(b, (f) => f.id === s));
    if (!i || i.type !== "Fegyver") return;
    let a = (((r = i.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!a && e && (a = (((((o = t.system) == null ? void 0 : o.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (g = (l = ui.notifications) == null ? void 0 : l.warn) == null || g.call(l, ((m = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : m.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(a);
    await c.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
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
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
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
      const c = e._getFormDataForUpdate(a);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (a) => {
      var c, u, p;
      return a && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, w;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      i(c) && t(c);
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
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
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
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
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
      const c = e._getFormDataForUpdate(a);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (a) => {
      var c, u, p;
      return a && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, w;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      i(c) && t(c);
    }, e._votvInput = (a) => {
      var u, p, w;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      i(c) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(c), 300));
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
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", foundry.utils.setProperty(e, t.name, i);
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
      const i = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(i).replace(/\./g, "-")}`;
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
      const c = e._getFormDataForUpdate(a);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (a) => {
      var c, u, p;
      return a && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, w;
      const c = ((u = a.target) == null ? void 0 : u.form) ?? ((w = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : w.call(p, "form"));
      i(c) && t(c);
    }, e._votvInput = (a) => {
      var p;
      const c = a.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const u = (c == null ? void 0 : c.form) ?? ((p = c == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      i(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
      let i;
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", !(t.name === "name" && typeof i == "string" && i.trim() === "") && foundry.utils.setProperty(e, t.name, i);
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
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qe = M(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !0 })
}));
let ge = G;
const pt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var e, t, i, a, c;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ot, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ct, CONFIG.Item.dataModels.microchip = ut, CONFIG.Item.dataModels.Képesség = mt, (i = CONFIG.Actor).trackableAttributes ?? (i.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (c = CONFIG.Item).typeLabels ?? (c.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Képesség = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", pe, {
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
  const E = "votv-ability-to-kepesseg";
  Hooks.once("ready", async () => {
    var p, w;
    if (game.settings.get("vacuum-of-the-void", E)) return;
    let u = 0;
    for (const b of ((p = game.actors) == null ? void 0 : p.contents) ?? []) {
      const k = (((w = b.items) == null ? void 0 : w.contents) ?? []).filter((r) => r.type === "ability");
      for (const r of k)
        try {
          await r.update({ type: "Képesség" }), u++;
        } catch (o) {
          console.warn("Vacuum of the Void | Migration: could not update item", r.id, o);
        }
    }
    u > 0 && await game.settings.set("vacuum-of-the-void", E, !0);
  }), game.settings.register("vacuum-of-the-void", E, {
    type: Boolean,
    default: !1,
    scope: "world",
    config: !1
  });
  const s = 500;
  Hooks.on("updateActor", (u, p, w, b) => {
    var S, N, T, _, v;
    const k = u == null ? void 0 : u.id;
    if (!k) return;
    const r = document.activeElement, o = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA" || r.isContentEditable), l = [], n = (S = game.actors) == null ? void 0 : S.get(k);
    n != null && n.apps && l.push(...Array.from(n.apps));
    const m = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const I of m)
      ((N = I.document) == null ? void 0 : N.id) !== k || ((T = I.document) == null ? void 0 : T.documentName) !== "Actor" || ((_ = I.constructor) == null ? void 0 : _.name) !== "VoidKarakterSheet" || l.includes(I) || l.push(I);
    if (o && l.some((I) => {
      const C = (I == null ? void 0 : I.form) ?? (I == null ? void 0 : I.element);
      return C && C.contains(r);
    })) return;
    const f = (v = game.votv) == null ? void 0 : v._lastKarakterSheetBlurSave, h = f && Date.now() - f.at < s ? f.appId : null;
    setTimeout(() => {
      for (const I of l)
        !(I != null && I.rendered) || typeof I.render != "function" || I.id !== h && I.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var i, a, c, u, p, w;
      if (!((a = (i = E.target) == null ? void 0 : i.closest) != null && a.call(i, "#actors"))) return;
      const s = (u = (c = E.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((w = game.actors) != null && w.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, s, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, i = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = i ? (u = game.actors) == null ? void 0 : u.get(i) : null;
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
  var a, c, u;
  const t = (c = (a = E.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : c.resultType;
  if (!t) return;
  const i = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  pe as V
};
//# sourceMappingURL=vacuum-of-the-void-D1GyaI78.mjs.map
