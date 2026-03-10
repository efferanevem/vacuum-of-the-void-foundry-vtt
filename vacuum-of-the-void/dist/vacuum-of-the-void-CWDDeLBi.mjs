var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (I, s, e) => s in I ? Hs(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var X = (I, s, e) => Vs(I, typeof s != "symbol" ? s + "" : s, e);
var U = (I, s, e) => Gs(Bs(I), e, s);
const { HTMLField: Ws, NumberField: A, SchemaField: H, StringField: O, BooleanField: se, ArrayField: gt } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new H({
        name: new O({ required: !1, blank: !0, initial: "" }),
        player: new O({ required: !1, blank: !0, initial: "" }),
        level: new A({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new O({ required: !1, blank: !0, initial: "" }),
        assignment: new O({ required: !1, blank: !0, initial: "" }),
        subAssignment: new O({ required: !1, blank: !0, initial: "" }),
        background: new O({ required: !1, blank: !0, initial: "" }),
        languages: new O({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new O({ required: !1, blank: !0, initial: "" })
      }),
      resources: new H({
        health: new H({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new H({
          head: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          }),
          torso: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          }),
          arms: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          }),
          legs: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new se({ required: !1, initial: !1 }),
            box2: new se({ required: !1, initial: !1 }),
            box3: new se({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new H({
          head: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new H({
          head: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new H({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap / NPC: KP ikonok külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált); NPC-nél akár 10 is
        kpDot1: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot7: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot8: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot9: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot10: new A({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new H({
        defense: new A({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new A({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new O({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new A({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new gt(
          new H({
            min: new A({ required: !1, integer: !0, initial: 0 }),
            max: new A({ required: !1, integer: !0, initial: 0 }),
            kp: new A({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new H({
        deception: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new O({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new O({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new O({ required: !1, blank: !0, initial: "" }),
        combatTraining: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new A({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new H({
        slotOrder: new O({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new H({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new H({
        microchips: new H({
          slot1: new H({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new se({ required: !1, initial: !1 })
          }),
          slot2: new H({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new se({ required: !1, initial: !1 })
          }),
          slot3: new H({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new se({ required: !1, initial: !1 })
          })
        }),
        equipment: new O({ required: !1, blank: !0, initial: "" }),
        armor: new gt(
          new H({
            name: new O({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new O({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new O({ required: !1, blank: !0, initial: "" }),
            level: new O({ required: !1, blank: !0, initial: "" }),
            other: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new gt(
          new H({
            name: new O({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new H({
        faji: new H({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new H({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        passive: new H({
          items: new gt(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new gt(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new Ws({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Et, SchemaField: Js } = foundry.data.fields;
class Ys extends Vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Js({
        body: new Et({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Et({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Et({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Xs, StringField: ms } = foundry.data.fields;
class Qs extends Vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Xs({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new ms({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new ms({ required: !1, blank: !0, initial: "" })
      })
    };
  }
}
const { BooleanField: Zs, NumberField: gi, StringField: Ne } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Zs({ required: !1, initial: !1 }),
      type: new Ne({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ne({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ne({ required: !1, blank: !0, initial: "" }),
      damage: new Ne({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ne({ required: !1, blank: !0, initial: "" }),
      special: new Ne({ required: !1, blank: !0, initial: "" }),
      quantity: new Ne({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ne({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ei, StringField: Nt } = foundry.data.fields;
class ti extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ei({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Nt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Nt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Nt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Nt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Pt, StringField: fs } = foundry.data.fields;
class si extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new fs({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new fs({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Pt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Pt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Pt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ii, StringField: ys } = foundry.data.fields;
class gs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ys({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new ys({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ii({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: hs } = foundry.data.fields;
class ni extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new hs({ required: !1, blank: !0, initial: "" }),
      quantity: new hs({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ri } = foundry.data.fields;
class ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ri({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: $t, StringField: Ye, SchemaField: bs, ArrayField: oi } = foundry.data.fields;
class ci extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new $t({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new bs({
        max: new $t({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new $t({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new bs({
        items: new oi(
          new Ye({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new Ye({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new Ye({ required: !1, blank: !0, initial: "" })
    };
  }
}
function xt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const p = (o, i = 1) => {
    if (!Array.isArray(o)) return;
    let a = i;
    for (const c of o) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        p(c.terms, a);
        continue;
      }
      if (typeof c.operator == "string") {
        a = c.operator === "-" ? -1 : 1;
        continue;
      }
      const r = typeof c.faces == "number" ? c.faces : void 0, y = Array.isArray(c.results) ? c.results : null;
      if (!r || !y || r === 8 || r !== 6) continue;
      const h = !n && a >= 0 && (c.number === 3 || c.number === "3") ? (n = !0, s) : a >= 0 ? e : t;
      for (const k of y) {
        if (!k || k.discarded || k.hidden) continue;
        const S = Number(k.result ?? k);
        Number.isFinite(S) && h.push(S);
      }
    }
  };
  p(I.terms, 1);
  const l = s.filter((o) => o === 6).length, d = s.filter((o) => o === 1).length, u = e.filter((o) => o === 6).length, m = t.filter((o) => o === 6).length, f = l + u, g = d + m;
  return f > 0 && f === g ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : g >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : g === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function li(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var vs, ks, ws, Is;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, p, l, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    const p = this.element, l = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (p) {
      d.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = l.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const m = this.element, f = this.form ?? this.element, g = d.scrollState, o = d.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", a = () => {
      var r, y;
      if (this._applyScrollState(m, g), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(o.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = o.selectionStart ?? 0, h.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(m, g);
    };
    return (i || o) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), u;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const p = Math.floor(n / 3), l = Math.floor(2 * n / 3);
    return t <= p ? 1 : t <= l ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var d;
        return l.type === "Pancel" && ((d = l.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const d = String(((p = l.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(d);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var d;
        return l.type === "Pancel" && ((d = l.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const d = String(((p = l.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), u = Number(d);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var d;
        return l.type === "Pancel" && ((d = l.system) == null ? void 0 : d.equipped) === !0;
      }
    );
    let t = 0;
    for (const l of e) {
      const d = String(((p = l.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(d);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, g, o, i, a, c, r, y, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((g = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : g.value) ?? 0, n = ((o = e.currentHealth) == null ? void 0 : o.legs) ?? 0, p = W._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const l = Number(((a = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : a.givenSpeed) ?? 0) || 0;
    let d;
    p === 1 ? d = -6 : p === 2 ? d = -3 : d = l, d += W._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((r = (c = s.system) == null ? void 0 : c.combat) == null ? void 0 : r.speed) ?? 0) || 0, m = Number(((h = (y = s.system) == null ? void 0 : y.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return u + m + (Number.isFinite(d) ? d : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : W.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var g, o, i, a, c, r, y, h, k, S, T, D;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((a = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && a.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((r = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : r.resources) ?? {}, p = ((h = (y = n.hitLocations) == null ? void 0 : y.legs) == null ? void 0 : h.value) ?? 0, l = ((k = n.currentHealth) == null ? void 0 : k.legs) ?? 0, d = W._healthStatusFromRatio(l, p), u = Number(((D = (T = (S = this.actor) == null ? void 0 : S.system) == null ? void 0 : T.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let m;
    d === 0 ? m = 0 : d === 1 ? m = -6 : d === 2 ? m = -3 : m = u;
    const f = this._getTotalArmorSpeedPenalty();
    m += f, t.textContent = String(m);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var m, f, g, o, i, a, c, r, y, h, k, S, T;
    const e = s ?? this.form ?? this.element;
    let t = (m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((o = (g = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : g.combat) == null ? void 0 : o.givenProtection) ?? 0) || 0, p = (c = (a = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : a.has) != null && c.call(a, "lookaround") ? 1 : 0, l = (h = (y = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : y.has) != null && h.call(y, "halfcover") ? 3 : 0, d = (T = (S = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : S.has) != null && T.call(S, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + p + l + d;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (g) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, g)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${g}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), l = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(l == null ? void 0 : l.value) || 0, m = Number(d == null ? void 0 : d.value) || 0, f = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(u + m + f);
  }
  _writeTotalSpeed(s = null) {
    var c, r, y, h, k, S, T, D;
    const e = s ?? this.form ?? this.element, t = (C) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, C)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${C}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), l = t('input[name="system.combat.speed"]'), d = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((y = (r = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : r.has) != null && y.call(r, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((k = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : k.resources) ?? {}, m = ((T = (S = u.hitLocations) == null ? void 0 : S.legs) == null ? void 0 : T.value) ?? 0, f = ((D = u.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (W._healthStatusFromRatio(f, m) === 0) {
      n.textContent = "0";
      return;
    }
    const o = Number(l == null ? void 0 : l.value) || 0, i = Number(d == null ? void 0 : d.value) || 0, a = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(o + i + a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, d, u, m;
    const e = W.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, n = ((u = (d = t.hitLocations) == null ? void 0 : d[e]) == null ? void 0 : u.value) ?? 0, p = ((m = t.currentHealth) == null ? void 0 : m[e]) ?? 0;
    return W._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var d, u, m, f;
    const t = W.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((d = s == null ? void 0 : s.system) == null ? void 0 : d.resources) ?? {}, p = ((m = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : m.value) ?? 0, l = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return W._healthStatusFromRatio(l, p);
  }
  async _prepareContext(s) {
    var st, it, nt, rt, at, ot, ct, lt, ut, xe, dt, mt, Re, w, x, R, B, oe, Q, ge, pe, ce, _e, Me, je, Ot, Ct, qt, Lt, pt, We, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, rs, as, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((nt = (it = (st = this.actor.system) == null ? void 0 : st.resources) == null ? void 0 : it.stress) == null ? void 0 : nt.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, l = n.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of d) {
      const N = ((rt = p[b]) == null ? void 0 : rt.value) ?? 0, L = l[b] ?? 0;
      e.computedHealthStatus[b] = W._healthStatusFromRatio(L, N);
    }
    const u = (Number(l.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((b) => (Number(l[b]) || 0) === 0).length;
    e.showDeathSkull = u || f >= 2;
    const g = e.computedHealthStatus.legs ?? 3, o = Number(((ot = (at = this.actor.system) == null ? void 0 : at.combat) == null ? void 0 : ot.givenSpeed) ?? 0) || 0;
    let i;
    g === 0 ? i = 0 : g === 1 ? i = -6 : g === 2 ? i = -3 : i = o;
    const a = this._getTotalArmorSpeedPenalty();
    i += a, e.effectiveGivenSpeed = i;
    const c = Number(((lt = (ct = this.actor.system) == null ? void 0 : ct.combat) == null ? void 0 : lt.givenProtection) ?? 0) || 0, r = (dt = (xe = (ut = this.actor) == null ? void 0 : ut.statuses) == null ? void 0 : xe.has) != null && dt.call(xe, "lookaround") ? 1 : 0, y = (w = (Re = (mt = this.actor) == null ? void 0 : mt.statuses) == null ? void 0 : Re.has) != null && w.call(Re, "halfcover") ? 3 : 0, h = (B = (R = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : R.has) != null && B.call(R, "threequarteredcover") ? 6 : 0, k = c + this._getTotalArmorProtectionBonus() + r + y + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const S = ((oe = e.system) == null ? void 0 : oe.combat) ?? {};
    e.totalDefense = (Number(S.defense) || 0) + (Number(S.defenseBonus) || 0) + (Number(S.givenProtection) || 0);
    const T = Number(S.givenSpeed);
    let D = (Number(S.speed) || 0) + (Number(S.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    g === 0 && (D = 0), (pe = (ge = (Q = this.actor) == null ? void 0 : Q.statuses) == null ? void 0 : ge.has) != null && pe.call(ge, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (_e = (ce = e.system) == null ? void 0 : ce.combat) == null ? void 0 : _e.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const C = W.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(C)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = L, e.skillDisabled[b] = L === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (_.slotOrder ?? "").trim(), v = M ? M.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], F = (Me = this.actor.system.gear) == null ? void 0 : Me.microchips, P = F && typeof F == "object" && !Array.isArray(F) ? F : {}, j = (((je = P.slot1) == null ? void 0 : je.itemId) ?? "").trim(), G = (((Ot = P.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Y = (((Ct = P.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), K = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, E = typeof N.sort == "number" ? N.sort : 0;
      return L - E;
    }).map((b) => {
      var Oe, ze, Ue, qe, Le, ft;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let E = 0, z = "", te = null;
      for (let Je = 0; Je < v.length; Je++) {
        const yt = v[Je];
        if ((((Oe = _[yt]) == null ? void 0 : Oe.itemId) ?? "") === b.id) {
          E = Je + 1, z = ((ze = _[yt]) == null ? void 0 : ze.bonus) ?? "", te = yt;
          break;
        }
      }
      let Z = null;
      L && (j === b.id ? Z = "slot1" : G === b.id ? Z = "slot2" : Y === b.id && (Z = "slot3"));
      const Ke = N && ((Ue = b.system) != null && Ue.damage) ? b.system.damage : "", le = N && typeof ((qe = b.system) == null ? void 0 : qe.range) == "string" ? (b.system.range || "").trim() : "", fe = te ? Number((Le = _[te]) == null ? void 0 : Le.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: N,
        slotAssignment: E,
        slotBonus: z,
        slotKey: te,
        microchipSlotKey: Z,
        isEquipped: !!(te || Z),
        damage: Ke,
        rangeStr: le,
        slotBonusNum: fe,
        quantity: Number(((ft = b.system) == null ? void 0 : ft.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = K;
    const V = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((b) => b.type === "Fegyver"), ee = V.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = ee;
    const Se = "— Nincs fegyver —", ye = v.filter((b) => {
      const L = ((_[b] ?? {}).itemId ?? "").trim();
      return L ? !!V.find((z) => z.id === L) : !1;
    });
    e.weaponSlots = ye.map((b, N) => {
      const L = _[b] ?? {}, E = (L.itemId ?? "").trim(), z = ee.find((fe) => fe.id === E), te = V.find((fe) => fe.id === E), Z = (te == null ? void 0 : te.system) ?? {}, Ke = Z.size === "thrown", le = (typeof Z.range == "string" ? (Z.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: E,
        slotNum: N + 1,
        displayName: (z == null ? void 0 : z.name) || L.name || Se,
        img: (z == null ? void 0 : z.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: Ke,
        rangeStr: le
      };
    });
    const Te = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ae = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((b) => {
      var ls, us, ds;
      const N = b.id;
      let L = null, E = {};
      for (const At of v)
        if ((((ls = _[At]) == null ? void 0 : ls.itemId) ?? "").trim() === N) {
          L = At, E = _[At] ?? {};
          break;
        }
      const z = !!L, te = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : z, Z = (b == null ? void 0 : b.system) ?? {}, Ke = typeof Z.range == "string" ? (Z.range || "").trim() : "", le = Z.type ?? "", fe = (Te[le] ?? le) || "—", Oe = Z.size ?? "", ze = (ae[Oe] ?? Oe) || "", Ue = [fe, ze].filter(Boolean).join(", ") || fe || "—", qe = le === "projectile" || Oe === "thrown", Le = Z.quantity, ft = Le != null ? String(Le).trim() : "1", Je = String(E.bonus ?? "").trim(), yt = String(Z.bonus ?? "").trim(), Us = Je || yt || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? Se,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: E.damage ?? Z.damage ?? "",
        rangeStr: Ke || "—",
        typeLabel: fe,
        typeAndSize: Ue,
        quantity: ft,
        quantityDisplay: qe ? ft : "—",
        isProjectile: qe,
        equipped: te,
        special: (Z.special ?? "").trim() || "—"
      };
    });
    const de = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = de.map((b) => {
      var E, z;
      const N = (b == null ? void 0 : b.system) ?? {}, L = ((E = b.system) == null ? void 0 : E.equipped) !== void 0 && ((z = b.system) == null ? void 0 : z.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: li((N.level ?? "").toString().trim()),
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: L
      };
    });
    const Fe = (((pt = this.actor.items) == null ? void 0 : pt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = Fe.map((b) => {
      const N = (b == null ? void 0 : b.system) ?? {}, L = (N.description ?? "").trim(), E = L ? L.length > 60 ? L.slice(0, 57) + "…" : L : "—", z = N.quantity != null ? String(N.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: z,
        description: E
      };
    });
    const He = (((We = this.actor.items) == null ? void 0 : We.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = He.map((b) => {
      const L = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), E = L ? L.length > 80 ? L.slice(0, 77) + "…" : L : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: E
      };
    });
    const bt = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), re = bt.map((b) => ({ id: b.id, name: b.name, img: b.img })), Xe = "— Nincs Mikro-Chip —", De = ["slot1", "slot2", "slot3"], Be = (b) => {
      var L, E, z;
      const N = [];
      return b !== 1 && N.push((((L = P.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((E = P.slot2) == null ? void 0 : E.itemId) ?? "").trim()), b !== 3 && N.push((((z = P.slot3) == null ? void 0 : z.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((b) => !Be(1).includes(b.id)), e.microchipItemsSlot2 = re.filter((b) => !Be(2).includes(b.id)), e.microchipItemsSlot3 = re.filter((b) => !Be(3).includes(b.id)), e.microchipSlots = De.map((b) => {
      const N = P[b] ?? {}, L = (N.itemId ?? "").trim(), E = bt.find((z) => z.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (E == null ? void 0 : E.name) || N.name || Xe,
        img: (E == null ? void 0 : E.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = P[N] ?? {}, E = (L.itemId ?? "").trim(), z = re.find((te) => te.id === E);
      e[`microchip${b}ItemId`] = E, e[`microchip${b}DisplayName`] = (z == null ? void 0 : z.name) || L.name || Xe, e[`microchip${b}Img`] = (z == null ? void 0 : z.img) || "";
    }), e.microchipsTable = bt.map((b) => {
      var Oe, ze, Ue, qe;
      const N = b.id;
      let L = null;
      for (const Le of De)
        if ((((Oe = P[Le]) == null ? void 0 : Oe.itemId) ?? "").trim() === N) {
          L = Le;
          break;
        }
      const E = !!L, z = ((ze = b == null ? void 0 : b.system) == null ? void 0 : ze.abilityType) ?? "", te = z === "active" ? "Aktív" : z === "passive" ? "Passzív" : z || "—", Z = z === "active", Ke = Number((Ue = b == null ? void 0 : b.system) == null ? void 0 : Ue.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, le = (((qe = b == null ? void 0 : b.system) == null ? void 0 : qe.description) ?? "").trim(), fe = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: te,
        description: fe,
        kp: Ke,
        isActive: Z,
        slotKey: L ?? "",
        equipped: E
      };
    });
    const vt = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Wt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var N, L, E;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = b.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((E = b.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), Ge = new Map(Wt.map((b) => [b.id, b])), wt = "— Nincs képesség —", Qe = (b) => {
      const N = kt[b] ?? {}, L = (N.itemId ?? "").trim(), E = L ? Ge.get(L) : null, z = (E == null ? void 0 : E.description) ?? "", te = (E == null ? void 0 : E.kp) ?? 0;
      return {
        itemId: L,
        displayName: (E == null ? void 0 : E.name) || N.name || wt,
        img: (E == null ? void 0 : E.img) || "",
        description: z,
        kp: te
      };
    };
    e.abilityFajiSlot = Qe("faji"), e.abilityHatterSlot = Qe("hatter");
    const Ze = (b) => {
      const N = kt[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, et = (b) => b.map((N) => {
      const L = Ge.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = et(Ze("passive")), e.abilityActiveList = et(Ze("active"));
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, Ve = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, me = typeof Ae == "number" ? Ae : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Ee = (rs = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : rs.initiativeRanges, Pe = Array.isArray(Ee) ? Ee.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Ce = (Pe.length > 0 ? Pe : St).slice().sort((b, N) => b.min - N.min), $e = Pe.map((b) => b.min), Tt = $e.length ? Math.min(...$e) : 0, Dt = $e.length ? Math.max(...$e) : 0;
    e.initiativeRanges = Pe.map((b) => ({ ...b, isFirst: b.min === Tt, isLast: b.min === Dt }));
    let tt = 0;
    if (typeof me == "number" && me >= 0 && Ce.length > 0) {
      const b = Ce[0], N = Ce[Ce.length - 1];
      let L = null;
      me <= b.max ? L = b : me >= N.min ? L = N : L = Ce.find((E) => me >= E.min && me <= E.max), L && (tt = L.kp);
    }
    e.kpDots = Ve.map((b, N) => {
      const L = N + 1, E = !!Number(It[b]), z = L <= tt;
      return { index: L, used: E, usable: z };
    });
    const _t = !!((os = (as = game.combat) == null ? void 0 : as.combatants) != null && os.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ae == "number", e.initiativeResult = e.showInitiativeResult ? Ae : "", e;
  }
  _attachFrameListeners(s) {
    var g, o;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-CiFTsOAI.mjs");
      r(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const a = i.currentTarget;
      let c = (a.dataset.itemId ?? "").trim();
      if (!c) {
        const k = (a.dataset.slot ?? "").trim();
        if (!k) return;
        c = (((((y = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : y.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((h = a.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: a } = await import("./roll-sheet-CiFTsOAI.mjs");
      a(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, k;
      i.preventDefault(), i.stopPropagation();
      const a = i.currentTarget, c = parseInt(a.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6) return;
      const r = `system.resources.kpDot${c}`, y = !!Number((k = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : k[`kpDot${c}`]);
      await this.actor.update({ [r]: y ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var r;
      const a = i ? i.currentTarget : (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const c = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const p = (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p });
    const l = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', l), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var r, y, h;
      i.preventDefault(), i.stopPropagation();
      const a = ((h = (y = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : y.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (k) => {
          k && this.actor.update({ img: k });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const a = i.currentTarget, c = a.dataset.skill, r = ((h = a.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: y } = await import("./roll-sheet-CiFTsOAI.mjs");
      y(this.actor, c, r);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var S, T, D, C, _, q, M;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), r = c == null ? void 0 : c.dataset.slot;
      if (!r) return;
      const h = (((T = (((S = this.actor.system) == null ? void 0 : S.weapons) ?? {})[r]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const k = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, h)) ?? ((q = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : q.call(_, (v) => v.id === h));
      (M = k == null ? void 0 : k.sheet) == null || M.render(!0);
    });
    const d = (i, a) => {
      var y;
      const c = i.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      if (r) {
        if (i.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (y = r.sheet) == null || y.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), d(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), d(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const a = i.currentTarget, c = a.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r) return;
      let y = Number(a.value);
      (!Number.isFinite(y) || y < 0) && (y = 0), await r.update({ "system.quantity": y });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor, y = r.items.get(c);
      if (!y) return;
      const h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const k = r.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], C = D.find((_) => {
          var q;
          return (((q = k[_]) == null ? void 0 : q.itemId) ?? "").trim() === c;
        });
        if (C) {
          const _ = D.filter((q) => q !== C);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var C, _;
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((q) => k.includes(q)) : [], T = S.find((q) => {
        var M;
        return (((M = y[q]) == null ? void 0 : M.itemId) ?? "").trim() === c;
      }) ?? null;
      if (a.checked) {
        if (T) return;
        let q = S.find((v) => {
          var F;
          return !((F = y[v]) != null && F.itemId);
        });
        const M = new Set(S);
        if (!q) {
          const v = k.find((F) => !M.has(F));
          if (!v) return;
          q = v, S.push(v);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: (r == null ? void 0 : r.name) ?? "",
          [`system.weapons.${q}.damage`]: ((C = r == null ? void 0 : r.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = r == null ? void 0 : r.system) == null ? void 0 : _.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const q = S.filter((M) => M !== T);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const a = i.currentTarget;
      if (a.disabled) return;
      const c = a.closest(".karakter-microchip-slot-select-wrap"), r = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !r && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const a = i.currentTarget, c = a.closest(".karakter-microchip-slot-select-wrap"), r = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), y = r == null ? void 0 : r.dataset.slot;
      if (!y) return;
      const h = (a.dataset.itemId ?? "").trim(), k = (a.dataset.itemName ?? ((q = a.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", S = (a.dataset.itemImg ?? "").trim(), T = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = k);
      let D = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      S ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", r == null || r.insertBefore(D, T)), D.src = S, D.style.display = "") : D && D.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const C = h ? this.actor.items.get(h) : null, _ = {
        [`system.gear.microchips.${y}.itemId`]: h,
        [`system.gear.microchips.${y}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      h && (_[`system.gear.microchips.${y}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var k, S;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const c = this.actor.items.get(a);
      if (!c || c.type !== "MikroChip") return;
      const r = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = r[T]) == null ? void 0 : D.itemId) ?? "").trim() === a;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const a = i.currentTarget.dataset.slot;
      if (!a) return;
      const c = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${a}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, a) => {
      const c = a.dataset.slot;
      a.addEventListener("dragover", (r) => this._onMicrochipSlotDragOver(r, c)), a.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (r) => this._onMicrochipSlotDrop(r, c));
    }), t.find(".karakter-ability-slot-single").each((i, a) => {
      const c = a.dataset.slot;
      c && (a.addEventListener("dragover", (r) => this._onAbilitySingleDragOver(r, c)), a.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (r) => {
        var y;
        (y = r.currentTarget) == null || y.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, a) => {
      const c = a.dataset.area;
      c && (a.addEventListener("dragover", (r) => this._onAbilityAreaDragOver(r, c)), a.addEventListener("dragleave", (r) => {
        var y;
        return (y = r.currentTarget) == null ? void 0 : y.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (r) => {
        var y;
        (y = r.currentTarget) == null || y.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!a || !c) return;
      const r = this.actor.system.abilities ?? {}, h = (Array.isArray((k = r[a]) == null ? void 0 : k.items) ? r[a].items.slice() : []).filter((S) => S !== c);
      await this.actor.update({ [`system.abilities.${a}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var y;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      (y = r == null ? void 0 : r.sheet) == null || y.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor.items.get(c);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(c) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = (a.value ?? "").trim();
      await r.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      !r || r.type !== "Pancel" || (await r.update({ "system.equipped": a.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var C, _;
      const a = i.currentTarget, c = (a.dataset.itemId ?? "").trim();
      if (!c) return;
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Fegyver") return;
      const y = this.actor.system.weapons ?? {}, h = (y.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], S = h ? h.split(/\s*,\s*/).filter((q) => k.includes(q)) : [], T = S.find((q) => {
        var M;
        return (((M = y[q]) == null ? void 0 : M.itemId) ?? "").trim() === c;
      }) ?? null;
      if (a.checked) {
        if (T) return;
        let q = S.find((v) => {
          var F;
          return !((F = y[v]) != null && F.itemId);
        });
        const M = new Set(S);
        if (!q) {
          const v = k.find((F) => !M.has(F));
          if (!v) return;
          q = v, S.push(v);
        }
        await this.actor.update({
          "system.weapons.slotOrder": S.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: r.name ?? "",
          [`system.weapons.${q}.damage`]: ((C = r.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = r.system) == null ? void 0 : _.bonus) ?? ""
        }), await r.update({ "system.equipped": !0 });
      } else if (T) {
        const q = S.filter((M) => M !== T);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await r.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const r = this.actor, y = r.items.get(c), h = {};
      if ((y == null ? void 0 : y.type) === "Fegyver") {
        const k = r.system.weapons ?? {}, S = (k.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = S ? S.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], C = D.find((_) => {
          var q;
          return (((q = k[_]) == null ? void 0 : q.itemId) ?? "").trim() === c;
        });
        if (C) {
          const _ = D.filter((q) => q !== C);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [c]);
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
      const r = this.actor.items.get(c);
      if (!r || r.type !== "Targy") return;
      const y = (a.value ?? "").trim();
      await r.update({ "system.quantity": y }), setTimeout(() => {
        const h = this.form ?? this.element, k = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const u = this, m = (i) => {
      var r, y, h, k;
      if (!i) return;
      const a = u._getFormDataForUpdate(i);
      if (Object.keys(a).length === 0) return;
      const c = ((y = (r = a.system) == null ? void 0 : r.resources) == null ? void 0 : y.currentHealth) != null || ((k = (h = a.system) == null ? void 0 : h.resources) == null ? void 0 : k.hitLocations) != null;
      u.actor.update(a).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((S) => console.warn("VoidKarakterSheet save failed", S));
    }, f = (i) => {
      var a, c, r;
      return i && (((c = (a = u.element) == null ? void 0 : a.contains) == null ? void 0 : c.call(a, i)) || u.id && ((r = i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var h;
      const a = i.target;
      if (!a || !a.form) return;
      const c = a.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const r = a.form;
      if (!f(r)) return;
      const y = i.relatedTarget;
      y && (r.contains(y) || u.id && ((h = y.closest) != null && h.call(y, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), m(r));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var d, u, m;
    const e = {};
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      f.type === "checkbox" ? g = f.checked : f.type === "number" ? g = f.value === "" ? 0 : Number(f.value) : g = f.value ?? "", foundry.utils.setProperty(e, f.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((d = this.actor.system) == null ? void 0 : d.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const f of l) {
      const g = ((m = n[f]) == null ? void 0 : m.value) ?? 0, o = p[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, W._healthStatusFromRatio(o, g));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, l, d, u, m, f, g, o, i, a;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            c = r;
            break;
          }
      }
      if (c) {
        const r = await fromUuid(c);
        if (r && r.documentName === "Item" && (r.type === "Kepesseg" || r.type === "ability")) {
          let y = r.id;
          if (((n = r.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const D = foundry.utils.mergeObject(r.toObject(), { type: "Kepesseg" });
            y = ((p = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : p.id) ?? y;
          }
          const h = (((l = r.system) == null ? void 0 : l.kind) ?? "passive").toString(), k = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": y,
              "system.abilities.faji.name": r.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": y,
              "system.abilities.hatter.name": r.name
            });
            return;
          }
          const S = h === "active" ? "active" : "passive", T = Array.isArray((d = k[S]) == null ? void 0 : d.items) ? k[S].items.slice() : Array.isArray(k[S]) ? k[S].slice() : [];
          T.includes(y) || T.push(y), await this.actor.update({ [`system.abilities.${S}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((u = e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const r of Object.values(e))
          if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
            c = r;
            break;
          }
      }
      if (c) {
        const r = await fromUuid(c);
        if (r && r.documentName === "Item" && r.type === "Fegyver") {
          const y = this.actor, h = ((m = r.parent) == null ? void 0 : m.id) !== y.id;
          let k = r.id;
          if (h) {
            const S = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            k = ((f = (await y.createEmbeddedDocuments("Item", [S]))[0]) == null ? void 0 : f.id) ?? k;
          }
          if (h) {
            const S = ((g = y.system) == null ? void 0 : g.weapons) ?? {}, T = (S.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = T ? T.split(/\s*,\s*/).filter((q) => D.includes(q)) : [], _ = C.filter((q) => {
              var M;
              return (((M = S[q]) == null ? void 0 : M.itemId) ?? "").trim() === k;
            });
            if (_.length > 0) {
              const M = {
                "system.weapons.slotOrder": C.filter((v) => !_.includes(v)).join(",")
              };
              for (const v of _)
                M[`system.weapons.${v}.itemId`] = "", M[`system.weapons.${v}.name`] = "", M[`system.weapons.${v}.damage`] = "", M[`system.weapons.${v}.bonus`] = "";
              await y.update(M);
            }
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "Pancel") {
          const y = this.actor;
          if (((o = r.parent) == null ? void 0 : o.id) !== y.id) {
            const h = foundry.utils.mergeObject(r.toObject(), { system: { ...r.toObject().system ?? {}, equipped: !1 } });
            await y.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (r && r.documentName === "Item" && r.type === "MikroChip") {
          const y = this.actor;
          ((i = r.parent) == null ? void 0 : i.id) !== y.id && await y.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
        if (r && r.documentName === "Item" && (r.type === "Targy" || r.type === "Egyeb")) {
          const y = this.actor;
          ((a = r.parent) == null ? void 0 : a.id) !== y.id && await y.createEmbeddedDocuments("Item", [r.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var p, l, d;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var d, u, m, f, g, o;
    s.preventDefault(), s.stopPropagation(), (d = s.currentTarget) == null || d.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "Fegyver") return;
    if (((f = p.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const l = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
      [`system.weapons.${e}.name`]: p.name,
      [`system.weapons.${e}.damage`]: ((g = p.system) == null ? void 0 : g.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = p.system) == null ? void 0 : o.bonus) ?? ""
    }), await p.update({ "system.equipped": !0 });
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
    const p = this.actor.items.contents.slice().sort((g, o) => {
      const i = typeof g.sort == "number" ? g.sort : 0, a = typeof o.sort == "number" ? o.sort : 0;
      return i - a;
    }).map((g) => g.id), l = p.indexOf(t), d = p.indexOf(e);
    if (l === -1 || d === -1) return;
    p.splice(l, 1), p.splice(d, 0, t);
    const u = p.map((g, o) => ({
      _id: g,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(s) {
    var n, p, l;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (l = s.currentTarget) == null || l.classList.add("karakter-actions-table-drag-over"));
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
    var u, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const o = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        o > 0 && (p = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, g, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, p = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var n, p;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    var l, d, u;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((d = n.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const m = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((u = (await this.actor.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : u.id) ?? p;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: p,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var u, m, f, g;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : f.id) ?? p;
    }
    const l = this.actor.system.abilities ?? {}, d = Array.isArray((g = l[e]) == null ? void 0 : g.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    d.includes(p) || d.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: d });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, l, d;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var d, u, m, f, g;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((m = s.dataTransfer) == null ? void 0 : m.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "MikroChip") return;
    let l = p.id;
    ((f = p.parent) == null ? void 0 : f.id) !== this.actor.id && (l = ((g = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : g.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let p = Number(n) || 0;
    const l = this._getSkillHealthStatus(s);
    l === 1 ? p -= 6 : l === 2 && (p -= 3);
    const u = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, m = new Roll(u);
    await m.evaluate({ async: !0 });
    const { resultType: f, label: g } = xt(m), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: g } },
      rollMode: o
    });
  }
  async _rollMorale() {
    var p;
    const s = Number(((p = this.actor.system.resources) == null ? void 0 : p.morale) ?? 0) || 0;
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
  async _rollInitiative() {
    var l;
    const s = Number(((l = this.actor.system.skills) == null ? void 0 : l.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
    await n.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
  async _rollWeapon(s) {
    var S, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((D) => D.type === "Fegyver");
    let l = null;
    t.itemId && (l = p.find((D) => D.id === t.itemId) ?? null);
    const d = l && l.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, m = ((S = l == null ? void 0 : l.system) == null ? void 0 : S.type) || "kinetic", f = (((T = l == null ? void 0 : l.system) == null ? void 0 : T.skillKey) ?? "").trim(), g = f && n[f] !== void 0 ? f : m === "explosive" ? "grenadeUse" : "firearms", o = Number(n[g] || 0) || 0, i = u + o, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, r = new Roll(c);
    await r.evaluate({ async: !0 });
    const { resultType: y, label: h } = xt(r), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: h } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, m, f, g, o, i, a, c, r, y;
    const t = this.actor;
    if (!t) return;
    let n = ((m = (u = t.items).get) == null ? void 0 : m.call(u, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((o = n.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (a = ui.notifications) == null ? void 0 : a.warn) == null || y.call(a, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(p);
    await l.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
};
X(W, "PARTS", foundry.utils.mergeObject(
  U(W, W, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(W, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(W, W, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = U(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = U(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = U(W, W, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
X(W, "BODY_PART_BY_SKILL", {
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
let ht = W;
function di(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ss, Ts, Ds, _s;
const ie = class ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, p, l, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
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
    let p = { scrollState: {}, focus: null };
    if (t) {
      p.scrollState = this._saveScrollState(t);
      const i = document.activeElement, a = n.contains(i), c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      a && c && (p.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const l = await super.render(s, e), d = this.element, u = this.form ?? this.element, m = p.scrollState, f = p.focus, g = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", o = () => {
      var i, a;
      if (this._applyScrollState(d, m), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const c = ((i = u.querySelector) == null ? void 0 : i.call(u, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (a = u.querySelector) == null ? void 0 : a.call(u, `[name="${CSS.escape(f.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = f.selectionStart ?? 0, c.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(d, m);
    };
    return (g || f) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), l;
  }
  async _prepareContext(s) {
    var Qe, Ze, et, It, Ve, Ae, me, St, Ee, Pe, Ft, Ce, $e, Tt, Dt, tt, _t, st, it, nt, rt, at, ot, ct, lt, ut, xe, dt, mt, Re;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Qe = this.actor) == null ? void 0 : Qe.system), e.showDeathSkull = !1, e.sizeForSelect = (((et = (Ze = e.system) == null ? void 0 : Ze.identity) == null ? void 0 : et.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, l = (Ae = (Ve = t == null ? void 0 : t.statuses) == null ? void 0 : Ve.has) != null && Ae.call(Ve, "lookaround") ? 1 : 0, d = (St = (me = t == null ? void 0 : t.statuses) == null ? void 0 : me.has) != null && St.call(me, "halfcover") ? 3 : 0, u = (Pe = (Ee = t == null ? void 0 : t.statuses) == null ? void 0 : Ee.has) != null && Pe.call(Ee, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + l + d + u;
    const m = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], f = ((Ce = t == null ? void 0 : t.system) == null ? void 0 : Ce.weapons) ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], o = (f.slotOrder ?? "").trim(), i = o ? o.split(/\s*,\s*/).filter((w) => g.includes(w)) : [], a = m.filter((w) => w.type === "Fegyver"), c = a.map((w) => ({ id: w.id, name: w.name, img: w.img })), r = "— Nincs fegyver —", y = i.length > 0 ? i : g, h = g.filter((w) => !y.includes(w)), k = [...y, ...h], S = k.filter((w) => {
      var R;
      const x = (((R = f[w]) == null ? void 0 : R.itemId) ?? "").trim();
      return x && a.some((B) => B.id === x);
    });
    e.weaponSlots = S.map((w) => {
      const x = f[w] ?? {}, R = (x.itemId ?? "").trim(), B = c.find((ce) => ce.id === R), oe = a.find((ce) => ce.id === R), Q = (oe == null ? void 0 : oe.system) ?? {}, ge = Q.size === "thrown", pe = (typeof Q.range == "string" ? (Q.range || "").trim() : "") || "—";
      return {
        slotKey: w,
        itemId: R,
        displayName: (B == null ? void 0 : B.name) || x.name || r,
        img: (B == null ? void 0 : B.img) || "",
        isThrown: ge,
        rangeStr: pe
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = a.map((w) => {
      var pt;
      const x = w.id;
      let R = null, B = {};
      for (const We of k)
        if ((((pt = f[We]) == null ? void 0 : pt.itemId) ?? "").trim() === x) {
          R = We, B = f[We] ?? {};
          break;
        }
      const oe = !!R, Q = (w == null ? void 0 : w.system) ?? {}, ge = typeof Q.range == "string" ? (Q.range || "").trim() : "", pe = Q.type ?? "", ce = (T[pe] ?? pe) || "—", _e = Q.size ?? "", Me = (D[_e] ?? _e) || "", je = [ce, Me].filter(Boolean).join(", ") || ce || "—", Ot = pe === "projectile" || _e === "thrown", Ct = Q.quantity != null ? String(Q.quantity).trim() : "1", qt = String(Q.bonus ?? B.bonus ?? "").trim() || "0", Lt = (Q.damage ?? B.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: x,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? r,
        img: (w == null ? void 0 : w.img) ?? "",
        bonus: qt,
        damage: Lt,
        rangeStr: ge || "—",
        typeAndSize: je,
        quantity: Ct,
        isProjectile: Ot,
        equipped: oe,
        special: (Q.special ?? "").trim() || "—"
      };
    });
    const C = m.filter((w) => w.type === "Pancel");
    e.armorTable = C.map((w) => {
      var B;
      const x = (w == null ? void 0 : w.system) ?? {}, R = ((B = w.system) == null ? void 0 : B.equipped) === !0;
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: di((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const _ = ((Tt = ($e = t == null ? void 0 : t.system) == null ? void 0 : $e.gear) == null ? void 0 : Tt.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], M = m.filter((w) => w.type === "MikroChip");
    e.microchipsTable = M.map((w) => {
      var pe, ce, _e, Me;
      const x = w.id;
      let R = null;
      for (const je of q)
        if ((((pe = _[je]) == null ? void 0 : pe.itemId) ?? "").trim() === x) {
          R = je;
          break;
        }
      const B = ((ce = w == null ? void 0 : w.system) == null ? void 0 : ce.abilityType) ?? "", oe = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", Q = (((_e = w == null ? void 0 : w.system) == null ? void 0 : _e.description) ?? "").trim(), ge = Q ? Q.length > 60 ? Q.slice(0, 57) + "…" : Q : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        typeLabel: oe,
        description: ge,
        kp: Number((Me = w == null ? void 0 : w.system) == null ? void 0 : Me.replaceCost) >= 0 ? Number(w.system.replaceCost) : 0,
        isActive: B === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const v = m.filter((w) => w.type === "Targy");
    e.itemsTable = v.map((w) => {
      const x = (w == null ? void 0 : w.system) ?? {}, R = (x.description ?? "").trim(), B = R ? R.length > 60 ? R.slice(0, 57) + "…" : R : "—";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: B
      };
    });
    const F = m.filter((w) => w.type === "Egyeb");
    e.egyebList = F.map((w) => {
      const R = (((w == null ? void 0 : w.system) ?? {}).description ?? "").trim(), B = R ? R.length > 80 ? R.slice(0, 77) + "…" : R : "";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        description: B
      };
    });
    const P = (((Dt = e.weaponsTable) == null ? void 0 : Dt.length) ?? 0) > 0 || (((tt = e.armorTable) == null ? void 0 : tt.length) ?? 0) > 0 || (((_t = e.microchipsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((st = e.itemsTable) == null ? void 0 : st.length) ?? 0) > 0 || (((it = e.egyebList) == null ? void 0 : it.length) ?? 0) > 0;
    e.showEquipmentDropZone = !P;
    const j = ((nt = t == null ? void 0 : t.system) == null ? void 0 : nt.abilities) ?? {}, G = m.filter((w) => w.type === "Kepesseg" || w.type === "ability").map((w) => {
      var x, R, B;
      return {
        id: w.id,
        name: w.name,
        img: w.img,
        description: ((x = w.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((R = w.system) == null ? void 0 : R.kp) ?? 0) || 0,
        kind: (((B = w.system) == null ? void 0 : B.kind) ?? "passive").toString()
      };
    }), Y = new Map(G.map((w) => [w.id, w])), J = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = J, e.abilityHatterSlot = J;
    const K = (w) => {
      const x = j[w];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, V = (w) => (w || []).map((x) => {
      const R = Y.get(x);
      if (!R) return null;
      const B = R.kind === "species";
      return {
        id: R.id,
        name: R.name,
        img: R.img,
        description: R.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: B ? 0 : R.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = V(K("passive")), e.abilityActiveList = V(K("active"));
    const ee = t == null ? void 0 : t.id, Se = !!((at = (rt = game.combat) == null ? void 0 : rt.combatants) != null && at.some(
      (w) => {
        var x;
        return (((x = w.actor) == null ? void 0 : x.id) ?? w.actorId) === ee;
      }
    ));
    e.showHarcSection = Se;
    const ye = ((ot = e.system) == null ? void 0 : ot.resources) ?? {}, Te = (lt = (ct = e.system) == null ? void 0 : ct.combat) == null ? void 0 : lt.initiativeResult, ae = typeof Te == "number" ? Te : -1, de = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Fe = (xe = (ut = e.system) == null ? void 0 : ut.combat) == null ? void 0 : xe.initiativeRanges, He = Array.isArray(Fe) ? Fe.map((w) => ({ min: Number(w.min) ?? 0, max: Number(w.max) ?? 0, kp: Math.min(10, Math.max(0, Number(w.kp) ?? 0)) })) : [], re = (He.length > 0 ? He : de).slice().sort((w, x) => w.min - x.min), Xe = 3;
    let De = He.length > 0 ? He : [];
    De.length < Xe && (De = [...De, ...Array(Xe - De.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = De.map((w, x) => ({
      ...w,
      isFirst: x === 0,
      isLast: x === De.length - 1
    }));
    let Be = 0;
    if (typeof ae == "number" && ae >= 0 && re.length > 0) {
      const w = re[0], x = re[re.length - 1];
      let R = null;
      ae <= w.max ? R = w : ae >= x.min ? R = x : R = re.find((B) => ae >= B.min && ae <= B.max), R && (Be = R.kp);
    }
    const vt = re.length > 0 ? re[re.length - 1] : null, kt = Math.min(10, vt ? vt.kp : 6), Ge = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, kt)).map((w, x) => {
      const R = x + 1, B = !!Number(ye[w]), oe = R <= Be;
      return { index: R, used: B, usable: oe };
    }), wt = Math.ceil(Ge.length / 2);
    return e.kpDotsRow1 = Ge.slice(0, wt), e.kpDotsRow2 = Ge.slice(wt), e.canEditInitiative = !!((dt = game.user) != null && dt.isGM), e.showInitiativeResult = typeof Te == "number", e.initiativeResult = e.showInitiativeResult ? Te : "", e.speedUnitForSelect = ((Re = (mt = e.system) == null ? void 0 : mt.combat) == null ? void 0 : Re.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var m, f, g;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (o) => {
      var c, r, y;
      if (o.preventDefault(), o.stopPropagation(), !this.actor) return;
      const i = ((y = (r = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (o) => {
      var c, r, y;
      o.preventDefault();
      const i = (r = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      (y = a == null ? void 0 : a.sheet) == null || y.render(!0);
    });
    const n = (o) => {
      var c, r;
      const i = (c = o == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      (r = a == null ? void 0 : a.sheet) == null || r.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), n(o.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), n(o.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (o) => {
      var r, y, h, k;
      o.preventDefault();
      const i = (y = (r = o.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : y.call(r, ".karakter-weapon-slot"), a = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const c = this.actor.items.get(a);
      (k = c == null ? void 0 : c.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (o) => {
      var r;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget, a = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.slot) ?? "").trim();
      if (!a || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-CiFTsOAI.mjs");
      c(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var c, r, y, h, k;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget;
      let a = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !a && ((r = i == null ? void 0 : i.dataset) != null && r.slot) && (a = (((((h = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!a || !this.actor) && await this._rollWeaponDamage(a, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (o) => {
      if (o.preventDefault(), o.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CiFTsOAI.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (o) => {
      var r, y;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget, a = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(a) || a < 1 || a > 10 || !this.actor) return;
      const c = !!Number((y = (r = this.actor.system) == null ? void 0 : r.resources) == null ? void 0 : y[`kpDot${a}`]);
      await this.actor.update({ [`system.resources.kpDot${a}`]: c ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (o) => {
      var y, h;
      o.preventDefault();
      const i = o.currentTarget, a = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.skill) ?? "").trim(), c = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || a;
      if (!a || !this.actor) return;
      const { openRollSheetForSkill: r } = await import("./roll-sheet-CiFTsOAI.mjs");
      r(this.actor, a, c);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      var a, c;
      o.preventDefault();
      const i = (c = (a = o.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (o) => {
      var c, r;
      o.preventDefault();
      const i = (((r = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(i) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var h, k, S, T, D, C;
      if (o.preventDefault(), !o.altKey) return;
      const i = (k = (h = o.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.area, a = (T = (S = o.currentTarget) == null ? void 0 : S.dataset) == null ? void 0 : T.itemId;
      if (!i || !a || !this.actor) return;
      const c = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, y = (Array.isArray((C = c[i]) == null ? void 0 : C.items) ? c[i].items.slice() : []).filter((_) => _ !== a);
      await this.actor.update({ [`system.abilities.${i}.items`]: y }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      var a, c;
      if (o.preventDefault(), !o.altKey) return;
      const i = (c = (a = o.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : c.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      var h, k;
      if (o.preventDefault(), !o.altKey) return;
      const i = o.currentTarget, a = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const c = this.actor, r = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), y = {};
      r && (y[`system.weapons.${r}.itemId`] = "", y[`system.weapons.${r}.name`] = "", y[`system.weapons.${r}.damage`] = "", y[`system.weapons.${r}.bonus`] = ""), Object.keys(y).length && await c.update(y), await c.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      var a, c;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((c = (a = o.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (o) => {
      var y, h, k, S;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((h = (y = o.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const a = ((S = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : S.microchips) ?? {}, r = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = a[T]) == null ? void 0 : D.itemId) ?? "").trim() === i;
      });
      r && await this.actor.update({
        [`system.gear.microchips.${r}.itemId`]: "",
        [`system.gear.microchips.${r}.name`]: "",
        [`system.gear.microchips.${r}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (o) => {
      var c, r;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((r = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (g = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, p)) == null || g.forEach((o) => {
      var i;
      (((i = o.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (o.draggable = !0);
    }), t.on("dragstart", p, (o) => {
      var y, h, k;
      const i = o.currentTarget, a = (h = (y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) == null ? void 0 : h.trim();
      if (!a || !this.actor) return;
      const c = this.actor.items.get(a);
      if (!c) return;
      const r = c.uuid;
      o.dataTransfer && (o.dataTransfer.setData("text/plain", r), o.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: r })), o.dataTransfer.effectAllowed = "copyMove"), typeof ((k = o.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && o.dataTransfer.setDragImage(i, 0, 0);
    });
    const l = this, d = (o) => {
      if (!o) return;
      const i = l._getFormDataForUpdate(o);
      Object.keys(i).length !== 0 && l.actor.update(i).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, u = (o) => {
      var i, a, c;
      return o && (((a = (i = l.element) == null ? void 0 : i.contains) == null ? void 0 : a.call(i, o)) || l.id && ((c = o.closest) == null ? void 0 : c.call(o, `#${CSS.escape(l.id)}`)));
    };
    l._votvNpcBlur = (o) => {
      var y;
      const i = o.target;
      if (!i || !i.form) return;
      const a = i.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const c = i.form;
      if (!u(c)) return;
      const r = o.relatedTarget;
      r && (c.contains(r) || l.id && ((y = r.closest) != null && y.call(r, `#${CSS.escape(l.id)}`))) || d(c);
    }, document.body.addEventListener("blur", l._votvNpcBlur, !0), l._votvNpcItemHookRegistered || (l._votvNpcItemUpdateHook = (o, i, a) => {
      var c;
      l.actor && ((c = o == null ? void 0 : o.parent) == null ? void 0 : c.id) === l.actor.id && l.render(!0);
    }, l._votvNpcItemDeleteHook = (o, i, a) => {
      var c;
      l.actor && ((c = o == null ? void 0 : o.parent) == null ? void 0 : c.id) === l.actor.id && l.render(!0);
    }, Hooks.on("updateItem", l._votvNpcItemUpdateHook), Hooks.on("deleteItem", l._votvNpcItemDeleteHook), l._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const l = this._getFormDataForUpdate(e);
      Object.keys(l).length > 0 && await this.actor.update(l).catch((d) => console.warn("VoidNpcSheet save on preClose failed", d));
    }
    return (p = super._preClose) == null ? void 0 : p.call(this, s);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvNpcBlur, !0), this._votvNpcItemHookRegistered && (this._votvNpcItemUpdateHook && (Hooks.off("updateItem", this._votvNpcItemUpdateHook), this._votvNpcItemUpdateHook = null), this._votvNpcItemDeleteHook && (Hooks.off("deleteItem", this._votvNpcItemDeleteHook), this._votvNpcItemDeleteHook = null), this._votvNpcItemHookRegistered = !1), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  /**
   * Támadás dobás NPC-nek – ugyanolyan képlet, mint a karakter lapon:
   * 3d6 + (Kézifegyver Használat / Löveghasználat + fegyver bónusz)
   * @param {string} slot - pl. "slot1"
   */
  async _rollWeapon(s) {
    var T, D, C, _, q;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, p = ((D = e.system) == null ? void 0 : D.skills) ?? {}, l = ((C = e.items) == null ? void 0 : C.filter((M) => M.type === "Fegyver")) ?? [];
    let d = null;
    n.itemId && (d = l.find((M) => M.id === n.itemId) ?? null);
    const u = d && d.name || n.name || "Fegyver", m = Number(n.bonus || 0) || 0, f = ((_ = d == null ? void 0 : d.system) == null ? void 0 : _.type) || "kinetic", g = (((q = d == null ? void 0 : d.system) == null ? void 0 : q.skillKey) ?? "").trim(), o = g && p[g] !== void 0 ? g : f === "explosive" ? "grenadeUse" : "firearms", i = Number(p[o] || 0) || 0, a = m + i, r = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, y = new Roll(r);
    await y.evaluate({ async: !0 });
    const { resultType: h, label: k } = xt(y), S = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: k } },
      rollMode: S
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, m, f, g, o, i, a, c, r, y;
    const t = this.actor;
    if (!t) return;
    const n = ((m = (u = t.items).get) == null ? void 0 : m.call(u, s)) ?? ((g = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : g.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((o = n.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (y = (a = ui.notifications) == null ? void 0 : a.warn) == null || y.call(a, ((r = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : r.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(p);
    await l.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _onDropItem(s, e) {
    var f, g, o, i, a, c, r, y, h, k, S, T, D, C, _, q, M;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const n = ((v) => {
      var P;
      if (!v) return null;
      const F = v.uuid ?? v.documentUuid ?? ((P = v.data) == null ? void 0 : P.uuid) ?? (typeof v == "string" ? v : null);
      if (F) return F;
      if (typeof v == "object") {
        for (const j of Object.values(v))
          if (typeof j == "string" && j.includes(".") && j.startsWith("Item.")) return j;
      }
      return null;
    })(e);
    if (!n) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    if (p.type === "Pancel") {
      (a = (i = ui.notifications) == null ? void 0 : i.info) == null || a.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const l = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      let v = p.id;
      if (((c = p.parent) == null ? void 0 : c.id) !== l.id) {
        const Y = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        v = ((r = (await l.createEmbeddedDocuments("Item", [Y]))[0]) == null ? void 0 : r.id) ?? v;
      }
      const F = (((y = p.system) == null ? void 0 : y.kind) ?? "passive").toString(), P = ((h = l.system) == null ? void 0 : h.abilities) ?? {}, j = F === "active" ? "active" : "passive", G = Array.isArray((k = P[j]) == null ? void 0 : k.items) ? P[j].items.slice() : Array.isArray(P[j]) ? P[j].slice() : [];
      G.includes(v) || G.push(v), await l.update({ [`system.abilities.${j}.items`]: G }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((S = p.parent) == null ? void 0 : S.id) === l.id) return;
    const d = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(d, { system: { ...d.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(d, { system: { ...d.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const m = (T = (await l.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : T.id;
    if (p.type === "Fegyver" && m) {
      const v = ((D = l.system) == null ? void 0 : D.weapons) ?? {}, F = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (v.slotOrder ?? "").trim(), j = P ? P.split(/\s*,\s*/).filter((J) => F.includes(J)) : [];
      let G = F.find((J) => {
        var K;
        return !(((K = v[J]) == null ? void 0 : K.itemId) ?? "").trim();
      });
      G || (G = F.find((J) => !j.includes(J)) ?? "slot1");
      const Y = j.includes(G) ? j : [...j, G].filter((J) => F.includes(J));
      await l.update({
        "system.weapons.slotOrder": Y.join(","),
        [`system.weapons.${G}.itemId`]: m,
        [`system.weapons.${G}.name`]: p.name ?? "",
        [`system.weapons.${G}.damage`]: ((C = p.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${G}.bonus`]: ((_ = p.system) == null ? void 0 : _.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && m) {
      const v = ((M = (q = l.system) == null ? void 0 : q.gear) == null ? void 0 : M.microchips) ?? {}, P = ["slot1", "slot2", "slot3"].find((j) => {
        var G;
        return !(((G = v[j]) == null ? void 0 : G.itemId) ?? "").trim();
      });
      P && await l.update({
        [`system.gear.microchips.${P}.itemId`]: m,
        [`system.gear.microchips.${P}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, g, o, i, a, c;
    const e = (g = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : g.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((c = this.actor) == null ? void 0 : c.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var u, m, f, g, o, i;
    const e = (m = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const a = ((g = e.system) == null ? void 0 : g.abilityType) ?? "passive";
      if (n = (a === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", a === "active") {
        const c = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        c > 0 && (p = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const n of s.elements) {
      if (!n.name || n.disabled || n.type === "radio" && !n.checked) continue;
      let p;
      if (n.type === "checkbox")
        p = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        p = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const l = (n.value ?? "").trim();
        if (l === "") continue;
        p = Number(l) || 0;
      } else
        p = n.value ?? "";
      p !== void 0 && foundry.utils.setProperty(e, n.name, p);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const n = e.name;
      (n === void 0 || typeof n == "string" && n.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
X(ie, "PARTS", foundry.utils.mergeObject(
  U(ie, ie, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ie, ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = U(ie, ie, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Rt = ie;
function mi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Os, Cs, qs, Ls;
const ne = class ne extends foundry.applications.api.HandlebarsApplicationMixin(
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
  _getScrollContainers(s) {
    var n, p, l, d;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((d = s.querySelector) == null ? void 0 : d.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), n = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (n.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (n.windowScrollTop = t.scrollTop), n;
  }
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: n } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && n && (n.scrollTop = e.windowScrollTop);
  }
  async render(s = !1, e = {}) {
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, l = this.form ?? this.element;
    let d = { scrollState: {}, focus: null };
    if (p) {
      d.scrollState = this._saveScrollState(p);
      const r = document.activeElement, y = l.contains(r), h = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      y && h && (d.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const m = this.element, f = this.form ?? this.element, g = d.scrollState, o = d.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", a = () => {
      var r, y;
      if (this._applyScrollState(m, g), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const h = ((r = f.querySelector) == null ? void 0 : r.call(f, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (y = f.querySelector) == null ? void 0 : y.call(f, `[name="${CSS.escape(o.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = o.selectionStart ?? 0, h.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(m, g);
    };
    return (i || o) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (m) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, m)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${m}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const d = Number(p == null ? void 0 : p.value) || 0, u = Number(l == null ? void 0 : l.value) || 0;
    n.textContent = String(d + u);
  }
  async _prepareContext(s) {
    var a, c, r, y, h, k, S, T, D, C, _, q, M;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((a = e.system) == null ? void 0 : a.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((r = (c = e.system) == null ? void 0 : c.identity) == null ? void 0 : r.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, l = "— Nincs fegyver —", d = (((y = this.actor.items) == null ? void 0 : y.contents) ?? []).filter((v) => v.type === "Fegyver");
    e.weaponsTable = d.map((v) => {
      const F = (v == null ? void 0 : v.system) ?? {}, P = F.type ?? "", j = (n[P] ?? P) || "—", G = F.size ?? "", Y = (p[G] ?? G) || "", J = [j, Y].filter(Boolean).join(", ") || j || "—", K = P === "projectile" || G === "thrown", V = F.quantity != null ? String(F.quantity).trim() : "1", ee = (typeof F.range == "string" ? (F.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? l,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: String(F.bonus ?? "").trim() || "0",
        damage: F.damage ?? "",
        rangeStr: ee || "—",
        typeLabel: j,
        typeAndSize: J,
        quantity: V,
        quantityDisplay: K ? V : "—",
        isProjectile: K,
        equipped: !1,
        special: (F.special ?? "").trim() || "—"
      };
    });
    const u = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = u.map((v) => {
      var j;
      const F = (v == null ? void 0 : v.system) ?? {}, P = !!((j = v.system) != null && j.equipped);
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: mi((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: P
      };
    });
    const m = (((k = this.actor.items) == null ? void 0 : k.contents) ?? []).filter((v) => v.type === "MikroChip");
    e.microchipsTable = m.map((v) => {
      var K, V, ee;
      const F = ((K = v == null ? void 0 : v.system) == null ? void 0 : K.abilityType) ?? "", P = F === "active" ? "Aktív" : F === "passive" ? "Passzív" : F || "—", j = F === "active", G = Number((V = v == null ? void 0 : v.system) == null ? void 0 : V.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, Y = (((ee = v == null ? void 0 : v.system) == null ? void 0 : ee.description) ?? "").trim(), J = Y ? Y.length > 60 ? Y.slice(0, 57) + "…" : Y : "—";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: P,
        description: J,
        kp: G,
        isActive: j,
        slotKey: "",
        equipped: !1
      };
    });
    const f = (((S = this.actor.items) == null ? void 0 : S.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = f.map((v) => {
      const F = (v == null ? void 0 : v.system) ?? {}, P = (F.description ?? "").trim(), j = P ? P.length > 60 ? P.slice(0, 57) + "…" : P : "—", G = F.quantity != null ? String(F.quantity).trim() : "1";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: G,
        description: j
      };
    });
    const g = (((T = this.actor.items) == null ? void 0 : T.contents) ?? []).filter((v) => v.type === "Jarmuegyseg");
    e.unitsTable = g.map((v) => {
      const F = (v == null ? void 0 : v.system) ?? {}, P = F.health ?? {}, j = Number(F.level ?? 0) || 0, G = Number(P.max ?? 0) || 0, Y = Number(P.value ?? 0) || 0, J = (F.hit ?? "").toString().trim();
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        level: j,
        hpMax: G,
        hpValue: Y,
        hit: J
      };
    });
    const o = (((D = e.weaponsTable) == null ? void 0 : D.length) ?? 0) > 0 || (((C = e.armorTable) == null ? void 0 : C.length) ?? 0) > 0 || (((_ = e.microchipsTable) == null ? void 0 : _.length) ?? 0) > 0 || (((q = e.itemsTable) == null ? void 0 : q.length) ?? 0) > 0;
    e.showEquipmentDropZone = !o;
    const i = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((v) => v.type === "Egyeb");
    return e.egyebList = i.map((v) => {
      const P = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), j = P ? P.length > 80 ? P.slice(0, 77) + "…" : P : "";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        description: j
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var d;
    super._attachFrameListeners(s);
    const e = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (u) => {
      var g, o, i;
      u.preventDefault(), u.stopPropagation();
      const m = ((i = (o = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: this.actor.img || "",
        callback: (a) => {
          a && this.actor.update({ img: a });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (u) => {
      var g, o, i;
      u.preventDefault();
      const m = (o = (g = u.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : o.itemId;
      if (!m) return;
      const f = this.actor.items.get(m);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var g, o;
      if (u.preventDefault(), !u.altKey) return;
      const m = (o = (g = u.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : o.itemId;
      !m || !this.actor.items.get(m) || await this.actor.deleteEmbeddedDocuments("Item", [m]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var o;
      const m = u.currentTarget, f = (o = m == null ? void 0 : m.dataset) == null ? void 0 : o.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      !g || g.type !== "Targy" && g.type !== "Fegyver" || await g.update({ "system.quantity": (m.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var g, o;
      const m = (o = (g = u.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : o.itemId;
      if (!m) return;
      const f = this.actor.items.get(m);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var f, g, o, i;
      u.preventDefault();
      const m = (g = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && ((i = (o = this.actor.items.get(m)) == null ? void 0 : o.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var f, g;
      if (u.preventDefault(), !u.altKey) return;
      const m = (g = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && await this.actor.deleteEmbeddedDocuments("Item", [m]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var f, g;
      u.preventDefault();
      const m = (g = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : g.itemId;
      m && await this._postItemToChat(m);
    });
    const n = this, p = (u) => {
      if (!u) return;
      const m = n._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && n.actor.update(m).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, l = (u) => {
      var m, f, g;
      return u && (((f = (m = n.element) == null ? void 0 : m.contains) == null ? void 0 : f.call(m, u)) || n.id && ((g = u.closest) == null ? void 0 : g.call(u, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (u) => {
      var i;
      const m = u.target;
      if (!m || !m.form) return;
      const f = m.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const g = m.form;
      if (!l(g)) return;
      const o = u.relatedTarget;
      o && (g.contains(o) || n.id && ((i = o.closest) != null && i.call(o, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), p(g));
    }, document.body.addEventListener("blur", n._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var a;
      const m = u.currentTarget, f = (a = m == null ? void 0 : m.dataset) == null ? void 0 : a.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      if (!g || g.type !== "Jarmuegyseg") return;
      const o = (m.value ?? "").trim(), i = o === "" ? 0 : Number(o);
      await g.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (u) => {
      var i;
      const m = u.currentTarget, f = (i = m == null ? void 0 : m.dataset) == null ? void 0 : i.itemId;
      if (!f) return;
      const g = this.actor.items.get(f);
      if (!g || g.type !== "Jarmuegyseg") return;
      const o = (m.value ?? "").trim();
      await g.update({ "system.hit": o });
    });
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvJarmuBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let n;
      t.type === "checkbox" ? n = t.checked : t.type === "number" ? n = t.value === "" ? 0 : Number(t.value) : n = t.value ?? "", foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _postItemToChat(s) {
    var u, m, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const g = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const o = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        o > 0 && (p = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _onDropItem(s, e) {
    var u, m;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((u = e == null ? void 0 : e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const f of Object.values(e))
        if (typeof f == "string" && f.includes(".") && f.startsWith("Item.")) {
          t = f;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const p = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"].includes(n.type)) return super._onDropItem(s, e);
    if (((m = n.parent) == null ? void 0 : m.id) === p.id) return;
    const d = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [d]);
  }
};
X(ne, "PARTS", foundry.utils.mergeObject(
  U(ne, ne, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ne, ne, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = U(ne, ne, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = ne;
const pi = [
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
var Ns;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (l) => {
      var m, f, g, o, i, a, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((o = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : o.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = pi, e;
  }
};
X(he, "PARTS", foundry.utils.mergeObject(U(he, he, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(he, he, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = U(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let jt = he;
var Fs;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (l) => {
      var m, f, g, o, i, a, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((o = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : o.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
X(be, "PARTS", foundry.utils.mergeObject(U(be, be, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(be, be, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Fs = U(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = be;
var As;
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (l) => {
      var m, f, g, o, i, a, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((o = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : o.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
X(ve, "PARTS", foundry.utils.mergeObject(U(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((As = U(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let zt = ve;
var Es;
const ke = class ke extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (l) => {
      var m, f, g, o, i, a, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((o = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : o.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
    }, e._votvInput = (l) => {
      var m;
      const d = l.target;
      if ((d == null ? void 0 : d.name) === "name") return;
      const u = (d == null ? void 0 : d.form) ?? ((m = d == null ? void 0 : d.closest) == null ? void 0 : m.call(d, "form"));
      p(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(u), 300));
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
X(ke, "PARTS", foundry.utils.mergeObject(U(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Es = U(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !0 })
}));
let Ut = ke;
var Ps;
const we = class we extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (l) => {
      var m, f, g, o, i, a, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((o = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : o.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
X(we, "PARTS", foundry.utils.mergeObject(U(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ps = U(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Ht = we;
var $s;
const Ie = class Ie extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (l) => {
      var m, f, g, o, i, a, c;
      if (!e.isEditable || !((f = (m = l.target) == null ? void 0 : m.closest) != null && f.call(m, ".profile")) && ((o = (g = l.target) == null ? void 0 : g.getAttribute) == null ? void 0 : o.call(g, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const d = ((c = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: e.document.img || "",
        callback: (r) => {
          r && e.document.update({ img: r });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const d = e._getFormDataForUpdate(l);
      Object.keys(d).length !== 0 && e.document.update(d).catch((u) => console.warn("VoidEgyebSheet save failed", u));
    }, p = (l) => {
      var d, u, m;
      return l && (((u = (d = e.element) == null ? void 0 : d.contains) == null ? void 0 : u.call(d, l)) || e.id && ((m = l.closest) == null ? void 0 : m.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, m, f;
      const d = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (m = l.target) == null ? void 0 : m.closest) == null ? void 0 : f.call(m, "form"));
      p(d) && n(d);
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
X(Ie, "PARTS", foundry.utils.mergeObject(U(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ie, Ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = U(Ie, Ie, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = Ie;
var xs, Rs;
const ue = class ue extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, m, f, g;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (m = this.document) == null ? void 0 : m.name,
      "id=",
      (f = this.document) == null ? void 0 : f.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (o) => {
      var i, a, c;
      try {
        const r = typeof o.composedPath == "function" ? o.composedPath() : [];
        if (!(this.element && r.includes(this.element) || this.id && ((a = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", o);
        let h = null;
        try {
          h = TextEditor.getDragEventData(o);
        } catch (D) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", D);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", h), !h || h.type !== "Item") return;
        const S = ((D) => {
          var _;
          if (!D) return null;
          const C = D.uuid ?? D.documentUuid ?? ((_ = D.data) == null ? void 0 : _.uuid) ?? (typeof D == "string" ? D : null);
          if (C) return C;
          if (typeof D == "object") {
            for (const q of Object.values(D))
              if (typeof q == "string" && q.includes(".") && q.startsWith("Item.")) return q;
          }
          return null;
        })(h);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", S), !S) return;
        const T = await fromUuid(S);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", T == null ? void 0 : T.id, T == null ? void 0 : T.type), !T || T.documentName !== "Item") return;
        if (T.type === "Kepesseg" || T.type === "ability") {
          const D = T.uuid ?? T.id, C = this.document.system ?? {}, _ = Array.isArray((c = C.abilities) == null ? void 0 : c.items) ? C.abilities.items.slice() : [];
          _.push(D), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", _), await this.document.update({ "system.abilities.items": _ });
        }
      } catch (r) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", r);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (o) => {
      var r, y, h, k, S, T;
      o.preventDefault();
      const i = (y = (r = o.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : y.itemRef, a = (k = (h = o.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.itemId;
      let c = null;
      if (i)
        try {
          c = await fromUuid(i);
        } catch {
          c = null;
        }
      !c && a && (c = ((S = game.items) == null ? void 0 : S.get(a)) ?? null), (T = c == null ? void 0 : c.sheet) == null || T.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (o) => {
      var r, y, h, k;
      o.preventDefault();
      const i = (y = (r = o.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : y.itemRef, a = (k = (h = o.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.itemId, c = i || a;
      c && await this._postAbilityToChat(c);
    }), n.on("click", ".karakter-ability-pill-remove", async (o) => {
      var h, k, S;
      if (o.preventDefault(), !o.altKey) return;
      const i = (k = (h = o.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : k.itemRef;
      if (!i) return;
      const a = this.document.system ?? {}, c = Array.isArray((S = a.abilities) == null ? void 0 : S.items) ? a.abilities.items.slice() : [], r = c.indexOf(i), y = r >= 0 ? [...c.slice(0, r), ...c.slice(r + 1)] : c;
      await this.document.update({ "system.abilities.items": y });
    });
    const p = (g = t == null ? void 0 : t.querySelector) == null ? void 0 : g.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (o) => {
      o.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const l = (o) => {
      if (!o) return;
      const i = e._getFormDataForUpdate(o);
      Object.keys(i).length !== 0 && e.document.update(i).catch((a) => console.warn("VoidJarmuEgysegSheet save failed", a));
    }, d = (o) => {
      var i, a, c;
      return o && (((a = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : a.call(i, o)) || e.id && ((c = o.closest) == null ? void 0 : c.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var a, c, r;
      const i = ((a = o.target) == null ? void 0 : a.form) ?? ((r = (c = o.target) == null ? void 0 : c.closest) == null ? void 0 : r.call(c, "form"));
      d(i) && l(i);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), this._votvGlobalDrop && (window.removeEventListener("drop", this._votvGlobalDrop, !0), this._votvGlobalDrop = null), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let n;
      if (t.type === "checkbox") n = t.checked;
      else if (t.type === "number") {
        if (t.value === "") continue;
        n = Number(t.value);
      } else
        n = t.value ?? "";
      foundry.utils.setProperty(e, t.name, n);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, p = Array.isArray(n.items) ? n.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext refs=", p);
    const d = (await Promise.all(
      p.map(async (u) => {
        var m;
        if (!u) return null;
        try {
          const f = await fromUuid(u);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        } catch {
          const f = (m = game.items) == null ? void 0 : m.get(u);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        }
        return null;
      })
    )).map((u, m) => ({ doc: u, ref: p[m] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: m }) => {
      var i, a;
      const f = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), g = Number(((a = u.system) == null ? void 0 : a.kp) ?? 0) || 0, o = f === "species";
      return {
        id: u.id,
        ref: m,
        name: u.name,
        img: u.img,
        kind: f,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: o ? 0 : g
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", d), e.system = t, e.abilityList = d, e;
  }
  async _postAbilityToChat(s) {
    var f, g, o, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((o = e.system) == null ? void 0 : o.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", d = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${d}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: m,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /**
   * ItemSheetV2 drop logika: a Foundry már feloldja a dokumentumot, itt csak kezeljük a képesség referenciát.
   */
  async _onDropDocument(s, e) {
    var t, n, p;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const l = e.uuid ?? e.id, d = this.document.system ?? {}, u = Array.isArray((n = d.abilities) == null ? void 0 : n.items) ? d.abilities.items.slice() : [];
      return u.push(l), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
X(ue, "PARTS", foundry.utils.mergeObject(U(ue, ue, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(ue, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ue, ue, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((xs = U(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Rs = U(ue, ue, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Gt = ue;
const Ms = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function js(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, p, l, d;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Vt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ti, CONFIG.Item.dataModels.MikroChip = si, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ni, CONFIG.Item.dataModels.Egyeb = ai, CONFIG.Item.dataModels.Jarmuegyseg = ci, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (p = CONFIG.Actor).typeLabels ?? (p.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (l = CONFIG.Combat).initiative ?? (l.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (d = CONFIG.Item).typeLabels ?? (d.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
  const I = "systems/vacuum-of-the-void/assets/status";
  CONFIG.statusEffects = [
    { id: "dead", name: "VOTV.StatusDead", img: `${I}/dead_icon.svg` },
    { id: "unconscious", name: "VOTV.StatusUnconscious", img: `${I}/unconcious_icon.svg` },
    { id: "sleeping", name: "VOTV.StatusSleeping", img: `${I}/sleeping_icon.svg` },
    { id: "stunned", name: "VOTV.StatusStunned", img: `${I}/stunned_icon.svg` },
    { id: "fallen", name: "VOTV.StatusFallen", img: `${I}/fallen_icon.svg` },
    { id: "grappled", name: "VOTV.StatusGrappled", img: `${I}/grappled_icon.svg` },
    { id: "immobilized", name: "VOTV.StatusImmobilized", img: `${I}/immobilized_icon.svg` },
    { id: "blinded", name: "VOTV.StatusBlinded", img: `${I}/blinded_icon.svg` },
    { id: "deafened", name: "VOTV.StatusDeafened", img: `${I}/deafened_icon.svg` },
    { id: "frightened", name: "VOTV.StatusFrightened", img: `${I}/frightened_icon.svg` },
    { id: "burning", name: "VOTV.StatusBurning", img: `${I}/burning_icon.svg` },
    { id: "bleeding", name: "VOTV.StatusBleeding", img: `${I}/bleeding_icon.svg` },
    { id: "diseased", name: "VOTV.StatusDiseased", img: `${I}/diseased_icon.svg` },
    { id: "poisoned", name: "VOTV.StatusPoisoned", img: `${I}/poisoned_icon.svg` },
    { id: "invisible", name: "VOTV.StatusInvisible", img: `${I}/invisible_icon.svg` },
    { id: "drowning", name: "VOTV.StatusDrowning", img: `${I}/drowning_icon.svg` },
    { id: "intoxicated", name: "VOTV.StatusIntoxicated", img: `${I}/intoxicated_icon.svg` },
    { id: "hidden", name: "VOTV.StatusHidden", img: `${I}/hidden_icon.svg` },
    { id: "ready", name: "VOTV.StatusReady", img: `${I}/ready_icon.svg` },
    { id: "lookaround", name: "VOTV.StatusLookaround", img: `${I}/lookaraound_icon.svg` },
    { id: "dodge", name: "VOTV.StatusDodge", img: `${I}/dodge_icon.svg` },
    { id: "halfcover", name: "VOTV.StatusHalfcover", img: `${I}/halfcover_icon.svg` },
    { id: "threequarteredcover", name: "VOTV.StatusThreequarteredcover", img: `${I}/threequarteredcover_icon.svg` },
    { id: "fullcover", name: "VOTV.StatusFullcover", img: `${I}/fullcover_icon.svg` }
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", ht, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Rt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", jt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", zt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ut, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Bt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), Hooks.on("updateActor", (u, m, f, g) => {
    if ((u == null ? void 0 : u.type) !== "Karakter" || !(u != null && u.id)) return;
    const o = u.id;
    setTimeout(() => {
      var r, y, h, k;
      const i = (r = game.actors) == null ? void 0 : r.get(o);
      if (!i || i.type !== "Karakter") return;
      const a = ht.getTotalSpeedRaw(i), c = (y = i.effects) == null ? void 0 : y.find((S) => S.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (a <= 0 && !c) {
        const S = ((k = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : k.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: S,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, C;
          const T = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const _ of T)
            ((C = _ == null ? void 0 : _.document) == null ? void 0 : C.actorId) === o && typeof _.draw == "function" && _.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else a > 0 && c && c.delete().then(() => {
        var T, D;
        const S = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const C of S)
          ((D = C == null ? void 0 : C.document) == null ? void 0 : D.actorId) === o && typeof C.draw == "function" && C.draw();
      }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", S));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (u, m, f, g) => {
    var T, D, C, _, q, M, v, F, P, j, G, Y, J;
    const o = u == null ? void 0 : u.id;
    if (!o) return;
    if ((u.type === "Karakter" || u.type === "Npc") && ((T = m == null ? void 0 : m.system) != null && T.combat) && "initiativeResult" in m.system.combat) {
      const K = Number((C = (D = u.system) == null ? void 0 : D.combat) == null ? void 0 : C.initiativeResult), V = Number.isFinite(K) ? K : 0, ee = game.combat;
      if (ee) {
        const Se = ((_ = ee.combatants) == null ? void 0 : _.contents) ?? Array.from(ee.combatants ?? []);
        for (const ye of Se)
          if (((q = ye.actor) == null ? void 0 : q.id) === o || ye.actorId === o) {
            ee.updateEmbeddedDocuments("Combatant", [{ _id: ye.id, initiative: V }]).catch(() => {
            });
            break;
          }
      }
    }
    if (u.type === "Npc" && ((M = m == null ? void 0 : m.system) != null && M.identity) && "size" in m.system.identity) {
      const K = js((F = (v = u.system) == null ? void 0 : v.identity) == null ? void 0 : F.size);
      u.update({
        "prototypeToken.width": K,
        "prototypeToken.height": K
      }).catch((V) => console.warn("Vacuum of the Void | NPC token size update failed for", u.name, V));
    }
    const i = document.activeElement, a = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], r = (P = game.actors) == null ? void 0 : P.get(o);
    r != null && r.apps && c.push(...Array.from(r.apps));
    const y = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const K of y) {
      if (((j = K.document) == null ? void 0 : j.id) !== o || ((G = K.document) == null ? void 0 : G.documentName) !== "Actor") continue;
      const V = (Y = K.constructor) == null ? void 0 : Y.name;
      V !== "VoidKarakterSheet" && V !== "VoidJarmuSheet" || c.includes(K) || c.push(K);
    }
    if (a && c.some((K) => {
      const V = (K == null ? void 0 : K.form) ?? (K == null ? void 0 : K.element);
      return V && V.contains(i);
    })) return;
    const k = (J = game.votv) == null ? void 0 : J._lastKarakterSheetBlurSave, S = k && Date.now() - k.at < s ? k.appId : null;
    setTimeout(() => {
      for (const K of c)
        !(K != null && K.rendered) || typeof K.render != "function" || K.id !== S && K.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, m, f, g) => {
    var c, r, y;
    const o = u == null ? void 0 : u.parent;
    if (!o || o.documentName !== "Actor" || o.type !== "Karakter" || u.type !== "Fegyver") return;
    const i = ((c = o.system) == null ? void 0 : c.weapons) ?? {}, a = {};
    for (const [h, k] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const S = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !S || S !== u.id || (a[`system.weapons.${h}.name`] = u.name ?? "", a[`system.weapons.${h}.damage`] = ((r = u.system) == null ? void 0 : r.damage) ?? "", a[`system.weapons.${h}.bonus`] = ((y = u.system) == null ? void 0 : y.bonus) ?? "");
    }
    Object.keys(a).length && o.update(a);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var y, h, k, S, T, D, C, _, q, M, v, F, P, j, G, Y, J, K, V, ee, Se, ye, Te;
    const t = (h = (y = e.target) == null ? void 0 : y.closest) == null ? void 0 : h.call(y, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (k = game.messages) == null ? void 0 : k.get(n), l = (T = (S = p == null ? void 0 : p.flags) == null ? void 0 : S["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!l) return;
    const d = l.actorId ?? ((D = p == null ? void 0 : p.speaker) == null ? void 0 : D.actor) ?? "";
    if (!d) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((C = game.actors) == null ? void 0 : C.get(l.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(d));
    if (u || (u = ((M = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : M.flatMap((de) => {
      var Fe;
      return ((Fe = de.tokens) == null ? void 0 : Fe.contents) ?? [];
    }).map((de) => de.actor).find((de) => de && (de.id === d || de.id === l.actorId))) ?? null), !u) return;
    const m = l.itemId ? ((F = (v = u.items) == null ? void 0 : v.get) == null ? void 0 : F.call(v, l.itemId)) ?? ((G = (j = (P = u.items) == null ? void 0 : P.contents) == null ? void 0 : j.find) == null ? void 0 : G.call(j, (ae) => ae.id === l.itemId)) : null;
    let f = (l.damageFormula ?? "").trim();
    if (f || (f = (((Y = m == null ? void 0 : m.system) == null ? void 0 : Y.damage) ?? "").trim()), !f && l.slotKey && (f = (((((J = u.system) == null ? void 0 : J.weapons) ?? {})[l.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (Se = (K = ui.notifications) == null ? void 0 : K.warn) == null || Se.call(K, ((ee = (V = game.i18n) == null ? void 0 : V.localize) == null ? void 0 : ee.call(V, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const g = new Roll(f);
    await g.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = l.targetName || "", a = l.hitLocationName || "", c = ((m == null ? void 0 : m.name) ?? (l.slotKey ? ((Te = (((ye = u.system) == null ? void 0 : ye.weapons) ?? {})[l.slotKey]) == null ? void 0 : Te.name) ?? "" : "")) || "Fegyver";
    let r = i ? `${c} – sebzés – ${i}` : `${c} – sebzés`;
    a && (r += ` (${a})`), await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: u }),
      flavor: r,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var l, d, u, m, f, g;
      if (!((d = (l = e.target) == null ? void 0 : l.closest) != null && d.call(l, "#actors"))) return;
      const t = (m = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((g = game.actors) != null && g.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, l;
    const e = ((t = game.actors) == null ? void 0 : t.filter((d) => d.type === "Karakter")) ?? [];
    for (const d of e) {
      const u = ht.getTotalSpeedRaw(d), m = (n = d.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !m) {
        const f = ((l = (p = CONFIG.statusEffects) == null ? void 0 : p.find((g) => g.id === "immobilized")) == null ? void 0 : l.img) ?? "";
        await d.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: d.uuid
        }]).catch(() => {
        });
      } else u > 0 && m && await m.delete().catch(() => {
      });
    }
  })(), (I = game.user) != null && I.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: Ms },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, l = await n.create(p);
      l && console.log("Vacuum of the Void | Default scene created:", l.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var l, d, u, m, f, g;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((l = game.actors) == null ? void 0 : l.filter((o) => o.type === "Karakter")) ?? [];
    for (const o of t)
      try {
        const i = o.prototypeToken, a = ((d = i == null ? void 0 : i.bar1) == null ? void 0 : d.attribute) ?? "", c = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
        (a || c) && await o.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", o.name, i);
      }
    for (const o of game.scenes ?? []) {
      const i = ((m = o.tokens) == null ? void 0 : m.filter((a) => {
        var c;
        return ((c = a.actor) == null ? void 0 : c.type) === "Karakter";
      })) ?? [];
      for (const a of i)
        try {
          await a.update(e);
        } catch (c) {
          console.warn("Vacuum of the Void | Token update failed for", a.name, c);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, p = ((f = game.actors) == null ? void 0 : f.filter((o) => o.type === "Npc")) ?? [];
    for (const o of p)
      try {
        await o.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", o.name, i);
      }
    for (const o of game.scenes ?? []) {
      const i = ((g = o.tokens) == null ? void 0 : g.filter((a) => {
        var c;
        return ((c = a.actor) == null ? void 0 : c.type) === "Npc";
      })) ?? [];
      for (const a of i)
        try {
          await a.update(n);
        } catch (c) {
          console.warn("Vacuum of the Void | NPC token update failed for", a.name, c);
        }
    }
  })();
});
Hooks.on("preCreateToken", (I, s, e) => {
  var l, d, u, m;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, n = t ?? I.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (d = game.actors) == null ? void 0 : d.get(n) : null;
  if (p) {
    if (p.type === "Karakter") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (p.type === "Jarmu") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (p.type === "Npc") {
      const f = js((m = (u = p.system) == null ? void 0 : u.identity) == null ? void 0 : m.size);
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: f,
        height: f
      });
    }
  }
});
Hooks.on("preCreateCombatant", (I, s, e) => {
  const t = I.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && I.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (I, s, e) => {
  const t = I.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const fi = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Ks(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(fi).catch((p) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, p);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ks(I);
});
function zs() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((p) => p.type === "Karakter" || p.type === "Npc")) ?? []) {
    const p = n.apps ?? [], l = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const d of l)
      !d || I.has(d.id) || (I.add(d.id), typeof d.render == "function" && d.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const p = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    p !== "Karakter" && p !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(zs, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && Ks(I), setTimeout(zs, 0);
});
Hooks.on("renderSidebarTab", (I, s, e) => {
  if ((I == null ? void 0 : I.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((p) => {
    p.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var p;
  const t = I == null ? void 0 : I.object, n = ((p = t == null ? void 0 : t.document) == null ? void 0 : p.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const l = s[0] ?? s;
    l != null && l.classList && l.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ms,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var m, f, g, o;
  const t = ((m = I.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, l = t.weaponAttack, d = t.weapon;
  if (!n && !p && !l) return;
  const u = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (u) {
    if (n && u.classList.add(`votv-${n}`), p) {
      const i = u.querySelector(".votv-crit-label");
      if (i)
        i.textContent = p;
      else {
        const a = u.querySelector(".dice-total"), c = (a == null ? void 0 : a.parentElement) ?? u, r = document.createElement("div");
        r.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, r.textContent = p, c.appendChild(r);
      }
    }
    if (l && d && (d.actorId || (g = I.speaker) != null && g.actor)) {
      const i = u.querySelector(".dice-total"), a = (i == null ? void 0 : i.parentElement) ?? u;
      if (!u.querySelector(".votv-weapon-outcome")) {
        const r = document.createElement("div");
        r.className = "votv-weapon-outcome";
        const y = !!d.isHit, h = d.targetName || "Célpont";
        r.textContent = y ? `Találat – ${h}` : `Nem talált – ${h}`, a.appendChild(r);
      }
      if (d.isHit && !u.querySelector(".votv-weapon-damage-chat")) {
        const y = document.createElement("button");
        y.type = "button", y.className = "votv-weapon-damage-chat";
        const h = d.hitLocationRoll, k = d.hitLocationName;
        y.textContent = h != null && k ? `Sebzés (Találati Hely ${h} - ${k})` : "Sebzés", y.dataset.actorId = String(d.actorId ?? ((o = I.speaker) == null ? void 0 : o.actor) ?? ""), y.dataset.itemId = String(d.itemId ?? ""), y.dataset.slotKey = String(d.slotKey ?? ""), y.dataset.targetName = String(d.targetName ?? ""), y.dataset.hitLocationName = String(d.hitLocationName ?? ""), y.dataset.messageId = String(I.id ?? ""), a.appendChild(y);
      }
    }
  }
});
export {
  ht as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-CWDDeLBi.mjs.map
