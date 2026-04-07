var ct = Object.defineProperty;
var ut = Object.getPrototypeOf;
var dt = Reflect.get;
var mt = (A, s, e) => s in A ? ct(A, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[s] = e;
var R = (A, s, e) => mt(A, typeof s != "symbol" ? s + "" : s, e);
var x = (A, s, e) => dt(ut(A), e, s);
const { HTMLField: pt, NumberField: I, SchemaField: D, StringField: b, BooleanField: j, ArrayField: ae } = foundry.data.fields;
class ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new D({
        name: new b({ required: !1, blank: !0, initial: "" }),
        player: new b({ required: !1, blank: !0, initial: "" }),
        level: new I({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new b({ required: !1, blank: !0, initial: "" }),
        assignment: new b({ required: !1, blank: !0, initial: "" }),
        subAssignment: new b({ required: !1, blank: !0, initial: "" }),
        background: new b({ required: !1, blank: !0, initial: "" }),
        languages: new b({ required: !1, blank: !0, initial: "" })
      }),
      resources: new D({
        health: new D({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new D({
          head: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          torso: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          arms: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          legs: new D({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new D({
          head: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new D({
          head: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new D({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new D({
        defense: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new D({
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
      weapons: new D({
        slotOrder: new b({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new D({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new D({
        microchips: new D({
          slot1: new D({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          }),
          slot2: new D({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          }),
          slot3: new D({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          })
        }),
        equipment: new b({ required: !1, blank: !0, initial: "" }),
        armor: new ae(
          new D({
            name: new b({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new b({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new b({ required: !1, blank: !0, initial: "" }),
            level: new b({ required: !1, blank: !0, initial: "" }),
            other: new b({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ae(
          new D({
            name: new b({ required: !1, blank: !0, initial: "" }),
            quantity: new I({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new b({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new D({
        faji: new D({
          itemId: new b({ required: !1, blank: !0, initial: "" }),
          name: new b({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new D({
          itemId: new b({ required: !1, blank: !0, initial: "" }),
          name: new b({ required: !1, blank: !0, initial: "" })
        }),
        passive: new D({
          items: new ae(
            new b({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new D({
          items: new ae(
            new b({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new D({
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
    var i, a, r, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv")) ?? null, t = ((r = s.querySelector) == null ? void 0 : r.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
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
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const h = this.element, w = this.form ?? this.element, v = u.scrollState, o = u.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", n = () => {
      var m, f;
      if (this._applyScrollState(h, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const y = ((m = w.querySelector) == null ? void 0 : m.call(w, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = w.querySelector) == null ? void 0 : f.call(w, `[name="${CSS.escape(o.name)}"]`) : null);
        y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA") && (y.focus({ preventScroll: !0 }), typeof y.selectionStart == "number" && (y.selectionStart = o.selectionStart ?? 0, y.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(h, v);
    };
    return (l || o) && (requestAnimationFrame(n), setTimeout(n, 0), setTimeout(n, 50), setTimeout(n, 150), setTimeout(n, 300), setTimeout(n, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const a = Math.floor(i / 3), r = Math.floor(2 * i / 3);
    return t <= a ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (r) => {
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const u = String(((a = r.system) == null ? void 0 : a.speedPenalty) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, a;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (r) => {
        var u;
        return r.type === "Pancel" && ((u = r.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of s) {
      const u = String(((a = r.system) == null ? void 0 : a.protectionBonus) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, o, l, n, c, m, f, y, k;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, a = ((c = (n = i.hitLocations) == null ? void 0 : n.legs) == null ? void 0 : c.value) ?? 0, r = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, u = E._healthStatusFromRatio(r, a), p = Number(((k = (y = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : y.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let h;
    u === 0 ? h = 0 : u === 1 ? h = -6 : u === 2 ? h = -3 : h = p;
    const w = this._getTotalArmorSpeedPenalty();
    h += w, t.textContent = String(h);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var r, u, p, h;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = (Number(((h = (p = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : p.combat) == null ? void 0 : h.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var r, u, p, h;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, a = ((h = t.currentHealth) == null ? void 0 : h[e]) ?? 0;
    return E._healthStatusFromRatio(a, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, h, w;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, a = ((h = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : h.value) ?? 0, r = ((w = i.currentHealth) == null ? void 0 : w[t]) ?? 0;
    return E._healthStatusFromRatio(r, a);
  }
  async _prepareContext(s) {
    var Te, Oe, De, _e, Le, Ae, Fe, Ce, Ne, Ee, Pe, $e, xe, je, Me, Ke, Re, He;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Oe = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : Oe.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, a = i.hitLocations ?? {}, r = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const S = ((_e = a[d]) == null ? void 0 : _e.value) ?? 0, q = r[d] ?? 0;
      e.computedHealthStatus[d] = E._healthStatusFromRatio(q, S);
    }
    const p = (Number(r.head) || 0) === 0, w = ["torso", "arms", "legs"].filter((d) => (Number(r[d]) || 0) === 0).length;
    e.showDeathSkull = p || w >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ae = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const n = this._getTotalArmorSpeedPenalty();
    l += n, e.effectiveGivenSpeed = l;
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
    const y = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = (y.slotOrder ?? "").trim(), F = L ? L.split(/\s*,\s*/).filter((d) => k.includes(d)) : [], O = (Ne = this.actor.system.gear) == null ? void 0 : Ne.microchips, _ = O && typeof O == "object" && !Array.isArray(O) ? O : {}, g = (((Ee = _.slot1) == null ? void 0 : Ee.itemId) ?? "").trim(), C = (((Pe = _.slot2) == null ? void 0 : Pe.itemId) ?? "").trim(), K = ((($e = _.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), tt = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, S) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof S.sort == "number" ? S.sort : 0;
      return q - T;
    }).map((d) => {
      var Y, Q, re, te, se, ie;
      const S = d.type === "Fegyver", q = d.type === "MikroChip";
      let T = 0, N = "", M = null;
      for (let X = 0; X < F.length; X++) {
        const V = F[X];
        if ((((Y = y[V]) == null ? void 0 : Y.itemId) ?? "") === d.id) {
          T = X + 1, N = ((Q = y[V]) == null ? void 0 : Q.bonus) ?? "", M = V;
          break;
        }
      }
      let P = null;
      q && (g === d.id ? P = "slot1" : C === d.id ? P = "slot2" : K === d.id && (P = "slot3"));
      const ee = S && ((re = d.system) != null && re.damage) ? d.system.damage : "", J = S && typeof ((te = d.system) == null ? void 0 : te.range) == "string" ? (d.system.range || "").trim() : "", W = M ? Number((se = y[M]) == null ? void 0 : se.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: S,
        slotAssignment: T,
        slotBonus: N,
        slotKey: M,
        microchipSlotKey: P,
        isEquipped: !!(M || P),
        damage: ee,
        rangeStr: J,
        slotBonusNum: W,
        quantity: Number(((ie = d.system) == null ? void 0 : ie.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = tt;
    const oe = (((xe = this.actor.items) == null ? void 0 : xe.contents) ?? []).filter((d) => d.type === "Fegyver"), ge = oe.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = ge;
    const he = "— Nincs fegyver —", st = F.filter((d) => {
      const q = ((y[d] ?? {}).itemId ?? "").trim();
      return q ? !!oe.find((N) => N.id === q) : !1;
    });
    e.weaponSlots = st.map((d, S) => {
      const q = y[d] ?? {}, T = (q.itemId ?? "").trim(), N = ge.find((M) => M.id === T);
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
    const it = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, rt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = oe.map((d) => {
      var X, V, Ue;
      const S = d.id;
      let q = null, T = {};
      for (const le of F)
        if ((((X = y[le]) == null ? void 0 : X.itemId) ?? "").trim() === S) {
          q = le, T = y[le] ?? {};
          break;
        }
      const N = !!q, M = ((V = d.system) == null ? void 0 : V.equipped) !== void 0 && ((Ue = d.system) == null ? void 0 : Ue.equipped) !== null ? !!d.system.equipped : N, P = (d == null ? void 0 : d.system) ?? {}, ee = typeof P.range == "string" ? (P.range || "").trim() : "", J = P.type ?? "", W = (it[J] ?? J) || "—", Y = P.size ?? "", Q = (rt[Y] ?? Y) || "", re = [W, Q].filter(Boolean).join(", ") || W || "—", te = W === "Lövedékes", se = P.quantity, ie = se != null ? String(se).trim() : "1";
      return {
        slotKey: q ?? "",
        itemId: S,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? he,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (M ? "0" : "—"),
        damage: T.damage ?? P.damage ?? "",
        rangeStr: ee || "—",
        typeLabel: W,
        typeAndSize: re,
        quantity: ie,
        quantityDisplay: te ? ie : "—",
        isProjectile: te,
        equipped: M,
        special: (P.special ?? "").trim() || "—"
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
      const S = _[d] ?? {}, q = (S.itemId ?? "").trim(), T = be.find((N) => N.id === q);
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
        if ((((J = _[Q]) == null ? void 0 : J.itemId) ?? "").trim() === S) {
          q = Q;
          break;
        }
      const T = !!q, N = ((W = d == null ? void 0 : d.system) == null ? void 0 : W.abilityType) ?? "", M = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", P = (((Y = d == null ? void 0 : d.system) == null ? void 0 : Y.description) ?? "").trim(), ee = P ? P.length > 60 ? P.slice(0, 57) + "…" : P : "—";
      return {
        itemId: S,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        typeLabel: M,
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
      const S = ve[d] ?? {}, q = (S.itemId ?? "").trim(), T = q ? ke.get(q) : null, N = (T == null ? void 0 : T.description) ?? "", M = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || S.name || lt,
        img: (T == null ? void 0 : T.img) || "",
        description: N,
        kp: M
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
  _attachFrameListeners(s) {
    var w, v;
    super._attachFrameListeners(s);
    const e = this.form ?? ((w = s == null ? void 0 : s.querySelector) == null ? void 0 : w.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (o) => {
      o.preventDefault(), o.stopPropagation();
      const n = (o.currentTarget.dataset.slot ?? "").trim();
      if (!n) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-Ctffft0O.mjs");
      c(this.actor, n);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var c, m, f;
      o.preventDefault(), o.stopPropagation();
      const l = o.currentTarget;
      let n = (l.dataset.itemId ?? "").trim();
      if (!n) {
        const y = (l.dataset.slot ?? "").trim();
        if (!y) return;
        n = (((((m = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : m.weapons) ?? {})[y] ?? {}).itemId ?? "").trim();
      }
      n && await this._rollWeaponDamage(n, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (o) => {
      var c;
      const l = o ? o.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const n = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", n > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const a = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    a && i({ currentTarget: a }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
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
      const l = o.currentTarget, n = l.dataset.skill, c = ((f = l.textContent) == null ? void 0 : f.trim()) || n, { openRollSheetForSkill: m } = await import("./roll-sheet-Ctffft0O.mjs");
      m(this.actor, n, c);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const r = (o, l) => {
      var m;
      const n = o.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n);
      if (c) {
        if (o.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const f = o.dataset.weaponSlot;
          f && this._rollWeapon(f);
          return;
        }
        (m = c.sheet) == null || m.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), r(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), r(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const l = o.currentTarget, n = l.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n);
      if (!c) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const n = o.currentTarget.dataset.itemId;
      if (!n) return;
      const c = this.actor, m = c.items.get(n), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const y = c.system.weapons ?? {}, k = (y.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((_) => L.includes(_)) : [], O = F.find((_) => {
          var g;
          return (((g = y[_]) == null ? void 0 : g.itemId) ?? "").trim() === n;
        });
        if (O) {
          const _ = F.filter((g) => g !== O);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${O}.itemId`] = "", f[`system.weapons.${O}.name`] = "", f[`system.weapons.${O}.damage`] = "", f[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var O, _;
      const l = o.currentTarget, n = (l.dataset.itemId ?? "").trim();
      if (!n) return;
      const c = this.actor.items.get(n);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((g) => y.includes(g)) : [], L = k.find((g) => {
        var C;
        return (((C = m[g]) == null ? void 0 : C.itemId) ?? "").trim() === n;
      }) ?? null;
      if (l.checked) {
        if (L) return;
        let g = k.find((K) => {
          var H;
          return !((H = m[K]) != null && H.itemId);
        });
        const C = new Set(k);
        if (!g) {
          const K = y.find((H) => !C.has(H));
          if (!K) return;
          g = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${g}.itemId`]: n,
          [`system.weapons.${g}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${g}.damage`]: ((O = c == null ? void 0 : c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((_ = c == null ? void 0 : c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (L) {
        const g = k.filter((C) => C !== L);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${L}.itemId`]: "",
          [`system.weapons.${L}.name`]: "",
          [`system.weapons.${L}.damage`]: "",
          [`system.weapons.${L}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("change", ".karakter-microchip-equipped-checkbox", async (o) => {
      var L, F;
      const l = o.currentTarget, n = (l.dataset.itemId ?? "").trim();
      if (!n) return;
      const c = this.actor.items.get(n);
      if (!c || c.type !== "MikroChip") return;
      const m = ((F = (L = this.actor.system) == null ? void 0 : L.gear) == null ? void 0 : F.microchips) ?? {}, f = ["slot1", "slot2", "slot3"], y = f.find((O) => {
        var _;
        return (((_ = m[O]) == null ? void 0 : _.itemId) ?? "").trim() === n;
      });
      if (l.checked) {
        if (y) return;
        const O = f.find((_) => {
          var g;
          return !(((g = m[_]) == null ? void 0 : g.itemId) ?? "").trim();
        });
        if (!O) return;
        await this.actor.update({
          [`system.gear.microchips.${O}.itemId`]: n,
          [`system.gear.microchips.${O}.name`]: c.name ?? "",
          [`system.gear.microchips.${O}.active`]: !0
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
      const n = this.actor.items.get(l);
      if (!n || n.type !== "MikroChip") return;
      const c = ((k = (y = this.actor.system) == null ? void 0 : y.gear) == null ? void 0 : k.microchips) ?? {}, f = ["slot1", "slot2", "slot3"].find((L) => {
        var F;
        return (((F = c[L]) == null ? void 0 : F.itemId) ?? "").trim() === l;
      });
      f && await this.actor.update({
        [`system.gear.microchips.${f}.itemId`]: "",
        [`system.gear.microchips.${f}.name`]: "",
        [`system.gear.microchips.${f}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", (o) => {
      const l = o.currentTarget.dataset.slot;
      if (!l) return;
      const n = o.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: n });
    }), t.find(".karakter-microchip-slot").each((o, l) => {
      const n = l.dataset.slot;
      l.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, n)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, n));
    }), t.find(".karakter-ability-slot-single").each((o, l) => {
      const n = l.dataset.slot;
      n && (l.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, n)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, l) => {
      const n = l.dataset.area;
      n && (l.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, n)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
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
      const l = o.currentTarget.dataset.area, n = o.currentTarget.dataset.itemId;
      if (!l || !n) return;
      const c = this.actor.system.abilities ?? {}, f = (Array.isArray((y = c[l]) == null ? void 0 : y.items) ? c[l].items.slice() : []).filter((k) => k !== n);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const n = o.currentTarget.dataset.itemId;
      if (!n) return;
      const c = this.actor.items.get(n);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const n = o.currentTarget.dataset.itemId;
      n && await this._postAbilityToChat(n);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const l = o.currentTarget, n = (l.dataset.itemId ?? "").trim();
      if (!n) return;
      const c = this.actor.items.get(n);
      if (!c || c.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await c.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, y = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${n}"]`);
        y && this._resizeWeaponQuantityInput(y);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const l = o.currentTarget, n = (l.dataset.itemId ?? "").trim();
      if (!n) return;
      const c = this.actor.items.get(n);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var O, _;
      const l = o.currentTarget, n = (l.dataset.itemId ?? "").trim();
      if (!n) return;
      const c = this.actor.items.get(n);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((g) => y.includes(g)) : [], L = k.find((g) => {
        var C;
        return (((C = m[g]) == null ? void 0 : C.itemId) ?? "").trim() === n;
      }) ?? null;
      if (l.checked) {
        if (L) return;
        let g = k.find((K) => {
          var H;
          return !((H = m[K]) != null && H.itemId);
        });
        const C = new Set(k);
        if (!g) {
          const K = y.find((H) => !C.has(H));
          if (!K) return;
          g = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${g}.itemId`]: n,
          [`system.weapons.${g}.name`]: c.name ?? "",
          [`system.weapons.${g}.damage`]: ((O = c.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${g}.bonus`]: ((_ = c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (L) {
        const g = k.filter((C) => C !== L);
        await this.actor.update({
          "system.weapons.slotOrder": g.join(","),
          [`system.weapons.${L}.itemId`]: "",
          [`system.weapons.${L}.name`]: "",
          [`system.weapons.${L}.damage`]: "",
          [`system.weapons.${L}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const n = o.currentTarget.dataset.itemId;
      if (!n) return;
      const c = this.actor, m = c.items.get(n), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const y = c.system.weapons ?? {}, k = (y.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((_) => L.includes(_)) : [], O = F.find((_) => {
          var g;
          return (((g = y[_]) == null ? void 0 : g.itemId) ?? "").trim() === n;
        });
        if (O) {
          const _ = F.filter((g) => g !== O);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${O}.itemId`] = "", f[`system.weapons.${O}.name`] = "", f[`system.weapons.${O}.damage`] = "", f[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const n = this.actor.items.get(l);
      !n || n.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var n, c;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((c = (n = this.actor.system) == null ? void 0 : n.gear) == null ? void 0 : c.generalItems) ? [...this.actor.system.gear.generalItems] : [];
        m.push({ name: "", quantity: 1, description: "" }), await this.actor.update({ "system.gear.generalItems": m });
      }
    }), t.on("click", ".karakter-microchip-clear", async (o) => {
      o.preventDefault();
      const l = o.currentTarget.dataset.slotKey;
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-item-remove", async (o) => {
      var c, m;
      o.preventDefault();
      const l = parseInt(o.currentTarget.dataset.itemIndex, 10);
      if (!Number.isFinite(l) || l < 0) return;
      const n = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      n.splice(l, 1), await this.actor.update({ "system.gear.generalItems": n });
    });
    const u = this, p = (o) => {
      var c, m, f, y;
      if (!o) return;
      const l = u._getFormDataForUpdate(o);
      if (Object.keys(l).length === 0) return;
      const n = ((m = (c = l.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((y = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : y.hitLocations) != null;
      u.actor.update(l).then(() => {
        n && setTimeout(() => u.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, h = (o) => {
      var l, n, c;
      return o && (((n = (l = u.element) == null ? void 0 : l.contains) == null ? void 0 : n.call(l, o)) || u.id && ((c = o.closest) == null ? void 0 : c.call(o, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const n = l.tagName;
      if (n !== "INPUT" && n !== "TEXTAREA" && n !== "SELECT") return;
      const c = l.form;
      h(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, h;
    const e = {};
    for (const w of s.elements) {
      if (!w.name || w.disabled || w.type === "radio" && !w.checked || w.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      w.type === "checkbox" ? v = w.checked : w.type === "number" ? v = w.value === "" ? 0 : Number(w.value) : v = w.value ?? "", foundry.utils.setProperty(e, w.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, a = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const w of r) {
      const v = ((h = i[w]) == null ? void 0 : h.value) ?? 0, o = a[w] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${w}`, E._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, a, r, u, p, h, w, v, o;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            l = n;
            break;
          }
      }
      if (l) {
        const n = await fromUuid(l);
        if (n && n.documentName === "Item" && (n.type === "Kepesseg" || n.type === "ability")) {
          let c = n.id;
          if (((i = n.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const L = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
            c = ((a = (await this.actor.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : a.id) ?? c;
          }
          const m = (((r = n.system) == null ? void 0 : r.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
          if (m === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": c,
              "system.abilities.faji.name": n.name
            });
            return;
          }
          if (m === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": c,
              "system.abilities.hatter.name": n.name
            });
            return;
          }
          const y = m === "active" ? "active" : "passive", k = Array.isArray((u = f[y]) == null ? void 0 : u.items) ? f[y].items.slice() : Array.isArray(f[y]) ? f[y].slice() : [];
          k.includes(c) || k.push(c), await this.actor.update({ [`system.abilities.${y}.items`]: k });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const n of Object.values(e))
          if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
            l = n;
            break;
          }
      }
      if (l) {
        const n = await fromUuid(l);
        if (n && n.documentName === "Item" && n.type === "Fegyver") {
          const c = this.actor, m = ((h = n.parent) == null ? void 0 : h.id) !== c.id;
          let f = n.id;
          if (m) {
            const y = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            f = ((w = (await c.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : w.id) ?? f;
          }
          if (m) {
            const y = ((v = c.system) == null ? void 0 : v.weapons) ?? {}, k = (y.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], F = k ? k.split(/\s*,\s*/).filter((_) => L.includes(_)) : [], O = F.filter((_) => {
              var g;
              return (((g = y[_]) == null ? void 0 : g.itemId) ?? "").trim() === f;
            });
            if (O.length > 0) {
              const g = {
                "system.weapons.slotOrder": F.filter((C) => !O.includes(C)).join(",")
              };
              for (const C of O)
                g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
              await c.update(g);
            }
          }
          return;
        }
        if (n && n.documentName === "Item" && n.type === "Pancel") {
          const c = this.actor;
          if (((o = n.parent) == null ? void 0 : o.id) !== c.id) {
            const m = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
            await c.createEmbeddedDocuments("Item", [m]);
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var a, r, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, h, w, v, o;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((h = s.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "Fegyver") return;
    if (((w = a.parent) == null ? void 0 : w.id) !== this.actor.id) {
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
    var h, w;
    s.preventDefault(), (h = s.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((w = s.dataTransfer) == null ? void 0 : w.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const a = this.actor.items.contents.slice().sort((v, o) => {
      const l = typeof v.sort == "number" ? v.sort : 0, n = typeof o.sort == "number" ? o.sort : 0;
      return l - n;
    }).map((v) => v.id), r = a.indexOf(t), u = a.indexOf(e);
    if (r === -1 || u === -1) return;
    a.splice(r, 1), a.splice(u, 0, t);
    const p = a.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, a, r;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-actions-table-drag-over"));
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
    var w, v, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((w = e.system) == null ? void 0 : w.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, a = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = a ? `<p>${a}</p>` : "", h = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: h,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var i, a;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    var r, u, p;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((u = i.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const h = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((p = (await this.actor.createEmbeddedDocuments("Item", [h]))[0]) == null ? void 0 : p.id) ?? a;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: a,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, h, w, v;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let a = i.id;
    if (((h = i.parent) == null ? void 0 : h.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      a = ((w = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : w.id) ?? a;
    }
    const r = this.actor.system.abilities ?? {}, u = Array.isArray((v = r[e]) == null ? void 0 : v.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    u.includes(a) || u.push(a), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var a, r, u;
    const t = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, h, w, v;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((h = s.dataTransfer) == null ? void 0 : h.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const a = await fromUuid(i.uuid);
    if (!a || a.type !== "MikroChip") return;
    let r = a.id;
    ((w = a.parent) == null ? void 0 : w.id) !== this.actor.id && (r = ((v = (await this.actor.createEmbeddedDocuments("Item", [a.toObject()]))[0]) == null ? void 0 : v.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: a.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let a = Number(i) || 0;
    const r = this._getSkillHealthStatus(s);
    r === 1 ? a -= 6 : r === 2 && (a -= 3);
    const p = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, h = new Roll(p);
    await h.evaluate({ async: !0 });
    const w = h.total >= 18 ? "critical" : h.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: w } },
      rollMode: v
    });
  }
  async _rollMorale() {
    var a;
    const s = Number(((a = this.actor.system.resources) == null ? void 0 : a.morale) ?? 0) || 0;
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
    var y;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, a = this.actor.items.filter((k) => k.type === "Fegyver");
    let r = null;
    t.itemId && (r = a.find((k) => k.id === t.itemId) ?? null);
    const u = r && r.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, w = (((y = r == null ? void 0 : r.system) == null ? void 0 : y.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[w] || 0) || 0, o = p + v, n = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, c = new Roll(n);
    await c.evaluate({ async: !0 });
    const m = c.total >= 18 ? "critical" : c.total <= 3 ? "fumble" : null, f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: m } },
      rollMode: f
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var p, h, w, v, o, l, n, c, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((h = (p = t.items).get) == null ? void 0 : h.call(p, s)) ?? ((v = (w = t.items.contents) == null ? void 0 : w.find) == null ? void 0 : v.call(w, (y) => y.id === s));
    if (!i || i.type !== "Fegyver") return;
    let a = (((o = i.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!a && e && (a = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !a) {
      (f = (n = ui.notifications) == null ? void 0 : n.warn) == null || f.call(n, ((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(a);
    await r.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${i.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
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
  form: foundry.utils.mergeObject(((We = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : We.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((Ye = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Ye.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((Qe = (Je = x(E, E, "DEFAULT_OPTIONS")) == null ? void 0 : Je.window) == null ? void 0 : Qe.contentClasses) ?? [],
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      i(r) && t(r);
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
R(U, "PARTS", foundry.utils.mergeObject(x(U, U, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(U, U, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Xe = x(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : Xe.form) ?? {}, { submitOnChange: !1 })
}));
let me = U;
var Ze;
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, i = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      i(r) && t(r);
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
R(B, "PARTS", foundry.utils.mergeObject(x(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ze = x(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.form) ?? {}, { submitOnChange: !1 })
}));
let pe = B;
var Ve;
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      i(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const u = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
      i(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
R(G, "PARTS", foundry.utils.mergeObject(x(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ve = x(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : Ve.form) ?? {}, { submitOnChange: !0 })
}));
let fe = G;
var et;
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
    const e = this, t = (a) => {
      if (!a) return;
      const r = e._getFormDataForUpdate(a);
      Object.keys(r).length !== 0 && e.document.update(r).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (a) => {
      var r, u, p;
      return a && (((u = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : u.call(r, a)) || e.id && ((p = a.closest) == null ? void 0 : p.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, p, h;
      const r = ((u = a.target) == null ? void 0 : u.form) ?? ((h = (p = a.target) == null ? void 0 : p.closest) == null ? void 0 : h.call(p, "form"));
      i(r) && t(r);
    }, e._votvInput = (a) => {
      var p;
      const r = a.target;
      if ((r == null ? void 0 : r.name) === "name") return;
      const u = (r == null ? void 0 : r.form) ?? ((p = r == null ? void 0 : r.closest) == null ? void 0 : p.call(r, "form"));
      i(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => t(u), 300));
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
R(z, "PARTS", foundry.utils.mergeObject(x(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((et = x(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : et.form) ?? {}, { submitOnChange: !0 })
}));
let ye = z;
const St = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, i, a;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = gt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = bt, CONFIG.Item.dataModels.Pancel = vt, CONFIG.Item.dataModels.MikroChip = kt, CONFIG.Item.dataModels.Kepesseg = ze, CONFIG.Item.dataModels.ability = ze, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (a = CONFIG.Item).typeLabels ?? (a.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", de, {
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
  const A = 500;
  Hooks.on("updateActor", (r, u, p, h) => {
    var k, L, F, O, _;
    const w = r == null ? void 0 : r.id;
    if (!w) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], n = (k = game.actors) == null ? void 0 : k.get(w);
    n != null && n.apps && l.push(...Array.from(n.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const g of c)
      ((L = g.document) == null ? void 0 : L.id) !== w || ((F = g.document) == null ? void 0 : F.documentName) !== "Actor" || ((O = g.constructor) == null ? void 0 : O.name) !== "VoidKarakterSheet" || l.includes(g) || l.push(g);
    if (o && l.some((g) => {
      const C = (g == null ? void 0 : g.form) ?? (g == null ? void 0 : g.element);
      return C && C.contains(v);
    })) return;
    const f = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, y = f && Date.now() - f.at < A ? f.appId : null;
    setTimeout(() => {
      for (const g of l)
        !(g != null && g.rendered) || typeof g.render != "function" || g.id !== y && g.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (A) => {
      var i, a, r, u, p, h;
      if (!((a = (i = A.target) == null ? void 0 : i.closest) != null && a.call(i, "#actors"))) return;
      const s = (u = (r = A.target) == null ? void 0 : r.closest) == null ? void 0 : u.call(r, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((h = game.actors) != null && h.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (A, s, e) => {
  var r, u;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, i = t ?? A.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const a = i ? (u = game.actors) == null ? void 0 : u.get(i) : null;
  !a || a.type !== "Karakter" || A.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (A, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || A.updateSource({
    width: 1920,
    height: 1080,
    "background.src": St,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (A, s, e) => {
  var a, r, u;
  const t = (r = (a = A.flags) == null ? void 0 : a["vacuum-of-the-void"]) == null ? void 0 : r.resultType;
  if (!t) return;
  const i = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  de as V
};
//# sourceMappingURL=vacuum-of-the-void-ZBF58Kal.mjs.map
