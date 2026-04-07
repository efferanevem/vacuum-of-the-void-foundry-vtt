var tt = Object.defineProperty;
var st = Object.getPrototypeOf;
var rt = Reflect.get;
var it = (N, s, e) => s in N ? tt(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var H = (N, s, e) => it(N, typeof s != "symbol" ? s + "" : s, e);
var K = (N, s, e) => rt(st(N), e, s);
const { HTMLField: at, NumberField: v, SchemaField: T, StringField: y, BooleanField: M, ArrayField: ae } = foundry.data.fields;
class nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new T({
        name: new y({ required: !1, blank: !0, initial: "" }),
        player: new y({ required: !1, blank: !0, initial: "" }),
        level: new v({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new y({ required: !1, blank: !0, initial: "" }),
        assignment: new y({ required: !1, blank: !0, initial: "" }),
        subAssignment: new y({ required: !1, blank: !0, initial: "" }),
        background: new y({ required: !1, blank: !0, initial: "" }),
        languages: new y({ required: !1, blank: !0, initial: "" })
      }),
      resources: new T({
        health: new T({
          value: new v({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new v({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new T({
          head: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          torso: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          arms: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          legs: new T({
            value: new v({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
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
        slotOrder: new y({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new T({
          name: new y({ required: !1, blank: !0, initial: "" }),
          bonus: new y({ required: !1, blank: !0, initial: "" }),
          damage: new y({ required: !1, blank: !0, initial: "" }),
          itemId: new y({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new T({
        microchips: new T({
          slot1: new T({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot2: new T({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot3: new T({
            itemId: new y({ required: !1, blank: !0, initial: "" }),
            name: new y({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          })
        }),
        equipment: new y({ required: !1, blank: !0, initial: "" }),
        armor: new ae(
          new T({
            name: new y({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new y({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new y({ required: !1, blank: !0, initial: "" }),
            level: new y({ required: !1, blank: !0, initial: "" }),
            other: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ae(
          new T({
            name: new y({ required: !1, blank: !0, initial: "" }),
            quantity: new v({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new y({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new T({
        faji: new T({
          itemId: new y({ required: !1, blank: !0, initial: "" }),
          name: new y({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new T({
          itemId: new y({ required: !1, blank: !0, initial: "" }),
          name: new y({ required: !1, blank: !0, initial: "" })
        }),
        passive: new T({
          items: new ae(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new T({
          items: new ae(
            new y({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new T({
        biography: new at({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: le, SchemaField: ot } = foundry.data.fields;
class lt extends nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ot({
        body: new le({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new le({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new le({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: ct, NumberField: yt, StringField: J } = foundry.data.fields;
class ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new ct({ required: !1, initial: !1 }),
      type: new J({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new J({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new J({ required: !1, blank: !0, initial: "" }),
      damage: new J({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new J({ required: !1, blank: !0, initial: "" }),
      special: new J({ required: !1, blank: !0, initial: "" }),
      quantity: new J({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { NumberField: ce, StringField: Me } = foundry.data.fields;
class dt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Me({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Me({
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
const { NumberField: mt, StringField: Re } = foundry.data.fields;
class He extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Re({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Re({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new mt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Ue, Be, ze, Ge;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
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
  _getScrollContainers(s) {
    var a, n, c, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, c = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (n) {
      u.scrollState = this._saveScrollState(n);
      const d = document.activeElement, f = c.contains(d), w = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      f && w && (u.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const b = this.element, g = this.form ?? this.element, k = u.scrollState, i = u.focus, r = typeof (k == null ? void 0 : k.formScrollTop) == "number" || typeof (k == null ? void 0 : k.windowScrollTop) == "number", o = () => {
      var d, f;
      if (this._applyScrollState(b, k), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const w = ((d = g.querySelector) == null ? void 0 : d.call(g, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (f = g.querySelector) == null ? void 0 : f.call(g, `[name="${CSS.escape(i.name)}"]`) : null);
        w && (w.tagName === "INPUT" || w.tagName === "TEXTAREA") && (w.focus({ preventScroll: !0 }), typeof w.selectionStart == "number" && (w.selectionStart = i.selectionStart ?? 0, w.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(b, k);
    };
    return (r || i) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const n = Math.floor(a / 3), c = Math.floor(2 * a / 3);
    return t <= n ? 1 : t <= c ? 2 : 3;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed. Nincs kivonás. */
  _writeEffectiveGivenSpeed(s = null) {
    var g, k, i, r, o, l, d, f, w;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((i = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : i.resources) ?? {}, n = ((o = (r = a.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : o.value) ?? 0, c = ((l = a.currentHealth) == null ? void 0 : l.legs) ?? 0, u = E._healthStatusFromRatio(c, n), p = Number(((w = (f = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : f.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
    let b;
    u === 0 ? b = 0 : u === 1 ? b = -6 : u === 2 ? b = -3 : b = p, t.textContent = String(b);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, u, p, b;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, a = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, n = ((b = t.currentHealth) == null ? void 0 : b[e]) ?? 0;
    return E._healthStatusFromRatio(n, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, b, g;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, n = ((b = (p = a.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : b.value) ?? 0, c = ((g = a.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return E._healthStatusFromRatio(c, n);
  }
  async _prepareContext(s) {
    var Ie, Se, qe, Te, De, Oe, _e, Le, Ae, Fe, Ne, Ee, $e, Ce, xe, je, Pe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((qe = (Se = (Ie = this.actor.system) == null ? void 0 : Ie.resources) == null ? void 0 : Se.stress) == null ? void 0 : qe.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, n = a.hitLocations ?? {}, c = a.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of u) {
      const S = ((Te = n[m]) == null ? void 0 : Te.value) ?? 0, q = c[m] ?? 0;
      e.computedHealthStatus[m] = E._healthStatusFromRatio(q, S);
    }
    const p = (Number(c.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((m) => (Number(c[m]) || 0) === 0).length;
    e.showDeathSkull = p || g >= 2;
    const k = e.computedHealthStatus.legs ?? 3, i = Number(((Oe = (De = this.actor.system) == null ? void 0 : De.combat) == null ? void 0 : Oe.givenSpeed) ?? 0) || 0;
    let r;
    k === 0 ? r = 0 : k === 1 ? r = -6 : k === 2 ? r = -3 : r = i, e.effectiveGivenSpeed = r, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r } },
      { inplace: !1 }
    );
    const o = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [m, S] of Object.entries(o)) {
      const q = e.computedHealthStatus[S];
      e.skillHealthStatus[m] = q, e.skillDisabled[m] = q === 0 ? " disabled" : "", e.skillHasHealthTint[m] = !0;
    }
    const l = this.actor.system.weapons ?? {}, d = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], f = (l.slotOrder ?? "").trim(), w = f ? f.split(/\s*,\s*/).filter((m) => d.includes(m)) : [], I = (_e = this.actor.system.gear) == null ? void 0 : _e.microchips, D = I && typeof I == "object" && !Array.isArray(I) ? I : {}, F = (((Le = D.slot1) == null ? void 0 : Le.itemId) ?? "").trim(), _ = (((Ae = D.slot2) == null ? void 0 : Ae.itemId) ?? "").trim(), O = (((Fe = D.slot3) == null ? void 0 : Fe.itemId) ?? "").trim(), C = this.actor.items.contents.filter((m) => m.type !== "Képesség" && m.type !== "ability").slice().sort((m, S) => {
      const q = typeof m.sort == "number" ? m.sort : 0, L = typeof S.sort == "number" ? S.sort : 0;
      return q - L;
    }).map((m) => {
      var Z, re, ie, V, ee, te;
      const S = m.type === "Fegyver", q = m.type === "microchip";
      let L = 0, A = "", x = null;
      for (let Y = 0; Y < w.length; Y++) {
        const X = w[Y];
        if ((((Z = l[X]) == null ? void 0 : Z.itemId) ?? "") === m.id) {
          L = Y + 1, A = ((re = l[X]) == null ? void 0 : re.bonus) ?? "", x = X;
          break;
        }
      }
      let P = null;
      q && (F === m.id ? P = "slot1" : _ === m.id ? P = "slot2" : O === m.id && (P = "slot3"));
      const Q = S && ((ie = m.system) != null && ie.damage) ? m.system.damage : "", W = S && typeof ((V = m.system) == null ? void 0 : V.range) == "string" ? (m.system.range || "").trim() : "", G = x ? Number((ee = l[x]) == null ? void 0 : ee.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: S,
        slotAssignment: L,
        slotBonus: A,
        slotKey: x,
        microchipSlotKey: P,
        isEquipped: !!(x || P),
        damage: Q,
        rangeStr: W,
        slotBonusNum: G,
        quantity: Number(((te = m.system) == null ? void 0 : te.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = C;
    const j = (((Ne = this.actor.items) == null ? void 0 : Ne.contents) ?? []).filter((m) => m.type === "Fegyver"), R = j.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = R;
    const fe = "— Nincs fegyver —", Qe = w.filter((m) => {
      const q = ((l[m] ?? {}).itemId ?? "").trim();
      return q ? !!j.find((A) => A.id === q) : !1;
    });
    e.weaponSlots = Qe.map((m, S) => {
      const q = l[m] ?? {}, L = (q.itemId ?? "").trim(), A = R.find((x) => x.id === L);
      return {
        slotKey: m,
        itemId: L,
        slotNum: S + 1,
        displayName: (A == null ? void 0 : A.name) || q.name || fe,
        img: (A == null ? void 0 : A.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const Xe = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ze = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = j.map((m) => {
      var Y, X, Ke;
      const S = m.id;
      let q = null, L = {};
      for (const oe of w)
        if ((((Y = l[oe]) == null ? void 0 : Y.itemId) ?? "").trim() === S) {
          q = oe, L = l[oe] ?? {};
          break;
        }
      const A = !!q, x = ((X = m.system) == null ? void 0 : X.equipped) !== void 0 && ((Ke = m.system) == null ? void 0 : Ke.equipped) !== null ? !!m.system.equipped : A, P = (m == null ? void 0 : m.system) ?? {}, Q = typeof P.range == "string" ? (P.range || "").trim() : "", W = P.type ?? "", G = (Xe[W] ?? W) || "—", Z = P.size ?? "", re = (Ze[Z] ?? Z) || "", ie = [G, re].filter(Boolean).join(", ") || G || "—", V = G === "Lövedékes", ee = P.quantity, te = ee != null ? String(ee).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: S,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? fe,
        img: (m == null ? void 0 : m.img) ?? "",
        bonus: String(L.bonus ?? "").trim() || (x ? "0" : "—"),
        damage: L.damage ?? P.damage ?? "",
        rangeStr: Q || "—",
        typeLabel: G,
        typeAndSize: ie,
        quantity: te,
        quantityDisplay: V ? te : "—",
        isProjectile: V,
        equipped: x,
        special: (P.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray(($e = (Ee = this.actor.system) == null ? void 0 : Ee.gear) == null ? void 0 : $e.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray((xe = (Ce = this.actor.system) == null ? void 0 : Ce.gear) == null ? void 0 : xe.generalItems) ? this.actor.system.gear.generalItems : [];
    const ye = (((je = this.actor.items) == null ? void 0 : je.contents) ?? []).filter((m) => m.type === "microchip"), se = ye.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.microchipsTable = ["1", "2", "3"].map((m) => {
      var Q, W;
      const S = `slot${m}`, q = D[S] ?? {}, L = (q.itemId ?? "").trim(), A = ye.find((G) => G.id === L), x = ((Q = A == null ? void 0 : A.system) == null ? void 0 : Q.abilityType) ?? "", P = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—";
      return {
        slotKey: S,
        itemId: L,
        name: (A == null ? void 0 : A.name) ?? q.name ?? ge,
        typeLabel: P,
        description: (((W = A == null ? void 0 : A.system) == null ? void 0 : W.description) ?? "").trim() || "—"
      };
    });
    const ge = "— Nincs Mikro-Chip —", ne = (m) => {
      const S = [];
      return m !== 1 && S.push(F), m !== 2 && S.push(_), m !== 3 && S.push(O), S;
    };
    e.microchipItemsSlot1 = se.filter((m) => !ne(1).includes(m.id)), e.microchipItemsSlot2 = se.filter((m) => !ne(2).includes(m.id)), e.microchipItemsSlot3 = se.filter((m) => !ne(3).includes(m.id)), ["1", "2", "3"].forEach((m) => {
      const S = `slot${m}`, q = D[S] ?? {}, L = (q.itemId ?? "").trim(), A = se.find((x) => x.id === L);
      e[`microchip${m}ItemId`] = L, e[`microchip${m}DisplayName`] = (A == null ? void 0 : A.name) || q.name || ge, e[`microchip${m}Img`] = (A == null ? void 0 : A.img) || "", e[`microchip${m}Active`] = q.active === !0;
    });
    const he = this.actor.system.abilities ?? {}, Ve = (((Pe = this.actor.items) == null ? void 0 : Pe.contents) ?? []).map((m) => {
      var S, q, L;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((S = m.system) == null ? void 0 : S.kind) ?? "passive",
        description: ((q = m.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((L = m.system) == null ? void 0 : L.kp) ?? 0) || 0
      };
    }), we = new Map(Ve.map((m) => [m.id, m])), et = "— Nincs képesség —", be = (m) => {
      const S = he[m] ?? {}, q = (S.itemId ?? "").trim(), L = q ? we.get(q) : null, A = (L == null ? void 0 : L.description) ?? "", x = (L == null ? void 0 : L.kp) ?? 0;
      return {
        itemId: q,
        displayName: (L == null ? void 0 : L.name) || S.name || et,
        img: (L == null ? void 0 : L.img) || "",
        description: A,
        kp: x
      };
    };
    e.abilityFajiSlot = be("faji"), e.abilityHatterSlot = be("hatter");
    const ke = (m) => {
      const S = he[m];
      return S ? Array.isArray(S == null ? void 0 : S.items) ? S.items : Array.isArray(S) ? S : [] : [];
    }, ve = (m) => m.map((S) => {
      const q = we.get(S);
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
  _attachFrameListeners(s) {
    var g, k;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-i-3LOztD.mjs");
      l(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var l, d, f;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const w = (r.dataset.slot ?? "").trim();
        if (!w) return;
        o = (((((d = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : d.weapons) ?? {})[w] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((f = r.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (i) => {
      var l;
      const r = i ? i.currentTarget : (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const n = (k = e.querySelector) == null ? void 0 : k.call(e, 'input[name="system.resources.stress.value"]');
    n && a({ currentTarget: n }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (i) => {
      i.preventDefault(), i.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (r) => {
          r && this.actor.update({ img: r });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var f;
      i.preventDefault();
      const r = i.currentTarget, o = r.dataset.skill, l = ((f = r.textContent) == null ? void 0 : f.trim()) || o, { openRollSheetForSkill: d } = await import("./roll-sheet-i-3LOztD.mjs");
      d(this.actor, o, l);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    });
    const c = (i, r) => {
      var d;
      const o = i.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (l) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const f = i.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (d = l.sheet) == null || d.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l) return;
      let d = Number(r.value);
      (!Number.isFinite(d) || d < 0) && (d = 0), await l.update({ "system.quantity": d });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor, d = l.items.get(o), f = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
        const w = l.system.weapons ?? {}, I = (w.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((O) => D.includes(O)) : [], _ = F.find((O) => {
          var h;
          return (((h = w[O]) == null ? void 0 : h.itemId) ?? "").trim() === o;
        });
        if (_) {
          const O = F.filter((h) => h !== _);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${_}.itemId`] = "", f[`system.weapons.${_}.name`] = "", f[`system.weapons.${_}.damage`] = "", f[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(f).length && await l.update(f), await l.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const d = this.actor.system.weapons ?? {}, f = (d.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((h) => w.includes(h)) : [], D = I.find((h) => {
        var C;
        return (((C = d[h]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (D) return;
        let h = I.find((j) => {
          var R;
          return !((R = d[j]) != null && R.itemId);
        });
        const C = new Set(I);
        if (!h) {
          const j = w.find((R) => !C.has(R));
          if (!j) return;
          h = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${h}.itemId`]: o,
          [`system.weapons.${h}.name`]: (l == null ? void 0 : l.name) ?? "",
          [`system.weapons.${h}.damage`]: ((_ = l == null ? void 0 : l.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${h}.bonus`]: ((O = l == null ? void 0 : l.system) == null ? void 0 : O.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (D) {
        const h = I.filter((C) => C !== D);
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${D}.itemId`]: "",
          [`system.weapons.${D}.name`]: "",
          [`system.weapons.${D}.damage`]: "",
          [`system.weapons.${D}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), l = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !l && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var h;
      i.preventDefault();
      const r = i.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), l = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), d = l == null ? void 0 : l.dataset.slot;
      if (!d) return;
      const f = (r.dataset.itemId ?? "").trim(), w = (r.dataset.itemName ?? ((h = r.textContent) == null ? void 0 : h.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (r.dataset.itemImg ?? "").trim(), D = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      D && (D.textContent = w);
      let F = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", l == null || l.insertBefore(F, D)), F.src = I, F.style.display = "") : F && F.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const _ = f ? this.actor.items.get(f) : null, O = {
        [`system.gear.microchips.${d}.itemId`]: f,
        [`system.gear.microchips.${d}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      f && (O[`system.gear.microchips.${d}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const o = i.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${r}.active`]: o });
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const o = r.dataset.slot;
      r.addEventListener("dragover", (l) => this._onMicrochipSlotDragOver(l, o)), r.addEventListener("dragleave", (l) => {
        var d;
        return (d = l.currentTarget) == null ? void 0 : d.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (l) => this._onMicrochipSlotDrop(l, o));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (l) => this._onAbilitySingleDragOver(l, o)), r.addEventListener("dragleave", (l) => {
        var d;
        return (d = l.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (l) => {
        var d;
        (d = l.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (l) => this._onAbilityAreaDragOver(l, o)), r.addEventListener("dragleave", (l) => {
        var d;
        return (d = l.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (l) => {
        var d;
        (d = l.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var w;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!r || !o) return;
      const l = this.actor.system.abilities ?? {}, f = (Array.isArray((w = l[r]) == null ? void 0 : w.items) ? l[r].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var d;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      (d = l == null ? void 0 : l.sheet) == null || d.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const d = (r.value ?? "").trim();
      await l.update({ "system.quantity": d }), setTimeout(() => {
        const f = this.form ?? this.element, w = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        w && this._resizeWeaponQuantityInput(w);
      }, 80);
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const d = this.actor.system.weapons ?? {}, f = (d.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((h) => w.includes(h)) : [], D = I.find((h) => {
        var C;
        return (((C = d[h]) == null ? void 0 : C.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (D) return;
        let h = I.find((j) => {
          var R;
          return !((R = d[j]) != null && R.itemId);
        });
        const C = new Set(I);
        if (!h) {
          const j = w.find((R) => !C.has(R));
          if (!j) return;
          h = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${h}.itemId`]: o,
          [`system.weapons.${h}.name`]: l.name ?? "",
          [`system.weapons.${h}.damage`]: ((_ = l.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${h}.bonus`]: ((O = l.system) == null ? void 0 : O.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (D) {
        const h = I.filter((C) => C !== D);
        await this.actor.update({
          "system.weapons.slotOrder": h.join(","),
          [`system.weapons.${D}.itemId`]: "",
          [`system.weapons.${D}.name`]: "",
          [`system.weapons.${D}.damage`]: "",
          [`system.weapons.${D}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor, d = l.items.get(o), f = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
        const w = l.system.weapons ?? {}, I = (w.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = I ? I.split(/\s*,\s*/).filter((O) => D.includes(O)) : [], _ = F.find((O) => {
          var h;
          return (((h = w[O]) == null ? void 0 : h.itemId) ?? "").trim() === o;
        });
        if (_) {
          const O = F.filter((h) => h !== _);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${_}.itemId`] = "", f[`system.weapons.${_}.name`] = "", f[`system.weapons.${_}.damage`] = "", f[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(f).length && await l.update(f), await l.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-remove", async (i) => {
      var l, d;
      i.preventDefault();
      const r = parseInt(i.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(r) || r < 0) return;
      const o = Array.isArray((d = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : d.armor) ? [...this.actor.system.gear.armor] : [];
      o.splice(r, 1), await this.actor.update({ "system.gear.armor": o });
    }), t.on("click", ".karakter-equipment-add-row", async (i) => {
      var o, l, d, f;
      i.preventDefault();
      const r = i.currentTarget.dataset.gearArray;
      if (r === "armor") {
        const w = Array.isArray((l = (o = this.actor.system) == null ? void 0 : o.gear) == null ? void 0 : l.armor) ? [...this.actor.system.gear.armor] : [];
        w.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": w });
      } else if (r === "generalItems") {
        const w = Array.isArray((f = (d = this.actor.system) == null ? void 0 : d.gear) == null ? void 0 : f.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        w.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": w });
      }
    }), t.on("click", ".karakter-microchip-clear", async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.slotKey;
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (i) => {
      var l, d;
      i.preventDefault();
      const r = parseInt(i.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(r) || r < 0) return;
      const o = Array.isArray((d = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : d.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      o.splice(r, 1), await this.actor.update({ "system.gear.generalItems": o });
    });
    const u = this, p = (i) => {
      var l, d, f, w;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const o = ((d = (l = r.system) == null ? void 0 : l.resources) == null ? void 0 : d.currentHealth) != null || ((w = (f = r.system) == null ? void 0 : f.resources) == null ? void 0 : w.hitLocations) != null;
      u.actor.update(r).then(() => {
        o && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, b = (i) => {
      var r, o, l;
      return i && (((o = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || u.id && ((l = i.closest) == null ? void 0 : l.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const l = r.form;
      b(l) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(l));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, b;
    const e = {};
    for (const g of s.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let k;
      g.type === "checkbox" ? k = g.checked : g.type === "number" ? k = g.value === "" ? 0 : Number(g.value) : k = g.value ?? "", foundry.utils.setProperty(e, g.name, k);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), a = t.hitLocations ?? {}, n = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const g of c) {
      const k = ((b = a[g]) == null ? void 0 : b.value) ?? 0, i = n[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, E._healthStatusFromRatio(i, k));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, n, c, u, p, b, g, k;
    if (e) {
      let i = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!i && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            i = r;
            break;
          }
      }
      if (i) {
        const r = await fromUuid(i);
        if (r && r.documentName === "Item" && (r.type === "Képesség" || r.type === "ability")) {
          let o = r.id;
          if (((a = r.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const I = foundry.utils.mergeObject(r.toObject(), { type: "Képesség" });
            o = ((n = (await this.actor.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : n.id) ?? o;
          }
          const l = (((c = r.system) == null ? void 0 : c.kind) ?? "passive").toString(), d = this.actor.system.abilities ?? {};
          if (l === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": o,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (l === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": o,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const f = l === "active" ? "active" : "passive", w = Array.isArray((u = d[f]) == null ? void 0 : u.items) ? d[f].items.slice() : Array.isArray(d[f]) ? d[f].slice() : [];
          w.includes(o) || w.push(o), await this.actor.update({ [`system.abilities.${f}.items`]: w });
          return;
        }
      }
    }
    if (e) {
      let i = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!i && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            i = r;
            break;
          }
      }
      if (i) {
        const r = await fromUuid(i);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const o = this.actor, l = ((b = r.parent) == null ? void 0 : b.id) !== o.id;
          let d = r.id;
          if (l) {
            const f = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            d = ((g = (await o.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : g.id) ?? d;
          }
          if (l) {
            const f = ((k = o.system) == null ? void 0 : k.weapons) ?? {}, w = (f.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = w ? w.split(/\s*,\s*/).filter((_) => I.includes(_)) : [], F = D.filter((_) => {
              var O;
              return (((O = f[_]) == null ? void 0 : O.itemId) ?? "").trim() === d;
            });
            if (F.length > 0) {
              const O = {
                "system.weapons.slotOrder": D.filter((h) => !F.includes(h)).join(",")
              };
              for (const h of F)
                O[`system.weapons.${h}.itemId`] = "", O[`system.weapons.${h}.name`] = "", O[`system.weapons.${h}.damage`] = "", O[`system.weapons.${h}.bonus`] = "";
              await o.update(O);
            }
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var n, c, u;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, b, g, k, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((b = s.dataTransfer) == null ? void 0 : b.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const n = await fromUuid(a.uuid);
    if (!n || n.type !== "Fegyver") return;
    if (((g = n.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const c = n.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((k = n.system) == null ? void 0 : k.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = n.system) == null ? void 0 : i.bonus) ?? ""
    }), await n.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var a;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (a = s.currentTarget) == null || a.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(s, e) {
    var t;
    (t = s.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(s, e) {
    var b, g;
    s.preventDefault(), (b = s.currentTarget) == null || b.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((k, i) => {
      const r = typeof k.sort == "number" ? k.sort : 0, o = typeof i.sort == "number" ? i.sort : 0;
      return r - o;
    }).map((k) => k.id), c = n.indexOf(t), u = n.indexOf(e);
    if (c === -1 || u === -1) return;
    n.splice(c, 1), n.splice(u, 0, t);
    const p = n.map((k, i) => ({
      _id: k,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var a, n, c;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    const a = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, a)}px`;
  }
  async _postAbilityToChat(s) {
    var g, k, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Képesség" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", a = Number(((k = e.system) == null ? void 0 : k.kp) ?? 0) || 0, n = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = n ? `<p>${n}</p>` : "", b = `
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
  _parseAbilityDrop(s) {
    var a, n;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var c, u, p;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Képesség" && a.type !== "ability") return;
    let n = a.id;
    if (((u = a.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const b = foundry.utils.mergeObject(a.toObject(), { type: "Képesség" });
      n = ((p = (await this.actor.createEmbeddedDocuments("Item", [b]))[0]) == null ? void 0 : p.id) ?? n;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, b, g, k;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Képesség" && a.type !== "ability") return;
    let n = a.id;
    if (((b = a.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(a.toObject(), { type: "Képesség" });
      n = ((g = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : g.id) ?? n;
    }
    const c = this.actor.system.abilities ?? {}, u = Array.isArray((k = c[e]) == null ? void 0 : k.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    u.includes(n) || u.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var n, c, u;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, b, g, k;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((b = s.dataTransfer) == null ? void 0 : b.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const n = await fromUuid(a.uuid);
    if (!n || n.type !== "microchip") return;
    let c = n.id;
    ((g = n.parent) == null ? void 0 : g.id) !== this.actor.id && (c = ((k = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : k.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let n = Number(a) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? n -= 6 : c === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, b = new Roll(p);
    await b.evaluate({ async: !0 });
    const g = b.total >= 18 ? "critical" : b.total <= 3 ? "fumble" : null, k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g } },
      rollMode: k
    });
  }
  async _rollMorale() {
    var n;
    const s = Number(((n = this.actor.system.resources) == null ? void 0 : n.morale) ?? 0) || 0;
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollWeapon(s) {
    var w;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, n = this.actor.items.filter((I) => I.type === "Fegyver");
    let c = null;
    t.itemId && (c = n.find((I) => I.id === t.itemId) ?? null);
    const u = c && c.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, g = (((w = c == null ? void 0 : c.system) == null ? void 0 : w.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", k = Number(a[g] || 0) || 0, i = p + k, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, l = new Roll(o);
    await l.evaluate({ async: !0 });
    const d = l.total >= 18 ? "critical" : l.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: d } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, b, g, k, i, r, o, l, d, f;
    const t = this.actor;
    if (!t) return;
    let a = ((b = (p = t.items).get) == null ? void 0 : b.call(p, s)) ?? ((k = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : k.call(g, (w) => w.id === s));
    if (!a || a.type !== "Fegyver") return;
    let n = (((i = a.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!n && e && (n = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !n) {
      (f = (o = ui.notifications) == null ? void 0 : o.warn) == null || f.call(o, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(n);
    await c.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
H(E, "PARTS", foundry.utils.mergeObject(K(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), H(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ue = K(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ue.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Be = K(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Be.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ge = (ze = K(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : ze.window) == null ? void 0 : Ge.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
H(E, "BODY_PART_BY_SKILL", {
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
let ue = E;
var We;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, a = (n) => {
      var c, u, p;
      return n && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, b;
      const c = ((u = n.target) == null ? void 0 : u.form) ?? ((b = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      a(c) && t(c);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
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
H(U, "PARTS", foundry.utils.mergeObject(K(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), H(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((We = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 })
}));
let de = U;
var Ye;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, a = (n) => {
      var c, u, p;
      return n && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, b;
      const c = ((u = n.target) == null ? void 0 : u.form) ?? ((b = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      a(c) && t(c);
    }, e._votvInput = (n) => {
      var u, p, b;
      const c = ((u = n.target) == null ? void 0 : u.form) ?? ((b = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      a(c) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(c), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.system = this.item.system, e;
  }
};
H(B, "PARTS", foundry.utils.mergeObject(K(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), H(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ye = K(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.form) ?? {}, { submitOnChange: !0 })
}));
let me = B;
var Je;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    if (super._attachFrameListeners(s), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, a = (n) => {
      var c, u, p;
      return n && (((u = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, b;
      const c = ((u = n.target) == null ? void 0 : u.form) ?? ((b = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : b.call(p, "form"));
      a(c) && t(c);
    }, e._votvInput = (n) => {
      var p;
      const c = n.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const u = (c == null ? void 0 : c.form) ?? ((p = c == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      a(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
H(z, "PARTS", foundry.utils.mergeObject(K(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), H(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Je = K(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : Je.form) ?? {}, { submitOnChange: !0 })
}));
let pe = z;
const pt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, a, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = lt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ut, CONFIG.Item.dataModels.microchip = dt, CONFIG.Item.dataModels.Kepesseg = He, CONFIG.Item.dataModels.ability = He, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ue, {
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
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const N = 500;
  Hooks.on("updateActor", (c, u, p, b) => {
    var I, D, F, _, O;
    const g = c == null ? void 0 : c.id;
    if (!g) return;
    const k = document.activeElement, i = k && (k.tagName === "INPUT" && k.type !== "checkbox" && k.type !== "radio" || k.tagName === "TEXTAREA" || k.isContentEditable), r = [], o = (I = game.actors) == null ? void 0 : I.get(g);
    o != null && o.apps && r.push(...Array.from(o.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const h of l)
      ((D = h.document) == null ? void 0 : D.id) !== g || ((F = h.document) == null ? void 0 : F.documentName) !== "Actor" || ((_ = h.constructor) == null ? void 0 : _.name) !== "VoidKarakterSheet" || r.includes(h) || r.push(h);
    if (i && r.some((h) => {
      const C = (h == null ? void 0 : h.form) ?? (h == null ? void 0 : h.element);
      return C && C.contains(k);
    })) return;
    const f = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, w = f && Date.now() - f.at < N ? f.appId : null;
    setTimeout(() => {
      for (const h of r)
        !(h != null && h.rendered) || typeof h.render != "function" || h.id !== w && h.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var a, n, c, u, p, b;
      if (!((n = (a = N.target) == null ? void 0 : a.closest) != null && n.call(a, "#actors"))) return;
      const s = (u = (c = N.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((b = game.actors) != null && b.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, s, e) => {
  var c, u;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, a = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = a ? (u = game.actors) == null ? void 0 : u.get(a) : null;
  !n || n.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": pt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, s, e) => {
  var n, c, u;
  const t = (c = (n = N.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : c.resultType;
  if (!t) return;
  const a = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  a && a.classList.add(`votv-${t}`);
});
export {
  ue as V
};
//# sourceMappingURL=vacuum-of-the-void-Cv9cStap.mjs.map
