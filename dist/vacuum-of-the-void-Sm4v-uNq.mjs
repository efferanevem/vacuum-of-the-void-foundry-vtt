var mt = Object.defineProperty;
var pt = Object.getPrototypeOf;
var ft = Reflect.get;
var yt = (N, i, e) => i in N ? mt(N, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[i] = e;
var R = (N, i, e) => yt(N, typeof i != "symbol" ? i + "" : i, e);
var x = (N, i, e) => ft(pt(N), e, i);
const { HTMLField: gt, NumberField: T, SchemaField: _, StringField: g, BooleanField: K, ArrayField: ne } = foundry.data.fields;
class ht extends foundry.abstract.TypeDataModel {
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
        biography: new gt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: me, SchemaField: bt } = foundry.data.fields;
class wt extends ht {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new bt({
        body: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new me({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: kt, NumberField: _t, StringField: te } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new kt({ required: !1, initial: !1 }),
      type: new te({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new te({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new te({ required: !1, blank: !0, initial: "" }),
      damage: new te({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new te({ required: !1, blank: !0, initial: "" }),
      special: new te({ required: !1, blank: !0, initial: "" }),
      quantity: new te({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: It, StringField: oe } = foundry.data.fields;
class St extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new It({ required: !1, initial: !1 }),
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
class qt extends foundry.abstract.TypeDataModel {
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
const { NumberField: Tt, StringField: Ye } = foundry.data.fields;
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
      kp: new Tt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Qe } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Qe({ required: !1, blank: !0, initial: "" }),
      quantity: new Qe({ required: !1, blank: !0, initial: "1" })
    };
  }
}
var Xe, Ze, Ve, et;
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
    var s, a, o, d;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, "form.votv")) ?? null, t = ((o = i.querySelector) == null ? void 0 : o.call(i, ".votv-scroll")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, ".window-content")) ?? null;
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
    const a = this.element, o = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (a) {
      d.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = o.contains(m), h = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
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
    const y = this.element, b = this.form ?? this.element, k = d.scrollState, n = d.focus, c = typeof (k == null ? void 0 : k.formScrollTop) == "number" || typeof (k == null ? void 0 : k.windowScrollTop) == "number", l = () => {
      var m, f;
      if (this._applyScrollState(y, k), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const h = ((m = b.querySelector) == null ? void 0 : m.call(b, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(n.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = n.selectionStart ?? 0, h.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(y, k);
    };
    return (c || n) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const a = Math.floor(s / 3), o = Math.floor(2 * s / 3);
    return t <= a ? 1 : t <= o ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, a;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (o) => {
        var d;
        return o.type === "Pancel" && ((d = o.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of i) {
      const d = String(((a = o.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, a;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (o) => {
        var d;
        return o.type === "Pancel" && ((d = o.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of i) {
      const d = String(((a = o.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var k, n, c, l, r, m, f, h, v;
    const e = i ?? this.form ?? this.element;
    let t = (k = e == null ? void 0 : e.querySelector) == null ? void 0 : k.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((c = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : c.resources) ?? {}, a = ((r = (l = s.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : r.value) ?? 0, o = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, d = E._healthStatusFromRatio(o, a), p = Number(((v = (h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let y;
    d === 0 ? y = 0 : d === 1 ? y = -6 : d === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var o, d, p, y;
    const e = i ?? this.form ?? this.element;
    let t = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = (Number(((y = (p = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var o, d, p, y;
    const e = E.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, s = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, a = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return E._healthStatusFromRatio(a, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var d, p, y, b;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((d = i == null ? void 0 : i.system) == null ? void 0 : d.resources) ?? {}, a = ((y = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, o = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return E._healthStatusFromRatio(o, a);
  }
  async _prepareContext(i) {
    var _e, Le, Ae, Fe, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Be, He, Ue, Ge;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (Le = (_e = this.actor.system) == null ? void 0 : _e.resources) == null ? void 0 : Le.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, a = s.hitLocations ?? {}, o = s.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of d) {
      const I = ((Fe = a[u]) == null ? void 0 : Fe.value) ?? 0, S = o[u] ?? 0;
      e.computedHealthStatus[u] = E._healthStatusFromRatio(S, I);
    }
    const p = (Number(o.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((u) => (Number(o[u]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const k = e.computedHealthStatus.legs ?? 3, n = Number(((Ne = (Ce = this.actor.system) == null ? void 0 : Ce.combat) == null ? void 0 : Ne.givenSpeed) ?? 0) || 0;
    let c;
    k === 0 ? c = 0 : k === 1 ? c = -6 : k === 2 ? c = -3 : c = n;
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
    const h = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (h.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((u) => v.includes(u)) : [], L = ($e = this.actor.system.gear) == null ? void 0 : $e.microchips, D = L && typeof L == "object" && !Array.isArray(L) ? L : {}, w = (((xe = D.slot1) == null ? void 0 : xe.itemId) ?? "").trim(), C = (((je = D.slot2) == null ? void 0 : je.itemId) ?? "").trim(), P = (((Me = D.slot3) == null ? void 0 : Me.itemId) ?? "").trim(), at = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, I) => {
      const S = typeof u.sort == "number" ? u.sort : 0, q = typeof I.sort == "number" ? I.sort : 0;
      return S - q;
    }).map((u) => {
      var J, Z, V, Q, X, re;
      const I = u.type === "Fegyver", S = u.type === "MikroChip";
      let q = 0, A = "", j = null;
      for (let ee = 0; ee < F.length; ee++) {
        const ie = F[ee];
        if ((((J = h[ie]) == null ? void 0 : J.itemId) ?? "") === u.id) {
          q = ee + 1, A = ((Z = h[ie]) == null ? void 0 : Z.bonus) ?? "", j = ie;
          break;
        }
      }
      let M = null;
      S && (w === u.id ? M = "slot1" : C === u.id ? M = "slot2" : P === u.id && (M = "slot3"));
      const se = I && ((V = u.system) != null && V.damage) ? u.system.damage : "", W = I && typeof ((Q = u.system) == null ? void 0 : Q.range) == "string" ? (u.system.range || "").trim() : "", Y = j ? Number((X = h[j]) == null ? void 0 : X.bonus) || 0 : "";
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        type: u.type,
        isWeapon: I,
        slotAssignment: q,
        slotBonus: A,
        slotKey: j,
        microchipSlotKey: M,
        isEquipped: !!(j || M),
        damage: se,
        rangeStr: W,
        slotBonusNum: Y,
        quantity: Number(((re = u.system) == null ? void 0 : re.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = at;
    const le = (((Ke = this.actor.items) == null ? void 0 : Ke.contents) ?? []).filter((u) => u.type === "Fegyver"), we = le.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = we;
    const ke = "— Nincs fegyver —", nt = F.filter((u) => {
      const S = ((h[u] ?? {}).itemId ?? "").trim();
      return S ? !!le.find((A) => A.id === S) : !1;
    });
    e.weaponSlots = nt.map((u, I) => {
      const S = h[u] ?? {}, q = (S.itemId ?? "").trim(), A = we.find((j) => j.id === q);
      return {
        slotKey: u,
        itemId: q,
        slotNum: I + 1,
        displayName: (A == null ? void 0 : A.name) || S.name || ke,
        img: (A == null ? void 0 : A.img) || "",
        bonus: Number(S.bonus) || 0,
        damage: S.damage ?? ""
      };
    });
    const ot = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, lt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = le.map((u) => {
      var ee, ie, ze;
      const I = u.id;
      let S = null, q = {};
      for (const de of F)
        if ((((ee = h[de]) == null ? void 0 : ee.itemId) ?? "").trim() === I) {
          S = de, q = h[de] ?? {};
          break;
        }
      const A = !!S, j = ((ie = u.system) == null ? void 0 : ie.equipped) !== void 0 && ((ze = u.system) == null ? void 0 : ze.equipped) !== null ? !!u.system.equipped : A, M = (u == null ? void 0 : u.system) ?? {}, se = typeof M.range == "string" ? (M.range || "").trim() : "", W = M.type ?? "", Y = (ot[W] ?? W) || "—", J = M.size ?? "", Z = (lt[J] ?? J) || "", V = [Y, Z].filter(Boolean).join(", ") || Y || "—", Q = Y === "Lövedékes", X = M.quantity, re = X != null ? String(X).trim() : "1";
      return {
        slotKey: S ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? ke,
        img: (u == null ? void 0 : u.img) ?? "",
        bonus: String(q.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: q.damage ?? M.damage ?? "",
        rangeStr: se || "—",
        typeLabel: Y,
        typeAndSize: V,
        quantity: re,
        quantityDisplay: Q ? re : "—",
        isProjectile: Q,
        equipped: j,
        special: (M.special ?? "").trim() || "—"
      };
    });
    const ct = (((Re = this.actor.items) == null ? void 0 : Re.contents) ?? []).filter((u) => u.type === "Pancel");
    e.armorTable = ct.map((u) => {
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
    const ce = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((u) => u.type === "MikroChip"), ae = ce.map((u) => ({ id: u.id, name: u.name, img: u.img })), ve = "— Nincs Mikro-Chip —", Ie = ["slot1", "slot2", "slot3"], ue = (u) => {
      var S, q, A;
      const I = [];
      return u !== 1 && I.push((((S = D.slot1) == null ? void 0 : S.itemId) ?? "").trim()), u !== 2 && I.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), u !== 3 && I.push((((A = D.slot3) == null ? void 0 : A.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((u) => !ue(1).includes(u.id)), e.microchipItemsSlot2 = ae.filter((u) => !ue(2).includes(u.id)), e.microchipItemsSlot3 = ae.filter((u) => !ue(3).includes(u.id)), e.microchipSlots = Ie.map((u) => {
      const I = D[u] ?? {}, S = (I.itemId ?? "").trim(), q = ce.find((A) => A.id === S);
      return {
        slotKey: u,
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || I.name || ve,
        img: (q == null ? void 0 : q.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((u) => {
      const I = `slot${u}`, S = D[I] ?? {}, q = (S.itemId ?? "").trim(), A = ae.find((j) => j.id === q);
      e[`microchip${u}ItemId`] = q, e[`microchip${u}DisplayName`] = (A == null ? void 0 : A.name) || S.name || ve, e[`microchip${u}Img`] = (A == null ? void 0 : A.img) || "";
    }), e.microchipsTable = ce.map((u) => {
      var J, Z, V, Q;
      const I = u.id;
      let S = null;
      for (const X of Ie)
        if ((((J = D[X]) == null ? void 0 : J.itemId) ?? "").trim() === I) {
          S = X;
          break;
        }
      const q = !!S, A = ((Z = u == null ? void 0 : u.system) == null ? void 0 : Z.abilityType) ?? "", j = A === "active" ? "Aktív" : A === "passive" ? "Passzív" : A || "—", M = A === "active", se = Number((V = u == null ? void 0 : u.system) == null ? void 0 : V.replaceCost) >= 0 ? Number(u.system.replaceCost) : 0, W = (((Q = u == null ? void 0 : u.system) == null ? void 0 : Q.description) ?? "").trim(), Y = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        typeLabel: j,
        description: Y,
        kp: se,
        isActive: M,
        slotKey: S ?? "",
        equipped: q
      };
    });
    const Se = this.actor.system.abilities ?? {}, ut = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).map((u) => {
      var I, S, q;
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        kind: ((I = u.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((S = u.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((q = u.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), qe = new Map(ut.map((u) => [u.id, u])), dt = "— Nincs képesség —", Te = (u) => {
      const I = Se[u] ?? {}, S = (I.itemId ?? "").trim(), q = S ? qe.get(S) : null, A = (q == null ? void 0 : q.description) ?? "", j = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || I.name || dt,
        img: (q == null ? void 0 : q.img) || "",
        description: A,
        kp: j
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
    var b, k;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const l = (n.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-BAmYTHU1.mjs");
      r(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var r, m, f;
      n.preventDefault(), n.stopPropagation();
      const c = n.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const h = (c.dataset.slot ?? "").trim();
        if (!h) return;
        l = (((((m = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : m.weapons) ?? {})[h] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((f = c.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (n) => {
      var r;
      const c = n ? n.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const a = (k = e.querySelector) == null ? void 0 : k.call(e, 'input[name="system.resources.stress.value"]');
    a && s({ currentTarget: a }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (n) => {
      n.preventDefault(), n.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var f;
      n.preventDefault();
      const c = n.currentTarget, l = c.dataset.skill, r = ((f = c.textContent) == null ? void 0 : f.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-BAmYTHU1.mjs");
      m(this.actor, l, r);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const o = (n, c) => {
      var m;
      const l = n.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      if (r) {
        if (n.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const f = n.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = r.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), o(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), o(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const c = n.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r) return;
      let m = Number(c.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await r.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor, m = r.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = r.system.weapons ?? {}, v = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = v ? v.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], L = F.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === l;
        });
        if (L) {
          const D = F.filter((w) => w !== L);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await r.update(f), await r.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var L, D;
      const c = n.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = v.find((w) => {
        var C;
        return (((C = m[w]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let w = v.find((P) => {
          var B;
          return !((B = m[P]) != null && B.itemId);
        });
        const C = new Set(v);
        if (!w) {
          const P = h.find((B) => !C.has(B));
          if (!P) return;
          w = P, v.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: l,
          [`system.weapons.${w}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${w}.damage`]: ((L = r == null ? void 0 : r.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = r == null ? void 0 : r.system) == null ? void 0 : D.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (O) {
        const w = v.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const c = n.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), r = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var w;
      n.preventDefault();
      const c = n.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), r = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = r == null ? void 0 : r.dataset.slot;
      if (!m) return;
      const f = (c.dataset.itemId ?? "").trim(), h = (c.dataset.itemName ?? ((w = c.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (c.dataset.itemImg ?? "").trim(), O = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = h);
      let F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      v ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", r == null || r.insertBefore(F, O)), F.src = v, F.style.display = "") : F && F.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const L = f ? this.actor.items.get(f) : null, D = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      f && (D[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var h, v;
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const r = ((v = (h = this.actor.system) == null ? void 0 : h.gear) == null ? void 0 : v.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var F;
        return (((F = r[O]) == null ? void 0 : F.itemId) ?? "").trim() === c;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const c = n.currentTarget.dataset.slot;
      if (!c) return;
      const l = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, c) => {
      const l = c.dataset.slot;
      c.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, l));
    }), t.find(".karakter-ability-slot-single").each((n, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, l)), c.addEventListener("dragleave", (r) => {
        var m;
        return (m = r.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (r) => {
        var m;
        (m = r.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var h;
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.area, l = n.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const r = this.actor.system.abilities ?? {}, f = (Array.isArray((h = r[c]) == null ? void 0 : h.items) ? r[c].items.slice() : []).filter((v) => v !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var m;
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      (m = r == null ? void 0 : r.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const c = n.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const m = (c.value ?? "").trim();
      await r.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, h = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        h && this._resizeWeaponQuantityInput(h);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const c = n.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var L, D;
      const c = n.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const r = this.actor.items.get(l);
      if (!r || r.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = v.find((w) => {
        var C;
        return (((C = m[w]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let w = v.find((P) => {
          var B;
          return !((B = m[P]) != null && B.itemId);
        });
        const C = new Set(v);
        if (!w) {
          const P = h.find((B) => !C.has(B));
          if (!P) return;
          w = P, v.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: l,
          [`system.weapons.${w}.name`]: r.name ?? "",
          [`system.weapons.${w}.damage`]: ((L = r.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = r.system) == null ? void 0 : D.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (O) {
        const w = v.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor, m = r.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = r.system.weapons ?? {}, v = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = v ? v.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], L = F.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === l;
        });
        if (L) {
          const D = F.filter((w) => w !== L);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await r.update(f), await r.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-equipment-add-row", async (n) => {
      var l, r;
      if (n.preventDefault(), n.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((r = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : r.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-item-remove", async (n) => {
      var r, m;
      n.preventDefault();
      const c = parseInt(n.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(c) || c < 0) return;
      const l = Array.isArray((m = (r = this.actor.system) == null ? void 0 : r.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(c, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const d = this, p = (n) => {
      var r, m, f, h;
      if (!n) return;
      const c = d._getFormDataForUpdate(n);
      if (Object.keys(c).length === 0) return;
      const l = ((m = (r = c.system) == null ? void 0 : r.resources) == null ? void 0 : m.currentHealth) != null || ((h = (f = c.system) == null ? void 0 : f.resources) == null ? void 0 : h.hitLocations) != null;
      d.actor.update(c).then(() => {
        l && setTimeout(() => d.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, y = (n) => {
      var c, l, r;
      return n && (((l = (c = d.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, n)) || d.id && ((r = n.closest) == null ? void 0 : r.call(n, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (n) => {
      const c = n.target;
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
      let k;
      b.type === "checkbox" ? k = b.checked : b.type === "number" ? k = b.value === "" ? 0 : Number(b.value) : k = b.value ?? "", foundry.utils.setProperty(e, b.name, k);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, a = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const b of o) {
      const k = ((y = s[b]) == null ? void 0 : y.value) ?? 0, n = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, E._healthStatusFromRatio(n, k));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, a, o, d, p, y, b, k, n, c;
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
            m = ((a = (await this.actor.createEmbeddedDocuments("Item", [F]))[0]) == null ? void 0 : a.id) ?? m;
          }
          const f = (((o = r.system) == null ? void 0 : o.kind) ?? "passive").toString(), h = this.actor.system.abilities ?? {};
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
          const v = f === "active" ? "active" : "passive", O = Array.isArray((d = h[v]) == null ? void 0 : d.items) ? h[v].items.slice() : Array.isArray(h[v]) ? h[v].slice() : [];
          O.includes(m) || O.push(m), await this.actor.update({ [`system.abilities.${v}.items`]: O });
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
            const v = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            h = ((b = (await m.createEmbeddedDocuments("Item", [v]))[0]) == null ? void 0 : b.id) ?? h;
          }
          if (f) {
            const v = ((k = m.system) == null ? void 0 : k.weapons) ?? {}, O = (v.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = O ? O.split(/\s*,\s*/).filter((w) => F.includes(w)) : [], D = L.filter((w) => {
              var C;
              return (((C = v[w]) == null ? void 0 : C.itemId) ?? "").trim() === h;
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
          if (((n = r.parent) == null ? void 0 : n.id) !== m.id) {
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
    var a, o, d;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var d, p, y, b, k, n;
    i.preventDefault(), i.stopPropagation(), (d = i.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
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
      const c = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [c]);
      return;
    }
    const o = a.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: a.name,
      [`system.weapons.${e}.damage`]: ((k = a.system) == null ? void 0 : k.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = a.system) == null ? void 0 : n.bonus) ?? ""
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
    var y, b;
    i.preventDefault(), (y = i.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = i.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((k, n) => {
      const c = typeof k.sort == "number" ? k.sort : 0, l = typeof n.sort == "number" ? n.sort : 0;
      return c - l;
    }).map((k) => k.id), o = a.indexOf(t), d = a.indexOf(e);
    if (o === -1 || d === -1) return;
    a.splice(o, 1), a.splice(d, 0, t);
    const p = a.map((k, n) => ({
      _id: k,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(i) {
    var s, a, o;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-actions-table-drag-over"));
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
    var b, k, n;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((k = e.system) == null ? void 0 : k.kp) ?? 0) || 0, a = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = a ? `<p>${a}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
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
    var o, d, p;
    i.preventDefault(), (o = i.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let a = s.id;
    if (((d = s.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const y = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      a = ((p = (await this.actor.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : p.id) ?? a;
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
    var p, y, b, k;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let a = s.id;
    if (((y = s.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      a = ((b = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : b.id) ?? a;
    }
    const o = this.actor.system.abilities ?? {}, d = Array.isArray((k = o[e]) == null ? void 0 : k.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    d.includes(a) || d.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(i, e) {
    var a, o, d;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((o = i.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (d = i.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var d, p, y, b, k;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = i.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const a = await fromUuid(s.uuid);
    if (!a || a.type !== "MikroChip") return;
    let o = a.id;
    ((b = a.parent) == null ? void 0 : b.id) !== this.actor.id && (o = ((k = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : k.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let a = Number(s) || 0;
    const o = this._getSkillHealthStatus(i);
    o === 1 ? a -= 6 : o === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, y = new Roll(p);
    await y.evaluate({ async: !0 });
    const b = y.total >= 18 ? "critical" : y.total <= 3 ? "fumble" : null, k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: b } },
      rollMode: k
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
    var h;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, a = this.actor.items.filter((v) => v.type === "Fegyver");
    let o = null;
    t.itemId && (o = a.find((v) => v.id === t.itemId) ?? null);
    const d = o && o.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, b = (((h = o == null ? void 0 : o.system) == null ? void 0 : h.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", k = Number(s[b] || 0) || 0, n = p + k, l = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, r = new Roll(l);
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
    var p, y, b, k, n, c, l, r, m, f;
    const t = this.actor;
    if (!t) return;
    let s = ((y = (p = t.items).get) == null ? void 0 : y.call(p, i)) ?? ((k = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : k.call(b, (h) => h.id === i));
    if (!s || s.type !== "Fegyver") return;
    let a = (((n = s.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!a && e && (a = (((((c = t.system) == null ? void 0 : c.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((m = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : m.call(r, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(a);
    await o.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
R(E, "PARTS", foundry.utils.mergeObject(x(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Xe = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ze = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((et = (Ve = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.window) == null ? void 0 : et.contentClasses) ?? [],
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
var tt;
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
    const e = this, t = (a) => {
      if (!a) return;
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, s = (a) => {
      var o, d, p;
      return a && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, y;
      const o = ((d = a.target) == null ? void 0 : d.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(o) && t(o);
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
R(H, "PARTS", foundry.utils.mergeObject(x(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((tt = x(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !1 })
}));
let ye = H;
var it;
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, s = (a) => {
      var o, d, p;
      return a && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, y;
      const o = ((d = a.target) == null ? void 0 : d.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(o) && t(o);
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
R(U, "PARTS", foundry.utils.mergeObject(x(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((it = x(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : it.form) ?? {}, { submitOnChange: !1 })
}));
let ge = U;
var st;
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, s = (a) => {
      var o, d, p;
      return a && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, y;
      const o = ((d = a.target) == null ? void 0 : d.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(o) && t(o);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
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
R(G, "PARTS", foundry.utils.mergeObject(x(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((st = x(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : st.form) ?? {}, { submitOnChange: !1 })
}));
let he = G;
var rt;
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
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, s = (a) => {
      var o, d, p;
      return a && (((d = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : d.call(o, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var d, p, y;
      const o = ((d = a.target) == null ? void 0 : d.form) ?? ((y = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      s(o) && t(o);
    }, e._votvInput = (a) => {
      var p;
      const o = a.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const d = (o == null ? void 0 : o.form) ?? ((p = o == null ? void 0 : o.closest) == null ? void 0 : p.call(o, "form"));
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
R(z, "PARTS", foundry.utils.mergeObject(x(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((rt = x(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : rt.form) ?? {}, { submitOnChange: !0 })
}));
let be = z;
const Ot = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = wt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vt, CONFIG.Item.dataModels.Pancel = St, CONFIG.Item.dataModels.MikroChip = qt, CONFIG.Item.dataModels.Kepesseg = Je, CONFIG.Item.dataModels.ability = Je, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const N = 500;
  Hooks.on("updateActor", (o, d, p, y) => {
    var v, O, F, L, D;
    const b = o == null ? void 0 : o.id;
    if (!b) return;
    const k = document.activeElement, n = k && (k.tagName === "INPUT" && k.type !== "checkbox" && k.type !== "radio" || k.tagName === "TEXTAREA" || k.isContentEditable), c = [], l = (v = game.actors) == null ? void 0 : v.get(b);
    l != null && l.apps && c.push(...Array.from(l.apps));
    const r = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of r)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((F = w.document) == null ? void 0 : F.documentName) !== "Actor" || ((L = w.constructor) == null ? void 0 : L.name) !== "VoidKarakterSheet" || c.includes(w) || c.push(w);
    if (n && c.some((w) => {
      const C = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return C && C.contains(k);
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
      var s, a, o, d, p, y;
      if (!((a = (s = N.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
      const i = (d = (o = N.target) == null ? void 0 : o.closest) == null ? void 0 : d.call(o, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, i, e) => {
  var o, d;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, s = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = s ? (d = game.actors) == null ? void 0 : d.get(s) : null;
  !a || a.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": Ot,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, i, e) => {
  var a, o, d;
  const t = (o = (a = N.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : o.resultType;
  if (!t) return;
  const s = (d = i == null ? void 0 : i.querySelector) == null ? void 0 : d.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  fe as V
};
//# sourceMappingURL=vacuum-of-the-void-Sm4v-uNq.mjs.map
