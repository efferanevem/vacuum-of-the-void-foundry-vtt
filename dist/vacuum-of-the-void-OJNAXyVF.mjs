var Pt = Object.defineProperty;
var Et = Object.getPrototypeOf;
var At = Reflect.get;
var Ft = (j, s, e) => s in j ? Pt(j, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : j[s] = e;
var z = (j, s, e) => Ft(j, typeof s != "symbol" ? s + "" : s, e);
var R = (j, s, e) => At(Et(j), e, s);
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
function ft(j) {
  if (!j || !Array.isArray(j.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let c = !1;
  const d = (i, r = 1) => {
    if (!Array.isArray(i)) return;
    let a = r;
    for (const n of i) {
      if (!n) continue;
      if (Array.isArray(n.terms)) {
        d(n.terms, a);
        continue;
      }
      if (typeof n.operator == "string") {
        a = n.operator === "-" ? -1 : 1;
        continue;
      }
      const l = typeof n.faces == "number" ? n.faces : void 0, p = Array.isArray(n.results) ? n.results : null;
      if (!l || !p || l === 8 || l !== 6) continue;
      const b = !c && a >= 0 && (n.number === 3 || n.number === "3") ? (c = !0, s) : a >= 0 ? e : t;
      for (const v of p) {
        if (!v || v.discarded || v.hidden) continue;
        const S = Number(v.result ?? v);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  d(j.terms, 1);
  const o = s.filter((i) => i === 6).length, u = s.filter((i) => i === 1).length, g = e.filter((i) => i === 6).length, m = t.filter((i) => i === 6).length, f = o + g, h = u + m;
  return f > 0 && f === h ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var yt, gt, ht, bt;
const U = class U extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var c, d, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((c = s.querySelector) == null ? void 0 : c.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), c = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (c.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (c.windowScrollTop = t.scrollTop), c;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: c } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && c && (c.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    var n;
    const t = (n = game.votv) == null ? void 0 : n._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const d = this.element, o = this.form ?? this.element;
    let u = { scrollState: {}, focus: null };
    if (d) {
      u.scrollState = this._saveScrollState(d);
      const l = document.activeElement, p = o.contains(l), b = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA");
      p && b && (u.focus = {
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
    const m = this.element, f = this.form ?? this.element, h = u.scrollState, i = u.focus, r = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", a = () => {
      var l, p;
      if (this._applyScrollState(m, h), (i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.id) != null) {
        const b = ((l = f.querySelector) == null ? void 0 : l.call(f, i.id ? `#${CSS.escape(i.id)}` : null)) ?? (i.name ? (p = f.querySelector) == null ? void 0 : p.call(f, `[name="${CSS.escape(i.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = i.selectionStart ?? 0, b.selectionEnd = i.selectionEnd ?? i.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (r || i) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), g;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), c = Number(e);
    if (c <= 0 || t <= 0) return 0;
    const d = Math.floor(c / 3), o = Math.floor(2 * c / 3);
    return t <= d ? 1 : t <= o ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, c, d;
    const s = (((c = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : c.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((d = o.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, c, d;
    const s = (((c = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : c.contents) ?? []).filter(
      (o) => {
        var u;
        return o.type === "Pancel" && ((u = o.system) == null ? void 0 : u.equipped) === !0;
      }
    );
    let e = 0;
    for (const o of s) {
      const u = String(((d = o.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), g = Number(u);
      Number.isFinite(g) && (e += g);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(s = null) {
    var h, i, r, a, n, l, p, b, v;
    const e = s ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const c = ((r = (i = this.actor) == null ? void 0 : i.system) == null ? void 0 : r.resources) ?? {}, d = ((n = (a = c.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : n.value) ?? 0, o = ((l = c.currentHealth) == null ? void 0 : l.legs) ?? 0, u = U._healthStatusFromRatio(o, d), g = Number(((v = (b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let m;
    u === 0 ? m = 0 : u === 1 ? m = -6 : u === 2 ? m = -3 : m = g;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(s = null) {
    var o, u, g, m;
    const e = s ?? this.form ?? this.element;
    let t = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((m = (g = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : g.combat) == null ? void 0 : m.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var o, u, g, m;
    const e = U.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((o = this.actor.system) == null ? void 0 : o.resources) ?? {}, c = ((g = (u = t.hitLocations) == null ? void 0 : u[e]) == null ? void 0 : g.value) ?? 0, d = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return U._healthStatusFromRatio(d, c);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var u, g, m, f;
    const t = U.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const c = ((u = s == null ? void 0 : s.system) == null ? void 0 : u.resources) ?? {}, d = ((m = (g = c.hitLocations) == null ? void 0 : g[t]) == null ? void 0 : m.value) ?? 0, o = ((f = c.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return U._healthStatusFromRatio(o, d);
  }
  async _prepareContext(s) {
    var Se, ae, ue, oe, ye, ge, je, Me, Re, Ke, qe, Te, tt, st, it, rt, nt, at;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ue = (ae = (Se = this.actor.system) == null ? void 0 : Se.resources) == null ? void 0 : ae.stress) == null ? void 0 : ue.value) || 0;
    e.stressOver10 = t > 10;
    const c = this.actor.system.resources ?? {}, d = c.hitLocations ?? {}, o = c.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const y of u) {
      const O = ((oe = d[y]) == null ? void 0 : oe.value) ?? 0, T = o[y] ?? 0;
      e.computedHealthStatus[y] = U._healthStatusFromRatio(T, O);
    }
    const g = (Number(o.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((y) => (Number(o[y]) || 0) === 0).length;
    e.showDeathSkull = g || f >= 2;
    const h = e.computedHealthStatus.legs ?? 3, i = Number(((ge = (ye = this.actor.system) == null ? void 0 : ye.combat) == null ? void 0 : ge.givenSpeed) ?? 0) || 0;
    let r;
    h === 0 ? r = 0 : h === 1 ? r = -6 : h === 2 ? r = -3 : r = i;
    const a = this._getTotalArmorSpeedPenalty();
    r += a, e.effectiveGivenSpeed = r;
    const l = (Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: r, givenProtection: l } },
      { inplace: !1 }
    );
    const p = U.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [y, O] of Object.entries(p)) {
      const T = e.computedHealthStatus[O];
      e.skillHealthStatus[y] = T, e.skillDisabled[y] = T === 0 ? " disabled" : "", e.skillHasHealthTint[y] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (b.slotOrder ?? "").trim(), C = S ? S.split(/\s*,\s*/).filter((y) => v.includes(y)) : [], q = (Re = this.actor.system.gear) == null ? void 0 : Re.microchips, D = q && typeof q == "object" && !Array.isArray(q) ? q : {}, w = (((Ke = D.slot1) == null ? void 0 : Ke.itemId) ?? "").trim(), L = (((qe = D.slot2) == null ? void 0 : qe.itemId) ?? "").trim(), A = (((Te = D.slot3) == null ? void 0 : Te.itemId) ?? "").trim(), H = this.actor.items.contents.filter((y) => y.type !== "Kepesseg" && y.type !== "ability").slice().sort((y, O) => {
      const T = typeof y.sort == "number" ? y.sort : 0, _ = typeof O.sort == "number" ? O.sort : 0;
      return T - _;
    }).map((y) => {
      var ce, be, ke, de, me, Pe;
      const O = y.type === "Fegyver", T = y.type === "MikroChip";
      let _ = 0, N = "", Y = null;
      for (let Oe = 0; Oe < C.length; Oe++) {
        const Ee = C[Oe];
        if ((((ce = b[Ee]) == null ? void 0 : ce.itemId) ?? "") === y.id) {
          _ = Oe + 1, N = ((be = b[Ee]) == null ? void 0 : be.bonus) ?? "", Y = Ee;
          break;
        }
      }
      let W = null;
      T && (w === y.id ? W = "slot1" : L === y.id ? W = "slot2" : A === y.id && (W = "slot3"));
      const Le = O && ((ke = y.system) != null && ke.damage) ? y.system.damage : "", Z = O && typeof ((de = y.system) == null ? void 0 : de.range) == "string" ? (y.system.range || "").trim() : "", he = Y ? Number((me = b[Y]) == null ? void 0 : me.bonus) || 0 : "";
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        type: y.type,
        isWeapon: O,
        slotAssignment: _,
        slotBonus: N,
        slotKey: Y,
        microchipSlotKey: W,
        isEquipped: !!(Y || W),
        damage: Le,
        rangeStr: Z,
        slotBonusNum: he,
        quantity: Number(((Pe = y.system) == null ? void 0 : Pe.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = H;
    const B = (((tt = this.actor.items) == null ? void 0 : tt.contents) ?? []).filter((y) => y.type === "Fegyver"), ne = B.map((y) => ({ id: y.id, name: y.name, img: y.img }));
    e.weaponItems = ne;
    const Q = "— Nincs fegyver —", pe = C.filter((y) => {
      const T = ((b[y] ?? {}).itemId ?? "").trim();
      return T ? !!B.find((N) => N.id === T) : !1;
    });
    e.weaponSlots = pe.map((y, O) => {
      const T = b[y] ?? {}, _ = (T.itemId ?? "").trim(), N = ne.find((Y) => Y.id === _);
      return {
        slotKey: y,
        itemId: _,
        slotNum: O + 1,
        displayName: (N == null ? void 0 : N.name) || T.name || Q,
        img: (N == null ? void 0 : N.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const Ae = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Fe = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = B.map((y) => {
      var ot, ct, lt;
      const O = y.id;
      let T = null, _ = {};
      for (const Be of C)
        if ((((ot = b[Be]) == null ? void 0 : ot.itemId) ?? "").trim() === O) {
          T = Be, _ = b[Be] ?? {};
          break;
        }
      const N = !!T, Y = ((ct = y.system) == null ? void 0 : ct.equipped) !== void 0 && ((lt = y.system) == null ? void 0 : lt.equipped) !== null ? !!y.system.equipped : N, W = (y == null ? void 0 : y.system) ?? {}, Le = typeof W.range == "string" ? (W.range || "").trim() : "", Z = W.type ?? "", he = (Ae[Z] ?? Z) || "—", ce = W.size ?? "", be = (Fe[ce] ?? ce) || "", ke = [he, be].filter(Boolean).join(", ") || he || "—", de = Z === "projectile" || ce === "thrown", me = W.quantity, Pe = me != null ? String(me).trim() : "1", Oe = String(_.bonus ?? "").trim(), Ee = String(W.bonus ?? "").trim(), Lt = Oe || Ee || "0";
      return {
        slotKey: T ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? Q,
        img: (y == null ? void 0 : y.img) ?? "",
        bonus: Lt,
        damage: _.damage ?? W.damage ?? "",
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
    const Ne = (((st = this.actor.items) == null ? void 0 : st.contents) ?? []).filter((y) => y.type === "Pancel");
    e.armorTable = Ne.map((y) => {
      var _, N;
      const O = (y == null ? void 0 : y.system) ?? {}, T = ((_ = y.system) == null ? void 0 : _.equipped) !== void 0 && ((N = y.system) == null ? void 0 : N.equipped) !== null ? !!y.system.equipped : !1;
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: (O.level ?? "").toString().trim() || "—",
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const $e = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((y) => y.type === "Targy");
    e.itemsTable = $e.map((y) => {
      const O = (y == null ? void 0 : y.system) ?? {}, T = (O.description ?? "").trim(), _ = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", N = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        quantity: N,
        description: _
      };
    });
    const xe = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((y) => y.type === "Egyeb");
    e.egyebList = xe.map((y) => {
      const T = (((y == null ? void 0 : y.system) ?? {}).description ?? "").trim(), _ = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: y.id,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        description: _
      };
    });
    const we = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((y) => y.type === "MikroChip"), fe = we.map((y) => ({ id: y.id, name: y.name, img: y.img })), De = "— Nincs Mikro-Chip —", _e = ["slot1", "slot2", "slot3"], Ie = (y) => {
      var T, _, N;
      const O = [];
      return y !== 1 && O.push((((T = D.slot1) == null ? void 0 : T.itemId) ?? "").trim()), y !== 2 && O.push((((_ = D.slot2) == null ? void 0 : _.itemId) ?? "").trim()), y !== 3 && O.push((((N = D.slot3) == null ? void 0 : N.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = fe.filter((y) => !Ie(1).includes(y.id)), e.microchipItemsSlot2 = fe.filter((y) => !Ie(2).includes(y.id)), e.microchipItemsSlot3 = fe.filter((y) => !Ie(3).includes(y.id)), e.microchipSlots = _e.map((y) => {
      const O = D[y] ?? {}, T = (O.itemId ?? "").trim(), _ = we.find((N) => N.id === T);
      return {
        slotKey: y,
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || O.name || De,
        img: (_ == null ? void 0 : _.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((y) => {
      const O = `slot${y}`, T = D[O] ?? {}, _ = (T.itemId ?? "").trim(), N = fe.find((Y) => Y.id === _);
      e[`microchip${y}ItemId`] = _, e[`microchip${y}DisplayName`] = (N == null ? void 0 : N.name) || T.name || De, e[`microchip${y}Img`] = (N == null ? void 0 : N.img) || "";
    }), e.microchipsTable = we.map((y) => {
      var ce, be, ke, de;
      const O = y.id;
      let T = null;
      for (const me of _e)
        if ((((ce = D[me]) == null ? void 0 : ce.itemId) ?? "").trim() === O) {
          T = me;
          break;
        }
      const _ = !!T, N = ((be = y == null ? void 0 : y.system) == null ? void 0 : be.abilityType) ?? "", Y = N === "active" ? "Aktív" : N === "passive" ? "Passzív" : N || "—", W = N === "active", Le = Number((ke = y == null ? void 0 : y.system) == null ? void 0 : ke.replaceCost) >= 0 ? Number(y.system.replaceCost) : 0, Z = (((de = y == null ? void 0 : y.system) == null ? void 0 : de.description) ?? "").trim(), he = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (y == null ? void 0 : y.name) ?? "—",
        img: (y == null ? void 0 : y.img) ?? "",
        typeLabel: Y,
        description: he,
        kp: Le,
        isActive: W,
        slotKey: T ?? "",
        equipped: _
      };
    });
    const Ce = this.actor.system.abilities ?? {}, k = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).map((y) => {
      var O, T, _;
      return {
        id: y.id,
        name: y.name,
        img: y.img,
        kind: ((O = y.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((T = y.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((_ = y.system) == null ? void 0 : _.kp) ?? 0) || 0
      };
    }), E = new Map(k.map((y) => [y.id, y])), F = "— Nincs képesség —", K = (y) => {
      const O = Ce[y] ?? {}, T = (O.itemId ?? "").trim(), _ = T ? E.get(T) : null, N = (_ == null ? void 0 : _.description) ?? "", Y = (_ == null ? void 0 : _.kp) ?? 0;
      return {
        itemId: T,
        displayName: (_ == null ? void 0 : _.name) || O.name || F,
        img: (_ == null ? void 0 : _.img) || "",
        description: N,
        kp: Y
      };
    };
    e.abilityFajiSlot = K("faji"), e.abilityHatterSlot = K("hatter");
    const le = (y) => {
      const O = Ce[y];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, G = (y) => y.map((O) => {
      const T = E.get(O);
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
      const a = (i.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-DBgtzsIM.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, l, p;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let a = (r.dataset.itemId ?? "").trim();
      if (!a) {
        const b = (r.dataset.slot ?? "").trim();
        if (!b) return;
        a = (((((l = (n = this.actor) == null ? void 0 : n.system) == null ? void 0 : l.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((p = r.dataset.slot) == null ? void 0 : p.trim()) ?? "");
    }), !this.isEditable) return;
    const c = (i) => {
      var n;
      const r = i ? i.currentTarget : (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const a = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', c);
    const d = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    d && c({ currentTarget: d }), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var n, l, p;
      i.preventDefault(), i.stopPropagation();
      const r = ((p = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p;
      i.preventDefault();
      const r = i.currentTarget, a = r.dataset.skill, n = ((p = r.textContent) == null ? void 0 : p.trim()) || a, { openRollSheetForSkill: l } = await import("./roll-sheet-DBgtzsIM.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var v, S, C, q, D, w, L;
      i.preventDefault();
      const a = i.currentTarget.closest(".karakter-weapon-slot"), n = a == null ? void 0 : a.dataset.slot;
      if (!n) return;
      const p = (((S = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[n]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!p) return;
      const b = ((q = (C = this.actor.items).get) == null ? void 0 : q.call(C, p)) ?? ((w = (D = this.actor.items.contents) == null ? void 0 : D.find) == null ? void 0 : w.call(D, (A) => A.id === p));
      (L = b == null ? void 0 : b.sheet) == null || L.render(!0);
    });
    const o = (i, r) => {
      var l;
      const a = i.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (n) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const p = i.dataset.weaponSlot;
          p && this._rollWeapon(p);
          return;
        }
        (l = n.sheet) == null || l.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), o(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), o(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, a = r.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      let l = Number(r.value);
      (!Number.isFinite(l) || l < 0) && (l = 0), await n.update({ "system.quantity": l });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor, l = n.items.get(a), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((D) => S.includes(D)) : [], q = C.find((D) => {
          var w;
          return (((w = b[D]) == null ? void 0 : w.itemId) ?? "").trim() === a;
        });
        if (q) {
          const D = C.filter((w) => w !== q);
          p["system.weapons.slotOrder"] = D.join(","), p[`system.weapons.${q}.itemId`] = "", p[`system.weapons.${q}.name`] = "", p[`system.weapons.${q}.damage`] = "", p[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var q, D;
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let w = v.find((A) => {
          var M;
          return !((M = l[A]) != null && M.itemId);
        });
        const L = new Set(v);
        if (!w) {
          const A = b.find((M) => !L.has(M));
          if (!A) return;
          w = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: (n == null ? void 0 : n.name) ?? "",
          [`system.weapons.${w}.damage`]: ((q = n == null ? void 0 : n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = n == null ? void 0 : n.system) == null ? void 0 : D.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((L) => L !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const a = r.closest(".karakter-microchip-slot-select-wrap"), n = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !n && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var w;
      i.preventDefault();
      const r = i.currentTarget, a = r.closest(".karakter-microchip-slot-select-wrap"), n = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), l = n == null ? void 0 : n.dataset.slot;
      if (!l) return;
      const p = (r.dataset.itemId ?? "").trim(), b = (r.dataset.itemName ?? ((w = r.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (r.dataset.itemImg ?? "").trim(), S = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = b);
      let C = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      v ? (C || (C = document.createElement("img"), C.className = "karakter-microchip-slot-thumb", C.alt = "", n == null || n.insertBefore(C, S)), C.src = v, C.style.display = "") : C && C.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const q = p ? this.actor.items.get(p) : null, D = {
        [`system.gear.microchips.${l}.itemId`]: p,
        [`system.gear.microchips.${l}.name`]: (q == null ? void 0 : q.name) ?? ""
      };
      p && (D[`system.gear.microchips.${l}.active`] = !0), await this.actor.update(D);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      if (!a || a.type !== "MikroChip") return;
      const n = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, p = ["slot1", "slot2", "slot3"].find((S) => {
        var C;
        return (((C = n[S]) == null ? void 0 : C.itemId) ?? "").trim() === r;
      });
      p && await this.actor.update({
        [`system.gear.microchips.${p}.itemId`]: "",
        [`system.gear.microchips.${p}.name`]: "",
        [`system.gear.microchips.${p}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const a = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const a = r.dataset.slot;
      r.addEventListener("dragover", (n) => this._onMicrochipSlotDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (n) => this._onMicrochipSlotDrop(n, a));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const a = r.dataset.slot;
      a && (r.addEventListener("dragover", (n) => this._onAbilitySingleDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const a = r.dataset.area;
      a && (r.addEventListener("dragover", (n) => this._onAbilityAreaDragOver(n, a)), r.addEventListener("dragleave", (n) => {
        var l;
        return (l = n.currentTarget) == null ? void 0 : l.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (n) => {
        var l;
        (l = n.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
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
      const r = i.currentTarget.dataset.area, a = i.currentTarget.dataset.itemId;
      if (!r || !a) return;
      const n = this.actor.system.abilities ?? {}, p = (Array.isArray((b = n[r]) == null ? void 0 : b.items) ? n[r].items.slice() : []).filter((v) => v !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: p });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var l;
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      (l = n == null ? void 0 : n.sheet) == null || l.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor.items.get(a);
      n && (n.type === "Kepesseg" || n.type === "ability" ? await this._postAbilityToChat(a) : (n.type === "MikroChip" || n.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      !n || n.type !== "Pancel" || (await n.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var q, D;
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Fegyver") return;
      const l = this.actor.system.weapons ?? {}, p = (l.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = p ? p.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], S = v.find((w) => {
        var L;
        return (((L = l[w]) == null ? void 0 : L.itemId) ?? "").trim() === a;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let w = v.find((A) => {
          var M;
          return !((M = l[A]) != null && M.itemId);
        });
        const L = new Set(v);
        if (!w) {
          const A = b.find((M) => !L.has(M));
          if (!A) return;
          w = A, v.push(A);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: n.name ?? "",
          [`system.weapons.${w}.damage`]: ((q = n.system) == null ? void 0 : q.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((D = n.system) == null ? void 0 : D.bonus) ?? ""
        }), await n.update({ "system.equipped": !0 });
      } else if (S) {
        const w = v.filter((L) => L !== S);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await n.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const n = this.actor, l = n.items.get(a), p = {};
      if ((l == null ? void 0 : l.type) === "Fegyver") {
        const b = n.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = v ? v.split(/\s*,\s*/).filter((D) => S.includes(D)) : [], q = C.find((D) => {
          var w;
          return (((w = b[D]) == null ? void 0 : w.itemId) ?? "").trim() === a;
        });
        if (q) {
          const D = C.filter((w) => w !== q);
          p["system.weapons.slotOrder"] = D.join(","), p[`system.weapons.${q}.itemId`] = "", p[`system.weapons.${q}.name`] = "", p[`system.weapons.${q}.damage`] = "", p[`system.weapons.${q}.bonus`] = "";
        }
      }
      Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const r = i.currentTarget, a = (r.dataset.itemId ?? "").trim();
      if (!a) return;
      const n = this.actor.items.get(a);
      if (!n || n.type !== "Targy") return;
      const l = (r.value ?? "").trim();
      await n.update({ "system.quantity": l }), setTimeout(() => {
        const p = this.form ?? this.element, b = p == null ? void 0 : p.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const u = this, g = (i) => {
      var n, l, p, b;
      if (!i) return;
      const r = u._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const a = ((l = (n = r.system) == null ? void 0 : n.resources) == null ? void 0 : l.currentHealth) != null || ((b = (p = r.system) == null ? void 0 : p.resources) == null ? void 0 : b.hitLocations) != null;
      u.actor.update(r).then(() => {
        a && setTimeout(() => u.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, m = (i) => {
      var r, a, n;
      return i && (((a = (r = u.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, i)) || u.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!m(n)) return;
      const l = i.relatedTarget;
      l && (n.contains(l) || u.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), g(n));
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
    ), c = t.hitLocations ?? {}, d = t.currentHealth ?? {}, o = ["head", "torso", "arms", "legs"];
    for (const f of o) {
      const h = ((m = c[f]) == null ? void 0 : m.value) ?? 0, i = d[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, U._healthStatusFromRatio(i, h));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, c, d, o, u, g, m, f, h, i, r, a;
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            n = l;
            break;
          }
      }
      if (n) {
        const l = await fromUuid(n);
        if (l && l.documentName === "Item" && (l.type === "Kepesseg" || l.type === "ability")) {
          let p = l.id;
          if (((c = l.parent) == null ? void 0 : c.id) !== this.actor.id) {
            const q = foundry.utils.mergeObject(l.toObject(), { type: "Kepesseg" });
            p = ((d = (await this.actor.createEmbeddedDocuments("Item", [q]))[0]) == null ? void 0 : d.id) ?? p;
          }
          const b = (((o = l.system) == null ? void 0 : o.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": p,
              "system.abilities.faji.name": l.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": p,
              "system.abilities.hatter.name": l.name
            });
            return;
          }
          const S = b === "active" ? "active" : "passive", C = Array.isArray((u = v[S]) == null ? void 0 : u.items) ? v[S].items.slice() : Array.isArray(v[S]) ? v[S].slice() : [];
          C.includes(p) || C.push(p), await this.actor.update({ [`system.abilities.${S}.items`]: C });
          return;
        }
      }
    }
    if (e) {
      let n = e.uuid ?? e.documentUuid ?? ((g = e.data) == null ? void 0 : g.uuid) ?? (typeof e == "string" ? e : null);
      if (!n && typeof e == "object") {
        for (const l of Object.values(e))
          if (typeof l == "string" && l.includes(".") && l.startsWith("Item.")) {
            n = l;
            break;
          }
      }
      if (n) {
        const l = await fromUuid(n);
        if (l && l.documentName === "Item" && l.type === "Fegyver") {
          const p = this.actor, b = ((m = l.parent) == null ? void 0 : m.id) !== p.id;
          let v = l.id;
          if (b) {
            const S = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            v = ((f = (await p.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? v;
          }
          if (b) {
            const S = ((h = p.system) == null ? void 0 : h.weapons) ?? {}, C = (S.slotOrder ?? "").trim(), q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = C ? C.split(/\s*,\s*/).filter((L) => q.includes(L)) : [], w = D.filter((L) => {
              var A;
              return (((A = S[L]) == null ? void 0 : A.itemId) ?? "").trim() === v;
            });
            if (w.length > 0) {
              const A = {
                "system.weapons.slotOrder": D.filter((M) => !w.includes(M)).join(",")
              };
              for (const M of w)
                A[`system.weapons.${M}.itemId`] = "", A[`system.weapons.${M}.name`] = "", A[`system.weapons.${M}.damage`] = "", A[`system.weapons.${M}.bonus`] = "";
              await p.update(A);
            }
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "Pancel") {
          const p = this.actor;
          if (((i = l.parent) == null ? void 0 : i.id) !== p.id) {
            const b = foundry.utils.mergeObject(l.toObject(), { system: { ...l.toObject().system ?? {}, equipped: !1 } });
            await p.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (l && l.documentName === "Item" && l.type === "MikroChip") {
          const p = this.actor;
          ((r = l.parent) == null ? void 0 : r.id) !== p.id && await p.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
        if (l && l.documentName === "Item" && (l.type === "Targy" || l.type === "Egyeb")) {
          const p = this.actor;
          ((a = l.parent) == null ? void 0 : a.id) !== p.id && await p.createEmbeddedDocuments("Item", [l.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var d, o, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (c == null ? void 0 : c.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var u, g, m, f, h, i;
    s.preventDefault(), s.stopPropagation(), (u = s.currentTarget) == null || u.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((c == null ? void 0 : c.type) !== "Item" || !(c != null && c.uuid)) return;
    const d = await fromUuid(c.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((f = d.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [r]);
      return;
    }
    const o = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: o,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((h = d.system) == null ? void 0 : h.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((i = d.system) == null ? void 0 : i.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(s, e, t) {
    t && (s.dataTransfer && (s.dataTransfer.setData("text/plain", e), s.dataTransfer.effectAllowed = "move", typeof s.dataTransfer.setDragImage == "function" && s.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(s, e) {
    var c;
    const t = this._draggingInventoryItemId;
    !t || t === e || (s.preventDefault(), s.dataTransfer && (s.dataTransfer.dropEffect = "move"), (c = s.currentTarget) == null || c.classList.add("karakter-actions-row-drag-over"));
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
      const r = typeof h.sort == "number" ? h.sort : 0, a = typeof i.sort == "number" ? i.sort : 0;
      return r - a;
    }).map((h) => h.id), o = d.indexOf(t), u = d.indexOf(e);
    if (o === -1 || u === -1) return;
    d.splice(o, 1), d.splice(u, 0, t);
    const g = d.map((h, i) => ({
      _id: h,
      sort: (i + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", g);
  }
  _onInventoryAreaDragOver(s) {
    var c, d, o;
    const e = ((c = s.dataTransfer) == null ? void 0 : c.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (o = s.currentTarget) == null || o.classList.add("karakter-actions-table-drag-over"));
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
    const c = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, c)}px`;
  }
  async _postItemToChat(s) {
    var g, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((g = e.system) == null ? void 0 : g.description) ?? "").trim();
    let c, d = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (c = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const i = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        i > 0 && (d = `<p><strong>KP:</strong> ${i}</p>`);
      }
    } else
      c = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${d}
      ${o}
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
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", c = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, d = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = c > 0 ? `<p><strong>KP:</strong> ${c}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
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
    var c, d;
    const e = ((c = s.dataTransfer) == null ? void 0 : c.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var c;
    this._parseAbilityDrop(s) && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(s, e) {
    var o, u, g;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const c = await fromUuid(t.uuid);
    if (!c || c.type !== "Kepesseg" && c.type !== "ability") return;
    let d = c.id;
    if (((u = c.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(c.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : g.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: c.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var c;
    this._parseAbilityDrop(s) && (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var g, m, f, h;
    s.preventDefault(), (g = s.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const c = await fromUuid(t.uuid);
    if (!c || c.type !== "Kepesseg" && c.type !== "ability") return;
    let d = c.id;
    if (((m = c.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(c.toObject(), { type: "Kepesseg" });
      d = ((f = (await this.actor.createEmbeddedDocuments("Item", [i]))[0]) == null ? void 0 : f.id) ?? d;
    }
    const o = this.actor.system.abilities ?? {}, u = Array.isArray((h = o[e]) == null ? void 0 : h.items) ? o[e].items.slice() : Array.isArray(o[e]) ? o[e].slice() : [];
    u.includes(d) || u.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: u });
  }
  _onMicrochipSlotDragOver(s, e) {
    var d, o, u;
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (c == null ? void 0 : c.type) === "Item" && (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var u, g, m, f, h;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((g = s.dataTransfer) == null ? void 0 : g.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let c;
    try {
      c = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((c == null ? void 0 : c.type) !== "Item" || !(c != null && c.uuid)) return;
    const d = await fromUuid(c.uuid);
    if (!d || d.type !== "MikroChip") return;
    let o = d.id;
    ((f = d.parent) == null ? void 0 : f.id) !== this.actor.id && (o = ((h = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : h.id) ?? o), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: o,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const c = (this.actor.system.skills ?? {})[s] ?? 0;
    let d = Number(c) || 0;
    const o = this._getSkillHealthStatus(s);
    o === 1 ? d -= 6 : o === 2 && (d -= 3);
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
    const c = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": c });
  }
  async _rollWeapon(s) {
    var v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, c = this.actor.system.skills ?? {}, d = this.actor.items.filter((S) => S.type === "Fegyver");
    let o = null;
    t.itemId && (o = d.find((S) => S.id === t.itemId) ?? null);
    const u = o && o.name || t.name || `Fegyver (${s})`, g = Number(t.bonus || 0) || 0, f = (((v = o == null ? void 0 : o.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(c[f] || 0) || 0, i = g + h, a = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(a);
    await n.evaluate({ async: !0 });
    const { resultType: l, label: p } = ft(n), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: l, critLabel: p } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(s, e = "") {
    var g, m, f, h, i, r, a, n, l, p;
    const t = this.actor;
    if (!t) return;
    let c = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!c || c.type !== "Fegyver") return;
    let d = (((i = c.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (a = ui.notifications) == null ? void 0 : a.warn) == null || p.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(d);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${c.name} – sebzés`,
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
    var c, d, o, u;
    if (!s) return { form: null, windowContent: null };
    const e = ((c = s.querySelector) == null ? void 0 : c.call(s, "form.votv.karakter-sheet")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, "form.votv")) ?? null, t = ((o = s.querySelector) == null ? void 0 : o.call(s, ".votv-scroll")) ?? ((u = s.querySelector) == null ? void 0 : u.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), c = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (c.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (c.windowScrollTop = t.scrollTop), c;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: c } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && c && (c.scrollTop = e.windowScrollTop);
  }
  /** Mentjük a görgetést és a fókuszt render előtt, visszaállítjuk utána (ne dobja vissza a lap tetejére). */
  async render(s = !1, e = {}) {
    const t = this.element, c = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const r = document.activeElement, a = c.contains(r), n = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      a && n && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const o = await super.render(s, e), u = this.element, g = this.form ?? this.element, m = d.scrollState, f = d.focus, h = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", i = () => {
      var r, a;
      if (this._applyScrollState(u, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const n = ((r = g.querySelector) == null ? void 0 : r.call(g, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (a = g.querySelector) == null ? void 0 : a.call(g, `[name="${CSS.escape(f.name)}"]`) : null);
        n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && (n.focus({ preventScroll: !0 }), typeof n.selectionStart == "number" && (n.selectionStart = f.selectionStart ?? 0, n.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(u, m);
    };
    return (h || f) && (requestAnimationFrame(i), setTimeout(i, 0), setTimeout(i, 50), setTimeout(i, 150), setTimeout(i, 300), setTimeout(i, 450)), o;
  }
  async _prepareContext(s) {
    var Q, pe, Ae, Fe, Ne, $e, xe, we, fe, De, _e, Ie, Ce;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Q = this.actor) == null ? void 0 : Q.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ae = (pe = e.system) == null ? void 0 : pe.identity) == null ? void 0 : Ae.size) ?? "").trim() || "Közepes";
    const t = this.actor, c = ((Fe = t == null ? void 0 : t.items) == null ? void 0 : Fe.contents) ?? [], d = ((Ne = t == null ? void 0 : t.system) == null ? void 0 : Ne.weapons) ?? {}, o = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], u = (d.slotOrder ?? "").trim(), g = u ? u.split(/\s*,\s*/).filter((k) => o.includes(k)) : [], m = c.filter((k) => k.type === "Fegyver"), f = m.map((k) => ({ id: k.id, name: k.name, img: k.img })), h = "— Nincs fegyver —", i = g.length > 0 ? g : o, r = o.filter((k) => !i.includes(k)), a = [...i, ...r], n = a.filter((k) => {
      var F;
      const E = (((F = d[k]) == null ? void 0 : F.itemId) ?? "").trim();
      return E && m.some((K) => K.id === E);
    });
    e.weaponSlots = n.map((k) => {
      const E = d[k] ?? {}, F = (E.itemId ?? "").trim(), K = f.find((le) => le.id === F);
      return {
        slotKey: k,
        itemId: F,
        displayName: (K == null ? void 0 : K.name) || E.name || h,
        img: (K == null ? void 0 : K.img) || ""
      };
    });
    const l = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = m.map((k) => {
      var qe;
      const E = k.id;
      let F = null, K = {};
      for (const Te of a)
        if ((((qe = d[Te]) == null ? void 0 : qe.itemId) ?? "").trim() === E) {
          F = Te, K = d[Te] ?? {};
          break;
        }
      const le = !!F, G = (k == null ? void 0 : k.system) ?? {}, Se = typeof G.range == "string" ? (G.range || "").trim() : "", ae = G.type ?? "", ue = (l[ae] ?? ae) || "—", oe = G.size ?? "", ye = (p[oe] ?? oe) || "", ge = [ue, ye].filter(Boolean).join(", ") || ue || "—", je = ae === "projectile" || oe === "thrown", Me = G.quantity != null ? String(G.quantity).trim() : "1", Re = String(G.bonus ?? K.bonus ?? "").trim() || "0", Ke = (G.damage ?? K.damage ?? "").trim() || "";
      return {
        slotKey: F ?? "",
        itemId: E,
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
    const b = c.filter((k) => k.type === "Pancel");
    e.armorTable = b.map((k) => {
      var K;
      const E = (k == null ? void 0 : k.system) ?? {}, F = ((K = k.system) == null ? void 0 : K.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: (E.level ?? "").toString().trim() || "—",
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: F
      };
    });
    const v = ((xe = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : xe.microchips) ?? {}, S = ["slot1", "slot2", "slot3"], C = c.filter((k) => k.type === "MikroChip");
    e.microchipsTable = C.map((k) => {
      var ae, ue, oe, ye;
      const E = k.id;
      let F = null;
      for (const ge of S)
        if ((((ae = v[ge]) == null ? void 0 : ae.itemId) ?? "").trim() === E) {
          F = ge;
          break;
        }
      const K = ((ue = k == null ? void 0 : k.system) == null ? void 0 : ue.abilityType) ?? "", le = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", G = (((oe = k == null ? void 0 : k.system) == null ? void 0 : oe.description) ?? "").trim(), Se = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: le,
        description: Se,
        kp: Number((ye = k == null ? void 0 : k.system) == null ? void 0 : ye.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: K === "active",
        slotKey: F ?? "",
        equipped: !!F
      };
    });
    const q = c.filter((k) => k.type === "Targy");
    e.itemsTable = q.map((k) => {
      const E = (k == null ? void 0 : k.system) ?? {}, F = (E.description ?? "").trim(), K = F ? F.length > 60 ? F.slice(0, 57) + "…" : F : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: E.quantity != null ? String(E.quantity).trim() : "1",
        description: K
      };
    });
    const D = c.filter((k) => k.type === "Egyeb");
    e.egyebList = D.map((k) => {
      const F = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), K = F ? F.length > 80 ? F.slice(0, 77) + "…" : F : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: K
      };
    });
    const w = (((we = e.weaponsTable) == null ? void 0 : we.length) ?? 0) > 0 || (((fe = e.armorTable) == null ? void 0 : fe.length) ?? 0) > 0 || (((De = e.microchipsTable) == null ? void 0 : De.length) ?? 0) > 0 || (((_e = e.itemsTable) == null ? void 0 : _e.length) ?? 0) > 0 || (((Ie = e.egyebList) == null ? void 0 : Ie.length) ?? 0) > 0;
    e.showEquipmentDropZone = !w;
    const L = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.abilities) ?? {}, A = c.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var E, F;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((E = k.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((F = k.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), M = new Map(A.map((k) => [k.id, k])), H = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = H, e.abilityHatterSlot = H;
    const B = (k) => {
      const E = L[k];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, ne = (k) => (k || []).map((E) => {
      const F = M.get(E);
      return F ? { id: F.id, name: F.name, img: F.img, description: F.description, kp: F.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = ne(B("passive")), e.abilityActiveList = ne(B("active")), e;
  }
  _attachFrameListeners(s) {
    var m, f, h;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (i) => {
      var n, l, p;
      if (i.preventDefault(), i.stopPropagation(), !this.actor) return;
      const r = ((p = (l = (n = foundry.applications) == null ? void 0 : n.apps) == null ? void 0 : l.FilePicker) == null ? void 0 : p.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (i) => {
      var n, l, p;
      i.preventDefault();
      const r = (l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (p = a == null ? void 0 : a.sheet) == null || p.render(!0);
    });
    const c = (i) => {
      var n, l;
      const r = (n = i == null ? void 0 : i.dataset) == null ? void 0 : n.itemId;
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      (l = a == null ? void 0 : a.sheet) == null || l.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), c(i.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), c(i.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (i) => {
      var l, p, b, v;
      i.preventDefault();
      const r = (p = (l = i.currentTarget) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, ".karakter-weapon-slot"), a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      (v = n == null ? void 0 : n.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (i) => {
      var l;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, a = (((l = r == null ? void 0 : r.dataset) == null ? void 0 : l.slot) ?? "").trim();
      if (!a || !this.actor) return;
      const { openRollSheetForWeapon: n } = await import("./roll-sheet-DBgtzsIM.mjs");
      n(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var n, l, p, b, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let a = (((n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !a && ((l = r == null ? void 0 : r.dataset) != null && l.slot) && (a = (((((b = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : b.weapons) ?? {})[r.dataset.slot] ?? {}).itemId ?? "").trim()), !(!a || !this.actor) && await this._rollWeaponDamage(a, (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var p, b;
      i.preventDefault();
      const r = i.currentTarget, a = (((p = r == null ? void 0 : r.dataset) == null ? void 0 : p.skill) ?? "").trim(), n = ((b = r == null ? void 0 : r.textContent) == null ? void 0 : b.trim()) || a;
      if (!a || !this.actor) return;
      const { openRollSheetForSkill: l } = await import("./roll-sheet-DBgtzsIM.mjs");
      l(this.actor, a, n);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      var a, n;
      i.preventDefault();
      const r = (n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      var n, l;
      i.preventDefault();
      const r = (((l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(r) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var b, v, S, C, q, D;
      if (i.preventDefault(), !i.altKey) return;
      const r = (v = (b = i.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : v.area, a = (C = (S = i.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : C.itemId;
      if (!r || !a || !this.actor) return;
      const n = ((q = this.actor.system) == null ? void 0 : q.abilities) ?? {}, p = (Array.isArray((D = n[r]) == null ? void 0 : D.items) ? n[r].items.slice() : []).filter((w) => w !== a);
      await this.actor.update({ [`system.abilities.${r}.items`]: p }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      var a, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.slot;
      r && (await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      var b, v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget, a = (((b = r == null ? void 0 : r.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const n = this.actor, l = (((v = r == null ? void 0 : r.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), p = {};
      l && (p[`system.weapons.${l}.itemId`] = "", p[`system.weapons.${l}.name`] = "", p[`system.weapons.${l}.damage`] = "", p[`system.weapons.${l}.bonus`] = ""), Object.keys(p).length && await n.update(p), await n.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      var a, n;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((n = (a = i.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      !r || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var p, b, v, S;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((b = (p = i.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : b.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = ((S = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : S.microchips) ?? {}, l = ["slot1", "slot2", "slot3"].find((C) => {
        var q;
        return (((q = a[C]) == null ? void 0 : q.itemId) ?? "").trim() === r;
      });
      l && await this.actor.update({
        [`system.gear.microchips.${l}.itemId`]: "",
        [`system.gear.microchips.${l}.name`]: "",
        [`system.gear.microchips.${l}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (i) => {
      var n, l;
      if (i.preventDefault(), !i.altKey) return;
      const r = (((l = (n = i.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const a = this.actor.items.get(r);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (h = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, d)) == null || h.forEach((i) => {
      var r;
      (((r = i.dataset) == null ? void 0 : r.itemId) ?? "").trim() && (i.draggable = !0);
    }), t.on("dragstart", d, (i) => {
      var p, b, v;
      const r = i.currentTarget, a = (b = (p = r == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) == null ? void 0 : b.trim();
      if (!a || !this.actor) return;
      const n = this.actor.items.get(a);
      if (!n) return;
      const l = n.uuid;
      i.dataTransfer && (i.dataTransfer.setData("text/plain", l), i.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: l })), i.dataTransfer.effectAllowed = "copyMove"), typeof ((v = i.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && r && i.dataTransfer.setDragImage(r, 0, 0);
    });
    const o = this, u = (i) => {
      if (!i) return;
      const r = o._getFormDataForUpdate(i);
      Object.keys(r).length !== 0 && o.actor.update(r).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, g = (i) => {
      var r, a, n;
      return i && (((a = (r = o.element) == null ? void 0 : r.contains) == null ? void 0 : a.call(r, i)) || o.id && ((n = i.closest) == null ? void 0 : n.call(i, `#${CSS.escape(o.id)}`)));
    };
    o._votvNpcBlur = (i) => {
      var p;
      const r = i.target;
      if (!r || !r.form) return;
      const a = r.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const n = r.form;
      if (!g(n)) return;
      const l = i.relatedTarget;
      l && (n.contains(l) || o.id && ((p = l.closest) != null && p.call(l, `#${CSS.escape(o.id)}`))) || u(n);
    }, document.body.addEventListener("blur", o._votvNpcBlur, !0), o._votvNpcItemHookRegistered || (o._votvNpcItemUpdateHook = (i, r, a) => {
      var n;
      o.actor && ((n = i == null ? void 0 : i.parent) == null ? void 0 : n.id) === o.actor.id && o.render(!0);
    }, Hooks.on("updateItem", o._votvNpcItemUpdateHook), o._votvNpcItemHookRegistered = !0);
  }
  _tearDown(s) {
    var t, c, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null, this._votvNpcItemHookRegistered = !1);
    const e = this.form ?? ((c = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : c.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const o = this._getFormDataForUpdate(e);
      Object.keys(o).length > 0 && this.actor.update(o).catch((u) => console.warn("VoidNpcSheet save on close failed", u));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, s);
  }
  /** Sebzés gomb: a fegyver sebzés formuláját dobja és chatbe küldi. */
  async _rollWeaponDamage(s, e = "") {
    var g, m, f, h, i, r, a, n, l, p;
    const t = this.actor;
    if (!t) return;
    const c = ((m = (g = t.items).get) == null ? void 0 : m.call(g, s)) ?? ((h = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : h.call(f, (b) => b.id === s));
    if (!c || c.type !== "Fegyver") return;
    let d = (((i = c.system) == null ? void 0 : i.damage) ?? "").trim();
    if (!d && e && (d = (((((r = t.system) == null ? void 0 : r.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (p = (a = ui.notifications) == null ? void 0 : a.warn) == null || p.call(a, ((l = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : l.call(n, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const o = new Roll(d);
    await o.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${c.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _onDropItem(s, e) {
    var f, h, i, r, a, n, l, p, b, v, S, C, q, D, w;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const c = ((L) => {
      var M;
      if (!L) return null;
      const A = L.uuid ?? L.documentUuid ?? ((M = L.data) == null ? void 0 : M.uuid) ?? (typeof L == "string" ? L : null);
      if (A) return A;
      if (typeof L == "object") {
        for (const H of Object.values(L))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!c) return (h = super._onDropItem) == null ? void 0 : h.call(this, s, e);
    const d = await fromUuid(c);
    if (!d || d.documentName !== "Item") return (i = super._onDropItem) == null ? void 0 : i.call(this, s, e);
    const o = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let L = d.id;
      if (((r = d.parent) == null ? void 0 : r.id) !== o.id) {
        const ne = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        L = ((a = (await o.createEmbeddedDocuments("Item", [ne]))[0]) == null ? void 0 : a.id) ?? L;
      }
      const A = (((n = d.system) == null ? void 0 : n.kind) ?? "passive").toString(), M = ((l = o.system) == null ? void 0 : l.abilities) ?? {}, H = A === "active" ? "active" : "passive", B = Array.isArray((p = M[H]) == null ? void 0 : p.items) ? M[H].items.slice() : Array.isArray(M[H]) ? M[H].slice() : [];
      B.includes(L) || B.push(L), await o.update({ [`system.abilities.${H}.items`]: B }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((b = d.parent) == null ? void 0 : b.id) === o.id) return;
    const u = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(u, { system: { ...u.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (v = (await o.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : v.id;
    if (d.type === "Fegyver" && m) {
      const L = ((S = o.system) == null ? void 0 : S.weapons) ?? {}, A = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (L.slotOrder ?? "").trim(), H = M ? M.split(/\s*,\s*/).filter((Q) => A.includes(Q)) : [];
      let B = A.find((Q) => {
        var pe;
        return !(((pe = L[Q]) == null ? void 0 : pe.itemId) ?? "").trim();
      });
      B || (B = A.find((Q) => !H.includes(Q)) ?? "slot1");
      const ne = H.includes(B) ? H : [...H, B].filter((Q) => A.includes(Q));
      await o.update({
        "system.weapons.slotOrder": ne.join(","),
        [`system.weapons.${B}.itemId`]: m,
        [`system.weapons.${B}.name`]: d.name ?? "",
        [`system.weapons.${B}.damage`]: ((C = d.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${B}.bonus`]: ((q = d.system) == null ? void 0 : q.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && m) {
      const L = ((w = (D = o.system) == null ? void 0 : D.gear) == null ? void 0 : w.microchips) ?? {}, M = ["slot1", "slot2", "slot3"].find((H) => {
        var B;
        return !(((B = L[H]) == null ? void 0 : B.itemId) ?? "").trim();
      });
      M && await o.update({
        [`system.gear.microchips.${M}.itemId`]: m,
        [`system.gear.microchips.${M}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, h, i, r, a, n;
    const e = (h = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : h.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((i = e.system) == null ? void 0 : i.kind) ?? "passive", c = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), o = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", u = c > 0 ? `<p><strong>KP:</strong> ${c}</p>` : "", g = d ? `<p>${d}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${o}</p>
      ${u}
      ${g}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((n = this.actor) == null ? void 0 : n.name) ?? void 0 }),
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
    let c, d = "";
    if (e.type === "MikroChip") {
      const a = ((h = e.system) == null ? void 0 : h.abilityType) ?? "passive";
      if (c = (a === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", a === "active") {
        const n = Number(((i = e.system) == null ? void 0 : i.replaceCost) ?? 0) || 0;
        n > 0 && (d = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      c = "Egyéb Információ";
    const o = t ? `<p>${t}</p>` : "", u = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${d}
      ${o}
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
    for (const c of s.elements) {
      if (!c.name || c.disabled || c.type === "radio" && !c.checked) continue;
      let d;
      c.type === "checkbox" ? d = c.checked : c.type === "number" ? d = c.value === "" ? 0 : Number(c.value) : d = c.value ?? "", d !== void 0 && foundry.utils.setProperty(e, c.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const c = e.name;
      (c === void 0 || typeof c == "string" && c.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
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
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, f, h, i, r, a, n;
      if (!e.isEditable || !((f = (m = o.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidWeaponSheet save failed", g));
    }, d = (o) => {
      var u, g, m;
      return o && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var g, m, f;
      const u = ((g = o.target) == null ? void 0 : g.form) ?? ((f = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
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
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, f, h, i, r, a, n;
      if (!e.isEditable || !((f = (m = o.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidShieldSheet save failed", g));
    }, d = (o) => {
      var u, g, m;
      return o && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var g, m, f;
      const u = ((g = o.target) == null ? void 0 : g.form) ?? ((f = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
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
var Ot;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, f, h, i, r, a, n;
      if (!e.isEditable || !((f = (m = o.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidMicrochipSheet save failed", g));
    }, d = (o) => {
      var u, g, m;
      return o && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var g, m, f;
      const u = ((g = o.target) == null ? void 0 : g.form) ?? ((f = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", !(t.name === "name" && typeof c == "string" && c.trim() === "") && foundry.utils.setProperty(e, t.name, c);
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
  form: foundry.utils.mergeObject(((Ot = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Ot.form) ?? {}, { submitOnChange: !1 })
}));
let Xe = te;
var Dt;
const se = class se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, f, h, i, r, a, n;
      if (!e.isEditable || !((f = (m = o.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidAbilitySheet save failed", g));
    }, d = (o) => {
      var u, g, m;
      return o && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var g, m, f;
      const u = ((g = o.target) == null ? void 0 : g.form) ?? ((f = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && c(u);
    }, e._votvInput = (o) => {
      var m;
      const u = o.target;
      if ((u == null ? void 0 : u.name) === "name") return;
      const g = (u == null ? void 0 : u.form) ?? ((m = u == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      d(g) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => c(g), 300));
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", !(t.name === "name" && typeof c == "string" && c.trim() === "") && foundry.utils.setProperty(e, t.name, c);
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
  form: foundry.utils.mergeObject(((Dt = R(se, se, "DEFAULT_OPTIONS")) == null ? void 0 : Dt.form) ?? {}, { submitOnChange: !0 })
}));
let Ze = se;
var _t;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, f, h, i, r, a, n;
      if (!e.isEditable || !((f = (m = o.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidTargySheet save failed", g));
    }, d = (o) => {
      var u, g, m;
      return o && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var g, m, f;
      const u = ((g = o.target) == null ? void 0 : g.form) ?? ((f = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
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
  form: foundry.utils.mergeObject(((_t = R(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : _t.form) ?? {}, { submitOnChange: !1 })
}));
let Ve = ie;
var Ct;
const re = class re extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(s) {
    const e = super._initializeApplicationOptions(s), t = (s == null ? void 0 : s.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const c = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(c).replace(/\./g, "-")}`;
    }
    return e;
  }
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    super._attachFrameListeners(s);
    const e = this;
    e._votvProfileImgClick = (o) => {
      var m, f, h, i, r, a, n;
      if (!e.isEditable || !((f = (m = o.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((i = (h = o.target) == null ? void 0 : h.getAttribute) == null ? void 0 : i.call(h, "data-edit")) !== "img") return;
      o.preventDefault(), o.stopPropagation();
      const u = ((n = (a = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : n.implementation) ?? globalThis.FilePicker;
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
    const c = (o) => {
      if (!o) return;
      const u = e._getFormDataForUpdate(o);
      Object.keys(u).length !== 0 && e.document.update(u).catch((g) => console.warn("VoidEgyebSheet save failed", g));
    }, d = (o) => {
      var u, g, m;
      return o && (((g = (u = e.element) == null ? void 0 : u.contains) == null ? void 0 : g.call(u, o)) || e.id && ((m = o.closest) == null ? void 0 : m.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var g, m, f;
      const u = ((g = o.target) == null ? void 0 : g.form) ?? ((f = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      d(u) && c(u);
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
      let c;
      t.type === "checkbox" ? c = t.checked : t.type === "number" ? c = t.value === "" ? 0 : Number(t.value) : c = t.value ?? "", foundry.utils.setProperty(e, t.name, c);
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
  var s, e, t, c, d;
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
    bar: ["", "resources.health"],
    value: []
  }, (c = CONFIG.Actor).typeLabels ?? (c.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", We, {
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
  const j = 500;
  Hooks.on("updateActor", (o, u, g, m) => {
    var v, S, C, q, D;
    const f = o == null ? void 0 : o.id;
    if (!f) return;
    const h = document.activeElement, i = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), r = [], a = (v = game.actors) == null ? void 0 : v.get(f);
    a != null && a.apps && r.push(...Array.from(a.apps));
    const n = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of n)
      ((S = w.document) == null ? void 0 : S.id) !== f || ((C = w.document) == null ? void 0 : C.documentName) !== "Actor" || ((q = w.constructor) == null ? void 0 : q.name) !== "VoidKarakterSheet" || r.includes(w) || r.push(w);
    if (i && r.some((w) => {
      const L = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return L && L.contains(h);
    })) return;
    const p = (D = game.votv) == null ? void 0 : D._lastKarakterSheetBlurSave, b = p && Date.now() - p.at < j ? p.appId : null;
    setTimeout(() => {
      for (const w of r)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (o, u, g, m) => {
    var r, a, n;
    const f = o == null ? void 0 : o.parent;
    if (!f || f.documentName !== "Actor" || f.type !== "Karakter" || o.type !== "Fegyver") return;
    const h = ((r = f.system) == null ? void 0 : r.weapons) ?? {}, i = {};
    for (const [l, p] of Object.entries(h)) {
      if (!l.startsWith("slot")) continue;
      const b = ((p == null ? void 0 : p.itemId) ?? "").trim();
      !b || b !== o.id || (i[`system.weapons.${l}.name`] = o.name ?? "", i[`system.weapons.${l}.damage`] = ((a = o.system) == null ? void 0 : a.damage) ?? "", i[`system.weapons.${l}.bonus`] = ((n = o.system) == null ? void 0 : n.bonus) ?? "");
    }
    Object.keys(i).length && f.update(i);
  });
});
Hooks.on("ready", () => {
  var j, s;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var o, u, g, m, f, h;
      if (!((u = (o = e.target) == null ? void 0 : o.closest) != null && u.call(o, "#actors"))) return;
      const t = (m = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : m.call(g, "[data-document-id]"), c = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!c) return;
      const d = c.includes(".") ? c.split(".").pop() : c;
      d && ((h = game.actors) != null && h.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (j = game.user) != null && j.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const c = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(c != null && c.create)) {
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
      }, o = await c.create(d);
      o && console.log("Vacuum of the Void | Default scene created:", o.id);
    } catch (c) {
      console.warn("Vacuum of the Void | Default scene creation failed:", c);
    }
  })(), (async () => {
    var o, u, g, m, f, h, i, r;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((o = game.actors) == null ? void 0 : o.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const n = a.prototypeToken, l = ((u = n == null ? void 0 : n.bar1) == null ? void 0 : u.attribute) ?? "", p = ((g = n == null ? void 0 : n.bar2) == null ? void 0 : g.attribute) ?? "";
        (l || p) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (n) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, n);
      }
    for (const a of game.scenes ?? []) {
      const n = ((m = a.tokens) == null ? void 0 : m.filter((l) => {
        var p;
        return ((p = l.actor) == null ? void 0 : p.type) === "Karakter";
      })) ?? [];
      for (const l of n)
        try {
          await l.update(e);
        } catch (p) {
          console.warn("Vacuum of the Void | Token update failed for", l.name, p);
        }
    }
    const c = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((f = game.actors) == null ? void 0 : f.filter((a) => a.type === "Npc")) ?? [];
    for (const a of d)
      try {
        const n = a.prototypeToken;
        ((h = n == null ? void 0 : n.bar1) != null && h.attribute || ((i = n == null ? void 0 : n.bar2) == null ? void 0 : i.attribute) !== "resources.health") && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (n) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", a.name, n);
      }
    for (const a of game.scenes ?? []) {
      const n = ((r = a.tokens) == null ? void 0 : r.filter((l) => {
        var p;
        return ((p = l.actor) == null ? void 0 : p.type) === "Npc";
      })) ?? [];
      for (const l of n)
        try {
          await l.update(c);
        } catch (p) {
          console.warn("Vacuum of the Void | NPC token update failed for", l.name, p);
        }
    }
  })();
});
Hooks.on("preCreateToken", (j, s, e) => {
  var o, u;
  const t = (o = game.votv) == null ? void 0 : o._dragSourceActorId, c = t ?? j.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = c ? (u = game.actors) == null ? void 0 : u.get(c) : null;
  if (d) {
    if (d.type === "Karakter") {
      j.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    d.type === "Npc" && j.updateSource({
      ...t ? { actorId: t } : {},
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    });
  }
});
Hooks.on("renderTokenHUD", (j, s, e) => {
  var d;
  const t = j == null ? void 0 : j.object, c = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((c == null ? void 0 : c.type) === "Karakter") {
    const o = s[0] ?? s;
    o != null && o.classList && o.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (j, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || j.updateSource({
    width: 3840,
    height: 2160,
    "background.src": qt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (j, s, e) => {
  var u, g;
  const t = ((u = j.flags) == null ? void 0 : u["vacuum-of-the-void"]) ?? {}, c = t.resultType, d = t.critLabel;
  if (!c && !d) return;
  const o = (g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, ".dice-roll");
  if (o && (c && o.classList.add(`votv-${c}`), d)) {
    const m = o.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = d;
      return;
    }
    const f = o.querySelector(".dice-total"), h = (f == null ? void 0 : f.parentElement) ?? o, i = document.createElement("div");
    i.className = `votv-crit-label votv-crit-label-${c || "neutral"}`, i.textContent = d, h.appendChild(i);
  }
});
export {
  We as V,
  ft as c
};
//# sourceMappingURL=vacuum-of-the-void-OJNAXyVF.mjs.map
