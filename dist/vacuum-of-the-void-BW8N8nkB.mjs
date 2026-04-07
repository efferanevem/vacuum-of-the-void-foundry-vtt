var Pt = Object.defineProperty;
var At = Object.getPrototypeOf;
var Ft = Reflect.get;
var Et = (M, s, e) => s in M ? Pt(M, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : M[s] = e;
var z = (M, s, e) => Et(M, typeof s != "symbol" ? s + "" : s, e);
var R = (M, s, e) => Ft(At(M), e, s);
const { HTMLField: Nt, NumberField: P, SchemaField: x, StringField: I, BooleanField: J, ArrayField: Ue } = foundry.data.fields;
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
        armor: new Ue(
          new x({
            name: new I({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new I({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new I({ required: !1, blank: !0, initial: "" }),
            level: new I({ required: !1, blank: !0, initial: "" }),
            other: new I({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Ue(
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
          items: new Ue(
            new I({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new x({
          items: new Ue(
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
const { NumberField: ze, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ze({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Mt, NumberField: Jt, StringField: ve } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Mt({ required: !1, initial: !1 }),
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
const { BooleanField: Kt, StringField: He } = foundry.data.fields;
class Ut extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Kt({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new He({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new He({ required: !1, blank: !0, initial: "" }),
      /** Szint (a táblázatban: Szint). */
      level: new He({ required: !1, blank: !0, initial: "" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new He({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ge, StringField: ut } = foundry.data.fields;
class Ht extends foundry.abstract.TypeDataModel {
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
      cost: new Ge({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Ge({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Ge({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Bt, StringField: dt } = foundry.data.fields;
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
      kp: new Bt({
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
function ft(M) {
  if (!M || !Array.isArray(M.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let c = r;
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
      const b = !a && c >= 0 && (o.number === 3 || o.number === "3") ? (a = !0, s) : c >= 0 ? e : t;
      for (const v of y) {
        if (!v || v.discarded || v.hidden) continue;
        const S = Number(v.result ?? v);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  d(M.terms, 1);
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
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, n, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
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
    const m = this.element, f = this.form ?? this.element, h = u.scrollState, i = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", c = () => {
      var l, y;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = f.querySelector) == null ? void 0 : l.call(f, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const d = Math.floor(a / 3), n = Math.floor(2 * a / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
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
    var t, a, d;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
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
    var h, i, r, c, o, l, y, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const a = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((o = (c = a.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : o.value) ?? 0, n = ((l = a.currentHealth) == null ? void 0 : l.legs) ?? 0, u = U._healthStatusFromRatio(n, d), g = Number(((v = (b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
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
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, a = ((g = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, g, m, f;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (g = a.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, n = ((f = a.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return U._healthStatusFromRatio(n, d);
  }
  async _prepareContext(s) {
    var Se, ae, ue, oe, ye, ge, je, Me, Re, Ke, qe, Te, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ue = (ae = (Se = this.actor.system) == null ? void 0 : Se.resources) == null ? void 0 : ae.stress) == null ? void 0 : ue.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, d = a.hitLocations ?? {}, n = a.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const p of u) {
      const D = ((oe = d[p]) == null ? void 0 : oe.value) ?? 0, T = n[p] ?? 0;
      e.computedHealthStatus[p] = U._healthStatusFromRatio(T, D);
    }
    const g = (Number(n.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((p) => (Number(n[p]) || 0) === 0).length;
    e.showDeathSkull = g || f >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((ge = (ye = this.actor.system) == null ? void 0 : ye.combat) == null ? void 0 : ge.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const c = this._getTotalArmorSpeedPenalty();
    r += c, e.effectiveGivenSpeed = r;
    const l = (Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
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
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (b.slotOrder ?? "").trim(), C = S ? S.split(/\s*,\s*/).filter((p) => v.includes(p)) : [], q = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, _ = q && typeof q == "object" && !Array.isArray(q) ? q : {}, w = (((Ke = _.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), L = (((qe = _.slot2) == null ? void 0 : qe.itemId) ?? "").trim(), F = (((Te = _.slot3) == null ? void 0 : Te.itemId) ?? "").trim(), H = this.actor.items.contents.filter((p) => p.type !== "Kepesseg" && p.type !== "ability").slice().sort((p, D) => {
      const T = typeof p.sort == "number" ? p.sort : 0, O = typeof D.sort == "number" ? D.sort : 0;
      return T - O;
    }).map((p) => {
      var ce, be, ke, de, me, Pe;
      const D = p.type === "Fegyver", T = p.type === "MikroChip";
      let O = 0, N = "", Y = null;
      for (let De = 0; De < C.length; De++) {
        const Ae = C[De];
        if ((((ce = b[Ae]) == null ? void 0 : ce.itemId) ?? "") === p.id) {
          O = De + 1, N = ((be = b[Ae]) == null ? void 0 : be.bonus) ?? "", Y = Ae;
          break;
        }
      }
      let W = null;
      T && (w === p.id ? W = "slot1" : L === p.id ? W = "slot2" : F === p.id && (W = "slot3"));
      const Le = D && ((ke = p.system) != null && ke.damage) ? p.system.damage : "", Z = D && typeof ((de = p.system) == null ? void 0 : de.range) == "string" ? (p.system.range || "").trim() : "", he = Y ? Number((me = b[Y]) == null ? void 0 : me.bonus) || 0 : "";
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        type: p.type,
        isWeapon: D,
        slotAssignment: O,
        slotBonus: N,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: Le,
        rangeStr: Z,
        slotBonusNum: he,
        quantity: Number(((Pe = p.system) == null ? void 0 : Pe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = H;
    const B = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((p) => p.type === "Fegyver"), ne = B.map((p) => ({ id: p.id, name: p.name, img: p.img }));
    e.weaponItems = ne;
    const Q = "— Nincs fegyver —", pe = C.filter((p) => {
      const T = ((b[p] ?? {}).itemId ?? "").trim();
      return T ? !!B.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = pe.map((p, D) => {
      const T = b[p] ?? {}, O = (T.itemId ?? "").trim(), N = ne.find((Y) => Y.id === O);
      return {
        slotKey: p,
        itemId: O,
        slotNum: D + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || Q,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const Fe = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Ee = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = B.map((p) => {
      var ot, ct, lt;
      const D = p.id;
      let T = null, O = {};
      for (const Be of C)
        if ((((ot = b[Be]) == null ? void 0 : ot.itemId) ?? "").trim() === D) {
          T = Be, O = b[Be] ?? {};
          break;
        }
      const N = !!T, Y = ((ct = p.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = p.system) == null ? void 0 : lt.equipped) !== null ? !!p.system.equipped : N, W = (p == null ? void 0 : p.system) ?? {}, Le = typeof W.range == "string" ? (W.range || "").trim() : "", Z = W.type ?? "", he = (Fe[Z] ?? Z) || "—", ce = W.size ?? "", be = (Ee[ce] ?? ce) || "", ke = [he, be].filter(Boolean).join(", ") || he || "—", de = Z === "projectile" || ce === "thrown", me = W.quantity, Pe = me != null ? String(me).trim() : "1", De = String(O.bonus ?? "").trim(), Ae = String(W.bonus ?? "").trim(), Lt = De || Ae || "0";
      return {
        slotKey: T ?? "",
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? Q,
        img: (p == null ? void 0 : p.img) ?? "",
        bonus: Lt,
        damage: O.damage ?? W.damage ?? "",
        rangeStr: Le || "—",
        typeLabel: he,
        typeAndSize: ke,
        quantity: Pe,
        quantityDisplay: de ? Pe : "—",
        isProjectile: de,
        equipped: Y,
        special: (W.special ?? "").trim() || "—"
      };
    });
    const Ne = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((p) => p.type === "Pancel");
    e.armorTable = Ne.map((p) => {
      var O, N;
      const D = (p == null ? void 0 : p.system) ?? {}, T = ((O = p.system) == null ? void 0 : O.equipped) !== void 0 && ((N = p.system) == null ? void 0 : N.equipped) !== null ? !!p.system.equipped : !1;
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
    const $e = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((p) => p.type === "Targy");
    e.itemsTable = $e.map((p) => {
      const D = (p == null ? void 0 : p.system) ?? {}, T = (D.description ?? "").trim(), O = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", N = D.quantity != null ? String(D.quantity).trim() : "1";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        quantity: N,
        description: O
      };
    });
    const xe = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((p) => p.type === "Egyeb");
    e.egyebList = xe.map((p) => {
      const T = (((p == null ? void 0 : p.system) ?? {}).description ?? "").trim(), O = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: p.id,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        description: O
      };
    });
    const we = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((p) => p.type === "MikroChip"), fe = we.map((p) => ({ id: p.id, name: p.name, img: p.img })), _e = "— Nincs Mikro-Chip —", Oe = ["slot1", "slot2", "slot3"], Ie = (p) => {
      var T, O, N;
      const D = [];
      return p !== 1 && D.push((((T = _.slot1) == null ? void 0 : T.itemId) ?? "").trim()), p !== 2 && D.push((((O = _.slot2) == null ? void 0 : O.itemId) ?? "").trim()), p !== 3 && D.push((((N = _.slot3) == null ? void 0 : N.itemId) ?? "").trim()), D.filter(Boolean);
    };
    e.microchipItemsSlot1 = fe.filter((p) => !Ie(1).includes(p.id)), e.microchipItemsSlot2 = fe.filter((p) => !Ie(2).includes(p.id)), e.microchipItemsSlot3 = fe.filter((p) => !Ie(3).includes(p.id)), e.microchipSlots = Oe.map((p) => {
      const D = _[p] ?? {}, T = (D.itemId ?? "").trim(), O = we.find((N) => N.id === T);
      return {
        slotKey: p,
        itemId: T,
        displayName: (O == null ? void 0 : O.name) || D.name || _e,
        img: (O == null ? void 0 : O.img) || "",
        active: D.active === !0
      };
    }), ["1", "2", "3"].forEach((p) => {
      const D = `slot${p}`, T = _[D] ?? {}, O = (T.itemId ?? "").trim(), N = fe.find((Y) => Y.id === O);
      e[`microchip${p}ItemId`] = O, e[`microchip${p}DisplayName`] = (N == null ? void 0 : N.name) || T.name || _e, e[`microchip${p}Img`] = (N == null ? void 0 : N.img) || "";
    }), e.microchipsTable = we.map((p) => {
      var ce, be, ke, de;
      const D = p.id;
      let T = null;
      for (const me of Oe)
        if ((((ce = _[me]) == null ? void 0 : ce.itemId) ?? "").trim() === D) {
          T = me;
          break;
        }
      const O = !!T, N = ((be = p == null ? void 0 : p.system) == null ? void 0 : be.abilityType) ?? "", Y = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", W = N === "active", Le = Number((ke = p == null ? void 0 : p.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(p.system.replaceCost) : 0, Z = (((de = p == null ? void 0 : p.system) == null ? void 0 : de.description) ?? "").trim(), he = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: D,
        actorId: this.actor.id,
        name: (p == null ? void 0 : p.name) ?? "—",
        img: (p == null ? void 0 : p.img) ?? "",
        typeLabel: Y,
        description: he,
        kp: Le,
        isActive: W,
        slotKey: T ?? "",
        equipped: O
      };
    });
    const Ce = this.actor.system.abilities ?? {}, k = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((p) => {
      var D, T, O;
      return {
        id: p.id,
        name: p.name,
        img: p.img,
        kind: ((D = p.system) == null ? void 0 : D.kind) ?? "passive",
        description: ((T = p.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((O = p.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), A = new Map(k.map((p) => [p.id, p])), E = "— Nincs képesség —", K = (p) => {
      const D = Ce[p] ?? {}, T = (D.itemId ?? "").trim(), O = T ? A.get(T) : null, N = (O == null ? void 0 : O.description) ?? "", Y = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: T,
        displayName: (O == null ? void 0 : O.name) || D.name || E,
        img: (O == null ? void 0 : O.img) || "",
        description: N,
        kp: Y
      };
    };
    e.abilityFajiSlot = K("faji"), e.abilityHatterSlot = K("hatter");
    const le = (p) => {
      const D = Ce[p];
      return D ? Array.isArray(D == null ? void 0 : D.items) ? D.items : Array.isArray(D) ? D : [] : [];
    }, G = (p) => p.map((D) => {
      const T = A.get(D);
      return T ? {
        id: T.id,
        name: T.name,
        img: T.img,
        description: T.description,
        kp: T.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = G(le("passive")), e.abilityActiveList = G(le("active")), e;
  }
  _attachFrameListeners(s) {
    var f, h;
    super._attachFrameListeners(s);
    const e = this.form ?? ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-CzTmYbcb.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var o, l, y;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let c = (r.dataset.itemId ?? "").trim();
      if (!c) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        c = (((((l = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((y = r.dataset.slot) == null ? void 0 : y.trim()) ?? "");
    }), !this.isEditable) return;
    const a = (i) => {
      var o;
      const r = i ? i.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const c = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && a({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var o, l, y;
      i.preventDefault(), i.stopPropagation();
      const r = ((y = (l = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
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
      const r = i.currentTarget, c = r.dataset.skill, o = ((y = r.textContent) == null ? void 0 : y.trim()) || c, { openRollSheetForSkill: l } = await import("./roll-sheet-CzTmYbcb.mjs");
      l(this.actor, c, o);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, S, C, q, _, w, L;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), o = c == null ? void 0 : c.dataset.slot;
      if (!o) return;
      const y = (((S = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[o]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!y) return;
      const b = ((q = (C = this.actor.items).get) == null ? void 0 : q.call(C, y)) ?? ((w = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : w.call(_, (F) => F.id === y));
      (L = b == null ? void 0 : b.sheet) == null || L.render(!0);
    });
    const n = (i, r) => {
      var l;
      const c = i.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (o) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
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
      const r = i.currentTarget, c = r.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await o.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor, l = o.items.get(c), y = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], q = C.find((_) => {
          var w;
          return (((w = b[_]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (q) {
          const _ = C.filter((w) => w !== q);
          y["system.weapons.slotOrder"] = _.join(","), y[`system.weapons.${q}.itemId`] = "", y[`system.weapons.${q}.name`] = "", y[`system.weapons.${q}.damage`] = "", y[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, _;
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = y ? y.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === c;
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
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${w}.damage`]: ((q = o == null ? void 0 : o.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((_ = o == null ? void 0 : o.system) == null ? void 0 : _.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((L) => L !== S);
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
      const r = i.currentTarget;
      if (r.disabled) return;
      const c = r.closest(".karakter-microchip-slot-select-wrap"), o = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const r = i.currentTarget, c = r.closest(".karakter-microchip-slot-select-wrap"), o = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), l = o == null ? void 0 : o.dataset.slot;
      if (!l) return;
      const y = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((w = r.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), S = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = b);
      let C = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      v ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", o == null || o.insertBefore(C, S)), C.src = v, C.style.display = "") : C && C.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const q = y ? this.actor.items.get(y) : null, _ = {
        [`system.gear.microchips.${l}.itemId`]: y,
        [`system.gear.microchips.${l}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      y && (_[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      if (!c || c.type !== "MikroChip") return;
      const o = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, y = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = o[S]) == null ? void 0 : C.itemId) ?? "").trim() === r;
      });
      y && await this.actor.update({
        [`system.gear.microchips.${y}.itemId`]: "",
        [`system.gear.microchips.${y}.name`]: "",
        [`system.gear.microchips.${y}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const c = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const c = r.dataset.slot;
      r.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, c)), r.addEventListener("dragleave", (o) => {
        var l;
        return (l = o.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, c));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const c = r.dataset.slot;
      c && (r.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, c)), r.addEventListener("dragleave", (o) => {
        var l;
        return (l = o.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (o) => {
        var l;
        (l = o.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const c = r.dataset.area;
      c && (r.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, c)), r.addEventListener("dragleave", (o) => {
        var l;
        return (l = o.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (o) => {
        var l;
        (l = o.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
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
      const r = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!r || !c) return;
      const o = this.actor.system.abilities ?? {}, y = (Array.isArray((b = o[r]) == null ? void 0 : b.items) ? o[r].items.slice() : []).filter((v) => v !== c);
      await this.actor.update({ [`system.abilities.${r}.items`]: y });
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
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await o.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || (await o.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, _;
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, y = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = y ? y.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === c;
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
          [`system.weapons.${w}.itemId`]: c,
          [`system.weapons.${w}.name`]: o.name ?? "",
          [`system.weapons.${w}.damage`]: ((q = o.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((_ = o.system) == null ? void 0 : _.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((L) => L !== S);
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
        const b = o.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], q = C.find((_) => {
          var w;
          return (((w = b[_]) == null ? void 0 : w.itemId) ?? "").trim() === c;
        });
        if (q) {
          const _ = C.filter((w) => w !== q);
          y["system.weapons.slotOrder"] = _.join(","), y[`system.weapons.${q}.itemId`] = "", y[`system.weapons.${q}.name`] = "", y[`system.weapons.${q}.damage`] = "", y[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const r = i.currentTarget, c = (r.dataset.itemId ?? "").trim();
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await o.update({ "system.quantity": l }), setTimeout(() => {
        const y = this.form ?? this.element, b = y == null ? void 0 : y.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, g = (i) => {
      var o, l, y, b;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const c = ((l = (o = r.system) == null ? void 0 : o.resources) == null ? void 0 : l.currentHealth) != null || ((b = (y = r.system) == null ? void 0 : y.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, c, o;
      return i && (((c = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, i)) || u.id && ((o = i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var y;
      const r = i.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = r.form;
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
    ), a = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const f of n) {
      const h = ((m = a[f]) == null ? void 0 : m.value) ?? 0, i = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, U._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, d, n, u, g, m, f, h, i, r, c;
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
          if (((a = l.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            y = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? y;
          }
          const b = (((n = l.system) == null ? void 0 : n.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
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
          const S = b === "active" ? "active" : "passive", C = Array.isArray((u = v[S]) == null ? void 0 : u.items) ? v[S].items.slice() : Array.isArray(v[S]) ? v[S].slice() : [];
          C.includes(y) || C.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: C });
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
          let v = l.id;
          if (b) {
            const S = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? v;
          }
          if (b) {
            const S = ((h = y.system) == null ? void 0 : h.weapons) ?? {}, C = (S.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = C ? C.split(/\s*,\s*/).filter((L) => q.includes(L)) : [], w = _.filter((L) => {
              var F;
              return (((F = S[L]) == null ? void 0 : F.itemId) ?? "").trim() === v;
            });
            if (w.length > 0) {
              const F = {
                "system.weapons.slotOrder": _.filter((j) => !w.includes(j)).join(",")
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
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, g, m, f, h, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((f = d.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
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
    var a;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (a = s.currentTarget) == null || a.classList.add("karakter-actions-row-drag-over"));
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
      const r = typeof h.sort == "number" ? h.sort : 0, c = typeof i.sort == "number" ? i.sort : 0;
      return r - c;
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
    var a, d, n;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const a = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, a)}px`;
  }
  async _postItemToChat(s) {
    var g, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
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
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", a = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
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
    var a, d;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var n, u, g;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((u = a.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var g, m, f, h;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let d = a.id;
    if (((m = a.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, u = Array.isArray((h = n[e]) == null ? void 0 : h.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, n, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, g, m, f, h;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const d = await fromUuid(a.uuid);
    if (!d || d.type !== "MikroChip") return;
    let n = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (n = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(a) || 0;
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollWeapon(s) {
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, d = this.actor.items.filter((S) => S.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((S) => S.id === t.itemId) ?? null);
    const u = n && n.name || t.name || `Fegyver (${s})`, g = Number(t.bonus || 0) || 0, f = (((v = n == null ? void 0 : n.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(a[f] || 0) || 0, i = g + h, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, o = new Roll(c);
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
    var g, m, f, h, i, r, c, o, l, y;
    const t = this.actor;
    if (!t) return;
    let a = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((i = a.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (c = ui.notifications) == null ? void 0 : c.warn) == null || y.call(c, ((l = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : l.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
};
z(U, "PARTS", foundry.utils.mergeObject(
  R(U, U, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), z(U, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(U, U, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((yt = R(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((gt = R(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : gt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((bt = (ht = R(U, U, "DEFAULT_OPTIONS")) == null ? void 0 : ht.window) == null ? void 0 : bt.contentClasses) ?? [],
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
let We = U;
var kt, vt, wt, It;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, d, n, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((n = s.querySelector) == null ? void 0 : n.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, a = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const r = document.activeElement, c = a.contains(r), o = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const n = await super.render(s, e), u = this.element, g = this.form ?? this.element, m = d.scrollState, f = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, c;
      if (this._applyScrollState(u, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const o = ((r = g.querySelector) == null ? void 0 : r.call(g, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (c = g.querySelector) == null ? void 0 : c.call(g, `[name="${CSS.escape(f.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = f.selectionStart ?? 0, o.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || f) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), n;
  }
  async _prepareContext(s) {
    var Q, pe, Fe, Ee, Ne, $e, xe, we, fe, _e, Oe, Ie, Ce;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Q = this.actor) == null ? void 0 : Q.system), e.showDeathSkull = !1, e.sizeForSelect = (((Fe = (pe = e.system) == null ? void 0 : pe.identity) == null ? void 0 : Fe.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((Ee = t == null ? void 0 : t.items) == null ? void 0 : Ee.contents) ?? [], d = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.weapons) ?? {}, n = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), g = u ? u.split(/\s*,\s*/).filter((k) => n.includes(k)) : [], m = a.filter((k) => k.type === "Fegyver"), f = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = g.length > 0 ? g : n, r = n.filter((k) => !i.includes(k)), c = [...i, ...r], o = c.filter((k) => {
      var E;
      const A = (((E = d[k]) == null ? void 0 : E.itemId) ?? "").trim();
      return A && m.some((K) => K.id === A);
    });
    e.weaponSlots = o.map((k) => {
      const A = d[k] ?? {}, E = (A.itemId ?? "").trim(), K = f.find((le) => le.id === E);
      return {
        slotKey: k,
        itemId: E,
        displayName: (K == null ? void 0 : K.name) || A.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, y = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var qe;
      const A = k.id;
      let E = null, K = {};
      for (const Te of c)
        if ((((qe = d[Te]) == null ? void 0 : qe.itemId) ?? "").trim() === A) {
          E = Te, K = d[Te] ?? {};
          break;
        }
      const le = !!E, G = (k == null ? void 0 : k.system) ?? {}, Se = typeof G.range == "string" ? (G.range || "").trim() : "", ae = G.type ?? "", ue = (l[ae] ?? ae) || "—", oe = G.size ?? "", ye = (y[oe] ?? oe) || "", ge = [ue, ye].filter(Boolean).join(", ") || ue || "—", je = ae === "projectile" || oe === "thrown", Me = G.quantity != null ? String(G.quantity).trim() : "1", Re = String(G.bonus ?? K.bonus ?? "").trim() || "0", Ke = (G.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: E ?? "",
        itemId: A,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? h,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: Re,
        damage: Ke,
        rangeStr: Se || "—",
        typeAndSize: ge,
        quantity: Me,
        isProjectile: je,
        equipped: le,
        special: (G.special ?? "").trim() || "—"
      };
    });
    const b = a.filter((k) => k.type === "Pancel");
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
    const v = ((xe = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : xe.microchips) ?? {}, S = ["slot1", "slot2", "slot3"], C = a.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var ae, ue, oe, ye;
      const A = k.id;
      let E = null;
      for (const ge of S)
        if ((((ae = v[ge]) == null ? void 0 : ae.itemId) ?? "").trim() === A) {
          E = ge;
          break;
        }
      const K = ((ue = k == null ? void 0 : k.system) == null ? void 0 : ue.abilityType) ?? "", le = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", G = (((oe = k == null ? void 0 : k.system) == null ? void 0 : oe.description) ?? "").trim(), Se = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: A,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: le,
        description: Se,
        kp: Number((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const q = a.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
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
    const _ = a.filter((k) => k.type === "Egyeb");
    e.egyebList = _.map((k) => {
      const E = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const w = (((we = e.weaponsTable) == null ? void 0 : we.length) ?? 0) > 0 || (((fe = e.armorTable) == null ? void 0 : fe.length) ?? 0) > 0 || (((_e = e.microchipsTable) == null ? void 0 : _e.length) ?? 0) > 0 || (((Oe = e.itemsTable) == null ? void 0 : Oe.length) ?? 0) > 0 || (((Ie = e.egyebList) == null ? void 0 : Ie.length) ?? 0) > 0;
    e.showEquipmentDropZone = !w;
    const L = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, F = a.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var A, E;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((A = k.system) == null ? void 0 : A.description) ?? "",
        kp: Number(((E = k.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), j = new Map(F.map((k) => [k.id, k])), H = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = H, e.abilityHatterSlot = H;
    const B = (k) => {
      const A = L[k];
      return A ? Array.isArray(A == null ? void 0 : A.items) ? A.items : Array.isArray(A) ? A : [] : [];
    }, ne = (k) => (k || []).map((A) => {
      const E = j.get(A);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ne(B("passive")), e.abilityActiveList = ne(B("active")), e;
  }
  _attachFrameListeners(s) {
    var m, f, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var o, l, y;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((y = (l = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var o, l, y;
      i.preventDefault();
      const r = (l = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      (y = c == null ? void 0 : c.sheet) == null || y.render(!0);
    });
    const a = (i) => {
      var o, l;
      const r = (o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId;
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      (l = c == null ? void 0 : c.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), a(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), a(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, y, b, v;
      i.preventDefault();
      const r = (y = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : y.call(l, ".karakter-weapon-slot"), c = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var l;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, c = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-CzTmYbcb.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var o, l, y, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let c = (((o = r == null ? void 0 : r.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (c = (((((b = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var y, b;
      i.preventDefault();
      const r = i.currentTarget, c = (((y = r == null ? void 0 : r.dataset) == null ? void 0 : y.skill) ?? "").trim(), o = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-CzTmYbcb.mjs");
      l(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var c, o;
      i.preventDefault();
      const r = (o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      var o, l;
      i.preventDefault();
      const r = (((l = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(r) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, S, C, q, _;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, c = (C = (S = i.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : C.itemId;
      if (!r || !c || !this.actor) return;
      const o = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, y = (Array.isArray((_ = o[r]) == null ? void 0 : _.items) ? o[r].items.slice() : []).filter((w) => w !== c);
      await this.actor.update({ [`system.abilities.${r}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var c, o;
      if (i.preventDefault(), !i.altKey) return;
      const r = (o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, c = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), y = {};
      l && (y[`system.weapons.${l}.itemId`] = "", y[`system.weapons.${l}.name`] = "", y[`system.weapons.${l}.damage`] = "", y[`system.weapons.${l}.bonus`] = ""), Object.keys(y).length && await o.update(y), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var c, o;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((o = (c = i.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var y, b, v, S;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (y = i.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((C) => {
        var q;
        return (((q = c[C]) == null ? void 0 : q.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var o, l;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((l = (o = i.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || h.forEach((i) => {
      var r;
      (((r = i.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var y, b, v;
      const r = i.currentTarget, c = (b = (y = r == null ? void 0 : r.dataset) == null ? void 0 : y.itemId) == null ? void 0 : b.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const l = o.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const n = this, u = (i) => {
      if (!i) return;
      const r = n._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && n.actor.update(r).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, g = (i) => {
      var r, c, o;
      return i && (((c = (r = n.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, i)) || n.id && ((o = i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(n.id)}`)));
    };
    n._votvNpcBlur = (i) => {
      var y;
      const r = i.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = r.form;
      if (!g(o)) return;
      const l = i.relatedTarget;
      l && (o.contains(l) || n.id && ((y = l.closest) != null && y.call(l, `#${CSS.escape(n.id)}`))) || u(o);
    }, document.body.addEventListener("blur", n._votvNpcBlur, !0), n._votvNpcItemHookRegistered || (n._votvNpcItemUpdateHook = (i, r, c) => {
      var o;
      n.actor && ((o = i == null ? void 0 : i.parent) == null ? void 0 : o.id) === n.actor.id && n.render(!0);
    }, Hooks.on("updateItem", n._votvNpcItemUpdateHook), n._votvNpcItemHookRegistered = !0);
  }
  _tearDown(s) {
    var t, a, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null, this._votvNpcItemHookRegistered = !1);
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && this.actor.update(n).catch((u) => console.warn("VoidNpcSheet save on close failed", u));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, s);
  }
  /** Sebzés gomb: a fegyver sebzés formuláját dobja és chatbe küldi. */
  async _rollWeaponDamage(s, e = "") {
    var g, m, f, h, i, r, c, o, l, y;
    const t = this.actor;
    if (!t) return;
    const a = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!a || a.type !== "Fegyver") return;
    let d = (((i = a.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (y = (c = ui.notifications) == null ? void 0 : c.warn) == null || y.call(c, ((l = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : l.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var f, h, i, r, c, o, l, y, b, v, S, C, q, _, w;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const a = ((L) => {
      var j;
      if (!L) return null;
      const F = L.uuid ?? L.documentUuid ?? ((j = L.data) == null ? void 0 : j.uuid) ?? (typeof L == "string" ? L : null);
      if (F) return F;
      if (typeof L == "object") {
        for (const H of Object.values(L))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!a) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(a);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let L = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== n.id) {
        const ne = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        L = ((c = (await n.createEmbeddedDocuments("Item", [ne]))[0]) == null ? void 0 : c.id) ?? L;
      }
      const F = (((o = d.system) == null ? void 0 : o.kind) ?? "passive").toString(), j = ((l = n.system) == null ? void 0 : l.abilities) ?? {}, H = F === "active" ? "active" : "passive", B = Array.isArray((y = j[H]) == null ? void 0 : y.items) ? j[H].items.slice() : Array.isArray(j[H]) ? j[H].slice() : [];
      B.includes(L) || B.push(L), await n.update({ [`system.abilities.${H}.items`]: B }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === n.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await n.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const L = ((S = n.system) == null ? void 0 : S.weapons) ?? {}, F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (L.slotOrder ?? "").trim(), H = j ? j.split(/\s*,\s*/).filter((Q) => F.includes(Q)) : [];
      let B = F.find((Q) => {
        var pe;
        return !(((pe = L[Q]) == null ? void 0 : pe.itemId) ?? "").trim();
      });
      B || (B = F.find((Q) => !H.includes(Q)) ?? "slot1");
      const ne = H.includes(B) ? H : [...H, B].filter((Q) => F.includes(Q));
      await n.update({
        "system.weapons.slotOrder": ne.join(","),
        [`system.weapons.${B}.itemId`]: m,
        [`system.weapons.${B}.name`]: d.name ?? "",
        [`system.weapons.${B}.damage`]: ((C = d.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${B}.bonus`]: ((q = d.system) == null ? void 0 : q.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const L = ((w = (_ = n.system) == null ? void 0 : _.gear) == null ? void 0 : w.microchips) ?? {}, j = ["slot1", "slot2", "slot3"].find((H) => {
        var B;
        return !(((B = L[H]) == null ? void 0 : B.itemId) ?? "").trim();
      });
      j && await n.update({
        [`system.gear.microchips.${j}.itemId`]: m,
        [`system.gear.microchips.${j}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, h, i, r, c, o;
    const e = (h = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", a = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${u}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var g, m, f, h, i, r;
    const e = (m = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let a, d = "";
    if (e.type === "MikroChip") {
      const c = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (a = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((r = this.actor) == null ? void 0 : r.name) ?? void 0 }),
      content: u,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const a of s.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let d;
      a.type === "checkbox" ? d = a.checked : a.type === "number" ? d = a.value === "" ? 0 : Number(a.value) : d = a.value ?? "", d !== void 0 && foundry.utils.setProperty(e, a.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const a = e.name;
      (a === void 0 || typeof a == "string" && a.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
z(X, "PARTS", foundry.utils.mergeObject(
  R(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), z(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((kt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : kt.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((vt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vt.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((It = (wt = R(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : wt.window) == null ? void 0 : It.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ye = X;
var St;
const V = class V extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      var m, f, h, i, r, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const a = (n) => {
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
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
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
z(V, "PARTS", foundry.utils.mergeObject(R(V, V, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), z(V, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(V, V, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((St = R(V, V, "DEFAULT_OPTIONS")) == null ? void 0 : St.form) ?? {}, { submitOnChange: !1 })
}));
let Je = V;
var Tt;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      var m, f, h, i, r, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const a = (n) => {
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
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ee, "PARTS", foundry.utils.mergeObject(R(ee, ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), z(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ee, ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Tt = R(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Tt.form) ?? {}, { submitOnChange: !1 })
}));
let Qe = ee;
var Dt;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      var m, f, h, i, r, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const a = (n) => {
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
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(te, "PARTS", foundry.utils.mergeObject(R(te, te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), z(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(te, te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Dt = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = te;
var _t;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      var m, f, h, i, r, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const a = (n) => {
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
      d(u) && a(u);
    }, e._votvInput = (n) => {
      var m;
      const u = n.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const g = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(g), 300));
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", !(t.name === "name" && typeof a == "string" && a.trim() === "") && foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    let e = await super._prepareContext(s);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
z(se, "PARTS", foundry.utils.mergeObject(R(se, se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), z(se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(se, se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((_t = R(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = se;
var Ot;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      var m, f, h, i, r, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const a = (n) => {
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
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(ie, "PARTS", foundry.utils.mergeObject(R(ie, ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), z(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(ie, ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ot = R(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = ie;
var Ct;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const a = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(a).replace(/\./g, "-")}`;
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
      var m, f, h, i, r, c, o;
      if (!e.isEditable || !((f = (m = n.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = n.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const u = ((o = (c = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const a = (n) => {
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
      d(u) && a(u);
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
z(re, "PARTS", foundry.utils.mergeObject(R(re, re, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), z(re, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(re, re, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ct = R(re, re, "DEFAULT_OPTIONS")) == null ? void 0 : Ct.form) ?? {}, { submitOnChange: !1 })
}));
let et = re;
const qt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var s, e, t, a, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (s = CONFIG.Actor).dataModels ?? (s.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Rt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Ht, CONFIG.Item.dataModels.Kepesseg = mt, CONFIG.Item.dataModels.ability = mt, CONFIG.Item.dataModels.Targy = zt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["resources.health"],
    value: []
  }, (a = CONFIG.Actor).typeLabels ?? (a.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", We, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ye, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Je, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qe, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xe, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ze, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ve, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", et, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const M = 500;
  Hooks.on("updateActor", (n, u, g, m) => {
    var v, S, C, q, _;
    const f = n == null ? void 0 : n.id;
    if (!f) return;
    const h = document.activeElement, i = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), r = [], c = (v = game.actors) == null ? void 0 : v.get(f);
    c != null && c.apps && r.push(...Array.from(c.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of o)
      ((S = w.document) == null ? void 0 : S.id) !== f || ((C = w.document) == null ? void 0 : C.documentName) !== "Actor" || ((q = w.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || r.includes(w) || r.push(w);
    if (i && r.some((w) => {
      const L = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return L && L.contains(h);
    })) return;
    const y = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, b = y && Date.now() - y.at < M ? y.appId : null;
    setTimeout(() => {
      for (const w of r)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, u, g, m) => {
    var r, c, o;
    const f = n == null ? void 0 : n.parent;
    if (!f || f.documentName !== "Actor" || f.type !== "Karakter" || n.type !== "Fegyver") return;
    const h = ((r = f.system) == null ? void 0 : r.weapons) ?? {}, i = {};
    for (const [l, y] of Object.entries(h)) {
      if (!l.startsWith("slot")) continue;
      const b = ((y == null ? void 0 : y.itemId) ?? "").trim();
      !b || b !== n.id || (i[`system.weapons.${l}.name`] = n.name ?? "", i[`system.weapons.${l}.damage`] = ((c = n.system) == null ? void 0 : c.damage) ?? "", i[`system.weapons.${l}.bonus`] = ((o = n.system) == null ? void 0 : o.bonus) ?? "");
    }
    Object.keys(i).length && f.update(i);
  });
});
Hooks.on("ready", () => {
  var M, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, u, g, m, f, h;
      if (!((u = (n = e.target) == null ? void 0 : n.closest) != null && u.call(n, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), a = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!a) return;
      const d = a.includes(".") ? a.split(".").pop() : a;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (M = game.user) != null && M.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const a = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(a != null && a.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: qt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, n = await a.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })();
});
Hooks.on("preCreateToken", (M, s, e) => {
  var n, u;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, a = t ?? M.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = a ? (u = game.actors) == null ? void 0 : u.get(a) : null;
  !d || d.type !== "Karakter" || M.updateSource({
    ...t ? { actorId: t } : {},
    actorLink: !0,
    "bar2.attribute": null
  });
});
Hooks.on("preCreateScene", (M, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || M.updateSource({
    width: 3840,
    height: 2160,
    "background.src": qt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (M, s, e) => {
  var u, g;
  const t = ((u = M.flags) == null ? void 0 : u["vacuum-of-the-void"]) ?? {}, a = t.resultType, d = t.critLabel;
  if (!a && !d) return;
  const n = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (n && (a && n.classList.add(`votv-${a}`), d)) {
    const m = n.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const f = n.querySelector(".dice-total"), h = (f == null ? void 0 : f.parentElement) ?? n, i = document.createElement("div");
    i.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, i.textContent = d, h.appendChild(i);
  }
});
export {
  We as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-BW8N8nkB.mjs.map
