var di = Object.defineProperty;
var mi = Object.getPrototypeOf;
var pi = Reflect.get;
var fi = (S, s, e) => s in S ? di(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var X = (S, s, e) => fi(S, typeof s != "symbol" ? s + "" : s, e);
var j = (S, s, e) => pi(mi(S), e, s);
const { HTMLField: yi, NumberField: A, SchemaField: H, StringField: q, BooleanField: me, ArrayField: qt } = foundry.data.fields;
class Lt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new H({
        name: new q({ required: !1, blank: !0, initial: "" }),
        player: new q({ required: !1, blank: !0, initial: "" }),
        level: new A({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new q({ required: !1, blank: !0, initial: "" }),
        assignment: new q({ required: !1, blank: !0, initial: "" }),
        subAssignment: new q({ required: !1, blank: !0, initial: "" }),
        background: new q({ required: !1, blank: !0, initial: "" }),
        languages: new q({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new q({ required: !1, blank: !0, initial: "" })
      }),
      resources: new H({
        health: new H({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new H({
          head: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
          }),
          torso: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
          }),
          arms: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
          }),
          legs: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
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
        speedUnit: new q({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new A({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new qt(
          new H({
            min: new A({ required: !1, integer: !0, initial: 0 }),
            max: new A({ required: !1, integer: !0, initial: 0 }),
            kp: new A({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        ),
        /** Általános veszélyeztetettség szint (Bázis lap használja, de bármely actor tárolhatja). */
        threat: new A({ required: !1, integer: !1, initial: 0 }),
        /** Veszélyeztetettség kézi módosító (Bázis lap: readonly automata érték + írható bónusz). */
        threatBonus: new A({ required: !1, integer: !1, initial: 0 })
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
        quickThinking1: new q({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new q({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new q({ required: !1, blank: !0, initial: "" }),
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
        slotOrder: new q({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new H({
          name: new q({ required: !1, blank: !0, initial: "" }),
          bonus: new q({ required: !1, blank: !0, initial: "" }),
          damage: new q({ required: !1, blank: !0, initial: "" }),
          itemId: new q({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new H({
        microchips: new H({
          slot1: new H({
            itemId: new q({ required: !1, blank: !0, initial: "" }),
            name: new q({ required: !1, blank: !0, initial: "" }),
            active: new me({ required: !1, initial: !1 })
          }),
          slot2: new H({
            itemId: new q({ required: !1, blank: !0, initial: "" }),
            name: new q({ required: !1, blank: !0, initial: "" }),
            active: new me({ required: !1, initial: !1 })
          }),
          slot3: new H({
            itemId: new q({ required: !1, blank: !0, initial: "" }),
            name: new q({ required: !1, blank: !0, initial: "" }),
            active: new me({ required: !1, initial: !1 })
          })
        }),
        equipment: new q({ required: !1, blank: !0, initial: "" }),
        armor: new qt(
          new H({
            name: new q({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new q({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new q({ required: !1, blank: !0, initial: "" }),
            level: new q({ required: !1, blank: !0, initial: "" }),
            other: new q({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new qt(
          new H({
            name: new q({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new q({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new H({
        faji: new H({
          itemId: new q({ required: !1, blank: !0, initial: "" }),
          name: new q({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new H({
          itemId: new q({ required: !1, blank: !0, initial: "" }),
          name: new q({ required: !1, blank: !0, initial: "" })
        }),
        passive: new H({
          items: new qt(
            new q({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new qt(
            new q({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new yi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Bt, SchemaField: gi } = foundry.data.fields;
class hi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new gi({
        body: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: bi, StringField: Ts, NumberField: vi } = foundry.data.fields;
class ki extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new bi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new Ts({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new Ts({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new vi({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: wi, StringField: Ds, NumberField: Ii } = foundry.data.fields;
class Si extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new wi({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new Ds({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new Ds({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
        storage: new Ii({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: Ti, NumberField: Gi, StringField: Ze } = foundry.data.fields;
class _s extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Ti({ required: !1, initial: !1 }),
      type: new Ze({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ze({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ze({ required: !1, blank: !0, initial: "" }),
      damage: new Ze({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ze({ required: !1, blank: !0, initial: "" }),
      special: new Ze({ required: !1, blank: !0, initial: "" }),
      quantity: new Ze({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ze({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Di, StringField: Mt } = foundry.data.fields;
class _i extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Di({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Mt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Mt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Mt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Mt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ht, StringField: Os } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Os({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Os({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Ht({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Ht({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Ht({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ci, StringField: Cs } = foundry.data.fields;
class qs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Cs({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new Cs({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Ci({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ns } = foundry.data.fields;
class qi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ns({ required: !1, blank: !0, initial: "" }),
      quantity: new Ns({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Ni } = foundry.data.fields;
class Li extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ni({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Gt, StringField: pt, SchemaField: Ls, ArrayField: Ai } = foundry.data.fields;
class Fi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Gt({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new Ls({
        max: new Gt({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new Gt({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ls({
        items: new Ai(
          new pt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new pt({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new pt({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new pt({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new pt({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new pt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Pi, StringField: Rt, SchemaField: Ei, ArrayField: $i } = foundry.data.fields;
class xi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Pi({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ei({
        items: new $i(
          new Rt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Raktár (szabad szöveg, opcionális; a Bázis raktárkapacitás összegéhez). */
      storage: new Rt({ required: !1, blank: !0, initial: "" }),
      /** Veszély (opcionális, pl. +15%). */
      veszely: new Rt({ required: !1, blank: !0, initial: "" }),
      /** Cépont szám (szabad szöveg, opcionális; a Bázis táblázatban). */
      hit: new Rt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { SchemaField: jt, StringField: ke, NumberField: ge, ArrayField: Wt } = foundry.data.fields;
class zi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vallalkozas: new jt({
        /** Vállalkozás fajtája (Szolgáltatások, Gyártás, Milícia). */
        kind: new ke({ required: !1, blank: !0, initial: "" }),
        /** Vállalkozás szintje (legalább 1). */
        level: new ge({ required: !1, integer: !0, min: 1, initial: 1 }),
        /** Alkalmazottak aktuális száma. */
        employeesCurrent: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Alkalmazottak maximuma. */
        employeesMax: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Szint által adott bónuszok (szabad szöveg). */
        levelBonuses: new ke({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás típusa (Szolgáltatások fajtánál). */
        servicesType: new ke({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás bevétel / idő: numerikus rész (cr). */
        servicesIncomeAmount: new ge({ required: !1, integer: !1, initial: 0 }),
        /** Szolgáltatás bevétel / idő: időegység szövege (pl. nap, hét, hónap). */
        servicesIncomePeriod: new ke({ required: !1, blank: !0, initial: "" }),
        /** Marketing típusa (Szolgáltatások fajtánál). */
        marketingType: new ke({ required: !1, blank: !0, initial: "" }),
        /** Marketing ára / hét (cr). */
        marketingCostPerWeek: new ge({ required: !1, integer: !1, initial: 0 }),
        /** Marketing profit (%). */
        marketingProfitPercent: new ge({ required: !1, integer: !1, initial: 0 }),
        /** Alkalmazottak táblázat: Típus, Szint, Szám, Bónusz. */
        employees: new Wt(
          new jt({
            type: new ke({ required: !1, blank: !0, initial: "" }),
            level: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
            count: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
            bonus: new ke({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        /** Gyártási specializáció (Gyártás fajtánál). */
        manufacturingSpecialization: new ke({ required: !1, blank: !0, initial: "" }),
        /** Gyártható dolgok listája (többsoros szabad szöveg). */
        manufacturingProducts: new ke({ required: !1, blank: !0, initial: "" }),
        /** Gyártósor táblázat: Gyártott Termék, Szám, Gyártási Idő. */
        productionLines: new Wt(
          new jt({
            product: new ke({ required: !1, blank: !0, initial: "" }),
            count: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
            time: new ke({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        /** Milícia: Erő Pont. */
        militiaPower: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Milícia: Morál Pont. */
        militiaMorale: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Milícia küldetések táblázat: Helyszín, Nehézség, Rizikó, Zsákmány. */
        militiaMissions: new Wt(
          new jt({
            location: new ke({ required: !1, blank: !0, initial: "" }),
            /** d100 eredeti dobás, amiből a nehézség számolódik (base * level). */
            baseRoll: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
            difficulty: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
            risk: new ge({ required: !1, integer: !0, min: 0, initial: 0 }),
            loot: new ke({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      })
    };
  }
}
function Vt(S) {
  if (!S || !Array.isArray(S.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const p = (a, i = 1) => {
    if (!Array.isArray(a)) return;
    let c = i;
    for (const l of a) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        p(l.terms, c);
        continue;
      }
      if (typeof l.operator == "string") {
        c = l.operator === "-" ? -1 : 1;
        continue;
      }
      const m = typeof l.faces == "number" ? l.faces : void 0, h = Array.isArray(l.results) ? l.results : null;
      if (!m || !h || m === 8 || m !== 6) continue;
      const g = !n && c >= 0 && (l.number === 3 || l.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const w = Number(v.result ?? v);
        Number.isFinite(w) && g.push(w);
      }
    }
  };
  p(S.terms, 1);
  const d = s.filter((a) => a === 6).length, f = s.filter((a) => a === 1).length, u = e.filter((a) => a === 6).length, r = t.filter((a) => a === 6).length, o = d + u, y = f + r;
  return o > 0 && o === y ? { resultType: null, label: null } : o >= 3 ? { resultType: "critical", label: "Brutális Siker" } : o === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ps, Es, $s, xs;
const Q = class Q extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, p, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
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
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, d = this.form ?? this.element;
    let f = { scrollState: {}, focus: null };
    if (p) {
      f.scrollState = this._saveScrollState(p);
      const m = document.activeElement, h = d.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (f.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const r = this.element, o = this.form ?? this.element, y = f.scrollState, a = f.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(r, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((m = o.querySelector) == null ? void 0 : m.call(o, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(r, y);
    };
    return (i || a) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const p = Math.floor(n / 3), d = Math.floor(2 * n / 3);
    return t <= p ? 1 : t <= d ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var f;
        return d.type === "Pancel" && ((f = d.system) == null ? void 0 : f.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const f = String(((p = d.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(f);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var f;
        return d.type === "Pancel" && ((f = d.system) == null ? void 0 : f.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const f = String(((p = d.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), u = Number(f);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var f;
        return d.type === "Pancel" && ((f = d.system) == null ? void 0 : f.equipped) === !0;
      }
    );
    let t = 0;
    for (const d of e) {
      const f = String(((p = d.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(f);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var o, y, a, i, c, l, m, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (o = e.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : y.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, p = Q._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const d = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let f;
    p === 1 ? f = -6 : p === 2 ? f = -3 : f = d, f += Q._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((m = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : m.speed) ?? 0) || 0, r = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return u + r + (Number.isFinite(f) ? f : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : Q.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, a, i, c, l, m, h, g, v, w, k, I;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((m = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : m.resources) ?? {}, p = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, d = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, f = Q._healthStatusFromRatio(d, p), u = Number(((I = (k = (w = this.actor) == null ? void 0 : w.system) == null ? void 0 : k.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let r;
    f === 0 ? r = 0 : f === 1 ? r = -6 : f === 2 ? r = -3 : r = u;
    const o = this._getTotalArmorSpeedPenalty();
    r += o, t.textContent = String(r);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var r, o, y, a, i, c, l, m, h, g, v, w, k;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (y = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : y.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, p = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, d = (g = (h = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, f = (k = (w = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : w.has) != null && k.call(w, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + p + d + f;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), d = t('input[name="system.combat.defense"]'), f = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(d == null ? void 0 : d.value) || 0, r = Number(f == null ? void 0 : f.value) || 0, o = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(u + r + o);
  }
  _writeTotalSpeed(s = null) {
    var l, m, h, g, v, w, k, I;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), d = t('input[name="system.combat.speed"]'), f = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (m = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : m.has) != null && h.call(m, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, r = ((k = (w = u.hitLocations) == null ? void 0 : w.legs) == null ? void 0 : k.value) ?? 0, o = ((I = u.currentHealth) == null ? void 0 : I.legs) ?? 0;
    if (Q._healthStatusFromRatio(o, r) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(d == null ? void 0 : d.value) || 0, i = Number(f == null ? void 0 : f.value) || 0, c = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(a + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var d, f, u, r;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((d = this.actor.system) == null ? void 0 : d.resources) ?? {}, n = ((u = (f = t.hitLocations) == null ? void 0 : f[e]) == null ? void 0 : u.value) ?? 0, p = ((r = t.currentHealth) == null ? void 0 : r[e]) ?? 0;
    return Q._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var f, u, r, o;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((f = s == null ? void 0 : s.system) == null ? void 0 : f.resources) ?? {}, p = ((r = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : r.value) ?? 0, d = ((o = n.currentHealth) == null ? void 0 : o[t]) ?? 0;
    return Q._healthStatusFromRatio(d, p);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et, T, z, M, G, Ie, ne, Le, Ce, Se, Re, tt, st, Et, $t, xt, zt, _t, dt, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs, bs, vs, ks;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, d = n.currentHealth ?? {}, f = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of f) {
      const L = ((bt = p[b]) == null ? void 0 : bt.value) ?? 0, N = d[b] ?? 0;
      e.computedHealthStatus[b] = Q._healthStatusFromRatio(N, L);
    }
    const u = (Number(d.head) || 0) === 0, o = ["torso", "arms", "legs"].filter((b) => (Number(d[b]) || 0) === 0).length;
    e.showDeathSkull = u || o >= 2;
    const y = e.computedHealthStatus.legs ?? 3, a = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = a;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const l = Number(((It = (wt = this.actor.system) == null ? void 0 : wt.combat) == null ? void 0 : It.givenProtection) ?? 0) || 0, m = (Tt = (Qe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Qe.has) != null && Tt.call(Qe, "lookaround") ? 1 : 0, h = (T = (et = (Dt = this.actor) == null ? void 0 : Dt.statuses) == null ? void 0 : et.has) != null && T.call(et, "halfcover") ? 3 : 0, g = (G = (M = (z = this.actor) == null ? void 0 : z.statuses) == null ? void 0 : M.has) != null && G.call(M, "threequarteredcover") ? 6 : 0, v = l + this._getTotalArmorProtectionBonus() + m + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const w = ((Ie = e.system) == null ? void 0 : Ie.combat) ?? {};
    e.totalDefense = (Number(w.defense) || 0) + (Number(w.defenseBonus) || 0) + (Number(w.givenProtection) || 0);
    const k = Number(w.givenSpeed);
    let I = (Number(w.speed) || 0) + (Number(w.speedBonus) || 0) + (Number.isFinite(k) ? k : 0);
    y === 0 && (I = 0), (Ce = (Le = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Le.has) != null && Ce.call(Le, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Re = (Se = e.system) == null ? void 0 : Se.combat) == null ? void 0 : Re.givenProtection } },
      { inplace: !1 }
    ), I = 0), e.totalSpeed = I;
    const _ = Q.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(_)) {
      const N = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], P = (O.slotOrder ?? "").trim(), K = P ? P.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], U = (tt = this.actor.system.gear) == null ? void 0 : tt.microchips, E = U && typeof U == "object" && !Array.isArray(U) ? U : {}, W = (((st = E.slot1) == null ? void 0 : st.itemId) ?? "").trim(), Z = (((Et = E.slot2) == null ? void 0 : Et.itemId) ?? "").trim(), J = ((($t = E.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const N = typeof b.sort == "number" ? b.sort : 0, F = typeof L.sort == "number" ? L.sort : 0;
      return N - F;
    }).map((b) => {
      var je, nt, at, Ve, Je, Ot;
      const L = b.type === "Fegyver", N = b.type === "MikroChip";
      let F = 0, B = "", ue = null;
      for (let mt = 0; mt < K.length; mt++) {
        const Ct = K[mt];
        if ((((je = O[Ct]) == null ? void 0 : je.itemId) ?? "") === b.id) {
          F = mt + 1, B = ((nt = O[Ct]) == null ? void 0 : nt.bonus) ?? "", ue = Ct;
          break;
        }
      }
      let re = null;
      N && (W === b.id ? re = "slot1" : Z === b.id ? re = "slot2" : J === b.id && (re = "slot3"));
      const it = L && ((at = b.system) != null && at.damage) ? b.system.damage : "", Te = L && typeof ((Ve = b.system) == null ? void 0 : Ve.range) == "string" ? (b.system.range || "").trim() : "", qe = ue ? Number((Je = O[ue]) == null ? void 0 : Je.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: F,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: re,
        isEquipped: !!(ue || re),
        damage: it,
        rangeStr: Te,
        slotBonusNum: qe,
        quantity: Number(((Ot = b.system) == null ? void 0 : Ot.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const R = (((xt = this.actor.items) == null ? void 0 : xt.contents) ?? []).filter((b) => b.type === "Fegyver"), te = R.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", Oe = K.filter((b) => {
      const N = ((O[b] ?? {}).itemId ?? "").trim();
      return N ? !!R.find((B) => B.id === N) : !1;
    });
    e.weaponSlots = Oe.map((b, L) => {
      const N = O[b] ?? {}, F = (N.itemId ?? "").trim(), B = te.find((qe) => qe.id === F), ue = R.find((qe) => qe.id === F), re = (ue == null ? void 0 : ue.system) ?? {}, it = re.size === "thrown", Te = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: F,
        slotNum: L + 1,
        displayName: (B == null ? void 0 : B.name) || N.name || de,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: it,
        rangeStr: Te
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, x = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = R.map((b) => {
      var ws, Is, Ss;
      const L = b.id;
      let N = null, F = {};
      for (const Ut of K)
        if ((((ws = O[Ut]) == null ? void 0 : ws.itemId) ?? "").trim() === L) {
          N = Ut, F = O[Ut] ?? {};
          break;
        }
      const B = !!N, ue = ((Is = b.system) == null ? void 0 : Is.equipped) !== void 0 && ((Ss = b.system) == null ? void 0 : Ss.equipped) !== null ? !!b.system.equipped : B, re = (b == null ? void 0 : b.system) ?? {}, it = typeof re.range == "string" ? (re.range || "").trim() : "", Te = re.type ?? "", qe = (D[Te] ?? Te) || "—", je = re.size ?? "", nt = (x[je] ?? je) || "", at = [qe, nt].filter(Boolean).join(", ") || qe || "—", Ve = Te === "projectile" || je === "thrown", Je = re.quantity, Ot = Je != null ? String(Je).trim() : "1", mt = String(F.bonus ?? "").trim(), Ct = String(re.bonus ?? "").trim(), li = mt || Ct || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? de,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: li,
        damage: F.damage ?? re.damage ?? "",
        rangeStr: it || "—",
        typeLabel: qe,
        typeAndSize: at,
        quantity: Ot,
        quantityDisplay: Ve ? Ot : "—",
        isProjectile: Ve,
        equipped: ue,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const V = (((zt = this.actor.items) == null ? void 0 : zt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = V.map((b) => {
      var F, B;
      const L = (b == null ? void 0 : b.system) ?? {}, N = ((F = b.system) == null ? void 0 : F.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: Mi((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const se = (((_t = this.actor.items) == null ? void 0 : _t.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = se.map((b) => {
      const L = (b == null ? void 0 : b.system) ?? {}, N = (L.description ?? "").trim(), F = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", B = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: B,
        description: F
      };
    });
    const le = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = le.map((b) => {
      const N = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), F = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: F
      };
    });
    const pe = (((os = this.actor.items) == null ? void 0 : os.contents) ?? []).filter((b) => b.type === "MikroChip"), ae = pe.map((b) => ({ id: b.id, name: b.name, img: b.img })), we = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (b) => {
      var N, F, B;
      const L = [];
      return b !== 1 && L.push((((N = E.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && L.push((((F = E.slot2) == null ? void 0 : F.itemId) ?? "").trim()), b !== 3 && L.push((((B = E.slot3) == null ? void 0 : B.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((b) => !fe(1).includes(b.id)), e.microchipItemsSlot2 = ae.filter((b) => !fe(2).includes(b.id)), e.microchipItemsSlot3 = ae.filter((b) => !fe(3).includes(b.id)), e.microchipSlots = ce.map((b) => {
      const L = E[b] ?? {}, N = (L.itemId ?? "").trim(), F = pe.find((B) => B.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (F == null ? void 0 : F.name) || L.name || we,
        img: (F == null ? void 0 : F.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, N = E[L] ?? {}, F = (N.itemId ?? "").trim(), B = ae.find((ue) => ue.id === F);
      e[`microchip${b}ItemId`] = F, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || N.name || we, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((b) => {
      var je, nt, at, Ve;
      const L = b.id;
      let N = null;
      for (const Je of ce)
        if ((((je = E[Je]) == null ? void 0 : je.itemId) ?? "").trim() === L) {
          N = Je;
          break;
        }
      const F = !!N, B = ((nt = b == null ? void 0 : b.system) == null ? void 0 : nt.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", it = Number((at = b == null ? void 0 : b.system) == null ? void 0 : at.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Te = (((Ve = b == null ? void 0 : b.system) == null ? void 0 : Ve.description) ?? "").trim(), qe = Te ? Te.length > 60 ? Te.slice(0, 57) + "…" : Te : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ue,
        description: qe,
        kp: it,
        isActive: re,
        slotKey: N ?? "",
        equipped: F
      };
    });
    const Ke = (((cs = e.weaponsTable) == null ? void 0 : cs.length) ?? 0) > 0 || (((ls = e.armorTable) == null ? void 0 : ls.length) ?? 0) > 0 || (((us = e.microchipsTable) == null ? void 0 : us.length) ?? 0) > 0 || (((ds = e.itemsTable) == null ? void 0 : ds.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ke;
    const Ue = this.actor.system.abilities ?? {}, ze = (((ms = this.actor.items) == null ? void 0 : ms.contents) ?? []).map((b) => {
      var L, N, F;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((F = b.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), Be = new Map(ze.map((b) => [b.id, b])), ot = "— Nincs képesség —", He = (b) => {
      const L = Ue[b] ?? {}, N = (L.itemId ?? "").trim(), F = N ? Be.get(N) : null, B = (F == null ? void 0 : F.description) ?? "", ue = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: N,
        displayName: (F == null ? void 0 : F.name) || L.name || ot,
        img: (F == null ? void 0 : F.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = He("faji"), e.abilityHatterSlot = He("hatter");
    const Ye = (b) => {
      const L = Ue[b];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Ge = (b) => b.map((L) => {
      const N = Be.get(L);
      return N ? {
        id: N.id,
        name: N.name,
        img: N.img,
        description: N.description,
        kp: N.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ge(Ye("passive")), e.abilityActiveList = Ge(Ye("active"));
    const ct = ((ps = e.system) == null ? void 0 : ps.resources) ?? {}, ee = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ye = (ys = (fs = e.system) == null ? void 0 : fs.combat) == null ? void 0 : ys.initiativeResult, ie = typeof ye == "number" ? ye : -1, lt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Me = (hs = (gs = e.system) == null ? void 0 : gs.combat) == null ? void 0 : hs.initiativeRanges, Ne = Array.isArray(Me) ? Me.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], We = (Ne.length > 0 ? Ne : lt).slice().sort((b, L) => b.min - L.min), Xe = Ne.map((b) => b.min), At = Xe.length ? Math.min(...Xe) : 0, Ft = Xe.length ? Math.max(...Xe) : 0;
    e.initiativeRanges = Ne.map((b) => ({ ...b, isFirst: b.min === At, isLast: b.min === Ft }));
    let ft = 0;
    if (typeof ie == "number" && ie >= 0 && We.length > 0) {
      const b = We[0], L = We[We.length - 1];
      let N = null;
      ie <= b.max ? N = b : ie >= L.min ? N = L : N = We.find((F) => ie >= F.min && ie <= F.max), N && (ft = N.kp);
    }
    e.kpDots = ee.map((b, L) => {
      const N = L + 1, F = !!Number(ct[b]), B = N <= ft;
      return { index: N, used: F, usable: B };
    });
    const Pt = !!((vs = (bs = game.combat) == null ? void 0 : bs.combatants) != null && vs.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Pt, e.canEditInitiative = !!((ks = game.user) != null && ks.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var y, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-xsZHzqj9.mjs");
      m(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var m, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        l = (((((h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = c.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-xsZHzqj9.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, l = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const m = `system.resources.kpDot${l}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${l}`]);
      await this.actor.update({ [m]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var m;
      const c = i ? i.currentTarget : (m = e.querySelector) == null ? void 0 : m.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const p = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p });
    const d = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', d), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var m, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = ((g = (h = (m = foundry.applications) == null ? void 0 : m.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var g;
      i.preventDefault();
      const c = i.currentTarget, l = c.dataset.skill, m = ((g = c.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-xsZHzqj9.mjs");
      h(this.actor, l, m);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, k, I, _, O, C, P;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), m = l == null ? void 0 : l.dataset.slot;
      if (!m) return;
      const g = (((k = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[m]) == null ? void 0 : k.itemId) ?? "").trim();
      if (!g) return;
      const v = ((_ = (I = this.actor.items).get) == null ? void 0 : _.call(I, g)) ?? ((C = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (K) => K.id === g));
      (P = v == null ? void 0 : v.sheet) == null || P.render(!0);
    });
    const f = (i, c) => {
      var h;
      const l = i.dataset.itemId;
      if (!l) return;
      const m = this.actor.items.get(l);
      if (m) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (h = m.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), f(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), f(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m) return;
      let h = Number(c.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await m.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const m = this.actor, h = m.items.get(l);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = m.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = w ? w.split(/\s*,\s*/).filter((O) => k.includes(O)) : [], _ = I.find((O) => {
          var C;
          return (((C = v[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = I.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], k = w.find((C) => {
        var P;
        return (((P = h[C]) == null ? void 0 : P.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (k) return;
        let C = w.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const P = new Set(w);
        if (!C) {
          const K = v.find((U) => !P.has(U));
          if (!K) return;
          C = K, w.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${C}.damage`]: ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = m == null ? void 0 : m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (k) {
        const C = w.filter((P) => P !== k);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${k}.itemId`]: "",
          [`system.weapons.${k}.name`]: "",
          [`system.weapons.${k}.damage`]: "",
          [`system.weapons.${k}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), m = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !m && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const c = i.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), m = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), h = m == null ? void 0 : m.dataset.slot;
      if (!h) return;
      const g = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", w = (c.dataset.itemImg ?? "").trim(), k = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      k && (k.textContent = v);
      let I = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      w ? (I || (I = document.createElement("img"), I.className = "karakter-microchip-slot-thumb", I.alt = "", m == null || m.insertBefore(I, k)), I.src = w, I.style.display = "") : I && I.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${h}.itemId`]: g,
        [`system.gear.microchips.${h}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (O[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, w;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const m = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((k) => {
        var I;
        return (((I = m[k]) == null ? void 0 : I.itemId) ?? "").trim() === c;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const l = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const l = c.dataset.slot;
      c.addEventListener("dragover", (m) => this._onMicrochipSlotDragOver(m, l)), c.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (m) => this._onMicrochipSlotDrop(m, l));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (m) => this._onAbilitySingleDragOver(m, l)), c.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (m) => {
        var h;
        (h = m.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (m) => this._onAbilityAreaDragOver(m, l)), c.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (m) => {
        var h;
        (h = m.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.slot;
      c && await this.actor.update({
        [`system.abilities.${c}.itemId`]: "",
        [`system.abilities.${c}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((v = m[c]) == null ? void 0 : v.items) ? m[c].items.slice() : []).filter((w) => w !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const m = this.actor.items.get(l);
      (h = m == null ? void 0 : m.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const m = this.actor.items.get(l);
      m && (m.type === "Kepesseg" || m.type === "ability" ? await this._postAbilityToChat(l) : (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(l));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m || m.type !== "Fegyver") return;
      const h = (c.value ?? "").trim();
      await m.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      !m || m.type !== "Pancel" || (await m.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], k = w.find((C) => {
        var P;
        return (((P = h[C]) == null ? void 0 : P.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (k) return;
        let C = w.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const P = new Set(w);
        if (!C) {
          const K = v.find((U) => !P.has(U));
          if (!K) return;
          C = K, w.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": w.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: m.name ?? "",
          [`system.weapons.${C}.damage`]: ((_ = m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (k) {
        const C = w.filter((P) => P !== k);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${k}.itemId`]: "",
          [`system.weapons.${k}.name`]: "",
          [`system.weapons.${k}.damage`]: "",
          [`system.weapons.${k}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const m = this.actor, h = m.items.get(l), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = m.system.weapons ?? {}, w = (v.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = w ? w.split(/\s*,\s*/).filter((O) => k.includes(O)) : [], _ = I.find((O) => {
          var C;
          return (((C = v[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = I.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m || m.type !== "Targy") return;
      const h = (c.value ?? "").trim();
      await m.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const u = this, r = (i) => {
      var m, h, g, v;
      if (!i) return;
      const c = u._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((h = (m = c.system) == null ? void 0 : m.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(c).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((w) => console.warn("VoidKarakterSheet save failed", w));
    }, o = (i) => {
      var c, l, m;
      return i && (((l = (c = u.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, i)) || u.id && ((m = i.closest) == null ? void 0 : m.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var g;
      const c = i.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const m = c.form;
      if (!o(m)) return;
      const h = i.relatedTarget;
      h && (m.contains(h) || u.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), r(m));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var f, u, r;
    const e = {};
    for (const o of s.elements) {
      if (!o.name || o.disabled || o.type === "radio" && !o.checked || o.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      o.type === "checkbox" ? y = o.checked : o.type === "number" ? y = o.value === "" ? 0 : Number(o.value) : y = o.value ?? "", foundry.utils.setProperty(e, o.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((f = this.actor.system) == null ? void 0 : f.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    for (const o of d) {
      const y = ((r = n[o]) == null ? void 0 : r.value) ?? 0, a = p[o] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${o}`, Q._healthStatusFromRatio(a, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, d, f, u, r, o, y, a, i, c, l, m;
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
            v = ((p = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : p.id) ?? v;
          }
          const w = (((d = g.system) == null ? void 0 : d.kind) ?? "passive").toString();
          if (w === "module") {
            (u = (f = ui.notifications) == null ? void 0 : f.warn) == null || u.call(f, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
            return;
          }
          const k = this.actor.system.abilities ?? {};
          if (w === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": v,
              "system.abilities.faji.name": g.name
            });
            return;
          }
          if (w === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": v,
              "system.abilities.hatter.name": g.name
            });
            return;
          }
          const I = w === "active" ? "active" : "passive", _ = Array.isArray((r = k[I]) == null ? void 0 : r.items) ? k[I].items.slice() : Array.isArray(k[I]) ? k[I].slice() : [];
          _.includes(v) || _.push(v), await this.actor.update({ [`system.abilities.${I}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((o = e.data) == null ? void 0 : o.uuid) ?? (typeof e == "string" ? e : null);
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
          const v = this.actor, w = ((y = g.parent) == null ? void 0 : y.id) !== v.id;
          let k = g.id;
          if (w) {
            const I = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            k = ((a = (await v.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : a.id) ?? k;
          }
          if (w) {
            const I = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (I.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = _ ? _.split(/\s*,\s*/).filter((K) => O.includes(K)) : [], P = C.filter((K) => {
              var U;
              return (((U = I[K]) == null ? void 0 : U.itemId) ?? "").trim() === k;
            });
            if (P.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((E) => !P.includes(E)).join(",")
              };
              for (const E of P)
                U[`system.weapons.${E}.itemId`] = "", U[`system.weapons.${E}.name`] = "", U[`system.weapons.${E}.damage`] = "", U[`system.weapons.${E}.bonus`] = "";
              await v.update(U);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const v = this.actor;
          if (((c = g.parent) == null ? void 0 : c.id) !== v.id) {
            const w = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            await v.createEmbeddedDocuments("Item", [w]);
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "MikroChip") {
          const v = this.actor;
          ((l = g.parent) == null ? void 0 : l.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
        if (g && g.documentName === "Item" && (g.type === "Targy" || g.type === "Egyeb")) {
          const v = this.actor;
          ((m = g.parent) == null ? void 0 : m.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var p, d, f;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (f = s.currentTarget) == null || f.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var f, u, r, o, y, a;
    s.preventDefault(), s.stopPropagation(), (f = s.currentTarget) == null || f.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "Fegyver") return;
    if (((o = p.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const d = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: d,
      [`system.weapons.${e}.name`]: p.name,
      [`system.weapons.${e}.damage`]: ((y = p.system) == null ? void 0 : y.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((a = p.system) == null ? void 0 : a.bonus) ?? ""
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
    var r, o;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const p = this.actor.items.contents.slice().sort((y, a) => {
      const i = typeof y.sort == "number" ? y.sort : 0, c = typeof a.sort == "number" ? a.sort : 0;
      return i - c;
    }).map((y) => y.id), d = p.indexOf(t), f = p.indexOf(e);
    if (d === -1 || f === -1) return;
    p.splice(d, 1), p.splice(f, 0, t);
    const u = p.map((y, a) => ({
      _id: y,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(s) {
    var n, p, d;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (d = s.currentTarget) == null || d.classList.add("karakter-actions-table-drag-over"));
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
    var u, r, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        a > 0 && (p = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var o, y, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, p = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: r,
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
    var d, f, u;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((f = n.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((u = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : u.id) ?? p;
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
    var u, r, o, y;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((r = n.parent) == null ? void 0 : r.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((o = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : o.id) ?? p;
    }
    const d = this.actor.system.abilities ?? {}, f = Array.isArray((y = d[e]) == null ? void 0 : y.items) ? d[e].items.slice() : Array.isArray(d[e]) ? d[e].slice() : [];
    f.includes(p) || f.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: f });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, d, f;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (f = s.currentTarget) == null || f.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var f, u, r, o, y;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "MikroChip") return;
    let d = p.id;
    ((o = p.parent) == null ? void 0 : o.id) !== this.actor.id && (d = ((y = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : y.id) ?? d), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: d,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let p = Number(n) || 0;
    const d = this._getSkillHealthStatus(s);
    d === 1 ? p -= 6 : d === 2 && (p -= 3);
    const u = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, r = new Roll(u);
    await r.evaluate({ async: !0 });
    const { resultType: o, label: y } = Vt(r), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: o, critLabel: y } },
      rollMode: a
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
    var d;
    const s = Number(((d = this.actor.system.skills) == null ? void 0 : d.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    var w, k;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((I) => I.type === "Fegyver");
    let d = null;
    t.itemId && (d = p.find((I) => I.id === t.itemId) ?? null);
    const f = d && d.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, r = ((w = d == null ? void 0 : d.system) == null ? void 0 : w.type) || "kinetic", o = (((k = d == null ? void 0 : d.system) == null ? void 0 : k.skillKey) ?? "").trim(), y = o && n[o] !== void 0 ? o : r === "explosive" ? "grenadeUse" : "firearms", a = Number(n[y] || 0) || 0, i = u + a, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, m = new Roll(l);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: g } = Vt(m), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, r, o, y, a, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    let n = ((r = (u = t.items).get) == null ? void 0 : r.call(u, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(p);
    await d.evaluate({ async: !0 });
    const f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: f
    });
  }
};
X(Q, "PARTS", foundry.utils.mergeObject(
  j(Q, Q, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Q, Q, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ps = j(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Es = j(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Es.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((xs = ($s = j(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : $s.window) == null ? void 0 : xs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
X(Q, "BODY_PART_BY_SKILL", {
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
let Nt = Q;
function Ri(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var zs, Ms, Rs, js;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, p, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, c = n.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && l && (p.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), f = this.element, u = this.form ?? this.element, r = p.scrollState, o = p.focus, y = typeof (r == null ? void 0 : r.formScrollTop) == "number" || typeof (r == null ? void 0 : r.windowScrollTop) == "number", a = () => {
      var i, c;
      if (this._applyScrollState(f, r), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const l = ((i = u.querySelector) == null ? void 0 : i.call(u, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (c = u.querySelector) == null ? void 0 : c.call(u, `[name="${CSS.escape(o.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = o.selectionStart ?? 0, l.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(f, r);
    };
    return (y || o) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), d;
  }
  async _prepareContext(s) {
    var He, Ye, Ge, ct, ee, ye, ie, lt, Me, Ne, ut, We, Xe, At, Ft, ft, Pt, yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((He = this.actor) == null ? void 0 : He.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, d = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, f = (lt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && lt.call(ie, "halfcover") ? 3 : 0, u = (Ne = (Me = t == null ? void 0 : t.statuses) == null ? void 0 : Me.has) != null && Ne.call(Me, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + d + f + u;
    const r = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], o = ((We = t == null ? void 0 : t.system) == null ? void 0 : We.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (o.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((T) => y.includes(T)) : [], c = r.filter((T) => T.type === "Fegyver"), l = c.map((T) => ({ id: T.id, name: T.name, img: T.img })), m = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((T) => !h.includes(T)), v = [...h, ...g], w = v.filter((T) => {
      var M;
      const z = (((M = o[T]) == null ? void 0 : M.itemId) ?? "").trim();
      return z && c.some((G) => G.id === z);
    });
    e.weaponSlots = w.map((T) => {
      const z = o[T] ?? {}, M = (z.itemId ?? "").trim(), G = l.find((Se) => Se.id === M), Ie = c.find((Se) => Se.id === M), ne = (Ie == null ? void 0 : Ie.system) ?? {}, Le = ne.size === "thrown", Ce = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: T,
        itemId: M,
        displayName: (G == null ? void 0 : G.name) || z.name || m,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Le,
        rangeStr: Ce
      };
    });
    const k = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, I = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((T) => {
      var _t;
      const z = T.id;
      let M = null, G = {};
      for (const dt of v)
        if ((((_t = o[dt]) == null ? void 0 : _t.itemId) ?? "").trim() === z) {
          M = dt, G = o[dt] ?? {};
          break;
        }
      const Ie = !!M, ne = (T == null ? void 0 : T.system) ?? {}, Le = typeof ne.range == "string" ? (ne.range || "").trim() : "", Ce = ne.type ?? "", Se = (k[Ce] ?? Ce) || "—", Re = ne.size ?? "", tt = (I[Re] ?? Re) || "", st = [Se, tt].filter(Boolean).join(", ") || Se || "—", Et = Ce === "projectile" || Re === "thrown", $t = ne.quantity != null ? String(ne.quantity).trim() : "1", xt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", zt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: M ?? "",
        itemId: z,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? m,
        img: (T == null ? void 0 : T.img) ?? "",
        bonus: xt,
        damage: zt,
        rangeStr: Le || "—",
        typeAndSize: st,
        quantity: $t,
        isProjectile: Et,
        equipped: Ie,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const _ = r.filter((T) => T.type === "Pancel");
    e.armorTable = _.map((T) => {
      var G;
      const z = (T == null ? void 0 : T.system) ?? {}, M = ((G = T.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        protectionBonus: (z.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (z.speedPenalty ?? "").toString().trim() || "—",
        level: Ri((z.level ?? "").toString().trim()),
        special: (z.special ?? z.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const O = ((At = (Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.gear) == null ? void 0 : At.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], P = r.filter((T) => T.type === "MikroChip");
    e.microchipsTable = P.map((T) => {
      var Ce, Se, Re, tt;
      const z = T.id;
      let M = null;
      for (const st of C)
        if ((((Ce = O[st]) == null ? void 0 : Ce.itemId) ?? "").trim() === z) {
          M = st;
          break;
        }
      const G = ((Se = T == null ? void 0 : T.system) == null ? void 0 : Se.abilityType) ?? "", Ie = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((Re = T == null ? void 0 : T.system) == null ? void 0 : Re.description) ?? "").trim(), Le = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: z,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        typeLabel: Ie,
        description: Le,
        kp: Number((tt = T == null ? void 0 : T.system) == null ? void 0 : tt.replaceCost) >= 0 ? Number(T.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: M ?? "",
        equipped: !!M
      };
    });
    const K = r.filter((T) => T.type === "Targy");
    e.itemsTable = K.map((T) => {
      const z = (T == null ? void 0 : T.system) ?? {}, M = (z.description ?? "").trim(), G = M ? M.length > 60 ? M.slice(0, 57) + "…" : M : "—";
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        quantity: z.quantity != null ? String(z.quantity).trim() : "1",
        description: G
      };
    });
    const U = r.filter((T) => T.type === "Egyeb");
    e.egyebList = U.map((T) => {
      const M = (((T == null ? void 0 : T.system) ?? {}).description ?? "").trim(), G = M ? M.length > 80 ? M.slice(0, 77) + "…" : M : "";
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        description: G
      };
    });
    const E = (((Ft = e.weaponsTable) == null ? void 0 : Ft.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((Pt = e.microchipsTable) == null ? void 0 : Pt.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !E;
    const W = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = r.filter((T) => T.type === "Kepesseg" || T.type === "ability").map((T) => {
      var z, M, G;
      return {
        id: T.id,
        name: T.name,
        img: T.img,
        description: ((z = T.system) == null ? void 0 : z.description) ?? "",
        kp: Number(((M = T.system) == null ? void 0 : M.kp) ?? 0) || 0,
        kind: (((G = T.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), J = new Map(Z.map((T) => [T.id, T])), Y = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Y, e.abilityHatterSlot = Y;
    const oe = (T) => {
      const z = W[T];
      return z ? Array.isArray(z == null ? void 0 : z.items) ? z.items : Array.isArray(z) ? z : [] : [];
    }, R = (T) => (T || []).map((z) => {
      const M = J.get(z);
      if (!M) return null;
      const G = M.kind === "species";
      return {
        id: M.id,
        name: M.name,
        img: M.img,
        description: M.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: G ? 0 : M.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = R(oe("passive")), e.abilityActiveList = R(oe("active"));
    const te = t == null ? void 0 : t.id, de = !!((vt = (bt = game.combat) == null ? void 0 : bt.combatants) != null && vt.some(
      (T) => {
        var z;
        return (((z = T.actor) == null ? void 0 : z.id) ?? T.actorId) === te;
      }
    ));
    e.showHarcSection = de;
    const Oe = ((kt = e.system) == null ? void 0 : kt.resources) ?? {}, D = (It = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : It.initiativeResult, x = typeof D == "number" ? D : -1, V = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], se = (Qe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Qe.initiativeRanges, le = Array.isArray(se) ? se.map((T) => ({ min: Number(T.min) ?? 0, max: Number(T.max) ?? 0, kp: Math.min(10, Math.max(0, Number(T.kp) ?? 0)) })) : [], ae = (le.length > 0 ? le : V).slice().sort((T, z) => T.min - z.min), we = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < we && (ce = [...ce, ...Array(we - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((T, z) => ({
      ...T,
      isFirst: z === 0,
      isLast: z === ce.length - 1
    }));
    let fe = 0;
    if (typeof x == "number" && x >= 0 && ae.length > 0) {
      const T = ae[0], z = ae[ae.length - 1];
      let M = null;
      x <= T.max ? M = T : x >= z.min ? M = z : M = ae.find((G) => x >= G.min && x <= G.max), M && (fe = M.kp);
    }
    const Ke = ae.length > 0 ? ae[ae.length - 1] : null, Ue = Math.min(10, Ke ? Ke.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, Ue)).map((T, z) => {
      const M = z + 1, G = !!Number(Oe[T]), Ie = M <= fe;
      return { index: M, used: G, usable: Ie };
    }), ot = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, ot), e.kpDotsRow2 = Be.slice(ot), e.canEditInitiative = !!((Tt = game.user) != null && Tt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((et = (Dt = e.system) == null ? void 0 : Dt.combat) == null ? void 0 : et.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var r, o, y;
    super._attachFrameListeners(s);
    const e = ((r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var l, m, h;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((h = (m = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var l, m, h;
      a.preventDefault();
      const i = (m = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (h = c == null ? void 0 : c.sheet) == null || h.render(!0);
    });
    const n = (a) => {
      var l, m;
      const i = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var m, h, g, v;
      a.preventDefault();
      const i = (h = (m = a.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var m;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, c = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-xsZHzqj9.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var l, m, h, g, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((m = i == null ? void 0 : i.dataset) != null && m.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-xsZHzqj9.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var m, h;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((h = (m = this.actor.system) == null ? void 0 : m.resources) == null ? void 0 : h[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h, g;
      a.preventDefault();
      const i = a.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: m } = await import("./roll-sheet-xsZHzqj9.mjs");
      m(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var c, l;
      a.preventDefault();
      const i = (l = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var l, m, h, g;
      a.preventDefault();
      const i = (((m = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId) ?? ((g = (h = a.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, w, k, I, _;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, c = (k = (w = a.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : k.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((I = this.actor.system) == null ? void 0 : I.abilities) ?? {}, h = (Array.isArray((_ = l[i]) == null ? void 0 : _.items) ? l[i].items.slice() : []).filter((O) => O !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      var c, l;
      if (a.preventDefault(), !a.altKey) return;
      const i = (l = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      var g, v;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, m = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      m && (h[`system.weapons.${m}.itemId`] = "", h[`system.weapons.${m}.name`] = "", h[`system.weapons.${m}.damage`] = "", h[`system.weapons.${m}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var c, l;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((l = (c = a.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var h, g, v, w;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((g = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((w = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : w.microchips) ?? {}, m = ["slot1", "slot2", "slot3"].find((k) => {
        var I;
        return (((I = c[k]) == null ? void 0 : I.itemId) ?? "").trim() === i;
      });
      m && await this.actor.update({
        [`system.gear.microchips.${m}.itemId`]: "",
        [`system.gear.microchips.${m}.name`]: "",
        [`system.gear.microchips.${m}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var l, m;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((m = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (o = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : o.call(e, p)) == null || y.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", p, (a) => {
      var h, g, v;
      const i = a.currentTarget, c = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const m = l.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", m), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: m })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, f = (a) => {
      if (!a) return;
      const i = d._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, u = (a) => {
      var i, c, l;
      return a && (((c = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, a)) || d.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (a) => {
      var h;
      const i = a.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!u(l)) return;
      const m = a.relatedTarget;
      m && (l.contains(m) || d.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(d.id)}`))) || f(l);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0), d._votvNpcItemHookRegistered || (d._votvNpcItemUpdateHook = (a, i, c) => {
      var l;
      d.actor && ((l = a == null ? void 0 : a.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, d._votvNpcItemDeleteHook = (a, i, c) => {
      var l;
      d.actor && ((l = a == null ? void 0 : a.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, Hooks.on("updateItem", d._votvNpcItemUpdateHook), Hooks.on("deleteItem", d._votvNpcItemDeleteHook), d._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const d = this._getFormDataForUpdate(e);
      Object.keys(d).length > 0 && await this.actor.update(d).catch((f) => console.warn("VoidNpcSheet save on preClose failed", f));
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
    var k, I, _, O, C;
    const e = this.actor;
    if (!e) return;
    const n = (((k = e.system) == null ? void 0 : k.weapons) ?? {})[s] ?? {}, p = ((I = e.system) == null ? void 0 : I.skills) ?? {}, d = ((_ = e.items) == null ? void 0 : _.filter((P) => P.type === "Fegyver")) ?? [];
    let f = null;
    n.itemId && (f = d.find((P) => P.id === n.itemId) ?? null);
    const u = f && f.name || n.name || "Fegyver", r = Number(n.bonus || 0) || 0, o = ((O = f == null ? void 0 : f.system) == null ? void 0 : O.type) || "kinetic", y = (((C = f == null ? void 0 : f.system) == null ? void 0 : C.skillKey) ?? "").trim(), a = y && p[y] !== void 0 ? y : o === "explosive" ? "grenadeUse" : "firearms", i = Number(p[a] || 0) || 0, c = r + i, m = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(m);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Vt(h), w = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: w
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, r, o, y, a, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    const n = ((r = (u = t.items).get) == null ? void 0 : r.call(u, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(p);
    await d.evaluate({ async: !0 });
    const f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: f
    });
  }
  async _onDropItem(s, e) {
    var o, y, a, i, c, l, m, h, g, v, w, k, I, _, O, C, P, K, U;
    if (!this.actor) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const n = ((E) => {
      var Z;
      if (!E) return null;
      const W = E.uuid ?? E.documentUuid ?? ((Z = E.data) == null ? void 0 : Z.uuid) ?? (typeof E == "string" ? E : null);
      if (W) return W;
      if (typeof E == "object") {
        for (const J of Object.values(E))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    if (p.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const d = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      const E = (((l = p.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (E === "module") {
        (h = (m = ui.notifications) == null ? void 0 : m.warn) == null || h.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let W = p.id;
      if (((g = p.parent) == null ? void 0 : g.id) !== d.id) {
        const oe = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        W = ((v = (await d.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : v.id) ?? W;
      }
      const Z = ((w = d.system) == null ? void 0 : w.abilities) ?? {}, J = E === "active" ? "active" : "passive", Y = Array.isArray((k = Z[J]) == null ? void 0 : k.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(W) || Y.push(W), await d.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = p.parent) == null ? void 0 : I.id) === d.id) return;
    const f = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(f, { system: { ...f.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(f, { system: { ...f.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const r = (_ = (await d.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : _.id;
    if (p.type === "Fegyver" && r) {
      const E = ((O = d.system) == null ? void 0 : O.weapons) ?? {}, W = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (E.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((R) => W.includes(R)) : [];
      let Y = W.find((R) => {
        var te;
        return !(((te = E[R]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = W.find((R) => !J.includes(R)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((R) => W.includes(R));
      await d.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: r,
        [`system.weapons.${Y}.name`]: p.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = p.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((P = p.system) == null ? void 0 : P.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && r) {
      const E = ((U = (K = d.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = E[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await d.update({
        [`system.gear.microchips.${Z}.itemId`]: r,
        [`system.gear.microchips.${Z}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var o, y, a, i, c, l;
    const e = (y = (o = this.actor) == null ? void 0 : o.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var u, r, o, y, a, i;
    const e = (r = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : r.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((o = e.system) == null ? void 0 : o.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const c = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        l > 0 && (p = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: f,
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
        const d = (n.value ?? "").trim();
        if (d === "") continue;
        p = Number(d) || 0;
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
X(he, "PARTS", foundry.utils.mergeObject(
  j(he, he, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(he, he, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((zs = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : zs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ms = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((js = (Rs = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.window) == null ? void 0 : js.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Jt = he;
function ji(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ks, Us, Bs, Hs;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, p, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
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
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, d = this.form ?? this.element;
    let f = { scrollState: {}, focus: null };
    if (p) {
      f.scrollState = this._saveScrollState(p);
      const m = document.activeElement, h = d.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (f.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const r = this.element, o = this.form ?? this.element, y = f.scrollState, a = f.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(r, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((m = o.querySelector) == null ? void 0 : m.call(o, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(r, y);
    };
    return (i || a) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (r) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, r)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${r}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const f = Number(p == null ? void 0 : p.value) || 0, u = Number(d == null ? void 0 : d.value) || 0;
    n.textContent = String(f + u);
  }
  async _prepareContext(s) {
    var P, K, U, E, W, Z, J, Y, oe, R, te, de, Oe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((P = e.system) == null ? void 0 : P.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, d = "— Nincs fegyver —", f = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = f.map((D) => {
      const x = (D == null ? void 0 : D.system) ?? {}, V = x.type ?? "", se = (n[V] ?? V) || "—", le = x.size ?? "", pe = (p[le] ?? le) || "", ae = [se, pe].filter(Boolean).join(", ") || se || "—", we = V === "projectile" || le === "thrown", ce = x.quantity != null ? String(x.quantity).trim() : "1", fe = (typeof x.range == "string" ? (x.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? d,
        img: (D == null ? void 0 : D.img) ?? "",
        bonus: String(x.bonus ?? "").trim() || "0",
        damage: x.damage ?? "",
        rangeStr: fe || "—",
        typeLabel: se,
        typeAndSize: ae,
        quantity: ce,
        quantityDisplay: we ? ce : "—",
        isProjectile: we,
        equipped: !1,
        special: (x.special ?? "").trim() || "—"
      };
    });
    const u = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = u.map((D) => {
      var se;
      const x = (D == null ? void 0 : D.system) ?? {}, V = !!((se = D.system) != null && se.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: ji((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: V
      };
    });
    const r = (((E = this.actor.items) == null ? void 0 : E.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = r.map((D) => {
      var we, ce, fe;
      const x = ((we = D == null ? void 0 : D.system) == null ? void 0 : we.abilityType) ?? "", V = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—", se = x === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), ae = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: V,
        description: ae,
        kp: le,
        isActive: se,
        slotKey: "",
        equipped: !1
      };
    });
    const o = (((W = this.actor.items) == null ? void 0 : W.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = o.map((D) => {
      const x = (D == null ? void 0 : D.system) ?? {}, V = (x.description ?? "").trim(), se = V ? V.length > 60 ? V.slice(0, 57) + "…" : V : "—", le = x.quantity != null ? String(x.quantity).trim() : "1";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        quantity: le,
        description: se
      };
    });
    const y = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", a = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === y).sort((D, x) => {
      const V = typeof D.sort == "number" ? D.sort : 0, se = typeof x.sort == "number" ? x.sort : 0;
      return V - se;
    }), i = [];
    let c = 0, l = 0, m = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of a) {
      const x = (D == null ? void 0 : D.system) ?? {}, V = Number(x.level ?? 0) || 0, se = (x.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (m += le);
      const pe = x.abilities ?? {}, ae = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
        ae.map(async (ee) => {
          var ye;
          if (!ee) return null;
          try {
            const ie = await fromUuid(ee);
            if (ie && (ie.type === "Kepesseg" || ie.type === "ability")) return ie;
          } catch {
            const ie = (ye = game.items) == null ? void 0 : ye.get(ee);
            if (ie && (ie.type === "Kepesseg" || ie.type === "ability")) return ie;
          }
          return null;
        })
      )).map((ee, ye) => ({ doc: ee, ref: ae[ye] })).filter((ee) => !!ee.doc && !!ee.ref).map(({ doc: ee, ref: ye }) => {
        var Ne, ut;
        const ie = (((Ne = ee.system) == null ? void 0 : Ne.kind) ?? "passive").toString(), lt = Number(((ut = ee.system) == null ? void 0 : ut.kp) ?? 0) || 0, Me = ie === "species";
        return {
          id: ee.id,
          ref: ye,
          name: ee.name,
          img: ee.img,
          kind: ie,
          kpDisplay: Me ? 0 : lt
        };
      });
      if (y === "Helyiseg") {
        const ee = (x.hit ?? "").toString().trim();
        i.push({
          itemId: D.id,
          actorId: this.actor.id,
          name: (D == null ? void 0 : D.name) ?? "—",
          img: (D == null ? void 0 : D.img) ?? "",
          level: V,
          hit: ee,
          abilities: ce,
          isHelyiseg: !0
        });
        continue;
      }
      const fe = x.health ?? {}, Ke = Number(fe.max ?? 0) || 0, Ue = Number(fe.value ?? 0) || 0;
      let ze;
      if (Ke <= 0)
        ze = void 0;
      else if (Ue <= 0)
        ze = 0;
      else {
        const ee = Ue / Ke;
        ee > 2 / 3 ? ze = 3 : ee > 1 / 3 ? ze = 2 : ze = 1;
      }
      const Be = (x.hit ?? "").toString().trim(), ot = (x.speed ?? "").toString().trim().replace(",", "."), He = Number(ot);
      Number.isFinite(He) && (c += He);
      const Ye = (x.range ?? "").toString().trim().replace(",", "."), Ge = Number(Ye);
      Number.isFinite(Ge) && (l += Ge);
      const ct = (x.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: V,
        hpMax: Ke,
        hpValue: Ue,
        hpStatus: ze,
        hit: Be,
        damage: ct,
        abilities: ce,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = m, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = a.length;
    let v = "Kicsi", w = 0, k = 0;
    g >= 11 ? (v = "Nagy", w = -4, k = -6) : g >= 6 ? (v = "Közepes", w = -2, k = -3) : (v = "Kicsi", w = 0, k = 0), e.sizeForSelect = v, e.unitCount = g, e.sizeSpeedPenalty = w, e.sizeDefensePenalty = k;
    const I = c + w, _ = l;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: I },
        vehicle: { toolsRange: _, storage: h },
        identity: { size: v }
      },
      { inplace: !1 }
    );
    const O = (((oe = e.weaponsTable) == null ? void 0 : oe.length) ?? 0) > 0 || (((R = e.armorTable) == null ? void 0 : R.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((de = e.itemsTable) == null ? void 0 : de.length) ?? 0) > 0;
    e.showEquipmentDropZone = !O;
    const C = (((Oe = this.actor.items) == null ? void 0 : Oe.contents) ?? []).filter((D) => D.type === "Egyeb");
    return e.egyebList = C.map((D) => {
      const V = (((D == null ? void 0 : D.system) ?? {}).description ?? "").trim(), se = V ? V.length > 80 ? V.slice(0, 77) + "…" : V : "";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        description: se
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var f;
    super._attachFrameListeners(s);
    const e = ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.form ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (u) => {
      var y, a, i;
      u.preventDefault(), u.stopPropagation();
      const r = ((i = (a = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (u) => {
      var y, a, i;
      u.preventDefault();
      const r = (a = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var y, a;
      if (u.preventDefault(), !u.altKey) return;
      const r = (a = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      !r || !this.actor.items.get(r) || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var a;
      const r = u.currentTarget, o = (a = r == null ? void 0 : r.dataset) == null ? void 0 : a.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (r.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var y, a;
      const r = (a = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Pancel" || await o.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var o, y, a, i;
      u.preventDefault();
      const r = (y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId;
      r && ((i = (a = this.actor.items.get(r)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var o, y;
      if (u.preventDefault(), !u.altKey) return;
      const r = (y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId;
      r && await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var y, a, i, c;
      u.preventDefault();
      const r = (((a = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId) ?? ((c = (i = u.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "MikroChip" && o.type !== "Egyeb" || await this._postItemToChat(r);
    }), t.on("click", ".jarmu-unit-damage-button", async (u) => {
      var y;
      u.preventDefault(), u.stopPropagation();
      const r = u.currentTarget, o = (((y = r == null ? void 0 : r.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      o && await this._rollUnitDamage(o);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (u) => {
      var a, i;
      const r = u.currentTarget, o = (a = r == null ? void 0 : r.dataset) == null ? void 0 : a.itemId;
      if (!o) return;
      n._draggingUnitId = o;
      const y = (i = u.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", o), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(r, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (u) => {
      var a, i, c, l;
      const r = (i = (a = u.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : i.itemId, o = n._draggingUnitId;
      if (!o || !r || o === r) return;
      u.preventDefault();
      const y = (c = u.originalEvent) == null ? void 0 : c.dataTransfer;
      y && (y.dropEffect = "move"), (l = u.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (u) => {
      var r;
      (r = u.currentTarget) == null || r.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (u) => {
      var g, v, w, k;
      u.preventDefault(), (g = u.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const r = (w = (v = u.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : w.itemId;
      let o = n._draggingUnitId;
      const y = (k = u.originalEvent) == null ? void 0 : k.dataTransfer;
      if (!o && y && (o = y.getData("text/plain")), n._draggingUnitId = null, !o || !r || o === r) return;
      const a = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((I) => I.type === a).sort((I, _) => {
        const O = typeof I.sort == "number" ? I.sort : 0, C = typeof _.sort == "number" ? _.sort : 0;
        return O - C;
      }).map((I) => I.id), l = c.indexOf(o), m = c.indexOf(r);
      if (l === -1 || m === -1) return;
      c.splice(l, 1), c.splice(m, 0, o);
      const h = c.map((I, _) => ({
        _id: I,
        sort: (_ + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (u) => {
      var a, i, c, l, m, h, g, v, w, k;
      u.preventDefault();
      const r = (l = (c = (i = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : i.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : l.abilityRef, o = (v = (g = (h = (m = u.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (r)
        try {
          y = await fromUuid(r);
        } catch {
          y = null;
        }
      !y && o && (y = ((w = game.items) == null ? void 0 : w.get(o)) ?? null), (k = y == null ? void 0 : y.sheet) == null || k.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (u) => {
      var i, c, l, m;
      u.preventDefault();
      const r = (c = (i = u.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), o = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.abilityRef, y = (m = r == null ? void 0 : r.dataset) == null ? void 0 : m.abilityId, a = o || y;
      a && await this._postUnitAbilityToChat(a);
    });
    const p = (u) => {
      if (!u) return;
      const r = this._getFormDataForUpdate(u);
      Object.keys(r).length !== 0 && this.actor.update(r).catch((o) => console.warn("VoidJarmuSheet save failed", o));
    }, d = (u) => {
      var r, o, y;
      return u && (((o = (r = this.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, u)) || this.id && ((y = u.closest) == null ? void 0 : y.call(u, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (u) => {
      var i;
      const r = u.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const y = r.form;
      if (!d(y)) return;
      const a = u.relatedTarget;
      a && (y.contains(a) || this.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), p(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var l, m, h;
      const r = u.currentTarget, o = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (r.value ?? "").trim(), i = a === "" ? 0 : Number(a), c = (m = r.closest) == null ? void 0 : m.call(r, ".jarmu-unit-row");
      if (c) {
        const g = (h = c.querySelector) == null ? void 0 : h.call(c, ".jarmu-unit-hp-max"), v = (g == null ? void 0 : g.textContent) ?? "", w = Number((v ?? "").trim()) || 0;
        let k;
        if (w <= 0)
          k = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          k = 0;
        else {
          const I = i / w;
          I > 2 / 3 ? k = 3 : I > 1 / 3 ? k = 2 : k = 1;
        }
        k === void 0 ? c.removeAttribute("data-hp-status") : c.dataset.hpStatus = String(k);
      }
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (u) => {
      var i;
      const r = u.currentTarget, o = (i = r == null ? void 0 : r.dataset) == null ? void 0 : i.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Jarmuegyseg" && y.type !== "Helyiseg") return;
      const a = (r.value ?? "").trim();
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
    var u, r, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        a > 0 && (p = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var f, u, r, o, y, a, i, c, l;
    const e = this.actor;
    if (!e) return;
    const t = ((u = (f = e.items).get) == null ? void 0 : u.call(f, s)) ?? ((o = (r = e.items.contents) == null ? void 0 : r.find) == null ? void 0 : o.call(r, (m) => m.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (l = (a = ui.notifications) == null ? void 0 : a.warn) == null || l.call(
        a,
        ((c = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : c.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
      );
      return;
    }
    const p = new Roll(n);
    await p.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _postUnitAbilityToChat(s) {
    var o, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var u, r;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((u = e == null ? void 0 : e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const o of Object.values(e))
        if (typeof o == "string" && o.includes(".") && o.startsWith("Item.")) {
          t = o;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const p = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(n.type)) return super._onDropItem(s, e);
    if (((r = n.parent) == null ? void 0 : r.id) === p.id) return;
    const f = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [f]);
  }
};
X(be, "PARTS", foundry.utils.mergeObject(
  j(be, be, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(be, be, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ks = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Us = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Us.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Hs = (Bs = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Bs.window) == null ? void 0 : Hs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Kt = be;
function Ki(S) {
  if (S == null) return 0;
  const s = String(S).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function As(S) {
  var e;
  return (((e = S == null ? void 0 : S.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var p;
    return t + Ki((p = n.system) == null ? void 0 : p.veszely);
  }, 0);
}
var Gs;
const rt = class rt extends Kt {
  _attachFrameListeners(s) {
    var f;
    super._attachFrameListeners(s);
    const e = this.form ?? ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element;
    if (!e) return;
    const t = {
      "Középső Rendszerek": -10,
      "Köztársasági Ágak": 10,
      "Peremvidék, vagy azon túl": 30
    }, n = {
      "Polgári Zóna": 10,
      "Ipari Zóna": 10,
      "Bánya Zóna": 10,
      "Katonai Zóna": -10,
      "Kutató Zóna": -10,
      "Elhagyott Zóna": 30,
      "Zónán kívüli terület": 30
    }, p = { Kicsi: -10, Közepes: 0, Nagy: 10 }, d = () => {
      var O, C, P, K, U, E, W;
      const r = ((O = e.querySelector) == null ? void 0 : O.call(e, "form")) ?? e, o = (C = r.querySelector) == null ? void 0 : C.call(r, 'select[name="system.identity.assignment"]'), y = (P = r.querySelector) == null ? void 0 : P.call(r, 'select[name="system.identity.subAssignment"]'), a = (K = r.querySelector) == null ? void 0 : K.call(r, "input.bazis-threat-total"), i = (U = r.querySelector) == null ? void 0 : U.call(r, 'input[name="system.combat.threatBonus"]');
      if (!o || !a || !i) return;
      const c = o.value ?? "", l = (y == null ? void 0 : y.value) ?? "", m = t[c] ?? 0, h = n[l] ?? 0, g = (((W = (E = this.actor) == null ? void 0 : E.items) == null ? void 0 : W.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", w = p[v] ?? 0, k = Number(i.value ?? 0) || 0, I = As(this.actor), _ = m + h + w + k + I;
      a.value = _;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', d);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, p = n.identity ?? {}, d = n.combat ?? {}, f = p.assignment ?? "", u = p.subAssignment ?? "", r = {
        "Középső Rendszerek": -10,
        "Köztársasági Ágak": 10,
        "Peremvidék, vagy azon túl": 30
      }, o = {
        "Polgári Zóna": 10,
        "Ipari Zóna": 10,
        "Bánya Zóna": 10,
        "Katonai Zóna": -10,
        "Kutató Zóna": -10,
        "Elhagyott Zóna": 30,
        "Zónán kívüli terület": 30
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, a = r[f] ?? 0, i = o[u] ?? 0, c = e.sizeForSelect ?? "Kicsi", l = y[c] ?? 0, m = Number(d.threatBonus ?? 0) || 0, h = As(this.actor), g = a + i + l + m + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...d, threat: g, threatBonus: m } },
        { inplace: !1 }
      ), e.bazisThreatBase = a;
    }
    return e;
  }
};
X(rt, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(rt, rt, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Gs = j(rt, rt, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Zt = rt;
var Ws, Vs, Js, Zs;
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  _getScrollContainers(s) {
    var n, p, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.vallalkozas-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
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
    var r, o, y;
    const t = this.element, n = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (t) {
      p.scrollState = this._saveScrollState(t);
      const a = document.activeElement, i = (r = n == null ? void 0 : n.contains) == null ? void 0 : r.call(n, a), c = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      i && c && (p.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), f = this.element, u = this.form ?? this.element;
    if (f && this._applyScrollState(f, p.scrollState), p.focus && u) {
      let a = null;
      if (p.focus.name && (a = ((o = u.querySelector) == null ? void 0 : o.call(u, `[name="${CSS.escape(p.focus.name)}"]`)) ?? null), !a && p.focus.id && (a = ((y = u.querySelector) == null ? void 0 : y.call(u, `#${CSS.escape(p.focus.id)}`)) ?? null), a && typeof a.focus == "function" && (a.focus(), "setSelectionRange" in a))
        try {
          a.setSelectionRange(p.focus.selectionStart ?? 0, p.focus.selectionEnd ?? 0);
        } catch {
        }
    }
    return d;
  }
  async _prepareContext(s) {
    var m, h, g, v, w;
    const e = await super._prepareContext(s) ?? {}, t = this.actor;
    e.actor = t;
    const n = foundry.utils.deepClone(t.system ?? {});
    e.system = n;
    const p = {
      kinetic: "Kinetikus",
      projectile: "Lövedékes",
      blade: "Pengés",
      explosive: "Robbanó",
      other: "Egyéb"
    }, d = {
      light: "Könnyű",
      medium: "Közepes",
      heavy: "Nehéz",
      thrown: "Dobható"
    }, f = "— Nincs fegyver —", u = ((m = t.items) == null ? void 0 : m.contents) ?? [], r = u.filter((k) => k.type === "Fegyver");
    e.weaponsTable = r.map((k) => {
      const I = k.system ?? {}, _ = I.type ?? "", O = (p[_] ?? _) || "—", C = I.size ?? "", P = (d[C] ?? C) || "", K = [O, P].filter(Boolean).join(", ") || O || "—", U = _ === "projectile" || C === "thrown", E = I.quantity != null ? String(I.quantity).trim() : "1", W = (typeof I.range == "string" ? (I.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: k.id,
        actorId: t.id,
        name: k.name ?? f,
        img: k.img ?? "",
        bonus: String(I.bonus ?? "").trim() || "0",
        damage: I.damage ?? "",
        rangeStr: W || "—",
        typeLabel: O,
        typeAndSize: K,
        quantity: E,
        quantityDisplay: U ? E : "—",
        isProjectile: U,
        equipped: !1,
        special: (I.special ?? "").trim() || "—"
      };
    });
    const o = u.filter((k) => k.type === "Pancel");
    e.armorTable = o.map((k) => {
      var O;
      const I = k.system ?? {}, _ = !!((O = k.system) != null && O.equipped);
      return {
        itemId: k.id,
        actorId: t.id,
        name: k.name ?? "—",
        img: k.img ?? "",
        protectionBonus: (I.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (I.speedPenalty ?? "").toString().trim() || "—",
        level: (I.level ?? "").toString().trim() || "—",
        special: (I.special ?? I.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const y = u.filter((k) => k.type === "MikroChip");
    e.microchipsTable = y.map((k) => {
      var U, E, W;
      const I = ((U = k.system) == null ? void 0 : U.abilityType) ?? "", _ = I === "active" ? "Aktív" : I === "passive" ? "Passzív" : I || "—", O = I === "active", C = Number((E = k.system) == null ? void 0 : E.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0, P = (((W = k.system) == null ? void 0 : W.description) ?? "").trim(), K = P ? P.length > 60 ? `${P.slice(0, 57)}…` : P : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: k.name ?? "—",
        img: k.img ?? "",
        typeLabel: _,
        description: K,
        kp: C,
        isActive: O,
        slotKey: "",
        equipped: !1
      };
    });
    const a = u.filter((k) => k.type === "Targy");
    e.itemsTable = a.map((k) => {
      const I = k.system ?? {}, _ = (I.description ?? "").trim(), O = _ ? _.length > 60 ? `${_.slice(0, 57)}…` : _ : "—", C = I.quantity != null ? String(I.quantity).trim() : "1";
      return {
        itemId: k.id,
        actorId: t.id,
        name: k.name ?? "—",
        img: k.img ?? "",
        quantity: C,
        description: O
      };
    });
    const i = (((h = e.weaponsTable) == null ? void 0 : h.length) ?? 0) > 0 || (((g = e.armorTable) == null ? void 0 : g.length) ?? 0) > 0 || (((v = e.microchipsTable) == null ? void 0 : v.length) ?? 0) > 0 || (((w = e.itemsTable) == null ? void 0 : w.length) ?? 0) > 0;
    e.showEquipmentDropZone = !i;
    const c = u.filter((k) => k.type === "Egyeb");
    e.egyebList = c.map((k) => {
      const _ = ((k.system ?? {}).description ?? "").trim(), O = _ ? _.length > 80 ? `${_.slice(0, 77)}…` : _ : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: k.name ?? "—",
        img: k.img ?? "",
        description: O
      };
    });
    const l = n.vallalkozas ?? {};
    if (Array.isArray(l.militiaMissions)) {
      const k = Number(l.level ?? 1) || 1, I = Number(l.militiaPower ?? 0) || 0, _ = l.militiaMissions.map((O) => {
        const C = Number(O.baseRoll ?? 0) || 0, P = C > 0 ? C * k : Number(O.difficulty ?? 0) || 0, K = P - I;
        return {
          ...O,
          baseRoll: C,
          difficulty: P,
          risk: K
        };
      });
      n.vallalkozas = {
        ...l,
        militiaMissions: _
      }, e.system = n;
    }
    return e;
  }
  _attachFrameListeners(s) {
    var f;
    super._attachFrameListeners(s);
    const e = this, t = ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, n = t ? $(t) : $([]);
    if (!this.isEditable) return;
    n.on("click", ".vallalkozas-employee-add", async (u) => {
      var y;
      if (u.preventDefault(), !this.actor) return;
      const r = this.actor.system ?? {}, o = Array.isArray((y = r.vallalkozas) == null ? void 0 : y.employees) ? r.vallalkozas.employees.slice() : [];
      o.push({ type: "", level: 0, count: 0, bonus: "" }), await this.actor.update({ "system.vallalkozas.employees": o });
    }), n.on("click", ".vallalkozas-employee-delete", async (u) => {
      var i, c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const r = ((c = (i = u.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", o = Number(r), y = this.actor.system ?? {}, a = Array.isArray((l = y.vallalkozas) == null ? void 0 : l.employees) ? y.vallalkozas.employees.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= a.length || (a.splice(o, 1), await this.actor.update({ "system.vallalkozas.employees": a }));
    }), n.on("click", ".vallalkozas-production-add", async (u) => {
      var y;
      if (u.preventDefault(), !this.actor) return;
      const r = this.actor.system ?? {}, o = Array.isArray((y = r.vallalkozas) == null ? void 0 : y.productionLines) ? r.vallalkozas.productionLines.slice() : [];
      o.push({ product: "", count: 0, time: "" }), await this.actor.update({ "system.vallalkozas.productionLines": o });
    }), n.on("click", ".vallalkozas-production-delete", async (u) => {
      var i, c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const r = ((c = (i = u.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", o = Number(r), y = this.actor.system ?? {}, a = Array.isArray((l = y.vallalkozas) == null ? void 0 : l.productionLines) ? y.vallalkozas.productionLines.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= a.length || (a.splice(o, 1), await this.actor.update({ "system.vallalkozas.productionLines": a }));
    }), n.on("click", ".vallalkozas-mission-add", async (u) => {
      if (u.preventDefault(), !this.actor) return;
      const o = (this.actor.system ?? {}).vallalkozas ?? {}, y = Array.isArray(o.militiaMissions) ? o.militiaMissions.slice() : [], a = Number(o.level ?? 1) || 1, i = Number(o.militiaPower ?? 0) || 0, c = Math.floor(Math.random() * 100) + 1, l = c * a, m = l - i;
      y.push({
        location: "",
        baseRoll: c,
        difficulty: l,
        risk: m,
        loot: ""
      }), await this.actor.update({ "system.vallalkozas.militiaMissions": y });
    }), n.on("click", ".vallalkozas-mission-delete", async (u) => {
      var c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const r = ((l = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.index) ?? "", o = Number(r), a = (this.actor.system ?? {}).vallalkozas ?? {}, i = Array.isArray(a.militiaMissions) ? a.militiaMissions.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= i.length || (i.splice(o, 1), await this.actor.update({ "system.vallalkozas.militiaMissions": i }));
    }), n.on("click", ".karakter-item-chat", async (u) => {
      var y, a, i, c;
      u.preventDefault();
      const r = (((a = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId) ?? ((c = (i = u.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      o && (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(r);
    }), n.on("click", ".vallalkozas-egyeb-delete", async (u) => {
      var o, y;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const r = (((y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      r && await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), n.on("click", ".vallalkozas-raktar-table .karakter-inventory-item-name, .vallalkozas-raktar-table .karakter-equipment-icon", (u) => {
      var y, a, i;
      u.preventDefault();
      const r = (a = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), n.on("change", ".vallalkozas-item-quantity-input", async (u) => {
      var i;
      const r = u.currentTarget, o = (((i = r == null ? void 0 : r.dataset) == null ? void 0 : i.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Targy") return;
      const a = (r.value ?? "").trim();
      await y.update({ "system.quantity": a });
    }), n.on("click", ".vallalkozas-item-delete", async (u) => {
      var o, y;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const r = (((y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      r && await this.actor.deleteEmbeddedDocuments("Item", [r]);
    });
    const p = (u) => {
      if (!u || !this.actor) return;
      const r = e._getFormDataForUpdate(u);
      Object.keys(r).length !== 0 && e.actor.update(r).catch((o) => console.warn("VoidVallalkozasSheet save failed", o));
    }, d = (u) => {
      var r, o, y;
      return u && (((o = (r = e.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, u)) || e.id && ((y = u.closest) == null ? void 0 : y.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var o, y, a;
      const r = ((o = u.target) == null ? void 0 : o.form) ?? ((a = (y = u.target) == null ? void 0 : y.closest) == null ? void 0 : a.call(y, "form"));
      d(r) && p(r);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  async _onDropItem(s, e) {
    var r, o, y;
    if (!this.actor) return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((o = e == null ? void 0 : e.data) == null ? void 0 : o.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && e && typeof e == "object") {
      for (const a of Object.values(e))
        if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
          t = a;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const p = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((y = n.parent) == null ? void 0 : y.id) === p.id) return;
    const f = n.toObject(), u = foundry.utils.mergeObject(f, {
      system: { ...f.system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [u]);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
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
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe. */
  async _postItemToChat(s) {
    var u, r, o;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        a > 0 && (p = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
};
X(ve, "PARTS", foundry.utils.mergeObject(
  j(ve, ve, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(ve, ve, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Vallalkozas"],
    template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs",
    width: 800,
    minWidth: 700,
    height: 600,
    form: foundry.utils.mergeObject(((Ws = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Vs = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Zs = (Js = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Js.window) == null ? void 0 : Zs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Yt = ve;
const Ui = [
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
var Ys;
const Ae = class Ae extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var r, o, y, a, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((a = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const f = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new f({
        type: "image",
        current: e.document.img || "",
        callback: (m) => {
          m && e.document.update({ img: m });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, p = (d) => {
      var f, u, r;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, r, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      p(f) && n(f);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ui, e;
  }
};
X(Ae, "PARTS", foundry.utils.mergeObject(j(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ys = j(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Ae;
var Xs;
const Fe = class Fe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var r, o, y, a, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((a = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const f = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new f({
        type: "image",
        current: e.document.img || "",
        callback: (m) => {
          m && e.document.update({ img: m });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, p = (d) => {
      var f, u, r;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, r, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      p(f) && n(f);
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
X(Fe, "PARTS", foundry.utils.mergeObject(j(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Xs = j(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !1 })
}));
let Qt = Fe;
var Qs;
const Pe = class Pe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var r, o, y, a, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((a = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const f = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new f({
        type: "image",
        current: e.document.img || "",
        callback: (m) => {
          m && e.document.update({ img: m });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, p = (d) => {
      var f, u, r;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, r, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      p(f) && n(f);
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
X(Pe, "PARTS", foundry.utils.mergeObject(j(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qs = j(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !1 })
}));
let es = Pe;
var ei;
const Ee = class Ee extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var r, o, y, a, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((a = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const f = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new f({
        type: "image",
        current: e.document.img || "",
        callback: (m) => {
          m && e.document.update({ img: m });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, p = (d) => {
      var f, u, r;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, r, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      p(f) && n(f);
    }, e._votvInput = (d) => {
      var r;
      const f = d.target;
      if ((f == null ? void 0 : f.name) === "name") return;
      const u = (f == null ? void 0 : f.form) ?? ((r = f == null ? void 0 : f.closest) == null ? void 0 : r.call(f, "form"));
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
X(Ee, "PARTS", foundry.utils.mergeObject(j(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((ei = j(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !0 })
}));
let ts = Ee;
var ti;
const $e = class $e extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var r, o, y, a, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((a = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const f = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new f({
        type: "image",
        current: e.document.img || "",
        callback: (m) => {
          m && e.document.update({ img: m });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, p = (d) => {
      var f, u, r;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, r, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      p(f) && n(f);
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
X($e, "PARTS", foundry.utils.mergeObject(j($e, $e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X($e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j($e, $e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ti = j($e, $e, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 })
}));
let ss = $e;
var si;
const xe = class xe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var r, o, y, a, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((a = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const f = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new f({
        type: "image",
        current: e.document.img || "",
        callback: (m) => {
          m && e.document.update({ img: m });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidEgyebSheet save failed", u));
    }, p = (d) => {
      var f, u, r;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, r, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      p(f) && n(f);
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
X(xe, "PARTS", foundry.utils.mergeObject(j(xe, xe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(xe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(xe, xe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((si = j(xe, xe, "DEFAULT_OPTIONS")) == null ? void 0 : si.form) ?? {}, { submitOnChange: !1 })
}));
let is = xe;
var ii, ni;
const De = class De extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, r, o, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (r = this.document) == null ? void 0 : r.name,
      "id=",
      (o = this.document) == null ? void 0 : o.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, c, l;
      try {
        const m = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && m.includes(this.element) || this.id && ((c = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", a);
        let g = null;
        try {
          g = TextEditor.getDragEventData(a);
        } catch (I) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", I);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", g), !g || g.type !== "Item") return;
        const w = ((I) => {
          var O;
          if (!I) return null;
          const _ = I.uuid ?? I.documentUuid ?? ((O = I.data) == null ? void 0 : O.uuid) ?? (typeof I == "string" ? I : null);
          if (_) return _;
          if (typeof I == "object") {
            for (const C of Object.values(I))
              if (typeof C == "string" && C.includes(".") && C.startsWith("Item.")) return C;
          }
          return null;
        })(g);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", w), !w) return;
        const k = await fromUuid(w);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", k == null ? void 0 : k.id, k == null ? void 0 : k.type), !k || k.documentName !== "Item") return;
        if (k.type === "Kepesseg" || k.type === "ability") {
          const I = k.uuid ?? k.id, _ = this.document.system ?? {}, O = Array.isArray((l = _.abilities) == null ? void 0 : l.items) ? _.abilities.items.slice() : [];
          O.push(I), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (m) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", m);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var m, h, g, v, w, k;
      a.preventDefault();
      const i = (h = (m = a.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && c && (l = ((w = game.items) == null ? void 0 : w.get(c)) ?? null), (k = l == null ? void 0 : l.sheet) == null || k.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var m, h, g, v;
      a.preventDefault();
      const i = (h = (m = a.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, l = i || c;
      l && await this._postAbilityToChat(l);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, w;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, l = Array.isArray((w = c.abilities) == null ? void 0 : w.items) ? c.abilities.items.slice() : [], m = l.indexOf(i), h = m >= 0 ? [...l.slice(0, m), ...l.slice(m + 1)] : l;
      await this.document.update({ "system.abilities.items": h });
    });
    const p = (y = t == null ? void 0 : t.querySelector) == null ? void 0 : y.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (a) => {
      a.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const d = (a) => {
      if (!a) return;
      const i = e._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, f = (a) => {
      var i, c, l;
      return a && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, a)) || e.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var c, l, m;
      const i = ((c = a.target) == null ? void 0 : c.form) ?? ((m = (l = a.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      f(i) && d(i);
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
    const f = (await Promise.all(
      p.map(async (u) => {
        var r;
        if (!u) return null;
        try {
          const o = await fromUuid(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (r = game.items) == null ? void 0 : r.get(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((u, r) => ({ doc: u, ref: p[r] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: r }) => {
      var i, c;
      const o = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((c = u.system) == null ? void 0 : c.kp) ?? 0) || 0, a = o === "species";
      return {
        id: u.id,
        ref: r,
        name: u.name,
        img: u.img,
        kind: o,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", f), e.system = t, e.abilityList = f, e;
  }
  async _postAbilityToChat(s) {
    var o, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: r,
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
      const d = e.uuid ?? e.id, f = this.document.system ?? {}, u = Array.isArray((n = f.abilities) == null ? void 0 : n.items) ? f.abilities.items.slice() : [];
      return u.push(d), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
X(De, "PARTS", foundry.utils.mergeObject(j(De, De, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(De, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(De, De, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ii = j(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ni = j(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : ni.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ns = De;
var ai, ri;
const _e = class _e extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, r;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (o) => {
      var c, l, m, h, g, v;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, a = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && a && (i = ((g = game.items) == null ? void 0 : g.get(a)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (o) => {
      var c, l, m, h;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, a = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId, i = y || a;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (o) => {
      var m, h, g;
      if (o.preventDefault(), !o.altKey) return;
      const y = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef;
      if (!y) return;
      const a = this.document.system ?? {}, i = Array.isArray((g = a.abilities) == null ? void 0 : g.items) ? a.abilities.items.slice() : [], c = i.indexOf(y), l = c >= 0 ? [...i.slice(0, c), ...i.slice(c + 1)] : i;
      await this.document.update({ "system.abilities.items": l });
    });
    const p = (r = t == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (o) => {
      o.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (o) => {
      var y, a, i;
      try {
        const c = typeof o.composedPath == "function" ? o.composedPath() : [];
        if (!(this.element && c.includes(this.element) || this.id && ((a = (y = o.target) == null ? void 0 : y.closest) == null ? void 0 : a.call(y, `#${CSS.escape(this.id)}`)))) return;
        let m = null;
        try {
          m = TextEditor.getDragEventData(o);
        } catch {
        }
        if (!m || m.type !== "Item") return;
        const g = ((w) => {
          var I;
          if (!w) return null;
          const k = w.uuid ?? w.documentUuid ?? ((I = w.data) == null ? void 0 : I.uuid) ?? (typeof w == "string" ? w : null);
          if (k) return k;
          if (typeof w == "object") {
            for (const _ of Object.values(w))
              if (typeof _ == "string" && _.includes(".") && _.startsWith("Item.")) return _;
          }
          return null;
        })(m);
        if (!g) return;
        const v = await fromUuid(g);
        if (!v || v.documentName !== "Item") return;
        if (v.type === "Kepesseg" || v.type === "ability") {
          const w = v.uuid ?? v.id, k = this.document.system ?? {}, I = Array.isArray((i = k.abilities) == null ? void 0 : i.items) ? k.abilities.items.slice() : [];
          I.push(w), await this.document.update({ "system.abilities.items": I });
        }
      } catch (c) {
        console.error("VoidHelyisegSheet global drop error", c);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), !this.isEditable) return;
    const d = (o) => {
      if (!o) return;
      const y = e._getFormDataForUpdate(o);
      Object.keys(y).length !== 0 && e.document.update(y).catch((a) => console.warn("VoidHelyisegSheet save failed", a));
    }, f = (o) => {
      var y, a, i;
      return o && (((a = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : a.call(y, o)) || e.id && ((i = o.closest) == null ? void 0 : i.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var a, i, c;
      const y = ((a = o.target) == null ? void 0 : a.form) ?? ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
      f(y) && d(y);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, p = Array.isArray(n.items) ? n.items : [], f = (await Promise.all(
      p.map(async (u) => {
        var r;
        if (!u) return null;
        try {
          const o = await fromUuid(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (r = game.items) == null ? void 0 : r.get(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((u, r) => ({ doc: u, ref: p[r] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: r }) => {
      var i, c;
      const o = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((c = u.system) == null ? void 0 : c.kp) ?? 0) || 0, a = o === "species";
      return {
        id: u.id,
        ref: r,
        name: u.name,
        img: u.img,
        kind: o,
        kpDisplay: a ? 0 : y
      };
    });
    return e.system = t, e.abilityList = f, e;
  }
  async _postAbilityToChat(s) {
    var o, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, n, p;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const d = e.uuid ?? e.id, f = this.document.system ?? {}, u = Array.isArray((n = f.abilities) == null ? void 0 : n.items) ? f.abilities.items.slice() : [];
      return u.push(d), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
X(_e, "PARTS", foundry.utils.mergeObject(j(_e, _e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
})), X(_e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(_e, _e, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ai = j(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : ai.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ri = j(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : ri.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let as = _e;
const oi = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ci(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, n, p, d, f, u;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = hi, CONFIG.Actor.dataModels.Npc = Lt, CONFIG.Actor.dataModels.Jarmu = ki, CONFIG.Actor.dataModels.Bazis = Si, CONFIG.Actor.dataModels.Vallalkozas = zi, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = _s, CONFIG.Item.dataModels.weapon = _s, CONFIG.Item.dataModels.Pancel = _i, CONFIG.Item.dataModels.MikroChip = Oi, CONFIG.Item.dataModels.Kepesseg = qs, CONFIG.Item.dataModels.ability = qs, CONFIG.Item.dataModels.Targy = qi, CONFIG.Item.dataModels.Egyeb = Li, CONFIG.Item.dataModels.Jarmuegyseg = Fi, CONFIG.Item.dataModels.Helyiseg = xi, (p = CONFIG.Actor).trackableAttributes ?? (p.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás", (f = CONFIG.Combat).initiative ?? (f.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
  const S = "systems/vacuum-of-the-void/assets/status";
  CONFIG.statusEffects = [
    { id: "dead", name: "VOTV.StatusDead", img: `${S}/dead_icon.svg` },
    { id: "unconscious", name: "VOTV.StatusUnconscious", img: `${S}/unconcious_icon.svg` },
    { id: "sleeping", name: "VOTV.StatusSleeping", img: `${S}/sleeping_icon.svg` },
    { id: "stunned", name: "VOTV.StatusStunned", img: `${S}/stunned_icon.svg` },
    { id: "fallen", name: "VOTV.StatusFallen", img: `${S}/fallen_icon.svg` },
    { id: "grappled", name: "VOTV.StatusGrappled", img: `${S}/grappled_icon.svg` },
    { id: "immobilized", name: "VOTV.StatusImmobilized", img: `${S}/immobilized_icon.svg` },
    { id: "blinded", name: "VOTV.StatusBlinded", img: `${S}/blinded_icon.svg` },
    { id: "deafened", name: "VOTV.StatusDeafened", img: `${S}/deafened_icon.svg` },
    { id: "frightened", name: "VOTV.StatusFrightened", img: `${S}/frightened_icon.svg` },
    { id: "burning", name: "VOTV.StatusBurning", img: `${S}/burning_icon.svg` },
    { id: "bleeding", name: "VOTV.StatusBleeding", img: `${S}/bleeding_icon.svg` },
    { id: "diseased", name: "VOTV.StatusDiseased", img: `${S}/diseased_icon.svg` },
    { id: "poisoned", name: "VOTV.StatusPoisoned", img: `${S}/poisoned_icon.svg` },
    { id: "invisible", name: "VOTV.StatusInvisible", img: `${S}/invisible_icon.svg` },
    { id: "drowning", name: "VOTV.StatusDrowning", img: `${S}/drowning_icon.svg` },
    { id: "intoxicated", name: "VOTV.StatusIntoxicated", img: `${S}/intoxicated_icon.svg` },
    { id: "hidden", name: "VOTV.StatusHidden", img: `${S}/hidden_icon.svg` },
    { id: "ready", name: "VOTV.StatusReady", img: `${S}/ready_icon.svg` },
    { id: "lookaround", name: "VOTV.StatusLookaround", img: `${S}/lookaraound_icon.svg` },
    { id: "dodge", name: "VOTV.StatusDodge", img: `${S}/dodge_icon.svg` },
    { id: "halfcover", name: "VOTV.StatusHalfcover", img: `${S}/halfcover_icon.svg` },
    { id: "threequarteredcover", name: "VOTV.StatusThreequarteredcover", img: `${S}/threequarteredcover_icon.svg` },
    { id: "fullcover", name: "VOTV.StatusFullcover", img: `${S}/fullcover_icon.svg` }
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Nt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Jt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Zt, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Yt, {
    types: ["Vallalkozas"],
    makeDefault: !0,
    label: "VOTV.VallalkozasSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", es, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ts, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ss, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", is, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ns, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", as, {
    types: ["Helyiseg"],
    makeDefault: !0,
    label: "VOTV.HelyisegSheet"
  });
  const s = "systems/vacuum-of-the-void/assets/blank.svg";
  Hooks.on("preCreateActor", (r, o, y) => {
    ((o == null ? void 0 : o.type) === "Bazis" || (o == null ? void 0 : o.type) === "Vallalkozas") && (o.img = s);
  }), Hooks.on("preUpdateActor", (r, o, y) => {
    ((r == null ? void 0 : r.type) === "Bazis" || (r == null ? void 0 : r.type) === "Vallalkozas") && Object.prototype.hasOwnProperty.call(o ?? {}, "img") && (o.img = s);
  }), Hooks.on("ready", () => {
    var y;
    const r = s, o = (((y = game.actors) == null ? void 0 : y.contents) ?? []).filter(
      (a) => (a.type === "Bazis" || a.type === "Vallalkozas") && (a.img ?? "").toString().trim() !== r
    );
    o.length && o.forEach((a) => a.update({ img: r }).catch(() => {
    }));
  }), Hooks.on("updateActor", (r, o, y, a) => {
    if ((r == null ? void 0 : r.type) !== "Karakter" || !(r != null && r.id)) return;
    const i = r.id;
    setTimeout(() => {
      var h, g, v, w;
      const c = (h = game.actors) == null ? void 0 : h.get(i);
      if (!c || c.type !== "Karakter") return;
      const l = Nt.getTotalSpeedRaw(c), m = (g = c.effects) == null ? void 0 : g.find((k) => k.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !m) {
        const k = ((w = (v = CONFIG.statusEffects) == null ? void 0 : v.find((I) => I.id === "immobilized")) == null ? void 0 : w.img) ?? "";
        c.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: k,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: c.uuid
        }]).then(() => {
          var _, O;
          const I = ((_ = canvas.tokens) == null ? void 0 : _.placeables) ?? [];
          for (const C of I)
            ((O = C == null ? void 0 : C.document) == null ? void 0 : O.actorId) === i && typeof C.draw == "function" && C.draw();
        }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect create failed:", I));
      } else l > 0 && m && m.delete().then(() => {
        var I, _;
        const k = ((I = canvas.tokens) == null ? void 0 : I.placeables) ?? [];
        for (const O of k)
          ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === i && typeof O.draw == "function" && O.draw();
      }).catch((k) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", k));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (r, o, y, a) => {
    var I, _, O, C, P, K, U, E, W, Z, J, Y, oe;
    const i = r == null ? void 0 : r.id;
    if (!i) return;
    if ((r.type === "Karakter" || r.type === "Npc") && ((I = o == null ? void 0 : o.system) != null && I.combat) && "initiativeResult" in o.system.combat) {
      const R = Number((O = (_ = r.system) == null ? void 0 : _.combat) == null ? void 0 : O.initiativeResult), te = Number.isFinite(R) ? R : 0, de = game.combat;
      if (de) {
        const Oe = ((C = de.combatants) == null ? void 0 : C.contents) ?? Array.from(de.combatants ?? []);
        for (const D of Oe)
          if (((P = D.actor) == null ? void 0 : P.id) === i || D.actorId === i) {
            de.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: te }]).catch(() => {
            });
            break;
          }
      }
    }
    if (r.type === "Npc" && ((K = o == null ? void 0 : o.system) != null && K.identity) && "size" in o.system.identity) {
      const R = ci((E = (U = r.system) == null ? void 0 : U.identity) == null ? void 0 : E.size);
      r.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", r.name, te));
    }
    const c = document.activeElement, l = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA" || c.isContentEditable), m = [], h = (W = game.actors) == null ? void 0 : W.get(i);
    h != null && h.apps && m.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of g) {
      if (((Z = R.document) == null ? void 0 : Z.id) !== i || ((J = R.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = R.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" && te !== "VoidVallalkozasSheet" || m.includes(R) || m.push(R);
    }
    if (l && m.some((R) => {
      const te = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return te && te.contains(c);
    })) return;
    const w = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, k = w && Date.now() - w.at < e ? w.appId : null;
    setTimeout(() => {
      for (const R of m)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== k && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (r, o, y, a) => {
    var m, h, g;
    const i = r == null ? void 0 : r.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || r.type !== "Fegyver") return;
    const c = ((m = i.system) == null ? void 0 : m.weapons) ?? {}, l = {};
    for (const [v, w] of Object.entries(c)) {
      if (!v.startsWith("slot")) continue;
      const k = ((w == null ? void 0 : w.itemId) ?? "").trim();
      !k || k !== r.id || (l[`system.weapons.${v}.name`] = r.name ?? "", l[`system.weapons.${v}.damage`] = ((h = r.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${v}.bonus`] = ((g = r.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, w, k, I, _, O, C, P, K, U, E, W, Z, J, Y, oe, R, te, de, Oe, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (v = game.messages) == null ? void 0 : v.get(n), d = (k = (w = p == null ? void 0 : p.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : k.weapon;
    if (!d) return;
    const f = d.actorId ?? ((I = p == null ? void 0 : p.speaker) == null ? void 0 : I.actor) ?? "";
    if (!f) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((_ = game.actors) == null ? void 0 : _.get(d.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(f));
    if (u || (u = ((P = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : P.flatMap((V) => {
      var se;
      return ((se = V.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === f || V.id === d.actorId))) ?? null), !u) return;
    const r = d.itemId ? ((U = (K = u.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, d.itemId)) ?? ((Z = (W = (E = u.items) == null ? void 0 : E.contents) == null ? void 0 : W.find) == null ? void 0 : Z.call(W, (x) => x.id === d.itemId)) : null;
    let o = (d.damageFormula ?? "").trim();
    if (o || (o = (((J = r == null ? void 0 : r.system) == null ? void 0 : J.damage) ?? "").trim()), !o && d.slotKey && (o = (((((Y = u.system) == null ? void 0 : Y.weapons) ?? {})[d.slotKey] ?? {}).damage ?? "").trim()), !o) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (R = game.i18n) == null ? void 0 : R.localize) == null ? void 0 : te.call(R, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(o);
    await y.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = d.targetName || "", c = d.hitLocationName || "", l = ((r == null ? void 0 : r.name) ?? (d.slotKey ? ((D = (((Oe = u.system) == null ? void 0 : Oe.weapons) ?? {})[d.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let m = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (m += ` (${c})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: u }),
      flavor: m,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var d, f, u, r, o, y;
      if (!((f = (d = e.target) == null ? void 0 : d.closest) != null && f.call(d, "#actors"))) return;
      const t = (r = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : r.call(u, "[data-document-id]"), n = (o = t == null ? void 0 : t.getAttribute) == null ? void 0 : o.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((y = game.actors) != null && y.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, d;
    const e = ((t = game.actors) == null ? void 0 : t.filter((f) => f.type === "Karakter")) ?? [];
    for (const f of e) {
      const u = Nt.getTotalSpeedRaw(f), r = (n = f.effects) == null ? void 0 : n.find((o) => o.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !r) {
        const o = ((d = (p = CONFIG.statusEffects) == null ? void 0 : p.find((y) => y.id === "immobilized")) == null ? void 0 : d.img) ?? "";
        await f.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: o,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: f.uuid
        }]).catch(() => {
        });
      } else u > 0 && r && await r.delete().catch(() => {
      });
    }
  })(), (S = game.user) != null && S.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
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
        background: { src: oi },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, d = await n.create(p);
      d && console.log("Vacuum of the Void | Default scene created:", d.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var d, f, u, r, o, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((d = game.actors) == null ? void 0 : d.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, c = ((f = i == null ? void 0 : i.bar1) == null ? void 0 : f.attribute) ?? "", l = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
        (c || l) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((r = a.tokens) == null ? void 0 : r.filter((c) => {
        var l;
        return ((l = c.actor) == null ? void 0 : l.type) === "Karakter";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(e);
        } catch (l) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, l);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, p = ((o = game.actors) == null ? void 0 : o.filter((a) => a.type === "Npc")) ?? [];
    for (const a of p)
      try {
        await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((y = a.tokens) == null ? void 0 : y.filter((c) => {
        var l;
        return ((l = c.actor) == null ? void 0 : l.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(n);
        } catch (l) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, l);
        }
    }
  })();
});
Hooks.on("preCreateToken", (S, s, e) => {
  var d, f, u, r, o, y, a, i, c;
  const t = (d = game.votv) == null ? void 0 : d._dragSourceActorId, n = t ?? S.actorId ?? ((f = S._source) == null ? void 0 : f.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (u = game.actors) == null ? void 0 : u.get(n) : S.actor ?? null;
  if (p) {
    if (p.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((o = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : o.call(r, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
    if (p.type === "Vallalkozas")
      return (a = ui == null ? void 0 : ui.notifications) == null || a.warn("Vállalkozás nem helyezhető tokenként a térképre."), !1;
    if (p.type === "Karakter") {
      S.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (p.type === "Jarmu") {
      S.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (p.type === "Npc") {
      const l = ci((c = (i = p.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: l,
        height: l
      });
    }
  }
});
Hooks.on("preCreateCombatant", (S, s, e) => {
  var p, d, f;
  const t = S.actorId ? (p = game.actors) == null ? void 0 : p.get(S.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((f = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : f.call(d, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = S.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
function Fs(S) {
  var t;
  const s = ((t = S == null ? void 0 : S.system) == null ? void 0 : t.resources) ?? {}, e = {};
  for (let n = 1; n <= 10; n++) {
    const p = `kpDot${n}`;
    Object.prototype.hasOwnProperty.call(s, p) && (e[`system.resources.${p}`] = 0);
  }
  return e;
}
function Bi(S) {
  var t;
  for (const n of ((t = game.actors) == null ? void 0 : t.contents) ?? []) {
    if (!n || n.type !== "Karakter") continue;
    const p = Fs(n);
    !p || !Object.keys(p).length || n.update(p).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, d);
    });
  }
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const n of e) {
    const p = n.actor;
    if (!p || p.type !== "Npc") continue;
    const d = Fs(p);
    !d || !Object.keys(d).length || p.update(d).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", p.name, f);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || (Bi(S), setTimeout(rs, 0));
});
function rs() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((p) => p.type === "Karakter" || p.type === "Npc")) ?? []) {
    const p = n.apps ?? [], d = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const f of d)
      !f || S.has(f.id) || (S.add(f.id), typeof f.render == "function" && f.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const p = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    p !== "Karakter" && p !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(rs, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && setTimeout(rs, 0);
});
Hooks.on("renderSidebarTab", (S, s, e) => {
  if ((S == null ? void 0 : S.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((p) => {
    p.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (S, s, e) => {
  var p;
  const t = S == null ? void 0 : S.object, n = ((p = t == null ? void 0 : t.document) == null ? void 0 : p.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const d = s[0] ?? s;
    d != null && d.classList && d.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (S, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || S.updateSource({
    width: 3840,
    height: 2160,
    "background.src": oi,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var y, a, i, c;
  const t = ((y = S.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, d = t.weaponAttack, f = t.weapon, u = t.vsDefense, r = t.vsDefenseInfo;
  if (!n && !p && !d && !u) return;
  const o = (a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, ".dice-roll");
  if (o) {
    if (n && o.classList.add(`votv-${n}`), p) {
      const l = o.querySelector(".votv-crit-label");
      if (l)
        l.textContent = p;
      else {
        const m = o.querySelector(".dice-total"), h = (m == null ? void 0 : m.parentElement) ?? o, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = p, h.appendChild(g);
      }
    }
    if (d && f && (f.actorId || (i = S.speaker) != null && i.actor)) {
      const l = o.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? o;
      if (!o.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!f.isHit, w = f.targetName || "Célpont";
        g.textContent = v ? `Találat – ${w}` : `Nem talált – ${w}`, m.appendChild(g);
      }
      if (f.isHit && !o.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const w = f.hitLocationRoll, k = f.hitLocationName;
        v.textContent = w != null && k ? `Sebzés (Találati Hely ${w} - ${k})` : "Sebzés", v.dataset.actorId = String(f.actorId ?? ((c = S.speaker) == null ? void 0 : c.actor) ?? ""), v.dataset.itemId = String(f.itemId ?? ""), v.dataset.slotKey = String(f.slotKey ?? ""), v.dataset.targetName = String(f.targetName ?? ""), v.dataset.hitLocationName = String(f.hitLocationName ?? ""), v.dataset.messageId = String(S.id ?? ""), m.appendChild(v);
      }
    }
    if (!d && u && r) {
      const l = o.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? o, h = !!r.isHit, g = r.targetName || "Célpont", v = r.hitLocationRoll, w = r.hitLocationName;
      let k = o.querySelector(".votv-defense-outcome");
      k || (k = document.createElement("div"), k.className = "votv-defense-outcome", m.appendChild(k)), k.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const I = o.querySelector(".votv-defense-hitloc");
      if (h && v != null && w) {
        let _ = I;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", m.appendChild(_)), _.textContent = `Találati Hely ${v} - ${w}`;
      } else I && I.remove();
    }
  }
});
export {
  Nt as V,
  Vt as c
};
//# sourceMappingURL=vacuum-of-the-void-CNTSdyZ1.mjs.map
