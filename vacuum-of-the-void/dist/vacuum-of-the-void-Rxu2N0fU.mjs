var di = Object.defineProperty;
var mi = Object.getPrototypeOf;
var pi = Reflect.get;
var fi = (I, s, e) => s in I ? di(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var X = (I, s, e) => fi(I, typeof s != "symbol" ? s + "" : s, e);
var R = (I, s, e) => pi(mi(I), e, s);
const { HTMLField: yi, NumberField: F, SchemaField: H, StringField: q, BooleanField: me, ArrayField: qt } = foundry.data.fields;
class Nt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new H({
        name: new q({ required: !1, blank: !0, initial: "" }),
        player: new q({ required: !1, blank: !0, initial: "" }),
        level: new F({ required: !1, integer: !0, min: 1, initial: 1 }),
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
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new H({
          head: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
          }),
          torso: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
          }),
          arms: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
          }),
          legs: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new me({ required: !1, initial: !1 }),
            box2: new me({ required: !1, initial: !1 }),
            box3: new me({ required: !1, initial: !1 })
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
        speedUnit: new q({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new F({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new qt(
          new H({
            min: new F({ required: !1, integer: !0, initial: 0 }),
            max: new F({ required: !1, integer: !0, initial: 0 }),
            kp: new F({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        ),
        /** Általános veszélyeztetettség szint (Bázis lap használja, de bármely actor tárolhatja). */
        threat: new F({ required: !1, integer: !1, initial: 0 }),
        /** Veszélyeztetettség kézi módosító (Bázis lap: readonly automata érték + írható bónusz). */
        threatBonus: new F({ required: !1, integer: !1, initial: 0 })
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
        quickThinking1: new q({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new q({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new q({ required: !1, blank: !0, initial: "" }),
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
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
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
const { NumberField: Ut, SchemaField: gi } = foundry.data.fields;
class hi extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new gi({
        body: new Ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: bi, StringField: Is, NumberField: vi } = foundry.data.fields;
class ki extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new bi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new Is({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new Is({ required: !1, blank: !0, initial: "" }),
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
const { SchemaField: wi, StringField: Ss, NumberField: Ii } = foundry.data.fields;
class Si extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new wi({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new Ss({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new Ss({ required: !1, blank: !0, initial: "" }),
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
class Ts extends foundry.abstract.TypeDataModel {
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
const { BooleanField: Di, StringField: Rt } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Di({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Rt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Rt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Rt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Rt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Bt, StringField: Ds } = foundry.data.fields;
class _i extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ds({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ds({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Bt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Bt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Bt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ci, StringField: Os } = foundry.data.fields;
class _s extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Os({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new Os({
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
const { StringField: Cs } = foundry.data.fields;
class qi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Cs({ required: !1, blank: !0, initial: "" }),
      quantity: new Cs({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Li } = foundry.data.fields;
class Ni extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Li({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ht, StringField: pt, SchemaField: qs, ArrayField: Fi } = foundry.data.fields;
class Ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ht({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new qs({
        max: new Ht({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new Ht({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new qs({
        items: new Fi(
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
const { NumberField: Ei, StringField: Mt, SchemaField: Pi, ArrayField: $i } = foundry.data.fields;
class xi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ei({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Pi({
        items: new $i(
          new Mt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Raktár (szabad szöveg, opcionális; a Bázis raktárkapacitás összegéhez). */
      storage: new Mt({ required: !1, blank: !0, initial: "" }),
      /** Veszély (opcionális, pl. +15%). */
      veszely: new Mt({ required: !1, blank: !0, initial: "" }),
      /** Cépont szám (szabad szöveg, opcionális; a Bázis táblázatban). */
      hit: new Mt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { SchemaField: Gt, StringField: Ce, NumberField: je, ArrayField: Ls } = foundry.data.fields;
class zi extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vallalkozas: new Gt({
        /** Vállalkozás fajtája (Szolgáltatások, Gyártás, Milícia). */
        kind: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Vállalkozás szintje (legalább 1). */
        level: new je({ required: !1, integer: !0, min: 1, initial: 1 }),
        /** Alkalmazottak aktuális száma. */
        employeesCurrent: new je({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Alkalmazottak maximuma. */
        employeesMax: new je({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Szint által adott bónuszok (szabad szöveg). */
        levelBonuses: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás típusa (Szolgáltatások fajtánál). */
        servicesType: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás bevétel / idő: numerikus rész (cr). */
        servicesIncomeAmount: new je({ required: !1, integer: !1, initial: 0 }),
        /** Szolgáltatás bevétel / idő: időegység szövege (pl. nap, hét, hónap). */
        servicesIncomePeriod: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Marketing típusa (Szolgáltatások fajtánál). */
        marketingType: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Marketing ára / hét (cr). */
        marketingCostPerWeek: new je({ required: !1, integer: !1, initial: 0 }),
        /** Marketing profit (%). */
        marketingProfitPercent: new je({ required: !1, integer: !1, initial: 0 }),
        /** Alkalmazottak táblázat: Típus, Szint, Szám, Bónusz. */
        employees: new Ls(
          new Gt({
            type: new Ce({ required: !1, blank: !0, initial: "" }),
            level: new je({ required: !1, integer: !0, min: 0, initial: 0 }),
            count: new je({ required: !1, integer: !0, min: 0, initial: 0 }),
            bonus: new Ce({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        /** Gyártási specializáció (Gyártás fajtánál). */
        manufacturingSpecialization: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Gyártható dolgok listája (többsoros szabad szöveg). */
        manufacturingProducts: new Ce({ required: !1, blank: !0, initial: "" }),
        /** Gyártósor táblázat: Gyártott Termék, Szám, Gyártási Idő. */
        productionLines: new Ls(
          new Gt({
            product: new Ce({ required: !1, blank: !0, initial: "" }),
            count: new je({ required: !1, integer: !0, min: 0, initial: 0 }),
            time: new Ce({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      })
    };
  }
}
function Vt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let a = !1;
  const y = (o, i = 1) => {
    if (!Array.isArray(o)) return;
    let c = i;
    for (const l of o) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        y(l.terms, c);
        continue;
      }
      if (typeof l.operator == "string") {
        c = l.operator === "-" ? -1 : 1;
        continue;
      }
      const m = typeof l.faces == "number" ? l.faces : void 0, h = Array.isArray(l.results) ? l.results : null;
      if (!m || !h || m === 8 || m !== 6) continue;
      const g = !a && c >= 0 && (l.number === 3 || l.number === "3") ? (a = !0, s) : c >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && g.push(k);
      }
    }
  };
  y(I.terms, 1);
  const d = s.filter((o) => o === 6).length, f = s.filter((o) => o === 1).length, u = e.filter((o) => o === 6).length, n = t.filter((o) => o === 6).length, r = d + u, p = f + n;
  return r > 0 && r === p ? { resultType: null, label: null } : r >= 3 ? { resultType: "critical", label: "Brutális Siker" } : r === 2 ? { resultType: "critical", label: "Kritikus Siker" } : p >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : p === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ri(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Fs, As, Es, Ps;
const Q = class Q extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var a, y, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
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
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const y = this.element, d = this.form ?? this.element;
    let f = { scrollState: {}, focus: null };
    if (y) {
      f.scrollState = this._saveScrollState(y);
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
    const n = this.element, r = this.form ?? this.element, p = f.scrollState, o = f.focus, i = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(n, p), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const g = ((m = r.querySelector) == null ? void 0 : m.call(r, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (h = r.querySelector) == null ? void 0 : h.call(r, `[name="${CSS.escape(o.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = o.selectionStart ?? 0, g.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(n, p);
    };
    return (i || o) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const y = Math.floor(a / 3), d = Math.floor(2 * a / 3);
    return t <= y ? 1 : t <= d ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, y;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (d) => {
        var f;
        return d.type === "Pancel" && ((f = d.system) == null ? void 0 : f.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const f = String(((y = d.system) == null ? void 0 : y.speedPenalty) ?? "").trim().replace(",", "."), u = Number(f);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, a, y;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (d) => {
        var f;
        return d.type === "Pancel" && ((f = d.system) == null ? void 0 : f.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const f = String(((y = d.system) == null ? void 0 : y.protectionBonus) ?? "").trim().replace(",", "."), u = Number(f);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var a, y;
    const e = (((a = s == null ? void 0 : s.items) == null ? void 0 : a.contents) ?? []).filter(
      (d) => {
        var f;
        return d.type === "Pancel" && ((f = d.system) == null ? void 0 : f.equipped) === !0;
      }
    );
    let t = 0;
    for (const d of e) {
      const f = String(((y = d.system) == null ? void 0 : y.speedPenalty) ?? "").trim().replace(",", "."), u = Number(f);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var r, p, o, i, c, l, m, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((p = (r = e.hitLocations) == null ? void 0 : r.legs) == null ? void 0 : p.value) ?? 0, a = ((o = e.currentHealth) == null ? void 0 : o.legs) ?? 0, y = Q._healthStatusFromRatio(a, t);
    if (y === 0) return 0;
    const d = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let f;
    y === 1 ? f = -6 : y === 2 ? f = -3 : f = d, f += Q._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((m = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : m.speed) ?? 0) || 0, n = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return u + n + (Number.isFinite(f) ? f : 0);
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
    var p, o, i, c, l, m, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element;
    let t = (p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const a = ((m = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : m.resources) ?? {}, y = ((g = (h = a.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, d = ((v = a.currentHealth) == null ? void 0 : v.legs) ?? 0, f = Q._healthStatusFromRatio(d, y), u = Number(((T = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : T.givenSpeed) ?? 0) || 0;
    let n;
    f === 0 ? n = 0 : f === 1 ? n = -6 : f === 2 ? n = -3 : n = u;
    const r = this._getTotalArmorSpeedPenalty();
    n += r, t.textContent = String(n);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var n, r, p, o, i, c, l, m, h, g, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = Number(((o = (p = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : p.combat) == null ? void 0 : o.givenProtection) ?? 0) || 0, y = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, d = (g = (h = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, f = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, u = a + this._getTotalArmorProtectionBonus() + y + d + f;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (p) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, p)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${p}`) : null);
    }, a = t(".karakter-total-defense-effective"), y = t(".karakter-given-defense-effective"), d = t('input[name="system.combat.defense"]'), f = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const u = Number(d == null ? void 0 : d.value) || 0, n = Number(f == null ? void 0 : f.value) || 0, r = Number(y == null ? void 0 : y.textContent) || 0;
    a.textContent = String(u + n + r);
  }
  _writeTotalSpeed(s = null) {
    var l, m, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element, t = (O) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, O)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${O}`) : null);
    }, a = t(".karakter-total-speed-effective"), y = t(".karakter-given-speed-effective"), d = t('input[name="system.combat.speed"]'), f = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    if ((h = (m = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : m.has) != null && h.call(m, "immobilized")) {
      a.textContent = "0";
      return;
    }
    const u = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, n = ((w = (k = u.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, r = ((T = u.currentHealth) == null ? void 0 : T.legs) ?? 0;
    if (Q._healthStatusFromRatio(r, n) === 0) {
      a.textContent = "0";
      return;
    }
    const o = Number(d == null ? void 0 : d.value) || 0, i = Number(f == null ? void 0 : f.value) || 0, c = Number(y == null ? void 0 : y.textContent) || 0;
    a.textContent = String(o + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var d, f, u, n;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((d = this.actor.system) == null ? void 0 : d.resources) ?? {}, a = ((u = (f = t.hitLocations) == null ? void 0 : f[e]) == null ? void 0 : u.value) ?? 0, y = ((n = t.currentHealth) == null ? void 0 : n[e]) ?? 0;
    return Q._healthStatusFromRatio(y, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var f, u, n, r;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((f = s == null ? void 0 : s.system) == null ? void 0 : f.resources) ?? {}, y = ((n = (u = a.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : n.value) ?? 0, d = ((r = a.currentHealth) == null ? void 0 : r[t]) ?? 0;
    return Q._healthStatusFromRatio(d, y);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et, S, P, x, G, ke, ne, Le, Oe, we, Re, tt, st, Pt, $t, xt, zt, Ot, dt, as, rs, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs, bs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, y = a.hitLocations ?? {}, d = a.currentHealth ?? {}, f = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of f) {
      const N = ((bt = y[b]) == null ? void 0 : bt.value) ?? 0, L = d[b] ?? 0;
      e.computedHealthStatus[b] = Q._healthStatusFromRatio(L, N);
    }
    const u = (Number(d.head) || 0) === 0, r = ["torso", "arms", "legs"].filter((b) => (Number(d[b]) || 0) === 0).length;
    e.showDeathSkull = u || r >= 2;
    const p = e.computedHealthStatus.legs ?? 3, o = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    p === 0 ? i = 0 : p === 1 ? i = -6 : p === 2 ? i = -3 : i = o;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const l = Number(((It = (wt = this.actor.system) == null ? void 0 : wt.combat) == null ? void 0 : It.givenProtection) ?? 0) || 0, m = (Tt = (Qe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Qe.has) != null && Tt.call(Qe, "lookaround") ? 1 : 0, h = (S = (et = (Dt = this.actor) == null ? void 0 : Dt.statuses) == null ? void 0 : et.has) != null && S.call(et, "halfcover") ? 3 : 0, g = (G = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && G.call(x, "threequarteredcover") ? 6 : 0, v = l + this._getTotalArmorProtectionBonus() + m + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let T = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    p === 0 && (T = 0), (Oe = (Le = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Le.has) != null && Oe.call(Le, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Re = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : Re.givenProtection } },
      { inplace: !1 }
    ), T = 0), e.totalSpeed = T;
    const O = Q.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(O)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = L, e.skillDisabled[b] = L === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), K = j ? j.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], U = (tt = this.actor.system.gear) == null ? void 0 : tt.microchips, M = U && typeof U == "object" && !Array.isArray(U) ? U : {}, W = (((st = M.slot1) == null ? void 0 : st.itemId) ?? "").trim(), Z = (((Pt = M.slot2) == null ? void 0 : Pt.itemId) ?? "").trim(), J = ((($t = M.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, A = typeof N.sort == "number" ? N.sort : 0;
      return L - A;
    }).map((b) => {
      var Me, nt, at, We, Je, _t;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let A = 0, B = "", ue = null;
      for (let mt = 0; mt < K.length; mt++) {
        const Ct = K[mt];
        if ((((Me = _[Ct]) == null ? void 0 : Me.itemId) ?? "") === b.id) {
          A = mt + 1, B = ((nt = _[Ct]) == null ? void 0 : nt.bonus) ?? "", ue = Ct;
          break;
        }
      }
      let re = null;
      L && (W === b.id ? re = "slot1" : Z === b.id ? re = "slot2" : J === b.id && (re = "slot3"));
      const it = N && ((at = b.system) != null && at.damage) ? b.system.damage : "", Ie = N && typeof ((We = b.system) == null ? void 0 : We.range) == "string" ? (b.system.range || "").trim() : "", _e = ue ? Number((Je = _[ue]) == null ? void 0 : Je.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: N,
        slotAssignment: A,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: re,
        isEquipped: !!(ue || re),
        damage: it,
        rangeStr: Ie,
        slotBonusNum: _e,
        quantity: Number(((_t = b.system) == null ? void 0 : _t.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const z = (((xt = this.actor.items) == null ? void 0 : xt.contents) ?? []).filter((b) => b.type === "Fegyver"), te = z.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", De = K.filter((b) => {
      const L = ((_[b] ?? {}).itemId ?? "").trim();
      return L ? !!z.find((B) => B.id === L) : !1;
    });
    e.weaponSlots = De.map((b, N) => {
      const L = _[b] ?? {}, A = (L.itemId ?? "").trim(), B = te.find((_e) => _e.id === A), ue = z.find((_e) => _e.id === A), re = (ue == null ? void 0 : ue.system) ?? {}, it = re.size === "thrown", Ie = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: A,
        slotNum: N + 1,
        displayName: (B == null ? void 0 : B.name) || L.name || de,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: it,
        rangeStr: Ie
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, E = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = z.map((b) => {
      var vs, ks, ws;
      const N = b.id;
      let L = null, A = {};
      for (const Kt of K)
        if ((((vs = _[Kt]) == null ? void 0 : vs.itemId) ?? "").trim() === N) {
          L = Kt, A = _[Kt] ?? {};
          break;
        }
      const B = !!L, ue = ((ks = b.system) == null ? void 0 : ks.equipped) !== void 0 && ((ws = b.system) == null ? void 0 : ws.equipped) !== null ? !!b.system.equipped : B, re = (b == null ? void 0 : b.system) ?? {}, it = typeof re.range == "string" ? (re.range || "").trim() : "", Ie = re.type ?? "", _e = (D[Ie] ?? Ie) || "—", Me = re.size ?? "", nt = (E[Me] ?? Me) || "", at = [_e, nt].filter(Boolean).join(", ") || _e || "—", We = Ie === "projectile" || Me === "thrown", Je = re.quantity, _t = Je != null ? String(Je).trim() : "1", mt = String(A.bonus ?? "").trim(), Ct = String(re.bonus ?? "").trim(), li = mt || Ct || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? de,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: li,
        damage: A.damage ?? re.damage ?? "",
        rangeStr: it || "—",
        typeLabel: _e,
        typeAndSize: at,
        quantity: _t,
        quantityDisplay: We ? _t : "—",
        isProjectile: We,
        equipped: ue,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const V = (((zt = this.actor.items) == null ? void 0 : zt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = V.map((b) => {
      var A, B;
      const N = (b == null ? void 0 : b.system) ?? {}, L = ((A = b.system) == null ? void 0 : A.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: Ri((N.level ?? "").toString().trim()),
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: L
      };
    });
    const se = (((Ot = this.actor.items) == null ? void 0 : Ot.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = se.map((b) => {
      const N = (b == null ? void 0 : b.system) ?? {}, L = (N.description ?? "").trim(), A = L ? L.length > 60 ? L.slice(0, 57) + "…" : L : "—", B = N.quantity != null ? String(N.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: B,
        description: A
      };
    });
    const le = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = le.map((b) => {
      const L = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), A = L ? L.length > 80 ? L.slice(0, 77) + "…" : L : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: A
      };
    });
    const pe = (((as = this.actor.items) == null ? void 0 : as.contents) ?? []).filter((b) => b.type === "MikroChip"), ae = pe.map((b) => ({ id: b.id, name: b.name, img: b.img })), ve = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (b) => {
      var L, A, B;
      const N = [];
      return b !== 1 && N.push((((L = M.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((A = M.slot2) == null ? void 0 : A.itemId) ?? "").trim()), b !== 3 && N.push((((B = M.slot3) == null ? void 0 : B.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((b) => !fe(1).includes(b.id)), e.microchipItemsSlot2 = ae.filter((b) => !fe(2).includes(b.id)), e.microchipItemsSlot3 = ae.filter((b) => !fe(3).includes(b.id)), e.microchipSlots = ce.map((b) => {
      const N = M[b] ?? {}, L = (N.itemId ?? "").trim(), A = pe.find((B) => B.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (A == null ? void 0 : A.name) || N.name || ve,
        img: (A == null ? void 0 : A.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = M[N] ?? {}, A = (L.itemId ?? "").trim(), B = ae.find((ue) => ue.id === A);
      e[`microchip${b}ItemId`] = A, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || L.name || ve, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((b) => {
      var Me, nt, at, We;
      const N = b.id;
      let L = null;
      for (const Je of ce)
        if ((((Me = M[Je]) == null ? void 0 : Me.itemId) ?? "").trim() === N) {
          L = Je;
          break;
        }
      const A = !!L, B = ((nt = b == null ? void 0 : b.system) == null ? void 0 : nt.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", it = Number((at = b == null ? void 0 : b.system) == null ? void 0 : at.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Ie = (((We = b == null ? void 0 : b.system) == null ? void 0 : We.description) ?? "").trim(), _e = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ue,
        description: _e,
        kp: it,
        isActive: re,
        slotKey: L ?? "",
        equipped: A
      };
    });
    const Ke = (((rs = e.weaponsTable) == null ? void 0 : rs.length) ?? 0) > 0 || (((os = e.armorTable) == null ? void 0 : os.length) ?? 0) > 0 || (((cs = e.microchipsTable) == null ? void 0 : cs.length) ?? 0) > 0 || (((ls = e.itemsTable) == null ? void 0 : ls.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ke;
    const Ue = this.actor.system.abilities ?? {}, xe = (((us = this.actor.items) == null ? void 0 : us.contents) ?? []).map((b) => {
      var N, L, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = b.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), Be = new Map(xe.map((b) => [b.id, b])), ot = "— Nincs képesség —", He = (b) => {
      const N = Ue[b] ?? {}, L = (N.itemId ?? "").trim(), A = L ? Be.get(L) : null, B = (A == null ? void 0 : A.description) ?? "", ue = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: L,
        displayName: (A == null ? void 0 : A.name) || N.name || ot,
        img: (A == null ? void 0 : A.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = He("faji"), e.abilityHatterSlot = He("hatter");
    const Ye = (b) => {
      const N = Ue[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Ge = (b) => b.map((N) => {
      const L = Be.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ge(Ye("passive")), e.abilityActiveList = Ge(Ye("active"));
    const ct = ((ds = e.system) == null ? void 0 : ds.resources) ?? {}, ee = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ye = (ps = (ms = e.system) == null ? void 0 : ms.combat) == null ? void 0 : ps.initiativeResult, ie = typeof ye == "number" ? ye : -1, lt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ze = (ys = (fs = e.system) == null ? void 0 : fs.combat) == null ? void 0 : ys.initiativeRanges, qe = Array.isArray(ze) ? ze.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Ve = (qe.length > 0 ? qe : lt).slice().sort((b, N) => b.min - N.min), Xe = qe.map((b) => b.min), Ft = Xe.length ? Math.min(...Xe) : 0, At = Xe.length ? Math.max(...Xe) : 0;
    e.initiativeRanges = qe.map((b) => ({ ...b, isFirst: b.min === Ft, isLast: b.min === At }));
    let ft = 0;
    if (typeof ie == "number" && ie >= 0 && Ve.length > 0) {
      const b = Ve[0], N = Ve[Ve.length - 1];
      let L = null;
      ie <= b.max ? L = b : ie >= N.min ? L = N : L = Ve.find((A) => ie >= A.min && ie <= A.max), L && (ft = L.kp);
    }
    e.kpDots = ee.map((b, N) => {
      const L = N + 1, A = !!Number(ct[b]), B = L <= ft;
      return { index: L, used: A, usable: B };
    });
    const Et = !!((hs = (gs = game.combat) == null ? void 0 : gs.combatants) != null && hs.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = Et, e.canEditInitiative = !!((bs = game.user) != null && bs.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var p, o;
    super._attachFrameListeners(s);
    const e = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-BB-plTy5.mjs");
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
      const { openRollSheetForSkill: c } = await import("./roll-sheet-BB-plTy5.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, l = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const m = `system.resources.kpDot${l}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${l}`]);
      await this.actor.update({ [m]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const a = (i) => {
      var m;
      const c = i ? i.currentTarget : (m = e.querySelector) == null ? void 0 : m.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const y = (o = e.querySelector) == null ? void 0 : o.call(e, 'input[name="system.resources.stress.value"]');
    y && a({ currentTarget: y });
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
      const c = i.currentTarget, l = c.dataset.skill, m = ((g = c.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-BB-plTy5.mjs");
      h(this.actor, l, m);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, T, O, _, C, j;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), m = l == null ? void 0 : l.dataset.slot;
      if (!m) return;
      const g = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[m]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const v = ((O = (T = this.actor.items).get) == null ? void 0 : O.call(T, g)) ?? ((C = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : C.call(_, (K) => K.id === g));
      (j = v == null ? void 0 : v.sheet) == null || j.render(!0);
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
        const v = m.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((_) => w.includes(_)) : [], O = T.find((_) => {
          var C;
          return (((C = v[_]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (O) {
          const _ = T.filter((C) => C !== O);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${O}.itemId`] = "", g[`system.weapons.${O}.name`] = "", g[`system.weapons.${O}.damage`] = "", g[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var O, _;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], w = k.find((C) => {
        var j;
        return (((j = h[C]) == null ? void 0 : j.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (w) return;
        let C = k.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const j = new Set(k);
        if (!C) {
          const K = v.find((U) => !j.has(U));
          if (!K) return;
          C = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${C}.damage`]: ((O = m == null ? void 0 : m.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (w) {
        const C = k.filter((j) => j !== w);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
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
      const g = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (c.dataset.itemImg ?? "").trim(), w = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = v);
      let T = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      k ? (T || (T = document.createElement("img"), T.className = "karakter-microchip-slot-thumb", T.alt = "", m == null || m.insertBefore(T, w)), T.src = k, T.style.display = "") : T && T.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const O = g ? this.actor.items.get(g) : null, _ = {
        [`system.gear.microchips.${h}.itemId`]: g,
        [`system.gear.microchips.${h}.name`]: (O == null ? void 0 : O.name) ?? ""
      };
      g && (_[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, k;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const m = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = m[w]) == null ? void 0 : T.itemId) ?? "").trim() === c;
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
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((v = m[c]) == null ? void 0 : v.items) ? m[c].items.slice() : []).filter((k) => k !== l);
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
      var O, _;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const m = this.actor.items.get(l);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], w = k.find((C) => {
        var j;
        return (((j = h[C]) == null ? void 0 : j.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (w) return;
        let C = k.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const j = new Set(k);
        if (!C) {
          const K = v.find((U) => !j.has(U));
          if (!K) return;
          C = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: m.name ?? "",
          [`system.weapons.${C}.damage`]: ((O = m.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((_ = m.system) == null ? void 0 : _.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (w) {
        const C = k.filter((j) => j !== w);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const m = this.actor, h = m.items.get(l), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = m.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((_) => w.includes(_)) : [], O = T.find((_) => {
          var C;
          return (((C = v[_]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (O) {
          const _ = T.filter((C) => C !== O);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${O}.itemId`] = "", g[`system.weapons.${O}.name`] = "", g[`system.weapons.${O}.damage`] = "", g[`system.weapons.${O}.bonus`] = "";
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
    const u = this, n = (i) => {
      var m, h, g, v;
      if (!i) return;
      const c = u._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((h = (m = c.system) == null ? void 0 : m.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(c).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, r = (i) => {
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
      if (!r(m)) return;
      const h = i.relatedTarget;
      h && (m.contains(h) || u.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), n(m));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var f, u, n;
    const e = {};
    for (const r of s.elements) {
      if (!r.name || r.disabled || r.type === "radio" && !r.checked || r.name.startsWith("system.resources.healthStatus.")) continue;
      let p;
      r.type === "checkbox" ? p = r.checked : r.type === "number" ? p = r.value === "" ? 0 : Number(r.value) : p = r.value ?? "", foundry.utils.setProperty(e, r.name, p);
    }
    const t = foundry.utils.mergeObject(
      ((f = this.actor.system) == null ? void 0 : f.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), a = t.hitLocations ?? {}, y = t.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    for (const r of d) {
      const p = ((n = a[r]) == null ? void 0 : n.value) ?? 0, o = y[r] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${r}`, Q._healthStatusFromRatio(o, p));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, y, d, f, u, n, r, p, o, i, c, l, m;
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
          if (((a = g.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const _ = foundry.utils.mergeObject(g.toObject(), { type: "Kepesseg" });
            v = ((y = (await this.actor.createEmbeddedDocuments("Item", [_]))[0]) == null ? void 0 : y.id) ?? v;
          }
          const k = (((d = g.system) == null ? void 0 : d.kind) ?? "passive").toString();
          if (k === "module") {
            (u = (f = ui.notifications) == null ? void 0 : f.warn) == null || u.call(f, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
            return;
          }
          const w = this.actor.system.abilities ?? {};
          if (k === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": v,
              "system.abilities.faji.name": g.name
            });
            return;
          }
          if (k === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": v,
              "system.abilities.hatter.name": g.name
            });
            return;
          }
          const T = k === "active" ? "active" : "passive", O = Array.isArray((n = w[T]) == null ? void 0 : n.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          O.includes(v) || O.push(v), await this.actor.update({ [`system.abilities.${T}.items`]: O });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((r = e.data) == null ? void 0 : r.uuid) ?? (typeof e == "string" ? e : null);
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
          const v = this.actor, k = ((p = g.parent) == null ? void 0 : p.id) !== v.id;
          let w = g.id;
          if (k) {
            const T = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            w = ((o = (await v.createEmbeddedDocuments("Item", [T]))[0]) == null ? void 0 : o.id) ?? w;
          }
          if (k) {
            const T = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, O = (T.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = O ? O.split(/\s*,\s*/).filter((K) => _.includes(K)) : [], j = C.filter((K) => {
              var U;
              return (((U = T[K]) == null ? void 0 : U.itemId) ?? "").trim() === w;
            });
            if (j.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((M) => !j.includes(M)).join(",")
              };
              for (const M of j)
                U[`system.weapons.${M}.itemId`] = "", U[`system.weapons.${M}.name`] = "", U[`system.weapons.${M}.damage`] = "", U[`system.weapons.${M}.bonus`] = "";
              await v.update(U);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const v = this.actor;
          if (((c = g.parent) == null ? void 0 : c.id) !== v.id) {
            const k = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            await v.createEmbeddedDocuments("Item", [k]);
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
    var y, d, f;
    const t = ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (f = s.currentTarget) == null || f.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var f, u, n, r, p, o;
    s.preventDefault(), s.stopPropagation(), (f = s.currentTarget) == null || f.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const y = await fromUuid(a.uuid);
    if (!y || y.type !== "Fegyver") return;
    if (((r = y.parent) == null ? void 0 : r.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(y.toObject(), { system: { ...y.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const d = y.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: d,
      [`system.weapons.${e}.name`]: y.name,
      [`system.weapons.${e}.damage`]: ((p = y.system) == null ? void 0 : p.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((o = y.system) == null ? void 0 : o.bonus) ?? ""
    }), await y.update({ "system.equipped": !0 });
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
    var n, r;
    s.preventDefault(), (n = s.currentTarget) == null || n.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((r = s.dataTransfer) == null ? void 0 : r.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const y = this.actor.items.contents.slice().sort((p, o) => {
      const i = typeof p.sort == "number" ? p.sort : 0, c = typeof o.sort == "number" ? o.sort : 0;
      return i - c;
    }).map((p) => p.id), d = y.indexOf(t), f = y.indexOf(e);
    if (d === -1 || f === -1) return;
    y.splice(d, 1), y.splice(f, 0, t);
    const u = y.map((p, o) => ({
      _id: p,
      sort: (o + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(s) {
    var a, y, d;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
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
    const a = t.scrollWidth;
    document.body.removeChild(t), s.style.width = `${Math.max(e, a)}px`;
  }
  async _postItemToChat(s) {
    var u, n, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let a, y = "";
    if (e.type === "MikroChip") {
      const p = ((n = e.system) == null ? void 0 : n.abilityType) ?? "passive";
      if (a = (p === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", p === "active") {
        const o = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        o > 0 && (y = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${y}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var r, p, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", a = Number(((p = e.system) == null ? void 0 : p.kp) ?? 0) || 0, y = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", f = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", u = y ? `<p>${y}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var a, y;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((y = s.dataTransfer) == null ? void 0 : y.getData("application/json")) || "";
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
    var d, f, u;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let y = a.id;
    if (((f = a.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      y = ((u = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : u.id) ?? y;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: y,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var u, n, r, p;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let y = a.id;
    if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
      const o = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      y = ((r = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : r.id) ?? y;
    }
    const d = this.actor.system.abilities ?? {}, f = Array.isArray((p = d[e]) == null ? void 0 : p.items) ? d[e].items.slice() : Array.isArray(d[e]) ? d[e].slice() : [];
    f.includes(y) || f.push(y), await this.actor.update({ [`system.abilities.${e}.items`]: f });
  }
  _onMicrochipSlotDragOver(s, e) {
    var y, d, f;
    const t = ((y = s.dataTransfer) == null ? void 0 : y.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (f = s.currentTarget) == null || f.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var f, u, n, r, p;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((n = s.dataTransfer) == null ? void 0 : n.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const y = await fromUuid(a.uuid);
    if (!y || y.type !== "MikroChip") return;
    let d = y.id;
    ((r = y.parent) == null ? void 0 : r.id) !== this.actor.id && (d = ((p = (await this.actor.createEmbeddedDocuments("Item", [y.toObject()]))[0]) == null ? void 0 : p.id) ?? d), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: d,
      [`system.gear.microchips.${e}.name`]: y.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let y = Number(a) || 0;
    const d = this._getSkillHealthStatus(s);
    d === 1 ? y -= 6 : d === 2 && (y -= 3);
    const u = `3d6${y !== 0 ? y > 0 ? `+${y}` : `${y}` : ""}`, n = new Roll(u);
    await n.evaluate({ async: !0 });
    const { resultType: r, label: p } = Vt(n), o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return n.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: r, critLabel: p } },
      rollMode: o
    });
  }
  async _rollMorale() {
    var y;
    const s = Number(((y = this.actor.system.resources) == null ? void 0 : y.morale) ?? 0) || 0;
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
  async _rollInitiative() {
    var d;
    const s = Number(((d = this.actor.system.skills) == null ? void 0 : d.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, a = new Roll(t);
    await a.evaluate({ async: !0 });
    const y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: y
    });
  }
  async _rollWeapon(s) {
    var k, w;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, y = this.actor.items.filter((T) => T.type === "Fegyver");
    let d = null;
    t.itemId && (d = y.find((T) => T.id === t.itemId) ?? null);
    const f = d && d.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, n = ((k = d == null ? void 0 : d.system) == null ? void 0 : k.type) || "kinetic", r = (((w = d == null ? void 0 : d.system) == null ? void 0 : w.skillKey) ?? "").trim(), p = r && a[r] !== void 0 ? r : n === "explosive" ? "grenadeUse" : "firearms", o = Number(a[p] || 0) || 0, i = u + o, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, m = new Roll(l);
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
    var u, n, r, p, o, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    let a = ((n = (u = t.items).get) == null ? void 0 : n.call(u, s)) ?? ((p = (r = t.items.contents) == null ? void 0 : r.find) == null ? void 0 : p.call(r, (g) => g.id === s));
    if (!a || a.type !== "Fegyver") return;
    let y = (((o = a.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!y && e && (y = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !y) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(y);
    await d.evaluate({ async: !0 });
    const f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: f
    });
  }
};
X(Q, "PARTS", foundry.utils.mergeObject(
  R(Q, Q, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(Q, Q, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Fs = R(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((As = R(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : As.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ps = (Es = R(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Es.window) == null ? void 0 : Ps.contentClasses) ?? [],
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
let Lt = Q;
function Mi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var $s, xs, zs, Rs;
const ge = class ge extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, y, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
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
    let y = { scrollState: {}, focus: null };
    if (t) {
      y.scrollState = this._saveScrollState(t);
      const i = document.activeElement, c = a.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && l && (y.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), f = this.element, u = this.form ?? this.element, n = y.scrollState, r = y.focus, p = typeof (n == null ? void 0 : n.formScrollTop) == "number" || typeof (n == null ? void 0 : n.windowScrollTop) == "number", o = () => {
      var i, c;
      if (this._applyScrollState(f, n), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const l = ((i = u.querySelector) == null ? void 0 : i.call(u, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (c = u.querySelector) == null ? void 0 : c.call(u, `[name="${CSS.escape(r.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = r.selectionStart ?? 0, l.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(f, n);
    };
    return (p || r) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), d;
  }
  async _prepareContext(s) {
    var He, Ye, Ge, ct, ee, ye, ie, lt, ze, qe, ut, Ve, Xe, Ft, At, ft, Et, yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((He = this.actor) == null ? void 0 : He.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, y = Number(a.givenProtection ?? 0) || 0, d = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, f = (lt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && lt.call(ie, "halfcover") ? 3 : 0, u = (qe = (ze = t == null ? void 0 : t.statuses) == null ? void 0 : ze.has) != null && qe.call(ze, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = y + d + f + u;
    const n = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], r = ((Ve = t == null ? void 0 : t.system) == null ? void 0 : Ve.weapons) ?? {}, p = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], o = (r.slotOrder ?? "").trim(), i = o ? o.split(/\s*,\s*/).filter((S) => p.includes(S)) : [], c = n.filter((S) => S.type === "Fegyver"), l = c.map((S) => ({ id: S.id, name: S.name, img: S.img })), m = "— Nincs fegyver —", h = i.length > 0 ? i : p, g = p.filter((S) => !h.includes(S)), v = [...h, ...g], k = v.filter((S) => {
      var x;
      const P = (((x = r[S]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && c.some((G) => G.id === P);
    });
    e.weaponSlots = k.map((S) => {
      const P = r[S] ?? {}, x = (P.itemId ?? "").trim(), G = l.find((we) => we.id === x), ke = c.find((we) => we.id === x), ne = (ke == null ? void 0 : ke.system) ?? {}, Le = ne.size === "thrown", Oe = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: S,
        itemId: x,
        displayName: (G == null ? void 0 : G.name) || P.name || m,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Le,
        rangeStr: Oe
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, T = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((S) => {
      var Ot;
      const P = S.id;
      let x = null, G = {};
      for (const dt of v)
        if ((((Ot = r[dt]) == null ? void 0 : Ot.itemId) ?? "").trim() === P) {
          x = dt, G = r[dt] ?? {};
          break;
        }
      const ke = !!x, ne = (S == null ? void 0 : S.system) ?? {}, Le = typeof ne.range == "string" ? (ne.range || "").trim() : "", Oe = ne.type ?? "", we = (w[Oe] ?? Oe) || "—", Re = ne.size ?? "", tt = (T[Re] ?? Re) || "", st = [we, tt].filter(Boolean).join(", ") || we || "—", Pt = Oe === "projectile" || Re === "thrown", $t = ne.quantity != null ? String(ne.quantity).trim() : "1", xt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", zt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? m,
        img: (S == null ? void 0 : S.img) ?? "",
        bonus: xt,
        damage: zt,
        rangeStr: Le || "—",
        typeAndSize: st,
        quantity: $t,
        isProjectile: Pt,
        equipped: ke,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const O = n.filter((S) => S.type === "Pancel");
    e.armorTable = O.map((S) => {
      var G;
      const P = (S == null ? void 0 : S.system) ?? {}, x = ((G = S.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: S.id,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: Mi((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const _ = ((Ft = (Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.gear) == null ? void 0 : Ft.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], j = n.filter((S) => S.type === "MikroChip");
    e.microchipsTable = j.map((S) => {
      var Oe, we, Re, tt;
      const P = S.id;
      let x = null;
      for (const st of C)
        if ((((Oe = _[st]) == null ? void 0 : Oe.itemId) ?? "").trim() === P) {
          x = st;
          break;
        }
      const G = ((we = S == null ? void 0 : S.system) == null ? void 0 : we.abilityType) ?? "", ke = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((Re = S == null ? void 0 : S.system) == null ? void 0 : Re.description) ?? "").trim(), Le = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        typeLabel: ke,
        description: Le,
        kp: Number((tt = S == null ? void 0 : S.system) == null ? void 0 : tt.replaceCost) >= 0 ? Number(S.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const K = n.filter((S) => S.type === "Targy");
    e.itemsTable = K.map((S) => {
      const P = (S == null ? void 0 : S.system) ?? {}, x = (P.description ?? "").trim(), G = x ? x.length > 60 ? x.slice(0, 57) + "…" : x : "—";
      return {
        itemId: S.id,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        quantity: P.quantity != null ? String(P.quantity).trim() : "1",
        description: G
      };
    });
    const U = n.filter((S) => S.type === "Egyeb");
    e.egyebList = U.map((S) => {
      const x = (((S == null ? void 0 : S.system) ?? {}).description ?? "").trim(), G = x ? x.length > 80 ? x.slice(0, 77) + "…" : x : "";
      return {
        itemId: S.id,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        description: G
      };
    });
    const M = (((At = e.weaponsTable) == null ? void 0 : At.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((Et = e.microchipsTable) == null ? void 0 : Et.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !M;
    const W = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = n.filter((S) => S.type === "Kepesseg" || S.type === "ability").map((S) => {
      var P, x, G;
      return {
        id: S.id,
        name: S.name,
        img: S.img,
        description: ((P = S.system) == null ? void 0 : P.description) ?? "",
        kp: Number(((x = S.system) == null ? void 0 : x.kp) ?? 0) || 0,
        kind: (((G = S.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), J = new Map(Z.map((S) => [S.id, S])), Y = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Y, e.abilityHatterSlot = Y;
    const oe = (S) => {
      const P = W[S];
      return P ? Array.isArray(P == null ? void 0 : P.items) ? P.items : Array.isArray(P) ? P : [] : [];
    }, z = (S) => (S || []).map((P) => {
      const x = J.get(P);
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
    e.abilityPassiveList = z(oe("passive")), e.abilityActiveList = z(oe("active"));
    const te = t == null ? void 0 : t.id, de = !!((vt = (bt = game.combat) == null ? void 0 : bt.combatants) != null && vt.some(
      (S) => {
        var P;
        return (((P = S.actor) == null ? void 0 : P.id) ?? S.actorId) === te;
      }
    ));
    e.showHarcSection = de;
    const De = ((kt = e.system) == null ? void 0 : kt.resources) ?? {}, D = (It = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : It.initiativeResult, E = typeof D == "number" ? D : -1, V = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], se = (Qe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Qe.initiativeRanges, le = Array.isArray(se) ? se.map((S) => ({ min: Number(S.min) ?? 0, max: Number(S.max) ?? 0, kp: Math.min(10, Math.max(0, Number(S.kp) ?? 0)) })) : [], ae = (le.length > 0 ? le : V).slice().sort((S, P) => S.min - P.min), ve = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < ve && (ce = [...ce, ...Array(ve - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((S, P) => ({
      ...S,
      isFirst: P === 0,
      isLast: P === ce.length - 1
    }));
    let fe = 0;
    if (typeof E == "number" && E >= 0 && ae.length > 0) {
      const S = ae[0], P = ae[ae.length - 1];
      let x = null;
      E <= S.max ? x = S : E >= P.min ? x = P : x = ae.find((G) => E >= G.min && E <= G.max), x && (fe = x.kp);
    }
    const Ke = ae.length > 0 ? ae[ae.length - 1] : null, Ue = Math.min(10, Ke ? Ke.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, Ue)).map((S, P) => {
      const x = P + 1, G = !!Number(De[S]), ke = x <= fe;
      return { index: x, used: G, usable: ke };
    }), ot = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, ot), e.kpDotsRow2 = Be.slice(ot), e.canEditInitiative = !!((Tt = game.user) != null && Tt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((et = (Dt = e.system) == null ? void 0 : Dt.combat) == null ? void 0 : et.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var n, r, p;
    super._attachFrameListeners(s);
    const e = ((n = s == null ? void 0 : s.querySelector) == null ? void 0 : n.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (o) => {
      var l, m, h;
      if (o.preventDefault(), o.stopPropagation(), !this.actor) return;
      const i = ((h = (m = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (o) => {
      var l, m, h;
      o.preventDefault();
      const i = (m = (l = o.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (h = c == null ? void 0 : c.sheet) == null || h.render(!0);
    });
    const a = (o) => {
      var l, m;
      const i = (l = o == null ? void 0 : o.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (o) => {
      o.preventDefault(), a(o.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (o) => {
      o.preventDefault(), a(o.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (o) => {
      var m, h, g, v;
      o.preventDefault();
      const i = (h = (m = o.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (o) => {
      var m;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget, c = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-BB-plTy5.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (o) => {
      var l, m, h, g, v;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((m = i == null ? void 0 : i.dataset) != null && m.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (o) => {
      if (o.preventDefault(), o.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BB-plTy5.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (o) => {
      var m, h;
      o.preventDefault(), o.stopPropagation();
      const i = o.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((h = (m = this.actor.system) == null ? void 0 : m.resources) == null ? void 0 : h[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (o) => {
      var h, g;
      o.preventDefault();
      const i = o.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: m } = await import("./roll-sheet-BB-plTy5.mjs");
      m(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (o) => {
      var c, l;
      o.preventDefault();
      const i = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (o) => {
      var l, m, h, g;
      o.preventDefault();
      const i = (((m = (l = o.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId) ?? ((g = (h = o.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (o) => {
      var g, v, k, w, T, O;
      if (o.preventDefault(), !o.altKey) return;
      const i = (v = (g = o.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, c = (w = (k = o.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((T = this.actor.system) == null ? void 0 : T.abilities) ?? {}, h = (Array.isArray((O = l[i]) == null ? void 0 : O.items) ? l[i].items.slice() : []).filter((_) => _ !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (o) => {
      var c, l;
      if (o.preventDefault(), !o.altKey) return;
      const i = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (o) => {
      var g, v;
      if (o.preventDefault(), !o.altKey) return;
      const i = o.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, m = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      m && (h[`system.weapons.${m}.itemId`] = "", h[`system.weapons.${m}.name`] = "", h[`system.weapons.${m}.damage`] = "", h[`system.weapons.${m}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (o) => {
      var c, l;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (o) => {
      var h, g, v, k;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((g = (h = o.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, m = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = c[w]) == null ? void 0 : T.itemId) ?? "").trim() === i;
      });
      m && await this.actor.update({
        [`system.gear.microchips.${m}.itemId`]: "",
        [`system.gear.microchips.${m}.name`]: "",
        [`system.gear.microchips.${m}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (o) => {
      var l, m;
      if (o.preventDefault(), !o.altKey) return;
      const i = (((m = (l = o.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const y = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (p = (r = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : r.call(e, y)) == null || p.forEach((o) => {
      var i;
      (((i = o.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (o.draggable = !0);
    }), t.on("dragstart", y, (o) => {
      var h, g, v;
      const i = o.currentTarget, c = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const m = l.uuid;
      o.dataTransfer && (o.dataTransfer.setData("text/plain", m), o.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: m })), o.dataTransfer.effectAllowed = "copyMove"), typeof ((v = o.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && o.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, f = (o) => {
      if (!o) return;
      const i = d._getFormDataForUpdate(o);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, u = (o) => {
      var i, c, l;
      return o && (((c = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, o)) || d.id && ((l = o.closest) == null ? void 0 : l.call(o, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (o) => {
      var h;
      const i = o.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!u(l)) return;
      const m = o.relatedTarget;
      m && (l.contains(m) || d.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(d.id)}`))) || f(l);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0), d._votvNpcItemHookRegistered || (d._votvNpcItemUpdateHook = (o, i, c) => {
      var l;
      d.actor && ((l = o == null ? void 0 : o.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, d._votvNpcItemDeleteHook = (o, i, c) => {
      var l;
      d.actor && ((l = o == null ? void 0 : o.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, Hooks.on("updateItem", d._votvNpcItemUpdateHook), Hooks.on("deleteItem", d._votvNpcItemDeleteHook), d._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, a, y;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const d = this._getFormDataForUpdate(e);
      Object.keys(d).length > 0 && await this.actor.update(d).catch((f) => console.warn("VoidNpcSheet save on preClose failed", f));
    }
    return (y = super._preClose) == null ? void 0 : y.call(this, s);
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
    var w, T, O, _, C;
    const e = this.actor;
    if (!e) return;
    const a = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, y = ((T = e.system) == null ? void 0 : T.skills) ?? {}, d = ((O = e.items) == null ? void 0 : O.filter((j) => j.type === "Fegyver")) ?? [];
    let f = null;
    a.itemId && (f = d.find((j) => j.id === a.itemId) ?? null);
    const u = f && f.name || a.name || "Fegyver", n = Number(a.bonus || 0) || 0, r = ((_ = f == null ? void 0 : f.system) == null ? void 0 : _.type) || "kinetic", p = (((C = f == null ? void 0 : f.system) == null ? void 0 : C.skillKey) ?? "").trim(), o = p && y[p] !== void 0 ? p : r === "explosive" ? "grenadeUse" : "firearms", i = Number(y[o] || 0) || 0, c = n + i, m = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(m);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Vt(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, n, r, p, o, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    const a = ((n = (u = t.items).get) == null ? void 0 : n.call(u, s)) ?? ((p = (r = t.items.contents) == null ? void 0 : r.find) == null ? void 0 : p.call(r, (g) => g.id === s));
    if (!a || a.type !== "Fegyver") return;
    let y = (((o = a.system) == null ? void 0 : o.damage) ?? "").trim();
    if (!y && e && (y = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !y) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(y);
    await d.evaluate({ async: !0 });
    const f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: f
    });
  }
  async _onDropItem(s, e) {
    var r, p, o, i, c, l, m, h, g, v, k, w, T, O, _, C, j, K, U;
    if (!this.actor) return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    const a = ((M) => {
      var Z;
      if (!M) return null;
      const W = M.uuid ?? M.documentUuid ?? ((Z = M.data) == null ? void 0 : Z.uuid) ?? (typeof M == "string" ? M : null);
      if (W) return W;
      if (typeof M == "object") {
        for (const J of Object.values(M))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!a) return (p = super._onDropItem) == null ? void 0 : p.call(this, s, e);
    const y = await fromUuid(a);
    if (!y || y.documentName !== "Item") return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    if (y.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const d = this.actor;
    if (y.type === "Kepesseg" || y.type === "ability") {
      const M = (((l = y.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (M === "module") {
        (h = (m = ui.notifications) == null ? void 0 : m.warn) == null || h.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let W = y.id;
      if (((g = y.parent) == null ? void 0 : g.id) !== d.id) {
        const oe = foundry.utils.mergeObject(y.toObject(), { type: "Kepesseg" });
        W = ((v = (await d.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : v.id) ?? W;
      }
      const Z = ((k = d.system) == null ? void 0 : k.abilities) ?? {}, J = M === "active" ? "active" : "passive", Y = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(W) || Y.push(W), await d.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((T = y.parent) == null ? void 0 : T.id) === d.id) return;
    const f = y.toObject();
    y.type === "Fegyver" && foundry.utils.mergeObject(f, { system: { ...f.system ?? {}, equipped: !0 } }, { inplace: !0 }), y.type === "Pancel" && foundry.utils.mergeObject(f, { system: { ...f.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const n = (O = (await d.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : O.id;
    if (y.type === "Fegyver" && n) {
      const M = ((_ = d.system) == null ? void 0 : _.weapons) ?? {}, W = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (M.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((z) => W.includes(z)) : [];
      let Y = W.find((z) => {
        var te;
        return !(((te = M[z]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = W.find((z) => !J.includes(z)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((z) => W.includes(z));
      await d.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: n,
        [`system.weapons.${Y}.name`]: y.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = y.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((j = y.system) == null ? void 0 : j.bonus) ?? ""
      });
    }
    if (y.type === "MikroChip" && n) {
      const M = ((U = (K = d.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = M[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await d.update({
        [`system.gear.microchips.${Z}.itemId`]: n,
        [`system.gear.microchips.${Z}.name`]: y.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var r, p, o, i, c, l;
    const e = (p = (r = this.actor) == null ? void 0 : r.items) == null ? void 0 : p.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, y = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", f = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", u = y ? `<p>${y}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var u, n, r, p, o, i;
    const e = (n = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : n.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((r = e.system) == null ? void 0 : r.description) ?? "").trim();
    let a, y = "";
    if (e.type === "MikroChip") {
      const c = ((p = e.system) == null ? void 0 : p.abilityType) ?? "passive";
      if (a = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        l > 0 && (y = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${y}
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
    for (const a of s.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let y;
      if (a.type === "checkbox")
        y = a.checked;
      else if (a.type === "number") {
        if (a.value === "") continue;
        y = Number(a.value);
      } else if (a.name === "system.resources.kp" || a.name === "system.resources.kp2" || a.name === "system.resources.kp3") {
        const d = (a.value ?? "").trim();
        if (d === "") continue;
        y = Number(d) || 0;
      } else
        y = a.value ?? "";
      y !== void 0 && foundry.utils.setProperty(e, a.name, y);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const a = e.name;
      (a === void 0 || typeof a == "string" && a.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
X(ge, "PARTS", foundry.utils.mergeObject(
  R(ge, ge, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(ge, ge, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject((($s = R(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((xs = R(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : xs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Rs = (zs = R(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : zs.window) == null ? void 0 : Rs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Wt = ge;
function ji(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ms, js, Ks, Us;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
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
  _getScrollContainers(s) {
    var a, y, d, f;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.jarmu-sheet")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, ".window-content")) ?? null;
    return { form: e, windowContent: t };
  }
  _saveScrollState(s) {
    const { form: e, windowContent: t } = this._getScrollContainers(s), a = {};
    return e && e.scrollHeight > e.clientHeight && typeof e.scrollTop == "number" && (a.formScrollTop = e.scrollTop), t && t.scrollHeight > t.clientHeight && typeof t.scrollTop == "number" && (a.windowScrollTop = t.scrollTop), a;
  }
  _applyScrollState(s, e) {
    if (!s || !e) return;
    const { form: t, windowContent: a } = this._getScrollContainers(s);
    typeof e.formScrollTop == "number" && t && (t.scrollTop = e.formScrollTop), typeof e.windowScrollTop == "number" && a && (a.scrollTop = e.windowScrollTop);
  }
  async render(s = !1, e = {}) {
    var l;
    const t = (l = game.votv) == null ? void 0 : l._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const y = this.element, d = this.form ?? this.element;
    let f = { scrollState: {}, focus: null };
    if (y) {
      f.scrollState = this._saveScrollState(y);
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
    const n = this.element, r = this.form ?? this.element, p = f.scrollState, o = f.focus, i = typeof (p == null ? void 0 : p.formScrollTop) == "number" || typeof (p == null ? void 0 : p.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(n, p), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const g = ((m = r.querySelector) == null ? void 0 : m.call(r, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (h = r.querySelector) == null ? void 0 : h.call(r, `[name="${CSS.escape(o.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = o.selectionStart ?? 0, g.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(n, p);
    };
    return (i || o) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (n) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, n)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${n}`) : null);
    }, a = t(".jarmu-total-defense-effective"), y = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.givenProtection"]');
    if (!a) return;
    const f = Number(y == null ? void 0 : y.value) || 0, u = Number(d == null ? void 0 : d.value) || 0;
    a.textContent = String(f + u);
  }
  async _prepareContext(s) {
    var j, K, U, M, W, Z, J, Y, oe, z, te, de, De;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((j = e.system) == null ? void 0 : j.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const a = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, y = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, d = "— Nincs fegyver —", f = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = f.map((D) => {
      const E = (D == null ? void 0 : D.system) ?? {}, V = E.type ?? "", se = (a[V] ?? V) || "—", le = E.size ?? "", pe = (y[le] ?? le) || "", ae = [se, pe].filter(Boolean).join(", ") || se || "—", ve = V === "projectile" || le === "thrown", ce = E.quantity != null ? String(E.quantity).trim() : "1", fe = (typeof E.range == "string" ? (E.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? d,
        img: (D == null ? void 0 : D.img) ?? "",
        bonus: String(E.bonus ?? "").trim() || "0",
        damage: E.damage ?? "",
        rangeStr: fe || "—",
        typeLabel: se,
        typeAndSize: ae,
        quantity: ce,
        quantityDisplay: ve ? ce : "—",
        isProjectile: ve,
        equipped: !1,
        special: (E.special ?? "").trim() || "—"
      };
    });
    const u = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = u.map((D) => {
      var se;
      const E = (D == null ? void 0 : D.system) ?? {}, V = !!((se = D.system) != null && se.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: ji((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: V
      };
    });
    const n = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = n.map((D) => {
      var ve, ce, fe;
      const E = ((ve = D == null ? void 0 : D.system) == null ? void 0 : ve.abilityType) ?? "", V = E === "active" ? "Aktív" : E === "passive" ? "Passzív" : E || "—", se = E === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), ae = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
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
    const r = (((W = this.actor.items) == null ? void 0 : W.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = r.map((D) => {
      const E = (D == null ? void 0 : D.system) ?? {}, V = (E.description ?? "").trim(), se = V ? V.length > 60 ? V.slice(0, 57) + "…" : V : "—", le = E.quantity != null ? String(E.quantity).trim() : "1";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        quantity: le,
        description: se
      };
    });
    const p = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", o = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === p).sort((D, E) => {
      const V = typeof D.sort == "number" ? D.sort : 0, se = typeof E.sort == "number" ? E.sort : 0;
      return V - se;
    }), i = [];
    let c = 0, l = 0, m = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of o) {
      const E = (D == null ? void 0 : D.system) ?? {}, V = Number(E.level ?? 0) || 0, se = (E.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (m += le);
      const pe = E.abilities ?? {}, ae = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
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
        var qe, ut;
        const ie = (((qe = ee.system) == null ? void 0 : qe.kind) ?? "passive").toString(), lt = Number(((ut = ee.system) == null ? void 0 : ut.kp) ?? 0) || 0, ze = ie === "species";
        return {
          id: ee.id,
          ref: ye,
          name: ee.name,
          img: ee.img,
          kind: ie,
          kpDisplay: ze ? 0 : lt
        };
      });
      if (p === "Helyiseg") {
        const ee = (E.hit ?? "").toString().trim();
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
      const fe = E.health ?? {}, Ke = Number(fe.max ?? 0) || 0, Ue = Number(fe.value ?? 0) || 0;
      let xe;
      if (Ke <= 0)
        xe = void 0;
      else if (Ue <= 0)
        xe = 0;
      else {
        const ee = Ue / Ke;
        ee > 2 / 3 ? xe = 3 : ee > 1 / 3 ? xe = 2 : xe = 1;
      }
      const Be = (E.hit ?? "").toString().trim(), ot = (E.speed ?? "").toString().trim().replace(",", "."), He = Number(ot);
      Number.isFinite(He) && (c += He);
      const Ye = (E.range ?? "").toString().trim().replace(",", "."), Ge = Number(Ye);
      Number.isFinite(Ge) && (l += Ge);
      const ct = (E.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: V,
        hpMax: Ke,
        hpValue: Ue,
        hpStatus: xe,
        hit: Be,
        damage: ct,
        abilities: ce,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = m, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = o.length;
    let v = "Kicsi", k = 0, w = 0;
    g >= 11 ? (v = "Nagy", k = -4, w = -6) : g >= 6 ? (v = "Közepes", k = -2, w = -3) : (v = "Kicsi", k = 0, w = 0), e.sizeForSelect = v, e.unitCount = g, e.sizeSpeedPenalty = k, e.sizeDefensePenalty = w;
    const T = c + k, O = l;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: T },
        vehicle: { toolsRange: O, storage: h },
        identity: { size: v }
      },
      { inplace: !1 }
    );
    const _ = (((oe = e.weaponsTable) == null ? void 0 : oe.length) ?? 0) > 0 || (((z = e.armorTable) == null ? void 0 : z.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((de = e.itemsTable) == null ? void 0 : de.length) ?? 0) > 0;
    e.showEquipmentDropZone = !_;
    const C = (((De = this.actor.items) == null ? void 0 : De.contents) ?? []).filter((D) => D.type === "Egyeb");
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
      var p, o, i;
      u.preventDefault(), u.stopPropagation();
      const n = ((i = (o = (p = foundry.applications) == null ? void 0 : p.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new n({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (u) => {
      var p, o, i;
      u.preventDefault();
      const n = (o = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : o.itemId;
      if (!n) return;
      const r = this.actor.items.get(n);
      (i = r == null ? void 0 : r.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var p, o;
      if (u.preventDefault(), !u.altKey) return;
      const n = (o = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : o.itemId;
      !n || !this.actor.items.get(n) || await this.actor.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var o;
      const n = u.currentTarget, r = (o = n == null ? void 0 : n.dataset) == null ? void 0 : o.itemId;
      if (!r) return;
      const p = this.actor.items.get(r);
      !p || p.type !== "Targy" && p.type !== "Fegyver" || await p.update({ "system.quantity": (n.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var p, o;
      const n = (o = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : o.itemId;
      if (!n) return;
      const r = this.actor.items.get(n);
      !r || r.type !== "Pancel" || await r.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var r, p, o, i;
      u.preventDefault();
      const n = (p = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : p.itemId;
      n && ((i = (o = this.actor.items.get(n)) == null ? void 0 : o.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var r, p;
      if (u.preventDefault(), !u.altKey) return;
      const n = (p = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : p.itemId;
      n && await this.actor.deleteEmbeddedDocuments("Item", [n]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var p, o, i, c;
      u.preventDefault();
      const n = (((o = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : o.itemId) ?? ((c = (i = u.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!n || !this.actor) return;
      const r = this.actor.items.get(n);
      !r || r.type !== "MikroChip" && r.type !== "Egyeb" || await this._postItemToChat(n);
    }), t.on("click", ".jarmu-unit-damage-button", async (u) => {
      var p;
      u.preventDefault(), u.stopPropagation();
      const n = u.currentTarget, r = (((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.itemId) ?? "").trim();
      r && await this._rollUnitDamage(r);
    });
    const a = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (u) => {
      var o, i;
      const n = u.currentTarget, r = (o = n == null ? void 0 : n.dataset) == null ? void 0 : o.itemId;
      if (!r) return;
      a._draggingUnitId = r;
      const p = (i = u.originalEvent) == null ? void 0 : i.dataTransfer;
      p && (p.setData("text/plain", r), p.effectAllowed = "move", typeof p.setDragImage == "function" && p.setDragImage(n, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (u) => {
      var o, i, c, l;
      const n = (i = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : i.itemId, r = a._draggingUnitId;
      if (!r || !n || r === n) return;
      u.preventDefault();
      const p = (c = u.originalEvent) == null ? void 0 : c.dataTransfer;
      p && (p.dropEffect = "move"), (l = u.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (u) => {
      var n;
      (n = u.currentTarget) == null || n.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (u) => {
      var g, v, k, w;
      u.preventDefault(), (g = u.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const n = (k = (v = u.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : k.itemId;
      let r = a._draggingUnitId;
      const p = (w = u.originalEvent) == null ? void 0 : w.dataTransfer;
      if (!r && p && (r = p.getData("text/plain")), a._draggingUnitId = null, !r || !n || r === n) return;
      const o = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((T) => T.type === o).sort((T, O) => {
        const _ = typeof T.sort == "number" ? T.sort : 0, C = typeof O.sort == "number" ? O.sort : 0;
        return _ - C;
      }).map((T) => T.id), l = c.indexOf(r), m = c.indexOf(n);
      if (l === -1 || m === -1) return;
      c.splice(l, 1), c.splice(m, 0, r);
      const h = c.map((T, O) => ({
        _id: T,
        sort: (O + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (u) => {
      var o, i, c, l, m, h, g, v, k, w;
      u.preventDefault();
      const n = (l = (c = (i = (o = u.currentTarget) == null ? void 0 : o.closest) == null ? void 0 : i.call(o, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : l.abilityRef, r = (v = (g = (h = (m = u.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let p = null;
      if (n)
        try {
          p = await fromUuid(n);
        } catch {
          p = null;
        }
      !p && r && (p = ((k = game.items) == null ? void 0 : k.get(r)) ?? null), (w = p == null ? void 0 : p.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (u) => {
      var i, c, l, m;
      u.preventDefault();
      const n = (c = (i = u.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), r = (l = n == null ? void 0 : n.dataset) == null ? void 0 : l.abilityRef, p = (m = n == null ? void 0 : n.dataset) == null ? void 0 : m.abilityId, o = r || p;
      o && await this._postUnitAbilityToChat(o);
    });
    const y = (u) => {
      if (!u) return;
      const n = this._getFormDataForUpdate(u);
      Object.keys(n).length !== 0 && this.actor.update(n).catch((r) => console.warn("VoidJarmuSheet save failed", r));
    }, d = (u) => {
      var n, r, p;
      return u && (((r = (n = this.element) == null ? void 0 : n.contains) == null ? void 0 : r.call(n, u)) || this.id && ((p = u.closest) == null ? void 0 : p.call(u, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (u) => {
      var i;
      const n = u.target;
      if (!n || !n.form) return;
      const r = n.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const p = n.form;
      if (!d(p)) return;
      const o = u.relatedTarget;
      o && (p.contains(o) || this.id && ((i = o.closest) != null && i.call(o, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), y(p));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var l, m, h;
      const n = u.currentTarget, r = (l = n == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!r) return;
      const p = this.actor.items.get(r);
      if (!p || p.type !== "Jarmuegyseg") return;
      const o = (n.value ?? "").trim(), i = o === "" ? 0 : Number(o), c = (m = n.closest) == null ? void 0 : m.call(n, ".jarmu-unit-row");
      if (c) {
        const g = (h = c.querySelector) == null ? void 0 : h.call(c, ".jarmu-unit-hp-max"), v = (g == null ? void 0 : g.textContent) ?? "", k = Number((v ?? "").trim()) || 0;
        let w;
        if (k <= 0)
          w = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          w = 0;
        else {
          const T = i / k;
          T > 2 / 3 ? w = 3 : T > 1 / 3 ? w = 2 : w = 1;
        }
        w === void 0 ? c.removeAttribute("data-hp-status") : c.dataset.hpStatus = String(w);
      }
      await p.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (u) => {
      var i;
      const n = u.currentTarget, r = (i = n == null ? void 0 : n.dataset) == null ? void 0 : i.itemId;
      if (!r) return;
      const p = this.actor.items.get(r);
      if (!p || p.type !== "Jarmuegyseg" && p.type !== "Helyiseg") return;
      const o = (n.value ?? "").trim();
      await p.update({ "system.hit": o });
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
      let a;
      t.type === "checkbox" ? a = t.checked : t.type === "number" ? a = t.value === "" ? 0 : Number(t.value) : a = t.value ?? "", foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _postItemToChat(s) {
    var u, n, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let a, y = "";
    if (e.type === "MikroChip") {
      const p = ((n = e.system) == null ? void 0 : n.abilityType) ?? "passive";
      if (a = (p === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", p === "active") {
        const o = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        o > 0 && (y = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${y}
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
    var f, u, n, r, p, o, i, c, l;
    const e = this.actor;
    if (!e) return;
    const t = ((u = (f = e.items).get) == null ? void 0 : u.call(f, s)) ?? ((r = (n = e.items.contents) == null ? void 0 : n.find) == null ? void 0 : r.call(n, (m) => m.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const a = (((p = t.system) == null ? void 0 : p.damage) ?? "").trim();
    if (!a) {
      (l = (o = ui.notifications) == null ? void 0 : o.warn) == null || l.call(
        o,
        ((c = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : c.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
      );
      return;
    }
    const y = new Roll(a);
    await y.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _postUnitAbilityToChat(s) {
    var r, p, o, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((r = game.items) == null ? void 0 : r.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((p = e.system) == null ? void 0 : p.kind) ?? "passive", a = Number(((o = e.system) == null ? void 0 : o.kp) ?? 0) || 0, y = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", f = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", u = y ? `<p>${y}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var u, n;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((u = e == null ? void 0 : e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const r of Object.values(e))
        if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
          t = r;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const a = await fromUuid(t);
    if (!a || a.documentName !== "Item") return super._onDropItem(s, e);
    const y = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(a.type)) return super._onDropItem(s, e);
    if (((n = a.parent) == null ? void 0 : n.id) === y.id) return;
    const f = foundry.utils.mergeObject(a.toObject(), {
      system: { ...a.toObject().system ?? {}, equipped: a.type === "Pancel" ? !1 : void 0 }
    });
    await y.createEmbeddedDocuments("Item", [f]);
  }
};
X(he, "PARTS", foundry.utils.mergeObject(
  R(he, he, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(he, he, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ms = R(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((js = R(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : js.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Us = (Ks = R(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.window) == null ? void 0 : Us.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let jt = he;
function Ki(I) {
  if (I == null) return 0;
  const s = String(I).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function Ns(I) {
  var e;
  return (((e = I == null ? void 0 : I.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, a) => {
    var y;
    return t + Ki((y = a.system) == null ? void 0 : y.veszely);
  }, 0);
}
var Bs;
const rt = class rt extends jt {
  _attachFrameListeners(s) {
    var f;
    super._attachFrameListeners(s);
    const e = this.form ?? ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element;
    if (!e) return;
    const t = {
      "Középső Rendszerek": -10,
      "Köztársasági Ágak": 10,
      "Peremvidék, vagy azon túl": 30
    }, a = {
      "Polgári Zóna": 10,
      "Ipari Zóna": 10,
      "Bánya Zóna": 10,
      "Katonai Zóna": -10,
      "Kutató Zóna": -10,
      "Elhagyott Zóna": 30,
      "Zónán kívüli terület": 30
    }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, d = () => {
      var _, C, j, K, U, M, W;
      const n = ((_ = e.querySelector) == null ? void 0 : _.call(e, "form")) ?? e, r = (C = n.querySelector) == null ? void 0 : C.call(n, 'select[name="system.identity.assignment"]'), p = (j = n.querySelector) == null ? void 0 : j.call(n, 'select[name="system.identity.subAssignment"]'), o = (K = n.querySelector) == null ? void 0 : K.call(n, "input.bazis-threat-total"), i = (U = n.querySelector) == null ? void 0 : U.call(n, 'input[name="system.combat.threatBonus"]');
      if (!r || !o || !i) return;
      const c = r.value ?? "", l = (p == null ? void 0 : p.value) ?? "", m = t[c] ?? 0, h = a[l] ?? 0, g = (((W = (M = this.actor) == null ? void 0 : M.items) == null ? void 0 : W.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", k = y[v] ?? 0, w = Number(i.value ?? 0) || 0, T = Ns(this.actor), O = m + h + k + w + T;
      o.value = O;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', d);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const a = e.system ?? this.actor.system ?? {}, y = a.identity ?? {}, d = a.combat ?? {}, f = y.assignment ?? "", u = y.subAssignment ?? "", n = {
        "Középső Rendszerek": -10,
        "Köztársasági Ágak": 10,
        "Peremvidék, vagy azon túl": 30
      }, r = {
        "Polgári Zóna": 10,
        "Ipari Zóna": 10,
        "Bánya Zóna": 10,
        "Katonai Zóna": -10,
        "Kutató Zóna": -10,
        "Elhagyott Zóna": 30,
        "Zónán kívüli terület": 30
      }, p = { Kicsi: -10, Közepes: 0, Nagy: 10 }, o = n[f] ?? 0, i = r[u] ?? 0, c = e.sizeForSelect ?? "Kicsi", l = p[c] ?? 0, m = Number(d.threatBonus ?? 0) || 0, h = Ns(this.actor), g = o + i + l + m + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(a),
        { combat: { ...d, threat: g, threatBonus: m } },
        { inplace: !1 }
      ), e.bazisThreatBase = o;
    }
    return e;
  }
};
X(rt, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(rt, rt, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Bs = R(rt, rt, "DEFAULT_OPTIONS")) == null ? void 0 : Bs.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Jt = rt;
var Hs, Gs, Vs, Ws;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  async _prepareContext(s) {
    var f, u;
    const e = await super._prepareContext(s) ?? {}, t = this.actor;
    e.actor = t;
    const a = foundry.utils.deepClone(t.system ?? {});
    e.system = a;
    const y = (((f = t.items) == null ? void 0 : f.contents) ?? []).filter((n) => n.type === "Targy");
    e.itemsTable = y.map((n) => {
      const r = n.system ?? {}, p = (r.description ?? "").trim(), o = p ? p.length > 60 ? `${p.slice(0, 57)}…` : p : "—", i = r.quantity != null ? String(r.quantity).trim() : "1";
      return {
        itemId: n.id,
        actorId: t.id,
        name: n.name ?? "—",
        img: n.img ?? "",
        quantity: i,
        description: o
      };
    });
    const d = (((u = t.items) == null ? void 0 : u.contents) ?? []).filter((n) => n.type === "Egyeb");
    return e.egyebList = d.map((n) => {
      const p = ((n.system ?? {}).description ?? "").trim(), o = p ? p.length > 80 ? `${p.slice(0, 77)}…` : p : "";
      return {
        itemId: n.id,
        actorId: t.id,
        name: n.name ?? "—",
        img: n.img ?? "",
        description: o
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var f;
    super._attachFrameListeners(s);
    const e = this, t = ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, a = t ? $(t) : $([]);
    if (!this.isEditable) return;
    a.on("click", ".vallalkozas-employee-add", async (u) => {
      var p;
      if (u.preventDefault(), !this.actor) return;
      const n = this.actor.system ?? {}, r = Array.isArray((p = n.vallalkozas) == null ? void 0 : p.employees) ? n.vallalkozas.employees.slice() : [];
      r.push({ type: "", level: 0, count: 0, bonus: "" }), await this.actor.update({ "system.vallalkozas.employees": r });
    }), a.on("click", ".vallalkozas-employee-delete", async (u) => {
      var i, c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const n = ((c = (i = u.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", r = Number(n), p = this.actor.system ?? {}, o = Array.isArray((l = p.vallalkozas) == null ? void 0 : l.employees) ? p.vallalkozas.employees.slice() : [];
      !Number.isInteger(r) || r < 0 || r >= o.length || (o.splice(r, 1), await this.actor.update({ "system.vallalkozas.employees": o }));
    }), a.on("click", ".vallalkozas-production-add", async (u) => {
      var p;
      if (u.preventDefault(), !this.actor) return;
      const n = this.actor.system ?? {}, r = Array.isArray((p = n.vallalkozas) == null ? void 0 : p.productionLines) ? n.vallalkozas.productionLines.slice() : [];
      r.push({ product: "", count: 0, time: "" }), await this.actor.update({ "system.vallalkozas.productionLines": r });
    }), a.on("click", ".vallalkozas-production-delete", async (u) => {
      var i, c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const n = ((c = (i = u.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", r = Number(n), p = this.actor.system ?? {}, o = Array.isArray((l = p.vallalkozas) == null ? void 0 : l.productionLines) ? p.vallalkozas.productionLines.slice() : [];
      !Number.isInteger(r) || r < 0 || r >= o.length || (o.splice(r, 1), await this.actor.update({ "system.vallalkozas.productionLines": o }));
    }), a.on("click", ".karakter-item-chat", async (u) => {
      var p, o, i, c;
      u.preventDefault();
      const n = (((o = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : o.itemId) ?? ((c = (i = u.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!n || !this.actor) return;
      const r = this.actor.items.get(n);
      r && (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(n);
    }), a.on("click", ".vallalkozas-egyeb-delete", async (u) => {
      var r, p;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const n = (((p = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) ?? "").trim();
      n && await this.actor.deleteEmbeddedDocuments("Item", [n]);
    }), a.on("click", ".vallalkozas-raktar-table .karakter-inventory-item-name, .vallalkozas-raktar-table .karakter-equipment-icon", (u) => {
      var p, o, i;
      u.preventDefault();
      const n = (o = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : o.itemId;
      if (!n || !this.actor) return;
      const r = this.actor.items.get(n);
      (i = r == null ? void 0 : r.sheet) == null || i.render(!0);
    }), a.on("change", ".vallalkozas-item-quantity-input", async (u) => {
      var i;
      const n = u.currentTarget, r = (((i = n == null ? void 0 : n.dataset) == null ? void 0 : i.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const p = this.actor.items.get(r);
      if (!p || p.type !== "Targy") return;
      const o = (n.value ?? "").trim();
      await p.update({ "system.quantity": o });
    }), a.on("click", ".vallalkozas-item-delete", async (u) => {
      var r, p;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const n = (((p = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : p.itemId) ?? "").trim();
      n && await this.actor.deleteEmbeddedDocuments("Item", [n]);
    });
    const y = (u) => {
      if (!u || !this.actor) return;
      const n = e._getFormDataForUpdate(u);
      Object.keys(n).length !== 0 && e.actor.update(n).catch((r) => console.warn("VoidVallalkozasSheet save failed", r));
    }, d = (u) => {
      var n, r, p;
      return u && (((r = (n = e.element) == null ? void 0 : n.contains) == null ? void 0 : r.call(n, u)) || e.id && ((p = u.closest) == null ? void 0 : p.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var r, p, o;
      const n = ((r = u.target) == null ? void 0 : r.form) ?? ((o = (p = u.target) == null ? void 0 : p.closest) == null ? void 0 : o.call(p, "form"));
      d(n) && y(n);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("change", this._votvChange, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    const e = {};
    for (const t of s.elements) {
      if (!t.name || t.disabled || t.type === "radio" && !t.checked) continue;
      let a;
      if (t.type === "checkbox") a = t.checked;
      else if (t.type === "number") {
        if (t.value === "") continue;
        a = Number(t.value);
      } else
        a = t.value ?? "";
      foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe. */
  async _postItemToChat(s) {
    var u, n, r;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let a, y = "";
    if (e.type === "MikroChip") {
      const p = ((n = e.system) == null ? void 0 : n.abilityType) ?? "passive";
      if (a = (p === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", p === "active") {
        const o = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        o > 0 && (y = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", f = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${y}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: f,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
};
X(be, "PARTS", foundry.utils.mergeObject(
  R(be, be, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs" }
  },
  { inplace: !1 }
)), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(be, be, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Vallalkozas"],
    template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs",
    width: 800,
    minWidth: 700,
    height: 600,
    form: foundry.utils.mergeObject(((Hs = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Gs = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ws = (Vs = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.window) == null ? void 0 : Ws.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Zt = be;
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
var Js;
const Ne = class Ne extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var n, r, p, o, i, c, l;
      if (!e.isEditable || !((r = (n = d.target) == null ? void 0 : n.closest) != null && r.call(n, ".profile")) && ((o = (p = d.target) == null ? void 0 : p.getAttribute) == null ? void 0 : o.call(p, "data-edit")) !== "img") return;
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
    const a = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, y = (d) => {
      var f, u, n;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((n = d.closest) == null ? void 0 : n.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, n, r;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((r = (n = d.target) == null ? void 0 : n.closest) == null ? void 0 : r.call(n, "form"));
      y(f) && a(f);
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ui, e;
  }
};
X(Ne, "PARTS", foundry.utils.mergeObject(R(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Js = R(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : Js.form) ?? {}, { submitOnChange: !1 })
}));
let Yt = Ne;
var Zs;
const Fe = class Fe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var n, r, p, o, i, c, l;
      if (!e.isEditable || !((r = (n = d.target) == null ? void 0 : n.closest) != null && r.call(n, ".profile")) && ((o = (p = d.target) == null ? void 0 : p.getAttribute) == null ? void 0 : o.call(p, "data-edit")) !== "img") return;
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
    const a = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, y = (d) => {
      var f, u, n;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((n = d.closest) == null ? void 0 : n.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, n, r;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((r = (n = d.target) == null ? void 0 : n.closest) == null ? void 0 : r.call(n, "form"));
      y(f) && a(f);
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
X(Fe, "PARTS", foundry.utils.mergeObject(R(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Zs = R(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Zs.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Fe;
var Ys;
const Ae = class Ae extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var n, r, p, o, i, c, l;
      if (!e.isEditable || !((r = (n = d.target) == null ? void 0 : n.closest) != null && r.call(n, ".profile")) && ((o = (p = d.target) == null ? void 0 : p.getAttribute) == null ? void 0 : o.call(p, "data-edit")) !== "img") return;
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
    const a = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, y = (d) => {
      var f, u, n;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((n = d.closest) == null ? void 0 : n.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, n, r;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((r = (n = d.target) == null ? void 0 : n.closest) == null ? void 0 : r.call(n, "form"));
      y(f) && a(f);
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
X(Ae, "PARTS", foundry.utils.mergeObject(R(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ys = R(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 })
}));
let Qt = Ae;
var Xs;
const Ee = class Ee extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var n, r, p, o, i, c, l;
      if (!e.isEditable || !((r = (n = d.target) == null ? void 0 : n.closest) != null && r.call(n, ".profile")) && ((o = (p = d.target) == null ? void 0 : p.getAttribute) == null ? void 0 : o.call(p, "data-edit")) !== "img") return;
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
    const a = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, y = (d) => {
      var f, u, n;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((n = d.closest) == null ? void 0 : n.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, n, r;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((r = (n = d.target) == null ? void 0 : n.closest) == null ? void 0 : r.call(n, "form"));
      y(f) && a(f);
    }, e._votvInput = (d) => {
      var n;
      const f = d.target;
      if ((f == null ? void 0 : f.name) === "name") return;
      const u = (f == null ? void 0 : f.form) ?? ((n = f == null ? void 0 : f.closest) == null ? void 0 : n.call(f, "form"));
      y(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(u), 300));
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
X(Ee, "PARTS", foundry.utils.mergeObject(R(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xs = R(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !0 })
}));
let es = Ee;
var Qs;
const Pe = class Pe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var n, r, p, o, i, c, l;
      if (!e.isEditable || !((r = (n = d.target) == null ? void 0 : n.closest) != null && r.call(n, ".profile")) && ((o = (p = d.target) == null ? void 0 : p.getAttribute) == null ? void 0 : o.call(p, "data-edit")) !== "img") return;
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
    const a = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, y = (d) => {
      var f, u, n;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((n = d.closest) == null ? void 0 : n.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, n, r;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((r = (n = d.target) == null ? void 0 : n.closest) == null ? void 0 : r.call(n, "form"));
      y(f) && a(f);
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
X(Pe, "PARTS", foundry.utils.mergeObject(R(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Qs = R(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !1 })
}));
let ts = Pe;
var ei;
const $e = class $e extends foundry.applications.api.HandlebarsApplicationMixin(
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
    e._votvProfileImgClick = (d) => {
      var n, r, p, o, i, c, l;
      if (!e.isEditable || !((r = (n = d.target) == null ? void 0 : n.closest) != null && r.call(n, ".profile")) && ((o = (p = d.target) == null ? void 0 : p.getAttribute) == null ? void 0 : o.call(p, "data-edit")) !== "img") return;
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
    const a = (d) => {
      if (!d) return;
      const f = e._getFormDataForUpdate(d);
      Object.keys(f).length !== 0 && e.document.update(f).catch((u) => console.warn("VoidEgyebSheet save failed", u));
    }, y = (d) => {
      var f, u, n;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((n = d.closest) == null ? void 0 : n.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, n, r;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((r = (n = d.target) == null ? void 0 : n.closest) == null ? void 0 : r.call(n, "form"));
      y(f) && a(f);
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
X($e, "PARTS", foundry.utils.mergeObject(R($e, $e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X($e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R($e, $e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ei = R($e, $e, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !1 })
}));
let ss = $e;
var ti, si;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, n, r, p;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, a = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (n = this.document) == null ? void 0 : n.name,
      "id=",
      (r = this.document) == null ? void 0 : r.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (o) => {
      var i, c, l;
      try {
        const m = typeof o.composedPath == "function" ? o.composedPath() : [];
        if (!(this.element && m.includes(this.element) || this.id && ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", o);
        let g = null;
        try {
          g = TextEditor.getDragEventData(o);
        } catch (T) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", T);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", g), !g || g.type !== "Item") return;
        const k = ((T) => {
          var _;
          if (!T) return null;
          const O = T.uuid ?? T.documentUuid ?? ((_ = T.data) == null ? void 0 : _.uuid) ?? (typeof T == "string" ? T : null);
          if (O) return O;
          if (typeof T == "object") {
            for (const C of Object.values(T))
              if (typeof C == "string" && C.includes(".") && C.startsWith("Item.")) return C;
          }
          return null;
        })(g);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", k), !k) return;
        const w = await fromUuid(k);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", w == null ? void 0 : w.id, w == null ? void 0 : w.type), !w || w.documentName !== "Item") return;
        if (w.type === "Kepesseg" || w.type === "ability") {
          const T = w.uuid ?? w.id, O = this.document.system ?? {}, _ = Array.isArray((l = O.abilities) == null ? void 0 : l.items) ? O.abilities.items.slice() : [];
          _.push(T), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", _), await this.document.update({ "system.abilities.items": _ });
        }
      } catch (m) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", m);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), a.on("click", ".karakter-ability-open", async (o) => {
      var m, h, g, v, k, w;
      o.preventDefault();
      const i = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (v = (g = o.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && c && (l = ((k = game.items) == null ? void 0 : k.get(c)) ?? null), (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), a.on("click", ".karakter-ability-chat", async (o) => {
      var m, h, g, v;
      o.preventDefault();
      const i = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (v = (g = o.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, l = i || c;
      l && await this._postAbilityToChat(l);
    }), a.on("click", ".karakter-ability-pill-remove", async (o) => {
      var g, v, k;
      if (o.preventDefault(), !o.altKey) return;
      const i = (v = (g = o.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, l = Array.isArray((k = c.abilities) == null ? void 0 : k.items) ? c.abilities.items.slice() : [], m = l.indexOf(i), h = m >= 0 ? [...l.slice(0, m), ...l.slice(m + 1)] : l;
      await this.document.update({ "system.abilities.items": h });
    });
    const y = (p = t == null ? void 0 : t.querySelector) == null ? void 0 : p.call(t, ".karakter-ability-area[data-area='abilities']");
    if (y && (y.addEventListener("dragover", (o) => {
      o.preventDefault(), y.classList.add("karakter-ability-area-drag-over");
    }), y.addEventListener("dragleave", () => {
      y.classList.remove("karakter-ability-area-drag-over");
    }), y.addEventListener("drop", () => {
      y.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const d = (o) => {
      if (!o) return;
      const i = e._getFormDataForUpdate(o);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, f = (o) => {
      var i, c, l;
      return o && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, o)) || e.id && ((l = o.closest) == null ? void 0 : l.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var c, l, m;
      const i = ((c = o.target) == null ? void 0 : c.form) ?? ((m = (l = o.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
      let a;
      if (t.type === "checkbox") a = t.checked;
      else if (t.type === "number") {
        if (t.value === "") continue;
        a = Number(t.value);
      } else
        a = t.value ?? "";
      foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {}), a = t.abilities ?? {}, y = Array.isArray(a.items) ? a.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext refs=", y);
    const f = (await Promise.all(
      y.map(async (u) => {
        var n;
        if (!u) return null;
        try {
          const r = await fromUuid(u);
          if (r && (r.type === "Kepesseg" || r.type === "ability")) return r;
        } catch {
          const r = (n = game.items) == null ? void 0 : n.get(u);
          if (r && (r.type === "Kepesseg" || r.type === "ability")) return r;
        }
        return null;
      })
    )).map((u, n) => ({ doc: u, ref: y[n] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: n }) => {
      var i, c;
      const r = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), p = Number(((c = u.system) == null ? void 0 : c.kp) ?? 0) || 0, o = r === "species";
      return {
        id: u.id,
        ref: n,
        name: u.name,
        img: u.img,
        kind: r,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: o ? 0 : p
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", f), e.system = t, e.abilityList = f, e;
  }
  async _postAbilityToChat(s) {
    var r, p, o, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((r = game.items) == null ? void 0 : r.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((p = e.system) == null ? void 0 : p.kind) ?? "passive", a = Number(((o = e.system) == null ? void 0 : o.kp) ?? 0) || 0, y = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", f = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", u = y ? `<p>${y}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /**
   * ItemSheetV2 drop logika: a Foundry már feloldja a dokumentumot, itt csak kezeljük a képesség referenciát.
   */
  async _onDropDocument(s, e) {
    var t, a, y;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const d = e.uuid ?? e.id, f = this.document.system ?? {}, u = Array.isArray((a = f.abilities) == null ? void 0 : a.items) ? f.abilities.items.slice() : [];
      return u.push(d), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (y = super._onDropDocument) == null ? void 0 : y.call(this, s, e);
  }
};
X(Se, "PARTS", foundry.utils.mergeObject(R(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(Se, Se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ti = R(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((si = R(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : si.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let is = Se;
var ii, ni;
const Te = class Te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, n;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, a = t ? $(t) : $([]);
    a.on("click", ".karakter-ability-open", async (r) => {
      var c, l, m, h, g, v;
      r.preventDefault();
      const p = (l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, o = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (p)
        try {
          i = await fromUuid(p);
        } catch {
          i = null;
        }
      !i && o && (i = ((g = game.items) == null ? void 0 : g.get(o)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), a.on("click", ".karakter-ability-chat", async (r) => {
      var c, l, m, h;
      r.preventDefault();
      const p = (l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, o = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId, i = p || o;
      i && await this._postAbilityToChat(i);
    }), a.on("click", ".karakter-ability-pill-remove", async (r) => {
      var m, h, g;
      if (r.preventDefault(), !r.altKey) return;
      const p = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef;
      if (!p) return;
      const o = this.document.system ?? {}, i = Array.isArray((g = o.abilities) == null ? void 0 : g.items) ? o.abilities.items.slice() : [], c = i.indexOf(p), l = c >= 0 ? [...i.slice(0, c), ...i.slice(c + 1)] : i;
      await this.document.update({ "system.abilities.items": l });
    });
    const y = (n = t == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, ".karakter-ability-area[data-area='abilities']");
    if (y && (y.addEventListener("dragover", (r) => {
      r.preventDefault(), y.classList.add("karakter-ability-area-drag-over");
    }), y.addEventListener("dragleave", () => {
      y.classList.remove("karakter-ability-area-drag-over");
    }), y.addEventListener("drop", () => {
      y.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (r) => {
      var p, o, i;
      try {
        const c = typeof r.composedPath == "function" ? r.composedPath() : [];
        if (!(this.element && c.includes(this.element) || this.id && ((o = (p = r.target) == null ? void 0 : p.closest) == null ? void 0 : o.call(p, `#${CSS.escape(this.id)}`)))) return;
        let m = null;
        try {
          m = TextEditor.getDragEventData(r);
        } catch {
        }
        if (!m || m.type !== "Item") return;
        const g = ((k) => {
          var T;
          if (!k) return null;
          const w = k.uuid ?? k.documentUuid ?? ((T = k.data) == null ? void 0 : T.uuid) ?? (typeof k == "string" ? k : null);
          if (w) return w;
          if (typeof k == "object") {
            for (const O of Object.values(k))
              if (typeof O == "string" && O.includes(".") && O.startsWith("Item.")) return O;
          }
          return null;
        })(m);
        if (!g) return;
        const v = await fromUuid(g);
        if (!v || v.documentName !== "Item") return;
        if (v.type === "Kepesseg" || v.type === "ability") {
          const k = v.uuid ?? v.id, w = this.document.system ?? {}, T = Array.isArray((i = w.abilities) == null ? void 0 : i.items) ? w.abilities.items.slice() : [];
          T.push(k), await this.document.update({ "system.abilities.items": T });
        }
      } catch (c) {
        console.error("VoidHelyisegSheet global drop error", c);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), !this.isEditable) return;
    const d = (r) => {
      if (!r) return;
      const p = e._getFormDataForUpdate(r);
      Object.keys(p).length !== 0 && e.document.update(p).catch((o) => console.warn("VoidHelyisegSheet save failed", o));
    }, f = (r) => {
      var p, o, i;
      return r && (((o = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : o.call(p, r)) || e.id && ((i = r.closest) == null ? void 0 : i.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var o, i, c;
      const p = ((o = r.target) == null ? void 0 : o.form) ?? ((c = (i = r.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
      f(p) && d(p);
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
      let a;
      if (t.type === "checkbox") a = t.checked;
      else if (t.type === "number") {
        if (t.value === "") continue;
        a = Number(t.value);
      } else
        a = t.value ?? "";
      foundry.utils.setProperty(e, t.name, a);
    }
    return e;
  }
  async _prepareContext(s) {
    const e = await super._prepareContext(s) ?? {};
    e.item = this.document;
    const t = foundry.utils.deepClone(this.document.system ?? {}), a = t.abilities ?? {}, y = Array.isArray(a.items) ? a.items : [], f = (await Promise.all(
      y.map(async (u) => {
        var n;
        if (!u) return null;
        try {
          const r = await fromUuid(u);
          if (r && (r.type === "Kepesseg" || r.type === "ability")) return r;
        } catch {
          const r = (n = game.items) == null ? void 0 : n.get(u);
          if (r && (r.type === "Kepesseg" || r.type === "ability")) return r;
        }
        return null;
      })
    )).map((u, n) => ({ doc: u, ref: y[n] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: n }) => {
      var i, c;
      const r = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), p = Number(((c = u.system) == null ? void 0 : c.kp) ?? 0) || 0, o = r === "species";
      return {
        id: u.id,
        ref: n,
        name: u.name,
        img: u.img,
        kind: r,
        kpDisplay: o ? 0 : p
      };
    });
    return e.system = t, e.abilityList = f, e;
  }
  async _postAbilityToChat(s) {
    var r, p, o, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((r = game.items) == null ? void 0 : r.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((p = e.system) == null ? void 0 : p.kind) ?? "passive", a = Number(((o = e.system) == null ? void 0 : o.kp) ?? 0) || 0, y = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", f = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", u = y ? `<p>${y}</p>` : "", n = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: n,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, a, y;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const d = e.uuid ?? e.id, f = this.document.system ?? {}, u = Array.isArray((a = f.abilities) == null ? void 0 : a.items) ? f.abilities.items.slice() : [];
      return u.push(d), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (y = super._onDropDocument) == null ? void 0 : y.call(this, s, e);
  }
};
X(Te, "PARTS", foundry.utils.mergeObject(R(Te, Te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
})), X(Te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(Te, Te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ii = R(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ni = R(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : ni.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ns = Te;
const ai = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ri(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, a, y, d, f, u;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = hi, CONFIG.Actor.dataModels.Npc = Nt, CONFIG.Actor.dataModels.Jarmu = ki, CONFIG.Actor.dataModels.Bazis = Si, CONFIG.Actor.dataModels.Vallalkozas = zi, (a = CONFIG.Item).dataModels ?? (a.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ts, CONFIG.Item.dataModels.weapon = Ts, CONFIG.Item.dataModels.Pancel = Oi, CONFIG.Item.dataModels.MikroChip = _i, CONFIG.Item.dataModels.Kepesseg = _s, CONFIG.Item.dataModels.ability = _s, CONFIG.Item.dataModels.Targy = qi, CONFIG.Item.dataModels.Egyeb = Ni, CONFIG.Item.dataModels.Jarmuegyseg = Ai, CONFIG.Item.dataModels.Helyiseg = xi, (y = CONFIG.Actor).trackableAttributes ?? (y.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás", (f = CONFIG.Combat).initiative ?? (f.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Lt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Wt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", jt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Jt, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Zt, {
    types: ["Vallalkozas"],
    makeDefault: !0,
    label: "VOTV.VallalkozasSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Yt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", es, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ts, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ss, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", is, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ns, {
    types: ["Helyiseg"],
    makeDefault: !0,
    label: "VOTV.HelyisegSheet"
  });
  const s = "systems/vacuum-of-the-void/assets/blank.svg";
  Hooks.on("preCreateActor", (n, r, p) => {
    ((r == null ? void 0 : r.type) === "Bazis" || (r == null ? void 0 : r.type) === "Vallalkozas") && (r.img = s);
  }), Hooks.on("preUpdateActor", (n, r, p) => {
    ((n == null ? void 0 : n.type) === "Bazis" || (n == null ? void 0 : n.type) === "Vallalkozas") && Object.prototype.hasOwnProperty.call(r ?? {}, "img") && (r.img = s);
  }), Hooks.on("ready", () => {
    var p;
    const n = s, r = (((p = game.actors) == null ? void 0 : p.contents) ?? []).filter(
      (o) => (o.type === "Bazis" || o.type === "Vallalkozas") && (o.img ?? "").toString().trim() !== n
    );
    r.length && r.forEach((o) => o.update({ img: n }).catch(() => {
    }));
  }), Hooks.on("updateActor", (n, r, p, o) => {
    if ((n == null ? void 0 : n.type) !== "Karakter" || !(n != null && n.id)) return;
    const i = n.id;
    setTimeout(() => {
      var h, g, v, k;
      const c = (h = game.actors) == null ? void 0 : h.get(i);
      if (!c || c.type !== "Karakter") return;
      const l = Lt.getTotalSpeedRaw(c), m = (g = c.effects) == null ? void 0 : g.find((w) => w.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !m) {
        const w = ((k = (v = CONFIG.statusEffects) == null ? void 0 : v.find((T) => T.id === "immobilized")) == null ? void 0 : k.img) ?? "";
        c.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: w,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: c.uuid
        }]).then(() => {
          var O, _;
          const T = ((O = canvas.tokens) == null ? void 0 : O.placeables) ?? [];
          for (const C of T)
            ((_ = C == null ? void 0 : C.document) == null ? void 0 : _.actorId) === i && typeof C.draw == "function" && C.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else l > 0 && m && m.delete().then(() => {
        var T, O;
        const w = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const _ of w)
          ((O = _ == null ? void 0 : _.document) == null ? void 0 : O.actorId) === i && typeof _.draw == "function" && _.draw();
      }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", w));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (n, r, p, o) => {
    var T, O, _, C, j, K, U, M, W, Z, J, Y, oe;
    const i = n == null ? void 0 : n.id;
    if (!i) return;
    if ((n.type === "Karakter" || n.type === "Npc") && ((T = r == null ? void 0 : r.system) != null && T.combat) && "initiativeResult" in r.system.combat) {
      const z = Number((_ = (O = n.system) == null ? void 0 : O.combat) == null ? void 0 : _.initiativeResult), te = Number.isFinite(z) ? z : 0, de = game.combat;
      if (de) {
        const De = ((C = de.combatants) == null ? void 0 : C.contents) ?? Array.from(de.combatants ?? []);
        for (const D of De)
          if (((j = D.actor) == null ? void 0 : j.id) === i || D.actorId === i) {
            de.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: te }]).catch(() => {
            });
            break;
          }
      }
    }
    if (n.type === "Npc" && ((K = r == null ? void 0 : r.system) != null && K.identity) && "size" in r.system.identity) {
      const z = ri((M = (U = n.system) == null ? void 0 : U.identity) == null ? void 0 : M.size);
      n.update({
        "prototypeToken.width": z,
        "prototypeToken.height": z
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", n.name, te));
    }
    const c = document.activeElement, l = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA" || c.isContentEditable), m = [], h = (W = game.actors) == null ? void 0 : W.get(i);
    h != null && h.apps && m.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const z of g) {
      if (((Z = z.document) == null ? void 0 : Z.id) !== i || ((J = z.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = z.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" && te !== "VoidVallalkozasSheet" || m.includes(z) || m.push(z);
    }
    if (l && m.some((z) => {
      const te = (z == null ? void 0 : z.form) ?? (z == null ? void 0 : z.element);
      return te && te.contains(c);
    })) return;
    const k = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, w = k && Date.now() - k.at < e ? k.appId : null;
    setTimeout(() => {
      for (const z of m)
        !(z != null && z.rendered) || typeof z.render != "function" || z.id !== w && z.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (n, r, p, o) => {
    var m, h, g;
    const i = n == null ? void 0 : n.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || n.type !== "Fegyver") return;
    const c = ((m = i.system) == null ? void 0 : m.weapons) ?? {}, l = {};
    for (const [v, k] of Object.entries(c)) {
      if (!v.startsWith("slot")) continue;
      const w = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !w || w !== n.id || (l[`system.weapons.${v}.name`] = n.name ?? "", l[`system.weapons.${v}.damage`] = ((h = n.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${v}.bonus`] = ((g = n.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, k, w, T, O, _, C, j, K, U, M, W, Z, J, Y, oe, z, te, de, De, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const y = (v = game.messages) == null ? void 0 : v.get(a), d = (w = (k = y == null ? void 0 : y.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!d) return;
    const f = d.actorId ?? ((T = y == null ? void 0 : y.speaker) == null ? void 0 : T.actor) ?? "";
    if (!f) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((O = game.actors) == null ? void 0 : O.get(d.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(f));
    if (u || (u = ((j = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : j.flatMap((V) => {
      var se;
      return ((se = V.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === f || V.id === d.actorId))) ?? null), !u) return;
    const n = d.itemId ? ((U = (K = u.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, d.itemId)) ?? ((Z = (W = (M = u.items) == null ? void 0 : M.contents) == null ? void 0 : W.find) == null ? void 0 : Z.call(W, (E) => E.id === d.itemId)) : null;
    let r = (d.damageFormula ?? "").trim();
    if (r || (r = (((J = n == null ? void 0 : n.system) == null ? void 0 : J.damage) ?? "").trim()), !r && d.slotKey && (r = (((((Y = u.system) == null ? void 0 : Y.weapons) ?? {})[d.slotKey] ?? {}).damage ?? "").trim()), !r) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (z = game.i18n) == null ? void 0 : z.localize) == null ? void 0 : te.call(z, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const p = new Roll(r);
    await p.evaluate({ async: !0 });
    const o = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = d.targetName || "", c = d.hitLocationName || "", l = ((n == null ? void 0 : n.name) ?? (d.slotKey ? ((D = (((De = u.system) == null ? void 0 : De.weapons) ?? {})[d.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let m = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (m += ` (${c})`), await p.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: u }),
      flavor: m,
      flags: { "vacuum-of-the-void": {} },
      rollMode: o
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var d, f, u, n, r, p;
      if (!((f = (d = e.target) == null ? void 0 : d.closest) != null && f.call(d, "#actors"))) return;
      const t = (n = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : n.call(u, "[data-document-id]"), a = (r = t == null ? void 0 : t.getAttribute) == null ? void 0 : r.call(t, "data-document-id");
      if (!a) return;
      const y = a.includes(".") ? a.split(".").pop() : a;
      y && ((p = game.actors) != null && p.get(y)) && (game.votv._dragSourceActorId = y);
    },
    !0
  ), (async () => {
    var t, a, y, d;
    const e = ((t = game.actors) == null ? void 0 : t.filter((f) => f.type === "Karakter")) ?? [];
    for (const f of e) {
      const u = Lt.getTotalSpeedRaw(f), n = (a = f.effects) == null ? void 0 : a.find((r) => r.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !n) {
        const r = ((d = (y = CONFIG.statusEffects) == null ? void 0 : y.find((p) => p.id === "immobilized")) == null ? void 0 : d.img) ?? "";
        await f.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: r,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: f.uuid
        }]).catch(() => {
        });
      } else u > 0 && n && await n.delete().catch(() => {
      });
    }
  })(), (I = game.user) != null && I.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const a = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(a != null && a.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const y = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: ai },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, d = await a.create(y);
      d && console.log("Vacuum of the Void | Default scene created:", d.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var d, f, u, n, r, p;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((d = game.actors) == null ? void 0 : d.filter((o) => o.type === "Karakter")) ?? [];
    for (const o of t)
      try {
        const i = o.prototypeToken, c = ((f = i == null ? void 0 : i.bar1) == null ? void 0 : f.attribute) ?? "", l = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
        (c || l) && await o.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", o.name, i);
      }
    for (const o of game.scenes ?? []) {
      const i = ((n = o.tokens) == null ? void 0 : n.filter((c) => {
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
    const a = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, y = ((r = game.actors) == null ? void 0 : r.filter((o) => o.type === "Npc")) ?? [];
    for (const o of y)
      try {
        await o.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", o.name, i);
      }
    for (const o of game.scenes ?? []) {
      const i = ((p = o.tokens) == null ? void 0 : p.filter((c) => {
        var l;
        return ((l = c.actor) == null ? void 0 : l.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(a);
        } catch (l) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, l);
        }
    }
  })();
});
Hooks.on("preCreateToken", (I, s, e) => {
  var d, f, u, n, r, p, o, i, c;
  const t = (d = game.votv) == null ? void 0 : d._dragSourceActorId, a = t ?? I.actorId ?? ((f = I._source) == null ? void 0 : f.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const y = a ? (u = game.actors) == null ? void 0 : u.get(a) : I.actor ?? null;
  if (y) {
    if (y.type === "Bazis")
      return (p = ui == null ? void 0 : ui.notifications) == null || p.warn(((r = (n = game.i18n) == null ? void 0 : n.localize) == null ? void 0 : r.call(n, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
    if (y.type === "Vallalkozas")
      return (o = ui == null ? void 0 : ui.notifications) == null || o.warn("Vállalkozás nem helyezhető tokenként a térképre."), !1;
    if (y.type === "Karakter") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (y.type === "Jarmu") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (y.type === "Npc") {
      const l = ri((c = (i = y.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: l,
        height: l
      });
    }
  }
});
Hooks.on("preCreateCombatant", (I, s, e) => {
  var y, d, f;
  const t = I.actorId ? (y = game.actors) == null ? void 0 : y.get(I.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((f = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : f.call(d, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const a = I.initiative;
  (a == null || typeof a == "number" && isNaN(a)) && I.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (I, s, e) => {
  const t = I.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((a) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", a);
  });
});
const Bi = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function oi(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const a = t.actor;
    !a || a.type !== "Karakter" && a.type !== "Npc" || a.update(Bi).catch((y) => {
      console.warn("Vacuum of the Void | KP reset failed for", a.name, y);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || oi(I);
});
function ci() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const a of ((s = game.actors) == null ? void 0 : s.filter((y) => y.type === "Karakter" || y.type === "Npc")) ?? []) {
    const y = a.apps ?? [], d = y.contents ? Array.from(y.contents) : Array.from(y);
    for (const f of d)
      !f || I.has(f.id) || (I.add(f.id), typeof f.render == "function" && f.render(!0));
  }
  for (const a of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = a == null ? void 0 : a.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const y = (t = a == null ? void 0 : a.document) == null ? void 0 : t.type;
    y !== "Karakter" && y !== "Npc" || I.has(a.id) || (I.add(a.id), typeof a.render == "function" && a.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(ci, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && oi(I), setTimeout(ci, 0);
});
Hooks.on("renderSidebarTab", (I, s, e) => {
  if ((I == null ? void 0 : I.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((y) => {
    y.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var y;
  const t = I == null ? void 0 : I.object, a = ((y = t == null ? void 0 : t.document) == null ? void 0 : y.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const d = s[0] ?? s;
    d != null && d.classList && d.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": ai,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var p, o, i, c;
  const t = ((p = I.flags) == null ? void 0 : p["vacuum-of-the-void"]) ?? {}, a = t.resultType, y = t.critLabel, d = t.weaponAttack, f = t.weapon, u = t.vsDefense, n = t.vsDefenseInfo;
  if (!a && !y && !d && !u) return;
  const r = (o = s == null ? void 0 : s.querySelector) == null ? void 0 : o.call(s, ".dice-roll");
  if (r) {
    if (a && r.classList.add(`votv-${a}`), y) {
      const l = r.querySelector(".votv-crit-label");
      if (l)
        l.textContent = y;
      else {
        const m = r.querySelector(".dice-total"), h = (m == null ? void 0 : m.parentElement) ?? r, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, g.textContent = y, h.appendChild(g);
      }
    }
    if (d && f && (f.actorId || (i = I.speaker) != null && i.actor)) {
      const l = r.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? r;
      if (!r.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!f.isHit, k = f.targetName || "Célpont";
        g.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, m.appendChild(g);
      }
      if (f.isHit && !r.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = f.hitLocationRoll, w = f.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(f.actorId ?? ((c = I.speaker) == null ? void 0 : c.actor) ?? ""), v.dataset.itemId = String(f.itemId ?? ""), v.dataset.slotKey = String(f.slotKey ?? ""), v.dataset.targetName = String(f.targetName ?? ""), v.dataset.hitLocationName = String(f.hitLocationName ?? ""), v.dataset.messageId = String(I.id ?? ""), m.appendChild(v);
      }
    }
    if (!d && u && n) {
      const l = r.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? r, h = !!n.isHit, g = n.targetName || "Célpont", v = n.hitLocationRoll, k = n.hitLocationName;
      let w = r.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", m.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const T = r.querySelector(".votv-defense-hitloc");
      if (h && v != null && k) {
        let O = T;
        O || (O = document.createElement("div"), O.className = "votv-defense-hitloc", m.appendChild(O)), O.textContent = `Találati Hely ${v} - ${k}`;
      } else T && T.remove();
    }
  }
});
export {
  Lt as V,
  Vt as c
};
//# sourceMappingURL=vacuum-of-the-void-Rxu2N0fU.mjs.map
