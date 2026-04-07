var Si = Object.defineProperty;
var Ti = Object.getPrototypeOf;
var _i = Reflect.get;
var Di = (w, i, e) => i in w ? Si(w, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : w[i] = e;
var Y = (w, i, e) => Di(w, typeof i != "symbol" ? i + "" : i, e);
var U = (w, i, e) => _i(Ti(w), e, i);
const { HTMLField: Oi, NumberField: q, SchemaField: K, StringField: T, BooleanField: te, ArrayField: ct } = foundry.data.fields;
class hi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new K({
        name: new T({ required: !1, blank: !0, initial: "" }),
        player: new T({ required: !1, blank: !0, initial: "" }),
        level: new q({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new T({ required: !1, blank: !0, initial: "" }),
        assignment: new T({ required: !1, blank: !0, initial: "" }),
        subAssignment: new T({ required: !1, blank: !0, initial: "" }),
        background: new T({ required: !1, blank: !0, initial: "" }),
        languages: new T({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new T({ required: !1, blank: !0, initial: "" })
      }),
      resources: new K({
        health: new K({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new K({
          head: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          torso: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          arms: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          }),
          legs: new K({
            value: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new te({ required: !1, initial: !1 }),
            box2: new te({ required: !1, initial: !1 }),
            box3: new te({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new K({
          head: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new K({
          head: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new q({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new K({
          value: new q({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new q({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap / NPC: KP ikonok külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált); NPC-nél akár 10 is
        kpDot1: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot7: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot8: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot9: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot10: new q({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new K({
        defense: new q({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new q({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new q({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new T({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new q({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new q({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new ct(
          new K({
            min: new q({ required: !1, integer: !0, initial: 0 }),
            max: new q({ required: !1, integer: !0, initial: 0 }),
            kp: new q({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new K({
        deception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new q({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new T({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new T({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new T({ required: !1, blank: !0, initial: "" }),
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
      weapons: new K({
        slotOrder: new T({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new K({
          name: new T({ required: !1, blank: !0, initial: "" }),
          bonus: new T({ required: !1, blank: !0, initial: "" }),
          damage: new T({ required: !1, blank: !0, initial: "" }),
          itemId: new T({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new K({
        microchips: new K({
          slot1: new K({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot2: new K({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          }),
          slot3: new K({
            itemId: new T({ required: !1, blank: !0, initial: "" }),
            name: new T({ required: !1, blank: !0, initial: "" }),
            active: new te({ required: !1, initial: !1 })
          })
        }),
        equipment: new T({ required: !1, blank: !0, initial: "" }),
        armor: new ct(
          new K({
            name: new T({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new T({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new T({ required: !1, blank: !0, initial: "" }),
            level: new T({ required: !1, blank: !0, initial: "" }),
            other: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ct(
          new K({
            name: new T({ required: !1, blank: !0, initial: "" }),
            quantity: new q({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new T({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new K({
        faji: new K({
          itemId: new T({ required: !1, blank: !0, initial: "" }),
          name: new T({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new K({
          itemId: new T({ required: !1, blank: !0, initial: "" }),
          name: new T({ required: !1, blank: !0, initial: "" })
        }),
        passive: new K({
          items: new ct(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new K({
          items: new ct(
            new T({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new K({
        biography: new Oi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: _t, SchemaField: Ci } = foundry.data.fields;
class qi extends hi {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Ci({
        body: new _t({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new _t({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new _t({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { BooleanField: Li, NumberField: Hi, StringField: De } = foundry.data.fields;
class Qt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Li({ required: !1, initial: !1 }),
      type: new De({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new De({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new De({ required: !1, blank: !0, initial: "" }),
      damage: new De({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new De({ required: !1, blank: !0, initial: "" }),
      special: new De({ required: !1, blank: !0, initial: "" }),
      quantity: new De({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new De({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Ni, StringField: It } = foundry.data.fields;
class Pi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ni({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new It({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new It({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new It({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new It({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Dt, StringField: Xt } = foundry.data.fields;
class Ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Xt({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Xt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Dt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Dt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Dt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Fi, StringField: Zt } = foundry.data.fields;
class ei extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Zt({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new Zt({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Fi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: ti } = foundry.data.fields;
class Ei extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ti({ required: !1, blank: !0, initial: "" }),
      quantity: new ti({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: $i } = foundry.data.fields;
class xi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new $i({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Ot(w) {
  if (!w || !Array.isArray(w.terms)) return { resultType: null, label: null };
  const i = [], e = [], t = [];
  let n = !1;
  const d = (u, s = 1) => {
    if (!Array.isArray(u)) return;
    let c = s;
    for (const o of u) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        d(o.terms, c);
        continue;
      }
      if (typeof o.operator == "string") {
        c = o.operator === "-" ? -1 : 1;
        continue;
      }
      const a = typeof o.faces == "number" ? o.faces : void 0, f = Array.isArray(o.results) ? o.results : null;
      if (!a || !f || a === 8 || a !== 6) continue;
      const h = !n && c >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, i) : c >= 0 ? e : t;
      for (const v of f) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  d(w.terms, 1);
  const r = i.filter((u) => u === 6).length, l = i.filter((u) => u === 1).length, m = e.filter((u) => u === 6).length, p = t.filter((u) => u === 6).length, y = r + m, b = l + p;
  return y > 0 && y === b ? { resultType: null, label: null } : y >= 3 ? { resultType: "critical", label: "Brutális Siker" } : y === 2 ? { resultType: "critical", label: "Kritikus Siker" } : b >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : b === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ri(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var ii, si, ni, ai;
const B = class B extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, d, r, l;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, ".window-content")) ?? null;
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
    const d = this.element, r = this.form ?? this.element;
    let l = { scrollState: {}, focus: null };
    if (d) {
      l.scrollState = this._saveScrollState(d);
      const a = document.activeElement, f = r.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      f && h && (l.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const m = await super.render(i, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const p = this.element, y = this.form ?? this.element, b = l.scrollState, u = l.focus, s = typeof (b == null ? void 0 : b.formScrollTop) == "number" || typeof (b == null ? void 0 : b.windowScrollTop) == "number", c = () => {
      var a, f;
      if (this._applyScrollState(p, b), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const h = ((a = y.querySelector) == null ? void 0 : a.call(y, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (f = y.querySelector) == null ? void 0 : f.call(y, `[name="${CSS.escape(u.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = u.selectionStart ?? 0, h.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, b);
    };
    return (s || u) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(i, e) {
    const t = Number(i), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const d = Math.floor(n / 3), r = Math.floor(2 * n / 3);
    return t <= d ? 1 : t <= r ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, d;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const l = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, d;
    const i = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let e = 0;
    for (const r of i) {
      const l = String(((d = r.system) == null ? void 0 : d.protectionBonus) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(i) {
    var n, d;
    const e = (((n = i == null ? void 0 : i.items) == null ? void 0 : n.contents) ?? []).filter(
      (r) => {
        var l;
        return r.type === "Pancel" && ((l = r.system) == null ? void 0 : l.equipped) === !0;
      }
    );
    let t = 0;
    for (const r of e) {
      const l = String(((d = r.system) == null ? void 0 : d.speedPenalty) ?? "").trim().replace(",", "."), m = Number(l);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(i) {
    var y, b, u, s, c, o, a, f, h;
    if (!(i != null && i.system)) return 0;
    const e = i.system.resources ?? {}, t = ((b = (y = e.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : b.value) ?? 0, n = ((u = e.currentHealth) == null ? void 0 : u.legs) ?? 0, d = B._healthStatusFromRatio(n, t);
    if (d === 0) return 0;
    const r = Number(((c = (s = i.system) == null ? void 0 : s.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let l;
    d === 1 ? l = -6 : d === 2 ? l = -3 : l = r, l += B._getTotalArmorSpeedPenaltyStatic(i);
    const m = Number(((a = (o = i.system) == null ? void 0 : o.combat) == null ? void 0 : a.speed) ?? 0) || 0, p = Number(((h = (f = i.system) == null ? void 0 : f.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return m + p + (Number.isFinite(l) ? l : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(i) {
    var e, t;
    return (t = (e = i == null ? void 0 : i.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : B.getTotalSpeedRaw(i);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(i = null) {
    var b, u, s, c, o, a, f, h, v, I, S, _;
    const e = i ?? this.form ?? this.element;
    let t = (b = e == null ? void 0 : e.querySelector) == null ? void 0 : b.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (s = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : s.has) != null && c.call(s, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((a = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : a.resources) ?? {}, d = ((h = (f = n.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : h.value) ?? 0, r = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, l = B._healthStatusFromRatio(r, d), m = Number(((_ = (S = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : S.combat) == null ? void 0 : _.givenSpeed) ?? 0) || 0;
    let p;
    l === 0 ? p = 0 : l === 1 ? p = -6 : l === 2 ? p = -3 : p = m;
    const y = this._getTotalArmorSpeedPenalty();
    p += y, t.textContent = String(p);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés státusz (+1). */
  _writeEffectiveGivenProtection(i = null) {
    var l, m, p, y, b, u, s;
    const e = i ?? this.form ?? this.element;
    let t = (l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((y = (p = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : p.combat) == null ? void 0 : y.givenProtection) ?? 0) || 0, d = (s = (u = (b = this.actor) == null ? void 0 : b.statuses) == null ? void 0 : u.has) != null && s.call(u, "lookaround") ? 1 : 0, r = n + this._getTotalArmorProtectionBonus() + d;
    t.textContent = String(r);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(i = null) {
    const e = i ?? this.form ?? this.element, t = (b) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, b)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${b}`) : null);
    }, n = t(".karakter-total-defense-effective"), d = t(".karakter-given-defense-effective"), r = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(r == null ? void 0 : r.value) || 0, p = Number(l == null ? void 0 : l.value) || 0, y = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(m + p + y);
  }
  _writeTotalSpeed(i = null) {
    var o, a, f, h, v, I, S, _;
    const e = i ?? this.form ?? this.element, t = (L) => {
      var P;
      return ((P = e == null ? void 0 : e.querySelector) == null ? void 0 : P.call(e, L)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${L}`) : null);
    }, n = t(".karakter-total-speed-effective"), d = t(".karakter-given-speed-effective"), r = t('input[name="system.combat.speed"]'), l = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((f = (a = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : a.has) != null && f.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, p = ((S = (I = m.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : S.value) ?? 0, y = ((_ = m.currentHealth) == null ? void 0 : _.legs) ?? 0;
    if (B._healthStatusFromRatio(y, p) === 0) {
      n.textContent = "0";
      return;
    }
    const u = Number(r == null ? void 0 : r.value) || 0, s = Number(l == null ? void 0 : l.value) || 0, c = Number(d == null ? void 0 : d.textContent) || 0;
    n.textContent = String(u + s + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(i) {
    var r, l, m, p;
    const e = B.BODY_PART_BY_SKILL[i];
    if (e == null) return;
    const t = ((r = this.actor.system) == null ? void 0 : r.resources) ?? {}, n = ((m = (l = t.hitLocations) == null ? void 0 : l[e]) == null ? void 0 : m.value) ?? 0, d = ((p = t.currentHealth) == null ? void 0 : p[e]) ?? 0;
    return B._healthStatusFromRatio(d, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(i, e) {
    var l, m, p, y;
    const t = B.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((l = i == null ? void 0 : i.system) == null ? void 0 : l.resources) ?? {}, d = ((p = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : p.value) ?? 0, r = ((y = n.currentHealth) == null ? void 0 : y[t]) ?? 0;
    return B._healthStatusFromRatio(r, d);
  }
  async _prepareContext(i) {
    var Ye, Je, Qe, Xe, Ze, et, tt, it, st, k, F, E, j, re, J, Ke, be, Se, ke, Ne, Pe, bt, kt, vt, wt, nt, je, $t, xt, Rt, Mt, Kt, jt, zt, Ht, Ut, Bt, Gt, Vt;
    let e = await super._prepareContext(i);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((Qe = (Je = (Ye = this.actor.system) == null ? void 0 : Ye.resources) == null ? void 0 : Je.stress) == null ? void 0 : Qe.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, d = n.hitLocations ?? {}, r = n.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const g of l) {
      const O = ((Xe = d[g]) == null ? void 0 : Xe.value) ?? 0, D = r[g] ?? 0;
      e.computedHealthStatus[g] = B._healthStatusFromRatio(D, O);
    }
    const m = (Number(r.head) || 0) === 0, y = ["torso", "arms", "legs"].filter((g) => (Number(r[g]) || 0) === 0).length;
    e.showDeathSkull = m || y >= 2;
    const b = e.computedHealthStatus.legs ?? 3, u = Number(((et = (Ze = this.actor.system) == null ? void 0 : Ze.combat) == null ? void 0 : et.givenSpeed) ?? 0) || 0;
    let s;
    b === 0 ? s = 0 : b === 1 ? s = -6 : b === 2 ? s = -3 : s = u;
    const c = this._getTotalArmorSpeedPenalty();
    s += c, e.effectiveGivenSpeed = s;
    const o = Number(((it = (tt = this.actor.system) == null ? void 0 : tt.combat) == null ? void 0 : it.givenProtection) ?? 0) || 0, a = (F = (k = (st = this.actor) == null ? void 0 : st.statuses) == null ? void 0 : k.has) != null && F.call(k, "lookaround") ? 1 : 0, f = o + this._getTotalArmorProtectionBonus() + a;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: s, givenProtection: f } },
      { inplace: !1 }
    );
    const h = ((E = e.system) == null ? void 0 : E.combat) ?? {};
    e.totalDefense = (Number(h.defense) || 0) + (Number(h.defenseBonus) || 0) + (Number(h.givenProtection) || 0);
    const v = Number(h.givenSpeed);
    let I = (Number(h.speed) || 0) + (Number(h.speedBonus) || 0) + (Number.isFinite(v) ? v : 0);
    b === 0 && (I = 0), (J = (re = (j = this.actor) == null ? void 0 : j.statuses) == null ? void 0 : re.has) != null && J.call(re, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (be = (Ke = e.system) == null ? void 0 : Ke.combat) == null ? void 0 : be.givenProtection } },
      { inplace: !1 }
    ), I = 0), e.totalSpeed = I;
    const S = B.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [g, O] of Object.entries(S)) {
      const D = e.computedHealthStatus[O];
      e.skillHealthStatus[g] = D, e.skillDisabled[g] = D === 0 ? " disabled" : "", e.skillHasHealthTint[g] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, L = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (_.slotOrder ?? "").trim(), C = P ? P.split(/\s*,\s*/).filter((g) => L.includes(g)) : [], x = (Se = this.actor.system.gear) == null ? void 0 : Se.microchips, N = x && typeof x == "object" && !Array.isArray(x) ? x : {}, z = (((ke = N.slot1) == null ? void 0 : ke.itemId) ?? "").trim(), V = (((Ne = N.slot2) == null ? void 0 : Ne.itemId) ?? "").trim(), H = (((Pe = N.slot3) == null ? void 0 : Pe.itemId) ?? "").trim(), ie = this.actor.items.contents.filter((g) => g.type !== "Kepesseg" && g.type !== "ability").slice().sort((g, O) => {
      const D = typeof g.sort == "number" ? g.sort : 0, A = typeof O.sort == "number" ? O.sort : 0;
      return D - A;
    }).map((g) => {
      var ve, Fe, Ee, Te, _e, rt;
      const O = g.type === "Fegyver", D = g.type === "MikroChip";
      let A = 0, R = "", ee = null;
      for (let ze = 0; ze < C.length; ze++) {
        const ot = C[ze];
        if ((((ve = _[ot]) == null ? void 0 : ve.itemId) ?? "") === g.id) {
          A = ze + 1, R = ((Fe = _[ot]) == null ? void 0 : Fe.bonus) ?? "", ee = ot;
          break;
        }
      }
      let X = null;
      D && (z === g.id ? X = "slot1" : V === g.id ? X = "slot2" : H === g.id && (X = "slot3"));
      const at = O && ((Ee = g.system) != null && Ee.damage) ? g.system.damage : "", le = O && typeof ((Te = g.system) == null ? void 0 : Te.range) == "string" ? (g.system.range || "").trim() : "", Ae = ee ? Number((_e = _[ee]) == null ? void 0 : _e.bonus) || 0 : "";
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        type: g.type,
        isWeapon: O,
        slotAssignment: A,
        slotBonus: R,
        slotKey: ee,
        microchipSlotKey: X,
        isEquipped: !!(ee || X),
        damage: at,
        rangeStr: le,
        slotBonusNum: Ae,
        quantity: Number(((rt = g.system) == null ? void 0 : rt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = ie;
    const W = (((bt = this.actor.items) == null ? void 0 : bt.contents) ?? []).filter((g) => g.type === "Fegyver"), M = W.map((g) => ({ id: g.id, name: g.name, img: g.img }));
    e.weaponItems = M;
    const Q = "— Nincs fegyver —", oe = C.filter((g) => {
      const D = ((_[g] ?? {}).itemId ?? "").trim();
      return D ? !!W.find((R) => R.id === D) : !1;
    });
    e.weaponSlots = oe.map((g, O) => {
      const D = _[g] ?? {}, A = (D.itemId ?? "").trim(), R = M.find((ee) => ee.id === A);
      return {
        slotKey: g,
        itemId: A,
        slotNum: O + 1,
        displayName: (R == null ? void 0 : R.name) || D.name || Q,
        img: (R == null ? void 0 : R.img) || "",
        bonus: Number(D.bonus) || 0,
        damage: D.damage ?? ""
      };
    });
    const ce = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Z = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = W.map((g) => {
      var Wt, Yt, Jt;
      const O = g.id;
      let D = null, A = {};
      for (const Tt of C)
        if ((((Wt = _[Tt]) == null ? void 0 : Wt.itemId) ?? "").trim() === O) {
          D = Tt, A = _[Tt] ?? {};
          break;
        }
      const R = !!D, ee = ((Yt = g.system) == null ? void 0 : Yt.equipped) !== void 0 && ((Jt = g.system) == null ? void 0 : Jt.equipped) !== null ? !!g.system.equipped : R, X = (g == null ? void 0 : g.system) ?? {}, at = typeof X.range == "string" ? (X.range || "").trim() : "", le = X.type ?? "", Ae = (ce[le] ?? le) || "—", ve = X.size ?? "", Fe = (Z[ve] ?? ve) || "", Ee = [Ae, Fe].filter(Boolean).join(", ") || Ae || "—", Te = le === "projectile" || ve === "thrown", _e = X.quantity, rt = _e != null ? String(_e).trim() : "1", ze = String(A.bonus ?? "").trim(), ot = String(X.bonus ?? "").trim(), Ii = ze || ot || "0";
      return {
        slotKey: D ?? "",
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? Q,
        img: (g == null ? void 0 : g.img) ?? "",
        bonus: Ii,
        damage: A.damage ?? X.damage ?? "",
        rangeStr: at || "—",
        typeLabel: Ae,
        typeAndSize: Ee,
        quantity: rt,
        quantityDisplay: Te ? rt : "—",
        isProjectile: Te,
        equipped: ee,
        special: (X.special ?? "").trim() || "—"
      };
    });
    const $e = (((kt = this.actor.items) == null ? void 0 : kt.contents) ?? []).filter((g) => g.type === "Pancel");
    e.armorTable = $e.map((g) => {
      var A, R;
      const O = (g == null ? void 0 : g.system) ?? {}, D = ((A = g.system) == null ? void 0 : A.equipped) !== void 0 && ((R = g.system) == null ? void 0 : R.equipped) !== null ? !!g.system.equipped : !1;
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        protectionBonus: (O.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (O.speedPenalty ?? "").toString().trim() || "—",
        level: Ri((O.level ?? "").toString().trim()),
        special: (O.special ?? O.other ?? "").toString().trim() || "—",
        equipped: D
      };
    });
    const we = (((vt = this.actor.items) == null ? void 0 : vt.contents) ?? []).filter((g) => g.type === "Targy");
    e.itemsTable = we.map((g) => {
      const O = (g == null ? void 0 : g.system) ?? {}, D = (O.description ?? "").trim(), A = D ? D.length > 60 ? D.slice(0, 57) + "…" : D : "—", R = O.quantity != null ? String(O.quantity).trim() : "1";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        quantity: R,
        description: A
      };
    });
    const se = (((wt = this.actor.items) == null ? void 0 : wt.contents) ?? []).filter((g) => g.type === "Egyeb");
    e.egyebList = se.map((g) => {
      const D = (((g == null ? void 0 : g.system) ?? {}).description ?? "").trim(), A = D ? D.length > 80 ? D.slice(0, 77) + "…" : D : "";
      return {
        itemId: g.id,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        description: A
      };
    });
    const Oe = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((g) => g.type === "MikroChip"), ae = Oe.map((g) => ({ id: g.id, name: g.name, img: g.img })), He = "— Nincs Mikro-Chip —", ge = ["slot1", "slot2", "slot3"], xe = (g) => {
      var D, A, R;
      const O = [];
      return g !== 1 && O.push((((D = N.slot1) == null ? void 0 : D.itemId) ?? "").trim()), g !== 2 && O.push((((A = N.slot2) == null ? void 0 : A.itemId) ?? "").trim()), g !== 3 && O.push((((R = N.slot3) == null ? void 0 : R.itemId) ?? "").trim()), O.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((g) => !xe(1).includes(g.id)), e.microchipItemsSlot2 = ae.filter((g) => !xe(2).includes(g.id)), e.microchipItemsSlot3 = ae.filter((g) => !xe(3).includes(g.id)), e.microchipSlots = ge.map((g) => {
      const O = N[g] ?? {}, D = (O.itemId ?? "").trim(), A = Oe.find((R) => R.id === D);
      return {
        slotKey: g,
        itemId: D,
        displayName: (A == null ? void 0 : A.name) || O.name || He,
        img: (A == null ? void 0 : A.img) || "",
        active: O.active === !0
      };
    }), ["1", "2", "3"].forEach((g) => {
      const O = `slot${g}`, D = N[O] ?? {}, A = (D.itemId ?? "").trim(), R = ae.find((ee) => ee.id === A);
      e[`microchip${g}ItemId`] = A, e[`microchip${g}DisplayName`] = (R == null ? void 0 : R.name) || D.name || He, e[`microchip${g}Img`] = (R == null ? void 0 : R.img) || "";
    }), e.microchipsTable = Oe.map((g) => {
      var ve, Fe, Ee, Te;
      const O = g.id;
      let D = null;
      for (const _e of ge)
        if ((((ve = N[_e]) == null ? void 0 : ve.itemId) ?? "").trim() === O) {
          D = _e;
          break;
        }
      const A = !!D, R = ((Fe = g == null ? void 0 : g.system) == null ? void 0 : Fe.abilityType) ?? "", ee = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", X = R === "active", at = Number((Ee = g == null ? void 0 : g.system) == null ? void 0 : Ee.replaceCost) >= 0 ? Number(g.system.replaceCost) : 0, le = (((Te = g == null ? void 0 : g.system) == null ? void 0 : Te.description) ?? "").trim(), Ae = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: O,
        actorId: this.actor.id,
        name: (g == null ? void 0 : g.name) ?? "—",
        img: (g == null ? void 0 : g.img) ?? "",
        typeLabel: ee,
        description: Ae,
        kp: at,
        isActive: X,
        slotKey: D ?? "",
        equipped: A
      };
    });
    const ut = (((je = e.weaponsTable) == null ? void 0 : je.length) ?? 0) > 0 || ((($t = e.armorTable) == null ? void 0 : $t.length) ?? 0) > 0 || (((xt = e.microchipsTable) == null ? void 0 : xt.length) ?? 0) > 0 || (((Rt = e.itemsTable) == null ? void 0 : Rt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !ut;
    const dt = this.actor.system.abilities ?? {}, Et = (((Mt = this.actor.items) == null ? void 0 : Mt.contents) ?? []).map((g) => {
      var O, D, A;
      return {
        id: g.id,
        name: g.name,
        img: g.img,
        kind: ((O = g.system) == null ? void 0 : O.kind) ?? "passive",
        description: ((D = g.system) == null ? void 0 : D.description) ?? "",
        kp: Number(((A = g.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), Re = new Map(Et.map((g) => [g.id, g])), mt = "— Nincs képesség —", Ue = (g) => {
      const O = dt[g] ?? {}, D = (O.itemId ?? "").trim(), A = D ? Re.get(D) : null, R = (A == null ? void 0 : A.description) ?? "", ee = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: D,
        displayName: (A == null ? void 0 : A.name) || O.name || mt,
        img: (A == null ? void 0 : A.img) || "",
        description: R,
        kp: ee
      };
    };
    e.abilityFajiSlot = Ue("faji"), e.abilityHatterSlot = Ue("hatter");
    const Be = (g) => {
      const O = dt[g];
      return O ? Array.isArray(O == null ? void 0 : O.items) ? O.items : Array.isArray(O) ? O : [] : [];
    }, Ge = (g) => g.map((O) => {
      const D = Re.get(O);
      return D ? {
        id: D.id,
        name: D.name,
        img: D.img,
        description: D.description,
        kp: D.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ge(Be("passive")), e.abilityActiveList = Ge(Be("active"));
    const pt = ((Kt = e.system) == null ? void 0 : Kt.resources) ?? {}, Me = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ce = (zt = (jt = e.system) == null ? void 0 : jt.combat) == null ? void 0 : zt.initiativeResult, he = typeof Ce == "number" ? Ce : -1, ft = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ve = (Ut = (Ht = e.system) == null ? void 0 : Ht.combat) == null ? void 0 : Ut.initiativeRanges, qe = Array.isArray(Ve) ? Ve.map((g) => ({ min: Number(g.min) ?? 0, max: Number(g.max) ?? 0, kp: Math.min(10, Math.max(0, Number(g.kp) ?? 0)) })) : [], Ie = (qe.length > 0 ? qe : ft).slice().sort((g, O) => g.min - O.min), Le = qe.map((g) => g.min), yt = Le.length ? Math.min(...Le) : 0, gt = Le.length ? Math.max(...Le) : 0;
    e.initiativeRanges = qe.map((g) => ({ ...g, isFirst: g.min === yt, isLast: g.min === gt }));
    let We = 0;
    if (typeof he == "number" && he >= 0 && Ie.length > 0) {
      const g = Ie[0], O = Ie[Ie.length - 1];
      let D = null;
      he <= g.max ? D = g : he >= O.min ? D = O : D = Ie.find((A) => he >= A.min && he <= A.max), D && (We = D.kp);
    }
    e.kpDots = Me.map((g, O) => {
      const D = O + 1, A = !!Number(pt[g]), R = D <= We;
      return { index: D, used: A, usable: R };
    });
    const ht = !!((Gt = (Bt = game.combat) == null ? void 0 : Bt.combatants) != null && Gt.some((g) => {
      var O;
      return ((O = g.actor) == null ? void 0 : O.type) === "Karakter";
    }));
    return e.showHarcSection = ht, e.canEditInitiative = !!((Vt = game.user) != null && Vt.isGM), e.showInitiativeResult = typeof Ce == "number", e.initiativeResult = e.showInitiativeResult ? Ce : "", e;
  }
  _attachFrameListeners(i) {
    var b, u;
    super._attachFrameListeners(i);
    const e = this.form ?? ((b = i == null ? void 0 : i.querySelector) == null ? void 0 : b.call(i, "form.votv.karakter-sheet")) ?? i ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const o = (s.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-8ORc-FmD.mjs");
      a(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (s) => {
      var a, f, h;
      s.preventDefault(), s.stopPropagation();
      const c = s.currentTarget;
      let o = (c.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((f = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : f.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((h = c.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (s) => {
      s.preventDefault(), s.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-8ORc-FmD.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (s) => {
      var h, v;
      s.preventDefault(), s.stopPropagation();
      const c = s.currentTarget, o = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const a = `system.resources.kpDot${o}`, f = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [a]: f ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (s) => {
      var a;
      const c = s ? s.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const o = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const d = (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
    d && n({ currentTarget: d });
    const r = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', r), this._writeEffectiveGivenSpeed(i), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(i), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(i), this._writeTotalDefense(e), this._writeTotalSpeed(i), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (s) => {
      var a, f, h;
      s.preventDefault(), s.stopPropagation();
      const c = ((h = (f = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : f.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (s) => {
      var h;
      s.preventDefault();
      const c = s.currentTarget, o = c.dataset.skill, a = ((h = c.textContent) == null ? void 0 : h.trim()) || o, { openRollSheetForSkill: f } = await import("./roll-sheet-8ORc-FmD.mjs");
      f(this.actor, o, a);
    }), t.on("click", ".karakter-roll-morale-d8", (s) => {
      s.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (s) => {
      var I, S, _, L, P, C, x;
      s.preventDefault();
      const o = s.currentTarget.closest(".karakter-weapon-slot"), a = o == null ? void 0 : o.dataset.slot;
      if (!a) return;
      const h = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!h) return;
      const v = ((L = (_ = this.actor.items).get) == null ? void 0 : L.call(_, h)) ?? ((C = (P = this.actor.items.contents) == null ? void 0 : P.find) == null ? void 0 : C.call(P, (N) => N.id === h));
      (x = v == null ? void 0 : v.sheet) == null || x.render(!0);
    });
    const l = (s, c) => {
      var f;
      const o = s.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (a) {
        if (s.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const h = s.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (f = a.sheet) == null || f.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (s) => {
      s.preventDefault(), l(s.currentTarget, s);
    }), t.on("click", ".karakter-inventory-item-icon", (s) => {
      s.preventDefault(), l(s.currentTarget, s);
    }), t.on("change", ".karakter-item-qty", async (s) => {
      const c = s.currentTarget, o = c.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a) return;
      let f = Number(c.value);
      (!Number.isFinite(f) || f < 0) && (f = 0), await a.update({ "system.quantity": f });
    }), t.on("click", ".karakter-item-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, f = a.items.get(o);
      if (!f) return;
      const h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = I ? I.split(/\s*,\s*/).filter((P) => S.includes(P)) : [], L = _.find((P) => {
          var C;
          return (((C = v[P]) == null ? void 0 : C.itemId) ?? "").trim() === o;
        });
        if (L) {
          const P = _.filter((C) => C !== L);
          h["system.weapons.slotOrder"] = P.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (s) => {
      var L, P;
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], S = I.find((C) => {
        var x;
        return (((x = f[C]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let C = I.find((N) => {
          var z;
          return !((z = f[N]) != null && z.itemId);
        });
        const x = new Set(I);
        if (!C) {
          const N = v.find((z) => !x.has(z));
          if (!N) return;
          C = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: o,
          [`system.weapons.${C}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${C}.damage`]: ((L = a == null ? void 0 : a.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((P = a == null ? void 0 : a.system) == null ? void 0 : P.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const C = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (s) => {
      s.preventDefault();
      const c = s.currentTarget;
      if (c.disabled) return;
      const o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (s) => {
      var C;
      s.preventDefault();
      const c = s.currentTarget, o = c.closest(".karakter-microchip-slot-select-wrap"), a = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), f = a == null ? void 0 : a.dataset.slot;
      if (!f) return;
      const h = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let _ = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (_ || (_ = document.createElement("img"), _.className = "karakter-microchip-slot-thumb", _.alt = "", a == null || a.insertBefore(_, S)), _.src = I, _.style.display = "") : _ && _.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const L = h ? this.actor.items.get(h) : null, P = {
        [`system.gear.microchips.${f}.itemId`]: h,
        [`system.gear.microchips.${f}.name`]: (L == null ? void 0 : L.name) ?? ""
      };
      h && (P[`system.gear.microchips.${f}.active`] = !0), await this.actor.update(P);
    }), $(document).on("click.votv-microchip-dropdown", (s) => {
      $(s.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (s) => {
      var v, I;
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      if (!o || o.type !== "MikroChip") return;
      const a = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((S) => {
        var _;
        return (((_ = a[S]) == null ? void 0 : _.itemId) ?? "").trim() === c;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (s) => {
      const c = s.currentTarget.dataset.slot;
      if (!c) return;
      const o = s.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((s, c) => {
      const o = c.dataset.slot;
      c.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, o));
    }), t.find(".karakter-ability-slot-single").each((s, c) => {
      const o = c.dataset.slot;
      o && (c.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((s, c) => {
      const o = c.dataset.area;
      o && (c.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, o)), c.addEventListener("dragleave", (a) => {
        var f;
        return (f = a.currentTarget) == null ? void 0 : f.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (a) => {
        var f;
        (f = a.currentTarget) == null || f.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (s) => {
      var v;
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.area, o = s.currentTarget.dataset.itemId;
      if (!c || !o) return;
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((v = a[c]) == null ? void 0 : v.items) ? a[c].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${c}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (s) => {
      var f;
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      (f = a == null ? void 0 : a.sheet) == null || f.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (s) => {
      s.preventDefault();
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor.items.get(o);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(o) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((s, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = (c.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (s) => {
      var L, P;
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Fegyver") return;
      const f = this.actor.system.weapons ?? {}, h = (f.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], S = I.find((C) => {
        var x;
        return (((x = f[C]) == null ? void 0 : x.itemId) ?? "").trim() === o;
      }) ?? null;
      if (c.checked) {
        if (S) return;
        let C = I.find((N) => {
          var z;
          return !((z = f[N]) != null && z.itemId);
        });
        const x = new Set(I);
        if (!C) {
          const N = v.find((z) => !x.has(z));
          if (!N) return;
          C = N, I.push(N);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: o,
          [`system.weapons.${C}.name`]: a.name ?? "",
          [`system.weapons.${C}.damage`]: ((L = a.system) == null ? void 0 : L.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((P = a.system) == null ? void 0 : P.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (S) {
        const C = I.filter((x) => x !== S);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const o = s.currentTarget.dataset.itemId;
      if (!o) return;
      const a = this.actor, f = a.items.get(o), h = {};
      if ((f == null ? void 0 : f.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], _ = I ? I.split(/\s*,\s*/).filter((P) => S.includes(P)) : [], L = _.find((P) => {
          var C;
          return (((C = v[P]) == null ? void 0 : C.itemId) ?? "").trim() === o;
        });
        if (L) {
          const P = _.filter((C) => C !== L);
          h["system.weapons.slotOrder"] = P.join(","), h[`system.weapons.${L}.itemId`] = "", h[`system.weapons.${L}.name`] = "", h[`system.weapons.${L}.damage`] = "", h[`system.weapons.${L}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-armor-delete", async (s) => {
      if (s.preventDefault(), !s.altKey) return;
      const c = s.currentTarget.dataset.itemId;
      if (!c) return;
      const o = this.actor.items.get(c);
      !o || o.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (s) => {
      this._resizeWeaponQuantityInput(s.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((s, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (s) => {
      const c = s.currentTarget, o = (c.dataset.itemId ?? "").trim();
      if (!o) return;
      const a = this.actor.items.get(o);
      if (!a || a.type !== "Targy") return;
      const f = (c.value ?? "").trim();
      await a.update({ "system.quantity": f }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const m = this, p = (s) => {
      var a, f, h, v;
      if (!s) return;
      const c = m._getFormDataForUpdate(s);
      if (Object.keys(c).length === 0) return;
      const o = ((f = (a = c.system) == null ? void 0 : a.resources) == null ? void 0 : f.currentHealth) != null || ((v = (h = c.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      m.actor.update(c).then(() => {
        o && setTimeout(() => m.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, y = (s) => {
      var c, o, a;
      return s && (((o = (c = m.element) == null ? void 0 : c.contains) == null ? void 0 : o.call(c, s)) || m.id && ((a = s.closest) == null ? void 0 : a.call(s, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (s) => {
      var h;
      const c = s.target;
      if (!c || !c.form) return;
      const o = c.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const a = c.form;
      if (!y(a)) return;
      const f = s.relatedTarget;
      f && (a.contains(f) || m.id && ((h = f.closest) != null && h.call(f, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), p(a));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  _getFormDataForUpdate(i) {
    var l, m, p;
    const e = {};
    for (const y of i.elements) {
      if (!y.name || y.disabled || y.type === "radio" && !y.checked || y.name.startsWith("system.resources.healthStatus.")) continue;
      let b;
      y.type === "checkbox" ? b = y.checked : y.type === "number" ? b = y.value === "" ? 0 : Number(y.value) : b = y.value ?? "", foundry.utils.setProperty(e, y.name, b);
    }
    const t = foundry.utils.mergeObject(
      ((l = this.actor.system) == null ? void 0 : l.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, d = t.currentHealth ?? {}, r = ["head", "torso", "arms", "legs"];
    for (const y of r) {
      const b = ((p = n[y]) == null ? void 0 : p.value) ?? 0, u = d[y] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${y}`, B._healthStatusFromRatio(u, b));
    }
    return e;
  }
  async _onDropItem(i, e) {
    var t, n, d, r, l, m, p, y, b, u, s, c;
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            o = a;
            break;
          }
      }
      if (o) {
        const a = await fromUuid(o);
        if (a && a.documentName === "Item" && (a.type === "Kepesseg" || a.type === "ability")) {
          let f = a.id;
          if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const _ = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            f = ((d = (await this.actor.createEmbeddedDocuments("Item", [_]))[0]) == null ? void 0 : d.id) ?? f;
          }
          const h = (((r = a.system) == null ? void 0 : r.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": f,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": f,
              "system.abilities.hatter.name": a.name
            });
            return;
          }
          const I = h === "active" ? "active" : "passive", S = Array.isArray((l = v[I]) == null ? void 0 : l.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          S.includes(f) || S.push(f), await this.actor.update({ [`system.abilities.${I}.items`]: S });
          return;
        }
      }
    }
    if (e) {
      let o = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
      if (!o && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            o = a;
            break;
          }
      }
      if (o) {
        const a = await fromUuid(o);
        if (a && a.documentName === "Item" && a.type === "Fegyver") {
          const f = this.actor, h = ((p = a.parent) == null ? void 0 : p.id) !== f.id;
          let v = a.id;
          if (h) {
            const I = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            v = ((y = (await f.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : y.id) ?? v;
          }
          if (h) {
            const I = ((b = f.system) == null ? void 0 : b.weapons) ?? {}, S = (I.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], L = S ? S.split(/\s*,\s*/).filter((C) => _.includes(C)) : [], P = L.filter((C) => {
              var x;
              return (((x = I[C]) == null ? void 0 : x.itemId) ?? "").trim() === v;
            });
            if (P.length > 0) {
              const x = {
                "system.weapons.slotOrder": L.filter((N) => !P.includes(N)).join(",")
              };
              for (const N of P)
                x[`system.weapons.${N}.itemId`] = "", x[`system.weapons.${N}.name`] = "", x[`system.weapons.${N}.damage`] = "", x[`system.weapons.${N}.bonus`] = "";
              await f.update(x);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const f = this.actor;
          if (((u = a.parent) == null ? void 0 : u.id) !== f.id) {
            const h = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            await f.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "MikroChip") {
          const f = this.actor;
          ((s = a.parent) == null ? void 0 : s.id) !== f.id && await f.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
        if (a && a.documentName === "Item" && (a.type === "Targy" || a.type === "Egyeb")) {
          const f = this.actor;
          ((c = a.parent) == null ? void 0 : c.id) !== f.id && await f.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(i, e);
  }
  _onWeaponSlotDragOver(i, e) {
    var d, r, l;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(i, e) {
    var l, m, p, y, b, u;
    i.preventDefault(), i.stopPropagation(), (l = i.currentTarget) == null || l.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "Fegyver") return;
    if (((y = d.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const s = foundry.utils.mergeObject(d.toObject(), { system: { ...d.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [s]);
      return;
    }
    const r = d.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: r,
      [`system.weapons.${e}.name`]: d.name,
      [`system.weapons.${e}.damage`]: ((b = d.system) == null ? void 0 : b.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((u = d.system) == null ? void 0 : u.bonus) ?? ""
    }), await d.update({ "system.equipped": !0 });
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
    var p, y;
    i.preventDefault(), (p = i.currentTarget) == null || p.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((y = i.dataTransfer) == null ? void 0 : y.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const d = this.actor.items.contents.slice().sort((b, u) => {
      const s = typeof b.sort == "number" ? b.sort : 0, c = typeof u.sort == "number" ? u.sort : 0;
      return s - c;
    }).map((b) => b.id), r = d.indexOf(t), l = d.indexOf(e);
    if (r === -1 || l === -1) return;
    d.splice(r, 1), d.splice(l, 0, t);
    const m = d.map((b, u) => ({
      _id: b,
      sort: (u + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(i) {
    var n, d, r;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const n = t.scrollWidth;
    document.body.removeChild(t), i.style.width = `${Math.max(e, n)}px`;
  }
  async _postItemToChat(i) {
    var m, p, y;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const b = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (n = (b === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", b === "active") {
        const u = Number(((y = e.system) == null ? void 0 : y.replaceCost) ?? 0) || 0;
        u > 0 && (d = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(i) {
    var y, b, u;
    const e = this.actor.items.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((b = e.system) == null ? void 0 : b.kp) ?? 0) || 0, d = (((u = e.system) == null ? void 0 : u.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${l}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(i) {
    var n, d;
    const e = ((n = i.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((d = i.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    var r, l, m;
    i.preventDefault(), (r = i.currentTarget) == null || r.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const p = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((m = (await this.actor.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : m.id) ?? d;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: d,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(i, e) {
    var n;
    this._parseAbilityDrop(i) && (i.preventDefault(), (n = i.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(i, e) {
    var m, p, y, b;
    i.preventDefault(), (m = i.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(i);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let d = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const u = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      d = ((y = (await this.actor.createEmbeddedDocuments("Item", [u]))[0]) == null ? void 0 : y.id) ?? d;
    }
    const r = this.actor.system.abilities ?? {}, l = Array.isArray((b = r[e]) == null ? void 0 : b.items) ? r[e].items.slice() : Array.isArray(r[e]) ? r[e].slice() : [];
    l.includes(d) || l.push(d), await this.actor.update({ [`system.abilities.${e}.items`]: l });
  }
  _onMicrochipSlotDragOver(i, e) {
    var d, r, l;
    const t = ((d = i.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((r = i.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (i.preventDefault(), (l = i.currentTarget) == null || l.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(i, e) {
    var l, m, p, y, b;
    i.preventDefault(), (l = i.currentTarget) == null || l.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = i.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((p = i.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const d = await fromUuid(n.uuid);
    if (!d || d.type !== "MikroChip") return;
    let r = d.id;
    ((y = d.parent) == null ? void 0 : y.id) !== this.actor.id && (r = ((b = (await this.actor.createEmbeddedDocuments("Item", [d.toObject()]))[0]) == null ? void 0 : b.id) ?? r), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: r,
      [`system.gear.microchips.${e}.name`]: d.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(i, e) {
    const n = (this.actor.system.skills ?? {})[i] ?? 0;
    let d = Number(n) || 0;
    const r = this._getSkillHealthStatus(i);
    r === 1 ? d -= 6 : r === 2 && (d -= 3);
    const m = `3d6${d !== 0 ? d > 0 ? `+${d}` : `${d}` : ""}`, p = new Roll(m);
    await p.evaluate({ async: !0 });
    const { resultType: y, label: b } = Ot(p), u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: b } },
      rollMode: u
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
    const n = Math.max(0, i - 1);
    await this.actor.update({ "system.resources.morale": n });
  }
  async _rollInitiative() {
    var r;
    const i = Number(((r = this.actor.system.skills) == null ? void 0 : r.quickThinking) ?? 0) || 0, t = `1d20${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, n = new Roll(t);
    await n.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _rollWeapon(i) {
    var I, S;
    const t = (this.actor.system.weapons ?? {})[i] ?? {}, n = this.actor.system.skills ?? {}, d = this.actor.items.filter((_) => _.type === "Fegyver");
    let r = null;
    t.itemId && (r = d.find((_) => _.id === t.itemId) ?? null);
    const l = r && r.name || t.name || `Fegyver (${i})`, m = Number(t.bonus || 0) || 0, p = ((I = r == null ? void 0 : r.system) == null ? void 0 : I.type) || "kinetic", y = (((S = r == null ? void 0 : r.system) == null ? void 0 : S.skillKey) ?? "").trim(), b = y && n[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", u = Number(n[b] || 0) || 0, s = m + u, o = `3d6${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, a = new Roll(o);
    await a.evaluate({ async: !0 });
    const { resultType: f, label: h } = Ot(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var m, p, y, b, u, s, c, o, a, f;
    const t = this.actor;
    if (!t) return;
    let n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, i)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === i));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((s = t.system) == null ? void 0 : s.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
};
Y(B, "PARTS", foundry.utils.mergeObject(
  U(B, B, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(B, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(B, B, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((ii = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((si = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : si.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((ai = (ni = U(B, B, "DEFAULT_OPTIONS")) == null ? void 0 : ni.window) == null ? void 0 : ai.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
Y(B, "BODY_PART_BY_SKILL", {
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
let lt = B;
function Mi(w) {
  return w ? w === "1" ? "1. szint" : w === "2" ? "2. szint" : w === "3" ? "3. szint" : w === "Alap" ? "Alap" : w : "Alap";
}
var ri, oi, ci, li;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(i) {
    var n, d, r, l;
    if (!i) return { form: null, windowContent: null };
    const e = ((n = i.querySelector) == null ? void 0 : n.call(i, "form.votv.karakter-sheet")) ?? ((d = i.querySelector) == null ? void 0 : d.call(i, "form.votv")) ?? null, t = ((r = i.querySelector) == null ? void 0 : r.call(i, ".votv-scroll")) ?? ((l = i.querySelector) == null ? void 0 : l.call(i, ".window-content")) ?? null;
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
    const t = this.element, n = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (t) {
      d.scrollState = this._saveScrollState(t);
      const s = document.activeElement, c = n.contains(s), o = s && (s.tagName === "INPUT" && s.type !== "checkbox" && s.type !== "radio" || s.tagName === "TEXTAREA");
      c && o && (d.focus = {
        name: s.name || null,
        id: s.id || null,
        selectionStart: "selectionStart" in s ? s.selectionStart : 0,
        selectionEnd: "selectionEnd" in s ? s.selectionEnd : 0
      });
    }
    const r = await super.render(i, e), l = this.element, m = this.form ?? this.element, p = d.scrollState, y = d.focus, b = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", u = () => {
      var s, c;
      if (this._applyScrollState(l, p), (y == null ? void 0 : y.name) != null || (y == null ? void 0 : y.id) != null) {
        const o = ((s = m.querySelector) == null ? void 0 : s.call(m, y.id ? `#${CSS.escape(y.id)}` : null)) ?? (y.name ? (c = m.querySelector) == null ? void 0 : c.call(m, `[name="${CSS.escape(y.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = y.selectionStart ?? 0, o.selectionEnd = y.selectionEnd ?? y.selectionStart ?? 0));
      }
      this._applyScrollState(l, p);
    };
    return (b || y) && (requestAnimationFrame(u), setTimeout(u, 0), setTimeout(u, 50), setTimeout(u, 150), setTimeout(u, 300), setTimeout(u, 450)), r;
  }
  async _prepareContext(i) {
    var Ue, Be, Ge, pt, Me, Ce, he, ft, Ve, qe, St, Ie, Le, yt, gt, We, ht, Ye, Je, Qe, Xe, Ze, et, tt, it, st;
    const e = await super._prepareContext(i) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Ue = this.actor) == null ? void 0 : Ue.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Be = e.system) == null ? void 0 : Be.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((pt = e.system) == null ? void 0 : pt.combat) ?? {}, d = Number(n.givenProtection ?? 0) || 0, r = (Ce = (Me = t == null ? void 0 : t.statuses) == null ? void 0 : Me.has) != null && Ce.call(Me, "lookaround") ? 1 : 0;
    e.effectiveGivenProtection = d + r;
    const l = ((he = t == null ? void 0 : t.items) == null ? void 0 : he.contents) ?? [], m = ((ft = t == null ? void 0 : t.system) == null ? void 0 : ft.weapons) ?? {}, p = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], y = (m.slotOrder ?? "").trim(), b = y ? y.split(/\s*,\s*/).filter((k) => p.includes(k)) : [], u = l.filter((k) => k.type === "Fegyver"), s = u.map((k) => ({ id: k.id, name: k.name, img: k.img })), c = "— Nincs fegyver —", o = b.length > 0 ? b : p, a = p.filter((k) => !o.includes(k)), f = [...o, ...a], h = f.filter((k) => {
      var E;
      const F = (((E = m[k]) == null ? void 0 : E.itemId) ?? "").trim();
      return F && u.some((j) => j.id === F);
    });
    e.weaponSlots = h.map((k) => {
      const F = m[k] ?? {}, E = (F.itemId ?? "").trim(), j = s.find((re) => re.id === E);
      return {
        slotKey: k,
        itemId: E,
        displayName: (j == null ? void 0 : j.name) || F.name || c,
        img: (j == null ? void 0 : j.img) || ""
      };
    });
    const v = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, I = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = u.map((k) => {
      var nt;
      const F = k.id;
      let E = null, j = {};
      for (const je of f)
        if ((((nt = m[je]) == null ? void 0 : nt.itemId) ?? "").trim() === F) {
          E = je, j = m[je] ?? {};
          break;
        }
      const re = !!E, J = (k == null ? void 0 : k.system) ?? {}, Ke = typeof J.range == "string" ? (J.range || "").trim() : "", be = J.type ?? "", Se = (v[be] ?? be) || "—", ke = J.size ?? "", Ne = (I[ke] ?? ke) || "", Pe = [Se, Ne].filter(Boolean).join(", ") || Se || "—", bt = be === "projectile" || ke === "thrown", kt = J.quantity != null ? String(J.quantity).trim() : "1", vt = String(J.bonus ?? j.bonus ?? "").trim() || "0", wt = (J.damage ?? j.damage ?? "").trim() || "";
      return {
        slotKey: E ?? "",
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? c,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: vt,
        damage: wt,
        rangeStr: Ke || "—",
        typeAndSize: Pe,
        quantity: kt,
        isProjectile: bt,
        equipped: re,
        special: (J.special ?? "").trim() || "—"
      };
    });
    const S = l.filter((k) => k.type === "Pancel");
    e.armorTable = S.map((k) => {
      var j;
      const F = (k == null ? void 0 : k.system) ?? {}, E = ((j = k.system) == null ? void 0 : j.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: Mi((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: E
      };
    });
    const _ = ((qe = (Ve = t == null ? void 0 : t.system) == null ? void 0 : Ve.gear) == null ? void 0 : qe.microchips) ?? {}, L = ["slot1", "slot2", "slot3"], P = l.filter((k) => k.type === "MikroChip");
    e.microchipsTable = P.map((k) => {
      var be, Se, ke, Ne;
      const F = k.id;
      let E = null;
      for (const Pe of L)
        if ((((be = _[Pe]) == null ? void 0 : be.itemId) ?? "").trim() === F) {
          E = Pe;
          break;
        }
      const j = ((Se = k == null ? void 0 : k.system) == null ? void 0 : Se.abilityType) ?? "", re = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—", J = (((ke = k == null ? void 0 : k.system) == null ? void 0 : ke.description) ?? "").trim(), Ke = J ? J.length > 60 ? J.slice(0, 57) + "…" : J : "—";
      return {
        itemId: F,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: re,
        description: Ke,
        kp: Number((Ne = k == null ? void 0 : k.system) == null ? void 0 : Ne.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: j === "active",
        slotKey: E ?? "",
        equipped: !!E
      };
    });
    const C = l.filter((k) => k.type === "Targy");
    e.itemsTable = C.map((k) => {
      const F = (k == null ? void 0 : k.system) ?? {}, E = (F.description ?? "").trim(), j = E ? E.length > 60 ? E.slice(0, 57) + "…" : E : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: F.quantity != null ? String(F.quantity).trim() : "1",
        description: j
      };
    });
    const x = l.filter((k) => k.type === "Egyeb");
    e.egyebList = x.map((k) => {
      const E = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), j = E ? E.length > 80 ? E.slice(0, 77) + "…" : E : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: j
      };
    });
    const N = (((St = e.weaponsTable) == null ? void 0 : St.length) ?? 0) > 0 || (((Ie = e.armorTable) == null ? void 0 : Ie.length) ?? 0) > 0 || (((Le = e.microchipsTable) == null ? void 0 : Le.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !N;
    const z = ((We = t == null ? void 0 : t.system) == null ? void 0 : We.abilities) ?? {}, V = l.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var F, E;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((F = k.system) == null ? void 0 : F.description) ?? "",
        kp: Number(((E = k.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), H = new Map(V.map((k) => [k.id, k])), G = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = G, e.abilityHatterSlot = G;
    const ie = (k) => {
      const F = z[k];
      return F ? Array.isArray(F == null ? void 0 : F.items) ? F.items : Array.isArray(F) ? F : [] : [];
    }, W = (k) => (k || []).map((F) => {
      const E = H.get(F);
      return E ? { id: E.id, name: E.name, img: E.img, description: E.description, kp: E.kp } : null;
    }).filter(Boolean);
    e.abilityPassiveList = W(ie("passive")), e.abilityActiveList = W(ie("active"));
    const M = t == null ? void 0 : t.id, Q = !!((Ye = (ht = game.combat) == null ? void 0 : ht.combatants) != null && Ye.some(
      (k) => {
        var F;
        return (((F = k.actor) == null ? void 0 : F.id) ?? k.actorId) === M;
      }
    ));
    e.showHarcSection = Q;
    const oe = ((Je = e.system) == null ? void 0 : Je.resources) ?? {}, ce = (Xe = (Qe = e.system) == null ? void 0 : Qe.combat) == null ? void 0 : Xe.initiativeResult, Z = typeof ce == "number" ? ce : -1, $e = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], we = (et = (Ze = e.system) == null ? void 0 : Ze.combat) == null ? void 0 : et.initiativeRanges, se = Array.isArray(we) ? we.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ae = (se.length > 0 ? se : $e).slice().sort((k, F) => k.min - F.min), He = 3;
    let ge = se.length > 0 ? se : [];
    ge.length < He && (ge = [...ge, ...Array(He - ge.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ge.map((k, F) => ({
      ...k,
      isFirst: F === 0,
      isLast: F === ge.length - 1
    }));
    let xe = 0;
    if (typeof Z == "number" && Z >= 0 && ae.length > 0) {
      const k = ae[0], F = ae[ae.length - 1];
      let E = null;
      Z <= k.max ? E = k : Z >= F.min ? E = F : E = ae.find((j) => Z >= j.min && Z <= j.max), E && (xe = E.kp);
    }
    const ut = ae.length > 0 ? ae[ae.length - 1] : null, dt = Math.min(10, ut ? ut.kp : 6), Re = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, dt)).map((k, F) => {
      const E = F + 1, j = !!Number(oe[k]), re = E <= xe;
      return { index: E, used: j, usable: re };
    }), mt = Math.ceil(Re.length / 2);
    return e.kpDotsRow1 = Re.slice(0, mt), e.kpDotsRow2 = Re.slice(mt), e.canEditInitiative = !!((tt = game.user) != null && tt.isGM), e.showInitiativeResult = typeof ce == "number", e.initiativeResult = e.showInitiativeResult ? ce : "", e.speedUnitForSelect = ((st = (it = e.system) == null ? void 0 : it.combat) == null ? void 0 : st.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(i) {
    var p, y, b;
    super._attachFrameListeners(i);
    const e = ((p = i == null ? void 0 : i.querySelector) == null ? void 0 : p.call(i, "form.votv.npc-sheet")) ?? i ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (u) => {
      var o, a, f;
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const s = ((f = (a = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : f.implementation) ?? globalThis.FilePicker;
      new s({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (u) => {
      var o, a, f;
      u.preventDefault();
      const s = (a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId;
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      (f = c == null ? void 0 : c.sheet) == null || f.render(!0);
    });
    const n = (u) => {
      var o, a;
      const s = (o = u == null ? void 0 : u.dataset) == null ? void 0 : o.itemId;
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      (a = c == null ? void 0 : c.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (u) => {
      u.preventDefault(), n(u.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (u) => {
      var a, f, h, v;
      u.preventDefault();
      const s = (f = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : f.call(a, ".karakter-weapon-slot"), c = (((h = s == null ? void 0 : s.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (u) => {
      var a;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget, c = (((a = s == null ? void 0 : s.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-8ORc-FmD.mjs");
      o(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (u) => {
      var o, a, f, h, v;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget;
      let c = (((o = s == null ? void 0 : s.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !c && ((a = s == null ? void 0 : s.dataset) != null && a.slot) && (c = (((((h = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : h.weapons) ?? {})[s.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = s == null ? void 0 : s.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (u) => {
      if (u.preventDefault(), u.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: s } = await import("./roll-sheet-8ORc-FmD.mjs");
      s(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (u) => {
      var a, f;
      u.preventDefault(), u.stopPropagation();
      const s = u.currentTarget, c = parseInt(s.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const o = !!Number((f = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : f[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (u) => {
      var f, h;
      u.preventDefault();
      const s = u.currentTarget, c = (((f = s == null ? void 0 : s.dataset) == null ? void 0 : f.skill) ?? "").trim(), o = ((h = s == null ? void 0 : s.textContent) == null ? void 0 : h.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-8ORc-FmD.mjs");
      a(this.actor, c, o);
    }), t.on("click", ".karakter-ability-chat", async (u) => {
      var c, o;
      u.preventDefault();
      const s = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      s && await this._postAbilityToChat(s);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var o, a;
      u.preventDefault();
      const s = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(s) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(s));
    }), t.on("click", ".karakter-ability-pill-remove", async (u) => {
      var h, v, I, S, _, L;
      if (u.preventDefault(), !u.altKey) return;
      const s = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, c = (S = (I = u.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!s || !c || !this.actor) return;
      const o = ((_ = this.actor.system) == null ? void 0 : _.abilities) ?? {}, f = (Array.isArray((L = o[s]) == null ? void 0 : L.items) ? o[s].items.slice() : []).filter((P) => P !== c);
      await this.actor.update({ [`system.abilities.${s}.items`]: f }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const s = (o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.slot;
      s && (await this.actor.update({
        [`system.abilities.${s}.itemId`]: "",
        [`system.abilities.${s}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (u) => {
      var h, v;
      if (u.preventDefault(), !u.altKey) return;
      const s = u.currentTarget, c = (((h = s == null ? void 0 : s.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const o = this.actor, a = (((v = s == null ? void 0 : s.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), f = {};
      a && (f[`system.weapons.${a}.itemId`] = "", f[`system.weapons.${a}.name`] = "", f[`system.weapons.${a}.damage`] = "", f[`system.weapons.${a}.bonus`] = ""), Object.keys(f).length && await o.update(f), await o.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (u) => {
      var c, o;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((o = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !s || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (u) => {
      var f, h, v, I;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((h = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((S) => {
        var _;
        return (((_ = c[S]) == null ? void 0 : _.itemId) ?? "").trim() === s;
      });
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: "",
        [`system.gear.microchips.${a}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (u) => {
      var o, a;
      if (u.preventDefault(), !u.altKey) return;
      const s = (((a = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!s || !this.actor) return;
      const c = this.actor.items.get(s);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [s]), typeof this.render == "function" && this.render(!0));
    });
    const d = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (b = (y = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : y.call(e, d)) == null || b.forEach((u) => {
      var s;
      (((s = u.dataset) == null ? void 0 : s.itemId) ?? "").trim() && (u.draggable = !0);
    }), t.on("dragstart", d, (u) => {
      var f, h, v;
      const s = u.currentTarget, c = (h = (f = s == null ? void 0 : s.dataset) == null ? void 0 : f.itemId) == null ? void 0 : h.trim();
      if (!c || !this.actor) return;
      const o = this.actor.items.get(c);
      if (!o) return;
      const a = o.uuid;
      u.dataTransfer && (u.dataTransfer.setData("text/plain", a), u.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), u.dataTransfer.effectAllowed = "copyMove"), typeof ((v = u.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && s && u.dataTransfer.setDragImage(s, 0, 0);
    });
    const r = this, l = (u) => {
      if (!u) return;
      const s = r._getFormDataForUpdate(u);
      Object.keys(s).length !== 0 && r.actor.update(s).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, m = (u) => {
      var s, c, o;
      return u && (((c = (s = r.element) == null ? void 0 : s.contains) == null ? void 0 : c.call(s, u)) || r.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(r.id)}`)));
    };
    r._votvNpcBlur = (u) => {
      var f;
      const s = u.target;
      if (!s || !s.form) return;
      const c = s.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const o = s.form;
      if (!m(o)) return;
      const a = u.relatedTarget;
      a && (o.contains(a) || r.id && ((f = a.closest) != null && f.call(a, `#${CSS.escape(r.id)}`))) || l(o);
    }, document.body.addEventListener("blur", r._votvNpcBlur, !0), r._votvNpcItemHookRegistered || (r._votvNpcItemUpdateHook = (u, s, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, r._votvNpcItemDeleteHook = (u, s, c) => {
      var o;
      r.actor && ((o = u == null ? void 0 : u.parent) == null ? void 0 : o.id) === r.actor.id && r.render(!0);
    }, Hooks.on("updateItem", r._votvNpcItemUpdateHook), Hooks.on("deleteItem", r._votvNpcItemDeleteHook), r._votvNpcItemHookRegistered = !0);
  }
  async _preClose(i) {
    var t, n, d;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const r = this._getFormDataForUpdate(e);
      Object.keys(r).length > 0 && await this.actor.update(r).catch((l) => console.warn("VoidNpcSheet save on preClose failed", l));
    }
    return (d = super._preClose) == null ? void 0 : d.call(this, i);
  }
  _tearDown(i) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, i);
  }
  /**
   * Támadás dobás NPC-nek – ugyanolyan képlet, mint a karakter lapon:
   * 3d6 + (Kézifegyver Használat / Löveghasználat + fegyver bónusz)
   * @param {string} slot - pl. "slot1"
   */
  async _rollWeapon(i) {
    var S, _, L, P, C;
    const e = this.actor;
    if (!e) return;
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[i] ?? {}, d = ((_ = e.system) == null ? void 0 : _.skills) ?? {}, r = ((L = e.items) == null ? void 0 : L.filter((x) => x.type === "Fegyver")) ?? [];
    let l = null;
    n.itemId && (l = r.find((x) => x.id === n.itemId) ?? null);
    const m = l && l.name || n.name || "Fegyver", p = Number(n.bonus || 0) || 0, y = ((P = l == null ? void 0 : l.system) == null ? void 0 : P.type) || "kinetic", b = (((C = l == null ? void 0 : l.system) == null ? void 0 : C.skillKey) ?? "").trim(), u = b && d[b] !== void 0 ? b : y === "explosive" ? "grenadeUse" : "firearms", s = Number(d[u] || 0) || 0, c = p + s, a = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, f = new Roll(a);
    await f.evaluate({ async: !0 });
    const { resultType: h, label: v } = Ot(f), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(i, e = "") {
    var m, p, y, b, u, s, c, o, a, f;
    const t = this.actor;
    if (!t) return;
    const n = ((p = (m = t.items).get) == null ? void 0 : p.call(m, i)) ?? ((b = (y = t.items.contents) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (h) => h.id === i));
    if (!n || n.type !== "Fegyver") return;
    let d = (((u = n.system) == null ? void 0 : u.damage) ?? "").trim();
    if (!d && e && (d = (((((s = t.system) == null ? void 0 : s.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !d) {
      (f = (c = ui.notifications) == null ? void 0 : c.warn) == null || f.call(c, ((a = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : a.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const r = new Roll(d);
    await r.evaluate({ async: !0 });
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _onDropItem(i, e) {
    var y, b, u, s, c, o, a, f, h, v, I, S, _, L, P, C, x;
    if (!this.actor) return (y = super._onDropItem) == null ? void 0 : y.call(this, i, e);
    const n = ((N) => {
      var V;
      if (!N) return null;
      const z = N.uuid ?? N.documentUuid ?? ((V = N.data) == null ? void 0 : V.uuid) ?? (typeof N == "string" ? N : null);
      if (z) return z;
      if (typeof N == "object") {
        for (const H of Object.values(N))
          if (typeof H == "string" && H.includes(".") && H.startsWith("Item.")) return H;
      }
      return null;
    })(e);
    if (!n) return (b = super._onDropItem) == null ? void 0 : b.call(this, i, e);
    const d = await fromUuid(n);
    if (!d || d.documentName !== "Item") return (u = super._onDropItem) == null ? void 0 : u.call(this, i, e);
    if (d.type === "Pancel") {
      (c = (s = ui.notifications) == null ? void 0 : s.info) == null || c.call(s, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const r = this.actor;
    if (d.type === "Kepesseg" || d.type === "ability") {
      let N = d.id;
      if (((o = d.parent) == null ? void 0 : o.id) !== r.id) {
        const ie = foundry.utils.mergeObject(d.toObject(), { type: "Kepesseg" });
        N = ((a = (await r.createEmbeddedDocuments("Item", [ie]))[0]) == null ? void 0 : a.id) ?? N;
      }
      const z = (((f = d.system) == null ? void 0 : f.kind) ?? "passive").toString(), V = ((h = r.system) == null ? void 0 : h.abilities) ?? {}, H = z === "active" ? "active" : "passive", G = Array.isArray((v = V[H]) == null ? void 0 : v.items) ? V[H].items.slice() : Array.isArray(V[H]) ? V[H].slice() : [];
      G.includes(N) || G.push(N), await r.update({ [`system.abilities.${H}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = d.parent) == null ? void 0 : I.id) === r.id) return;
    const l = d.toObject();
    d.type === "Fegyver" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 }), d.type === "Pancel" && foundry.utils.mergeObject(l, { system: { ...l.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const p = (S = (await r.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : S.id;
    if (d.type === "Fegyver" && p) {
      const N = ((_ = r.system) == null ? void 0 : _.weapons) ?? {}, z = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], V = (N.slotOrder ?? "").trim(), H = V ? V.split(/\s*,\s*/).filter((W) => z.includes(W)) : [];
      let G = z.find((W) => {
        var M;
        return !(((M = N[W]) == null ? void 0 : M.itemId) ?? "").trim();
      });
      G || (G = z.find((W) => !H.includes(W)) ?? "slot1");
      const ie = H.includes(G) ? H : [...H, G].filter((W) => z.includes(W));
      await r.update({
        "system.weapons.slotOrder": ie.join(","),
        [`system.weapons.${G}.itemId`]: p,
        [`system.weapons.${G}.name`]: d.name ?? "",
        [`system.weapons.${G}.damage`]: ((L = d.system) == null ? void 0 : L.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((P = d.system) == null ? void 0 : P.bonus) ?? ""
      });
    }
    if (d.type === "MikroChip" && p) {
      const N = ((x = (C = r.system) == null ? void 0 : C.gear) == null ? void 0 : x.microchips) ?? {}, V = ["slot1", "slot2", "slot3"].find((H) => {
        var G;
        return !(((G = N[H]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      V && await r.update({
        [`system.gear.microchips.${V}.itemId`]: p,
        [`system.gear.microchips.${V}.name`]: d.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(i) {
    var y, b, u, s, c, o;
    const e = (b = (y = this.actor) == null ? void 0 : y.items) == null ? void 0 : b.get(i);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((s = e.system) == null ? void 0 : s.kp) ?? 0) || 0, d = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), r = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", l = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = d ? `<p>${d}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${r}</p>
      ${l}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: p,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(i) {
    var m, p, y, b, u, s;
    const e = (p = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : p.get(i);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((y = e.system) == null ? void 0 : y.description) ?? "").trim();
    let n, d = "";
    if (e.type === "MikroChip") {
      const c = ((b = e.system) == null ? void 0 : b.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const o = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        o > 0 && (d = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const r = t ? `<p>${t}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${d}
      ${r}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((s = this.actor) == null ? void 0 : s.name) ?? void 0 }),
      content: l,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(i) {
    var t;
    const e = {};
    for (const n of i.elements) {
      if (!n.name || n.disabled || n.type === "radio" && !n.checked) continue;
      let d;
      if (n.type === "checkbox")
        d = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        d = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const r = (n.value ?? "").trim();
        if (r === "") continue;
        d = Number(r) || 0;
      } else
        d = n.value ?? "";
      d !== void 0 && foundry.utils.setProperty(e, n.name, d);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const n = e.name;
      (n === void 0 || typeof n == "string" && n.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
Y(ne, "PARTS", foundry.utils.mergeObject(
  U(ne, ne, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Y(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ne, ne, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((ri = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : ri.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((oi = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : oi.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((li = (ci = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : ci.window) == null ? void 0 : li.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ct = ne;
const Ki = [
  { value: "deception", label: "Átverés" },
  { value: "medicalCare", label: "Betegellátás" },
  { value: "endurance", label: "Erőnlét" },
  { value: "perception", label: "Észlelés" },
  { value: "cooking", label: "Főzés" },
  { value: "quickThinking", label: "Gyorsgondolkodás" },
  { value: "combatTraining", label: "Harcképzettség" },
  { value: "vehicleOperation", label: "Járműirányítás" },
  { value: "grenadeUse", label: "Kézifegyver Használat" },
  { value: "lexicalKnowledge", label: "Lexikális Tudás" },
  { value: "stealth", label: "Lopakodás" },
  { value: "firearms", label: "Löveghasználat" },
  { value: "intimidation", label: "Megfélemlítés" },
  { value: "persuasion", label: "Meggyőzés" },
  { value: "memory", label: "Memória" },
  { value: "mentalStrength", label: "Mentális Erősség" },
  { value: "languages", label: "Nyelvek" },
  { value: "luck", label: "Szerencse" },
  { value: "technicalKnowledge", label: "Technikai Tudás" },
  { value: "music", label: "Zene" }
];
var di;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ki, e;
  }
};
Y(ue, "PARTS", foundry.utils.mergeObject(U(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Y(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ue, ue, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((di = U(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : di.form) ?? {}, { submitOnChange: !1 })
}));
let qt = ue;
var mi;
const de = class de extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
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
Y(de, "PARTS", foundry.utils.mergeObject(U(de, de, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Y(de, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(de, de, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((mi = U(de, de, "DEFAULT_OPTIONS")) == null ? void 0 : mi.form) ?? {}, { submitOnChange: !1 })
}));
let Lt = de;
var pi;
const me = class me extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
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
Y(me, "PARTS", foundry.utils.mergeObject(U(me, me, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Y(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(me, me, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((pi = U(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : pi.form) ?? {}, { submitOnChange: !1 })
}));
let Nt = me;
var fi;
const pe = class pe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
    }, e._votvInput = (r) => {
      var p;
      const l = r.target;
      if ((l == null ? void 0 : l.name) === "name") return;
      const m = (l == null ? void 0 : l.form) ?? ((p = l == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      d(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(m), 300));
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
Y(pe, "PARTS", foundry.utils.mergeObject(U(pe, pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Y(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(pe, pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((fi = U(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : fi.form) ?? {}, { submitOnChange: !0 })
}));
let Pt = pe;
var yi;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
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
Y(fe, "PARTS", foundry.utils.mergeObject(U(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Y(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(fe, fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((yi = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : yi.form) ?? {}, { submitOnChange: !1 })
}));
let At = fe;
var gi;
const ye = class ye extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (r) => {
      var p, y, b, u, s, c, o;
      if (!e.isEditable || !((y = (p = r.target) == null ? void 0 : p.closest) != null && y.call(p, ".profile")) && ((u = (b = r.target) == null ? void 0 : b.getAttribute) == null ? void 0 : u.call(b, "data-edit")) !== "img") return;
      r.preventDefault(), r.stopPropagation();
      const l = ((o = (c = (s = foundry.applications) == null ? void 0 : s.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (i == null ? void 0 : i.nodeType) === 9 ? i.body ?? i.documentElement : i;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (r) => {
      if (!r) return;
      const l = e._getFormDataForUpdate(r);
      Object.keys(l).length !== 0 && e.document.update(l).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, d = (r) => {
      var l, m, p;
      return r && (((m = (l = e.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, r)) || e.id && ((p = r.closest) == null ? void 0 : p.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, p, y;
      const l = ((m = r.target) == null ? void 0 : m.form) ?? ((y = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : y.call(p, "form"));
      d(l) && n(l);
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
Y(ye, "PARTS", foundry.utils.mergeObject(U(ye, ye, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Y(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ye, ye, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((gi = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : gi.form) ?? {}, { submitOnChange: !1 })
}));
let Ft = ye;
const bi = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ki(w) {
  return w === "Apró" ? 0.5 : w === "Nagy" ? 2 : w === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, d, r, l;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = qi, CONFIG.Actor.dataModels.Npc = hi, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Qt, CONFIG.Item.dataModels.weapon = Qt, CONFIG.Item.dataModels.Pancel = Pi, CONFIG.Item.dataModels.MikroChip = Ai, CONFIG.Item.dataModels.Kepesseg = ei, CONFIG.Item.dataModels.ability = ei, CONFIG.Item.dataModels.Targy = Ei, CONFIG.Item.dataModels.Egyeb = xi, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", (r = CONFIG.Combat).initiative ?? (r.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (l = CONFIG.Item).typeLabels ?? (l.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ";
  const w = "systems/vacuum-of-the-void/assets/status";
  CONFIG.statusEffects = [
    { id: "dead", name: "VOTV.StatusDead", img: `${w}/dead_icon.svg` },
    { id: "unconscious", name: "VOTV.StatusUnconscious", img: `${w}/unconcious_icon.svg` },
    { id: "sleeping", name: "VOTV.StatusSleeping", img: `${w}/sleeping_icon.svg` },
    { id: "stunned", name: "VOTV.StatusStunned", img: `${w}/stunned_icon.svg` },
    { id: "fallen", name: "VOTV.StatusFallen", img: `${w}/fallen_icon.svg` },
    { id: "grappled", name: "VOTV.StatusGrappled", img: `${w}/grappled_icon.svg` },
    { id: "immobilized", name: "VOTV.StatusImmobilized", img: `${w}/immobilized_icon.svg` },
    { id: "blinded", name: "VOTV.StatusBlinded", img: `${w}/blinded_icon.svg` },
    { id: "deafened", name: "VOTV.StatusDeafened", img: `${w}/deafened_icon.svg` },
    { id: "frightened", name: "VOTV.StatusFrightened", img: `${w}/frightened_icon.svg` },
    { id: "burning", name: "VOTV.StatusBurning", img: `${w}/burning_icon.svg` },
    { id: "bleeding", name: "VOTV.StatusBleeding", img: `${w}/bleeding_icon.svg` },
    { id: "diseased", name: "VOTV.StatusDiseased", img: `${w}/diseased_icon.svg` },
    { id: "poisoned", name: "VOTV.StatusPoisoned", img: `${w}/poisoned_icon.svg` },
    { id: "invisible", name: "VOTV.StatusInvisible", img: `${w}/invisible_icon.svg` },
    { id: "drowning", name: "VOTV.StatusDrowning", img: `${w}/drowning_icon.svg` },
    { id: "intoxicated", name: "VOTV.StatusIntoxicated", img: `${w}/intoxicated_icon.svg` },
    { id: "hidden", name: "VOTV.StatusHidden", img: `${w}/hidden_icon.svg` },
    { id: "ready", name: "VOTV.StatusReady", img: `${w}/ready_icon.svg` },
    { id: "lookaround", name: "VOTV.StatusLookaround", img: `${w}/lookaraound_icon.svg` },
    { id: "dodge", name: "VOTV.StatusDodge", img: `${w}/dodge_icon.svg` },
    { id: "halfcover", name: "VOTV.StatusHalfcover", img: `${w}/halfcover_icon.svg` },
    { id: "threequarteredcover", name: "VOTV.StatusThreequarteredcover", img: `${w}/threequarteredcover_icon.svg` },
    { id: "fullcover", name: "VOTV.StatusFullcover", img: `${w}/fullcover_icon.svg` }
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", lt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ct, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", qt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Lt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Nt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Pt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", At, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ft, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), Hooks.on("updateActor", (m, p, y, b) => {
    if ((m == null ? void 0 : m.type) !== "Karakter" || !(m != null && m.id)) return;
    const u = m.id;
    setTimeout(() => {
      var a, f, h, v;
      const s = (a = game.actors) == null ? void 0 : a.get(u);
      if (!s || s.type !== "Karakter") return;
      const c = lt.getTotalSpeedRaw(s), o = (f = s.effects) == null ? void 0 : f.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (c <= 0 && !o) {
        const I = ((v = (h = CONFIG.statusEffects) == null ? void 0 : h.find((S) => S.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        s.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: I,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: s.uuid
        }]).then(() => {
          var _, L;
          const S = ((_ = canvas.tokens) == null ? void 0 : _.placeables) ?? [];
          for (const P of S)
            ((L = P == null ? void 0 : P.document) == null ? void 0 : L.actorId) === u && typeof P.draw == "function" && P.draw();
        }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect create failed:", S));
      } else c > 0 && o && o.delete().then(() => {
        var S, _;
        const I = ((S = canvas.tokens) == null ? void 0 : S.placeables) ?? [];
        for (const L of I)
          ((_ = L == null ? void 0 : L.document) == null ? void 0 : _.actorId) === u && typeof L.draw == "function" && L.draw();
      }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", I));
    }, 0);
  });
  const i = 500;
  Hooks.on("updateActor", (m, p, y, b) => {
    var S, _, L, P, C, x, N, z, V, H, G, ie, W;
    const u = m == null ? void 0 : m.id;
    if (!u) return;
    if ((m.type === "Karakter" || m.type === "Npc") && ((S = p == null ? void 0 : p.system) != null && S.combat) && "initiativeResult" in p.system.combat) {
      const M = Number((L = (_ = m.system) == null ? void 0 : _.combat) == null ? void 0 : L.initiativeResult), Q = Number.isFinite(M) ? M : 0, oe = game.combat;
      if (oe) {
        const ce = ((P = oe.combatants) == null ? void 0 : P.contents) ?? Array.from(oe.combatants ?? []);
        for (const Z of ce)
          if (((C = Z.actor) == null ? void 0 : C.id) === u || Z.actorId === u) {
            oe.updateEmbeddedDocuments("Combatant", [{ _id: Z.id, initiative: Q }]).catch(() => {
            });
            break;
          }
      }
    }
    if (m.type === "Npc" && ((x = p == null ? void 0 : p.system) != null && x.identity) && "size" in p.system.identity) {
      const M = ki((z = (N = m.system) == null ? void 0 : N.identity) == null ? void 0 : z.size);
      m.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((Q) => console.warn("Vacuum of the Void | NPC token size update failed for", m.name, Q));
    }
    const s = document.activeElement, c = s && (s.tagName === "INPUT" && s.type !== "checkbox" && s.type !== "radio" || s.tagName === "TEXTAREA" || s.isContentEditable), o = [], a = (V = game.actors) == null ? void 0 : V.get(u);
    a != null && a.apps && o.push(...Array.from(a.apps));
    const f = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of f)
      ((H = M.document) == null ? void 0 : H.id) !== u || ((G = M.document) == null ? void 0 : G.documentName) !== "Actor" || ((ie = M.constructor) == null ? void 0 : ie.name) !== "VoidKarakterSheet" || o.includes(M) || o.push(M);
    if (c && o.some((M) => {
      const Q = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return Q && Q.contains(s);
    })) return;
    const v = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < i ? v.appId : null;
    setTimeout(() => {
      for (const M of o)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== I && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (m, p, y, b) => {
    var o, a, f;
    const u = m == null ? void 0 : m.parent;
    if (!u || u.documentName !== "Actor" || u.type !== "Karakter" || m.type !== "Fegyver") return;
    const s = ((o = u.system) == null ? void 0 : o.weapons) ?? {}, c = {};
    for (const [h, v] of Object.entries(s)) {
      if (!h.startsWith("slot")) continue;
      const I = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !I || I !== m.id || (c[`system.weapons.${h}.name`] = m.name ?? "", c[`system.weapons.${h}.damage`] = ((a = m.system) == null ? void 0 : a.damage) ?? "", c[`system.weapons.${h}.bonus`] = ((f = m.system) == null ? void 0 : f.bonus) ?? "");
    }
    Object.keys(c).length && u.update(c);
  });
});
Hooks.on("ready", () => {
  var w, i;
  document.body.addEventListener("click", async (e) => {
    var f, h, v, I, S, _, L, P, C, x, N, z, V, H, G, ie, W, M, Q, oe, ce, Z, $e;
    const t = (h = (f = e.target) == null ? void 0 : f.closest) == null ? void 0 : h.call(f, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const d = (v = game.messages) == null ? void 0 : v.get(n), r = (S = (I = d == null ? void 0 : d.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!r) return;
    const l = r.actorId ?? ((_ = d == null ? void 0 : d.speaker) == null ? void 0 : _.actor) ?? "";
    if (!l) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((L = game.actors) == null ? void 0 : L.get(r.actorId)) ?? ((P = game.actors) == null ? void 0 : P.get(l));
    if (m || (m = ((x = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : x.flatMap((se) => {
      var Oe;
      return ((Oe = se.tokens) == null ? void 0 : Oe.contents) ?? [];
    }).map((se) => se.actor).find((se) => se && (se.id === l || se.id === r.actorId))) ?? null), !m) return;
    const p = r.itemId ? ((z = (N = m.items) == null ? void 0 : N.get) == null ? void 0 : z.call(N, r.itemId)) ?? ((G = (H = (V = m.items) == null ? void 0 : V.contents) == null ? void 0 : H.find) == null ? void 0 : G.call(H, (we) => we.id === r.itemId)) : null;
    let y = (r.damageFormula ?? "").trim();
    if (y || (y = (((ie = p == null ? void 0 : p.system) == null ? void 0 : ie.damage) ?? "").trim()), !y && r.slotKey && (y = (((((W = m.system) == null ? void 0 : W.weapons) ?? {})[r.slotKey] ?? {}).damage ?? "").trim()), !y) {
      (ce = (M = ui.notifications) == null ? void 0 : M.warn) == null || ce.call(M, ((oe = (Q = game.i18n) == null ? void 0 : Q.localize) == null ? void 0 : oe.call(Q, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const b = new Roll(y);
    await b.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, s = r.targetName || "", c = r.hitLocationName || "", o = ((p == null ? void 0 : p.name) ?? (r.slotKey ? (($e = (((Z = m.system) == null ? void 0 : Z.weapons) ?? {})[r.slotKey]) == null ? void 0 : $e.name) ?? "" : "")) || "Fegyver";
    let a = s ? `${o} – sebzés – ${s}` : `${o} – sebzés`;
    c && (a += ` (${c})`), await b.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var r, l, m, p, y, b;
      if (!((l = (r = e.target) == null ? void 0 : r.closest) != null && l.call(r, "#actors"))) return;
      const t = (p = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : p.call(m, "[data-document-id]"), n = (y = t == null ? void 0 : t.getAttribute) == null ? void 0 : y.call(t, "data-document-id");
      if (!n) return;
      const d = n.includes(".") ? n.split(".").pop() : n;
      d && ((b = game.actors) != null && b.get(d)) && (game.votv._dragSourceActorId = d);
    },
    !0
  ), (async () => {
    var t, n, d, r;
    const e = ((t = game.actors) == null ? void 0 : t.filter((l) => l.type === "Karakter")) ?? [];
    for (const l of e) {
      const m = lt.getTotalSpeedRaw(l), p = (n = l.effects) == null ? void 0 : n.find((y) => y.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !p) {
        const y = ((r = (d = CONFIG.statusEffects) == null ? void 0 : d.find((b) => b.id === "immobilized")) == null ? void 0 : r.img) ?? "";
        await l.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: y,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: l.uuid
        }]).catch(() => {
        });
      } else m > 0 && p && await p.delete().catch(() => {
      });
    }
  })(), (w = game.user) != null && w.isGM && ((i = game.scenes) == null ? void 0 : i.size) === 0 && (async () => {
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
        background: { src: bi },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, r = await n.create(d);
      r && console.log("Vacuum of the Void | Default scene created:", r.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var r, l, m, p, y, b;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((r = game.actors) == null ? void 0 : r.filter((u) => u.type === "Karakter")) ?? [];
    for (const u of t)
      try {
        const s = u.prototypeToken, c = ((l = s == null ? void 0 : s.bar1) == null ? void 0 : l.attribute) ?? "", o = ((m = s == null ? void 0 : s.bar2) == null ? void 0 : m.attribute) ?? "";
        (c || o) && await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (s) {
        console.warn("Vacuum of the Void | Prototype token update failed for", u.name, s);
      }
    for (const u of game.scenes ?? []) {
      const s = ((p = u.tokens) == null ? void 0 : p.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const c of s)
        try {
          await c.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, o);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, d = ((y = game.actors) == null ? void 0 : y.filter((u) => u.type === "Npc")) ?? [];
    for (const u of d)
      try {
        await u.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (s) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", u.name, s);
      }
    for (const u of game.scenes ?? []) {
      const s = ((b = u.tokens) == null ? void 0 : b.filter((c) => {
        var o;
        return ((o = c.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const c of s)
        try {
          await c.update(n);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (w, i, e) => {
  var r, l, m, p;
  const t = (r = game.votv) == null ? void 0 : r._dragSourceActorId, n = t ?? w.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const d = n ? (l = game.actors) == null ? void 0 : l.get(n) : null;
  if (d) {
    if (d.type === "Karakter") {
      w.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (d.type === "Npc") {
      const y = ki((p = (m = d.system) == null ? void 0 : m.identity) == null ? void 0 : p.size);
      w.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: y,
        height: y
      });
    }
  }
});
Hooks.on("preCreateCombatant", (w, i, e) => {
  const t = w.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && w.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (w, i, e) => {
  const t = w.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const ji = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function vi(w) {
  const i = w == null ? void 0 : w.combatants, e = (i == null ? void 0 : i.contents) ?? (i ? Array.from(i) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(ji).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
}
Hooks.on("combatRound", (w, i, e) => {
  (e == null ? void 0 : e.direction) <= 0 || vi(w);
});
function wi() {
  var i, e, t;
  const w = /* @__PURE__ */ new Set();
  for (const n of ((i = game.actors) == null ? void 0 : i.filter((d) => d.type === "Karakter" || d.type === "Npc")) ?? []) {
    const d = n.apps ?? [], r = d.contents ? Array.from(d.contents) : Array.from(d);
    for (const l of r)
      !l || w.has(l.id) || (w.add(l.id), typeof l.render == "function" && l.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const d = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    d !== "Karakter" && d !== "Npc" || w.has(n.id) || (w.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(wi, 100);
});
Hooks.on("updateCombat", (w, i, e) => {
  (i == null ? void 0 : i.round) != null && vi(w), setTimeout(wi, 0);
});
Hooks.on("renderSidebarTab", (w, i, e) => {
  if ((w == null ? void 0 : w.id) !== "combat") return;
  const t = i[0] ?? i;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((d) => {
    d.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (w, i, e) => {
  var d;
  const t = w == null ? void 0 : w.object, n = ((d = t == null ? void 0 : t.document) == null ? void 0 : d.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const r = i[0] ?? i;
    r != null && r.classList && r.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (w, i) => {
  var e;
  (e = i == null ? void 0 : i.background) != null && e.src || w.updateSource({
    width: 3840,
    height: 2160,
    "background.src": bi,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (w, i, e) => {
  var p, y, b, u;
  const t = ((p = w.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, n = t.resultType, d = t.critLabel, r = t.weaponAttack, l = t.weapon;
  if (!n && !d && !r) return;
  const m = (y = i == null ? void 0 : i.querySelector) == null ? void 0 : y.call(i, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), d) {
      const s = m.querySelector(".votv-crit-label");
      if (s)
        s.textContent = d;
      else {
        const c = m.querySelector(".dice-total"), o = (c == null ? void 0 : c.parentElement) ?? m, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = d, o.appendChild(a);
      }
    }
    if (r && l && (l.actorId || (b = w.speaker) != null && b.actor)) {
      const s = m.querySelector(".dice-total"), c = (s == null ? void 0 : s.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const f = !!l.isHit, h = l.targetName || "Célpont";
        a.textContent = f ? `Találat – ${h}` : `Nem talált – ${h}`, c.appendChild(a);
      }
      if (l.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const f = document.createElement("button");
        f.type = "button", f.className = "votv-weapon-damage-chat";
        const h = l.hitLocationRoll, v = l.hitLocationName;
        f.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", f.dataset.actorId = String(l.actorId ?? ((u = w.speaker) == null ? void 0 : u.actor) ?? ""), f.dataset.itemId = String(l.itemId ?? ""), f.dataset.slotKey = String(l.slotKey ?? ""), f.dataset.targetName = String(l.targetName ?? ""), f.dataset.hitLocationName = String(l.hitLocationName ?? ""), f.dataset.messageId = String(w.id ?? ""), c.appendChild(f);
      }
    }
  }
});
export {
  lt as V,
  Ot as c
};
//# sourceMappingURL=vacuum-of-the-void-C3UCXeJd.mjs.map
