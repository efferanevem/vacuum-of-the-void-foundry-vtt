var kt = Object.defineProperty;
var It = Object.getPrototypeOf;
var St = Reflect.get;
var Tt = (A, i, e) => i in A ? kt(A, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : A[i] = e;
var R = (A, i, e) => Tt(A, typeof i != "symbol" ? i + "" : i, e);
var E = (A, i, e) => St(It(A), e, i);
const { HTMLField: qt, NumberField: q, SchemaField: L, StringField: v, BooleanField: U, ArrayField: le } = foundry.data.fields;
class Ot extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new L({
        name: new v({ required: !1, blank: !0, initial: "" }),
        player: new v({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new v({ required: !1, blank: !0, initial: "" }),
        assignment: new v({ required: !1, blank: !0, initial: "" }),
        subAssignment: new v({ required: !1, blank: !0, initial: "" }),
        background: new v({ required: !1, blank: !0, initial: "" }),
        languages: new v({ required: !1, blank: !0, initial: "" })
      }),
      resources: new L({
        health: new L({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new L({
          head: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new L({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new L({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new L({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new L({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new L({
        defense: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new L({
        deception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new L({
        slotOrder: new v({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new L({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new L({
        microchips: new L({
          slot1: new L({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new L({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new L({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          })
        }),
        equipment: new v({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new L({
            name: new v({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new v({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new v({ required: !1, blank: !0, initial: "" }),
            level: new v({ required: !1, blank: !0, initial: "" }),
            other: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new L({
            name: new v({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new L({
        faji: new L({
          itemId: new v({ required: !1, blank: !0, initial: "" }),
          name: new v({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new L({
          itemId: new v({ required: !1, blank: !0, initial: "" }),
          name: new v({ required: !1, blank: !0, initial: "" })
        }),
        passive: new L({
          items: new le(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new L({
          items: new le(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new L({
        biography: new qt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: Dt } = foundry.data.fields;
class _t extends Ot {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Dt({
        body: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Lt, NumberField: jt, StringField: se } = foundry.data.fields;
class Ct extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Lt({ required: !1, initial: !1 }),
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
const { BooleanField: Ft, StringField: ce } = foundry.data.fields;
class At extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ft({ required: !1, initial: !1 }),
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
const { NumberField: Pt, StringField: Ze } = foundry.data.fields;
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
      kp: new Pt({
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
    var s, r, a, o;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv")) ?? null, t = ((a = i.querySelector) == null ? void 0 : a.call(i, ".votv-scroll")) ?? ((o = i.querySelector) == null ? void 0 : o.call(i, ".window-content")) ?? null;
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
    var m;
    const t = (m = game.votv) == null ? void 0 : m._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const r = this.element, a = this.form ?? this.element;
    let o = { scrollState: {}, focus: null };
    if (r) {
      o.scrollState = this._saveScrollState(r);
      const p = document.activeElement, g = a.contains(p), b = p && (p.tagName === "INPUT" && p.type !== "checkbox" && p.type !== "radio" || p.tagName === "TEXTAREA");
      g && b && (o.focus = {
        name: p.name || null,
        id: p.id || null,
        selectionStart: "selectionStart" in p ? p.selectionStart : 0,
        selectionEnd: "selectionEnd" in p ? p.selectionEnd : 0
      });
    }
    const u = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const f = this.element, y = this.form ?? this.element, h = o.scrollState, n = o.focus, d = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", c = () => {
      var p, g;
      if (this._applyScrollState(f, h), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const b = ((p = y.querySelector) == null ? void 0 : p.call(y, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (g = y.querySelector) == null ? void 0 : g.call(y, `[name="${CSS.escape(n.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = n.selectionStart ?? 0, b.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(f, h);
    };
    return (d || n) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const r = Math.floor(s / 3), a = Math.floor(2 * s / 3);
    return t <= r ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, r;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var o;
        return a.type === "Pancel" && ((o = a.system) == null ? void 0 : o.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const o = String(((r = a.system) == null ? void 0 : r.speedPenalty) ?? "").trim().replace(",", "."), u = Number(o);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, r;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (a) => {
        var o;
        return a.type === "Pancel" && ((o = a.system) == null ? void 0 : o.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of i) {
      const o = String(((r = a.system) == null ? void 0 : r.protectionBonus) ?? "").trim().replace(",", "."), u = Number(o);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, n, d, c, m, p, g, b, S;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((d = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : d.resources) ?? {}, r = ((m = (c = s.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : m.value) ?? 0, a = ((p = s.currentHealth) == null ? void 0 : p.legs) ?? 0, o = N._healthStatusFromRatio(a, r), u = Number(((S = (b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let f;
    o === 0 ? f = 0 : o === 1 ? f = -6 : o === 2 ? f = -3 : f = u;
    const y = this._getTotalArmorSpeedPenalty();
    f += y, t.textContent = String(f);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var a, o, u, f;
    const e = i ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const r = (Number(((f = (u = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : u.combat) == null ? void 0 : f.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var a, o, u, f;
    const e = N.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, s = ((u = (o = t.hitLocations) == null ? void 0 : o[e]) == null ? void 0 : u.value) ?? 0, r = ((f = t.currentHealth) == null ? void 0 : f[e]) ?? 0;
    return N._healthStatusFromRatio(r, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var o, u, f, y;
    const t = N.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((o = i == null ? void 0 : i.system) == null ? void 0 : o.resources) ?? {}, r = ((f = (u = s.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : f.value) ?? 0, a = ((y = s.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return N._healthStatusFromRatio(a, r);
  }
  async _prepareContext(i) {
    var Ae, Ee, Pe, Ne, $e, xe, Me, je, Re, Ke, Ue, He, Be, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Pe = (Ee = (Ae = this.actor.system) == null ? void 0 : Ae.resources) == null ? void 0 : Ee.stress) == null ? void 0 : Pe.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, r = s.hitLocations ?? {}, a = s.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const l of o) {
      const I = ((Ne = r[l]) == null ? void 0 : Ne.value) ?? 0, k = a[l] ?? 0;
      e.computedHealthStatus[l] = N._healthStatusFromRatio(k, I);
    }
    const u = (Number(a.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((l) => (Number(a[l]) || 0) === 0).length;
    e.showDeathSkull = u || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, n = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let d;
    h === 0 ? d = 0 : h === 1 ? d = -6 : h === 2 ? d = -3 : d = n;
    const c = this._getTotalArmorSpeedPenalty();
    d += c, e.effectiveGivenSpeed = d;
    const p = (Number(((je = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : je.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: d, givenProtection: p } },
      { inplace: !1 }
    );
    const g = N.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [l, I] of Object.entries(g)) {
      const k = e.computedHealthStatus[I];
      e.skillHealthStatus[l] = k, e.skillDisabled[l] = k === 0 ? " disabled" : "", e.skillHasHealthTint[l] = !0;
    }
    const b = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = (b.slotOrder ?? "").trim(), C = O ? O.split(/\s*,\s*/).filter((l) => S.includes(l)) : [], F = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, D = F && typeof F == "object" && !Array.isArray(F) ? F : {}, w = (((Ke = D.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), P = (((Ue = D.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), x = (((He = D.slot3) == null ? void 0 : He.itemId) ?? "").trim(), mt = this.actor.items.contents.filter((l) => l.type !== "Kepesseg" && l.type !== "ability").slice().sort((l, I) => {
      const k = typeof l.sort == "number" ? l.sort : 0, T = typeof I.sort == "number" ? I.sort : 0;
      return k - T;
    }).map((l) => {
      var X, ee, te, Z, V, ne;
      const I = l.type === "Fegyver", k = l.type === "MikroChip";
      let T = 0, _ = "", j = null;
      for (let ie = 0; ie < C.length; ie++) {
        const re = C[ie];
        if ((((X = b[re]) == null ? void 0 : X.itemId) ?? "") === l.id) {
          T = ie + 1, _ = ((ee = b[re]) == null ? void 0 : ee.bonus) ?? "", j = re;
          break;
        }
      }
      let K = null;
      k && (w === l.id ? K = "slot1" : P === l.id ? K = "slot2" : x === l.id && (K = "slot3"));
      const ae = I && ((te = l.system) != null && te.damage) ? l.system.damage : "", Q = I && typeof ((Z = l.system) == null ? void 0 : Z.range) == "string" ? (l.system.range || "").trim() : "", J = j ? Number((V = b[j]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: l.id,
        name: l.name,
        img: l.img,
        type: l.type,
        isWeapon: I,
        slotAssignment: T,
        slotBonus: _,
        slotKey: j,
        microchipSlotKey: K,
        isEquipped: !!(j || K),
        damage: ae,
        rangeStr: Q,
        slotBonusNum: J,
        quantity: Number(((ne = l.system) == null ? void 0 : ne.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = mt;
    const ue = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((l) => l.type === "Fegyver"), Se = ue.map((l) => ({ id: l.id, name: l.name, img: l.img }));
    e.weaponItems = Se;
    const Te = "— Nincs fegyver —", pt = C.filter((l) => {
      const k = ((b[l] ?? {}).itemId ?? "").trim();
      return k ? !!ue.find((_) => _.id === k) : !1;
    });
    e.weaponSlots = pt.map((l, I) => {
      const k = b[l] ?? {}, T = (k.itemId ?? "").trim(), _ = Se.find((j) => j.id === T);
      return {
        slotKey: l,
        itemId: T,
        slotNum: I + 1,
        displayName: (_ == null ? void 0 : _.name) || k.name || Te,
        img: (_ == null ? void 0 : _.img) || "",
        bonus: Number(k.bonus) || 0,
        damage: k.damage ?? ""
      };
    });
    const ft = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, yt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((l) => {
      var ie, re, Je;
      const I = l.id;
      let k = null, T = {};
      for (const pe of C)
        if ((((ie = b[pe]) == null ? void 0 : ie.itemId) ?? "").trim() === I) {
          k = pe, T = b[pe] ?? {};
          break;
        }
      const _ = !!k, j = ((re = l.system) == null ? void 0 : re.equipped) !== void 0 && ((Je = l.system) == null ? void 0 : Je.equipped) !== null ? !!l.system.equipped : _, K = (l == null ? void 0 : l.system) ?? {}, ae = typeof K.range == "string" ? (K.range || "").trim() : "", Q = K.type ?? "", J = (ft[Q] ?? Q) || "—", X = K.size ?? "", ee = (yt[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = K.quantity, ne = V != null ? String(V).trim() : "1";
      return {
        slotKey: k ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (l == null ? void 0 : l.name) ?? Te,
        img: (l == null ? void 0 : l.img) ?? "",
        bonus: String(T.bonus ?? "").trim() || (j ? "0" : "—"),
        damage: T.damage ?? K.damage ?? "",
        rangeStr: ae || "—",
        typeLabel: J,
        typeAndSize: te,
        quantity: ne,
        quantityDisplay: Z ? ne : "—",
        isProjectile: Z,
        equipped: j,
        special: (K.special ?? "").trim() || "—"
      };
    });
    const gt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((l) => l.type === "Pancel");
    e.armorTable = gt.map((l) => {
      var T, _;
      const I = (l == null ? void 0 : l.system) ?? {}, k = ((T = l.system) == null ? void 0 : T.equipped) !== void 0 && ((_ = l.system) == null ? void 0 : _.equipped) !== null ? !!l.system.equipped : !1;
      return {
        itemId: l.id,
        actorId: this.actor.id,
        name: (l == null ? void 0 : l.name) ?? "—",
        img: (l == null ? void 0 : l.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: k
      };
    });
    const ht = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((l) => l.type === "Targy");
    e.itemsTable = ht.map((l) => {
      const I = (l == null ? void 0 : l.system) ?? {}, k = (I.description ?? "").trim(), T = k ? k.length > 60 ? k.slice(0, 57) + "…" : k : "—", _ = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: l.id,
        actorId: this.actor.id,
        name: (l == null ? void 0 : l.name) ?? "—",
        img: (l == null ? void 0 : l.img) ?? "",
        quantity: _,
        description: T
      };
    });
    const bt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((l) => l.type === "Egyeb");
    e.egyebList = bt.map((l) => {
      const k = (((l == null ? void 0 : l.system) ?? {}).description ?? "").trim(), T = k ? k.length > 80 ? k.slice(0, 77) + "…" : k : "";
      return {
        itemId: l.id,
        actorId: this.actor.id,
        name: (l == null ? void 0 : l.name) ?? "—",
        img: (l == null ? void 0 : l.img) ?? "",
        description: T
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((l) => l.type === "MikroChip"), oe = de.map((l) => ({ id: l.id, name: l.name, img: l.img })), qe = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], me = (l) => {
      var k, T, _;
      const I = [];
      return l !== 1 && I.push((((k = D.slot1) == null ? void 0 : k.itemId) ?? "").trim()), l !== 2 && I.push((((T = D.slot2) == null ? void 0 : T.itemId) ?? "").trim()), l !== 3 && I.push((((_ = D.slot3) == null ? void 0 : _.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((l) => !me(1).includes(l.id)), e.microchipItemsSlot2 = oe.filter((l) => !me(2).includes(l.id)), e.microchipItemsSlot3 = oe.filter((l) => !me(3).includes(l.id)), e.microchipSlots = Oe.map((l) => {
      const I = D[l] ?? {}, k = (I.itemId ?? "").trim(), T = de.find((_) => _.id === k);
      return {
        slotKey: l,
        itemId: k,
        displayName: (T == null ? void 0 : T.name) || I.name || qe,
        img: (T == null ? void 0 : T.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((l) => {
      const I = `slot${l}`, k = D[I] ?? {}, T = (k.itemId ?? "").trim(), _ = oe.find((j) => j.id === T);
      e[`microchip${l}ItemId`] = T, e[`microchip${l}DisplayName`] = (_ == null ? void 0 : _.name) || k.name || qe, e[`microchip${l}Img`] = (_ == null ? void 0 : _.img) || "";
    }), e.microchipsTable = de.map((l) => {
      var X, ee, te, Z;
      const I = l.id;
      let k = null;
      for (const V of Oe)
        if ((((X = D[V]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          k = V;
          break;
        }
      const T = !!k, _ = ((ee = l == null ? void 0 : l.system) == null ? void 0 : ee.abilityType) ?? "", j = _ === "active" ? "Aktív" : _ === "passive" ? "Passzív" : _ || "—", K = _ === "active", ae = Number((te = l == null ? void 0 : l.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(l.system.replaceCost) : 0, Q = (((Z = l == null ? void 0 : l.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (l == null ? void 0 : l.name) ?? "—",
        img: (l == null ? void 0 : l.img) ?? "",
        typeLabel: j,
        description: J,
        kp: ae,
        isActive: K,
        slotKey: k ?? "",
        equipped: T
      };
    });
    const De = this.actor.system.abilities ?? {}, vt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((l) => {
      var I, k, T;
      return {
        id: l.id,
        name: l.name,
        img: l.img,
        kind: ((I = l.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((k = l.system) == null ? void 0 : k.description) ?? "",
        kp: Number(((T = l.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), _e = new Map(vt.map((l) => [l.id, l])), wt = "— Nincs képesség —", Le = (l) => {
      const I = De[l] ?? {}, k = (I.itemId ?? "").trim(), T = k ? _e.get(k) : null, _ = (T == null ? void 0 : T.description) ?? "", j = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: k,
        displayName: (T == null ? void 0 : T.name) || I.name || wt,
        img: (T == null ? void 0 : T.img) || "",
        description: _,
        kp: j
      };
    };
    e.abilityFajiSlot = Le("faji"), e.abilityHatterSlot = Le("hatter");
    const Ce = (l) => {
      const I = De[l];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, Fe = (l) => l.map((I) => {
      const k = _e.get(I);
      return k ? {
        id: k.id,
        name: k.name,
        img: k.img,
        description: k.description,
        kp: k.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Fe(Ce("passive")), e.abilityActiveList = Fe(Ce("active")), e;
  }
  _attachFrameListeners(i) {
    var y, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const c = (n.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-BzpAFNOa.mjs");
      m(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var m, p, g;
      n.preventDefault(), n.stopPropagation();
      const d = n.currentTarget;
      let c = (d.dataset.itemId ?? "").trim();
      if (!c) {
        const b = (d.dataset.slot ?? "").trim();
        if (!b) return;
        c = (((((p = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : p.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((g = d.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (n) => {
      var m;
      const d = n ? n.currentTarget : (m = e.querySelector) == null ? void 0 : m.call(e, 'input[name="system.resources.stress.value"]');
      if (!d) return;
      const c = Number(d.value) || 0;
      d.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const r = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    r && s({ currentTarget: r }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
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
      }).browse("data", "assets");
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var g;
      n.preventDefault();
      const d = n.currentTarget, c = d.dataset.skill, m = ((g = d.textContent) == null ? void 0 : g.trim()) || c, { openRollSheetForSkill: p } = await import("./roll-sheet-BzpAFNOa.mjs");
      p(this.actor, c, m);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    });
    const a = (n, d) => {
      var p;
      const c = n.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      if (m) {
        if (n.classList.contains("karakter-weapon-label") && (d.altKey || d.shiftKey || d.ctrlKey || d.metaKey)) {
          const g = n.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (p = m.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), a(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const d = n.currentTarget, c = d.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m) return;
      let p = Number(d.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await m.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor, p = m.items.get(c), g = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const b = m.system.weapons ?? {}, S = (b.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], F = C.find((D) => {
          var w;
          return (((w = b[D]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (F) {
          const D = C.filter((w) => w !== F);
          g["system.weapons.slotOrder"] = D.join(","), g[`system.weapons.${F}.itemId`] = "", g[`system.weapons.${F}.name`] = "", g[`system.weapons.${F}.damage`] = "", g[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var F, D;
      const d = n.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, g = (p.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = g ? g.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], O = S.find((w) => {
        var P;
        return (((P = p[w]) == null ? void 0 : P.itemId) ?? "").trim() === c;
      }) ?? null;
      if (d.checked) {
        if (O) return;
        let w = S.find((x) => {
          var M;
          return !((M = p[x]) != null && M.itemId);
        });
        const P = new Set(S);
        if (!w) {
          const x = b.find((M) => !P.has(M));
          if (!x) return;
          w = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${w}.damage`]: ((F = m == null ? void 0 : m.system) == null ? void 0 : F.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = m == null ? void 0 : m.system) == null ? void 0 : D.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (O) {
        const w = S.filter((P) => P !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const d = n.currentTarget;
      if (d.disabled) return;
      const c = d.closest(".karakter-microchip-slot-select-wrap"), m = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !m && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var w;
      n.preventDefault();
      const d = n.currentTarget, c = d.closest(".karakter-microchip-slot-select-wrap"), m = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), p = m == null ? void 0 : m.dataset.slot;
      if (!p) return;
      const g = (d.dataset.itemId ?? "").trim(), b = (d.dataset.itemName ?? ((w = d.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (d.dataset.itemImg ?? "").trim(), O = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      O && (O.textContent = b);
      let C = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", m == null || m.insertBefore(C, O)), C.src = S, C.style.display = "") : C && C.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const F = g ? this.actor.items.get(g) : null, D = {
        [`system.gear.microchips.${p}.itemId`]: g,
        [`system.gear.microchips.${p}.name`]: (F == null ? void 0 : F.name) ?? ""
      };
      g && (D[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var b, S;
      if (n.preventDefault(), !n.altKey) return;
      const d = n.currentTarget.dataset.itemId;
      if (!d) return;
      const c = this.actor.items.get(d);
      if (!c || c.type !== "MikroChip") return;
      const m = ((S = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : S.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((O) => {
        var C;
        return (((C = m[O]) == null ? void 0 : C.itemId) ?? "").trim() === d;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const d = n.currentTarget.dataset.slot;
      if (!d) return;
      const c = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${d}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, d) => {
      const c = d.dataset.slot;
      d.addEventListener("dragover", (m) => this._onMicrochipSlotDragOver(m, c)), d.addEventListener("dragleave", (m) => {
        var p;
        return (p = m.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), d.addEventListener("drop", (m) => this._onMicrochipSlotDrop(m, c));
    }), t.find(".karakter-ability-slot-single").each((n, d) => {
      const c = d.dataset.slot;
      c && (d.addEventListener("dragover", (m) => this._onAbilitySingleDragOver(m, c)), d.addEventListener("dragleave", (m) => {
        var p;
        return (p = m.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), d.addEventListener("drop", (m) => {
        var p;
        (p = m.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, d) => {
      const c = d.dataset.area;
      c && (d.addEventListener("dragover", (m) => this._onAbilityAreaDragOver(m, c)), d.addEventListener("dragleave", (m) => {
        var p;
        return (p = m.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), d.addEventListener("drop", (m) => {
        var p;
        (p = m.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const d = n.currentTarget.dataset.slot;
      d && await this.actor.update({
        [`system.abilities.${d}.itemId`]: "",
        [`system.abilities.${d}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var b;
      if (n.preventDefault(), !n.altKey) return;
      const d = n.currentTarget.dataset.area, c = n.currentTarget.dataset.itemId;
      if (!d || !c) return;
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((b = m[d]) == null ? void 0 : b.items) ? m[d].items.slice() : []).filter((S) => S !== c);
      await this.actor.update({ [`system.abilities.${d}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var p;
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      (p = m == null ? void 0 : m.sheet) == null || p.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (n) => {
      n.preventDefault();
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      m && (m.type === "Kepesseg" || m.type === "ability" ? await this._postAbilityToChat(c) : (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, d) => {
      this._resizeWeaponQuantityInput(d);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const d = n.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Fegyver") return;
      const p = (d.value ?? "").trim();
      await m.update({ "system.quantity": p }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const d = n.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      !m || m.type !== "Pancel" || (await m.update({ "system.equipped": d.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var F, D;
      const d = n.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, g = (p.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = g ? g.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], O = S.find((w) => {
        var P;
        return (((P = p[w]) == null ? void 0 : P.itemId) ?? "").trim() === c;
      }) ?? null;
      if (d.checked) {
        if (O) return;
        let w = S.find((x) => {
          var M;
          return !((M = p[x]) != null && M.itemId);
        });
        const P = new Set(S);
        if (!w) {
          const x = b.find((M) => !P.has(M));
          if (!x) return;
          w = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: m.name ?? "",
          [`system.weapons.${w}.damage`]: ((F = m.system) == null ? void 0 : F.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = m.system) == null ? void 0 : D.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (O) {
        const w = S.filter((P) => P !== O);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${O}.itemId`]: "",
          [`system.weapons.${O}.name`]: "",
          [`system.weapons.${O}.damage`]: "",
          [`system.weapons.${O}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const c = n.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor, p = m.items.get(c), g = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const b = m.system.weapons ?? {}, S = (b.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = S ? S.split(/\s*,\s*/).filter((D) => O.includes(D)) : [], F = C.find((D) => {
          var w;
          return (((w = b[D]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (F) {
          const D = C.filter((w) => w !== F);
          g["system.weapons.slotOrder"] = D.join(","), g[`system.weapons.${F}.itemId`] = "", g[`system.weapons.${F}.name`] = "", g[`system.weapons.${F}.damage`] = "", g[`system.weapons.${F}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const d = n.currentTarget.dataset.itemId;
      if (!d) return;
      const c = this.actor.items.get(d);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((n, d) => {
      this._resizeWeaponQuantityInput(d);
    }), t.on("change", ".karakter-item-quantity-input", async (n) => {
      const d = n.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Targy") return;
      const p = (d.value ?? "").trim();
      await m.update({ "system.quantity": p }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const d = n.currentTarget.dataset.itemId;
      if (!d) return;
      const c = this.actor.items.get(d);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    });
    const o = this, u = (n) => {
      var m, p, g, b;
      if (!n) return;
      const d = o._getFormDataForUpdate(n);
      if (Object.keys(d).length === 0) return;
      const c = ((p = (m = d.system) == null ? void 0 : m.resources) == null ? void 0 : p.currentHealth) != null || ((b = (g = d.system) == null ? void 0 : g.resources) == null ? void 0 : b.hitLocations) != null;
      o.actor.update(d).then(() => {
        c && setTimeout(() => o.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (n) => {
      var d, c, m;
      return n && (((c = (d = o.element) == null ? void 0 : d.contains) == null ? void 0 : c.call(d, n)) || o.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(o.id)}`)));
    };
    o._votvBlur = (n) => {
      const d = n.target;
      if (!d || !d.form) return;
      const c = d.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const m = d.form;
      f(m) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: o.id, at: Date.now() }), u(m));
    }, document.body.addEventListener("blur", o._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var o, u, f;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((o = this.actor.system) == null ? void 0 : o.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), s = t.hitLocations ?? {}, r = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const y of a) {
      const h = ((f = s[y]) == null ? void 0 : f.value) ?? 0, n = r[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, N._healthStatusFromRatio(n, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, r, a, o, u, f, y, h, n, d, c;
    if (e) {
      let m = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!m && typeof e == "object") {
        for (const p of Object.values(e))
          if (typeof p == "string" && p.includes(".") && p.startsWith("Item.")) {
            m = p;
            break;
          }
      }
      if (m) {
        const p = await fromUuid(m);
        if (p && p.documentName === "Item" && (p.type === "Kepesseg" || p.type === "ability")) {
          let g = p.id;
          if (((s = p.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const F = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
            g = ((r = (await this.actor.createEmbeddedDocuments("Item", [F]))[0]) == null ? void 0 : r.id) ?? g;
          }
          const b = (((a = p.system) == null ? void 0 : a.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": p.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": p.name
            });
            return;
          }
          const O = b === "active" ? "active" : "passive", C = Array.isArray((o = S[O]) == null ? void 0 : o.items) ? S[O].items.slice() : Array.isArray(S[O]) ? S[O].slice() : [];
          C.includes(g) || C.push(g), await this.actor.update({ [`system.abilities.${O}.items`]: C });
          return;
        }
      }
    }
    if (e) {
      let m = e.uuid ?? e.documentUuid ?? ((u = e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
      if (!m && typeof e == "object") {
        for (const p of Object.values(e))
          if (typeof p == "string" && p.includes(".") && p.startsWith("Item.")) {
            m = p;
            break;
          }
      }
      if (m) {
        const p = await fromUuid(m);
        if (p && p.documentName === "Item" && p.type === "Fegyver") {
          const g = this.actor, b = ((f = p.parent) == null ? void 0 : f.id) !== g.id;
          let S = p.id;
          if (b) {
            const O = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
            S = ((y = (await g.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : y.id) ?? S;
          }
          if (b) {
            const O = ((h = g.system) == null ? void 0 : h.weapons) ?? {}, C = (O.slotOrder ?? "").trim(), F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = C ? C.split(/\s*,\s*/).filter((P) => F.includes(P)) : [], w = D.filter((P) => {
              var x;
              return (((x = O[P]) == null ? void 0 : x.itemId) ?? "").trim() === S;
            });
            if (w.length > 0) {
              const x = {
                "system.weapons.slotOrder": D.filter((M) => !w.includes(M)).join(",")
              };
              for (const M of w)
                x[`system.weapons.${M}.itemId`] = "", x[`system.weapons.${M}.name`] = "", x[`system.weapons.${M}.damage`] = "", x[`system.weapons.${M}.bonus`] = "";
              await g.update(x);
            }
          }
          return;
        }
        if (p && p.documentName === "Item" && p.type === "Pancel") {
          const g = this.actor;
          if (((n = p.parent) == null ? void 0 : n.id) !== g.id) {
            const b = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
            await g.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (p && p.documentName === "Item" && p.type === "MikroChip") {
          const g = this.actor;
          ((d = p.parent) == null ? void 0 : d.id) !== g.id && await g.createEmbeddedDocuments("Item", [p.toObject()]);
          return;
        }
        if (p && p.documentName === "Item" && (p.type === "Targy" || p.type === "Egyeb")) {
          const g = this.actor;
          ((c = p.parent) == null ? void 0 : c.id) !== g.id && await g.createEmbeddedDocuments("Item", [p.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var r, a, o;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var o, u, f, y, h, n;
    i.preventDefault(), i.stopPropagation(), (o = i.currentTarget) == null || o.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = i.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((f = i.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const r = await fromUuid(s.uuid);
    if (!r || r.type !== "Fegyver") return;
    if (((y = r.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [d]);
      return;
    }
    const a = r.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: r.name,
      [`system.weapons.${e}.damage`]: ((h = r.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = r.system) == null ? void 0 : n.bonus) ?? ""
    }), await r.update({ "system.equipped": !0 });
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
    var f, y;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const r = this.actor.items.contents.slice().sort((h, n) => {
      const d = typeof h.sort == "number" ? h.sort : 0, c = typeof n.sort == "number" ? n.sort : 0;
      return d - c;
    }).map((h) => h.id), a = r.indexOf(t), o = r.indexOf(e);
    if (a === -1 || o === -1) return;
    r.splice(a, 1), r.splice(o, 0, t);
    const u = r.map((h, n) => ({
      _id: h,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(i) {
    var s, r, a;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
  async _postItemToChat(i) {
    var o, u;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((o = e.system) == null ? void 0 : o.description) ?? "").trim();
    let s;
    e.type === "MikroChip" ? s = ((((u = e.system) == null ? void 0 : u.abilityType) ?? "passive") === "active" ? "Aktív" : "Passzív") + " Mikro-Chip" : s = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${s}</p>
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: a,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var y, h, n;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", s = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, r = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", o = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", u = r ? `<p>${r}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${o}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, r;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var a, o, u;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let r = s.id;
    if (((o = s.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const f = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      r = ((u = (await this.actor.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : u.id) ?? r;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: r,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var u, f, y, h;
    i.preventDefault(), (u = i.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let r = s.id;
    if (((f = s.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      r = ((y = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : y.id) ?? r;
    }
    const a = this.actor.system.abilities ?? {}, o = Array.isArray((h = a[e]) == null ? void 0 : h.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    o.includes(r) || o.push(r), await this.actor.update({ [`system.abilities.${e}.items`]: o });
  }
  _onMicrochipSlotDragOver(i, e) {
    var r, a, o;
    const t = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((a = i.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (o = i.currentTarget) == null || o.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var o, u, f, y, h;
    i.preventDefault(), (o = i.currentTarget) == null || o.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = i.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((f = i.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const r = await fromUuid(s.uuid);
    if (!r || r.type !== "MikroChip") return;
    let a = r.id;
    ((y = r.parent) == null ? void 0 : y.id) !== this.actor.id && (a = ((h = (await this.actor.createEmbeddedDocuments("Item", [r.toObject()]))[0]) == null ? void 0 : h.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: r.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let r = Number(s) || 0;
    const a = this._getSkillHealthStatus(i);
    a === 1 ? r -= 6 : a === 2 && (r -= 3);
    const u = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, f = new Roll(u);
    await f.evaluate({ async: !0 });
    const y = f.total >= 18 ? "critical" : f.total <= 3 ? "fumble" : null, h = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y } },
      rollMode: h
    });
  }
  async _rollMorale() {
    var r;
    const i = Number(((r = this.actor.system.resources) == null ? void 0 : r.morale) ?? 0) || 0;
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
    var b;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, r = this.actor.items.filter((S) => S.type === "Fegyver");
    let a = null;
    t.itemId && (a = r.find((S) => S.id === t.itemId) ?? null);
    const o = a && a.name || t.name || `Fegyver (${i})`, u = Number(t.bonus || 0) || 0, y = (((b = a == null ? void 0 : a.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(s[y] || 0) || 0, n = u + h, c = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, m = new Roll(c);
    await m.evaluate({ async: !0 });
    const p = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, g = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${o} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p } },
      rollMode: g
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var u, f, y, h, n, d, c, m, p, g;
    const t = this.actor;
    if (!t) return;
    let s = ((f = (u = t.items).get) == null ? void 0 : f.call(u, i)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === i));
    if (!s || s.type !== "Fegyver") return;
    let r = (((n = s.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!r && e && (r = (((((d = t.system) == null ? void 0 : d.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !r) {
      (g = (c = ui.notifications) == null ? void 0 : c.warn) == null || g.call(c, ((p = (m = game.i18n) == null ? void 0 : m.localize) == null ? void 0 : p.call(m, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(r);
    await a.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
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
var at;
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
    super._attachFrameListeners(i);
    const e = this;
    if (e._votvProfileImgClick = (r) => {
      var o, u, f, y, h;
      if (!e.isEditable || !((o = e.element) != null && o.contains(r.target)) || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse("data", "assets");
    }, document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((o) => console.warn("VoidWeaponSheet save failed", o));
    }, s = (r) => {
      var a, o, u;
      return r && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, r)) || e.id && ((u = r.closest) == null ? void 0 : u.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var o, u, f;
      const a = ((o = r.target) == null ? void 0 : o.form) ?? ((f = (u = r.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
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
R(H, "PARTS", foundry.utils.mergeObject(E(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((at = E(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
}));
let he = H;
var nt;
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
    super._attachFrameListeners(i);
    const e = this;
    if (e._votvProfileImgClick = (r) => {
      var o, u, f, y, h;
      if (!e.isEditable || !((o = e.element) != null && o.contains(r.target)) || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse("data", "assets");
    }, document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((o) => console.warn("VoidShieldSheet save failed", o));
    }, s = (r) => {
      var a, o, u;
      return r && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, r)) || e.id && ((u = r.closest) == null ? void 0 : u.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var o, u, f;
      const a = ((o = r.target) == null ? void 0 : o.form) ?? ((f = (u = r.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
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
R(B, "PARTS", foundry.utils.mergeObject(E(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((nt = E(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
}));
let be = B;
var ot;
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
    super._attachFrameListeners(i);
    const e = this;
    if (e._votvProfileImgClick = (r) => {
      var o, u, f, y, h;
      if (!e.isEditable || !((o = e.element) != null && o.contains(r.target)) || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse("data", "assets");
    }, document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((o) => console.warn("VoidMicrochipSheet save failed", o));
    }, s = (r) => {
      var a, o, u;
      return r && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, r)) || e.id && ((u = r.closest) == null ? void 0 : u.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var o, u, f;
      const a = ((o = r.target) == null ? void 0 : o.form) ?? ((f = (u = r.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
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
let ve = G;
var lt;
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
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = a.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (a) => {
      if (!a) return;
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, r = (a) => {
      var o, u, f;
      return a && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, a)) || e.id && ((f = a.closest) == null ? void 0 : f.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, f, y;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (f = a.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      r(o) && s(o);
    }, e._votvInput = (a) => {
      var f;
      const o = a.target;
      if ((o == null ? void 0 : o.name) === "name") return;
      const u = (o == null ? void 0 : o.form) ?? ((f = o == null ? void 0 : o.closest) == null ? void 0 : f.call(o, "form"));
      r(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => s(u), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), document.body.removeEventListener("click", this._votvProfileImgClick, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, i);
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
let we = z;
var ct;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(i);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = a.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = a.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (a) => {
      if (!a) return;
      const o = e._getFormDataForUpdate(a);
      Object.keys(o).length !== 0 && e.document.update(o).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, r = (a) => {
      var o, u, f;
      return a && (((u = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : u.call(o, a)) || e.id && ((f = a.closest) == null ? void 0 : f.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var u, f, y;
      const o = ((u = a.target) == null ? void 0 : u.form) ?? ((y = (f = a.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      r(o) && s(o);
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
let ke = W;
var ut;
const Y = class Y extends foundry.applications.api.HandlebarsApplicationMixin(
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
    super._attachFrameListeners(i);
    const e = this;
    if (e._votvProfileImgClick = (r) => {
      var o, u, f, y, h;
      if (!e.isEditable || !((o = e.element) != null && o.contains(r.target)) || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (n) => {
          n && e.document.update({ img: n });
        }
      }).browse("data", "assets");
    }, document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const t = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((o) => console.warn("VoidEgyebSheet save failed", o));
    }, s = (r) => {
      var a, o, u;
      return r && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, r)) || e.id && ((u = r.closest) == null ? void 0 : u.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var o, u, f;
      const a = ((o = r.target) == null ? void 0 : o.form) ?? ((f = (u = r.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "form"));
      s(a) && t(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
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
  var i, e, t, s, r;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = _t, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ct, CONFIG.Item.dataModels.Pancel = At, CONFIG.Item.dataModels.MikroChip = Et, CONFIG.Item.dataModels.Kepesseg = Ve, CONFIG.Item.dataModels.ability = Ve, CONFIG.Item.dataModels.Targy = Nt, CONFIG.Item.dataModels.Egyeb = xt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (r = CONFIG.Item).typeLabels ?? (r.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ge, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", he, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ve, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ke, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ie, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const A = 500;
  Hooks.on("updateActor", (a, o, u, f) => {
    var S, O, C, F, D;
    const y = a == null ? void 0 : a.id;
    if (!y) return;
    const h = document.activeElement, n = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), d = [], c = (S = game.actors) == null ? void 0 : S.get(y);
    c != null && c.apps && d.push(...Array.from(c.apps));
    const m = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of m)
      ((O = w.document) == null ? void 0 : O.id) !== y || ((C = w.document) == null ? void 0 : C.documentName) !== "Actor" || ((F = w.constructor) == null ? void 0 : F.name) !== "VoidKarakterSheet" || d.includes(w) || d.push(w);
    if (n && d.some((w) => {
      const P = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return P && P.contains(h);
    })) return;
    const g = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, b = g && Date.now() - g.at < A ? g.appId : null;
    setTimeout(() => {
      for (const w of d)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  var A, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, o, u, f, y, h;
      if (!((o = (a = e.target) == null ? void 0 : a.closest) != null && o.call(a, "#actors"))) return;
      const t = (f = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "[data-document-id]"), s = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!s) return;
      const r = s.includes(".") ? s.split(".").pop() : s;
      r && ((h = game.actors) != null && h.get(r)) && (game.votv._dragSourceActorId = r);
    },
    !0
  ), (A = game.user) != null && A.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
    var e, t;
    try {
      const s = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(s != null && s.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const r = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: dt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await s.create(r);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (s) {
      console.warn("Vacuum of the Void | Default scene creation failed:", s);
    }
  })();
});
Hooks.on("preCreateToken", (A, i, e) => {
  var a, o;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, s = t ?? A.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const r = s ? (o = game.actors) == null ? void 0 : o.get(s) : null;
  !r || r.type !== "Karakter" || A.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (A, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || A.updateSource({
    width: 3840,
    height: 2160,
    "background.src": dt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (A, i, e) => {
  var r, a, o;
  const t = (a = (r = A.flags) == null ? void 0 : r["vacuum-of-the-void"]) == null ? void 0 : a.resultType;
  if (!t) return;
  const s = (o = i == null ? void 0 : i.querySelector) == null ? void 0 : o.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-8XlqOHVI.mjs.map
