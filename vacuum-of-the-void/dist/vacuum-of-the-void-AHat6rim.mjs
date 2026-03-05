var Pt = Object.defineProperty;
var Ft = Object.getPrototypeOf;
var Et = Reflect.get;
var At = (F, i, e) => i in F ? Pt(F, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : F[i] = e;
var j = (F, i, e) => At(F, typeof i != "symbol" ? i + "" : i, e);
var E = (F, i, e) => Et(Ft(F), e, i);
const { HTMLField: Nt, NumberField: q, SchemaField: P, StringField: v, BooleanField: U, ArrayField: ce } = foundry.data.fields;
class $t extends foundry.abstract.TypeDataModel {
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
        armor: new ce(
          new P({
            name: new v({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new v({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new v({ required: !1, blank: !0, initial: "" }),
            level: new v({ required: !1, blank: !0, initial: "" }),
            other: new v({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ce(
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
          items: new ce(
            new v({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new P({
          items: new ce(
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
const { NumberField: ge, SchemaField: xt } = foundry.data.fields;
class jt extends $t {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new xt({
        body: new ge({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new ge({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new ge({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
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
const { NumberField: he, StringField: et } = foundry.data.fields;
class Bt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new et({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new et({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new he({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new he({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new he({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ht, StringField: tt } = foundry.data.fields;
class it extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new tt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new tt({
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
const { StringField: st } = foundry.data.fields;
class Gt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new st({ required: !1, blank: !0, initial: "" }),
      quantity: new st({ required: !1, blank: !0, initial: "1" })
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
function rt(F) {
  if (!F || !Array.isArray(F.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let n = !1;
  const p = (r, u = 1) => {
    if (!Array.isArray(r)) return;
    let l = u;
    for (const o of r) {
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
      const b = !n && l >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, i) : l >= 0 ? e : t;
      for (const w of g) {
        if (!w || w.discarded || w.hidden) continue;
        const S = Number(w.result ?? w);
        Number.isFinite(S) && b.push(S);
      }
    }
  };
  p(F.terms, 1);
  const s = i.filter((r) => r === 6).length, a = i.filter((r) => r === 1).length, f = e.filter((r) => r === 6).length, m = t.filter((r) => r === 6).length, y = s + f, h = a + m;
  return y > 0 && y === h ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : h >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : h === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
var at, ot, lt, ct;
const x = class x extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
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
  _getScrollContainers(i) {
    var n, p, s, a;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((p = i.querySelector) == null ? void 0 : p.call(i, "form.votv")) ?? null, t = ((s = i.querySelector) == null ? void 0 : s.call(i, ".votv-scroll")) ?? ((a = i.querySelector) == null ? void 0 : a.call(i, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  /** Minden jelenleg görgethető elem scrollTop-ját összegyűjti (form + ablak tartalom). */
  _saveScrollState(i) {
    const { form: e, windowContent: t } = this._getScrollContainers(i), n = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (n.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (n.windowScrollTop = t.scrollTop), n;
  }
  /** Visszaállítja a mentett scroll pozíciókat. */
  _applyScrollState(i, e) {
    if (!i || !e) return;
    const { form: t, windowContent: n } = this._getScrollContainers(i);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && n && (n.scrollTop = e.windowScrollTop);
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
    const m = this.element, y = this.form ?? this.element, h = a.scrollState, r = a.focus, u = typeof (h == null ? void 0 : h.formScrollTop) == "number" || typeof (h == null ? void 0 : h.windowScrollTop) == "number", l = () => {
      var c, g;
      if (this._applyScrollState(m, h), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const b = ((c = y.querySelector) == null ? void 0 : c.call(y, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (g = y.querySelector) == null ? void 0 : g.call(y, `[name="${CSS.escape(r.name)}"]`) : null);
        b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA") && (b.focus({ preventScroll: !0 }), typeof b.selectionStart == "number" && (b.selectionStart = r.selectionStart ?? 0, b.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(m, h);
    };
    return (u || r) && (requestAnimationFrame(l), setTimeout(l, 0), setTimeout(l, 50), setTimeout(l, 150), setTimeout(l, 300), setTimeout(l, 450)), f;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const p = Math.floor(n / 3), s = Math.floor(2 * n / 3);
    return t <= p ? 1 : t <= s ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, p;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
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
    var t, n, p;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
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
    var h, r, u, l, o, c, g, b, w;
    const e = i ?? this.form ?? this.element;
    let t = (h = e == null ? void 0 : e.querySelector) == null ? void 0 : h.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    const n = ((u = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, p = ((o = (l = n.hitLocations) == null ? void 0 : l.legs) == null ? void 0 : o.value) ?? 0, s = ((c = n.currentHealth) == null ? void 0 : c.legs) ?? 0, a = x._healthStatusFromRatio(s, p), f = Number(((w = (b = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : b.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
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
    const t = ((s = this.actor.system) == null ? void 0 : s.resources) ?? {}, n = ((f = (a = t.hitLocations) == null ? void 0 : a[e]) == null ? void 0 : f.value) ?? 0, p = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return x._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var a, f, m, y;
    const t = x.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((a = i == null ? void 0 : i.system) == null ? void 0 : a.resources) ?? {}, p = ((m = (f = n.hitLocations) == null ? void 0 : f[t]) == null ? void 0 : m.value) ?? 0, s = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return x._healthStatusFromRatio(s, p);
  }
  async _prepareContext(i) {
    var Ee, Ae, Ne, $e, xe, je, Re, Me, Ke, Ue, Be, He, Ge, ze, We, Ye, Qe, Je;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Ne = (Ae = (Ee = this.actor.system) == null ? void 0 : Ee.resources) == null ? void 0 : Ae.stress) == null ? void 0 : Ne.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, s = n.currentHealth ?? {}, a = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const d of a) {
      const T = (($e = p[d]) == null ? void 0 : $e.value) ?? 0, I = s[d] ?? 0;
      e.computedHealthStatus[d] = x._healthStatusFromRatio(I, T);
    }
    const f = (Number(s.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((d) => (Number(s[d]) || 0) === 0).length;
    e.showDeathSkull = f || y >= 2;
    const h = e.computedHealthStatus.legs ?? 3, r = Number(((je = (xe = this.actor.system) == null ? void 0 : xe.combat) == null ? void 0 : je.givenSpeed) ?? 0) || 0;
    let u;
    h === 0 ? u = 0 : h === 1 ? u = -6 : h === 2 ? u = -3 : u = r;
    const l = this._getTotalArmorSpeedPenalty();
    u += l, e.effectiveGivenSpeed = u;
    const c = (Number(((Me = (Re = this.actor.system) == null ? void 0 : Re.combat) == null ? void 0 : Me.givenProtection) ?? 0) || 0) + this._getTotalArmorProtectionBonus();
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: u, givenProtection: c } },
      { inplace: !1 }
    );
    const g = x.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [d, T] of Object.entries(g)) {
      const I = e.computedHealthStatus[T];
      e.skillHealthStatus[d] = I, e.skillDisabled[d] = I === 0 ? " disabled" : "", e.skillHasHealthTint[d] = !0;
    }
    const b = this.actor.system.weapons ?? {}, w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = (b.slotOrder ?? "").trim(), D = S ? S.split(/\s*,\s*/).filter((d) => w.includes(d)) : [], C = (Ke = this.actor.system.gear) == null ? void 0 : Ke.microchips, _ = C && typeof C == "object" && !Array.isArray(C) ? C : {}, k = (((Ue = _.slot1) == null ? void 0 : Ue.itemId) ?? "").trim(), A = (((Be = _.slot2) == null ? void 0 : Be.itemId) ?? "").trim(), N = (((He = _.slot3) == null ? void 0 : He.itemId) ?? "").trim(), wt = this.actor.items.contents.filter((d) => d.type !== "Kepesseg" && d.type !== "ability").slice().sort((d, T) => {
      const I = typeof d.sort == "number" ? d.sort : 0, O = typeof T.sort == "number" ? T.sort : 0;
      return I - O;
    }).map((d) => {
      var X, te, ie, Z, V, ae;
      const T = d.type === "Fegyver", I = d.type === "MikroChip";
      let O = 0, L = "", K = null;
      for (let re = 0; re < D.length; re++) {
        const oe = D[re];
        if ((((X = b[oe]) == null ? void 0 : X.itemId) ?? "") === d.id) {
          O = re + 1, L = ((te = b[oe]) == null ? void 0 : te.bonus) ?? "", K = oe;
          break;
        }
      }
      let M = null;
      I && (k === d.id ? M = "slot1" : A === d.id ? M = "slot2" : N === d.id && (M = "slot3"));
      const ne = T && ((ie = d.system) != null && ie.damage) ? d.system.damage : "", H = T && typeof ((Z = d.system) == null ? void 0 : Z.range) == "string" ? (d.system.range || "").trim() : "", ee = K ? Number((V = b[K]) == null ? void 0 : V.bonus) || 0 : "";
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        type: d.type,
        isWeapon: T,
        slotAssignment: O,
        slotBonus: L,
        slotKey: K,
        microchipSlotKey: M,
        isEquipped: !!(K || M),
        damage: ne,
        rangeStr: H,
        slotBonusNum: ee,
        quantity: Number(((ae = d.system) == null ? void 0 : ae.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = wt;
    const me = (((Ge = this.actor.items) == null ? void 0 : Ge.contents) ?? []).filter((d) => d.type === "Fegyver"), Se = me.map((d) => ({ id: d.id, name: d.name, img: d.img }));
    e.weaponItems = Se;
    const Oe = "— Nincs fegyver —", It = D.filter((d) => {
      const I = ((b[d] ?? {}).itemId ?? "").trim();
      return I ? !!me.find((L) => L.id === I) : !1;
    });
    e.weaponSlots = It.map((d, T) => {
      const I = b[d] ?? {}, O = (I.itemId ?? "").trim(), L = Se.find((K) => K.id === O);
      return {
        slotKey: d,
        itemId: O,
        slotNum: T + 1,
        displayName: (L == null ? void 0 : L.name) || I.name || Oe,
        img: (L == null ? void 0 : L.img) || "",
        bonus: Number(I.bonus) || 0,
        damage: I.damage ?? ""
      };
    });
    const Tt = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, St = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = me.map((d) => {
      var Xe, Ze, Ve;
      const T = d.id;
      let I = null, O = {};
      for (const ye of D)
        if ((((Xe = b[ye]) == null ? void 0 : Xe.itemId) ?? "").trim() === T) {
          I = ye, O = b[ye] ?? {};
          break;
        }
      const L = !!I, K = ((Ze = d.system) == null ? void 0 : Ze.equipped) !== void 0 && ((Ve = d.system) == null ? void 0 : Ve.equipped) !== null ? !!d.system.equipped : L, M = (d == null ? void 0 : d.system) ?? {}, ne = typeof M.range == "string" ? (M.range || "").trim() : "", H = M.type ?? "", ee = (Tt[H] ?? H) || "—", X = M.size ?? "", te = (St[X] ?? X) || "", ie = [ee, te].filter(Boolean).join(", ") || ee || "—", Z = H === "projectile" || X === "thrown", V = M.quantity, ae = V != null ? String(V).trim() : "1", re = String(O.bonus ?? "").trim(), oe = String(M.bonus ?? "").trim(), Lt = re || oe || "0";
      return {
        slotKey: I ?? "",
        itemId: T,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? Oe,
        img: (d == null ? void 0 : d.img) ?? "",
        bonus: Lt,
        damage: O.damage ?? M.damage ?? "",
        rangeStr: ne || "—",
        typeLabel: ee,
        typeAndSize: ie,
        quantity: ae,
        quantityDisplay: Z ? ae : "—",
        isProjectile: Z,
        equipped: K,
        special: (M.special ?? "").trim() || "—"
      };
    });
    const Ot = (((ze = this.actor.items) == null ? void 0 : ze.contents) ?? []).filter((d) => d.type === "Pancel");
    e.armorTable = Ot.map((d) => {
      var O, L;
      const T = (d == null ? void 0 : d.system) ?? {}, I = ((O = d.system) == null ? void 0 : O.equipped) !== void 0 && ((L = d.system) == null ? void 0 : L.equipped) !== null ? !!d.system.equipped : !1;
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        protectionBonus: (T.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (T.speedPenalty ?? "").toString().trim() || "—",
        level: (T.level ?? "").toString().trim() || "—",
        special: (T.special ?? T.other ?? "").toString().trim() || "—",
        equipped: I
      };
    });
    const qt = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((d) => d.type === "Targy");
    e.itemsTable = qt.map((d) => {
      const T = (d == null ? void 0 : d.system) ?? {}, I = (T.description ?? "").trim(), O = I ? I.length > 60 ? I.slice(0, 57) + "…" : I : "—", L = T.quantity != null ? String(T.quantity).trim() : "1";
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        quantity: L,
        description: O
      };
    });
    const _t = (((Ye = this.actor.items) == null ? void 0 : Ye.contents) ?? []).filter((d) => d.type === "Egyeb");
    e.egyebList = _t.map((d) => {
      const I = (((d == null ? void 0 : d.system) ?? {}).description ?? "").trim(), O = I ? I.length > 80 ? I.slice(0, 77) + "…" : I : "";
      return {
        itemId: d.id,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        description: O
      };
    });
    const pe = (((Qe = this.actor.items) == null ? void 0 : Qe.contents) ?? []).filter((d) => d.type === "MikroChip"), le = pe.map((d) => ({ id: d.id, name: d.name, img: d.img })), qe = "— Nincs Mikro-Chip —", _e = ["slot1", "slot2", "slot3"], fe = (d) => {
      var I, O, L;
      const T = [];
      return d !== 1 && T.push((((I = _.slot1) == null ? void 0 : I.itemId) ?? "").trim()), d !== 2 && T.push((((O = _.slot2) == null ? void 0 : O.itemId) ?? "").trim()), d !== 3 && T.push((((L = _.slot3) == null ? void 0 : L.itemId) ?? "").trim()), T.filter(Boolean);
    };
    e.microchipItemsSlot1 = le.filter((d) => !fe(1).includes(d.id)), e.microchipItemsSlot2 = le.filter((d) => !fe(2).includes(d.id)), e.microchipItemsSlot3 = le.filter((d) => !fe(3).includes(d.id)), e.microchipSlots = _e.map((d) => {
      const T = _[d] ?? {}, I = (T.itemId ?? "").trim(), O = pe.find((L) => L.id === I);
      return {
        slotKey: d,
        itemId: I,
        displayName: (O == null ? void 0 : O.name) || T.name || qe,
        img: (O == null ? void 0 : O.img) || "",
        active: T.active === !0
      };
    }), ["1", "2", "3"].forEach((d) => {
      const T = `slot${d}`, I = _[T] ?? {}, O = (I.itemId ?? "").trim(), L = le.find((K) => K.id === O);
      e[`microchip${d}ItemId`] = O, e[`microchip${d}DisplayName`] = (L == null ? void 0 : L.name) || I.name || qe, e[`microchip${d}Img`] = (L == null ? void 0 : L.img) || "";
    }), e.microchipsTable = pe.map((d) => {
      var X, te, ie, Z;
      const T = d.id;
      let I = null;
      for (const V of _e)
        if ((((X = _[V]) == null ? void 0 : X.itemId) ?? "").trim() === T) {
          I = V;
          break;
        }
      const O = !!I, L = ((te = d == null ? void 0 : d.system) == null ? void 0 : te.abilityType) ?? "", K = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", M = L === "active", ne = Number((ie = d == null ? void 0 : d.system) == null ? void 0 : ie.replaceCost) >= 0 ? Number(d.system.replaceCost) : 0, H = (((Z = d == null ? void 0 : d.system) == null ? void 0 : Z.description) ?? "").trim(), ee = H ? H.length > 60 ? H.slice(0, 57) + "…" : H : "—";
      return {
        itemId: T,
        actorId: this.actor.id,
        name: (d == null ? void 0 : d.name) ?? "—",
        img: (d == null ? void 0 : d.img) ?? "",
        typeLabel: K,
        description: ee,
        kp: ne,
        isActive: M,
        slotKey: I ?? "",
        equipped: O
      };
    });
    const De = this.actor.system.abilities ?? {}, Dt = (((Je = this.actor.items) == null ? void 0 : Je.contents) ?? []).map((d) => {
      var T, I, O;
      return {
        id: d.id,
        name: d.name,
        img: d.img,
        kind: ((T = d.system) == null ? void 0 : T.kind) ?? "passive",
        description: ((I = d.system) == null ? void 0 : I.description) ?? "",
        kp: Number(((O = d.system) == null ? void 0 : O.kp) ?? 0) || 0
      };
    }), Ce = new Map(Dt.map((d) => [d.id, d])), Ct = "— Nincs képesség —", Le = (d) => {
      const T = De[d] ?? {}, I = (T.itemId ?? "").trim(), O = I ? Ce.get(I) : null, L = (O == null ? void 0 : O.description) ?? "", K = (O == null ? void 0 : O.kp) ?? 0;
      return {
        itemId: I,
        displayName: (O == null ? void 0 : O.name) || T.name || Ct,
        img: (O == null ? void 0 : O.img) || "",
        description: L,
        kp: K
      };
    };
    e.abilityFajiSlot = Le("faji"), e.abilityHatterSlot = Le("hatter");
    const Pe = (d) => {
      const T = De[d];
      return T ? Array.isArray(T == null ? void 0 : T.items) ? T.items : Array.isArray(T) ? T : [] : [];
    }, Fe = (d) => d.map((T) => {
      const I = Ce.get(T);
      return I ? {
        id: I.id,
        name: I.name,
        img: I.img,
        description: I.description,
        kp: I.kp
      } : null;
    }).filter(Boolean);
    return e.abilityPassiveList = Fe(Pe("passive")), e.abilityActiveList = Fe(Pe("active")), e;
  }
  _attachFrameListeners(i) {
    var y, h;
    super._attachFrameListeners(i);
    const e = this.form ?? ((y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (r) => {
      r.preventDefault(), r.stopPropagation();
      const l = (r.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-BzK9D31P.mjs");
      o(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var o, c, g;
      r.preventDefault(), r.stopPropagation();
      const u = r.currentTarget;
      let l = (u.dataset.itemId ?? "").trim();
      if (!l) {
        const b = (u.dataset.slot ?? "").trim();
        if (!b) return;
        l = (((((c = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : c.weapons) ?? {})[b] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = u.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), !this.isEditable) return;
    const n = (r) => {
      var o;
      const u = r ? r.currentTarget : (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
      if (!u) return;
      const l = Number(u.value) || 0;
      u.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const p = (h = e.querySelector) == null ? void 0 : h.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p }), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection();
    }, 100), t.on("click", ".karakter-portrait-img", (r) => {
      var o, c, g;
      r.preventDefault(), r.stopPropagation();
      const u = ((g = (c = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new u({
        type: "image",
        current: this.actor.img || "",
        callback: (b) => {
          b && this.actor.update({ img: b });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var g;
      r.preventDefault();
      const u = r.currentTarget, l = u.dataset.skill, o = ((g = u.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: c } = await import("./roll-sheet-BzK9D31P.mjs");
      c(this.actor, l, o);
    }), t.on("click", ".karakter-roll-morale-d8", (r) => {
      r.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (r) => {
      var w, S, D, C, _, k, A;
      r.preventDefault();
      const l = r.currentTarget.closest(".karakter-weapon-slot"), o = l == null ? void 0 : l.dataset.slot;
      if (!o) return;
      const g = (((S = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[o]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!g) return;
      const b = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, g)) ?? ((k = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : k.call(_, (N) => N.id === g));
      (A = b == null ? void 0 : b.sheet) == null || A.render(!0);
    });
    const s = (r, u) => {
      var c;
      const l = r.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (o) {
        if (r.classList.contains("karakter-weapon-label") && (u.altKey || u.shiftKey || u.ctrlKey || u.metaKey)) {
          const g = r.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (c = o.sheet) == null || c.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), s(r.currentTarget, r);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), s(r.currentTarget, r);
    }), t.on("change", ".karakter-item-qty", async (r) => {
      const u = r.currentTarget, l = u.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o) return;
      let c = Number(u.value);
      (!Number.isFinite(c) || c < 0) && (c = 0), await o.update({ "system.quantity": c });
    }), t.on("click", ".karakter-item-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, c = o.items.get(l), g = {};
      if ((c == null ? void 0 : c.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, w = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = w ? w.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], C = D.find((_) => {
          var k;
          return (((k = b[_]) == null ? void 0 : k.itemId) ?? "").trim() === l;
        });
        if (C) {
          const _ = D.filter((k) => k !== C);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(g).length && await o.update(g), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (r) => {
      var C, _;
      const u = r.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const c = this.actor.system.weapons ?? {}, g = (c.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = g ? g.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], S = w.find((k) => {
        var A;
        return (((A = c[k]) == null ? void 0 : A.itemId) ?? "").trim() === l;
      }) ?? null;
      if (u.checked) {
        if (S) return;
        let k = w.find((N) => {
          var R;
          return !((R = c[N]) != null && R.itemId);
        });
        const A = new Set(w);
        if (!k) {
          const N = b.find((R) => !A.has(R));
          if (!N) return;
          k = N, w.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${k}.itemId`]: l,
          [`system.weapons.${k}.name`]: (o == null ? void 0 : o.name) ?? "",
          [`system.weapons.${k}.damage`]: ((C = o == null ? void 0 : o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((_ = o == null ? void 0 : o.system) == null ? void 0 : _.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (S) {
        const k = w.filter((A) => A !== S);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (r) => {
      r.preventDefault();
      const u = r.currentTarget;
      if (u.disabled) return;
      const l = u.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !o && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (r) => {
      var k;
      r.preventDefault();
      const u = r.currentTarget, l = u.closest(".karakter-microchip-slot-select-wrap"), o = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), c = o == null ? void 0 : o.dataset.slot;
      if (!c) return;
      const g = (u.dataset.itemId ?? "").trim(), b = (u.dataset.itemName ?? ((k = u.textContent) == null ? void 0 : k.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (u.dataset.itemImg ?? "").trim(), S = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = b);
      let D = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      w ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", o == null || o.insertBefore(D, S)), D.src = w, D.style.display = "") : D && D.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const C = g ? this.actor.items.get(g) : null, _ = {
        [`system.gear.microchips.${c}.itemId`]: g,
        [`system.gear.microchips.${c}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      g && (_[`system.gear.microchips.${c}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (r) => {
      $(r.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var b, w;
      if (r.preventDefault(), !r.altKey) return;
      const u = r.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      if (!l || l.type !== "MikroChip") return;
      const o = ((w = (b = this.actor.system) == null ? void 0 : b.gear) == null ? void 0 : w.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((S) => {
        var D;
        return (((D = o[S]) == null ? void 0 : D.itemId) ?? "").trim() === u;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-microchip-slot-active", async (r) => {
      const u = r.currentTarget.dataset.slot;
      if (!u) return;
      const l = r.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${u}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((r, u) => {
      const l = u.dataset.slot;
      u.addEventListener("dragover", (o) => this._onMicrochipSlotDragOver(o, l)), u.addEventListener("dragleave", (o) => {
        var c;
        return (c = o.currentTarget) == null ? void 0 : c.classList.remove("karakter-microchip-slot-drag-over");
      }), u.addEventListener("drop", (o) => this._onMicrochipSlotDrop(o, l));
    }), t.find(".karakter-ability-slot-single").each((r, u) => {
      const l = u.dataset.slot;
      l && (u.addEventListener("dragover", (o) => this._onAbilitySingleDragOver(o, l)), u.addEventListener("dragleave", (o) => {
        var c;
        return (c = o.currentTarget) == null ? void 0 : c.classList.remove("karakter-ability-slot-drag-over");
      }), u.addEventListener("drop", (o) => {
        var c;
        (c = o.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((r, u) => {
      const l = u.dataset.area;
      l && (u.addEventListener("dragover", (o) => this._onAbilityAreaDragOver(o, l)), u.addEventListener("dragleave", (o) => {
        var c;
        return (c = o.currentTarget) == null ? void 0 : c.classList.remove("karakter-ability-area-drag-over");
      }), u.addEventListener("drop", (o) => {
        var c;
        (c = o.currentTarget) == null || c.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const u = r.currentTarget.dataset.slot;
      u && await this.actor.update({
        [`system.abilities.${u}.itemId`]: "",
        [`system.abilities.${u}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var b;
      if (r.preventDefault(), !r.altKey) return;
      const u = r.currentTarget.dataset.area, l = r.currentTarget.dataset.itemId;
      if (!u || !l) return;
      const o = this.actor.system.abilities ?? {}, g = (Array.isArray((b = o[u]) == null ? void 0 : b.items) ? o[u].items.slice() : []).filter((w) => w !== l);
      await this.actor.update({ [`system.abilities.${u}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (r) => {
      var c;
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      (c = o == null ? void 0 : o.sheet) == null || c.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-item-chat", async (r) => {
      r.preventDefault();
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor.items.get(l);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(l) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(l));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (r) => {
      this._resizeWeaponQuantityInput(r.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((r, u) => {
      this._resizeWeaponQuantityInput(u);
    }), t.on("change", ".karakter-weapon-quantity-input", async (r) => {
      const u = r.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const c = (u.value ?? "").trim();
      await o.update({ "system.quantity": c }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (r) => {
      const u = r.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      !o || o.type !== "Pancel" || (await o.update({ "system.equipped": u.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (r) => {
      var C, _;
      const u = r.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Fegyver") return;
      const c = this.actor.system.weapons ?? {}, g = (c.slotOrder ?? "").trim(), b = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = g ? g.split(/\s*,\s*/).filter((k) => b.includes(k)) : [], S = w.find((k) => {
        var A;
        return (((A = c[k]) == null ? void 0 : A.itemId) ?? "").trim() === l;
      }) ?? null;
      if (u.checked) {
        if (S) return;
        let k = w.find((N) => {
          var R;
          return !((R = c[N]) != null && R.itemId);
        });
        const A = new Set(w);
        if (!k) {
          const N = b.find((R) => !A.has(R));
          if (!N) return;
          k = N, w.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${k}.itemId`]: l,
          [`system.weapons.${k}.name`]: o.name ?? "",
          [`system.weapons.${k}.damage`]: ((C = o.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${k}.bonus`]: ((_ = o.system) == null ? void 0 : _.bonus) ?? ""
        }), await o.update({ "system.equipped": !0 });
      } else if (S) {
        const k = w.filter((A) => A !== S);
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await o.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const l = r.currentTarget.dataset.itemId;
      if (!l) return;
      const o = this.actor, c = o.items.get(l), g = {};
      if ((c == null ? void 0 : c.type) === "Fegyver") {
        const b = o.system.weapons ?? {}, w = (b.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = w ? w.split(/\s*,\s*/).filter((_) => S.includes(_)) : [], C = D.find((_) => {
          var k;
          return (((k = b[_]) == null ? void 0 : k.itemId) ?? "").trim() === l;
        });
        if (C) {
          const _ = D.filter((k) => k !== C);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${C}.itemId`] = "", g[`system.weapons.${C}.name`] = "", g[`system.weapons.${C}.damage`] = "", g[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(g).length && await o.update(g), await o.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const u = r.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (r) => {
      this._resizeWeaponQuantityInput(r.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((r, u) => {
      this._resizeWeaponQuantityInput(u);
    }), t.on("change", ".karakter-item-quantity-input", async (r) => {
      const u = r.currentTarget, l = (u.dataset.itemId ?? "").trim();
      if (!l) return;
      const o = this.actor.items.get(l);
      if (!o || o.type !== "Targy") return;
      const c = (u.value ?? "").trim();
      await o.update({ "system.quantity": c }), setTimeout(() => {
        const g = this.form ?? this.element, b = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        b && this._resizeWeaponQuantityInput(b);
      }, 80);
    }), t.on("click", ".karakter-item-delete", async (r) => {
      if (r.preventDefault(), !r.altKey) return;
      const u = r.currentTarget.dataset.itemId;
      if (!u) return;
      const l = this.actor.items.get(u);
      !l || l.type !== "Targy" && l.type !== "Egyeb" || await this.actor.deleteEmbeddedDocuments("Item", [u]);
    });
    const a = this, f = (r) => {
      var o, c, g, b;
      if (!r) return;
      const u = a._getFormDataForUpdate(r);
      if (Object.keys(u).length === 0) return;
      const l = ((c = (o = u.system) == null ? void 0 : o.resources) == null ? void 0 : c.currentHealth) != null || ((b = (g = u.system) == null ? void 0 : g.resources) == null ? void 0 : b.hitLocations) != null;
      a.actor.update(u).then(() => {
        l && setTimeout(() => a.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, m = (r) => {
      var u, l, o;
      return r && (((l = (u = a.element) == null ? void 0 : u.contains) == null ? void 0 : l.call(u, r)) || a.id && ((o = r.closest) == null ? void 0 : o.call(r, `#${CSS.escape(a.id)}`)));
    };
    a._votvBlur = (r) => {
      var g;
      const u = r.target;
      if (!u || !u.form) return;
      const l = u.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const o = u.form;
      if (!m(o)) return;
      const c = r.relatedTarget;
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
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, s = ["head", "torso", "arms", "legs"];
    for (const y of s) {
      const h = ((m = n[y]) == null ? void 0 : m.value) ?? 0, r = p[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, x._healthStatusFromRatio(r, h));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, n, p, s, a, f, m, y, h, r, u, l;
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
          if (((n = c.parent) == null ? void 0 : n.id) !== this.actor.id) {
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
          const S = b === "active" ? "active" : "passive", D = Array.isArray((a = w[S]) == null ? void 0 : a.items) ? w[S].items.slice() : Array.isArray(w[S]) ? w[S].slice() : [];
          D.includes(g) || D.push(g), await this.actor.update({ [`system.abilities.${S}.items`]: D });
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
            const S = foundry.utils.mergeObject(c.toObject(), { system: { ...c.toObject().system ?? {}, equipped: !1 } });
            w = ((y = (await g.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : y.id) ?? w;
          }
          if (b) {
            const S = ((h = g.system) == null ? void 0 : h.weapons) ?? {}, D = (S.slotOrder ?? "").trim(), C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = D ? D.split(/\s*,\s*/).filter((A) => C.includes(A)) : [], k = _.filter((A) => {
              var N;
              return (((N = S[A]) == null ? void 0 : N.itemId) ?? "").trim() === w;
            });
            if (k.length > 0) {
              const N = {
                "system.weapons.slotOrder": _.filter((R) => !k.includes(R)).join(",")
              };
              for (const R of k)
                N[`system.weapons.${R}.itemId`] = "", N[`system.weapons.${R}.name`] = "", N[`system.weapons.${R}.damage`] = "", N[`system.weapons.${R}.bonus`] = "";
              await g.update(N);
            }
          }
          return;
        }
        if (c && c.documentName === "Item" && c.type === "Pancel") {
          const g = this.actor;
          if (((r = c.parent) == null ? void 0 : r.id) !== g.id) {
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
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var a, f, m, y, h, r;
    i.preventDefault(), i.stopPropagation(), (a = i.currentTarget) == null || a.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
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
      [`system.weapons.${e}.bonus`]: ((r = p.system) == null ? void 0 : r.bonus) ?? ""
    }), await p.update({ "system.equipped": !0 });
  }
  _onInventoryDragHandleStart(i, e, t) {
    t && (i.dataTransfer && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", typeof i.dataTransfer.setDragImage == "function" && i.dataTransfer.setDragImage(t, 0, 0)), this._draggingInventoryItemId = e);
  }
  _onInventoryRowDragOver(i, e) {
    var n;
    const t = this._draggingInventoryItemId;
    !t || t === e || (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), (n = i.currentTarget) == null || n.classList.add("karakter-actions-row-drag-over"));
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
    const p = this.actor.items.contents.slice().sort((h, r) => {
      const u = typeof h.sort == "number" ? h.sort : 0, l = typeof r.sort == "number" ? r.sort : 0;
      return u - l;
    }).map((h) => h.id), s = p.indexOf(t), a = p.indexOf(e);
    if (s === -1 || a === -1) return;
    p.splice(s, 1), p.splice(a, 0, t);
    const f = p.map((h, r) => ({
      _id: h,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", f);
  }
  _onInventoryAreaDragOver(i) {
    var n, p, s;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    const n = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, n)}px`;
  }
  async _postItemToChat(i) {
    var f, m, y;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const h = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (h === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", h === "active") {
        const r = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const s = t ? `<p>${t}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
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
    var y, h, r;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((h = e.system) == null ? void 0 : h.kp) ?? 0) || 0, p = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), s = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", a = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", f = p ? `<p>${p}</p>` : "", m = `
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
    var n, p;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    var n;
    this._parseAbilityDrop(i) && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-ability-slot-drag-over"));
  }
  async _onAbilitySingleDrop(i, e) {
    var s, a, f;
    i.preventDefault(), (s = i.currentTarget) == null || s.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : f.id) ?? p;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: p,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var n;
    this._parseAbilityDrop(i) && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var f, m, y, h;
    i.preventDefault(), (f = i.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((y = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : y.id) ?? p;
    }
    const s = this.actor.system.abilities ?? {}, a = Array.isArray((h = s[e]) == null ? void 0 : h.items) ? s[e].items.slice() : Array.isArray(s[e]) ? s[e].slice() : [];
    a.includes(p) || a.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: a });
  }
  _onMicrochipSlotDragOver(i, e) {
    var p, s, a;
    const t = ((p = i.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((s = i.dataTransfer) == null ? void 0 : s.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (a = i.currentTarget) == null || a.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var a, f, m, y, h;
    i.preventDefault(), (a = i.currentTarget) == null || a.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((f = i.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((m = i.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "MikroChip") return;
    let s = p.id;
    ((y = p.parent) == null ? void 0 : y.id) !== this.actor.id && (s = ((h = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : h.id) ?? s), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: s,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const n = (this.actor.system.skills ?? {})[i] ?? 0;
    let p = Number(n) || 0;
    const s = this._getSkillHealthStatus(i);
    s === 1 ? p -= 6 : s === 2 && (p -= 3);
    const f = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, m = new Roll(f);
    await m.evaluate({ async: !0 });
    const { resultType: y, label: h } = rt(m), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: r
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
    const n = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": n });
  }
  async _rollWeapon(i) {
    var w;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((S) => S.type === "Fegyver");
    let s = null;
    t.itemId && (s = p.find((S) => S.id === t.itemId) ?? null);
    const a = s && s.name || t.name || `Fegyver (${i})`, f = Number(t.bonus || 0) || 0, y = (((w = s == null ? void 0 : s.system) == null ? void 0 : w.type) || "kinetic") === "explosive" ? "grenadeUse" : "firearms", h = Number(n[y] || 0) || 0, r = f + h, l = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, o = new Roll(l);
    await o.evaluate({ async: !0 });
    const { resultType: c, label: g } = rt(o), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${a} – találat`,
      flags: { "vacuum-of-the-void": { resultType: c, critLabel: g } },
      rollMode: b
    });
  }
  /** Sebzés gomb: csak a fegyver sebzés formuláját dobja (nincs panel, nincs bónusz). */
  async _rollWeaponDamage(i, e = "") {
    var f, m, y, h, r, u, l, o, c, g;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (f = t.items).get) == null ? void 0 : m.call(f, i)) ?? ((h = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : h.call(y, (b) => b.id === i));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!p && e && (p = (((((u = t.system) == null ? void 0 : u.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (g = (l = ui.notifications) == null ? void 0 : l.warn) == null || g.call(l, ((c = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : c.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const s = new Roll(p);
    await s.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return s.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }
};
j(x, "PARTS", foundry.utils.mergeObject(E(x, x, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
})), j(x, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(x, x, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
  template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
  width: 1e3,
  minWidth: 1e3,
  height: 800,
  form: foundry.utils.mergeObject(((at = E(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : at.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((ot = E(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : ot.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((ct = (lt = E(x, x, "DEFAULT_OPTIONS")) == null ? void 0 : lt.window) == null ? void 0 : ct.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
})), /** Skill key → body part; used for health-based UI and roll penalties. */
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
let de = x;
var ut, dt, mt, pt;
const B = class B extends de {
};
j(B, "PARTS", foundry.utils.mergeObject(E(B, B, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
})), j(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(B, B, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
  template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
  width: 900,
  minWidth: 800,
  height: 720,
  form: foundry.utils.mergeObject(((ut = E(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ut.form) ?? {}, { submitOnChange: !1 }),
  window: foundry.utils.mergeObject(((dt = E(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : dt.window) ?? {}, {
    resizable: !0,
    contentClasses: [
      ...((pt = (mt = E(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : mt.window) == null ? void 0 : pt.contentClasses) ?? [],
      "votv-scroll"
    ]
  })
}));
let nt = B;
var ft;
const G = class G extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
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
      var m, y, h, r, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((r = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : r.call(h, "data-edit")) !== "img") return;
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
    const n = (s) => {
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
      p(a) && n(a);
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
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
j(G, "PARTS", foundry.utils.mergeObject(E(G, G, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), j(G, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(G, G, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((ft = E(G, G, "DEFAULT_OPTIONS")) == null ? void 0 : ft.form) ?? {}, { submitOnChange: !1 })
}));
let be = G;
var yt;
const z = class z extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
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
      var m, y, h, r, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((r = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : r.call(h, "data-edit")) !== "img") return;
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
    const n = (s) => {
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
      p(a) && n(a);
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
j(z, "PARTS", foundry.utils.mergeObject(E(z, z, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), j(z, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(z, z, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((yt = E(z, z, "DEFAULT_OPTIONS")) == null ? void 0 : yt.form) ?? {}, { submitOnChange: !1 })
}));
let ve = z;
var gt;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
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
      var m, y, h, r, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((r = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : r.call(h, "data-edit")) !== "img") return;
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
    const n = (s) => {
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
      p(a) && n(a);
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", !(t.name === "name" && typeof n == "string" && n.trim() === "") && foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
j(W, "PARTS", foundry.utils.mergeObject(E(W, W, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), j(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(W, W, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((gt = E(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : gt.form) ?? {}, { submitOnChange: !1 })
}));
let ke = W;
var ht;
const Y = class Y extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
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
      var m, y, h, r, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((r = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : r.call(h, "data-edit")) !== "img") return;
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
    const n = (s) => {
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
      p(a) && n(a);
    }, e._votvInput = (s) => {
      var m;
      const a = s.target;
      if ((a == null ? void 0 : a.name) === "name") return;
      const f = (a == null ? void 0 : a.form) ?? ((m = a == null ? void 0 : a.closest) == null ? void 0 : m.call(a, "form"));
      p(f) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(f), 300));
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", !(t.name === "name" && typeof n == "string" && n.trim() === "") && foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    let e = await super._prepareContext(i);
    return e = e ?? {}, e.item = this.item, e.system = this.item.system, e;
  }
};
j(Y, "PARTS", foundry.utils.mergeObject(E(Y, Y, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), j(Y, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(Y, Y, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ht = E(Y, Y, "DEFAULT_OPTIONS")) == null ? void 0 : ht.form) ?? {}, { submitOnChange: !0 })
}));
let we = Y;
var bt;
const Q = class Q extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
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
      var m, y, h, r, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((r = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : r.call(h, "data-edit")) !== "img") return;
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
    const n = (s) => {
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
      p(a) && n(a);
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
j(Q, "PARTS", foundry.utils.mergeObject(E(Q, Q, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), j(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(Q, Q, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((bt = E(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : bt.form) ?? {}, { submitOnChange: !1 })
}));
let Ie = Q;
var vt;
const J = class J extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  _initializeApplicationOptions(i) {
    const e = super._initializeApplicationOptions(i), t = (i == null ? void 0 : i.document) ?? this.document;
    if (t != null && t.uuid || t != null && t.id) {
      const n = t.uuid ?? t.id;
      e.uniqueId = `${this.constructor.name}-${String(n).replace(/\./g, "-")}`;
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
      var m, y, h, r, u, l, o;
      if (!e.isEditable || !((y = (m = s.target) == null ? void 0 : m.closest) != null && y.call(m, ".profile")) && ((r = (h = s.target) == null ? void 0 : h.getAttribute) == null ? void 0 : r.call(h, "data-edit")) !== "img") return;
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
    const n = (s) => {
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
      p(a) && n(a);
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
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(i) {
    const e = await super._prepareContext(i) ?? {};
    return e.item = this.document, e.system = foundry.utils.deepClone(this.document.system ?? {}), e;
  }
};
j(J, "PARTS", foundry.utils.mergeObject(E(J, J, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), j(J, "DEFAULT_OPTIONS", foundry.utils.mergeObject(E(J, J, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((vt = E(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : vt.form) ?? {}, { submitOnChange: !1 })
}));
let Te = J;
const kt = "systems/vacuum-of-the-void/assets/void-bg.jpg";
Hooks.once("init", () => {
  var i, e, t, n, p;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (i = CONFIG.Actor).dataModels ?? (i.dataModels = {}), CONFIG.Actor.dataModels.Karakter = jt, (e = CONFIG.Item).dataModels ?? (e.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Mt, CONFIG.Item.dataModels.Pancel = Ut, CONFIG.Item.dataModels.MikroChip = Bt, CONFIG.Item.dataModels.Kepesseg = it, CONFIG.Item.dataModels.ability = it, CONFIG.Item.dataModels.Targy = Gt, CONFIG.Item.dataModels.Egyeb = Wt, (t = CONFIG.Actor).trackableAttributes ?? (t.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health", "resources.stress"],
    value: []
  }, (n = CONFIG.Actor).typeLabels ?? (n.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (p = CONFIG.Item).typeLabels ?? (p.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", de, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", be, {
    types: ["Fegyver"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ve, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ke, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", we, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ie, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Te, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  });
  const F = 500;
  Hooks.on("updateActor", (s, a, f, m) => {
    var w, S, D, C, _;
    const y = s == null ? void 0 : s.id;
    if (!y) return;
    const h = document.activeElement, r = h && (h.tagName === "INPUT" && h.type !== "checkbox" && h.type !== "radio" || h.tagName === "TEXTAREA" || h.isContentEditable), u = [], l = (w = game.actors) == null ? void 0 : w.get(y);
    l != null && l.apps && u.push(...Array.from(l.apps));
    const o = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of o)
      ((S = k.document) == null ? void 0 : S.id) !== y || ((D = k.document) == null ? void 0 : D.documentName) !== "Actor" || ((C = k.constructor) == null ? void 0 : C.name) !== "VoidKarakterSheet" || u.includes(k) || u.push(k);
    if (r && u.some((k) => {
      const A = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return A && A.contains(h);
    })) return;
    const g = (_ = game.votv) == null ? void 0 : _._lastKarakterSheetBlurSave, b = g && Date.now() - g.at < F ? g.appId : null;
    setTimeout(() => {
      for (const k of u)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== b && k.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (s, a, f, m) => {
    var u, l, o;
    const y = s == null ? void 0 : s.parent;
    if (!y || y.documentName !== "Actor" || y.type !== "Karakter" || s.type !== "Fegyver") return;
    const h = ((u = y.system) == null ? void 0 : u.weapons) ?? {}, r = {};
    for (const [c, g] of Object.entries(h)) {
      if (!c.startsWith("slot")) continue;
      const b = ((g == null ? void 0 : g.itemId) ?? "").trim();
      !b || b !== s.id || (r[`system.weapons.${c}.name`] = s.name ?? "", r[`system.weapons.${c}.damage`] = ((l = s.system) == null ? void 0 : l.damage) ?? "", r[`system.weapons.${c}.bonus`] = ((o = s.system) == null ? void 0 : o.bonus) ?? "");
    }
    Object.keys(r).length && y.update(r);
  });
});
Hooks.on("ready", () => {
  var F, i;
  document.body.addEventListener(
    "dragstart",
    (e) => {
      var s, a, f, m, y, h;
      if (!((a = (s = e.target) == null ? void 0 : s.closest) != null && a.call(s, "#actors"))) return;
      const t = (m = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : m.call(f, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((h = game.actors) != null && h.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (F = game.user) != null && F.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
    var e, t;
    try {
      const n = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(n != null && n.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const p = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: kt },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, s = await n.create(p);
      s && console.log("Vacuum of the Void | Default scene created:", s.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })();
});
Hooks.on("preCreateToken", (F, i, e) => {
  var s, a;
  const t = (s = game.votv) == null ? void 0 : s._dragSourceActorId, n = t ?? F.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (a = game.actors) == null ? void 0 : a.get(n) : null;
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
    "background.src": kt,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (F, i, e) => {
  var a, f;
  const t = ((a = F.flags) == null ? void 0 : a["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel;
  if (!n && !p) return;
  const s = (f = i == null ? void 0 : i.querySelector) == null ? void 0 : f.call(i, ".dice-roll");
  if (s && (n && s.classList.add(`votv-${n}`), p)) {
    const m = s.querySelector(".votv-crit-label");
    if (m) {
      m.textContent = p;
      return;
    }
    const y = s.querySelector(".dice-total"), h = (y == null ? void 0 : y.parentElement) ?? s, r = document.createElement("div");
    r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = p, h.appendChild(r);
  }
});
export {
  de as V,
  rt as c
};
//# sourceMappingURL=vacuum-of-the-void-AHat6rim.mjs.map
