var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (T, s, e) => s in T ? Hs(T, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : T[s] = e;
var te = (T, s, e) => Vs(T, typeof s != "symbol" ? s + "" : s, e);
var U = (T, s, e) => Gs(Bs(T), e, s);
const { HTMLField: Ws, NumberField: F, SchemaField: H, StringField: C, BooleanField: de, ArrayField: It } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new H({
        name: new C({ required: !1, blank: !0, initial: "" }),
        player: new C({ required: !1, blank: !0, initial: "" }),
        level: new F({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new C({ required: !1, blank: !0, initial: "" }),
        assignment: new C({ required: !1, blank: !0, initial: "" }),
        subAssignment: new C({ required: !1, blank: !0, initial: "" }),
        background: new C({ required: !1, blank: !0, initial: "" }),
        languages: new C({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new C({ required: !1, blank: !0, initial: "" })
      }),
      resources: new H({
        health: new H({
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new H({
          head: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          }),
          torso: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          }),
          arms: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          }),
          legs: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new H({
          head: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new H({
          head: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new H({
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        money: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        morale: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header – három külön KP mezőhöz használható (kp, kp2, kp3)
        kp: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp2: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        kp3: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Karakterlap / NPC: KP ikonok külön-külön le/fel kapcsolható (0 = aktív, 1 = elhasznált); NPC-nél akár 10 is
        kpDot1: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot2: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot3: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot4: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot5: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot6: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot7: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot8: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot9: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 }),
        kpDot10: new F({ required: !1, integer: !0, min: 0, max: 1, initial: 0 })
      }),
      combat: new H({
        defense: new F({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new F({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new C({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new F({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new It(
          new H({
            min: new F({ required: !1, integer: !0, initial: 0 }),
            max: new F({ required: !1, integer: !0, initial: 0 }),
            kp: new F({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new H({
        deception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new C({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new C({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new C({ required: !1, blank: !0, initial: "" }),
        combatTraining: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        vehicleOperation: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        grenadeUse: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        lexicalKnowledge: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        stealth: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        firearms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        intimidation: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        persuasion: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        memory: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        mentalStrength: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        luck: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        languages: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        technicalKnowledge: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        music: new F({ required: !1, integer: !0, min: 0, initial: 0 })
      }),
      weapons: new H({
        slotOrder: new C({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new H({
          name: new C({ required: !1, blank: !0, initial: "" }),
          bonus: new C({ required: !1, blank: !0, initial: "" }),
          damage: new C({ required: !1, blank: !0, initial: "" }),
          itemId: new C({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new H({
        microchips: new H({
          slot1: new H({
            itemId: new C({ required: !1, blank: !0, initial: "" }),
            name: new C({ required: !1, blank: !0, initial: "" }),
            active: new de({ required: !1, initial: !1 })
          }),
          slot2: new H({
            itemId: new C({ required: !1, blank: !0, initial: "" }),
            name: new C({ required: !1, blank: !0, initial: "" }),
            active: new de({ required: !1, initial: !1 })
          }),
          slot3: new H({
            itemId: new C({ required: !1, blank: !0, initial: "" }),
            name: new C({ required: !1, blank: !0, initial: "" }),
            active: new de({ required: !1, initial: !1 })
          })
        }),
        equipment: new C({ required: !1, blank: !0, initial: "" }),
        armor: new It(
          new H({
            name: new C({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new C({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new C({ required: !1, blank: !0, initial: "" }),
            level: new C({ required: !1, blank: !0, initial: "" }),
            other: new C({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new It(
          new H({
            name: new C({ required: !1, blank: !0, initial: "" }),
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new C({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new H({
        faji: new H({
          itemId: new C({ required: !1, blank: !0, initial: "" }),
          name: new C({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new H({
          itemId: new C({ required: !1, blank: !0, initial: "" }),
          name: new C({ required: !1, blank: !0, initial: "" })
        }),
        passive: new H({
          items: new It(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new It(
            new C({ required: !1, blank: !0 }),
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
const { NumberField: Pt, SchemaField: Js } = foundry.data.fields;
class Ys extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Js({
        body: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Xs, StringField: ms } = foundry.data.fields;
class Qs extends Wt {
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
const { BooleanField: Zs, NumberField: gi, StringField: Re } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Zs({ required: !1, initial: !1 }),
      type: new Re({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Re({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Re({ required: !1, blank: !0, initial: "" }),
      damage: new Re({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Re({ required: !1, blank: !0, initial: "" }),
      special: new Re({ required: !1, blank: !0, initial: "" }),
      quantity: new Re({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Re({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ei, StringField: At } = foundry.data.fields;
class ti extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ei({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new At({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new At({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new At({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new At({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: $t, StringField: fs } = foundry.data.fields;
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
      cost: new $t({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new $t({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new $t({ required: !1, integer: !0, min: 0, initial: 1 })
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
        options: ["active", "passive", "species", "background", "module"],
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
const { StringField: ai } = foundry.data.fields;
class ri extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ai({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: xt, StringField: at, SchemaField: bs, ArrayField: oi } = foundry.data.fields;
class ci extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new xt({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new bs({
        max: new xt({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new xt({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new bs({
        items: new oi(
          new at({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new at({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new at({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new at({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new at({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new at({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Rt(T) {
  if (!T || !Array.isArray(T.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (a, i = 1) => {
    if (!Array.isArray(a)) return;
    let r = i;
    for (const o of a) {
      if (!o) continue;
      if (Array.isArray(o.terms)) {
        f(o.terms, r);
        continue;
      }
      if (typeof o.operator == "string") {
        r = o.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof o.faces == "number" ? o.faces : void 0, h = Array.isArray(o.results) ? o.results : null;
      if (!u || !h || u === 8 || u !== 6) continue;
      const g = !n && r >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : r >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && g.push(I);
      }
    }
  };
  f(T.terms, 1);
  const c = s.filter((a) => a === 6).length, m = s.filter((a) => a === 1).length, d = e.filter((a) => a === 6).length, l = t.filter((a) => a === 6).length, p = c + d, y = m + l;
  return p > 0 && p === y ? { resultType: null, label: null } : p >= 3 ? { resultType: "critical", label: "Brutális Siker" } : p === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function li(T) {
  return T ? T === "1" ? "1. szint" : T === "2" ? "2. szint" : T === "3" ? "3. szint" : T === "Alap" ? "Alap" : T : "Alap";
}
var vs, ks, ws, Is;
const X = class X extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, c, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const f = this.element, c = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = c.contains(u), g = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && g && (m.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const l = this.element, p = this.form ?? this.element, y = m.scrollState, a = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", r = () => {
      var u, h;
      if (this._applyScrollState(l, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((u = p.querySelector) == null ? void 0 : u.call(p, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = p.querySelector) == null ? void 0 : h.call(p, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(l, y);
    };
    return (i || a) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), d;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const f = Math.floor(n / 3), c = Math.floor(2 * n / 3);
    return t <= f ? 1 : t <= c ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var m;
        return c.type === "Pancel" && ((m = c.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const m = String(((f = c.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(m);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var m;
        return c.type === "Pancel" && ((m = c.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const m = String(((f = c.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), d = Number(m);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var m;
        return c.type === "Pancel" && ((m = c.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let t = 0;
    for (const c of e) {
      const m = String(((f = c.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(m);
      Number.isFinite(d) && (t += d);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var p, y, a, i, r, o, u, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (p = e.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : y.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, f = X._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const c = Number(((r = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : r.givenSpeed) ?? 0) || 0;
    let m;
    f === 1 ? m = -6 : f === 2 ? m = -3 : m = c, m += X._getTotalArmorSpeedPenaltyStatic(s);
    const d = Number(((u = (o = s.system) == null ? void 0 : o.combat) == null ? void 0 : u.speed) ?? 0) || 0, l = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return d + l + (Number.isFinite(m) ? m : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : X.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, a, i, r, o, u, h, g, v, I, S, D;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((r = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && r.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((u = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : u.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, c = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, m = X._healthStatusFromRatio(c, f), d = Number(((D = (S = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : S.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let l;
    m === 0 ? l = 0 : m === 1 ? l = -6 : m === 2 ? l = -3 : l = d;
    const p = this._getTotalArmorSpeedPenalty();
    l += p, t.textContent = String(l);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var l, p, y, a, i, r, o, u, h, g, v, I, S;
    const e = s ?? this.form ?? this.element;
    let t = (l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (y = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : y.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, f = (o = (r = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : r.has) != null && o.call(r, "lookaround") ? 1 : 0, c = (g = (h = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, m = (S = (I = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : I.has) != null && S.call(I, "threequarteredcover") ? 6 : 0, d = n + this._getTotalArmorProtectionBonus() + f + c + m;
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), c = t('input[name="system.combat.defense"]'), m = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const d = Number(c == null ? void 0 : c.value) || 0, l = Number(m == null ? void 0 : m.value) || 0, p = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(d + l + p);
  }
  _writeTotalSpeed(s = null) {
    var o, u, h, g, v, I, S, D;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), c = t('input[name="system.combat.speed"]'), m = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (u = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : u.has) != null && h.call(u, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const d = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, l = ((S = (I = d.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : S.value) ?? 0, p = ((D = d.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (X._healthStatusFromRatio(p, l) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(c == null ? void 0 : c.value) || 0, i = Number(m == null ? void 0 : m.value) || 0, r = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(a + i + r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, m, d, l;
    const e = X.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, n = ((d = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : d.value) ?? 0, f = ((l = t.currentHealth) == null ? void 0 : l[e]) ?? 0;
    return X._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var m, d, l, p;
    const t = X.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((m = s == null ? void 0 : s.system) == null ? void 0 : m.resources) ?? {}, f = ((l = (d = n.hitLocations) == null ? void 0 : d[t]) == null ? void 0 : l.value) ?? 0, c = ((p = n.currentHealth) == null ? void 0 : p[t]) ?? 0;
    return X._healthStatusFromRatio(c, f);
  }
  async _prepareContext(s) {
    var ct, lt, ut, dt, mt, pt, ft, yt, gt, Ve, ht, bt, We, w, P, x, G, he, se, Te, Ie, be, Ae, Je, Ye, Ct, qt, Lt, Nt, vt, it, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, as, rs, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ut = (lt = (ct = this.actor.system) == null ? void 0 : ct.resources) == null ? void 0 : lt.stress) == null ? void 0 : ut.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, c = n.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of m) {
      const A = ((dt = f[b]) == null ? void 0 : dt.value) ?? 0, N = c[b] ?? 0;
      e.computedHealthStatus[b] = X._healthStatusFromRatio(N, A);
    }
    const d = (Number(c.head) || 0) === 0, p = ["torso", "arms", "legs"].filter((b) => (Number(c[b]) || 0) === 0).length;
    e.showDeathSkull = d || p >= 2;
    const y = e.computedHealthStatus.legs ?? 3, a = Number(((pt = (mt = this.actor.system) == null ? void 0 : mt.combat) == null ? void 0 : pt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = a;
    const r = this._getTotalArmorSpeedPenalty();
    i += r, e.effectiveGivenSpeed = i;
    const o = Number(((yt = (ft = this.actor.system) == null ? void 0 : ft.combat) == null ? void 0 : yt.givenProtection) ?? 0) || 0, u = (ht = (Ve = (gt = this.actor) == null ? void 0 : gt.statuses) == null ? void 0 : Ve.has) != null && ht.call(Ve, "lookaround") ? 1 : 0, h = (w = (We = (bt = this.actor) == null ? void 0 : bt.statuses) == null ? void 0 : We.has) != null && w.call(We, "halfcover") ? 3 : 0, g = (G = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && G.call(x, "threequarteredcover") ? 6 : 0, v = o + this._getTotalArmorProtectionBonus() + u + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const I = ((he = e.system) == null ? void 0 : he.combat) ?? {};
    e.totalDefense = (Number(I.defense) || 0) + (Number(I.defenseBonus) || 0) + (Number(I.givenProtection) || 0);
    const S = Number(I.givenSpeed);
    let D = (Number(I.speed) || 0) + (Number(I.speedBonus) || 0) + (Number.isFinite(S) ? S : 0);
    y === 0 && (D = 0), (Ie = (Te = (se = this.actor) == null ? void 0 : se.statuses) == null ? void 0 : Te.has) != null && Ie.call(Te, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Ae = (be = e.system) == null ? void 0 : be.combat) == null ? void 0 : Ae.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const _ = X.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, A] of Object.entries(_)) {
      const N = e.computedHealthStatus[A];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (O.slotOrder ?? "").trim(), j = M ? M.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], B = (Je = this.actor.system.gear) == null ? void 0 : Je.microchips, R = B && typeof B == "object" && !Array.isArray(B) ? B : {}, W = (((Ye = R.slot1) == null ? void 0 : Ye.itemId) ?? "").trim(), Y = (((Ct = R.slot2) == null ? void 0 : Ct.itemId) ?? "").trim(), V = (((qt = R.slot3) == null ? void 0 : qt.itemId) ?? "").trim(), k = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, A) => {
      const N = typeof b.sort == "number" ? b.sort : 0, E = typeof A.sort == "number" ? A.sort : 0;
      return N - E;
    }).map((b) => {
      var Fe, Qe, Ze, $e, xe, kt;
      const A = b.type === "Fegyver", N = b.type === "MikroChip";
      let E = 0, K = "", ce = null;
      for (let nt = 0; nt < j.length; nt++) {
        const wt = j[nt];
        if ((((Fe = O[wt]) == null ? void 0 : Fe.itemId) ?? "") === b.id) {
          E = nt + 1, K = ((Qe = O[wt]) == null ? void 0 : Qe.bonus) ?? "", ce = wt;
          break;
        }
      }
      let ae = null;
      N && (W === b.id ? ae = "slot1" : Y === b.id ? ae = "slot2" : V === b.id && (ae = "slot3"));
      const Xe = A && ((Ze = b.system) != null && Ze.damage) ? b.system.damage : "", ve = A && typeof (($e = b.system) == null ? void 0 : $e.range) == "string" ? (b.system.range || "").trim() : "", Se = ce ? Number((xe = O[ce]) == null ? void 0 : xe.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: A,
        slotAssignment: E,
        slotBonus: K,
        slotKey: ce,
        microchipSlotKey: ae,
        isEquipped: !!(ce || ae),
        damage: Xe,
        rangeStr: ve,
        slotBonusNum: Se,
        quantity: Number(((kt = b.system) == null ? void 0 : kt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = k;
    const L = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Fegyver"), z = L.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = z;
    const Q = "— Nincs fegyver —", ee = j.filter((b) => {
      const N = ((O[b] ?? {}).itemId ?? "").trim();
      return N ? !!L.find((K) => K.id === N) : !1;
    });
    e.weaponSlots = ee.map((b, A) => {
      const N = O[b] ?? {}, E = (N.itemId ?? "").trim(), K = z.find((Se) => Se.id === E), ce = L.find((Se) => Se.id === E), ae = (ce == null ? void 0 : ce.system) ?? {}, Xe = ae.size === "thrown", ve = (typeof ae.range == "string" ? (ae.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: E,
        slotNum: A + 1,
        displayName: (K == null ? void 0 : K.name) || N.name || Q,
        img: (K == null ? void 0 : K.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: Xe,
        rangeStr: ve
      };
    });
    const ie = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, Z = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = L.map((b) => {
      var ls, us, ds;
      const A = b.id;
      let N = null, E = {};
      for (const Et of j)
        if ((((ls = O[Et]) == null ? void 0 : ls.itemId) ?? "").trim() === A) {
          N = Et, E = O[Et] ?? {};
          break;
        }
      const K = !!N, ce = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : K, ae = (b == null ? void 0 : b.system) ?? {}, Xe = typeof ae.range == "string" ? (ae.range || "").trim() : "", ve = ae.type ?? "", Se = (ie[ve] ?? ve) || "—", Fe = ae.size ?? "", Qe = (Z[Fe] ?? Fe) || "", Ze = [Se, Qe].filter(Boolean).join(", ") || Se || "—", $e = ve === "projectile" || Fe === "thrown", xe = ae.quantity, kt = xe != null ? String(xe).trim() : "1", nt = String(E.bonus ?? "").trim(), wt = String(ae.bonus ?? "").trim(), Us = nt || wt || "0";
      return {
        slotKey: N ?? "",
        itemId: A,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? Q,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: E.damage ?? ae.damage ?? "",
        rangeStr: Xe || "—",
        typeLabel: Se,
        typeAndSize: Ze,
        quantity: kt,
        quantityDisplay: $e ? kt : "—",
        isProjectile: $e,
        equipped: ce,
        special: (ae.special ?? "").trim() || "—"
      };
    });
    const re = (((Nt = this.actor.items) == null ? void 0 : Nt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = re.map((b) => {
      var E, K;
      const A = (b == null ? void 0 : b.system) ?? {}, N = ((E = b.system) == null ? void 0 : E.equipped) !== void 0 && ((K = b.system) == null ? void 0 : K.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (A.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (A.speedPenalty ?? "").toString().trim() || "—",
        level: li((A.level ?? "").toString().trim()),
        special: (A.special ?? A.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const ue = (((vt = this.actor.items) == null ? void 0 : vt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = ue.map((b) => {
      const A = (b == null ? void 0 : b.system) ?? {}, N = (A.description ?? "").trim(), E = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", K = A.quantity != null ? String(A.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: K,
        description: E
      };
    });
    const me = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = me.map((b) => {
      const N = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), E = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: E
      };
    });
    const et = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), le = et.map((b) => ({ id: b.id, name: b.name, img: b.img })), Me = "— Nincs Mikro-Chip —", ge = ["slot1", "slot2", "slot3"], Ne = (b) => {
      var N, E, K;
      const A = [];
      return b !== 1 && A.push((((N = R.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && A.push((((E = R.slot2) == null ? void 0 : E.itemId) ?? "").trim()), b !== 3 && A.push((((K = R.slot3) == null ? void 0 : K.itemId) ?? "").trim()), A.filter(Boolean);
    };
    e.microchipItemsSlot1 = le.filter((b) => !Ne(1).includes(b.id)), e.microchipItemsSlot2 = le.filter((b) => !Ne(2).includes(b.id)), e.microchipItemsSlot3 = le.filter((b) => !Ne(3).includes(b.id)), e.microchipSlots = ge.map((b) => {
      const A = R[b] ?? {}, N = (A.itemId ?? "").trim(), E = et.find((K) => K.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (E == null ? void 0 : E.name) || A.name || Me,
        img: (E == null ? void 0 : E.img) || "",
        active: A.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const A = `slot${b}`, N = R[A] ?? {}, E = (N.itemId ?? "").trim(), K = le.find((ce) => ce.id === E);
      e[`microchip${b}ItemId`] = E, e[`microchip${b}DisplayName`] = (K == null ? void 0 : K.name) || N.name || Me, e[`microchip${b}Img`] = (K == null ? void 0 : K.img) || "";
    }), e.microchipsTable = et.map((b) => {
      var Fe, Qe, Ze, $e;
      const A = b.id;
      let N = null;
      for (const xe of ge)
        if ((((Fe = R[xe]) == null ? void 0 : Fe.itemId) ?? "").trim() === A) {
          N = xe;
          break;
        }
      const E = !!N, K = ((Qe = b == null ? void 0 : b.system) == null ? void 0 : Qe.abilityType) ?? "", ce = K === "active" ? "Aktív" : K === "passive" ? "Passzív" : K || "—", ae = K === "active", Xe = Number((Ze = b == null ? void 0 : b.system) == null ? void 0 : Ze.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, ve = ((($e = b == null ? void 0 : b.system) == null ? void 0 : $e.description) ?? "").trim(), Se = ve ? ve.length > 60 ? ve.slice(0, 57) + "…" : ve : "—";
      return {
        itemId: A,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ce,
        description: Se,
        kp: Xe,
        isActive: ae,
        slotKey: N ?? "",
        equipped: E
      };
    });
    const rt = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !rt;
    const tt = this.actor.system.abilities ?? {}, ne = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var A, N, E;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((A = b.system) == null ? void 0 : A.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((E = b.system) == null ? void 0 : E.kp) ?? 0) || 0
      };
    }), ye = new Map(ne.map((b) => [b.id, b])), oe = "— Nincs képesség —", je = (b) => {
      const A = tt[b] ?? {}, N = (A.itemId ?? "").trim(), E = N ? ye.get(N) : null, K = (E == null ? void 0 : E.description) ?? "", ce = (E == null ? void 0 : E.kp) ?? 0;
      return {
        itemId: N,
        displayName: (E == null ? void 0 : E.name) || A.name || oe,
        img: (E == null ? void 0 : E.img) || "",
        description: K,
        kp: ce
      };
    };
    e.abilityFajiSlot = je("faji"), e.abilityHatterSlot = je("hatter");
    const Ke = (b) => {
      const A = tt[b];
      return A ? Array.isArray(A == null ? void 0 : A.items) ? A.items : Array.isArray(A) ? A : [] : [];
    }, Ee = (b) => b.map((A) => {
      const N = ye.get(A);
      return N ? {
        id: N.id,
        name: N.name,
        img: N.img,
        description: N.description,
        kp: N.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ee(Ke("passive")), e.abilityActiveList = Ee(Ke("active"));
    const ze = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, st = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ue = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, we = typeof Ue == "number" ? Ue : -1, Tt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], He = (as = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : as.initiativeRanges, Be = Array.isArray(He) ? He.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Pe = (Be.length > 0 ? Be : Tt).slice().sort((b, A) => b.min - A.min), Ge = Be.map((b) => b.min), Dt = Ge.length ? Math.min(...Ge) : 0, _t = Ge.length ? Math.max(...Ge) : 0;
    e.initiativeRanges = Be.map((b) => ({ ...b, isFirst: b.min === Dt, isLast: b.min === _t }));
    let ot = 0;
    if (typeof we == "number" && we >= 0 && Pe.length > 0) {
      const b = Pe[0], A = Pe[Pe.length - 1];
      let N = null;
      we <= b.max ? N = b : we >= A.min ? N = A : N = Pe.find((E) => we >= E.min && we <= E.max), N && (ot = N.kp);
    }
    e.kpDots = st.map((b, A) => {
      const N = A + 1, E = !!Number(ze[b]), K = N <= ot;
      return { index: N, used: E, usable: K };
    });
    const Ot = !!((os = (rs = game.combat) == null ? void 0 : rs.combatants) != null && os.some((b) => {
      var A;
      return ((A = b.actor) == null ? void 0 : A.type) === "Karakter";
    }));
    return e.showHarcSection = Ot, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ue == "number", e.initiativeResult = e.showInitiativeResult ? Ue : "", e;
  }
  _attachFrameListeners(s) {
    var y, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-DqFrbJnw.mjs");
      u(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var u, h, g;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (r.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((h = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((g = r.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: r } = await import("./roll-sheet-DqFrbJnw.mjs");
      r(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, o = parseInt(r.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const u = `system.resources.kpDot${o}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [u]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var u;
      const r = i ? i.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
    const c = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', c), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var u, h, g;
      i.preventDefault(), i.stopPropagation();
      const r = ((g = (h = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var g;
      i.preventDefault();
      const r = i.currentTarget, o = r.dataset.skill, u = ((g = r.textContent) == null ? void 0 : g.trim()) || o, { openRollSheetForSkill: h } = await import("./roll-sheet-DqFrbJnw.mjs");
      h(this.actor, o, u);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, S, D, _, O, q, M;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), u = o == null ? void 0 : o.dataset.slot;
      if (!u) return;
      const g = (((S = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[u]) == null ? void 0 : S.itemId) ?? "").trim();
      if (!g) return;
      const v = ((_ = (D = this.actor.items).get) == null ? void 0 : _.call(D, g)) ?? ((q = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : q.call(O, (j) => j.id === g));
      (M = v == null ? void 0 : v.sheet) == null || M.render(!0);
    });
    const m = (i, r) => {
      var h;
      const o = i.dataset.itemId;
      if (!o) return;
      const u = this.actor.items.get(o);
      if (u) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (h = u.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const r = i.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const u = this.actor.items.get(o);
      if (!u) return;
      let h = Number(r.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await u.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const u = this.actor, h = u.items.get(o);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((O) => S.includes(O)) : [], _ = D.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === o;
        });
        if (_) {
          const O = D.filter((q) => q !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const u = this.actor.items.get(o);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = g ? g.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], S = I.find((q) => {
        var M;
        return (((M = h[q]) == null ? void 0 : M.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let q = I.find((j) => {
          var B;
          return !((B = h[j]) != null && B.itemId);
        });
        const M = new Set(I);
        if (!q) {
          const j = v.find((B) => !M.has(B));
          if (!j) return;
          q = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: o,
          [`system.weapons.${q}.name`]: (u == null ? void 0 : u.name) ?? "",
          [`system.weapons.${q}.damage`]: ((_ = u == null ? void 0 : u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = u == null ? void 0 : u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (S) {
        const q = I.filter((M) => M !== S);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), u = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const r = i.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), u = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), h = u == null ? void 0 : u.dataset.slot;
      if (!h) return;
      const g = (r.dataset.itemId ?? "").trim(), v = (r.dataset.itemName ?? ((q = r.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (r.dataset.itemImg ?? "").trim(), S = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      S && (S.textContent = v);
      let D = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      I ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", u == null || u.insertBefore(D, S)), D.src = I, D.style.display = "") : D && D.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${h}.itemId`]: g,
        [`system.gear.microchips.${h}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (O[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "MikroChip") return;
      const u = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((S) => {
        var D;
        return (((D = u[S]) == null ? void 0 : D.itemId) ?? "").trim() === r;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const r = i.currentTarget.dataset.slot;
      if (!r) return;
      const o = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${r}.active`]: o }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, r) => {
      const o = r.dataset.slot;
      r.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, o)), r.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, o));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, o)), r.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (u) => {
        var h;
        (h = u.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, o)), r.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (u) => {
        var h;
        (h = u.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.slot;
      r && await this.actor.update({
        [`system.abilities.${r}.itemId`]: "",
        [`system.abilities.${r}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.area, o = i.currentTarget.dataset.itemId;
      if (!r || !o) return;
      const u = this.actor.system.abilities ?? {}, g = (Array.isArray((v = u[r]) == null ? void 0 : v.items) ? u[r].items.slice() : []).filter((I) => I !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const u = this.actor.items.get(o);
      (h = u == null ? void 0 : u.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const u = this.actor.items.get(o);
      u && (u.type === "Kepesseg" || u.type === "ability" ? await this._postAbilityToChat(o) : (u.type === "MikroChip" || u.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const u = this.actor.items.get(o);
      if (!u || u.type !== "Fegyver") return;
      const h = (r.value ?? "").trim();
      await u.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const u = this.actor.items.get(o);
      !u || u.type !== "Pancel" || (await u.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const u = this.actor.items.get(o);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = g ? g.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], S = I.find((q) => {
        var M;
        return (((M = h[q]) == null ? void 0 : M.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (S) return;
        let q = I.find((j) => {
          var B;
          return !((B = h[j]) != null && B.itemId);
        });
        const M = new Set(I);
        if (!q) {
          const j = v.find((B) => !M.has(B));
          if (!j) return;
          q = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: o,
          [`system.weapons.${q}.name`]: u.name ?? "",
          [`system.weapons.${q}.damage`]: ((_ = u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (S) {
        const q = I.filter((M) => M !== S);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${S}.itemId`]: "",
          [`system.weapons.${S}.name`]: "",
          [`system.weapons.${S}.damage`]: "",
          [`system.weapons.${S}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const u = this.actor, h = u.items.get(o), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), S = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((O) => S.includes(O)) : [], _ = D.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === o;
        });
        if (_) {
          const O = D.filter((q) => q !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [o]);
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
      const u = this.actor.items.get(o);
      if (!u || u.type !== "Targy") return;
      const h = (r.value ?? "").trim();
      await u.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const d = this, l = (i) => {
      var u, h, g, v;
      if (!i) return;
      const r = d._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const o = ((h = (u = r.system) == null ? void 0 : u.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = r.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      d.actor.update(r).then(() => {
        o && setTimeout(() => d.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, p = (i) => {
      var r, o, u;
      return i && (((o = (r = d.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || d.id && ((u = i.closest) == null ? void 0 : u.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      var g;
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const u = r.form;
      if (!p(u)) return;
      const h = i.relatedTarget;
      h && (u.contains(h) || d.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(d.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), l(u));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var m, d, l;
    const e = {};
    for (const p of s.elements) {
      if (!p.name || p.disabled || p.type === "radio" && !p.checked || p.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      p.type === "checkbox" ? y = p.checked : p.type === "number" ? y = p.value === "" ? 0 : Number(p.value) : y = p.value ?? "", foundry.utils.setProperty(e, p.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const p of c) {
      const y = ((l = n[p]) == null ? void 0 : l.value) ?? 0, a = f[p] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${p}`, X._healthStatusFromRatio(a, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, c, m, d, l, p, y, a, i, r, o, u;
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!h && typeof e == "object") {
        for (const g of Object.values(e))
          if (typeof g == "string" && g.includes(".") && g.startsWith("Item.")) {
            h = g;
            break;
          }
      }
      if (h) {
        const g = await fromUuid(h);
        if (g && g.documentName === "Item" && (g.type === "Kepesseg" || g.type === "ability")) {
          let v = g.id;
          if (((n = g.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(g.toObject(), { type: "Kepesseg" });
            v = ((f = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : f.id) ?? v;
          }
          const I = (((c = g.system) == null ? void 0 : c.kind) ?? "passive").toString();
          if (I === "module") {
            (d = (m = ui.notifications) == null ? void 0 : m.warn) == null || d.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
            return;
          }
          const S = this.actor.system.abilities ?? {};
          if (I === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": v,
              "system.abilities.faji.name": g.name
            });
            return;
          }
          if (I === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": v,
              "system.abilities.hatter.name": g.name
            });
            return;
          }
          const D = I === "active" ? "active" : "passive", _ = Array.isArray((l = S[D]) == null ? void 0 : l.items) ? S[D].items.slice() : Array.isArray(S[D]) ? S[D].slice() : [];
          _.includes(v) || _.push(v), await this.actor.update({ [`system.abilities.${D}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
      if (!h && typeof e == "object") {
        for (const g of Object.values(e))
          if (typeof g == "string" && g.includes(".") && g.startsWith("Item.")) {
            h = g;
            break;
          }
      }
      if (h) {
        const g = await fromUuid(h);
        if (g && g.documentName === "Item" && g.type === "Fegyver") {
          const v = this.actor, I = ((y = g.parent) == null ? void 0 : y.id) !== v.id;
          let S = g.id;
          if (I) {
            const D = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            S = ((a = (await v.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : a.id) ?? S;
          }
          if (I) {
            const D = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (D.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = _ ? _.split(/\s*,\s*/).filter((j) => O.includes(j)) : [], M = q.filter((j) => {
              var B;
              return (((B = D[j]) == null ? void 0 : B.itemId) ?? "").trim() === S;
            });
            if (M.length > 0) {
              const B = {
                "system.weapons.slotOrder": q.filter((R) => !M.includes(R)).join(",")
              };
              for (const R of M)
                B[`system.weapons.${R}.itemId`] = "", B[`system.weapons.${R}.name`] = "", B[`system.weapons.${R}.damage`] = "", B[`system.weapons.${R}.bonus`] = "";
              await v.update(B);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const v = this.actor;
          if (((r = g.parent) == null ? void 0 : r.id) !== v.id) {
            const I = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            await v.createEmbeddedDocuments("Item", [I]);
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "MikroChip") {
          const v = this.actor;
          ((o = g.parent) == null ? void 0 : o.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
        if (g && g.documentName === "Item" && (g.type === "Targy" || g.type === "Egyeb")) {
          const v = this.actor;
          ((u = g.parent) == null ? void 0 : u.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, c, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var m, d, l, p, y, a;
    s.preventDefault(), s.stopPropagation(), (m = s.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "Fegyver") return;
    if (((p = f.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(f.toObject(), { system: { ...f.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const c = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: f.name,
      [`system.weapons.${e}.damage`]: ((y = f.system) == null ? void 0 : y.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((a = f.system) == null ? void 0 : a.bonus) ?? ""
    }), await f.update({ "system.equipped": !0 });
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
    var l, p;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, a) => {
      const i = typeof y.sort == "number" ? y.sort : 0, r = typeof a.sort == "number" ? a.sort : 0;
      return i - r;
    }).map((y) => y.id), c = f.indexOf(t), m = f.indexOf(e);
    if (c === -1 || m === -1) return;
    f.splice(c, 1), f.splice(m, 0, t);
    const d = f.map((y, a) => ({
      _id: y,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(s) {
    var n, f, c;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
    var d, l, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((l = e.system) == null ? void 0 : l.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((p = e.system) == null ? void 0 : p.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var p, y, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((p = e.system) == null ? void 0 : p.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var n, f;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
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
    var c, m, d;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((d = (await this.actor.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : d.id) ?? f;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: f,
      [`system.abilities.${e}.name`]: n.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var n;
    this._parseAbilityDrop(s) && (s.preventDefault(), (n = s.currentTarget) == null || n.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var d, l, p, y;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((p = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : p.id) ?? f;
    }
    const c = this.actor.system.abilities ?? {}, m = Array.isArray((y = c[e]) == null ? void 0 : y.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    m.includes(f) || m.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, c, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var m, d, l, p, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "MikroChip") return;
    let c = f.id;
    ((p = f.parent) == null ? void 0 : p.id) !== this.actor.id && (c = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(n) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? f -= 6 : c === 2 && (f -= 3);
    const d = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, l = new Roll(d);
    await l.evaluate({ async: !0 });
    const { resultType: p, label: y } = Rt(l), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: y } },
      rollMode: a
    });
  }
  async _rollMorale() {
    var f;
    const s = Number(((f = this.actor.system.resources) == null ? void 0 : f.morale) ?? 0) || 0;
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
    var c;
    const s = Number(((c = this.actor.system.skills) == null ? void 0 : c.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
    await n.evaluate({ async: !0 });
    const f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: f
    });
  }
  async _rollWeapon(s) {
    var I, S;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, f = this.actor.items.filter((D) => D.type === "Fegyver");
    let c = null;
    t.itemId && (c = f.find((D) => D.id === t.itemId) ?? null);
    const m = c && c.name || t.name || `Fegyver (${s})`, d = Number(t.bonus || 0) || 0, l = ((I = c == null ? void 0 : c.system) == null ? void 0 : I.type) || "kinetic", p = (((S = c == null ? void 0 : c.system) == null ? void 0 : S.skillKey) ?? "").trim(), y = p && n[p] !== void 0 ? p : l === "explosive" ? "grenadeUse" : "firearms", a = Number(n[y] || 0) || 0, i = d + a, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, u = new Roll(o);
    await u.evaluate({ async: !0 });
    const { resultType: h, label: g } = Rt(u), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, l, p, y, a, i, r, o, u, h;
    const t = this.actor;
    if (!t) return;
    let n = ((l = (d = t.items).get) == null ? void 0 : l.call(d, s)) ?? ((y = (p = t.items.contents) == null ? void 0 : p.find) == null ? void 0 : y.call(p, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (r = ui.notifications) == null ? void 0 : r.warn) == null || h.call(r, ((u = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : u.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(f);
    await c.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
};
te(X, "PARTS", foundry.utils.mergeObject(
  U(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), te(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = U(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = U(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = U(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
te(X, "BODY_PART_BY_SKILL", {
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
let St = X;
function di(T) {
  return T ? T === "1" ? "1. szint" : T === "2" ? "2. szint" : T === "3" ? "3. szint" : T === "Alap" ? "Alap" : T : "Alap";
}
var Ss, Ts, Ds, _s;
const pe = class pe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, c, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    let f = { scrollState: {}, focus: null };
    if (t) {
      f.scrollState = this._saveScrollState(t);
      const i = document.activeElement, r = n.contains(i), o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      r && o && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const c = await super.render(s, e), m = this.element, d = this.form ?? this.element, l = f.scrollState, p = f.focus, y = typeof (l == null ? void 0 : l.formScrollTop) == "number" || typeof (l == null ? void 0 : l.windowScrollTop) == "number", a = () => {
      var i, r;
      if (this._applyScrollState(m, l), (p == null ? void 0 : p.name) != null || (p == null ? void 0 : p.id) != null) {
        const o = ((i = d.querySelector) == null ? void 0 : i.call(d, p.id ? `#${CSS.escape(p.id)}` : null)) ?? (p.name ? (r = d.querySelector) == null ? void 0 : r.call(d, `[name="${CSS.escape(p.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = p.selectionStart ?? 0, o.selectionEnd = p.selectionEnd ?? p.selectionStart ?? 0));
      }
      this._applyScrollState(m, l);
    };
    return (y || p) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), c;
  }
  async _prepareContext(s) {
    var je, Ke, Ee, ze, st, Ue, we, Tt, He, Be, Ft, Pe, Ge, Dt, _t, ot, Ot, ct, lt, ut, dt, mt, pt, ft, yt, gt, Ve, ht, bt, We;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((je = this.actor) == null ? void 0 : je.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ee = (Ke = e.system) == null ? void 0 : Ke.identity) == null ? void 0 : Ee.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((ze = e.system) == null ? void 0 : ze.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, c = (Ue = (st = t == null ? void 0 : t.statuses) == null ? void 0 : st.has) != null && Ue.call(st, "lookaround") ? 1 : 0, m = (Tt = (we = t == null ? void 0 : t.statuses) == null ? void 0 : we.has) != null && Tt.call(we, "halfcover") ? 3 : 0, d = (Be = (He = t == null ? void 0 : t.statuses) == null ? void 0 : He.has) != null && Be.call(He, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + c + m + d;
    const l = ((Ft = t == null ? void 0 : t.items) == null ? void 0 : Ft.contents) ?? [], p = ((Pe = t == null ? void 0 : t.system) == null ? void 0 : Pe.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (p.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((w) => y.includes(w)) : [], r = l.filter((w) => w.type === "Fegyver"), o = r.map((w) => ({ id: w.id, name: w.name, img: w.img })), u = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((w) => !h.includes(w)), v = [...h, ...g], I = v.filter((w) => {
      var x;
      const P = (((x = p[w]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && r.some((G) => G.id === P);
    });
    e.weaponSlots = I.map((w) => {
      const P = p[w] ?? {}, x = (P.itemId ?? "").trim(), G = o.find((be) => be.id === x), he = r.find((be) => be.id === x), se = (he == null ? void 0 : he.system) ?? {}, Te = se.size === "thrown", Ie = (typeof se.range == "string" ? (se.range || "").trim() : "") || "—";
      return {
        slotKey: w,
        itemId: x,
        displayName: (G == null ? void 0 : G.name) || P.name || u,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Te,
        rangeStr: Ie
      };
    });
    const S = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = r.map((w) => {
      var vt;
      const P = w.id;
      let x = null, G = {};
      for (const it of v)
        if ((((vt = p[it]) == null ? void 0 : vt.itemId) ?? "").trim() === P) {
          x = it, G = p[it] ?? {};
          break;
        }
      const he = !!x, se = (w == null ? void 0 : w.system) ?? {}, Te = typeof se.range == "string" ? (se.range || "").trim() : "", Ie = se.type ?? "", be = (S[Ie] ?? Ie) || "—", Ae = se.size ?? "", Je = (D[Ae] ?? Ae) || "", Ye = [be, Je].filter(Boolean).join(", ") || be || "—", Ct = Ie === "projectile" || Ae === "thrown", qt = se.quantity != null ? String(se.quantity).trim() : "1", Lt = String(se.bonus ?? G.bonus ?? "").trim() || "0", Nt = (se.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? u,
        img: (w == null ? void 0 : w.img) ?? "",
        bonus: Lt,
        damage: Nt,
        rangeStr: Te || "—",
        typeAndSize: Ye,
        quantity: qt,
        isProjectile: Ct,
        equipped: he,
        special: (se.special ?? "").trim() || "—"
      };
    });
    const _ = l.filter((w) => w.type === "Pancel");
    e.armorTable = _.map((w) => {
      var G;
      const P = (w == null ? void 0 : w.system) ?? {}, x = ((G = w.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: di((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const O = ((Dt = (Ge = t == null ? void 0 : t.system) == null ? void 0 : Ge.gear) == null ? void 0 : Dt.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], M = l.filter((w) => w.type === "MikroChip");
    e.microchipsTable = M.map((w) => {
      var Ie, be, Ae, Je;
      const P = w.id;
      let x = null;
      for (const Ye of q)
        if ((((Ie = O[Ye]) == null ? void 0 : Ie.itemId) ?? "").trim() === P) {
          x = Ye;
          break;
        }
      const G = ((be = w == null ? void 0 : w.system) == null ? void 0 : be.abilityType) ?? "", he = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", se = (((Ae = w == null ? void 0 : w.system) == null ? void 0 : Ae.description) ?? "").trim(), Te = se ? se.length > 60 ? se.slice(0, 57) + "…" : se : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        typeLabel: he,
        description: Te,
        kp: Number((Je = w == null ? void 0 : w.system) == null ? void 0 : Je.replaceCost) >= 0 ? Number(w.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const j = l.filter((w) => w.type === "Targy");
    e.itemsTable = j.map((w) => {
      const P = (w == null ? void 0 : w.system) ?? {}, x = (P.description ?? "").trim(), G = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        quantity: P.quantity != null ? String(P.quantity).trim() : "1",
        description: G
      };
    });
    const B = l.filter((w) => w.type === "Egyeb");
    e.egyebList = B.map((w) => {
      const x = (((w == null ? void 0 : w.system) ?? {}).description ?? "").trim(), G = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        description: G
      };
    });
    const R = (((_t = e.weaponsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((ot = e.armorTable) == null ? void 0 : ot.length) ?? 0) > 0 || (((Ot = e.microchipsTable) == null ? void 0 : Ot.length) ?? 0) > 0 || (((ct = e.itemsTable) == null ? void 0 : ct.length) ?? 0) > 0 || (((lt = e.egyebList) == null ? void 0 : lt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !R;
    const W = ((ut = t == null ? void 0 : t.system) == null ? void 0 : ut.abilities) ?? {}, Y = l.filter((w) => w.type === "Kepesseg" || w.type === "ability").map((w) => {
      var P, x, G;
      return {
        id: w.id,
        name: w.name,
        img: w.img,
        description: ((P = w.system) == null ? void 0 : P.description) ?? "",
        kp: Number(((x = w.system) == null ? void 0 : x.kp) ?? 0) || 0,
        kind: (((G = w.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), V = new Map(Y.map((w) => [w.id, w])), J = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = J, e.abilityHatterSlot = J;
    const k = (w) => {
      const P = W[w];
      return P ? Array.isArray(P == null ? void 0 : P.items) ? P.items : Array.isArray(P) ? P : [] : [];
    }, L = (w) => (w || []).map((P) => {
      const x = V.get(P);
      if (!x) return null;
      const G = x.kind === "species";
      return {
        id: x.id,
        name: x.name,
        img: x.img,
        description: x.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: G ? 0 : x.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = L(k("passive")), e.abilityActiveList = L(k("active"));
    const z = t == null ? void 0 : t.id, Q = !!((mt = (dt = game.combat) == null ? void 0 : dt.combatants) != null && mt.some(
      (w) => {
        var P;
        return (((P = w.actor) == null ? void 0 : P.id) ?? w.actorId) === z;
      }
    ));
    e.showHarcSection = Q;
    const ee = ((pt = e.system) == null ? void 0 : pt.resources) ?? {}, ie = (yt = (ft = e.system) == null ? void 0 : ft.combat) == null ? void 0 : yt.initiativeResult, Z = typeof ie == "number" ? ie : -1, re = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ue = (Ve = (gt = e.system) == null ? void 0 : gt.combat) == null ? void 0 : Ve.initiativeRanges, me = Array.isArray(ue) ? ue.map((w) => ({ min: Number(w.min) ?? 0, max: Number(w.max) ?? 0, kp: Math.min(10, Math.max(0, Number(w.kp) ?? 0)) })) : [], le = (me.length > 0 ? me : re).slice().sort((w, P) => w.min - P.min), Me = 3;
    let ge = me.length > 0 ? me : [];
    ge.length < Me && (ge = [...ge, ...Array(Me - ge.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ge.map((w, P) => ({
      ...w,
      isFirst: P === 0,
      isLast: P === ge.length - 1
    }));
    let Ne = 0;
    if (typeof Z == "number" && Z >= 0 && le.length > 0) {
      const w = le[0], P = le[le.length - 1];
      let x = null;
      Z <= w.max ? x = w : Z >= P.min ? x = P : x = le.find((G) => Z >= G.min && Z <= G.max), x && (Ne = x.kp);
    }
    const rt = le.length > 0 ? le[le.length - 1] : null, tt = Math.min(10, rt ? rt.kp : 6), ye = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, tt)).map((w, P) => {
      const x = P + 1, G = !!Number(ee[w]), he = x <= Ne;
      return { index: x, used: G, usable: he };
    }), oe = Math.ceil(ye.length / 2);
    return e.kpDotsRow1 = ye.slice(0, oe), e.kpDotsRow2 = ye.slice(oe), e.canEditInitiative = !!((ht = game.user) != null && ht.isGM), e.showInitiativeResult = typeof ie == "number", e.initiativeResult = e.showInitiativeResult ? ie : "", e.speedUnitForSelect = ((We = (bt = e.system) == null ? void 0 : bt.combat) == null ? void 0 : We.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var l, p, y;
    super._attachFrameListeners(s);
    const e = ((l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var o, u, h;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((h = (u = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var o, u, h;
      a.preventDefault();
      const i = (u = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : u.itemId;
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      (h = r == null ? void 0 : r.sheet) == null || h.render(!0);
    });
    const n = (a) => {
      var o, u;
      const i = (o = a == null ? void 0 : a.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      (u = r == null ? void 0 : r.sheet) == null || u.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var u, h, g, v;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".karakter-weapon-slot"), r = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var u;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, r = (((u = i == null ? void 0 : i.dataset) == null ? void 0 : u.slot) ?? "").trim();
      if (!r || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-DqFrbJnw.mjs");
      o(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var o, u, h, g, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let r = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !r && ((u = i == null ? void 0 : i.dataset) != null && u.slot) && (r = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!r || !this.actor) && await this._rollWeaponDamage(r, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-DqFrbJnw.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var u, h;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, r = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(r) || r < 1 || r > 10 || !this.actor) return;
      const o = !!Number((h = (u = this.actor.system) == null ? void 0 : u.resources) == null ? void 0 : h[`kpDot${r}`]);
      await this.actor.update({ [`system.resources.kpDot${r}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h, g;
      a.preventDefault();
      const i = a.currentTarget, r = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), o = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || r;
      if (!r || !this.actor) return;
      const { openRollSheetForSkill: u } = await import("./roll-sheet-DqFrbJnw.mjs");
      u(this.actor, r, o);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var r, o;
      a.preventDefault();
      const i = (o = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var o, u;
      a.preventDefault();
      const i = (((u = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(i) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, I, S, D, _;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, r = (S = (I = a.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : S.itemId;
      if (!i || !r || !this.actor) return;
      const o = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, h = (Array.isArray((_ = o[i]) == null ? void 0 : _.items) ? o[i].items.slice() : []).filter((O) => O !== r);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      var r, o;
      if (a.preventDefault(), !a.altKey) return;
      const i = (o = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      var g, v;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, r = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor, u = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      u && (h[`system.weapons.${u}.itemId`] = "", h[`system.weapons.${u}.name`] = "", h[`system.weapons.${u}.damage`] = "", h[`system.weapons.${u}.bonus`] = ""), Object.keys(h).length && await o.update(h), await o.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var r, o;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((o = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var h, g, v, I;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((g = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, u = ["slot1", "slot2", "slot3"].find((S) => {
        var D;
        return (((D = r[S]) == null ? void 0 : D.itemId) ?? "").trim() === i;
      });
      u && await this.actor.update({
        [`system.gear.microchips.${u}.itemId`]: "",
        [`system.gear.microchips.${u}.name`]: "",
        [`system.gear.microchips.${u}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var o, u;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((u = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      !r || r.type !== "Targy" && r.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (p = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : p.call(e, f)) == null || y.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", f, (a) => {
      var h, g, v;
      const i = a.currentTarget, r = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      if (!o) return;
      const u = o.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", u), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: u })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const c = this, m = (a) => {
      if (!a) return;
      const i = c._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && c.actor.update(i).catch((r) => console.warn("VoidNpcSheet save failed", r));
    }, d = (a) => {
      var i, r, o;
      return a && (((r = (i = c.element) == null ? void 0 : i.contains) == null ? void 0 : r.call(i, a)) || c.id && ((o = a.closest) == null ? void 0 : o.call(a, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (a) => {
      var h;
      const i = a.target;
      if (!i || !i.form) return;
      const r = i.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const o = i.form;
      if (!d(o)) return;
      const u = a.relatedTarget;
      u && (o.contains(u) || c.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(c.id)}`))) || m(o);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (a, i, r) => {
      var o;
      c.actor && ((o = a == null ? void 0 : a.parent) == null ? void 0 : o.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (a, i, r) => {
      var o;
      c.actor && ((o = a == null ? void 0 : a.parent) == null ? void 0 : o.id) === c.actor.id && c.render(!0);
    }, Hooks.on("updateItem", c._votvNpcItemUpdateHook), Hooks.on("deleteItem", c._votvNpcItemDeleteHook), c._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const c = this._getFormDataForUpdate(e);
      Object.keys(c).length > 0 && await this.actor.update(c).catch((m) => console.warn("VoidNpcSheet save on preClose failed", m));
    }
    return (f = super._preClose) == null ? void 0 : f.call(this, s);
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
    var S, D, _, O, q;
    const e = this.actor;
    if (!e) return;
    const n = (((S = e.system) == null ? void 0 : S.weapons) ?? {})[s] ?? {}, f = ((D = e.system) == null ? void 0 : D.skills) ?? {}, c = ((_ = e.items) == null ? void 0 : _.filter((M) => M.type === "Fegyver")) ?? [];
    let m = null;
    n.itemId && (m = c.find((M) => M.id === n.itemId) ?? null);
    const d = m && m.name || n.name || "Fegyver", l = Number(n.bonus || 0) || 0, p = ((O = m == null ? void 0 : m.system) == null ? void 0 : O.type) || "kinetic", y = (((q = m == null ? void 0 : m.system) == null ? void 0 : q.skillKey) ?? "").trim(), a = y && f[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", i = Number(f[a] || 0) || 0, r = l + i, u = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, h = new Roll(u);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Rt(h), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, l, p, y, a, i, r, o, u, h;
    const t = this.actor;
    if (!t) return;
    const n = ((l = (d = t.items).get) == null ? void 0 : l.call(d, s)) ?? ((y = (p = t.items.contents) == null ? void 0 : p.find) == null ? void 0 : y.call(p, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (r = ui.notifications) == null ? void 0 : r.warn) == null || h.call(r, ((u = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : u.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(f);
    await c.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
  async _onDropItem(s, e) {
    var p, y, a, i, r, o, u, h, g, v, I, S, D, _, O, q, M, j, B;
    if (!this.actor) return (p = super._onDropItem) == null ? void 0 : p.call(this, s, e);
    const n = ((R) => {
      var Y;
      if (!R) return null;
      const W = R.uuid ?? R.documentUuid ?? ((Y = R.data) == null ? void 0 : Y.uuid) ?? (typeof R == "string" ? R : null);
      if (W) return W;
      if (typeof R == "object") {
        for (const V of Object.values(R))
          if (typeof V == "string" && V.includes(".") && V.startsWith("Item.")) return V;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    if (f.type === "Pancel") {
      (r = (i = ui.notifications) == null ? void 0 : i.info) == null || r.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const c = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const R = (((o = f.system) == null ? void 0 : o.kind) ?? "passive").toString();
      if (R === "module") {
        (h = (u = ui.notifications) == null ? void 0 : u.warn) == null || h.call(u, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let W = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== c.id) {
        const k = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        W = ((v = (await c.createEmbeddedDocuments("Item", [k]))[0]) == null ? void 0 : v.id) ?? W;
      }
      const Y = ((I = c.system) == null ? void 0 : I.abilities) ?? {}, V = R === "active" ? "active" : "passive", J = Array.isArray((S = Y[V]) == null ? void 0 : S.items) ? Y[V].items.slice() : Array.isArray(Y[V]) ? Y[V].slice() : [];
      J.includes(W) || J.push(W), await c.update({ [`system.abilities.${V}.items`]: J }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((D = f.parent) == null ? void 0 : D.id) === c.id) return;
    const m = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const l = (_ = (await c.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && l) {
      const R = ((O = c.system) == null ? void 0 : O.weapons) ?? {}, W = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Y = (R.slotOrder ?? "").trim(), V = Y ? Y.split(/\s*,\s*/).filter((L) => W.includes(L)) : [];
      let J = W.find((L) => {
        var z;
        return !(((z = R[L]) == null ? void 0 : z.itemId) ?? "").trim();
      });
      J || (J = W.find((L) => !V.includes(L)) ?? "slot1");
      const k = V.includes(J) ? V : [...V, J].filter((L) => W.includes(L));
      await c.update({
        "system.weapons.slotOrder": k.join(","),
        [`system.weapons.${J}.itemId`]: l,
        [`system.weapons.${J}.name`]: f.name ?? "",
        [`system.weapons.${J}.damage`]: ((q = f.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${J}.bonus`]: ((M = f.system) == null ? void 0 : M.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && l) {
      const R = ((B = (j = c.system) == null ? void 0 : j.gear) == null ? void 0 : B.microchips) ?? {}, Y = ["slot1", "slot2", "slot3"].find((V) => {
        var J;
        return !(((J = R[V]) == null ? void 0 : J.itemId) ?? "").trim();
      });
      Y && await c.update({
        [`system.gear.microchips.${Y}.itemId`]: l,
        [`system.gear.microchips.${Y}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var p, y, a, i, r, o;
    const e = (y = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: l,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var d, l, p, y, a, i;
    const e = (l = (d = this.actor) == null ? void 0 : d.items) == null ? void 0 : l.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const r = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (r === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", r === "active") {
        const o = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        o > 0 && (f = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  _getFormDataForUpdate(s) {
    var t;
    const e = {};
    for (const n of s.elements) {
      if (!n.name || n.disabled || n.type === "radio" && !n.checked) continue;
      let f;
      if (n.type === "checkbox")
        f = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        f = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const c = (n.value ?? "").trim();
        if (c === "") continue;
        f = Number(c) || 0;
      } else
        f = n.value ?? "";
      f !== void 0 && foundry.utils.setProperty(e, n.name, f);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const n = e.name;
      (n === void 0 || typeof n == "string" && n.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
te(pe, "PARTS", foundry.utils.mergeObject(
  U(pe, pe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), te(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(pe, pe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = U(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = U(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = U(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = pe;
function mi(T) {
  return T ? T === "1" ? "1. szint" : T === "2" ? "2. szint" : T === "3" ? "3. szint" : T === "Alap" ? "Alap" : T : "Alap";
}
var Os, Cs, qs, Ls;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, c, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    var o;
    const t = (o = game.votv) == null ? void 0 : o._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const f = this.element, c = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = c.contains(u), g = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && g && (m.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const l = this.element, p = this.form ?? this.element, y = m.scrollState, a = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", r = () => {
      var u, h;
      if (this._applyScrollState(l, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((u = p.querySelector) == null ? void 0 : u.call(p, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = p.querySelector) == null ? void 0 : h.call(p, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(l, y);
    };
    return (i || a) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), d;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (l) => {
      var p;
      return ((p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, l)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${l}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), c = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const m = Number(f == null ? void 0 : f.value) || 0, d = Number(c == null ? void 0 : c.value) || 0;
    n.textContent = String(m + d);
  }
  async _prepareContext(s) {
    var _, O, q, M, j, B, R, W, Y, V, J;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((_ = e.system) == null ? void 0 : _.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, c = "— Nincs fegyver —", m = (((O = this.actor.items) == null ? void 0 : O.contents) ?? []).filter((k) => k.type === "Fegyver");
    e.weaponsTable = m.map((k) => {
      const L = (k == null ? void 0 : k.system) ?? {}, z = L.type ?? "", Q = (n[z] ?? z) || "—", ee = L.size ?? "", ie = (f[ee] ?? ee) || "", Z = [Q, ie].filter(Boolean).join(", ") || Q || "—", re = z === "projectile" || ee === "thrown", ue = L.quantity != null ? String(L.quantity).trim() : "1", me = (typeof L.range == "string" ? (L.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? c,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: String(L.bonus ?? "").trim() || "0",
        damage: L.damage ?? "",
        rangeStr: me || "—",
        typeLabel: Q,
        typeAndSize: Z,
        quantity: ue,
        quantityDisplay: re ? ue : "—",
        isProjectile: re,
        equipped: !1,
        special: (L.special ?? "").trim() || "—"
      };
    });
    const d = (((q = this.actor.items) == null ? void 0 : q.contents) ?? []).filter((k) => k.type === "Pancel");
    e.armorTable = d.map((k) => {
      var Q;
      const L = (k == null ? void 0 : k.system) ?? {}, z = !!((Q = k.system) != null && Q.equipped);
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: mi((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: z
      };
    });
    const l = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((k) => k.type === "MikroChip");
    e.microchipsTable = l.map((k) => {
      var re, ue, me;
      const L = ((re = k == null ? void 0 : k.system) == null ? void 0 : re.abilityType) ?? "", z = L === "active" ? "Aktív" : L === "passive" ? "Passzív" : L || "—", Q = L === "active", ee = Number((ue = k == null ? void 0 : k.system) == null ? void 0 : ue.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0, ie = (((me = k == null ? void 0 : k.system) == null ? void 0 : me.description) ?? "").trim(), Z = ie ? ie.length > 60 ? ie.slice(0, 57) + "…" : ie : "—";
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: z,
        description: Z,
        kp: ee,
        isActive: Q,
        slotKey: "",
        equipped: !1
      };
    });
    const p = (((j = this.actor.items) == null ? void 0 : j.contents) ?? []).filter((k) => k.type === "Targy");
    e.itemsTable = p.map((k) => {
      const L = (k == null ? void 0 : k.system) ?? {}, z = (L.description ?? "").trim(), Q = z ? z.length > 60 ? z.slice(0, 57) + "…" : z : "—", ee = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: ee,
        description: Q
      };
    });
    const y = (((B = this.actor.items) == null ? void 0 : B.contents) ?? []).filter((k) => k.type === "Jarmuegyseg").sort((k, L) => {
      const z = typeof k.sort == "number" ? k.sort : 0, Q = typeof L.sort == "number" ? L.sort : 0;
      return z - Q;
    }), a = [];
    let i = 0, r = 0;
    for (const k of y) {
      const L = (k == null ? void 0 : k.system) ?? {}, z = L.health ?? {}, Q = Number(L.level ?? 0) || 0, ee = Number(z.max ?? 0) || 0, ie = Number(z.value ?? 0) || 0;
      let Z;
      if (ee <= 0)
        Z = void 0;
      else if (ie <= 0)
        Z = 0;
      else {
        const ne = ie / ee;
        ne > 2 / 3 ? Z = 3 : ne > 1 / 3 ? Z = 2 : Z = 1;
      }
      const re = (L.hit ?? "").toString().trim(), ue = (L.speed ?? "").toString().trim().replace(",", "."), me = Number(ue);
      Number.isFinite(me) && (i += me);
      const et = (L.range ?? "").toString().trim().replace(",", "."), le = Number(et);
      Number.isFinite(le) && (r += le);
      const Me = (L.damage ?? "").toString().trim(), ge = L.abilities ?? {}, Ne = Array.isArray(ge.items) ? ge.items : [], tt = (await Promise.all(
        Ne.map(async (ne) => {
          var ye;
          if (!ne) return null;
          try {
            const oe = await fromUuid(ne);
            if (oe && (oe.type === "Kepesseg" || oe.type === "ability")) return oe;
          } catch {
            const oe = (ye = game.items) == null ? void 0 : ye.get(ne);
            if (oe && (oe.type === "Kepesseg" || oe.type === "ability")) return oe;
          }
          return null;
        })
      )).map((ne, ye) => ({ doc: ne, ref: Ne[ye] })).filter((ne) => !!ne.doc && !!ne.ref).map(({ doc: ne, ref: ye }) => {
        var Ee, ze;
        const oe = (((Ee = ne.system) == null ? void 0 : Ee.kind) ?? "passive").toString(), je = Number(((ze = ne.system) == null ? void 0 : ze.kp) ?? 0) || 0, Ke = oe === "species";
        return {
          id: ne.id,
          ref: ye,
          name: ne.name,
          img: ne.img,
          kind: oe,
          kpDisplay: Ke ? 0 : je
        };
      });
      a.push({
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        level: Q,
        hpMax: ee,
        hpValue: ie,
        hpStatus: Z,
        hit: re,
        damage: Me,
        abilities: tt
      });
    }
    e.unitsTable = a;
    const o = y.length;
    let u = "Kicsi", h = 0, g = 0;
    o >= 11 ? (u = "Nagy", h = -4, g = -6) : o >= 6 ? (u = "Közepes", h = -2, g = -3) : (u = "Kicsi", h = 0, g = 0), e.sizeForSelect = u, e.sizeSpeedPenalty = h, e.sizeDefensePenalty = g;
    const v = i + h, I = r;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: v },
        vehicle: { toolsRange: I },
        identity: { size: u }
      },
      { inplace: !1 }
    );
    const S = (((R = e.weaponsTable) == null ? void 0 : R.length) ?? 0) > 0 || (((W = e.armorTable) == null ? void 0 : W.length) ?? 0) > 0 || (((Y = e.microchipsTable) == null ? void 0 : Y.length) ?? 0) > 0 || (((V = e.itemsTable) == null ? void 0 : V.length) ?? 0) > 0;
    e.showEquipmentDropZone = !S;
    const D = (((J = this.actor.items) == null ? void 0 : J.contents) ?? []).filter((k) => k.type === "Egyeb");
    return e.egyebList = D.map((k) => {
      const z = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), Q = z ? z.length > 80 ? z.slice(0, 77) + "…" : z : "";
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: Q
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var m;
    super._attachFrameListeners(s);
    const e = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (d) => {
      var y, a, i;
      d.preventDefault(), d.stopPropagation();
      const l = ((i = (a = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (r) => {
          r && this.actor.update({ img: r });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (d) => {
      var y, a, i;
      d.preventDefault();
      const l = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!l) return;
      const p = this.actor.items.get(l);
      (i = p == null ? void 0 : p.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (d) => {
      var y, a;
      if (d.preventDefault(), !d.altKey) return;
      const l = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      !l || !this.actor.items.get(l) || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".jarmu-item-quantity-input", async (d) => {
      var a;
      const l = d.currentTarget, p = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (l.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (d) => {
      var y, a;
      const l = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!l) return;
      const p = this.actor.items.get(l);
      !p || p.type !== "Pancel" || await p.update({ "system.equipped": d.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (d) => {
      var p, y, a, i;
      d.preventDefault();
      const l = (y = (p = d.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      l && ((i = (a = this.actor.items.get(l)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (d) => {
      var p, y;
      if (d.preventDefault(), !d.altKey) return;
      const l = (y = (p = d.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      l && await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-item-chat", async (d) => {
      var p, y;
      d.preventDefault();
      const l = (y = (p = d.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      l && await this._postItemToChat(l);
    }), t.on("click", ".jarmu-unit-damage-button", async (d) => {
      var y;
      d.preventDefault(), d.stopPropagation();
      const l = d.currentTarget, p = (((y = l == null ? void 0 : l.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      p && await this._rollUnitDamage(p);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (d) => {
      var a, i;
      const l = d.currentTarget, p = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!p) return;
      n._draggingUnitId = p;
      const y = (i = d.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", p), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(l, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (d) => {
      var a, i, r, o;
      const l = (i = (a = d.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : i.itemId, p = n._draggingUnitId;
      if (!p || !l || p === l) return;
      d.preventDefault();
      const y = (r = d.originalEvent) == null ? void 0 : r.dataTransfer;
      y && (y.dropEffect = "move"), (o = d.currentTarget) == null || o.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (d) => {
      var l;
      (l = d.currentTarget) == null || l.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (d) => {
      var h, g, v, I;
      d.preventDefault(), (h = d.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
      const l = (v = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let p = n._draggingUnitId;
      const y = (I = d.originalEvent) == null ? void 0 : I.dataTransfer;
      if (!p && y && (p = y.getData("text/plain")), n._draggingUnitId = null, !p || !l || p === l) return;
      const i = this.actor.items.contents.filter((S) => S.type === "Jarmuegyseg").sort((S, D) => {
        const _ = typeof S.sort == "number" ? S.sort : 0, O = typeof D.sort == "number" ? D.sort : 0;
        return _ - O;
      }).map((S) => S.id), r = i.indexOf(p), o = i.indexOf(l);
      if (r === -1 || o === -1) return;
      i.splice(r, 1), i.splice(o, 0, p);
      const u = i.map((S, D) => ({
        _id: S,
        sort: (D + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", u);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (d) => {
      var a, i, r, o, u, h, g, v, I, S;
      d.preventDefault();
      const l = (o = (r = (i = (a = d.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : i.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : r.dataset) == null ? void 0 : o.abilityRef, p = (v = (g = (h = (u = d.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (l)
        try {
          y = await fromUuid(l);
        } catch {
          y = null;
        }
      !y && p && (y = ((I = game.items) == null ? void 0 : I.get(p)) ?? null), (S = y == null ? void 0 : y.sheet) == null || S.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (d) => {
      var i, r, o, u;
      d.preventDefault();
      const l = (r = (i = d.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : r.call(i, ".jarmu-unit-ability-pill"), p = (o = l == null ? void 0 : l.dataset) == null ? void 0 : o.abilityRef, y = (u = l == null ? void 0 : l.dataset) == null ? void 0 : u.abilityId, a = p || y;
      a && await this._postUnitAbilityToChat(a);
    });
    const f = (d) => {
      if (!d) return;
      const l = this._getFormDataForUpdate(d);
      Object.keys(l).length !== 0 && this.actor.update(l).catch((p) => console.warn("VoidJarmuSheet save failed", p));
    }, c = (d) => {
      var l, p, y;
      return d && (((p = (l = this.element) == null ? void 0 : l.contains) == null ? void 0 : p.call(l, d)) || this.id && ((y = d.closest) == null ? void 0 : y.call(d, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (d) => {
      var i;
      const l = d.target;
      if (!l || !l.form) return;
      const p = l.tagName;
      if (p !== "INPUT" && p !== "TEXTAREA" && p !== "SELECT") return;
      const y = l.form;
      if (!c(y)) return;
      const a = d.relatedTarget;
      a && (y.contains(a) || this.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (d) => {
      var o, u, h;
      const l = d.currentTarget, p = (o = l == null ? void 0 : l.dataset) == null ? void 0 : o.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (l.value ?? "").trim(), i = a === "" ? 0 : Number(a), r = (u = l.closest) == null ? void 0 : u.call(l, ".jarmu-unit-row");
      if (r) {
        const g = (h = r.querySelector) == null ? void 0 : h.call(r, ".jarmu-unit-hp-max"), v = (g == null ? void 0 : g.textContent) ?? "", I = Number((v ?? "").trim()) || 0;
        let S;
        if (I <= 0)
          S = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          S = 0;
        else {
          const D = i / I;
          D > 2 / 3 ? S = 3 : D > 1 / 3 ? S = 2 : S = 1;
        }
        S === void 0 ? r.removeAttribute("data-hp-status") : r.dataset.hpStatus = String(S);
      }
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (d) => {
      var i;
      const l = d.currentTarget, p = (i = l == null ? void 0 : l.dataset) == null ? void 0 : i.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (l.value ?? "").trim();
      await y.update({ "system.hit": a });
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
    var d, l, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((l = e.system) == null ? void 0 : l.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((p = e.system) == null ? void 0 : p.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var m, d, l, p, y, a, i, r, o;
    const e = this.actor;
    if (!e) return;
    const t = ((d = (m = e.items).get) == null ? void 0 : d.call(m, s)) ?? ((p = (l = e.items.contents) == null ? void 0 : l.find) == null ? void 0 : p.call(l, (u) => u.id === s));
    if (!t || t.type !== "Jarmuegyseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (o = (a = ui.notifications) == null ? void 0 : a.warn) == null || o.call(
        a,
        ((r = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : r.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
      );
      return;
    }
    const f = new Roll(n);
    await f.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
  async _postUnitAbilityToChat(s) {
    var p, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((p = game.items) == null ? void 0 : p.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: l,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var d, l;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((d = e == null ? void 0 : e.data) == null ? void 0 : d.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const p of Object.values(e))
        if (typeof p == "string" && p.includes(".") && p.startsWith("Item.")) {
          t = p;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"].includes(n.type)) return super._onDropItem(s, e);
    if (((l = n.parent) == null ? void 0 : l.id) === f.id) return;
    const m = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [m]);
  }
};
te(fe, "PARTS", foundry.utils.mergeObject(
  U(fe, fe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), te(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(fe, fe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let jt = fe;
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
const De = class De extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, r, o;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
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
te(De, "PARTS", foundry.utils.mergeObject(U(De, De, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), te(De, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(De, De, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = U(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = De;
var As;
const _e = class _e extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, r, o;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
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
te(_e, "PARTS", foundry.utils.mergeObject(U(_e, _e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), te(_e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(_e, _e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((As = U(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let zt = _e;
var Fs;
const Oe = class Oe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, r, o;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
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
te(Oe, "PARTS", foundry.utils.mergeObject(U(Oe, Oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), te(Oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Oe, Oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Fs = U(Oe, Oe, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let Ut = Oe;
var Es;
const Ce = class Ce extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, r, o;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
    }, e._votvInput = (c) => {
      var l;
      const m = c.target;
      if ((m == null ? void 0 : m.name) === "name") return;
      const d = (m == null ? void 0 : m.form) ?? ((l = m == null ? void 0 : m.closest) == null ? void 0 : l.call(m, "form"));
      f(d) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(d), 300));
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
te(Ce, "PARTS", foundry.utils.mergeObject(U(Ce, Ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), te(Ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ce, Ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Es = U(Ce, Ce, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !0 })
}));
let Ht = Ce;
var Ps;
const qe = class qe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, r, o;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
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
te(qe, "PARTS", foundry.utils.mergeObject(U(qe, qe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), te(qe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(qe, qe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ps = U(qe, qe, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = qe;
var $s;
const Le = class Le extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, r, o;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
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
te(Le, "PARTS", foundry.utils.mergeObject(U(Le, Le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), te(Le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Le, Le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = U(Le, Le, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Gt = Le;
var xs, Rs;
const ke = class ke extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var d, l, p, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (l = this.document) == null ? void 0 : l.name,
      "id=",
      (p = this.document) == null ? void 0 : p.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, r, o;
      try {
        const u = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && u.includes(this.element) || this.id && ((r = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", a);
        let g = null;
        try {
          g = TextEditor.getDragEventData(a);
        } catch (D) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", D);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", g), !g || g.type !== "Item") return;
        const I = ((D) => {
          var O;
          if (!D) return null;
          const _ = D.uuid ?? D.documentUuid ?? ((O = D.data) == null ? void 0 : O.uuid) ?? (typeof D == "string" ? D : null);
          if (_) return _;
          if (typeof D == "object") {
            for (const q of Object.values(D))
              if (typeof q == "string" && q.includes(".") && q.startsWith("Item.")) return q;
          }
          return null;
        })(g);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", I), !I) return;
        const S = await fromUuid(I);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", S == null ? void 0 : S.id, S == null ? void 0 : S.type), !S || S.documentName !== "Item") return;
        if (S.type === "Kepesseg" || S.type === "ability") {
          const D = S.uuid ?? S.id, _ = this.document.system ?? {}, O = Array.isArray((o = _.abilities) == null ? void 0 : o.items) ? _.abilities.items.slice() : [];
          O.push(D), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (u) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", u);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var u, h, g, v, I, S;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, r = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let o = null;
      if (i)
        try {
          o = await fromUuid(i);
        } catch {
          o = null;
        }
      !o && r && (o = ((I = game.items) == null ? void 0 : I.get(r)) ?? null), (S = o == null ? void 0 : o.sheet) == null || S.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var u, h, g, v;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, r = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, o = i || r;
      o && await this._postAbilityToChat(o);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, I;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const r = this.document.system ?? {}, o = Array.isArray((I = r.abilities) == null ? void 0 : I.items) ? r.abilities.items.slice() : [], u = o.indexOf(i), h = u >= 0 ? [...o.slice(0, u), ...o.slice(u + 1)] : o;
      await this.document.update({ "system.abilities.items": h });
    });
    const f = (y = t == null ? void 0 : t.querySelector) == null ? void 0 : y.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (a) => {
      a.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const c = (a) => {
      if (!a) return;
      const i = e._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && e.document.update(i).catch((r) => console.warn("VoidJarmuEgysegSheet save failed", r));
    }, m = (a) => {
      var i, r, o;
      return a && (((r = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : r.call(i, a)) || e.id && ((o = a.closest) == null ? void 0 : o.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var r, o, u;
      const i = ((r = a.target) == null ? void 0 : r.form) ?? ((u = (o = a.target) == null ? void 0 : o.closest) == null ? void 0 : u.call(o, "form"));
      m(i) && c(i);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, f = Array.isArray(n.items) ? n.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext refs=", f);
    const m = (await Promise.all(
      f.map(async (d) => {
        var l;
        if (!d) return null;
        try {
          const p = await fromUuid(d);
          if (p && (p.type === "Kepesseg" || p.type === "ability")) return p;
        } catch {
          const p = (l = game.items) == null ? void 0 : l.get(d);
          if (p && (p.type === "Kepesseg" || p.type === "ability")) return p;
        }
        return null;
      })
    )).map((d, l) => ({ doc: d, ref: f[l] })).filter((d) => !!d.doc && !!d.ref).map(({ doc: d, ref: l }) => {
      var i, r;
      const p = (((i = d.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((r = d.system) == null ? void 0 : r.kp) ?? 0) || 0, a = p === "species";
      return {
        id: d.id,
        ref: l,
        name: d.name,
        img: d.img,
        kind: p,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", m), e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var p, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((p = game.items) == null ? void 0 : p.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: l,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /**
   * ItemSheetV2 drop logika: a Foundry már feloldja a dokumentumot, itt csak kezeljük a képesség referenciát.
   */
  async _onDropDocument(s, e) {
    var t, n, f;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const c = e.uuid ?? e.id, m = this.document.system ?? {}, d = Array.isArray((n = m.abilities) == null ? void 0 : n.items) ? m.abilities.items.slice() : [];
      return d.push(c), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", d), await this.document.update({ "system.abilities.items": d }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
te(ke, "PARTS", foundry.utils.mergeObject(U(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), te(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ke, ke, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((xs = U(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Rs = U(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Vt = ke;
const Ms = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function js(T) {
  return T === "Apró" ? 0.5 : T === "Nagy" ? 2 : T === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, f, c, m;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Wt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ti, CONFIG.Item.dataModels.MikroChip = si, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ni, CONFIG.Item.dataModels.Egyeb = ri, CONFIG.Item.dataModels.Jarmuegyseg = ci, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (f = CONFIG.Actor).typeLabels ?? (f.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (c = CONFIG.Combat).initiative ?? (c.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
  const T = "systems/vacuum-of-the-void/assets/status";
  CONFIG.statusEffects = [
    { id: "dead", name: "VOTV.StatusDead", img: `${T}/dead_icon.svg` },
    { id: "unconscious", name: "VOTV.StatusUnconscious", img: `${T}/unconcious_icon.svg` },
    { id: "sleeping", name: "VOTV.StatusSleeping", img: `${T}/sleeping_icon.svg` },
    { id: "stunned", name: "VOTV.StatusStunned", img: `${T}/stunned_icon.svg` },
    { id: "fallen", name: "VOTV.StatusFallen", img: `${T}/fallen_icon.svg` },
    { id: "grappled", name: "VOTV.StatusGrappled", img: `${T}/grappled_icon.svg` },
    { id: "immobilized", name: "VOTV.StatusImmobilized", img: `${T}/immobilized_icon.svg` },
    { id: "blinded", name: "VOTV.StatusBlinded", img: `${T}/blinded_icon.svg` },
    { id: "deafened", name: "VOTV.StatusDeafened", img: `${T}/deafened_icon.svg` },
    { id: "frightened", name: "VOTV.StatusFrightened", img: `${T}/frightened_icon.svg` },
    { id: "burning", name: "VOTV.StatusBurning", img: `${T}/burning_icon.svg` },
    { id: "bleeding", name: "VOTV.StatusBleeding", img: `${T}/bleeding_icon.svg` },
    { id: "diseased", name: "VOTV.StatusDiseased", img: `${T}/diseased_icon.svg` },
    { id: "poisoned", name: "VOTV.StatusPoisoned", img: `${T}/poisoned_icon.svg` },
    { id: "invisible", name: "VOTV.StatusInvisible", img: `${T}/invisible_icon.svg` },
    { id: "drowning", name: "VOTV.StatusDrowning", img: `${T}/drowning_icon.svg` },
    { id: "intoxicated", name: "VOTV.StatusIntoxicated", img: `${T}/intoxicated_icon.svg` },
    { id: "hidden", name: "VOTV.StatusHidden", img: `${T}/hidden_icon.svg` },
    { id: "ready", name: "VOTV.StatusReady", img: `${T}/ready_icon.svg` },
    { id: "lookaround", name: "VOTV.StatusLookaround", img: `${T}/lookaraound_icon.svg` },
    { id: "dodge", name: "VOTV.StatusDodge", img: `${T}/dodge_icon.svg` },
    { id: "halfcover", name: "VOTV.StatusHalfcover", img: `${T}/halfcover_icon.svg` },
    { id: "threequarteredcover", name: "VOTV.StatusThreequarteredcover", img: `${T}/threequarteredcover_icon.svg` },
    { id: "fullcover", name: "VOTV.StatusFullcover", img: `${T}/fullcover_icon.svg` }
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", St, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", jt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", zt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ut, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Bt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Vt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), Hooks.on("updateActor", (d, l, p, y) => {
    if ((d == null ? void 0 : d.type) !== "Karakter" || !(d != null && d.id)) return;
    const a = d.id;
    setTimeout(() => {
      var u, h, g, v;
      const i = (u = game.actors) == null ? void 0 : u.get(a);
      if (!i || i.type !== "Karakter") return;
      const r = St.getTotalSpeedRaw(i), o = (h = i.effects) == null ? void 0 : h.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (r <= 0 && !o) {
        const I = ((v = (g = CONFIG.statusEffects) == null ? void 0 : g.find((S) => S.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: I,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, _;
          const S = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const O of S)
            ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === a && typeof O.draw == "function" && O.draw();
        }).catch((S) => console.warn("Vacuum of the Void | Immobilized effect create failed:", S));
      } else r > 0 && o && o.delete().then(() => {
        var S, D;
        const I = ((S = canvas.tokens) == null ? void 0 : S.placeables) ?? [];
        for (const _ of I)
          ((D = _ == null ? void 0 : _.document) == null ? void 0 : D.actorId) === a && typeof _.draw == "function" && _.draw();
      }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", I));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (d, l, p, y) => {
    var S, D, _, O, q, M, j, B, R, W, Y, V, J;
    const a = d == null ? void 0 : d.id;
    if (!a) return;
    if ((d.type === "Karakter" || d.type === "Npc") && ((S = l == null ? void 0 : l.system) != null && S.combat) && "initiativeResult" in l.system.combat) {
      const k = Number((_ = (D = d.system) == null ? void 0 : D.combat) == null ? void 0 : _.initiativeResult), L = Number.isFinite(k) ? k : 0, z = game.combat;
      if (z) {
        const Q = ((O = z.combatants) == null ? void 0 : O.contents) ?? Array.from(z.combatants ?? []);
        for (const ee of Q)
          if (((q = ee.actor) == null ? void 0 : q.id) === a || ee.actorId === a) {
            z.updateEmbeddedDocuments("Combatant", [{ _id: ee.id, initiative: L }]).catch(() => {
            });
            break;
          }
      }
    }
    if (d.type === "Npc" && ((M = l == null ? void 0 : l.system) != null && M.identity) && "size" in l.system.identity) {
      const k = js((B = (j = d.system) == null ? void 0 : j.identity) == null ? void 0 : B.size);
      d.update({
        "prototypeToken.width": k,
        "prototypeToken.height": k
      }).catch((L) => console.warn("Vacuum of the Void | NPC token size update failed for", d.name, L));
    }
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), o = [], u = (R = game.actors) == null ? void 0 : R.get(a);
    u != null && u.apps && o.push(...Array.from(u.apps));
    const h = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of h) {
      if (((W = k.document) == null ? void 0 : W.id) !== a || ((Y = k.document) == null ? void 0 : Y.documentName) !== "Actor") continue;
      const L = (V = k.constructor) == null ? void 0 : V.name;
      L !== "VoidKarakterSheet" && L !== "VoidJarmuSheet" || o.includes(k) || o.push(k);
    }
    if (r && o.some((k) => {
      const L = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return L && L.contains(i);
    })) return;
    const v = (J = game.votv) == null ? void 0 : J._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const k of o)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== I && k.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (d, l, p, y) => {
    var o, u, h;
    const a = d == null ? void 0 : d.parent;
    if (!a || a.documentName !== "Actor" || a.type !== "Karakter" || d.type !== "Fegyver") return;
    const i = ((o = a.system) == null ? void 0 : o.weapons) ?? {}, r = {};
    for (const [g, v] of Object.entries(i)) {
      if (!g.startsWith("slot")) continue;
      const I = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !I || I !== d.id || (r[`system.weapons.${g}.name`] = d.name ?? "", r[`system.weapons.${g}.damage`] = ((u = d.system) == null ? void 0 : u.damage) ?? "", r[`system.weapons.${g}.bonus`] = ((h = d.system) == null ? void 0 : h.bonus) ?? "");
    }
    Object.keys(r).length && a.update(r);
  });
});
Hooks.on("ready", () => {
  var T, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, I, S, D, _, O, q, M, j, B, R, W, Y, V, J, k, L, z, Q, ee, ie;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), c = (S = (I = f == null ? void 0 : f.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : S.weapon;
    if (!c) return;
    const m = c.actorId ?? ((D = f == null ? void 0 : f.speaker) == null ? void 0 : D.actor) ?? "";
    if (!m) return;
    e.preventDefault(), e.stopPropagation();
    let d = ((_ = game.actors) == null ? void 0 : _.get(c.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(m));
    if (d || (d = ((M = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : M.flatMap((re) => {
      var ue;
      return ((ue = re.tokens) == null ? void 0 : ue.contents) ?? [];
    }).map((re) => re.actor).find((re) => re && (re.id === m || re.id === c.actorId))) ?? null), !d) return;
    const l = c.itemId ? ((B = (j = d.items) == null ? void 0 : j.get) == null ? void 0 : B.call(j, c.itemId)) ?? ((Y = (W = (R = d.items) == null ? void 0 : R.contents) == null ? void 0 : W.find) == null ? void 0 : Y.call(W, (Z) => Z.id === c.itemId)) : null;
    let p = (c.damageFormula ?? "").trim();
    if (p || (p = (((V = l == null ? void 0 : l.system) == null ? void 0 : V.damage) ?? "").trim()), !p && c.slotKey && (p = (((((J = d.system) == null ? void 0 : J.weapons) ?? {})[c.slotKey] ?? {}).damage ?? "").trim()), !p) {
      (Q = (k = ui.notifications) == null ? void 0 : k.warn) == null || Q.call(k, ((z = (L = game.i18n) == null ? void 0 : L.localize) == null ? void 0 : z.call(L, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(p);
    await y.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = c.targetName || "", r = c.hitLocationName || "", o = ((l == null ? void 0 : l.name) ?? (c.slotKey ? ((ie = (((ee = d.system) == null ? void 0 : ee.weapons) ?? {})[c.slotKey]) == null ? void 0 : ie.name) ?? "" : "")) || "Fegyver";
    let u = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    r && (u += ` (${r})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: d }),
      flavor: u,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var c, m, d, l, p, y;
      if (!((m = (c = e.target) == null ? void 0 : c.closest) != null && m.call(c, "#actors"))) return;
      const t = (l = (d = e.target) == null ? void 0 : d.closest) == null ? void 0 : l.call(d, "[data-document-id]"), n = (p = t == null ? void 0 : t.getAttribute) == null ? void 0 : p.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, c;
    const e = ((t = game.actors) == null ? void 0 : t.filter((m) => m.type === "Karakter")) ?? [];
    for (const m of e) {
      const d = St.getTotalSpeedRaw(m), l = (n = m.effects) == null ? void 0 : n.find((p) => p.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (d <= 0 && !l) {
        const p = ((c = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : c.img) ?? "";
        await m.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: p,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: m.uuid
        }]).catch(() => {
        });
      } else d > 0 && l && await l.delete().catch(() => {
      });
    }
  })(), (T = game.user) != null && T.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const n = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(n != null && n.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const f = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Ms },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, c = await n.create(f);
      c && console.log("Vacuum of the Void | Default scene created:", c.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var c, m, d, l, p, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((c = game.actors) == null ? void 0 : c.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, r = ((m = i == null ? void 0 : i.bar1) == null ? void 0 : m.attribute) ?? "", o = ((d = i == null ? void 0 : i.bar2) == null ? void 0 : d.attribute) ?? "";
        (r || o) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((l = a.tokens) == null ? void 0 : l.filter((r) => {
        var o;
        return ((o = r.actor) == null ? void 0 : o.type) === "Karakter";
      })) ?? [];
      for (const r of i)
        try {
          await r.update(e);
        } catch (o) {
          console.warn("Vacuum of the Void | Token update failed for", r.name, o);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, f = ((p = game.actors) == null ? void 0 : p.filter((a) => a.type === "Npc")) ?? [];
    for (const a of f)
      try {
        await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((y = a.tokens) == null ? void 0 : y.filter((r) => {
        var o;
        return ((o = r.actor) == null ? void 0 : o.type) === "Npc";
      })) ?? [];
      for (const r of i)
        try {
          await r.update(n);
        } catch (o) {
          console.warn("Vacuum of the Void | NPC token update failed for", r.name, o);
        }
    }
  })();
});
Hooks.on("preCreateToken", (T, s, e) => {
  var c, m, d, l;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, n = t ?? T.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (m = game.actors) == null ? void 0 : m.get(n) : null;
  if (f) {
    if (f.type === "Karakter") {
      T.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (f.type === "Jarmu") {
      T.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (f.type === "Npc") {
      const p = js((l = (d = f.system) == null ? void 0 : d.identity) == null ? void 0 : l.size);
      T.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: p,
        height: p
      });
    }
  }
});
Hooks.on("preCreateCombatant", (T, s, e) => {
  const t = T.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && T.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (T, s, e) => {
  const t = T.actor;
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
function Ks(T) {
  const s = T == null ? void 0 : T.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(fi).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (T, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ks(T);
});
function zs() {
  var s, e, t;
  const T = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], c = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const m of c)
      !m || T.has(m.id) || (T.add(m.id), typeof m.render == "function" && m.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || T.has(n.id) || (T.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(zs, 100);
});
Hooks.on("updateCombat", (T, s, e) => {
  (s == null ? void 0 : s.round) != null && Ks(T), setTimeout(zs, 0);
});
Hooks.on("renderSidebarTab", (T, s, e) => {
  if ((T == null ? void 0 : T.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((f) => {
    f.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (T, s, e) => {
  var f;
  const t = T == null ? void 0 : T.object, n = ((f = t == null ? void 0 : t.document) == null ? void 0 : f.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const c = s[0] ?? s;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (T, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || T.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Ms,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (T, s, e) => {
  var l, p, y, a;
  const t = ((l = T.flags) == null ? void 0 : l["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, c = t.weaponAttack, m = t.weapon;
  if (!n && !f && !c) return;
  const d = (p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, ".dice-roll");
  if (d) {
    if (n && d.classList.add(`votv-${n}`), f) {
      const i = d.querySelector(".votv-crit-label");
      if (i)
        i.textContent = f;
      else {
        const r = d.querySelector(".dice-total"), o = (r == null ? void 0 : r.parentElement) ?? d, u = document.createElement("div");
        u.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, u.textContent = f, o.appendChild(u);
      }
    }
    if (c && m && (m.actorId || (y = T.speaker) != null && y.actor)) {
      const i = d.querySelector(".dice-total"), r = (i == null ? void 0 : i.parentElement) ?? d;
      if (!d.querySelector(".votv-weapon-outcome")) {
        const u = document.createElement("div");
        u.className = "votv-weapon-outcome";
        const h = !!m.isHit, g = m.targetName || "Célpont";
        u.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`, r.appendChild(u);
      }
      if (m.isHit && !d.querySelector(".votv-weapon-damage-chat")) {
        const h = document.createElement("button");
        h.type = "button", h.className = "votv-weapon-damage-chat";
        const g = m.hitLocationRoll, v = m.hitLocationName;
        h.textContent = g != null && v ? `Sebzés (Találati Hely ${g} - ${v})` : "Sebzés", h.dataset.actorId = String(m.actorId ?? ((a = T.speaker) == null ? void 0 : a.actor) ?? ""), h.dataset.itemId = String(m.itemId ?? ""), h.dataset.slotKey = String(m.slotKey ?? ""), h.dataset.targetName = String(m.targetName ?? ""), h.dataset.hitLocationName = String(m.hitLocationName ?? ""), h.dataset.messageId = String(T.id ?? ""), r.appendChild(h);
      }
    }
  }
});
export {
  St as V,
  Rt as c
};
//# sourceMappingURL=vacuum-of-the-void-CwSr_LPc.mjs.map
