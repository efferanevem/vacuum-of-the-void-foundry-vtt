var dt = Object.defineProperty;
var mt = Object.getPrototypeOf;
var pt = Reflect.get;
var ft = (N, i, e) => i in N ? dt(N, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[i] = e;
var R = (N, i, e) => ft(N, typeof i != "symbol" ? i + "" : i, e);
var j = (N, i, e) => pt(mt(N), e, i);
const { HTMLField: yt, NumberField: T, SchemaField: _, StringField: g, BooleanField: K, ArrayField: ne } = foundry.data.fields;
class gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new _({
        name: new g({ required: !1, blank: !0, initial: "" }),
        player: new g({ required: !1, blank: !0, initial: "" }),
        level: new T({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new g({ required: !1, blank: !0, initial: "" }),
        assignment: new g({ required: !1, blank: !0, initial: "" }),
        subAssignment: new g({ required: !1, blank: !0, initial: "" }),
        background: new g({ required: !1, blank: !0, initial: "" }),
        languages: new g({ required: !1, blank: !0, initial: "" })
      }),
      resources: new _({
        health: new _({
          value: new T({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new T({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new _({
          head: new _({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new _({
          head: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new T({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new _({
          head: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new _({
          value: new T({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new T({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new _({
        defense: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new _({
        deception: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new T({ required: !1, integer: !0, min: 0, initial: 0 })
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
            active: new K({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new g({ required: !1, blank: !0, initial: "" }),
            name: new g({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          })
        }),
        equipment: new g({ required: !1, blank: !0, initial: "" }),
        armor: new ne(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new g({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new g({ required: !1, blank: !0, initial: "" }),
            level: new g({ required: !1, blank: !0, initial: "" }),
            other: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ne(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            quantity: new T({ required: !1, integer: !0, min: 0, initial: 1 }),
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
          items: new ne(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new ne(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new _({
        biography: new yt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: me, SchemaField: ht } = foundry.data.fields;
class bt extends gt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ht({
        body: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: wt, NumberField: Dt, StringField: Z } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new wt({ required: !1, initial: !1 }),
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
const { BooleanField: kt, StringField: oe } = foundry.data.fields;
class It extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new oe({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new oe({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new oe({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new oe({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: pe, StringField: We } = foundry.data.fields;
class St extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new We({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new We({
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
const { NumberField: qt, StringField: Ye } = foundry.data.fields;
class Je extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Ye({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Ye({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new qt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var Qe, Xe, Ze, Ve;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
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
  _getScrollContainers(i) {
    var s, n, a, d;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), s = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (s.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (s.windowScrollTop = t.scrollTop), s;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: s } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && s && (s.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var r;
    const t = (r = game.votv) == null ? void 0 : r._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const n = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (n) {
      d.scrollState = this._saveScrollState(n);
      const m = document.activeElement, f = a.contains(m), h = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && h && (d.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const y = this.element, b = this.form ?? this.element, v = d.scrollState, o = d.focus, c = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", l = () => {
      var m, f;
      if (this._applyScrollState(y, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const h = ((m = b.querySelector) == null ? void 0 : m.call(b, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(o.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = o.selectionStart ?? 0, h.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(y, v);
    };
    return (c || o) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const n = Math.floor(s / 3), a = Math.floor(2 * s / 3);
    return t <= n ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, n;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const d = String(((n = a.system) == null ? void 0 : n.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, n;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var d;
        return a.type === "Pancel" && ((d = a.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const d = String(((n = a.system) == null ? void 0 : n.protectionBonus) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var v, o, c, l, r, m, f, h, k;
    const e = i ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((c = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : c.resources) ?? {}, n = ((r = (l = s.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : r.value) ?? 0, a = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, d = E._healthStatusFromRatio(a, n), p = Number(((k = (h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let y;
    d === 0 ? y = 0 : d === 1 ? y = -6 : d === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var a, d, p, y;
    const e = i ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = (Number(((y = (p = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(n);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var a, d, p, y;
    const e = E.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, s = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, n = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return E._healthStatusFromRatio(n, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var d, p, y, b;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((d = i == null ? void 0 : i.system) == null ? void 0 : d.resources) ?? {}, n = ((y = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, a = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return E._healthStatusFromRatio(a, n);
  }
  async _prepareContext(i) {
    var _e, Le, Ae, Fe, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Be, He, Ue, Ge;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (Le = (_e = this.actor.system) == null ? void 0 : _e.resources) == null ? void 0 : Le.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, n = s.hitLocations ?? {}, a = s.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of d) {
      const I = ((Fe = n[u]) == null ? void 0 : Fe.value) ?? 0, S = a[u] ?? 0;
      e.computedHealthStatus[u] = E._healthStatusFromRatio(S, I);
    }
    const p = (Number(a.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((u) => (Number(a[u]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ne = (Ce = this.actor.system) == null ? void 0 : Ce.combat) == null ? void 0 : Ne.givenSpeed) ?? 0) || 0;
    let c;
    v === 0 ? c = 0 : v === 1 ? c = -6 : v === 2 ? c = -3 : c = o;
    const l = this._getTotalArmorSpeedPenalty();
    c += l, e.effectiveGivenSpeed = c;
    const m = (Number(((Pe = (Ee = this.actor.system) == null ? void 0 : Ee.combat) == null ? void 0 : Pe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: c, givenProtection: m } },
      { inplace: !1 }
    );
    const f = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [u, I] of Object.entries(f)) {
      const S = e.computedHealthStatus[I];
      e.skillHealthStatus[u] = S, e.skillDisabled[u] = S === 0 ? " disabled" : "", e.skillHasHealthTint[u] = !0;
    }
    const h = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (h.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((u) => k.includes(u)) : [], L = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, D = L && typeof L == "object" && !Array.isArray(L) ? L : {}, w = (((xe = D.slot1) == null ? void 0 : xe.itemId) ?? "").trim(), C = (((je = D.slot2) == null ? void 0 : je.itemId) ?? "").trim(), P = (((Me = D.slot3) == null ? void 0 : Me.itemId) ?? "").trim(), rt = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, I) => {
      const S = typeof u.sort == "number" ? u.sort : 0, q = typeof I.sort == "number" ? I.sort : 0;
      return S - q;
    }).map((u) => {
      var Y, Q, ae, te, ie, se;
      const I = u.type === "Fegyver", S = u.type === "MikroChip";
      let q = 0, A = "", M = null;
      for (let X = 0; X < F.length; X++) {
        const V = F[X];
        if ((((Y = h[V]) == null ? void 0 : Y.itemId) ?? "") === u.id) {
          q = X + 1, A = ((Q = h[V]) == null ? void 0 : Q.bonus) ?? "", M = V;
          break;
        }
      }
      let x = null;
      S && (w === u.id ? x = "slot1" : C === u.id ? x = "slot2" : P === u.id && (x = "slot3"));
      const ee = I && ((ae = u.system) != null && ae.damage) ? u.system.damage : "", J = I && typeof ((te = u.system) == null ? void 0 : te.range) == "string" ? (u.system.range || "").trim() : "", W = M ? Number((ie = h[M]) == null ? void 0 : ie.bonus) || 0 : "";
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        type: u.type,
        isWeapon: I,
        slotAssignment: q,
        slotBonus: A,
        slotKey: M,
        microchipSlotKey: x,
        isEquipped: !!(M || x),
        damage: ee,
        rangeStr: J,
        slotBonusNum: W,
        quantity: Number(((se = u.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = rt;
    const le = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((u) => u.type === "Fegyver"), we = le.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = we;
    const ve = "— Nincs fegyver —", at = F.filter((u) => {
      const S = ((h[u] ?? {}).itemId ?? "").trim();
      return S ? !!le.find((A) => A.id === S) : !1;
    });
    e.weaponSlots = at.map((u, I) => {
      const S = h[u] ?? {}, q = (S.itemId ?? "").trim(), A = we.find((M) => M.id === q);
      return {
        slotKey: u,
        itemId: q,
        slotNum: I + 1,
        displayName: (A == null ? void 0 : A.name) || S.name || ve,
        img: (A == null ? void 0 : A.img) || "",
        bonus: Number(S.bonus) || 0,
        damage: S.damage ?? ""
      };
    });
    const nt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ot = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = le.map((u) => {
      var X, V, ze;
      const I = u.id;
      let S = null, q = {};
      for (const de of F)
        if ((((X = h[de]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          S = de, q = h[de] ?? {};
          break;
        }
      const A = !!S, M = ((V = u.system) == null ? void 0 : V.equipped) !== void 0 && ((ze = u.system) == null ? void 0 : ze.equipped) !== null ? !!u.system.equipped : A, x = (u == null ? void 0 : u.system) ?? {}, ee = typeof x.range == "string" ? (x.range || "").trim() : "", J = x.type ?? "", W = (nt[J] ?? J) || "—", Y = x.size ?? "", Q = (ot[Y] ?? Y) || "", ae = [W, Q].filter(Boolean).join(", ") || W || "—", te = W === "Lövedékes", ie = x.quantity, se = ie != null ? String(ie).trim() : "1";
      return {
        slotKey: S ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? ve,
        img: (u == null ? void 0 : u.img) ?? "",
        bonus: String(q.bonus ?? "").trim() || (M ? "0" : "—"),
        damage: q.damage ?? x.damage ?? "",
        rangeStr: ee || "—",
        typeLabel: W,
        typeAndSize: ae,
        quantity: se,
        quantityDisplay: te ? se : "—",
        isProjectile: te,
        equipped: M,
        special: (x.special ?? "").trim() || "—"
      };
    });
    const lt = (((Re = this.actor.items) == null ? void 0 : Re.contents) ?? []).filter((u) => u.type === "Pancel");
    e.armorTable = lt.map((u) => {
      var q, A;
      const I = (u == null ? void 0 : u.system) ?? {}, S = ((q = u.system) == null ? void 0 : q.equipped) !== void 0 && ((A = u.system) == null ? void 0 : A.equipped) !== null ? !!u.system.equipped : !1;
      return {
        itemId: u.id,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: S
      };
    }), e.generalItems = Array.isArray((He = (Be = this.actor.system) == null ? void 0 : Be.gear) == null ? void 0 : He.generalItems) ? this.actor.system.gear.generalItems : [];
    const ce = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((u) => u.type === "MikroChip"), re = ce.map((u) => ({ id: u.id, name: u.name, img: u.img })), ke = "— Nincs Mikro-Chip —", Ie = ["slot1", "slot2", "slot3"], ue = (u) => {
      var S, q, A;
      const I = [];
      return u !== 1 && I.push((((S = D.slot1) == null ? void 0 : S.itemId) ?? "").trim()), u !== 2 && I.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), u !== 3 && I.push((((A = D.slot3) == null ? void 0 : A.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((u) => !ue(1).includes(u.id)), e.microchipItemsSlot2 = re.filter((u) => !ue(2).includes(u.id)), e.microchipItemsSlot3 = re.filter((u) => !ue(3).includes(u.id)), e.microchipSlots = Ie.map((u) => {
      const I = D[u] ?? {}, S = (I.itemId ?? "").trim(), q = ce.find((A) => A.id === S);
      return {
        slotKey: u,
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || I.name || ke,
        img: (q == null ? void 0 : q.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((u) => {
      const I = `slot${u}`, S = D[I] ?? {}, q = (S.itemId ?? "").trim(), A = re.find((M) => M.id === q);
      e[`microchip${u}ItemId`] = q, e[`microchip${u}DisplayName`] = (A == null ? void 0 : A.name) || S.name || ke, e[`microchip${u}Img`] = (A == null ? void 0 : A.img) || "";
    }), e.microchipsTable = ce.map((u) => {
      var J, W, Y;
      const I = u.id;
      let S = null;
      for (const Q of Ie)
        if ((((J = D[Q]) == null ? void 0 : J.itemId) ?? "").trim() === I) {
          S = Q;
          break;
        }
      const q = !!S, A = ((W = u == null ? void 0 : u.system) == null ? void 0 : W.abilityType) ?? "", M = A === "active" ? "Aktív" : A === "passive" ? "Passzív" : A || "—", x = (((Y = u == null ? void 0 : u.system) == null ? void 0 : Y.description) ?? "").trim(), ee = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        typeLabel: M,
        description: ee,
        slotKey: S ?? "",
        equipped: q
      };
    });
    const Se = this.actor.system.abilities ?? {}, ct = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).map((u) => {
      var I, S, q;
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        kind: ((I = u.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((S = u.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((q = u.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), qe = new Map(ct.map((u) => [u.id, u])), ut = "— Nincs képesség —", Te = (u) => {
      const I = Se[u] ?? {}, S = (I.itemId ?? "").trim(), q = S ? qe.get(S) : null, A = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || I.name || ut,
        img: (q == null ? void 0 : q.img) || "",
        description: A,
        kp: M
      };
    };
    e.abilityFajiSlot = Te("faji"), e.abilityHatterSlot = Te("hatter");
    const Oe = (u) => {
      const I = Se[u];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, De = (u) => u.map((I) => {
      const S = qe.get(I);
      return S ? {
        id: S.id,
        name: S.name,
        img: S.img,
        description: S.description,
        kp: S.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = De(Oe("passive")), e.abilityActiveList = De(Oe("active")), e;
  }
  _attachFrameListeners(i) {
    var b, v;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const l = (o.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-A984Mgk3.mjs");
      r(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var r, m, f;
      o.preventDefault(), o.stopPropagation();
      const c = o.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const h = (c.dataset.slot ?? "").trim();
        if (!h) return;
        l = (((((m = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : m.weapons) ?? {})[h] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((f = c.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (o) => {
      var r;
      const c = o ? o.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const n = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    n && s({ currentTarget: n }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (o) => {
      o.preventDefault(), o.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (o) => {
      var f;
      o.preventDefault();
      const c = o.currentTarget, l = c.dataset.skill, r = ((f = c.textContent) == null ? void 0 : f.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-A984Mgk3.mjs");
      m(this.actor, l, r);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const a = (o, c) => {
      var m;
      const l = o.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      if (r) {
        if (o.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const f = o.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = r.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const c = o.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r) return;
      let m = Number(c.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await r.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor, m = r.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = r.system.weapons ?? {}, k = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], L = F.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === l;
        });
        if (L) {
          const D = F.filter((w) => w !== L);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await r.update(f), await r.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var L, D;
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = k.find((w) => {
        var C;
        return (((C = m[w]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let w = k.find((P) => {
          var B;
          return !((B = m[P]) != null && B.itemId);
        });
        const C = new Set(k);
        if (!w) {
          const P = h.find((B) => !C.has(B));
          if (!P) return;
          w = P, k.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: l,
          [`system.weapons.${w}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${w}.damage`]: ((L = r == null ? void 0 : r.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = r == null ? void 0 : r.system) == null ? void 0 : D.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (O) {
        const w = k.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (o) => {
      o.preventDefault();
      const c = o.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), r = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (o) => {
      var w;
      o.preventDefault();
      const c = o.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), r = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = r == null ? void 0 : r.dataset.slot;
      if (!m) return;
      const f = (c.dataset.itemId ?? "").trim(), h = (c.dataset.itemName ?? ((w = c.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (c.dataset.itemImg ?? "").trim(), O = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = h);
      let F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      k ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", r == null || r.insertBefore(F, O)), F.src = k, F.style.display = "") : F && F.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const L = f ? this.actor.items.get(f) : null, D = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      f && (D[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (o) => {
      $(o.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (o) => {
      var h, k;
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const r = ((k = (h = this.actor.system) == null ? void 0 : h.gear) == null ? void 0 : k.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var F;
        return (((F = r[O]) == null ? void 0 : F.itemId) ?? "").trim() === c;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", (o) => {
      const c = o.currentTarget.dataset.slot;
      if (!c) return;
      const l = o.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${c}.active`]: l });
    }), t.find(".karakter-microchip-slot").each((o, c) => {
      const l = c.dataset.slot;
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, l));
    }), t.find(".karakter-ability-slot-single").each((o, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var h;
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.area, l = o.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const r = this.actor.system.abilities ?? {}, f = (Array.isArray((h = r[c]) == null ? void 0 : h.items) ? r[c].items.slice() : []).filter((k) => k !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      (m = r == null ? void 0 : r.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const l = o.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const m = (c.value ?? "").trim();
      await r.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, h = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        h && this._resizeWeaponQuantityInput(h);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var L, D;
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = k.find((w) => {
        var C;
        return (((C = m[w]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let w = k.find((P) => {
          var B;
          return !((B = m[P]) != null && B.itemId);
        });
        const C = new Set(k);
        if (!w) {
          const P = h.find((B) => !C.has(B));
          if (!P) return;
          w = P, k.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: l,
          [`system.weapons.${w}.name`]: r.name ?? "",
          [`system.weapons.${w}.damage`]: ((L = r.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = r.system) == null ? void 0 : D.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (O) {
        const w = k.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor, m = r.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = r.system.weapons ?? {}, k = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], L = F.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === l;
        });
        if (L) {
          const D = F.filter((w) => w !== L);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await r.update(f), await r.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var l, r;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((r = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : r.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-item-remove", async (o) => {
      var r, m;
      o.preventDefault();
      const c = parseInt(o.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(c) || c < 0) return;
      const l = Array.isArray((m = (r = this.actor.system) == null ? void 0 : r.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(c, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const d = this, p = (o) => {
      var r, m, f, h;
      if (!o) return;
      const c = d._getFormDataForUpdate(o);
      if (Object.keys(c).length === 0) return;
      const l = ((m = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : m.currentHealth) != null || ((h = (f = c.system) == null ? void 0 : f.resources) == null ? void 0 : h.hitLocations) != null;
      d.actor.update(c).then(() => {
        l && setTimeout(() => d.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, y = (o) => {
      var c, l, r;
      return o && (((l = (c = d.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, o)) || d.id && ((r = o.closest) == null ? void 0 : r.call(o, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (o) => {
      const c = o.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const r = c.form;
      y(r) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(r));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var d, p, y;
    const e = {};
    for (const b of i.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, n = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const b of a) {
      const v = ((y = s[b]) == null ? void 0 : y.value) ?? 0, o = n[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, E._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, n, a, d, p, y, b, v, o, c;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            l = r;
            break;
          }
      }
      if (l) {
        const r = await fromUuid(l);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let m = r.id;
          if (((s = r.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const F = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            m = ((n = (await this.actor.createEmbeddedDocuments("Item", [F]))[0]) == null ? void 0 : n.id) ?? m;
          }
          const f = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), h = this.actor.system.abilities ?? {};
          if (f === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": m,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (f === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": m,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const k = f === "active" ? "active" : "passive", O = Array.isArray((d = h[k]) == null ? void 0 : d.items) ? h[k].items.slice() : Array.isArray(h[k]) ? h[k].slice() : [];
          O.includes(m) || O.push(m), await this.actor.update({ [`system.abilities.${k}.items`]: O });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            l = r;
            break;
          }
      }
      if (l) {
        const r = await fromUuid(l);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const m = this.actor, f = ((y = r.parent) == null ? void 0 : y.id) !== m.id;
          let h = r.id;
          if (f) {
            const k = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            h = ((b = (await m.createEmbeddedDocuments("Item", [k]))[0]) == null ? void 0 : b.id) ?? h;
          }
          if (f) {
            const k = ((v = m.system) == null ? void 0 : v.weapons) ?? {}, O = (k.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = O ? O.split(/\s*,\s*/).filter((w) => F.includes(w)) : [], D = L.filter((w) => {
              var C;
              return (((C = k[w]) == null ? void 0 : C.itemId) ?? "").trim() === h;
            });
            if (D.length > 0) {
              const C = {
                "system.weapons.slotOrder": L.filter((P) => !D.includes(P)).join(",")
              };
              for (const P of D)
                C[`system.weapons.${P}.itemId`] = "", C[`system.weapons.${P}.name`] = "", C[`system.weapons.${P}.damage`] = "", C[`system.weapons.${P}.bonus`] = "";
              await m.update(C);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const m = this.actor;
          if (((o = r.parent) == null ? void 0 : o.id) !== m.id) {
            const f = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await m.createEmbeddedDocuments("Item", [f]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const m = this.actor;
          ((c = r.parent) == null ? void 0 : c.id) !== m.id && await m.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var n, a, d;
    const t = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var d, p, y, b, v, o;
    i.preventDefault(), i.stopPropagation(), (d = i.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const n = await fromUuid(s.uuid);
    if (!n || n.type !== "Fegyver") return;
    if (((b = n.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [c]);
      return;
    }
    const a = n.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: n.name,
      [`system.weapons.${e}.damage`]: ((v = n.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = n.system) == null ? void 0 : o.bonus) ?? ""
    }), await n.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var s;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (s = i.currentTarget) == null || s.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var y, b;
    i.preventDefault(), (y = i.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = i.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((v, o) => {
      const c = typeof v.sort == "number" ? v.sort : 0, l = typeof o.sort == "number" ? o.sort : 0;
      return c - l;
    }).map((v) => v.id), a = n.indexOf(t), d = n.indexOf(e);
    if (a === -1 || d === -1) return;
    n.splice(a, 1), n.splice(d, 0, t);
    const p = n.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(i) {
    var s, n, a;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-actions-table-drag-over"));
  }
  _onInventoryAreaDragLeave(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  _onInventoryAreaDrop(i) {
    var e;
    (e = i.currentTarget) == null || e.classList.remove("karakter-actions-table-drag-over");
  }
  /** Lőszer mező: mindig fit-content (CSS field-sizing + JS fallback az input klónjával). */
  _resizeWeaponQuantityInput(i) {
    if (!i || i.type !== "text") return;
    const e = 20;
    if (!i.value || String(i.value).trim() === "") {
      i.style.width = "";
      return;
    }
    const t = i.cloneNode(!1);
    t.value = i.value, t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "0", t.style.width = "1px", t.style.visibility = "hidden", t.removeAttribute("data-item-id"), document.body.appendChild(t);
    const s = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, s)}px`;
  }
  async _postAbilityToChat(i) {
    var b, v, o;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, n = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = n ? `<p>${n}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, n;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    if (!e) return null;
    let t;
    try {
      t = typeof e == "string" ? JSON.parse(e) : e;
    } catch {
      return null;
    }
    return !t || t.type !== "Item" || !t.uuid ? null : t;
  }
  _onAbilitySingleDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var a, d, p;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let n = s.id;
    if (((d = s.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const y = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      n = ((p = (await this.actor.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : p.id) ?? n;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var p, y, b, v;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let n = s.id;
    if (((y = s.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      n = ((b = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : b.id) ?? n;
    }
    const a = this.actor.system.abilities ?? {}, d = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    d.includes(n) || d.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(i, e) {
    var n, a, d;
    const t = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var d, p, y, b, v;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const n = await fromUuid(s.uuid);
    if (!n || n.type !== "MikroChip") return;
    let a = n.id;
    ((b = n.parent) == null ? void 0 : b.id) !== this.actor.id && (a = ((v = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : v.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let n = Number(s) || 0;
    const a = this._getSkillHealthStatus(i);
    a === 1 ? n -= 6 : a === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const b = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var n;
    const i = Number(((n = this.actor.system.resources) == null ? void 0 : n.morale) ?? 0) || 0;
    if (i <= 0) return;
    const e = new Roll("1d8");
    await e.evaluate({ async: !0 });
    const t = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await e.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Morál",
      flags: { "vacuum-of-the-void": {} },
      rollMode: t
    });
    const s = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": s });
  }
  async _rollWeapon(i) {
    var h;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, n = this.actor.items.filter((k) => k.type === "Fegyver");
    let a = null;
    t.itemId && (a = n.find((k) => k.id === t.itemId) ?? null);
    const d = a && a.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, b = (((h = a == null ? void 0 : a.system) == null ? void 0 : h.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(s[b] || 0) || 0, o = p + v, l = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, r = new Roll(l);
    await r.evaluate({ async: !0 });
    const m = r.total >= 18 ? "critical" : r.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var p, y, b, v, o, c, l, r, m, f;
    const t = this.actor;
    if (!t) return;
    let s = ((y = (p = t.items).get) == null ? void 0 : y.call(p, i)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (h) => h.id === i));
    if (!s || s.type !== "Fegyver") return;
    let n = (((o = s.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!n && e && (n = (((((c = t.system) == null ? void 0 : c.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !n) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((m = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : m.call(r, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(n);
    await a.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
R(E, "PARTS", foundry.utils.mergeObject(j(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Qe = j(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Xe = j(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ve = (Ze = j(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.window) == null ? void 0 : Ve.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
R(E, "BODY_PART_BY_SKILL", {
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
let fe = E;
var et;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, s = (n) => {
      var a, d, p;
      return n && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, y;
      const a = ((d = n.target) == null ? void 0 : d.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), e.system = t, e;
  }
};
R(H, "PARTS", foundry.utils.mergeObject(j(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((et = j(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !1 })
}));
let ye = H;
var tt;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, s = (n) => {
      var a, d, p;
      return n && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, y;
      const a = ((d = n.target) == null ? void 0 : d.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(U, "PARTS", foundry.utils.mergeObject(j(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((tt = j(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !1 })
}));
let ge = U;
var it;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, s = (n) => {
      var a, d, p;
      return n && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, y;
      const a = ((d = n.target) == null ? void 0 : d.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(a) && t(a);
    }, e._votvInput = (n) => {
      var p;
      const a = n.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const d = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      s(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(d), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", !(t.name === "name" && typeof s == "string" && s.trim() === "") && foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(G, "PARTS", foundry.utils.mergeObject(j(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((it = j(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : it.form) ?? {}, { submitOnChange: !0 })
}));
let he = G;
var st;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const s = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(s).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    if (super._attachFrameListeners(i), !this.isEditable) return;
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, s = (n) => {
      var a, d, p;
      return n && (((d = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : d.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var d, p, y;
      const a = ((d = n.target) == null ? void 0 : d.form) ?? ((y = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(a) && t(a);
    }, e._votvInput = (n) => {
      var p;
      const a = n.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const d = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
      s(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(d), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let s;
      t.type === "checkbox" ? s = t.checked : t.type === "number" ? s = t.value === "" ? 0 : Number(t.value) : s = t.value ?? "", !(t.name === "name" && typeof s == "string" && s.trim() === "") && foundry.utils.setProperty(e, t.name, s);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(z, "PARTS", foundry.utils.mergeObject(j(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((st = j(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : st.form) ?? {}, { submitOnChange: !0 })
}));
let be = z;
const Tt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, s, n;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = bt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vt, CONFIG.Item.dataModels.Pancel = It, CONFIG.Item.dataModels.MikroChip = St, CONFIG.Item.dataModels.Kepesseg = Je, CONFIG.Item.dataModels.ability = Je, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", fe, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const N = 500;
  Hooks.on("updateActor", (a, d, p, y) => {
    var k, O, F, L, D;
    const b = a == null ? void 0 : a.id;
    if (!b) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), c = [], l = (k = game.actors) == null ? void 0 : k.get(b);
    l != null && l.apps && c.push(...Array.from(l.apps));
    const r = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of r)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((F = w.document) == null ? void 0 : F.documentName) !== "Actor" || ((L = w.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || c.includes(w) || c.push(w);
    if (o && c.some((w) => {
      const C = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return C && C.contains(v);
    })) return;
    const f = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, h = f && Date.now() - f.at < N ? f.appId : null;
    setTimeout(() => {
      for (const w of c)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== h && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (N) => {
      var s, n, a, d, p, y;
      if (!((n = (s = N.target) == null ? void 0 : s.closest) != null && n.call(s, "#actors"))) return;
      const i = (d = (a = N.target) == null ? void 0 : a.closest) == null ? void 0 : d.call(a, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, i, e) => {
  var a, d;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, s = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = s ? (d = game.actors) == null ? void 0 : d.get(s) : null;
  !n || n.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Tt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, i, e) => {
  var n, a, d;
  const t = (a = (n = N.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const s = (d = i == null ? void 0 : i.querySelector) == null ? void 0 : d.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  fe as V
};
//# sourceMappingURL=vacuum-of-the-void-DYk6leiV.mjs.map
