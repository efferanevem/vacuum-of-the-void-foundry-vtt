var dt = Object.defineProperty;
var mt = Object.getPrototypeOf;
var pt = Reflect.get;
var ft = (C, i, e) => i in C ? dt(C, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : C[i] = e;
var R = (C, i, e) => ft(C, typeof i != "symbol" ? i + "" : i, e);
var j = (C, i, e) => pt(mt(C), e, i);
const { HTMLField: yt, NumberField: T, SchemaField: L, StringField: h, BooleanField: K, ArrayField: ne } = foundry.data.fields;
class gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new L({
        name: new h({ required: !1, blank: !0, initial: "" }),
        player: new h({ required: !1, blank: !0, initial: "" }),
        level: new T({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new h({ required: !1, blank: !0, initial: "" }),
        assignment: new h({ required: !1, blank: !0, initial: "" }),
        subAssignment: new h({ required: !1, blank: !0, initial: "" }),
        background: new h({ required: !1, blank: !0, initial: "" }),
        languages: new h({ required: !1, blank: !0, initial: "" })
      }),
      resources: new L({
        health: new L({
          value: new T({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new T({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new L({
          head: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          torso: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          arms: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          legs: new L({
            value: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new L({
          head: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new T({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new L({
          head: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new T({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new L({
          value: new T({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new T({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new L({
        defense: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new T({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new T({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new L({
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
      weapons: new L({
        slotOrder: new h({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new L({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new L({
        microchips: new L({
          slot1: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" }),
        armor: new ne(
          new L({
            name: new h({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new h({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new h({ required: !1, blank: !0, initial: "" }),
            level: new h({ required: !1, blank: !0, initial: "" }),
            other: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ne(
          new L({
            name: new h({ required: !1, blank: !0, initial: "" }),
            quantity: new T({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new L({
        faji: new L({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new L({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        passive: new L({
          items: new ne(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new ne(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new L({
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
const N = class N extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var s, a, r, d;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, ".window-content")) ?? null;
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
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const a = this.element, r = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (a) {
      d.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = r.contains(m), y = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && y && (d.focus = {
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
    const g = this.element, b = this.form ?? this.element, v = d.scrollState, o = d.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", u = () => {
      var m, f;
      if (this._applyScrollState(g, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const y = ((m = b.querySelector) == null ? void 0 : m.call(b, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(o.name)}"]`) : null);
        y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA") && (y.focus({ preventScroll: !0 }), typeof y.selectionStart == "number" && (y.selectionStart = o.selectionStart ?? 0, y.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(g, v);
    };
    return (l || o) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const a = Math.floor(s / 3), r = Math.floor(2 * s / 3);
    return t <= a ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, a;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var d;
        return r.type === "Pancel" && ((d = r.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const d = String(((a = r.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, a;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var d;
        return r.type === "Pancel" && ((d = r.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const d = String(((a = r.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var v, o, l, u, n, m, f, y, I;
    const e = i ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, a = ((n = (u = s.hitLocations) == null ? void 0 : u.legs) == null ? void 0 : n.value) ?? 0, r = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, d = N._healthStatusFromRatio(r, a), p = Number(((I = (y = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : y.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let g;
    d === 0 ? g = 0 : d === 1 ? g = -6 : d === 2 ? g = -3 : g = p;
    const b = this._getTotalArmorSpeedPenalty();
    g += b, t.textContent = String(g);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var r, d, p, g;
    const e = i ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = (Number(((g = (p = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : p.combat) == null ? void 0 : g.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, d, p, g;
    const e = N.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, s = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, a = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return N._healthStatusFromRatio(a, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var d, p, g, b;
    const t = N.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((d = i == null ? void 0 : i.system) == null ? void 0 : d.resources) ?? {}, a = ((g = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, r = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return N._healthStatusFromRatio(r, a);
  }
  async _prepareContext(i) {
    var _e, Le, Ae, Fe, Ce, Ee, Ne, Pe, $e, xe, je, Me, Ke, Re, He, Be, Ue, Ge;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (Le = (_e = this.actor.system) == null ? void 0 : _e.resources) == null ? void 0 : Le.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, a = s.hitLocations ?? {}, r = s.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const c of d) {
      const k = ((Fe = a[c]) == null ? void 0 : Fe.value) ?? 0, S = r[c] ?? 0;
      e.computedHealthStatus[c] = N._healthStatusFromRatio(S, k);
    }
    const p = (Number(r.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((c) => (Number(r[c]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ee = (Ce = this.actor.system) == null ? void 0 : Ce.combat) == null ? void 0 : Ee.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const u = this._getTotalArmorSpeedPenalty();
    l += u, e.effectiveGivenSpeed = l;
    const m = (Number(((Pe = (Ne = this.actor.system) == null ? void 0 : Ne.combat) == null ? void 0 : Pe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = N.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [c, k] of Object.entries(f)) {
      const S = e.computedHealthStatus[k];
      e.skillHealthStatus[c] = S, e.skillDisabled[c] = S === 0 ? " disabled" : "", e.skillHasHealthTint[c] = !0;
    }
    const y = this.actor.system.weapons ?? {}, I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = (y.slotOrder ?? "").trim(), E = D ? D.split(/\s*,\s*/).filter((c) => I.includes(c)) : [], _ = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, O = _ && typeof _ == "object" && !Array.isArray(_) ? _ : {}, w = (((xe = O.slot1) == null ? void 0 : xe.itemId) ?? "").trim(), F = (((je = O.slot2) == null ? void 0 : je.itemId) ?? "").trim(), P = (((Me = O.slot3) == null ? void 0 : Me.itemId) ?? "").trim(), rt = this.actor.items.contents.filter((c) => c.type !== "Kepesseg" && c.type !== "ability").slice().sort((c, k) => {
      const S = typeof c.sort == "number" ? c.sort : 0, q = typeof k.sort == "number" ? k.sort : 0;
      return S - q;
    }).map((c) => {
      var Y, Q, ae, te, ie, se;
      const k = c.type === "Fegyver", S = c.type === "MikroChip";
      let q = 0, A = "", M = null;
      for (let X = 0; X < E.length; X++) {
        const V = E[X];
        if ((((Y = y[V]) == null ? void 0 : Y.itemId) ?? "") === c.id) {
          q = X + 1, A = ((Q = y[V]) == null ? void 0 : Q.bonus) ?? "", M = V;
          break;
        }
      }
      let x = null;
      S && (w === c.id ? x = "slot1" : F === c.id ? x = "slot2" : P === c.id && (x = "slot3"));
      const ee = k && ((ae = c.system) != null && ae.damage) ? c.system.damage : "", J = k && typeof ((te = c.system) == null ? void 0 : te.range) == "string" ? (c.system.range || "").trim() : "", W = M ? Number((ie = y[M]) == null ? void 0 : ie.bonus) || 0 : "";
      return {
        id: c.id,
        name: c.name,
        img: c.img,
        type: c.type,
        isWeapon: k,
        slotAssignment: q,
        slotBonus: A,
        slotKey: M,
        microchipSlotKey: x,
        isEquipped: !!(M || x),
        damage: ee,
        rangeStr: J,
        slotBonusNum: W,
        quantity: Number(((se = c.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = rt;
    const le = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((c) => c.type === "Fegyver"), we = le.map((c) => ({ id: c.id, name: c.name, img: c.img }));
    e.weaponItems = we;
    const ve = "— Nincs fegyver —", at = E.filter((c) => {
      const S = ((y[c] ?? {}).itemId ?? "").trim();
      return S ? !!le.find((A) => A.id === S) : !1;
    });
    e.weaponSlots = at.map((c, k) => {
      const S = y[c] ?? {}, q = (S.itemId ?? "").trim(), A = we.find((M) => M.id === q);
      return {
        slotKey: c,
        itemId: q,
        slotNum: k + 1,
        displayName: (A == null ? void 0 : A.name) || S.name || ve,
        img: (A == null ? void 0 : A.img) || "",
        bonus: Number(S.bonus) || 0,
        damage: S.damage ?? ""
      };
    });
    const nt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ot = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = le.map((c) => {
      var X, V, ze;
      const k = c.id;
      let S = null, q = {};
      for (const de of E)
        if ((((X = y[de]) == null ? void 0 : X.itemId) ?? "").trim() === k) {
          S = de, q = y[de] ?? {};
          break;
        }
      const A = !!S, M = ((V = c.system) == null ? void 0 : V.equipped) !== void 0 && ((ze = c.system) == null ? void 0 : ze.equipped) !== null ? !!c.system.equipped : A, x = (c == null ? void 0 : c.system) ?? {}, ee = typeof x.range == "string" ? (x.range || "").trim() : "", J = x.type ?? "", W = (nt[J] ?? J) || "—", Y = x.size ?? "", Q = (ot[Y] ?? Y) || "", ae = [W, Q].filter(Boolean).join(", ") || W || "—", te = W === "Lövedékes", ie = x.quantity, se = ie != null ? String(ie).trim() : "1";
      return {
        slotKey: S ?? "",
        itemId: k,
        actorId: this.actor.id,
        name: (c == null ? void 0 : c.name) ?? ve,
        img: (c == null ? void 0 : c.img) ?? "",
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
    const lt = (((Re = this.actor.items) == null ? void 0 : Re.contents) ?? []).filter((c) => c.type === "Pancel");
    e.armorTable = lt.map((c) => {
      var q, A;
      const k = (c == null ? void 0 : c.system) ?? {}, S = ((q = c.system) == null ? void 0 : q.equipped) !== void 0 && ((A = c.system) == null ? void 0 : A.equipped) !== null ? !!c.system.equipped : !1;
      return {
        itemId: c.id,
        actorId: this.actor.id,
        name: (c == null ? void 0 : c.name) ?? "—",
        img: (c == null ? void 0 : c.img) ?? "",
        protectionBonus: (k.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (k.speedPenalty ?? "").toString().trim() || "—",
        level: (k.level ?? "").toString().trim() || "—",
        special: (k.special ?? k.other ?? "").toString().trim() || "—",
        equipped: S
      };
    }), e.generalItems = Array.isArray((Be = (He = this.actor.system) == null ? void 0 : He.gear) == null ? void 0 : Be.generalItems) ? this.actor.system.gear.generalItems : [];
    const ce = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((c) => c.type === "MikroChip"), re = ce.map((c) => ({ id: c.id, name: c.name, img: c.img })), ke = "— Nincs Mikro-Chip —", Ie = ["slot1", "slot2", "slot3"], ue = (c) => {
      var S, q, A;
      const k = [];
      return c !== 1 && k.push((((S = O.slot1) == null ? void 0 : S.itemId) ?? "").trim()), c !== 2 && k.push((((q = O.slot2) == null ? void 0 : q.itemId) ?? "").trim()), c !== 3 && k.push((((A = O.slot3) == null ? void 0 : A.itemId) ?? "").trim()), k.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((c) => !ue(1).includes(c.id)), e.microchipItemsSlot2 = re.filter((c) => !ue(2).includes(c.id)), e.microchipItemsSlot3 = re.filter((c) => !ue(3).includes(c.id)), e.microchipSlots = Ie.map((c) => {
      const k = O[c] ?? {}, S = (k.itemId ?? "").trim(), q = ce.find((A) => A.id === S);
      return {
        slotKey: c,
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || k.name || ke,
        img: (q == null ? void 0 : q.img) || "",
        active: k.active === !0
      };
    }), ["1", "2", "3"].forEach((c) => {
      const k = `slot${c}`, S = O[k] ?? {}, q = (S.itemId ?? "").trim(), A = re.find((M) => M.id === q);
      e[`microchip${c}ItemId`] = q, e[`microchip${c}DisplayName`] = (A == null ? void 0 : A.name) || S.name || ke, e[`microchip${c}Img`] = (A == null ? void 0 : A.img) || "";
    }), e.microchipsTable = ce.map((c) => {
      var J, W, Y;
      const k = c.id;
      let S = null;
      for (const Q of Ie)
        if ((((J = O[Q]) == null ? void 0 : J.itemId) ?? "").trim() === k) {
          S = Q;
          break;
        }
      const q = !!S, A = ((W = c == null ? void 0 : c.system) == null ? void 0 : W.abilityType) ?? "", M = A === "active" ? "Aktív" : A === "passive" ? "Passzív" : A || "—", x = (((Y = c == null ? void 0 : c.system) == null ? void 0 : Y.description) ?? "").trim(), ee = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: k,
        actorId: this.actor.id,
        name: (c == null ? void 0 : c.name) ?? "—",
        img: (c == null ? void 0 : c.img) ?? "",
        typeLabel: M,
        description: ee,
        slotKey: S ?? "",
        equipped: q
      };
    });
    const Se = this.actor.system.abilities ?? {}, ct = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).map((c) => {
      var k, S, q;
      return {
        id: c.id,
        name: c.name,
        img: c.img,
        kind: ((k = c.system) == null ? void 0 : k.kind) ?? "passive",
        description: ((S = c.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((q = c.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), qe = new Map(ct.map((c) => [c.id, c])), ut = "— Nincs képesség —", Te = (c) => {
      const k = Se[c] ?? {}, S = (k.itemId ?? "").trim(), q = S ? qe.get(S) : null, A = (q == null ? void 0 : q.description) ?? "", M = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || k.name || ut,
        img: (q == null ? void 0 : q.img) || "",
        description: A,
        kp: M
      };
    };
    e.abilityFajiSlot = Te("faji"), e.abilityHatterSlot = Te("hatter");
    const Oe = (c) => {
      const k = Se[c];
      return k ? Array.isArray(k == null ? void 0 : k.items) ? k.items : Array.isArray(k) ? k : [] : [];
    }, De = (c) => c.map((k) => {
      const S = qe.get(k);
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
      const u = (o.currentTarget.dataset.slot ?? "").trim();
      if (!u) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-DQbboodB.mjs");
      n(this.actor, u);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var n, m, f;
      o.preventDefault(), o.stopPropagation();
      const l = o.currentTarget;
      let u = (l.dataset.itemId ?? "").trim();
      if (!u) {
        const y = (l.dataset.slot ?? "").trim();
        if (!y) return;
        u = (((((m = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : m.weapons) ?? {})[y] ?? {}).itemId ?? "").trim();
      }
      u && await this._rollWeaponDamage(u, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (o) => {
      var n;
      const l = o ? o.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const u = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const a = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    a && s({ currentTarget: a }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (o) => {
      o.preventDefault(), o.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (l) => {
          l && this.actor.update({ img: l });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (o) => {
      var f;
      o.preventDefault();
      const l = o.currentTarget, u = l.dataset.skill, n = ((f = l.textContent) == null ? void 0 : f.trim()) || u, { openRollSheetForSkill: m } = await import("./roll-sheet-DQbboodB.mjs");
      m(this.actor, u, n);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const r = (o, l) => {
      var m;
      const u = o.dataset.itemId;
      if (!u) return;
      const n = this.actor.items.get(u);
      if (n) {
        if (o.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = o.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = n.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), r(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), r(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const l = o.currentTarget, u = l.dataset.itemId;
      if (!u) return;
      const n = this.actor.items.get(u);
      if (!n) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await n.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const u = o.currentTarget.dataset.itemId;
      if (!u) return;
      const n = this.actor, m = n.items.get(u), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const y = n.system.weapons ?? {}, I = (y.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = I ? I.split(/\s*,\s*/).filter((O) => D.includes(O)) : [], _ = E.find((O) => {
          var w;
          return (((w = y[O]) == null ? void 0 : w.itemId) ?? "").trim() === u;
        });
        if (_) {
          const O = E.filter((w) => w !== _);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${_}.itemId`] = "", f[`system.weapons.${_}.name`] = "", f[`system.weapons.${_}.damage`] = "", f[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var _, O;
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const n = this.actor.items.get(u);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((w) => y.includes(w)) : [], D = I.find((w) => {
        var F;
        return (((F = m[w]) == null ? void 0 : F.itemId) ?? "").trim() === u;
      }) ?? null;
      if (l.checked) {
        if (D) return;
        let w = I.find((P) => {
          var H;
          return !((H = m[P]) != null && H.itemId);
        });
        const F = new Set(I);
        if (!w) {
          const P = y.find((H) => !F.has(H));
          if (!P) return;
          w = P, I.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${w}.itemId`]: u,
          [`system.weapons.${w}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${w}.damage`]: ((_ = n == null ? void 0 : n.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = n == null ? void 0 : n.system) == null ? void 0 : O.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (D) {
        const w = I.filter((F) => F !== D);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${D}.itemId`]: "",
          [`system.weapons.${D}.name`]: "",
          [`system.weapons.${D}.damage`]: "",
          [`system.weapons.${D}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("change", ".karakter-microchip-equipped-checkbox", async (o) => {
      var D, E;
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const n = this.actor.items.get(u);
      if (!n || n.type !== "MikroChip") return;
      const m = ((E = (D = this.actor.system) == null ? void 0 : D.gear) == null ? void 0 : E.microchips) ?? {}, f = ["slot1", "slot2", "slot3"], y = f.find((_) => {
        var O;
        return (((O = m[_]) == null ? void 0 : O.itemId) ?? "").trim() === u;
      });
      if (l.checked) {
        if (y) return;
        const _ = f.find((O) => {
          var w;
          return !(((w = m[O]) == null ? void 0 : w.itemId) ?? "").trim();
        });
        if (!_) return;
        await this.actor.update({
          [`system.gear.microchips.${_}.itemId`]: u,
          [`system.gear.microchips.${_}.name`]: n.name ?? "",
          [`system.gear.microchips.${_}.active`]: !0
        });
      } else {
        if (!y) return;
        await this.actor.update({
          [`system.gear.microchips.${y}.itemId`]: "",
          [`system.gear.microchips.${y}.name`]: "",
          [`system.gear.microchips.${y}.active`]: !1
        });
      }
    }), t.on("click", ".karakter-microchip-delete", async (o) => {
      var y, I;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u || u.type !== "MikroChip") return;
      const n = ((I = (y = this.actor.system) == null ? void 0 : y.gear) == null ? void 0 : I.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((D) => {
        var E;
        return (((E = n[D]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", (o) => {
      const l = o.currentTarget.dataset.slot;
      if (!l) return;
      const u = o.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: u });
    }), t.find(".karakter-microchip-slot").each((o, l) => {
      const u = l.dataset.slot;
      l.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, u)), l.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, u));
    }), t.find(".karakter-ability-slot-single").each((o, l) => {
      const u = l.dataset.slot;
      u && (l.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, u)), l.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, l) => {
      const u = l.dataset.area;
      u && (l.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, u)), l.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var y;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.area, u = o.currentTarget.dataset.itemId;
      if (!l || !u) return;
      const n = this.actor.system.abilities ?? {}, f = (Array.isArray((y = n[l]) == null ? void 0 : y.items) ? n[l].items.slice() : []).filter((I) => I !== u);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const u = o.currentTarget.dataset.itemId;
      if (!u) return;
      const n = this.actor.items.get(u);
      (m = n == null ? void 0 : n.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const u = o.currentTarget.dataset.itemId;
      u && await this._postAbilityToChat(u);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const n = this.actor.items.get(u);
      if (!n || n.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await n.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, y = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${u}"]`);
        y && this._resizeWeaponQuantityInput(y);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const n = this.actor.items.get(u);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var _, O;
      const l = o.currentTarget, u = (l.dataset.itemId ?? "").trim();
      if (!u) return;
      const n = this.actor.items.get(u);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = f ? f.split(/\s*,\s*/).filter((w) => y.includes(w)) : [], D = I.find((w) => {
        var F;
        return (((F = m[w]) == null ? void 0 : F.itemId) ?? "").trim() === u;
      }) ?? null;
      if (l.checked) {
        if (D) return;
        let w = I.find((P) => {
          var H;
          return !((H = m[P]) != null && H.itemId);
        });
        const F = new Set(I);
        if (!w) {
          const P = y.find((H) => !F.has(H));
          if (!P) return;
          w = P, I.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${w}.itemId`]: u,
          [`system.weapons.${w}.name`]: n.name ?? "",
          [`system.weapons.${w}.damage`]: ((_ = n.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = n.system) == null ? void 0 : O.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (D) {
        const w = I.filter((F) => F !== D);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${D}.itemId`]: "",
          [`system.weapons.${D}.name`]: "",
          [`system.weapons.${D}.damage`]: "",
          [`system.weapons.${D}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const u = o.currentTarget.dataset.itemId;
      if (!u) return;
      const n = this.actor, m = n.items.get(u), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const y = n.system.weapons ?? {}, I = (y.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = I ? I.split(/\s*,\s*/).filter((O) => D.includes(O)) : [], _ = E.find((O) => {
          var w;
          return (((w = y[O]) == null ? void 0 : w.itemId) ?? "").trim() === u;
        });
        if (_) {
          const O = E.filter((w) => w !== _);
          f["system.weapons.slotOrder"] = O.join(","), f[`system.weapons.${_}.itemId`] = "", f[`system.weapons.${_}.name`] = "", f[`system.weapons.${_}.damage`] = "", f[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      !u || u.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var u, n;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((n = (u = this.actor.system) == null ? void 0 : u.gear) == null ? void 0 : n.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-item-remove", async (o) => {
      var n, m;
      o.preventDefault();
      const l = parseInt(o.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const u = Array.isArray((m = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      u.splice(l, 1), await this.actor.update({ "system.gear.generalItems": u });
    });
    const d = this, p = (o) => {
      var n, m, f, y;
      if (!o) return;
      const l = d._getFormDataForUpdate(o);
      if (Object.keys(l).length === 0) return;
      const u = ((m = (n = l.system) == null ? void 0 : n.resources) == null ? void 0 : m.currentHealth) != null || ((y = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : y.hitLocations) != null;
      d.actor.update(l).then(() => {
        u && setTimeout(() => d.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, g = (o) => {
      var l, u, n;
      return o && (((u = (l = d.element) == null ? void 0 : l.contains) == null ? void 0 : u.call(l, o)) || d.id && ((n = o.closest) == null ? void 0 : n.call(o, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const u = l.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const n = l.form;
      g(n) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(n));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var d, p, g;
    const e = {};
    for (const b of i.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, a = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const b of r) {
      const v = ((g = s[b]) == null ? void 0 : g.value) ?? 0, o = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, N._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, a, r, d, p, g, b, v, o, l;
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            u = n;
            break;
          }
      }
      if (u) {
        const n = await fromUuid(u);
        if (n && n.documentName === "Item" && (n.type === "Kepesseg" || n.type === "ability")) {
          let m = n.id;
          if (((s = n.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const E = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
            m = ((a = (await this.actor.createEmbeddedDocuments("Item", [E]))[0]) == null ? void 0 : a.id) ?? m;
          }
          const f = (((r = n.system) == null ? void 0 : r.kind) ?? "passive").toString(), y = this.actor.system.abilities ?? {};
          if (f === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": m,
              "system.abilities.faji.name": n.name
            });
            return;
          }
          if (f === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": m,
              "system.abilities.hatter.name": n.name
            });
            return;
          }
          const I = f === "active" ? "active" : "passive", D = Array.isArray((d = y[I]) == null ? void 0 : d.items) ? y[I].items.slice() : Array.isArray(y[I]) ? y[I].slice() : [];
          D.includes(m) || D.push(m), await this.actor.update({ [`system.abilities.${I}.items`]: D });
          return;
        }
      }
    }
    if (e) {
      let u = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!u && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            u = n;
            break;
          }
      }
      if (u) {
        const n = await fromUuid(u);
        if (n && n.documentName === "Item" && n.type === "Fegyver") {
          const m = this.actor, f = ((g = n.parent) == null ? void 0 : g.id) !== m.id;
          let y = n.id;
          if (f) {
            const I = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            y = ((b = (await m.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : b.id) ?? y;
          }
          if (f) {
            const I = ((v = m.system) == null ? void 0 : v.weapons) ?? {}, D = (I.slotOrder ?? "").trim(), E = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = D ? D.split(/\s*,\s*/).filter((w) => E.includes(w)) : [], O = _.filter((w) => {
              var F;
              return (((F = I[w]) == null ? void 0 : F.itemId) ?? "").trim() === y;
            });
            if (O.length > 0) {
              const F = {
                "system.weapons.slotOrder": _.filter((P) => !O.includes(P)).join(",")
              };
              for (const P of O)
                F[`system.weapons.${P}.itemId`] = "", F[`system.weapons.${P}.name`] = "", F[`system.weapons.${P}.damage`] = "", F[`system.weapons.${P}.bonus`] = "";
              await m.update(F);
            }
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "Pancel") {
          const m = this.actor;
          if (((o = n.parent) == null ? void 0 : o.id) !== m.id) {
            const f = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            await m.createEmbeddedDocuments("Item", [f]);
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "MikroChip") {
          const m = this.actor;
          ((l = n.parent) == null ? void 0 : l.id) !== m.id && await m.createEmbeddedDocuments("Item", [n.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var a, r, d;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var d, p, g, b, v, o;
    i.preventDefault(), i.stopPropagation(), (d = i.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = i.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
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
      const l = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const r = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((v = a.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = a.system) == null ? void 0 : o.bonus) ?? ""
    }), await a.update({ "system.equipped": !0 });
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
    var g, b;
    i.preventDefault(), (g = i.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = i.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((v, o) => {
      const l = typeof v.sort == "number" ? v.sort : 0, u = typeof o.sort == "number" ? o.sort : 0;
      return l - u;
    }).map((v) => v.id), r = a.indexOf(t), d = a.indexOf(e);
    if (r === -1 || d === -1) return;
    a.splice(r, 1), a.splice(d, 0, t);
    const p = a.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(i) {
    var s, a, r;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-actions-table-drag-over"));
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
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, a = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = a ? `<p>${a}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: g,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, a;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    var r, d, p;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let a = s.id;
    if (((d = s.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const g = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      a = ((p = (await this.actor.createEmbeddedDocuments("Item", [g]))[0]) == null ? void 0 : p.id) ?? a;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var p, g, b, v;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let a = s.id;
    if (((g = s.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      a = ((b = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : b.id) ?? a;
    }
    const r = this.actor.system.abilities ?? {}, d = Array.isArray((v = r[e]) == null ? void 0 : v.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    d.includes(a) || d.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(i, e) {
    var a, r, d;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var d, p, g, b, v;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = i.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const a = await fromUuid(s.uuid);
    if (!a || a.type !== "MikroChip") return;
    let r = a.id;
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (r = ((v = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : v.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let a = Number(s) || 0;
    const r = this._getSkillHealthStatus(i);
    r === 1 ? a -= 6 : r === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, g = new Roll(p);
    await g.evaluate({ async: !0 });
    const b = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var a;
    const i = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
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
    var y;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, a = this.actor.items.filter((I) => I.type === "Fegyver");
    let r = null;
    t.itemId && (r = a.find((I) => I.id === t.itemId) ?? null);
    const d = r && r.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, b = (((y = r == null ? void 0 : r.system) == null ? void 0 : y.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(s[b] || 0) || 0, o = p + v, u = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, n = new Roll(u);
    await n.evaluate({ async: !0 });
    const m = n.total >= 18 ? "critical" : n.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var p, g, b, v, o, l, u, n, m, f;
    const t = this.actor;
    if (!t) return;
    let s = ((g = (p = t.items).get) == null ? void 0 : g.call(p, i)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (y) => y.id === i));
    if (!s || s.type !== "Fegyver") return;
    let a = (((o = s.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!a && e && (a = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (u = ui.notifications) == null ? void 0 : u.warn) == null || f.call(u, ((m = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : m.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(a);
    await r.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
R(N, "PARTS", foundry.utils.mergeObject(j(N, N, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(N, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(N, N, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Qe = j(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Qe.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Xe = j(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Ve = (Ze = j(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.window) == null ? void 0 : Ve.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
R(N, "BODY_PART_BY_SKILL", {
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
let fe = N;
var et;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, s = (a) => {
      var r, d, p;
      return a && (((d = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : d.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, g;
      const r = ((d = a.target) == null ? void 0 : d.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(r) && t(r);
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
R(B, "PARTS", foundry.utils.mergeObject(j(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((et = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !1 })
}));
let ye = B;
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, s = (a) => {
      var r, d, p;
      return a && (((d = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : d.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, g;
      const r = ((d = a.target) == null ? void 0 : d.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(r) && t(r);
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, s = (a) => {
      var r, d, p;
      return a && (((d = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : d.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, g;
      const r = ((d = a.target) == null ? void 0 : d.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const d = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, s = (a) => {
      var r, d, p;
      return a && (((d = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : d.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, g;
      const r = ((d = a.target) == null ? void 0 : d.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const d = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
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
  var i, e, t, s, a;
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
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", fe, {
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
  const C = 500;
  Hooks.on("updateActor", (r, d, p, g) => {
    var I, D, E, _, O;
    const b = r == null ? void 0 : r.id;
    if (!b) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], u = (I = game.actors) == null ? void 0 : I.get(b);
    u != null && u.apps && l.push(...Array.from(u.apps));
    const n = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of n)
      ((D = w.document) == null ? void 0 : D.id) !== b || ((E = w.document) == null ? void 0 : E.documentName) !== "Actor" || ((_ = w.constructor) == null ? void 0 : _.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (o && l.some((w) => {
      const F = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return F && F.contains(v);
    })) return;
    const f = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, y = f && Date.now() - f.at < C ? f.appId : null;
    setTimeout(() => {
      for (const w of l)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== y && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (C) => {
      var s, a, r, d, p, g;
      if (!((a = (s = C.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
      const i = (d = (r = C.target) == null ? void 0 : r.closest) == null ? void 0 : d.call(r, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (C, i, e) => {
  var r, d;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, s = t ?? C.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = s ? (d = game.actors) == null ? void 0 : d.get(s) : null;
  !a || a.type !== "Karakter" || C.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (C, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || C.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Tt,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (C, i, e) => {
  var a, r, d;
  const t = (r = (a = C.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : r.resultType;
  if (!t) return;
  const s = (d = i == null ? void 0 : i.querySelector) == null ? void 0 : d.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  fe as V
};
//# sourceMappingURL=vacuum-of-the-void-C1a-H-VL.mjs.map
