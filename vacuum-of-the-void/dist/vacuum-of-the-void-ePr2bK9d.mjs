var ct = Object.defineProperty;
var ut = Object.getPrototypeOf;
var dt = Reflect.get;
var mt = (F, i, e) => i in F ? ct(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var R = (F, i, e) => mt(F, typeof i != "symbol" ? i + "" : i, e);
var j = (F, i, e) => dt(ut(F), e, i);
const { HTMLField: pt, NumberField: I, SchemaField: _, StringField: h, BooleanField: M, ArrayField: ae } = foundry.data.fields;
class ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new _({
        name: new h({ required: !1, blank: !0, initial: "" }),
        player: new h({ required: !1, blank: !0, initial: "" }),
        level: new I({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new h({ required: !1, blank: !0, initial: "" }),
        assignment: new h({ required: !1, blank: !0, initial: "" }),
        subAssignment: new h({ required: !1, blank: !0, initial: "" }),
        background: new h({ required: !1, blank: !0, initial: "" }),
        languages: new h({ required: !1, blank: !0, initial: "" })
      }),
      resources: new _({
        health: new _({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new _({
          head: new _({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          torso: new _({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          arms: new _({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          }),
          legs: new _({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new M({ required: !1, initial: !1 }),
            box2: new M({ required: !1, initial: !1 }),
            box3: new M({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new _({
          head: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new _({
          head: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new _({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new _({
        defense: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new _({
        deception: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new _({
        slotOrder: new h({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new _({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new _({
        microchips: new _({
          slot1: new _({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot2: new _({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          }),
          slot3: new _({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new M({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" }),
        armor: new ae(
          new _({
            name: new h({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new h({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new h({ required: !1, blank: !0, initial: "" }),
            level: new h({ required: !1, blank: !0, initial: "" }),
            other: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ae(
          new _({
            name: new h({ required: !1, blank: !0, initial: "" }),
            quantity: new I({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new _({
        faji: new _({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new _({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        passive: new _({
          items: new ae(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new _({
          items: new ae(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new _({
        biography: new pt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ce, SchemaField: yt } = foundry.data.fields;
class gt extends ft {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new yt({
        body: new ce({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ce({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ce({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: ht, NumberField: Tt, StringField: Z } = foundry.data.fields;
class bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new ht({ required: !1, initial: !1 }),
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
const { BooleanField: wt, StringField: ne } = foundry.data.fields;
class vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new wt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ne({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ne({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new ne({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ne({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: ue, StringField: Be } = foundry.data.fields;
class kt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Be({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Be({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new ue({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ue({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ue({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: It, StringField: Ge } = foundry.data.fields;
class ze extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Ge({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Ge({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new It({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
var We, Ye, Je, Qe;
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
    var s, a, r, u;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((u = i.querySelector) == null ? void 0 : u.call(i, ".window-content")) ?? null;
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
    let u = { scrollState: {}, focus: null };
    if (a) {
      u.scrollState = this._saveScrollState(a);
      const m = document.activeElement, f = r.contains(m), y = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && y && (u.focus = {
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
    const g = this.element, b = this.form ?? this.element, v = u.scrollState, o = u.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", c = () => {
      var m, f;
      if (this._applyScrollState(g, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const y = ((m = b.querySelector) == null ? void 0 : m.call(b, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = b.querySelector) == null ? void 0 : f.call(b, `[name="${CSS.escape(o.name)}"]`) : null);
        y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA") && (y.focus({ preventScroll: !0 }), typeof y.selectionStart == "number" && (y.selectionStart = o.selectionStart ?? 0, y.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(g, v);
    };
    return (l || o) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
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
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const u = String(((a = r.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, a;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const u = String(((a = r.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var v, o, l, c, n, m, f, y, k;
    const e = i ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, a = ((n = (c = s.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : n.value) ?? 0, r = ((m = s.currentHealth) == null ? void 0 : m.legs) ?? 0, u = E._healthStatusFromRatio(r, a), p = Number(((k = (y = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : y.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let g;
    u === 0 ? g = 0 : u === 1 ? g = -6 : u === 2 ? g = -3 : g = p;
    const b = this._getTotalArmorSpeedPenalty();
    g += b, t.textContent = String(g);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var r, u, p, g;
    const e = i ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = (Number(((g = (p = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : p.combat) == null ? void 0 : g.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, u, p, g;
    const e = E.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, s = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return E._healthStatusFromRatio(a, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var u, p, g, b;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((u = i == null ? void 0 : i.system) == null ? void 0 : u.resources) ?? {}, a = ((g = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, r = ((b = s.currentHealth) == null ? void 0 : b[t]) ?? 0;
    return E._healthStatusFromRatio(r, a);
  }
  async _prepareContext(i) {
    var Te, Oe, De, _e, Le, Ae, Fe, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, He;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Oe = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : Oe.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, a = s.hitLocations ?? {}, r = s.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const S = ((_e = a[d]) == null ? void 0 : _e.value) ?? 0, q = r[d] ?? 0;
      e.computedHealthStatus[d] = E._healthStatusFromRatio(q, S);
    }
    const p = (Number(r.head) || 0) === 0, b = ["torso", "arms", "legs"].filter((d) => (Number(r[d]) || 0) === 0).length;
    e.showDeathSkull = p || b >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ae = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const c = this._getTotalArmorSpeedPenalty();
    l += c, e.effectiveGivenSpeed = l;
    const m = (Number(((Ce = (Fe = this.actor.system) == null ? void 0 : Fe.combat) == null ? void 0 : Ce.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: m } },
      { inplace: !1 }
    );
    const f = E.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, S] of Object.entries(f)) {
      const q = e.computedHealthStatus[S];
      e.skillHealthStatus[d] = q, e.skillDisabled[d] = q === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const y = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (y.slotOrder ?? "").trim(), C = O ? O.split(/\s*,\s*/).filter((d) => k.includes(d)) : [], D = (Ne = this.actor.system.gear) == null ? void 0 : Ne.microchips, L = D && typeof D == "object" && !Array.isArray(D) ? D : {}, w = (((Ee = L.slot1) == null ? void 0 : Ee.itemId) ?? "").trim(), A = (((Pe = L.slot2) == null ? void 0 : Pe.itemId) ?? "").trim(), P = ((($e = L.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), tt = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, S) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof S.sort == "number" ? S.sort : 0;
      return q - T;
    }).map((d) => {
      var Y, Q, re, te, ie, se;
      const S = d.type === "Fegyver", q = d.type === "MikroChip";
      let T = 0, N = "", K = null;
      for (let X = 0; X < C.length; X++) {
        const V = C[X];
        if ((((Y = y[V]) == null ? void 0 : Y.itemId) ?? "") === d.id) {
          T = X + 1, N = ((Q = y[V]) == null ? void 0 : Q.bonus) ?? "", K = V;
          break;
        }
      }
      let x = null;
      q && (w === d.id ? x = "slot1" : A === d.id ? x = "slot2" : P === d.id && (x = "slot3"));
      const ee = S && ((re = d.system) != null && re.damage) ? d.system.damage : "", J = S && typeof ((te = d.system) == null ? void 0 : te.range) == "string" ? (d.system.range || "").trim() : "", W = K ? Number((ie = y[K]) == null ? void 0 : ie.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: S,
        slotAssignment: T,
        slotBonus: N,
        slotKey: K,
        microchipSlotKey: x,
        isEquipped: !!(K || x),
        damage: ee,
        rangeStr: J,
        slotBonusNum: W,
        quantity: Number(((se = d.system) == null ? void 0 : se.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = tt;
    const oe = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).filter((d) => d.type === "Fegyver"), ge = oe.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = ge;
    const he = "— Nincs fegyver —", it = C.filter((d) => {
      const q = ((y[d] ?? {}).itemId ?? "").trim();
      return q ? !!oe.find((N) => N.id === q) : !1;
    });
    e.weaponSlots = it.map((d, S) => {
      const q = y[d] ?? {}, T = (q.itemId ?? "").trim(), N = ge.find((K) => K.id === T);
      return {
        slotKey: d,
        itemId: T,
        slotNum: S + 1,
        displayName: (N == null ? void 0 : N.name) || q.name || he,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const st = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, rt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = oe.map((d) => {
      var X, V, Ue;
      const S = d.id;
      let q = null, T = {};
      for (const le of C)
        if ((((X = y[le]) == null ? void 0 : X.itemId) ?? "").trim() === S) {
          q = le, T = y[le] ?? {};
          break;
        }
      const N = !!q, K = ((V = d.system) == null ? void 0 : V.equipped) !== void 0 && ((Ue = d.system) == null ? void 0 : Ue.equipped) !== null ? !!d.system.equipped : N, x = (d == null ? void 0 : d.system) ?? {}, ee = typeof x.range == "string" ? (x.range || "").trim() : "", J = x.type ?? "", W = (st[J] ?? J) || "—", Y = x.size ?? "", Q = (rt[Y] ?? Y) || "", re = [W, Q].filter(Boolean).join(", ") || W || "—", te = W === "Lövedékes", ie = x.quantity, se = ie != null ? String(ie).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: S,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? he,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (K ? "0" : "—"),
        damage: T.damage ?? x.damage ?? "",
        rangeStr: ee || "—",
        typeLabel: W,
        typeAndSize: re,
        quantity: se,
        quantityDisplay: te ? se : "—",
        isProjectile: te,
        equipped: K,
        special: (x.special ?? "").trim() || "—"
      };
    });
    const at = (((je = this.actor.items) == null ? void 0 : je.contents) ?? []).filter((d) => d.type === "Pancel");
    e.armorTable = at.map((d) => {
      var T, N;
      const S = (d == null ? void 0 : d.system) ?? {}, q = ((T = d.system) == null ? void 0 : T.equipped) !== void 0 && ((N = d.system) == null ? void 0 : N.equipped) !== null ? !!d.system.equipped : !1;
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        protectionBonus: (S.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (S.speedPenalty ?? "").toString().trim() || "—",
        level: (S.level ?? "").toString().trim() || "—",
        special: (S.special ?? S.other ?? "").toString().trim() || "—",
        equipped: q
      };
    }), e.generalItems = Array.isArray((Ke = (Me = this.actor.system) == null ? void 0 : Me.gear) == null ? void 0 : Ke.generalItems) ? this.actor.system.gear.generalItems : [];
    const be = (((Re = this.actor.items) == null ? void 0 : Re.contents) ?? []).filter((d) => d.type === "MikroChip"), nt = "— Nincs Mikro-Chip —", we = ["slot1", "slot2", "slot3"];
    e.microchipSlots = we.map((d) => {
      const S = L[d] ?? {}, q = (S.itemId ?? "").trim(), T = be.find((N) => N.id === q);
      return {
        slotKey: d,
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || S.name || nt,
        img: (T == null ? void 0 : T.img) || "",
        active: S.active === !0
      };
    }), e.microchipsTable = be.map((d) => {
      var J, W, Y;
      const S = d.id;
      let q = null;
      for (const Q of we)
        if ((((J = L[Q]) == null ? void 0 : J.itemId) ?? "").trim() === S) {
          q = Q;
          break;
        }
      const T = !!q, N = ((W = d == null ? void 0 : d.system) == null ? void 0 : W.abilityType) ?? "", K = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", x = (((Y = d == null ? void 0 : d.system) == null ? void 0 : Y.description) ?? "").trim(), ee = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: S,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        typeLabel: K,
        description: ee,
        slotKey: q ?? "",
        equipped: T
      };
    });
    const ve = this.actor.system.abilities ?? {}, ot = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).map((d) => {
      var S, q, T;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((S = d.system) == null ? void 0 : S.kind) ?? "passive",
        description: ((q = d.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((T = d.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), ke = new Map(ot.map((d) => [d.id, d])), lt = "— Nincs képesség —", Ie = (d) => {
      const S = ve[d] ?? {}, q = (S.itemId ?? "").trim(), T = q ? ke.get(q) : null, N = (T == null ? void 0 : T.description) ?? "", K = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || S.name || lt,
        img: (T == null ? void 0 : T.img) || "",
        description: N,
        kp: K
      };
    };
    e.abilityFajiSlot = Ie("faji"), e.abilityHatterSlot = Ie("hatter");
    const Se = (d) => {
      const S = ve[d];
      return S ? Array.isArray(S == null ? void 0 : S.items) ? S.items : Array.isArray(S) ? S : [] : [];
    }, qe = (d) => d.map((S) => {
      const q = ke.get(S);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = qe(Se("passive")), e.abilityActiveList = qe(Se("active")), e;
  }
  _attachFrameListeners(i) {
    var b, v;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const c = (o.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-fJUcYoNg.mjs");
      n(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var n, m, f;
      o.preventDefault(), o.stopPropagation();
      const l = o.currentTarget;
      let c = (l.dataset.itemId ?? "").trim();
      if (!c) {
        const y = (l.dataset.slot ?? "").trim();
        if (!y) return;
        c = (((((m = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : m.weapons) ?? {})[y] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (o) => {
      var n;
      const l = o ? o.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const c = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", c > 10);
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
      const l = o.currentTarget, c = l.dataset.skill, n = ((f = l.textContent) == null ? void 0 : f.trim()) || c, { openRollSheetForSkill: m } = await import("./roll-sheet-fJUcYoNg.mjs");
      m(this.actor, c, n);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const r = (o, l) => {
      var m;
      const c = o.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
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
      const l = o.currentTarget, c = l.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await n.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor, m = n.items.get(c), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const y = n.system.weapons ?? {}, k = (y.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = k ? k.split(/\s*,\s*/).filter((L) => O.includes(L)) : [], D = C.find((L) => {
          var w;
          return (((w = y[L]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (D) {
          const L = C.filter((w) => w !== D);
          f["system.weapons.slotOrder"] = L.join(","), f[`system.weapons.${D}.itemId`] = "", f[`system.weapons.${D}.name`] = "", f[`system.weapons.${D}.damage`] = "", f[`system.weapons.${D}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var D, L;
      const l = o.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((w) => y.includes(w)) : [], O = k.find((w) => {
        var A;
        return (((A = m[w]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = k.find((P) => {
          var H;
          return !((H = m[P]) != null && H.itemId);
        });
        const A = new Set(k);
        if (!w) {
          const P = y.find((H) => !A.has(H));
          if (!P) return;
          w = P, k.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${w}.damage`]: ((D = n == null ? void 0 : n.system) == null ? void 0 : D.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((L = n == null ? void 0 : n.system) == null ? void 0 : L.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (O) {
        const w = k.filter((A) => A !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("change", ".karakter-microchip-equipped-checkbox", async (o) => {
      var O, C;
      const l = o.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "MikroChip") return;
      const m = ((C = (O = this.actor.system) == null ? void 0 : O.gear) == null ? void 0 : C.microchips) ?? {}, f = ["slot1", "slot2", "slot3"], y = f.find((D) => {
        var L;
        return (((L = m[D]) == null ? void 0 : L.itemId) ?? "").trim() === c;
      });
      if (l.checked) {
        if (y) return;
        const D = f.find((L) => {
          var w;
          return !(((w = m[L]) == null ? void 0 : w.itemId) ?? "").trim();
        });
        if (!D) return;
        await this.actor.update({
          [`system.gear.microchips.${D}.itemId`]: c,
          [`system.gear.microchips.${D}.name`]: n.name ?? "",
          [`system.gear.microchips.${D}.active`]: !0
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
      var y, k;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      if (!c || c.type !== "MikroChip") return;
      const n = ((k = (y = this.actor.system) == null ? void 0 : y.gear) == null ? void 0 : k.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((O) => {
        var C;
        return (((C = n[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", (o) => {
      const l = o.currentTarget.dataset.slot;
      if (!l) return;
      const c = o.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: c });
    }), t.find(".karakter-microchip-slot").each((o, l) => {
      const c = l.dataset.slot;
      l.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, c)), l.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, c));
    }), t.find(".karakter-ability-slot-single").each((o, l) => {
      const c = l.dataset.slot;
      c && (l.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, c)), l.addEventListener("dragleave", (n) => {
        var m;
        return (m = n.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (n) => {
        var m;
        (m = n.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, l) => {
      const c = l.dataset.area;
      c && (l.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, c)), l.addEventListener("dragleave", (n) => {
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
      const l = o.currentTarget.dataset.area, c = o.currentTarget.dataset.itemId;
      if (!l || !c) return;
      const n = this.actor.system.abilities ?? {}, f = (Array.isArray((y = n[l]) == null ? void 0 : y.items) ? n[l].items.slice() : []).filter((k) => k !== c);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const c = o.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor.items.get(c);
      (m = n == null ? void 0 : n.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const c = o.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const l = o.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await n.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, y = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        y && this._resizeWeaponQuantityInput(y);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const l = o.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var D, L;
      const l = o.currentTarget, c = (l.dataset.itemId ?? "").trim();
      if (!c) return;
      const n = this.actor.items.get(c);
      if (!n || n.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((w) => y.includes(w)) : [], O = k.find((w) => {
        var A;
        return (((A = m[w]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (l.checked) {
        if (O) return;
        let w = k.find((P) => {
          var H;
          return !((H = m[P]) != null && H.itemId);
        });
        const A = new Set(k);
        if (!w) {
          const P = y.find((H) => !A.has(H));
          if (!P) return;
          w = P, k.push(P);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: n.name ?? "",
          [`system.weapons.${w}.damage`]: ((D = n.system) == null ? void 0 : D.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((L = n.system) == null ? void 0 : L.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (O) {
        const w = k.filter((A) => A !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const c = o.currentTarget.dataset.itemId;
      if (!c) return;
      const n = this.actor, m = n.items.get(c), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const y = n.system.weapons ?? {}, k = (y.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = k ? k.split(/\s*,\s*/).filter((L) => O.includes(L)) : [], D = C.find((L) => {
          var w;
          return (((w = y[L]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (D) {
          const L = C.filter((w) => w !== D);
          f["system.weapons.slotOrder"] = L.join(","), f[`system.weapons.${D}.itemId`] = "", f[`system.weapons.${D}.name`] = "", f[`system.weapons.${D}.damage`] = "", f[`system.weapons.${D}.bonus`] = "";
        }
      }
      Object.keys(f).length && await n.update(f), await n.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const c = this.actor.items.get(l);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var c, n;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((n = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : n.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-item-remove", async (o) => {
      var n, m;
      o.preventDefault();
      const l = parseInt(o.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const c = Array.isArray((m = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      c.splice(l, 1), await this.actor.update({ "system.gear.generalItems": c });
    });
    const u = this, p = (o) => {
      var n, m, f, y;
      if (!o) return;
      const l = u._getFormDataForUpdate(o);
      if (Object.keys(l).length === 0) return;
      const c = ((m = (n = l.system) == null ? void 0 : n.resources) == null ? void 0 : m.currentHealth) != null || ((y = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : y.hitLocations) != null;
      u.actor.update(l).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, g = (o) => {
      var l, c, n;
      return o && (((c = (l = u.element) == null ? void 0 : l.contains) == null ? void 0 : c.call(l, o)) || u.id && ((n = o.closest) == null ? void 0 : n.call(o, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const c = l.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const n = l.form;
      g(n) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(n));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var u, p, g;
    const e = {};
    for (const b of i.elements) {
      if (!b.name || b.disabled || b.type === "radio" && !b.checked || b.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      b.type === "checkbox" ? v = b.checked : b.type === "number" ? v = b.value === "" ? 0 : Number(b.value) : v = b.value ?? "", foundry.utils.setProperty(e, b.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, a = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const b of r) {
      const v = ((g = s[b]) == null ? void 0 : g.value) ?? 0, o = a[b] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${b}`, E._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, a, r, u, p, g, b, v, o, l;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            c = n;
            break;
          }
      }
      if (c) {
        const n = await fromUuid(c);
        if (n && n.documentName === "Item" && (n.type === "Kepesseg" || n.type === "ability")) {
          let m = n.id;
          if (((s = n.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
            m = ((a = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : a.id) ?? m;
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
          const k = f === "active" ? "active" : "passive", O = Array.isArray((u = y[k]) == null ? void 0 : u.items) ? y[k].items.slice() : Array.isArray(y[k]) ? y[k].slice() : [];
          O.includes(m) || O.push(m), await this.actor.update({ [`system.abilities.${k}.items`]: O });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            c = n;
            break;
          }
      }
      if (c) {
        const n = await fromUuid(c);
        if (n && n.documentName === "Item" && n.type === "Fegyver") {
          const m = this.actor, f = ((g = n.parent) == null ? void 0 : g.id) !== m.id;
          let y = n.id;
          if (f) {
            const k = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            y = ((b = (await m.createEmbeddedDocuments("Item", [k]))[0]) == null ? void 0 : b.id) ?? y;
          }
          if (f) {
            const k = ((v = m.system) == null ? void 0 : v.weapons) ?? {}, O = (k.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = O ? O.split(/\s*,\s*/).filter((w) => C.includes(w)) : [], L = D.filter((w) => {
              var A;
              return (((A = k[w]) == null ? void 0 : A.itemId) ?? "").trim() === y;
            });
            if (L.length > 0) {
              const A = {
                "system.weapons.slotOrder": D.filter((P) => !L.includes(P)).join(",")
              };
              for (const P of L)
                A[`system.weapons.${P}.itemId`] = "", A[`system.weapons.${P}.name`] = "", A[`system.weapons.${P}.damage`] = "", A[`system.weapons.${P}.bonus`] = "";
              await m.update(A);
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
    var a, r, u;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var u, p, g, b, v, o;
    i.preventDefault(), i.stopPropagation(), (u = i.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
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
      const l = typeof v.sort == "number" ? v.sort : 0, c = typeof o.sort == "number" ? o.sort : 0;
      return l - c;
    }).map((v) => v.id), r = a.indexOf(t), u = a.indexOf(e);
    if (r === -1 || u === -1) return;
    a.splice(r, 1), a.splice(u, 0, t);
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
    const t = ((b = e.system) == null ? void 0 : b.kind) ?? "passive", s = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, a = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = a ? `<p>${a}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${u}
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
    var r, u, p;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let a = s.id;
    if (((u = s.parent) == null ? void 0 : u.id) !== this.actor.id) {
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
    const r = this.actor.system.abilities ?? {}, u = Array.isArray((v = r[e]) == null ? void 0 : v.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(i, e) {
    var a, r, u;
    const t = ((a = i.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (u = i.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var u, p, g, b, v;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
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
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, a = this.actor.items.filter((k) => k.type === "Fegyver");
    let r = null;
    t.itemId && (r = a.find((k) => k.id === t.itemId) ?? null);
    const u = r && r.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, b = (((y = r == null ? void 0 : r.system) == null ? void 0 : y.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(s[b] || 0) || 0, o = p + v, c = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, n = new Roll(c);
    await n.evaluate({ async: !0 });
    const m = n.total >= 18 ? "critical" : n.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var p, g, b, v, o, l, c, n, m, f;
    const t = this.actor;
    if (!t) return;
    let s = ((g = (p = t.items).get) == null ? void 0 : g.call(p, i)) ?? ((v = (b = t.items.contents) == null ? void 0 : b.find) == null ? void 0 : v.call(b, (y) => y.id === i));
    if (!s || s.type !== "Fegyver") return;
    let a = (((o = s.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!a && e && (a = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((m = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : m.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(a);
    await r.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
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
  form: foundry.utils.mergeObject(((We = j(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ye = j(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Qe = (Je = j(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Je.window) == null ? void 0 : Qe.contentClasses) ?? [],
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
let de = E;
var Xe;
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
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, s = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
R(U, "PARTS", foundry.utils.mergeObject(j(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Xe = j(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.form) ?? {}, { submitOnChange: !1 })
}));
let me = U;
var Ze;
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
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, s = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
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
R(B, "PARTS", foundry.utils.mergeObject(j(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ze = j(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.form) ?? {}, { submitOnChange: !1 })
}));
let pe = B;
var Ve;
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
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, s = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const u = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
      s(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
  form: foundry.utils.mergeObject(((Ve = j(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !0 })
}));
let fe = G;
var et;
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
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, s = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, g;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((g = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      s(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const u = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
      s(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
  form: foundry.utils.mergeObject(((et = j(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !0 })
}));
let ye = z;
const St = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = gt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = bt, CONFIG.Item.dataModels.Pancel = vt, CONFIG.Item.dataModels.MikroChip = kt, CONFIG.Item.dataModels.Kepesseg = ze, CONFIG.Item.dataModels.ability = ze, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", de, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", me, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", pe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", fe, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ye, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  });
  const F = 500;
  Hooks.on("updateActor", (r, u, p, g) => {
    var k, O, C, D, L;
    const b = r == null ? void 0 : r.id;
    if (!b) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], c = (k = game.actors) == null ? void 0 : k.get(b);
    c != null && c.apps && l.push(...Array.from(c.apps));
    const n = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of n)
      ((O = w.document) == null ? void 0 : O.id) !== b || ((C = w.document) == null ? void 0 : C.documentName) !== "Actor" || ((D = w.constructor) == null ? void 0 : D.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (o && l.some((w) => {
      const A = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return A && A.contains(v);
    })) return;
    const f = (L = game.votv) == null ? void 0 : L._lastKarakterSheetBlurSave, y = f && Date.now() - f.at < F ? f.appId : null;
    setTimeout(() => {
      for (const w of l)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== y && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (F) => {
      var s, a, r, u, p, g;
      if (!((a = (s = F.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
      const i = (u = (r = F.target) == null ? void 0 : r.closest) == null ? void 0 : u.call(r, "[data-document-id]"), e = (p = i == null ? void 0 : i.getAttribute) == null ? void 0 : p.call(i, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (F, i, e) => {
  var r, u;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, s = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = s ? (u = game.actors) == null ? void 0 : u.get(s) : null;
  !a || a.type !== "Karakter" || F.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (F, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || F.updateSource({
    width: 1920,
    height: 1080,
    "background.src": St,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (F, i, e) => {
  var a, r, u;
  const t = (r = (a = F.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : r.resultType;
  if (!t) return;
  const s = (u = i == null ? void 0 : i.querySelector) == null ? void 0 : u.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  de as V
};
//# sourceMappingURL=vacuum-of-the-void-ePr2bK9d.mjs.map
