var Qe = Object.defineProperty;
var Ve = Object.getPrototypeOf;
var et = Reflect.get;
var tt = (E, r, e) => r in E ? Qe(E, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[r] = e;
var B = (E, r, e) => tt(E, typeof r != "symbol" ? r + "" : r, e);
var j = (E, r, e) => et(Ve(E), e, r);
const { HTMLField: rt, NumberField: w, SchemaField: _, StringField: f, BooleanField: P, ArrayField: oe } = foundry.data.fields;
class it extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new _({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new w({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new _({
        health: new _({
          value: new w({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new w({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new _({
          head: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new _({
          head: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new w({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new _({
          head: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new _({
          value: new w({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new w({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new w({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new _({
        defense: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new w({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new _({
        deception: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new w({ required: !1, integer: !0, min: 0, initial: 0 })
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
            active: new P({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new P({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new P({ required: !1, initial: !1 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" }),
        armor: new oe(
          new _({
            name: new f({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new f({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new f({ required: !1, blank: !0, initial: "" }),
            level: new f({ required: !1, blank: !0, initial: "" }),
            other: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new oe(
          new _({
            name: new f({ required: !1, blank: !0, initial: "" }),
            quantity: new w({ required: !1, integer: !0, min: 0, initial: 1 }),
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
          items: new oe(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new oe(
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
const { NumberField: ue, SchemaField: at } = foundry.data.fields;
class st extends it {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new at({
        body: new ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: nt, StringField: Z } = foundry.data.fields;
class ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
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
      quantity: new nt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: de, StringField: He } = foundry.data.fields;
class lt extends foundry.abstract.TypeDataModel {
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
      cost: new de({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new de({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new de({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ct, StringField: Ue } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
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
      kp: new ct({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Ke, Be, Ge, ze;
const C = class C extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(r) {
    var a, n, o, u;
    if (!r) return { form: null, windowContent: null };
    const e = ((a = r.querySelector) == null ? void 0 : a.call(r, "form.votv.karakter-sheet")) ?? ((n = r.querySelector) == null ? void 0 : n.call(r, "form.votv")) ?? null, t = ((o = r.querySelector) == null ? void 0 : o.call(r, ".votv-scroll")) ?? ((u = r.querySelector) == null ? void 0 : u.call(r, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(r) {
    const { form: e, windowContent: t } = this._getScrollContainers(r), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(r, e) {
    if (!r || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(r);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
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
      const h = document.activeElement, v = o.contains(h), I = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA");
      v && I && (u.focus = {
        name: h.name || null,
        id: h.id || null,
        selectionStart: "selectionStart" in h ? h.selectionStart : 0,
        selectionEnd: "selectionEnd" in h ? h.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const y = this.element, g = this.form ?? this.element, i = u.scrollState, s = u.focus, l = typeof (i == null ? void 0 : i.formScrollTop) == "number" || typeof (i == null ? void 0 : i.windowScrollTop) == "number", c = () => {
      var h, v;
      if (this._applyScrollState(y, i), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const I = ((h = g.querySelector) == null ? void 0 : h.call(g, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (v = g.querySelector) == null ? void 0 : v.call(g, `[name="${CSS.escape(s.name)}"]`) : null);
        I && (I.tagName === "INPUT" || I.tagName === "TEXTAREA") && (I.focus({ preventScroll: !0 }), typeof I.selectionStart == "number" && (I.selectionStart = s.selectionStart ?? 0, I.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(y, i);
    };
    return (l || s) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(r, e) {
    const t = Number(r), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const n = Math.floor(a / 3), o = Math.floor(2 * a / 3);
    return t <= n ? 1 : t <= o ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(r = null) {
    var g, i, s, l, c, m, h, v, I;
    const e = r ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((s = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : s.resources) ?? {}, n = ((c = (l = a.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : c.value) ?? 0, o = ((m = a.currentHealth) == null ? void 0 : m.legs) ?? 0, u = C._healthStatusFromRatio(o, n), p = Number(((I = (v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let y;
    u === 0 ? y = 0 : u === 1 ? y = -6 : u === 2 ? y = -3 : y = p, t.textContent = String(y);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var o, u, p, y;
    const e = C.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, a = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, n = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return C._healthStatusFromRatio(n, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var u, p, y, g;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((u = r == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, n = ((y = (p = a.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, o = ((g = a.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return C._healthStatusFromRatio(o, n);
  }
  async _prepareContext(r) {
    var Ie, Se, qe, Te, De, Oe, _e, Ae, Le, Fe, Ne, Ee, $e, Ce, xe, je, Pe;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((qe = (Se = (Ie = this.actor.system) == null ? void 0 : Ie.resources) == null ? void 0 : Se.stress) == null ? void 0 : qe.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, n = a.hitLocations ?? {}, o = a.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const k = ((Te = n[d]) == null ? void 0 : Te.value) ?? 0, q = o[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(q, k);
    }
    const p = (Number(o.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((d) => (Number(o[d]) || 0) === 0).length;
    e.showDeathSkull = p || g >= 2;
    const i = e.computedHealthStatus.legs ?? 3, s = Number(((Oe = (De = this.actor.system) == null ? void 0 : De.combat) == null ? void 0 : Oe.givenSpeed) ?? 0) || 0;
    let l;
    i === 0 ? l = 0 : i === 1 ? l = -6 : i === 2 ? l = -3 : l = s, e.effectiveGivenSpeed = l, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l } },
      { inplace: !1 }
    );
    const c = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, k] of Object.entries(c)) {
      const q = e.computedHealthStatus[k];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const m = this.actor.system.weapons ?? {}, h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = (m.slotOrder ?? "").trim(), I = v ? v.split(/\s*,\s*/).filter((d) => h.includes(d)) : [], F = (_e = this.actor.system.gear) == null ? void 0 : _e.microchips, b = F && typeof F == "object" && !Array.isArray(F) ? F : {}, L = (((Ae = b.slot1) == null ? void 0 : Ae.itemId) ?? "").trim(), A = (((Le = b.slot2) == null ? void 0 : Le.itemId) ?? "").trim(), O = (((Fe = b.slot3) == null ? void 0 : Fe.itemId) ?? "").trim(), M = this.actor.items.contents.filter((d) => d.type !== "ability").slice().sort((d, k) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof k.sort == "number" ? k.sort : 0;
      return q - T;
    }).map((d) => {
      var ae, V, ee, se, Me, Re;
      const k = d.type === "Fegyver", q = d.type === "microchip";
      let T = 0, D = "", x = null;
      for (let ne = 0; ne < I.length; ne++) {
        const ce = I[ne];
        if ((((ae = m[ce]) == null ? void 0 : ae.itemId) ?? "") === d.id) {
          T = ne + 1, D = ((V = m[ce]) == null ? void 0 : V.bonus) ?? "", x = ce;
          break;
        }
      }
      let U = null;
      q && (L === d.id ? U = "slot1" : A === d.id ? U = "slot2" : O === d.id && (U = "slot3"));
      const J = k && ((ee = d.system) != null && ee.damage) ? d.system.damage : "", X = k && typeof ((se = d.system) == null ? void 0 : se.range) == "string" ? (d.system.range || "").trim() : "", Q = x ? Number((Me = m[x]) == null ? void 0 : Me.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: k,
        slotAssignment: T,
        slotBonus: D,
        slotKey: x,
        microchipSlotKey: U,
        isEquipped: !!(x || U),
        damage: J,
        rangeStr: X,
        slotBonusNum: Q,
        quantity: Number(((Re = d.system) == null ? void 0 : Re.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const N = (((Ne = this.actor.items) == null ? void 0 : Ne.contents) ?? []).filter((d) => d.type === "Fegyver"), R = N.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = R;
    const Y = "— Nincs fegyver —", te = I.filter((d) => {
      const q = ((m[d] ?? {}).itemId ?? "").trim();
      return q ? !!N.find((D) => D.id === q) : !1;
    });
    e.weaponSlots = te.map((d, k) => {
      const q = m[d] ?? {}, T = (q.itemId ?? "").trim(), D = R.find((x) => x.id === T);
      return {
        slotKey: d,
        slotNum: k + 1,
        displayName: (D == null ? void 0 : D.name) || q.name || Y,
        img: (D == null ? void 0 : D.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const K = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, H = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = te.map((d) => {
      const k = m[d] ?? {}, q = (k.itemId ?? "").trim(), T = N.find((se) => se.id === q), D = (T == null ? void 0 : T.system) ?? {}, x = typeof D.range == "string" ? (D.range || "").trim() : "", U = D.type ?? "", J = (K[U] ?? U) || "—", X = D.size ?? "", Q = (H[X] ?? X) || "", ae = [J, Q].filter(Boolean).join(", ") || J || "—", V = U === "projectile", ee = Number(D.quantity ?? 1) || 1;
      return {
        slotKey: d,
        itemId: q,
        name: (T == null ? void 0 : T.name) ?? k.name ?? Y,
        img: (T == null ? void 0 : T.img) ?? "",
        bonus: String(k.bonus ?? "").trim() || "0",
        damage: k.damage ?? D.damage ?? "",
        rangeStr: x || "—",
        typeLabel: J,
        typeAndSize: ae,
        quantity: ee,
        quantityDisplay: V ? ee : "—",
        isProjectile: V,
        special: (D.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray(($e = (Ee = this.actor.system) == null ? void 0 : Ee.gear) == null ? void 0 : $e.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.generalItems) ? this.actor.system.gear.generalItems : [];
    const re = (((je = this.actor.items) == null ? void 0 : je.contents) ?? []).filter((d) => d.type === "microchip"), ie = re.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var J, X;
      const k = `slot${d}`, q = b[k] ?? {}, T = (q.itemId ?? "").trim(), D = re.find((Q) => Q.id === T), x = ((J = D == null ? void 0 : D.system) == null ? void 0 : J.abilityType) ?? "", U = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: k,
        itemId: T,
        name: (D == null ? void 0 : D.name) ?? q.name ?? ge,
        typeLabel: U,
        description: (((X = D == null ? void 0 : D.system) == null ? void 0 : X.description) ?? "").trim() || "—"
      };
    });
    const ge = "— Nincs Mikro-Chip —", le = (d) => {
      const k = [];
      return d !== 1 && k.push(L), d !== 2 && k.push(A), d !== 3 && k.push(O), k;
    };
    e.microchipItemsSlot1 = ie.filter((d) => !le(1).includes(d.id)), e.microchipItemsSlot2 = ie.filter((d) => !le(2).includes(d.id)), e.microchipItemsSlot3 = ie.filter((d) => !le(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const k = `slot${d}`, q = b[k] ?? {}, T = (q.itemId ?? "").trim(), D = ie.find((x) => x.id === T);
      e[`microchip${d}ItemId`] = T, e[`microchip${d}DisplayName`] = (D == null ? void 0 : D.name) || q.name || ge, e[`microchip${d}Img`] = (D == null ? void 0 : D.img) || "", e[`microchip${d}Active`] = q.active === !0;
    });
    const he = this.actor.system.abilities ?? {}, Xe = (((Pe = this.actor.items) == null ? void 0 : Pe.contents) ?? []).map((d) => {
      var k, q, T;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((k = d.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((q = d.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = d.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), be = new Map(Xe.map((d) => [d.id, d])), Ze = "— Nincs képesség —", we = (d) => {
      const k = he[d] ?? {}, q = (k.itemId ?? "").trim(), T = q ? be.get(q) : null, D = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || k.name || Ze,
        img: (T == null ? void 0 : T.img) || "",
        description: D,
        kp: x
      };
    };
    e.abilityFajiSlot = we("faji"), e.abilityHatterSlot = we("hatter");
    const ke = (d) => {
      const k = he[d];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, ve = (d) => d.map((k) => {
      const q = be.get(k);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ve(ke("passive")), e.abilityActiveList = ve(ke("active")), e;
  }
  _attachFrameListeners(r) {
    var g;
    super._attachFrameListeners(r);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const a = (i) => {
      var c;
      const s = i ? i.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!s) return;
      const l = Number(s.value) || 0;
      s.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const n = (g = e.querySelector) == null ? void 0 : g.call(e, 'input[name="system.resources.stress.value"]');
    n && a({ currentTarget: n }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (s) => {
          s && this.actor.update({ img: s });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const s = i.currentTarget, l = s.dataset.skill, c = ((h = s.textContent) == null ? void 0 : h.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-Dc6Ua9vr.mjs");
      m(this.actor, l, c);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const o = (i, s) => {
      var m;
      const l = i.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (c) {
        if (i.classList.contains("karakter-weapon-label") && (s.altKey || s.shiftKey || s.ctrlKey || s.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
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
      const s = i.currentTarget, l = s.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c) return;
      let m = Number(s.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor, m = c.items.get(l), h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = c.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = I ? I.split(/\s*,\s*/).filter((A) => F.includes(A)) : [], L = b.find((A) => {
          var O;
          return (((O = v[A]) == null ? void 0 : O.itemId) ?? "").trim() === l;
        });
        if (L) {
          const A = b.filter((O) => O !== L);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      i.preventDefault();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const h = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      h && await this._rollWeaponDamage(h);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var b, L;
      const s = i.currentTarget, l = (s.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.system.weapons ?? {}, m = (c.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = m ? m.split(/\s*,\s*/).filter((A) => h.includes(A)) : [], I = v.find((A) => {
        var O;
        return (((O = c[A]) == null ? void 0 : O.itemId) ?? "").trim() === l;
      }) ?? null;
      if (s.checked) {
        if (I) return;
        let A = v.find((N) => {
          var R;
          return !((R = c[N]) != null && R.itemId);
        });
        const O = new Set(v);
        if (!A) {
          const N = h.find((R) => !O.has(R));
          if (!N) return;
          A = N, v.push(N);
        }
        const S = this.actor.items.get(l), M = {
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${A}.itemId`]: l,
          [`system.weapons.${A}.name`]: (S == null ? void 0 : S.name) ?? "",
          [`system.weapons.${A}.damage`]: ((b = S == null ? void 0 : S.system) == null ? void 0 : b.damage) ?? "",
          [`system.weapons.${A}.bonus`]: ((L = S == null ? void 0 : S.system) == null ? void 0 : L.bonus) ?? ""
        };
        await this.actor.update(M);
      } else if (I) {
        const O = {
          "system.weapons.slotOrder": v.filter((S) => S !== I).join(",")
        };
        O[`system.weapons.${I}.itemId`] = "", O[`system.weapons.${I}.name`] = "", O[`system.weapons.${I}.damage`] = "", O[`system.weapons.${I}.bonus`] = "", await this.actor.update(O);
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const s = i.currentTarget;
      if (s.disabled) return;
      const l = s.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var O;
      i.preventDefault();
      const s = i.currentTarget, l = s.closest(".karakter-microchip-slot-select-wrap"), c = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const h = (s.dataset.itemId ?? "").trim(), v = (s.dataset.itemName ?? ((O = s.textContent) == null ? void 0 : O.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (s.dataset.itemImg ?? "").trim(), F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      F && (F.textContent = v);
      let b = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      I ? (b || (b = document.createElement("img"), b.className = "karakter-microchip-slot-thumb", b.alt = "", c == null || c.insertBefore(b, F)), b.src = I, b.style.display = "") : b && b.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, A = {
        [`system.gear.microchips.${m}.itemId`]: h,
        [`system.gear.microchips.${m}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (A[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const s = i.currentTarget.dataset.slot;
      if (!s) return;
      const l = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${s}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((i, s) => {
      const l = s.dataset.slot;
      s.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, l)), s.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), s.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, l));
    }), t.find(".karakter-ability-slot-single").each((i, s) => {
      const l = s.dataset.slot;
      l && (s.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, l)), s.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), s.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, s) => {
      const l = s.dataset.area;
      l && (s.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, l)), s.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), s.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const s = i.currentTarget.dataset.slot;
      s && await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const s = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!s || !l) return;
      const c = this.actor.system.abilities ?? {}, h = (Array.isArray((v = c[s]) == null ? void 0 : v.items) ? c[s].items.slice() : []).filter((I) => I !== l);
      await this.actor.update({ [`system.abilities.${s}.items`]: h });
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
      const s = i.currentTarget.dataset.slotKey;
      s && await this.actor.update({
        [`system.weapons.${s}.itemId`]: "",
        [`system.weapons.${s}.name`]: "",
        [`system.weapons.${s}.bonus`]: "",
        [`system.weapons.${s}.damage`]: ""
      });
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const s = i.currentTarget, l = (s.dataset.itemId ?? "").trim();
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "Fegyver") return;
      const m = Math.max(0, parseInt(s.value, 10));
      Number.isFinite(m) && await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-armor-remove", async (i) => {
      var c, m;
      i.preventDefault();
      const s = parseInt(i.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(s) || s < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(s, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var l, c, m, h;
      i.preventDefault();
      const s = i.currentTarget.dataset.gearArray;
      if (s === "armor") {
        const v = Array.isArray((c = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : c.armor) ? [...this.actor.system.gear.armor] : [];
        v.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": v });
      } else if (s === "generalItems") {
        const v = Array.isArray((h = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : h.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        v.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": v });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const s = i.currentTarget.dataset.slotKey;
      s && await this.actor.update({
        [`system.gear.microchips.${s}.itemId`]: "",
        [`system.gear.microchips.${s}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var c, m;
      i.preventDefault();
      const s = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(s) || s < 0) return;
      const l = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(s, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const u = this, p = (i) => {
      var c, m, h, v;
      if (!i) return;
      const s = u._getFormDataForUpdate(i);
      if (Object.keys(s).length === 0) return;
      const l = ((m = (c = s.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((v = (h = s.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(s).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (i) => {
      var s, l, c;
      return i && (((l = (s = u.element) == null ? void 0 : s.contains) == null ? void 0 : l.call(s, i)) || u.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      const s = i.target;
      if (!s || !s.form) return;
      const l = s.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const c = s.form;
      y(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var u, p, y;
    const e = {};
    for (const g of r.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let i;
      g.type === "checkbox" ? i = g.checked : g.type === "number" ? i = g.value === "" ? 0 : Number(g.value) : i = g.value ?? "", foundry.utils.setProperty(e, g.name, i);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), a = t.hitLocations ?? {}, n = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const g of o) {
      const i = ((y = a[g]) == null ? void 0 : y.value) ?? 0, s = n[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, C._healthStatusFromRatio(s, i));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var o, u, p, y, g, i, s, l, c, m, h, v, I;
    const t = r.target, a = (o = t == null ? void 0 : t.closest) == null ? void 0 : o.call(t, ".karakter-ability-slot-single"), n = (u = t == null ? void 0 : t.closest) == null ? void 0 : u.call(t, ".karakter-ability-area");
    if (e) {
      let F = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!F && typeof e == "object") {
        for (const b of Object.values(e))
          if (typeof b == "string" && b.includes(".") && b.startsWith("Item.")) {
            F = b;
            break;
          }
      }
      if (F) {
        const b = await fromUuid(F);
        if (b && b.documentName === "Item" && b.type === "ability") {
          let L = b.id;
          ((y = b.parent) == null ? void 0 : y.id) !== this.actor.id && (L = ((g = (await this.actor.createEmbeddedDocuments("Item", [b.toObject()]))[0]) == null ? void 0 : g.id) ?? L);
          const A = (((i = b.system) == null ? void 0 : i.kind) ?? "passive").toString(), O = this.actor.system.abilities ?? {};
          if (a) {
            const N = a.dataset.slot;
            if (N) {
              await this.actor.update({
                [`system.abilities.${N}.itemId`]: L,
                [`system.abilities.${N}.name`]: b.name
              });
              return;
            }
          } else if (n) {
            const N = n.dataset.area;
            if (N) {
              const R = Array.isArray((s = O[N]) == null ? void 0 : s.items) ? O[N].items.slice() : Array.isArray(O[N]) ? O[N].slice() : [];
              R.includes(L) || R.push(L), await this.actor.update({ [`system.abilities.${N}.items`]: R });
              return;
            }
          }
          if (A === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": L,
              "system.abilities.faji.name": b.name
            });
            return;
          }
          if (A === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": L,
              "system.abilities.hatter.name": b.name
            });
            return;
          }
          const S = A === "active" ? "active" : "passive", M = Array.isArray((l = O[S]) == null ? void 0 : l.items) ? O[S].items.slice() : Array.isArray(O[S]) ? O[S].slice() : [];
          M.includes(L) || M.push(L), await this.actor.update({ [`system.abilities.${S}.items`]: M });
          return;
        }
      }
    }
    if (e) {
      let F = e.uuid ?? e.documentUuid ?? ((c = e.data) == null ? void 0 : c.uuid) ?? (typeof e == "string" ? e : null);
      if (!F && typeof e == "object") {
        for (const b of Object.values(e))
          if (typeof b == "string" && b.includes(".") && b.startsWith("Item.")) {
            F = b;
            break;
          }
      }
      if (F) {
        const b = await fromUuid(F);
        if (b && b.documentName === "Item" && b.type === "Fegyver") {
          const L = this.actor;
          let A = b.id;
          ((m = b.parent) == null ? void 0 : m.id) !== L.id && (A = ((h = (await L.createEmbeddedDocuments("Item", [b.toObject()]))[0]) == null ? void 0 : h.id) ?? A);
          const O = L.system.weapons ?? {}, S = (O.slotOrder ?? "").trim(), M = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], N = S ? S.split(/\s*,\s*/).filter((K) => M.includes(K)) : [];
          if (N.find((K) => {
            var H;
            return (((H = O[K]) == null ? void 0 : H.itemId) ?? "").trim() === A;
          })) return;
          let Y = N.find((K) => {
            var H;
            return !((H = O[K]) != null && H.itemId);
          });
          if (!Y) {
            const K = new Set(N), H = M.find((re) => !K.has(re));
            if (!H) return;
            Y = H, N.push(H);
          }
          const te = {
            "system.weapons.slotOrder": N.join(","),
            [`system.weapons.${Y}.itemId`]: A,
            [`system.weapons.${Y}.name`]: b.name ?? "",
            [`system.weapons.${Y}.damage`]: ((v = b.system) == null ? void 0 : v.damage) ?? "",
            [`system.weapons.${Y}.bonus`]: ((I = b.system) == null ? void 0 : I.bonus) ?? ""
          };
          await L.update(te);
          return;
        }
      }
    }
    return super._onDropItem(r, e);
  }
  _onWeaponSlotDragOver(r, e) {
    var n, o, u;
    const t = ((n = r.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = r.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(r, e) {
    var p, y, g, i, s, l, c;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((y = r.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((g = r.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const n = await fromUuid(a.uuid);
    if (!n || n.type !== "Fegyver") return;
    let o = n.id;
    ((i = n.parent) == null ? void 0 : i.id) !== this.actor.id && (o = ((s = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : s.id) ?? o);
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
    var a;
    const t = this._draggingInventoryItemId;
    !t || t === e || (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "move"), (a = r.currentTarget) == null || a.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(r, e) {
    var t;
    (t = r.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(r, e) {
    var y, g;
    r.preventDefault(), (y = r.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = r.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((i, s) => {
      const l = typeof i.sort == "number" ? i.sort : 0, c = typeof s.sort == "number" ? s.sort : 0;
      return l - c;
    }).map((i) => i.id), o = n.indexOf(t), u = n.indexOf(e);
    if (o === -1 || u === -1) return;
    n.splice(o, 1), n.splice(u, 0, t);
    const p = n.map((i, s) => ({
      _id: i,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(r) {
    var a, n, o;
    const e = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var g, i, s;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, n = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = n ? `<p>${n}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(r) {
    var a, n;
    const e = ((a = r.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var a;
    this._parseAbilityDrop(r) && (r.preventDefault(), (a = r.currentTarget) == null || a.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(r, e) {
    var o, u, p;
    r.preventDefault(), (o = r.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "ability") return;
    let n = a.id;
    ((u = a.parent) == null ? void 0 : u.id) !== this.actor.id && (n = ((p = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : p.id) ?? n), await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(r, e) {
    var a;
    this._parseAbilityDrop(r) && (r.preventDefault(), (a = r.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(r, e) {
    var p, y, g, i;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "ability") return;
    let n = a.id;
    ((y = a.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((g = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : g.id) ?? n);
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((i = o[e]) == null ? void 0 : i.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(n) || u.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(r, e) {
    var n, o, u;
    const t = ((n = r.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = r.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (r.preventDefault(), (u = r.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(r, e) {
    var u, p, y, g, i;
    r.preventDefault(), (u = r.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = r.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const n = await fromUuid(a.uuid);
    if (!n || n.type !== "microchip") return;
    let o = n.id;
    ((g = n.parent) == null ? void 0 : g.id) !== this.actor.id && (o = ((i = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : i.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(r, e) {
    const a = (this.actor.system.skills ?? {})[r] ?? 0;
    let n = Number(a) || 0;
    const o = this._getSkillHealthStatus(r);
    o === 1 ? n -= 6 : o === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const g = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g } },
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
    const a = Math.max(0, r - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollWeapon(r) {
    var I;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, a = this.actor.system.skills ?? {}, n = this.actor.items.filter((F) => F.type === "Fegyver");
    let o = null;
    t.itemId && (o = n.find((F) => F.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, g = (((I = o == null ? void 0 : o.system) == null ? void 0 : I.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", i = Number(a[g] || 0) || 0, s = p + i, c = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, m = new Roll(c);
    await m.evaluate({ async: !0 });
    const h = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h } },
      rollMode: v
    });
  }
  async _rollWeaponDamage(r) {
    var o;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "Fegyver") return;
    const t = (((o = e.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!t) return;
    const a = new Roll(t);
    await a.evaluate({ async: !0 });
    const n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: n
    });
  }
};
B(C, "PARTS", foundry.utils.mergeObject(j(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), B(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ke = j(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Ke.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Be = j(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Be.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((ze = (Ge = j(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) == null ? void 0 : ze.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
B(C, "BODY_PART_BY_SKILL", {
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
let me = C;
var We;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
    }, a = (n) => {
      var o, u, p;
      return n && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, y;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      a(o) && t(o);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
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
B(G, "PARTS", foundry.utils.mergeObject(j(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), B(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((We = j(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 })
}));
let pe = G;
var Ye;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
    }, a = (n) => {
      var o, u, p;
      return n && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, y;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      a(o) && t(o);
    }, e._votvInput = (n) => {
      var u, p, y;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      a(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
B(z, "PARTS", foundry.utils.mergeObject(j(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), B(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ye = j(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !0 })
}));
let fe = z;
var Je;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(r) {
    const e = super._initializeApplicationOptions(r), t = (r == null ? void 0 : r.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
    }, a = (n) => {
      var o, u, p;
      return n && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, y;
      const o = ((u = n.target) == null ? void 0 : u.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      a(o) && t(o);
    }, e._votvInput = (n) => {
      var p;
      const o = n.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const u = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
      a(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
B(W, "PARTS", foundry.utils.mergeObject(j(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), B(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = j(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let ye = W;
const dt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, a, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (r = CONFIG.Actor).dataModels ?? (r.dataModels = {}), CONFIG.Actor.dataModels.Karakter = st, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ot, CONFIG.Item.dataModels.microchip = lt, CONFIG.Item.dataModels.ability = ut, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", me, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pe, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const E = 500;
  Hooks.on("updateActor", (o, u, p, y) => {
    var F, b, L, A, O;
    const g = o == null ? void 0 : o.id;
    if (!g) return;
    const i = document.activeElement, s = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), l = [], c = (F = game.actors) == null ? void 0 : F.get(g);
    c != null && c.apps && l.push(...Array.from(c.apps));
    const m = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of m)
      ((b = S.document) == null ? void 0 : b.id) !== g || ((L = S.document) == null ? void 0 : L.documentName) !== "Actor" || ((A = S.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(S) || l.push(S);
    if (s && l.some((S) => {
      const M = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return M && M.contains(i);
    })) return;
    const v = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < E ? v.appId : null;
    setTimeout(() => {
      for (const S of l)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== I && S.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (E) => {
      var a, n, o, u, p, y;
      if (!((n = (a = E.target) == null ? void 0 : a.closest) != null && n.call(a, "#actors"))) return;
      const r = (u = (o = E.target) == null ? void 0 : o.closest) == null ? void 0 : u.call(o, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (E, r, e) => {
  var o, u;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, a = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = a ? (u = game.actors) == null ? void 0 : u.get(a) : null;
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
  const a = (u = r == null ? void 0 : r.querySelector) == null ? void 0 : u.call(r, ".dice-roll");
  a && a.classList.add(`votv-${t}`);
});
export {
  me as V
};
//# sourceMappingURL=vacuum-of-the-void-B5dOGgwK.mjs.map
