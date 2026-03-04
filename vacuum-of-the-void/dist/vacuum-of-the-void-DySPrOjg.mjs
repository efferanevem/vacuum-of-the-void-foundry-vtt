var yt = Object.defineProperty;
var gt = Object.getPrototypeOf;
var ht = Reflect.get;
var bt = (N, s, e) => s in N ? yt(N, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : N[s] = e;
var R = (N, s, e) => bt(N, typeof s != "symbol" ? s + "" : s, e);
var P = (N, s, e) => ht(gt(N), e, s);
const { HTMLField: wt, NumberField: T, SchemaField: _, StringField: g, BooleanField: K, ArrayField: oe } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
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
        armor: new oe(
          new _({
            name: new g({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new g({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new g({ required: !1, blank: !0, initial: "" }),
            level: new g({ required: !1, blank: !0, initial: "" }),
            other: new g({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new oe(
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
          items: new oe(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new oe(
            new g({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new _({
        biography: new wt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: pe, SchemaField: kt } = foundry.data.fields;
class It extends vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new kt({
        body: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new pe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: St, NumberField: Ct, StringField: se } = foundry.data.fields;
class qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new St({ required: !1, initial: !1 }),
      type: new se({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new se({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new se({ required: !1, blank: !0, initial: "" }),
      damage: new se({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new se({ required: !1, blank: !0, initial: "" }),
      special: new se({ required: !1, blank: !0, initial: "" }),
      quantity: new se({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Tt, StringField: le } = foundry.data.fields;
class Ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Tt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new le({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new le({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new le({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new le({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: fe, StringField: Ye } = foundry.data.fields;
class Dt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ye({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ye({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new fe({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new fe({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new fe({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: _t, StringField: Je } = foundry.data.fields;
class Qe extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Je({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Je({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new _t({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Xe } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Xe({ required: !1, blank: !0, initial: "" }),
      quantity: new Xe({ required: !1, blank: !0, initial: "1" })
    };
  }
}
var Ve, et, tt, st;
const E = class E extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var i, r, n, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    var a;
    const t = (a = game.votv) == null ? void 0 : a._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const r = this.element, n = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (r) {
      d.scrollState = this._saveScrollState(r);
      const m = document.activeElement, f = n.contains(m), h = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && h && (d.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
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
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const r = Math.floor(i / 3), n = Math.floor(2 * i / 3);
    return t <= r ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, r;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (n) => {
        var d;
        return n.type === "Pancel" && ((d = n.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const d = String(((r = n.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, r;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (n) => {
        var d;
        return n.type === "Pancel" && ((d = n.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const d = String(((r = n.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), p = Number(d);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, o, c, l, a, m, f, h, k;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((c = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : c.resources) ?? {}, r = ((a = (l = i.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : a.value) ?? 0, n = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, d = E._healthStatusFromRatio(n, r), p = Number(((k = (h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let y;
    d === 0 ? y = 0 : d === 1 ? y = -6 : d === 2 ? y = -3 : y = p;
    const b = this._getTotalArmorSpeedPenalty();
    y += b, t.textContent = String(y);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, d, p, y;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((y = (p = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, d, p, y;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, i = ((p = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : p.value) ?? 0, r = ((y = t.currentHealth) == null ? void 0 : y[e]) ?? 0;
    return E._healthStatusFromRatio(r, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, p, y, b;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, r = ((y = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : y.value) ?? 0, n = ((b = i.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return E._healthStatusFromRatio(n, r);
  }
  async _prepareContext(s) {
    var Le, Ae, Fe, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, Ue, He, Be, Ge, ze;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Fe = (Ae = (Le = this.actor.system) == null ? void 0 : Le.resources) == null ? void 0 : Ae.stress) == null ? void 0 : Fe.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, r = i.hitLocations ?? {}, n = i.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of d) {
      const I = ((Ce = r[u]) == null ? void 0 : Ce.value) ?? 0, S = n[u] ?? 0;
      e.computedHealthStatus[u] = E._healthStatusFromRatio(S, I);
    }
    const p = (Number(n.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((u) => (Number(n[u]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ee = (Ne = this.actor.system) == null ? void 0 : Ne.combat) == null ? void 0 : Ee.givenSpeed) ?? 0) || 0;
    let c;
    v === 0 ? c = 0 : v === 1 ? c = -6 : v === 2 ? c = -3 : c = o;
    const l = this._getTotalArmorSpeedPenalty();
    c += l, e.effectiveGivenSpeed = c;
    const m = (Number((($e = (Pe = this.actor.system) == null ? void 0 : Pe.combat) == null ? void 0 : $e.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
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
    const h = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (h.slotOrder ?? "").trim(), F = O ? O.split(/\s*,\s*/).filter((u) => k.includes(u)) : [], L = (xe = this.actor.system.gear) == null ? void 0 : xe.microchips, D = L && typeof L == "object" && !Array.isArray(L) ? L : {}, w = (((je = D.slot1) == null ? void 0 : je.itemId) ?? "").trim(), C = (((Me = D.slot2) == null ? void 0 : Me.itemId) ?? "").trim(), x = (((Ke = D.slot3) == null ? void 0 : Ke.itemId) ?? "").trim(), lt = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, I) => {
      const S = typeof u.sort == "number" ? u.sort : 0, q = typeof I.sort == "number" ? I.sort : 0;
      return S - q;
    }).map((u) => {
      var Q, V, ee, X, Z, ae;
      const I = u.type === "Fegyver", S = u.type === "MikroChip";
      let q = 0, A = "", j = null;
      for (let te = 0; te < F.length; te++) {
        const ie = F[te];
        if ((((Q = h[ie]) == null ? void 0 : Q.itemId) ?? "") === u.id) {
          q = te + 1, A = ((V = h[ie]) == null ? void 0 : V.bonus) ?? "", j = ie;
          break;
        }
      }
      let M = null;
      S && (w === u.id ? M = "slot1" : C === u.id ? M = "slot2" : x === u.id && (M = "slot3"));
      const re = I && ((ee = u.system) != null && ee.damage) ? u.system.damage : "", Y = I && typeof ((X = u.system) == null ? void 0 : X.range) == "string" ? (u.system.range || "").trim() : "", J = j ? Number((Z = h[j]) == null ? void 0 : Z.bonus) || 0 : "";
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
        damage: re,
        rangeStr: Y,
        slotBonusNum: J,
        quantity: Number(((ae = u.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = lt;
    const ce = (((Re = this.actor.items) == null ? void 0 : Re.contents) ?? []).filter((u) => u.type === "Fegyver"), ve = ce.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = ve;
    const ke = "— Nincs fegyver —", ct = F.filter((u) => {
      const S = ((h[u] ?? {}).itemId ?? "").trim();
      return S ? !!ce.find((A) => A.id === S) : !1;
    });
    e.weaponSlots = ct.map((u, I) => {
      const S = h[u] ?? {}, q = (S.itemId ?? "").trim(), A = ve.find((j) => j.id === q);
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
    const ut = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, dt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ce.map((u) => {
      var te, ie, We;
      const I = u.id;
      let S = null, q = {};
      for (const me of F)
        if ((((te = h[me]) == null ? void 0 : te.itemId) ?? "").trim() === I) {
          S = me, q = h[me] ?? {};
          break;
        }
      const A = !!S, j = ((ie = u.system) == null ? void 0 : ie.equipped) !== void 0 && ((We = u.system) == null ? void 0 : We.equipped) !== null ? !!u.system.equipped : A, M = (u == null ? void 0 : u.system) ?? {}, re = typeof M.range == "string" ? (M.range || "").trim() : "", Y = M.type ?? "", J = (ut[Y] ?? Y) || "—", Q = M.size ?? "", V = (dt[Q] ?? Q) || "", ee = [J, V].filter(Boolean).join(", ") || J || "—", X = J === "Lövedékes", Z = M.quantity, ae = Z != null ? String(Z).trim() : "1";
      return {
        slotKey: S ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? ke,
        img: (u == null ? void 0 : u.img) ?? "",
        bonus: String(q.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: q.damage ?? M.damage ?? "",
        rangeStr: re || "—",
        typeLabel: J,
        typeAndSize: ee,
        quantity: ae,
        quantityDisplay: X ? ae : "—",
        isProjectile: X,
        equipped: j,
        special: (M.special ?? "").trim() || "—"
      };
    });
    const mt = (((Ue = this.actor.items) == null ? void 0 : Ue.contents) ?? []).filter((u) => u.type === "Pancel");
    e.armorTable = mt.map((u) => {
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
    }), e.generalItems = Array.isArray((Be = (He = this.actor.system) == null ? void 0 : He.gear) == null ? void 0 : Be.generalItems) ? this.actor.system.gear.generalItems : [];
    const ue = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((u) => u.type === "MikroChip"), ne = ue.map((u) => ({ id: u.id, name: u.name, img: u.img })), Ie = "— Nincs Mikro-Chip —", Se = ["slot1", "slot2", "slot3"], de = (u) => {
      var S, q, A;
      const I = [];
      return u !== 1 && I.push((((S = D.slot1) == null ? void 0 : S.itemId) ?? "").trim()), u !== 2 && I.push((((q = D.slot2) == null ? void 0 : q.itemId) ?? "").trim()), u !== 3 && I.push((((A = D.slot3) == null ? void 0 : A.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = ne.filter((u) => !de(1).includes(u.id)), e.microchipItemsSlot2 = ne.filter((u) => !de(2).includes(u.id)), e.microchipItemsSlot3 = ne.filter((u) => !de(3).includes(u.id)), e.microchipSlots = Se.map((u) => {
      const I = D[u] ?? {}, S = (I.itemId ?? "").trim(), q = ue.find((A) => A.id === S);
      return {
        slotKey: u,
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || I.name || Ie,
        img: (q == null ? void 0 : q.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((u) => {
      const I = `slot${u}`, S = D[I] ?? {}, q = (S.itemId ?? "").trim(), A = ne.find((j) => j.id === q);
      e[`microchip${u}ItemId`] = q, e[`microchip${u}DisplayName`] = (A == null ? void 0 : A.name) || S.name || Ie, e[`microchip${u}Img`] = (A == null ? void 0 : A.img) || "";
    }), e.microchipsTable = ue.map((u) => {
      var Q, V, ee, X;
      const I = u.id;
      let S = null;
      for (const Z of Se)
        if ((((Q = D[Z]) == null ? void 0 : Q.itemId) ?? "").trim() === I) {
          S = Z;
          break;
        }
      const q = !!S, A = ((V = u == null ? void 0 : u.system) == null ? void 0 : V.abilityType) ?? "", j = A === "active" ? "Aktív" : A === "passive" ? "Passzív" : A || "—", M = A === "active", re = Number((ee = u == null ? void 0 : u.system) == null ? void 0 : ee.replaceCost) >= 0 ? Number(u.system.replaceCost) : 0, Y = (((X = u == null ? void 0 : u.system) == null ? void 0 : X.description) ?? "").trim(), J = Y ? Y.length > 60 ? Y.slice(0, 57) + "…" : Y : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        typeLabel: j,
        description: J,
        kp: re,
        isActive: M,
        slotKey: S ?? "",
        equipped: q
      };
    });
    const qe = this.actor.system.abilities ?? {}, pt = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).map((u) => {
      var I, S, q;
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        kind: ((I = u.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((S = u.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((q = u.system) == null ? void 0 : q.kp) ?? 0) || 0
      };
    }), Te = new Map(pt.map((u) => [u.id, u])), ft = "— Nincs képesség —", Oe = (u) => {
      const I = qe[u] ?? {}, S = (I.itemId ?? "").trim(), q = S ? Te.get(S) : null, A = (q == null ? void 0 : q.description) ?? "", j = (q == null ? void 0 : q.kp) ?? 0;
      return {
        itemId: S,
        displayName: (q == null ? void 0 : q.name) || I.name || ft,
        img: (q == null ? void 0 : q.img) || "",
        description: A,
        kp: j
      };
    };
    e.abilityFajiSlot = Oe("faji"), e.abilityHatterSlot = Oe("hatter");
    const De = (u) => {
      const I = qe[u];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, _e = (u) => u.map((I) => {
      const S = Te.get(I);
      return S ? {
        id: S.id,
        name: S.name,
        img: S.img,
        description: S.description,
        kp: S.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = _e(De("passive")), e.abilityActiveList = _e(De("active")), e;
  }
  _attachFrameListeners(s) {
    var b, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((b = s == null ? void 0 : s.querySelector) == null ? void 0 : b.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const l = (o.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-C1wWCrmC.mjs");
      a(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var a, m, f;
      o.preventDefault(), o.stopPropagation();
      const c = o.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const h = (c.dataset.slot ?? "").trim();
        if (!h) return;
        l = (((((m = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : m.weapons) ?? {})[h] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((f = c.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (o) => {
      var a;
      const c = o ? o.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const r = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    r && i({ currentTarget: r }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
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
      const c = o.currentTarget, l = c.dataset.skill, a = ((f = c.textContent) == null ? void 0 : f.trim()) || l, { openRollSheetForSkill: m } = await import("./roll-sheet-C1wWCrmC.mjs");
      m(this.actor, l, a);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const n = (o, c) => {
      var m;
      const l = o.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      if (a) {
        if (o.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const f = o.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = a.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), n(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), n(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const c = o.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      if (!a) return;
      let m = Number(c.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await a.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor, m = a.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = a.system.weapons ?? {}, k = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], L = F.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === l;
        });
        if (L) {
          const D = F.filter((w) => w !== L);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await a.update(f), await a.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var L, D;
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const a = this.actor.items.get(l);
      if (!a || a.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = k.find((w) => {
        var C;
        return (((C = m[w]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let w = k.find((x) => {
          var U;
          return !((U = m[x]) != null && U.itemId);
        });
        const C = new Set(k);
        if (!w) {
          const x = h.find((U) => !C.has(U));
          if (!x) return;
          w = x, k.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: l,
          [`system.weapons.${w}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${w}.damage`]: ((L = a == null ? void 0 : a.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = a == null ? void 0 : a.system) == null ? void 0 : D.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (O) {
        const w = k.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (o) => {
      o.preventDefault();
      const c = o.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), a = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (o) => {
      var w;
      o.preventDefault();
      const c = o.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), a = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), m = a == null ? void 0 : a.dataset.slot;
      if (!m) return;
      const f = (c.dataset.itemId ?? "").trim(), h = (c.dataset.itemName ?? ((w = c.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (c.dataset.itemImg ?? "").trim(), O = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = h);
      let F = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      k ? (F || (F = document.createElement("img"), F.className = "karakter-microchip-slot-thumb", F.alt = "", a == null || a.insertBefore(F, O)), F.src = k, F.style.display = "") : F && F.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
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
      const a = ((k = (h = this.actor.system) == null ? void 0 : h.gear) == null ? void 0 : k.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var F;
        return (((F = a[O]) == null ? void 0 : F.itemId) ?? "").trim() === c;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (o) => {
      const c = o.currentTarget.dataset.slot;
      if (!c) return;
      const l = o.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((o, c) => {
      const l = c.dataset.slot;
      c.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, l)), c.addEventListener("dragleave", (a) => {
        var m;
        return (m = a.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, l));
    }), t.find(".karakter-ability-slot-single").each((o, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, l)), c.addEventListener("dragleave", (a) => {
        var m;
        return (m = a.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (a) => {
        var m;
        (m = a.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, l)), c.addEventListener("dragleave", (a) => {
        var m;
        return (m = a.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (a) => {
        var m;
        (m = a.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
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
      const a = this.actor.system.abilities ?? {}, f = (Array.isArray((h = a[c]) == null ? void 0 : h.items) ? a[c].items.slice() : []).filter((k) => k !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      (m = a == null ? void 0 : a.sheet) == null || m.render(!0);
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
      const a = this.actor.items.get(l);
      if (!a || a.type !== "Fegyver") return;
      const m = (c.value ?? "").trim();
      await a.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, h = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        h && this._resizeWeaponQuantityInput(h);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var L, D;
      const c = o.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const a = this.actor.items.get(l);
      if (!a || a.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), h = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((w) => h.includes(w)) : [], O = k.find((w) => {
        var C;
        return (((C = m[w]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (O) return;
        let w = k.find((x) => {
          var U;
          return !((U = m[x]) != null && U.itemId);
        });
        const C = new Set(k);
        if (!w) {
          const x = h.find((U) => !C.has(U));
          if (!x) return;
          w = x, k.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: l,
          [`system.weapons.${w}.name`]: a.name ?? "",
          [`system.weapons.${w}.damage`]: ((L = a.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = a.system) == null ? void 0 : D.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (O) {
        const w = k.filter((C) => C !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor, m = a.items.get(l), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const h = a.system.weapons ?? {}, k = (h.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], L = F.find((D) => {
          var w;
          return (((w = h[D]) == null ? void 0 : w.itemId) ?? "").trim() === l;
        });
        if (L) {
          const D = F.filter((w) => w !== L);
          f["system.weapons.slotOrder"] = D.join(","), f[`system.weapons.${L}.itemId`] = "", f[`system.weapons.${L}.name`] = "", f[`system.weapons.${L}.damage`] = "", f[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(f).length && await a.update(f), await a.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var l, a;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((a = (l = this.actor.system) == null ? void 0 : l.gear) == null ? void 0 : a.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-item-remove", async (o) => {
      var a, m;
      o.preventDefault();
      const c = parseInt(o.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(c) || c < 0) return;
      const l = Array.isArray((m = (a = this.actor.system) == null ? void 0 : a.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      l.splice(c, 1), await this.actor.update({ "system.gear.generalItems": l });
    });
    const d = this, p = (o) => {
      var a, m, f, h;
      if (!o) return;
      const c = d._getFormDataForUpdate(o);
      if (Object.keys(c).length === 0) return;
      const l = ((m = (a = c.system) == null ? void 0 : a.resources) == null ? void 0 : m.currentHealth) != null || ((h = (f = c.system) == null ? void 0 : f.resources) == null ? void 0 : h.hitLocations) != null;
      d.actor.update(c).then(() => {
        l && setTimeout(() => d.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, y = (o) => {
      var c, l, a;
      return o && (((l = (c = d.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, o)) || d.id && ((a = o.closest) == null ? void 0 : a.call(o, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (o) => {
      const c = o.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const a = c.form;
      y(a) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), p(a));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, p, y;
    const e = {};
    for (const b of s.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, r = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const b of n) {
      const v = ((y = i[b]) == null ? void 0 : y.value) ?? 0, o = r[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, E._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, r, n, d, p, y, b, v, o, c;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            l = a;
            break;
          }
      }
      if (l) {
        const a = await fromUuid(l);
        if (a && a.documentName === "Item" && (a.type === "Kepesseg" || a.type === "ability")) {
          let m = a.id;
          if (((i = a.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const F = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            m = ((r = (await this.actor.createEmbeddedDocuments("Item", [F]))[0]) == null ? void 0 : r.id) ?? m;
          }
          const f = (((n = a.system) == null ? void 0 : n.kind) ?? "passive").toString(), h = this.actor.system.abilities ?? {};
          if (f === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": m,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (f === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": m,
              "system.abilities.hatter.name": a.name
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
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            l = a;
            break;
          }
      }
      if (l) {
        const a = await fromUuid(l);
        if (a && a.documentName === "Item" && a.type === "Fegyver") {
          const m = this.actor, f = ((y = a.parent) == null ? void 0 : y.id) !== m.id;
          let h = a.id;
          if (f) {
            const k = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            h = ((b = (await m.createEmbeddedDocuments("Item", [k]))[0]) == null ? void 0 : b.id) ?? h;
          }
          if (f) {
            const k = ((v = m.system) == null ? void 0 : v.weapons) ?? {}, O = (k.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = O ? O.split(/\s*,\s*/).filter((w) => F.includes(w)) : [], D = L.filter((w) => {
              var C;
              return (((C = k[w]) == null ? void 0 : C.itemId) ?? "").trim() === h;
            });
            if (D.length > 0) {
              const C = {
                "system.weapons.slotOrder": L.filter((x) => !D.includes(x)).join(",")
              };
              for (const x of D)
                C[`system.weapons.${x}.itemId`] = "", C[`system.weapons.${x}.name`] = "", C[`system.weapons.${x}.damage`] = "", C[`system.weapons.${x}.bonus`] = "";
              await m.update(C);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const m = this.actor;
          if (((o = a.parent) == null ? void 0 : o.id) !== m.id) {
            const f = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            await m.createEmbeddedDocuments("Item", [f]);
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "MikroChip") {
          const m = this.actor;
          ((c = a.parent) == null ? void 0 : c.id) !== m.id && await m.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var r, n, d;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, p, y, b, v, o;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const r = await fromUuid(i.uuid);
    if (!r || r.type !== "Fegyver") return;
    if (((b = r.parent) == null ? void 0 : b.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [c]);
      return;
    }
    const n = r.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: r.name,
      [`system.weapons.${e}.damage`]: ((v = r.system) == null ? void 0 : v.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = r.system) == null ? void 0 : o.bonus) ?? ""
    }), await r.update({ "system.equipped": !0 });
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
    var y, b;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((b = s.dataTransfer) == null ? void 0 : b.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const r = this.actor.items.contents.slice().sort((v, o) => {
      const c = typeof v.sort == "number" ? v.sort : 0, l = typeof o.sort == "number" ? o.sort : 0;
      return c - l;
    }).map((v) => v.id), n = r.indexOf(t), d = r.indexOf(e);
    if (n === -1 || d === -1) return;
    r.splice(n, 1), r.splice(d, 0, t);
    const p = r.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, r, n;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
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
    var b, v, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, r = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = r ? `<p>${r}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var i, r;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var n, d, p;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let r = i.id;
    if (((d = i.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const y = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      r = ((p = (await this.actor.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : p.id) ?? r;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: r,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, y, b, v;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let r = i.id;
    if (((y = i.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      r = ((b = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : b.id) ?? r;
    }
    const n = this.actor.system.abilities ?? {}, d = Array.isArray((v = n[e]) == null ? void 0 : v.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    d.includes(r) || d.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var r, n, d;
    const t = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, p, y, b, v;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const r = await fromUuid(i.uuid);
    if (!r || r.type !== "MikroChip") return;
    let n = r.id;
    ((b = r.parent) == null ? void 0 : b.id) !== this.actor.id && (n = ((v = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : v.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let r = Number(i) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? r -= 6 : n === 2 && (r -= 3);
    const p = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, y = new Roll(p);
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
    var r;
    const s = Number(((r = this.actor.system.resources) == null ? void 0 : r.morale) ?? 0) || 0;
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
    var h;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, r = this.actor.items.filter((k) => k.type === "Fegyver");
    let n = null;
    t.itemId && (n = r.find((k) => k.id === t.itemId) ?? null);
    const d = n && n.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, b = (((h = n == null ? void 0 : n.system) == null ? void 0 : h.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[b] || 0) || 0, o = p + v, l = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, a = new Roll(l);
    await a.evaluate({ async: !0 });
    const m = a.total >= 18 ? "critical" : a.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, y, b, v, o, c, l, a, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((y = (p = t.items).get) == null ? void 0 : y.call(p, s)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (h) => h.id === s));
    if (!i || i.type !== "Fegyver") return;
    let r = (((o = i.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!r && e && (r = (((((c = t.system) == null ? void 0 : c.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (f = (l = ui.notifications) == null ? void 0 : l.warn) == null || f.call(l, ((m = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : m.call(a, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(r);
    await n.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
R(E, "PARTS", foundry.utils.mergeObject(P(E, E, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(E, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(E, E, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((Ve = P(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((et = P(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : et.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((st = (tt = P(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : tt.window) == null ? void 0 : st.contentClasses) ?? [],
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
let ye = E;
var it;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, i = (r) => {
      var n, d, p;
      return r && (((d = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : d.call(n, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const n = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
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
R(H, "PARTS", foundry.utils.mergeObject(P(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((it = P(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : it.form) ?? {}, { submitOnChange: !1 })
}));
let ge = H;
var rt;
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
    const e = this, t = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, i = (r) => {
      var n, d, p;
      return r && (((d = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : d.call(n, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const n = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
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
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(B, "PARTS", foundry.utils.mergeObject(P(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((rt = P(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : rt.form) ?? {}, { submitOnChange: !1 })
}));
let he = B;
var at;
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
    const e = this, t = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, i = (r) => {
      var n, d, p;
      return r && (((d = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : d.call(n, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const n = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
R(G, "PARTS", foundry.utils.mergeObject(P(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((at = P(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
}));
let be = G;
var nt;
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
    const e = this, t = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, i = (r) => {
      var n, d, p;
      return r && (((d = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : d.call(n, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const n = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
    }, e._votvInput = (r) => {
      var p;
      const n = r.target;
      if ((n == null ? void 0 : n.name) === "name") return;
      const d = (n == null ? void 0 : n.form) ?? ((p = n == null ? void 0 : n.closest) == null ? void 0 : p.call(n, "form"));
      i(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(d), 300));
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
R(z, "PARTS", foundry.utils.mergeObject(P(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((nt = P(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !0 })
}));
let we = z;
var ot;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const e = this, t = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, i = (r) => {
      var n, d, p;
      return r && (((d = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : d.call(n, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var d, p, y;
      const n = ((d = r.target) == null ? void 0 : d.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      i(n) && t(n);
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
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(W, "PARTS", foundry.utils.mergeObject(P(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), R(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(P(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ot = P(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ze = W;
const At = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, i, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = It, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = qt, CONFIG.Item.dataModels.Pancel = Ot, CONFIG.Item.dataModels.MikroChip = Dt, CONFIG.Item.dataModels.Kepesseg = Qe, CONFIG.Item.dataModels.ability = Qe, CONFIG.Item.dataModels.Targy = Lt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ye, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ge, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const N = 500;
  Hooks.on("updateActor", (n, d, p, y) => {
    var k, O, F, L, D;
    const b = n == null ? void 0 : n.id;
    if (!b) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), c = [], l = (k = game.actors) == null ? void 0 : k.get(b);
    l != null && l.apps && c.push(...Array.from(l.apps));
    const a = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of a)
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
      var i, r, n, d, p, y;
      if (!((r = (i = N.target) == null ? void 0 : i.closest) != null && r.call(i, "#actors"))) return;
      const s = (d = (n = N.target) == null ? void 0 : n.closest) == null ? void 0 : d.call(n, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((y = game.actors) != null && y.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (N, s, e) => {
  var n, d;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, i = t ?? N.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = i ? (d = game.actors) == null ? void 0 : d.get(i) : null;
  !r || r.type !== "Karakter" || N.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (N, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || N.updateSource({
    width: 1920,
    height: 1080,
    "background.src": At,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (N, s, e) => {
  var r, n, d;
  const t = (n = (r = N.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : n.resultType;
  if (!t) return;
  const i = (d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  ye as V
};
//# sourceMappingURL=vacuum-of-the-void-DySPrOjg.mjs.map
