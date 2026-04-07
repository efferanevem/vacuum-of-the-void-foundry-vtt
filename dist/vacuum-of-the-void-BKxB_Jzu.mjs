var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Et = (R, s, e) => s in R ? Pt(R, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : R[s] = e;
var z = (R, s, e) => Et(R, typeof s != "symbol" ? s + "" : s, e);
var M = (R, s, e) => Ft(At(R), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: x, StringField: I, BooleanField: J, ArrayField: Re } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new x({
        name: new I({ required: !1, blank: !0, initial: "" }),
        player: new I({ required: !1, blank: !0, initial: "" }),
        level: new P({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new I({ required: !1, blank: !0, initial: "" }),
        assignment: new I({ required: !1, blank: !0, initial: "" }),
        subAssignment: new I({ required: !1, blank: !0, initial: "" }),
        background: new I({ required: !1, blank: !0, initial: "" }),
        languages: new I({ required: !1, blank: !0, initial: "" })
      }),
      resources: new x({
        health: new x({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new x({
          head: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          torso: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          arms: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          }),
          legs: new x({
            value: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new J({ required: !1, initial: !1 }),
            box2: new J({ required: !1, initial: !1 }),
            box3: new J({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new x({
          head: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new x({
          head: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new P({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new x({
          value: new P({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new P({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new x({
        defense: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new x({
        deception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new P({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new P({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new x({
        slotOrder: new I({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new x({
          name: new I({ required: !1, blank: !0, initial: "" }),
          bonus: new I({ required: !1, blank: !0, initial: "" }),
          damage: new I({ required: !1, blank: !0, initial: "" }),
          itemId: new I({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new x({
        microchips: new x({
          slot1: new x({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          }),
          slot2: new x({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          }),
          slot3: new x({
            itemId: new I({ required: !1, blank: !0, initial: "" }),
            name: new I({ required: !1, blank: !0, initial: "" }),
            active: new J({ required: !1, initial: !1 })
          })
        }),
        equipment: new I({ required: !1, blank: !0, initial: "" }),
        armor: new Re(
          new x({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Re(
          new x({
            name: new I({ required: !1, blank: !0, initial: "" }),
            quantity: new P({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new x({
        faji: new x({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new x({
          itemId: new I({ required: !1, blank: !0, initial: "" }),
          name: new I({ required: !1, blank: !0, initial: "" })
        }),
        passive: new x({
          items: new Re(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new x({
          items: new Re(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new x({
        biography: new Nt({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Ue, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new Ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Ue({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Rt, NumberField: Jt, StringField: ve } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Rt({ required: !1, initial: !1 }),
      type: new ve({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new ve({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new ve({ required: !1, blank: !0, initial: "" }),
      damage: new ve({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new ve({ required: !1, blank: !0, initial: "" }),
      special: new ve({ required: !1, blank: !0, initial: "" }),
      quantity: new ve({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { BooleanField: Kt, StringField: Me } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Me({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Me({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new Me({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Me({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Be, StringField: ut } = foundry.data.fields;
class Bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ut({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ut({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Be({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Be({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Be({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ht, StringField: dt } = foundry.data.fields;
class mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new dt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new dt({
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
const { StringField: pt } = foundry.data.fields;
class zt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new pt({ required: !1, blank: !0, initial: "" }),
      quantity: new pt({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Gt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Gt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function ft(R) {
  if (!R || !Array.isArray(R.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let o = r;
    for (const c of i) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        d(c.terms, o);
        continue;
      }
      if (typeof c.operator == "string") {
        o = c.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof c.faces == "number" ? c.faces : void 0, y = Array.isArray(c.results) ? c.results : null;
      if (!l || !y || l === 8 || l !== 6) continue;
      const b = !n && o >= 0 && (c.number === 3 || c.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of y) {
        if (!v || v.discarded || v.hidden) continue;
        const S = Number(v.result ?? v);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  d(R.terms, 1);
  const a = s.filter((i) => i === 6).length, u = s.filter((i) => i === 1).length, g = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, f = a + g, h = u + m;
  return f > 0 && f === h ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, a, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), n = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (n.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (n.windowScrollTop = t.scrollTop), n;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: n } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && n && (n.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, a = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, y = a.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      y && b && (u.focus = {
        name: l.name || null,
        id: l.id || null,
        selectionStart: "selectionStart" in l ? l.selectionStart : 0,
        selectionEnd: "selectionEnd" in l ? l.selectionEnd : 0
      });
    }
    const g = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const m = this.element, f = this.form ?? this.element, h = u.scrollState, i = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", o = () => {
      var l, y;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = f.querySelector) == null ? void 0 : l.call(f, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), a = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= a ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const u = String(((d = a.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (a) => {
        var u;
        return a.type === "Pancel" && ((u = a.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const a of s) {
      const u = String(((d = a.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, i, r, o, c, l, y, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((c = (o = n.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : c.value) ?? 0, a = ((l = n.currentHealth) == null ? void 0 : l.legs) ?? 0, u = U._healthStatusFromRatio(a, d), g = Number(((v = (b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = g;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var a, u, g, m;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (g = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : g.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var a, u, g, m;
    const e = U.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((a = this.actor.system) == null ? void 0 : a.resources) ?? {}, n = ((g = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, g, m, f;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (g = n.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, a = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return U._healthStatusFromRatio(a, d);
  }
  async _prepareContext(s) {
    var le, oe, ye, ge, $e, xe, je, _e, Se, Ze, Ve, et, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ye = (oe = (le = this.actor.system) == null ? void 0 : le.resources) == null ? void 0 : oe.stress) == null ? void 0 : ye.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, a = n.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of u) {
      const D = ((ge = d[p]) == null ? void 0 : ge.value) ?? 0, T = a[p] ?? 0;
      e.computedHealthStatus[p] = U._healthStatusFromRatio(T, D);
    }
    const g = (Number(a.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((p) => (Number(a[p]) || 0) === 0).length;
    e.showDeathSkull = g || f >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((xe = ($e = this.actor.system) == null ? void 0 : $e.combat) == null ? void 0 : xe.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const o = this._getTotalArmorSpeedPenalty();
    r += o, e.effectiveGivenSpeed = r;
    const l = (Number(((_e = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : _e.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: l } },
      { inplace: !1 }
    );
    const y = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, D] of Object.entries(y)) {
      const T = e.computedHealthStatus[D];
      e.skillHealthStatus[p] = T, e.skillDisabled[p] = T === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (b.slotOrder ?? "").trim(), q = S ? S.split(/\s*,\s*/).filter((p) => v.includes(p)) : [], C = (Se = this.actor.system.gear) == null ? void 0 : Se.microchips, O = C && typeof C == "object" && !Array.isArray(C) ? C : {}, w = (((Ze = O.slot1) == null ? void 0 : Ze.itemId) ?? "").trim(), L = (((Ve = O.slot2) == null ? void 0 : Ve.itemId) ?? "").trim(), F = (((et = O.slot3) == null ? void 0 : et.itemId) ?? "").trim(), B = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, D) => {
      const T = typeof p.sort == "number" ? p.sort : 0, _ = typeof D.sort == "number" ? D.sort : 0;
      return T - _;
    }).map((p) => {
      var ce, be, ke, ue, de, Ce;
      const D = p.type === "Fegyver", T = p.type === "MikroChip";
      let _ = 0, N = "", Y = null;
      for (let Te = 0; Te < q.length; Te++) {
        const Le = q[Te];
        if ((((ce = b[Le]) == null ? void 0 : ce.itemId) ?? "") === p.id) {
          _ = Te + 1, N = ((be = b[Le]) == null ? void 0 : be.bonus) ?? "", Y = Le;
          break;
        }
      }
      let W = null;
      T && (w === p.id ? W = "slot1" : L === p.id ? W = "slot2" : F === p.id && (W = "slot3"));
      const qe = D && ((ke = p.system) != null && ke.damage) ? p.system.damage : "", Z = D && typeof ((ue = p.system) == null ? void 0 : ue.range) == "string" ? (p.system.range || "").trim() : "", he = Y ? Number((de = b[Y]) == null ? void 0 : de.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: D,
        slotAssignment: _,
        slotBonus: N,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: qe,
        rangeStr: Z,
        slotBonusNum: he,
        quantity: Number(((Ce = p.system) == null ? void 0 : Ce.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = B;
    const H = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((p) => p.type === "Fegyver"), ne = H.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = ne;
    const Q = "— Nincs fegyver —", me = q.filter((p) => {
      const T = ((b[p] ?? {}).itemId ?? "").trim();
      return T ? !!H.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = me.map((p, D) => {
      const T = b[p] ?? {}, _ = (T.itemId ?? "").trim(), N = ne.find((Y) => Y.id === _);
      return {
        slotKey: p,
        itemId: _,
        slotNum: D + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || Q,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const Pe = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ae = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = H.map((p) => {
      var ot, ct, lt;
      const D = p.id;
      let T = null, _ = {};
      for (const Ke of q)
        if ((((ot = b[Ke]) == null ? void 0 : ot.itemId) ?? "").trim() === D) {
          T = Ke, _ = b[Ke] ?? {};
          break;
        }
      const N = !!T, Y = ((ct = p.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = p.system) == null ? void 0 : lt.equipped) !== null ? !!p.system.equipped : N, W = (p == null ? void 0 : p.system) ?? {}, qe = typeof W.range == "string" ? (W.range || "").trim() : "", Z = W.type ?? "", he = (Pe[Z] ?? Z) || "—", ce = W.size ?? "", be = (Ae[ce] ?? ce) || "", ke = [he, be].filter(Boolean).join(", ") || he || "—", ue = Z === "projectile" || ce === "thrown", de = W.quantity, Ce = de != null ? String(de).trim() : "1", Te = String(_.bonus ?? "").trim(), Le = String(W.bonus ?? "").trim(), Lt = Te || Le || "0";
      return {
        slotKey: T ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? Q,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: _.damage ?? W.damage ?? "",
        rangeStr: qe || "—",
        typeLabel: he,
        typeAndSize: ke,
        quantity: Ce,
        quantityDisplay: ue ? Ce : "—",
        isProjectile: ue,
        equipped: Y,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const Fe = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = Fe.map((p) => {
      var _, N;
      const D = (p == null ? void 0 : p.system) ?? {}, T = ((_ = p.system) == null ? void 0 : _.equipped) !== void 0 && ((N = p.system) == null ? void 0 : N.equipped) !== null ? !!p.system.equipped : !1;
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        protectionBonus: (D.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (D.speedPenalty ?? "").toString().trim() || "—",
        level: (D.level ?? "").toString().trim() || "—",
        special: (D.special ?? D.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const Ee = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = Ee.map((p) => {
      const D = (p == null ? void 0 : p.system) ?? {}, T = (D.description ?? "").trim(), _ = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", N = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: N,
        description: _
      };
    });
    const Ne = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = Ne.map((p) => {
      const T = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), _ = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: _
      };
    });
    const we = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((p) => p.type === "MikroChip"), pe = we.map((p) => ({ id: p.id, name: p.name, img: p.img })), De = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], k = (p) => {
      var T, _, N;
      const D = [];
      return p !== 1 && D.push((((T = O.slot1) == null ? void 0 : T.itemId) ?? "").trim()), p !== 2 && D.push((((_ = O.slot2) == null ? void 0 : _.itemId) ?? "").trim()), p !== 3 && D.push((((N = O.slot3) == null ? void 0 : N.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = pe.filter((p) => !k(1).includes(p.id)), e.microchipItemsSlot2 = pe.filter((p) => !k(2).includes(p.id)), e.microchipItemsSlot3 = pe.filter((p) => !k(3).includes(p.id)), e.microchipSlots = Oe.map((p) => {
      const D = O[p] ?? {}, T = (D.itemId ?? "").trim(), _ = we.find((N) => N.id === T);
      return {
        slotKey: p,
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || D.name || De,
        img: (_ == null ? void 0 : _.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const D = `slot${p}`, T = O[D] ?? {}, _ = (T.itemId ?? "").trim(), N = pe.find((Y) => Y.id === _);
      e[`microchip${p}ItemId`] = _, e[`microchip${p}DisplayName`] = (N == null ? void 0 : N.name) || T.name || De, e[`microchip${p}Img`] = (N == null ? void 0 : N.img) || "";
    }), e.microchipsTable = we.map((p) => {
      var ce, be, ke, ue;
      const D = p.id;
      let T = null;
      for (const de of Oe)
        if ((((ce = O[de]) == null ? void 0 : ce.itemId) ?? "").trim() === D) {
          T = de;
          break;
        }
      const _ = !!T, N = ((be = p == null ? void 0 : p.system) == null ? void 0 : be.abilityType) ?? "", Y = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", W = N === "active", qe = Number((ke = p == null ? void 0 : p.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, Z = (((ue = p == null ? void 0 : p.system) == null ? void 0 : ue.description) ?? "").trim(), he = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: Y,
        description: he,
        kp: qe,
        isActive: W,
        slotKey: T ?? "",
        equipped: _
      };
    });
    const A = this.actor.system.abilities ?? {}, E = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((p) => {
      var D, T, _;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((D = p.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((T = p.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((_ = p.system) == null ? void 0 : _.kp) ?? 0) || 0
      };
    }), K = new Map(E.map((p) => [p.id, p])), fe = "— Nincs képesség —", G = (p) => {
      const D = A[p] ?? {}, T = (D.itemId ?? "").trim(), _ = T ? K.get(T) : null, N = (_ == null ? void 0 : _.description) ?? "", Y = (_ == null ? void 0 : _.kp) ?? 0;
      return {
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || D.name || fe,
        img: (_ == null ? void 0 : _.img) || "",
        description: N,
        kp: Y
      };
    };
    e.abilityFajiSlot = G("faji"), e.abilityHatterSlot = G("hatter");
    const Ie = (p) => {
      const D = A[p];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, ae = (p) => p.map((D) => {
      const T = K.get(D);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ae(Ie("passive")), e.abilityActiveList = ae(Ie("active")), e;
  }
  _attachFrameListeners(s) {
    var f, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DIk8Eexr.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var c, l, y;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        o = (((((l = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((y = r.dataset.slot) == null ? void 0 : y.trim()) ?? "");
    }), !this.isEditable) return;
    const n = (i) => {
      var c;
      const r = i ? i.currentTarget : (c = e.querySelector) == null ? void 0 : c.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var c, l, y;
      i.preventDefault(), i.stopPropagation();
      const r = ((y = (l = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var y;
      i.preventDefault();
      const r = i.currentTarget, o = r.dataset.skill, c = ((y = r.textContent) == null ? void 0 : y.trim()) || o, { openRollSheetForSkill: l } = await import("./roll-sheet-DIk8Eexr.mjs");
      l(this.actor, o, c);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, S, q, C, O, w, L;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), c = o == null ? void 0 : o.dataset.slot;
      if (!c) return;
      const y = (((S = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[c]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!y) return;
      const b = ((C = (q = this.actor.items).get) == null ? void 0 : C.call(q, y)) ?? ((w = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : w.call(O, (F) => F.id === y));
      (L = b == null ? void 0 : b.sheet) == null || L.render(!0);
    });
    const a = (i, r) => {
      var l;
      const o = i.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (c) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const y = i.dataset.weaponSlot;
          y && this._rollWeapon(y);
          return;
        }
        (l = c.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), a(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), a(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await c.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor, l = c.items.get(o), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = v ? v.split(/\s*,\s*/).filter((O) => S.includes(O)) : [], C = q.find((O) => {
          var w;
          return (((w = b[O]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (C) {
          const O = q.filter((w) => w !== C);
          y["system.weapons.slotOrder"] = O.join(","), y[`system.weapons.${C}.itemId`] = "", y[`system.weapons.${C}.name`] = "", y[`system.weapons.${C}.damage`] = "", y[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var C, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = y ? y.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let w = v.find((F) => {
          var j;
          return !((j = l[F]) != null && j.itemId);
        });
        const L = new Set(v);
        if (!w) {
          const F = b.find((j) => !L.has(j));
          if (!F) return;
          w = F, v.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: (c == null ? void 0 : c.name) ?? "",
          [`system.weapons.${w}.damage`]: ((C = c == null ? void 0 : c.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = c == null ? void 0 : c.system) == null ? void 0 : O.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((L) => L !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), c = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !c && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const r = i.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), c = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), l = c == null ? void 0 : c.dataset.slot;
      if (!l) return;
      const y = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((w = r.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = b);
      let q = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      v ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", c == null || c.insertBefore(q, S)), q.src = v, q.style.display = "") : q && q.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const C = y ? this.actor.items.get(y) : null, O = {
        [`system.gear.microchips.${l}.itemId`]: y,
        [`system.gear.microchips.${l}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      y && (O[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "MikroChip") return;
      const c = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, y = ["slot1", "slot2", "slot3"].find((S) => {
        var q;
        return (((q = c[S]) == null ? void 0 : q.itemId) ?? "").trim() === r;
      });
      y && await this.actor.update({
        [`system.gear.microchips.${y}.itemId`]: "",
        [`system.gear.microchips.${y}.name`]: "",
        [`system.gear.microchips.${y}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const o = r.dataset.slot;
      r.addEventListener("dragover", (c) => this._onMicrochipSlotDragOver(c, o)), r.addEventListener("dragleave", (c) => {
        var l;
        return (l = c.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (c) => this._onMicrochipSlotDrop(c, o));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (c) => this._onAbilitySingleDragOver(c, o)), r.addEventListener("dragleave", (c) => {
        var l;
        return (l = c.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (c) => {
        var l;
        (l = c.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (c) => this._onAbilityAreaDragOver(c, o)), r.addEventListener("dragleave", (c) => {
        var l;
        return (l = c.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (c) => {
        var l;
        (l = c.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!r || !o) return;
      const c = this.actor.system.abilities ?? {}, y = (Array.isArray((b = c[r]) == null ? void 0 : b.items) ? c[r].items.slice() : []).filter((v) => v !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: y });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var l;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      (l = c == null ? void 0 : c.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(o) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await c.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      !c || c.type !== "Pancel" || (await c.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var C, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = y ? y.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let w = v.find((F) => {
          var j;
          return !((j = l[F]) != null && j.itemId);
        });
        const L = new Set(v);
        if (!w) {
          const F = b.find((j) => !L.has(j));
          if (!F) return;
          w = F, v.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: o,
          [`system.weapons.${w}.name`]: c.name ?? "",
          [`system.weapons.${w}.damage`]: ((C = c.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((O = c.system) == null ? void 0 : O.bonus) ?? ""
        }), await c.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((L) => L !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await c.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor, l = c.items.get(o), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = c.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = v ? v.split(/\s*,\s*/).filter((O) => S.includes(O)) : [], C = q.find((O) => {
          var w;
          return (((w = b[O]) == null ? void 0 : w.itemId) ?? "").trim() === o;
        });
        if (C) {
          const O = q.filter((w) => w !== C);
          y["system.weapons.slotOrder"] = O.join(","), y[`system.weapons.${C}.itemId`] = "", y[`system.weapons.${C}.name`] = "", y[`system.weapons.${C}.damage`] = "", y[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await c.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, g = (i) => {
      var c, l, y, b;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const o = ((l = (c = r.system) == null ? void 0 : c.resources) == null ? void 0 : l.currentHealth) != null || ((b = (y = r.system) == null ? void 0 : y.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        o && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, o, c;
      return i && (((o = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || u.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var y;
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = r.form;
      if (!m(c)) return;
      const l = i.relatedTarget;
      l && (c.contains(l) || u.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), g(c));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var u, g, m;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let h;
      f.type === "checkbox" ? h = f.checked : f.type === "number" ? h = f.value === "" ? 0 : Number(f.value) : h = f.value ?? "", foundry.utils.setProperty(e, f.name, h);
    }
    const t = foundry.utils.mergeObject(
      ((u = this.actor.system) == null ? void 0 : u.resources) ?? {},
      ((g = foundry.utils.expandObject(e).system) == null ? void 0 : g.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    for (const f of a) {
      const h = ((m = n[f]) == null ? void 0 : m.value) ?? 0, i = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, U._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, d, a, u, g, m, f, h, i, r, o;
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
          let y = l.id;
          if (((n = l.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : d.id) ?? y;
          }
          const b = (((a = l.system) == null ? void 0 : a.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": y,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": y,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const S = b === "active" ? "active" : "passive", q = Array.isArray((u = v[S]) == null ? void 0 : u.items) ? v[S].items.slice() : Array.isArray(v[S]) ? v[S].slice() : [];
          q.includes(y) || q.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: q });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((g = e.data) == null ? void 0 : g.uuid) ?? (typeof e == "string" ? e : null);
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
          const y = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== y.id;
          let v = l.id;
          if (b) {
            const S = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? v;
          }
          if (b) {
            const S = ((h = y.system) == null ? void 0 : h.weapons) ?? {}, q = (S.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], O = q ? q.split(/\s*,\s*/).filter((L) => C.includes(L)) : [], w = O.filter((L) => {
              var F;
              return (((F = S[L]) == null ? void 0 : F.itemId) ?? "").trim() === v;
            });
            if (w.length > 0) {
              const F = {
                "system.weapons.slotOrder": O.filter((j) => !w.includes(j)).join(",")
              };
              for (const j of w)
                F[`system.weapons.${j}.itemId`] = "", F[`system.weapons.${j}.name`] = "", F[`system.weapons.${j}.damage`] = "", F[`system.weapons.${j}.bonus`] = "";
              await y.update(F);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const y = this.actor;
          if (((i = l.parent) == null ? void 0 : i.id) !== y.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await y.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const y = this.actor;
          ((r = l.parent) == null ? void 0 : r.id) !== y.id && await y.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const y = this.actor;
          ((o = l.parent) == null ? void 0 : o.id) !== y.id && await y.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, a, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, g, m, f, h, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((f = d.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const a = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: a,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var n;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (n = s.currentTarget) == null || n.classList.add("karakter-actions-row-drag-over"));
  }
  _onInventoryRowDragLeave(s, e) {
    var t;
    (t = s.currentTarget) == null || t.classList.remove("karakter-actions-row-drag-over");
  }
  async _onInventoryRowDrop(s, e) {
    var m, f;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((h, i) => {
      const r = typeof h.sort == "number" ? h.sort : 0, o = typeof i.sort == "number" ? i.sort : 0;
      return r - o;
    }).map((h) => h.id), a = d.indexOf(t), u = d.indexOf(e);
    if (a === -1 || u === -1) return;
    d.splice(a, 1), d.splice(u, 0, t);
    const g = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", g);
  }
  _onInventoryAreaDragOver(s) {
    var n, d, a;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const n = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, n)}px`;
  }
  async _postItemToChat(s) {
    var g, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const a = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${a}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, h, i;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var n, d;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var a, u, g;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((u = n.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var g, m, f, h;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const a = this.actor.system.abilities ?? {}, u = Array.isArray((h = a[e]) == null ? void 0 : h.items) ? a[e].items.slice() : Array.isArray(a[e]) ? a[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, a, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, g, m, f, h;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "MikroChip") return;
    let a = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (a = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? a), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: a,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(n) || 0;
    const a = this._getSkillHealthStatus(s);
    a === 1 ? d -= 6 : a === 2 && (d -= 3);
    const g = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, m = new Roll(g);
    await m.evaluate({ async: !0 });
    const { resultType: f, label: h } = ft(m), i = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: i
    });
  }
  async _rollMorale() {
    var d;
    const s = Number(((d = this.actor.system.resources) == null ? void 0 : d.morale) ?? 0) || 0;
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
    const n = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": n });
  }
  async _rollWeapon(s) {
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((S) => S.type === "Fegyver");
    let a = null;
    t.itemId && (a = d.find((S) => S.id === t.itemId) ?? null);
    const u = a && a.name || t.name || `Fegyver (${s})`, g = Number(t.bonus || 0) || 0, f = (((v = a == null ? void 0 : a.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(n[f] || 0) || 0, i = g + h, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, c = new Roll(o);
    await c.evaluate({ async: !0 });
    const { resultType: l, label: y } = ft(c), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: y } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var g, m, f, h, i, r, o, c, l, y;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((i = n.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((l = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : l.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(d);
    await a.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
z(U, "PARTS", foundry.utils.mergeObject(
  M(U, U, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(U, U, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = M(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = M(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = M(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
z(U, "BODY_PART_BY_SKILL", {
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
let He = U;
var kt, vt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, d, a, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((a = s.querySelector) == null ? void 0 : a.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), n = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (n.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (n.windowScrollTop = t.scrollTop), n;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: n } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && n && (n.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, n = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const r = document.activeElement, o = n.contains(r), c = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      o && c && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const a = await super.render(s, e), u = this.element, g = this.form ?? this.element, m = d.scrollState, f = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, o;
      if (this._applyScrollState(u, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const c = ((r = g.querySelector) == null ? void 0 : r.call(g, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (o = g.querySelector) == null ? void 0 : o.call(g, `[name="${CSS.escape(f.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = f.selectionStart ?? 0, c.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || f) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), a;
  }
  async _prepareContext(s) {
    var Q, me, Pe, Ae, Fe, Ee, Ne, we, pe, De, Oe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Q = this.actor) == null ? void 0 : Q.system), e.showDeathSkull = !1;
    const t = this.actor, n = ((me = t == null ? void 0 : t.items) == null ? void 0 : me.contents) ?? [], d = ((Pe = t == null ? void 0 : t.system) == null ? void 0 : Pe.weapons) ?? {}, a = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), g = u ? u.split(/\s*,\s*/).filter((k) => a.includes(k)) : [], m = n.filter((k) => k.type === "Fegyver"), f = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = g.length > 0 ? g : a, r = a.filter((k) => !i.includes(k)), o = [...i, ...r], c = o.filter((k) => {
      var E;
      const A = (((E = d[k]) == null ? void 0 : E.itemId) ?? "").trim();
      return A && m.some((K) => K.id === A);
    });
    e.weaponSlots = c.map((k) => {
      const A = d[k] ?? {}, E = (A.itemId ?? "").trim(), K = f.find((fe) => fe.id === E);
      return {
        slotKey: k,
        itemId: E,
        displayName: (K == null ? void 0 : K.name) || A.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, y = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var _e;
      const A = k.id;
      let E = null, K = {};
      for (const Se of o)
        if ((((_e = d[Se]) == null ? void 0 : _e.itemId) ?? "").trim() === A) {
          E = Se, K = d[Se] ?? {};
          break;
        }
      const fe = !!E, G = (k == null ? void 0 : k.system) ?? {}, Ie = typeof G.range == "string" ? (G.range || "").trim() : "", ae = G.type ?? "", le = (l[ae] ?? ae) || "—", oe = G.size ?? "", ye = (y[oe] ?? oe) || "", ge = [le, ye].filter(Boolean).join(", ") || le || "—", $e = ae === "projectile" || oe === "thrown", xe = G.quantity != null ? String(G.quantity).trim() : "1", je = String(K.bonus ?? G.bonus ?? "").trim() || "0";
      return {
        slotKey: E ?? "",
        itemId: A,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: je,
        damage: K.damage ?? G.damage ?? "",
        rangeStr: Ie || "—",
        typeAndSize: ge,
        quantity: xe,
        isProjectile: $e,
        equipped: fe,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const b = n.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var K;
      const A = (k == null ? void 0 : k.system) ?? {}, E = ((K = k.system) == null ? void 0 : K.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (A.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (A.speedPenalty ?? "").toString().trim() || "—",
        level: (A.level ?? "").toString().trim() || "—",
        special: (A.special ?? A.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const v = ((Fe = (Ae = t == null ? void 0 : t.system) == null ? void 0 : Ae.gear) == null ? void 0 : Fe.microchips) ?? {}, S = ["slot1", "slot2", "slot3"], q = n.filter((k) => k.type === "MikroChip");
    e.microchipsTable = q.map((k) => {
      var ae, le, oe, ye;
      const A = k.id;
      let E = null;
      for (const ge of S)
        if ((((ae = v[ge]) == null ? void 0 : ae.itemId) ?? "").trim() === A) {
          E = ge;
          break;
        }
      const K = ((le = k == null ? void 0 : k.system) == null ? void 0 : le.abilityType) ?? "", fe = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", G = (((oe = k == null ? void 0 : k.system) == null ? void 0 : oe.description) ?? "").trim(), Ie = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: A,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: fe,
        description: Ie,
        kp: Number((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const C = n.filter((k) => k.type === "Targy");
    e.itemsTable = C.map((k) => {
      const A = (k == null ? void 0 : k.system) ?? {}, E = (A.description ?? "").trim(), K = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: A.quantity != null ? String(A.quantity).trim() : "1",
        description: K
      };
    });
    const O = n.filter((k) => k.type === "Egyeb");
    e.egyebList = O.map((k) => {
      const E = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const w = (((Ee = e.weaponsTable) == null ? void 0 : Ee.length) ?? 0) > 0 || (((Ne = e.armorTable) == null ? void 0 : Ne.length) ?? 0) > 0 || (((we = e.microchipsTable) == null ? void 0 : we.length) ?? 0) > 0 || (((pe = e.itemsTable) == null ? void 0 : pe.length) ?? 0) > 0 || (((De = e.egyebList) == null ? void 0 : De.length) ?? 0) > 0;
    e.showEquipmentDropZone = !w;
    const L = ((Oe = t == null ? void 0 : t.system) == null ? void 0 : Oe.abilities) ?? {}, F = n.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var A, E;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((A = k.system) == null ? void 0 : A.description) ?? "",
        kp: Number(((E = k.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), j = new Map(F.map((k) => [k.id, k])), B = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = B, e.abilityHatterSlot = B;
    const H = (k) => {
      const A = L[k];
      return A ? Array.isArray(A == null ? void 0 : A.items) ? A.items : Array.isArray(A) ? A : [] : [];
    }, ne = (k) => (k || []).map((A) => {
      const E = j.get(A);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ne(H("passive")), e.abilityActiveList = ne(H("active")), e;
  }
  _attachFrameListeners(s) {
    var m, f, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var c, l, y;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((y = (l = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var c, l, y;
      i.preventDefault();
      const r = (l = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (y = o == null ? void 0 : o.sheet) == null || y.render(!0);
    });
    const n = (i) => {
      var c, l;
      const r = (c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId;
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (l = o == null ? void 0 : o.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), n(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), n(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, y, b, v;
      i.preventDefault();
      const r = (y = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : y.call(l, ".karakter-weapon-slot"), o = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      (v = c == null ? void 0 : c.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var l;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, o = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DIk8Eexr.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var c, l, y, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (((c = r == null ? void 0 : r.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (o = (((((b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var y, b;
      i.preventDefault();
      const r = i.currentTarget, o = (((y = r == null ? void 0 : r.dataset) == null ? void 0 : y.skill) ?? "").trim(), c = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-DIk8Eexr.mjs");
      l(this.actor, o, c);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var o, c;
      i.preventDefault();
      const r = (c = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, S, q, C, O;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, o = (q = (S = i.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : q.itemId;
      if (!r || !o || !this.actor) return;
      const c = ((C = this.actor.system) == null ? void 0 : C.abilities) ?? {}, y = (Array.isArray((O = c[r]) == null ? void 0 : O.items) ? c[r].items.slice() : []).filter((w) => w !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var o, c;
      if (i.preventDefault(), !i.altKey) return;
      const r = (c = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, o = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), y = {};
      l && (y[`system.weapons.${l}.itemId`] = "", y[`system.weapons.${l}.name`] = "", y[`system.weapons.${l}.damage`] = "", y[`system.weapons.${l}.bonus`] = ""), Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var o, c;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((c = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var y, b, v, S;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (y = i.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((q) => {
        var C;
        return (((C = o[q]) == null ? void 0 : C.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var c, l;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((l = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || h.forEach((i) => {
      var r;
      (((r = i.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var y, b, v;
      const r = i.currentTarget, o = (b = (y = r == null ? void 0 : r.dataset) == null ? void 0 : y.itemId) == null ? void 0 : b.trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      const l = c.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const a = this, u = (i) => {
      if (!i) return;
      const r = a._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && a.actor.update(r).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, g = (i) => {
      var r, o, c;
      return i && (((o = (r = a.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || a.id && ((c = i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(a.id)}`)));
    };
    a._votvNpcBlur = (i) => {
      var y;
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = r.form;
      if (!g(c)) return;
      const l = i.relatedTarget;
      l && (c.contains(l) || a.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(a.id)}`))) || u(c);
    }, document.body.addEventListener("blur", a._votvNpcBlur, !0);
  }
  _tearDown(s) {
    var t, n, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const a = this._getFormDataForUpdate(e);
      Object.keys(a).length > 0 && this.actor.update(a).catch((u) => console.warn("VoidNpcSheet save on close failed", u));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, s);
  }
  /** Sebzés gomb: a fegyver sebzés formuláját dobja és chatbe küldi. */
  async _rollWeaponDamage(s, e = "") {
    var g, m, f, h, i, r, o, c, l, y;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!n || n.type !== "Fegyver") return;
    let d = (((i = n.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (o = ui.notifications) == null ? void 0 : o.warn) == null || y.call(o, ((l = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : l.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const a = new Roll(d);
    await a.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var f, h, i, r, o, c, l, y, b, v, S, q, C, O, w;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const n = ((L) => {
      var j;
      if (!L) return null;
      const F = L.uuid ?? L.documentUuid ?? ((j = L.data) == null ? void 0 : j.uuid) ?? (typeof L == "string" ? L : null);
      if (F) return F;
      if (typeof L == "object") {
        for (const B of Object.values(L))
          if (typeof B == "string" && B.includes(".") && B.startsWith("Item.")) return B;
      }
      return null;
    })(e);
    if (!n) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const a = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let L = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== a.id) {
        const ne = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        L = ((o = (await a.createEmbeddedDocuments("Item", [ne]))[0]) == null ? void 0 : o.id) ?? L;
      }
      const F = (((c = d.system) == null ? void 0 : c.kind) ?? "passive").toString(), j = ((l = a.system) == null ? void 0 : l.abilities) ?? {}, B = F === "active" ? "active" : "passive", H = Array.isArray((y = j[B]) == null ? void 0 : y.items) ? j[B].items.slice() : Array.isArray(j[B]) ? j[B].slice() : [];
      H.includes(L) || H.push(L), await a.update({ [`system.abilities.${B}.items`]: H }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === a.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await a.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const L = ((S = a.system) == null ? void 0 : S.weapons) ?? {}, F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (L.slotOrder ?? "").trim(), B = j ? j.split(/\s*,\s*/).filter((Q) => F.includes(Q)) : [];
      let H = F.find((Q) => {
        var me;
        return !(((me = L[Q]) == null ? void 0 : me.itemId) ?? "").trim();
      });
      H || (H = F.find((Q) => !B.includes(Q)) ?? "slot1");
      const ne = B.includes(H) ? B : [...B, H].filter((Q) => F.includes(Q));
      await a.update({
        "system.weapons.slotOrder": ne.join(","),
        [`system.weapons.${H}.itemId`]: m,
        [`system.weapons.${H}.name`]: d.name ?? "",
        [`system.weapons.${H}.damage`]: ((q = d.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${H}.bonus`]: ((C = d.system) == null ? void 0 : C.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const L = ((w = (O = a.system) == null ? void 0 : O.gear) == null ? void 0 : w.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((B) => {
        var H;
        return !(((H = L[B]) == null ? void 0 : H.itemId) ?? "").trim();
      });
      j && await a.update({
        [`system.gear.microchips.${j}.itemId`]: m,
        [`system.gear.microchips.${j}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, h, i, r, o;
    const e = (h = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), a = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${u}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const n of s.elements) {
      if (!n.name || n.disabled || n.type === "radio" && !n.checked) continue;
      let d;
      n.type === "checkbox" ? d = n.checked : n.type === "number" ? d = n.value === "" ? 0 : Number(n.value) : d = n.value ?? "", d !== void 0 && foundry.utils.setProperty(e, n.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const n = e.name;
      (n === void 0 || typeof n == "string" && n.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(X, "PARTS", foundry.utils.mergeObject(
  M(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((kt = M(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vt = M(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = M(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let ze = X;
var St;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, f, h, i, r, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (a) => {
      var u, g, m;
      return a && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var g, m, f;
      const u = ((g = a.target) == null ? void 0 : g.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && n(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
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
z(V, "PARTS", foundry.utils.mergeObject(M(V, V, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(V, V, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = M(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Ge = V;
var Tt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, f, h, i, r, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (a) => {
      var u, g, m;
      return a && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var g, m, f;
      const u = ((g = a.target) == null ? void 0 : g.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && n(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ee, "PARTS", foundry.utils.mergeObject(M(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = M(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let We = ee;
var Dt;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, f, h, i, r, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (a) => {
      var u, g, m;
      return a && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var g, m, f;
      const u = ((g = a.target) == null ? void 0 : g.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && n(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", !(t.name === "name" && typeof n == "string" && n.trim() === "") && foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(te, "PARTS", foundry.utils.mergeObject(M(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = M(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !1 })
}));
let Ye = te;
var Ot;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, f, h, i, r, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (a) => {
      var u, g, m;
      return a && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var g, m, f;
      const u = ((g = a.target) == null ? void 0 : g.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && n(u);
    }, e._votvInput = (a) => {
      var m;
      const u = a.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const g = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(g), 300));
    }, document.body.addEventListener("change", e._votvChange, !0), document.body.addEventListener("input", e._votvInput, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), document.body.removeEventListener("input", this._votvInput, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), clearTimeout(this._votvInputDebounce), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", !(t.name === "name" && typeof n == "string" && n.trim() === "") && foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(se, "PARTS", foundry.utils.mergeObject(M(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ot = M(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !0 })
}));
let Je = se;
var _t;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, f, h, i, r, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (a) => {
      var u, g, m;
      return a && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var g, m, f;
      const u = ((g = a.target) == null ? void 0 : g.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && n(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ie, "PARTS", foundry.utils.mergeObject(M(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((_t = M(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ie;
var qt;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (a) => {
      var m, f, h, i, r, o, c;
      if (!e.isEditable || !((f = (m = a.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = a.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      a.preventDefault(), a.stopPropagation();
      const u = ((c = (o = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: e.document.img || "",
        callback: (l) => {
          l && e.document.update({ img: l });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (a) => {
      if (!a) return;
      const u = e._getFormDataForUpdate(a);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (a) => {
      var u, g, m;
      return a && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, a)) || e.id && ((m = a.closest) == null ? void 0 : m.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var g, m, f;
      const u = ((g = a.target) == null ? void 0 : g.form) ?? ((f = (m = a.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && n(u);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvProfileClickRoot ? (this._votvProfileClickRoot.removeEventListener("click", this._votvProfileImgClick, !0), this._votvProfileClickRoot = null) : document.body.removeEventListener("click", this._votvProfileImgClick, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked || t.name === "img") continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(re, "PARTS", foundry.utils.mergeObject(M(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((qt = M(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = re;
const Ct = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, n, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Mt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", He, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ze, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ge, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", We, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ye, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Je, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qe, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xe, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const R = 500;
  Hooks.on("updateActor", (a, u, g, m) => {
    var v, S, q, C, O;
    const f = a == null ? void 0 : a.id;
    if (!f) return;
    const h = document.activeElement, i = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), r = [], o = (v = game.actors) == null ? void 0 : v.get(f);
    o != null && o.apps && r.push(...Array.from(o.apps));
    const c = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of c)
      ((S = w.document) == null ? void 0 : S.id) !== f || ((q = w.document) == null ? void 0 : q.documentName) !== "Actor" || ((C = w.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || r.includes(w) || r.push(w);
    if (i && r.some((w) => {
      const L = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return L && L.contains(h);
    })) return;
    const y = (O = game.votv) == null ? void 0 : O._lastKarakterSheetBlurSave, b = y && Date.now() - y.at < R ? y.appId : null;
    setTimeout(() => {
      for (const w of r)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (a, u, g, m) => {
    var r, o, c;
    const f = a == null ? void 0 : a.parent;
    if (!f || f.documentName !== "Actor" || f.type !== "Karakter" || a.type !== "Fegyver") return;
    const h = ((r = f.system) == null ? void 0 : r.weapons) ?? {}, i = {};
    for (const [l, y] of Object.entries(h)) {
      if (!l.startsWith("slot")) continue;
      const b = ((y == null ? void 0 : y.itemId) ?? "").trim();
      !b || b !== a.id || (i[`system.weapons.${l}.name`] = a.name ?? "", i[`system.weapons.${l}.damage`] = ((o = a.system) == null ? void 0 : o.damage) ?? "", i[`system.weapons.${l}.bonus`] = ((c = a.system) == null ? void 0 : c.bonus) ?? "");
    }
    Object.keys(i).length && f.update(i);
  });
});
Hooks.on("ready", () => {
  var R, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var a, u, g, m, f, h;
      if (!((u = (a = e.target) == null ? void 0 : a.closest) != null && u.call(a, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (R = game.user) != null && R.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const n = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(n != null && n.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Ct },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, a = await n.create(d);
      a && console.log("Vacuum of the Void | Default scene created:", a.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })();
});
Hooks.on("preCreateToken", (R, s, e) => {
  var a, u;
  const t = (a = game.votv) == null ? void 0 : a._dragSourceActorId, n = t ?? R.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (u = game.actors) == null ? void 0 : u.get(n) : null;
  !d || d.type !== "Karakter" || R.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0
  });
});
Hooks.on("preCreateScene", (R, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || R.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ct,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (R, s, e) => {
  var u, g;
  const t = ((u = R.flags) == null ? void 0 : u["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel;
  if (!n && !d) return;
  const a = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (a && (n && a.classList.add(`votv-${n}`), d)) {
    const m = a.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const f = a.querySelector(".dice-total"), h = (f == null ? void 0 : f.parentElement) ?? a, i = document.createElement("div");
    i.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, i.textContent = d, h.appendChild(i);
  }
});
export {
  He as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-BKxB_Jzu.mjs.map
