var di = Object.defineProperty;
var mi = Object.getPrototypeOf;
var pi = Reflect.get;
var fi = (S, s, e) => s in S ? di(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var X = (S, s, e) => fi(S, typeof s != "symbol" ? s + "" : s, e);
var R = (S, s, e) => pi(mi(S), e, s);
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
const { SchemaField: bi, StringField: Ss, NumberField: vi } = foundry.data.fields;
class ki extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new bi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new Ss({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new Ss({ required: !1, blank: !0, initial: "" }),
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
const { SchemaField: wi, StringField: Ts, NumberField: Ii } = foundry.data.fields;
class Si extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new wi({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new Ts({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new Ts({ required: !1, blank: !0, initial: "" }),
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
class Ds extends foundry.abstract.TypeDataModel {
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
const { NumberField: Ht, StringField: _s } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new _s({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new _s({
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
const { NumberField: Ci, StringField: Os } = foundry.data.fields;
class Cs extends foundry.abstract.TypeDataModel {
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
const { StringField: qs } = foundry.data.fields;
class qi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new qs({ required: !1, blank: !0, initial: "" }),
      quantity: new qs({ required: !1, blank: !0, initial: "1" })
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
const { NumberField: Gt, StringField: pt, SchemaField: Ns, ArrayField: Ai } = foundry.data.fields;
class Fi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Gt({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new Ns({
        max: new Gt({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new Gt({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ns({
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
const { NumberField: Ei, StringField: Rt, SchemaField: Pi, ArrayField: $i } = foundry.data.fields;
class xi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ei({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Pi({
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
  let a = !1;
  const f = (n, i = 1) => {
    if (!Array.isArray(n)) return;
    let c = i;
    for (const l of n) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        f(l.terms, c);
        continue;
      }
      if (typeof l.operator == "string") {
        c = l.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof l.faces == "number" ? l.faces : void 0, h = Array.isArray(l.results) ? l.results : null;
      if (!u || !h || u === 8 || u !== 6) continue;
      const g = !a && c >= 0 && (l.number === 3 || l.number === "3") ? (a = !0, s) : c >= 0 ? e : t;
      for (const k of h) {
        if (!k || k.discarded || k.hidden) continue;
        const b = Number(k.result ?? k);
        Number.isFinite(b) && g.push(b);
      }
    }
  };
  f(S.terms, 1);
  const d = s.filter((n) => n === 6).length, y = s.filter((n) => n === 1).length, p = e.filter((n) => n === 6).length, r = t.filter((n) => n === 6).length, o = d + p, m = y + r;
  return o > 0 && o === m ? { resultType: null, label: null } : o >= 3 ? { resultType: "critical", label: "Brutális Siker" } : o === 2 ? { resultType: "critical", label: "Kritikus Siker" } : m >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : m === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var As, Fs, Es, Ps;
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
    var a, f, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    const f = this.element, d = this.form ?? this.element;
    let y = { scrollState: {}, focus: null };
    if (f) {
      y.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = d.contains(u), g = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && g && (y.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const r = this.element, o = this.form ?? this.element, m = y.scrollState, n = y.focus, i = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", c = () => {
      var u, h;
      if (this._applyScrollState(r, m), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const g = ((u = o.querySelector) == null ? void 0 : u.call(o, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(n.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = n.selectionStart ?? 0, g.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(r, m);
    };
    return (i || n) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), a = Number(e);
    if (a <= 0 || t <= 0) return 0;
    const f = Math.floor(a / 3), d = Math.floor(2 * a / 3);
    return t <= f ? 1 : t <= d ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, a, f;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (d) => {
        var y;
        return d.type === "Pancel" && ((y = d.system) == null ? void 0 : y.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const y = String(((f = d.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), p = Number(y);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, a, f;
    const s = (((a = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : a.contents) ?? []).filter(
      (d) => {
        var y;
        return d.type === "Pancel" && ((y = d.system) == null ? void 0 : y.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const y = String(((f = d.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), p = Number(y);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var a, f;
    const e = (((a = s == null ? void 0 : s.items) == null ? void 0 : a.contents) ?? []).filter(
      (d) => {
        var y;
        return d.type === "Pancel" && ((y = d.system) == null ? void 0 : y.equipped) === !0;
      }
    );
    let t = 0;
    for (const d of e) {
      const y = String(((f = d.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), p = Number(y);
      Number.isFinite(p) && (t += p);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var o, m, n, i, c, l, u, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((m = (o = e.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : m.value) ?? 0, a = ((n = e.currentHealth) == null ? void 0 : n.legs) ?? 0, f = Q._healthStatusFromRatio(a, t);
    if (f === 0) return 0;
    const d = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let y;
    f === 1 ? y = -6 : f === 2 ? y = -3 : y = d, y += Q._getTotalArmorSpeedPenaltyStatic(s);
    const p = Number(((u = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : u.speed) ?? 0) || 0, r = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return p + r + (Number.isFinite(y) ? y : 0);
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
    var m, n, i, c, l, u, h, g, k, b, w, I;
    const e = s ?? this.form ?? this.element;
    let t = (m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (n = this.actor) == null ? void 0 : n.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const a = ((u = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : u.resources) ?? {}, f = ((g = (h = a.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, d = ((k = a.currentHealth) == null ? void 0 : k.legs) ?? 0, y = Q._healthStatusFromRatio(d, f), p = Number(((I = (w = (b = this.actor) == null ? void 0 : b.system) == null ? void 0 : w.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let r;
    y === 0 ? r = 0 : y === 1 ? r = -6 : y === 2 ? r = -3 : r = p;
    const o = this._getTotalArmorSpeedPenalty();
    r += o, t.textContent = String(r);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var r, o, m, n, i, c, l, u, h, g, k, b, w;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const a = Number(((n = (m = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : m.combat) == null ? void 0 : n.givenProtection) ?? 0) || 0, f = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, d = (g = (h = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, y = (w = (b = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : b.has) != null && w.call(b, "threequarteredcover") ? 6 : 0, p = a + this._getTotalArmorProtectionBonus() + f + d + y;
    t.textContent = String(p);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (m) => {
      var n;
      return ((n = e == null ? void 0 : e.querySelector) == null ? void 0 : n.call(e, m)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${m}`) : null);
    }, a = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), d = t('input[name="system.combat.defense"]'), y = t('input[name="system.combat.defenseBonus"]');
    if (!a) return;
    const p = Number(d == null ? void 0 : d.value) || 0, r = Number(y == null ? void 0 : y.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    a.textContent = String(p + r + o);
  }
  _writeTotalSpeed(s = null) {
    var l, u, h, g, k, b, w, I;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, a = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), d = t('input[name="system.combat.speed"]'), y = t('input[name="system.combat.speedBonus"]');
    if (!a) return;
    if ((h = (u = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : u.has) != null && h.call(u, "immobilized")) {
      a.textContent = "0";
      return;
    }
    const p = ((k = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : k.resources) ?? {}, r = ((w = (b = p.hitLocations) == null ? void 0 : b.legs) == null ? void 0 : w.value) ?? 0, o = ((I = p.currentHealth) == null ? void 0 : I.legs) ?? 0;
    if (Q._healthStatusFromRatio(o, r) === 0) {
      a.textContent = "0";
      return;
    }
    const n = Number(d == null ? void 0 : d.value) || 0, i = Number(y == null ? void 0 : y.value) || 0, c = Number(f == null ? void 0 : f.textContent) || 0;
    a.textContent = String(n + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var d, y, p, r;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((d = this.actor.system) == null ? void 0 : d.resources) ?? {}, a = ((p = (y = t.hitLocations) == null ? void 0 : y[e]) == null ? void 0 : p.value) ?? 0, f = ((r = t.currentHealth) == null ? void 0 : r[e]) ?? 0;
    return Q._healthStatusFromRatio(f, a);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var y, p, r, o;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const a = ((y = s == null ? void 0 : s.system) == null ? void 0 : y.resources) ?? {}, f = ((r = (p = a.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : r.value) ?? 0, d = ((o = a.currentHealth) == null ? void 0 : o[t]) ?? 0;
    return Q._healthStatusFromRatio(d, f);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et, T, x, z, G, Ie, ne, Le, Ce, Se, Re, tt, st, Pt, $t, xt, zt, _t, dt, rs, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs, bs, vs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const a = this.actor.system.resources ?? {}, f = a.hitLocations ?? {}, d = a.currentHealth ?? {}, y = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const v of y) {
      const L = ((bt = f[v]) == null ? void 0 : bt.value) ?? 0, N = d[v] ?? 0;
      e.computedHealthStatus[v] = Q._healthStatusFromRatio(N, L);
    }
    const p = (Number(d.head) || 0) === 0, o = ["torso", "arms", "legs"].filter((v) => (Number(d[v]) || 0) === 0).length;
    e.showDeathSkull = p || o >= 2;
    const m = e.computedHealthStatus.legs ?? 3, n = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    m === 0 ? i = 0 : m === 1 ? i = -6 : m === 2 ? i = -3 : i = n;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const l = Number(((It = (wt = this.actor.system) == null ? void 0 : wt.combat) == null ? void 0 : It.givenProtection) ?? 0) || 0, u = (Tt = (Qe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Qe.has) != null && Tt.call(Qe, "lookaround") ? 1 : 0, h = (T = (et = (Dt = this.actor) == null ? void 0 : Dt.statuses) == null ? void 0 : et.has) != null && T.call(et, "halfcover") ? 3 : 0, g = (G = (z = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : z.has) != null && G.call(z, "threequarteredcover") ? 6 : 0, k = l + this._getTotalArmorProtectionBonus() + u + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const b = ((Ie = e.system) == null ? void 0 : Ie.combat) ?? {};
    e.totalDefense = (Number(b.defense) || 0) + (Number(b.defenseBonus) || 0) + (Number(b.givenProtection) || 0);
    const w = Number(b.givenSpeed);
    let I = (Number(b.speed) || 0) + (Number(b.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    m === 0 && (I = 0), (Ce = (Le = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Le.has) != null && Ce.call(Le, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Re = (Se = e.system) == null ? void 0 : Se.combat) == null ? void 0 : Re.givenProtection } },
      { inplace: !1 }
    ), I = 0), e.totalSpeed = I;
    const _ = Q.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [v, L] of Object.entries(_)) {
      const N = e.computedHealthStatus[L];
      e.skillHealthStatus[v] = N, e.skillDisabled[v] = N === 0 ? " disabled" : "", e.skillHasHealthTint[v] = !0;
    }
    const O = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (O.slotOrder ?? "").trim(), K = j ? j.split(/\s*,\s*/).filter((v) => C.includes(v)) : [], U = (tt = this.actor.system.gear) == null ? void 0 : tt.microchips, E = U && typeof U == "object" && !Array.isArray(U) ? U : {}, V = (((st = E.slot1) == null ? void 0 : st.itemId) ?? "").trim(), Z = (((Pt = E.slot2) == null ? void 0 : Pt.itemId) ?? "").trim(), J = ((($t = E.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((v) => v.type !== "Kepesseg" && v.type !== "ability").slice().sort((v, L) => {
      const N = typeof v.sort == "number" ? v.sort : 0, F = typeof L.sort == "number" ? L.sort : 0;
      return N - F;
    }).map((v) => {
      var je, nt, at, Ve, Je, Ot;
      const L = v.type === "Fegyver", N = v.type === "MikroChip";
      let F = 0, B = "", ue = null;
      for (let mt = 0; mt < K.length; mt++) {
        const Ct = K[mt];
        if ((((je = O[Ct]) == null ? void 0 : je.itemId) ?? "") === v.id) {
          F = mt + 1, B = ((nt = O[Ct]) == null ? void 0 : nt.bonus) ?? "", ue = Ct;
          break;
        }
      }
      let re = null;
      N && (V === v.id ? re = "slot1" : Z === v.id ? re = "slot2" : J === v.id && (re = "slot3"));
      const it = L && ((at = v.system) != null && at.damage) ? v.system.damage : "", Te = L && typeof ((Ve = v.system) == null ? void 0 : Ve.range) == "string" ? (v.system.range || "").trim() : "", qe = ue ? Number((Je = O[ue]) == null ? void 0 : Je.bonus) || 0 : "";
      return {
        id: v.id,
        name: v.name,
        img: v.img,
        type: v.type,
        isWeapon: L,
        slotAssignment: F,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: re,
        isEquipped: !!(ue || re),
        damage: it,
        rangeStr: Te,
        slotBonusNum: qe,
        quantity: Number(((Ot = v.system) == null ? void 0 : Ot.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const M = (((xt = this.actor.items) == null ? void 0 : xt.contents) ?? []).filter((v) => v.type === "Fegyver"), te = M.map((v) => ({ id: v.id, name: v.name, img: v.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", Oe = K.filter((v) => {
      const N = ((O[v] ?? {}).itemId ?? "").trim();
      return N ? !!M.find((B) => B.id === N) : !1;
    });
    e.weaponSlots = Oe.map((v, L) => {
      const N = O[v] ?? {}, F = (N.itemId ?? "").trim(), B = te.find((qe) => qe.id === F), ue = M.find((qe) => qe.id === F), re = (ue == null ? void 0 : ue.system) ?? {}, it = re.size === "thrown", Te = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: v,
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
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, P = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = M.map((v) => {
      var ks, ws, Is;
      const L = v.id;
      let N = null, F = {};
      for (const Ut of K)
        if ((((ks = O[Ut]) == null ? void 0 : ks.itemId) ?? "").trim() === L) {
          N = Ut, F = O[Ut] ?? {};
          break;
        }
      const B = !!N, ue = ((ws = v.system) == null ? void 0 : ws.equipped) !== void 0 && ((Is = v.system) == null ? void 0 : Is.equipped) !== null ? !!v.system.equipped : B, re = (v == null ? void 0 : v.system) ?? {}, it = typeof re.range == "string" ? (re.range || "").trim() : "", Te = re.type ?? "", qe = (D[Te] ?? Te) || "—", je = re.size ?? "", nt = (P[je] ?? je) || "", at = [qe, nt].filter(Boolean).join(", ") || qe || "—", Ve = Te === "projectile" || je === "thrown", Je = re.quantity, Ot = Je != null ? String(Je).trim() : "1", mt = String(F.bonus ?? "").trim(), Ct = String(re.bonus ?? "").trim(), li = mt || Ct || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? de,
        img: (v == null ? void 0 : v.img) ?? "",
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
    const W = (((zt = this.actor.items) == null ? void 0 : zt.contents) ?? []).filter((v) => v.type === "Pancel");
    e.armorTable = W.map((v) => {
      var F, B;
      const L = (v == null ? void 0 : v.system) ?? {}, N = ((F = v.system) == null ? void 0 : F.equipped) !== void 0 && ((B = v.system) == null ? void 0 : B.equipped) !== null ? !!v.system.equipped : !1;
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: Mi((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const se = (((_t = this.actor.items) == null ? void 0 : _t.contents) ?? []).filter((v) => v.type === "Targy");
    e.itemsTable = se.map((v) => {
      const L = (v == null ? void 0 : v.system) ?? {}, N = (L.description ?? "").trim(), F = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", B = L.quantity != null ? String(L.quantity).trim() : "1";
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
      const N = (((v == null ? void 0 : v.system) ?? {}).description ?? "").trim(), F = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: v.id,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        description: F
      };
    });
    const pe = (((rs = this.actor.items) == null ? void 0 : rs.contents) ?? []).filter((v) => v.type === "MikroChip"), ae = pe.map((v) => ({ id: v.id, name: v.name, img: v.img })), we = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (v) => {
      var N, F, B;
      const L = [];
      return v !== 1 && L.push((((N = E.slot1) == null ? void 0 : N.itemId) ?? "").trim()), v !== 2 && L.push((((F = E.slot2) == null ? void 0 : F.itemId) ?? "").trim()), v !== 3 && L.push((((B = E.slot3) == null ? void 0 : B.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((v) => !fe(1).includes(v.id)), e.microchipItemsSlot2 = ae.filter((v) => !fe(2).includes(v.id)), e.microchipItemsSlot3 = ae.filter((v) => !fe(3).includes(v.id)), e.microchipSlots = ce.map((v) => {
      const L = E[v] ?? {}, N = (L.itemId ?? "").trim(), F = pe.find((B) => B.id === N);
      return {
        slotKey: v,
        itemId: N,
        displayName: (F == null ? void 0 : F.name) || L.name || we,
        img: (F == null ? void 0 : F.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((v) => {
      const L = `slot${v}`, N = E[L] ?? {}, F = (N.itemId ?? "").trim(), B = ae.find((ue) => ue.id === F);
      e[`microchip${v}ItemId`] = F, e[`microchip${v}DisplayName`] = (B == null ? void 0 : B.name) || N.name || we, e[`microchip${v}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((v) => {
      var je, nt, at, Ve;
      const L = v.id;
      let N = null;
      for (const Je of ce)
        if ((((je = E[Je]) == null ? void 0 : je.itemId) ?? "").trim() === L) {
          N = Je;
          break;
        }
      const F = !!N, B = ((nt = v == null ? void 0 : v.system) == null ? void 0 : nt.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", it = Number((at = v == null ? void 0 : v.system) == null ? void 0 : at.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, Te = (((Ve = v == null ? void 0 : v.system) == null ? void 0 : Ve.description) ?? "").trim(), qe = Te ? Te.length > 60 ? Te.slice(0, 57) + "…" : Te : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (v == null ? void 0 : v.name) ?? "—",
        img: (v == null ? void 0 : v.img) ?? "",
        typeLabel: ue,
        description: qe,
        kp: it,
        isActive: re,
        slotKey: N ?? "",
        equipped: F
      };
    });
    const Ke = (((os = e.weaponsTable) == null ? void 0 : os.length) ?? 0) > 0 || (((cs = e.armorTable) == null ? void 0 : cs.length) ?? 0) > 0 || (((ls = e.microchipsTable) == null ? void 0 : ls.length) ?? 0) > 0 || (((us = e.itemsTable) == null ? void 0 : us.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ke;
    const Ue = this.actor.system.abilities ?? {}, ze = (((ds = this.actor.items) == null ? void 0 : ds.contents) ?? []).map((v) => {
      var L, N, F;
      return {
        id: v.id,
        name: v.name,
        img: v.img,
        kind: ((L = v.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((N = v.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((F = v.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), Be = new Map(ze.map((v) => [v.id, v])), ot = "— Nincs képesség —", He = (v) => {
      const L = Ue[v] ?? {}, N = (L.itemId ?? "").trim(), F = N ? Be.get(N) : null, B = (F == null ? void 0 : F.description) ?? "", ue = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: N,
        displayName: (F == null ? void 0 : F.name) || L.name || ot,
        img: (F == null ? void 0 : F.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = He("faji"), e.abilityHatterSlot = He("hatter");
    const Ye = (v) => {
      const L = Ue[v];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Ge = (v) => v.map((L) => {
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
    const ct = ((ms = e.system) == null ? void 0 : ms.resources) ?? {}, ee = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ye = (fs = (ps = e.system) == null ? void 0 : ps.combat) == null ? void 0 : fs.initiativeResult, ie = typeof ye == "number" ? ye : -1, lt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Me = (gs = (ys = e.system) == null ? void 0 : ys.combat) == null ? void 0 : gs.initiativeRanges, Ne = Array.isArray(Me) ? Me.map((v) => ({ min: Number(v.min) ?? 0, max: Number(v.max) ?? 0, kp: Math.min(10, Math.max(0, Number(v.kp) ?? 0)) })) : [], We = (Ne.length > 0 ? Ne : lt).slice().sort((v, L) => v.min - L.min), Xe = Ne.map((v) => v.min), At = Xe.length ? Math.min(...Xe) : 0, Ft = Xe.length ? Math.max(...Xe) : 0;
    e.initiativeRanges = Ne.map((v) => ({ ...v, isFirst: v.min === At, isLast: v.min === Ft }));
    let ft = 0;
    if (typeof ie == "number" && ie >= 0 && We.length > 0) {
      const v = We[0], L = We[We.length - 1];
      let N = null;
      ie <= v.max ? N = v : ie >= L.min ? N = L : N = We.find((F) => ie >= F.min && ie <= F.max), N && (ft = N.kp);
    }
    e.kpDots = ee.map((v, L) => {
      const N = L + 1, F = !!Number(ct[v]), B = N <= ft;
      return { index: N, used: F, usable: B };
    });
    const Et = !!((bs = (hs = game.combat) == null ? void 0 : hs.combatants) != null && bs.some((v) => {
      var L;
      return ((L = v.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Et, e.canEditInitiative = !!((vs = game.user) != null && vs.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var m, n;
    super._attachFrameListeners(s);
    const e = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-6quanM8S.mjs");
      u(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var u, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const k = (c.dataset.slot ?? "").trim();
        if (!k) return;
        l = (((((h = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : h.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = c.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-6quanM8S.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, k;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, l = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const u = `system.resources.kpDot${l}`, h = !!Number((k = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : k[`kpDot${l}`]);
      await this.actor.update({ [u]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const a = (i) => {
      var u;
      const c = i ? i.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', a);
    const f = (n = e.querySelector) == null ? void 0 : n.call(e, 'input[name="system.resources.stress.value"]');
    f && a({ currentTarget: f });
    const d = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', d), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var u, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = ((g = (h = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
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
      const c = i.currentTarget, l = c.dataset.skill, u = ((g = c.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-6quanM8S.mjs");
      h(this.actor, l, u);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var b, w, I, _, O, C, j;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), u = l == null ? void 0 : l.dataset.slot;
      if (!u) return;
      const g = (((w = (((b = this.actor.system) == null ? void 0 : b.weapons) ?? {})[u]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const k = ((_ = (I = this.actor.items).get) == null ? void 0 : _.call(I, g)) ?? ((C = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (K) => K.id === g));
      (j = k == null ? void 0 : k.sheet) == null || j.render(!0);
    });
    const y = (i, c) => {
      var h;
      const l = i.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (u) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (h = u.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), y(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), y(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u) return;
      let h = Number(c.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await u.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor, h = u.items.get(l);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const k = u.system.weapons ?? {}, b = (k.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = b ? b.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = I.find((O) => {
          var C;
          return (((C = k[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = I.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = g ? g.split(/\s*,\s*/).filter((C) => k.includes(C)) : [], w = b.find((C) => {
        var j;
        return (((j = h[C]) == null ? void 0 : j.itemId) ?? "").trim() === l;
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
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: (u == null ? void 0 : u.name) ?? "",
          [`system.weapons.${C}.damage`]: ((_ = u == null ? void 0 : u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = u == null ? void 0 : u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (w) {
        const C = b.filter((j) => j !== w);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const c = i.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), u = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), h = u == null ? void 0 : u.dataset.slot;
      if (!h) return;
      const g = (c.dataset.itemId ?? "").trim(), k = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", b = (c.dataset.itemImg ?? "").trim(), w = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = k);
      let I = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      b ? (I || (I = document.createElement("img"), I.className = "karakter-microchip-slot-thumb", I.alt = "", u == null || u.insertBefore(I, w)), I.src = b, I.style.display = "") : I && I.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
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
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const u = ((b = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : b.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var I;
        return (((I = u[w]) == null ? void 0 : I.itemId) ?? "").trim() === c;
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
      c.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, l)), c.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, l));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, l)), c.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (u) => {
        var h;
        (h = u.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, l)), c.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (u) => {
        var h;
        (h = u.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
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
      const c = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const u = this.actor.system.abilities ?? {}, g = (Array.isArray((k = u[c]) == null ? void 0 : k.items) ? u[c].items.slice() : []).filter((b) => b !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      (h = u == null ? void 0 : u.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor.items.get(l);
      u && (u.type === "Kepesseg" || u.type === "ability" ? await this._postAbilityToChat(l) : (u.type === "MikroChip" || u.type === "Egyeb") && await this._postItemToChat(l));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u || u.type !== "Fegyver") return;
      const h = (c.value ?? "").trim();
      await u.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, k = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.items.get(l);
      !u || u.type !== "Pancel" || (await u.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const u = this.actor.items.get(l);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], b = g ? g.split(/\s*,\s*/).filter((C) => k.includes(C)) : [], w = b.find((C) => {
        var j;
        return (((j = h[C]) == null ? void 0 : j.itemId) ?? "").trim() === l;
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
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: u.name ?? "",
          [`system.weapons.${C}.damage`]: ((_ = u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (w) {
        const C = b.filter((j) => j !== w);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const u = this.actor, h = u.items.get(l), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const k = u.system.weapons ?? {}, b = (k.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = b ? b.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = I.find((O) => {
          var C;
          return (((C = k[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = I.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [l]);
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
      const u = this.actor.items.get(l);
      if (!u || u.type !== "Targy") return;
      const h = (c.value ?? "").trim();
      await u.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, k = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const p = this, r = (i) => {
      var u, h, g, k;
      if (!i) return;
      const c = p._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((h = (u = c.system) == null ? void 0 : u.resources) == null ? void 0 : h.currentHealth) != null || ((k = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : k.hitLocations) != null;
      p.actor.update(c).then(() => {
        l && setTimeout(() => p.render(!0), 260);
      }).catch((b) => console.warn("VoidKarakterSheet save failed", b));
    }, o = (i) => {
      var c, l, u;
      return i && (((l = (c = p.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, i)) || p.id && ((u = i.closest) == null ? void 0 : u.call(i, `#${CSS.escape(p.id)}`)));
    };
    p._votvBlur = (i) => {
      var g;
      const c = i.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const u = c.form;
      if (!o(u)) return;
      const h = i.relatedTarget;
      h && (u.contains(h) || p.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(p.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: p.id, at: Date.now() }), r(u));
    }, document.body.addEventListener("blur", p._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var y, p, r;
    const e = {};
    for (const o of s.elements) {
      if (!o.name || o.disabled || o.type === "radio" && !o.checked || o.name.startsWith("system.resources.healthStatus.")) continue;
      let m;
      o.type === "checkbox" ? m = o.checked : o.type === "number" ? m = o.value === "" ? 0 : Number(o.value) : m = o.value ?? "", foundry.utils.setProperty(e, o.name, m);
    }
    const t = foundry.utils.mergeObject(
      ((y = this.actor.system) == null ? void 0 : y.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), a = t.hitLocations ?? {}, f = t.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    for (const o of d) {
      const m = ((r = a[o]) == null ? void 0 : r.value) ?? 0, n = f[o] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${o}`, Q._healthStatusFromRatio(n, m));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, a, f, d, y, p, r, o, m, n, i, c, l, u;
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
          if (((a = g.parent) == null ? void 0 : a.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(g.toObject(), { type: "Kepesseg" });
            k = ((f = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : f.id) ?? k;
          }
          const b = (((d = g.system) == null ? void 0 : d.kind) ?? "passive").toString();
          if (b === "module") {
            (p = (y = ui.notifications) == null ? void 0 : y.warn) == null || p.call(y, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
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
          const I = b === "active" ? "active" : "passive", _ = Array.isArray((r = w[I]) == null ? void 0 : r.items) ? w[I].items.slice() : Array.isArray(w[I]) ? w[I].slice() : [];
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
          const k = this.actor, b = ((m = g.parent) == null ? void 0 : m.id) !== k.id;
          let w = g.id;
          if (b) {
            const I = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            w = ((n = (await k.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : n.id) ?? w;
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
          ((l = g.parent) == null ? void 0 : l.id) !== k.id && await k.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
        if (g && g.documentName === "Item" && (g.type === "Targy" || g.type === "Egyeb")) {
          const k = this.actor;
          ((u = g.parent) == null ? void 0 : u.id) !== k.id && await k.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, d, y;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (y = s.currentTarget) == null || y.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var y, p, r, o, m, n;
    s.preventDefault(), s.stopPropagation(), (y = s.currentTarget) == null || y.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const f = await fromUuid(a.uuid);
    if (!f || f.type !== "Fegyver") return;
    if (((o = f.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(f.toObject(), { system: { ...f.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const d = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: d,
      [`system.weapons.${e}.name`]: f.name,
      [`system.weapons.${e}.damage`]: ((m = f.system) == null ? void 0 : m.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((n = f.system) == null ? void 0 : n.bonus) ?? ""
    }), await f.update({ "system.equipped": !0 });
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
    var r, o;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((m, n) => {
      const i = typeof m.sort == "number" ? m.sort : 0, c = typeof n.sort == "number" ? n.sort : 0;
      return i - c;
    }).map((m) => m.id), d = f.indexOf(t), y = f.indexOf(e);
    if (d === -1 || y === -1) return;
    f.splice(d, 1), f.splice(y, 0, t);
    const p = f.map((m, n) => ({
      _id: m,
      sort: (n + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
  }
  _onInventoryAreaDragOver(s) {
    var a, f, d;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
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
    var p, r, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let a, f = "";
    if (e.type === "MikroChip") {
      const m = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (a = (m === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", m === "active") {
        const n = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${f}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var o, m, n;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", a = Number(((m = e.system) == null ? void 0 : m.kp) ?? 0) || 0, f = (((n = e.system) == null ? void 0 : n.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  _parseAbilityDrop(s) {
    var a, f;
    const e = ((a = s.dataTransfer) == null ? void 0 : a.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
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
    var d, y, p;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let f = a.id;
    if (((y = a.parent) == null ? void 0 : y.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      f = ((p = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : p.id) ?? f;
    }
    await this.actor.update({
      [`system.abilities.${e}.itemId`]: f,
      [`system.abilities.${e}.name`]: a.name
    });
  }
  _onAbilityAreaDragOver(s, e) {
    var a;
    this._parseAbilityDrop(s) && (s.preventDefault(), (a = s.currentTarget) == null || a.classList.add("karakter-ability-area-drag-over"));
  }
  async _onAbilityAreaDrop(s, e) {
    var p, r, o, m;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const a = await fromUuid(t.uuid);
    if (!a || a.type !== "Kepesseg" && a.type !== "ability") return;
    let f = a.id;
    if (((r = a.parent) == null ? void 0 : r.id) !== this.actor.id) {
      const n = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
      f = ((o = (await this.actor.createEmbeddedDocuments("Item", [n]))[0]) == null ? void 0 : o.id) ?? f;
    }
    const d = this.actor.system.abilities ?? {}, y = Array.isArray((m = d[e]) == null ? void 0 : m.items) ? d[e].items.slice() : Array.isArray(d[e]) ? d[e].slice() : [];
    y.includes(f) || y.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: y });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, d, y;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (a == null ? void 0 : a.type) === "Item" && (s.preventDefault(), (y = s.currentTarget) == null || y.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var y, p, r, o, m;
    s.preventDefault(), (y = s.currentTarget) == null || y.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
    let a;
    try {
      a = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((a == null ? void 0 : a.type) !== "Item" || !(a != null && a.uuid)) return;
    const f = await fromUuid(a.uuid);
    if (!f || f.type !== "MikroChip") return;
    let d = f.id;
    ((o = f.parent) == null ? void 0 : o.id) !== this.actor.id && (d = ((m = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : m.id) ?? d), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: d,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const a = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(a) || 0;
    const d = this._getSkillHealthStatus(s);
    d === 1 ? f -= 6 : d === 2 && (f -= 3);
    const p = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, r = new Roll(p);
    await r.evaluate({ async: !0 });
    const { resultType: o, label: m } = Vt(r), n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: o, critLabel: m } },
      rollMode: n
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
    const a = Math.max(0, s - 1);
    await this.actor.update({ "system.resources.morale": a });
  }
  async _rollInitiative() {
    var d;
    const s = Number(((d = this.actor.system.skills) == null ? void 0 : d.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, a = new Roll(t);
    await a.evaluate({ async: !0 });
    const f = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    await a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: "Kezdeményezés",
      flags: { "vacuum-of-the-void": {} },
      rollMode: f
    });
  }
  async _rollWeapon(s) {
    var b, w;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, a = this.actor.system.skills ?? {}, f = this.actor.items.filter((I) => I.type === "Fegyver");
    let d = null;
    t.itemId && (d = f.find((I) => I.id === t.itemId) ?? null);
    const y = d && d.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, r = ((b = d == null ? void 0 : d.system) == null ? void 0 : b.type) || "kinetic", o = (((w = d == null ? void 0 : d.system) == null ? void 0 : w.skillKey) ?? "").trim(), m = o && a[o] !== void 0 ? o : r === "explosive" ? "grenadeUse" : "firearms", n = Number(a[m] || 0) || 0, i = p + n, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, u = new Roll(l);
    await u.evaluate({ async: !0 });
    const { resultType: h, label: g } = Vt(u), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${y} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, r, o, m, n, i, c, l, u, h;
    const t = this.actor;
    if (!t) return;
    let a = ((r = (p = t.items).get) == null ? void 0 : r.call(p, s)) ?? ((m = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : m.call(o, (g) => g.id === s));
    if (!a || a.type !== "Fegyver") return;
    let f = (((n = a.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((u = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : u.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(f);
    await d.evaluate({ async: !0 });
    const y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: y
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
    form: foundry.utils.mergeObject(((As = R(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Fs = R(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) ?? {}, {
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
let Nt = Q;
function Ri(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var $s, xs, zs, Ms;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var a, f, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    let f = { scrollState: {}, focus: null };
    if (t) {
      f.scrollState = this._saveScrollState(t);
      const i = document.activeElement, c = a.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && l && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), y = this.element, p = this.form ?? this.element, r = f.scrollState, o = f.focus, m = typeof (r == null ? void 0 : r.formScrollTop) == "number" || typeof (r == null ? void 0 : r.windowScrollTop) == "number", n = () => {
      var i, c;
      if (this._applyScrollState(y, r), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const l = ((i = p.querySelector) == null ? void 0 : i.call(p, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (c = p.querySelector) == null ? void 0 : c.call(p, `[name="${CSS.escape(o.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = o.selectionStart ?? 0, l.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(y, r);
    };
    return (m || o) && (requestAnimationFrame(n), setTimeout(n, 0), setTimeout(n, 50), setTimeout(n, 150), setTimeout(n, 300), setTimeout(n, 450)), d;
  }
  async _prepareContext(s) {
    var He, Ye, Ge, ct, ee, ye, ie, lt, Me, Ne, ut, We, Xe, At, Ft, ft, Et, yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((He = this.actor) == null ? void 0 : He.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, a = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, f = Number(a.givenProtection ?? 0) || 0, d = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, y = (lt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && lt.call(ie, "halfcover") ? 3 : 0, p = (Ne = (Me = t == null ? void 0 : t.statuses) == null ? void 0 : Me.has) != null && Ne.call(Me, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + d + y + p;
    const r = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], o = ((We = t == null ? void 0 : t.system) == null ? void 0 : We.weapons) ?? {}, m = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], n = (o.slotOrder ?? "").trim(), i = n ? n.split(/\s*,\s*/).filter((T) => m.includes(T)) : [], c = r.filter((T) => T.type === "Fegyver"), l = c.map((T) => ({ id: T.id, name: T.name, img: T.img })), u = "— Nincs fegyver —", h = i.length > 0 ? i : m, g = m.filter((T) => !h.includes(T)), k = [...h, ...g], b = k.filter((T) => {
      var z;
      const x = (((z = o[T]) == null ? void 0 : z.itemId) ?? "").trim();
      return x && c.some((G) => G.id === x);
    });
    e.weaponSlots = b.map((T) => {
      const x = o[T] ?? {}, z = (x.itemId ?? "").trim(), G = l.find((Se) => Se.id === z), Ie = c.find((Se) => Se.id === z), ne = (Ie == null ? void 0 : Ie.system) ?? {}, Le = ne.size === "thrown", Ce = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: T,
        itemId: z,
        displayName: (G == null ? void 0 : G.name) || x.name || u,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Le,
        rangeStr: Ce
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
      const Ie = !!z, ne = (T == null ? void 0 : T.system) ?? {}, Le = typeof ne.range == "string" ? (ne.range || "").trim() : "", Ce = ne.type ?? "", Se = (w[Ce] ?? Ce) || "—", Re = ne.size ?? "", tt = (I[Re] ?? Re) || "", st = [Se, tt].filter(Boolean).join(", ") || Se || "—", Pt = Ce === "projectile" || Re === "thrown", $t = ne.quantity != null ? String(ne.quantity).trim() : "1", xt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", zt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: z ?? "",
        itemId: x,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? u,
        img: (T == null ? void 0 : T.img) ?? "",
        bonus: xt,
        damage: zt,
        rangeStr: Le || "—",
        typeAndSize: st,
        quantity: $t,
        isProjectile: Pt,
        equipped: Ie,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const _ = r.filter((T) => T.type === "Pancel");
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
        level: Ri((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: z
      };
    });
    const O = ((At = (Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.gear) == null ? void 0 : At.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], j = r.filter((T) => T.type === "MikroChip");
    e.microchipsTable = j.map((T) => {
      var Ce, Se, Re, tt;
      const x = T.id;
      let z = null;
      for (const st of C)
        if ((((Ce = O[st]) == null ? void 0 : Ce.itemId) ?? "").trim() === x) {
          z = st;
          break;
        }
      const G = ((Se = T == null ? void 0 : T.system) == null ? void 0 : Se.abilityType) ?? "", Ie = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((Re = T == null ? void 0 : T.system) == null ? void 0 : Re.description) ?? "").trim(), Le = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        typeLabel: Ie,
        description: Le,
        kp: Number((tt = T == null ? void 0 : T.system) == null ? void 0 : tt.replaceCost) >= 0 ? Number(T.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: z ?? "",
        equipped: !!z
      };
    });
    const K = r.filter((T) => T.type === "Targy");
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
    const U = r.filter((T) => T.type === "Egyeb");
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
    const V = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = r.filter((T) => T.type === "Kepesseg" || T.type === "ability").map((T) => {
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
    }, M = (T) => (T || []).map((x) => {
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
    e.abilityPassiveList = M(oe("passive")), e.abilityActiveList = M(oe("active"));
    const te = t == null ? void 0 : t.id, de = !!((vt = (bt = game.combat) == null ? void 0 : bt.combatants) != null && vt.some(
      (T) => {
        var x;
        return (((x = T.actor) == null ? void 0 : x.id) ?? T.actorId) === te;
      }
    ));
    e.showHarcSection = de;
    const Oe = ((kt = e.system) == null ? void 0 : kt.resources) ?? {}, D = (It = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : It.initiativeResult, P = typeof D == "number" ? D : -1, W = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], se = (Qe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Qe.initiativeRanges, le = Array.isArray(se) ? se.map((T) => ({ min: Number(T.min) ?? 0, max: Number(T.max) ?? 0, kp: Math.min(10, Math.max(0, Number(T.kp) ?? 0)) })) : [], ae = (le.length > 0 ? le : W).slice().sort((T, x) => T.min - x.min), we = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < we && (ce = [...ce, ...Array(we - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((T, x) => ({
      ...T,
      isFirst: x === 0,
      isLast: x === ce.length - 1
    }));
    let fe = 0;
    if (typeof P == "number" && P >= 0 && ae.length > 0) {
      const T = ae[0], x = ae[ae.length - 1];
      let z = null;
      P <= T.max ? z = T : P >= x.min ? z = x : z = ae.find((G) => P >= G.min && P <= G.max), z && (fe = z.kp);
    }
    const Ke = ae.length > 0 ? ae[ae.length - 1] : null, Ue = Math.min(10, Ke ? Ke.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, Ue)).map((T, x) => {
      const z = x + 1, G = !!Number(Oe[T]), Ie = z <= fe;
      return { index: z, used: G, usable: Ie };
    }), ot = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, ot), e.kpDotsRow2 = Be.slice(ot), e.canEditInitiative = !!((Tt = game.user) != null && Tt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((et = (Dt = e.system) == null ? void 0 : Dt.combat) == null ? void 0 : et.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var r, o, m;
    super._attachFrameListeners(s);
    const e = ((r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (n) => {
      var l, u, h;
      if (n.preventDefault(), n.stopPropagation(), !this.actor) return;
      const i = ((h = (u = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (n) => {
      var l, u, h;
      n.preventDefault();
      const i = (u = (l = n.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : u.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (h = c == null ? void 0 : c.sheet) == null || h.render(!0);
    });
    const a = (n) => {
      var l, u;
      const i = (l = n == null ? void 0 : n.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (u = c == null ? void 0 : c.sheet) == null || u.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (n) => {
      n.preventDefault(), a(n.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (n) => {
      n.preventDefault(), a(n.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (n) => {
      var u, h, g, k;
      n.preventDefault();
      const i = (h = (u = n.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (k = l == null ? void 0 : l.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (n) => {
      var u;
      n.preventDefault(), n.stopPropagation();
      const i = n.currentTarget, c = (((u = i == null ? void 0 : i.dataset) == null ? void 0 : u.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-6quanM8S.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (n) => {
      var l, u, h, g, k;
      n.preventDefault(), n.stopPropagation();
      const i = n.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((u = i == null ? void 0 : i.dataset) != null && u.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (n) => {
      if (n.preventDefault(), n.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-6quanM8S.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (n) => {
      var u, h;
      n.preventDefault(), n.stopPropagation();
      const i = n.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((h = (u = this.actor.system) == null ? void 0 : u.resources) == null ? void 0 : h[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (n) => {
      var h, g;
      n.preventDefault();
      const i = n.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: u } = await import("./roll-sheet-6quanM8S.mjs");
      u(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (n) => {
      var c, l;
      n.preventDefault();
      const i = (l = (c = n.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (n) => {
      var l, u, h, g;
      n.preventDefault();
      const i = (((u = (l = n.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : u.itemId) ?? ((g = (h = n.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (n) => {
      var g, k, b, w, I, _;
      if (n.preventDefault(), !n.altKey) return;
      const i = (k = (g = n.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.area, c = (w = (b = n.currentTarget) == null ? void 0 : b.dataset) == null ? void 0 : w.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((I = this.actor.system) == null ? void 0 : I.abilities) ?? {}, h = (Array.isArray((_ = l[i]) == null ? void 0 : _.items) ? l[i].items.slice() : []).filter((O) => O !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (n) => {
      var c, l;
      if (n.preventDefault(), !n.altKey) return;
      const i = (l = (c = n.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (n) => {
      var g, k;
      if (n.preventDefault(), !n.altKey) return;
      const i = n.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, u = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), h = {};
      u && (h[`system.weapons.${u}.itemId`] = "", h[`system.weapons.${u}.name`] = "", h[`system.weapons.${u}.damage`] = "", h[`system.weapons.${u}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (n) => {
      var c, l;
      if (n.preventDefault(), !n.altKey) return;
      const i = (((l = (c = n.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (n) => {
      var h, g, k, b;
      if (n.preventDefault(), !n.altKey) return;
      const i = (((g = (h = n.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((b = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : b.microchips) ?? {}, u = ["slot1", "slot2", "slot3"].find((w) => {
        var I;
        return (((I = c[w]) == null ? void 0 : I.itemId) ?? "").trim() === i;
      });
      u && await this.actor.update({
        [`system.gear.microchips.${u}.itemId`]: "",
        [`system.gear.microchips.${u}.name`]: "",
        [`system.gear.microchips.${u}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (n) => {
      var l, u;
      if (n.preventDefault(), !n.altKey) return;
      const i = (((u = (l = n.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (m = (o = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : o.call(e, f)) == null || m.forEach((n) => {
      var i;
      (((i = n.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (n.draggable = !0);
    }), t.on("dragstart", f, (n) => {
      var h, g, k;
      const i = n.currentTarget, c = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const u = l.uuid;
      n.dataTransfer && (n.dataTransfer.setData("text/plain", u), n.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: u })), n.dataTransfer.effectAllowed = "copyMove"), typeof ((k = n.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && n.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, y = (n) => {
      if (!n) return;
      const i = d._getFormDataForUpdate(n);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, p = (n) => {
      var i, c, l;
      return n && (((c = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, n)) || d.id && ((l = n.closest) == null ? void 0 : l.call(n, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (n) => {
      var h;
      const i = n.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!p(l)) return;
      const u = n.relatedTarget;
      u && (l.contains(u) || d.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(d.id)}`))) || y(l);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0), d._votvNpcItemHookRegistered || (d._votvNpcItemUpdateHook = (n, i, c) => {
      var l;
      d.actor && ((l = n == null ? void 0 : n.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, d._votvNpcItemDeleteHook = (n, i, c) => {
      var l;
      d.actor && ((l = n == null ? void 0 : n.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, Hooks.on("updateItem", d._votvNpcItemUpdateHook), Hooks.on("deleteItem", d._votvNpcItemDeleteHook), d._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, a, f;
    const e = this.form ?? ((a = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const d = this._getFormDataForUpdate(e);
      Object.keys(d).length > 0 && await this.actor.update(d).catch((y) => console.warn("VoidNpcSheet save on preClose failed", y));
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
    var w, I, _, O, C;
    const e = this.actor;
    if (!e) return;
    const a = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((I = e.system) == null ? void 0 : I.skills) ?? {}, d = ((_ = e.items) == null ? void 0 : _.filter((j) => j.type === "Fegyver")) ?? [];
    let y = null;
    a.itemId && (y = d.find((j) => j.id === a.itemId) ?? null);
    const p = y && y.name || a.name || "Fegyver", r = Number(a.bonus || 0) || 0, o = ((O = y == null ? void 0 : y.system) == null ? void 0 : O.type) || "kinetic", m = (((C = y == null ? void 0 : y.system) == null ? void 0 : C.skillKey) ?? "").trim(), n = m && f[m] !== void 0 ? m : o === "explosive" ? "grenadeUse" : "firearms", i = Number(f[n] || 0) || 0, c = r + i, u = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(u);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: k } = Vt(h), b = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: k } },
      rollMode: b
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, r, o, m, n, i, c, l, u, h;
    const t = this.actor;
    if (!t) return;
    const a = ((r = (p = t.items).get) == null ? void 0 : r.call(p, s)) ?? ((m = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : m.call(o, (g) => g.id === s));
    if (!a || a.type !== "Fegyver") return;
    let f = (((n = a.system) == null ? void 0 : n.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((u = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : u.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(f);
    await d.evaluate({ async: !0 });
    const y = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${a.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: y
    });
  }
  async _onDropItem(s, e) {
    var o, m, n, i, c, l, u, h, g, k, b, w, I, _, O, C, j, K, U;
    if (!this.actor) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const a = ((E) => {
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
    if (!a) return (m = super._onDropItem) == null ? void 0 : m.call(this, s, e);
    const f = await fromUuid(a);
    if (!f || f.documentName !== "Item") return (n = super._onDropItem) == null ? void 0 : n.call(this, s, e);
    if (f.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const d = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const E = (((l = f.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (E === "module") {
        (h = (u = ui.notifications) == null ? void 0 : u.warn) == null || h.call(u, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let V = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== d.id) {
        const oe = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        V = ((k = (await d.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : k.id) ?? V;
      }
      const Z = ((b = d.system) == null ? void 0 : b.abilities) ?? {}, J = E === "active" ? "active" : "passive", Y = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(V) || Y.push(V), await d.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = f.parent) == null ? void 0 : I.id) === d.id) return;
    const y = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(y, { system: { ...y.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(y, { system: { ...y.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const r = (_ = (await d.createEmbeddedDocuments("Item", [y]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && r) {
      const E = ((O = d.system) == null ? void 0 : O.weapons) ?? {}, V = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (E.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((M) => V.includes(M)) : [];
      let Y = V.find((M) => {
        var te;
        return !(((te = E[M]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = V.find((M) => !J.includes(M)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((M) => V.includes(M));
      await d.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: r,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = f.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((j = f.system) == null ? void 0 : j.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && r) {
      const E = ((U = (K = d.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = E[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await d.update({
        [`system.gear.microchips.${Z}.itemId`]: r,
        [`system.gear.microchips.${Z}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var o, m, n, i, c, l;
    const e = (m = (o = this.actor) == null ? void 0 : o.items) == null ? void 0 : m.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((n = e.system) == null ? void 0 : n.kind) ?? "passive", a = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var p, r, o, m, n, i;
    const e = (r = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : r.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((o = e.system) == null ? void 0 : o.description) ?? "").trim();
    let a, f = "";
    if (e.type === "MikroChip") {
      const c = ((m = e.system) == null ? void 0 : m.abilityType) ?? "passive";
      if (a = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((n = e.system) == null ? void 0 : n.replaceCost) ?? 0) || 0;
        l > 0 && (f = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${f}
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
    for (const a of s.elements) {
      if (!a.name || a.disabled || a.type === "radio" && !a.checked) continue;
      let f;
      if (a.type === "checkbox")
        f = a.checked;
      else if (a.type === "number") {
        if (a.value === "") continue;
        f = Number(a.value);
      } else if (a.name === "system.resources.kp" || a.name === "system.resources.kp2" || a.name === "system.resources.kp3") {
        const d = (a.value ?? "").trim();
        if (d === "") continue;
        f = Number(d) || 0;
      } else
        f = a.value ?? "";
      f !== void 0 && foundry.utils.setProperty(e, a.name, f);
    }
    if (Object.prototype.hasOwnProperty.call(e, "name")) {
      const a = e.name;
      (a === void 0 || typeof a == "string" && a.trim() === "") && (e.name = ((t = this.actor) == null ? void 0 : t.name) ?? "Unnamed");
    }
    return e;
  }
};
X(he, "PARTS", foundry.utils.mergeObject(
  R(he, he, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(he, he, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject((($s = R(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((xs = R(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : xs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ms = (zs = R(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : zs.window) == null ? void 0 : Ms.contentClasses) ?? [],
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
var Rs, js, Ks, Us;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var a, f, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    const f = this.element, d = this.form ?? this.element;
    let y = { scrollState: {}, focus: null };
    if (f) {
      y.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = d.contains(u), g = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && g && (y.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const r = this.element, o = this.form ?? this.element, m = y.scrollState, n = y.focus, i = typeof (m == null ? void 0 : m.formScrollTop) == "number" || typeof (m == null ? void 0 : m.windowScrollTop) == "number", c = () => {
      var u, h;
      if (this._applyScrollState(r, m), (n == null ? void 0 : n.name) != null || (n == null ? void 0 : n.id) != null) {
        const g = ((u = o.querySelector) == null ? void 0 : u.call(o, n.id ? `#${CSS.escape(n.id)}` : null)) ?? (n.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(n.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = n.selectionStart ?? 0, g.selectionEnd = n.selectionEnd ?? n.selectionStart ?? 0));
      }
      this._applyScrollState(r, m);
    };
    return (i || n) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), p;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (r) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, r)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${r}`) : null);
    }, a = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.givenProtection"]');
    if (!a) return;
    const y = Number(f == null ? void 0 : f.value) || 0, p = Number(d == null ? void 0 : d.value) || 0;
    a.textContent = String(y + p);
  }
  async _prepareContext(s) {
    var j, K, U, E, V, Z, J, Y, oe, M, te, de, Oe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((j = e.system) == null ? void 0 : j.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const a = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, d = "— Nincs fegyver —", y = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = y.map((D) => {
      const P = (D == null ? void 0 : D.system) ?? {}, W = P.type ?? "", se = (a[W] ?? W) || "—", le = P.size ?? "", pe = (f[le] ?? le) || "", ae = [se, pe].filter(Boolean).join(", ") || se || "—", we = W === "projectile" || le === "thrown", ce = P.quantity != null ? String(P.quantity).trim() : "1", fe = (typeof P.range == "string" ? (P.range || "").trim() : "") || "—";
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
        typeAndSize: ae,
        quantity: ce,
        quantityDisplay: we ? ce : "—",
        isProjectile: we,
        equipped: !1,
        special: (P.special ?? "").trim() || "—"
      };
    });
    const p = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = p.map((D) => {
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
    const r = (((E = this.actor.items) == null ? void 0 : E.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = r.map((D) => {
      var we, ce, fe;
      const P = ((we = D == null ? void 0 : D.system) == null ? void 0 : we.abilityType) ?? "", W = P === "active" ? "Aktív" : P === "passive" ? "Passzív" : P || "—", se = P === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), ae = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: W,
        description: ae,
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
    const m = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", n = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === m).sort((D, P) => {
      const W = typeof D.sort == "number" ? D.sort : 0, se = typeof P.sort == "number" ? P.sort : 0;
      return W - se;
    }), i = [];
    let c = 0, l = 0, u = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of n) {
      const P = (D == null ? void 0 : D.system) ?? {}, W = Number(P.level ?? 0) || 0, se = (P.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (u += le);
      const pe = P.abilities ?? {}, ae = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
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
      if (m === "Helyiseg") {
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
      let ze;
      if (Ke <= 0)
        ze = void 0;
      else if (Ue <= 0)
        ze = 0;
      else {
        const ee = Ue / Ke;
        ee > 2 / 3 ? ze = 3 : ee > 1 / 3 ? ze = 2 : ze = 1;
      }
      const Be = (P.hit ?? "").toString().trim(), ot = (P.speed ?? "").toString().trim().replace(",", "."), He = Number(ot);
      Number.isFinite(He) && (c += He);
      const Ye = (P.range ?? "").toString().trim().replace(",", "."), Ge = Number(Ye);
      Number.isFinite(Ge) && (l += Ge);
      const ct = (P.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: W,
        hpMax: Ke,
        hpValue: Ue,
        hpStatus: ze,
        hit: Be,
        damage: ct,
        abilities: ce,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = u, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = n.length;
    let k = "Kicsi", b = 0, w = 0;
    g >= 11 ? (k = "Nagy", b = -4, w = -6) : g >= 6 ? (k = "Közepes", b = -2, w = -3) : (k = "Kicsi", b = 0, w = 0), e.sizeForSelect = k, e.unitCount = g, e.sizeSpeedPenalty = b, e.sizeDefensePenalty = w;
    const I = c + b, _ = l;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: I },
        vehicle: { toolsRange: _, storage: h },
        identity: { size: k }
      },
      { inplace: !1 }
    );
    const O = (((oe = e.weaponsTable) == null ? void 0 : oe.length) ?? 0) > 0 || (((M = e.armorTable) == null ? void 0 : M.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((de = e.itemsTable) == null ? void 0 : de.length) ?? 0) > 0;
    e.showEquipmentDropZone = !O;
    const C = (((Oe = this.actor.items) == null ? void 0 : Oe.contents) ?? []).filter((D) => D.type === "Egyeb");
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
    t.on("click", ".jarmu-portrait-img", (p) => {
      var m, n, i;
      p.preventDefault(), p.stopPropagation();
      const r = ((i = (n = (m = foundry.applications) == null ? void 0 : m.apps) == null ? void 0 : n.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (p) => {
      var m, n, i;
      p.preventDefault();
      const r = (n = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : n.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (p) => {
      var m, n;
      if (p.preventDefault(), !p.altKey) return;
      const r = (n = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : n.itemId;
      !r || !this.actor.items.get(r) || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".jarmu-item-quantity-input", async (p) => {
      var n;
      const r = p.currentTarget, o = (n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      !m || m.type !== "Targy" && m.type !== "Fegyver" || await m.update({ "system.quantity": (r.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (p) => {
      var m, n;
      const r = (n = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : n.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "Pancel" || await o.update({ "system.equipped": p.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (p) => {
      var o, m, n, i;
      p.preventDefault();
      const r = (m = (o = p.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : m.itemId;
      r && ((i = (n = this.actor.items.get(r)) == null ? void 0 : n.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (p) => {
      var o, m;
      if (p.preventDefault(), !p.altKey) return;
      const r = (m = (o = p.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : m.itemId;
      r && await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-item-chat", async (p) => {
      var m, n, i, c;
      p.preventDefault();
      const r = (((n = (m = p.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : n.itemId) ?? ((c = (i = p.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      !o || o.type !== "MikroChip" && o.type !== "Egyeb" || await this._postItemToChat(r);
    }), t.on("click", ".jarmu-unit-damage-button", async (p) => {
      var m;
      p.preventDefault(), p.stopPropagation();
      const r = p.currentTarget, o = (((m = r == null ? void 0 : r.dataset) == null ? void 0 : m.itemId) ?? "").trim();
      o && await this._rollUnitDamage(o);
    });
    const a = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (p) => {
      var n, i;
      const r = p.currentTarget, o = (n = r == null ? void 0 : r.dataset) == null ? void 0 : n.itemId;
      if (!o) return;
      a._draggingUnitId = o;
      const m = (i = p.originalEvent) == null ? void 0 : i.dataTransfer;
      m && (m.setData("text/plain", o), m.effectAllowed = "move", typeof m.setDragImage == "function" && m.setDragImage(r, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (p) => {
      var n, i, c, l;
      const r = (i = (n = p.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : i.itemId, o = a._draggingUnitId;
      if (!o || !r || o === r) return;
      p.preventDefault();
      const m = (c = p.originalEvent) == null ? void 0 : c.dataTransfer;
      m && (m.dropEffect = "move"), (l = p.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (p) => {
      var r;
      (r = p.currentTarget) == null || r.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (p) => {
      var g, k, b, w;
      p.preventDefault(), (g = p.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const r = (b = (k = p.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : b.itemId;
      let o = a._draggingUnitId;
      const m = (w = p.originalEvent) == null ? void 0 : w.dataTransfer;
      if (!o && m && (o = m.getData("text/plain")), a._draggingUnitId = null, !o || !r || o === r) return;
      const n = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((I) => I.type === n).sort((I, _) => {
        const O = typeof I.sort == "number" ? I.sort : 0, C = typeof _.sort == "number" ? _.sort : 0;
        return O - C;
      }).map((I) => I.id), l = c.indexOf(o), u = c.indexOf(r);
      if (l === -1 || u === -1) return;
      c.splice(l, 1), c.splice(u, 0, o);
      const h = c.map((I, _) => ({
        _id: I,
        sort: (_ + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (p) => {
      var n, i, c, l, u, h, g, k, b, w;
      p.preventDefault();
      const r = (l = (c = (i = (n = p.currentTarget) == null ? void 0 : n.closest) == null ? void 0 : i.call(n, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : l.abilityRef, o = (k = (g = (h = (u = p.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : k.abilityId;
      let m = null;
      if (r)
        try {
          m = await fromUuid(r);
        } catch {
          m = null;
        }
      !m && o && (m = ((b = game.items) == null ? void 0 : b.get(o)) ?? null), (w = m == null ? void 0 : m.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (p) => {
      var i, c, l, u;
      p.preventDefault();
      const r = (c = (i = p.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), o = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.abilityRef, m = (u = r == null ? void 0 : r.dataset) == null ? void 0 : u.abilityId, n = o || m;
      n && await this._postUnitAbilityToChat(n);
    });
    const f = (p) => {
      if (!p) return;
      const r = this._getFormDataForUpdate(p);
      Object.keys(r).length !== 0 && this.actor.update(r).catch((o) => console.warn("VoidJarmuSheet save failed", o));
    }, d = (p) => {
      var r, o, m;
      return p && (((o = (r = this.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, p)) || this.id && ((m = p.closest) == null ? void 0 : m.call(p, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (p) => {
      var i;
      const r = p.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const m = r.form;
      if (!d(m)) return;
      const n = p.relatedTarget;
      n && (m.contains(n) || this.id && ((i = n.closest) != null && i.call(n, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(m));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (p) => {
      var l, u, h;
      const r = p.currentTarget, o = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      if (!m || m.type !== "Jarmuegyseg") return;
      const n = (r.value ?? "").trim(), i = n === "" ? 0 : Number(n), c = (u = r.closest) == null ? void 0 : u.call(r, ".jarmu-unit-row");
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
      await m.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (p) => {
      var i;
      const r = p.currentTarget, o = (i = r == null ? void 0 : r.dataset) == null ? void 0 : i.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      if (!m || m.type !== "Jarmuegyseg" && m.type !== "Helyiseg") return;
      const n = (r.value ?? "").trim();
      await m.update({ "system.hit": n });
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
    var p, r, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let a, f = "";
    if (e.type === "MikroChip") {
      const m = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (a = (m === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", m === "active") {
        const n = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${f}
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
    var y, p, r, o, m, n, i, c, l;
    const e = this.actor;
    if (!e) return;
    const t = ((p = (y = e.items).get) == null ? void 0 : p.call(y, s)) ?? ((o = (r = e.items.contents) == null ? void 0 : r.find) == null ? void 0 : o.call(r, (u) => u.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const a = (((m = t.system) == null ? void 0 : m.damage) ?? "").trim();
    if (!a) {
      (l = (n = ui.notifications) == null ? void 0 : n.warn) == null || l.call(
        n,
        ((c = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : c.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
      );
      return;
    }
    const f = new Roll(a);
    await f.evaluate({ async: !0 });
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
    });
  }
  async _postUnitAbilityToChat(s) {
    var o, m, n, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((m = e.system) == null ? void 0 : m.kind) ?? "passive", a = Number(((n = e.system) == null ? void 0 : n.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var p, r;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((p = e == null ? void 0 : e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const o of Object.values(e))
        if (typeof o == "string" && o.includes(".") && o.startsWith("Item.")) {
          t = o;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const a = await fromUuid(t);
    if (!a || a.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(a.type)) return super._onDropItem(s, e);
    if (((r = a.parent) == null ? void 0 : r.id) === f.id) return;
    const y = foundry.utils.mergeObject(a.toObject(), {
      system: { ...a.toObject().system ?? {}, equipped: a.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [y]);
  }
};
X(be, "PARTS", foundry.utils.mergeObject(
  R(be, be, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(be, be, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Rs = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((js = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : js.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Us = (Ks = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.window) == null ? void 0 : Us.contentClasses) ?? [],
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
function Ls(S) {
  var e;
  return (((e = S == null ? void 0 : S.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, a) => {
    var f;
    return t + Ki((f = a.system) == null ? void 0 : f.veszely);
  }, 0);
}
var Bs;
const rt = class rt extends Kt {
  _attachFrameListeners(s) {
    var y;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element;
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
    }, f = { Kicsi: -10, Közepes: 0, Nagy: 10 }, d = () => {
      var O, C, j, K, U, E, V;
      const r = ((O = e.querySelector) == null ? void 0 : O.call(e, "form")) ?? e, o = (C = r.querySelector) == null ? void 0 : C.call(r, 'select[name="system.identity.assignment"]'), m = (j = r.querySelector) == null ? void 0 : j.call(r, 'select[name="system.identity.subAssignment"]'), n = (K = r.querySelector) == null ? void 0 : K.call(r, "input.bazis-threat-total"), i = (U = r.querySelector) == null ? void 0 : U.call(r, 'input[name="system.combat.threatBonus"]');
      if (!o || !n || !i) return;
      const c = o.value ?? "", l = (m == null ? void 0 : m.value) ?? "", u = t[c] ?? 0, h = a[l] ?? 0, g = (((V = (E = this.actor) == null ? void 0 : E.items) == null ? void 0 : V.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, k = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", b = f[k] ?? 0, w = Number(i.value ?? 0) || 0, I = Ls(this.actor), _ = u + h + b + w + I;
      n.value = _;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', d);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const a = e.system ?? this.actor.system ?? {}, f = a.identity ?? {}, d = a.combat ?? {}, y = f.assignment ?? "", p = f.subAssignment ?? "", r = {
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
      }, m = { Kicsi: -10, Közepes: 0, Nagy: 10 }, n = r[y] ?? 0, i = o[p] ?? 0, c = e.sizeForSelect ?? "Kicsi", l = m[c] ?? 0, u = Number(d.threatBonus ?? 0) || 0, h = Ls(this.actor), g = n + i + l + u + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(a),
        { combat: { ...d, threat: g, threatBonus: u } },
        { inplace: !1 }
      ), e.bazisThreatBase = n;
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
let Zt = rt;
var Hs, Gs, Ws, Vs;
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  _getScrollContainers(s) {
    var a, f, d, y;
    if (!s) return { form: null, windowContent: null };
    const e = ((a = s.querySelector) == null ? void 0 : a.call(s, "form.votv.vallalkozas-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((y = s.querySelector) == null ? void 0 : y.call(s, ".window-content")) ?? null;
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
    var r, o, m;
    const t = this.element, a = this.form ?? this.element;
    let f = { scrollState: {}, focus: null };
    if (t) {
      f.scrollState = this._saveScrollState(t);
      const n = document.activeElement, i = (r = a == null ? void 0 : a.contains) == null ? void 0 : r.call(a, n), c = n && (n.tagName === "INPUT" && n.type !== "checkbox" && n.type !== "radio" || n.tagName === "TEXTAREA");
      i && c && (f.focus = {
        name: n.name || null,
        id: n.id || null,
        selectionStart: "selectionStart" in n ? n.selectionStart : 0,
        selectionEnd: "selectionEnd" in n ? n.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), y = this.element, p = this.form ?? this.element;
    if (y && this._applyScrollState(y, f.scrollState), f.focus && p) {
      let n = null;
      if (f.focus.name && (n = ((o = p.querySelector) == null ? void 0 : o.call(p, `[name="${CSS.escape(f.focus.name)}"]`)) ?? null), !n && f.focus.id && (n = ((m = p.querySelector) == null ? void 0 : m.call(p, `#${CSS.escape(f.focus.id)}`)) ?? null), n && typeof n.focus == "function" && (n.focus(), "setSelectionRange" in n))
        try {
          n.setSelectionRange(f.focus.selectionStart ?? 0, f.focus.selectionEnd ?? 0);
        } catch {
        }
    }
    return d;
  }
  async _prepareContext(s) {
    var l, u, h, g, k;
    const e = await super._prepareContext(s) ?? {}, t = this.actor;
    e.actor = t;
    const a = foundry.utils.deepClone(t.system ?? {});
    e.system = a;
    const f = {
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
    }, y = "— Nincs fegyver —", p = ((l = t.items) == null ? void 0 : l.contents) ?? [], r = p.filter((b) => b.type === "Fegyver");
    e.weaponsTable = r.map((b) => {
      const w = b.system ?? {}, I = w.type ?? "", _ = (f[I] ?? I) || "—", O = w.size ?? "", C = (d[O] ?? O) || "", j = [_, C].filter(Boolean).join(", ") || _ || "—", K = I === "projectile" || O === "thrown", U = w.quantity != null ? String(w.quantity).trim() : "1", E = (typeof w.range == "string" ? (w.range || "").trim() : "") || "—";
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
    const o = p.filter((b) => b.type === "Pancel");
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
    const m = p.filter((b) => b.type === "MikroChip");
    e.microchipsTable = m.map((b) => {
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
    const n = p.filter((b) => b.type === "Targy");
    e.itemsTable = n.map((b) => {
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
    const i = (((u = e.weaponsTable) == null ? void 0 : u.length) ?? 0) > 0 || (((h = e.armorTable) == null ? void 0 : h.length) ?? 0) > 0 || (((g = e.microchipsTable) == null ? void 0 : g.length) ?? 0) > 0 || (((k = e.itemsTable) == null ? void 0 : k.length) ?? 0) > 0;
    e.showEquipmentDropZone = !i;
    const c = p.filter((b) => b.type === "Egyeb");
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
    var p;
    super._attachFrameListeners(s);
    const e = this, t = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, a = t ? $(t) : $([]);
    if (!this.isEditable) return;
    a.on("click", ".vallalkozas-employee-add", async (r) => {
      var n;
      if (r.preventDefault(), !this.actor) return;
      const o = this.actor.system ?? {}, m = Array.isArray((n = o.vallalkozas) == null ? void 0 : n.employees) ? o.vallalkozas.employees.slice() : [];
      m.push({ type: "", level: 0, count: 0, bonus: "" }), await this.actor.update({ "system.vallalkozas.employees": m });
    }), a.on("click", ".vallalkozas-employee-delete", async (r) => {
      var c, l, u;
      if (r.preventDefault(), !r.altKey || !this.actor) return;
      const o = ((l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.index) ?? "", m = Number(o), n = this.actor.system ?? {}, i = Array.isArray((u = n.vallalkozas) == null ? void 0 : u.employees) ? n.vallalkozas.employees.slice() : [];
      !Number.isInteger(m) || m < 0 || m >= i.length || (i.splice(m, 1), await this.actor.update({ "system.vallalkozas.employees": i }));
    }), a.on("click", ".vallalkozas-production-add", async (r) => {
      var n;
      if (r.preventDefault(), !this.actor) return;
      const o = this.actor.system ?? {}, m = Array.isArray((n = o.vallalkozas) == null ? void 0 : n.productionLines) ? o.vallalkozas.productionLines.slice() : [];
      m.push({ product: "", count: 0, time: "" }), await this.actor.update({ "system.vallalkozas.productionLines": m });
    }), a.on("click", ".vallalkozas-production-delete", async (r) => {
      var c, l, u;
      if (r.preventDefault(), !r.altKey || !this.actor) return;
      const o = ((l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.index) ?? "", m = Number(o), n = this.actor.system ?? {}, i = Array.isArray((u = n.vallalkozas) == null ? void 0 : u.productionLines) ? n.vallalkozas.productionLines.slice() : [];
      !Number.isInteger(m) || m < 0 || m >= i.length || (i.splice(m, 1), await this.actor.update({ "system.vallalkozas.productionLines": i }));
    }), a.on("click", ".vallalkozas-mission-add", async (r) => {
      if (r.preventDefault(), !this.actor) return;
      const m = (this.actor.system ?? {}).vallalkozas ?? {}, n = Array.isArray(m.militiaMissions) ? m.militiaMissions.slice() : [], i = Number(m.level ?? 1) || 1, c = Number(m.militiaPower ?? 0) || 0, l = Math.floor(Math.random() * 100) + 1, u = l * i, h = u - c;
      n.push({
        location: "",
        baseRoll: l,
        difficulty: u,
        risk: h,
        loot: ""
      }), await this.actor.update({ "system.vallalkozas.militiaMissions": n });
    }), a.on("click", ".vallalkozas-mission-delete", async (r) => {
      var l, u;
      if (r.preventDefault(), !r.altKey || !this.actor) return;
      const o = ((u = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : u.index) ?? "", m = Number(o), i = (this.actor.system ?? {}).vallalkozas ?? {}, c = Array.isArray(i.militiaMissions) ? i.militiaMissions.slice() : [];
      !Number.isInteger(m) || m < 0 || m >= c.length || (c.splice(m, 1), await this.actor.update({ "system.vallalkozas.militiaMissions": c }));
    });
    const f = async () => {
      if (!this.actor) return;
      const o = (this.actor.system ?? {}).vallalkozas ?? {}, m = Array.isArray(o.militiaMissions) ? o.militiaMissions.slice() : [];
      if (!m.length) return;
      const n = Number(o.level ?? 1) || 1, i = Number(o.militiaPower ?? 0) || 0, c = m.map((l) => {
        const u = Number(l.baseRoll ?? 0) || 0, h = u > 0 ? u * n : Number(l.difficulty ?? 0) || 0, g = h - i;
        return { ...l, baseRoll: u, difficulty: h, risk: g };
      });
      await this.actor.update({ "system.vallalkozas.militiaMissions": c });
    };
    a.on("change", 'input[name="system.vallalkozas.level"]', async () => {
      await f();
    }), a.on("change", 'input[name="system.vallalkozas.militiaPower"]', async () => {
      await f();
    }), a.on("change", '.vallalkozas-mission-cell-difficulty input[name$=".difficulty"]', async (r) => {
      if (!this.actor) return;
      const o = r.currentTarget, n = (o.name || "").match(/militiaMissions\.(\d+)\.difficulty$/);
      if (!n) return;
      const i = Number(n[1]), l = (this.actor.system ?? {}).vallalkozas ?? {}, u = Array.isArray(l.militiaMissions) ? l.militiaMissions.slice() : [];
      if (!Number.isInteger(i) || i < 0 || i >= u.length) return;
      const h = Number(o.value ?? 0) || 0, g = Number(l.militiaPower ?? 0) || 0;
      u[i] = {
        ...u[i],
        difficulty: h,
        risk: h - g
      }, await this.actor.update({ "system.vallalkozas.militiaMissions": u });
    }), a.on("click", ".karakter-item-chat", async (r) => {
      var n, i, c, l;
      r.preventDefault();
      const o = (((i = (n = r.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : i.itemId) ?? ((l = (c = r.currentTarget) == null ? void 0 : c.getAttribute) == null ? void 0 : l.call(c, "data-item-id")) ?? "").trim();
      if (!o || !this.actor) return;
      const m = this.actor.items.get(o);
      m && (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(o);
    }), a.on("click", ".vallalkozas-egyeb-delete", async (r) => {
      var m, n;
      if (r.preventDefault(), !r.altKey || !this.actor) return;
      const o = (((n = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      o && await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), a.on("click", ".vallalkozas-raktar-table .karakter-inventory-item-name, .vallalkozas-raktar-table .karakter-equipment-icon", (r) => {
      var n, i, c;
      r.preventDefault();
      const o = (i = (n = r.currentTarget) == null ? void 0 : n.dataset) == null ? void 0 : i.itemId;
      if (!o || !this.actor) return;
      const m = this.actor.items.get(o);
      (c = m == null ? void 0 : m.sheet) == null || c.render(!0);
    }), a.on("change", ".vallalkozas-item-quantity-input", async (r) => {
      var c;
      const o = r.currentTarget, m = (((c = o == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      if (!m || !this.actor) return;
      const n = this.actor.items.get(m);
      if (!n || n.type !== "Targy") return;
      const i = (o.value ?? "").trim();
      await n.update({ "system.quantity": i });
    }), a.on("click", ".vallalkozas-item-delete", async (r) => {
      var m, n;
      if (r.preventDefault(), !r.altKey || !this.actor) return;
      const o = (((n = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : n.itemId) ?? "").trim();
      o && await this.actor.deleteEmbeddedDocuments("Item", [o]);
    });
    const d = (r) => {
      if (!r || !this.actor) return;
      const o = e._getFormDataForUpdate(r);
      Object.keys(o).length !== 0 && e.actor.update(o).catch((m) => console.warn("VoidVallalkozasSheet save failed", m));
    }, y = (r) => {
      var o, m, n;
      return r && (((m = (o = e.element) == null ? void 0 : o.contains) == null ? void 0 : m.call(o, r)) || e.id && ((n = r.closest) == null ? void 0 : n.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var m, n, i;
      const o = ((m = r.target) == null ? void 0 : m.form) ?? ((i = (n = r.target) == null ? void 0 : n.closest) == null ? void 0 : i.call(n, "form"));
      y(o) && d(o);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  async _onDropItem(s, e) {
    var r, o, m;
    if (!this.actor) return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((o = e == null ? void 0 : e.data) == null ? void 0 : o.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && e && typeof e == "object") {
      for (const n of Object.values(e))
        if (typeof n == "string" && n.includes(".") && n.startsWith("Item.")) {
          t = n;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const a = await fromUuid(t);
    if (!a || a.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(a.type)) return super._onDropItem(s, e);
    if (((m = a.parent) == null ? void 0 : m.id) === f.id) return;
    const y = a.toObject(), p = foundry.utils.mergeObject(y, {
      system: { ...y.system ?? {}, equipped: a.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [p]);
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
    var p, r, o;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let a, f = "";
    if (e.type === "MikroChip") {
      const m = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (a = (m === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", m === "active") {
        const n = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
      }
    } else
      a = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", y = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${a}</p>
      ${f}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: y,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
};
X(ve, "PARTS", foundry.utils.mergeObject(
  R(ve, ve, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs" }
  },
  { inplace: !1 }
)), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(ve, ve, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Vallalkozas"],
    template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs",
    width: 800,
    minWidth: 700,
    height: 600,
    form: foundry.utils.mergeObject(((Hs = R(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Gs = R(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Vs = (Ws = R(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.window) == null ? void 0 : Vs.contentClasses) ?? [],
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
var Js;
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
      var r, o, m, n, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((n = (m = d.target) == null ? void 0 : m.getAttribute) == null ? void 0 : n.call(m, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new y({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (d) => {
      if (!d) return;
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((p) => console.warn("VoidWeaponSheet save failed", p));
    }, f = (d) => {
      var y, p, r;
      return d && (((p = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : p.call(y, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var p, r, o;
      const y = ((p = d.target) == null ? void 0 : p.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      f(y) && a(y);
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
X(Ae, "PARTS", foundry.utils.mergeObject(R(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Js = R(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Js.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Ae;
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
      var r, o, m, n, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((n = (m = d.target) == null ? void 0 : m.getAttribute) == null ? void 0 : n.call(m, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new y({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (d) => {
      if (!d) return;
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((p) => console.warn("VoidShieldSheet save failed", p));
    }, f = (d) => {
      var y, p, r;
      return d && (((p = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : p.call(y, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var p, r, o;
      const y = ((p = d.target) == null ? void 0 : p.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      f(y) && a(y);
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
let Qt = Fe;
var Ys;
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
      var r, o, m, n, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((n = (m = d.target) == null ? void 0 : m.getAttribute) == null ? void 0 : n.call(m, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new y({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (d) => {
      if (!d) return;
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((p) => console.warn("VoidMicrochipSheet save failed", p));
    }, f = (d) => {
      var y, p, r;
      return d && (((p = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : p.call(y, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var p, r, o;
      const y = ((p = d.target) == null ? void 0 : p.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      f(y) && a(y);
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
X(Ee, "PARTS", foundry.utils.mergeObject(R(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ys = R(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 })
}));
let es = Ee;
var Xs;
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
      var r, o, m, n, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((n = (m = d.target) == null ? void 0 : m.getAttribute) == null ? void 0 : n.call(m, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new y({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (d) => {
      if (!d) return;
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((p) => console.warn("VoidAbilitySheet save failed", p));
    }, f = (d) => {
      var y, p, r;
      return d && (((p = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : p.call(y, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var p, r, o;
      const y = ((p = d.target) == null ? void 0 : p.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      f(y) && a(y);
    }, e._votvInput = (d) => {
      var r;
      const y = d.target;
      if ((y == null ? void 0 : y.name) === "name") return;
      const p = (y == null ? void 0 : y.form) ?? ((r = y == null ? void 0 : y.closest) == null ? void 0 : r.call(y, "form"));
      f(p) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => a(p), 300));
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
X(Pe, "PARTS", foundry.utils.mergeObject(R(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xs = R(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !0 })
}));
let ts = Pe;
var Qs;
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
      var r, o, m, n, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((n = (m = d.target) == null ? void 0 : m.getAttribute) == null ? void 0 : n.call(m, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new y({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (d) => {
      if (!d) return;
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((p) => console.warn("VoidTargySheet save failed", p));
    }, f = (d) => {
      var y, p, r;
      return d && (((p = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : p.call(y, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var p, r, o;
      const y = ((p = d.target) == null ? void 0 : p.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      f(y) && a(y);
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
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X($e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R($e, $e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Qs = R($e, $e, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !1 })
}));
let ss = $e;
var ei;
const xe = class xe extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var r, o, m, n, i, c, l;
      if (!e.isEditable || !((o = (r = d.target) == null ? void 0 : r.closest) != null && o.call(r, ".profile")) && ((n = (m = d.target) == null ? void 0 : m.getAttribute) == null ? void 0 : n.call(m, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const y = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new y({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const a = (d) => {
      if (!d) return;
      const y = e._getFormDataForUpdate(d);
      Object.keys(y).length !== 0 && e.document.update(y).catch((p) => console.warn("VoidEgyebSheet save failed", p));
    }, f = (d) => {
      var y, p, r;
      return d && (((p = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : p.call(y, d)) || e.id && ((r = d.closest) == null ? void 0 : r.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var p, r, o;
      const y = ((p = d.target) == null ? void 0 : p.form) ?? ((o = (r = d.target) == null ? void 0 : r.closest) == null ? void 0 : o.call(r, "form"));
      f(y) && a(y);
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
X(xe, "PARTS", foundry.utils.mergeObject(R(xe, xe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(xe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(xe, xe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ei = R(xe, xe, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !1 })
}));
let is = xe;
var ti, si;
const De = class De extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var p, r, o, m;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, a = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (r = this.document) == null ? void 0 : r.name,
      "id=",
      (o = this.document) == null ? void 0 : o.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (n) => {
      var i, c, l;
      try {
        const u = typeof n.composedPath == "function" ? n.composedPath() : [];
        if (!(this.element && u.includes(this.element) || this.id && ((c = (i = n.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", n);
        let g = null;
        try {
          g = TextEditor.getDragEventData(n);
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
          const I = w.uuid ?? w.id, _ = this.document.system ?? {}, O = Array.isArray((l = _.abilities) == null ? void 0 : l.items) ? _.abilities.items.slice() : [];
          O.push(I), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (u) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", u);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), a.on("click", ".karakter-ability-open", async (n) => {
      var u, h, g, k, b, w;
      n.preventDefault();
      const i = (h = (u = n.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, c = (k = (g = n.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && c && (l = ((b = game.items) == null ? void 0 : b.get(c)) ?? null), (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), a.on("click", ".karakter-ability-chat", async (n) => {
      var u, h, g, k;
      n.preventDefault();
      const i = (h = (u = n.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, c = (k = (g = n.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemId, l = i || c;
      l && await this._postAbilityToChat(l);
    }), a.on("click", ".karakter-ability-pill-remove", async (n) => {
      var g, k, b;
      if (n.preventDefault(), !n.altKey) return;
      const i = (k = (g = n.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, l = Array.isArray((b = c.abilities) == null ? void 0 : b.items) ? c.abilities.items.slice() : [], u = l.indexOf(i), h = u >= 0 ? [...l.slice(0, u), ...l.slice(u + 1)] : l;
      await this.document.update({ "system.abilities.items": h });
    });
    const f = (m = t == null ? void 0 : t.querySelector) == null ? void 0 : m.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (n) => {
      n.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const d = (n) => {
      if (!n) return;
      const i = e._getFormDataForUpdate(n);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, y = (n) => {
      var i, c, l;
      return n && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, n)) || e.id && ((l = n.closest) == null ? void 0 : l.call(n, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (n) => {
      var c, l, u;
      const i = ((c = n.target) == null ? void 0 : c.form) ?? ((u = (l = n.target) == null ? void 0 : l.closest) == null ? void 0 : u.call(l, "form"));
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), a = t.abilities ?? {}, f = Array.isArray(a.items) ? a.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext refs=", f);
    const y = (await Promise.all(
      f.map(async (p) => {
        var r;
        if (!p) return null;
        try {
          const o = await fromUuid(p);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (r = game.items) == null ? void 0 : r.get(p);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((p, r) => ({ doc: p, ref: f[r] })).filter((p) => !!p.doc && !!p.ref).map(({ doc: p, ref: r }) => {
      var i, c;
      const o = (((i = p.system) == null ? void 0 : i.kind) ?? "passive").toString(), m = Number(((c = p.system) == null ? void 0 : c.kp) ?? 0) || 0, n = o === "species";
      return {
        id: p.id,
        ref: r,
        name: p.name,
        img: p.img,
        kind: o,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: n ? 0 : m
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", y), e.system = t, e.abilityList = y, e;
  }
  async _postAbilityToChat(s) {
    var o, m, n, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((m = e.system) == null ? void 0 : m.kind) ?? "passive", a = Number(((n = e.system) == null ? void 0 : n.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${p}
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
    var t, a, f;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const d = e.uuid ?? e.id, y = this.document.system ?? {}, p = Array.isArray((a = y.abilities) == null ? void 0 : a.items) ? y.abilities.items.slice() : [];
      return p.push(d), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", p), await this.document.update({ "system.abilities.items": p }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
X(De, "PARTS", foundry.utils.mergeObject(R(De, De, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(De, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(De, De, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ti = R(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((si = R(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : si.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ns = De;
var ii, ni;
const _e = class _e extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var p, r;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, a = t ? $(t) : $([]);
    a.on("click", ".karakter-ability-open", async (o) => {
      var c, l, u, h, g, k;
      o.preventDefault();
      const m = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, n = (h = (u = o.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (m)
        try {
          i = await fromUuid(m);
        } catch {
          i = null;
        }
      !i && n && (i = ((g = game.items) == null ? void 0 : g.get(n)) ?? null), (k = i == null ? void 0 : i.sheet) == null || k.render(!0);
    }), a.on("click", ".karakter-ability-chat", async (o) => {
      var c, l, u, h;
      o.preventDefault();
      const m = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, n = (h = (u = o.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemId, i = m || n;
      i && await this._postAbilityToChat(i);
    }), a.on("click", ".karakter-ability-pill-remove", async (o) => {
      var u, h, g;
      if (o.preventDefault(), !o.altKey) return;
      const m = (h = (u = o.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef;
      if (!m) return;
      const n = this.document.system ?? {}, i = Array.isArray((g = n.abilities) == null ? void 0 : g.items) ? n.abilities.items.slice() : [], c = i.indexOf(m), l = c >= 0 ? [...i.slice(0, c), ...i.slice(c + 1)] : i;
      await this.document.update({ "system.abilities.items": l });
    });
    const f = (r = t == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (o) => {
      o.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (o) => {
      var m, n, i;
      try {
        const c = typeof o.composedPath == "function" ? o.composedPath() : [];
        if (!(this.element && c.includes(this.element) || this.id && ((n = (m = o.target) == null ? void 0 : m.closest) == null ? void 0 : n.call(m, `#${CSS.escape(this.id)}`)))) return;
        let u = null;
        try {
          u = TextEditor.getDragEventData(o);
        } catch {
        }
        if (!u || u.type !== "Item") return;
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
        })(u);
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
      const m = e._getFormDataForUpdate(o);
      Object.keys(m).length !== 0 && e.document.update(m).catch((n) => console.warn("VoidHelyisegSheet save failed", n));
    }, y = (o) => {
      var m, n, i;
      return o && (((n = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : n.call(m, o)) || e.id && ((i = o.closest) == null ? void 0 : i.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var n, i, c;
      const m = ((n = o.target) == null ? void 0 : n.form) ?? ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
      y(m) && d(m);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), a = t.abilities ?? {}, f = Array.isArray(a.items) ? a.items : [], y = (await Promise.all(
      f.map(async (p) => {
        var r;
        if (!p) return null;
        try {
          const o = await fromUuid(p);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (r = game.items) == null ? void 0 : r.get(p);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((p, r) => ({ doc: p, ref: f[r] })).filter((p) => !!p.doc && !!p.ref).map(({ doc: p, ref: r }) => {
      var i, c;
      const o = (((i = p.system) == null ? void 0 : i.kind) ?? "passive").toString(), m = Number(((c = p.system) == null ? void 0 : c.kp) ?? 0) || 0, n = o === "species";
      return {
        id: p.id,
        ref: r,
        name: p.name,
        img: p.img,
        kind: o,
        kpDisplay: n ? 0 : m
      };
    });
    return e.system = t, e.abilityList = y, e;
  }
  async _postAbilityToChat(s) {
    var o, m, n, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((m = e.system) == null ? void 0 : m.kind) ?? "passive", a = Number(((n = e.system) == null ? void 0 : n.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", y = a > 0 ? `<p><strong>KP:</strong> ${a}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${y}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, a, f;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const d = e.uuid ?? e.id, y = this.document.system ?? {}, p = Array.isArray((a = y.abilities) == null ? void 0 : a.items) ? y.abilities.items.slice() : [];
      return p.push(d), await this.document.update({ "system.abilities.items": p }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
X(_e, "PARTS", foundry.utils.mergeObject(R(_e, _e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
})), X(_e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(_e, _e, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ii = R(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : ii.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ni = R(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : ni.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let as = _e;
const ai = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ri(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, a, f, d, y, p;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = hi, CONFIG.Actor.dataModels.Npc = Lt, CONFIG.Actor.dataModels.Jarmu = ki, CONFIG.Actor.dataModels.Bazis = Si, CONFIG.Actor.dataModels.Vallalkozas = zi, (a = CONFIG.Item).dataModels ?? (a.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ds, CONFIG.Item.dataModels.weapon = Ds, CONFIG.Item.dataModels.Pancel = _i, CONFIG.Item.dataModels.MikroChip = Oi, CONFIG.Item.dataModels.Kepesseg = Cs, CONFIG.Item.dataModels.ability = Cs, CONFIG.Item.dataModels.Targy = qi, CONFIG.Item.dataModels.Egyeb = Li, CONFIG.Item.dataModels.Jarmuegyseg = Fi, CONFIG.Item.dataModels.Helyiseg = xi, (f = CONFIG.Actor).trackableAttributes ?? (f.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás", (y = CONFIG.Combat).initiative ?? (y.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (p = CONFIG.Item).typeLabels ?? (p.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  Hooks.on("preCreateActor", (r, o, m) => {
    ((o == null ? void 0 : o.type) === "Bazis" || (o == null ? void 0 : o.type) === "Vallalkozas") && (o.img = s);
  }), Hooks.on("preUpdateActor", (r, o, m) => {
    ((r == null ? void 0 : r.type) === "Bazis" || (r == null ? void 0 : r.type) === "Vallalkozas") && Object.prototype.hasOwnProperty.call(o ?? {}, "img") && (o.img = s);
  }), Hooks.on("ready", () => {
    var m;
    const r = s, o = (((m = game.actors) == null ? void 0 : m.contents) ?? []).filter(
      (n) => (n.type === "Bazis" || n.type === "Vallalkozas") && (n.img ?? "").toString().trim() !== r
    );
    o.length && o.forEach((n) => n.update({ img: r }).catch(() => {
    }));
  }), Hooks.on("updateActor", (r, o, m, n) => {
    if ((r == null ? void 0 : r.type) !== "Karakter" || !(r != null && r.id)) return;
    const i = r.id;
    setTimeout(() => {
      var h, g, k, b;
      const c = (h = game.actors) == null ? void 0 : h.get(i);
      if (!c || c.type !== "Karakter") return;
      const l = Nt.getTotalSpeedRaw(c), u = (g = c.effects) == null ? void 0 : g.find((w) => w.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !u) {
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
      } else l > 0 && u && u.delete().then(() => {
        var I, _;
        const w = ((I = canvas.tokens) == null ? void 0 : I.placeables) ?? [];
        for (const O of w)
          ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === i && typeof O.draw == "function" && O.draw();
      }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", w));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (r, o, m, n) => {
    var I, _, O, C, j, K, U, E, V, Z, J, Y, oe;
    const i = r == null ? void 0 : r.id;
    if (!i) return;
    if ((r.type === "Karakter" || r.type === "Npc") && ((I = o == null ? void 0 : o.system) != null && I.combat) && "initiativeResult" in o.system.combat) {
      const M = Number((O = (_ = r.system) == null ? void 0 : _.combat) == null ? void 0 : O.initiativeResult), te = Number.isFinite(M) ? M : 0, de = game.combat;
      if (de) {
        const Oe = ((C = de.combatants) == null ? void 0 : C.contents) ?? Array.from(de.combatants ?? []);
        for (const D of Oe)
          if (((j = D.actor) == null ? void 0 : j.id) === i || D.actorId === i) {
            de.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: te }]).catch(() => {
            });
            break;
          }
      }
    }
    if (r.type === "Npc" && ((K = o == null ? void 0 : o.system) != null && K.identity) && "size" in o.system.identity) {
      const M = ri((E = (U = r.system) == null ? void 0 : U.identity) == null ? void 0 : E.size);
      r.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", r.name, te));
    }
    const c = document.activeElement, l = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA" || c.isContentEditable), u = [], h = (V = game.actors) == null ? void 0 : V.get(i);
    h != null && h.apps && u.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of g) {
      if (((Z = M.document) == null ? void 0 : Z.id) !== i || ((J = M.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = M.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" && te !== "VoidVallalkozasSheet" || u.includes(M) || u.push(M);
    }
    if (l && u.some((M) => {
      const te = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return te && te.contains(c);
    })) return;
    const b = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, w = b && Date.now() - b.at < e ? b.appId : null;
    setTimeout(() => {
      for (const M of u)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== w && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (r, o, m, n) => {
    var u, h, g;
    const i = r == null ? void 0 : r.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || r.type !== "Fegyver") return;
    const c = ((u = i.system) == null ? void 0 : u.weapons) ?? {}, l = {};
    for (const [k, b] of Object.entries(c)) {
      if (!k.startsWith("slot")) continue;
      const w = ((b == null ? void 0 : b.itemId) ?? "").trim();
      !w || w !== r.id || (l[`system.weapons.${k}.name`] = r.name ?? "", l[`system.weapons.${k}.damage`] = ((h = r.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${k}.bonus`] = ((g = r.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, k, b, w, I, _, O, C, j, K, U, E, V, Z, J, Y, oe, M, te, de, Oe, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const a = (t.dataset.messageId ?? "").trim();
    if (!a) return;
    const f = (k = game.messages) == null ? void 0 : k.get(a), d = (w = (b = f == null ? void 0 : f.flags) == null ? void 0 : b["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!d) return;
    const y = d.actorId ?? ((I = f == null ? void 0 : f.speaker) == null ? void 0 : I.actor) ?? "";
    if (!y) return;
    e.preventDefault(), e.stopPropagation();
    let p = ((_ = game.actors) == null ? void 0 : _.get(d.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(y));
    if (p || (p = ((j = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : j.flatMap((W) => {
      var se;
      return ((se = W.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((W) => W.actor).find((W) => W && (W.id === y || W.id === d.actorId))) ?? null), !p) return;
    const r = d.itemId ? ((U = (K = p.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, d.itemId)) ?? ((Z = (V = (E = p.items) == null ? void 0 : E.contents) == null ? void 0 : V.find) == null ? void 0 : Z.call(V, (P) => P.id === d.itemId)) : null;
    let o = (d.damageFormula ?? "").trim();
    if (o || (o = (((J = r == null ? void 0 : r.system) == null ? void 0 : J.damage) ?? "").trim()), !o && d.slotKey && (o = (((((Y = p.system) == null ? void 0 : Y.weapons) ?? {})[d.slotKey] ?? {}).damage ?? "").trim()), !o) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (M = game.i18n) == null ? void 0 : M.localize) == null ? void 0 : te.call(M, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const m = new Roll(o);
    await m.evaluate({ async: !0 });
    const n = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = d.targetName || "", c = d.hitLocationName || "", l = ((r == null ? void 0 : r.name) ?? (d.slotKey ? ((D = (((Oe = p.system) == null ? void 0 : Oe.weapons) ?? {})[d.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let u = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (u += ` (${c})`), await m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: p }),
      flavor: u,
      flags: { "vacuum-of-the-void": {} },
      rollMode: n
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var d, y, p, r, o, m;
      if (!((y = (d = e.target) == null ? void 0 : d.closest) != null && y.call(d, "#actors"))) return;
      const t = (r = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : r.call(p, "[data-document-id]"), a = (o = t == null ? void 0 : t.getAttribute) == null ? void 0 : o.call(t, "data-document-id");
      if (!a) return;
      const f = a.includes(".") ? a.split(".").pop() : a;
      f && ((m = game.actors) != null && m.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, a, f, d;
    const e = ((t = game.actors) == null ? void 0 : t.filter((y) => y.type === "Karakter")) ?? [];
    for (const y of e) {
      const p = Nt.getTotalSpeedRaw(y), r = (a = y.effects) == null ? void 0 : a.find((o) => o.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (p <= 0 && !r) {
        const o = ((d = (f = CONFIG.statusEffects) == null ? void 0 : f.find((m) => m.id === "immobilized")) == null ? void 0 : d.img) ?? "";
        await y.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: o,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: y.uuid
        }]).catch(() => {
        });
      } else p > 0 && r && await r.delete().catch(() => {
      });
    }
  })(), (S = game.user) != null && S.isGM && ((s = game.scenes) == null ? void 0 : s.size) === 0 && (async () => {
    var e, t;
    try {
      const a = ((e = CONFIG.Scene) == null ? void 0 : e.documentClass) ?? ((t = game.scenes) == null ? void 0 : t.documentClass);
      if (!(a != null && a.create)) {
        console.warn("Vacuum of the Void | Default scene: Scene document class has no create method");
        return;
      }
      const f = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: ai },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, d = await a.create(f);
      d && console.log("Vacuum of the Void | Default scene created:", d.id);
    } catch (a) {
      console.warn("Vacuum of the Void | Default scene creation failed:", a);
    }
  })(), (async () => {
    var d, y, p, r, o, m;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((d = game.actors) == null ? void 0 : d.filter((n) => n.type === "Karakter")) ?? [];
    for (const n of t)
      try {
        const i = n.prototypeToken, c = ((y = i == null ? void 0 : i.bar1) == null ? void 0 : y.attribute) ?? "", l = ((p = i == null ? void 0 : i.bar2) == null ? void 0 : p.attribute) ?? "";
        (c || l) && await n.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", n.name, i);
      }
    for (const n of game.scenes ?? []) {
      const i = ((r = n.tokens) == null ? void 0 : r.filter((c) => {
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
    }, f = ((o = game.actors) == null ? void 0 : o.filter((n) => n.type === "Npc")) ?? [];
    for (const n of f)
      try {
        await n.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", n.name, i);
      }
    for (const n of game.scenes ?? []) {
      const i = ((m = n.tokens) == null ? void 0 : m.filter((c) => {
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
Hooks.on("preCreateToken", (S, s, e) => {
  var d, y, p, r, o, m, n, i, c;
  const t = (d = game.votv) == null ? void 0 : d._dragSourceActorId, a = t ?? S.actorId ?? ((y = S._source) == null ? void 0 : y.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = a ? (p = game.actors) == null ? void 0 : p.get(a) : S.actor ?? null;
  if (f) {
    if (f.type === "Bazis")
      return (m = ui == null ? void 0 : ui.notifications) == null || m.warn(((o = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : o.call(r, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
    if (f.type === "Vallalkozas")
      return (n = ui == null ? void 0 : ui.notifications) == null || n.warn("Vállalkozás nem helyezhető tokenként a térképre."), !1;
    if (f.type === "Karakter") {
      S.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (f.type === "Jarmu") {
      S.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (f.type === "Npc") {
      const l = ri((c = (i = f.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
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
  var f, d, y;
  const t = S.actorId ? (f = game.actors) == null ? void 0 : f.get(S.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((y = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : y.call(d, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const a = S.initiative;
  (a == null || typeof a == "number" && isNaN(a)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
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
function oi(S) {
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const a = t.actor;
    !a || a.type !== "Karakter" && a.type !== "Npc" || a.update(Bi).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", a.name, f);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || oi(S);
});
function ci() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const a of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = a.apps ?? [], d = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const y of d)
      !y || S.has(y.id) || (S.add(y.id), typeof y.render == "function" && y.render(!0));
  }
  for (const a of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = a == null ? void 0 : a.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = a == null ? void 0 : a.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || S.has(a.id) || (S.add(a.id), typeof a.render == "function" && a.render(!0));
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
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((f) => {
    f.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (S, s, e) => {
  var f;
  const t = S == null ? void 0 : S.object, a = ((f = t == null ? void 0 : t.document) == null ? void 0 : f.actor) ?? (t == null ? void 0 : t.actor);
  if ((a == null ? void 0 : a.type) === "Karakter") {
    const d = s[0] ?? s;
    d != null && d.classList && d.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (S, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || S.updateSource({
    width: 3840,
    height: 2160,
    "background.src": ai,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var m, n, i, c;
  const t = ((m = S.flags) == null ? void 0 : m["vacuum-of-the-void"]) ?? {}, a = t.resultType, f = t.critLabel, d = t.weaponAttack, y = t.weapon, p = t.vsDefense, r = t.vsDefenseInfo;
  if (!a && !f && !d && !p) return;
  const o = (n = s == null ? void 0 : s.querySelector) == null ? void 0 : n.call(s, ".dice-roll");
  if (o) {
    if (a && o.classList.add(`votv-${a}`), f) {
      const l = o.querySelector(".votv-crit-label");
      if (l)
        l.textContent = f;
      else {
        const u = o.querySelector(".dice-total"), h = (u == null ? void 0 : u.parentElement) ?? o, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${a || "neutral"}`, g.textContent = f, h.appendChild(g);
      }
    }
    if (d && y && (y.actorId || (i = S.speaker) != null && i.actor)) {
      const l = o.querySelector(".dice-total"), u = (l == null ? void 0 : l.parentElement) ?? o;
      if (!o.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const k = !!y.isHit, b = y.targetName || "Célpont";
        g.textContent = k ? `Találat – ${b}` : `Nem talált – ${b}`, u.appendChild(g);
      }
      if (y.isHit && !o.querySelector(".votv-weapon-damage-chat")) {
        const k = document.createElement("button");
        k.type = "button", k.className = "votv-weapon-damage-chat";
        const b = y.hitLocationRoll, w = y.hitLocationName;
        k.textContent = b != null && w ? `Sebzés (Találati Hely ${b} - ${w})` : "Sebzés", k.dataset.actorId = String(y.actorId ?? ((c = S.speaker) == null ? void 0 : c.actor) ?? ""), k.dataset.itemId = String(y.itemId ?? ""), k.dataset.slotKey = String(y.slotKey ?? ""), k.dataset.targetName = String(y.targetName ?? ""), k.dataset.hitLocationName = String(y.hitLocationName ?? ""), k.dataset.messageId = String(S.id ?? ""), u.appendChild(k);
      }
    }
    if (!d && p && r) {
      const l = o.querySelector(".dice-total"), u = (l == null ? void 0 : l.parentElement) ?? o, h = !!r.isHit, g = r.targetName || "Célpont", k = r.hitLocationRoll, b = r.hitLocationName;
      let w = o.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", u.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const I = o.querySelector(".votv-defense-hitloc");
      if (h && k != null && b) {
        let _ = I;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", u.appendChild(_)), _.textContent = `Találati Hely ${k} - ${b}`;
      } else I && I.remove();
    }
  }
});
export {
  Nt as V,
  Vt as c
};
//# sourceMappingURL=vacuum-of-the-void-CXkLcw2N.mjs.map
