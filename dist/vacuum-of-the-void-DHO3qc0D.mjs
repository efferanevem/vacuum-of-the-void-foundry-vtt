var Ze = Object.defineProperty;
var Qe = Object.getPrototypeOf;
var Ve = Reflect.get;
var et = (L, r, e) => r in L ? Ze(L, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : L[r] = e;
var j = (L, r, e) => et(L, typeof r != "symbol" ? r + "" : r, e);
var x = (L, r, e) => Ve(Qe(L), e, r);
const { HTMLField: tt, NumberField: w, SchemaField: T, StringField: f, BooleanField: P, ArrayField: Z } = foundry.data.fields;
class rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new T({
        name: new f({ required: !1, blank: !0, initial: "" }),
        player: new f({ required: !1, blank: !0, initial: "" }),
        level: new w({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new f({ required: !1, blank: !0, initial: "" }),
        assignment: new f({ required: !1, blank: !0, initial: "" }),
        subAssignment: new f({ required: !1, blank: !0, initial: "" }),
        background: new f({ required: !1, blank: !0, initial: "" }),
        languages: new f({ required: !1, blank: !0, initial: "" })
      }),
      resources: new T({
        health: new T({
          value: new w({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new w({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new T({
          head: new T({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          }),
          torso: new T({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          }),
          arms: new T({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          }),
          legs: new T({
            value: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new P({ required: !1, initial: !1 }),
            box2: new P({ required: !1, initial: !1 }),
            box3: new P({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new T({
          head: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new w({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new T({
          head: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new w({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new T({
          value: new w({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new w({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new w({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new T({
        defense: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new w({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new w({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new T({
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
      weapons: new T({
        slotOrder: new f({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new T({
          name: new f({ required: !1, blank: !0, initial: "" }),
          bonus: new f({ required: !1, blank: !0, initial: "" }),
          damage: new f({ required: !1, blank: !0, initial: "" }),
          itemId: new f({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new T({
        microchips: new T({
          slot1: new T({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new P({ required: !1, initial: !1 })
          }),
          slot2: new T({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new P({ required: !1, initial: !1 })
          }),
          slot3: new T({
            itemId: new f({ required: !1, blank: !0, initial: "" }),
            name: new f({ required: !1, blank: !0, initial: "" }),
            active: new P({ required: !1, initial: !1 })
          })
        }),
        equipment: new f({ required: !1, blank: !0, initial: "" }),
        armor: new Z(
          new T({
            name: new f({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new f({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new f({ required: !1, blank: !0, initial: "" }),
            level: new f({ required: !1, blank: !0, initial: "" }),
            other: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Z(
          new T({
            name: new f({ required: !1, blank: !0, initial: "" }),
            quantity: new w({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new f({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new T({
        faji: new T({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new T({
          itemId: new f({ required: !1, blank: !0, initial: "" }),
          name: new f({ required: !1, blank: !0, initial: "" })
        }),
        passive: new T({
          items: new Z(
            new f({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new T({
          items: new Z(
            new f({ required: !1, blank: !0 }),
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
const { NumberField: te, SchemaField: it } = foundry.data.fields;
class at extends rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new it({
        body: new te({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new te({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new te({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: st, StringField: Y } = foundry.data.fields;
class nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new Y({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Y({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Y({ required: !1, blank: !0, initial: "" }),
      damage: new Y({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Y({ required: !1, blank: !0, initial: "" }),
      special: new Y({ required: !1, blank: !0, initial: "" }),
      quantity: new st({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: re, StringField: je } = foundry.data.fields;
class ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new je({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new je({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new re({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new re({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new re({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: lt, StringField: He } = foundry.data.fields;
class ct extends foundry.abstract.TypeDataModel {
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
      kp: new lt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Re, Ue, Be, Ke;
const N = class N extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var d;
    const t = (d = game.votv) == null ? void 0 : d._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, o = this.form ?? this.element;
    let c = { scrollState: {}, focus: null };
    if (n) {
      c.scrollState = this._saveScrollState(n);
      const g = document.activeElement, k = o.contains(g), b = g && (g.tagName === "INPUT" && g.type !== "checkbox" && g.type !== "radio" || g.tagName === "TEXTAREA");
      k && b && (c.focus = {
        name: g.name || null,
        id: g.id || null,
        selectionStart: "selectionStart" in g ? g.selectionStart : 0,
        selectionEnd: "selectionEnd" in g ? g.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const y = this.element, h = this.form ?? this.element, a = c.scrollState, s = c.focus, l = typeof (a == null ? void 0 : a.formScrollTop) == "number" || typeof (a == null ? void 0 : a.windowScrollTop) == "number", u = () => {
      var g, k;
      if (this._applyScrollState(y, a), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const b = ((g = h.querySelector) == null ? void 0 : g.call(h, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (k = h.querySelector) == null ? void 0 : k.call(h, `[name="${CSS.escape(s.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = s.selectionStart ?? 0, b.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
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
    var h, a, s, l, u, d, g, k, b;
    const e = r ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((s = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : s.resources) ?? {}, n = ((u = (l = i.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : u.value) ?? 0, o = ((d = i.currentHealth) == null ? void 0 : d.legs) ?? 0, c = N._healthStatusFromRatio(o, n), p = Number(((b = (k = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : k.combat) == null ? void 0 : b.givenSpeed) ?? 0) || 0;
    let y;
    c === 0 ? y = 0 : c === 1 ? y = -6 : c === 2 ? y = -3 : y = p, t.textContent = String(y);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var o, c, p, y;
    const e = N.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, i = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, n = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return N._healthStatusFromRatio(n, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var c, p, y, h;
    const t = N.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((c = r == null ? void 0 : r.system) == null ? void 0 : c.resources) ?? {}, n = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, o = ((h = i.currentHealth) == null ? void 0 : h[t]) ?? 0;
    return N._healthStatusFromRatio(o, n);
  }
  async _prepareContext(r) {
    var ye, he, be, we, ke, ve, Ie, Se, qe, Te, De, _e, Oe, Ae, Le, Fe, Ee;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((be = (he = (ye = this.actor.system) == null ? void 0 : ye.resources) == null ? void 0 : he.stress) == null ? void 0 : be.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, n = i.hitLocations ?? {}, o = i.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of c) {
      const v = ((we = n[m]) == null ? void 0 : we.value) ?? 0, I = o[m] ?? 0;
      e.computedHealthStatus[m] = N._healthStatusFromRatio(I, v);
    }
    const p = (Number(o.head) || 0) === 0, h = ["torso", "arms", "legs"].filter((m) => (Number(o[m]) || 0) === 0).length;
    e.showDeathSkull = p || h >= 2;
    const a = e.computedHealthStatus.legs ?? 3, s = Number(((ve = (ke = this.actor.system) == null ? void 0 : ke.combat) == null ? void 0 : ve.givenSpeed) ?? 0) || 0;
    let l;
    a === 0 ? l = 0 : a === 1 ? l = -6 : a === 2 ? l = -3 : l = s, e.effectiveGivenSpeed = l, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l } },
      { inplace: !1 }
    );
    const u = N.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [m, v] of Object.entries(u)) {
      const I = e.computedHealthStatus[v];
      e.skillHealthStatus[m] = I, e.skillDisabled[m] = I === 0 ? " disabled" : "", e.skillHasHealthTint[m] = !0;
    }
    const d = this.actor.system.weapons ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = (d.slotOrder ?? "").trim(), b = k ? k.split(/\s*,\s*/).filter((m) => g.includes(m)) : [], F = (Ie = this.actor.system.gear) == null ? void 0 : Ie.microchips, A = F && typeof F == "object" && !Array.isArray(F) ? F : {}, _ = (((Se = A.slot1) == null ? void 0 : Se.itemId) ?? "").trim(), O = (((qe = A.slot2) == null ? void 0 : qe.itemId) ?? "").trim(), E = (((Te = A.slot3) == null ? void 0 : Te.itemId) ?? "").trim(), G = this.actor.items.contents.filter((m) => m.type !== "ability").slice().sort((m, v) => {
      const I = typeof m.sort == "number" ? m.sort : 0, S = typeof v.sort == "number" ? v.sort : 0;
      return I - S;
    }).map((m) => {
      var Ne, $e, Ce, xe, Pe, Me;
      const v = m.type === "Fegyver", I = m.type === "microchip";
      let S = 0, q = "", C = null;
      for (let X = 0; X < b.length; X++) {
        const ee = b[X];
        if ((((Ne = d[ee]) == null ? void 0 : Ne.itemId) ?? "") === m.id) {
          S = X + 1, q = (($e = d[ee]) == null ? void 0 : $e.bonus) ?? "", C = ee;
          break;
        }
      }
      let M = null;
      I && (_ === m.id ? M = "slot1" : O === m.id ? M = "slot2" : E === m.id && (M = "slot3"));
      const z = v && ((Ce = m.system) != null && Ce.damage) ? m.system.damage : "", W = v && typeof ((xe = m.system) == null ? void 0 : xe.range) == "string" ? (m.system.range || "").trim() : "", V = C ? Number((Pe = d[C]) == null ? void 0 : Pe.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: v,
        slotAssignment: S,
        slotBonus: q,
        slotKey: C,
        microchipSlotKey: M,
        isEquipped: !!(C || M),
        damage: z,
        rangeStr: W,
        slotBonusNum: V,
        quantity: Number(((Me = m.system) == null ? void 0 : Me.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = G;
    const B = (((De = this.actor.items) == null ? void 0 : De.contents) ?? []).filter((m) => m.type === "Fegyver"), K = B.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = K;
    const oe = "— Nincs fegyver —", le = b.filter((m) => {
      const I = ((d[m] ?? {}).itemId ?? "").trim();
      return I ? !!B.find((q) => q.id === I) : !1;
    });
    e.weaponSlots = le.map((m, v) => {
      const I = d[m] ?? {}, S = (I.itemId ?? "").trim(), q = K.find((C) => C.id === S);
      return {
        slotKey: m,
        slotNum: v + 1,
        displayName: (q == null ? void 0 : q.name) || I.name || oe,
        img: (q == null ? void 0 : q.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const Ye = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" };
    e.weaponsTable = le.map((m) => {
      const v = d[m] ?? {}, I = (v.itemId ?? "").trim(), S = B.find((W) => W.id === I), q = (S == null ? void 0 : S.system) ?? {}, C = typeof q.range == "string" ? (q.range || "").trim() : "", M = q.type ?? "", z = (Ye[M] ?? M) || "—";
      return {
        slotKey: m,
        itemId: I,
        name: (S == null ? void 0 : S.name) ?? v.name ?? oe,
        img: (S == null ? void 0 : S.img) ?? "",
        bonus: String(v.bonus ?? "").trim() || "0",
        damage: v.damage ?? q.damage ?? "",
        rangeStr: C || "—",
        typeLabel: z,
        quantity: Number(q.quantity ?? 1) || 1,
        special: (q.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((Oe = (_e = this.actor.system) == null ? void 0 : _e.gear) == null ? void 0 : Oe.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((Le = (Ae = this.actor.system) == null ? void 0 : Ae.gear) == null ? void 0 : Le.generalItems) ? this.actor.system.gear.generalItems : [];
    const ce = (((Fe = this.actor.items) == null ? void 0 : Fe.contents) ?? []).filter((m) => m.type === "microchip"), J = ce.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.microchipsTable = ["1", "2", "3"].map((m) => {
      var z, W;
      const v = `slot${m}`, I = A[v] ?? {}, S = (I.itemId ?? "").trim(), q = ce.find((V) => V.id === S), C = ((z = q == null ? void 0 : q.system) == null ? void 0 : z.abilityType) ?? "", M = C === "active" ? "Aktív" : C === "passive" ? "Passzív" : C || "—";
      return {
        slotKey: v,
        itemId: S,
        name: (q == null ? void 0 : q.name) ?? I.name ?? ue,
        typeLabel: M,
        description: (((W = q == null ? void 0 : q.system) == null ? void 0 : W.description) ?? "").trim() || "—"
      };
    });
    const ue = "— Nincs Mikro-Chip —", Q = (m) => {
      const v = [];
      return m !== 1 && v.push(_), m !== 2 && v.push(O), m !== 3 && v.push(E), v;
    };
    e.microchipItemsSlot1 = J.filter((m) => !Q(1).includes(m.id)), e.microchipItemsSlot2 = J.filter((m) => !Q(2).includes(m.id)), e.microchipItemsSlot3 = J.filter((m) => !Q(3).includes(m.id)), ["1", "2", "3"].forEach((m) => {
      const v = `slot${m}`, I = A[v] ?? {}, S = (I.itemId ?? "").trim(), q = J.find((C) => C.id === S);
      e[`microchip${m}ItemId`] = S, e[`microchip${m}DisplayName`] = (q == null ? void 0 : q.name) || I.name || ue, e[`microchip${m}Img`] = (q == null ? void 0 : q.img) || "", e[`microchip${m}Active`] = I.active === !0;
    });
    const de = this.actor.system.abilities ?? {}, Je = (((Ee = this.actor.items) == null ? void 0 : Ee.contents) ?? []).map((m) => {
      var v, I, S;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((v = m.system) == null ? void 0 : v.kind) ?? "passive",
        description: ((I = m.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((S = m.system) == null ? void 0 : S.kp) ?? 0) || 0
      };
    }), me = new Map(Je.map((m) => [m.id, m])), Xe = "— Nincs képesség —", pe = (m) => {
      const v = de[m] ?? {}, I = (v.itemId ?? "").trim(), S = I ? me.get(I) : null, q = (S == null ? void 0 : S.description) ?? "", C = (S == null ? void 0 : S.kp) ?? 0;
      return {
        itemId: I,
        displayName: (S == null ? void 0 : S.name) || v.name || Xe,
        img: (S == null ? void 0 : S.img) || "",
        description: q,
        kp: C
      };
    };
    e.abilityFajiSlot = pe("faji"), e.abilityHatterSlot = pe("hatter");
    const fe = (m) => {
      const v = de[m];
      return v ? Array.isArray(v == null ? void 0 : v.items) ? v.items : Array.isArray(v) ? v : [] : [];
    }, ge = (m) => m.map((v) => {
      const I = me.get(v);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ge(fe("passive")), e.abilityActiveList = ge(fe("active")), e;
  }
  _attachFrameListeners(r) {
    var h;
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
    const n = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    n && i({ currentTarget: n }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (a) => {
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (s) => {
          s && this.actor.update({ img: s });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var g;
      a.preventDefault();
      const s = a.currentTarget, l = s.dataset.skill, u = ((g = s.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: d } = await import("./roll-sheet-D5wYj1Ud.mjs");
      d(this.actor, l, u);
    }), t.on("click", ".karakter-roll-morale-d8", (a) => {
      a.preventDefault(), this._rollMorale();
    });
    const o = (a, s) => {
      var d;
      const l = a.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (u) {
        if (a.classList.contains("karakter-weapon-label") && (s.altKey || s.shiftKey || s.ctrlKey || s.metaKey)) {
          const g = a.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (d = u.sheet) == null || d.render(!0);
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
      let d = Number(s.value);
      (!Number.isFinite(d) || d < 0) && (d = 0), await u.update({ "system.quantity": d });
    }), t.on("click", ".karakter-item-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const l = a.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor, d = u.items.get(l), g = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
        const k = u.system.weapons ?? {}, b = (k.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = b ? b.split(/\s*,\s*/).filter((O) => F.includes(O)) : [], _ = A.find((O) => {
          var E;
          return (((E = k[O]) == null ? void 0 : E.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = A.filter((E) => E !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      a.preventDefault();
      const l = (a.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      a.preventDefault();
      const l = (a.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const g = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      g && await this._rollWeaponDamage(g);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (a) => {
      var A, _;
      const s = a.currentTarget, l = (s.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.system.weapons ?? {}, d = (u.slotOrder ?? "").trim(), g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = d ? d.split(/\s*,\s*/).filter((O) => g.includes(O)) : [], b = k.find((O) => {
        var E;
        return (((E = u[O]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (s.checked) {
        if (b) return;
        let O = k.find((B) => {
          var K;
          return !((K = u[B]) != null && K.itemId);
        });
        const E = new Set(k);
        if (!O) {
          const B = g.find((K) => !E.has(K));
          if (!B) return;
          O = B, k.push(B);
        }
        const D = this.actor.items.get(l), G = {
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${O}.itemId`]: l,
          [`system.weapons.${O}.name`]: (D == null ? void 0 : D.name) ?? "",
          [`system.weapons.${O}.damage`]: ((A = D == null ? void 0 : D.system) == null ? void 0 : A.damage) ?? "",
          [`system.weapons.${O}.bonus`]: ((_ = D == null ? void 0 : D.system) == null ? void 0 : _.bonus) ?? ""
        };
        await this.actor.update(G);
      } else if (b) {
        const E = {
          "system.weapons.slotOrder": k.filter((D) => D !== b).join(",")
        };
        E[`system.weapons.${b}.itemId`] = "", E[`system.weapons.${b}.name`] = "", E[`system.weapons.${b}.damage`] = "", E[`system.weapons.${b}.bonus`] = "", await this.actor.update(E);
      }
    }), t.on("click", ".karakter-microchip-slot-display", (a) => {
      a.preventDefault();
      const s = a.currentTarget;
      if (s.disabled) return;
      const l = s.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (a) => {
      var E;
      a.preventDefault();
      const s = a.currentTarget, l = s.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), d = u == null ? void 0 : u.dataset.slot;
      if (!d) return;
      const g = (s.dataset.itemId ?? "").trim(), k = (s.dataset.itemName ?? ((E = s.textContent) == null ? void 0 : E.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", b = (s.dataset.itemImg ?? "").trim(), F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      F && (F.textContent = k);
      let A = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      b ? (A || (A = document.createElement("img"), A.className = "karakter-microchip-slot-thumb", A.alt = "", u == null || u.insertBefore(A, F)), A.src = b, A.style.display = "") : A && A.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${d}.itemId`]: g,
        [`system.gear.microchips.${d}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (O[`system.gear.microchips.${d}.active`] = !0), await this.actor.update(O);
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
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-microchip-slot-drag-over");
      }), s.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, l));
    }), t.find(".karakter-ability-slot-single").each((a, s) => {
      const l = s.dataset.slot;
      l && (s.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, l)), s.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-slot-drag-over");
      }), s.addEventListener("drop", (u) => {
        var d;
        (d = u.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((a, s) => {
      const l = s.dataset.area;
      l && (s.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, l)), s.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-area-drag-over");
      }), s.addEventListener("drop", (u) => {
        var d;
        (d = u.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const s = a.currentTarget.dataset.slot;
      s && await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var k;
      if (a.preventDefault(), !a.altKey) return;
      const s = a.currentTarget.dataset.area, l = a.currentTarget.dataset.itemId;
      if (!s || !l) return;
      const u = this.actor.system.abilities ?? {}, g = (Array.isArray((k = u[s]) == null ? void 0 : k.items) ? u[s].items.slice() : []).filter((b) => b !== l);
      await this.actor.update({ [`system.abilities.${s}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (a) => {
      var d;
      a.preventDefault();
      const l = a.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      (d = u == null ? void 0 : u.sheet) == null || d.render(!0);
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
      var u, d;
      a.preventDefault();
      const s = parseInt(a.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(s) || s < 0) return;
      const l = Array.isArray((d = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : d.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(s, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (a) => {
      var l, u, d, g;
      a.preventDefault();
      const s = a.currentTarget.dataset.gearArray;
      if (s === "armor") {
        const k = Array.isArray((u = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : u.armor) ? [...this.actor.system.gear.armor] : [];
        k.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": k });
      } else if (s === "generalItems") {
        const k = Array.isArray((g = (d = this.actor.system) == null ? void 0 : d.gear) == null ? void 0 : g.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        k.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": k });
      }
    }), t.on("click", ".karakter-microchip-clear", async (a) => {
      a.preventDefault();
      const s = a.currentTarget.dataset.slotKey;
      s && await this.actor.update({
        [`system.gear.microchips.${s}.itemId`]: "",
        [`system.gear.microchips.${s}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (a) => {
      var u, d;
      a.preventDefault();
      const s = parseInt(a.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(s) || s < 0) return;
      const l = Array.isArray((d = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : d.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(s, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const c = this, p = (a) => {
      var u, d, g, k;
      if (!a) return;
      const s = c._getFormDataForUpdate(a);
      if (Object.keys(s).length === 0) return;
      const l = ((d = (u = s.system) == null ? void 0 : u.resources) == null ? void 0 : d.currentHealth) != null || ((k = (g = s.system) == null ? void 0 : g.resources) == null ? void 0 : k.hitLocations) != null;
      c.actor.update(s).then(() => {
        l && setTimeout(() => c.render(!0), 260);
      }).catch((b) => console.warn("VoidKarakterSheet save failed", b));
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
    for (const h of r.elements) {
      if (!h.name || h.disabled || h.type === "radio" && !h.checked || h.name.startsWith("system.resources.healthStatus.")) continue;
      let a;
      h.type === "checkbox" ? a = h.checked : h.type === "number" ? a = h.value === "" ? 0 : Number(h.value) : a = h.value ?? "", foundry.utils.setProperty(e, h.name, a);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, n = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const h of o) {
      const a = ((y = i[h]) == null ? void 0 : y.value) ?? 0, s = n[h] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${h}`, N._healthStatusFromRatio(s, a));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var o, c, p, y, h, a, s, l;
    const t = r.target, i = (o = t == null ? void 0 : t.closest) == null ? void 0 : o.call(t, ".karakter-ability-slot-single"), n = (c = t == null ? void 0 : t.closest) == null ? void 0 : c.call(t, ".karakter-ability-area");
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const d of Object.values(e))
          if (typeof d == "string" && d.includes(".") && d.startsWith("Item.")) {
            u = d;
            break;
          }
      }
      if (u) {
        const d = await fromUuid(u);
        if (d && d.documentName === "Item" && d.type === "ability") {
          let g = d.id;
          ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (g = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? g);
          const k = (((a = d.system) == null ? void 0 : a.kind) ?? "passive").toString(), b = this.actor.system.abilities ?? {};
          if (i) {
            const _ = i.dataset.slot;
            if (_) {
              await this.actor.update({
                [`system.abilities.${_}.itemId`]: g,
                [`system.abilities.${_}.name`]: d.name
              });
              return;
            }
          } else if (n) {
            const _ = n.dataset.area;
            if (_) {
              const O = Array.isArray((s = b[_]) == null ? void 0 : s.items) ? b[_].items.slice() : Array.isArray(b[_]) ? b[_].slice() : [];
              O.includes(g) || O.push(g), await this.actor.update({ [`system.abilities.${_}.items`]: O });
              return;
            }
          }
          if (k === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": d.name
            });
            return;
          }
          if (k === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": d.name
            });
            return;
          }
          const F = k === "active" ? "active" : "passive", A = Array.isArray((l = b[F]) == null ? void 0 : l.items) ? b[F].items.slice() : Array.isArray(b[F]) ? b[F].slice() : [];
          A.includes(g) || A.push(g), await this.actor.update({ [`system.abilities.${F}.items`]: A });
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
    var p, y, h, a, s, l, u;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((y = r.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((h = r.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
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
    var y, h;
    r.preventDefault(), (y = r.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((h = r.dataTransfer) == null ? void 0 : h.getData("text/plain"));
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
    var h, a, s;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((h = e.system) == null ? void 0 : h.kind) ?? "passive", i = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, n = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = n ? `<p>${n}</p>` : "", y = `
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
    var p, y, h, a;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "ability") return;
    let n = i.id;
    ((y = i.parent) == null ? void 0 : y.id) !== this.actor.id && (n = ((h = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : h.id) ?? n);
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
    var c, p, y, h, a;
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
    ((h = n.parent) == null ? void 0 : h.id) !== this.actor.id && (o = ((a = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : a.id) ?? o), await this.actor.update({
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
    const h = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: h } },
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
    var b;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, i = this.actor.system.skills ?? {}, n = this.actor.items.filter((F) => F.type === "Fegyver");
    let o = null;
    t.itemId && (o = n.find((F) => F.id === t.itemId) ?? null);
    const c = o && o.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, h = (((b = o == null ? void 0 : o.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", a = Number(i[h] || 0) || 0, s = p + a, u = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const g = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g } },
      rollMode: k
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
j(N, "PARTS", foundry.utils.mergeObject(x(N, N, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), j(N, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(N, N, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Re = x(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Re.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ue = x(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ke = (Be = x(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Be.window) == null ? void 0 : Ke.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
j(N, "BODY_PART_BY_SKILL", {
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
let ie = N;
var Ge;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
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
    let e = await super._prepareContext(r);
    e = e ?? {}, e.item = this.document;
    const t = this.document.system ?? {}, i = t.range;
    let n = "";
    return i != null && typeof i == "object" && "short" in i && "long" in i ? n = `${i.short ?? ""}/${i.long ?? ""} m`.replace(/^\/|\/ $/g, "").trim() || "" : typeof i == "string" && (n = i), e.system = { ...t, range: n }, e;
  }
};
j(H, "PARTS", foundry.utils.mergeObject(x(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), j(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ge = x(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : Ge.form) ?? {}, { submitOnChange: !1 })
}));
let ae = H;
var ze;
const R = class R extends foundry.applications.api.HandlebarsApplicationMixin(
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
j(R, "PARTS", foundry.utils.mergeObject(x(R, R, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), j(R, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(R, R, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ze = x(R, R, "DEFAULT_OPTIONS")) == null ? void 0 : ze.form) ?? {}, { submitOnChange: !0 })
}));
let se = R;
var We;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
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
j(U, "PARTS", foundry.utils.mergeObject(x(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), j(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((We = x(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !0 })
}));
let ne = U;
const ut = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (r = CONFIG.Actor).dataModels ?? (r.dataModels = {}), CONFIG.Actor.dataModels.Karakter = at, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = nt, CONFIG.Item.dataModels.microchip = ot, CONFIG.Item.dataModels.ability = ct, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ie, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ae, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", se, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ne, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const L = 500;
  Hooks.on("updateActor", (o, c, p, y) => {
    var F, A, _, O, E;
    const h = o == null ? void 0 : o.id;
    if (!h) return;
    const a = document.activeElement, s = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA" || a.isContentEditable), l = [], u = (F = game.actors) == null ? void 0 : F.get(h);
    u != null && u.apps && l.push(...Array.from(u.apps));
    const d = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const D of d)
      ((A = D.document) == null ? void 0 : A.id) !== h || ((_ = D.document) == null ? void 0 : _.documentName) !== "Actor" || ((O = D.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || l.includes(D) || l.push(D);
    if (s && l.some((D) => {
      const G = (D == null ? void 0 : D.form) ?? (D == null ? void 0 : D.element);
      return G && G.contains(a);
    })) return;
    const k = (E = game.votv) == null ? void 0 : E._lastKarakterSheetBlurSave, b = k && Date.now() - k.at < L ? k.appId : null;
    setTimeout(() => {
      for (const D of l)
        !(D != null && D.rendered) || typeof D.render != "function" || D.id !== b && D.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (L) => {
      var i, n, o, c, p, y;
      if (!((n = (i = L.target) == null ? void 0 : i.closest) != null && n.call(i, "#actors"))) return;
      const r = (c = (o = L.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (L, r, e) => {
  var o, c;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, i = t ?? L.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = i ? (c = game.actors) == null ? void 0 : c.get(i) : null;
  !n || n.type !== "Karakter" || L.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (L, r) => {
  var e;
  (e = r == null ? void 0 : r.background) != null && e.src || L.updateSource({
    width: 1920,
    height: 1080,
    "background.src": ut,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (L, r, e) => {
  var n, o, c;
  const t = (o = (n = L.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const i = (c = r == null ? void 0 : r.querySelector) == null ? void 0 : c.call(r, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ie as V
};
//# sourceMappingURL=vacuum-of-the-void-DHO3qc0D.mjs.map
