var Pt = Object.defineProperty;
var Ft = Object.getPrototypeOf;
var At = Reflect.get;
var Et = (F, i, e) => i in F ? Pt(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var j = (F, i, e) => Et(F, typeof i != "symbol" ? i + "" : i, e);
var A = (F, i, e) => At(Ft(F), e, i);
const { HTMLField: Nt, NumberField: _, SchemaField: P, StringField: v, BooleanField: K, ArrayField: le } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new P({
        name: new v({ required: !1, blank: !0, initial: "" }),
        player: new v({ required: !1, blank: !0, initial: "" }),
        level: new _({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new v({ required: !1, blank: !0, initial: "" }),
        assignment: new v({ required: !1, blank: !0, initial: "" }),
        subAssignment: new v({ required: !1, blank: !0, initial: "" }),
        background: new v({ required: !1, blank: !0, initial: "" }),
        languages: new v({ required: !1, blank: !0, initial: "" })
      }),
      resources: new P({
        health: new P({
          value: new _({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new _({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new P({
          head: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          torso: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          arms: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          }),
          legs: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new K({ required: !1, initial: !1 }),
            box2: new K({ required: !1, initial: !1 }),
            box3: new K({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new P({
          head: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new _({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new P({
          head: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new _({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new P({
          value: new _({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new _({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new _({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new P({
        defense: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new _({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new P({
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
      weapons: new P({
        slotOrder: new v({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new P({
          name: new v({ required: !1, blank: !0, initial: "" }),
          bonus: new v({ required: !1, blank: !0, initial: "" }),
          damage: new v({ required: !1, blank: !0, initial: "" }),
          itemId: new v({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new P({
        microchips: new P({
          slot1: new P({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot2: new P({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          }),
          slot3: new P({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new K({ required: !1, initial: !1 })
          })
        }),
        equipment: new v({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new P({
            name: new v({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new v({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new v({ required: !1, blank: !0, initial: "" }),
            level: new v({ required: !1, blank: !0, initial: "" }),
            other: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new P({
            name: new v({ required: !1, blank: !0, initial: "" }),
            quantity: new _({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new P({
        faji: new P({
          itemId: new v({ required: !1, blank: !0, initial: "" }),
          name: new v({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new P({
          itemId: new v({ required: !1, blank: !0, initial: "" }),
          name: new v({ required: !1, blank: !0, initial: "" })
        }),
        passive: new P({
          items: new le(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new P({
          items: new le(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new P({
        biography: new Nt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: ye, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new ye({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ye({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ye({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Rt, NumberField: Qt, StringField: se } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Rt({ required: !1, initial: !1 }),
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
const { BooleanField: Ut, StringField: ue } = foundry.data.fields;
class Kt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ut({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new ue({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new ue({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new ue({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new ue({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: ge, StringField: tt } = foundry.data.fields;
class Bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new tt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new tt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new ge({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new ge({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new ge({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ht, StringField: it } = foundry.data.fields;
class st extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new it({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new it({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Ht({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: rt } = foundry.data.fields;
class Gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new rt({ required: !1, blank: !0, initial: "" }),
      quantity: new rt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: zt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new zt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function nt(F) {
  if (!F || !Array.isArray(F.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let s = !1;
  const m = (n, u = 1) => {
    if (!Array.isArray(n)) return;
    let o = u;
    for (const c of n) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        m(c.terms, o);
        continue;
      }
      if (typeof c.operator == "string") {
        o = c.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof c.faces == "number" ? c.faces : void 0, g = Array.isArray(c.results) ? c.results : null;
      if (!l || !g || l === 8 || l !== 6) continue;
      const b = !s && o >= 0 && (c.number === 3 || c.number === "3") ? (s = !0, i) : o >= 0 ? e : t;
      for (const k of g) {
        if (!k || k.discarded || k.hidden) continue;
        const I = Number(k.result ?? k);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  m(F.terms, 1);
  const r = i.filter((n) => n === 6).length, a = i.filter((n) => n === 1).length, f = e.filter((n) => n === 6).length, d = t.filter((n) => n === 6).length, y = r + f, h = a + d;
  return y > 0 && y === h ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var at, ot, ct, lt;
const x = class x extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var s, m, r, a;
    if (!i) return { form: null, windowContent: null };
    const e = ((s = i.querySelector) == null ? void 0 : s.call(i, "form.votv.karakter-sheet")) ?? ((m = i.querySelector) == null ? void 0 : m.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, ".window-content")) ?? null;
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
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const m = this.element, r = this.form ?? this.element;
    let a = { scrollState: {}, focus: null };
    if (m) {
      a.scrollState = this._saveScrollState(m);
      const l = document.activeElement, g = r.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      g && b && (a.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const f = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const d = this.element, y = this.form ?? this.element, h = a.scrollState, n = a.focus, u = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", o = () => {
      var l, g;
      if (this._applyScrollState(d, h), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const b = ((l = y.querySelector) == null ? void 0 : l.call(y, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (g = y.querySelector) == null ? void 0 : g.call(y, `[name="${CSS.escape(n.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = n.selectionStart ?? 0, b.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(d, h);
    };
    return (u || n) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), s = Number(e);
    if (s <= 0 || t <= 0) return 0;
    const m = Math.floor(s / 3), r = Math.floor(2 * s / 3);
    return t <= m ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, s, m;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var a;
        return r.type === "Pancel" && ((a = r.system) == null ? void 0 : a.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const a = String(((m = r.system) == null ? void 0 : m.speedPenalty) ?? "").trim().replace(",", "."), f = Number(a);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, s, m;
    const i = (((s = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : s.contents) ?? []).filter(
      (r) => {
        var a;
        return r.type === "Pancel" && ((a = r.system) == null ? void 0 : a.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const a = String(((m = r.system) == null ? void 0 : m.protectionBonus) ?? "").trim().replace(",", "."), f = Number(a);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, n, u, o, c, l, g, b, k;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((u = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : u.resources) ?? {}, m = ((c = (o = s.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : c.value) ?? 0, r = ((l = s.currentHealth) == null ? void 0 : l.legs) ?? 0, a = x._healthStatusFromRatio(r, m), f = Number(((k = (b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let d;
    a === 0 ? d = 0 : a === 1 ? d = -6 : a === 2 ? d = -3 : d = f;
    const y = this._getTotalArmorSpeedPenalty();
    d += y, t.textContent = String(d);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var r, a, f, d;
    const e = i ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const m = (Number(((d = (f = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : f.combat) == null ? void 0 : d.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(m);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, a, f, d;
    const e = x.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, s = ((f = (a = t.hitLocations) == null ? void 0 : a[e]) == null ? void 0 : f.value) ?? 0, m = ((d = t.currentHealth) == null ? void 0 : d[e]) ?? 0;
    return x._healthStatusFromRatio(m, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var a, f, d, y;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((a = i == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, m = ((d = (f = s.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : d.value) ?? 0, r = ((y = s.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return x._healthStatusFromRatio(r, m);
  }
  async _prepareContext(i) {
    var Ee, Ne, $e, xe, je, Re, Me, Ue, Ke, Be, He, Ge, ze, We, Ye, Qe, Je, Xe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number(($e = (Ne = (Ee = this.actor.system) == null ? void 0 : Ee.resources) == null ? void 0 : Ne.stress) == null ? void 0 : $e.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, m = s.hitLocations ?? {}, r = s.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of a) {
      const T = ((xe = m[p]) == null ? void 0 : xe.value) ?? 0, S = r[p] ?? 0;
      e.computedHealthStatus[p] = x._healthStatusFromRatio(S, T);
    }
    const f = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((p) => (Number(r[p]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, n = Number(((Re = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Re.givenSpeed) ?? 0) || 0;
    let u;
    h === 0 ? u = 0 : h === 1 ? u = -6 : h === 2 ? u = -3 : u = n;
    const o = this._getTotalArmorSpeedPenalty();
    u += o, e.effectiveGivenSpeed = u;
    const l = (Number(((Ue = (Me = this.actor.system) == null ? void 0 : Me.combat) == null ? void 0 : Ue.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: u, givenProtection: l } },
      { inplace: !1 }
    );
    const g = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, T] of Object.entries(g)) {
      const S = e.computedHealthStatus[T];
      e.skillHealthStatus[p] = S, e.skillDisabled[p] = S === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const b = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), D = I ? I.split(/\s*,\s*/).filter((p) => k.includes(p)) : [], C = (Ke = this.actor.system.gear) == null ? void 0 : Ke.microchips, q = C && typeof C == "object" && !Array.isArray(C) ? C : {}, w = (((Be = q.slot1) == null ? void 0 : Be.itemId) ?? "").trim(), E = (((He = q.slot2) == null ? void 0 : He.itemId) ?? "").trim(), N = (((Ge = q.slot3) == null ? void 0 : Ge.itemId) ?? "").trim(), wt = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, T) => {
      const S = typeof p.sort == "number" ? p.sort : 0, O = typeof T.sort == "number" ? T.sort : 0;
      return S - O;
    }).map((p) => {
      var X, te, ie, Z, V, ae;
      const T = p.type === "Fegyver", S = p.type === "MikroChip";
      let O = 0, L = "", U = null;
      for (let re = 0; re < D.length; re++) {
        const oe = D[re];
        if ((((X = b[oe]) == null ? void 0 : X.itemId) ?? "") === p.id) {
          O = re + 1, L = ((te = b[oe]) == null ? void 0 : te.bonus) ?? "", U = oe;
          break;
        }
      }
      let M = null;
      S && (w === p.id ? M = "slot1" : E === p.id ? M = "slot2" : N === p.id && (M = "slot3"));
      const ne = T && ((ie = p.system) != null && ie.damage) ? p.system.damage : "", H = T && typeof ((Z = p.system) == null ? void 0 : Z.range) == "string" ? (p.system.range || "").trim() : "", ee = U ? Number((V = b[U]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: T,
        slotAssignment: O,
        slotBonus: L,
        slotKey: U,
        microchipSlotKey: M,
        isEquipped: !!(U || M),
        damage: ne,
        rangeStr: H,
        slotBonusNum: ee,
        quantity: Number(((ae = p.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = wt;
    const de = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((p) => p.type === "Fegyver"), Oe = de.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = Oe;
    const _e = "— Nincs fegyver —", It = D.filter((p) => {
      const S = ((b[p] ?? {}).itemId ?? "").trim();
      return S ? !!de.find((L) => L.id === S) : !1;
    });
    e.weaponSlots = It.map((p, T) => {
      const S = b[p] ?? {}, O = (S.itemId ?? "").trim(), L = Oe.find((U) => U.id === O);
      return {
        slotKey: p,
        itemId: O,
        slotNum: T + 1,
        displayName: (L == null ? void 0 : L.name) || S.name || _e,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(S.bonus) || 0,
        damage: S.damage ?? ""
      };
    });
    const St = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Tt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = de.map((p) => {
      var Ze, Ve, et;
      const T = p.id;
      let S = null, O = {};
      for (const fe of D)
        if ((((Ze = b[fe]) == null ? void 0 : Ze.itemId) ?? "").trim() === T) {
          S = fe, O = b[fe] ?? {};
          break;
        }
      const L = !!S, U = ((Ve = p.system) == null ? void 0 : Ve.equipped) !== void 0 && ((et = p.system) == null ? void 0 : et.equipped) !== null ? !!p.system.equipped : L, M = (p == null ? void 0 : p.system) ?? {}, ne = typeof M.range == "string" ? (M.range || "").trim() : "", H = M.type ?? "", ee = (St[H] ?? H) || "—", X = M.size ?? "", te = (Tt[X] ?? X) || "", ie = [ee, te].filter(Boolean).join(", ") || ee || "—", Z = H === "projectile" || X === "thrown", V = M.quantity, ae = V != null ? String(V).trim() : "1", re = String(O.bonus ?? "").trim(), oe = String(M.bonus ?? "").trim(), Lt = re || oe || "0";
      return {
        slotKey: S ?? "",
        itemId: T,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? _e,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: O.damage ?? M.damage ?? "",
        rangeStr: ne || "—",
        typeLabel: ee,
        typeAndSize: ie,
        quantity: ae,
        quantityDisplay: Z ? ae : "—",
        isProjectile: Z,
        equipped: U,
        special: (M.special ?? "").trim() || "—"
      };
    });
    const Ot = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = Ot.map((p) => {
      var O, L;
      const T = (p == null ? void 0 : p.system) ?? {}, S = ((O = p.system) == null ? void 0 : O.equipped) !== void 0 && ((L = p.system) == null ? void 0 : L.equipped) !== null ? !!p.system.equipped : !1;
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        protectionBonus: (T.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (T.speedPenalty ?? "").toString().trim() || "—",
        level: (T.level ?? "").toString().trim() || "—",
        special: (T.special ?? T.other ?? "").toString().trim() || "—",
        equipped: S
      };
    });
    const _t = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = _t.map((p) => {
      const T = (p == null ? void 0 : p.system) ?? {}, S = (T.description ?? "").trim(), O = S ? S.length > 60 ? S.slice(0, 57) + "…" : S : "—", L = T.quantity != null ? String(T.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: L,
        description: O
      };
    });
    const Dt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = Dt.map((p) => {
      const S = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), O = S ? S.length > 80 ? S.slice(0, 77) + "…" : S : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: O
      };
    });
    const me = (((Je = this.actor.items) == null ? void 0 : Je.contents) ?? []).filter((p) => p.type === "MikroChip"), ce = me.map((p) => ({ id: p.id, name: p.name, img: p.img })), De = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], pe = (p) => {
      var S, O, L;
      const T = [];
      return p !== 1 && T.push((((S = q.slot1) == null ? void 0 : S.itemId) ?? "").trim()), p !== 2 && T.push((((O = q.slot2) == null ? void 0 : O.itemId) ?? "").trim()), p !== 3 && T.push((((L = q.slot3) == null ? void 0 : L.itemId) ?? "").trim()), T.filter(Boolean);
    };
    e.microchipItemsSlot1 = ce.filter((p) => !pe(1).includes(p.id)), e.microchipItemsSlot2 = ce.filter((p) => !pe(2).includes(p.id)), e.microchipItemsSlot3 = ce.filter((p) => !pe(3).includes(p.id)), e.microchipSlots = qe.map((p) => {
      const T = q[p] ?? {}, S = (T.itemId ?? "").trim(), O = me.find((L) => L.id === S);
      return {
        slotKey: p,
        itemId: S,
        displayName: (O == null ? void 0 : O.name) || T.name || De,
        img: (O == null ? void 0 : O.img) || "",
        active: T.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const T = `slot${p}`, S = q[T] ?? {}, O = (S.itemId ?? "").trim(), L = ce.find((U) => U.id === O);
      e[`microchip${p}ItemId`] = O, e[`microchip${p}DisplayName`] = (L == null ? void 0 : L.name) || S.name || De, e[`microchip${p}Img`] = (L == null ? void 0 : L.img) || "";
    }), e.microchipsTable = me.map((p) => {
      var X, te, ie, Z;
      const T = p.id;
      let S = null;
      for (const V of qe)
        if ((((X = q[V]) == null ? void 0 : X.itemId) ?? "").trim() === T) {
          S = V;
          break;
        }
      const O = !!S, L = ((te = p == null ? void 0 : p.system) == null ? void 0 : te.abilityType) ?? "", U = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", M = L === "active", ne = Number((ie = p == null ? void 0 : p.system) == null ? void 0 : ie.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, H = (((Z = p == null ? void 0 : p.system) == null ? void 0 : Z.description) ?? "").trim(), ee = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
      return {
        itemId: T,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: U,
        description: ee,
        kp: ne,
        isActive: M,
        slotKey: S ?? "",
        equipped: O
      };
    });
    const Ce = this.actor.system.abilities ?? {}, qt = (((Xe = this.actor.items) == null ? void 0 : Xe.contents) ?? []).map((p) => {
      var T, S, O;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((T = p.system) == null ? void 0 : T.kind) ?? "passive",
        description: ((S = p.system) == null ? void 0 : S.description) ?? "",
        kp: Number(((O = p.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), Le = new Map(qt.map((p) => [p.id, p])), Ct = "— Nincs képesség —", Pe = (p) => {
      const T = Ce[p] ?? {}, S = (T.itemId ?? "").trim(), O = S ? Le.get(S) : null, L = (O == null ? void 0 : O.description) ?? "", U = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: S,
        displayName: (O == null ? void 0 : O.name) || T.name || Ct,
        img: (O == null ? void 0 : O.img) || "",
        description: L,
        kp: U
      };
    };
    e.abilityFajiSlot = Pe("faji"), e.abilityHatterSlot = Pe("hatter");
    const Fe = (p) => {
      const T = Ce[p];
      return T ? Array.isArray(T == null ? void 0 : T.items) ? T.items : Array.isArray(T) ? T : [] : [];
    }, Ae = (p) => p.map((T) => {
      const S = Le.get(T);
      return S ? {
        id: S.id,
        name: S.name,
        img: S.img,
        description: S.description,
        kp: S.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Ae(Fe("passive")), e.abilityActiveList = Ae(Fe("active")), e;
  }
  _attachFrameListeners(i) {
    var y, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const o = (n.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-G-oo3d4B.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var c, l, g;
      n.preventDefault(), n.stopPropagation();
      const u = n.currentTarget;
      let o = (u.dataset.itemId ?? "").trim();
      if (!o) {
        const b = (u.dataset.slot ?? "").trim();
        if (!b) return;
        o = (((((l = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((g = u.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (n) => {
      var c;
      const u = n ? n.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!u) return;
      const o = Number(u.value) || 0;
      u.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const m = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    m && s({ currentTarget: m }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (n) => {
      var c, l, g;
      n.preventDefault(), n.stopPropagation();
      const u = ((g = (l = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var g;
      n.preventDefault();
      const u = n.currentTarget, o = u.dataset.skill, c = ((g = u.textContent) == null ? void 0 : g.trim()) || o, { openRollSheetForSkill: l } = await import("./roll-sheet-G-oo3d4B.mjs");
      l(this.actor, o, c);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (n) => {
      var k, I, D, C, q, w, E;
      n.preventDefault();
      const o = n.currentTarget.closest(".karakter-weapon-slot"), c = o == null ? void 0 : o.dataset.slot;
      if (!c) return;
      const g = (((I = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[c]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!g) return;
      const b = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, g)) ?? ((w = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : w.call(q, (N) => N.id === g));
      (E = b == null ? void 0 : b.sheet) == null || E.render(!0);
    });
    const r = (n, u) => {
      var l;
      const o = n.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (c) {
        if (n.classList.contains("karakter-weapon-label") && (u.altKey || u.shiftKey || u.ctrlKey || u.metaKey)) {
          const g = n.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (l = c.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), r(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), r(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const u = n.currentTarget, o = u.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      let l = Number(u.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await c.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const o = n.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor, l = c.items.get(o), g = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, k = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = k ? k.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], C = D.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (C) {
          const q = D.filter((w) => w !== C);
          g["system.weapons.slotOrder"] = q.join(","), g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(g).length && await c.update(g), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var C, q;
      const u = n.currentTarget, o = (u.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, g = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], I = k.find((w) => {
        var E;
        return (((E = l[w]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (u.checked) {
        if (I) return;
        let w = k.find((N) => {
          var R;
          return !((R = l[N]) != null && R.itemId);
        });
        const E = new Set(k);
        if (!w) {
          const N = b.find((R) => !E.has(R));
          if (!N) return;
          w = N, k.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${w}.damage`]: ((C = c == null ? void 0 : c.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = c == null ? void 0 : c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (I) {
        const w = k.filter((E) => E !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const u = n.currentTarget;
      if (u.disabled) return;
      const o = u.closest(".karakter-microchip-slot-select-wrap"), c = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var w;
      n.preventDefault();
      const u = n.currentTarget, o = u.closest(".karakter-microchip-slot-select-wrap"), c = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), l = c == null ? void 0 : c.dataset.slot;
      if (!l) return;
      const g = (u.dataset.itemId ?? "").trim(), b = (u.dataset.itemName ?? ((w = u.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (u.dataset.itemImg ?? "").trim(), I = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let D = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      k ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", c == null || c.insertBefore(D, I)), D.src = k, D.style.display = "") : D && D.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const C = g ? this.actor.items.get(g) : null, q = {
        [`system.gear.microchips.${l}.itemId`]: g,
        [`system.gear.microchips.${l}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      g && (q[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var b, k;
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const o = this.actor.items.get(u);
      if (!o || o.type !== "MikroChip") return;
      const c = ((k = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((I) => {
        var D;
        return (((D = c[I]) == null ? void 0 : D.itemId) ?? "").trim() === u;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const u = n.currentTarget.dataset.slot;
      if (!u) return;
      const o = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${u}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, u) => {
      const o = u.dataset.slot;
      u.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, o)), u.addEventListener("dragleave", (c) => {
        var l;
        return (l = c.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), u.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, o));
    }), t.find(".karakter-ability-slot-single").each((n, u) => {
      const o = u.dataset.slot;
      o && (u.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, o)), u.addEventListener("dragleave", (c) => {
        var l;
        return (l = c.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), u.addEventListener("drop", (c) => {
        var l;
        (l = c.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, u) => {
      const o = u.dataset.area;
      o && (u.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, o)), u.addEventListener("dragleave", (c) => {
        var l;
        return (l = c.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), u.addEventListener("drop", (c) => {
        var l;
        (l = c.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.slot;
      u && await this.actor.update({
        [`system.abilities.${u}.itemId`]: "",
        [`system.abilities.${u}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var b;
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.area, o = n.currentTarget.dataset.itemId;
      if (!u || !o) return;
      const c = this.actor.system.abilities ?? {}, g = (Array.isArray((b = c[u]) == null ? void 0 : b.items) ? c[u].items.slice() : []).filter((k) => k !== o);
      await this.actor.update({ [`system.abilities.${u}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var l;
      n.preventDefault();
      const o = n.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      (l = c == null ? void 0 : c.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const o = n.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (n) => {
      n.preventDefault();
      const o = n.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(o) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, u) => {
      this._resizeWeaponQuantityInput(u);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const u = n.currentTarget, o = (u.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = (u.value ?? "").trim();
      await c.update({ "system.quantity": l }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const u = n.currentTarget, o = (u.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": u.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var C, q;
      const u = n.currentTarget, o = (u.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, g = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], I = k.find((w) => {
        var E;
        return (((E = l[w]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (u.checked) {
        if (I) return;
        let w = k.find((N) => {
          var R;
          return !((R = l[N]) != null && R.itemId);
        });
        const E = new Set(k);
        if (!w) {
          const N = b.find((R) => !E.has(R));
          if (!N) return;
          w = N, k.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: c.name ?? "",
          [`system.weapons.${w}.damage`]: ((C = c.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (I) {
        const w = k.filter((E) => E !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const o = n.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor, l = c.items.get(o), g = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, k = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = k ? k.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], C = D.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (C) {
          const q = D.filter((w) => w !== C);
          g["system.weapons.slotOrder"] = q.join(","), g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(g).length && await c.update(g), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const o = this.actor.items.get(u);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((n, u) => {
      this._resizeWeaponQuantityInput(u);
    }), t.on("change", ".karakter-item-quantity-input", async (n) => {
      const u = n.currentTarget, o = (u.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Targy") return;
      const l = (u.value ?? "").trim();
      await c.update({ "system.quantity": l }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const o = this.actor.items.get(u);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    });
    const a = this, f = (n) => {
      var c, l, g, b;
      if (!n) return;
      const u = a._getFormDataForUpdate(n);
      if (Object.keys(u).length === 0) return;
      const o = ((l = (c = u.system) == null ? void 0 : c.resources) == null ? void 0 : l.currentHealth) != null || ((b = (g = u.system) == null ? void 0 : g.resources) == null ? void 0 : b.hitLocations) != null;
      a.actor.update(u).then(() => {
        o && setTimeout(() => a.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, d = (n) => {
      var u, o, c;
      return n && (((o = (u = a.element) == null ? void 0 : u.contains) == null ? void 0 : o.call(u, n)) || a.id && ((c = n.closest) == null ? void 0 : c.call(n, `#${CSS.escape(a.id)}`)));
    };
    a._votvBlur = (n) => {
      var g;
      const u = n.target;
      if (!u || !u.form) return;
      const o = u.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = u.form;
      if (!d(c)) return;
      const l = n.relatedTarget;
      l && (c.contains(l) || a.id && ((g = l.closest) != null && g.call(l, `#${CSS.escape(a.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: a.id, at: Date.now() }), f(c));
    }, document.body.addEventListener("blur", a._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var a, f, d;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((a = this.actor.system) == null ? void 0 : a.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), s = t.hitLocations ?? {}, m = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const h = ((d = s[y]) == null ? void 0 : d.value) ?? 0, n = m[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, x._healthStatusFromRatio(n, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, m, r, a, f, d, y, h, n, u, o;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            c = l;
            break;
          }
      }
      if (c) {
        const l = await fromUuid(c);
        if (l && l.documentName === "Item" && (l.type === "Kepesseg" || l.type === "ability")) {
          let g = l.id;
          if (((s = l.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            g = ((m = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : m.id) ?? g;
          }
          const b = (((r = l.system) == null ? void 0 : r.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", D = Array.isArray((a = k[I]) == null ? void 0 : a.items) ? k[I].items.slice() : Array.isArray(k[I]) ? k[I].slice() : [];
          D.includes(g) || D.push(g), await this.actor.update({ [`system.abilities.${I}.items`]: D });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            c = l;
            break;
          }
      }
      if (c) {
        const l = await fromUuid(c);
        if (l && l.documentName === "Item" && l.type === "Fegyver") {
          const g = this.actor, b = ((d = l.parent) == null ? void 0 : d.id) !== g.id;
          let k = l.id;
          if (b) {
            const I = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            k = ((y = (await g.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? k;
          }
          if (b) {
            const I = ((h = g.system) == null ? void 0 : h.weapons) ?? {}, D = (I.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = D ? D.split(/\s*,\s*/).filter((E) => C.includes(E)) : [], w = q.filter((E) => {
              var N;
              return (((N = I[E]) == null ? void 0 : N.itemId) ?? "").trim() === k;
            });
            if (w.length > 0) {
              const N = {
                "system.weapons.slotOrder": q.filter((R) => !w.includes(R)).join(",")
              };
              for (const R of w)
                N[`system.weapons.${R}.itemId`] = "", N[`system.weapons.${R}.name`] = "", N[`system.weapons.${R}.damage`] = "", N[`system.weapons.${R}.bonus`] = "";
              await g.update(N);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const g = this.actor;
          if (((n = l.parent) == null ? void 0 : n.id) !== g.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await g.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const g = this.actor;
          ((u = l.parent) == null ? void 0 : u.id) !== g.id && await g.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const g = this.actor;
          ((o = l.parent) == null ? void 0 : o.id) !== g.id && await g.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var m, r, a;
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var a, f, d, y, h, n;
    i.preventDefault(), i.stopPropagation(), (a = i.currentTarget) == null || a.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const m = await fromUuid(s.uuid);
    if (!m || m.type !== "Fegyver") return;
    if (((y = m.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(m.toObject(), { system: { ...m.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [u]);
      return;
    }
    const r = m.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
      [`system.weapons.${e}.name`]: m.name,
      [`system.weapons.${e}.damage`]: ((h = m.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = m.system) == null ? void 0 : n.bonus) ?? ""
    }), await m.update({ "system.equipped": !0 });
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
    var d, y;
    i.preventDefault(), (d = i.currentTarget) == null || d.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const m = this.actor.items.contents.slice().sort((h, n) => {
      const u = typeof h.sort == "number" ? h.sort : 0, o = typeof n.sort == "number" ? n.sort : 0;
      return u - o;
    }).map((h) => h.id), r = m.indexOf(t), a = m.indexOf(e);
    if (r === -1 || a === -1) return;
    m.splice(r, 1), m.splice(a, 0, t);
    const f = m.map((h, n) => ({
      _id: h,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(i) {
    var s, m, r;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    var f, d, y;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let s, m = "";
    if (e.type === "MikroChip") {
      const h = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (s = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const n = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        n > 0 && (m = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      s = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${s}</p>
      ${m}
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", s = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, m = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", a = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", f = m ? `<p>${m}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${a}
      ${f}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var s, m;
    const e = ((s = i.dataTransfer) == null ? void 0 : s.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
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
    var r, a, f;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let m = s.id;
    if (((a = s.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      m = ((f = (await this.actor.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : f.id) ?? m;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: m,
      [`system.abilities.${e}.name`]: s.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var s;
    this._parseAbilityDrop(i) && (i.preventDefault(), (s = i.currentTarget) == null || s.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var f, d, y, h;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let m = s.id;
    if (((d = s.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      m = ((y = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : y.id) ?? m;
    }
    const r = this.actor.system.abilities ?? {}, a = Array.isArray((h = r[e]) == null ? void 0 : h.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    a.includes(m) || a.push(m), await this.actor.update({ [`system.abilities.${e}.items`]: a });
  }
  _onMicrochipSlotDragOver(i, e) {
    var m, r, a;
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (s == null ? void 0 : s.type) === "Item" && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var a, f, d, y, h;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let s;
    try {
      s = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((s == null ? void 0 : s.type) !== "Item" || !(s != null && s.uuid)) return;
    const m = await fromUuid(s.uuid);
    if (!m || m.type !== "MikroChip") return;
    let r = m.id;
    ((y = m.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((h = (await this.actor.createEmbeddedDocuments("Item", [m.toObject()]))[0]) == null ? void 0 : h.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: m.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const s = (this.actor.system.skills ?? {})[i] ?? 0;
    let m = Number(s) || 0;
    const r = this._getSkillHealthStatus(i);
    r === 1 ? m -= 6 : r === 2 && (m -= 3);
    const f = `3d6${m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""}`, d = new Roll(f);
    await d.evaluate({ async: !0 });
    const { resultType: y, label: h } = nt(d), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: n
    });
  }
  async _rollMorale() {
    var m;
    const i = Number(((m = this.actor.system.resources) == null ? void 0 : m.morale) ?? 0) || 0;
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
    var k;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, m = this.actor.items.filter((I) => I.type === "Fegyver");
    let r = null;
    t.itemId && (r = m.find((I) => I.id === t.itemId) ?? null);
    const a = r && r.name || t.name || `Fegyver (${i})`, f = Number(t.bonus || 0) || 0, y = (((k = r == null ? void 0 : r.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(s[y] || 0) || 0, n = f + h, o = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, c = new Roll(o);
    await c.evaluate({ async: !0 });
    const { resultType: l, label: g } = nt(c), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${a} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: g } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var f, d, y, h, n, u, o, c, l, g;
    const t = this.actor;
    if (!t) return;
    let s = ((d = (f = t.items).get) == null ? void 0 : d.call(f, i)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === i));
    if (!s || s.type !== "Fegyver") return;
    let m = (((n = s.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!m && e && (m = (((((u = t.system) == null ? void 0 : u.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !m) {
      (g = (o = ui.notifications) == null ? void 0 : o.warn) == null || g.call(o, ((l = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : l.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(m);
    await r.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${s.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }
};
j(x, "PARTS", foundry.utils.mergeObject(
  A(x, x, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), j(x, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  A(x, x, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((at = A(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ot = A(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : ot.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((lt = (ct = A(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : ct.window) == null ? void 0 : lt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
j(x, "BODY_PART_BY_SKILL", {
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
let he = x;
var ut, dt, mt, pt;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  async _prepareContext(i) {
    var d, y, h, n, u;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((d = this.actor) == null ? void 0 : d.system), e.showDeathSkull = !1;
    const t = ((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.abilities) ?? {}, s = (((u = (n = this.actor) == null ? void 0 : n.items) == null ? void 0 : u.contents) ?? []).filter((o) => o.type === "Kepesseg" || o.type === "ability").map((o) => {
      var c, l;
      return {
        id: o.id,
        name: o.name,
        img: o.img,
        description: ((c = o.system) == null ? void 0 : c.description) ?? "",
        kp: Number(((l = o.system) == null ? void 0 : l.kp) ?? 0) || 0
      };
    }), m = new Map(s.map((o) => [o.id, o])), r = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = r, e.abilityHatterSlot = r;
    const a = (o) => {
      const c = t[o];
      return c ? Array.isArray(c == null ? void 0 : c.items) ? c.items : Array.isArray(c) ? c : [] : [];
    }, f = (o) => (o || []).map((c) => {
      const l = m.get(c);
      return l ? { id: l.id, name: l.name, img: l.img, description: l.description, kp: l.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = f(a("passive")), e.abilityActiveList = f(a("active")), e;
  }
  _attachFrameListeners(i) {
    var a;
    super._attachFrameListeners(i);
    const e = this.form ?? ((a = i == null ? void 0 : i.querySelector) == null ? void 0 : a.call(i, "form.votv.npc-sheet")) ?? i ?? this.element;
    (e ? $(e) : $([])).on("click", ".karakter-portrait-img", (f) => {
      var h, n, u;
      if (f.preventDefault(), f.stopPropagation(), !this.actor) return;
      const d = ((u = (n = (h = foundry.applications) == null ? void 0 : h.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    });
    const s = this, m = (f) => {
      if (!f) return;
      const d = s._getFormDataForUpdate(f);
      Object.keys(d).length !== 0 && s.actor.update(d).catch((y) => console.warn("VoidNpcSheet save failed", y));
    }, r = (f) => {
      var d, y, h;
      return f && (((y = (d = s.element) == null ? void 0 : d.contains) == null ? void 0 : y.call(d, f)) || s.id && ((h = f.closest) == null ? void 0 : h.call(f, `#${CSS.escape(s.id)}`)));
    };
    s._votvNpcBlur = (f) => {
      var u;
      const d = f.target;
      if (!d || !d.form) return;
      const y = d.tagName;
      if (y !== "INPUT" && y !== "TEXTAREA" && y !== "SELECT") return;
      const h = d.form;
      if (!r(h)) return;
      const n = f.relatedTarget;
      n && (h.contains(n) || s.id && ((u = n.closest) != null && u.call(n, `#${CSS.escape(s.id)}`))) || m(h);
    }, document.body.addEventListener("blur", s._votvNpcBlur, !0);
  }
  _tearDown(i) {
    var t, s, m;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((s = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : s.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && this.actor.update(r).catch((a) => console.warn("VoidNpcSheet save on close failed", a));
    }
    return (m = super._tearDown) == null ? void 0 : m.call(this, i);
  }
  async _onDropItem(i, e) {
    var f, d, y, h, n, u, o, c, l;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, i, e);
    const s = ((g) => {
      var k;
      if (!g) return null;
      const b = g.uuid ?? g.documentUuid ?? ((k = g.data) == null ? void 0 : k.uuid) ?? (typeof g == "string" ? g : null);
      if (b) return b;
      if (typeof g == "object") {
        for (const I of Object.values(g))
          if (typeof I == "string" && I.includes(".") && I.startsWith("Item.")) return I;
      }
      return null;
    })(e);
    if (!s) return (d = super._onDropItem) == null ? void 0 : d.call(this, i, e);
    const m = await fromUuid(s);
    if (!m || m.documentName !== "Item") return (y = super._onDropItem) == null ? void 0 : y.call(this, i, e);
    const r = this.actor;
    if (m.type === "Kepesseg" || m.type === "ability") {
      let g = m.id;
      if (((h = m.parent) == null ? void 0 : h.id) !== r.id) {
        const C = foundry.utils.mergeObject(m.toObject(), { type: "Kepesseg" });
        g = ((n = (await r.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : n.id) ?? g;
      }
      const b = (((u = m.system) == null ? void 0 : u.kind) ?? "passive").toString(), k = ((o = r.system) == null ? void 0 : o.abilities) ?? {}, I = b === "active" ? "active" : "passive", D = Array.isArray((c = k[I]) == null ? void 0 : c.items) ? k[I].items.slice() : Array.isArray(k[I]) ? k[I].slice() : [];
      D.includes(g) || D.push(g), await r.update({ [`system.abilities.${I}.items`]: D }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((l = m.parent) == null ? void 0 : l.id) === r.id) return;
    const a = m.toObject();
    m.type === "Fegyver" && foundry.utils.mergeObject(a, { system: { ...a.system ?? {}, equipped: !1 } }, { inplace: !0 }), m.type === "Pancel" && foundry.utils.mergeObject(a, { system: { ...a.system ?? {}, equipped: !1 } }, { inplace: !0 }), await r.createEmbeddedDocuments("Item", [a]);
  }
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const s of i.elements) {
      if (!s.name || s.disabled || s.type === "radio" && !s.checked) continue;
      let m;
      s.type === "checkbox" ? m = s.checked : s.type === "number" ? m = s.value === "" ? 0 : Number(s.value) : m = s.value ?? "", m !== void 0 && foundry.utils.setProperty(e, s.name, m);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const s = e.name;
      (s === void 0 || typeof s == "string" && s.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
j(B, "PARTS", foundry.utils.mergeObject(
  A(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), j(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  A(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((ut = A(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((dt = A(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : dt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((pt = (mt = A(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : mt.window) == null ? void 0 : pt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let be = B;
var ft;
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
      var d, y, h, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (h = r.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const a = ((c = (o = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, m = (r) => {
      var a, f, d;
      return r && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, d, y;
      const a = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
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
j(G, "PARTS", foundry.utils.mergeObject(A(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), j(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ft = A(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ft.form) ?? {}, { submitOnChange: !1 })
}));
let ve = G;
var yt;
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
      var d, y, h, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (h = r.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const a = ((c = (o = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, m = (r) => {
      var a, f, d;
      return r && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, d, y;
      const a = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
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
j(z, "PARTS", foundry.utils.mergeObject(A(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), j(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((yt = A(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 })
}));
let ke = z;
var gt;
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
      var d, y, h, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (h = r.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const a = ((c = (o = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, m = (r) => {
      var a, f, d;
      return r && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, d, y;
      const a = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
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
j(W, "PARTS", foundry.utils.mergeObject(A(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), j(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((gt = A(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : gt.form) ?? {}, { submitOnChange: !1 })
}));
let we = W;
var ht;
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
    e._votvProfileImgClick = (r) => {
      var d, y, h, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (h = r.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const a = ((c = (o = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, m = (r) => {
      var a, f, d;
      return r && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, d, y;
      const a = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
    }, e._votvInput = (r) => {
      var d;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const f = (a == null ? void 0 : a.form) ?? ((d = a == null ? void 0 : a.closest) == null ? void 0 : d.call(a, "form"));
      m(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => s(f), 300));
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
j(Y, "PARTS", foundry.utils.mergeObject(A(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), j(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ht = A(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ht.form) ?? {}, { submitOnChange: !0 })
}));
let Ie = Y;
var bt;
const Q = class Q extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, y, h, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (h = r.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const a = ((c = (o = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, m = (r) => {
      var a, f, d;
      return r && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, d, y;
      const a = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
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
j(Q, "PARTS", foundry.utils.mergeObject(A(Q, Q, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), j(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(Q, Q, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((bt = A(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : bt.form) ?? {}, { submitOnChange: !1 })
}));
let Se = Q;
var vt;
const J = class J extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, y, h, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (h = r.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const a = ((c = (o = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const s = (r) => {
      if (!r) return;
      const a = e._getFormDataForUpdate(r);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, m = (r) => {
      var a, f, d;
      return r && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var f, d, y;
      const a = ((f = r.target) == null ? void 0 : f.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
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
j(J, "PARTS", foundry.utils.mergeObject(A(J, J, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), j(J, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(J, J, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((vt = A(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 })
}));
let Te = J;
const kt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, s, m;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Mt, CONFIG.Item.dataModels.Pancel = Kt, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = st, CONFIG.Item.dataModels.ability = st, CONFIG.Item.dataModels.Targy = Gt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (s = CONFIG.Actor).typeLabels ?? (s.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", he, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", be, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ve, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ke, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ie, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Se, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Te, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const F = 500;
  Hooks.on("updateActor", (r, a, f, d) => {
    var k, I, D, C, q;
    const y = r == null ? void 0 : r.id;
    if (!y) return;
    const h = document.activeElement, n = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), u = [], o = (k = game.actors) == null ? void 0 : k.get(y);
    o != null && o.apps && u.push(...Array.from(o.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of c)
      ((I = w.document) == null ? void 0 : I.id) !== y || ((D = w.document) == null ? void 0 : D.documentName) !== "Actor" || ((C = w.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || u.includes(w) || u.push(w);
    if (n && u.some((w) => {
      const E = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return E && E.contains(h);
    })) return;
    const g = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, b = g && Date.now() - g.at < F ? g.appId : null;
    setTimeout(() => {
      for (const w of u)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (r, a, f, d) => {
    var u, o, c;
    const y = r == null ? void 0 : r.parent;
    if (!y || y.documentName !== "Actor" || y.type !== "Karakter" || r.type !== "Fegyver") return;
    const h = ((u = y.system) == null ? void 0 : u.weapons) ?? {}, n = {};
    for (const [l, g] of Object.entries(h)) {
      if (!l.startsWith("slot")) continue;
      const b = ((g == null ? void 0 : g.itemId) ?? "").trim();
      !b || b !== r.id || (n[`system.weapons.${l}.name`] = r.name ?? "", n[`system.weapons.${l}.damage`] = ((o = r.system) == null ? void 0 : o.damage) ?? "", n[`system.weapons.${l}.bonus`] = ((c = r.system) == null ? void 0 : c.bonus) ?? "");
    }
    Object.keys(n).length && y.update(n);
  });
});
Hooks.on("ready", () => {
  var F, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, a, f, d, y, h;
      if (!((a = (r = e.target) == null ? void 0 : r.closest) != null && a.call(r, "#actors"))) return;
      const t = (d = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : d.call(f, "[data-document-id]"), s = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!s) return;
      const m = s.includes(".") ? s.split(".").pop() : s;
      m && ((h = game.actors) != null && h.get(m)) && (game.votv._dragSourceActorId = m);
    },
    !0
  ), (F = game.user) != null && F.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
    var e, t;
    try {
      const s = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(s != null && s.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const m = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: kt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await s.create(m);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (s) {
      console.warn("Vacuum of the Void | Default scene creation failed:", s);
    }
  })();
});
Hooks.on("preCreateToken", (F, i, e) => {
  var r, a;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, s = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const m = s ? (a = game.actors) == null ? void 0 : a.get(s) : null;
  !m || m.type !== "Karakter" || F.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (F, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || F.updateSource({
    width: 3840,
    height: 2160,
    "background.src": kt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (F, i, e) => {
  var a, f;
  const t = ((a = F.flags) == null ? void 0 : a["vacuum-of-the-void"]) ?? {}, s = t.resultType, m = t.critLabel;
  if (!s && !m) return;
  const r = (f = i == null ? void 0 : i.querySelector) == null ? void 0 : f.call(i, ".dice-roll");
  if (r && (s && r.classList.add(`votv-${s}`), m)) {
    const d = r.querySelector(".votv-crit-label");
    if (d) {
      d.textContent = m;
      return;
    }
    const y = r.querySelector(".dice-total"), h = (y == null ? void 0 : y.parentElement) ?? r, n = document.createElement("div");
    n.className = `votv-crit-label votv-crit-label-${s || "neutral"}`, n.textContent = m, h.appendChild(n);
  }
});
export {
  he as V,
  nt as c
};
//# sourceMappingURL=vacuum-of-the-void-3UBwpRb3.mjs.map
