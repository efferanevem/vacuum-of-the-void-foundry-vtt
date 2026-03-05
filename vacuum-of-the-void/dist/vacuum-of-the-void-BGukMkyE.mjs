var _t = Object.defineProperty;
var qt = Object.getPrototypeOf;
var Ot = Reflect.get;
var Dt = (F, i, e) => i in F ? _t(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var M = (F, i, e) => Dt(F, typeof i != "symbol" ? i + "" : i, e);
var N = (F, i, e) => Ot(qt(F), e, i);
const { HTMLField: Ct, NumberField: q, SchemaField: P, StringField: v, BooleanField: U, ArrayField: le } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new P({
        name: new v({ required: !1, blank: !0, initial: "" }),
        player: new v({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new v({ required: !1, blank: !0, initial: "" }),
        assignment: new v({ required: !1, blank: !0, initial: "" }),
        subAssignment: new v({ required: !1, blank: !0, initial: "" }),
        background: new v({ required: !1, blank: !0, initial: "" }),
        languages: new v({ required: !1, blank: !0, initial: "" })
      }),
      resources: new P({
        health: new P({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new P({
          head: new P({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new P({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new P({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new P({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new P({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new P({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new P({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new P({
        defense: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new P({
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
            active: new U({ required: !1, initial: !1 })
          }),
          slot2: new P({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
          }),
          slot3: new P({
            itemId: new v({ required: !1, blank: !0, initial: "" }),
            name: new v({ required: !1, blank: !0, initial: "" }),
            active: new U({ required: !1, initial: !1 })
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
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
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
        biography: new Ct({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: fe, SchemaField: Pt } = foundry.data.fields;
class Ft extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Pt({
        body: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new fe({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Et, NumberField: Bt, StringField: ie } = foundry.data.fields;
class At extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Et({ required: !1, initial: !1 }),
      type: new ie({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ie({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ie({ required: !1, blank: !0, initial: "" }),
      damage: new ie({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ie({ required: !1, blank: !0, initial: "" }),
      special: new ie({ required: !1, blank: !0, initial: "" }),
      quantity: new ie({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Nt, StringField: ce } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Nt({ required: !1, initial: !1 }),
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
const { NumberField: ye, StringField: Ve } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ve({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ve({
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
const { NumberField: Rt, StringField: et } = foundry.data.fields;
class tt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new et({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new et({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Rt({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: it } = foundry.data.fields;
class jt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new it({ required: !1, blank: !0, initial: "" }),
      quantity: new it({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Mt } = foundry.data.fields;
class Kt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Mt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function st(F) {
  if (!F || !Array.isArray(F.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let r = !1;
  const p = (n, u = 1) => {
    if (!Array.isArray(n)) return;
    let l = u;
    for (const o of n) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        p(o.terms, l);
        continue;
      }
      if (typeof o.operator == "string") {
        l = o.operator === "-" ? -1 : 1;
        continue;
      }
      const c = typeof o.faces == "number" ? o.faces : void 0, g = Array.isArray(o.results) ? o.results : null;
      if (!c || !g || c === 8 || c !== 6) continue;
      const b = !r && l >= 0 && (o.number === 3 || o.number === "3") ? (r = !0, i) : l >= 0 ? e : t;
      for (const w of g) {
        if (!w || w.discarded || w.hidden) continue;
        const T = Number(w.result ?? w);
        Number.isFinite(T) && b.push(T);
      }
    }
  };
  p(F.terms, 1);
  const s = i.filter((n) => n === 6).length, a = i.filter((n) => n === 1).length, f = e.filter((n) => n === 6).length, m = t.filter((n) => n === 6).length, y = s + f, h = a + m;
  return y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var rt, nt, at, ot;
const x = class x extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var r, p, s, a;
    if (!i) return { form: null, windowContent: null };
    const e = ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv.karakter-sheet")) ?? ((p = i.querySelector) == null ? void 0 : p.call(i, "form.votv")) ?? null, t = ((s = i.querySelector) == null ? void 0 : s.call(i, ".votv-scroll")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, ".window-content")) ?? null;
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
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, s = this.form ?? this.element;
    let a = { scrollState: {}, focus: null };
    if (p) {
      a.scrollState = this._saveScrollState(p);
      const c = document.activeElement, g = s.contains(c), b = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA");
      g && b && (a.focus = {
        name: c.name || null,
        id: c.id || null,
        selectionStart: "selectionStart" in c ? c.selectionStart : 0,
        selectionEnd: "selectionEnd" in c ? c.selectionEnd : 0
      });
    }
    const f = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, y = this.form ?? this.element, h = a.scrollState, n = a.focus, u = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", l = () => {
      var c, g;
      if (this._applyScrollState(m, h), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const b = ((c = y.querySelector) == null ? void 0 : c.call(y, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (g = y.querySelector) == null ? void 0 : g.call(y, `[name="${CSS.escape(n.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = n.selectionStart ?? 0, b.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (u || n) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), f;
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
        var a;
        return s.type === "Pancel" && ((a = s.system) == null ? void 0 : a.equipped) === !0;
      }
    );
    let e = 0;
    for (const s of i) {
      const a = String(((p = s.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), f = Number(a);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, p;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (s) => {
        var a;
        return s.type === "Pancel" && ((a = s.system) == null ? void 0 : a.equipped) === !0;
      }
    );
    let e = 0;
    for (const s of i) {
      const a = String(((p = s.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), f = Number(a);
      Number.isFinite(f) && (e += f);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var h, n, u, l, o, c, g, b, w;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((u = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : u.resources) ?? {}, p = ((o = (l = r.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : o.value) ?? 0, s = ((c = r.currentHealth) == null ? void 0 : c.legs) ?? 0, a = x._healthStatusFromRatio(s, p), f = Number(((w = (b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
    let m;
    a === 0 ? m = 0 : a === 1 ? m = -6 : a === 2 ? m = -3 : m = f;
    const y = this._getTotalArmorSpeedPenalty();
    m += y, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var s, a, f, m;
    const e = i ?? this.form ?? this.element;
    let t = (s = e == null ? void 0 : e.querySelector) == null ? void 0 : s.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const p = (Number(((m = (f = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : f.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(p);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var s, a, f, m;
    const e = x.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((s = this.actor.system) == null ? void 0 : s.resources) ?? {}, r = ((f = (a = t.hitLocations) == null ? void 0 : a[e]) == null ? void 0 : f.value) ?? 0, p = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return x._healthStatusFromRatio(p, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var a, f, m, y;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((a = i == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, p = ((m = (f = r.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, s = ((y = r.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return x._healthStatusFromRatio(s, p);
  }
  async _prepareContext(i) {
    var Fe, Ee, Ae, Ne, $e, xe, Re, je, Me, Ke, Ue, Be, He, Ge, ze, We, Ye, Qe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ae = (Ee = (Fe = this.actor.system) == null ? void 0 : Fe.resources) == null ? void 0 : Ee.stress) == null ? void 0 : Ae.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, p = r.hitLocations ?? {}, s = r.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of a) {
      const S = ((Ne = p[d]) == null ? void 0 : Ne.value) ?? 0, I = s[d] ?? 0;
      e.computedHealthStatus[d] = x._healthStatusFromRatio(I, S);
    }
    const f = (Number(s.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((d) => (Number(s[d]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, n = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let u;
    h === 0 ? u = 0 : h === 1 ? u = -6 : h === 2 ? u = -3 : u = n;
    const l = this._getTotalArmorSpeedPenalty();
    u += l, e.effectiveGivenSpeed = u;
    const c = (Number(((je = (Re = this.actor.system) == null ? void 0 : Re.combat) == null ? void 0 : je.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: u, givenProtection: c } },
      { inplace: !1 }
    );
    const g = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, S] of Object.entries(g)) {
      const I = e.computedHealthStatus[S];
      e.skillHealthStatus[d] = I, e.skillDisabled[d] = I === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const b = this.actor.system.weapons ?? {}, w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = (b.slotOrder ?? "").trim(), D = T ? T.split(/\s*,\s*/).filter((d) => w.includes(d)) : [], C = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, O = C && typeof C == "object" && !Array.isArray(C) ? C : {}, k = (((Ke = O.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), E = (((Ue = O.slot2) == null ? void 0 : Ue.itemId) ?? "").trim(), A = (((Be = O.slot3) == null ? void 0 : Be.itemId) ?? "").trim(), yt = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, S) => {
      const I = typeof d.sort == "number" ? d.sort : 0, _ = typeof S.sort == "number" ? S.sort : 0;
      return I - _;
    }).map((d) => {
      var J, ee, te, X, Z, ne;
      const S = d.type === "Fegyver", I = d.type === "MikroChip";
      let _ = 0, L = "", K = null;
      for (let se = 0; se < D.length; se++) {
        const ae = D[se];
        if ((((J = b[ae]) == null ? void 0 : J.itemId) ?? "") === d.id) {
          _ = se + 1, L = ((ee = b[ae]) == null ? void 0 : ee.bonus) ?? "", K = ae;
          break;
        }
      }
      let j = null;
      I && (k === d.id ? j = "slot1" : E === d.id ? j = "slot2" : A === d.id && (j = "slot3"));
      const re = S && ((te = d.system) != null && te.damage) ? d.system.damage : "", B = S && typeof ((X = d.system) == null ? void 0 : X.range) == "string" ? (d.system.range || "").trim() : "", V = K ? Number((Z = b[K]) == null ? void 0 : Z.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: S,
        slotAssignment: _,
        slotBonus: L,
        slotKey: K,
        microchipSlotKey: j,
        isEquipped: !!(K || j),
        damage: re,
        rangeStr: B,
        slotBonusNum: V,
        quantity: Number(((ne = d.system) == null ? void 0 : ne.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = yt;
    const ue = (((He = this.actor.items) == null ? void 0 : He.contents) ?? []).filter((d) => d.type === "Fegyver"), Se = ue.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = Se;
    const Te = "— Nincs fegyver —", gt = D.filter((d) => {
      const I = ((b[d] ?? {}).itemId ?? "").trim();
      return I ? !!ue.find((L) => L.id === I) : !1;
    });
    e.weaponSlots = gt.map((d, S) => {
      const I = b[d] ?? {}, _ = (I.itemId ?? "").trim(), L = Se.find((K) => K.id === _);
      return {
        slotKey: d,
        itemId: _,
        slotNum: S + 1,
        displayName: (L == null ? void 0 : L.name) || I.name || Te,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const ht = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, bt = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = ue.map((d) => {
      var Je, Xe, Ze;
      const S = d.id;
      let I = null, _ = {};
      for (const pe of D)
        if ((((Je = b[pe]) == null ? void 0 : Je.itemId) ?? "").trim() === S) {
          I = pe, _ = b[pe] ?? {};
          break;
        }
      const L = !!I, K = ((Xe = d.system) == null ? void 0 : Xe.equipped) !== void 0 && ((Ze = d.system) == null ? void 0 : Ze.equipped) !== null ? !!d.system.equipped : L, j = (d == null ? void 0 : d.system) ?? {}, re = typeof j.range == "string" ? (j.range || "").trim() : "", B = j.type ?? "", V = (ht[B] ?? B) || "—", J = j.size ?? "", ee = (bt[J] ?? J) || "", te = [V, ee].filter(Boolean).join(", ") || V || "—", X = B === "projectile" || J === "thrown", Z = j.quantity, ne = Z != null ? String(Z).trim() : "1", se = String(_.bonus ?? "").trim(), ae = String(j.bonus ?? "").trim(), Tt = se || ae || "0";
      return {
        slotKey: I ?? "",
        itemId: S,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? Te,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: Tt,
        damage: _.damage ?? j.damage ?? "",
        rangeStr: re || "—",
        typeLabel: V,
        typeAndSize: te,
        quantity: ne,
        quantityDisplay: X ? ne : "—",
        isProjectile: X,
        equipped: K,
        special: (j.special ?? "").trim() || "—"
      };
    });
    const vt = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((d) => d.type === "Pancel");
    e.armorTable = vt.map((d) => {
      var _, L;
      const S = (d == null ? void 0 : d.system) ?? {}, I = ((_ = d.system) == null ? void 0 : _.equipped) !== void 0 && ((L = d.system) == null ? void 0 : L.equipped) !== null ? !!d.system.equipped : !1;
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        protectionBonus: (S.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (S.speedPenalty ?? "").toString().trim() || "—",
        level: (S.level ?? "").toString().trim() || "—",
        special: (S.special ?? S.other ?? "").toString().trim() || "—",
        equipped: I
      };
    });
    const kt = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((d) => d.type === "Targy");
    e.itemsTable = kt.map((d) => {
      const S = (d == null ? void 0 : d.system) ?? {}, I = (S.description ?? "").trim(), _ = I ? I.length > 60 ? I.slice(0, 57) + "…" : I : "—", L = S.quantity != null ? String(S.quantity).trim() : "1";
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        quantity: L,
        description: _
      };
    });
    const wt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((d) => d.type === "Egyeb");
    e.egyebList = wt.map((d) => {
      const I = (((d == null ? void 0 : d.system) ?? {}).description ?? "").trim(), _ = I ? I.length > 80 ? I.slice(0, 77) + "…" : I : "";
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        description: _
      };
    });
    const de = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((d) => d.type === "MikroChip"), oe = de.map((d) => ({ id: d.id, name: d.name, img: d.img })), _e = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], me = (d) => {
      var I, _, L;
      const S = [];
      return d !== 1 && S.push((((I = O.slot1) == null ? void 0 : I.itemId) ?? "").trim()), d !== 2 && S.push((((_ = O.slot2) == null ? void 0 : _.itemId) ?? "").trim()), d !== 3 && S.push((((L = O.slot3) == null ? void 0 : L.itemId) ?? "").trim()), S.filter(Boolean);
    };
    e.microchipItemsSlot1 = oe.filter((d) => !me(1).includes(d.id)), e.microchipItemsSlot2 = oe.filter((d) => !me(2).includes(d.id)), e.microchipItemsSlot3 = oe.filter((d) => !me(3).includes(d.id)), e.microchipSlots = qe.map((d) => {
      const S = O[d] ?? {}, I = (S.itemId ?? "").trim(), _ = de.find((L) => L.id === I);
      return {
        slotKey: d,
        itemId: I,
        displayName: (_ == null ? void 0 : _.name) || S.name || _e,
        img: (_ == null ? void 0 : _.img) || "",
        active: S.active === !0
      };
    }), ["1", "2", "3"].forEach((d) => {
      const S = `slot${d}`, I = O[S] ?? {}, _ = (I.itemId ?? "").trim(), L = oe.find((K) => K.id === _);
      e[`microchip${d}ItemId`] = _, e[`microchip${d}DisplayName`] = (L == null ? void 0 : L.name) || I.name || _e, e[`microchip${d}Img`] = (L == null ? void 0 : L.img) || "";
    }), e.microchipsTable = de.map((d) => {
      var J, ee, te, X;
      const S = d.id;
      let I = null;
      for (const Z of qe)
        if ((((J = O[Z]) == null ? void 0 : J.itemId) ?? "").trim() === S) {
          I = Z;
          break;
        }
      const _ = !!I, L = ((ee = d == null ? void 0 : d.system) == null ? void 0 : ee.abilityType) ?? "", K = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", j = L === "active", re = Number((te = d == null ? void 0 : d.system) == null ? void 0 : te.replaceCost) >= 0 ? Number(d.system.replaceCost) : 0, B = (((X = d == null ? void 0 : d.system) == null ? void 0 : X.description) ?? "").trim(), V = B ? B.length > 60 ? B.slice(0, 57) + "…" : B : "—";
      return {
        itemId: S,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        typeLabel: K,
        description: V,
        kp: re,
        isActive: j,
        slotKey: I ?? "",
        equipped: _
      };
    });
    const Oe = this.actor.system.abilities ?? {}, It = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).map((d) => {
      var S, I, _;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((S = d.system) == null ? void 0 : S.kind) ?? "passive",
        description: ((I = d.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((_ = d.system) == null ? void 0 : _.kp) ?? 0) || 0
      };
    }), De = new Map(It.map((d) => [d.id, d])), St = "— Nincs képesség —", Ce = (d) => {
      const S = Oe[d] ?? {}, I = (S.itemId ?? "").trim(), _ = I ? De.get(I) : null, L = (_ == null ? void 0 : _.description) ?? "", K = (_ == null ? void 0 : _.kp) ?? 0;
      return {
        itemId: I,
        displayName: (_ == null ? void 0 : _.name) || S.name || St,
        img: (_ == null ? void 0 : _.img) || "",
        description: L,
        kp: K
      };
    };
    e.abilityFajiSlot = Ce("faji"), e.abilityHatterSlot = Ce("hatter");
    const Le = (d) => {
      const S = Oe[d];
      return S ? Array.isArray(S == null ? void 0 : S.items) ? S.items : Array.isArray(S) ? S : [] : [];
    }, Pe = (d) => d.map((S) => {
      const I = De.get(S);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Pe(Le("passive")), e.abilityActiveList = Pe(Le("active")), e;
  }
  _attachFrameListeners(i) {
    var y, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (n) => {
      n.preventDefault(), n.stopPropagation();
      const l = (n.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-BRc8NRTa.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var o, c, g;
      n.preventDefault(), n.stopPropagation();
      const u = n.currentTarget;
      let l = (u.dataset.itemId ?? "").trim();
      if (!l) {
        const b = (u.dataset.slot ?? "").trim();
        if (!b) return;
        l = (((((c = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : c.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = u.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (n) => {
      var o;
      const u = n ? n.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!u) return;
      const l = Number(u.value) || 0;
      u.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const p = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    p && r({ currentTarget: p }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (n) => {
      var o, c, g;
      n.preventDefault(), n.stopPropagation();
      const u = ((g = (c = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
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
      const u = n.currentTarget, l = u.dataset.skill, o = ((g = u.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: c } = await import("./roll-sheet-BRc8NRTa.mjs");
      c(this.actor, l, o);
    }), t.on("click", ".karakter-roll-morale-d8", (n) => {
      n.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (n) => {
      var w, T, D, C, O, k, E;
      n.preventDefault();
      const l = n.currentTarget.closest(".karakter-weapon-slot"), o = l == null ? void 0 : l.dataset.slot;
      if (!o) return;
      const g = (((T = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[o]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!g) return;
      const b = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, g)) ?? ((k = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : k.call(O, (A) => A.id === g));
      (E = b == null ? void 0 : b.sheet) == null || E.render(!0);
    });
    const s = (n, u) => {
      var c;
      const l = n.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (o) {
        if (n.classList.contains("karakter-weapon-label") && (u.altKey || u.shiftKey || u.ctrlKey || u.metaKey)) {
          const g = n.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (c = o.sheet) == null || c.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), s(n.currentTarget, n);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), s(n.currentTarget, n);
    }), t.on("change", ".karakter-item-qty", async (n) => {
      const u = n.currentTarget, l = u.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      let c = Number(u.value);
      (!Number.isFinite(c) || c < 0) && (c = 0), await o.update({ "system.quantity": c });
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, c = o.items.get(l), g = {};
      if ((c == null ? void 0 : c.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, w = (b.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = w ? w.split(/\s*,\s*/).filter((O) => T.includes(O)) : [], C = D.find((O) => {
          var k;
          return (((k = b[O]) == null ? void 0 : k.itemId) ?? "").trim() === l;
        });
        if (C) {
          const O = D.filter((k) => k !== C);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(g).length && await o.update(g), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (n) => {
      var C, O;
      const u = n.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const c = this.actor.system.weapons ?? {}, g = (c.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = g ? g.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], T = w.find((k) => {
        var E;
        return (((E = c[k]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (u.checked) {
        if (T) return;
        let k = w.find((A) => {
          var R;
          return !((R = c[A]) != null && R.itemId);
        });
        const E = new Set(w);
        if (!k) {
          const A = b.find((R) => !E.has(R));
          if (!A) return;
          k = A, w.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${k}.itemId`]: l,
          [`system.weapons.${k}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${k}.damage`]: ((C = o == null ? void 0 : o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((O = o == null ? void 0 : o.system) == null ? void 0 : O.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (T) {
        const k = w.filter((E) => E !== T);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (n) => {
      n.preventDefault();
      const u = n.currentTarget;
      if (u.disabled) return;
      const l = u.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (n) => {
      var k;
      n.preventDefault();
      const u = n.currentTarget, l = u.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), c = o == null ? void 0 : o.dataset.slot;
      if (!c) return;
      const g = (u.dataset.itemId ?? "").trim(), b = (u.dataset.itemName ?? ((k = u.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (u.dataset.itemImg ?? "").trim(), T = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = b);
      let D = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      w ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", o == null || o.insertBefore(D, T)), D.src = w, D.style.display = "") : D && D.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const C = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${c}.itemId`]: g,
        [`system.gear.microchips.${c}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      g && (O[`system.gear.microchips.${c}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (n) => {
      $(n.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var b, w;
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      if (!l || l.type !== "MikroChip") return;
      const o = ((w = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : w.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = o[T]) == null ? void 0 : D.itemId) ?? "").trim() === u;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-microchip-slot-active", async (n) => {
      const u = n.currentTarget.dataset.slot;
      if (!u) return;
      const l = n.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${u}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((n, u) => {
      const l = u.dataset.slot;
      u.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, l)), u.addEventListener("dragleave", (o) => {
        var c;
        return (c = o.currentTarget) == null ? void 0 : c.classList.remove("karakter-microchip-slot-drag-over");
      }), u.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, l));
    }), t.find(".karakter-ability-slot-single").each((n, u) => {
      const l = u.dataset.slot;
      l && (u.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, l)), u.addEventListener("dragleave", (o) => {
        var c;
        return (c = o.currentTarget) == null ? void 0 : c.classList.remove("karakter-ability-slot-drag-over");
      }), u.addEventListener("drop", (o) => {
        var c;
        (c = o.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((n, u) => {
      const l = u.dataset.area;
      l && (u.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, l)), u.addEventListener("dragleave", (o) => {
        var c;
        return (c = o.currentTarget) == null ? void 0 : c.classList.remove("karakter-ability-area-drag-over");
      }), u.addEventListener("drop", (o) => {
        var c;
        (c = o.currentTarget) == null || c.classList.remove("karakter-ability-area-drag-over");
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
      const u = n.currentTarget.dataset.area, l = n.currentTarget.dataset.itemId;
      if (!u || !l) return;
      const o = this.actor.system.abilities ?? {}, g = (Array.isArray((b = o[u]) == null ? void 0 : b.items) ? o[u].items.slice() : []).filter((w) => w !== l);
      await this.actor.update({ [`system.abilities.${u}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (n) => {
      var c;
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      (c = o == null ? void 0 : o.sheet) == null || c.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-item-chat", async (n) => {
      n.preventDefault();
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(l) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(l));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((n, u) => {
      this._resizeWeaponQuantityInput(u);
    }), t.on("change", ".karakter-weapon-quantity-input", async (n) => {
      const u = n.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const c = (u.value ?? "").trim();
      await o.update({ "system.quantity": c }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (n) => {
      const u = n.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      !o || o.type !== "Pancel" || (await o.update({ "system.equipped": u.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (n) => {
      var C, O;
      const u = n.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const c = this.actor.system.weapons ?? {}, g = (c.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = g ? g.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], T = w.find((k) => {
        var E;
        return (((E = c[k]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (u.checked) {
        if (T) return;
        let k = w.find((A) => {
          var R;
          return !((R = c[A]) != null && R.itemId);
        });
        const E = new Set(w);
        if (!k) {
          const A = b.find((R) => !E.has(R));
          if (!A) return;
          k = A, w.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${k}.itemId`]: l,
          [`system.weapons.${k}.name`]: o.name ?? "",
          [`system.weapons.${k}.damage`]: ((C = o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((O = o.system) == null ? void 0 : O.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (T) {
        const k = w.filter((E) => E !== T);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const l = n.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, c = o.items.get(l), g = {};
      if ((c == null ? void 0 : c.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, w = (b.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = w ? w.split(/\s*,\s*/).filter((O) => T.includes(O)) : [], C = D.find((O) => {
          var k;
          return (((k = b[O]) == null ? void 0 : k.itemId) ?? "").trim() === l;
        });
        if (C) {
          const O = D.filter((k) => k !== C);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(g).length && await o.update(g), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (n) => {
      this._resizeWeaponQuantityInput(n.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((n, u) => {
      this._resizeWeaponQuantityInput(u);
    }), t.on("change", ".karakter-item-quantity-input", async (n) => {
      const u = n.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Targy") return;
      const c = (u.value ?? "").trim();
      await o.update({ "system.quantity": c }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      if (n.preventDefault(), !n.altKey) return;
      const u = n.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      !l || l.type !== "Targy" && l.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    });
    const a = this, f = (n) => {
      var o, c, g, b;
      if (!n) return;
      const u = a._getFormDataForUpdate(n);
      if (Object.keys(u).length === 0) return;
      const l = ((c = (o = u.system) == null ? void 0 : o.resources) == null ? void 0 : c.currentHealth) != null || ((b = (g = u.system) == null ? void 0 : g.resources) == null ? void 0 : b.hitLocations) != null;
      a.actor.update(u).then(() => {
        l && setTimeout(() => a.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, m = (n) => {
      var u, l, o;
      return n && (((l = (u = a.element) == null ? void 0 : u.contains) == null ? void 0 : l.call(u, n)) || a.id && ((o = n.closest) == null ? void 0 : o.call(n, `#${CSS.escape(a.id)}`)));
    };
    a._votvBlur = (n) => {
      var g;
      const u = n.target;
      if (!u || !u.form) return;
      const l = u.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = u.form;
      if (!m(o)) return;
      const c = n.relatedTarget;
      c && (o.contains(c) || a.id && ((g = c.closest) != null && g.call(c, `#${CSS.escape(a.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: a.id, at: Date.now() }), f(o));
    }, document.body.addEventListener("blur", a._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var a, f, m;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      y.type === "checkbox" ? h = y.checked : y.type === "number" ? h = y.value === "" ? 0 : Number(y.value) : h = y.value ?? "", foundry.utils.setProperty(e, y.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((a = this.actor.system) == null ? void 0 : a.resources) ?? {},
      ((f = foundry.utils.expandObject(e).system) == null ? void 0 : f.resources) ?? {}
    ), r = t.hitLocations ?? {}, p = t.currentHealth ?? {}, s = ["head", "torso", "arms", "legs"];
    for (const y of s) {
      const h = ((m = r[y]) == null ? void 0 : m.value) ?? 0, n = p[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, x._healthStatusFromRatio(n, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, r, p, s, a, f, m, y, h, n, u, l;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const c of Object.values(e))
          if (typeof c == "string" && c.includes(".") && c.startsWith("Item.")) {
            o = c;
            break;
          }
      }
      if (o) {
        const c = await fromUuid(o);
        if (c && c.documentName === "Item" && (c.type === "Kepesseg" || c.type === "ability")) {
          let g = c.id;
          if (((r = c.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(c.toObject(), { type: "Kepesseg" });
            g = ((p = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : p.id) ?? g;
          }
          const b = (((s = c.system) == null ? void 0 : s.kind) ?? "passive").toString(), w = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": c.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": c.name
            });
            return;
          }
          const T = b === "active" ? "active" : "passive", D = Array.isArray((a = w[T]) == null ? void 0 : a.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          D.includes(g) || D.push(g), await this.actor.update({ [`system.abilities.${T}.items`]: D });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((f = e.data) == null ? void 0 : f.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const c of Object.values(e))
          if (typeof c == "string" && c.includes(".") && c.startsWith("Item.")) {
            o = c;
            break;
          }
      }
      if (o) {
        const c = await fromUuid(o);
        if (c && c.documentName === "Item" && c.type === "Fegyver") {
          const g = this.actor, b = ((m = c.parent) == null ? void 0 : m.id) !== g.id;
          let w = c.id;
          if (b) {
            const T = foundry.utils.mergeObject(c.toObject(), { system: { ...c.toObject().system ?? {}, equipped: !1 } });
            w = ((y = (await g.createEmbeddedDocuments("Item", [T]))[0]) == null ? void 0 : y.id) ?? w;
          }
          if (b) {
            const T = ((h = g.system) == null ? void 0 : h.weapons) ?? {}, D = (T.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = D ? D.split(/\s*,\s*/).filter((E) => C.includes(E)) : [], k = O.filter((E) => {
              var A;
              return (((A = T[E]) == null ? void 0 : A.itemId) ?? "").trim() === w;
            });
            if (k.length > 0) {
              const A = {
                "system.weapons.slotOrder": O.filter((R) => !k.includes(R)).join(",")
              };
              for (const R of k)
                A[`system.weapons.${R}.itemId`] = "", A[`system.weapons.${R}.name`] = "", A[`system.weapons.${R}.damage`] = "", A[`system.weapons.${R}.bonus`] = "";
              await g.update(A);
            }
          }
          return;
        }
        if (c && c.documentName === "Item" && c.type === "Pancel") {
          const g = this.actor;
          if (((n = c.parent) == null ? void 0 : n.id) !== g.id) {
            const b = foundry.utils.mergeObject(c.toObject(), { system: { ...c.toObject().system ?? {}, equipped: !1 } });
            await g.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (c && c.documentName === "Item" && c.type === "MikroChip") {
          const g = this.actor;
          ((u = c.parent) == null ? void 0 : u.id) !== g.id && await g.createEmbeddedDocuments("Item", [c.toObject()]);
          return;
        }
        if (c && c.documentName === "Item" && (c.type === "Targy" || c.type === "Egyeb")) {
          const g = this.actor;
          ((l = c.parent) == null ? void 0 : l.id) !== g.id && await g.createEmbeddedDocuments("Item", [c.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var p, s, a;
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var a, f, m, y, h, n;
    i.preventDefault(), i.stopPropagation(), (a = i.currentTarget) == null || a.classList.remove("karakter-weapon-slot-drag-over");
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
      const u = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [u]);
      return;
    }
    const s = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: s,
      [`system.weapons.${e}.name`]: p.name,
      [`system.weapons.${e}.damage`]: ((h = p.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = p.system) == null ? void 0 : n.bonus) ?? ""
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
    const p = this.actor.items.contents.slice().sort((h, n) => {
      const u = typeof h.sort == "number" ? h.sort : 0, l = typeof n.sort == "number" ? n.sort : 0;
      return u - l;
    }).map((h) => h.id), s = p.indexOf(t), a = p.indexOf(e);
    if (s === -1 || a === -1) return;
    p.splice(s, 1), p.splice(a, 0, t);
    const f = p.map((h, n) => ({
      _id: h,
      sort: (n + 1) * 10
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
    var f, m, y;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let r, p = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (r = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const n = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        n > 0 && (p = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const s = t ? `<p>${t}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${p}
      ${s}
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", r = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, p = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), s = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", a = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", f = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${s}</p>
      ${a}
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
    var s, a, f;
    i.preventDefault(), (s = i.currentTarget) == null || s.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let p = r.id;
    if (((a = r.parent) == null ? void 0 : a.id) !== this.actor.id) {
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
      const n = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      p = ((y = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : y.id) ?? p;
    }
    const s = this.actor.system.abilities ?? {}, a = Array.isArray((h = s[e]) == null ? void 0 : h.items) ? s[e].items.slice() : Array.isArray(s[e]) ? s[e].slice() : [];
    a.includes(p) || a.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: a });
  }
  _onMicrochipSlotDragOver(i, e) {
    var p, s, a;
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var a, f, m, y, h;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-microchip-slot-drag-over");
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
    const { resultType: y, label: h } = st(m), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: n
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
    var w;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, r = this.actor.system.skills ?? {}, p = this.actor.items.filter((T) => T.type === "Fegyver");
    let s = null;
    t.itemId && (s = p.find((T) => T.id === t.itemId) ?? null);
    const a = s && s.name || t.name || `Fegyver (${i})`, f = Number(t.bonus || 0) || 0, y = (((w = s == null ? void 0 : s.system) == null ? void 0 : w.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(r[y] || 0) || 0, n = f + h, l = `3d6${n !== 0 ? n > 0 ? `+${n}` : `${n}` : ""}`, o = new Roll(l);
    await o.evaluate({ async: !0 });
    const { resultType: c, label: g } = st(o), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${a} – találat`,
      flags: { "vacuum-of-the-void": { resultType: c, critLabel: g } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var f, m, y, h, n, u, l, o, c, g;
    const t = this.actor;
    if (!t) return;
    let r = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === i));
    if (!r || r.type !== "Fegyver") return;
    let p = (((n = r.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!p && e && (p = (((((u = t.system) == null ? void 0 : u.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (g = (l = ui.notifications) == null ? void 0 : l.warn) == null || g.call(l, ((c = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : c.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const s = new Roll(p);
    await s.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return s.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }
};
M(x, "PARTS", foundry.utils.mergeObject(N(x, x, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), M(x, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(x, x, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((rt = N(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : rt.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((nt = N(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : nt.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((ot = (at = N(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : at.window) == null ? void 0 : ot.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
M(x, "BODY_PART_BY_SKILL", {
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
let ge = x;
var lt;
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
      var m, y, h, n, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((n = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const a = ((o = (l = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (c) => {
          c && e.document.update({ img: c });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const a = e._getFormDataForUpdate(s);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidWeaponSheet save failed", f));
    }, p = (s) => {
      var a, f, m;
      return s && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const a = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(a) && r(a);
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
M(H, "PARTS", foundry.utils.mergeObject(N(H, H, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), M(H, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(H, H, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((lt = N(H, H, "DEFAULT_OPTIONS")) == null ? void 0 : lt.form) ?? {}, { submitOnChange: !1 })
}));
let he = H;
var ct;
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
      var m, y, h, n, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((n = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const a = ((o = (l = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (c) => {
          c && e.document.update({ img: c });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const a = e._getFormDataForUpdate(s);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidShieldSheet save failed", f));
    }, p = (s) => {
      var a, f, m;
      return s && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const a = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(a) && r(a);
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
M(G, "PARTS", foundry.utils.mergeObject(N(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), M(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ct = N(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ct.form) ?? {}, { submitOnChange: !1 })
}));
let be = G;
var ut;
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
      var m, y, h, n, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((n = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const a = ((o = (l = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (c) => {
          c && e.document.update({ img: c });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const a = e._getFormDataForUpdate(s);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidMicrochipSheet save failed", f));
    }, p = (s) => {
      var a, f, m;
      return s && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const a = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(a) && r(a);
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
M(z, "PARTS", foundry.utils.mergeObject(N(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), M(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ut = N(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 })
}));
let ve = z;
var dt;
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
      var m, y, h, n, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((n = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const a = ((o = (l = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (c) => {
          c && e.document.update({ img: c });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const a = e._getFormDataForUpdate(s);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidAbilitySheet save failed", f));
    }, p = (s) => {
      var a, f, m;
      return s && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const a = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(a) && r(a);
    }, e._votvInput = (s) => {
      var m;
      const a = s.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const f = (a == null ? void 0 : a.form) ?? ((m = a == null ? void 0 : a.closest) == null ? void 0 : m.call(a, "form"));
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
M(W, "PARTS", foundry.utils.mergeObject(N(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), M(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((dt = N(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : dt.form) ?? {}, { submitOnChange: !0 })
}));
let ke = W;
var mt;
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
      var m, y, h, n, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((n = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const a = ((o = (l = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (c) => {
          c && e.document.update({ img: c });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const a = e._getFormDataForUpdate(s);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidTargySheet save failed", f));
    }, p = (s) => {
      var a, f, m;
      return s && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const a = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(a) && r(a);
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
M(Y, "PARTS", foundry.utils.mergeObject(N(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), M(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((mt = N(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : mt.form) ?? {}, { submitOnChange: !1 })
}));
let we = Y;
var pt;
const Q = class Q extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var m, y, h, n, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((n = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : n.call(h, "data-edit")) !== "img") return;
      s.preventDefault(), s.stopPropagation();
      const a = ((o = (l = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: e.document.img || "",
        callback: (c) => {
          c && e.document.update({ img: c });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (s) => {
      if (!s) return;
      const a = e._getFormDataForUpdate(s);
      Object.keys(a).length !== 0 && e.document.update(a).catch((f) => console.warn("VoidEgyebSheet save failed", f));
    }, p = (s) => {
      var a, f, m;
      return s && (((f = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : f.call(a, s)) || e.id && ((m = s.closest) == null ? void 0 : m.call(s, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (s) => {
      var f, m, y;
      const a = ((f = s.target) == null ? void 0 : f.form) ?? ((y = (m = s.target) == null ? void 0 : m.closest) == null ? void 0 : y.call(m, "form"));
      p(a) && r(a);
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
M(Q, "PARTS", foundry.utils.mergeObject(N(Q, Q, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), M(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(N(Q, Q, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((pt = N(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : pt.form) ?? {}, { submitOnChange: !1 })
}));
let Ie = Q;
const ft = "systems/vacuum-of-the-void/assets/void-bg.jpg";
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
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ft, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = At, CONFIG.Item.dataModels.Pancel = $t, CONFIG.Item.dataModels.MikroChip = xt, CONFIG.Item.dataModels.Kepesseg = tt, CONFIG.Item.dataModels.ability = tt, CONFIG.Item.dataModels.Targy = jt, CONFIG.Item.dataModels.Egyeb = Kt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
  const F = 500;
  Hooks.on("updateActor", (s, a, f, m) => {
    var w, T, D, C, O;
    const y = s == null ? void 0 : s.id;
    if (!y) return;
    const h = document.activeElement, n = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), u = [], l = (w = game.actors) == null ? void 0 : w.get(y);
    l != null && l.apps && u.push(...Array.from(l.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of o)
      ((T = k.document) == null ? void 0 : T.id) !== y || ((D = k.document) == null ? void 0 : D.documentName) !== "Actor" || ((C = k.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || u.includes(k) || u.push(k);
    if (n && u.some((k) => {
      const E = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return E && E.contains(h);
    })) return;
    const g = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, b = g && Date.now() - g.at < F ? g.appId : null;
    setTimeout(() => {
      for (const k of u)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== b && k.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (s, a, f, m) => {
    var u, l, o;
    const y = s == null ? void 0 : s.parent;
    if (!y || y.documentName !== "Actor" || y.type !== "Karakter" || s.type !== "Fegyver") return;
    const h = ((u = y.system) == null ? void 0 : u.weapons) ?? {}, n = {};
    for (const [c, g] of Object.entries(h)) {
      if (!c.startsWith("slot")) continue;
      const b = ((g == null ? void 0 : g.itemId) ?? "").trim();
      !b || b !== s.id || (n[`system.weapons.${c}.name`] = s.name ?? "", n[`system.weapons.${c}.damage`] = ((l = s.system) == null ? void 0 : l.damage) ?? "", n[`system.weapons.${c}.bonus`] = ((o = s.system) == null ? void 0 : o.bonus) ?? "");
    }
    Object.keys(n).length && y.update(n);
  });
});
Hooks.on("ready", () => {
  var F, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var s, a, f, m, y, h;
      if (!((a = (s = e.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
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
        background: { src: ft },
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
  var s, a;
  const t = (s = game.votv) == null ? void 0 : s._dragSourceActorId, r = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = r ? (a = game.actors) == null ? void 0 : a.get(r) : null;
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
    "background.src": ft,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (F, i, e) => {
  var p, s, a;
  const t = (s = (p = F.flags) == null ? void 0 : p["vacuum-of-the-void"]) == null ? void 0 : s.resultType;
  if (!t) return;
  const r = (a = i == null ? void 0 : i.querySelector) == null ? void 0 : a.call(i, ".dice-roll");
  r && r.classList.add(`votv-${t}`);
});
export {
  ge as V,
  st as c
};
//# sourceMappingURL=vacuum-of-the-void-BGukMkyE.mjs.map
