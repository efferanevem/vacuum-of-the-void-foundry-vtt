var wt = Object.defineProperty;
var It = Object.getPrototypeOf;
var St = Reflect.get;
var Tt = (E, i, e) => i in E ? wt(E, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[i] = e;
var R = (E, i, e) => Tt(E, typeof i != "symbol" ? i + "" : i, e);
var F = (E, i, e) => St(It(E), e, i);
const { HTMLField: qt, NumberField: q, SchemaField: C, StringField: v, BooleanField: U, ArrayField: ce } = foundry.data.fields;
class _t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new C({
        name: new v({ required: !1, blank: !0, initial: "" }),
        player: new v({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new v({ required: !1, blank: !0, initial: "" }),
        assignment: new v({ required: !1, blank: !0, initial: "" }),
        subAssignment: new v({ required: !1, blank: !0, initial: "" }),
        background: new v({ required: !1, blank: !0, initial: "" }),
        languages: new v({ required: !1, blank: !0, initial: "" })
      }),
      resources: new C({
        health: new C({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new C({
          head: new C({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new C({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new C({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new C({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new C({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new C({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new C({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new C({
        defense: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new C({
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
      weapons: new C({
        slotOrder: new v({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new C({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new C({
        microchips: new C({
          slot1: new C({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new C({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new C({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          })
        }),
        equipment: new v({ required: !1, blank: !0, initial: "" }),
        armor: new ce(
          new C({
            name: new v({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new v({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new v({ required: !1, blank: !0, initial: "" }),
            level: new v({ required: !1, blank: !0, initial: "" }),
            other: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ce(
          new C({
            name: new v({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new C({
        faji: new C({
          itemId: new v({ required: !1, blank: !0, initial: "" }),
          name: new v({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new C({
          itemId: new v({ required: !1, blank: !0, initial: "" }),
          name: new v({ required: !1, blank: !0, initial: "" })
        }),
        passive: new C({
          items: new ce(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new C({
          items: new ce(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new C({
        biography: new qt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: Ot } = foundry.data.fields;
class Dt extends _t {
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
const { BooleanField: Pt, StringField: le } = foundry.data.fields;
class Et extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Pt({ required: !1, initial: !1 }),
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
const { NumberField: ye, StringField: Xe } = foundry.data.fields;
class Ft extends foundry.abstract.TypeDataModel {
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
    var s, l, r, n;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((n = i.querySelector) == null ? void 0 : n.call(i, ".window-content")) ?? null;
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
    const l = this.element, r = this.form ?? this.element;
    let n = { scrollState: {}, focus: null };
    if (l) {
      n.scrollState = this._saveScrollState(l);
      const p = document.activeElement, g = r.contains(p), b = p && (p.tagName === "INPUT" && p.type !== "checkbox" && p.type !== "radio" || p.tagName === "TEXTAREA");
      g && b && (n.focus = {
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
    const f = this.element, y = this.form ?? this.element, h = n.scrollState, a = n.focus, d = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", c = () => {
      var p, g;
      if (this._applyScrollState(f, h), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const b = ((p = y.querySelector) == null ? void 0 : p.call(y, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (g = y.querySelector) == null ? void 0 : g.call(y, `[name="${CSS.escape(a.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = a.selectionStart ?? 0, b.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(f, h);
    };
    return (d || a) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const l = Math.floor(s / 3), r = Math.floor(2 * s / 3);
    return t <= l ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, l;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var n;
        return r.type === "Pancel" && ((n = r.system) == null ? void 0 : n.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const n = String(((l = r.system) == null ? void 0 : l.speedPenalty) ?? "").trim().replace(",", "."), u = Number(n);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, l;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var n;
        return r.type === "Pancel" && ((n = r.system) == null ? void 0 : n.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const n = String(((l = r.system) == null ? void 0 : l.protectionBonus) ?? "").trim().replace(",", "."), u = Number(n);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, a, d, c, m, p, g, b, S;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((d = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : d.resources) ?? {}, l = ((m = (c = s.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : m.value) ?? 0, r = ((p = s.currentHealth) == null ? void 0 : p.legs) ?? 0, n = N._healthStatusFromRatio(r, l), u = Number(((S = (b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.combat) == null ? void 0 : S.givenSpeed) ?? 0) || 0;
    let f;
    n === 0 ? f = 0 : n === 1 ? f = -6 : n === 2 ? f = -3 : f = u;
    const y = this._getTotalArmorSpeedPenalty();
    f += y, t.textContent = String(f);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var r, n, u, f;
    const e = i ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const l = (Number(((f = (u = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : u.combat) == null ? void 0 : f.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(l);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, n, u, f;
    const e = N.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, s = ((u = (n = t.hitLocations) == null ? void 0 : n[e]) == null ? void 0 : u.value) ?? 0, l = ((f = t.currentHealth) == null ? void 0 : f[e]) ?? 0;
    return N._healthStatusFromRatio(l, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var n, u, f, y;
    const t = N.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((n = i == null ? void 0 : i.system) == null ? void 0 : n.resources) ?? {}, l = ((f = (u = s.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : f.value) ?? 0, r = ((y = s.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return N._healthStatusFromRatio(r, l);
  }
  async _prepareContext(i) {
    var Ee, Fe, Ae, Ne, $e, xe, Me, je, Re, Ke, Ue, He, Be, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (Fe = (Ee = this.actor.system) == null ? void 0 : Ee.resources) == null ? void 0 : Fe.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, l = s.hitLocations ?? {}, r = s.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const o of n) {
      const I = ((Ne = l[o]) == null ? void 0 : Ne.value) ?? 0, w = r[o] ?? 0;
      e.computedHealthStatus[o] = N._healthStatusFromRatio(w, I);
    }
    const u = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((o) => (Number(r[o]) || 0) === 0).length;
    e.showDeathSkull = u || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, a = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let d;
    h === 0 ? d = 0 : h === 1 ? d = -6 : h === 2 ? d = -3 : d = a;
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
    for (const [o, I] of Object.entries(g)) {
      const w = e.computedHealthStatus[I];
      e.skillHealthStatus[o] = w, e.skillDisabled[o] = w === 0 ? " disabled" : "", e.skillHasHealthTint[o] = !0;
    }
    const b = this.actor.system.weapons ?? {}, S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = (b.slotOrder ?? "").trim(), L = _ ? _.split(/\s*,\s*/).filter((o) => S.includes(o)) : [], P = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, O = P && typeof P == "object" && !Array.isArray(P) ? P : {}, k = (((Ke = O.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), A = (((Ue = O.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), x = (((He = O.slot3) == null ? void 0 : He.itemId) ?? "").trim(), mt = this.actor.items.contents.filter((o) => o.type !== "Kepesseg" && o.type !== "ability").slice().sort((o, I) => {
      const w = typeof o.sort == "number" ? o.sort : 0, T = typeof I.sort == "number" ? I.sort : 0;
      return w - T;
    }).map((o) => {
      var X, ee, te, Z, V, ne;
      const I = o.type === "Fegyver", w = o.type === "MikroChip";
      let T = 0, D = "", j = null;
      for (let ie = 0; ie < L.length; ie++) {
        const re = L[ie];
        if ((((X = b[re]) == null ? void 0 : X.itemId) ?? "") === o.id) {
          T = ie + 1, D = ((ee = b[re]) == null ? void 0 : ee.bonus) ?? "", j = re;
          break;
        }
      }
      let K = null;
      w && (k === o.id ? K = "slot1" : A === o.id ? K = "slot2" : x === o.id && (K = "slot3"));
      const ae = I && ((te = o.system) != null && te.damage) ? o.system.damage : "", Q = I && typeof ((Z = o.system) == null ? void 0 : Z.range) == "string" ? (o.system.range || "").trim() : "", J = j ? Number((V = b[j]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        type: o.type,
        isWeapon: I,
        slotAssignment: T,
        slotBonus: D,
        slotKey: j,
        microchipSlotKey: K,
        isEquipped: !!(j || K),
        damage: ae,
        rangeStr: Q,
        slotBonusNum: J,
        quantity: Number(((ne = o.system) == null ? void 0 : ne.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = mt;
    const ue = (((Be = this.actor.items) == null ? void 0 : Be.contents) ?? []).filter((o) => o.type === "Fegyver"), Se = ue.map((o) => ({ id: o.id, name: o.name, img: o.img }));
    e.weaponItems = Se;
    const Te = "— Nincs fegyver —", pt = L.filter((o) => {
      const w = ((b[o] ?? {}).itemId ?? "").trim();
      return w ? !!ue.find((D) => D.id === w) : !1;
    });
    e.weaponSlots = pt.map((o, I) => {
      const w = b[o] ?? {}, T = (w.itemId ?? "").trim(), D = Se.find((j) => j.id === T);
      return {
        slotKey: o,
        itemId: T,
        slotNum: I + 1,
        displayName: (D == null ? void 0 : D.name) || w.name || Te,
        img: (D == null ? void 0 : D.img) || "",
        bonus: Number(w.bonus) || 0,
        damage: w.damage ?? ""
      };
    });
    const ft = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, yt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((o) => {
      var ie, re, Je;
      const I = o.id;
      let w = null, T = {};
      for (const pe of L)
        if ((((ie = b[pe]) == null ? void 0 : ie.itemId) ?? "").trim() === I) {
          w = pe, T = b[pe] ?? {};
          break;
        }
      const D = !!w, j = ((re = o.system) == null ? void 0 : re.equipped) !== void 0 && ((Je = o.system) == null ? void 0 : Je.equipped) !== null ? !!o.system.equipped : D, K = (o == null ? void 0 : o.system) ?? {}, ae = typeof K.range == "string" ? (K.range || "").trim() : "", Q = K.type ?? "", J = (ft[Q] ?? Q) || "—", X = K.size ?? "", ee = (yt[X] ?? X) || "", te = [J, ee].filter(Boolean).join(", ") || J || "—", Z = J === "Lövedékes", V = K.quantity, ne = V != null ? String(V).trim() : "1";
      return {
        slotKey: w ?? "",
        itemId: I,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? Te,
        img: (o == null ? void 0 : o.img) ?? "",
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
    const gt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((o) => o.type === "Pancel");
    e.armorTable = gt.map((o) => {
      var T, D;
      const I = (o == null ? void 0 : o.system) ?? {}, w = ((T = o.system) == null ? void 0 : T.equipped) !== void 0 && ((D = o.system) == null ? void 0 : D.equipped) !== null ? !!o.system.equipped : !1;
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: w
      };
    });
    const ht = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((o) => o.type === "Targy");
    e.itemsTable = ht.map((o) => {
      const I = (o == null ? void 0 : o.system) ?? {}, w = (I.description ?? "").trim(), T = w ? w.length > 60 ? w.slice(0, 57) + "…" : w : "—", D = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        quantity: D,
        description: T
      };
    });
    const bt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((o) => o.type === "Egyeb");
    e.egyebList = bt.map((o) => {
      const w = (((o == null ? void 0 : o.system) ?? {}).description ?? "").trim(), T = w ? w.length > 80 ? w.slice(0, 77) + "…" : w : "";
      return {
        itemId: o.id,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        description: T
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((o) => o.type === "MikroChip"), oe = de.map((o) => ({ id: o.id, name: o.name, img: o.img })), qe = "— Nincs Mikro-Chip —", _e = ["slot1", "slot2", "slot3"], me = (o) => {
      var w, T, D;
      const I = [];
      return o !== 1 && I.push((((w = O.slot1) == null ? void 0 : w.itemId) ?? "").trim()), o !== 2 && I.push((((T = O.slot2) == null ? void 0 : T.itemId) ?? "").trim()), o !== 3 && I.push((((D = O.slot3) == null ? void 0 : D.itemId) ?? "").trim()), I.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((o) => !me(1).includes(o.id)), e.microchipItemsSlot2 = oe.filter((o) => !me(2).includes(o.id)), e.microchipItemsSlot3 = oe.filter((o) => !me(3).includes(o.id)), e.microchipSlots = _e.map((o) => {
      const I = O[o] ?? {}, w = (I.itemId ?? "").trim(), T = de.find((D) => D.id === w);
      return {
        slotKey: o,
        itemId: w,
        displayName: (T == null ? void 0 : T.name) || I.name || qe,
        img: (T == null ? void 0 : T.img) || "",
        active: I.active === !0
      };
    }), ["1", "2", "3"].forEach((o) => {
      const I = `slot${o}`, w = O[I] ?? {}, T = (w.itemId ?? "").trim(), D = oe.find((j) => j.id === T);
      e[`microchip${o}ItemId`] = T, e[`microchip${o}DisplayName`] = (D == null ? void 0 : D.name) || w.name || qe, e[`microchip${o}Img`] = (D == null ? void 0 : D.img) || "";
    }), e.microchipsTable = de.map((o) => {
      var X, ee, te, Z;
      const I = o.id;
      let w = null;
      for (const V of _e)
        if ((((X = O[V]) == null ? void 0 : X.itemId) ?? "").trim() === I) {
          w = V;
          break;
        }
      const T = !!w, D = ((ee = o == null ? void 0 : o.system) == null ? void 0 : ee.abilityType) ?? "", j = D === "active" ? "Aktív" : D === "passive" ? "Passzív" : D || "—", K = D === "active", ae = Number((te = o == null ? void 0 : o.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(o.system.replaceCost) : 0, Q = (((Z = o == null ? void 0 : o.system) == null ? void 0 : Z.description) ?? "").trim(), J = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: I,
        actorId: this.actor.id,
        name: (o == null ? void 0 : o.name) ?? "—",
        img: (o == null ? void 0 : o.img) ?? "",
        typeLabel: j,
        description: J,
        kp: ae,
        isActive: K,
        slotKey: w ?? "",
        equipped: T
      };
    });
    const Oe = this.actor.system.abilities ?? {}, vt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((o) => {
      var I, w, T;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        kind: ((I = o.system) == null ? void 0 : I.kind) ?? "passive",
        description: ((w = o.system) == null ? void 0 : w.description) ?? "",
        kp: Number(((T = o.system) == null ? void 0 : T.kp) ?? 0) || 0
      };
    }), De = new Map(vt.map((o) => [o.id, o])), kt = "— Nincs képesség —", Ce = (o) => {
      const I = Oe[o] ?? {}, w = (I.itemId ?? "").trim(), T = w ? De.get(w) : null, D = (T == null ? void 0 : T.description) ?? "", j = (T == null ? void 0 : T.kp) ?? 0;
      return {
        itemId: w,
        displayName: (T == null ? void 0 : T.name) || I.name || kt,
        img: (T == null ? void 0 : T.img) || "",
        description: D,
        kp: j
      };
    };
    e.abilityFajiSlot = Ce("faji"), e.abilityHatterSlot = Ce("hatter");
    const Le = (o) => {
      const I = Oe[o];
      return I ? Array.isArray(I == null ? void 0 : I.items) ? I.items : Array.isArray(I) ? I : [] : [];
    }, Pe = (o) => o.map((I) => {
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
      const c = (a.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-CeVRxLDF.mjs");
      m(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var m, p, g;
      a.preventDefault(), a.stopPropagation();
      const d = a.currentTarget;
      let c = (d.dataset.itemId ?? "").trim();
      if (!c) {
        const b = (d.dataset.slot ?? "").trim();
        if (!b) return;
        c = (((((p = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : p.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((g = d.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (a) => {
      var m;
      const d = a ? a.currentTarget : (m = e.querySelector) == null ? void 0 : m.call(e, 'input[name="system.resources.stress.value"]');
      if (!d) return;
      const c = Number(d.value) || 0;
      d.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const l = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    l && s({ currentTarget: l }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (a) => {
      a.preventDefault(), a.stopPropagation(), new FilePicker({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse("data", "assets");
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var g;
      a.preventDefault();
      const d = a.currentTarget, c = d.dataset.skill, m = ((g = d.textContent) == null ? void 0 : g.trim()) || c, { openRollSheetForSkill: p } = await import("./roll-sheet-CeVRxLDF.mjs");
      p(this.actor, c, m);
    }), t.on("click", ".karakter-roll-morale-d8", (a) => {
      a.preventDefault(), this._rollMorale();
    });
    const r = (a, d) => {
      var p;
      const c = a.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      if (m) {
        if (a.classList.contains("karakter-weapon-label") && (d.altKey || d.shiftKey || d.ctrlKey || d.metaKey)) {
          const g = a.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (p = m.sheet) == null || p.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), r(a.currentTarget, a);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), r(a.currentTarget, a);
    }), t.on("change", ".karakter-item-qty", async (a) => {
      const d = a.currentTarget, c = d.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m) return;
      let p = Number(d.value);
      (!Number.isFinite(p) || p < 0) && (p = 0), await m.update({ "system.quantity": p });
    }), t.on("click", ".karakter-item-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor, p = m.items.get(c), g = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const b = m.system.weapons ?? {}, S = (b.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = S ? S.split(/\s*,\s*/).filter((O) => _.includes(O)) : [], P = L.find((O) => {
          var k;
          return (((k = b[O]) == null ? void 0 : k.itemId) ?? "").trim() === c;
        });
        if (P) {
          const O = L.filter((k) => k !== P);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${P}.itemId`] = "", g[`system.weapons.${P}.name`] = "", g[`system.weapons.${P}.damage`] = "", g[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (a) => {
      var P, O;
      const d = a.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, g = (p.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = g ? g.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], _ = S.find((k) => {
        var A;
        return (((A = p[k]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (d.checked) {
        if (_) return;
        let k = S.find((x) => {
          var M;
          return !((M = p[x]) != null && M.itemId);
        });
        const A = new Set(S);
        if (!k) {
          const x = b.find((M) => !A.has(M));
          if (!x) return;
          k = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${k}.itemId`]: c,
          [`system.weapons.${k}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${k}.damage`]: ((P = m == null ? void 0 : m.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((O = m == null ? void 0 : m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (_) {
        const k = S.filter((A) => A !== _);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${_}.itemId`]: "",
          [`system.weapons.${_}.name`]: "",
          [`system.weapons.${_}.damage`]: "",
          [`system.weapons.${_}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (a) => {
      a.preventDefault();
      const d = a.currentTarget;
      if (d.disabled) return;
      const c = d.closest(".karakter-microchip-slot-select-wrap"), m = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !m && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (a) => {
      var k;
      a.preventDefault();
      const d = a.currentTarget, c = d.closest(".karakter-microchip-slot-select-wrap"), m = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), p = m == null ? void 0 : m.dataset.slot;
      if (!p) return;
      const g = (d.dataset.itemId ?? "").trim(), b = (d.dataset.itemName ?? ((k = d.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (d.dataset.itemImg ?? "").trim(), _ = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      _ && (_.textContent = b);
      let L = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (L || (L = document.createElement("img"), L.className = "karakter-microchip-slot-thumb", L.alt = "", m == null || m.insertBefore(L, _)), L.src = S, L.style.display = "") : L && L.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const P = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${p}.itemId`]: g,
        [`system.gear.microchips.${p}.name`]: (P == null ? void 0 : P.name) ?? ""
      };
      g && (O[`system.gear.microchips.${p}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (a) => {
      $(a.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var b, S;
      if (a.preventDefault(), !a.altKey) return;
      const d = a.currentTarget.dataset.itemId;
      if (!d) return;
      const c = this.actor.items.get(d);
      if (!c || c.type !== "MikroChip") return;
      const m = ((S = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : S.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((_) => {
        var L;
        return (((L = m[_]) == null ? void 0 : L.itemId) ?? "").trim() === d;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("change", ".karakter-microchip-slot-active", async (a) => {
      const d = a.currentTarget.dataset.slot;
      if (!d) return;
      const c = a.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${d}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((a, d) => {
      const c = d.dataset.slot;
      d.addEventListener("dragover", (m) => this._onMicrochipSlotDragOver(m, c)), d.addEventListener("dragleave", (m) => {
        var p;
        return (p = m.currentTarget) == null ? void 0 : p.classList.remove("karakter-microchip-slot-drag-over");
      }), d.addEventListener("drop", (m) => this._onMicrochipSlotDrop(m, c));
    }), t.find(".karakter-ability-slot-single").each((a, d) => {
      const c = d.dataset.slot;
      c && (d.addEventListener("dragover", (m) => this._onAbilitySingleDragOver(m, c)), d.addEventListener("dragleave", (m) => {
        var p;
        return (p = m.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-slot-drag-over");
      }), d.addEventListener("drop", (m) => {
        var p;
        (p = m.currentTarget) == null || p.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((a, d) => {
      const c = d.dataset.area;
      c && (d.addEventListener("dragover", (m) => this._onAbilityAreaDragOver(m, c)), d.addEventListener("dragleave", (m) => {
        var p;
        return (p = m.currentTarget) == null ? void 0 : p.classList.remove("karakter-ability-area-drag-over");
      }), d.addEventListener("drop", (m) => {
        var p;
        (p = m.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const d = a.currentTarget.dataset.slot;
      d && await this.actor.update({
        [`system.abilities.${d}.itemId`]: "",
        [`system.abilities.${d}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var b;
      if (a.preventDefault(), !a.altKey) return;
      const d = a.currentTarget.dataset.area, c = a.currentTarget.dataset.itemId;
      if (!d || !c) return;
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((b = m[d]) == null ? void 0 : b.items) ? m[d].items.slice() : []).filter((S) => S !== c);
      await this.actor.update({ [`system.abilities.${d}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (a) => {
      var p;
      a.preventDefault();
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      (p = m == null ? void 0 : m.sheet) == null || p.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      a.preventDefault();
      const c = a.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      a.preventDefault();
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor.items.get(c);
      m && (m.type === "Kepesseg" || m.type === "ability" ? await this._postAbilityToChat(c) : (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (a) => {
      this._resizeWeaponQuantityInput(a.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((a, d) => {
      this._resizeWeaponQuantityInput(d);
    }), t.on("change", ".karakter-weapon-quantity-input", async (a) => {
      const d = a.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Fegyver") return;
      const p = (d.value ?? "").trim();
      await m.update({ "system.quantity": p }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (a) => {
      const d = a.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      !m || m.type !== "Pancel" || (await m.update({ "system.equipped": d.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (a) => {
      var P, O;
      const d = a.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Fegyver") return;
      const p = this.actor.system.weapons ?? {}, g = (p.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = g ? g.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], _ = S.find((k) => {
        var A;
        return (((A = p[k]) == null ? void 0 : A.itemId) ?? "").trim() === c;
      }) ?? null;
      if (d.checked) {
        if (_) return;
        let k = S.find((x) => {
          var M;
          return !((M = p[x]) != null && M.itemId);
        });
        const A = new Set(S);
        if (!k) {
          const x = b.find((M) => !A.has(M));
          if (!x) return;
          k = x, S.push(x);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${k}.itemId`]: c,
          [`system.weapons.${k}.name`]: m.name ?? "",
          [`system.weapons.${k}.damage`]: ((P = m.system) == null ? void 0 : P.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((O = m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (_) {
        const k = S.filter((A) => A !== _);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${_}.itemId`]: "",
          [`system.weapons.${_}.name`]: "",
          [`system.weapons.${_}.damage`]: "",
          [`system.weapons.${_}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const c = a.currentTarget.dataset.itemId;
      if (!c) return;
      const m = this.actor, p = m.items.get(c), g = {};
      if ((p == null ? void 0 : p.type) === "Fegyver") {
        const b = m.system.weapons ?? {}, S = (b.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = S ? S.split(/\s*,\s*/).filter((O) => _.includes(O)) : [], P = L.find((O) => {
          var k;
          return (((k = b[O]) == null ? void 0 : k.itemId) ?? "").trim() === c;
        });
        if (P) {
          const O = L.filter((k) => k !== P);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${P}.itemId`] = "", g[`system.weapons.${P}.name`] = "", g[`system.weapons.${P}.damage`] = "", g[`system.weapons.${P}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const d = a.currentTarget.dataset.itemId;
      if (!d) return;
      const c = this.actor.items.get(d);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (a) => {
      this._resizeWeaponQuantityInput(a.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((a, d) => {
      this._resizeWeaponQuantityInput(d);
    }), t.on("change", ".karakter-item-quantity-input", async (a) => {
      const d = a.currentTarget, c = (d.dataset.itemId ?? "").trim();
      if (!c) return;
      const m = this.actor.items.get(c);
      if (!m || m.type !== "Targy") return;
      const p = (d.value ?? "").trim();
      await m.update({ "system.quantity": p }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      if (a.preventDefault(), !a.altKey) return;
      const d = a.currentTarget.dataset.itemId;
      if (!d) return;
      const c = this.actor.items.get(d);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    });
    const n = this, u = (a) => {
      var m, p, g, b;
      if (!a) return;
      const d = n._getFormDataForUpdate(a);
      if (Object.keys(d).length === 0) return;
      const c = ((p = (m = d.system) == null ? void 0 : m.resources) == null ? void 0 : p.currentHealth) != null || ((b = (g = d.system) == null ? void 0 : g.resources) == null ? void 0 : b.hitLocations) != null;
      n.actor.update(d).then(() => {
        c && setTimeout(() => n.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (a) => {
      var d, c, m;
      return a && (((c = (d = n.element) == null ? void 0 : d.contains) == null ? void 0 : c.call(d, a)) || n.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(n.id)}`)));
    };
    n._votvBlur = (a) => {
      const d = a.target;
      if (!d || !d.form) return;
      const c = d.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const m = d.form;
      f(m) && (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), u(m));
    }, document.body.addEventListener("blur", n._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var n, u, f;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((n = this.actor.system) == null ? void 0 : n.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), s = t.hitLocations ?? {}, l = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const h = ((f = s[y]) == null ? void 0 : f.value) ?? 0, a = l[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, N._healthStatusFromRatio(a, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, l, r, n, u, f, y, h, a, d, c;
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
            const P = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
            g = ((l = (await this.actor.createEmbeddedDocuments("Item", [P]))[0]) == null ? void 0 : l.id) ?? g;
          }
          const b = (((r = p.system) == null ? void 0 : r.kind) ?? "passive").toString(), S = this.actor.system.abilities ?? {};
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
          const _ = b === "active" ? "active" : "passive", L = Array.isArray((n = S[_]) == null ? void 0 : n.items) ? S[_].items.slice() : Array.isArray(S[_]) ? S[_].slice() : [];
          L.includes(g) || L.push(g), await this.actor.update({ [`system.abilities.${_}.items`]: L });
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
            const _ = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
            S = ((y = (await g.createEmbeddedDocuments("Item", [_]))[0]) == null ? void 0 : y.id) ?? S;
          }
          if (b) {
            const _ = ((h = g.system) == null ? void 0 : h.weapons) ?? {}, L = (_.slotOrder ?? "").trim(), P = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = L ? L.split(/\s*,\s*/).filter((A) => P.includes(A)) : [], k = O.filter((A) => {
              var x;
              return (((x = _[A]) == null ? void 0 : x.itemId) ?? "").trim() === S;
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
        if (p && p.documentName === "Item" && p.type === "Pancel") {
          const g = this.actor;
          if (((a = p.parent) == null ? void 0 : a.id) !== g.id) {
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
    var l, r, n;
    const t = ((l = i.dataTransfer) == null ? void 0 : l.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var n, u, f, y, h, a;
    i.preventDefault(), i.stopPropagation(), (n = i.currentTarget) == null || n.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = i.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((f = i.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const l = await fromUuid(s.uuid);
    if (!l || l.type !== "Fegyver") return;
    if (((y = l.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [d]);
      return;
    }
    const r = l.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
      [`system.weapons.${e}.name`]: l.name,
      [`system.weapons.${e}.damage`]: ((h = l.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((a = l.system) == null ? void 0 : a.bonus) ?? ""
    }), await l.update({ "system.equipped": !0 });
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
    const l = this.actor.items.contents.slice().sort((h, a) => {
      const d = typeof h.sort == "number" ? h.sort : 0, c = typeof a.sort == "number" ? a.sort : 0;
      return d - c;
    }).map((h) => h.id), r = l.indexOf(t), n = l.indexOf(e);
    if (r === -1 || n === -1) return;
    l.splice(r, 1), l.splice(n, 0, t);
    const u = l.map((h, a) => ({
      _id: h,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(i) {
    var s, l, r;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
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
  async _postItemToChat(i) {
    var n, u;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((n = e.system) == null ? void 0 : n.description) ?? "").trim();
    let s;
    e.type === "MikroChip" ? s = ((((u = e.system) == null ? void 0 : u.abilityType) ?? "passive") === "active" ? "Aktív" : "Passzív") + " Mikro-Chip" : s = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${s}</p>
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: r,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var y, h, a;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", s = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, l = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", n = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", u = l ? `<p>${l}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${n}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, l;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((l = i.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
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
    var r, n, u;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let l = s.id;
    if (((n = s.parent) == null ? void 0 : n.id) !== this.actor.id) {
      const f = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      l = ((u = (await this.actor.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : u.id) ?? l;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: l,
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
    let l = s.id;
    if (((f = s.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      l = ((y = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : y.id) ?? l;
    }
    const r = this.actor.system.abilities ?? {}, n = Array.isArray((h = r[e]) == null ? void 0 : h.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    n.includes(l) || n.push(l), await this.actor.update({ [`system.abilities.${e}.items`]: n });
  }
  _onMicrochipSlotDragOver(i, e) {
    var l, r, n;
    const t = ((l = i.dataTransfer) == null ? void 0 : l.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var n, u, f, y, h;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = i.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((f = i.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const l = await fromUuid(s.uuid);
    if (!l || l.type !== "MikroChip") return;
    let r = l.id;
    ((y = l.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((h = (await this.actor.createEmbeddedDocuments("Item", [l.toObject()]))[0]) == null ? void 0 : h.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: l.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let l = Number(s) || 0;
    const r = this._getSkillHealthStatus(i);
    r === 1 ? l -= 6 : r === 2 && (l -= 3);
    const u = `3d6${l !== 0 ? l > 0 ? `+${l}` : `${l}` : ""}`, f = new Roll(u);
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
    var l;
    const i = Number(((l = this.actor.system.resources) == null ? void 0 : l.morale) ?? 0) || 0;
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
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, l = this.actor.items.filter((S) => S.type === "Fegyver");
    let r = null;
    t.itemId && (r = l.find((S) => S.id === t.itemId) ?? null);
    const n = r && r.name || t.name || `Fegyver (${i})`, u = Number(t.bonus || 0) || 0, y = (((b = r == null ? void 0 : r.system) == null ? void 0 : b.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(s[y] || 0) || 0, a = u + h, c = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, m = new Roll(c);
    await m.evaluate({ async: !0 });
    const p = m.total >= 18 ? "critical" : m.total <= 3 ? "fumble" : null, g = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${n} – találat`,
      flags: { "vacuum-of-the-void": { resultType: p } },
      rollMode: g
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var u, f, y, h, a, d, c, m, p, g;
    const t = this.actor;
    if (!t) return;
    let s = ((f = (u = t.items).get) == null ? void 0 : f.call(u, i)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === i));
    if (!s || s.type !== "Fegyver") return;
    let l = (((a = s.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!l && e && (l = (((((d = t.system) == null ? void 0 : d.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !l) {
      (g = (c = ui.notifications) == null ? void 0 : c.warn) == null || g.call(c, ((p = (m = game.i18n) == null ? void 0 : m.localize) == null ? void 0 : p.call(m, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(l);
    await r.evaluate({ async: !0 });
    const n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: n
    });
  }
};
R(N, "PARTS", foundry.utils.mergeObject(F(N, N, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), R(N, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(N, N, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((tt = F(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : tt.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((it = F(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : it.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((rt = (st = F(N, N, "DEFAULT_OPTIONS")) == null ? void 0 : st.window) == null ? void 0 : rt.contentClasses) ?? [],
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
    e._votvProfileImgClick = (r) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, l = (r) => {
      var n, u, f;
      return r && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, r)) || e.id && ((f = r.closest) == null ? void 0 : f.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var u, f, y;
      const n = ((u = r.target) == null ? void 0 : u.form) ?? ((y = (f = r.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      l(n) && s(n);
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
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {});
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), e.system = t, e;
  }
};
R(H, "PARTS", foundry.utils.mergeObject(F(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), R(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((at = F(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (r) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, l = (r) => {
      var n, u, f;
      return r && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, r)) || e.id && ((f = r.closest) == null ? void 0 : f.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var u, f, y;
      const n = ((u = r.target) == null ? void 0 : u.form) ?? ((y = (f = r.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      l(n) && s(n);
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
R(B, "PARTS", foundry.utils.mergeObject(F(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), R(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((nt = F(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : nt.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (r) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, l = (r) => {
      var n, u, f;
      return r && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, r)) || e.id && ((f = r.closest) == null ? void 0 : f.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var u, f, y;
      const n = ((u = r.target) == null ? void 0 : u.form) ?? ((y = (f = r.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      l(n) && s(n);
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
R(G, "PARTS", foundry.utils.mergeObject(F(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), R(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ot = F(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ot.form) ?? {}, { submitOnChange: !1 })
}));
let ve = G;
var ct;
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
    e._votvProfileImgClick = (r) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, l = (r) => {
      var n, u, f;
      return r && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, r)) || e.id && ((f = r.closest) == null ? void 0 : f.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var u, f, y;
      const n = ((u = r.target) == null ? void 0 : u.form) ?? ((y = (f = r.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      l(n) && s(n);
    }, e._votvInput = (r) => {
      var f;
      const n = r.target;
      if ((n == null ? void 0 : n.name) === "name") return;
      const u = (n == null ? void 0 : n.form) ?? ((f = n == null ? void 0 : n.closest) == null ? void 0 : f.call(n, "form"));
      l(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => s(u), 300));
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
R(z, "PARTS", foundry.utils.mergeObject(F(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), R(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ct = F(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : ct.form) ?? {}, { submitOnChange: !0 })
}));
let ke = z;
var lt;
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
    e._votvProfileImgClick = (r) => {
      var u, f, y, h;
      if (!e.isEditable || !((f = (u = r.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = r.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse("data", "assets");
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const n = e._getFormDataForUpdate(r);
      Object.keys(n).length !== 0 && e.document.update(n).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, l = (r) => {
      var n, u, f;
      return r && (((u = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : u.call(n, r)) || e.id && ((f = r.closest) == null ? void 0 : f.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var u, f, y;
      const n = ((u = r.target) == null ? void 0 : u.form) ?? ((y = (f = r.target) == null ? void 0 : f.closest) == null ? void 0 : y.call(f, "form"));
      l(n) && s(n);
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
R(W, "PARTS", foundry.utils.mergeObject(F(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), R(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((lt = F(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : lt.form) ?? {}, { submitOnChange: !1 })
}));
let we = W;
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
    if (e._votvProfileImgClick = (l) => {
      var n, u, f, y, h;
      if (!e.isEditable || !((n = e.element) != null && n.contains(l.target)) || !((f = (u = l.target) == null ? void 0 : u.closest) != null && f.call(u, ".profile")) && ((h = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : h.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation(), new FilePicker({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse("data", "assets");
    }, document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const t = (l) => {
      if (!l) return;
      const r = e._getFormDataForUpdate(l);
      Object.keys(r).length !== 0 && e.document.update(r).catch((n) => console.warn("VoidEgyebSheet save failed", n));
    }, s = (l) => {
      var r, n, u;
      return l && (((n = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : n.call(r, l)) || e.id && ((u = l.closest) == null ? void 0 : u.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var n, u, f;
      const r = ((n = l.target) == null ? void 0 : n.form) ?? ((f = (u = l.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "form"));
      s(r) && t(r);
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
R(Y, "PARTS", foundry.utils.mergeObject(F(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), R(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(F(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ut = F(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 })
}));
let Ie = Y;
const dt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, s, l;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Dt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Lt, CONFIG.Item.dataModels.Pancel = Et, CONFIG.Item.dataModels.MikroChip = Ft, CONFIG.Item.dataModels.Kepesseg = Ve, CONFIG.Item.dataModels.ability = Ve, CONFIG.Item.dataModels.Targy = Nt, CONFIG.Item.dataModels.Egyeb = xt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", (l = CONFIG.Item).typeLabels ?? (l.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ge, {
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
  const E = 500;
  Hooks.on("updateActor", (r, n, u, f) => {
    var S, _, L, P, O;
    const y = r == null ? void 0 : r.id;
    if (!y) return;
    const h = document.activeElement, a = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), d = [], c = (S = game.actors) == null ? void 0 : S.get(y);
    c != null && c.apps && d.push(...Array.from(c.apps));
    const m = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of m)
      ((_ = k.document) == null ? void 0 : _.id) !== y || ((L = k.document) == null ? void 0 : L.documentName) !== "Actor" || ((P = k.constructor) == null ? void 0 : P.name) !== "VoidKarakterSheet" || d.includes(k) || d.push(k);
    if (a && d.some((k) => {
      const A = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return A && A.contains(h);
    })) return;
    const g = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, b = g && Date.now() - g.at < E ? g.appId : null;
    setTimeout(() => {
      for (const k of d)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== b && k.render(!0);
    }, 0);
  });
});
Hooks.on("ready", () => {
  var E, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, n, u, f, y, h;
      if (!((n = (r = e.target) == null ? void 0 : r.closest) != null && n.call(r, "#actors"))) return;
      const t = (f = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : f.call(u, "[data-document-id]"), s = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!s) return;
      const l = s.includes(".") ? s.split(".").pop() : s;
      l && ((h = game.actors) != null && h.get(l)) && (game.votv._dragSourceActorId = l);
    },
    !0
  ), (E = game.user) != null && E.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
    var e, t;
    try {
      const s = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(s != null && s.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const l = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: dt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await s.create(l);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (s) {
      console.warn("Vacuum of the Void | Default scene creation failed:", s);
    }
  })();
});
Hooks.on("preCreateToken", (E, i, e) => {
  var r, n;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, s = t ?? E.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const l = s ? (n = game.actors) == null ? void 0 : n.get(s) : null;
  !l || l.type !== "Karakter" || E.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (E, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || E.updateSource({
    width: 3840,
    height: 2160,
    "background.src": dt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (E, i, e) => {
  var l, r, n;
  const t = (r = (l = E.flags) == null ? void 0 : l["vacuum-of-the-void"]) == null ? void 0 : r.resultType;
  if (!t) return;
  const s = (n = i == null ? void 0 : i.querySelector) == null ? void 0 : n.call(i, ".dice-roll");
  s && s.classList.add(`votv-${t}`);
});
export {
  ge as V
};
//# sourceMappingURL=vacuum-of-the-void-B1T5g-zl.mjs.map
