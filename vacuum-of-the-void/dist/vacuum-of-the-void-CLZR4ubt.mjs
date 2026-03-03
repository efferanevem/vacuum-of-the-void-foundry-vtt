var Qe = Object.defineProperty;
var Ve = Object.getPrototypeOf;
var et = Reflect.get;
var tt = (N, r, e) => r in N ? Qe(N, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[r] = e;
var B = (N, r, e) => tt(N, typeof r != "symbol" ? r + "" : r, e);
var P = (N, r, e) => et(Ve(N), e, r);
const { HTMLField: rt, NumberField: w, SchemaField: _, StringField: f, BooleanField: j, ArrayField: se } = foundry.data.fields;
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
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
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
            active: new j({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" }),
        armor: new se(
          new _({
            name: new f({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new f({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new f({ required: !1, blank: !0, initial: "" }),
            level: new f({ required: !1, blank: !0, initial: "" }),
            other: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new se(
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
          items: new se(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new se(
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
const { NumberField: le, SchemaField: at } = foundry.data.fields;
class st extends it {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new at({
        body: new le({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new le({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new le({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
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
const { NumberField: ce, StringField: He } = foundry.data.fields;
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
      cost: new ce({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ce({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ce({ required: !1, integer: !0, min: 0, initial: 1 })
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
    var i, n, o, c;
    if (!r) return { form: null, windowContent: null };
    const e = ((i = r.querySelector) == null ? void 0 : i.call(r, "form.votv.karakter-sheet")) ?? ((n = r.querySelector) == null ? void 0 : n.call(r, "form.votv")) ?? null, t = ((o = r.querySelector) == null ? void 0 : o.call(r, ".votv-scroll")) ?? ((c = r.querySelector) == null ? void 0 : c.call(r, ".window-content")) ?? null;
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
    var m;
    const t = (m = game.votv) == null ? void 0 : m._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, o = this.form ?? this.element;
    let c = { scrollState: {}, focus: null };
    if (n) {
      c.scrollState = this._saveScrollState(n);
      const h = document.activeElement, v = o.contains(h), I = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA");
      v && I && (c.focus = {
        name: h.name || null,
        id: h.id || null,
        selectionStart: "selectionStart" in h ? h.selectionStart : 0,
        selectionEnd: "selectionEnd" in h ? h.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const y = this.element, g = this.form ?? this.element, a = c.scrollState, s = c.focus, l = typeof (a == null ? void 0 : a.formScrollTop) == "number" || typeof (a == null ? void 0 : a.windowScrollTop) == "number", u = () => {
      var h, v;
      if (this._applyScrollState(y, a), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const I = ((h = g.querySelector) == null ? void 0 : h.call(g, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (v = g.querySelector) == null ? void 0 : v.call(g, `[name="${CSS.escape(s.name)}"]`) : null);
        I && (I.tagName === "INPUT" || I.tagName === "TEXTAREA") && (I.focus({ preventScroll: !0 }), typeof I.selectionStart == "number" && (I.selectionStart = s.selectionStart ?? 0, I.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(y, a);
    };
    return (l || s) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(r, e) {
    const t = Number(r), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const n = Math.floor(i / 3), o = Math.floor(2 * i / 3);
    return t <= n ? 1 : t <= o ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(r = null) {
    var g, a, s, l, u, m, h, v, I;
    const e = r ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((s = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : s.resources) ?? {}, n = ((u = (l = i.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : u.value) ?? 0, o = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, c = C._healthStatusFromRatio(o, n), p = Number(((I = (v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let y;
    c === 0 ? y = 0 : c === 1 ? y = -6 : c === 2 ? y = -3 : y = p, t.textContent = String(y);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var o, c, p, y;
    const e = C.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, i = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, n = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return C._healthStatusFromRatio(n, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var c, p, y, g;
    const t = C.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((c = r == null ? void 0 : r.system) == null ? void 0 : c.resources) ?? {}, n = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, o = ((g = i.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return C._healthStatusFromRatio(o, n);
  }
  async _prepareContext(r) {
    var ke, ve, Ie, Se, qe, Te, De, Oe, _e, Ae, Le, Fe, Ee, Ne, $e, Ce, xe;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ie = (ve = (ke = this.actor.system) == null ? void 0 : ke.resources) == null ? void 0 : ve.stress) == null ? void 0 : Ie.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, n = i.hitLocations ?? {}, o = i.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of c) {
      const k = ((Se = n[d]) == null ? void 0 : Se.value) ?? 0, q = o[d] ?? 0;
      e.computedHealthStatus[d] = C._healthStatusFromRatio(q, k);
    }
    const p = (Number(o.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((d) => (Number(o[d]) || 0) === 0).length;
    e.showDeathSkull = p || g >= 2;
    const a = e.computedHealthStatus.legs ?? 3, s = Number(((Te = (qe = this.actor.system) == null ? void 0 : qe.combat) == null ? void 0 : Te.givenSpeed) ?? 0) || 0;
    let l;
    a === 0 ? l = 0 : a === 1 ? l = -6 : a === 2 ? l = -3 : l = s, e.effectiveGivenSpeed = l, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l } },
      { inplace: !1 }
    );
    const u = C.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, k] of Object.entries(u)) {
      const q = e.computedHealthStatus[k];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const m = this.actor.system.weapons ?? {}, h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = (m.slotOrder ?? "").trim(), I = v ? v.split(/\s*,\s*/).filter((d) => h.includes(d)) : [], F = (De = this.actor.system.gear) == null ? void 0 : De.microchips, b = F && typeof F == "object" && !Array.isArray(F) ? F : {}, L = (((Oe = b.slot1) == null ? void 0 : Oe.itemId) ?? "").trim(), A = (((_e = b.slot2) == null ? void 0 : _e.itemId) ?? "").trim(), O = (((Ae = b.slot3) == null ? void 0 : Ae.itemId) ?? "").trim(), M = this.actor.items.contents.filter((d) => d.type !== "ability").slice().sort((d, k) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof k.sort == "number" ? k.sort : 0;
      return q - T;
    }).map((d) => {
      var re, ie, Pe, je, Me, Re;
      const k = d.type === "Fegyver", q = d.type === "microchip";
      let T = 0, D = "", x = null;
      for (let ae = 0; ae < I.length; ae++) {
        const oe = I[ae];
        if ((((re = m[oe]) == null ? void 0 : re.itemId) ?? "") === d.id) {
          T = ae + 1, D = ((ie = m[oe]) == null ? void 0 : ie.bonus) ?? "", x = oe;
          break;
        }
      }
      let K = null;
      q && (L === d.id ? K = "slot1" : A === d.id ? K = "slot2" : O === d.id && (K = "slot3"));
      const J = k && ((Pe = d.system) != null && Pe.damage) ? d.system.damage : "", X = k && typeof ((je = d.system) == null ? void 0 : je.range) == "string" ? (d.system.range || "").trim() : "", Q = x ? Number((Me = m[x]) == null ? void 0 : Me.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: k,
        slotAssignment: T,
        slotBonus: D,
        slotKey: x,
        microchipSlotKey: K,
        isEquipped: !!(x || K),
        damage: J,
        rangeStr: X,
        slotBonusNum: Q,
        quantity: Number(((Re = d.system) == null ? void 0 : Re.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const E = (((Le = this.actor.items) == null ? void 0 : Le.contents) ?? []).filter((d) => d.type === "Fegyver"), R = E.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = R;
    const Y = "— Nincs fegyver —", V = I.filter((d) => {
      const q = ((m[d] ?? {}).itemId ?? "").trim();
      return q ? !!E.find((D) => D.id === q) : !1;
    });
    e.weaponSlots = V.map((d, k) => {
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
    const U = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, H = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((d) => {
      const k = m[d] ?? {}, q = (k.itemId ?? "").trim(), T = E.find((ie) => ie.id === q), D = (T == null ? void 0 : T.system) ?? {}, x = typeof D.range == "string" ? (D.range || "").trim() : "", K = D.type ?? "", J = (U[K] ?? K) || "—", X = D.size ?? "", Q = (H[X] ?? X) || "", re = [J, Q].filter(Boolean).join(", ") || J || "—";
      return {
        slotKey: d,
        itemId: q,
        name: (T == null ? void 0 : T.name) ?? k.name ?? Y,
        img: (T == null ? void 0 : T.img) ?? "",
        bonus: String(k.bonus ?? "").trim() || "0",
        damage: k.damage ?? D.damage ?? "",
        rangeStr: x || "—",
        typeLabel: J,
        typeAndSize: re,
        quantity: Number(D.quantity ?? 1) || 1,
        special: (D.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((Ee = (Fe = this.actor.system) == null ? void 0 : Fe.gear) == null ? void 0 : Ee.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray(($e = (Ne = this.actor.system) == null ? void 0 : Ne.gear) == null ? void 0 : $e.generalItems) ? this.actor.system.gear.generalItems : [];
    const ee = (((Ce = this.actor.items) == null ? void 0 : Ce.contents) ?? []).filter((d) => d.type === "microchip"), te = ee.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.microchipsTable = ["1", "2", "3"].map((d) => {
      var J, X;
      const k = `slot${d}`, q = b[k] ?? {}, T = (q.itemId ?? "").trim(), D = ee.find((Q) => Q.id === T), x = ((J = D == null ? void 0 : D.system) == null ? void 0 : J.abilityType) ?? "", K = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: k,
        itemId: T,
        name: (D == null ? void 0 : D.name) ?? q.name ?? fe,
        typeLabel: K,
        description: (((X = D == null ? void 0 : D.system) == null ? void 0 : X.description) ?? "").trim() || "—"
      };
    });
    const fe = "— Nincs Mikro-Chip —", ne = (d) => {
      const k = [];
      return d !== 1 && k.push(L), d !== 2 && k.push(A), d !== 3 && k.push(O), k;
    };
    e.microchipItemsSlot1 = te.filter((d) => !ne(1).includes(d.id)), e.microchipItemsSlot2 = te.filter((d) => !ne(2).includes(d.id)), e.microchipItemsSlot3 = te.filter((d) => !ne(3).includes(d.id)), ["1", "2", "3"].forEach((d) => {
      const k = `slot${d}`, q = b[k] ?? {}, T = (q.itemId ?? "").trim(), D = te.find((x) => x.id === T);
      e[`microchip${d}ItemId`] = T, e[`microchip${d}DisplayName`] = (D == null ? void 0 : D.name) || q.name || fe, e[`microchip${d}Img`] = (D == null ? void 0 : D.img) || "", e[`microchip${d}Active`] = q.active === !0;
    });
    const ye = this.actor.system.abilities ?? {}, Xe = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).map((d) => {
      var k, q, T;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((k = d.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((q = d.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = d.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), ge = new Map(Xe.map((d) => [d.id, d])), Ze = "— Nincs képesség —", he = (d) => {
      const k = ye[d] ?? {}, q = (k.itemId ?? "").trim(), T = q ? ge.get(q) : null, D = (T == null ? void 0 : T.description) ?? "", x = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || k.name || Ze,
        img: (T == null ? void 0 : T.img) || "",
        description: D,
        kp: x
      };
    };
    e.abilityFajiSlot = he("faji"), e.abilityHatterSlot = he("hatter");
    const be = (d) => {
      const k = ye[d];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, we = (d) => d.map((k) => {
      const q = ge.get(k);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = we(be("passive")), e.abilityActiveList = we(be("active")), e;
  }
  _attachFrameListeners(r) {
    var g;
    super._attachFrameListeners(r);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const i = (a) => {
      var u;
      const s = a ? a.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!s) return;
      const l = Number(s.value) || 0;
      s.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const n = (g = e.querySelector) == null ? void 0 : g.call(e, 'input[name="system.resources.stress.value"]');
    n && i({ currentTarget: n }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (a) => {
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (s) => {
          s && this.actor.update({ img: s });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h;
      a.preventDefault();
      const s = a.currentTarget, l = s.dataset.skill, u = ((h = s.textContent) == null ? void 0 : h.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-Jrkyw0e-.mjs");
      m(this.actor, l, u);
    }), t.on("click", ".karakter-roll-morale-d8", (a) => {
      a.preventDefault(), this._rollMorale();
    });
    const o = (a, s) => {
      var m;
      const l = a.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (u) {
        if (a.classList.contains("karakter-weapon-label") && (s.altKey || s.shiftKey || s.ctrlKey || s.metaKey)) {
          const h = a.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (m = u.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), o(a.currentTarget, a);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), o(a.currentTarget, a);
    }), t.on("change", ".karakter-item-qty", async (a) => {
      const s = a.currentTarget, l = s.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u) return;
      let m = Number(s.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await u.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const l = a.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor, m = u.items.get(l), h = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = I ? I.split(/\s*,\s*/).filter((A) => F.includes(A)) : [], L = b.find((A) => {
          var O;
          return (((O = v[A]) == null ? void 0 : O.itemId) ?? "").trim() === l;
        });
        if (L) {
          const A = b.filter((O) => O !== L);
          h["system.weapons.slotOrder"] = A.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await u.update(h), await u.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      a.preventDefault();
      const l = (a.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      a.preventDefault();
      const l = (a.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const h = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      h && await this._rollWeaponDamage(h);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (a) => {
      var b, L;
      const s = a.currentTarget, l = (s.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.system.weapons ?? {}, m = (u.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = m ? m.split(/\s*,\s*/).filter((A) => h.includes(A)) : [], I = v.find((A) => {
        var O;
        return (((O = u[A]) == null ? void 0 : O.itemId) ?? "").trim() === l;
      }) ?? null;
      if (s.checked) {
        if (I) return;
        let A = v.find((E) => {
          var R;
          return !((R = u[E]) != null && R.itemId);
        });
        const O = new Set(v);
        if (!A) {
          const E = h.find((R) => !O.has(R));
          if (!E) return;
          A = E, v.push(E);
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
    }), t.on("click", ".karakter-microchip-slot-display", (a) => {
      a.preventDefault();
      const s = a.currentTarget;
      if (s.disabled) return;
      const l = s.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (a) => {
      var O;
      a.preventDefault();
      const s = a.currentTarget, l = s.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = u == null ? void 0 : u.dataset.slot;
      if (!m) return;
      const h = (s.dataset.itemId ?? "").trim(), v = (s.dataset.itemName ?? ((O = s.textContent) == null ? void 0 : O.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (s.dataset.itemImg ?? "").trim(), F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      F && (F.textContent = v);
      let b = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      I ? (b || (b = document.createElement("img"), b.className = "karakter-microchip-slot-thumb", b.alt = "", u == null || u.insertBefore(b, F)), b.src = I, b.style.display = "") : b && b.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, A = {
        [`system.gear.microchips.${m}.itemId`]: h,
        [`system.gear.microchips.${m}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (A[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(A);
    }), $(document).on("click.votv-microchip-dropdown", (a) => {
      $(a.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (a) => {
      const s = a.currentTarget.dataset.slot;
      if (!s) return;
      const l = a.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${s}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((a, s) => {
      const l = s.dataset.slot;
      s.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, l)), s.addEventListener("dragleave", (u) => {
        var m;
        return (m = u.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), s.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, l));
    }), t.find(".karakter-ability-slot-single").each((a, s) => {
      const l = s.dataset.slot;
      l && (s.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, l)), s.addEventListener("dragleave", (u) => {
        var m;
        return (m = u.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), s.addEventListener("drop", (u) => {
        var m;
        (m = u.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((a, s) => {
      const l = s.dataset.area;
      l && (s.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, l)), s.addEventListener("dragleave", (u) => {
        var m;
        return (m = u.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), s.addEventListener("drop", (u) => {
        var m;
        (m = u.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const s = a.currentTarget.dataset.slot;
      s && await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var v;
      if (a.preventDefault(), !a.altKey) return;
      const s = a.currentTarget.dataset.area, l = a.currentTarget.dataset.itemId;
      if (!s || !l) return;
      const u = this.actor.system.abilities ?? {}, h = (Array.isArray((v = u[s]) == null ? void 0 : v.items) ? u[s].items.slice() : []).filter((I) => I !== l);
      await this.actor.update({ [`system.abilities.${s}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (a) => {
      var m;
      a.preventDefault();
      const l = a.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      (m = u == null ? void 0 : u.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      a.preventDefault();
      const l = a.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-weapon-unequip", async (a) => {
      a.preventDefault();
      const s = a.currentTarget.dataset.slotKey;
      s && await this.actor.update({
        [`system.weapons.${s}.itemId`]: "",
        [`system.weapons.${s}.name`]: "",
        [`system.weapons.${s}.bonus`]: "",
        [`system.weapons.${s}.damage`]: ""
      });
    }), t.on("click", ".karakter-armor-remove", async (a) => {
      var u, m;
      a.preventDefault();
      const s = parseInt(a.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(s) || s < 0) return;
      const l = Array.isArray((m = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : m.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(s, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (a) => {
      var l, u, m, h;
      a.preventDefault();
      const s = a.currentTarget.dataset.gearArray;
      if (s === "armor") {
        const v = Array.isArray((u = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : u.armor) ? [...this.actor.system.gear.armor] : [];
        v.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": v });
      } else if (s === "generalItems") {
        const v = Array.isArray((h = (m = this.actor.system) == null ? void 0 : m.gear) == null ? void 0 : h.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        v.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": v });
      }
    }), t.on("click", ".karakter-microchip-clear", async (a) => {
      a.preventDefault();
      const s = a.currentTarget.dataset.slotKey;
      s && await this.actor.update({
        [`system.gear.microchips.${s}.itemId`]: "",
        [`system.gear.microchips.${s}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (a) => {
      var u, m;
      a.preventDefault();
      const s = parseInt(a.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(s) || s < 0) return;
      const l = Array.isArray((m = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(s, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const c = this, p = (a) => {
      var u, m, h, v;
      if (!a) return;
      const s = c._getFormDataForUpdate(a);
      if (Object.keys(s).length === 0) return;
      const l = ((m = (u = s.system) == null ? void 0 : u.resources) == null ? void 0 : m.currentHealth) != null || ((v = (h = s.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      c.actor.update(s).then(() => {
        l && setTimeout(() => c.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (a) => {
      var s, l, u;
      return a && (((l = (s = c.element) == null ? void 0 : s.contains) == null ? void 0 : l.call(s, a)) || c.id && ((u = a.closest) == null ? void 0 : u.call(a, `#${CSS.escape(c.id)}`)));
    };
    c._votvBlur = (a) => {
      const s = a.target;
      if (!s || !s.form) return;
      const l = s.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const u = s.form;
      y(u) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: c.id, at: Date.now() }), p(u));
    }, document.body.addEventListener("blur", c._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var c, p, y;
    const e = {};
    for (const g of r.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let a;
      g.type === "checkbox" ? a = g.checked : g.type === "number" ? a = g.value === "" ? 0 : Number(g.value) : a = g.value ?? "", foundry.utils.setProperty(e, g.name, a);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, n = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const g of o) {
      const a = ((y = i[g]) == null ? void 0 : y.value) ?? 0, s = n[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, C._healthStatusFromRatio(s, a));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var o, c, p, y, g, a, s, l, u, m, h, v, I;
    const t = r.target, i = (o = t == null ? void 0 : t.closest) == null ? void 0 : o.call(t, ".karakter-ability-slot-single"), n = (c = t == null ? void 0 : t.closest) == null ? void 0 : c.call(t, ".karakter-ability-area");
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
          const A = (((a = b.system) == null ? void 0 : a.kind) ?? "passive").toString(), O = this.actor.system.abilities ?? {};
          if (i) {
            const E = i.dataset.slot;
            if (E) {
              await this.actor.update({
                [`system.abilities.${E}.itemId`]: L,
                [`system.abilities.${E}.name`]: b.name
              });
              return;
            }
          } else if (n) {
            const E = n.dataset.area;
            if (E) {
              const R = Array.isArray((s = O[E]) == null ? void 0 : s.items) ? O[E].items.slice() : Array.isArray(O[E]) ? O[E].slice() : [];
              R.includes(L) || R.push(L), await this.actor.update({ [`system.abilities.${E}.items`]: R });
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
      let F = e.uuid ?? e.documentUuid ?? ((u = e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
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
          const O = L.system.weapons ?? {}, S = (O.slotOrder ?? "").trim(), M = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = S ? S.split(/\s*,\s*/).filter((U) => M.includes(U)) : [];
          if (E.find((U) => {
            var H;
            return (((H = O[U]) == null ? void 0 : H.itemId) ?? "").trim() === A;
          })) return;
          let Y = E.find((U) => {
            var H;
            return !((H = O[U]) != null && H.itemId);
          });
          if (!Y) {
            const U = new Set(E), H = M.find((ee) => !U.has(ee));
            if (!H) return;
            Y = H, E.push(H);
          }
          const V = {
            "system.weapons.slotOrder": E.join(","),
            [`system.weapons.${Y}.itemId`]: A,
            [`system.weapons.${Y}.name`]: b.name ?? "",
            [`system.weapons.${Y}.damage`]: ((v = b.system) == null ? void 0 : v.damage) ?? "",
            [`system.weapons.${Y}.bonus`]: ((I = b.system) == null ? void 0 : I.bonus) ?? ""
          };
          await L.update(V);
          return;
        }
      }
    }
    return super._onDropItem(r, e);
  }
  _onWeaponSlotDragOver(r, e) {
    var n, o, c;
    const t = ((n = r.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = r.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (r.preventDefault(), (c = r.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(r, e) {
    var p, y, g, a, s, l, u;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((y = r.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((g = r.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "Fegyver") return;
    let o = n.id;
    ((a = n.parent) == null ? void 0 : a.id) !== this.actor.id && (o = ((s = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : s.id) ?? o);
    const c = {
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((l = n.system) == null ? void 0 : l.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((u = n.system) == null ? void 0 : u.bonus) ?? ""
    };
    await this.actor.update(c);
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
    var y, g;
    r.preventDefault(), (y = r.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = r.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((a, s) => {
      const l = typeof a.sort == "number" ? a.sort : 0, u = typeof s.sort == "number" ? s.sort : 0;
      return l - u;
    }).map((a) => a.id), o = n.indexOf(t), c = n.indexOf(e);
    if (o === -1 || c === -1) return;
    n.splice(o, 1), n.splice(c, 0, t);
    const p = n.map((a, s) => ({
      _id: a,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(r) {
    var i, n, o;
    const e = ((i = r.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var g, a, s;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", i = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, n = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = n ? `<p>${n}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${c}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(r) {
    var i, n;
    const e = ((i = r.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((n = r.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var o, c, p;
    r.preventDefault(), (o = r.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "ability") return;
    let n = i.id;
    ((c = i.parent) == null ? void 0 : c.id) !== this.actor.id && (n = ((p = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : p.id) ?? n), await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(r, e) {
    var i;
    this._parseAbilityDrop(r) && (r.preventDefault(), (i = r.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(r, e) {
    var p, y, g, a;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "ability") return;
    let n = i.id;
    ((y = i.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((g = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : g.id) ?? n);
    const o = this.actor.system.abilities ?? {}, c = Array.isArray((a = o[e]) == null ? void 0 : a.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    c.includes(n) || c.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(r, e) {
    var n, o, c;
    const t = ((n = r.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((o = r.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (r.preventDefault(), (c = r.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(r, e) {
    var c, p, y, g, a;
    r.preventDefault(), (c = r.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = r.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "microchip") return;
    let o = n.id;
    ((g = n.parent) == null ? void 0 : g.id) !== this.actor.id && (o = ((a = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : a.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(r, e) {
    const i = (this.actor.system.skills ?? {})[r] ?? 0;
    let n = Number(i) || 0;
    const o = this._getSkillHealthStatus(r);
    o === 1 ? n -= 6 : o === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const g = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g } },
      rollMode: a
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
    const i = Math.max(0, r - 1);
    await this.actor.update({ "system.resources.morale": i });
  }
  async _rollWeapon(r) {
    var I;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, i = this.actor.system.skills ?? {}, n = this.actor.items.filter((F) => F.type === "Fegyver");
    let o = null;
    t.itemId && (o = n.find((F) => F.id === t.itemId) ?? null);
    const c = o && o.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, g = (((I = o == null ? void 0 : o.system) == null ? void 0 : I.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", a = Number(i[g] || 0) || 0, s = p + a, u = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, m = new Roll(u);
    await m.evaluate({ async: !0 });
    const h = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
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
    const i = new Roll(t);
    await i.evaluate({ async: !0 });
    const n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return i.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${e.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: n
    });
  }
};
B(C, "PARTS", foundry.utils.mergeObject(P(C, C, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), B(C, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(C, C, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ke = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Ke.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Be = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Be.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((ze = (Ge = P(C, C, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.window) == null ? void 0 : ze.contentClasses) ?? [],
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
let ue = C;
var We;
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((c) => console.warn("VoidWeaponSheet save failed", c));
    }, i = (n) => {
      var o, c, p;
      return n && (((c = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var c, p, y;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(o) && t(o);
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
B(G, "PARTS", foundry.utils.mergeObject(P(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), B(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((We = P(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 })
}));
let de = G;
var Ye;
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((c) => console.warn("VoidMicrochipSheet save failed", c));
    }, i = (n) => {
      var o, c, p;
      return n && (((c = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var c, p, y;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (n) => {
      var c, p, y;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(o) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(o), 300));
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
B(z, "PARTS", foundry.utils.mergeObject(P(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), B(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ye = P(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !0 })
}));
let me = z;
var Je;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (n) => {
      if (!n) return;
      const o = e._getFormDataForUpdate(n);
      Object.keys(o).length !== 0 && e.document.update(o).catch((c) => console.warn("VoidAbilitySheet save failed", c));
    }, i = (n) => {
      var o, c, p;
      return n && (((c = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var c, p, y;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (n) => {
      var p;
      const o = n.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const c = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
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
      t.type === "checkbox" ? i = t.checked : t.type === "number" ? i = t.value === "" ? 0 : Number(t.value) : i = t.value ?? "", !(t.name === "name" && typeof i == "string" && i.trim() === "") && foundry.utils.setProperty(e, t.name, i);
    }
    return e;
  }
  async _prepareContext(r) {
    let e = await super._prepareContext(r);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
B(W, "PARTS", foundry.utils.mergeObject(P(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), B(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = P(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let pe = W;
const dt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, i, n;
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
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ue, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", de, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", me, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pe, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const N = 500;
  Hooks.on("updateActor", (o, c, p, y) => {
    var F, b, L, A, O;
    const g = o == null ? void 0 : o.id;
    if (!g) return;
    const a = document.activeElement, s = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA" || a.isContentEditable), l = [], u = (F = game.actors) == null ? void 0 : F.get(g);
    u != null && u.apps && l.push(...Array.from(u.apps));
    const m = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const S of m)
      ((b = S.document) == null ? void 0 : b.id) !== g || ((L = S.document) == null ? void 0 : L.documentName) !== "Actor" || ((A = S.constructor) == null ? void 0 : A.name) !== "VoidKarakterSheet" || l.includes(S) || l.push(S);
    if (s && l.some((S) => {
      const M = (S == null ? void 0 : S.form) ?? (S == null ? void 0 : S.element);
      return M && M.contains(a);
    })) return;
    const v = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < N ? v.appId : null;
    setTimeout(() => {
      for (const S of l)
        !(S != null && S.rendered) || typeof S.render != "function" || S.id !== I && S.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var i, n, o, c, p, y;
      if (!((n = (i = N.target) == null ? void 0 : i.closest) != null && n.call(i, "#actors"))) return;
      const r = (c = (o = N.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, r, e) => {
  var o, c;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, i = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = i ? (c = game.actors) == null ? void 0 : c.get(i) : null;
  !n || n.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, r) => {
  var e;
  (e = r == null ? void 0 : r.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": dt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, r, e) => {
  var n, o, c;
  const t = (o = (n = N.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const i = (c = r == null ? void 0 : r.querySelector) == null ? void 0 : c.call(r, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ue as V
};
//# sourceMappingURL=vacuum-of-the-void-CLZR4ubt.mjs.map
