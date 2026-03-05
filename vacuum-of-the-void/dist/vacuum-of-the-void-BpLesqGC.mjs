var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Et = (R, s, e) => s in R ? Pt(R, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : R[s] = e;
var z = (R, s, e) => Et(R, typeof s != "symbol" ? s + "" : s, e);
var K = (R, s, e) => Ft(At(R), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: x, StringField: I, BooleanField: J, ArrayField: Fe } = foundry.data.fields;
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
        armor: new Fe(
          new x({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Fe(
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
          items: new Fe(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new x({
          items: new Fe(
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
const { NumberField: $e, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new $e({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new $e({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new $e({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
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
const { BooleanField: Kt, StringField: Ee } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ee({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ee({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new Ee({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ee({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: xe, StringField: ut } = foundry.data.fields;
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
      cost: new xe({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new xe({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new xe({ required: !1, integer: !0, min: 0, initial: 1 })
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
  let r = !1;
  const d = (i, a = 1) => {
    if (!Array.isArray(i)) return;
    let c = a;
    for (const o of i) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, c);
        continue;
      }
      if (typeof o.operator == "string") {
        c = o.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof o.faces == "number" ? o.faces : void 0, y = Array.isArray(o.results) ? o.results : null;
      if (!l || !y || l === 8 || l !== 6) continue;
      const b = !r && c >= 0 && (o.number === 3 || o.number === "3") ? (r = !0, s) : c >= 0 ? e : t;
      for (const k of y) {
        if (!k || k.discarded || k.hidden) continue;
        const S = Number(k.result ?? k);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  d(R.terms, 1);
  const n = s.filter((i) => i === 6).length, u = s.filter((i) => i === 1).length, g = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, f = n + g, h = u + m;
  return f > 0 && f === h ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
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
  _getScrollContainers(s) {
    var r, d, n, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, n = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, y = n.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
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
    const m = this.element, f = this.form ?? this.element, h = u.scrollState, i = u.focus, a = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", c = () => {
      var l, y;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = f.querySelector) == null ? void 0 : l.call(f, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (a || i) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const d = Math.floor(r / 3), n = Math.floor(2 * r / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var u;
        return n.type === "Pancel" && ((u = n.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const u = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, d;
    const s = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var u;
        return n.type === "Pancel" && ((u = n.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of s) {
      const u = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, i, a, c, o, l, y, b, k;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((a = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, d = ((o = (c = r.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, n = ((l = r.currentHealth) == null ? void 0 : l.legs) ?? 0, u = U._healthStatusFromRatio(n, d), g = Number(((k = (b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.combat) == null ? void 0 : k.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = g;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var n, u, g, m;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (g = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : g.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var n, u, g, m;
    const e = U.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, r = ((g = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, g, m, f;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (g = r.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, n = ((f = r.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return U._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var Ae, Se, we, Ge, We, Ye, Je, Qe, Xe, Ze, Ve, et, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((we = (Se = (Ae = this.actor.system) == null ? void 0 : Ae.resources) == null ? void 0 : Se.stress) == null ? void 0 : we.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, d = r.hitLocations ?? {}, n = r.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of u) {
      const O = ((Ge = d[p]) == null ? void 0 : Ge.value) ?? 0, T = n[p] ?? 0;
      e.computedHealthStatus[p] = U._healthStatusFromRatio(T, O);
    }
    const g = (Number(n.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((p) => (Number(n[p]) || 0) === 0).length;
    e.showDeathSkull = g || f >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((Ye = (We = this.actor.system) == null ? void 0 : We.combat) == null ? void 0 : Ye.givenSpeed) ?? 0) || 0;
    let a;
    h === 0 ? a = 0 : h === 1 ? a = -6 : h === 2 ? a = -3 : a = i;
    const c = this._getTotalArmorSpeedPenalty();
    a += c, e.effectiveGivenSpeed = a;
    const l = (Number(((Qe = (Je = this.actor.system) == null ? void 0 : Je.combat) == null ? void 0 : Qe.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: a, givenProtection: l } },
      { inplace: !1 }
    );
    const y = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [p, O] of Object.entries(y)) {
      const T = e.computedHealthStatus[O];
      e.skillHealthStatus[p] = T, e.skillDisabled[p] = T === 0 ? " disabled" : "", e.skillHasHealthTint[p] = !0;
    }
    const b = this.actor.system.weapons ?? {}, k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (b.slotOrder ?? "").trim(), q = S ? S.split(/\s*,\s*/).filter((p) => k.includes(p)) : [], C = (Xe = this.actor.system.gear) == null ? void 0 : Xe.microchips, D = C && typeof C == "object" && !Array.isArray(C) ? C : {}, w = (((Ze = D.slot1) == null ? void 0 : Ze.itemId) ?? "").trim(), L = (((Ve = D.slot2) == null ? void 0 : Ve.itemId) ?? "").trim(), F = (((et = D.slot3) == null ? void 0 : et.itemId) ?? "").trim(), B = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, O) => {
      const T = typeof p.sort == "number" ? p.sort : 0, _ = typeof O.sort == "number" ? O.sort : 0;
      return T - _;
    }).map((p) => {
      var ce, he, be, ue, de, Oe;
      const O = p.type === "Fegyver", T = p.type === "MikroChip";
      let _ = 0, N = "", Y = null;
      for (let Ie = 0; Ie < q.length; Ie++) {
        const De = q[Ie];
        if ((((ce = b[De]) == null ? void 0 : ce.itemId) ?? "") === p.id) {
          _ = Ie + 1, N = ((he = b[De]) == null ? void 0 : he.bonus) ?? "", Y = De;
          break;
        }
      }
      let W = null;
      T && (w === p.id ? W = "slot1" : L === p.id ? W = "slot2" : F === p.id && (W = "slot3"));
      const Te = O && ((be = p.system) != null && be.damage) ? p.system.damage : "", Z = O && typeof ((ue = p.system) == null ? void 0 : ue.range) == "string" ? (p.system.range || "").trim() : "", ge = Y ? Number((de = b[Y]) == null ? void 0 : de.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: O,
        slotAssignment: _,
        slotBonus: N,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: Te,
        rangeStr: Z,
        slotBonusNum: ge,
        quantity: Number(((Oe = p.system) == null ? void 0 : Oe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = B;
    const H = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((p) => p.type === "Fegyver"), ne = H.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = ne;
    const Q = "— Nincs fegyver —", me = q.filter((p) => {
      const T = ((b[p] ?? {}).itemId ?? "").trim();
      return T ? !!H.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = me.map((p, O) => {
      const T = b[p] ?? {}, _ = (T.itemId ?? "").trim(), N = ne.find((Y) => Y.id === _);
      return {
        slotKey: p,
        itemId: _,
        slotNum: O + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || Q,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const _e = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, qe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = H.map((p) => {
      var ot, ct, lt;
      const O = p.id;
      let T = null, _ = {};
      for (const Ne of q)
        if ((((ot = b[Ne]) == null ? void 0 : ot.itemId) ?? "").trim() === O) {
          T = Ne, _ = b[Ne] ?? {};
          break;
        }
      const N = !!T, Y = ((ct = p.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = p.system) == null ? void 0 : lt.equipped) !== null ? !!p.system.equipped : N, W = (p == null ? void 0 : p.system) ?? {}, Te = typeof W.range == "string" ? (W.range || "").trim() : "", Z = W.type ?? "", ge = (_e[Z] ?? Z) || "—", ce = W.size ?? "", he = (qe[ce] ?? ce) || "", be = [ge, he].filter(Boolean).join(", ") || ge || "—", ue = Z === "projectile" || ce === "thrown", de = W.quantity, Oe = de != null ? String(de).trim() : "1", Ie = String(_.bonus ?? "").trim(), De = String(W.bonus ?? "").trim(), Lt = Ie || De || "0";
      return {
        slotKey: T ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? Q,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: _.damage ?? W.damage ?? "",
        rangeStr: Te || "—",
        typeLabel: ge,
        typeAndSize: be,
        quantity: Oe,
        quantityDisplay: ue ? Oe : "—",
        isProjectile: ue,
        equipped: Y,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const Ce = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = Ce.map((p) => {
      var _, N;
      const O = (p == null ? void 0 : p.system) ?? {}, T = ((_ = p.system) == null ? void 0 : _.equipped) !== void 0 && ((N = p.system) == null ? void 0 : N.equipped) !== null ? !!p.system.equipped : !1;
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: (O.level ?? "").toString().trim() || "—",
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const v = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = v.map((p) => {
      const O = (p == null ? void 0 : p.system) ?? {}, T = (O.description ?? "").trim(), _ = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", N = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: N,
        description: _
      };
    });
    const E = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = E.map((p) => {
      const T = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), _ = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: _
      };
    });
    const A = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((p) => p.type === "MikroChip"), M = A.map((p) => ({ id: p.id, name: p.name, img: p.img })), le = "— Nincs Mikro-Chip —", G = ["slot1", "slot2", "slot3"], pe = (p) => {
      var T, _, N;
      const O = [];
      return p !== 1 && O.push((((T = D.slot1) == null ? void 0 : T.itemId) ?? "").trim()), p !== 2 && O.push((((_ = D.slot2) == null ? void 0 : _.itemId) ?? "").trim()), p !== 3 && O.push((((N = D.slot3) == null ? void 0 : N.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = M.filter((p) => !pe(1).includes(p.id)), e.microchipItemsSlot2 = M.filter((p) => !pe(2).includes(p.id)), e.microchipItemsSlot3 = M.filter((p) => !pe(3).includes(p.id)), e.microchipSlots = G.map((p) => {
      const O = D[p] ?? {}, T = (O.itemId ?? "").trim(), _ = A.find((N) => N.id === T);
      return {
        slotKey: p,
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || O.name || le,
        img: (_ == null ? void 0 : _.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const O = `slot${p}`, T = D[O] ?? {}, _ = (T.itemId ?? "").trim(), N = M.find((Y) => Y.id === _);
      e[`microchip${p}ItemId`] = _, e[`microchip${p}DisplayName`] = (N == null ? void 0 : N.name) || T.name || le, e[`microchip${p}Img`] = (N == null ? void 0 : N.img) || "";
    }), e.microchipsTable = A.map((p) => {
      var ce, he, be, ue;
      const O = p.id;
      let T = null;
      for (const de of G)
        if ((((ce = D[de]) == null ? void 0 : ce.itemId) ?? "").trim() === O) {
          T = de;
          break;
        }
      const _ = !!T, N = ((he = p == null ? void 0 : p.system) == null ? void 0 : he.abilityType) ?? "", Y = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", W = N === "active", Te = Number((be = p == null ? void 0 : p.system) == null ? void 0 : be.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, Z = (((ue = p == null ? void 0 : p.system) == null ? void 0 : ue.description) ?? "").trim(), ge = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: Y,
        description: ge,
        kp: Te,
        isActive: W,
        slotKey: T ?? "",
        equipped: _
      };
    });
    const ae = this.actor.system.abilities ?? {}, fe = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((p) => {
      var O, T, _;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((O = p.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((T = p.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((_ = p.system) == null ? void 0 : _.kp) ?? 0) || 0
      };
    }), oe = new Map(fe.map((p) => [p.id, p])), ke = "— Nincs képesség —", ye = (p) => {
      const O = ae[p] ?? {}, T = (O.itemId ?? "").trim(), _ = T ? oe.get(T) : null, N = (_ == null ? void 0 : _.description) ?? "", Y = (_ == null ? void 0 : _.kp) ?? 0;
      return {
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || O.name || ke,
        img: (_ == null ? void 0 : _.img) || "",
        description: N,
        kp: Y
      };
    };
    e.abilityFajiSlot = ye("faji"), e.abilityHatterSlot = ye("hatter");
    const Le = (p) => {
      const O = ae[p];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Pe = (p) => p.map((O) => {
      const T = oe.get(O);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Pe(Le("passive")), e.abilityActiveList = Pe(Le("active")), e;
  }
  _attachFrameListeners(s) {
    var f, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-DDDljPyN.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var o, l, y;
      i.preventDefault(), i.stopPropagation();
      const a = i.currentTarget;
      let c = (a.dataset.itemId ?? "").trim();
      if (!c) {
        const b = (a.dataset.slot ?? "").trim();
        if (!b) return;
        c = (((((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((y = a.dataset.slot) == null ? void 0 : y.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (i) => {
      var o;
      const a = i ? i.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const c = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && r({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var o, l, y;
      i.preventDefault(), i.stopPropagation();
      const a = ((y = (l = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var y;
      i.preventDefault();
      const a = i.currentTarget, c = a.dataset.skill, o = ((y = a.textContent) == null ? void 0 : y.trim()) || c, { openRollSheetForSkill: l } = await import("./roll-sheet-DDDljPyN.mjs");
      l(this.actor, c, o);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, S, q, C, D, w, L;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), o = c == null ? void 0 : c.dataset.slot;
      if (!o) return;
      const y = (((S = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[o]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!y) return;
      const b = ((C = (q = this.actor.items).get) == null ? void 0 : C.call(q, y)) ?? ((w = (D = this.actor.items.contents) == null ? void 0 : D.find) == null ? void 0 : w.call(D, (F) => F.id === y));
      (L = b == null ? void 0 : b.sheet) == null || L.render(!0);
    });
    const n = (i, a) => {
      var l;
      const c = i.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (o) {
        if (i.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
          const y = i.dataset.weaponSlot;
          y && this._rollWeapon(y);
          return;
        }
        (l = o.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), n(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const a = i.currentTarget, c = a.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      let l = Number(a.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await o.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor, l = o.items.get(c), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, k = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = k ? k.split(/\s*,\s*/).filter((D) => S.includes(D)) : [], C = q.find((D) => {
          var w;
          return (((w = b[D]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (C) {
          const D = q.filter((w) => w !== C);
          y["system.weapons.slotOrder"] = D.join(","), y[`system.weapons.${C}.itemId`] = "", y[`system.weapons.${C}.name`] = "", y[`system.weapons.${C}.damage`] = "", y[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var C, D;
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = y ? y.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = k.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === c;
      }) ?? null;
      if (a.checked) {
        if (S) return;
        let w = k.find((F) => {
          var j;
          return !((j = l[F]) != null && j.itemId);
        });
        const L = new Set(k);
        if (!w) {
          const F = b.find((j) => !L.has(j));
          if (!F) return;
          w = F, k.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${w}.damage`]: ((C = o == null ? void 0 : o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = o == null ? void 0 : o.system) == null ? void 0 : D.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (S) {
        const w = k.filter((L) => L !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const a = i.currentTarget;
      if (a.disabled) return;
      const c = a.closest(".karakter-microchip-slot-select-wrap"), o = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const a = i.currentTarget, c = a.closest(".karakter-microchip-slot-select-wrap"), o = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), l = o == null ? void 0 : o.dataset.slot;
      if (!l) return;
      const y = (a.dataset.itemId ?? "").trim(), b = (a.dataset.itemName ?? ((w = a.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (a.dataset.itemImg ?? "").trim(), S = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = b);
      let q = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      k ? (q || (q = document.createElement("img"), q.className = "karakter-microchip-slot-thumb", q.alt = "", o == null || o.insertBefore(q, S)), q.src = k, q.style.display = "") : q && q.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const C = y ? this.actor.items.get(y) : null, D = {
        [`system.gear.microchips.${l}.itemId`]: y,
        [`system.gear.microchips.${l}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      y && (D[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, k;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "MikroChip") return;
      const o = ((k = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : k.microchips) ?? {}, y = ["slot1", "slot2", "slot3"].find((S) => {
        var q;
        return (((q = o[S]) == null ? void 0 : q.itemId) ?? "").trim() === a;
      });
      y && await this.actor.update({
        [`system.gear.microchips.${y}.itemId`]: "",
        [`system.gear.microchips.${y}.name`]: "",
        [`system.gear.microchips.${y}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const a = i.currentTarget.dataset.slot;
      if (!a) return;
      const c = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${a}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, a) => {
      const c = a.dataset.slot;
      a.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, c)), a.addEventListener("dragleave", (o) => {
        var l;
        return (l = o.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, c));
    }), t.find(".karakter-ability-slot-single").each((i, a) => {
      const c = a.dataset.slot;
      c && (a.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, c)), a.addEventListener("dragleave", (o) => {
        var l;
        return (l = o.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (o) => {
        var l;
        (l = o.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, a) => {
      const c = a.dataset.area;
      c && (a.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, c)), a.addEventListener("dragleave", (o) => {
        var l;
        return (l = o.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (o) => {
        var l;
        (l = o.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!a || !c) return;
      const o = this.actor.system.abilities ?? {}, y = (Array.isArray((b = o[a]) == null ? void 0 : b.items) ? o[a].items.slice() : []).filter((k) => k !== c);
      await this.actor.update({ [`system.abilities.${a}.items`]: y });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var l;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      (l = o == null ? void 0 : o.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(c) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const l = (a.value ?? "").trim();
      await o.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || (await o.update({ "system.equipped": a.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var C, D;
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = y ? y.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = k.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === c;
      }) ?? null;
      if (a.checked) {
        if (S) return;
        let w = k.find((F) => {
          var j;
          return !((j = l[F]) != null && j.itemId);
        });
        const L = new Set(k);
        if (!w) {
          const F = b.find((j) => !L.has(j));
          if (!F) return;
          w = F, k.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: o.name ?? "",
          [`system.weapons.${w}.damage`]: ((C = o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = o.system) == null ? void 0 : D.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (S) {
        const w = k.filter((L) => L !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor, l = o.items.get(c), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, k = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = k ? k.split(/\s*,\s*/).filter((D) => S.includes(D)) : [], C = q.find((D) => {
          var w;
          return (((w = b[D]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (C) {
          const D = q.filter((w) => w !== C);
          y["system.weapons.slotOrder"] = D.join(","), y[`system.weapons.${C}.itemId`] = "", y[`system.weapons.${C}.name`] = "", y[`system.weapons.${C}.damage`] = "", y[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Targy") return;
      const l = (a.value ?? "").trim();
      await o.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    });
    const u = this, g = (i) => {
      var o, l, y, b;
      if (!i) return;
      const a = u._getFormDataForUpdate(i);
      if (Object.keys(a).length === 0) return;
      const c = ((l = (o = a.system) == null ? void 0 : o.resources) == null ? void 0 : l.currentHealth) != null || ((b = (y = a.system) == null ? void 0 : y.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(a).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, m = (i) => {
      var a, c, o;
      return i && (((c = (a = u.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, i)) || u.id && ((o = i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var y;
      const a = i.target;
      if (!a || !a.form) return;
      const c = a.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = a.form;
      if (!m(o)) return;
      const l = i.relatedTarget;
      l && (o.contains(l) || u.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), g(o));
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
    ), r = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const f of n) {
      const h = ((m = r[f]) == null ? void 0 : m.value) ?? 0, i = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, U._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, r, d, n, u, g, m, f, h, i, a, c;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            o = l;
            break;
          }
      }
      if (o) {
        const l = await fromUuid(o);
        if (l && l.documentName === "Item" && (l.type === "Kepesseg" || l.type === "ability")) {
          let y = l.id;
          if (((r = l.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : d.id) ?? y;
          }
          const b = (((n = l.system) == null ? void 0 : n.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
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
          const S = b === "active" ? "active" : "passive", q = Array.isArray((u = k[S]) == null ? void 0 : u.items) ? k[S].items.slice() : Array.isArray(k[S]) ? k[S].slice() : [];
          q.includes(y) || q.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: q });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((g = e.data) == null ? void 0 : g.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            o = l;
            break;
          }
      }
      if (o) {
        const l = await fromUuid(o);
        if (l && l.documentName === "Item" && l.type === "Fegyver") {
          const y = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== y.id;
          let k = l.id;
          if (b) {
            const S = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            k = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? k;
          }
          if (b) {
            const S = ((h = y.system) == null ? void 0 : h.weapons) ?? {}, q = (S.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = q ? q.split(/\s*,\s*/).filter((L) => C.includes(L)) : [], w = D.filter((L) => {
              var F;
              return (((F = S[L]) == null ? void 0 : F.itemId) ?? "").trim() === k;
            });
            if (w.length > 0) {
              const F = {
                "system.weapons.slotOrder": D.filter((j) => !w.includes(j)).join(",")
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
          ((a = l.parent) == null ? void 0 : a.id) !== y.id && await y.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const y = this.actor;
          ((c = l.parent) == null ? void 0 : c.id) !== y.id && await y.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, n, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, g, m, f, h, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((f = d.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [a]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var r;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (r = s.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over"));
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
      const a = typeof h.sort == "number" ? h.sort : 0, c = typeof i.sort == "number" ? i.sort : 0;
      return a - c;
    }).map((h) => h.id), n = d.indexOf(t), u = d.indexOf(e);
    if (n === -1 || u === -1) return;
    d.splice(n, 1), d.splice(u, 0, t);
    const g = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", g);
  }
  _onInventoryAreaDragOver(s) {
    var r, d, n;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
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
    const r = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, r)}px`;
  }
  async _postItemToChat(s) {
    var g, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let r, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (r = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${d}
      ${n}
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
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", r = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
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
    var r, d;
    const e = ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var n, u, g;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((u = r.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var r;
    this._parseAbilityDrop(s) && (s.preventDefault(), (r = s.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var g, m, f, h;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((m = r.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, u = Array.isArray((h = n[e]) == null ? void 0 : h.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, g, m, f, h;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "MikroChip") return;
    let n = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (n = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const r = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(r) || 0;
    const n = this._getSkillHealthStatus(s);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
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
    const r = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": r });
  }
  async _rollWeapon(s) {
    var k;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, r = this.actor.system.skills ?? {}, d = this.actor.items.filter((S) => S.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((S) => S.id === t.itemId) ?? null);
    const u = n && n.name || t.name || `Fegyver (${s})`, g = Number(t.bonus || 0) || 0, f = (((k = n == null ? void 0 : n.system) == null ? void 0 : k.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(r[f] || 0) || 0, i = g + h, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, o = new Roll(c);
    await o.evaluate({ async: !0 });
    const { resultType: l, label: y } = ft(o), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: y } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var g, m, f, h, i, a, c, o, l, y;
    const t = this.actor;
    if (!t) return;
    let r = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!r || r.type !== "Fegyver") return;
    let d = (((i = r.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((a = t.system) == null ? void 0 : a.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (c = ui.notifications) == null ? void 0 : c.warn) == null || y.call(c, ((l = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : l.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
z(U, "PARTS", foundry.utils.mergeObject(
  K(U, U, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(U, U, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = K(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
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
let je = U;
var vt, kt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var r, d, n, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((r = s.querySelector) == null ? void 0 : r.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), r = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (r.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (r.windowScrollTop = t.scrollTop), r;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: r } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && r && (r.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, r = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const a = document.activeElement, c = r.contains(a), o = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), u = this.element, g = this.form ?? this.element, m = d.scrollState, f = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var a, c;
      if (this._applyScrollState(u, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const o = ((a = g.querySelector) == null ? void 0 : a.call(g, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (c = g.querySelector) == null ? void 0 : c.call(g, `[name="${CSS.escape(f.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = f.selectionStart ?? 0, o.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || f) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), n;
  }
  async _prepareContext(s) {
    var ne, Q, me, _e, qe, Ce;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((ne = this.actor) == null ? void 0 : ne.system), e.showDeathSkull = !1;
    const t = this.actor, r = ((Q = t == null ? void 0 : t.items) == null ? void 0 : Q.contents) ?? [], d = ((me = t == null ? void 0 : t.system) == null ? void 0 : me.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), g = u ? u.split(/\s*,\s*/).filter((v) => n.includes(v)) : [], m = r.filter((v) => v.type === "Fegyver"), f = m.map((v) => ({ id: v.id, name: v.name, img: v.img })), h = "— Nincs fegyver —", i = g.length > 0 ? g : n, a = n.filter((v) => !i.includes(v)), c = [...i, ...a], o = c.filter((v) => {
      var A;
      const E = (((A = d[v]) == null ? void 0 : A.itemId) ?? "").trim();
      return E && m.some((M) => M.id === E);
    });
    e.weaponSlots = o.map((v) => {
      const E = d[v] ?? {}, A = (E.itemId ?? "").trim(), M = f.find((le) => le.id === A);
      return {
        slotKey: v,
        itemId: A,
        displayName: (M == null ? void 0 : M.name) || E.name || h,
        img: (M == null ? void 0 : M.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, y = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((v) => {
      var Se;
      const E = v.id;
      let A = null, M = {};
      for (const we of c)
        if ((((Se = d[we]) == null ? void 0 : Se.itemId) ?? "").trim() === E) {
          A = we, M = d[we] ?? {};
          break;
        }
      const le = !!A, G = (v == null ? void 0 : v.system) ?? {}, pe = typeof G.range == "string" ? (G.range || "").trim() : "", ae = G.type ?? "", fe = (l[ae] ?? ae) || "—", oe = G.size ?? "", ke = (y[oe] ?? oe) || "", ye = [fe, ke].filter(Boolean).join(", ") || fe || "—", Le = ae === "projectile" || oe === "thrown", Pe = G.quantity != null ? String(G.quantity).trim() : "1", Ae = String(M.bonus ?? G.bonus ?? "").trim() || "0";
      return {
        slotKey: A ?? "",
        itemId: E,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? h,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: Ae,
        damage: M.damage ?? G.damage ?? "",
        rangeStr: pe || "—",
        typeAndSize: ye,
        quantity: Pe,
        isProjectile: Le,
        equipped: le,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const b = r.filter((v) => v.type === "Pancel");
    e.armorTable = b.map((v) => {
      var M;
      const E = (v == null ? void 0 : v.system) ?? {}, A = ((M = v.system) == null ? void 0 : M.equipped) === !0;
      return {
        itemId: v.id,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: (E.level ?? "").toString().trim() || "—",
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: A
      };
    });
    const k = ((qe = (_e = t == null ? void 0 : t.system) == null ? void 0 : _e.gear) == null ? void 0 : qe.microchips) ?? {}, S = ["slot1", "slot2", "slot3"], q = r.filter((v) => v.type === "MikroChip");
    e.microchipsTable = q.map((v) => {
      var ae, fe, oe, ke;
      const E = v.id;
      let A = null;
      for (const ye of S)
        if ((((ae = k[ye]) == null ? void 0 : ae.itemId) ?? "").trim() === E) {
          A = ye;
          break;
        }
      const M = ((fe = v == null ? void 0 : v.system) == null ? void 0 : fe.abilityType) ?? "", le = M === "active" ? "Aktív" : M === "passive" ? "Passzív" : M || "—", G = (((oe = v == null ? void 0 : v.system) == null ? void 0 : oe.description) ?? "").trim(), pe = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: le,
        description: pe,
        kp: Number((ke = v == null ? void 0 : v.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0,
        isActive: M === "active",
        slotKey: A ?? "",
        equipped: !!A
      };
    });
    const C = r.filter((v) => v.type === "Targy");
    e.itemsTable = C.map((v) => {
      const E = (v == null ? void 0 : v.system) ?? {}, A = (E.description ?? "").trim(), M = A ? A.length > 60 ? A.slice(0, 57) + "…" : A : "—";
      return {
        itemId: v.id,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: E.quantity != null ? String(E.quantity).trim() : "1",
        description: M
      };
    });
    const D = r.filter((v) => v.type === "Egyeb");
    e.egyebList = D.map((v) => {
      const A = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), M = A ? A.length > 80 ? A.slice(0, 77) + "…" : A : "";
      return {
        itemId: v.id,
        actorId: t.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        description: M
      };
    });
    const w = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, L = r.filter((v) => v.type === "Kepesseg" || v.type === "ability").map((v) => {
      var E, A;
      return {
        id: v.id,
        name: v.name,
        img: v.img,
        description: ((E = v.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((A = v.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), F = new Map(L.map((v) => [v.id, v])), j = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = j, e.abilityHatterSlot = j;
    const B = (v) => {
      const E = w[v];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, H = (v) => (v || []).map((E) => {
      const A = F.get(E);
      return A ? { id: A.id, name: A.name, img: A.img, description: A.description, kp: A.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = H(B("passive")), e.abilityActiveList = H(B("active")), e;
  }
  _attachFrameListeners(s) {
    var m, f, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var o, l, y;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const a = ((y = (l = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var o, l, y;
      i.preventDefault();
      const a = (l = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId;
      if (!a || !this.actor) return;
      const c = this.actor.items.get(a);
      (y = c == null ? void 0 : c.sheet) == null || y.render(!0);
    });
    const r = (i) => {
      var o, l;
      const a = (o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId;
      if (!a || !this.actor) return;
      const c = this.actor.items.get(a);
      (l = c == null ? void 0 : c.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), r(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), r(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, y, b, k;
      i.preventDefault();
      const a = (y = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : y.call(l, ".karakter-weapon-slot"), c = (((b = a == null ? void 0 : a.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (k = o == null ? void 0 : o.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var c, o;
      i.preventDefault();
      const a = (o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, k, S, q, C, D;
      if (i.preventDefault(), !i.altKey) return;
      const a = (k = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : k.area, c = (q = (S = i.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : q.itemId;
      if (!a || !c || !this.actor) return;
      const o = ((C = this.actor.system) == null ? void 0 : C.abilities) ?? {}, y = (Array.isArray((D = o[a]) == null ? void 0 : D.items) ? o[a].items.slice() : []).filter((w) => w !== c);
      await this.actor.update({ [`system.abilities.${a}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var c, o;
      if (i.preventDefault(), !i.altKey) return;
      const a = (o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      a && (await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, k;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget, c = (((b = a == null ? void 0 : a.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, l = (((k = a == null ? void 0 : a.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), y = {};
      l && (y[`system.weapons.${l}.itemId`] = "", y[`system.weapons.${l}.name`] = "", y[`system.weapons.${l}.damage`] = "", y[`system.weapons.${l}.bonus`] = ""), Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var c, o;
      if (i.preventDefault(), !i.altKey) return;
      const a = (((o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !a || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var y, b, k, S;
      if (i.preventDefault(), !i.altKey) return;
      const a = (((b = (y = i.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const c = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((q) => {
        var C;
        return (((C = c[q]) == null ? void 0 : C.itemId) ?? "").trim() === a;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var o, l;
      if (i.preventDefault(), !i.altKey) return;
      const a = (((l = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const c = this.actor.items.get(a);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || h.forEach((i) => {
      var a;
      (((a = i.dataset) == null ? void 0 : a.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var y, b, k;
      const a = i.currentTarget, c = (b = (y = a == null ? void 0 : a.dataset) == null ? void 0 : y.itemId) == null ? void 0 : b.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const l = o.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((k = i.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && a && i.dataTransfer.setDragImage(a, 0, 0);
    });
    const n = this, u = (i) => {
      if (!i) return;
      const a = n._getFormDataForUpdate(i);
      Object.keys(a).length !== 0 && n.actor.update(a).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, g = (i) => {
      var a, c, o;
      return i && (((c = (a = n.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, i)) || n.id && ((o = i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(n.id)}`)));
    };
    n._votvNpcBlur = (i) => {
      var y;
      const a = i.target;
      if (!a || !a.form) return;
      const c = a.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = a.form;
      if (!g(o)) return;
      const l = i.relatedTarget;
      l && (o.contains(l) || n.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(n.id)}`))) || u(o);
    }, document.body.addEventListener("blur", n._votvNpcBlur, !0);
  }
  _tearDown(s) {
    var t, r, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((r = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && this.actor.update(n).catch((u) => console.warn("VoidNpcSheet save on close failed", u));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, s);
  }
  async _onDropItem(s, e) {
    var f, h, i, a, c, o, l, y, b, k, S, q, C, D, w;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const r = ((L) => {
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
    if (!r) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(r);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let L = d.id;
      if (((a = d.parent) == null ? void 0 : a.id) !== n.id) {
        const ne = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        L = ((c = (await n.createEmbeddedDocuments("Item", [ne]))[0]) == null ? void 0 : c.id) ?? L;
      }
      const F = (((o = d.system) == null ? void 0 : o.kind) ?? "passive").toString(), j = ((l = n.system) == null ? void 0 : l.abilities) ?? {}, B = F === "active" ? "active" : "passive", H = Array.isArray((y = j[B]) == null ? void 0 : y.items) ? j[B].items.slice() : Array.isArray(j[B]) ? j[B].slice() : [];
      H.includes(L) || H.push(L), await n.update({ [`system.abilities.${B}.items`]: H }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === n.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (k = (await n.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : k.id;
    if (d.type === "Fegyver" && m) {
      const L = ((S = n.system) == null ? void 0 : S.weapons) ?? {}, F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (L.slotOrder ?? "").trim(), B = j ? j.split(/\s*,\s*/).filter((Q) => F.includes(Q)) : [];
      let H = F.find((Q) => {
        var me;
        return !(((me = L[Q]) == null ? void 0 : me.itemId) ?? "").trim();
      });
      H || (H = F.find((Q) => !B.includes(Q)) ?? "slot1");
      const ne = B.includes(H) ? B : [...B, H].filter((Q) => F.includes(Q));
      await n.update({
        "system.weapons.slotOrder": ne.join(","),
        [`system.weapons.${H}.itemId`]: m,
        [`system.weapons.${H}.name`]: d.name ?? "",
        [`system.weapons.${H}.damage`]: ((q = d.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${H}.bonus`]: ((C = d.system) == null ? void 0 : C.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const L = ((w = (D = n.system) == null ? void 0 : D.gear) == null ? void 0 : w.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((B) => {
        var H;
        return !(((H = L[B]) == null ? void 0 : H.itemId) ?? "").trim();
      });
      j && await n.update({
        [`system.gear.microchips.${j}.itemId`]: m,
        [`system.gear.microchips.${j}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, h, i, a, c;
    const e = (h = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", r = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
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
    for (const r of s.elements) {
      if (!r.name || r.disabled || r.type === "radio" && !r.checked) continue;
      let d;
      r.type === "checkbox" ? d = r.checked : r.type === "number" ? d = r.value === "" ? 0 : Number(r.value) : d = r.value ?? "", d !== void 0 && foundry.utils.setProperty(e, r.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const r = e.name;
      (r === void 0 || typeof r == "string" && r.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(X, "PARTS", foundry.utils.mergeObject(
  K(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((vt = K(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((kt = K(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = K(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Re = X;
var St;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, f, h, i, a, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const u = e._getFormDataForUpdate(n);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (n) => {
      var u, g, m;
      return n && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, f;
      const u = ((g = n.target) == null ? void 0 : g.form) ?? ((f = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && r(u);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
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
z(V, "PARTS", foundry.utils.mergeObject(K(V, V, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(V, V, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = K(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Me = V;
var Tt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, f, h, i, a, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const u = e._getFormDataForUpdate(n);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (n) => {
      var u, g, m;
      return n && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, f;
      const u = ((g = n.target) == null ? void 0 : g.form) ?? ((f = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && r(u);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ee, "PARTS", foundry.utils.mergeObject(K(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = K(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Ke = ee;
var Ot;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, f, h, i, a, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const u = e._getFormDataForUpdate(n);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (n) => {
      var u, g, m;
      return n && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, f;
      const u = ((g = n.target) == null ? void 0 : g.form) ?? ((f = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && r(u);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(te, "PARTS", foundry.utils.mergeObject(K(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ot = K(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ue = te;
var Dt;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, f, h, i, a, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const u = e._getFormDataForUpdate(n);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (n) => {
      var u, g, m;
      return n && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, f;
      const u = ((g = n.target) == null ? void 0 : g.form) ?? ((f = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && r(u);
    }, e._votvInput = (n) => {
      var m;
      const u = n.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const g = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => r(g), 300));
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", !(t.name === "name" && typeof r == "string" && r.trim() === "") && foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(se, "PARTS", foundry.utils.mergeObject(K(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = K(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Be = se;
var _t;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, f, h, i, a, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const u = e._getFormDataForUpdate(n);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (n) => {
      var u, g, m;
      return n && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, f;
      const u = ((g = n.target) == null ? void 0 : g.form) ?? ((f = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && r(u);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ie, "PARTS", foundry.utils.mergeObject(K(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((_t = K(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let He = ie;
var qt;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const r = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(r).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (n) => {
      var m, f, h, i, a, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const r = (n) => {
      if (!n) return;
      const u = e._getFormDataForUpdate(n);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (n) => {
      var u, g, m;
      return n && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, n)) || e.id && ((m = n.closest) == null ? void 0 : m.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var g, m, f;
      const u = ((g = n.target) == null ? void 0 : g.form) ?? ((f = (m = n.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && r(u);
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
      let r;
      t.type === "checkbox" ? r = t.checked : t.type === "number" ? r = t.value === "" ? 0 : Number(t.value) : r = t.value ?? "", foundry.utils.setProperty(e, t.name, r);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(re, "PARTS", foundry.utils.mergeObject(K(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((qt = K(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : qt.form) ?? {}, { submitOnChange: !1 })
}));
let ze = re;
const Ct = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, r, d;
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
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", je, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Re, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Me, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ke, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ue, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Be, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", He, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ze, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const R = 500;
  Hooks.on("updateActor", (n, u, g, m) => {
    var k, S, q, C, D;
    const f = n == null ? void 0 : n.id;
    if (!f) return;
    const h = document.activeElement, i = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), a = [], c = (k = game.actors) == null ? void 0 : k.get(f);
    c != null && c.apps && a.push(...Array.from(c.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of o)
      ((S = w.document) == null ? void 0 : S.id) !== f || ((q = w.document) == null ? void 0 : q.documentName) !== "Actor" || ((C = w.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || a.includes(w) || a.push(w);
    if (i && a.some((w) => {
      const L = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return L && L.contains(h);
    })) return;
    const y = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, b = y && Date.now() - y.at < R ? y.appId : null;
    setTimeout(() => {
      for (const w of a)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, u, g, m) => {
    var a, c, o;
    const f = n == null ? void 0 : n.parent;
    if (!f || f.documentName !== "Actor" || f.type !== "Karakter" || n.type !== "Fegyver") return;
    const h = ((a = f.system) == null ? void 0 : a.weapons) ?? {}, i = {};
    for (const [l, y] of Object.entries(h)) {
      if (!l.startsWith("slot")) continue;
      const b = ((y == null ? void 0 : y.itemId) ?? "").trim();
      !b || b !== n.id || (i[`system.weapons.${l}.name`] = n.name ?? "", i[`system.weapons.${l}.damage`] = ((c = n.system) == null ? void 0 : c.damage) ?? "", i[`system.weapons.${l}.bonus`] = ((o = n.system) == null ? void 0 : o.bonus) ?? "");
    }
    Object.keys(i).length && f.update(i);
  });
});
Hooks.on("ready", () => {
  var R, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, u, g, m, f, h;
      if (!((u = (n = e.target) == null ? void 0 : n.closest) != null && u.call(n, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), r = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!r) return;
      const d = r.includes(".") ? r.split(".").pop() : r;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (R = game.user) != null && R.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const r = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(r != null && r.create)) {
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
      }, n = await r.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (r) {
      console.warn("Vacuum of the Void | Default scene creation failed:", r);
    }
  })();
});
Hooks.on("preCreateToken", (R, s, e) => {
  var n, u;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, r = t ?? R.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = r ? (u = game.actors) == null ? void 0 : u.get(r) : null;
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
  const t = ((u = R.flags) == null ? void 0 : u["vacuum-of-the-void"]) ?? {}, r = t.resultType, d = t.critLabel;
  if (!r && !d) return;
  const n = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (n && (r && n.classList.add(`votv-${r}`), d)) {
    const m = n.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const f = n.querySelector(".dice-total"), h = (f == null ? void 0 : f.parentElement) ?? n, i = document.createElement("div");
    i.className = `votv-crit-label votv-crit-label-${r || "neutral"}`, i.textContent = d, h.appendChild(i);
  }
});
export {
  je as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-BpLesqGC.mjs.map
