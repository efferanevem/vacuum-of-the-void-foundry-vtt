var Pt = Object.defineProperty;
var Ft = Object.getPrototypeOf;
var At = Reflect.get;
var Et = (F, i, e) => i in F ? Pt(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var j = (F, i, e) => Et(F, typeof i != "symbol" ? i + "" : i, e);
var A = (F, i, e) => At(Ft(F), e, i);
const { HTMLField: Nt, NumberField: D, SchemaField: P, StringField: k, BooleanField: U, ArrayField: le } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new P({
        name: new k({ required: !1, blank: !0, initial: "" }),
        player: new k({ required: !1, blank: !0, initial: "" }),
        level: new D({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new k({ required: !1, blank: !0, initial: "" }),
        assignment: new k({ required: !1, blank: !0, initial: "" }),
        subAssignment: new k({ required: !1, blank: !0, initial: "" }),
        background: new k({ required: !1, blank: !0, initial: "" }),
        languages: new k({ required: !1, blank: !0, initial: "" })
      }),
      resources: new P({
        health: new P({
          value: new D({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new D({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new P({
          head: new P({
            value: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          torso: new P({
            value: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          arms: new P({
            value: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          }),
          legs: new P({
            value: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new U({ required: !1, initial: !1 }),
            box2: new U({ required: !1, initial: !1 }),
            box3: new U({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new P({
          head: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new D({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new P({
          head: new D({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new D({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new D({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new D({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new P({
          value: new D({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new D({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new D({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      combat: new P({
        defense: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        defenseBonus: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenProtection: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        speedBonus: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        givenSpeed: new D({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      skills: new P({
        deception: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        quickThinking: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        combatTraining: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new D({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new D({ required: !1, integer: !0, min: 0, initial: 0 })
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
            quantity: new D({ required: !1, integer: !0, min: 0, initial: 1 }),
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
const { BooleanField: Mt, NumberField: Jt, StringField: se } = foundry.data.fields;
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
  let r = !1;
  const d = (s, l = 1) => {
    if (!Array.isArray(s)) return;
    let a = l;
    for (const o of s) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, a);
        continue;
      }
      if (typeof o.operator == "string") {
        a = o.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof o.faces == "number" ? o.faces : void 0, h = Array.isArray(o.results) ? o.results : null;
      if (!u || !h || u === 8 || u !== 6) continue;
      const b = !r && a >= 0 && (o.number === 3 || o.number === "3") ? (r = !0, i) : a >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && b.push(I);
      }
    }
  };
  d(F.terms, 1);
  const n = i.filter((s) => s === 6).length, c = i.filter((s) => s === 1).length, y = e.filter((s) => s === 6).length, p = t.filter((s) => s === 6).length, g = n + y, f = c + p;
  return g > 0 && g === f ? { resultType: null, label: null } : g >= 3 ? { resultType: "critical", label: "Brutális Siker" } : g === 2 ? { resultType: "critical", label: "Kritikus Siker" } : f >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : f === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var at, ot, ct, lt;
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
    var r, d, n, c;
    if (!i) return { form: null, windowContent: null };
    const e = ((r = i.querySelector) == null ? void 0 : r.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((n = i.querySelector) == null ? void 0 : n.call(i, ".votv-scroll")) ?? ((c = i.querySelector) == null ? void 0 : c.call(i, ".window-content")) ?? null;
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
    const d = this.element, n = this.form ?? this.element;
    let c = { scrollState: {}, focus: null };
    if (d) {
      c.scrollState = this._saveScrollState(d);
      const u = document.activeElement, h = n.contains(u), b = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && b && (c.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const y = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 150);
    const p = this.element, g = this.form ?? this.element, f = c.scrollState, s = c.focus, l = typeof (f == null ? void 0 : f.formScrollTop) == "number" || typeof (f == null ? void 0 : f.windowScrollTop) == "number", a = () => {
      var u, h;
      if (this._applyScrollState(p, f), (s == null ? void 0 : s.name) != null || (s == null ? void 0 : s.id) != null) {
        const b = ((u = g.querySelector) == null ? void 0 : u.call(g, s.id ? `#${CSS.escape(s.id)}` : null)) ?? (s.name ? (h = g.querySelector) == null ? void 0 : h.call(g, `[name="${CSS.escape(s.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = s.selectionStart ?? 0, b.selectionEnd = s.selectionEnd ?? s.selectionStart ?? 0));
      }
      this._applyScrollState(p, f);
    };
    return (l || s) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), y;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), r = Number(e);
    if (r <= 0 || t <= 0) return 0;
    const d = Math.floor(r / 3), n = Math.floor(2 * r / 3);
    return t <= d ? 1 : t <= n ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, r, d;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var c;
        return n.type === "Pancel" && ((c = n.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of i) {
      const c = String(((d = n.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), y = Number(c);
      Number.isFinite(y) && (e += y);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, r, d;
    const i = (((r = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : r.contents) ?? []).filter(
      (n) => {
        var c;
        return n.type === "Pancel" && ((c = n.system) == null ? void 0 : c.equipped) === !0;
      }
    );
    let e = 0;
    for (const n of i) {
      const c = String(((d = n.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), y = Number(c);
      Number.isFinite(y) && (e += y);
    }
    return e;
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. */
  _writeEffectiveGivenSpeed(i = null) {
    var f, s, l, a, o, u, h, b, v;
    const e = i ?? this.form ?? this.element;
    let t = (f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const r = ((l = (s = this.actor) == null ? void 0 : s.system) == null ? void 0 : l.resources) ?? {}, d = ((o = (a = r.hitLocations) == null ? void 0 : a.legs) == null ? void 0 : o.value) ?? 0, n = ((u = r.currentHealth) == null ? void 0 : u.legs) ?? 0, c = x._healthStatusFromRatio(n, d), y = Number(((v = (b = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : b.combat) == null ? void 0 : v.givenSpeed) ?? 0) || 0;
    let p;
    c === 0 ? p = 0 : c === 1 ? p = -6 : c === 2 ? p = -3 : p = y;
    const g = this._getTotalArmorSpeedPenalty();
    p += g, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + felszerelt páncélok védelmi bónusza. */
  _writeEffectiveGivenProtection(i = null) {
    var n, c, y, p;
    const e = i ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const d = (Number(((p = (y = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : y.combat) == null ? void 0 : p.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    t.textContent = String(d);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var n, c, y, p;
    const e = x.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((n = this.actor.system) == null ? void 0 : n.resources) ?? {}, r = ((y = (c = t.hitLocations) == null ? void 0 : c[e]) == null ? void 0 : y.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return x._healthStatusFromRatio(d, r);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var c, y, p, g;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const r = ((c = i == null ? void 0 : i.system) == null ? void 0 : c.resources) ?? {}, d = ((p = (y = r.hitLocations) == null ? void 0 : y[t]) == null ? void 0 : p.value) ?? 0, n = ((g = r.currentHealth) == null ? void 0 : g[t]) ?? 0;
    return x._healthStatusFromRatio(n, d);
  }
  async _prepareContext(i) {
    var Ee, Ne, $e, xe, je, Me, Re, Ke, Ue, Be, He, Ge, ze, We, Ye, Je, Qe, Xe;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number(($e = (Ne = (Ee = this.actor.system) == null ? void 0 : Ee.resources) == null ? void 0 : Ne.stress) == null ? void 0 : $e.value) || 0;
    e.stressOver10 = t > 10;
    const r = this.actor.system.resources ?? {}, d = r.hitLocations ?? {}, n = r.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const m of c) {
      const S = ((xe = d[m]) == null ? void 0 : xe.value) ?? 0, T = n[m] ?? 0;
      e.computedHealthStatus[m] = x._healthStatusFromRatio(T, S);
    }
    const y = (Number(n.head) || 0) === 0, g = ["torso", "arms", "legs"].filter((m) => (Number(n[m]) || 0) === 0).length;
    e.showDeathSkull = y || g >= 2;
    const f = e.computedHealthStatus.legs ?? 3, s = Number(((Me = (je = this.actor.system) == null ? void 0 : je.combat) == null ? void 0 : Me.givenSpeed) ?? 0) || 0;
    let l;
    f === 0 ? l = 0 : f === 1 ? l = -6 : f === 2 ? l = -3 : l = s;
    const a = this._getTotalArmorSpeedPenalty();
    l += a, e.effectiveGivenSpeed = l;
    const u = (Number(((Ke = (Re = this.actor.system) == null ? void 0 : Re.combat) == null ? void 0 : Ke.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: l, givenProtection: u } },
      { inplace: !1 }
    );
    const h = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [m, S] of Object.entries(h)) {
      const T = e.computedHealthStatus[S];
      e.skillHealthStatus[m] = T, e.skillDisabled[m] = T === 0 ? " disabled" : "", e.skillHasHealthTint[m] = !0;
    }
    const b = this.actor.system.weapons ?? {}, v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = (b.slotOrder ?? "").trim(), _ = I ? I.split(/\s*,\s*/).filter((m) => v.includes(m)) : [], C = (Ue = this.actor.system.gear) == null ? void 0 : Ue.microchips, q = C && typeof C == "object" && !Array.isArray(C) ? C : {}, w = (((Be = q.slot1) == null ? void 0 : Be.itemId) ?? "").trim(), E = (((He = q.slot2) == null ? void 0 : He.itemId) ?? "").trim(), N = (((Ge = q.slot3) == null ? void 0 : Ge.itemId) ?? "").trim(), wt = this.actor.items.contents.filter((m) => m.type !== "Kepesseg" && m.type !== "ability").slice().sort((m, S) => {
      const T = typeof m.sort == "number" ? m.sort : 0, O = typeof S.sort == "number" ? S.sort : 0;
      return T - O;
    }).map((m) => {
      var X, te, ie, Z, V, ae;
      const S = m.type === "Fegyver", T = m.type === "MikroChip";
      let O = 0, L = "", K = null;
      for (let re = 0; re < _.length; re++) {
        const oe = _[re];
        if ((((X = b[oe]) == null ? void 0 : X.itemId) ?? "") === m.id) {
          O = re + 1, L = ((te = b[oe]) == null ? void 0 : te.bonus) ?? "", K = oe;
          break;
        }
      }
      let R = null;
      T && (w === m.id ? R = "slot1" : E === m.id ? R = "slot2" : N === m.id && (R = "slot3"));
      const ne = S && ((ie = m.system) != null && ie.damage) ? m.system.damage : "", H = S && typeof ((Z = m.system) == null ? void 0 : Z.range) == "string" ? (m.system.range || "").trim() : "", ee = K ? Number((V = b[K]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        type: m.type,
        isWeapon: S,
        slotAssignment: O,
        slotBonus: L,
        slotKey: K,
        microchipSlotKey: R,
        isEquipped: !!(K || R),
        damage: ne,
        rangeStr: H,
        slotBonusNum: ee,
        quantity: Number(((ae = m.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = wt;
    const de = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((m) => m.type === "Fegyver"), Oe = de.map((m) => ({ id: m.id, name: m.name, img: m.img }));
    e.weaponItems = Oe;
    const _e = "— Nincs fegyver —", It = _.filter((m) => {
      const T = ((b[m] ?? {}).itemId ?? "").trim();
      return T ? !!de.find((L) => L.id === T) : !1;
    });
    e.weaponSlots = It.map((m, S) => {
      const T = b[m] ?? {}, O = (T.itemId ?? "").trim(), L = Oe.find((K) => K.id === O);
      return {
        slotKey: m,
        itemId: O,
        slotNum: S + 1,
        displayName: (L == null ? void 0 : L.name) || T.name || _e,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(T.bonus) || 0,
        damage: T.damage ?? ""
      };
    });
    const Tt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, St = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = de.map((m) => {
      var Ze, Ve, et;
      const S = m.id;
      let T = null, O = {};
      for (const fe of _)
        if ((((Ze = b[fe]) == null ? void 0 : Ze.itemId) ?? "").trim() === S) {
          T = fe, O = b[fe] ?? {};
          break;
        }
      const L = !!T, K = ((Ve = m.system) == null ? void 0 : Ve.equipped) !== void 0 && ((et = m.system) == null ? void 0 : et.equipped) !== null ? !!m.system.equipped : L, R = (m == null ? void 0 : m.system) ?? {}, ne = typeof R.range == "string" ? (R.range || "").trim() : "", H = R.type ?? "", ee = (Tt[H] ?? H) || "—", X = R.size ?? "", te = (St[X] ?? X) || "", ie = [ee, te].filter(Boolean).join(", ") || ee || "—", Z = H === "projectile" || X === "thrown", V = R.quantity, ae = V != null ? String(V).trim() : "1", re = String(O.bonus ?? "").trim(), oe = String(R.bonus ?? "").trim(), Lt = re || oe || "0";
      return {
        slotKey: T ?? "",
        itemId: S,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? _e,
        img: (m == null ? void 0 : m.img) ?? "",
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
    const Ot = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((m) => m.type === "Pancel");
    e.armorTable = Ot.map((m) => {
      var O, L;
      const S = (m == null ? void 0 : m.system) ?? {}, T = ((O = m.system) == null ? void 0 : O.equipped) !== void 0 && ((L = m.system) == null ? void 0 : L.equipped) !== null ? !!m.system.equipped : !1;
      return {
        itemId: m.id,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        protectionBonus: (S.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (S.speedPenalty ?? "").toString().trim() || "—",
        level: (S.level ?? "").toString().trim() || "—",
        special: (S.special ?? S.other ?? "").toString().trim() || "—",
        equipped: T
      };
    });
    const _t = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((m) => m.type === "Targy");
    e.itemsTable = _t.map((m) => {
      const S = (m == null ? void 0 : m.system) ?? {}, T = (S.description ?? "").trim(), O = T ? T.length > 60 ? T.slice(0, 57) + "…" : T : "—", L = S.quantity != null ? String(S.quantity).trim() : "1";
      return {
        itemId: m.id,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        quantity: L,
        description: O
      };
    });
    const Dt = (((Je = this.actor.items) == null ? void 0 : Je.contents) ?? []).filter((m) => m.type === "Egyeb");
    e.egyebList = Dt.map((m) => {
      const T = (((m == null ? void 0 : m.system) ?? {}).description ?? "").trim(), O = T ? T.length > 80 ? T.slice(0, 77) + "…" : T : "";
      return {
        itemId: m.id,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        description: O
      };
    });
    const me = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).filter((m) => m.type === "MikroChip"), ce = me.map((m) => ({ id: m.id, name: m.name, img: m.img })), De = "— Nincs Mikro-Chip —", qe = ["slot1", "slot2", "slot3"], pe = (m) => {
      var T, O, L;
      const S = [];
      return m !== 1 && S.push((((T = q.slot1) == null ? void 0 : T.itemId) ?? "").trim()), m !== 2 && S.push((((O = q.slot2) == null ? void 0 : O.itemId) ?? "").trim()), m !== 3 && S.push((((L = q.slot3) == null ? void 0 : L.itemId) ?? "").trim()), S.filter(Boolean);
    };
    e.microchipItemsSlot1 = ce.filter((m) => !pe(1).includes(m.id)), e.microchipItemsSlot2 = ce.filter((m) => !pe(2).includes(m.id)), e.microchipItemsSlot3 = ce.filter((m) => !pe(3).includes(m.id)), e.microchipSlots = qe.map((m) => {
      const S = q[m] ?? {}, T = (S.itemId ?? "").trim(), O = me.find((L) => L.id === T);
      return {
        slotKey: m,
        itemId: T,
        displayName: (O == null ? void 0 : O.name) || S.name || De,
        img: (O == null ? void 0 : O.img) || "",
        active: S.active === !0
      };
    }), ["1", "2", "3"].forEach((m) => {
      const S = `slot${m}`, T = q[S] ?? {}, O = (T.itemId ?? "").trim(), L = ce.find((K) => K.id === O);
      e[`microchip${m}ItemId`] = O, e[`microchip${m}DisplayName`] = (L == null ? void 0 : L.name) || T.name || De, e[`microchip${m}Img`] = (L == null ? void 0 : L.img) || "";
    }), e.microchipsTable = me.map((m) => {
      var X, te, ie, Z;
      const S = m.id;
      let T = null;
      for (const V of qe)
        if ((((X = q[V]) == null ? void 0 : X.itemId) ?? "").trim() === S) {
          T = V;
          break;
        }
      const O = !!T, L = ((te = m == null ? void 0 : m.system) == null ? void 0 : te.abilityType) ?? "", K = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", R = L === "active", ne = Number((ie = m == null ? void 0 : m.system) == null ? void 0 : ie.replaceCost) >= 0 ? Number(m.system.replaceCost) : 0, H = (((Z = m == null ? void 0 : m.system) == null ? void 0 : Z.description) ?? "").trim(), ee = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
      return {
        itemId: S,
        actorId: this.actor.id,
        name: (m == null ? void 0 : m.name) ?? "—",
        img: (m == null ? void 0 : m.img) ?? "",
        typeLabel: K,
        description: ee,
        kp: ne,
        isActive: R,
        slotKey: T ?? "",
        equipped: O
      };
    });
    const Ce = this.actor.system.abilities ?? {}, qt = (((Xe = this.actor.items) == null ? void 0 : Xe.contents) ?? []).map((m) => {
      var S, T, O;
      return {
        id: m.id,
        name: m.name,
        img: m.img,
        kind: ((S = m.system) == null ? void 0 : S.kind) ?? "passive",
        description: ((T = m.system) == null ? void 0 : T.description) ?? "",
        kp: Number(((O = m.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), Le = new Map(qt.map((m) => [m.id, m])), Ct = "— Nincs képesség —", Pe = (m) => {
      const S = Ce[m] ?? {}, T = (S.itemId ?? "").trim(), O = T ? Le.get(T) : null, L = (O == null ? void 0 : O.description) ?? "", K = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: T,
        displayName: (O == null ? void 0 : O.name) || S.name || Ct,
        img: (O == null ? void 0 : O.img) || "",
        description: L,
        kp: K
      };
    };
    e.abilityFajiSlot = Pe("faji"), e.abilityHatterSlot = Pe("hatter");
    const Fe = (m) => {
      const S = Ce[m];
      return S ? Array.isArray(S == null ? void 0 : S.items) ? S.items : Array.isArray(S) ? S : [] : [];
    }, Ae = (m) => m.map((S) => {
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
    var g, f;
    super._attachFrameListeners(i);
    const e = this.form ?? ((g = i == null ? void 0 : i.querySelector) == null ? void 0 : g.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const a = (s.currentTarget.dataset.slot ?? "").trim();
      if (!a) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-CD7KOOXY.mjs");
      o(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var o, u, h;
      s.preventDefault(), s.stopPropagation();
      const l = s.currentTarget;
      let a = (l.dataset.itemId ?? "").trim();
      if (!a) {
        const b = (l.dataset.slot ?? "").trim();
        if (!b) return;
        a = (((((u = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : u.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      a && await this._rollWeaponDamage(a, ((h = l.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), !this.isEditable) return;
    const r = (s) => {
      var o;
      const l = s ? s.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!l) return;
      const a = Number(l.value) || 0;
      l.classList.toggle("karakter-stress-over-10", a > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', r);
    const d = (f = e.querySelector) == null ? void 0 : f.call(e, 'input[name="system.resources.stress.value"]');
    d && r({ currentTarget: d }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var o, u, h;
      s.preventDefault(), s.stopPropagation();
      const l = ((h = (u = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var h;
      s.preventDefault();
      const l = s.currentTarget, a = l.dataset.skill, o = ((h = l.textContent) == null ? void 0 : h.trim()) || a, { openRollSheetForSkill: u } = await import("./roll-sheet-CD7KOOXY.mjs");
      u(this.actor, a, o);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var v, I, _, C, q, w, E;
      s.preventDefault();
      const a = s.currentTarget.closest(".karakter-weapon-slot"), o = a == null ? void 0 : a.dataset.slot;
      if (!o) return;
      const h = (((I = (((v = this.actor.system) == null ? void 0 : v.weapons) ?? {})[o]) == null ? void 0 : I.itemId) ?? "").trim();
      if (!h) return;
      const b = ((C = (_ = this.actor.items).get) == null ? void 0 : C.call(_, h)) ?? ((w = (q = this.actor.items.contents) == null ? void 0 : q.find) == null ? void 0 : w.call(q, (N) => N.id === h));
      (E = b == null ? void 0 : b.sheet) == null || E.render(!0);
    });
    const n = (s, l) => {
      var u;
      const a = s.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      if (o) {
        if (s.classList.contains("karakter-weapon-label") && (l.altKey || l.shiftKey || l.ctrlKey || l.metaKey)) {
          const h = s.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (u = o.sheet) == null || u.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), n(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), n(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const l = s.currentTarget, a = l.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      if (!o) return;
      let u = Number(l.value);
      (!Number.isFinite(u) || u < 0) && (u = 0), await o.update({ "system.quantity": u });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor, u = o.items.get(a), h = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = v ? v.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], C = _.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === a;
        });
        if (C) {
          const q = _.filter((w) => w !== C);
          h["system.weapons.slotOrder"] = q.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await o.update(h), await o.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var C, q;
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const o = this.actor.items.get(a);
      if (!o || o.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, h = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = h ? h.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], I = v.find((w) => {
        var E;
        return (((E = u[w]) == null ? void 0 : E.itemId) ?? "").trim() === a;
      }) ?? null;
      if (l.checked) {
        if (I) return;
        let w = v.find((N) => {
          var M;
          return !((M = u[N]) != null && M.itemId);
        });
        const E = new Set(v);
        if (!w) {
          const N = b.find((M) => !E.has(M));
          if (!N) return;
          w = N, v.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${w}.damage`]: ((C = o == null ? void 0 : o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = o == null ? void 0 : o.system) == null ? void 0 : q.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (I) {
        const w = v.filter((E) => E !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const l = s.currentTarget;
      if (l.disabled) return;
      const a = l.closest(".karakter-microchip-slot-select-wrap"), o = a == null ? void 0 : a.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && a && a.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var w;
      s.preventDefault();
      const l = s.currentTarget, a = l.closest(".karakter-microchip-slot-select-wrap"), o = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display"), u = o == null ? void 0 : o.dataset.slot;
      if (!u) return;
      const h = (l.dataset.itemId ?? "").trim(), b = (l.dataset.itemName ?? ((w = l.textContent) == null ? void 0 : w.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", v = (l.dataset.itemImg ?? "").trim(), I = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-display-text");
      I && (I.textContent = b);
      let _ = a == null ? void 0 : a.querySelector(".karakter-microchip-slot-thumb");
      v ? (_ || (_ = document.createElement("img"), _.className = "karakter-microchip-slot-thumb", _.alt = "", o == null || o.insertBefore(_, I)), _.src = v, _.style.display = "") : _ && _.remove(), a == null || a.classList.remove("karakter-microchip-slot-open");
      const C = h ? this.actor.items.get(h) : null, q = {
        [`system.gear.microchips.${u}.itemId`]: h,
        [`system.gear.microchips.${u}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      h && (q[`system.gear.microchips.${u}.active`] = !0), await this.actor.update(q);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var b, v;
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      if (!a || a.type !== "MikroChip") return;
      const o = ((v = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : v.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((I) => {
        var _;
        return (((_ = o[I]) == null ? void 0 : _.itemId) ?? "").trim() === l;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-microchip-slot-active", async (s) => {
      const l = s.currentTarget.dataset.slot;
      if (!l) return;
      const a = s.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${l}.active`]: a }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((s, l) => {
      const a = l.dataset.slot;
      l.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, a)), l.addEventListener("dragleave", (o) => {
        var u;
        return (u = o.currentTarget) == null ? void 0 : u.classList.remove("karakter-microchip-slot-drag-over");
      }), l.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, a));
    }), t.find(".karakter-ability-slot-single").each((s, l) => {
      const a = l.dataset.slot;
      a && (l.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, a)), l.addEventListener("dragleave", (o) => {
        var u;
        return (u = o.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-slot-drag-over");
      }), l.addEventListener("drop", (o) => {
        var u;
        (u = o.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, l) => {
      const a = l.dataset.area;
      a && (l.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, a)), l.addEventListener("dragleave", (o) => {
        var u;
        return (u = o.currentTarget) == null ? void 0 : u.classList.remove("karakter-ability-area-drag-over");
      }), l.addEventListener("drop", (o) => {
        var u;
        (u = o.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.slot;
      l && await this.actor.update({
        [`system.abilities.${l}.itemId`]: "",
        [`system.abilities.${l}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var b;
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.area, a = s.currentTarget.dataset.itemId;
      if (!l || !a) return;
      const o = this.actor.system.abilities ?? {}, h = (Array.isArray((b = o[l]) == null ? void 0 : b.items) ? o[l].items.slice() : []).filter((v) => v !== a);
      await this.actor.update({ [`system.abilities.${l}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var u;
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      (u = o == null ? void 0 : o.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      a && await this._postAbilityToChat(a);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(a) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(a));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const o = this.actor.items.get(a);
      if (!o || o.type !== "Fegyver") return;
      const u = (l.value ?? "").trim();
      await o.update({ "system.quantity": u }), setTimeout(() => {
        const h = this.form ?? this.element, b = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "Pancel" || (await o.update({ "system.equipped": l.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var C, q;
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const o = this.actor.items.get(a);
      if (!o || o.type !== "Fegyver") return;
      const u = this.actor.system.weapons ?? {}, h = (u.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], v = h ? h.split(/\s*,\s*/).filter((w) => b.includes(w)) : [], I = v.find((w) => {
        var E;
        return (((E = u[w]) == null ? void 0 : E.itemId) ?? "").trim() === a;
      }) ?? null;
      if (l.checked) {
        if (I) return;
        let w = v.find((N) => {
          var M;
          return !((M = u[N]) != null && M.itemId);
        });
        const E = new Set(v);
        if (!w) {
          const N = b.find((M) => !E.has(M));
          if (!N) return;
          w = N, v.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": v.join(","),
          [`system.weapons.${w}.itemId`]: a,
          [`system.weapons.${w}.name`]: o.name ?? "",
          [`system.weapons.${w}.damage`]: ((C = o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${w}.bonus`]: ((q = o.system) == null ? void 0 : q.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (I) {
        const w = v.filter((E) => E !== I);
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${I}.itemId`]: "",
          [`system.weapons.${I}.name`]: "",
          [`system.weapons.${I}.damage`]: "",
          [`system.weapons.${I}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const a = s.currentTarget.dataset.itemId;
      if (!a) return;
      const o = this.actor, u = o.items.get(a), h = {};
      if ((u == null ? void 0 : u.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, v = (b.slotOrder ?? "").trim(), I = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = v ? v.split(/\s*,\s*/).filter((q) => I.includes(q)) : [], C = _.find((q) => {
          var w;
          return (((w = b[q]) == null ? void 0 : w.itemId) ?? "").trim() === a;
        });
        if (C) {
          const q = _.filter((w) => w !== C);
          h["system.weapons.slotOrder"] = q.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await o.update(h), await o.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((s, l) => {
      this._resizeWeaponQuantityInput(l);
    }), t.on("change", ".karakter-item-quantity-input", async (s) => {
      const l = s.currentTarget, a = (l.dataset.itemId ?? "").trim();
      if (!a) return;
      const o = this.actor.items.get(a);
      if (!o || o.type !== "Targy") return;
      const u = (l.value ?? "").trim();
      await o.update({ "system.quantity": u }), setTimeout(() => {
        const h = this.form ?? this.element, b = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${a}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const l = s.currentTarget.dataset.itemId;
      if (!l) return;
      const a = this.actor.items.get(l);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    });
    const c = this, y = (s) => {
      var o, u, h, b;
      if (!s) return;
      const l = c._getFormDataForUpdate(s);
      if (Object.keys(l).length === 0) return;
      const a = ((u = (o = l.system) == null ? void 0 : o.resources) == null ? void 0 : u.currentHealth) != null || ((b = (h = l.system) == null ? void 0 : h.resources) == null ? void 0 : b.hitLocations) != null;
      c.actor.update(l).then(() => {
        a && setTimeout(() => c.render(!0), 260);
      }).catch((v) => console.warn("VoidKarakterSheet save failed", v));
    }, p = (s) => {
      var l, a, o;
      return s && (((a = (l = c.element) == null ? void 0 : l.contains) == null ? void 0 : a.call(l, s)) || c.id && ((o = s.closest) == null ? void 0 : o.call(s, `#${CSS.escape(c.id)}`)));
    };
    c._votvBlur = (s) => {
      var h;
      const l = s.target;
      if (!l || !l.form) return;
      const a = l.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const o = l.form;
      if (!p(o)) return;
      const u = s.relatedTarget;
      u && (o.contains(u) || c.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(c.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: c.id, at: Date.now() }), y(o));
    }, document.body.addEventListener("blur", c._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var c, y, p;
    const e = {};
    for (const g of i.elements) {
      if (!g.name || g.disabled || g.type === "radio" && !g.checked || g.name.startsWith("system.resources.healthStatus.")) continue;
      let f;
      g.type === "checkbox" ? f = g.checked : g.type === "number" ? f = g.value === "" ? 0 : Number(g.value) : f = g.value ?? "", foundry.utils.setProperty(e, g.name, f);
    }
    const t = foundry.utils.mergeObject(
      ((c = this.actor.system) == null ? void 0 : c.resources) ?? {},
      ((y = foundry.utils.expandObject(e).system) == null ? void 0 : y.resources) ?? {}
    ), r = t.hitLocations ?? {}, d = t.currentHealth ?? {}, n = ["head", "torso", "arms", "legs"];
    for (const g of n) {
      const f = ((p = r[g]) == null ? void 0 : p.value) ?? 0, s = d[g] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${g}`, x._healthStatusFromRatio(s, f));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, r, d, n, c, y, p, g, f, s, l, a;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            o = u;
            break;
          }
      }
      if (o) {
        const u = await fromUuid(o);
        if (u && u.documentName === "Item" && (u.type === "Kepesseg" || u.type === "ability")) {
          let h = u.id;
          if (((r = u.parent) == null ? void 0 : r.id) !== this.actor.id) {
            const C = foundry.utils.mergeObject(u.toObject(), { type: "Kepesseg" });
            h = ((d = (await this.actor.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : d.id) ?? h;
          }
          const b = (((n = u.system) == null ? void 0 : n.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": h,
              "system.abilities.faji.name": u.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": h,
              "system.abilities.hatter.name": u.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", _ = Array.isArray((c = v[I]) == null ? void 0 : c.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          _.includes(h) || _.push(h), await this.actor.update({ [`system.abilities.${I}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((y = e.data) == null ? void 0 : y.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const u of Object.values(e))
          if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
            o = u;
            break;
          }
      }
      if (o) {
        const u = await fromUuid(o);
        if (u && u.documentName === "Item" && u.type === "Fegyver") {
          const h = this.actor, b = ((p = u.parent) == null ? void 0 : p.id) !== h.id;
          let v = u.id;
          if (b) {
            const I = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            v = ((g = (await h.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : g.id) ?? v;
          }
          if (b) {
            const I = ((f = h.system) == null ? void 0 : f.weapons) ?? {}, _ = (I.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = _ ? _.split(/\s*,\s*/).filter((E) => C.includes(E)) : [], w = q.filter((E) => {
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
        if (u && u.documentName === "Item" && u.type === "Pancel") {
          const h = this.actor;
          if (((s = u.parent) == null ? void 0 : s.id) !== h.id) {
            const b = foundry.utils.mergeObject(u.toObject(), { system: { ...u.toObject().system ?? {}, equipped: !1 } });
            await h.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (u && u.documentName === "Item" && u.type === "MikroChip") {
          const h = this.actor;
          ((l = u.parent) == null ? void 0 : l.id) !== h.id && await h.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
        if (u && u.documentName === "Item" && (u.type === "Targy" || u.type === "Egyeb")) {
          const h = this.actor;
          ((a = u.parent) == null ? void 0 : a.id) !== h.id && await h.createEmbeddedDocuments("Item", [u.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, n, c;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var c, y, p, g, f, s;
    i.preventDefault(), i.stopPropagation(), (c = i.currentTarget) == null || c.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((r == null ? void 0 : r.type) !== "Item" || !(r != null && r.uuid)) return;
    const d = await fromUuid(r.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((g = d.parent) == null ? void 0 : g.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [l]);
      return;
    }
    const n = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: n,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((f = d.system) == null ? void 0 : f.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((s = d.system) == null ? void 0 : s.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
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
    var p, g;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((g = i.dataTransfer) == null ? void 0 : g.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((f, s) => {
      const l = typeof f.sort == "number" ? f.sort : 0, a = typeof s.sort == "number" ? s.sort : 0;
      return l - a;
    }).map((f) => f.id), n = d.indexOf(t), c = d.indexOf(e);
    if (n === -1 || c === -1) return;
    d.splice(n, 1), d.splice(c, 0, t);
    const y = d.map((f, s) => ({
      _id: f,
      sort: (s + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", y);
  }
  _onInventoryAreaDragOver(i) {
    var r, d, n;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-actions-table-drag-over"));
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
    var y, p, g;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let r, d = "";
    if (e.type === "MikroChip") {
      const f = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (r = (f === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", f === "active") {
        const s = Number(((g = e.system) == null ? void 0 : g.replaceCost) ?? 0) || 0;
        s > 0 && (d = `<p><strong>KP:</strong> ${s}</p>`);
      }
    } else
      r = "Egyéb Információ";
    const n = t ? `<p>${t}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${d}
      ${n}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: c,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var g, f, s;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", r = Number(((f = e.system) == null ? void 0 : f.kp) ?? 0) || 0, d = (((s = e.system) == null ? void 0 : s.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", y = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${c}
      ${y}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var r, d;
    const e = ((r = i.dataTransfer) == null ? void 0 : r.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var n, c, y;
    i.preventDefault(), (n = i.currentTarget) == null || n.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((c = r.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const p = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : y.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: r.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var r;
    this._parseAbilityDrop(i) && (i.preventDefault(), (r = i.currentTarget) == null || r.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var y, p, g, f;
    i.preventDefault(), (y = i.currentTarget) == null || y.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const r = await fromUuid(t.uuid);
    if (!r || r.type !== "Kepesseg" && r.type !== "ability") return;
    let d = r.id;
    if (((p = r.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const s = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
      d = ((g = (await this.actor.createEmbeddedDocuments("Item", [s]))[0]) == null ? void 0 : g.id) ?? d;
    }
    const n = this.actor.system.abilities ?? {}, c = Array.isArray((f = n[e]) == null ? void 0 : f.items) ? n[e].items.slice() : Array.isArray(n[e]) ? n[e].slice() : [];
    c.includes(d) || c.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: c });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, n, c;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((n = i.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let r;
    try {
      r = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (r == null ? void 0 : r.type) === "Item" && (i.preventDefault(), (c = i.currentTarget) == null || c.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var c, y, p, g, f;
    i.preventDefault(), (c = i.currentTarget) == null || c.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    ((g = d.parent) == null ? void 0 : g.id) !== this.actor.id && (n = ((f = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : f.id) ?? n), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: n,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const r = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(r) || 0;
    const n = this._getSkillHealthStatus(i);
    n === 1 ? d -= 6 : n === 2 && (d -= 3);
    const y = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(y);
    await p.evaluate({ async: !0 });
    const { resultType: g, label: f } = nt(p), s = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: f } },
      rollMode: s
    });
  }
  async _rollMorale() {
    var d;
    const i = Number(((d = this.actor.system.resources) == null ? void 0 : d.morale) ?? 0) || 0;
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
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, r = this.actor.system.skills ?? {}, d = this.actor.items.filter((I) => I.type === "Fegyver");
    let n = null;
    t.itemId && (n = d.find((I) => I.id === t.itemId) ?? null);
    const c = n && n.name || t.name || `Fegyver (${i})`, y = Number(t.bonus || 0) || 0, g = (((v = n == null ? void 0 : n.system) == null ? void 0 : v.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", f = Number(r[g] || 0) || 0, s = y + f, a = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, o = new Roll(a);
    await o.evaluate({ async: !0 });
    const { resultType: u, label: h } = nt(o), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${c} – találat`,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: h } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var y, p, g, f, s, l, a, o, u, h;
    const t = this.actor;
    if (!t) return;
    let r = ((p = (y = t.items).get) == null ? void 0 : p.call(y, i)) ?? ((f = (g = t.items.contents) == null ? void 0 : g.find) == null ? void 0 : f.call(g, (b) => b.id === i));
    if (!r || r.type !== "Fegyver") return;
    let d = (((s = r.system) == null ? void 0 : s.damage) ?? "").trim();
    if (!d && e && (d = (((((l = t.system) == null ? void 0 : l.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (h = (a = ui.notifications) == null ? void 0 : a.warn) == null || h.call(a, ((u = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : u.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const n = new Roll(d);
    await n.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${r.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
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
    var p, g, f, s, l;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((p = this.actor) == null ? void 0 : p.system), e.showDeathSkull = !1;
    const t = ((f = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : f.abilities) ?? {}, r = (((l = (s = this.actor) == null ? void 0 : s.items) == null ? void 0 : l.contents) ?? []).filter((a) => a.type === "Kepesseg" || a.type === "ability").map((a) => {
      var o, u;
      return {
        id: a.id,
        name: a.name,
        img: a.img,
        description: ((o = a.system) == null ? void 0 : o.description) ?? "",
        kp: Number(((u = a.system) == null ? void 0 : u.kp) ?? 0) || 0
      };
    }), d = new Map(r.map((a) => [a.id, a])), n = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = n, e.abilityHatterSlot = n;
    const c = (a) => {
      const o = t[a];
      return o ? Array.isArray(o == null ? void 0 : o.items) ? o.items : Array.isArray(o) ? o : [] : [];
    }, y = (a) => (a || []).map((o) => {
      const u = d.get(o);
      return u ? { id: u.id, name: u.name, img: u.img, description: u.description, kp: u.kp } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = y(c("passive")), e.abilityActiveList = y(c("active")), e;
  }
  _attachFrameListeners(i) {
    var y, p, g;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.npc-sheet")) ?? i ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (f) => {
      var a, o, u;
      if (f.preventDefault(), f.stopPropagation(), !this.actor) return;
      const s = ((u = (o = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new s({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (f) => {
      var a, o, u;
      f.preventDefault();
      const s = (o = (a = f.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : o.itemId;
      if (!s || !this.actor) return;
      const l = this.actor.items.get(s);
      (u = l == null ? void 0 : l.sheet) == null || u.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (f) => {
      var l, a;
      f.preventDefault();
      const s = (a = (l = f.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      s && await this._postAbilityToChat(s);
    }), t.on("click", ".karakter-ability-pill-remove", async (f) => {
      var h, b, v, I, _, C;
      if (f.preventDefault(), !f.altKey) return;
      const s = (b = (h = f.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : b.area, l = (I = (v = f.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : I.itemId;
      if (!s || !l || !this.actor) return;
      const a = ((_ = this.actor.system) == null ? void 0 : _.abilities) ?? {}, u = (Array.isArray((C = a[s]) == null ? void 0 : C.items) ? a[s].items.slice() : []).filter((q) => q !== l);
      await this.actor.update({ [`system.abilities.${s}.items`]: u }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (f) => {
      var l, a;
      if (f.preventDefault(), !f.altKey) return;
      const s = (a = (l = f.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : a.slot;
      s && (await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    });
    const r = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (g = (p = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : p.call(e, r)) == null || g.forEach((f) => {
      f.draggable = !0;
    }), t.on("dragstart", r, (f) => {
      var u, h, b;
      const s = f.currentTarget, l = (h = (u = s == null ? void 0 : s.dataset) == null ? void 0 : u.itemId) == null ? void 0 : h.trim();
      if (!l || !this.actor) return;
      const a = this.actor.items.get(l);
      if (!a) return;
      const o = a.uuid;
      f.dataTransfer && (f.dataTransfer.setData("text/plain", o), f.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: o })), f.dataTransfer.effectAllowed = "copyMove"), typeof ((b = f.dataTransfer) == null ? void 0 : b.setDragImage) == "function" && s && f.dataTransfer.setDragImage(s, 0, 0);
    });
    const d = this, n = (f) => {
      if (!f) return;
      const s = d._getFormDataForUpdate(f);
      Object.keys(s).length !== 0 && d.actor.update(s).catch((l) => console.warn("VoidNpcSheet save failed", l));
    }, c = (f) => {
      var s, l, a;
      return f && (((l = (s = d.element) == null ? void 0 : s.contains) == null ? void 0 : l.call(s, f)) || d.id && ((a = f.closest) == null ? void 0 : a.call(f, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (f) => {
      var u;
      const s = f.target;
      if (!s || !s.form) return;
      const l = s.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const a = s.form;
      if (!c(a)) return;
      const o = f.relatedTarget;
      o && (a.contains(o) || d.id && ((u = o.closest) != null && u.call(o, `#${CSS.escape(d.id)}`))) || n(a);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0);
  }
  _tearDown(i) {
    var t, r, d;
    document.body.removeEventListener("blur", this._votvNpcBlur, !0);
    const e = this.form ?? ((r = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const n = this._getFormDataForUpdate(e);
      Object.keys(n).length > 0 && this.actor.update(n).catch((c) => console.warn("VoidNpcSheet save on close failed", c));
    }
    return (d = super._tearDown) == null ? void 0 : d.call(this, i);
  }
  async _onDropItem(i, e) {
    var y, p, g, f, s, l, a, o, u;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, i, e);
    const r = ((h) => {
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
    if (!r) return (p = super._onDropItem) == null ? void 0 : p.call(this, i, e);
    const d = await fromUuid(r);
    if (!d || d.documentName !== "Item") return (g = super._onDropItem) == null ? void 0 : g.call(this, i, e);
    const n = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let h = d.id;
      if (((f = d.parent) == null ? void 0 : f.id) !== n.id) {
        const C = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        h = ((s = (await n.createEmbeddedDocuments("Item", [C]))[0]) == null ? void 0 : s.id) ?? h;
      }
      const b = (((l = d.system) == null ? void 0 : l.kind) ?? "passive").toString(), v = ((a = n.system) == null ? void 0 : a.abilities) ?? {}, I = b === "active" ? "active" : "passive", _ = Array.isArray((o = v[I]) == null ? void 0 : o.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
      _.includes(h) || _.push(h), await n.update({ [`system.abilities.${I}.items`]: _ }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((u = d.parent) == null ? void 0 : u.id) === n.id) return;
    const c = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !1 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(c, { system: { ...c.system ?? {}, equipped: !1 } }, { inplace: !0 }), await n.createEmbeddedDocuments("Item", [c]);
  }
  async _postAbilityToChat(i) {
    var g, f, s, l, a;
    const e = (f = (g = this.actor) == null ? void 0 : g.items) == null ? void 0 : f.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((s = e.system) == null ? void 0 : s.kind) ?? "passive", r = Number(((l = e.system) == null ? void 0 : l.kp) ?? 0) || 0, d = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), n = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", c = r > 0 ? `<p><strong>KP:</strong> ${r}</p>` : "", y = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${c}
      ${y}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const r of i.elements) {
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
    e._votvProfileImgClick = (n) => {
      var p, g, f, s, l, a, o;
      if (!e.isEditable || !((g = (p = n.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((y) => console.warn("VoidWeaponSheet save failed", y));
    }, d = (n) => {
      var c, y, p;
      return n && (((y = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : y.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var y, p, g;
      const c = ((y = n.target) == null ? void 0 : y.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(c) && r(c);
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
    e._votvProfileImgClick = (n) => {
      var p, g, f, s, l, a, o;
      if (!e.isEditable || !((g = (p = n.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((y) => console.warn("VoidShieldSheet save failed", y));
    }, d = (n) => {
      var c, y, p;
      return n && (((y = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : y.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var y, p, g;
      const c = ((y = n.target) == null ? void 0 : y.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(c) && r(c);
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
    e._votvProfileImgClick = (n) => {
      var p, g, f, s, l, a, o;
      if (!e.isEditable || !((g = (p = n.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((y) => console.warn("VoidMicrochipSheet save failed", y));
    }, d = (n) => {
      var c, y, p;
      return n && (((y = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : y.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var y, p, g;
      const c = ((y = n.target) == null ? void 0 : y.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(c) && r(c);
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
    e._votvProfileImgClick = (n) => {
      var p, g, f, s, l, a, o;
      if (!e.isEditable || !((g = (p = n.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((y) => console.warn("VoidAbilitySheet save failed", y));
    }, d = (n) => {
      var c, y, p;
      return n && (((y = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : y.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var y, p, g;
      const c = ((y = n.target) == null ? void 0 : y.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(c) && r(c);
    }, e._votvInput = (n) => {
      var p;
      const c = n.target;
      if ((c == null ? void 0 : c.name) === "name") return;
      const y = (c == null ? void 0 : c.form) ?? ((p = c == null ? void 0 : c.closest) == null ? void 0 : p.call(c, "form"));
      d(y) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => r(y), 300));
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
const J = class J extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (n) => {
      var p, g, f, s, l, a, o;
      if (!e.isEditable || !((g = (p = n.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((y) => console.warn("VoidTargySheet save failed", y));
    }, d = (n) => {
      var c, y, p;
      return n && (((y = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : y.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var y, p, g;
      const c = ((y = n.target) == null ? void 0 : y.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(c) && r(c);
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
j(J, "PARTS", foundry.utils.mergeObject(A(J, J, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), j(J, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(J, J, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((bt = A(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : bt.form) ?? {}, { submitOnChange: !1 })
}));
let Te = J;
var vt;
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
    e._votvProfileImgClick = (n) => {
      var p, g, f, s, l, a, o;
      if (!e.isEditable || !((g = (p = n.target) == null ? void 0 : p.closest) != null && g.call(p, ".profile")) && ((s = (f = n.target) == null ? void 0 : f.getAttribute) == null ? void 0 : s.call(f, "data-edit")) !== "img") return;
      n.preventDefault(), n.stopPropagation();
      const c = ((o = (a = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const r = (n) => {
      if (!n) return;
      const c = e._getFormDataForUpdate(n);
      Object.keys(c).length !== 0 && e.document.update(c).catch((y) => console.warn("VoidEgyebSheet save failed", y));
    }, d = (n) => {
      var c, y, p;
      return n && (((y = (c = e.element) == null ? void 0 : c.contains) == null ? void 0 : y.call(c, n)) || e.id && ((p = n.closest) == null ? void 0 : p.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var y, p, g;
      const c = ((y = n.target) == null ? void 0 : y.form) ?? ((g = (p = n.target) == null ? void 0 : p.closest) == null ? void 0 : g.call(p, "form"));
      d(c) && r(c);
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
j(Q, "PARTS", foundry.utils.mergeObject(A(Q, Q, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), j(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(A(Q, Q, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((vt = A(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 })
}));
let Se = Q;
const kt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, r, d;
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
  }, (r = CONFIG.Actor).typeLabels ?? (r.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", he, {
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
  Hooks.on("updateActor", (n, c, y, p) => {
    var v, I, _, C, q;
    const g = n == null ? void 0 : n.id;
    if (!g) return;
    const f = document.activeElement, s = f && (f.tagName === "INPUT" && f.type !== "checkbox" && f.type !== "radio" || f.tagName === "TEXTAREA" || f.isContentEditable), l = [], a = (v = game.actors) == null ? void 0 : v.get(g);
    a != null && a.apps && l.push(...Array.from(a.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const w of o)
      ((I = w.document) == null ? void 0 : I.id) !== g || ((_ = w.document) == null ? void 0 : _.documentName) !== "Actor" || ((C = w.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || l.includes(w) || l.push(w);
    if (s && l.some((w) => {
      const E = (w == null ? void 0 : w.form) ?? (w == null ? void 0 : w.element);
      return E && E.contains(f);
    })) return;
    const h = (q = game.votv) == null ? void 0 : q._lastKarakterSheetBlurSave, b = h && Date.now() - h.at < F ? h.appId : null;
    setTimeout(() => {
      for (const w of l)
        !(w != null && w.rendered) || typeof w.render != "function" || w.id !== b && w.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, c, y, p) => {
    var l, a, o;
    const g = n == null ? void 0 : n.parent;
    if (!g || g.documentName !== "Actor" || g.type !== "Karakter" || n.type !== "Fegyver") return;
    const f = ((l = g.system) == null ? void 0 : l.weapons) ?? {}, s = {};
    for (const [u, h] of Object.entries(f)) {
      if (!u.startsWith("slot")) continue;
      const b = ((h == null ? void 0 : h.itemId) ?? "").trim();
      !b || b !== n.id || (s[`system.weapons.${u}.name`] = n.name ?? "", s[`system.weapons.${u}.damage`] = ((a = n.system) == null ? void 0 : a.damage) ?? "", s[`system.weapons.${u}.bonus`] = ((o = n.system) == null ? void 0 : o.bonus) ?? "");
    }
    Object.keys(s).length && g.update(s);
  });
});
Hooks.on("ready", () => {
  var F, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var n, c, y, p, g, f;
      if (!((c = (n = e.target) == null ? void 0 : n.closest) != null && c.call(n, "#actors"))) return;
      const t = (p = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : p.call(y, "[data-document-id]"), r = (g = t == null ? void 0 : t.getAttribute) == null ? void 0 : g.call(t, "data-document-id");
      if (!r) return;
      const d = r.includes(".") ? r.split(".").pop() : r;
      d && ((f = game.actors) != null && f.get(d)) && (game.votv._dragSourceActorId = d);
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
      const d = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: kt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, n = await r.create(d);
      n && console.log("Vacuum of the Void | Default scene created:", n.id);
    } catch (r) {
      console.warn("Vacuum of the Void | Default scene creation failed:", r);
    }
  })();
});
Hooks.on("preCreateToken", (F, i, e) => {
  var n, c;
  const t = (n = game.votv) == null ? void 0 : n._dragSourceActorId, r = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = r ? (c = game.actors) == null ? void 0 : c.get(r) : null;
  !d || d.type !== "Karakter" || F.updateSource({
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
  var c, y;
  const t = ((c = F.flags) == null ? void 0 : c["vacuum-of-the-void"]) ?? {}, r = t.resultType, d = t.critLabel;
  if (!r && !d) return;
  const n = (y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, ".dice-roll");
  if (n && (r && n.classList.add(`votv-${r}`), d)) {
    const p = n.querySelector(".votv-crit-label");
    if (p) {
      p.textContent = d;
      return;
    }
    const g = n.querySelector(".dice-total"), f = (g == null ? void 0 : g.parentElement) ?? n, s = document.createElement("div");
    s.className = `votv-crit-label votv-crit-label-${r || "neutral"}`, s.textContent = d, f.appendChild(s);
  }
});
export {
  he as V,
  nt as c
};
//# sourceMappingURL=vacuum-of-the-void-_zCsqJuW.mjs.map
