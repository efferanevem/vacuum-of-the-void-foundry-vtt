var it = Object.defineProperty;
var at = Object.getPrototypeOf;
var st = Reflect.get;
var nt = (L, r, e) => r in L ? it(L, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : L[r] = e;
var P = (L, r, e) => nt(L, typeof r != "symbol" ? r + "" : r, e);
var C = (L, r, e) => st(at(L), e, r);
const { HTMLField: ot, NumberField: b, SchemaField: _, StringField: g, BooleanField: x, ArrayField: ee } = foundry.data.fields;
class lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new _({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new b({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
      }),
      resources: new _({
        health: new _({
          value: new b({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new b({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new _({
          head: new _({
            value: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new x({ required: !1, initial: !1 }),
            box2: new x({ required: !1, initial: !1 }),
            box3: new x({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new _({
          head: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new b({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new _({
          head: new b({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new b({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new b({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new b({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new _({
          value: new b({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new b({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new b({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new _({
        defense: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new b({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new _({
        deception: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new b({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new b({ required: !1, integer: !0, min: 0, initial: 0 })
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
            active: new x({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new x({ required: !1, initial: !1 })
          })
        }),
        equipment: new g({ required: !1, blank: !0, initial: "" }),
        armor: new ee(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new g({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new g({ required: !1, blank: !0, initial: "" }),
            level: new g({ required: !1, blank: !0, initial: "" }),
            other: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ee(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            quantity: new b({ required: !1, integer: !0, min: 0, initial: 1 }),
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
          items: new ee(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new ee(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new _({
        biography: new ot({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ie, SchemaField: ct } = foundry.data.fields;
class ut extends lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ct({
        body: new ie({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ie({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ie({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { NumberField: G, SchemaField: dt, StringField: ae } = foundry.data.fields;
class mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      type: new ae({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      damage: new ae({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new dt({
        short: new G({ required: !1, integer: !1, min: 0, initial: 0 }),
        long: new G({ required: !1, integer: !1, min: 0, initial: 0 })
      }),
      cost: new G({ required: !1, integer: !0, min: 0, initial: 0 }),
      maxUpgrade: new G({ required: !1, integer: !0, min: 0, initial: 0 }),
      upgradeCost: new G({ required: !1, integer: !0, min: 0, initial: 0 }),
      skillDifficulty: new G({ required: !1, integer: !0, min: 0, initial: 0 }),
      special: new ae({ required: !1, blank: !0, initial: "" }),
      quantity: new G({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: se, StringField: Ge } = foundry.data.fields;
class pt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ge({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ge({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new se({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new se({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new se({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ft, StringField: ze } = foundry.data.fields;
class gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ze({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new ze({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ft({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var We, Ye, Je, Xe;
const F = class F extends foundry.applications.api.HandlebarsApplicationMixin(
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
      const f = document.activeElement, v = o.contains(f), w = f && (f.tagName === "INPUT" && f.type !== "checkbox" && f.type !== "radio" || f.tagName === "TEXTAREA");
      v && w && (c.focus = {
        name: f.name || null,
        id: f.id || null,
        selectionStart: "selectionStart" in f ? f.selectionStart : 0,
        selectionEnd: "selectionEnd" in f ? f.selectionEnd : 0
      });
    }
    const p = await super.render(r, e);
    requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 150);
    const h = this.element, y = this.form ?? this.element, s = c.scrollState, a = c.focus, l = typeof (s == null ? void 0 : s.formScrollTop) == "number" || typeof (s == null ? void 0 : s.windowScrollTop) == "number", u = () => {
      var f, v;
      if (this._applyScrollState(h, s), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const w = ((f = y.querySelector) == null ? void 0 : f.call(y, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (v = y.querySelector) == null ? void 0 : v.call(y, `[name="${CSS.escape(a.name)}"]`) : null);
        w && (w.tagName === "INPUT" || w.tagName === "TEXTAREA") && (w.focus({ preventScroll: !0 }), typeof w.selectionStart == "number" && (w.selectionStart = a.selectionStart ?? 0, w.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(h, s);
    };
    return (l || a) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), p;
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
    var y, s, a, l, u, d, f, v, w;
    const e = r ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((a = (s = this.actor) == null ? void 0 : s.system) == null ? void 0 : a.resources) ?? {}, n = ((u = (l = i.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : u.value) ?? 0, o = ((d = i.currentHealth) == null ? void 0 : d.legs) ?? 0, c = F._healthStatusFromRatio(o, n), p = Number(((w = (v = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : v.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
    let h;
    c === 0 ? h = 0 : c === 1 ? h = -6 : c === 2 ? h = -3 : h = p, t.textContent = String(h);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(r) {
    var o, c, p, h;
    const e = F.BODY_PART_BY_SKILL[r];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, i = ((p = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : p.value) ?? 0, n = ((h = t.currentHealth) == null ? void 0 : h[e]) ?? 0;
    return F._healthStatusFromRatio(n, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(r, e) {
    var c, p, h, y;
    const t = F.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((c = r == null ? void 0 : r.system) == null ? void 0 : c.resources) ?? {}, n = ((h = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : h.value) ?? 0, o = ((y = i.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return F._healthStatusFromRatio(o, n);
  }
  async _prepareContext(r) {
    var ke, ve, Ie, Se, qe, Te, De, _e, Oe, Ae, Le, Ee, Fe, Ne, $e, Ce, xe;
    let e = await super._prepareContext(r);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ie = (ve = (ke = this.actor.system) == null ? void 0 : ke.resources) == null ? void 0 : ve.stress) == null ? void 0 : Ie.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, n = i.hitLocations ?? {}, o = i.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of c) {
      const k = ((Se = n[m]) == null ? void 0 : Se.value) ?? 0, I = o[m] ?? 0;
      e.computedHealthStatus[m] = F._healthStatusFromRatio(I, k);
    }
    const p = (Number(o.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((m) => (Number(o[m]) || 0) === 0).length;
    e.showDeathSkull = p || y >= 2;
    const s = e.computedHealthStatus.legs ?? 3, a = Number(((Te = (qe = this.actor.system) == null ? void 0 : qe.combat) == null ? void 0 : Te.givenSpeed) ?? 0) || 0;
    let l;
    s === 0 ? l = 0 : s === 1 ? l = -6 : s === 2 ? l = -3 : l = a, e.effectiveGivenSpeed = l, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l } },
      { inplace: !1 }
    );
    const u = F.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [m, k] of Object.entries(u)) {
      const I = e.computedHealthStatus[k];
      e.skillHealthStatus[m] = I, e.skillDisabled[m] = I === 0 ? " disabled" : "", e.skillHasHealthTint[m] = !0;
    }
    const d = this.actor.system.weapons ?? {}, f = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = (d.slotOrder ?? "").trim(), w = v ? v.split(/\s*,\s*/).filter((m) => f.includes(m)) : [], E = (De = this.actor.system.gear) == null ? void 0 : De.microchips, A = E && typeof E == "object" && !Array.isArray(E) ? E : {}, S = (((_e = A.slot1) == null ? void 0 : _e.itemId) ?? "").trim(), O = (((Oe = A.slot2) == null ? void 0 : Oe.itemId) ?? "").trim(), q = (((Ae = A.slot3) == null ? void 0 : Ae.itemId) ?? "").trim(), K = this.actor.items.contents.filter((m) => m.type !== "ability").slice().sort((m, k) => {
      const I = typeof m.sort == "number" ? m.sort : 0, T = typeof k.sort == "number" ? k.sort : 0;
      return I - T;
    }).map((m) => {
      var Q, Me, Pe, je, He, Re, Ue, Be, Ke;
      const k = m.type === "weapon", I = m.type === "microchip";
      let T = 0, D = "", N = null;
      for (let V = 0; V < w.length; V++) {
        const re = w[V];
        if ((((Q = d[re]) == null ? void 0 : Q.itemId) ?? "") === m.id) {
          T = V + 1, D = ((Me = d[re]) == null ? void 0 : Me.bonus) ?? "", N = re;
          break;
        }
      }
      let M = null;
      I && (S === m.id ? M = "slot1" : O === m.id ? M = "slot2" : q === m.id && (M = "slot3"));
      const z = k && ((Pe = m.system) != null && Pe.damage) ? m.system.damage : "", B = k && ((He = (je = m.system) == null ? void 0 : je.range) == null ? void 0 : He.short) != null ? m.system.range.short : null, W = k && ((Ue = (Re = m.system) == null ? void 0 : Re.range) == null ? void 0 : Ue.long) != null ? m.system.range.long : null, X = B != null && W != null ? `${B} / ${W} m` : "", Z = N ? Number((Be = d[N]) == null ? void 0 : Be.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: k,
        slotAssignment: T,
        slotBonus: D,
        slotKey: N,
        microchipSlotKey: M,
        isEquipped: !!(N || M),
        damage: z,
        rangeStr: X,
        slotBonusNum: Z,
        quantity: Number(((Ke = m.system) == null ? void 0 : Ke.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = K;
    const U = (((Le = this.actor.items) == null ? void 0 : Le.contents) ?? []).filter((m) => m.type === "weapon"), ue = U.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = ue;
    const de = "— Nincs fegyver —", me = w.filter((m) => {
      const I = ((d[m] ?? {}).itemId ?? "").trim();
      return I ? !!U.find((D) => D.id === I) : !1;
    });
    e.weaponSlots = me.map((m, k) => {
      const I = d[m] ?? {}, T = (I.itemId ?? "").trim(), D = ue.find((N) => N.id === T);
      return {
        slotKey: m,
        slotNum: k + 1,
        displayName: (D == null ? void 0 : D.name) || I.name || de,
        img: (D == null ? void 0 : D.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const et = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = me.map((m) => {
      var X, Z;
      const k = d[m] ?? {}, I = (k.itemId ?? "").trim(), T = U.find((Q) => Q.id === I), D = (T == null ? void 0 : T.system) ?? {}, N = (X = D.range) == null ? void 0 : X.short, M = (Z = D.range) == null ? void 0 : Z.long, z = N != null && M != null ? `${N} / ${M} m` : "", B = D.type ?? "", W = (et[B] ?? B) || "—";
      return {
        slotKey: m,
        itemId: I,
        name: (T == null ? void 0 : T.name) ?? k.name ?? de,
        img: (T == null ? void 0 : T.img) ?? "",
        bonus: String(k.bonus ?? "").trim() || "0",
        damage: k.damage ?? D.damage ?? "",
        rangeStr: z || "—",
        typeLabel: W,
        quantity: Number(D.quantity ?? 1) || 1,
        special: (D.special ?? "").trim() || "—"
      };
    }), e.armor = Array.isArray((Fe = (Ee = this.actor.system) == null ? void 0 : Ee.gear) == null ? void 0 : Fe.armor) ? this.actor.system.gear.armor : [], e.generalItems = Array.isArray(($e = (Ne = this.actor.system) == null ? void 0 : Ne.gear) == null ? void 0 : $e.generalItems) ? this.actor.system.gear.generalItems : [];
    const pe = (((Ce = this.actor.items) == null ? void 0 : Ce.contents) ?? []).filter((m) => m.type === "microchip"), J = pe.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.microchipsTable = ["1", "2", "3"].map((m) => {
      var z, B;
      const k = `slot${m}`, I = A[k] ?? {}, T = (I.itemId ?? "").trim(), D = pe.find((W) => W.id === T), N = ((z = D == null ? void 0 : D.system) == null ? void 0 : z.abilityType) ?? "", M = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—";
      return {
        slotKey: k,
        itemId: T,
        name: (D == null ? void 0 : D.name) ?? I.name ?? fe,
        typeLabel: M,
        description: (((B = D == null ? void 0 : D.system) == null ? void 0 : B.description) ?? "").trim() || "—"
      };
    });
    const fe = "— Nincs Mikro-Chip —", te = (m) => {
      const k = [];
      return m !== 1 && k.push(S), m !== 2 && k.push(O), m !== 3 && k.push(q), k;
    };
    e.microchipItemsSlot1 = J.filter((m) => !te(1).includes(m.id)), e.microchipItemsSlot2 = J.filter((m) => !te(2).includes(m.id)), e.microchipItemsSlot3 = J.filter((m) => !te(3).includes(m.id)), ["1", "2", "3"].forEach((m) => {
      const k = `slot${m}`, I = A[k] ?? {}, T = (I.itemId ?? "").trim(), D = J.find((N) => N.id === T);
      e[`microchip${m}ItemId`] = T, e[`microchip${m}DisplayName`] = (D == null ? void 0 : D.name) || I.name || fe, e[`microchip${m}Img`] = (D == null ? void 0 : D.img) || "", e[`microchip${m}Active`] = I.active === !0;
    });
    const ge = this.actor.system.abilities ?? {}, tt = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).map((m) => {
      var k, I, T;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((k = m.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((I = m.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((T = m.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), he = new Map(tt.map((m) => [m.id, m])), rt = "— Nincs képesség —", ye = (m) => {
      const k = ge[m] ?? {}, I = (k.itemId ?? "").trim(), T = I ? he.get(I) : null, D = (T == null ? void 0 : T.description) ?? "", N = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: I,
        displayName: (T == null ? void 0 : T.name) || k.name || rt,
        img: (T == null ? void 0 : T.img) || "",
        description: D,
        kp: N
      };
    };
    e.abilityFajiSlot = ye("faji"), e.abilityHatterSlot = ye("hatter");
    const we = (m) => {
      const k = ge[m];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, be = (m) => m.map((k) => {
      const I = he.get(k);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = be(we("passive")), e.abilityActiveList = be(we("active")), e;
  }
  _attachFrameListeners(r) {
    var y;
    super._attachFrameListeners(r);
    const e = this.form ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), !this.isEditable) return;
    const i = (s) => {
      var u;
      const a = s ? s.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const l = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const n = (y = e.querySelector) == null ? void 0 : y.call(e, 'input[name="system.resources.stress.value"]');
    n && i({ currentTarget: n }), this._writeEffectiveGivenSpeed(r), this._writeEffectiveGivenSpeed(e), requestAnimationFrame(() => this._writeEffectiveGivenSpeed()), setTimeout(() => this._writeEffectiveGivenSpeed(), 100), t.on("click", ".karakter-portrait-img", (s) => {
      s.preventDefault(), s.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (a) => {
          a && this.actor.update({ img: a });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var f;
      s.preventDefault();
      const a = s.currentTarget, l = a.dataset.skill, u = ((f = a.textContent) == null ? void 0 : f.trim()) || l, { openRollSheetForSkill: d } = await import("./roll-sheet-DfT4uEc0.mjs");
      d(this.actor, l, u);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    });
    const o = (s, a) => {
      var d;
      const l = s.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (u) {
        if (s.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
          const f = s.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (d = u.sheet) == null || d.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), o(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), o(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const a = s.currentTarget, l = a.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u) return;
      let d = Number(a.value);
      (!Number.isFinite(d) || d < 0) && (d = 0), await u.update({ "system.quantity": d });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor, d = u.items.get(l), f = {};
      if ((d == null ? void 0 : d.type) === "weapon") {
        const v = u.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), E = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = w ? w.split(/\s*,\s*/).filter((O) => E.includes(O)) : [], S = A.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === l;
        });
        if (S) {
          const O = A.filter((q) => q !== S);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${S}.itemId`] = "", f[`system.weapons.${S}.name`] = "", f[`system.weapons.${S}.damage`] = "", f[`system.weapons.${S}.bonus`] = "";
        }
      }
      Object.keys(f).length && await u.update(f), await u.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault();
      const l = (s.currentTarget.dataset.slot ?? "").trim();
      l && await this._rollWeapon(l);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      s.preventDefault();
      const l = (s.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const f = (((this.actor.system.weapons ?? {})[l] ?? {}).itemId ?? "").trim();
      f && await this._rollWeaponDamage(f);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var A;
      const a = s.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.system.weapons ?? {}, d = (u.slotOrder ?? "").trim(), f = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = d ? d.split(/\s*,\s*/).filter((S) => f.includes(S)) : [], w = v.find((S) => {
        var O;
        return (((O = u[S]) == null ? void 0 : O.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (w) return;
        let S = v.find((K) => {
          var U;
          return !((U = u[K]) != null && U.itemId);
        });
        const O = new Set(v);
        if (!S) {
          const K = f.find((U) => !O.has(U));
          if (!K) return;
          S = K, v.push(K);
        }
        const q = this.actor.items.get(l), Y = {
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${S}.itemId`]: l,
          [`system.weapons.${S}.name`]: (q == null ? void 0 : q.name) ?? "",
          [`system.weapons.${S}.damage`]: ((A = q == null ? void 0 : q.system) == null ? void 0 : A.damage) ?? ""
        };
        await this.actor.update(Y);
      } else if (w) {
        const O = {
          "system.weapons.slotOrder": v.filter((q) => q !== w).join(",")
        };
        O[`system.weapons.${w}.itemId`] = "", O[`system.weapons.${w}.name`] = "", O[`system.weapons.${w}.damage`] = "", O[`system.weapons.${w}.bonus`] = "", await this.actor.update(O);
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const a = s.currentTarget;
      if (a.disabled) return;
      const l = a.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var q;
      s.preventDefault();
      const a = s.currentTarget, l = a.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), d = u == null ? void 0 : u.dataset.slot;
      if (!d) return;
      const f = (a.dataset.itemId ?? "").trim(), v = (a.dataset.itemName ?? ((q = a.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (a.dataset.itemImg ?? "").trim(), E = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      E && (E.textContent = v);
      let A = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      w ? (A || (A = document.createElement("img"), A.className = "karakter-microchip-slot-thumb", A.alt = "", u == null || u.insertBefore(A, E)), A.src = w, A.style.display = "") : A && A.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const S = f ? this.actor.items.get(f) : null, O = {
        [`system.gear.microchips.${d}.itemId`]: f,
        [`system.gear.microchips.${d}.name`]: (S == null ? void 0 : S.name) ?? ""
      };
      f && (O[`system.gear.microchips.${d}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (s) => {
      const a = s.currentTarget.dataset.slot;
      if (!a) return;
      const l = s.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${a}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((s, a) => {
      const l = a.dataset.slot;
      a.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, l)), a.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, l));
    }), t.find(".karakter-ability-slot-single").each((s, a) => {
      const l = a.dataset.slot;
      l && (a.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, l)), a.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (u) => {
        var d;
        (d = u.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, a) => {
      const l = a.dataset.area;
      l && (a.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, l)), a.addEventListener("dragleave", (u) => {
        var d;
        return (d = u.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (u) => {
        var d;
        (d = u.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var v;
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.area, l = s.currentTarget.dataset.itemId;
      if (!a || !l) return;
      const u = this.actor.system.abilities ?? {}, f = (Array.isArray((v = u[a]) == null ? void 0 : v.items) ? u[a].items.slice() : []).filter((w) => w !== l);
      await this.actor.update({ [`system.abilities.${a}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var d;
      s.preventDefault();
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      (d = u == null ? void 0 : u.sheet) == null || d.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const l = s.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-weapon-unequip", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.slotKey;
      a && await this.actor.update({
        [`system.weapons.${a}.itemId`]: "",
        [`system.weapons.${a}.name`]: "",
        [`system.weapons.${a}.bonus`]: "",
        [`system.weapons.${a}.damage`]: ""
      });
    }), t.on("click", ".karakter-armor-remove", async (s) => {
      var u, d;
      s.preventDefault();
      const a = parseInt(s.currentTarget.dataset.armorIndex, 10);
      if (!Number.isFinite(a) || a < 0) return;
      const l = Array.isArray((d = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : d.armor) ? [...this.actor.system.gear.armor] : [];
      l.splice(a, 1), await this.actor.update({ "system.gear.armor": l });
    }), t.on("click", ".karakter-equipment-add-row", async (s) => {
      var l, u, d, f;
      s.preventDefault();
      const a = s.currentTarget.dataset.gearArray;
      if (a === "armor") {
        const v = Array.isArray((u = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : u.armor) ? [...this.actor.system.gear.armor] : [];
        v.push({ name: "", protectionBonus: "", speedPenalty: "", level: "", other: "" }), await this.actor.update({ "system.gear.armor": v });
      } else if (a === "generalItems") {
        const v = Array.isArray((f = (d = this.actor.system) == null ? void 0 : d.gear) == null ? void 0 : f.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        v.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": v });
      }
    }), t.on("click", ".karakter-microchip-clear", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.slotKey;
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (s) => {
      var u, d;
      s.preventDefault();
      const a = parseInt(s.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(a) || a < 0) return;
      const l = Array.isArray((d = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : d.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(a, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const c = this, p = (s) => {
      var u, d, f, v;
      if (!s) return;
      const a = c._getFormDataForUpdate(s);
      if (Object.keys(a).length === 0) return;
      const l = ((d = (u = a.system) == null ? void 0 : u.resources) == null ? void 0 : d.currentHealth) != null || ((v = (f = a.system) == null ? void 0 : f.resources) == null ? void 0 : v.hitLocations) != null;
      c.actor.update(a).then(() => {
        l && setTimeout(() => c.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, h = (s) => {
      var a, l, u;
      return s && (((l = (a = c.element) == null ? void 0 : a.contains) == null ? void 0 : l.call(a, s)) || c.id && ((u = s.closest) == null ? void 0 : u.call(s, `#${CSS.escape(c.id)}`)));
    };
    c._votvBlur = (s) => {
      const a = s.target;
      if (!a || !a.form) return;
      const l = a.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const u = a.form;
      h(u) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: c.id, at: Date.now() }), p(u));
    }, document.body.addEventListener("blur", c._votvBlur, !0);
  }
  _tearDown(r) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, r);
  }
  _getFormDataForUpdate(r) {
    var c, p, h;
    const e = {};
    for (const y of r.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let s;
      y.type === "checkbox" ? s = y.checked : y.type === "number" ? s = y.value === "" ? 0 : Number(y.value) : s = y.value ?? "", foundry.utils.setProperty(e, y.name, s);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, n = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const y of o) {
      const s = ((h = i[y]) == null ? void 0 : h.value) ?? 0, a = n[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, F._healthStatusFromRatio(a, s));
    }
    return e;
  }
  async _onDropItem(r, e) {
    var o, c, p, h, y, s, a, l;
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
          let f = d.id;
          ((h = d.parent) == null ? void 0 : h.id) !== this.actor.id && (f = ((y = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : y.id) ?? f);
          const v = (((s = d.system) == null ? void 0 : s.kind) ?? "passive").toString(), w = this.actor.system.abilities ?? {};
          if (i) {
            const S = i.dataset.slot;
            if (S) {
              await this.actor.update({
                [`system.abilities.${S}.itemId`]: f,
                [`system.abilities.${S}.name`]: d.name
              });
              return;
            }
          } else if (n) {
            const S = n.dataset.area;
            if (S) {
              const O = Array.isArray((a = w[S]) == null ? void 0 : a.items) ? w[S].items.slice() : Array.isArray(w[S]) ? w[S].slice() : [];
              O.includes(f) || O.push(f), await this.actor.update({ [`system.abilities.${S}.items`]: O });
              return;
            }
          }
          if (v === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": d.name
            });
            return;
          }
          if (v === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": d.name
            });
            return;
          }
          const E = v === "active" ? "active" : "passive", A = Array.isArray((l = w[E]) == null ? void 0 : l.items) ? w[E].items.slice() : Array.isArray(w[E]) ? w[E].slice() : [];
          A.includes(f) || A.push(f), await this.actor.update({ [`system.abilities.${E}.items`]: A });
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
    var p, h, y, s, a, l;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((h = r.dataTransfer) == null ? void 0 : h.getData("text/plain")) || ((y = r.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "weapon") return;
    let o = n.id;
    ((s = n.parent) == null ? void 0 : s.id) !== this.actor.id && (o = ((a = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : a.id) ?? o);
    const c = {
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((l = n.system) == null ? void 0 : l.damage) ?? ""
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
    var h, y;
    r.preventDefault(), (h = r.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = r.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((s, a) => {
      const l = typeof s.sort == "number" ? s.sort : 0, u = typeof a.sort == "number" ? a.sort : 0;
      return l - u;
    }).map((s) => s.id), o = n.indexOf(t), c = n.indexOf(e);
    if (o === -1 || c === -1) return;
    n.splice(o, 1), n.splice(c, 0, t);
    const p = n.map((s, a) => ({
      _id: s,
      sort: (a + 1) * 10
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
    var y, s, a;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", i = Number(((s = e.system) == null ? void 0 : s.kp) ?? 0) || 0, n = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = n ? `<p>${n}</p>` : "", h = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${c}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: h,
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
    var p, h, y, s;
    r.preventDefault(), (p = r.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(r);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "ability") return;
    let n = i.id;
    ((h = i.parent) == null ? void 0 : h.id) !== this.actor.id && (n = ((y = (await this.actor.createEmbeddedDocuments("Item", [i.toObject()]))[0]) == null ? void 0 : y.id) ?? n);
    const o = this.actor.system.abilities ?? {}, c = Array.isArray((s = o[e]) == null ? void 0 : s.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
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
    var c, p, h, y, s;
    r.preventDefault(), (c = r.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = r.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((h = r.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
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
    ((y = n.parent) == null ? void 0 : y.id) !== this.actor.id && (o = ((s = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : s.id) ?? o), await this.actor.update({
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
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, h = new Roll(p);
    await h.evaluate({ async: !0 });
    const y = h.total >= 18 ? "critical" : h.total <= 3 ? "fumble" : null, s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y } },
      rollMode: s
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
    var w;
    const t = (this.actor.system.weapons ?? {})[r] ?? {}, i = this.actor.system.skills ?? {}, n = this.actor.items.filter((E) => E.type === "weapon");
    let o = null;
    t.itemId && (o = n.find((E) => E.id === t.itemId) ?? null);
    const c = o && o.name || t.name || `Fegyver (${r})`, p = Number(t.bonus || 0) || 0, y = (((w = o == null ? void 0 : o.system) == null ? void 0 : w.type) || "light") === "thrown" ? "grenadeUse" : "firearms", s = Number(i[y] || 0) || 0, a = p + s, u = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const f = d.total >= 18 ? "critical" : d.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f } },
      rollMode: v
    });
  }
  async _rollWeaponDamage(r) {
    var o;
    const e = this.actor.items.get(r);
    if (!e || e.type !== "weapon") return;
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
P(F, "PARTS", foundry.utils.mergeObject(C(F, F, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), P(F, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(F, F, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((We = C(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ye = C(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Xe = (Je = C(F, F, "DEFAULT_OPTIONS")) == null ? void 0 : Je.window) == null ? void 0 : Xe.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
P(F, "BODY_PART_BY_SKILL", {
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
let ne = F;
var Ze;
const j = class j extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var c, p, h;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (n) => {
      var c, p, h;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
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
P(j, "PARTS", foundry.utils.mergeObject(C(j, j, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), P(j, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(j, j, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "weapon"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ze = C(j, j, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.form) ?? {}, { submitOnChange: !0 })
}));
let oe = j;
var Qe;
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
      Object.keys(o).length !== 0 && e.document.update(o).catch((c) => console.warn("VoidMicrochipSheet save failed", c));
    }, i = (n) => {
      var o, c, p;
      return n && (((c = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var c, p, h;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      i(o) && t(o);
    }, e._votvInput = (n) => {
      var c, p, h;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
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
P(H, "PARTS", foundry.utils.mergeObject(C(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), P(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "microchip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qe = C(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !0 })
}));
let le = H;
var Ve;
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
      Object.keys(o).length !== 0 && e.document.update(o).catch((c) => console.warn("VoidAbilitySheet save failed", c));
    }, i = (n) => {
      var o, c, p;
      return n && (((c = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var c, p, h;
      const o = ((c = n.target) == null ? void 0 : c.form) ?? ((h = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
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
P(R, "PARTS", foundry.utils.mergeObject(C(R, R, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), P(R, "DEFAULT_OPTIONS", foundry.utils.mergeObject(C(R, R, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "ability"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ve = C(R, R, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !0 })
}));
let ce = R;
const ht = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var r, e, t, i;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (r = CONFIG.Actor).dataModels ?? (r.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ut, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.weapon = mt, CONFIG.Item.dataModels.microchip = pt, CONFIG.Item.dataModels.ability = gt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ne, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", oe, {
    types: ["weapon"],
    makeDefault: !0,
    label: "Void Weapon"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", le, {
    types: ["microchip"],
    makeDefault: !0,
    label: "Void Microchip"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ce, {
    types: ["ability"],
    makeDefault: !0,
    label: "Void Ability"
  });
  const L = 500;
  Hooks.on("updateActor", (n, o, c, p) => {
    var w, E, A, S, O;
    const h = n == null ? void 0 : n.id;
    if (!h) return;
    const y = document.activeElement, s = y && (y.tagName === "INPUT" && y.type !== "checkbox" && y.type !== "radio" || y.tagName === "TEXTAREA" || y.isContentEditable), a = [], l = (w = game.actors) == null ? void 0 : w.get(h);
    l != null && l.apps && a.push(...Array.from(l.apps));
    const u = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const q of u)
      ((E = q.document) == null ? void 0 : E.id) !== h || ((A = q.document) == null ? void 0 : A.documentName) !== "Actor" || ((S = q.constructor) == null ? void 0 : S.name) !== "VoidKarakterSheet" || a.includes(q) || a.push(q);
    if (s && a.some((q) => {
      const Y = (q == null ? void 0 : q.form) ?? (q == null ? void 0 : q.element);
      return Y && Y.contains(y);
    })) return;
    const f = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, v = f && Date.now() - f.at < L ? f.appId : null;
    setTimeout(() => {
      for (const q of a)
        !(q != null && q.rendered) || typeof q.render != "function" || q.id !== v && q.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (L) => {
      var i, n, o, c, p, h;
      if (!((n = (i = L.target) == null ? void 0 : i.closest) != null && n.call(i, "#actors"))) return;
      const r = (c = (o = L.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "[data-document-id]"), e = (p = r == null ? void 0 : r.getAttribute) == null ? void 0 : p.call(r, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((h = game.actors) != null && h.get(t)) && (game.votv._dragSourceActorId = t);
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
    "background.src": ht,
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
  ne as V
};
//# sourceMappingURL=vacuum-of-the-void-CguQlgpB.mjs.map
