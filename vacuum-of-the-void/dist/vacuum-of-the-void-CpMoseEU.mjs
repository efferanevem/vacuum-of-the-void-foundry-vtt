var ct = Object.defineProperty;
var ut = Object.getPrototypeOf;
var dt = Reflect.get;
var mt = (F, s, e) => s in F ? ct(F, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[s] = e;
var R = (F, s, e) => mt(F, typeof s != "symbol" ? s + "" : s, e);
var x = (F, s, e) => dt(ut(F), e, s);
const { HTMLField: pt, NumberField: I, SchemaField: O, StringField: h, BooleanField: j, ArrayField: ae } = foundry.data.fields;
class ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new O({
        name: new h({ required: !1, blank: !0, initial: "" }),
        player: new h({ required: !1, blank: !0, initial: "" }),
        level: new I({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new h({ required: !1, blank: !0, initial: "" }),
        assignment: new h({ required: !1, blank: !0, initial: "" }),
        subAssignment: new h({ required: !1, blank: !0, initial: "" }),
        background: new h({ required: !1, blank: !0, initial: "" }),
        languages: new h({ required: !1, blank: !0, initial: "" })
      }),
      resources: new O({
        health: new O({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new O({
          head: new O({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          torso: new O({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          arms: new O({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          }),
          legs: new O({
            value: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new j({ required: !1, initial: !1 }),
            box2: new j({ required: !1, initial: !1 }),
            box3: new j({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new O({
          head: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new O({
          head: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new I({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new O({
          value: new I({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new I({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new O({
        defense: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new I({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new I({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new O({
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
      weapons: new O({
        slotOrder: new h({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new O({
          name: new h({ required: !1, blank: !0, initial: "" }),
          bonus: new h({ required: !1, blank: !0, initial: "" }),
          damage: new h({ required: !1, blank: !0, initial: "" }),
          itemId: new h({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new O({
        microchips: new O({
          slot1: new O({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          }),
          slot2: new O({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          }),
          slot3: new O({
            itemId: new h({ required: !1, blank: !0, initial: "" }),
            name: new h({ required: !1, blank: !0, initial: "" }),
            active: new j({ required: !1, initial: !1 })
          })
        }),
        equipment: new h({ required: !1, blank: !0, initial: "" }),
        armor: new ae(
          new O({
            name: new h({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new h({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new h({ required: !1, blank: !0, initial: "" }),
            level: new h({ required: !1, blank: !0, initial: "" }),
            other: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ae(
          new O({
            name: new h({ required: !1, blank: !0, initial: "" }),
            quantity: new I({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new h({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new O({
        faji: new O({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new O({
          itemId: new h({ required: !1, blank: !0, initial: "" }),
          name: new h({ required: !1, blank: !0, initial: "" })
        }),
        passive: new O({
          items: new ae(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new O({
          items: new ae(
            new h({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new O({
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
const { NumberField: ue, StringField: He } = foundry.data.fields;
class kt extends foundry.abstract.TypeDataModel {
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
    var i, n, a, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((i = s.querySelector) == null ? void 0 : i.call(s, "form.votv.karakter-sheet")) ?? ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
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
    const n = this.element, a = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (n) {
      u.scrollState = this._saveScrollState(n);
      const m = document.activeElement, f = a.contains(m), b = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      f && b && (u.focus = {
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
    const g = this.element, w = this.form ?? this.element, v = u.scrollState, o = u.focus, l = typeof (v == null ? void 0 : v.formScrollTop) == "number" || typeof (v == null ? void 0 : v.windowScrollTop) == "number", r = () => {
      var m, f;
      if (this._applyScrollState(g, v), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const b = ((m = w.querySelector) == null ? void 0 : m.call(w, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (f = w.querySelector) == null ? void 0 : f.call(w, `[name="${CSS.escape(o.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = o.selectionStart ?? 0, b.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(g, v);
    };
    return (l || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), i = Number(e);
    if (i <= 0 || t <= 0) return 0;
    const n = Math.floor(i / 3), a = Math.floor(2 * i / 3);
    return t <= n ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, i, n;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const u = String(((n = a.system) == null ? void 0 : n.speedPenalty) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, i, n;
    const s = (((i = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : i.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const u = String(((n = a.system) == null ? void 0 : n.protectionBonus) ?? "").trim().replace(",", "."), p = Number(u);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var v, o, l, r, c, m, f, b, k;
    const e = s ?? this.form ?? this.element;
    let t = (v = e == null ? void 0 : e.querySelector) == null ? void 0 : v.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const i = ((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.resources) ?? {}, n = ((c = (r = i.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : c.value) ?? 0, a = ((m = i.currentHealth) == null ? void 0 : m.legs) ?? 0, u = E._healthStatusFromRatio(a, n), p = Number(((k = (b = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : b.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let g;
    u === 0 ? g = 0 : u === 1 ? g = -6 : u === 2 ? g = -3 : g = p;
    const w = this._getTotalArmorSpeedPenalty();
    g += w, t.textContent = String(g);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, u, p, g;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = (Number(((g = (p = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : p.combat) == null ? void 0 : g.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(n);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, u, p, g;
    const e = E.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, i = ((p = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : p.value) ?? 0, n = ((g = t.currentHealth) == null ? void 0 : g[e]) ?? 0;
    return E._healthStatusFromRatio(n, i);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, p, g, w;
    const t = E.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const i = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, n = ((g = (p = i.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : g.value) ?? 0, a = ((w = i.currentHealth) == null ? void 0 : w[t]) ?? 0;
    return E._healthStatusFromRatio(a, n);
  }
  async _prepareContext(s) {
    var Te, Oe, De, _e, Le, Ae, Fe, Ne, Ce, Ee, Pe, $e, xe, je, Me, Ke, Re, Be;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((De = (Oe = (Te = this.actor.system) == null ? void 0 : Te.resources) == null ? void 0 : Oe.stress) == null ? void 0 : De.value) || 0;
    e.stressOver10 = t > 10;
    const i = this.actor.system.resources ?? {}, n = i.hitLocations ?? {}, a = i.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of u) {
      const S = ((_e = n[d]) == null ? void 0 : _e.value) ?? 0, q = a[d] ?? 0;
      e.computedHealthStatus[d] = E._healthStatusFromRatio(q, S);
    }
    const p = (Number(a.head) || 0) === 0, w = ["torso", "arms", "legs"].filter((d) => (Number(a[d]) || 0) === 0).length;
    e.showDeathSkull = p || w >= 2;
    const v = e.computedHealthStatus.legs ?? 3, o = Number(((Ae = (Le = this.actor.system) == null ? void 0 : Le.combat) == null ? void 0 : Ae.givenSpeed) ?? 0) || 0;
    let l;
    v === 0 ? l = 0 : v === 1 ? l = -6 : v === 2 ? l = -3 : l = o;
    const r = this._getTotalArmorSpeedPenalty();
    l += r, e.effectiveGivenSpeed = l;
    const m = (Number(((Ne = (Fe = this.actor.system) == null ? void 0 : Fe.combat) == null ? void 0 : Ne.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
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
    const b = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = (b.slotOrder ?? "").trim(), A = L ? L.split(/\s*,\s*/).filter((d) => k.includes(d)) : [], D = (Ce = this.actor.system.gear) == null ? void 0 : Ce.microchips, _ = D && typeof D == "object" && !Array.isArray(D) ? D : {}, y = (((Ee = _.slot1) == null ? void 0 : Ee.itemId) ?? "").trim(), N = (((Pe = _.slot2) == null ? void 0 : Pe.itemId) ?? "").trim(), K = ((($e = _.slot3) == null ? void 0 : $e.itemId) ?? "").trim(), tt = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, S) => {
      const q = typeof d.sort == "number" ? d.sort : 0, T = typeof S.sort == "number" ? S.sort : 0;
      return q - T;
    }).map((d) => {
      var Y, Q, re, te, se, ie;
      const S = d.type === "Fegyver", q = d.type === "MikroChip";
      let T = 0, C = "", M = null;
      for (let X = 0; X < A.length; X++) {
        const V = A[X];
        if ((((Y = b[V]) == null ? void 0 : Y.itemId) ?? "") === d.id) {
          T = X + 1, C = ((Q = b[V]) == null ? void 0 : Q.bonus) ?? "", M = V;
          break;
        }
      }
      let P = null;
      q && (y === d.id ? P = "slot1" : N === d.id ? P = "slot2" : K === d.id && (P = "slot3"));
      const ee = S && ((re = d.system) != null && re.damage) ? d.system.damage : "", J = S && typeof ((te = d.system) == null ? void 0 : te.range) == "string" ? (d.system.range || "").trim() : "", W = M ? Number((se = b[M]) == null ? void 0 : se.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: S,
        slotAssignment: T,
        slotBonus: C,
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
    const he = "— Nincs fegyver —", st = A.filter((d) => {
      const q = ((b[d] ?? {}).itemId ?? "").trim();
      return q ? !!oe.find((C) => C.id === q) : !1;
    });
    e.weaponSlots = st.map((d, S) => {
      const q = b[d] ?? {}, T = (q.itemId ?? "").trim(), C = ge.find((M) => M.id === T);
      return {
        slotKey: d,
        itemId: T,
        slotNum: S + 1,
        displayName: (C == null ? void 0 : C.name) || q.name || he,
        img: (C == null ? void 0 : C.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? ""
      };
    });
    const it = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, rt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = oe.map((d) => {
      var X, V, Ue;
      const S = d.id;
      let q = null, T = {};
      for (const le of A)
        if ((((X = b[le]) == null ? void 0 : X.itemId) ?? "").trim() === S) {
          q = le, T = b[le] ?? {};
          break;
        }
      const C = !!q, M = ((V = d.system) == null ? void 0 : V.equipped) !== void 0 && ((Ue = d.system) == null ? void 0 : Ue.equipped) !== null ? !!d.system.equipped : C, P = (d == null ? void 0 : d.system) ?? {}, ee = typeof P.range == "string" ? (P.range || "").trim() : "", J = P.type ?? "", W = (it[J] ?? J) || "—", Y = P.size ?? "", Q = (rt[Y] ?? Y) || "", re = [W, Q].filter(Boolean).join(", ") || W || "—", te = W === "Lövedékes", se = P.quantity, ie = se != null ? String(se).trim() : "1";
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
      var T, C;
      const S = (d == null ? void 0 : d.system) ?? {}, q = ((T = d.system) == null ? void 0 : T.equipped) !== void 0 && ((C = d.system) == null ? void 0 : C.equipped) !== null ? !!d.system.equipped : !1;
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
      const S = _[d] ?? {}, q = (S.itemId ?? "").trim(), T = be.find((C) => C.id === q);
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
      const T = !!q, C = ((W = d == null ? void 0 : d.system) == null ? void 0 : W.abilityType) ?? "", M = C === "active" ? "Aktív" : C === "passive" ? "Passzív" : C || "—", P = (((Y = d == null ? void 0 : d.system) == null ? void 0 : Y.description) ?? "").trim(), ee = P ? P.length > 60 ? P.slice(0, 57) + "…" : P : "—";
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
    const ve = this.actor.system.abilities ?? {}, ot = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).map((d) => {
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
      const S = ve[d] ?? {}, q = (S.itemId ?? "").trim(), T = q ? ke.get(q) : null, C = (T == null ? void 0 : T.description) ?? "", M = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: q,
        displayName: (T == null ? void 0 : T.name) || S.name || lt,
        img: (T == null ? void 0 : T.img) || "",
        description: C,
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
      const r = (o.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DyWzMj8m.mjs");
      c(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var c, m, f;
      o.preventDefault(), o.stopPropagation();
      const l = o.currentTarget;
      let r = (l.dataset.itemId ?? "").trim();
      if (!r) {
        const b = (l.dataset.slot ?? "").trim();
        if (!b) return;
        r = (((((m = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : m.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      r && await this._rollWeaponDamage(r, ((f = l.dataset.slot) == null ? void 0 : f.trim()) ?? "");
    }), !this.isEditable) return;
    const i = (o) => {
      var c;
      const l = o ? o.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const r = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", r > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', i);
    const n = (v = e.querySelector) == null ? void 0 : v.call(e, 'input[name="system.resources.stress.value"]');
    n && i({ currentTarget: n }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
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
      const l = o.currentTarget, r = l.dataset.skill, c = ((f = l.textContent) == null ? void 0 : f.trim()) || r, { openRollSheetForSkill: m } = await import("./roll-sheet-DyWzMj8m.mjs");
      m(this.actor, r, c);
    }), t.on("click", ".karakter-roll-morale-d8", (o) => {
      o.preventDefault(), this._rollMorale();
    });
    const a = (o, l) => {
      var m;
      const r = o.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
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
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), a(o.currentTarget, o);
    }), t.on("change", ".karakter-item-qty", async (o) => {
      const l = o.currentTarget, r = l.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c) return;
      let m = Number(l.value);
      (!Number.isFinite(m) || m < 0) && (m = 0), await c.update({ "system.quantity": m });
    }), t.on("click", ".karakter-item-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const r = o.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor, m = c.items.get(r), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, k = (b.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = k ? k.split(/\s*,\s*/).filter((_) => L.includes(_)) : [], D = A.find((_) => {
          var y;
          return (((y = b[_]) == null ? void 0 : y.itemId) ?? "").trim() === r;
        });
        if (D) {
          const _ = A.filter((y) => y !== D);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${D}.itemId`] = "", f[`system.weapons.${D}.name`] = "", f[`system.weapons.${D}.damage`] = "", f[`system.weapons.${D}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (o) => {
      var D, _;
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((y) => b.includes(y)) : [], L = k.find((y) => {
        var N;
        return (((N = m[y]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (L) return;
        let y = k.find((K) => {
          var B;
          return !((B = m[K]) != null && B.itemId);
        });
        const N = new Set(k);
        if (!y) {
          const K = b.find((B) => !N.has(B));
          if (!K) return;
          y = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${y}.itemId`]: r,
          [`system.weapons.${y}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${y}.damage`]: ((D = c == null ? void 0 : c.system) == null ? void 0 : D.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((_ = c == null ? void 0 : c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (L) {
        const y = k.filter((N) => N !== L);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${L}.itemId`]: "",
          [`system.weapons.${L}.name`]: "",
          [`system.weapons.${L}.damage`]: "",
          [`system.weapons.${L}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (o) => {
      o.preventDefault();
      const l = o.currentTarget;
      if (l.disabled) return;
      const r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && r && r.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (o) => {
      var y;
      o.preventDefault();
      const l = o.currentTarget, r = l.closest(".karakter-microchip-slot-select-wrap"), c = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display"), m = c == null ? void 0 : c.dataset.slot;
      if (!m) return;
      const f = (l.dataset.itemId ?? "").trim(), b = (l.dataset.itemName ?? ((y = l.textContent) == null ? void 0 : y.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (l.dataset.itemImg ?? "").trim(), L = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display-text");
      L && (L.textContent = b);
      let A = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-thumb");
      k ? (A || (A = document.createElement("img"), A.className = "karakter-microchip-slot-thumb", A.alt = "", c == null || c.insertBefore(A, L)), A.src = k, A.style.display = "") : A && A.remove(), r == null || r.classList.remove("karakter-microchip-slot-open");
      const D = f ? this.actor.items.get(f) : null, _ = {
        [`system.gear.microchips.${m}.itemId`]: f,
        [`system.gear.microchips.${m}.name`]: (D == null ? void 0 : D.name) ?? ""
      };
      f && (_[`system.gear.microchips.${m}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (o) => {
      $(o.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("change", ".karakter-microchip-slot-active", (o) => {
      const l = o.currentTarget.dataset.slot;
      if (!l) return;
      const r = o.currentTarget.checked;
      this.actor.update({ [`system.gear.microchips.${l}.active`]: r });
    }), t.find(".karakter-microchip-slot").each((o, l) => {
      const r = l.dataset.slot;
      l.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, r));
    }), t.find(".karakter-ability-slot-single").each((o, l) => {
      const r = l.dataset.slot;
      r && (l.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, r)), l.addEventListener("dragleave", (c) => {
        var m;
        return (m = c.currentTarget) == null ? void 0 : m.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (c) => {
        var m;
        (m = c.currentTarget) == null || m.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((o, l) => {
      const r = l.dataset.area;
      r && (l.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, r)), l.addEventListener("dragleave", (c) => {
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
      var b;
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.area, r = o.currentTarget.dataset.itemId;
      if (!l || !r) return;
      const c = this.actor.system.abilities ?? {}, f = (Array.isArray((b = c[l]) == null ? void 0 : b.items) ? c[l].items.slice() : []).filter((k) => k !== r);
      await this.actor.update({ [`system.abilities.${l}.items`]: f });
    }), t.on("click", ".karakter-ability-open", (o) => {
      var m;
      o.preventDefault();
      const r = o.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      o.preventDefault();
      const r = o.currentTarget.dataset.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (o) => {
      this._resizeWeaponQuantityInput(o.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((o, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (o) => {
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = (l.value ?? "").trim();
      await c.update({ "system.quantity": m }), setTimeout(() => {
        const f = this.form ?? this.element, b = f == null ? void 0 : f.querySelector(`.karakter-weapon-quantity-input[data-item-id="${r}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (o) => {
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (o) => {
      var D, _;
      const l = o.currentTarget, r = (l.dataset.itemId ?? "").trim();
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "Fegyver") return;
      const m = this.actor.system.weapons ?? {}, f = (m.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = f ? f.split(/\s*,\s*/).filter((y) => b.includes(y)) : [], L = k.find((y) => {
        var N;
        return (((N = m[y]) == null ? void 0 : N.itemId) ?? "").trim() === r;
      }) ?? null;
      if (l.checked) {
        if (L) return;
        let y = k.find((K) => {
          var B;
          return !((B = m[K]) != null && B.itemId);
        });
        const N = new Set(k);
        if (!y) {
          const K = b.find((B) => !N.has(B));
          if (!K) return;
          y = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${y}.itemId`]: r,
          [`system.weapons.${y}.name`]: c.name ?? "",
          [`system.weapons.${y}.damage`]: ((D = c.system) == null ? void 0 : D.damage) ?? "",
          [`system.weapons.${y}.bonus`]: ((_ = c.system) == null ? void 0 : _.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (L) {
        const y = k.filter((N) => N !== L);
        await this.actor.update({
          "system.weapons.slotOrder": y.join(","),
          [`system.weapons.${L}.itemId`]: "",
          [`system.weapons.${L}.name`]: "",
          [`system.weapons.${L}.damage`]: "",
          [`system.weapons.${L}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const r = o.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor, m = c.items.get(r), f = {};
      if ((m == null ? void 0 : m.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, k = (b.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = k ? k.split(/\s*,\s*/).filter((_) => L.includes(_)) : [], D = A.find((_) => {
          var y;
          return (((y = b[_]) == null ? void 0 : y.itemId) ?? "").trim() === r;
        });
        if (D) {
          const _ = A.filter((y) => y !== D);
          f["system.weapons.slotOrder"] = _.join(","), f[`system.weapons.${D}.itemId`] = "", f[`system.weapons.${D}.name`] = "", f[`system.weapons.${D}.damage`] = "", f[`system.weapons.${D}.bonus`] = "";
        }
      }
      Object.keys(f).length && await c.update(f), await c.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      if (o.preventDefault(), !o.altKey) return;
      const l = o.currentTarget.dataset.itemId;
      if (!l) return;
      const r = this.actor.items.get(l);
      !r || r.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-equipment-add-row", async (o) => {
      var r, c;
      if (o.preventDefault(), o.currentTarget.dataset.gearArray === "generalItems") {
        const m = Array.isArray((c = (r = this.actor.system) == null ? void 0 : r.gear) == null ? void 0 : c.generalItems) ? [...this.actor.system.gear.generalItems] : [];
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
      const r = Array.isArray((m = (c = this.actor.system) == null ? void 0 : c.gear) == null ? void 0 : m.generalItems) ? [...this.actor.system.gear.generalItems] : [];
      r.splice(l, 1), await this.actor.update({ "system.gear.generalItems": r });
    });
    const u = this, p = (o) => {
      var c, m, f, b;
      if (!o) return;
      const l = u._getFormDataForUpdate(o);
      if (Object.keys(l).length === 0) return;
      const r = ((m = (c = l.system) == null ? void 0 : c.resources) == null ? void 0 : m.currentHealth) != null || ((b = (f = l.system) == null ? void 0 : f.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(l).then(() => {
        r && setTimeout(() => u.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, g = (o) => {
      var l, r, c;
      return o && (((r = (l = u.element) == null ? void 0 : l.contains) == null ? void 0 : r.call(l, o)) || u.id && ((c = o.closest) == null ? void 0 : c.call(o, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (o) => {
      const l = o.target;
      if (!l || !l.form) return;
      const r = l.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const c = l.form;
      g(c) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, p, g;
    const e = {};
    for (const w of s.elements) {
      if (!w.name || w.disabled || w.type === "radio" && !w.checked || w.name.startsWith("system.resources.healthStatus.")) continue;
      let v;
      w.type === "checkbox" ? v = w.checked : w.type === "number" ? v = w.value === "" ? 0 : Number(w.value) : v = w.value ?? "", foundry.utils.setProperty(e, w.name, v);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), i = t.hitLocations ?? {}, n = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const w of a) {
      const v = ((g = i[w]) == null ? void 0 : g.value) ?? 0, o = n[w] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${w}`, E._healthStatusFromRatio(o, v));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, i, n, a, u, p, g, w, v, o;
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
          let c = r.id;
          if (((i = r.parent) == null ? void 0 : i.id) !== this.actor.id) {
            const L = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            c = ((n = (await this.actor.createEmbeddedDocuments("Item", [L]))[0]) == null ? void 0 : n.id) ?? c;
          }
          const m = (((a = r.system) == null ? void 0 : a.kind) ?? "passive").toString(), f = this.actor.system.abilities ?? {};
          if (m === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": c,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (m === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": c,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const b = m === "active" ? "active" : "passive", k = Array.isArray((u = f[b]) == null ? void 0 : u.items) ? f[b].items.slice() : Array.isArray(f[b]) ? f[b].slice() : [];
          k.includes(c) || k.push(c), await this.actor.update({ [`system.abilities.${b}.items`]: k });
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
          const c = this.actor, m = ((g = r.parent) == null ? void 0 : g.id) !== c.id;
          let f = r.id;
          if (m) {
            const b = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            f = ((w = (await c.createEmbeddedDocuments("Item", [b]))[0]) == null ? void 0 : w.id) ?? f;
          }
          if (m) {
            const b = ((v = c.system) == null ? void 0 : v.weapons) ?? {}, k = (b.slotOrder ?? "").trim(), L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = k ? k.split(/\s*,\s*/).filter((_) => L.includes(_)) : [], D = A.filter((_) => {
              var y;
              return (((y = b[_]) == null ? void 0 : y.itemId) ?? "").trim() === f;
            });
            if (D.length > 0) {
              const y = {
                "system.weapons.slotOrder": A.filter((N) => !D.includes(N)).join(",")
              };
              for (const N of D)
                y[`system.weapons.${N}.itemId`] = "", y[`system.weapons.${N}.name`] = "", y[`system.weapons.${N}.damage`] = "", y[`system.weapons.${N}.bonus`] = "";
              await c.update(y);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const c = this.actor;
          if (((o = r.parent) == null ? void 0 : o.id) !== c.id) {
            const m = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await c.createEmbeddedDocuments("Item", [m]);
          }
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var n, a, u;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, p, g, w, v, o;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = s.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "Fegyver") return;
    if (((w = n.parent) == null ? void 0 : w.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { system: { ...n.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
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
    var g, w;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((w = s.dataTransfer) == null ? void 0 : w.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const n = this.actor.items.contents.slice().sort((v, o) => {
      const l = typeof v.sort == "number" ? v.sort : 0, r = typeof o.sort == "number" ? o.sort : 0;
      return l - r;
    }).map((v) => v.id), a = n.indexOf(t), u = n.indexOf(e);
    if (a === -1 || u === -1) return;
    n.splice(a, 1), n.splice(u, 0, t);
    const p = n.map((v, o) => ({
      _id: v,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var i, n, a;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-actions-table-drag-over"));
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
    const t = ((w = e.system) == null ? void 0 : w.kind) ?? "passive", i = Number(((v = e.system) == null ? void 0 : v.kp) ?? 0) || 0, n = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = i > 0 ? `<p><strong>KP:</strong> ${i}</p>` : "", p = n ? `<p>${n}</p>` : "", g = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: g,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var i, n;
    const e = ((i = s.dataTransfer) == null ? void 0 : i.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
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
    var a, u, p;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let n = i.id;
    if (((u = i.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const g = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      n = ((p = (await this.actor.createEmbeddedDocuments("Item", [g]))[0]) == null ? void 0 : p.id) ?? n;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: n,
      [`system.abilities.${e}.name`]: i.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var i;
    this._parseAbilityDrop(s) && (s.preventDefault(), (i = s.currentTarget) == null || i.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, g, w, v;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const i = await fromUuid(t.uuid);
    if (!i || i.type !== "Kepesseg" && i.type !== "ability") return;
    let n = i.id;
    if (((g = i.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(i.toObject(), { type: "Kepesseg" });
      n = ((w = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : w.id) ?? n;
    }
    const a = this.actor.system.abilities ?? {}, u = Array.isArray((v = a[e]) == null ? void 0 : v.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    u.includes(n) || u.push(n), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var n, a, u;
    const t = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (i == null ? void 0 : i.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, p, g, w, v;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((g = s.dataTransfer) == null ? void 0 : g.getData("application/json")) || "";
    let i;
    try {
      i = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((i == null ? void 0 : i.type) !== "Item" || !(i != null && i.uuid)) return;
    const n = await fromUuid(i.uuid);
    if (!n || n.type !== "MikroChip") return;
    let a = n.id;
    ((w = n.parent) == null ? void 0 : w.id) !== this.actor.id && (a = ((v = (await this.actor.createEmbeddedDocuments("Item", [n.toObject()]))[0]) == null ? void 0 : v.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: n.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const i = (this.actor.system.skills ?? {})[s] ?? 0;
    let n = Number(i) || 0;
    const a = this._getSkillHealthStatus(s);
    a === 1 ? n -= 6 : a === 2 && (n -= 3);
    const p = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, g = new Roll(p);
    await g.evaluate({ async: !0 });
    const w = g.total >= 18 ? "critical" : g.total <= 3 ? "fumble" : null, v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: w } },
      rollMode: v
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
    const i = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": i });
  }
  async _rollWeapon(s) {
    var b;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, i = this.actor.system.skills ?? {}, n = this.actor.items.filter((k) => k.type === "Fegyver");
    let a = null;
    t.itemId && (a = n.find((k) => k.id === t.itemId) ?? null);
    const u = a && a.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, w = (((b = a == null ? void 0 : a.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", v = Number(i[w] || 0) || 0, o = p + v, r = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, c = new Roll(r);
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
    var p, g, w, v, o, l, r, c, m, f;
    const t = this.actor;
    if (!t) return;
    let i = ((g = (p = t.items).get) == null ? void 0 : g.call(p, s)) ?? ((v = (w = t.items.contents) == null ? void 0 : w.find) == null ? void 0 : v.call(w, (b) => b.id === s));
    if (!i || i.type !== "Fegyver") return;
    let n = (((o = i.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!n && e && (n = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !n) {
      (f = (r = ui.notifications) == null ? void 0 : r.warn) == null || f.call(r, ((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(n);
    await a.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
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
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, i = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(a) && t(a);
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
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, i = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(a) && t(a);
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
R(H, "PARTS", foundry.utils.mergeObject(x(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(x(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ze = x(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : Ze.form) ?? {}, { submitOnChange: !1 })
}));
let pe = H;
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
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, i = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(a) && t(a);
    }, e._votvInput = (n) => {
      var p;
      const a = n.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const u = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
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
    const e = this, t = (n) => {
      if (!n) return;
      const a = e._getFormDataForUpdate(n);
      Object.keys(a).length !== 0 && e.document.update(a).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, i = (n) => {
      var a, u, p;
      return n && (((u = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : u.call(a, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var u, p, g;
      const a = ((u = n.target) == null ? void 0 : u.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      i(a) && t(a);
    }, e._votvInput = (n) => {
      var p;
      const a = n.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const u = (a == null ? void 0 : a.form) ?? ((p = a == null ? void 0 : a.closest) == null ? void 0 : p.call(a, "form"));
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
  var s, e, t, i, n;
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
  }, (i = CONFIG.Actor).typeLabels ?? (i.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (n = CONFIG.Item).typeLabels ?? (n.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", de, {
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
  Hooks.on("updateActor", (a, u, p, g) => {
    var k, L, A, D, _;
    const w = a == null ? void 0 : a.id;
    if (!w) return;
    const v = document.activeElement, o = v && (v.tagName === "INPUT" && v.type !== "checkbox" && v.type !== "radio" || v.tagName === "TEXTAREA" || v.isContentEditable), l = [], r = (k = game.actors) == null ? void 0 : k.get(w);
    r != null && r.apps && l.push(...Array.from(r.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const y of c)
      ((L = y.document) == null ? void 0 : L.id) !== w || ((A = y.document) == null ? void 0 : A.documentName) !== "Actor" || ((D = y.constructor) == null ? void 0 : D.name) !== "VoidKarakterSheet" || l.includes(y) || l.push(y);
    if (o && l.some((y) => {
      const N = (y == null ? void 0 : y.form) ?? (y == null ? void 0 : y.element);
      return N && N.contains(v);
    })) return;
    const f = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, b = f && Date.now() - f.at < F ? f.appId : null;
    setTimeout(() => {
      for (const y of l)
        !(y != null && y.rendered) || typeof y.render != "function" || y.id !== b && y.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  document.body.addEventListener(
    "dragstart",
    (F) => {
      var i, n, a, u, p, g;
      if (!((n = (i = F.target) == null ? void 0 : i.closest) != null && n.call(i, "#actors"))) return;
      const s = (u = (a = F.target) == null ? void 0 : a.closest) == null ? void 0 : u.call(a, "[data-document-id]"), e = (p = s == null ? void 0 : s.getAttribute) == null ? void 0 : p.call(s, "data-document-id");
      if (!e) return;
      const t = e.includes(".") ? e.split(".").pop() : e;
      t && ((g = game.actors) != null && g.get(t)) && (game.votv._dragSourceActorId = t);
    },
    !0
  );
});
Hooks.on("preCreateToken", (F, s, e) => {
  var a, u;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, i = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const n = i ? (u = game.actors) == null ? void 0 : u.get(i) : null;
  !n || n.type !== "Karakter" || F.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (F, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || F.updateSource({
    width: 1920,
    height: 1080,
    "background.src": St,
    backgroundColor: "#000000"
  });
});
Hooks.on("renderChatMessageHTML", (F, s, e) => {
  var n, a, u;
  const t = (a = (n = F.flags) == null ? void 0 : n["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const i = (u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, ".dice-roll");
  i && i.classList.add(`votv-${t}`);
});
export {
  de as V
};
//# sourceMappingURL=vacuum-of-the-void-CpMoseEU.mjs.map
