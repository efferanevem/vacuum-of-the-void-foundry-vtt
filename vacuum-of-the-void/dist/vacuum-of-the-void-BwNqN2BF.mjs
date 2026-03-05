var Pt = Object.defineProperty;
var Ft = Object.getPrototypeOf;
var At = Reflect.get;
var Et = (F, i, e) => i in F ? Pt(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var j = (F, i, e) => Et(F, typeof i != "symbol" ? i + "" : i, e);
var A = (F, i, e) => At(Ft(F), e, i);
const { HTMLField: Nt, NumberField: _, SchemaField: P, StringField: k, BooleanField: U, ArrayField: le } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new P({
        name: new k({ required: !1, blank: !0, initial: "" }),
        player: new k({ required: !1, blank: !0, initial: "" }),
        level: new _({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new k({ required: !1, blank: !0, initial: "" }),
        assignment: new k({ required: !1, blank: !0, initial: "" }),
        subAssignment: new k({ required: !1, blank: !0, initial: "" }),
        background: new k({ required: !1, blank: !0, initial: "" }),
        languages: new k({ required: !1, blank: !0, initial: "" })
      }),
      resources: new P({
        health: new P({
          value: new _({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new _({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new P({
          head: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new P({
            value: new _({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
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
        slotOrder: new k({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new P({
          name: new k({ required: !1, blank: !0, initial: "" }),
          bonus: new k({ required: !1, blank: !0, initial: "" }),
          damage: new k({ required: !1, blank: !0, initial: "" }),
          itemId: new k({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new P({
        microchips: new P({
          slot1: new P({
            itemId: new k({ required: !1, blank: !0, initial: "" }),
            name: new k({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new P({
            itemId: new k({ required: !1, blank: !0, initial: "" }),
            name: new k({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new P({
            itemId: new k({ required: !1, blank: !0, initial: "" }),
            name: new k({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          })
        }),
        equipment: new k({ required: !1, blank: !0, initial: "" }),
        armor: new le(
          new P({
            name: new k({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new k({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new k({ required: !1, blank: !0, initial: "" }),
            level: new k({ required: !1, blank: !0, initial: "" }),
            other: new k({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new le(
          new P({
            name: new k({ required: !1, blank: !0, initial: "" }),
            quantity: new _({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new k({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new P({
        faji: new P({
          itemId: new k({ required: !1, blank: !0, initial: "" }),
          name: new k({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new P({
          itemId: new k({ required: !1, blank: !0, initial: "" }),
          name: new k({ required: !1, blank: !0, initial: "" })
        }),
        passive: new P({
          items: new le(
            new k({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new P({
          items: new le(
            new k({ required: !1, blank: !0 }),
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
const { BooleanField: Mt, NumberField: Qt, StringField: se } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Mt({ required: !1, initial: !1 }),
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
const { BooleanField: Kt, StringField: ue } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
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
      const l = typeof c.faces == "number" ? c.faces : void 0, h = Array.isArray(c.results) ? c.results : null;
      if (!l || !h || l === 8 || l !== 6) continue;
      const b = !s && o >= 0 && (c.number === 3 || c.number === "3") ? (s = !0, i) : o >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  m(F.terms, 1);
  const r = i.filter((n) => n === 6).length, a = i.filter((n) => n === 1).length, p = e.filter((n) => n === 6).length, d = t.filter((n) => n === 6).length, y = r + p, g = a + d;
  return y > 0 && y === g ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : g >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : g === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
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
      const l = document.activeElement, h = r.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      h && b && (a.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const p = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const d = this.element, y = this.form ?? this.element, g = a.scrollState, n = a.focus, u = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var l, h;
      if (this._applyScrollState(d, g), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const b = ((l = y.querySelector) == null ? void 0 : l.call(y, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (h = y.querySelector) == null ? void 0 : h.call(y, `[name="${CSS.escape(n.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = n.selectionStart ?? 0, b.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(d, g);
    };
    return (u || n) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), p;
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
      const a = String(((m = r.system) == null ? void 0 : m.speedPenalty) ?? "").trim().replace(",", "."), p = Number(a);
      Number.isFinite(p) && (e += p);
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
      const a = String(((m = r.system) == null ? void 0 : m.protectionBonus) ?? "").trim().replace(",", "."), p = Number(a);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var g, n, u, o, c, l, h, b, v;
    const e = i ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const s = ((u = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : u.resources) ?? {}, m = ((c = (o = s.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : c.value) ?? 0, r = ((l = s.currentHealth) == null ? void 0 : l.legs) ?? 0, a = x._healthStatusFromRatio(r, m), p = Number(((v = (b = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let d;
    a === 0 ? d = 0 : a === 1 ? d = -6 : a === 2 ? d = -3 : d = p;
    const y = this._getTotalArmorSpeedPenalty();
    d += y, t.textContent = String(d);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var r, a, p, d;
    const e = i ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const m = (Number(((d = (p = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : p.combat) == null ? void 0 : d.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(m);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, a, p, d;
    const e = x.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, s = ((p = (a = t.hitLocations) == null ? void 0 : a[e]) == null ? void 0 : p.value) ?? 0, m = ((d = t.currentHealth) == null ? void 0 : d[e]) ?? 0;
    return x._healthStatusFromRatio(m, s);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var a, p, d, y;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const s = ((a = i == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, m = ((d = (p = s.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : d.value) ?? 0, r = ((y = s.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return x._healthStatusFromRatio(r, m);
  }
  async _prepareContext(i) {
    var Ee, Ne, $e, xe, je, Me, Re, Ke, Ue, Be, He, Ge, ze, We, Ye, Qe, Je, Xe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number(($e = (Ne = (Ee = this.actor.system) == null ? void 0 : Ee.resources) == null ? void 0 : Ne.stress) == null ? void 0 : $e.value) || 0;
    e.stressOver10 = t > 10;
    const s = this.actor.system.resources ?? {}, m = s.hitLocations ?? {}, r = s.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const f of a) {
      const S = ((xe = m[f]) == null ? void 0 : xe.value) ?? 0, T = r[f] ?? 0;
      e.computedHealthStatus[f] = x._healthStatusFromRatio(T, S);
    }
    const p = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((f) => (Number(r[f]) || 0) === 0).length;
    e.showDeathSkull = p || y >= 2;
    const g = e.computedHealthStatus.legs ?? 3, n = Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenSpeed) ?? 0) || 0;
    let u;
    g === 0 ? u = 0 : g === 1 ? u = -6 : g === 2 ? u = -3 : u = n;
    const o = this._getTotalArmorSpeedPenalty();
    u += o, e.effectiveGivenSpeed = u;
    const l = (Number(((Ke = (Re = this.actor.system) == null ? void 0 : Re.combat) == null ? void 0 : Ke.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: u, givenProtection: l } },
      { inplace: !1 }
    );
    const h = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [f, S] of Object.entries(h)) {
      const T = e.computedHealthStatus[S];
      e.skillHealthStatus[f] = T, e.skillDisabled[f] = T === 0 ? " disabled" : "", e.skillHasHealthTint[f] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), D = I ? I.split(/\s*,\s*/).filter((f) => v.includes(f)) : [], C = (Ue = this.actor.system.gear) == null ? void 0 : Ue.microchips, q = C && typeof C == "object" && !Array.isArray(C) ? C : {}, w = (((Be = q.slot1) == null ? void 0 : Be.itemId) ?? "").trim(), E = (((He = q.slot2) == null ? void 0 : He.itemId) ?? "").trim(), N = (((Ge = q.slot3) == null ? void 0 : Ge.itemId) ?? "").trim(), wt = this.actor.items.contents.filter((f) => f.type !== "Kepesseg" && f.type !== "ability").slice().sort((f, S) => {
      const T = typeof f.sort == "number" ? f.sort : 0, O = typeof S.sort == "number" ? S.sort : 0;
      return T - O;
    }).map((f) => {
      var X, te, ie, Z, V, ae;
      const S = f.type === "Fegyver", T = f.type === "MikroChip";
      let O = 0, L = "", K = null;
      for (let re = 0; re < D.length; re++) {
        const oe = D[re];
        if ((((X = b[oe]) == null ? void 0 : X.itemId) ?? "") === f.id) {
          O = re + 1, L = ((te = b[oe]) == null ? void 0 : te.bonus) ?? "", K = oe;
          break;
        }
      }
      let R = null;
      T && (w === f.id ? R = "slot1" : E === f.id ? R = "slot2" : N === f.id && (R = "slot3"));
      const ne = S && ((ie = f.system) != null && ie.damage) ? f.system.damage : "", H = S && typeof ((Z = f.system) == null ? void 0 : Z.range) == "string" ? (f.system.range || "").trim() : "", ee = K ? Number((V = b[K]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: f.id,
        name: f.name,
        img: f.img,
        type: f.type,
        isWeapon: S,
        slotAssignment: O,
        slotBonus: L,
        slotKey: K,
        microchipSlotKey: R,
        isEquipped: !!(K || R),
        damage: ne,
        rangeStr: H,
        slotBonusNum: ee,
        quantity: Number(((ae = f.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = wt;
    const de = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((f) => f.type === "Fegyver"), Oe = de.map((f) => ({ id: f.id, name: f.name, img: f.img }));
    e.weaponItems = Oe;
    const _e = "— Nincs fegyver —", It = D.filter((f) => {
      const T = ((b[f] ?? {}).itemId ?? "").trim();
      return T ? !!de.find((L) => L.id === T) : !1;
    });
    e.weaponSlots = It.map((f, S) => {
      const T = b[f] ?? {}, O = (T.itemId ?? "").trim(), L = Oe.find((K) => K.id === O);
      return {
        slotKey: f,
        itemId: O,
        slotNum: S + 1,
        displayName: (L == null ? void 0 : L.name) || T.name || _e,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const Tt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, St = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = de.map((f) => {
      var Ze, Ve, et;
      const S = f.id;
      let T = null, O = {};
      for (const fe of D)
        if ((((Ze = b[fe]) == null ? void 0 : Ze.itemId) ?? "").trim() === S) {
          T = fe, O = b[fe] ?? {};
          break;
        }
      const L = !!T, K = ((Ve = f.system) == null ? void 0 : Ve.equipped) !== void 0 && ((et = f.system) == null ? void 0 : et.equipped) !== null ? !!f.system.equipped : L, R = (f == null ? void 0 : f.system) ?? {}, ne = typeof R.range == "string" ? (R.range || "").trim() : "", H = R.type ?? "", ee = (Tt[H] ?? H) || "—", X = R.size ?? "", te = (St[X] ?? X) || "", ie = [ee, te].filter(Boolean).join(", ") || ee || "—", Z = H === "projectile" || X === "thrown", V = R.quantity, ae = V != null ? String(V).trim() : "1", re = String(O.bonus ?? "").trim(), oe = String(R.bonus ?? "").trim(), Lt = re || oe || "0";
      return {
        slotKey: T ?? "",
        itemId: S,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? _e,
        img: (f == null ? void 0 : f.img) ?? "",
        bonus: Lt,
        damage: O.damage ?? R.damage ?? "",
        rangeStr: ne || "—",
        typeLabel: ee,
        typeAndSize: ie,
        quantity: ae,
        quantityDisplay: Z ? ae : "—",
        isProjectile: Z,
        equipped: K,
        special: (R.special ?? "").trim() || "—"
      };
    });
    const Ot = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((f) => f.type === "Pancel");
    e.armorTable = Ot.map((f) => {
      var O, L;
      const S = (f == null ? void 0 : f.system) ?? {}, T = ((O = f.system) == null ? void 0 : O.equipped) !== void 0 && ((L = f.system) == null ? void 0 : L.equipped) !== null ? !!f.system.equipped : !1;
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        protectionBonus: (S.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (S.speedPenalty ?? "").toString().trim() || "—",
        level: (S.level ?? "").toString().trim() || "—",
        special: (S.special ?? S.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const _t = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((f) => f.type === "Targy");
    e.itemsTable = _t.map((f) => {
      const S = (f == null ? void 0 : f.system) ?? {}, T = (S.description ?? "").trim(), O = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", L = S.quantity != null ? String(S.quantity).trim() : "1";
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        quantity: L,
        description: O
      };
    });
    const Dt = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).filter((f) => f.type === "Egyeb");
    e.egyebList = Dt.map((f) => {
      const T = (((f == null ? void 0 : f.system) ?? {}).description ?? "").trim(), O = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: f.id,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        description: O
      };
    });
    const me = (((Je = this.actor.items) == null ? void 0 : Je.contents) ?? []).filter((f) => f.type === "MikroChip"), ce = me.map((f) => ({ id: f.id, name: f.name, img: f.img })), De = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], pe = (f) => {
      var T, O, L;
      const S = [];
      return f !== 1 && S.push((((T = q.slot1) == null ? void 0 : T.itemId) ?? "").trim()), f !== 2 && S.push((((O = q.slot2) == null ? void 0 : O.itemId) ?? "").trim()), f !== 3 && S.push((((L = q.slot3) == null ? void 0 : L.itemId) ?? "").trim()), S.filter(Boolean);
    };
    e.microchipItemsSlot1 = ce.filter((f) => !pe(1).includes(f.id)), e.microchipItemsSlot2 = ce.filter((f) => !pe(2).includes(f.id)), e.microchipItemsSlot3 = ce.filter((f) => !pe(3).includes(f.id)), e.microchipSlots = qe.map((f) => {
      const S = q[f] ?? {}, T = (S.itemId ?? "").trim(), O = me.find((L) => L.id === T);
      return {
        slotKey: f,
        itemId: T,
        displayName: (O == null ? void 0 : O.name) || S.name || De,
        img: (O == null ? void 0 : O.img) || "",
        active: S.active === !0
      };
    }), ["1", "2", "3"].forEach((f) => {
      const S = `slot${f}`, T = q[S] ?? {}, O = (T.itemId ?? "").trim(), L = ce.find((K) => K.id === O);
      e[`microchip${f}ItemId`] = O, e[`microchip${f}DisplayName`] = (L == null ? void 0 : L.name) || T.name || De, e[`microchip${f}Img`] = (L == null ? void 0 : L.img) || "";
    }), e.microchipsTable = me.map((f) => {
      var X, te, ie, Z;
      const S = f.id;
      let T = null;
      for (const V of qe)
        if ((((X = q[V]) == null ? void 0 : X.itemId) ?? "").trim() === S) {
          T = V;
          break;
        }
      const O = !!T, L = ((te = f == null ? void 0 : f.system) == null ? void 0 : te.abilityType) ?? "", K = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", R = L === "active", ne = Number((ie = f == null ? void 0 : f.system) == null ? void 0 : ie.replaceCost) >= 0 ? Number(f.system.replaceCost) : 0, H = (((Z = f == null ? void 0 : f.system) == null ? void 0 : Z.description) ?? "").trim(), ee = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
      return {
        itemId: S,
        actorId: this.actor.id,
        name: (f == null ? void 0 : f.name) ?? "—",
        img: (f == null ? void 0 : f.img) ?? "",
        typeLabel: K,
        description: ee,
        kp: ne,
        isActive: R,
        slotKey: T ?? "",
        equipped: O
      };
    });
    const Ce = this.actor.system.abilities ?? {}, qt = (((Xe = this.actor.items) == null ? void 0 : Xe.contents) ?? []).map((f) => {
      var S, T, O;
      return {
        id: f.id,
        name: f.name,
        img: f.img,
        kind: ((S = f.system) == null ? void 0 : S.kind) ?? "passive",
        description: ((T = f.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((O = f.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), Le = new Map(qt.map((f) => [f.id, f])), Ct = "— Nincs képesség —", Pe = (f) => {
      const S = Ce[f] ?? {}, T = (S.itemId ?? "").trim(), O = T ? Le.get(T) : null, L = (O == null ? void 0 : O.description) ?? "", K = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: T,
        displayName: (O == null ? void 0 : O.name) || S.name || Ct,
        img: (O == null ? void 0 : O.img) || "",
        description: L,
        kp: K
      };
    };
    e.abilityFajiSlot = Pe("faji"), e.abilityHatterSlot = Pe("hatter");
    const Fe = (f) => {
      const S = Ce[f];
      return S ? Array.isArray(S == null ? void 0 : S.items) ? S.items : Array.isArray(S) ? S : [] : [];
    }, Ae = (f) => f.map((S) => {
      const T = Le.get(S);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Ae(Fe("passive")), e.abilityActiveList = Ae(Fe("active")), e;
  }
  _attachFrameListeners(i) {
    var y, g;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const o = (n.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DKgD9Rvs.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var c, l, h;
      n.preventDefault(), n.stopPropagation();
      const u = n.currentTarget;
      let o = (u.dataset.itemId ?? "").trim();
      if (!o) {
        const b = (u.dataset.slot ?? "").trim();
        if (!b) return;
        o = (((((l = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = u.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), !this.isEditable) return;
    const s = (n) => {
      var c;
      const u = n ? n.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!u) return;
      const o = Number(u.value) || 0;
      u.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', s);
    const m = (g = e.querySelector) == null ? void 0 : g.call(e, 'input[name="system.resources.stress.value"]');
    m && s({ currentTarget: m }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (n) => {
      var c, l, h;
      n.preventDefault(), n.stopPropagation();
      const u = ((h = (l = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var h;
      n.preventDefault();
      const u = n.currentTarget, o = u.dataset.skill, c = ((h = u.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: l } = await import("./roll-sheet-DKgD9Rvs.mjs");
      l(this.actor, o, c);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (n) => {
      var v, I, D, C, q, w, E;
      n.preventDefault();
      const o = n.currentTarget.closest(".karakter-weapon-slot"), c = o == null ? void 0 : o.dataset.slot;
      if (!c) return;
      const h = (((I = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[c]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!h) return;
      const b = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, h)) ?? ((w = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : w.call(q, (N) => N.id === h));
      (E = b == null ? void 0 : b.sheet) == null || E.render(!0);
    });
    const r = (n, u) => {
      var l;
      const o = n.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (c) {
        if (n.classList.contains("karakter-weapon-label") && (u.altKey || u.shiftKey || u.ctrlKey || u.metaKey)) {
          const h = n.dataset.weaponSlot;
          h && this._rollWeapon(h);
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
      const c = this.actor, l = c.items.get(o), h = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = v ? v.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], C = D.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (C) {
          const q = D.filter((w) => w !== C);
          h["system.weapons.slotOrder"] = q.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var C, q;
      const u = n.currentTarget, o = (u.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, h = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = h ? h.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], I = v.find((w) => {
        var E;
        return (((E = l[w]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (u.checked) {
        if (I) return;
        let w = v.find((N) => {
          var M;
          return !((M = l[N]) != null && M.itemId);
        });
        const E = new Set(v);
        if (!w) {
          const N = b.find((M) => !E.has(M));
          if (!N) return;
          w = N, v.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${w}.damage`]: ((C = c == null ? void 0 : c.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = c == null ? void 0 : c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (I) {
        const w = v.filter((E) => E !== I);
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
      const h = (u.dataset.itemId ?? "").trim(), b = (u.dataset.itemName ?? ((w = u.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (u.dataset.itemImg ?? "").trim(), I = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let D = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      v ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", c == null || c.insertBefore(D, I)), D.src = v, D.style.display = "") : D && D.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const C = h ? this.actor.items.get(h) : null, q = {
        [`system.gear.microchips.${l}.itemId`]: h,
        [`system.gear.microchips.${l}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      h && (q[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var b, v;
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const o = this.actor.items.get(u);
      if (!o || o.type !== "MikroChip") return;
      const c = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((I) => {
        var D;
        return (((D = c[I]) == null ? void 0 : D.itemId) ?? "").trim() === u;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
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
      const c = this.actor.system.abilities ?? {}, h = (Array.isArray((b = c[u]) == null ? void 0 : b.items) ? c[u].items.slice() : []).filter((v) => v !== o);
      await this.actor.update({ [`system.abilities.${u}.items`]: h });
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
        const h = this.form ?? this.element, b = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
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
      const l = this.actor.system.weapons ?? {}, h = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = h ? h.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], I = v.find((w) => {
        var E;
        return (((E = l[w]) == null ? void 0 : E.itemId) ?? "").trim() === o;
      }) ?? null;
      if (u.checked) {
        if (I) return;
        let w = v.find((N) => {
          var M;
          return !((M = l[N]) != null && M.itemId);
        });
        const E = new Set(v);
        if (!w) {
          const N = b.find((M) => !E.has(M));
          if (!N) return;
          w = N, v.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: c.name ?? "",
          [`system.weapons.${w}.damage`]: ((C = c.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = c.system) == null ? void 0 : q.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (I) {
        const w = v.filter((E) => E !== I);
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
      const c = this.actor, l = c.items.get(o), h = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = v ? v.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], C = D.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (C) {
          const q = D.filter((w) => w !== C);
          h["system.weapons.slotOrder"] = q.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await c.update(h), await c.deleteEmbeddedDocuments("Item", [o]);
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
        const h = this.form ?? this.element, b = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const o = this.actor.items.get(u);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    });
    const a = this, p = (n) => {
      var c, l, h, b;
      if (!n) return;
      const u = a._getFormDataForUpdate(n);
      if (Object.keys(u).length === 0) return;
      const o = ((l = (c = u.system) == null ? void 0 : c.resources) == null ? void 0 : l.currentHealth) != null || ((b = (h = u.system) == null ? void 0 : h.resources) == null ? void 0 : b.hitLocations) != null;
      a.actor.update(u).then(() => {
        o && setTimeout(() => a.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, d = (n) => {
      var u, o, c;
      return n && (((o = (u = a.element) == null ? void 0 : u.contains) == null ? void 0 : o.call(u, n)) || a.id && ((c = n.closest) == null ? void 0 : c.call(n, `#${CSS.escape(a.id)}`)));
    };
    a._votvBlur = (n) => {
      var h;
      const u = n.target;
      if (!u || !u.form) return;
      const o = u.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = u.form;
      if (!d(c)) return;
      const l = n.relatedTarget;
      l && (c.contains(l) || a.id && ((h = l.closest) != null && h.call(l, `#${CSS.escape(a.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: a.id, at: Date.now() }), p(c));
    }, document.body.addEventListener("blur", a._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var a, p, d;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      y.type === "checkbox" ? g = y.checked : y.type === "number" ? g = y.value === "" ? 0 : Number(y.value) : g = y.value ?? "", foundry.utils.setProperty(e, y.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((a = this.actor.system) == null ? void 0 : a.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), s = t.hitLocations ?? {}, m = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const g = ((d = s[y]) == null ? void 0 : d.value) ?? 0, n = m[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, x._healthStatusFromRatio(n, g));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, s, m, r, a, p, d, y, g, n, u, o;
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
          let h = l.id;
          if (((s = l.parent) == null ? void 0 : s.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            h = ((m = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : m.id) ?? h;
          }
          const b = (((r = l.system) == null ? void 0 : r.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": h,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": h,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", D = Array.isArray((a = v[I]) == null ? void 0 : a.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          D.includes(h) || D.push(h), await this.actor.update({ [`system.abilities.${I}.items`]: D });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
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
          const h = this.actor, b = ((d = l.parent) == null ? void 0 : d.id) !== h.id;
          let v = l.id;
          if (b) {
            const I = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await h.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (b) {
            const I = ((g = h.system) == null ? void 0 : g.weapons) ?? {}, D = (I.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = D ? D.split(/\s*,\s*/).filter((E) => C.includes(E)) : [], w = q.filter((E) => {
              var N;
              return (((N = I[E]) == null ? void 0 : N.itemId) ?? "").trim() === v;
            });
            if (w.length > 0) {
              const N = {
                "system.weapons.slotOrder": q.filter((M) => !w.includes(M)).join(",")
              };
              for (const M of w)
                N[`system.weapons.${M}.itemId`] = "", N[`system.weapons.${M}.name`] = "", N[`system.weapons.${M}.damage`] = "", N[`system.weapons.${M}.bonus`] = "";
              await h.update(N);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const h = this.actor;
          if (((n = l.parent) == null ? void 0 : n.id) !== h.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await h.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const h = this.actor;
          ((u = l.parent) == null ? void 0 : u.id) !== h.id && await h.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const h = this.actor;
          ((o = l.parent) == null ? void 0 : o.id) !== h.id && await h.createEmbeddedDocuments("Item", [l.toObject()]);
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
    var a, p, d, y, g, n;
    i.preventDefault(), i.stopPropagation(), (a = i.currentTarget) == null || a.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
      [`system.weapons.${e}.damage`]: ((g = m.system) == null ? void 0 : g.damage) ?? "",
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
    const m = this.actor.items.contents.slice().sort((g, n) => {
      const u = typeof g.sort == "number" ? g.sort : 0, o = typeof n.sort == "number" ? n.sort : 0;
      return u - o;
    }).map((g) => g.id), r = m.indexOf(t), a = m.indexOf(e);
    if (r === -1 || a === -1) return;
    m.splice(r, 1), m.splice(a, 0, t);
    const p = m.map((g, n) => ({
      _id: g,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
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
    var p, d, y;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let s, m = "";
    if (e.type === "MikroChip") {
      const g = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (s = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
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
    var y, g, n;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", s = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, m = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", a = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = m ? `<p>${m}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${a}
      ${p}
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
    var r, a, p;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let m = s.id;
    if (((a = s.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      m = ((p = (await this.actor.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : p.id) ?? m;
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
    var p, d, y, g;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const s = await fromUuid(t.uuid);
    if (!s || s.type !== "Kepesseg" && s.type !== "ability") return;
    let m = s.id;
    if (((d = s.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(s.toObject(), { type: "Kepesseg" });
      m = ((y = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : y.id) ?? m;
    }
    const r = this.actor.system.abilities ?? {}, a = Array.isArray((g = r[e]) == null ? void 0 : g.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
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
    var a, p, d, y, g;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    ((y = m.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((g = (await this.actor.createEmbeddedDocuments("Item", [m.toObject()]))[0]) == null ? void 0 : g.id) ?? r), await this.actor.update({
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
    const p = `3d6${m !== 0 ? m > 0 ? `+${m}` : `${m}` : ""}`, d = new Roll(p);
    await d.evaluate({ async: !0 });
    const { resultType: y, label: g } = nt(d), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: g } },
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
    var v;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, s = this.actor.system.skills ?? {}, m = this.actor.items.filter((I) => I.type === "Fegyver");
    let r = null;
    t.itemId && (r = m.find((I) => I.id === t.itemId) ?? null);
    const a = r && r.name || t.name || `Fegyver (${i})`, p = Number(t.bonus || 0) || 0, y = (((v = r == null ? void 0 : r.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", g = Number(s[y] || 0) || 0, n = p + g, o = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, c = new Roll(o);
    await c.evaluate({ async: !0 });
    const { resultType: l, label: h } = nt(c), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${a} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: h } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var p, d, y, g, n, u, o, c, l, h;
    const t = this.actor;
    if (!t) return;
    let s = ((d = (p = t.items).get) == null ? void 0 : d.call(p, i)) ?? ((g = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : g.call(y, (b) => b.id === i));
    if (!s || s.type !== "Fegyver") return;
    let m = (((n = s.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!m && e && (m = (((((u = t.system) == null ? void 0 : u.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !m) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((l = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : l.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
    var d, y, g, n, u;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((d = this.actor) == null ? void 0 : d.system), e.showDeathSkull = !1;
    const t = ((g = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : g.abilities) ?? {}, s = (((u = (n = this.actor) == null ? void 0 : n.items) == null ? void 0 : u.contents) ?? []).filter((o) => o.type === "Kepesseg" || o.type === "ability").map((o) => {
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
    }, p = (o) => (o || []).map((c) => {
      const l = m.get(c);
      return l ? { id: l.id, name: l.name, img: l.img, description: l.description, kp: l.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = p(a("passive")), e.abilityActiveList = p(a("active")), e;
  }
  _attachFrameListeners(i) {
    var a;
    super._attachFrameListeners(i);
    const e = this.form ?? ((a = i == null ? void 0 : i.querySelector) == null ? void 0 : a.call(i, "form.votv.npc-sheet")) ?? i ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (p) => {
      var g, n, u;
      if (p.preventDefault(), p.stopPropagation(), !this.actor) return;
      const d = ((u = (n = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (p) => {
      var g, n, u;
      p.preventDefault();
      const d = (n = (g = p.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : n.itemId;
      if (!d || !this.actor) return;
      const y = this.actor.items.get(d);
      (u = y == null ? void 0 : y.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (p) => {
      var y, g;
      p.preventDefault();
      const d = (g = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : g.itemId;
      d && await this._postAbilityToChat(d);
    }), t.on("click", ".karakter-ability-pill-remove", async (p) => {
      var o, c, l, h, b, v;
      if (p.preventDefault(), !p.altKey) return;
      const d = (c = (o = p.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.area, y = (h = (l = p.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : h.itemId;
      if (!d || !y || !this.actor) return;
      const g = ((b = this.actor.system) == null ? void 0 : b.abilities) ?? {}, u = (Array.isArray((v = g[d]) == null ? void 0 : v.items) ? g[d].items.slice() : []).filter((I) => I !== y);
      await this.actor.update({ [`system.abilities.${d}.items`]: u }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (p) => {
      var y, g;
      if (p.preventDefault(), !p.altKey) return;
      const d = (g = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : g.slot;
      d && (await this.actor.update({
        [`system.abilities.${d}.itemId`]: "",
        [`system.abilities.${d}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    });
    const s = this, m = (p) => {
      if (!p) return;
      const d = s._getFormDataForUpdate(p);
      Object.keys(d).length !== 0 && s.actor.update(d).catch((y) => console.warn("VoidNpcSheet save failed", y));
    }, r = (p) => {
      var d, y, g;
      return p && (((y = (d = s.element) == null ? void 0 : d.contains) == null ? void 0 : y.call(d, p)) || s.id && ((g = p.closest) == null ? void 0 : g.call(p, `#${CSS.escape(s.id)}`)));
    };
    s._votvNpcBlur = (p) => {
      var u;
      const d = p.target;
      if (!d || !d.form) return;
      const y = d.tagName;
      if (y !== "INPUT" && y !== "TEXTAREA" && y !== "SELECT") return;
      const g = d.form;
      if (!r(g)) return;
      const n = p.relatedTarget;
      n && (g.contains(n) || s.id && ((u = n.closest) != null && u.call(n, `#${CSS.escape(s.id)}`))) || m(g);
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
    var p, d, y, g, n, u, o, c, l;
    if (!this.actor) return (p = super._onDropItem) == null ? void 0 : p.call(this, i, e);
    const s = ((h) => {
      var v;
      if (!h) return null;
      const b = h.uuid ?? h.documentUuid ?? ((v = h.data) == null ? void 0 : v.uuid) ?? (typeof h == "string" ? h : null);
      if (b) return b;
      if (typeof h == "object") {
        for (const I of Object.values(h))
          if (typeof I == "string" && I.includes(".") && I.startsWith("Item.")) return I;
      }
      return null;
    })(e);
    if (!s) return (d = super._onDropItem) == null ? void 0 : d.call(this, i, e);
    const m = await fromUuid(s);
    if (!m || m.documentName !== "Item") return (y = super._onDropItem) == null ? void 0 : y.call(this, i, e);
    const r = this.actor;
    if (m.type === "Kepesseg" || m.type === "ability") {
      let h = m.id;
      if (((g = m.parent) == null ? void 0 : g.id) !== r.id) {
        const C = foundry.utils.mergeObject(m.toObject(), { type: "Kepesseg" });
        h = ((n = (await r.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : n.id) ?? h;
      }
      const b = (((u = m.system) == null ? void 0 : u.kind) ?? "passive").toString(), v = ((o = r.system) == null ? void 0 : o.abilities) ?? {}, I = b === "active" ? "active" : "passive", D = Array.isArray((c = v[I]) == null ? void 0 : c.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
      D.includes(h) || D.push(h), await r.update({ [`system.abilities.${I}.items`]: D }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((l = m.parent) == null ? void 0 : l.id) === r.id) return;
    const a = m.toObject();
    m.type === "Fegyver" && foundry.utils.mergeObject(a, { system: { ...a.system ?? {}, equipped: !1 } }, { inplace: !0 }), m.type === "Pancel" && foundry.utils.mergeObject(a, { system: { ...a.system ?? {}, equipped: !1 } }, { inplace: !0 }), await r.createEmbeddedDocuments("Item", [a]);
  }
  async _postAbilityToChat(i) {
    var y, g, n, u, o;
    const e = (g = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : g.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((n = e.system) == null ? void 0 : n.kind) ?? "passive", s = Number(((u = e.system) == null ? void 0 : u.kp) ?? 0) || 0, m = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", a = s > 0 ? `<p><strong>KP:</strong> ${s}</p>` : "", p = m ? `<p>${m}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${a}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
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
      var d, y, g, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (g = r.target) == null ? void 0 : g.getAttribute) == null ? void 0 : n.call(g, "data-edit")) !== "img") return;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((p) => console.warn("VoidWeaponSheet save failed", p));
    }, m = (r) => {
      var a, p, d;
      return r && (((p = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : p.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, d, y;
      const a = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
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
      var d, y, g, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (g = r.target) == null ? void 0 : g.getAttribute) == null ? void 0 : n.call(g, "data-edit")) !== "img") return;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((p) => console.warn("VoidShieldSheet save failed", p));
    }, m = (r) => {
      var a, p, d;
      return r && (((p = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : p.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, d, y;
      const a = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
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
      var d, y, g, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (g = r.target) == null ? void 0 : g.getAttribute) == null ? void 0 : n.call(g, "data-edit")) !== "img") return;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((p) => console.warn("VoidMicrochipSheet save failed", p));
    }, m = (r) => {
      var a, p, d;
      return r && (((p = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : p.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, d, y;
      const a = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
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
      var d, y, g, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (g = r.target) == null ? void 0 : g.getAttribute) == null ? void 0 : n.call(g, "data-edit")) !== "img") return;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((p) => console.warn("VoidAbilitySheet save failed", p));
    }, m = (r) => {
      var a, p, d;
      return r && (((p = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : p.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, d, y;
      const a = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
      m(a) && s(a);
    }, e._votvInput = (r) => {
      var d;
      const a = r.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const p = (a == null ? void 0 : a.form) ?? ((d = a == null ? void 0 : a.closest) == null ? void 0 : d.call(a, "form"));
      m(p) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => s(p), 300));
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
      var d, y, g, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (g = r.target) == null ? void 0 : g.getAttribute) == null ? void 0 : n.call(g, "data-edit")) !== "img") return;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((p) => console.warn("VoidTargySheet save failed", p));
    }, m = (r) => {
      var a, p, d;
      return r && (((p = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : p.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, d, y;
      const a = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
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
let Te = Q;
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
      var d, y, g, n, u, o, c;
      if (!e.isEditable || !((y = (d = r.target) == null ? void 0 : d.closest) != null && y.call(d, ".profile")) && ((n = (g = r.target) == null ? void 0 : g.getAttribute) == null ? void 0 : n.call(g, "data-edit")) !== "img") return;
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
      Object.keys(a).length !== 0 && e.document.update(a).catch((p) => console.warn("VoidEgyebSheet save failed", p));
    }, m = (r) => {
      var a, p, d;
      return r && (((p = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : p.call(a, r)) || e.id && ((d = r.closest) == null ? void 0 : d.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var p, d, y;
      const a = ((p = r.target) == null ? void 0 : p.form) ?? ((y = (d = r.target) == null ? void 0 : d.closest) == null ? void 0 : y.call(d, "form"));
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
let Se = J;
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
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Rt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = st, CONFIG.Item.dataModels.ability = st, CONFIG.Item.dataModels.Targy = Gt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Te, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Se, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const F = 500;
  Hooks.on("updateActor", (r, a, p, d) => {
    var v, I, D, C, q;
    const y = r == null ? void 0 : r.id;
    if (!y) return;
    const g = document.activeElement, n = g && (g.tagName === "INPUT" && g.type !== "checkbox" && g.type !== "radio" || g.tagName === "TEXTAREA" || g.isContentEditable), u = [], o = (v = game.actors) == null ? void 0 : v.get(y);
    o != null && o.apps && u.push(...Array.from(o.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of c)
      ((I = w.document) == null ? void 0 : I.id) !== y || ((D = w.document) == null ? void 0 : D.documentName) !== "Actor" || ((C = w.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || u.includes(w) || u.push(w);
    if (n && u.some((w) => {
      const E = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return E && E.contains(g);
    })) return;
    const h = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, b = h && Date.now() - h.at < F ? h.appId : null;
    setTimeout(() => {
      for (const w of u)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (r, a, p, d) => {
    var u, o, c;
    const y = r == null ? void 0 : r.parent;
    if (!y || y.documentName !== "Actor" || y.type !== "Karakter" || r.type !== "Fegyver") return;
    const g = ((u = y.system) == null ? void 0 : u.weapons) ?? {}, n = {};
    for (const [l, h] of Object.entries(g)) {
      if (!l.startsWith("slot")) continue;
      const b = ((h == null ? void 0 : h.itemId) ?? "").trim();
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
      var r, a, p, d, y, g;
      if (!((a = (r = e.target) == null ? void 0 : r.closest) != null && a.call(r, "#actors"))) return;
      const t = (d = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : d.call(p, "[data-document-id]"), s = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!s) return;
      const m = s.includes(".") ? s.split(".").pop() : s;
      m && ((g = game.actors) != null && g.get(m)) && (game.votv._dragSourceActorId = m);
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
  var a, p;
  const t = ((a = F.flags) == null ? void 0 : a["vacuum-of-the-void"]) ?? {}, s = t.resultType, m = t.critLabel;
  if (!s && !m) return;
  const r = (p = i == null ? void 0 : i.querySelector) == null ? void 0 : p.call(i, ".dice-roll");
  if (r && (s && r.classList.add(`votv-${s}`), m)) {
    const d = r.querySelector(".votv-crit-label");
    if (d) {
      d.textContent = m;
      return;
    }
    const y = r.querySelector(".dice-total"), g = (y == null ? void 0 : y.parentElement) ?? r, n = document.createElement("div");
    n.className = `votv-crit-label votv-crit-label-${s || "neutral"}`, n.textContent = m, g.appendChild(n);
  }
});
export {
  he as V,
  nt as c
};
//# sourceMappingURL=vacuum-of-the-void-BwNqN2BF.mjs.map
