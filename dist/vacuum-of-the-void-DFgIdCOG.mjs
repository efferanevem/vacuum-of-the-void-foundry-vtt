var wt = Object.defineProperty;
var It = Object.getPrototypeOf;
var St = Reflect.get;
var Tt = (F, i, e) => i in F ? wt(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var R = (F, i, e) => Tt(F, typeof i != "symbol" ? i + "" : i, e);
var E = (F, i, e) => St(It(F), e, i);
const { HTMLField: _t, NumberField: _, SchemaField: C, StringField: b, BooleanField: U, ArrayField: le } = foundry.data.fields;
class qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new C({
        name: new b({ required: !1, blank: !0, initial: "" }),
        player: new b({ required: !1, blank: !0, initial: "" }),
        level: new _({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new b({ required: !1, blank: !0, initial: "" }),
        assignment: new b({ required: !1, blank: !0, initial: "" }),
        subAssignment: new b({ required: !1, blank: !0, initial: "" }),
        background: new b({ required: !1, blank: !0, initial: "" }),
        languages: new b({ required: !1, blank: !0, initial: "" })
      }),
      resources: new C({
        health: new C({
          value: new _({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new _({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new C({
          head: new C({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new C({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new C({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new C({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new C({
          head: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new _({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new C({
          head: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new C({
          value: new _({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new _({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new _({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new C({
        defense: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new _({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new C({
        deception: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new _({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new C({
        slotOrder: new b({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new C({
          name: new b({ required: !1, blank: !0, initial: "" }),
          bonus: new b({ required: !1, blank: !0, initial: "" }),
          damage: new b({ required: !1, blank: !0, initial: "" }),
          itemId: new b({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new C({
        microchips: new C({
          slot1: new C({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new C({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new C({
            itemId: new b({ required: !1, blank: !0, initial: "" }),
            name: new b({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          })
        }),
        equipment: new b({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new C({
            name: new b({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new b({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new b({ required: !1, blank: !0, initial: "" }),
            level: new b({ required: !1, blank: !0, initial: "" }),
            other: new b({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new C({
            name: new b({ required: !1, blank: !0, initial: "" }),
            quantity: new _({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new b({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new C({
        faji: new C({
          itemId: new b({ required: !1, blank: !0, initial: "" }),
          name: new b({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new C({
          itemId: new b({ required: !1, blank: !0, initial: "" }),
          name: new b({ required: !1, blank: !0, initial: "" })
        }),
        passive: new C({
          items: new le(
            new b({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new C({
          items: new le(
            new b({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new C({
        biography: new _t({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: Ot } = foundry.data.fields;
class Dt extends qt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ot({
        body: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Ct, NumberField: jt, StringField: se } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Ct({ required: !1, initial: !1 }),
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
const { BooleanField: Pt, StringField: ce } = foundry.data.fields;
class Ft extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Pt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ce({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ce({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new ce({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ce({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: ye, StringField: Xe } = foundry.data.fields;
class Et extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Xe({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Xe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new ye({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ye({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ye({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: At, StringField: Ze } = foundry.data.fields;
class Ve extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Ze({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Ze({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new At({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: et } = foundry.data.fields;
class Nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new et({ required: !1, blank: !0, initial: "" }),
      quantity: new et({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: $t } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new $t({ required: !1, blank: !0, initial: "" })
    };
  }
}
var tt, it, st, rt;
const N = class N extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var r, p, s, n;
    if (!i) return { form: null, windowContent: null };
    const e = ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv.karakter-sheet")) ?? ((p = i.querySelector) == null ? void 0 : p.call(i, "form.votv")) ?? null, t = ((s = i.querySelector) == null ? void 0 : s.call(i, ".votv-scroll")) ?? ((n = i.querySelector) == null ? void 0 : n.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(i = !1, e = {}) {
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, s = this.form ?? this.element;
    let n = { scrollState: {}, focus: null };
    if (p) {
      n.scrollState = this._saveScrollState(p);
      const d = document.activeElement, g = s.contains(d), v = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      g && v && (n.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const f = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, y = this.form ?? this.element, h = n.scrollState, a = n.focus, c = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", o = () => {
      var d, g;
      if (this._applyScrollState(m, h), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const v = ((d = y.querySelector) == null ? void 0 : d.call(y, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (g = y.querySelector) == null ? void 0 : g.call(y, `[name="${CSS.escape(a.name)}"]`) : null);
        v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && (v.focus({ preventScroll: !0 }), typeof v.selectionStart == "number" && (v.selectionStart = a.selectionStart ?? 0, v.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (c || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const p = Math.floor(r / 3), s = Math.floor(2 * r / 3);
    return t <= p ? 1 : t <= s ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, r, p;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (s) => {
        var n;
        return s.type === "Pancel" && ((n = s.system) == null ? void 0 : n.equipped) === !0;
      }
    );
    let e = 0;
    for (const s of i) {
      const n = String(((p = s.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), f = Number(n);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, p;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (s) => {
        var n;
        return s.type === "Pancel" && ((n = s.system) == null ? void 0 : n.equipped) === !0;
      }
    );
    let e = 0;
    for (const s of i) {
      const n = String(((p = s.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), f = Number(n);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, a, c, o, l, d, g, v, S;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((c = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : c.resources) ?? {}, p = ((l = (o = r.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : l.value) ?? 0, s = ((d = r.currentHealth) == null ? void 0 : d.legs) ?? 0, n = N._healthStatusFromRatio(s, p), f = Number(((S = (v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let m;
    n === 0 ? m = 0 : n === 1 ? m = -6 : n === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var s, n, f, m;
    const e = i ?? this.form ?? this.element;
    let t = (s = e == null ? void 0 : e.querySelector) == null ? void 0 : s.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const p = (Number(((m = (f = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(p);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var s, n, f, m;
    const e = N.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((s = this.actor.system) == null ? void 0 : s.resources) ?? {}, r = ((f = (n = t.hitLocations) == null ? void 0 : n[e]) == null ? void 0 : f.value) ?? 0, p = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return N._healthStatusFromRatio(p, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var n, f, m, y;
    const t = N.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((n = i == null ? void 0 : i.system) == null ? void 0 : n.resources) ?? {}, p = ((m = (f = r.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, s = ((y = r.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return N._healthStatusFromRatio(s, p);
  }
  async _prepareContext(i) {
    var Fe, Ee, Ae, Ne, $e, xe, Me, je, Re, Ke, Ue, He, Be, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (Ee = (Fe = this.actor.system) == null ? void 0 : Fe.resources) == null ? void 0 : Ee.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, p = r.hitLocations ?? {}, s = r.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const u of n) {
      const I = ((Ne = p[u]) == null ? void 0 : Ne.value) ?? 0, w = s[u] ?? 0;
      e.computedHealthStatus[u] = N._healthStatusFromRatio(w, I);
    }
    const f = (Number(s.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((u) => (Number(s[u]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, a = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let c;
    h === 0 ? c = 0 : h === 1 ? c = -6 : h === 2 ? c = -3 : c = a;
    const o = this._getTotalArmorSpeedPenalty();
    c += o, e.effectiveGivenSpeed = c;
    const d = (Number(((je = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : je.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: c, givenProtection: d } },
      { inplace: !1 }
    );
    const g = N.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [u, I] of Object.entries(g)) {
      const w = e.computedHealthStatus[I];
      e.skillHealthStatus[u] = w, e.skillDisabled[u] = w === 0 ? " disabled" : "", e.skillHasHealthTint[u] = !0;
    }
    const v = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = (v.slotOrder ?? "").trim(), L = q ? q.split(/\s*,\s*/).filter((u) => S.includes(u)) : [], P = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, O = P && typeof P == "object" && !Array.isArray(P) ? P : {}, k = (((Ke = O.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), A = (((Ue = O.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), x = (((He = O.slot3) == null ? void 0 : He.itemId) ?? "").trim(), mt = this.actor.items.contents.filter((u) => u.type !== "Kepesseg" && u.type !== "ability").slice().sort((u, I) => {
      const w = typeof u.sort == "number" ? u.sort : 0, T = typeof I.sort == "number" ? I.sort : 0;
      return w - T;
    }).map((u) => {
      var X, ee, te, Z, V, ae;
      const I = u.type === "Fegyver", w = u.type === "MikroChip";
      let T = 0, D = "", j = null;
      for (let ie = 0; ie < L.length; ie++) {
        const re = L[ie];
        if ((((X = v[re]) == null ? void 0 : X.itemId) ?? "") === u.id) {
          T = ie + 1, D = ((ee = v[re]) == null ? void 0 : ee.bonus) ?? "", j = re;
          break;
        }
      }
      let K = null;
      w && (k === u.id ? K = "slot1" : A === u.id ? K = "slot2" : x === u.id && (K = "slot3"));
      const ne = I && ((te = u.system) != null && te.damage) ? u.system.damage : "", Q = I && typeof ((Z = u.system) == null ? void 0 : Z.range) == "string" ? (u.system.range || "").trim() : "", J = j ? Number((V = v[j]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        type: u.type,
        isWeapon: I,
        slotAssignment: T,
        slotBonus: D,
        slotKey: j,
        microchipSlotKey: K,
        isEquipped: !!(j || K),
        damage: ne,
        rangeStr: Q,
        slotBonusNum: J,
        quantity: Number(((ae = u.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = mt;
    const ue = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((u) => u.type === "Fegyver"), Se = ue.map((u) => ({ id: u.id, name: u.name, img: u.img }));
    e.weaponItems = Se;
    const Te = "— Nincs fegyver —", pt = L.filter((u) => {
      const w = ((v[u] ?? {}).itemId ?? "").trim();
      return w ? !!ue.find((D) => D.id === w) : !1;
    });
    e.weaponSlots = pt.map((u, I) => {
      const w = v[u] ?? {}, T = (w.itemId ?? "").trim(), D = Se.find((j) => j.id === T);
      return {
        slotKey: u,
        itemId: T,
        slotNum: I + 1,
        displayName: (D == null ? void 0 : D.name) || w.name || Te,
        img: (D == null ? void 0 : D.img) || "",
        bonus: Number(w.bonus) || 0,
        damage: w.damage ?? ""
      };
    });
    const ft = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, yt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((u) => {
      var ie, re, Je;
      const I = u.id;
      let w = null, T = {};
      for (const pe of L)
        if ((((ie = v[pe]) == null ? void 0 : ie.itemId) ?? "").trim() === I) {
          w = pe, T = v[pe] ?? {};
          break;
        }
      const D = !!w, j = ((re = u.system) == null ? void 0 : re.equipped) !== void 0 && ((Je = u.system) == null ? void 0 : Je.equipped) !== null ? !!u.system.equipped : D, K = (u == null ? void 0 : u.system) ?? {}, ne = typeof K.range == "string" ? (K.range || "").trim() : "", Q = K.type ?? "", J = (ft[Q] ?? Q) || "—", X = K.size ?? "", ee = (yt[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = K.quantity, ae = V != null ? String(V).trim() : "1";
      return {
        slotKey: w ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? Te,
        img: (u == null ? void 0 : u.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: T.damage ?? K.damage ?? "",
        rangeStr: ne || "—",
        typeLabel: J,
        typeAndSize: te,
        quantity: ae,
        quantityDisplay: Z ? ae : "—",
        isProjectile: Z,
        equipped: j,
        special: (K.special ?? "").trim() || "—"
      };
    });
    const gt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((u) => u.type === "Pancel");
    e.armorTable = gt.map((u) => {
      var T, D;
      const I = (u == null ? void 0 : u.system) ?? {}, w = ((T = u.system) == null ? void 0 : T.equipped) !== void 0 && ((D = u.system) == null ? void 0 : D.equipped) !== null ? !!u.system.equipped : !1;
      return {
        itemId: u.id,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: w
      };
    });
    const ht = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((u) => u.type === "Targy");
    e.itemsTable = ht.map((u) => {
      const I = (u == null ? void 0 : u.system) ?? {}, w = (I.description ?? "").trim(), T = w ? w.length > 60 ? w.slice(0, 57) + "…" : w : "—", D = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: u.id,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        quantity: D,
        description: T
      };
    });
    const vt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((u) => u.type === "Egyeb");
    e.egyebList = vt.map((u) => {
      const w = (((u == null ? void 0 : u.system) ?? {}).description ?? "").trim(), T = w ? w.length > 80 ? w.slice(0, 77) + "…" : w : "";
      return {
        itemId: u.id,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        description: T
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((u) => u.type === "MikroChip"), oe = de.map((u) => ({ id: u.id, name: u.name, img: u.img })), _e = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], me = (u) => {
      var w, T, D;
      const I = [];
      return u !== 1 && I.push((((w = O.slot1) == null ? void 0 : w.itemId) ?? "").trim()), u !== 2 && I.push((((T = O.slot2) == null ? void 0 : T.itemId) ?? "").trim()), u !== 3 && I.push((((D = O.slot3) == null ? void 0 : D.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((u) => !me(1).includes(u.id)), e.microchipItemsSlot2 = oe.filter((u) => !me(2).includes(u.id)), e.microchipItemsSlot3 = oe.filter((u) => !me(3).includes(u.id)), e.microchipSlots = qe.map((u) => {
      const I = O[u] ?? {}, w = (I.itemId ?? "").trim(), T = de.find((D) => D.id === w);
      return {
        slotKey: u,
        itemId: w,
        displayName: (T == null ? void 0 : T.name) || I.name || _e,
        img: (T == null ? void 0 : T.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((u) => {
      const I = `slot${u}`, w = O[I] ?? {}, T = (w.itemId ?? "").trim(), D = oe.find((j) => j.id === T);
      e[`microchip${u}ItemId`] = T, e[`microchip${u}DisplayName`] = (D == null ? void 0 : D.name) || w.name || _e, e[`microchip${u}Img`] = (D == null ? void 0 : D.img) || "";
    }), e.microchipsTable = de.map((u) => {
      var X, ee, te, Z;
      const I = u.id;
      let w = null;
      for (const V of qe)
        if ((((X = O[V]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          w = V;
          break;
        }
      const T = !!w, D = ((ee = u == null ? void 0 : u.system) == null ? void 0 : ee.abilityType) ?? "", j = D === "active" ? "Aktív" : D === "passive" ? "Passzív" : D || "—", K = D === "active", ne = Number((te = u == null ? void 0 : u.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(u.system.replaceCost) : 0, Q = (((Z = u == null ? void 0 : u.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (u == null ? void 0 : u.name) ?? "—",
        img: (u == null ? void 0 : u.img) ?? "",
        typeLabel: j,
        description: J,
        kp: ne,
        isActive: K,
        slotKey: w ?? "",
        equipped: T
      };
    });
    const Oe = this.actor.system.abilities ?? {}, bt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((u) => {
      var I, w, T;
      return {
        id: u.id,
        name: u.name,
        img: u.img,
        kind: ((I = u.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((w = u.system) == null ? void 0 : w.description) ?? "",
        kp: Number(((T = u.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), De = new Map(bt.map((u) => [u.id, u])), kt = "— Nincs képesség —", Ce = (u) => {
      const I = Oe[u] ?? {}, w = (I.itemId ?? "").trim(), T = w ? De.get(w) : null, D = (T == null ? void 0 : T.description) ?? "", j = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: w,
        displayName: (T == null ? void 0 : T.name) || I.name || kt,
        img: (T == null ? void 0 : T.img) || "",
        description: D,
        kp: j
      };
    };
    e.abilityFajiSlot = Ce("faji"), e.abilityHatterSlot = Ce("hatter");
    const Le = (u) => {
      const I = Oe[u];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, Pe = (u) => u.map((I) => {
      const w = De.get(I);
      return w ? {
        id: w.id,
        name: w.name,
        img: w.img,
        description: w.description,
        kp: w.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Pe(Le("passive")), e.abilityActiveList = Pe(Le("active")), e;
  }
  _attachFrameListeners(i) {
    var y, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (a) => {
      a.preventDefault(), a.stopPropagation();
      const o = (a.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-qylllMAo.mjs");
      l(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var l, d, g;
      a.preventDefault(), a.stopPropagation();
      const c = a.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((d = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : d.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((g = c.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (a) => {
      var l;
      const c = a ? a.currentTarget : (l = e.querySelector) == null ? void 0 : l.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const p = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    p && r({ currentTarget: p }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (a) => {
      var l, d, g;
      a.preventDefault(), a.stopPropagation();
      const c = ((g = (d = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : d.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var g;
      a.preventDefault();
      const c = a.currentTarget, o = c.dataset.skill, l = ((g = c.textContent) == null ? void 0 : g.trim()) || o, { openRollSheetForSkill: d } = await import("./roll-sheet-qylllMAo.mjs");
      d(this.actor, o, l);
    }), t.on("click", ".karakter-roll-morale-d8", (a) => {
      a.preventDefault(), this._rollMorale();
    });
    const s = (a, c) => {
      var d;
      const o = a.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (l) {
        if (a.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const g = a.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (d = l.sheet) == null || d.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), s(a.currentTarget, a);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), s(a.currentTarget, a);
    }), t.on("change", ".karakter-item-qty", async (a) => {
      const c = a.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l) return;
      let d = Number(c.value);
      (!Number.isFinite(d) || d < 0) && (d = 0), await l.update({ "system.quantity": d });
    }), t.on("click", ".karakter-item-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const o = a.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor, d = l.items.get(o), g = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
        const v = l.system.weapons ?? {}, S = (v.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = S ? S.split(/\s*,\s*/).filter((O) => q.includes(O)) : [], P = L.find((O) => {
          var k;
          return (((k = v[O]) == null ? void 0 : k.itemId) ?? "").trim() === o;
        });
        if (P) {
          const O = L.filter((k) => k !== P);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${P}.itemId`] = "", g[`system.weapons.${P}.name`] = "", g[`system.weapons.${P}.damage`] = "", g[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(g).length && await l.update(g), await l.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (a) => {
      var P, O;
      const c = a.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const d = this.actor.system.weapons ?? {}, g = (d.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = g ? g.split(/\s*,\s*/).filter((k) => v.includes(k)) : [], q = S.find((k) => {
        var A;
        return (((A = d[k]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (q) return;
        let k = S.find((x) => {
          var M;
          return !((M = d[x]) != null && M.itemId);
        });
        const A = new Set(S);
        if (!k) {
          const x = v.find((M) => !A.has(M));
          if (!x) return;
          k = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${k}.itemId`]: o,
          [`system.weapons.${k}.name`]: (l == null ? void 0 : l.name) ?? "",
          [`system.weapons.${k}.damage`]: ((P = l == null ? void 0 : l.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((O = l == null ? void 0 : l.system) == null ? void 0 : O.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (q) {
        const k = S.filter((A) => A !== q);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: "",
          [`system.weapons.${q}.name`]: "",
          [`system.weapons.${q}.damage`]: "",
          [`system.weapons.${q}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (a) => {
      a.preventDefault();
      const c = a.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), l = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !l && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (a) => {
      var k;
      a.preventDefault();
      const c = a.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), l = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), d = l == null ? void 0 : l.dataset.slot;
      if (!d) return;
      const g = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((k = c.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (c.dataset.itemImg ?? "").trim(), q = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      q && (q.textContent = v);
      let L = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      S ? (L || (L = document.createElement("img"), L.className = "karakter-microchip-slot-thumb", L.alt = "", l == null || l.insertBefore(L, q)), L.src = S, L.style.display = "") : L && L.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const P = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${d}.itemId`]: g,
        [`system.gear.microchips.${d}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      g && (O[`system.gear.microchips.${d}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (a) => {
      $(a.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var v, S;
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const l = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((q) => {
        var L;
        return (((L = l[q]) == null ? void 0 : L.itemId) ?? "").trim() === c;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (a) => {
      const c = a.currentTarget.dataset.slot;
      if (!c) return;
      const o = a.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((a, c) => {
      const o = c.dataset.slot;
      c.addEventListener("dragover", (l) => this._onMicrochipSlotDragOver(l, o)), c.addEventListener("dragleave", (l) => {
        var d;
        return (d = l.currentTarget) == null ? void 0 : d.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (l) => this._onMicrochipSlotDrop(l, o));
    }), t.find(".karakter-ability-slot-single").each((a, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (l) => this._onAbilitySingleDragOver(l, o)), c.addEventListener("dragleave", (l) => {
        var d;
        return (d = l.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (l) => {
        var d;
        (d = l.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((a, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (l) => this._onAbilityAreaDragOver(l, o)), c.addEventListener("dragleave", (l) => {
        var d;
        return (d = l.currentTarget) == null ? void 0 : d.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (l) => {
        var d;
        (d = l.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var v;
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.area, o = a.currentTarget.dataset.itemId;
      if (!c || !o) return;
      const l = this.actor.system.abilities ?? {}, g = (Array.isArray((v = l[c]) == null ? void 0 : v.items) ? l[c].items.slice() : []).filter((S) => S !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (a) => {
      var d;
      a.preventDefault();
      const o = a.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      (d = l == null ? void 0 : l.sheet) == null || d.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      a.preventDefault();
      const o = a.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      a.preventDefault();
      const o = a.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      l && (l.type === "Kepesseg" || l.type === "ability" ? await this._postAbilityToChat(o) : (l.type === "MikroChip" || l.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (a) => {
      this._resizeWeaponQuantityInput(a.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((a, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (a) => {
      const c = a.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const d = (c.value ?? "").trim();
      await l.update({ "system.quantity": d }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (a) => {
      const c = a.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      !l || l.type !== "Pancel" || (await l.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (a) => {
      var P, O;
      const c = a.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Fegyver") return;
      const d = this.actor.system.weapons ?? {}, g = (d.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = g ? g.split(/\s*,\s*/).filter((k) => v.includes(k)) : [], q = S.find((k) => {
        var A;
        return (((A = d[k]) == null ? void 0 : A.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (q) return;
        let k = S.find((x) => {
          var M;
          return !((M = d[x]) != null && M.itemId);
        });
        const A = new Set(S);
        if (!k) {
          const x = v.find((M) => !A.has(M));
          if (!x) return;
          k = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${k}.itemId`]: o,
          [`system.weapons.${k}.name`]: l.name ?? "",
          [`system.weapons.${k}.damage`]: ((P = l.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((O = l.system) == null ? void 0 : O.bonus) ?? ""
        }), await l.update({ "system.equipped": !0 });
      } else if (q) {
        const k = S.filter((A) => A !== q);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: "",
          [`system.weapons.${q}.name`]: "",
          [`system.weapons.${q}.damage`]: "",
          [`system.weapons.${q}.bonus`]: ""
        }), await l.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const o = a.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor, d = l.items.get(o), g = {};
      if ((d == null ? void 0 : d.type) === "Fegyver") {
        const v = l.system.weapons ?? {}, S = (v.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = S ? S.split(/\s*,\s*/).filter((O) => q.includes(O)) : [], P = L.find((O) => {
          var k;
          return (((k = v[O]) == null ? void 0 : k.itemId) ?? "").trim() === o;
        });
        if (P) {
          const O = L.filter((k) => k !== P);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${P}.itemId`] = "", g[`system.weapons.${P}.name`] = "", g[`system.weapons.${P}.damage`] = "", g[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(g).length && await l.update(g), await l.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (a) => {
      this._resizeWeaponQuantityInput(a.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((a, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (a) => {
      const c = a.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "Targy") return;
      const d = (c.value ?? "").trim();
      await l.update({ "system.quantity": d }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    });
    const n = this, f = (a) => {
      var l, d, g, v;
      if (!a) return;
      const c = n._getFormDataForUpdate(a);
      if (Object.keys(c).length === 0) return;
      const o = ((d = (l = c.system) == null ? void 0 : l.resources) == null ? void 0 : d.currentHealth) != null || ((v = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      n.actor.update(c).then(() => {
        o && setTimeout(() => n.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, m = (a) => {
      var c, o, l;
      return a && (((o = (c = n.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, a)) || n.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(n.id)}`)));
    };
    n._votvBlur = (a) => {
      const c = a.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const l = c.form;
      m(l) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), f(l));
    }, document.body.addEventListener("blur", n._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var n, f, m;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((n = this.actor.system) == null ? void 0 : n.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), r = t.hitLocations ?? {}, p = t.currentHealth ?? {}, s = ["head", "torso", "arms", "legs"];
    for (const y of s) {
      const h = ((m = r[y]) == null ? void 0 : m.value) ?? 0, a = p[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, N._healthStatusFromRatio(a, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, r, p, s, n, f, m, y, h, a, c, o;
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const d of Object.values(e))
          if (typeof d == "string" && d.includes(".") && d.startsWith("Item.")) {
            l = d;
            break;
          }
      }
      if (l) {
        const d = await fromUuid(l);
        if (d && d.documentName === "Item" && (d.type === "Kepesseg" || d.type === "ability")) {
          let g = d.id;
          if (((r = d.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const P = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
            g = ((p = (await this.actor.createEmbeddedDocuments("Item", [P]))[0]) == null ? void 0 : p.id) ?? g;
          }
          const v = (((s = d.system) == null ? void 0 : s.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
          if (v === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": d.name
            });
            return;
          }
          if (v === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": d.name
            });
            return;
          }
          const q = v === "active" ? "active" : "passive", L = Array.isArray((n = S[q]) == null ? void 0 : n.items) ? S[q].items.slice() : Array.isArray(S[q]) ? S[q].slice() : [];
          L.includes(g) || L.push(g), await this.actor.update({ [`system.abilities.${q}.items`]: L });
          return;
        }
      }
    }
    if (e) {
      let l = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
      if (!l && typeof e == "object") {
        for (const d of Object.values(e))
          if (typeof d == "string" && d.includes(".") && d.startsWith("Item.")) {
            l = d;
            break;
          }
      }
      if (l) {
        const d = await fromUuid(l);
        if (d && d.documentName === "Item" && d.type === "Fegyver") {
          const g = this.actor, v = ((m = d.parent) == null ? void 0 : m.id) !== g.id;
          let S = d.id;
          if (v) {
            const q = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
            S = ((y = (await g.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : y.id) ?? S;
          }
          if (v) {
            const q = ((h = g.system) == null ? void 0 : h.weapons) ?? {}, L = (q.slotOrder ?? "").trim(), P = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = L ? L.split(/\s*,\s*/).filter((A) => P.includes(A)) : [], k = O.filter((A) => {
              var x;
              return (((x = q[A]) == null ? void 0 : x.itemId) ?? "").trim() === S;
            });
            if (k.length > 0) {
              const x = {
                "system.weapons.slotOrder": O.filter((M) => !k.includes(M)).join(",")
              };
              for (const M of k)
                x[`system.weapons.${M}.itemId`] = "", x[`system.weapons.${M}.name`] = "", x[`system.weapons.${M}.damage`] = "", x[`system.weapons.${M}.bonus`] = "";
              await g.update(x);
            }
          }
          return;
        }
        if (d && d.documentName === "Item" && d.type === "Pancel") {
          const g = this.actor;
          if (((a = d.parent) == null ? void 0 : a.id) !== g.id) {
            const v = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
            await g.createEmbeddedDocuments("Item", [v]);
          }
          return;
        }
        if (d && d.documentName === "Item" && d.type === "MikroChip") {
          const g = this.actor;
          ((c = d.parent) == null ? void 0 : c.id) !== g.id && await g.createEmbeddedDocuments("Item", [d.toObject()]);
          return;
        }
        if (d && d.documentName === "Item" && (d.type === "Targy" || d.type === "Egyeb")) {
          const g = this.actor;
          ((o = d.parent) == null ? void 0 : o.id) !== g.id && await g.createEmbeddedDocuments("Item", [d.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var p, s, n;
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var n, f, m, y, h, a;
    i.preventDefault(), i.stopPropagation(), (n = i.currentTarget) == null || n.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const p = await fromUuid(r.uuid);
    if (!p || p.type !== "Fegyver") return;
    if (((y = p.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [c]);
      return;
    }
    const s = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: s,
      [`system.weapons.${e}.name`]: p.name,
      [`system.weapons.${e}.damage`]: ((h = p.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((a = p.system) == null ? void 0 : a.bonus) ?? ""
    }), await p.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (r = i.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(i, e) {
    var t;
    (t = i.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(i, e) {
    var m, y;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const p = this.actor.items.contents.slice().sort((h, a) => {
      const c = typeof h.sort == "number" ? h.sort : 0, o = typeof a.sort == "number" ? a.sort : 0;
      return c - o;
    }).map((h) => h.id), s = p.indexOf(t), n = p.indexOf(e);
    if (s === -1 || n === -1) return;
    p.splice(s, 1), p.splice(n, 0, t);
    const f = p.map((h, a) => ({
      _id: h,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(i) {
    var r, p, s;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-actions-table-drag-over"));
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
    const r = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, r)}px`;
  }
  async _postItemToChat(i) {
    var n, f;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((n = e.system) == null ? void 0 : n.description) ?? "").trim();
    let r;
    e.type === "MikroChip" ? r = ((((f = e.system) == null ? void 0 : f.abilityType) ?? "passive") === "active" ? "Aktív" : "Passzív") + " Mikro-Chip" : r = "Egyéb Információ";
    const p = t ? `<p>${t}</p>` : "", s = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: s,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var y, h, a;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", r = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, p = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), s = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", n = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", f = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${s}</p>
      ${n}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var r, p;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var s, n, f;
    i.preventDefault(), (s = i.currentTarget) == null || s.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let p = r.id;
    if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? p;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: p,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var f, m, y, h;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let p = r.id;
    if (((m = r.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      p = ((y = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : y.id) ?? p;
    }
    const s = this.actor.system.abilities ?? {}, n = Array.isArray((h = s[e]) == null ? void 0 : h.items) ? s[e].items.slice() : Array.isArray(s[e]) ? s[e].slice() : [];
    n.includes(p) || n.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: n });
  }
  _onMicrochipSlotDragOver(i, e) {
    var p, s, n;
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var n, f, m, y, h;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const p = await fromUuid(r.uuid);
    if (!p || p.type !== "MikroChip") return;
    let s = p.id;
    ((y = p.parent) == null ? void 0 : y.id) !== this.actor.id && (s = ((h = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : h.id) ?? s), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: s,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const r = (this.actor.system.skills ?? {})[i] ?? 0;
    let p = Number(r) || 0;
    const s = this._getSkillHealthStatus(i);
    s === 1 ? p -= 6 : s === 2 && (p -= 3);
    const f = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const y = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, h = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y } },
      rollMode: h
    });
  }
  async _rollMorale() {
    var p;
    const i = Number(((p = this.actor.system.resources) == null ? void 0 : p.morale) ?? 0) || 0;
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
    const r = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollWeapon(i) {
    var v;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, r = this.actor.system.skills ?? {}, p = this.actor.items.filter((S) => S.type === "Fegyver");
    let s = null;
    t.itemId && (s = p.find((S) => S.id === t.itemId) ?? null);
    const n = s && s.name || t.name || `Fegyver (${i})`, f = Number(t.bonus || 0) || 0, y = (((v = s == null ? void 0 : s.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(r[y] || 0) || 0, a = f + h, o = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, l = new Roll(o);
    await l.evaluate({ async: !0 });
    const d = l.total >= 18 ? "critical" : l.total <= 3 ? "fumble" : null, g = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${n} – találat`,
      flags: { "vacuum-of-the-void": { resultType: d } },
      rollMode: g
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var f, m, y, h, a, c, o, l, d, g;
    const t = this.actor;
    if (!t) return;
    let r = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (v) => v.id === i));
    if (!r || r.type !== "Fegyver") return;
    let p = (((a = r.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!p && e && (p = (((((c = t.system) == null ? void 0 : c.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (g = (o = ui.notifications) == null ? void 0 : o.warn) == null || g.call(o, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const s = new Roll(p);
    await s.evaluate({ async: !0 });
    const n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return s.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: n
    });
  }
};
R(N, "PARTS", foundry.utils.mergeObject(E(N, N, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(N, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(N, N, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((tt = E(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((it = E(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : it.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((rt = (st = E(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : st.window) == null ? void 0 : rt.contentClasses) ?? [],
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
let ge = N;
var nt;
const H = class H extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (s) => {
      var m, y, h, a, c, o, l;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((a = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : a.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const n = ((l = (o = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const n = e._getFormDataForUpdate(s);
      Object.keys(n).length !== 0 && e.document.update(n).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, p = (s) => {
      var n, f, m;
      return s && (((f = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : f.call(n, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const n = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(n) && r(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
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
R(H, "PARTS", foundry.utils.mergeObject(E(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((nt = E(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
}));
let he = H;
var at;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (s) => {
      var m, y, h, a, c, o, l;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((a = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : a.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const n = ((l = (o = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const n = e._getFormDataForUpdate(s);
      Object.keys(n).length !== 0 && e.document.update(n).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, p = (s) => {
      var n, f, m;
      return s && (((f = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : f.call(n, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const n = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(n) && r(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(B, "PARTS", foundry.utils.mergeObject(E(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((at = E(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
}));
let ve = B;
var ot;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (s) => {
      var m, y, h, a, c, o, l;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((a = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : a.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const n = ((l = (o = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const n = e._getFormDataForUpdate(s);
      Object.keys(n).length !== 0 && e.document.update(n).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, p = (s) => {
      var n, f, m;
      return s && (((f = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : f.call(n, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const n = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(n) && r(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(G, "PARTS", foundry.utils.mergeObject(E(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ot = E(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ot.form) ?? {}, { submitOnChange: !1 })
}));
let be = G;
var lt;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (s) => {
      var m, y, h, a, c, o, l;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((a = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : a.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const n = ((l = (o = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const n = e._getFormDataForUpdate(s);
      Object.keys(n).length !== 0 && e.document.update(n).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, p = (s) => {
      var n, f, m;
      return s && (((f = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : f.call(n, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const n = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(n) && r(n);
    }, e._votvInput = (s) => {
      var m;
      const n = s.target;
      if ((n == null ? void 0 : n.name) === "name") return;
      const f = (n == null ? void 0 : n.form) ?? ((m = n == null ? void 0 : n.closest) == null ? void 0 : m.call(n, "form"));
      p(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => r(f), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
R(z, "PARTS", foundry.utils.mergeObject(E(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((lt = E(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : lt.form) ?? {}, { submitOnChange: !0 })
}));
let ke = z;
var ct;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (s) => {
      var m, y, h, a, c, o, l;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((a = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : a.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const n = ((l = (o = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const n = e._getFormDataForUpdate(s);
      Object.keys(n).length !== 0 && e.document.update(n).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, p = (s) => {
      var n, f, m;
      return s && (((f = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : f.call(n, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const n = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(n) && r(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(W, "PARTS", foundry.utils.mergeObject(E(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), R(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ct = E(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ct.form) ?? {}, { submitOnChange: !1 })
}));
let we = W;
var ut;
const Y = class Y extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(i) {
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (s) => {
      var m, y, h, a, c, o, l;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((a = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : a.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const n = ((l = (o = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const n = e._getFormDataForUpdate(s);
      Object.keys(n).length !== 0 && e.document.update(n).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, p = (s) => {
      var n, f, m;
      return s && (((f = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : f.call(n, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const n = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(n) && r(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    const e = {};
    for (const t of i.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
R(Y, "PARTS", foundry.utils.mergeObject(E(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), R(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ut = E(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 })
}));
let Ie = Y;
const dt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, r, p;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Dt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Lt, CONFIG.Item.dataModels.Pancel = Ft, CONFIG.Item.dataModels.MikroChip = Et, CONFIG.Item.dataModels.Kepesseg = Ve, CONFIG.Item.dataModels.ability = Ve, CONFIG.Item.dataModels.Targy = Nt, CONFIG.Item.dataModels.Egyeb = xt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (p = CONFIG.Item).typeLabels ?? (p.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ge, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ve, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ke, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ie, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const F = 500;
  Hooks.on("updateActor", (s, n, f, m) => {
    var S, q, L, P, O;
    const y = s == null ? void 0 : s.id;
    if (!y) return;
    const h = document.activeElement, a = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), c = [], o = (S = game.actors) == null ? void 0 : S.get(y);
    o != null && o.apps && c.push(...Array.from(o.apps));
    const l = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of l)
      ((q = k.document) == null ? void 0 : q.id) !== y || ((L = k.document) == null ? void 0 : L.documentName) !== "Actor" || ((P = k.constructor) == null ? void 0 : P.name) !== "VoidKarakterSheet" || c.includes(k) || c.push(k);
    if (a && c.some((k) => {
      const A = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return A && A.contains(h);
    })) return;
    const g = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, v = g && Date.now() - g.at < F ? g.appId : null;
    setTimeout(() => {
      for (const k of c)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== v && k.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  var F, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var s, n, f, m, y, h;
      if (!((n = (s = e.target) == null ? void 0 : s.closest) != null && n.call(s, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), r = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!r) return;
      const p = r.includes(".") ? r.split(".").pop() : r;
      p && ((h = game.actors) != null && h.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (F = game.user) != null && F.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
    var e, t;
    try {
      const r = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(r != null && r.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const p = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: dt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, s = await r.create(p);
      s && console.log("Vacuum of the Void | Default scene created:", s.id);
    } catch (r) {
      console.warn("Vacuum of the Void | Default scene creation failed:", r);
    }
  })();
});
Hooks.on("preCreateToken", (F, i, e) => {
  var s, n;
  const t = (s = game.votv) == null ? void 0 : s._dragSourceActorId, r = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = r ? (n = game.actors) == null ? void 0 : n.get(r) : null;
  !p || p.type !== "Karakter" || F.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (F, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || F.updateSource({
    width: 3840,
    height: 2160,
    "background.src": dt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (F, i, e) => {
  var p, s, n;
  const t = (s = (p = F.flags) == null ? void 0 : p["vacuum-of-the-void"]) == null ? void 0 : s.resultType;
  if (!t) return;
  const r = (n = i == null ? void 0 : i.querySelector) == null ? void 0 : n.call(i, ".dice-roll");
  r && r.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-DFgIdCOG.mjs.map
