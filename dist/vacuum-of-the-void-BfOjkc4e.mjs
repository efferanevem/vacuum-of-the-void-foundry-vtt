var di = Object.defineProperty;
var mi = Object.getPrototypeOf;
var pi = Reflect.get;
var fi = (S, s, e) => s in S ? di(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var X = (S, s, e) => fi(S, typeof s != "symbol" ? s + "" : s, e);
var M = (S, s, e) => pi(mi(S), e, s);
const { HTMLField: yi, NumberField: A, SchemaField: H, StringField: q, BooleanField: me, ArrayField: qt } = foundry.data.fields;
class Nt extends foundry.abstract.TypeDataModel {
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
class _i extends foundry.abstract.TypeDataModel {
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
class Oi extends foundry.abstract.TypeDataModel {
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
const { NumberField: Ci, StringField: _s } = foundry.data.fields;
class Os extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new _s({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new _s({
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
const { NumberField: Ht, StringField: pt, SchemaField: qs, ArrayField: Ai } = foundry.data.fields;
class Fi extends foundry.abstract.TypeDataModel {
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
function Wt(S) {
  if (!S || !Array.isArray(S.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const p = (r, i = 1) => {
    if (!Array.isArray(r)) return;
    let c = i;
    for (const u of r) {
      if (!u) continue;
      if (Array.isArray(u.terms)) {
        p(u.terms, c);
        continue;
      }
      if (typeof u.operator == "string") {
        c = u.operator === "-" ? -1 : 1;
        continue;
      }
      const m = typeof u.faces == "number" ? u.faces : void 0, h = Array.isArray(u.results) ? u.results : null;
      if (!m || !h || m === 8 || m !== 6) continue;
      const g = !n && c >= 0 && (u.number === 3 || u.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const k of h) {
        if (!k || k.discarded || k.hidden) continue;
        const b = Number(k.result ?? k);
        Number.isFinite(b) && g.push(b);
      }
    }
  };
  p(S.terms, 1);
  const d = s.filter((r) => r === 6).length, y = s.filter((r) => r === 1).length, l = e.filter((r) => r === 6).length, a = t.filter((r) => r === 6).length, o = d + l, f = y + a;
  return o > 0 && o === f ? { resultType: null, label: null } : o >= 3 ? { resultType: "critical", label: "Brutális Siker" } : o === 2 ? { resultType: "critical", label: "Kritikus Siker" } : f >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : f === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ri(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var As, Fs, Es, Ps;
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
    var n, p, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    var u;
    const t = (u = game.votv) == null ? void 0 : u._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, d = this.form ?? this.element;
    let y = { scrollState: {}, focus: null };
    if (p) {
      y.scrollState = this._saveScrollState(p);
      const m = document.activeElement, h = d.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (y.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const l = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const a = this.element, o = this.form ?? this.element, f = y.scrollState, r = y.focus, i = typeof (f == null ? void 0 : f.formScrollTop) == "number" || typeof (f == null ? void 0 : f.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(a, f), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((m = o.querySelector) == null ? void 0 : m.call(o, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(a, f);
    };
    return (i || r) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), l;
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
        var y;
        return d.type === "Pancel" && ((y = d.system) == null ? void 0 : y.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const y = String(((p = d.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), l = Number(y);
      Number.isFinite(l) && (e += l);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var y;
        return d.type === "Pancel" && ((y = d.system) == null ? void 0 : y.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const y = String(((p = d.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), l = Number(y);
      Number.isFinite(l) && (e += l);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var y;
        return d.type === "Pancel" && ((y = d.system) == null ? void 0 : y.equipped) === !0;
      }
    );
    let t = 0;
    for (const d of e) {
      const y = String(((p = d.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), l = Number(y);
      Number.isFinite(l) && (t += l);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var o, f, r, i, c, u, m, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((f = (o = e.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : f.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, p = Q._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const d = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let y;
    p === 1 ? y = -6 : p === 2 ? y = -3 : y = d, y += Q._getTotalArmorSpeedPenaltyStatic(s);
    const l = Number(((m = (u = s.system) == null ? void 0 : u.combat) == null ? void 0 : m.speed) ?? 0) || 0, a = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return l + a + (Number.isFinite(y) ? y : 0);
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
    var f, r, i, c, u, m, h, g, k, b, w, I;
    const e = s ?? this.form ?? this.element;
    let t = (f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((m = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : m.resources) ?? {}, p = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, d = ((k = n.currentHealth) == null ? void 0 : k.legs) ?? 0, y = Q._healthStatusFromRatio(d, p), l = Number(((I = (w = (b = this.actor) == null ? void 0 : b.system) == null ? void 0 : w.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let a;
    y === 0 ? a = 0 : y === 1 ? a = -6 : y === 2 ? a = -3 : a = l;
    const o = this._getTotalArmorSpeedPenalty();
    a += o, t.textContent = String(a);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var a, o, f, r, i, c, u, m, h, g, k, b, w;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (f = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : f.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, p = (u = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && u.call(c, "lookaround") ? 1 : 0, d = (g = (h = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, y = (w = (b = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : b.has) != null && w.call(b, "threequarteredcover") ? 6 : 0, l = n + this._getTotalArmorProtectionBonus() + p + d + y;
    t.textContent = String(l);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (f) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, f)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${f}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), d = t('input[name="system.combat.defense"]'), y = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const l = Number(d == null ? void 0 : d.value) || 0, a = Number(y == null ? void 0 : y.value) || 0, o = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(l + a + o);
  }
  _writeTotalSpeed(s = null) {
    var u, m, h, g, k, b, w, I;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), d = t('input[name="system.combat.speed"]'), y = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (m = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : m.has) != null && h.call(m, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const l = ((k = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : k.resources) ?? {}, a = ((w = (b = l.hitLocations) == null ? void 0 : b.legs) == null ? void 0 : w.value) ?? 0, o = ((I = l.currentHealth) == null ? void 0 : I.legs) ?? 0;
    if (Q._healthStatusFromRatio(o, a) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(d == null ? void 0 : d.value) || 0, i = Number(y == null ? void 0 : y.value) || 0, c = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(r + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var d, y, l, a;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((d = this.actor.system) == null ? void 0 : d.resources) ?? {}, n = ((l = (y = t.hitLocations) == null ? void 0 : y[e]) == null ? void 0 : l.value) ?? 0, p = ((a = t.currentHealth) == null ? void 0 : a[e]) ?? 0;
    return Q._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var y, l, a, o;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((y = s == null ? void 0 : s.system) == null ? void 0 : y.resources) ?? {}, p = ((a = (l = n.hitLocations) == null ? void 0 : l[t]) == null ? void 0 : a.value) ?? 0, d = ((o = n.currentHealth) == null ? void 0 : o[t]) ?? 0;
    return Q._healthStatusFromRatio(d, p);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et, T, x, z, G, ke, ne, Le, _e, we, Re, tt, st, Pt, $t, xt, zt, _t, dt, rs, as, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs, bs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, d = n.currentHealth ?? {}, y = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const v of y) {
      const N = ((bt = p[v]) == null ? void 0 : bt.value) ?? 0, L = d[v] ?? 0;
      e.computedHealthStatus[v] = Q._healthStatusFromRatio(L, N);
    }
    const l = (Number(d.head) || 0) === 0, o = ["torso", "arms", "legs"].filter((v) => (Number(d[v]) || 0) === 0).length;
    e.showDeathSkull = l || o >= 2;
    const f = e.computedHealthStatus.legs ?? 3, r = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    f === 0 ? i = 0 : f === 1 ? i = -6 : f === 2 ? i = -3 : i = r;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const u = Number(((It = (wt = this.actor.system) == null ? void 0 : wt.combat) == null ? void 0 : It.givenProtection) ?? 0) || 0, m = (Tt = (Qe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Qe.has) != null && Tt.call(Qe, "lookaround") ? 1 : 0, h = (T = (et = (Dt = this.actor) == null ? void 0 : Dt.statuses) == null ? void 0 : et.has) != null && T.call(et, "halfcover") ? 3 : 0, g = (G = (z = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : z.has) != null && G.call(z, "threequarteredcover") ? 6 : 0, k = u + this._getTotalArmorProtectionBonus() + m + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const b = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(b.defense) || 0) + (Number(b.defenseBonus) || 0) + (Number(b.givenProtection) || 0);
    const w = Number(b.givenSpeed);
    let I = (Number(b.speed) || 0) + (Number(b.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    f === 0 && (I = 0), (_e = (Le = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Le.has) != null && _e.call(Le, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Re = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : Re.givenProtection } },
      { inplace: !1 }
    ), I = 0), e.totalSpeed = I;
    const _ = Q.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [v, N] of Object.entries(_)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[v] = L, e.skillDisabled[v] = L === 0 ? " disabled" : "", e.skillHasHealthTint[v] = !0;
    }
    const O = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (O.slotOrder ?? "").trim(), K = j ? j.split(/\s*,\s*/).filter((v) => C.includes(v)) : [], U = (tt = this.actor.system.gear) == null ? void 0 : tt.microchips, E = U && typeof U == "object" && !Array.isArray(U) ? U : {}, V = (((st = E.slot1) == null ? void 0 : st.itemId) ?? "").trim(), Z = (((Pt = E.slot2) == null ? void 0 : Pt.itemId) ?? "").trim(), J = ((($t = E.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((v) => v.type !== "Kepesseg" && v.type !== "ability").slice().sort((v, N) => {
      const L = typeof v.sort == "number" ? v.sort : 0, F = typeof N.sort == "number" ? N.sort : 0;
      return L - F;
    }).map((v) => {
      var Me, nt, rt, Ve, Je, Ot;
      const N = v.type === "Fegyver", L = v.type === "MikroChip";
      let F = 0, B = "", ue = null;
      for (let mt = 0; mt < K.length; mt++) {
        const Ct = K[mt];
        if ((((Me = O[Ct]) == null ? void 0 : Me.itemId) ?? "") === v.id) {
          F = mt + 1, B = ((nt = O[Ct]) == null ? void 0 : nt.bonus) ?? "", ue = Ct;
          break;
        }
      }
      let ae = null;
      L && (V === v.id ? ae = "slot1" : Z === v.id ? ae = "slot2" : J === v.id && (ae = "slot3"));
      const it = N && ((rt = v.system) != null && rt.damage) ? v.system.damage : "", Ie = N && typeof ((Ve = v.system) == null ? void 0 : Ve.range) == "string" ? (v.system.range || "").trim() : "", Oe = ue ? Number((Je = O[ue]) == null ? void 0 : Je.bonus) || 0 : "";
      return {
        id: v.id,
        name: v.name,
        img: v.img,
        type: v.type,
        isWeapon: N,
        slotAssignment: F,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: ae,
        isEquipped: !!(ue || ae),
        damage: it,
        rangeStr: Ie,
        slotBonusNum: Oe,
        quantity: Number(((Ot = v.system) == null ? void 0 : Ot.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const R = (((xt = this.actor.items) == null ? void 0 : xt.contents) ?? []).filter((v) => v.type === "Fegyver"), te = R.map((v) => ({ id: v.id, name: v.name, img: v.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", De = K.filter((v) => {
      const L = ((O[v] ?? {}).itemId ?? "").trim();
      return L ? !!R.find((B) => B.id === L) : !1;
    });
    e.weaponSlots = De.map((v, N) => {
      const L = O[v] ?? {}, F = (L.itemId ?? "").trim(), B = te.find((Oe) => Oe.id === F), ue = R.find((Oe) => Oe.id === F), ae = (ue == null ? void 0 : ue.system) ?? {}, it = ae.size === "thrown", Ie = (typeof ae.range == "string" ? (ae.range || "").trim() : "") || "—";
      return {
        slotKey: v,
        itemId: F,
        slotNum: N + 1,
        displayName: (B == null ? void 0 : B.name) || L.name || de,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: it,
        rangeStr: Ie
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, P = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = R.map((v) => {
      var vs, ks, ws;
      const N = v.id;
      let L = null, F = {};
      for (const Kt of K)
        if ((((vs = O[Kt]) == null ? void 0 : vs.itemId) ?? "").trim() === N) {
          L = Kt, F = O[Kt] ?? {};
          break;
        }
      const B = !!L, ue = ((ks = v.system) == null ? void 0 : ks.equipped) !== void 0 && ((ws = v.system) == null ? void 0 : ws.equipped) !== null ? !!v.system.equipped : B, ae = (v == null ? void 0 : v.system) ?? {}, it = typeof ae.range == "string" ? (ae.range || "").trim() : "", Ie = ae.type ?? "", Oe = (D[Ie] ?? Ie) || "—", Me = ae.size ?? "", nt = (P[Me] ?? Me) || "", rt = [Oe, nt].filter(Boolean).join(", ") || Oe || "—", Ve = Ie === "projectile" || Me === "thrown", Je = ae.quantity, Ot = Je != null ? String(Je).trim() : "1", mt = String(F.bonus ?? "").trim(), Ct = String(ae.bonus ?? "").trim(), li = mt || Ct || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? de,
        img: (v == null ? void 0 : v.img) ?? "",
        bonus: li,
        damage: F.damage ?? ae.damage ?? "",
        rangeStr: it || "—",
        typeLabel: Oe,
        typeAndSize: rt,
        quantity: Ot,
        quantityDisplay: Ve ? Ot : "—",
        isProjectile: Ve,
        equipped: ue,
        special: (ae.special ?? "").trim() || "—"
      };
    });
    const W = (((zt = this.actor.items) == null ? void 0 : zt.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = W.map((v) => {
      var F, B;
      const N = (v == null ? void 0 : v.system) ?? {}, L = ((F = v.system) == null ? void 0 : F.equipped) !== void 0 && ((B = v.system) == null ? void 0 : B.equipped) !== null ? !!v.system.equipped : !1;
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: Ri((N.level ?? "").toString().trim()),
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: L
      };
    });
    const se = (((_t = this.actor.items) == null ? void 0 : _t.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = se.map((v) => {
      const N = (v == null ? void 0 : v.system) ?? {}, L = (N.description ?? "").trim(), F = L ? L.length > 60 ? L.slice(0, 57) + "…" : L : "—", B = N.quantity != null ? String(N.quantity).trim() : "1";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        quantity: B,
        description: F
      };
    });
    const le = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((v) => v.type === "Egyeb");
    e.egyebList = le.map((v) => {
      const L = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), F = L ? L.length > 80 ? L.slice(0, 77) + "…" : L : "";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        description: F
      };
    });
    const pe = (((rs = this.actor.items) == null ? void 0 : rs.contents) ?? []).filter((v) => v.type === "MikroChip"), re = pe.map((v) => ({ id: v.id, name: v.name, img: v.img })), ve = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (v) => {
      var L, F, B;
      const N = [];
      return v !== 1 && N.push((((L = E.slot1) == null ? void 0 : L.itemId) ?? "").trim()), v !== 2 && N.push((((F = E.slot2) == null ? void 0 : F.itemId) ?? "").trim()), v !== 3 && N.push((((B = E.slot3) == null ? void 0 : B.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((v) => !fe(1).includes(v.id)), e.microchipItemsSlot2 = re.filter((v) => !fe(2).includes(v.id)), e.microchipItemsSlot3 = re.filter((v) => !fe(3).includes(v.id)), e.microchipSlots = ce.map((v) => {
      const N = E[v] ?? {}, L = (N.itemId ?? "").trim(), F = pe.find((B) => B.id === L);
      return {
        slotKey: v,
        itemId: L,
        displayName: (F == null ? void 0 : F.name) || N.name || ve,
        img: (F == null ? void 0 : F.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((v) => {
      const N = `slot${v}`, L = E[N] ?? {}, F = (L.itemId ?? "").trim(), B = re.find((ue) => ue.id === F);
      e[`microchip${v}ItemId`] = F, e[`microchip${v}DisplayName`] = (B == null ? void 0 : B.name) || L.name || ve, e[`microchip${v}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((v) => {
      var Me, nt, rt, Ve;
      const N = v.id;
      let L = null;
      for (const Je of ce)
        if ((((Me = E[Je]) == null ? void 0 : Me.itemId) ?? "").trim() === N) {
          L = Je;
          break;
        }
      const F = !!L, B = ((nt = v == null ? void 0 : v.system) == null ? void 0 : nt.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", ae = B === "active", it = Number((rt = v == null ? void 0 : v.system) == null ? void 0 : rt.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, Ie = (((Ve = v == null ? void 0 : v.system) == null ? void 0 : Ve.description) ?? "").trim(), Oe = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: ue,
        description: Oe,
        kp: it,
        isActive: ae,
        slotKey: L ?? "",
        equipped: F
      };
    });
    const Ke = (((as = e.weaponsTable) == null ? void 0 : as.length) ?? 0) > 0 || (((os = e.armorTable) == null ? void 0 : os.length) ?? 0) > 0 || (((cs = e.microchipsTable) == null ? void 0 : cs.length) ?? 0) > 0 || (((ls = e.itemsTable) == null ? void 0 : ls.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ke;
    const Ue = this.actor.system.abilities ?? {}, xe = (((us = this.actor.items) == null ? void 0 : us.contents) ?? []).map((v) => {
      var N, L, F;
      return {
        id: v.id,
        name: v.name,
        img: v.img,
        kind: ((N = v.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = v.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((F = v.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), Be = new Map(xe.map((v) => [v.id, v])), ot = "— Nincs képesség —", He = (v) => {
      const N = Ue[v] ?? {}, L = (N.itemId ?? "").trim(), F = L ? Be.get(L) : null, B = (F == null ? void 0 : F.description) ?? "", ue = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: L,
        displayName: (F == null ? void 0 : F.name) || N.name || ot,
        img: (F == null ? void 0 : F.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = He("faji"), e.abilityHatterSlot = He("hatter");
    const Ye = (v) => {
      const N = Ue[v];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Ge = (v) => v.map((N) => {
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
    ], ze = (ys = (fs = e.system) == null ? void 0 : fs.combat) == null ? void 0 : ys.initiativeRanges, qe = Array.isArray(ze) ? ze.map((v) => ({ min: Number(v.min) ?? 0, max: Number(v.max) ?? 0, kp: Math.min(10, Math.max(0, Number(v.kp) ?? 0)) })) : [], We = (qe.length > 0 ? qe : lt).slice().sort((v, N) => v.min - N.min), Xe = qe.map((v) => v.min), At = Xe.length ? Math.min(...Xe) : 0, Ft = Xe.length ? Math.max(...Xe) : 0;
    e.initiativeRanges = qe.map((v) => ({ ...v, isFirst: v.min === At, isLast: v.min === Ft }));
    let ft = 0;
    if (typeof ie == "number" && ie >= 0 && We.length > 0) {
      const v = We[0], N = We[We.length - 1];
      let L = null;
      ie <= v.max ? L = v : ie >= N.min ? L = N : L = We.find((F) => ie >= F.min && ie <= F.max), L && (ft = L.kp);
    }
    e.kpDots = ee.map((v, N) => {
      const L = N + 1, F = !!Number(ct[v]), B = L <= ft;
      return { index: L, used: F, usable: B };
    });
    const Et = !!((hs = (gs = game.combat) == null ? void 0 : gs.combatants) != null && hs.some((v) => {
      var N;
      return ((N = v.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = Et, e.canEditInitiative = !!((bs = game.user) != null && bs.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var f, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const u = (i.currentTarget.dataset.slot ?? "").trim();
      if (!u) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-CJhmpad9.mjs");
      m(this.actor, u);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var m, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let u = (c.dataset.itemId ?? "").trim();
      if (!u) {
        const k = (c.dataset.slot ?? "").trim();
        if (!k) return;
        u = (((((h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      u && await this._rollWeaponDamage(u, ((g = c.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-CJhmpad9.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, k;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, u = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(u) || u < 1 || u > 6) return;
      const m = `system.resources.kpDot${u}`, h = !!Number((k = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : k[`kpDot${u}`]);
      await this.actor.update({ [m]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var m;
      const c = i ? i.currentTarget : (m = e.querySelector) == null ? void 0 : m.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const u = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", u > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const p = (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
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
        callback: (k) => {
          k && this.actor.update({ img: k });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var g;
      i.preventDefault();
      const c = i.currentTarget, u = c.dataset.skill, m = ((g = c.textContent) == null ? void 0 : g.trim()) || u, { openRollSheetForSkill: h } = await import("./roll-sheet-CJhmpad9.mjs");
      h(this.actor, u, m);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var b, w, I, _, O, C, j;
      i.preventDefault();
      const u = i.currentTarget.closest(".karakter-weapon-slot"), m = u == null ? void 0 : u.dataset.slot;
      if (!m) return;
      const g = (((w = (((b = this.actor.system) == null ? void 0 : b.weapons) ?? {})[m]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const k = ((_ = (I = this.actor.items).get) == null ? void 0 : _.call(I, g)) ?? ((C = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (K) => K.id === g));
      (j = k == null ? void 0 : k.sheet) == null || j.render(!0);
    });
    const y = (i, c) => {
      var h;
      const u = i.dataset.itemId;
      if (!u) return;
      const m = this.actor.items.get(u);
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
      i.preventDefault(), y(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), y(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, u = c.dataset.itemId;
      if (!u) return;
      const m = this.actor.items.get(u);
      if (!m) return;
      let h = Number(c.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await m.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const u = i.currentTarget.dataset.itemId;
      if (!u) return;
      const m = this.actor, h = m.items.get(u);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const k = m.system.weapons ?? {}, b = (k.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = b ? b.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = I.find((O) => {
          var C;
          return (((C = k[O]) == null ? void 0 : C.itemId) ?? "").trim() === u;
        });
        if (_) {
          const O = I.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const c = i.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const m = this.actor.items.get(u);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = g ? g.split(/\s*,\s*/).filter((C) => k.includes(C)) : [], w = b.find((C) => {
        var j;
        return (((j = h[C]) == null ? void 0 : j.itemId) ?? "").trim() === u;
      }) ?? null;
      if (c.checked) {
        if (w) return;
        let C = b.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const j = new Set(b);
        if (!C) {
          const K = k.find((U) => !j.has(U));
          if (!K) return;
          C = K, b.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${C}.itemId`]: u,
          [`system.weapons.${C}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${C}.damage`]: ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = m == null ? void 0 : m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (w) {
        const C = b.filter((j) => j !== w);
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
      const u = c.closest(".karakter-microchip-slot-select-wrap"), m = u == null ? void 0 : u.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !m && u && u.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const c = i.currentTarget, u = c.closest(".karakter-microchip-slot-select-wrap"), m = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display"), h = m == null ? void 0 : m.dataset.slot;
      if (!h) return;
      const g = (c.dataset.itemId ?? "").trim(), k = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", b = (c.dataset.itemImg ?? "").trim(), w = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = k);
      let I = u == null ? void 0 : u.querySelector(".karakter-microchip-slot-thumb");
      b ? (I || (I = document.createElement("img"), I.className = "karakter-microchip-slot-thumb", I.alt = "", m == null || m.insertBefore(I, w)), I.src = b, I.style.display = "") : I && I.remove(), u == null || u.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${h}.itemId`]: g,
        [`system.gear.microchips.${h}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (O[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var k, b;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      if (!u || u.type !== "MikroChip") return;
      const m = ((b = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : b.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var I;
        return (((I = m[w]) == null ? void 0 : I.itemId) ?? "").trim() === c;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const c = i.currentTarget.dataset.slot;
      if (!c) return;
      const u = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${c}.active`]: u }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, c) => {
      const u = c.dataset.slot;
      c.addEventListener("dragover", (m) => this._onMicrochipSlotDragOver(m, u)), c.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (m) => this._onMicrochipSlotDrop(m, u));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const u = c.dataset.slot;
      u && (c.addEventListener("dragover", (m) => this._onAbilitySingleDragOver(m, u)), c.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (m) => {
        var h;
        (h = m.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const u = c.dataset.area;
      u && (c.addEventListener("dragover", (m) => this._onAbilityAreaDragOver(m, u)), c.addEventListener("dragleave", (m) => {
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
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, u = i.currentTarget.dataset.itemId;
      if (!c || !u) return;
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((k = m[c]) == null ? void 0 : k.items) ? m[c].items.slice() : []).filter((b) => b !== u);
      await this.actor.update({ [`system.abilities.${c}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const u = i.currentTarget.dataset.itemId;
      if (!u) return;
      const m = this.actor.items.get(u);
      (h = m == null ? void 0 : m.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const u = i.currentTarget.dataset.itemId;
      u && await this._postAbilityToChat(u);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const u = i.currentTarget.dataset.itemId;
      if (!u) return;
      const m = this.actor.items.get(u);
      m && (m.type === "Kepesseg" || m.type === "ability" ? await this._postAbilityToChat(u) : (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(u));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const m = this.actor.items.get(u);
      if (!m || m.type !== "Fegyver") return;
      const h = (c.value ?? "").trim();
      await m.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, k = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${u}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const m = this.actor.items.get(u);
      !m || m.type !== "Pancel" || (await m.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const c = i.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const m = this.actor.items.get(u);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = g ? g.split(/\s*,\s*/).filter((C) => k.includes(C)) : [], w = b.find((C) => {
        var j;
        return (((j = h[C]) == null ? void 0 : j.itemId) ?? "").trim() === u;
      }) ?? null;
      if (c.checked) {
        if (w) return;
        let C = b.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const j = new Set(b);
        if (!C) {
          const K = k.find((U) => !j.has(U));
          if (!K) return;
          C = K, b.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": b.join(","),
          [`system.weapons.${C}.itemId`]: u,
          [`system.weapons.${C}.name`]: m.name ?? "",
          [`system.weapons.${C}.damage`]: ((_ = m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (w) {
        const C = b.filter((j) => j !== w);
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
      const u = i.currentTarget.dataset.itemId;
      if (!u) return;
      const m = this.actor, h = m.items.get(u), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const k = m.system.weapons ?? {}, b = (k.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = b ? b.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = I.find((O) => {
          var C;
          return (((C = k[O]) == null ? void 0 : C.itemId) ?? "").trim() === u;
        });
        if (_) {
          const O = I.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [u]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      !u || u.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const c = i.currentTarget, u = (c.dataset.itemId ?? "").trim();
      if (!u) return;
      const m = this.actor.items.get(u);
      if (!m || m.type !== "Targy") return;
      const h = (c.value ?? "").trim();
      await m.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, k = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${u}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const l = this, a = (i) => {
      var m, h, g, k;
      if (!i) return;
      const c = l._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const u = ((h = (m = c.system) == null ? void 0 : m.resources) == null ? void 0 : h.currentHealth) != null || ((k = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : k.hitLocations) != null;
      l.actor.update(c).then(() => {
        u && setTimeout(() => l.render(!0), 260);
      }).catch((b) => console.warn("VoidKarakterSheet save failed", b));
    }, o = (i) => {
      var c, u, m;
      return i && (((u = (c = l.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, i)) || l.id && ((m = i.closest) == null ? void 0 : m.call(i, `#${CSS.escape(l.id)}`)));
    };
    l._votvBlur = (i) => {
      var g;
      const c = i.target;
      if (!c || !c.form) return;
      const u = c.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const m = c.form;
      if (!o(m)) return;
      const h = i.relatedTarget;
      h && (m.contains(h) || l.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(l.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: l.id, at: Date.now() }), a(m));
    }, document.body.addEventListener("blur", l._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var y, l, a;
    const e = {};
    for (const o of s.elements) {
      if (!o.name || o.disabled || o.type === "radio" && !o.checked || o.name.startsWith("system.resources.healthStatus.")) continue;
      let f;
      o.type === "checkbox" ? f = o.checked : o.type === "number" ? f = o.value === "" ? 0 : Number(o.value) : f = o.value ?? "", foundry.utils.setProperty(e, o.name, f);
    }
    const t = foundry.utils.mergeObject(
      ((y = this.actor.system) == null ? void 0 : y.resources) ?? {},
      ((l = foundry.utils.expandObject(e).system) == null ? void 0 : l.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    for (const o of d) {
      const f = ((a = n[o]) == null ? void 0 : a.value) ?? 0, r = p[o] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${o}`, Q._healthStatusFromRatio(r, f));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, d, y, l, a, o, f, r, i, c, u, m;
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
          let k = g.id;
          if (((n = g.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(g.toObject(), { type: "Kepesseg" });
            k = ((p = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : p.id) ?? k;
          }
          const b = (((d = g.system) == null ? void 0 : d.kind) ?? "passive").toString();
          if (b === "module") {
            (l = (y = ui.notifications) == null ? void 0 : y.warn) == null || l.call(y, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
            return;
          }
          const w = this.actor.system.abilities ?? {};
          if (b === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": k,
              "system.abilities.faji.name": g.name
            });
            return;
          }
          if (b === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": k,
              "system.abilities.hatter.name": g.name
            });
            return;
          }
          const I = b === "active" ? "active" : "passive", _ = Array.isArray((a = w[I]) == null ? void 0 : a.items) ? w[I].items.slice() : Array.isArray(w[I]) ? w[I].slice() : [];
          _.includes(k) || _.push(k), await this.actor.update({ [`system.abilities.${I}.items`]: _ });
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
          const k = this.actor, b = ((f = g.parent) == null ? void 0 : f.id) !== k.id;
          let w = g.id;
          if (b) {
            const I = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            w = ((r = (await k.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : r.id) ?? w;
          }
          if (b) {
            const I = ((i = k.system) == null ? void 0 : i.weapons) ?? {}, _ = (I.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = _ ? _.split(/\s*,\s*/).filter((K) => O.includes(K)) : [], j = C.filter((K) => {
              var U;
              return (((U = I[K]) == null ? void 0 : U.itemId) ?? "").trim() === w;
            });
            if (j.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((E) => !j.includes(E)).join(",")
              };
              for (const E of j)
                U[`system.weapons.${E}.itemId`] = "", U[`system.weapons.${E}.name`] = "", U[`system.weapons.${E}.damage`] = "", U[`system.weapons.${E}.bonus`] = "";
              await k.update(U);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const k = this.actor;
          if (((c = g.parent) == null ? void 0 : c.id) !== k.id) {
            const b = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            await k.createEmbeddedDocuments("Item", [b]);
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "MikroChip") {
          const k = this.actor;
          ((u = g.parent) == null ? void 0 : u.id) !== k.id && await k.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
        if (g && g.documentName === "Item" && (g.type === "Targy" || g.type === "Egyeb")) {
          const k = this.actor;
          ((m = g.parent) == null ? void 0 : m.id) !== k.id && await k.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var p, d, y;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (y = s.currentTarget) == null || y.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var y, l, a, o, f, r;
    s.preventDefault(), s.stopPropagation(), (y = s.currentTarget) == null || y.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((l = s.dataTransfer) == null ? void 0 : l.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
      [`system.weapons.${e}.damage`]: ((f = p.system) == null ? void 0 : f.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((r = p.system) == null ? void 0 : r.bonus) ?? ""
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
    var a, o;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const p = this.actor.items.contents.slice().sort((f, r) => {
      const i = typeof f.sort == "number" ? f.sort : 0, c = typeof r.sort == "number" ? r.sort : 0;
      return i - c;
    }).map((f) => f.id), d = p.indexOf(t), y = p.indexOf(e);
    if (d === -1 || y === -1) return;
    p.splice(d, 1), p.splice(y, 0, t);
    const l = p.map((f, r) => ({
      _id: f,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", l);
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
    var l, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((l = e.system) == null ? void 0 : l.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const f = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (f === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", f === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var o, f, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((f = e.system) == null ? void 0 : f.kp) ?? 0) || 0, p = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", l = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: a,
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
    var d, y, l;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((y = n.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((l = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : l.id) ?? p;
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
    var l, a, o, f;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((o = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : o.id) ?? p;
    }
    const d = this.actor.system.abilities ?? {}, y = Array.isArray((f = d[e]) == null ? void 0 : f.items) ? d[e].items.slice() : Array.isArray(d[e]) ? d[e].slice() : [];
    y.includes(p) || y.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: y });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, d, y;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (y = s.currentTarget) == null || y.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var y, l, a, o, f;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((l = s.dataTransfer) == null ? void 0 : l.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    ((o = p.parent) == null ? void 0 : o.id) !== this.actor.id && (d = ((f = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : f.id) ?? d), await this.actor.update({
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
    const l = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, a = new Roll(l);
    await a.evaluate({ async: !0 });
    const { resultType: o, label: f } = Wt(a), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: o, critLabel: f } },
      rollMode: r
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
    var b, w;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((I) => I.type === "Fegyver");
    let d = null;
    t.itemId && (d = p.find((I) => I.id === t.itemId) ?? null);
    const y = d && d.name || t.name || `Fegyver (${s})`, l = Number(t.bonus || 0) || 0, a = ((b = d == null ? void 0 : d.system) == null ? void 0 : b.type) || "kinetic", o = (((w = d == null ? void 0 : d.system) == null ? void 0 : w.skillKey) ?? "").trim(), f = o && n[o] !== void 0 ? o : a === "explosive" ? "grenadeUse" : "firearms", r = Number(n[f] || 0) || 0, i = l + r, u = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, m = new Roll(u);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: g } = Wt(m), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${y} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var l, a, o, f, r, i, c, u, m, h;
    const t = this.actor;
    if (!t) return;
    let n = ((a = (l = t.items).get) == null ? void 0 : a.call(l, s)) ?? ((f = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : f.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : m.call(u, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(p);
    await d.evaluate({ async: !0 });
    const y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: y
    });
  }
};
X(Q, "PARTS", foundry.utils.mergeObject(
  M(Q, Q, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(Q, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(Q, Q, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((As = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Fs = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ps = (Es = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Es.window) == null ? void 0 : Ps.contentClasses) ?? [],
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
function Mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
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
    var n, p, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, c = n.contains(i), u = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && u && (p.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), y = this.element, l = this.form ?? this.element, a = p.scrollState, o = p.focus, f = typeof (a == null ? void 0 : a.formScrollTop) == "number" || typeof (a == null ? void 0 : a.windowScrollTop) == "number", r = () => {
      var i, c;
      if (this._applyScrollState(y, a), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const u = ((i = l.querySelector) == null ? void 0 : i.call(l, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (c = l.querySelector) == null ? void 0 : c.call(l, `[name="${CSS.escape(o.name)}"]`) : null);
        u && (u.tagName === "INPUT" || u.tagName === "TEXTAREA") && (u.focus({ preventScroll: !0 }), typeof u.selectionStart == "number" && (u.selectionStart = o.selectionStart ?? 0, u.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(y, a);
    };
    return (f || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), d;
  }
  async _prepareContext(s) {
    var He, Ye, Ge, ct, ee, ye, ie, lt, ze, qe, ut, We, Xe, At, Ft, ft, Et, yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((He = this.actor) == null ? void 0 : He.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, d = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, y = (lt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && lt.call(ie, "halfcover") ? 3 : 0, l = (qe = (ze = t == null ? void 0 : t.statuses) == null ? void 0 : ze.has) != null && qe.call(ze, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + d + y + l;
    const a = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], o = ((We = t == null ? void 0 : t.system) == null ? void 0 : We.weapons) ?? {}, f = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (o.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((T) => f.includes(T)) : [], c = a.filter((T) => T.type === "Fegyver"), u = c.map((T) => ({ id: T.id, name: T.name, img: T.img })), m = "— Nincs fegyver —", h = i.length > 0 ? i : f, g = f.filter((T) => !h.includes(T)), k = [...h, ...g], b = k.filter((T) => {
      var z;
      const x = (((z = o[T]) == null ? void 0 : z.itemId) ?? "").trim();
      return x && c.some((G) => G.id === x);
    });
    e.weaponSlots = b.map((T) => {
      const x = o[T] ?? {}, z = (x.itemId ?? "").trim(), G = u.find((we) => we.id === z), ke = c.find((we) => we.id === z), ne = (ke == null ? void 0 : ke.system) ?? {}, Le = ne.size === "thrown", _e = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: T,
        itemId: z,
        displayName: (G == null ? void 0 : G.name) || x.name || m,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Le,
        rangeStr: _e
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, I = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((T) => {
      var _t;
      const x = T.id;
      let z = null, G = {};
      for (const dt of k)
        if ((((_t = o[dt]) == null ? void 0 : _t.itemId) ?? "").trim() === x) {
          z = dt, G = o[dt] ?? {};
          break;
        }
      const ke = !!z, ne = (T == null ? void 0 : T.system) ?? {}, Le = typeof ne.range == "string" ? (ne.range || "").trim() : "", _e = ne.type ?? "", we = (w[_e] ?? _e) || "—", Re = ne.size ?? "", tt = (I[Re] ?? Re) || "", st = [we, tt].filter(Boolean).join(", ") || we || "—", Pt = _e === "projectile" || Re === "thrown", $t = ne.quantity != null ? String(ne.quantity).trim() : "1", xt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", zt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: z ?? "",
        itemId: x,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? m,
        img: (T == null ? void 0 : T.img) ?? "",
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
    const _ = a.filter((T) => T.type === "Pancel");
    e.armorTable = _.map((T) => {
      var G;
      const x = (T == null ? void 0 : T.system) ?? {}, z = ((G = T.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: Mi((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: z
      };
    });
    const O = ((At = (Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.gear) == null ? void 0 : At.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], j = a.filter((T) => T.type === "MikroChip");
    e.microchipsTable = j.map((T) => {
      var _e, we, Re, tt;
      const x = T.id;
      let z = null;
      for (const st of C)
        if ((((_e = O[st]) == null ? void 0 : _e.itemId) ?? "").trim() === x) {
          z = st;
          break;
        }
      const G = ((we = T == null ? void 0 : T.system) == null ? void 0 : we.abilityType) ?? "", ke = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((Re = T == null ? void 0 : T.system) == null ? void 0 : Re.description) ?? "").trim(), Le = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        typeLabel: ke,
        description: Le,
        kp: Number((tt = T == null ? void 0 : T.system) == null ? void 0 : tt.replaceCost) >= 0 ? Number(T.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: z ?? "",
        equipped: !!z
      };
    });
    const K = a.filter((T) => T.type === "Targy");
    e.itemsTable = K.map((T) => {
      const x = (T == null ? void 0 : T.system) ?? {}, z = (x.description ?? "").trim(), G = z ? z.length > 60 ? z.slice(0, 57) + "…" : z : "—";
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: G
      };
    });
    const U = a.filter((T) => T.type === "Egyeb");
    e.egyebList = U.map((T) => {
      const z = (((T == null ? void 0 : T.system) ?? {}).description ?? "").trim(), G = z ? z.length > 80 ? z.slice(0, 77) + "…" : z : "";
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        description: G
      };
    });
    const E = (((Ft = e.weaponsTable) == null ? void 0 : Ft.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((Et = e.microchipsTable) == null ? void 0 : Et.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !E;
    const V = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = a.filter((T) => T.type === "Kepesseg" || T.type === "ability").map((T) => {
      var x, z, G;
      return {
        id: T.id,
        name: T.name,
        img: T.img,
        description: ((x = T.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((z = T.system) == null ? void 0 : z.kp) ?? 0) || 0,
        kind: (((G = T.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), J = new Map(Z.map((T) => [T.id, T])), Y = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Y, e.abilityHatterSlot = Y;
    const oe = (T) => {
      const x = V[T];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, R = (T) => (T || []).map((x) => {
      const z = J.get(x);
      if (!z) return null;
      const G = z.kind === "species";
      return {
        id: z.id,
        name: z.name,
        img: z.img,
        description: z.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: G ? 0 : z.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = R(oe("passive")), e.abilityActiveList = R(oe("active"));
    const te = t == null ? void 0 : t.id, de = !!((vt = (bt = game.combat) == null ? void 0 : bt.combatants) != null && vt.some(
      (T) => {
        var x;
        return (((x = T.actor) == null ? void 0 : x.id) ?? T.actorId) === te;
      }
    ));
    e.showHarcSection = de;
    const De = ((kt = e.system) == null ? void 0 : kt.resources) ?? {}, D = (It = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : It.initiativeResult, P = typeof D == "number" ? D : -1, W = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], se = (Qe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Qe.initiativeRanges, le = Array.isArray(se) ? se.map((T) => ({ min: Number(T.min) ?? 0, max: Number(T.max) ?? 0, kp: Math.min(10, Math.max(0, Number(T.kp) ?? 0)) })) : [], re = (le.length > 0 ? le : W).slice().sort((T, x) => T.min - x.min), ve = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < ve && (ce = [...ce, ...Array(ve - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((T, x) => ({
      ...T,
      isFirst: x === 0,
      isLast: x === ce.length - 1
    }));
    let fe = 0;
    if (typeof P == "number" && P >= 0 && re.length > 0) {
      const T = re[0], x = re[re.length - 1];
      let z = null;
      P <= T.max ? z = T : P >= x.min ? z = x : z = re.find((G) => P >= G.min && P <= G.max), z && (fe = z.kp);
    }
    const Ke = re.length > 0 ? re[re.length - 1] : null, Ue = Math.min(10, Ke ? Ke.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, Ue)).map((T, x) => {
      const z = x + 1, G = !!Number(De[T]), ke = z <= fe;
      return { index: z, used: G, usable: ke };
    }), ot = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, ot), e.kpDotsRow2 = Be.slice(ot), e.canEditInitiative = !!((Tt = game.user) != null && Tt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((et = (Dt = e.system) == null ? void 0 : Dt.combat) == null ? void 0 : et.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var a, o, f;
    super._attachFrameListeners(s);
    const e = ((a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (r) => {
      var u, m, h;
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const i = ((h = (m = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (r) => {
      var u, m, h;
      r.preventDefault();
      const i = (m = (u = r.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : m.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (h = c == null ? void 0 : c.sheet) == null || h.render(!0);
    });
    const n = (r) => {
      var u, m;
      const i = (u = r == null ? void 0 : r.dataset) == null ? void 0 : u.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (r) => {
      var m, h, g, k;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const u = this.actor.items.get(c);
      (k = u == null ? void 0 : u.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (r) => {
      var m;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-CJhmpad9.mjs");
      u(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var u, m, h, g, k;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let c = (((u = i == null ? void 0 : i.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      !c && ((m = i == null ? void 0 : i.dataset) != null && m.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CJhmpad9.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (r) => {
      var m, h;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const u = !!Number((h = (m = this.actor.system) == null ? void 0 : m.resources) == null ? void 0 : h[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: u ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var h, g;
      r.preventDefault();
      const i = r.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), u = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: m } = await import("./roll-sheet-CJhmpad9.mjs");
      m(this.actor, c, u);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      var c, u;
      r.preventDefault();
      const i = (u = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : u.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (r) => {
      var u, m, h, g;
      r.preventDefault();
      const i = (((m = (u = r.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : m.itemId) ?? ((g = (h = r.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, k, b, w, I, _;
      if (r.preventDefault(), !r.altKey) return;
      const i = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.area, c = (w = (b = r.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : w.itemId;
      if (!i || !c || !this.actor) return;
      const u = ((I = this.actor.system) == null ? void 0 : I.abilities) ?? {}, h = (Array.isArray((_ = u[i]) == null ? void 0 : _.items) ? u[i].items.slice() : []).filter((O) => O !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      var c, u;
      if (r.preventDefault(), !r.altKey) return;
      const i = (u = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : u.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      var g, k;
      if (r.preventDefault(), !r.altKey) return;
      const i = r.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const u = this.actor, m = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), h = {};
      m && (h[`system.weapons.${m}.itemId`] = "", h[`system.weapons.${m}.name`] = "", h[`system.weapons.${m}.damage`] = "", h[`system.weapons.${m}.bonus`] = ""), Object.keys(h).length && await u.update(h), await u.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      var c, u;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((u = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var h, g, k, b;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((g = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((b = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : b.microchips) ?? {}, m = ["slot1", "slot2", "slot3"].find((w) => {
        var I;
        return (((I = c[w]) == null ? void 0 : I.itemId) ?? "").trim() === i;
      });
      m && await this.actor.update({
        [`system.gear.microchips.${m}.itemId`]: "",
        [`system.gear.microchips.${m}.name`]: "",
        [`system.gear.microchips.${m}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (r) => {
      var u, m;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((m = (u = r.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : m.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (f = (o = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : o.call(e, p)) == null || f.forEach((r) => {
      var i;
      (((i = r.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (r.draggable = !0);
    }), t.on("dragstart", p, (r) => {
      var h, g, k;
      const i = r.currentTarget, c = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!c || !this.actor) return;
      const u = this.actor.items.get(c);
      if (!u) return;
      const m = u.uuid;
      r.dataTransfer && (r.dataTransfer.setData("text/plain", m), r.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: m })), r.dataTransfer.effectAllowed = "copyMove"), typeof ((k = r.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && r.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, y = (r) => {
      if (!r) return;
      const i = d._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, l = (r) => {
      var i, c, u;
      return r && (((c = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || d.id && ((u = r.closest) == null ? void 0 : u.call(r, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (r) => {
      var h;
      const i = r.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const u = i.form;
      if (!l(u)) return;
      const m = r.relatedTarget;
      m && (u.contains(m) || d.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(d.id)}`))) || y(u);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0), d._votvNpcItemHookRegistered || (d._votvNpcItemUpdateHook = (r, i, c) => {
      var u;
      d.actor && ((u = r == null ? void 0 : r.parent) == null ? void 0 : u.id) === d.actor.id && d.render(!0);
    }, d._votvNpcItemDeleteHook = (r, i, c) => {
      var u;
      d.actor && ((u = r == null ? void 0 : r.parent) == null ? void 0 : u.id) === d.actor.id && d.render(!0);
    }, Hooks.on("updateItem", d._votvNpcItemUpdateHook), Hooks.on("deleteItem", d._votvNpcItemDeleteHook), d._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const d = this._getFormDataForUpdate(e);
      Object.keys(d).length > 0 && await this.actor.update(d).catch((y) => console.warn("VoidNpcSheet save on preClose failed", y));
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
    var w, I, _, O, C;
    const e = this.actor;
    if (!e) return;
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, p = ((I = e.system) == null ? void 0 : I.skills) ?? {}, d = ((_ = e.items) == null ? void 0 : _.filter((j) => j.type === "Fegyver")) ?? [];
    let y = null;
    n.itemId && (y = d.find((j) => j.id === n.itemId) ?? null);
    const l = y && y.name || n.name || "Fegyver", a = Number(n.bonus || 0) || 0, o = ((O = y == null ? void 0 : y.system) == null ? void 0 : O.type) || "kinetic", f = (((C = y == null ? void 0 : y.system) == null ? void 0 : C.skillKey) ?? "").trim(), r = f && p[f] !== void 0 ? f : o === "explosive" ? "grenadeUse" : "firearms", i = Number(p[r] || 0) || 0, c = a + i, m = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(m);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: k } = Wt(h), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${l} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: k } },
      rollMode: b
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var l, a, o, f, r, i, c, u, m, h;
    const t = this.actor;
    if (!t) return;
    const n = ((a = (l = t.items).get) == null ? void 0 : a.call(l, s)) ?? ((f = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : f.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : m.call(u, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(p);
    await d.evaluate({ async: !0 });
    const y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: y
    });
  }
  async _onDropItem(s, e) {
    var o, f, r, i, c, u, m, h, g, k, b, w, I, _, O, C, j, K, U;
    if (!this.actor) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const n = ((E) => {
      var Z;
      if (!E) return null;
      const V = E.uuid ?? E.documentUuid ?? ((Z = E.data) == null ? void 0 : Z.uuid) ?? (typeof E == "string" ? E : null);
      if (V) return V;
      if (typeof E == "object") {
        for (const J of Object.values(E))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!n) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    if (p.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const d = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      const E = (((u = p.system) == null ? void 0 : u.kind) ?? "passive").toString();
      if (E === "module") {
        (h = (m = ui.notifications) == null ? void 0 : m.warn) == null || h.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let V = p.id;
      if (((g = p.parent) == null ? void 0 : g.id) !== d.id) {
        const oe = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        V = ((k = (await d.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : k.id) ?? V;
      }
      const Z = ((b = d.system) == null ? void 0 : b.abilities) ?? {}, J = E === "active" ? "active" : "passive", Y = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(V) || Y.push(V), await d.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = p.parent) == null ? void 0 : I.id) === d.id) return;
    const y = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(y, { system: { ...y.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(y, { system: { ...y.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const a = (_ = (await d.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : _.id;
    if (p.type === "Fegyver" && a) {
      const E = ((O = d.system) == null ? void 0 : O.weapons) ?? {}, V = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (E.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((R) => V.includes(R)) : [];
      let Y = V.find((R) => {
        var te;
        return !(((te = E[R]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = V.find((R) => !J.includes(R)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((R) => V.includes(R));
      await d.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: a,
        [`system.weapons.${Y}.name`]: p.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = p.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((j = p.system) == null ? void 0 : j.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && a) {
      const E = ((U = (K = d.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = E[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await d.update({
        [`system.gear.microchips.${Z}.itemId`]: a,
        [`system.gear.microchips.${Z}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var o, f, r, i, c, u;
    const e = (f = (o = this.actor) == null ? void 0 : o.items) == null ? void 0 : f.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", l = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((u = this.actor) == null ? void 0 : u.name) ?? void 0 }),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var l, a, o, f, r, i;
    const e = (a = (l = this.actor) == null ? void 0 : l.items) == null ? void 0 : a.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((o = e.system) == null ? void 0 : o.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const c = ((f = e.system) == null ? void 0 : f.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const u = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        u > 0 && (p = `<p><strong>KP:</strong> ${u}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: y,
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
X(ge, "PARTS", foundry.utils.mergeObject(
  M(ge, ge, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(ge, ge, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject((($s = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((xs = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : xs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Rs = (zs = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : zs.window) == null ? void 0 : Rs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Vt = ge;
function ji(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ms, js, Ks, Us;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, p, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    var u;
    const t = (u = game.votv) == null ? void 0 : u._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const p = this.element, d = this.form ?? this.element;
    let y = { scrollState: {}, focus: null };
    if (p) {
      y.scrollState = this._saveScrollState(p);
      const m = document.activeElement, h = d.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (y.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const l = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const a = this.element, o = this.form ?? this.element, f = y.scrollState, r = y.focus, i = typeof (f == null ? void 0 : f.formScrollTop) == "number" || typeof (f == null ? void 0 : f.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(a, f), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((m = o.querySelector) == null ? void 0 : m.call(o, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(a, f);
    };
    return (i || r) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), l;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (a) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, a)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${a}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const y = Number(p == null ? void 0 : p.value) || 0, l = Number(d == null ? void 0 : d.value) || 0;
    n.textContent = String(y + l);
  }
  async _prepareContext(s) {
    var j, K, U, E, V, Z, J, Y, oe, R, te, de, De;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((j = e.system) == null ? void 0 : j.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, d = "— Nincs fegyver —", y = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = y.map((D) => {
      const P = (D == null ? void 0 : D.system) ?? {}, W = P.type ?? "", se = (n[W] ?? W) || "—", le = P.size ?? "", pe = (p[le] ?? le) || "", re = [se, pe].filter(Boolean).join(", ") || se || "—", ve = W === "projectile" || le === "thrown", ce = P.quantity != null ? String(P.quantity).trim() : "1", fe = (typeof P.range == "string" ? (P.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? d,
        img: (D == null ? void 0 : D.img) ?? "",
        bonus: String(P.bonus ?? "").trim() || "0",
        damage: P.damage ?? "",
        rangeStr: fe || "—",
        typeLabel: se,
        typeAndSize: re,
        quantity: ce,
        quantityDisplay: ve ? ce : "—",
        isProjectile: ve,
        equipped: !1,
        special: (P.special ?? "").trim() || "—"
      };
    });
    const l = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = l.map((D) => {
      var se;
      const P = (D == null ? void 0 : D.system) ?? {}, W = !!((se = D.system) != null && se.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: ji((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: W
      };
    });
    const a = (((E = this.actor.items) == null ? void 0 : E.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = a.map((D) => {
      var ve, ce, fe;
      const P = ((ve = D == null ? void 0 : D.system) == null ? void 0 : ve.abilityType) ?? "", W = P === "active" ? "Aktív" : P === "passive" ? "Passzív" : P || "—", se = P === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), re = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: W,
        description: re,
        kp: le,
        isActive: se,
        slotKey: "",
        equipped: !1
      };
    });
    const o = (((V = this.actor.items) == null ? void 0 : V.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = o.map((D) => {
      const P = (D == null ? void 0 : D.system) ?? {}, W = (P.description ?? "").trim(), se = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—", le = P.quantity != null ? String(P.quantity).trim() : "1";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        quantity: le,
        description: se
      };
    });
    const f = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", r = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === f).sort((D, P) => {
      const W = typeof D.sort == "number" ? D.sort : 0, se = typeof P.sort == "number" ? P.sort : 0;
      return W - se;
    }), i = [];
    let c = 0, u = 0, m = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of r) {
      const P = (D == null ? void 0 : D.system) ?? {}, W = Number(P.level ?? 0) || 0, se = (P.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (m += le);
      const pe = P.abilities ?? {}, re = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
        re.map(async (ee) => {
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
      )).map((ee, ye) => ({ doc: ee, ref: re[ye] })).filter((ee) => !!ee.doc && !!ee.ref).map(({ doc: ee, ref: ye }) => {
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
      if (f === "Helyiseg") {
        const ee = (P.hit ?? "").toString().trim();
        i.push({
          itemId: D.id,
          actorId: this.actor.id,
          name: (D == null ? void 0 : D.name) ?? "—",
          img: (D == null ? void 0 : D.img) ?? "",
          level: W,
          hit: ee,
          abilities: ce,
          isHelyiseg: !0
        });
        continue;
      }
      const fe = P.health ?? {}, Ke = Number(fe.max ?? 0) || 0, Ue = Number(fe.value ?? 0) || 0;
      let xe;
      if (Ke <= 0)
        xe = void 0;
      else if (Ue <= 0)
        xe = 0;
      else {
        const ee = Ue / Ke;
        ee > 2 / 3 ? xe = 3 : ee > 1 / 3 ? xe = 2 : xe = 1;
      }
      const Be = (P.hit ?? "").toString().trim(), ot = (P.speed ?? "").toString().trim().replace(",", "."), He = Number(ot);
      Number.isFinite(He) && (c += He);
      const Ye = (P.range ?? "").toString().trim().replace(",", "."), Ge = Number(Ye);
      Number.isFinite(Ge) && (u += Ge);
      const ct = (P.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: W,
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
    const g = r.length;
    let k = "Kicsi", b = 0, w = 0;
    g >= 11 ? (k = "Nagy", b = -4, w = -6) : g >= 6 ? (k = "Közepes", b = -2, w = -3) : (k = "Kicsi", b = 0, w = 0), e.sizeForSelect = k, e.unitCount = g, e.sizeSpeedPenalty = b, e.sizeDefensePenalty = w;
    const I = c + b, _ = u;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: I },
        vehicle: { toolsRange: _, storage: h },
        identity: { size: k }
      },
      { inplace: !1 }
    );
    const O = (((oe = e.weaponsTable) == null ? void 0 : oe.length) ?? 0) > 0 || (((R = e.armorTable) == null ? void 0 : R.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((de = e.itemsTable) == null ? void 0 : de.length) ?? 0) > 0;
    e.showEquipmentDropZone = !O;
    const C = (((De = this.actor.items) == null ? void 0 : De.contents) ?? []).filter((D) => D.type === "Egyeb");
    return e.egyebList = C.map((D) => {
      const W = (((D == null ? void 0 : D.system) ?? {}).description ?? "").trim(), se = W ? W.length > 80 ? W.slice(0, 77) + "…" : W : "";
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
    var y;
    super._attachFrameListeners(s);
    const e = ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.form ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (l) => {
      var f, r, i;
      l.preventDefault(), l.stopPropagation();
      const a = ((i = (r = (f = foundry.applications) == null ? void 0 : f.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (l) => {
      var f, r, i;
      l.preventDefault();
      const a = (r = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : r.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (l) => {
      var f, r;
      if (l.preventDefault(), !l.altKey) return;
      const a = (r = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : r.itemId;
      !a || !this.actor.items.get(a) || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".jarmu-item-quantity-input", async (l) => {
      var r;
      const a = l.currentTarget, o = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      const f = this.actor.items.get(o);
      !f || f.type !== "Targy" && f.type !== "Fegyver" || await f.update({ "system.quantity": (a.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (l) => {
      var f, r;
      const a = (r = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : r.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "Pancel" || await o.update({ "system.equipped": l.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (l) => {
      var o, f, r, i;
      l.preventDefault();
      const a = (f = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : f.itemId;
      a && ((i = (r = this.actor.items.get(a)) == null ? void 0 : r.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (l) => {
      var o, f;
      if (l.preventDefault(), !l.altKey) return;
      const a = (f = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : f.itemId;
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-item-chat", async (l) => {
      var f, r, i, c;
      l.preventDefault();
      const a = (((r = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : r.itemId) ?? ((c = (i = l.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "MikroChip" && o.type !== "Egyeb" || await this._postItemToChat(a);
    }), t.on("click", ".jarmu-unit-damage-button", async (l) => {
      var f;
      l.preventDefault(), l.stopPropagation();
      const a = l.currentTarget, o = (((f = a == null ? void 0 : a.dataset) == null ? void 0 : f.itemId) ?? "").trim();
      o && await this._rollUnitDamage(o);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (l) => {
      var r, i;
      const a = l.currentTarget, o = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      n._draggingUnitId = o;
      const f = (i = l.originalEvent) == null ? void 0 : i.dataTransfer;
      f && (f.setData("text/plain", o), f.effectAllowed = "move", typeof f.setDragImage == "function" && f.setDragImage(a, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (l) => {
      var r, i, c, u;
      const a = (i = (r = l.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : i.itemId, o = n._draggingUnitId;
      if (!o || !a || o === a) return;
      l.preventDefault();
      const f = (c = l.originalEvent) == null ? void 0 : c.dataTransfer;
      f && (f.dropEffect = "move"), (u = l.currentTarget) == null || u.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (l) => {
      var a;
      (a = l.currentTarget) == null || a.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (l) => {
      var g, k, b, w;
      l.preventDefault(), (g = l.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const a = (b = (k = l.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : b.itemId;
      let o = n._draggingUnitId;
      const f = (w = l.originalEvent) == null ? void 0 : w.dataTransfer;
      if (!o && f && (o = f.getData("text/plain")), n._draggingUnitId = null, !o || !a || o === a) return;
      const r = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((I) => I.type === r).sort((I, _) => {
        const O = typeof I.sort == "number" ? I.sort : 0, C = typeof _.sort == "number" ? _.sort : 0;
        return O - C;
      }).map((I) => I.id), u = c.indexOf(o), m = c.indexOf(a);
      if (u === -1 || m === -1) return;
      c.splice(u, 1), c.splice(m, 0, o);
      const h = c.map((I, _) => ({
        _id: I,
        sort: (_ + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (l) => {
      var r, i, c, u, m, h, g, k, b, w;
      l.preventDefault();
      const a = (u = (c = (i = (r = l.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : u.abilityRef, o = (k = (g = (h = (m = l.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : k.abilityId;
      let f = null;
      if (a)
        try {
          f = await fromUuid(a);
        } catch {
          f = null;
        }
      !f && o && (f = ((b = game.items) == null ? void 0 : b.get(o)) ?? null), (w = f == null ? void 0 : f.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (l) => {
      var i, c, u, m;
      l.preventDefault();
      const a = (c = (i = l.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), o = (u = a == null ? void 0 : a.dataset) == null ? void 0 : u.abilityRef, f = (m = a == null ? void 0 : a.dataset) == null ? void 0 : m.abilityId, r = o || f;
      r && await this._postUnitAbilityToChat(r);
    });
    const p = (l) => {
      if (!l) return;
      const a = this._getFormDataForUpdate(l);
      Object.keys(a).length !== 0 && this.actor.update(a).catch((o) => console.warn("VoidJarmuSheet save failed", o));
    }, d = (l) => {
      var a, o, f;
      return l && (((o = (a = this.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, l)) || this.id && ((f = l.closest) == null ? void 0 : f.call(l, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (l) => {
      var i;
      const a = l.target;
      if (!a || !a.form) return;
      const o = a.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const f = a.form;
      if (!d(f)) return;
      const r = l.relatedTarget;
      r && (f.contains(r) || this.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), p(f));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (l) => {
      var u, m, h;
      const a = l.currentTarget, o = (u = a == null ? void 0 : a.dataset) == null ? void 0 : u.itemId;
      if (!o) return;
      const f = this.actor.items.get(o);
      if (!f || f.type !== "Jarmuegyseg") return;
      const r = (a.value ?? "").trim(), i = r === "" ? 0 : Number(r), c = (m = a.closest) == null ? void 0 : m.call(a, ".jarmu-unit-row");
      if (c) {
        const g = (h = c.querySelector) == null ? void 0 : h.call(c, ".jarmu-unit-hp-max"), k = (g == null ? void 0 : g.textContent) ?? "", b = Number((k ?? "").trim()) || 0;
        let w;
        if (b <= 0)
          w = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          w = 0;
        else {
          const I = i / b;
          I > 2 / 3 ? w = 3 : I > 1 / 3 ? w = 2 : w = 1;
        }
        w === void 0 ? c.removeAttribute("data-hp-status") : c.dataset.hpStatus = String(w);
      }
      await f.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (l) => {
      var i;
      const a = l.currentTarget, o = (i = a == null ? void 0 : a.dataset) == null ? void 0 : i.itemId;
      if (!o) return;
      const f = this.actor.items.get(o);
      if (!f || f.type !== "Jarmuegyseg" && f.type !== "Helyiseg") return;
      const r = (a.value ?? "").trim();
      await f.update({ "system.hit": r });
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
    var l, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((l = e.system) == null ? void 0 : l.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const f = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (f === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", f === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var y, l, a, o, f, r, i, c, u;
    const e = this.actor;
    if (!e) return;
    const t = ((l = (y = e.items).get) == null ? void 0 : l.call(y, s)) ?? ((o = (a = e.items.contents) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (m) => m.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const n = (((f = t.system) == null ? void 0 : f.damage) ?? "").trim();
    if (!n) {
      (u = (r = ui.notifications) == null ? void 0 : r.warn) == null || u.call(
        r,
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
    var o, f, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", l = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var l, a;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((l = e == null ? void 0 : e.data) == null ? void 0 : l.uuid) ?? (typeof e == "string" ? e : null);
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
    if (((a = n.parent) == null ? void 0 : a.id) === p.id) return;
    const y = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [y]);
  }
};
X(he, "PARTS", foundry.utils.mergeObject(
  M(he, he, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(he, he, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ms = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((js = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : js.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Us = (Ks = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.window) == null ? void 0 : Us.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let jt = he;
function Ki(S) {
  if (S == null) return 0;
  const s = String(S).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function Ns(S) {
  var e;
  return (((e = S == null ? void 0 : S.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var p;
    return t + Ki((p = n.system) == null ? void 0 : p.veszely);
  }, 0);
}
var Bs;
const at = class at extends jt {
  _attachFrameListeners(s) {
    var y;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element;
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
      var O, C, j, K, U, E, V;
      const a = ((O = e.querySelector) == null ? void 0 : O.call(e, "form")) ?? e, o = (C = a.querySelector) == null ? void 0 : C.call(a, 'select[name="system.identity.assignment"]'), f = (j = a.querySelector) == null ? void 0 : j.call(a, 'select[name="system.identity.subAssignment"]'), r = (K = a.querySelector) == null ? void 0 : K.call(a, "input.bazis-threat-total"), i = (U = a.querySelector) == null ? void 0 : U.call(a, 'input[name="system.combat.threatBonus"]');
      if (!o || !r || !i) return;
      const c = o.value ?? "", u = (f == null ? void 0 : f.value) ?? "", m = t[c] ?? 0, h = n[u] ?? 0, g = (((V = (E = this.actor) == null ? void 0 : E.items) == null ? void 0 : V.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, k = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", b = p[k] ?? 0, w = Number(i.value ?? 0) || 0, I = Ns(this.actor), _ = m + h + b + w + I;
      r.value = _;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', d);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, p = n.identity ?? {}, d = n.combat ?? {}, y = p.assignment ?? "", l = p.subAssignment ?? "", a = {
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
      }, f = { Kicsi: -10, Közepes: 0, Nagy: 10 }, r = a[y] ?? 0, i = o[l] ?? 0, c = e.sizeForSelect ?? "Kicsi", u = f[c] ?? 0, m = Number(d.threatBonus ?? 0) || 0, h = Ns(this.actor), g = r + i + u + m + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...d, threat: g, threatBonus: m } },
        { inplace: !1 }
      ), e.bazisThreatBase = r;
    }
    return e;
  }
};
X(at, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(at, at, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Bs = M(at, at, "DEFAULT_OPTIONS")) == null ? void 0 : Bs.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Jt = at;
var Hs, Gs, Ws, Vs;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  _getScrollContainers(s) {
    var n, p, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.vallalkozas-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    var a, o, f;
    const t = this.element, n = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (t) {
      p.scrollState = this._saveScrollState(t);
      const r = document.activeElement, i = (a = n == null ? void 0 : n.contains) == null ? void 0 : a.call(n, r), c = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      i && c && (p.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), y = this.element, l = this.form ?? this.element;
    if (y && this._applyScrollState(y, p.scrollState), p.focus && l) {
      let r = null;
      if (p.focus.name && (r = ((o = l.querySelector) == null ? void 0 : o.call(l, `[name="${CSS.escape(p.focus.name)}"]`)) ?? null), !r && p.focus.id && (r = ((f = l.querySelector) == null ? void 0 : f.call(l, `#${CSS.escape(p.focus.id)}`)) ?? null), r && typeof r.focus == "function" && (r.focus(), "setSelectionRange" in r))
        try {
          r.setSelectionRange(p.focus.selectionStart ?? 0, p.focus.selectionEnd ?? 0);
        } catch {
        }
    }
    return d;
  }
  async _prepareContext(s) {
    var u, m, h, g, k;
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
    }, y = "— Nincs fegyver —", l = ((u = t.items) == null ? void 0 : u.contents) ?? [], a = l.filter((b) => b.type === "Fegyver");
    e.weaponsTable = a.map((b) => {
      const w = b.system ?? {}, I = w.type ?? "", _ = (p[I] ?? I) || "—", O = w.size ?? "", C = (d[O] ?? O) || "", j = [_, C].filter(Boolean).join(", ") || _ || "—", K = I === "projectile" || O === "thrown", U = w.quantity != null ? String(w.quantity).trim() : "1", E = (typeof w.range == "string" ? (w.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: b.id,
        actorId: t.id,
        name: b.name ?? y,
        img: b.img ?? "",
        bonus: String(w.bonus ?? "").trim() || "0",
        damage: w.damage ?? "",
        rangeStr: E || "—",
        typeLabel: _,
        typeAndSize: j,
        quantity: U,
        quantityDisplay: K ? U : "—",
        isProjectile: K,
        equipped: !1,
        special: (w.special ?? "").trim() || "—"
      };
    });
    const o = l.filter((b) => b.type === "Pancel");
    e.armorTable = o.map((b) => {
      var _;
      const w = b.system ?? {}, I = !!((_ = b.system) != null && _.equipped);
      return {
        itemId: b.id,
        actorId: t.id,
        name: b.name ?? "—",
        img: b.img ?? "",
        protectionBonus: (w.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (w.speedPenalty ?? "").toString().trim() || "—",
        level: (w.level ?? "").toString().trim() || "—",
        special: (w.special ?? w.other ?? "").toString().trim() || "—",
        equipped: I
      };
    });
    const f = l.filter((b) => b.type === "MikroChip");
    e.microchipsTable = f.map((b) => {
      var K, U, E;
      const w = ((K = b.system) == null ? void 0 : K.abilityType) ?? "", I = w === "active" ? "Aktív" : w === "passive" ? "Passzív" : w || "—", _ = w === "active", O = Number((U = b.system) == null ? void 0 : U.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, C = (((E = b.system) == null ? void 0 : E.description) ?? "").trim(), j = C ? C.length > 60 ? `${C.slice(0, 57)}…` : C : "—";
      return {
        itemId: b.id,
        actorId: t.id,
        name: b.name ?? "—",
        img: b.img ?? "",
        typeLabel: I,
        description: j,
        kp: O,
        isActive: _,
        slotKey: "",
        equipped: !1
      };
    });
    const r = l.filter((b) => b.type === "Targy");
    e.itemsTable = r.map((b) => {
      const w = b.system ?? {}, I = (w.description ?? "").trim(), _ = I ? I.length > 60 ? `${I.slice(0, 57)}…` : I : "—", O = w.quantity != null ? String(w.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: t.id,
        name: b.name ?? "—",
        img: b.img ?? "",
        quantity: O,
        description: _
      };
    });
    const i = (((m = e.weaponsTable) == null ? void 0 : m.length) ?? 0) > 0 || (((h = e.armorTable) == null ? void 0 : h.length) ?? 0) > 0 || (((g = e.microchipsTable) == null ? void 0 : g.length) ?? 0) > 0 || (((k = e.itemsTable) == null ? void 0 : k.length) ?? 0) > 0;
    e.showEquipmentDropZone = !i;
    const c = l.filter((b) => b.type === "Egyeb");
    return e.egyebList = c.map((b) => {
      const I = ((b.system ?? {}).description ?? "").trim(), _ = I ? I.length > 80 ? `${I.slice(0, 77)}…` : I : "";
      return {
        itemId: b.id,
        actorId: t.id,
        name: b.name ?? "—",
        img: b.img ?? "",
        description: _
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var y;
    super._attachFrameListeners(s);
    const e = this, t = ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, n = t ? $(t) : $([]);
    if (!this.isEditable) return;
    n.on("click", ".vallalkozas-employee-add", async (l) => {
      var f;
      if (l.preventDefault(), !this.actor) return;
      const a = this.actor.system ?? {}, o = Array.isArray((f = a.vallalkozas) == null ? void 0 : f.employees) ? a.vallalkozas.employees.slice() : [];
      o.push({ type: "", level: 0, count: 0, bonus: "" }), await this.actor.update({ "system.vallalkozas.employees": o });
    }), n.on("click", ".vallalkozas-employee-delete", async (l) => {
      var i, c, u;
      if (l.preventDefault(), !l.altKey || !this.actor) return;
      const a = ((c = (i = l.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", o = Number(a), f = this.actor.system ?? {}, r = Array.isArray((u = f.vallalkozas) == null ? void 0 : u.employees) ? f.vallalkozas.employees.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= r.length || (r.splice(o, 1), await this.actor.update({ "system.vallalkozas.employees": r }));
    }), n.on("click", ".vallalkozas-production-add", async (l) => {
      var f;
      if (l.preventDefault(), !this.actor) return;
      const a = this.actor.system ?? {}, o = Array.isArray((f = a.vallalkozas) == null ? void 0 : f.productionLines) ? a.vallalkozas.productionLines.slice() : [];
      o.push({ product: "", count: 0, time: "" }), await this.actor.update({ "system.vallalkozas.productionLines": o });
    }), n.on("click", ".vallalkozas-production-delete", async (l) => {
      var i, c, u;
      if (l.preventDefault(), !l.altKey || !this.actor) return;
      const a = ((c = (i = l.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", o = Number(a), f = this.actor.system ?? {}, r = Array.isArray((u = f.vallalkozas) == null ? void 0 : u.productionLines) ? f.vallalkozas.productionLines.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= r.length || (r.splice(o, 1), await this.actor.update({ "system.vallalkozas.productionLines": r }));
    }), n.on("click", ".karakter-item-chat", async (l) => {
      var f, r, i, c;
      l.preventDefault();
      const a = (((r = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : r.itemId) ?? ((c = (i = l.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      o && (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(a);
    }), n.on("click", ".vallalkozas-egyeb-delete", async (l) => {
      var o, f;
      if (l.preventDefault(), !l.altKey || !this.actor) return;
      const a = (((f = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : f.itemId) ?? "").trim();
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), n.on("click", ".vallalkozas-raktar-table .karakter-inventory-item-name, .vallalkozas-raktar-table .karakter-equipment-icon", (l) => {
      var f, r, i;
      l.preventDefault();
      const a = (r = (f = l.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : r.itemId;
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), n.on("change", ".vallalkozas-item-quantity-input", async (l) => {
      var i;
      const a = l.currentTarget, o = (((i = a == null ? void 0 : a.dataset) == null ? void 0 : i.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const f = this.actor.items.get(o);
      if (!f || f.type !== "Targy") return;
      const r = (a.value ?? "").trim();
      await f.update({ "system.quantity": r });
    }), n.on("click", ".vallalkozas-item-delete", async (l) => {
      var o, f;
      if (l.preventDefault(), !l.altKey || !this.actor) return;
      const a = (((f = (o = l.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : f.itemId) ?? "").trim();
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    });
    const p = (l) => {
      if (!l || !this.actor) return;
      const a = e._getFormDataForUpdate(l);
      Object.keys(a).length !== 0 && e.actor.update(a).catch((o) => console.warn("VoidVallalkozasSheet save failed", o));
    }, d = (l) => {
      var a, o, f;
      return l && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, l)) || e.id && ((f = l.closest) == null ? void 0 : f.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var o, f, r;
      const a = ((o = l.target) == null ? void 0 : o.form) ?? ((r = (f = l.target) == null ? void 0 : f.closest) == null ? void 0 : r.call(f, "form"));
      d(a) && p(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  async _onDropItem(s, e) {
    var a, o, f;
    if (!this.actor) return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((o = e == null ? void 0 : e.data) == null ? void 0 : o.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && e && typeof e == "object") {
      for (const r of Object.values(e))
        if (typeof r == "string" && r.includes(".") && r.startsWith("Item.")) {
          t = r;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const p = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((f = n.parent) == null ? void 0 : f.id) === p.id) return;
    const y = n.toObject(), l = foundry.utils.mergeObject(y, {
      system: { ...y.system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [l]);
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
    var l, a, o;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((l = e.system) == null ? void 0 : l.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const f = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (f === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", f === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
};
X(be, "PARTS", foundry.utils.mergeObject(
  M(be, be, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs" }
  },
  { inplace: !1 }
)), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(be, be, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Vallalkozas"],
    template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs",
    width: 800,
    minWidth: 700,
    height: 600,
    form: foundry.utils.mergeObject(((Hs = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Gs = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Vs = (Ws = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.window) == null ? void 0 : Vs.contentClasses) ?? [],
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
      var a, o, f, r, i, c, u;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (f = d.target) == null ? void 0 : f.getAttribute) == null ? void 0 : r.call(f, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((u = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new y({
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
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((l) => console.warn("VoidWeaponSheet save failed", l));
    }, p = (d) => {
      var y, l, a;
      return d && (((l = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : l.call(y, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var l, a, o;
      const y = ((l = d.target) == null ? void 0 : l.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(y) && n(y);
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
X(Ne, "PARTS", foundry.utils.mergeObject(M(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Js = M(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : Js.form) ?? {}, { submitOnChange: !1 })
}));
let Yt = Ne;
var Zs;
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
      var a, o, f, r, i, c, u;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (f = d.target) == null ? void 0 : f.getAttribute) == null ? void 0 : r.call(f, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((u = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new y({
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
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((l) => console.warn("VoidShieldSheet save failed", l));
    }, p = (d) => {
      var y, l, a;
      return d && (((l = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : l.call(y, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var l, a, o;
      const y = ((l = d.target) == null ? void 0 : l.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(y) && n(y);
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
X(Ae, "PARTS", foundry.utils.mergeObject(M(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Zs = M(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Zs.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Ae;
var Ys;
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
      var a, o, f, r, i, c, u;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (f = d.target) == null ? void 0 : f.getAttribute) == null ? void 0 : r.call(f, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((u = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new y({
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
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((l) => console.warn("VoidMicrochipSheet save failed", l));
    }, p = (d) => {
      var y, l, a;
      return d && (((l = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : l.call(y, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var l, a, o;
      const y = ((l = d.target) == null ? void 0 : l.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(y) && n(y);
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
X(Fe, "PARTS", foundry.utils.mergeObject(M(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ys = M(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 })
}));
let Qt = Fe;
var Xs;
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
      var a, o, f, r, i, c, u;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (f = d.target) == null ? void 0 : f.getAttribute) == null ? void 0 : r.call(f, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((u = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new y({
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
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((l) => console.warn("VoidAbilitySheet save failed", l));
    }, p = (d) => {
      var y, l, a;
      return d && (((l = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : l.call(y, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var l, a, o;
      const y = ((l = d.target) == null ? void 0 : l.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(y) && n(y);
    }, e._votvInput = (d) => {
      var a;
      const y = d.target;
      if ((y == null ? void 0 : y.name) === "name") return;
      const l = (y == null ? void 0 : y.form) ?? ((a = y == null ? void 0 : y.closest) == null ? void 0 : a.call(y, "form"));
      p(l) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(l), 300));
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
X(Ee, "PARTS", foundry.utils.mergeObject(M(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xs = M(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !0 })
}));
let es = Ee;
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
      var a, o, f, r, i, c, u;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (f = d.target) == null ? void 0 : f.getAttribute) == null ? void 0 : r.call(f, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((u = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new y({
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
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((l) => console.warn("VoidTargySheet save failed", l));
    }, p = (d) => {
      var y, l, a;
      return d && (((l = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : l.call(y, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var l, a, o;
      const y = ((l = d.target) == null ? void 0 : l.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(y) && n(y);
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
X(Pe, "PARTS", foundry.utils.mergeObject(M(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Qs = M(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !1 })
}));
let ts = Pe;
var ei;
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
      var a, o, f, r, i, c, u;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (f = d.target) == null ? void 0 : f.getAttribute) == null ? void 0 : r.call(f, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((u = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : u.implementation) ?? globalThis.FilePicker;
      new y({
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
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((l) => console.warn("VoidEgyebSheet save failed", l));
    }, p = (d) => {
      var y, l, a;
      return d && (((l = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : l.call(y, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var l, a, o;
      const y = ((l = d.target) == null ? void 0 : l.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(y) && n(y);
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
X($e, "PARTS", foundry.utils.mergeObject(M($e, $e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X($e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M($e, $e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ei = M($e, $e, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !1 })
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
    var l, a, o, f;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (a = this.document) == null ? void 0 : a.name,
      "id=",
      (o = this.document) == null ? void 0 : o.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (r) => {
      var i, c, u;
      try {
        const m = typeof r.composedPath == "function" ? r.composedPath() : [];
        if (!(this.element && m.includes(this.element) || this.id && ((c = (i = r.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", r);
        let g = null;
        try {
          g = TextEditor.getDragEventData(r);
        } catch (I) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", I);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", g), !g || g.type !== "Item") return;
        const b = ((I) => {
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
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", b), !b) return;
        const w = await fromUuid(b);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", w == null ? void 0 : w.id, w == null ? void 0 : w.type), !w || w.documentName !== "Item") return;
        if (w.type === "Kepesseg" || w.type === "ability") {
          const I = w.uuid ?? w.id, _ = this.document.system ?? {}, O = Array.isArray((u = _.abilities) == null ? void 0 : u.items) ? _.abilities.items.slice() : [];
          O.push(I), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (m) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", m);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (r) => {
      var m, h, g, k, b, w;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemId;
      let u = null;
      if (i)
        try {
          u = await fromUuid(i);
        } catch {
          u = null;
        }
      !u && c && (u = ((b = game.items) == null ? void 0 : b.get(c)) ?? null), (w = u == null ? void 0 : u.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (r) => {
      var m, h, g, k;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemId, u = i || c;
      u && await this._postAbilityToChat(u);
    }), n.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, k, b;
      if (r.preventDefault(), !r.altKey) return;
      const i = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, u = Array.isArray((b = c.abilities) == null ? void 0 : b.items) ? c.abilities.items.slice() : [], m = u.indexOf(i), h = m >= 0 ? [...u.slice(0, m), ...u.slice(m + 1)] : u;
      await this.document.update({ "system.abilities.items": h });
    });
    const p = (f = t == null ? void 0 : t.querySelector) == null ? void 0 : f.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (r) => {
      r.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const d = (r) => {
      if (!r) return;
      const i = e._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, y = (r) => {
      var i, c, u;
      return r && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || e.id && ((u = r.closest) == null ? void 0 : u.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, u, m;
      const i = ((c = r.target) == null ? void 0 : c.form) ?? ((m = (u = r.target) == null ? void 0 : u.closest) == null ? void 0 : m.call(u, "form"));
      y(i) && d(i);
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
    const y = (await Promise.all(
      p.map(async (l) => {
        var a;
        if (!l) return null;
        try {
          const o = await fromUuid(l);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (a = game.items) == null ? void 0 : a.get(l);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((l, a) => ({ doc: l, ref: p[a] })).filter((l) => !!l.doc && !!l.ref).map(({ doc: l, ref: a }) => {
      var i, c;
      const o = (((i = l.system) == null ? void 0 : i.kind) ?? "passive").toString(), f = Number(((c = l.system) == null ? void 0 : c.kp) ?? 0) || 0, r = o === "species";
      return {
        id: l.id,
        ref: a,
        name: l.name,
        img: l.img,
        kind: o,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: r ? 0 : f
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", y), e.system = t, e.abilityList = y, e;
  }
  async _postAbilityToChat(s) {
    var o, f, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", l = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: a,
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
      const d = e.uuid ?? e.id, y = this.document.system ?? {}, l = Array.isArray((n = y.abilities) == null ? void 0 : n.items) ? y.abilities.items.slice() : [];
      return l.push(d), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", l), await this.document.update({ "system.abilities.items": l }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
X(Se, "PARTS", foundry.utils.mergeObject(M(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(Se, Se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ti = M(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((si = M(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : si.dragDrop) ?? [],
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
    var l, a;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (o) => {
      var c, u, m, h, g, k;
      o.preventDefault();
      const f = (u = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : u.itemRef, r = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (f)
        try {
          i = await fromUuid(f);
        } catch {
          i = null;
        }
      !i && r && (i = ((g = game.items) == null ? void 0 : g.get(r)) ?? null), (k = i == null ? void 0 : i.sheet) == null || k.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (o) => {
      var c, u, m, h;
      o.preventDefault();
      const f = (u = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : u.itemRef, r = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId, i = f || r;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (o) => {
      var m, h, g;
      if (o.preventDefault(), !o.altKey) return;
      const f = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef;
      if (!f) return;
      const r = this.document.system ?? {}, i = Array.isArray((g = r.abilities) == null ? void 0 : g.items) ? r.abilities.items.slice() : [], c = i.indexOf(f), u = c >= 0 ? [...i.slice(0, c), ...i.slice(c + 1)] : i;
      await this.document.update({ "system.abilities.items": u });
    });
    const p = (a = t == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (o) => {
      o.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (o) => {
      var f, r, i;
      try {
        const c = typeof o.composedPath == "function" ? o.composedPath() : [];
        if (!(this.element && c.includes(this.element) || this.id && ((r = (f = o.target) == null ? void 0 : f.closest) == null ? void 0 : r.call(f, `#${CSS.escape(this.id)}`)))) return;
        let m = null;
        try {
          m = TextEditor.getDragEventData(o);
        } catch {
        }
        if (!m || m.type !== "Item") return;
        const g = ((b) => {
          var I;
          if (!b) return null;
          const w = b.uuid ?? b.documentUuid ?? ((I = b.data) == null ? void 0 : I.uuid) ?? (typeof b == "string" ? b : null);
          if (w) return w;
          if (typeof b == "object") {
            for (const _ of Object.values(b))
              if (typeof _ == "string" && _.includes(".") && _.startsWith("Item.")) return _;
          }
          return null;
        })(m);
        if (!g) return;
        const k = await fromUuid(g);
        if (!k || k.documentName !== "Item") return;
        if (k.type === "Kepesseg" || k.type === "ability") {
          const b = k.uuid ?? k.id, w = this.document.system ?? {}, I = Array.isArray((i = w.abilities) == null ? void 0 : i.items) ? w.abilities.items.slice() : [];
          I.push(b), await this.document.update({ "system.abilities.items": I });
        }
      } catch (c) {
        console.error("VoidHelyisegSheet global drop error", c);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), !this.isEditable) return;
    const d = (o) => {
      if (!o) return;
      const f = e._getFormDataForUpdate(o);
      Object.keys(f).length !== 0 && e.document.update(f).catch((r) => console.warn("VoidHelyisegSheet save failed", r));
    }, y = (o) => {
      var f, r, i;
      return o && (((r = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : r.call(f, o)) || e.id && ((i = o.closest) == null ? void 0 : i.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var r, i, c;
      const f = ((r = o.target) == null ? void 0 : r.form) ?? ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
      y(f) && d(f);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, p = Array.isArray(n.items) ? n.items : [], y = (await Promise.all(
      p.map(async (l) => {
        var a;
        if (!l) return null;
        try {
          const o = await fromUuid(l);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (a = game.items) == null ? void 0 : a.get(l);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((l, a) => ({ doc: l, ref: p[a] })).filter((l) => !!l.doc && !!l.ref).map(({ doc: l, ref: a }) => {
      var i, c;
      const o = (((i = l.system) == null ? void 0 : i.kind) ?? "passive").toString(), f = Number(((c = l.system) == null ? void 0 : c.kp) ?? 0) || 0, r = o === "species";
      return {
        id: l.id,
        ref: a,
        name: l.name,
        img: l.img,
        kind: o,
        kpDisplay: r ? 0 : f
      };
    });
    return e.system = t, e.abilityList = y, e;
  }
  async _postAbilityToChat(s) {
    var o, f, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", l = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, n, p;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const d = e.uuid ?? e.id, y = this.document.system ?? {}, l = Array.isArray((n = y.abilities) == null ? void 0 : n.items) ? y.abilities.items.slice() : [];
      return l.push(d), await this.document.update({ "system.abilities.items": l }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
X(Te, "PARTS", foundry.utils.mergeObject(M(Te, Te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
})), X(Te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(Te, Te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ii = M(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ni = M(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : ni.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ns = Te;
const ri = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ai(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, n, p, d, y, l;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = hi, CONFIG.Actor.dataModels.Npc = Nt, CONFIG.Actor.dataModels.Jarmu = ki, CONFIG.Actor.dataModels.Bazis = Si, CONFIG.Actor.dataModels.Vallalkozas = zi, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ts, CONFIG.Item.dataModels.weapon = Ts, CONFIG.Item.dataModels.Pancel = _i, CONFIG.Item.dataModels.MikroChip = Oi, CONFIG.Item.dataModels.Kepesseg = Os, CONFIG.Item.dataModels.ability = Os, CONFIG.Item.dataModels.Targy = qi, CONFIG.Item.dataModels.Egyeb = Ni, CONFIG.Item.dataModels.Jarmuegyseg = Fi, CONFIG.Item.dataModels.Helyiseg = xi, (p = CONFIG.Actor).trackableAttributes ?? (p.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás", (y = CONFIG.Combat).initiative ?? (y.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (l = CONFIG.Item).typeLabels ?? (l.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Lt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Vt, {
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
  Hooks.on("preCreateActor", (a, o, f) => {
    ((o == null ? void 0 : o.type) === "Bazis" || (o == null ? void 0 : o.type) === "Vallalkozas") && (o.img = s);
  }), Hooks.on("preUpdateActor", (a, o, f) => {
    ((a == null ? void 0 : a.type) === "Bazis" || (a == null ? void 0 : a.type) === "Vallalkozas") && Object.prototype.hasOwnProperty.call(o ?? {}, "img") && (o.img = s);
  }), Hooks.on("ready", () => {
    var f;
    const a = s, o = (((f = game.actors) == null ? void 0 : f.contents) ?? []).filter(
      (r) => (r.type === "Bazis" || r.type === "Vallalkozas") && (r.img ?? "").toString().trim() !== a
    );
    o.length && o.forEach((r) => r.update({ img: a }).catch(() => {
    }));
  }), Hooks.on("updateActor", (a, o, f, r) => {
    if ((a == null ? void 0 : a.type) !== "Karakter" || !(a != null && a.id)) return;
    const i = a.id;
    setTimeout(() => {
      var h, g, k, b;
      const c = (h = game.actors) == null ? void 0 : h.get(i);
      if (!c || c.type !== "Karakter") return;
      const u = Lt.getTotalSpeedRaw(c), m = (g = c.effects) == null ? void 0 : g.find((w) => w.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !m) {
        const w = ((b = (k = CONFIG.statusEffects) == null ? void 0 : k.find((I) => I.id === "immobilized")) == null ? void 0 : b.img) ?? "";
        c.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: w,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: c.uuid
        }]).then(() => {
          var _, O;
          const I = ((_ = canvas.tokens) == null ? void 0 : _.placeables) ?? [];
          for (const C of I)
            ((O = C == null ? void 0 : C.document) == null ? void 0 : O.actorId) === i && typeof C.draw == "function" && C.draw();
        }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect create failed:", I));
      } else u > 0 && m && m.delete().then(() => {
        var I, _;
        const w = ((I = canvas.tokens) == null ? void 0 : I.placeables) ?? [];
        for (const O of w)
          ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === i && typeof O.draw == "function" && O.draw();
      }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", w));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (a, o, f, r) => {
    var I, _, O, C, j, K, U, E, V, Z, J, Y, oe;
    const i = a == null ? void 0 : a.id;
    if (!i) return;
    if ((a.type === "Karakter" || a.type === "Npc") && ((I = o == null ? void 0 : o.system) != null && I.combat) && "initiativeResult" in o.system.combat) {
      const R = Number((O = (_ = a.system) == null ? void 0 : _.combat) == null ? void 0 : O.initiativeResult), te = Number.isFinite(R) ? R : 0, de = game.combat;
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
    if (a.type === "Npc" && ((K = o == null ? void 0 : o.system) != null && K.identity) && "size" in o.system.identity) {
      const R = ai((E = (U = a.system) == null ? void 0 : U.identity) == null ? void 0 : E.size);
      a.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", a.name, te));
    }
    const c = document.activeElement, u = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA" || c.isContentEditable), m = [], h = (V = game.actors) == null ? void 0 : V.get(i);
    h != null && h.apps && m.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of g) {
      if (((Z = R.document) == null ? void 0 : Z.id) !== i || ((J = R.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = R.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" && te !== "VoidVallalkozasSheet" || m.includes(R) || m.push(R);
    }
    if (u && m.some((R) => {
      const te = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return te && te.contains(c);
    })) return;
    const b = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, w = b && Date.now() - b.at < e ? b.appId : null;
    setTimeout(() => {
      for (const R of m)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== w && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (a, o, f, r) => {
    var m, h, g;
    const i = a == null ? void 0 : a.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || a.type !== "Fegyver") return;
    const c = ((m = i.system) == null ? void 0 : m.weapons) ?? {}, u = {};
    for (const [k, b] of Object.entries(c)) {
      if (!k.startsWith("slot")) continue;
      const w = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !w || w !== a.id || (u[`system.weapons.${k}.name`] = a.name ?? "", u[`system.weapons.${k}.damage`] = ((h = a.system) == null ? void 0 : h.damage) ?? "", u[`system.weapons.${k}.bonus`] = ((g = a.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(u).length && i.update(u);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, k, b, w, I, _, O, C, j, K, U, E, V, Z, J, Y, oe, R, te, de, De, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (k = game.messages) == null ? void 0 : k.get(n), d = (w = (b = p == null ? void 0 : p.flags) == null ? void 0 : b["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!d) return;
    const y = d.actorId ?? ((I = p == null ? void 0 : p.speaker) == null ? void 0 : I.actor) ?? "";
    if (!y) return;
    e.preventDefault(), e.stopPropagation();
    let l = ((_ = game.actors) == null ? void 0 : _.get(d.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(y));
    if (l || (l = ((j = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : j.flatMap((W) => {
      var se;
      return ((se = W.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((W) => W.actor).find((W) => W && (W.id === y || W.id === d.actorId))) ?? null), !l) return;
    const a = d.itemId ? ((U = (K = l.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, d.itemId)) ?? ((Z = (V = (E = l.items) == null ? void 0 : E.contents) == null ? void 0 : V.find) == null ? void 0 : Z.call(V, (P) => P.id === d.itemId)) : null;
    let o = (d.damageFormula ?? "").trim();
    if (o || (o = (((J = a == null ? void 0 : a.system) == null ? void 0 : J.damage) ?? "").trim()), !o && d.slotKey && (o = (((((Y = l.system) == null ? void 0 : Y.weapons) ?? {})[d.slotKey] ?? {}).damage ?? "").trim()), !o) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (R = game.i18n) == null ? void 0 : R.localize) == null ? void 0 : te.call(R, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const f = new Roll(o);
    await f.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = d.targetName || "", c = d.hitLocationName || "", u = ((a == null ? void 0 : a.name) ?? (d.slotKey ? ((D = (((De = l.system) == null ? void 0 : De.weapons) ?? {})[d.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let m = i ? `${u} – sebzés – ${i}` : `${u} – sebzés`;
    c && (m += ` (${c})`), await f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: l }),
      flavor: m,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var d, y, l, a, o, f;
      if (!((y = (d = e.target) == null ? void 0 : d.closest) != null && y.call(d, "#actors"))) return;
      const t = (a = (l = e.target) == null ? void 0 : l.closest) == null ? void 0 : a.call(l, "[data-document-id]"), n = (o = t == null ? void 0 : t.getAttribute) == null ? void 0 : o.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((f = game.actors) != null && f.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, d;
    const e = ((t = game.actors) == null ? void 0 : t.filter((y) => y.type === "Karakter")) ?? [];
    for (const y of e) {
      const l = Lt.getTotalSpeedRaw(y), a = (n = y.effects) == null ? void 0 : n.find((o) => o.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !a) {
        const o = ((d = (p = CONFIG.statusEffects) == null ? void 0 : p.find((f) => f.id === "immobilized")) == null ? void 0 : d.img) ?? "";
        await y.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: o,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: y.uuid
        }]).catch(() => {
        });
      } else l > 0 && a && await a.delete().catch(() => {
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
        background: { src: ri },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, d = await n.create(p);
      d && console.log("Vacuum of the Void | Default scene created:", d.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var d, y, l, a, o, f;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((d = game.actors) == null ? void 0 : d.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of t)
      try {
        const i = r.prototypeToken, c = ((y = i == null ? void 0 : i.bar1) == null ? void 0 : y.attribute) ?? "", u = ((l = i == null ? void 0 : i.bar2) == null ? void 0 : l.attribute) ?? "";
        (c || u) && await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", r.name, i);
      }
    for (const r of game.scenes ?? []) {
      const i = ((a = r.tokens) == null ? void 0 : a.filter((c) => {
        var u;
        return ((u = c.actor) == null ? void 0 : u.type) === "Karakter";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(e);
        } catch (u) {
          console.warn("Vacuum of the Void | Token update failed for", c.name, u);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, p = ((o = game.actors) == null ? void 0 : o.filter((r) => r.type === "Npc")) ?? [];
    for (const r of p)
      try {
        await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", r.name, i);
      }
    for (const r of game.scenes ?? []) {
      const i = ((f = r.tokens) == null ? void 0 : f.filter((c) => {
        var u;
        return ((u = c.actor) == null ? void 0 : u.type) === "Npc";
      })) ?? [];
      for (const c of i)
        try {
          await c.update(n);
        } catch (u) {
          console.warn("Vacuum of the Void | NPC token update failed for", c.name, u);
        }
    }
  })();
});
Hooks.on("preCreateToken", (S, s, e) => {
  var d, y, l, a, o, f, r, i, c;
  const t = (d = game.votv) == null ? void 0 : d._dragSourceActorId, n = t ?? S.actorId ?? ((y = S._source) == null ? void 0 : y.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (l = game.actors) == null ? void 0 : l.get(n) : S.actor ?? null;
  if (p) {
    if (p.type === "Bazis")
      return (f = ui == null ? void 0 : ui.notifications) == null || f.warn(((o = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : o.call(a, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
    if (p.type === "Vallalkozas")
      return (r = ui == null ? void 0 : ui.notifications) == null || r.warn("Vállalkozás nem helyezhető tokenként a térképre."), !1;
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
      const u = ai((c = (i = p.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: u,
        height: u
      });
    }
  }
});
Hooks.on("preCreateCombatant", (S, s, e) => {
  var p, d, y;
  const t = S.actorId ? (p = game.actors) == null ? void 0 : p.get(S.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((y = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : y.call(d, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = S.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
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
function oi(S) {
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Bi).catch((p) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, p);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || oi(S);
});
function ci() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((p) => p.type === "Karakter" || p.type === "Npc")) ?? []) {
    const p = n.apps ?? [], d = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const y of d)
      !y || S.has(y.id) || (S.add(y.id), typeof y.render == "function" && y.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const p = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    p !== "Karakter" && p !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(ci, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && oi(S), setTimeout(ci, 0);
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
    "background.src": ri,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var f, r, i, c;
  const t = ((f = S.flags) == null ? void 0 : f["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, d = t.weaponAttack, y = t.weapon, l = t.vsDefense, a = t.vsDefenseInfo;
  if (!n && !p && !d && !l) return;
  const o = (r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, ".dice-roll");
  if (o) {
    if (n && o.classList.add(`votv-${n}`), p) {
      const u = o.querySelector(".votv-crit-label");
      if (u)
        u.textContent = p;
      else {
        const m = o.querySelector(".dice-total"), h = (m == null ? void 0 : m.parentElement) ?? o, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = p, h.appendChild(g);
      }
    }
    if (d && y && (y.actorId || (i = S.speaker) != null && i.actor)) {
      const u = o.querySelector(".dice-total"), m = (u == null ? void 0 : u.parentElement) ?? o;
      if (!o.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const k = !!y.isHit, b = y.targetName || "Célpont";
        g.textContent = k ? `Találat – ${b}` : `Nem talált – ${b}`, m.appendChild(g);
      }
      if (y.isHit && !o.querySelector(".votv-weapon-damage-chat")) {
        const k = document.createElement("button");
        k.type = "button", k.className = "votv-weapon-damage-chat";
        const b = y.hitLocationRoll, w = y.hitLocationName;
        k.textContent = b != null && w ? `Sebzés (Találati Hely ${b} - ${w})` : "Sebzés", k.dataset.actorId = String(y.actorId ?? ((c = S.speaker) == null ? void 0 : c.actor) ?? ""), k.dataset.itemId = String(y.itemId ?? ""), k.dataset.slotKey = String(y.slotKey ?? ""), k.dataset.targetName = String(y.targetName ?? ""), k.dataset.hitLocationName = String(y.hitLocationName ?? ""), k.dataset.messageId = String(S.id ?? ""), m.appendChild(k);
      }
    }
    if (!d && l && a) {
      const u = o.querySelector(".dice-total"), m = (u == null ? void 0 : u.parentElement) ?? o, h = !!a.isHit, g = a.targetName || "Célpont", k = a.hitLocationRoll, b = a.hitLocationName;
      let w = o.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", m.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const I = o.querySelector(".votv-defense-hitloc");
      if (h && k != null && b) {
        let _ = I;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", m.appendChild(_)), _.textContent = `Találati Hely ${k} - ${b}`;
      } else I && I.remove();
    }
  }
});
export {
  Lt as V,
  Wt as c
};
//# sourceMappingURL=vacuum-of-the-void-BfOjkc4e.mjs.map
