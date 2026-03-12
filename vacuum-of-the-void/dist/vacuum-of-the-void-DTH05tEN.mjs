var li = Object.defineProperty;
var di = Object.getPrototypeOf;
var mi = Reflect.get;
var pi = (I, s, e) => s in I ? li(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var X = (I, s, e) => pi(I, typeof s != "symbol" ? s + "" : s, e);
var M = (I, s, e) => mi(di(I), e, s);
const { HTMLField: fi, NumberField: F, SchemaField: H, StringField: q, BooleanField: me, ArrayField: qt } = foundry.data.fields;
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
        biography: new fi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Ut, SchemaField: yi } = foundry.data.fields;
class gi extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new yi({
        body: new Ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Ut({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: hi, StringField: ws, NumberField: bi } = foundry.data.fields;
class vi extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new hi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new ws({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new ws({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new bi({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: ki, StringField: Is, NumberField: wi } = foundry.data.fields;
class Ii extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new ki({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new Is({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new Is({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
        storage: new wi({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: Si, NumberField: Gi, StringField: We } = foundry.data.fields;
class Ss extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Si({ required: !1, initial: !1 }),
      type: new We({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new We({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new We({ required: !1, blank: !0, initial: "" }),
      damage: new We({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new We({ required: !1, blank: !0, initial: "" }),
      special: new We({ required: !1, blank: !0, initial: "" }),
      quantity: new We({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new We({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: Ti, StringField: Mt } = foundry.data.fields;
class Di extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new Ti({ required: !1, initial: !1 }),
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
const { NumberField: Bt, StringField: Ts } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new Ts({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new Ts({
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
const { NumberField: _i, StringField: Ds } = foundry.data.fields;
class Os extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Ds({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new Ds({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new _i({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: _s } = foundry.data.fields;
class Ci extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new _s({ required: !1, blank: !0, initial: "" }),
      quantity: new _s({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: qi } = foundry.data.fields;
class Li extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new qi({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ht, StringField: pt, SchemaField: Cs, ArrayField: Ni } = foundry.data.fields;
class Fi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ht({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new Cs({
        max: new Ht({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new Ht({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Cs({
        items: new Ni(
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
const { NumberField: Ai, StringField: zt, SchemaField: Ei, ArrayField: Pi } = foundry.data.fields;
class $i extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ai({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ei({
        items: new Pi(
          new zt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Raktár (szabad szöveg, opcionális; a Bázis raktárkapacitás összegéhez). */
      storage: new zt({ required: !1, blank: !0, initial: "" }),
      /** Veszély (opcionális, pl. +15%). */
      veszely: new zt({ required: !1, blank: !0, initial: "" }),
      /** Cépont szám (szabad szöveg, opcionális; a Bázis táblázatban). */
      hit: new zt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { SchemaField: qs, StringField: at, NumberField: Je, ArrayField: xi } = foundry.data.fields;
class Ri extends Nt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vallalkozas: new qs({
        /** Vállalkozás fajtája (Szolgáltatások, Gyártás, Milícia). */
        kind: new at({ required: !1, blank: !0, initial: "" }),
        /** Vállalkozás szintje (legalább 1). */
        level: new Je({ required: !1, integer: !0, min: 1, initial: 1 }),
        /** Alkalmazottak aktuális száma. */
        employeesCurrent: new Je({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Alkalmazottak maximuma. */
        employeesMax: new Je({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Szint által adott bónuszok (szabad szöveg). */
        levelBonuses: new at({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás típusa (Szolgáltatások fajtánál). */
        servicesType: new at({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás bevétel / idő: numerikus rész (cr). */
        servicesIncomeAmount: new Je({ required: !1, integer: !1, initial: 0 }),
        /** Szolgáltatás bevétel / idő: időegység szövege (pl. nap, hét, hónap). */
        servicesIncomePeriod: new at({ required: !1, blank: !0, initial: "" }),
        /** Marketing típusa (Szolgáltatások fajtánál). */
        marketingType: new at({ required: !1, blank: !0, initial: "" }),
        /** Marketing ára / hét (cr). */
        marketingCostPerWeek: new Je({ required: !1, integer: !1, initial: 0 }),
        /** Marketing profit (%). */
        marketingProfitPercent: new Je({ required: !1, integer: !1, initial: 0 }),
        /** Alkalmazottak táblázat: Típus, Szint, Szám, Bónusz. */
        employees: new xi(
          new qs({
            type: new at({ required: !1, blank: !0, initial: "" }),
            level: new Je({ required: !1, integer: !0, min: 0, initial: 0 }),
            count: new Je({ required: !1, integer: !0, min: 0, initial: 0 }),
            bonus: new at({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      })
    };
  }
}
function Gt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (r, i = 1) => {
    if (!Array.isArray(r)) return;
    let c = i;
    for (const l of r) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        f(l.terms, c);
        continue;
      }
      if (typeof l.operator == "string") {
        c = l.operator === "-" ? -1 : 1;
        continue;
      }
      const d = typeof l.faces == "number" ? l.faces : void 0, h = Array.isArray(l.results) ? l.results : null;
      if (!d || !h || d === 8 || d !== 6) continue;
      const g = !n && c >= 0 && (l.number === 3 || l.number === "3") ? (n = !0, s) : c >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && g.push(k);
      }
    }
  };
  f(I.terms, 1);
  const u = s.filter((r) => r === 6).length, p = s.filter((r) => r === 1).length, m = e.filter((r) => r === 6).length, a = t.filter((r) => r === 6).length, o = u + m, y = p + a;
  return o > 0 && o === y ? { resultType: null, label: null } : o >= 3 ? { resultType: "critical", label: "Brutális Siker" } : o === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Mi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ns, Fs, As, Es;
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
    var n, f, u, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((u = s.querySelector) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const f = this.element, u = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const d = document.activeElement, h = u.contains(d), g = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      h && g && (p.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const m = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const a = this.element, o = this.form ?? this.element, y = p.scrollState, r = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var d, h;
      if (this._applyScrollState(a, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((d = o.querySelector) == null ? void 0 : d.call(o, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(a, y);
    };
    return (i || r) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const f = Math.floor(n / 3), u = Math.floor(2 * n / 3);
    return t <= f ? 1 : t <= u ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (u) => {
        var p;
        return u.type === "Pancel" && ((p = u.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const u of s) {
      const p = String(((f = u.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), m = Number(p);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (u) => {
        var p;
        return u.type === "Pancel" && ((p = u.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const u of s) {
      const p = String(((f = u.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), m = Number(p);
      Number.isFinite(m) && (e += m);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (u) => {
        var p;
        return u.type === "Pancel" && ((p = u.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let t = 0;
    for (const u of e) {
      const p = String(((f = u.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), m = Number(p);
      Number.isFinite(m) && (t += m);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var o, y, r, i, c, l, d, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (o = e.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : y.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, f = Q._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const u = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let p;
    f === 1 ? p = -6 : f === 2 ? p = -3 : p = u, p += Q._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((d = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : d.speed) ?? 0) || 0, a = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return m + a + (Number.isFinite(p) ? p : 0);
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
    var y, r, i, c, l, d, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((d = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : d.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, u = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, p = Q._healthStatusFromRatio(u, f), m = Number(((T = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : T.givenSpeed) ?? 0) || 0;
    let a;
    p === 0 ? a = 0 : p === 1 ? a = -6 : p === 2 ? a = -3 : a = m;
    const o = this._getTotalArmorSpeedPenalty();
    a += o, t.textContent = String(a);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var a, o, y, r, i, c, l, d, h, g, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (y = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : y.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, f = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, u = (g = (h = (d = this.actor) == null ? void 0 : d.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, p = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + f + u + p;
    t.textContent = String(m);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), u = t('input[name="system.combat.defense"]'), p = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(u == null ? void 0 : u.value) || 0, a = Number(p == null ? void 0 : p.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(m + a + o);
  }
  _writeTotalSpeed(s = null) {
    var l, d, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element, t = (O) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, O)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${O}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), u = t('input[name="system.combat.speed"]'), p = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (d = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : d.has) != null && h.call(d, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, a = ((w = (k = m.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, o = ((T = m.currentHealth) == null ? void 0 : T.legs) ?? 0;
    if (Q._healthStatusFromRatio(o, a) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(u == null ? void 0 : u.value) || 0, i = Number(p == null ? void 0 : p.value) || 0, c = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(r + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var u, p, m, a;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((u = this.actor.system) == null ? void 0 : u.resources) ?? {}, n = ((m = (p = t.hitLocations) == null ? void 0 : p[e]) == null ? void 0 : m.value) ?? 0, f = ((a = t.currentHealth) == null ? void 0 : a[e]) ?? 0;
    return Q._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var p, m, a, o;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((p = s == null ? void 0 : s.system) == null ? void 0 : p.resources) ?? {}, f = ((a = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : a.value) ?? 0, u = ((o = n.currentHealth) == null ? void 0 : o[t]) ?? 0;
    return Q._healthStatusFromRatio(u, f);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Xe, Tt, Dt, Qe, S, P, x, G, ke, ne, qe, Oe, we, Re, et, tt, Pt, $t, xt, Rt, Ot, dt, ns, as, rs, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, u = n.currentHealth ?? {}, p = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of p) {
      const N = ((bt = f[b]) == null ? void 0 : bt.value) ?? 0, L = u[b] ?? 0;
      e.computedHealthStatus[b] = Q._healthStatusFromRatio(L, N);
    }
    const m = (Number(u.head) || 0) === 0, o = ["torso", "arms", "legs"].filter((b) => (Number(u[b]) || 0) === 0).length;
    e.showDeathSkull = m || o >= 2;
    const y = e.computedHealthStatus.legs ?? 3, r = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = r;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const l = Number(((It = (wt = this.actor.system) == null ? void 0 : wt.combat) == null ? void 0 : It.givenProtection) ?? 0) || 0, d = (Tt = (Xe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Xe.has) != null && Tt.call(Xe, "lookaround") ? 1 : 0, h = (S = (Qe = (Dt = this.actor) == null ? void 0 : Dt.statuses) == null ? void 0 : Qe.has) != null && S.call(Qe, "halfcover") ? 3 : 0, g = (G = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && G.call(x, "threequarteredcover") ? 6 : 0, v = l + this._getTotalArmorProtectionBonus() + d + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let T = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    y === 0 && (T = 0), (Oe = (qe = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : qe.has) != null && Oe.call(qe, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
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
    const _ = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), K = j ? j.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], U = (et = this.actor.system.gear) == null ? void 0 : et.microchips, z = U && typeof U == "object" && !Array.isArray(U) ? U : {}, W = (((tt = z.slot1) == null ? void 0 : tt.itemId) ?? "").trim(), Z = (((Pt = z.slot2) == null ? void 0 : Pt.itemId) ?? "").trim(), J = ((($t = z.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, A = typeof N.sort == "number" ? N.sort : 0;
      return L - A;
    }).map((b) => {
      var Me, it, nt, Ge, Ve, _t;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let A = 0, B = "", ue = null;
      for (let mt = 0; mt < K.length; mt++) {
        const Ct = K[mt];
        if ((((Me = _[Ct]) == null ? void 0 : Me.itemId) ?? "") === b.id) {
          A = mt + 1, B = ((it = _[Ct]) == null ? void 0 : it.bonus) ?? "", ue = Ct;
          break;
        }
      }
      let re = null;
      L && (W === b.id ? re = "slot1" : Z === b.id ? re = "slot2" : J === b.id && (re = "slot3"));
      const st = N && ((nt = b.system) != null && nt.damage) ? b.system.damage : "", Ie = N && typeof ((Ge = b.system) == null ? void 0 : Ge.range) == "string" ? (b.system.range || "").trim() : "", _e = ue ? Number((Ve = _[ue]) == null ? void 0 : Ve.bonus) || 0 : "";
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
        damage: st,
        rangeStr: Ie,
        slotBonusNum: _e,
        quantity: Number(((_t = b.system) == null ? void 0 : _t.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const R = (((xt = this.actor.items) == null ? void 0 : xt.contents) ?? []).filter((b) => b.type === "Fegyver"), te = R.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", De = K.filter((b) => {
      const L = ((_[b] ?? {}).itemId ?? "").trim();
      return L ? !!R.find((B) => B.id === L) : !1;
    });
    e.weaponSlots = De.map((b, N) => {
      const L = _[b] ?? {}, A = (L.itemId ?? "").trim(), B = te.find((_e) => _e.id === A), ue = R.find((_e) => _e.id === A), re = (ue == null ? void 0 : ue.system) ?? {}, st = re.size === "thrown", Ie = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: A,
        slotNum: N + 1,
        displayName: (B == null ? void 0 : B.name) || L.name || de,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: st,
        rangeStr: Ie
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, E = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = R.map((b) => {
      var bs, vs, ks;
      const N = b.id;
      let L = null, A = {};
      for (const Kt of K)
        if ((((bs = _[Kt]) == null ? void 0 : bs.itemId) ?? "").trim() === N) {
          L = Kt, A = _[Kt] ?? {};
          break;
        }
      const B = !!L, ue = ((vs = b.system) == null ? void 0 : vs.equipped) !== void 0 && ((ks = b.system) == null ? void 0 : ks.equipped) !== null ? !!b.system.equipped : B, re = (b == null ? void 0 : b.system) ?? {}, st = typeof re.range == "string" ? (re.range || "").trim() : "", Ie = re.type ?? "", _e = (D[Ie] ?? Ie) || "—", Me = re.size ?? "", it = (E[Me] ?? Me) || "", nt = [_e, it].filter(Boolean).join(", ") || _e || "—", Ge = Ie === "projectile" || Me === "thrown", Ve = re.quantity, _t = Ve != null ? String(Ve).trim() : "1", mt = String(A.bonus ?? "").trim(), Ct = String(re.bonus ?? "").trim(), ci = mt || Ct || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? de,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: ci,
        damage: A.damage ?? re.damage ?? "",
        rangeStr: st || "—",
        typeLabel: _e,
        typeAndSize: nt,
        quantity: _t,
        quantityDisplay: Ge ? _t : "—",
        isProjectile: Ge,
        equipped: ue,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const V = (((Rt = this.actor.items) == null ? void 0 : Rt.contents) ?? []).filter((b) => b.type === "Pancel");
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
        level: Mi((N.level ?? "").toString().trim()),
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
    const pe = (((ns = this.actor.items) == null ? void 0 : ns.contents) ?? []).filter((b) => b.type === "MikroChip"), ae = pe.map((b) => ({ id: b.id, name: b.name, img: b.img })), ve = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (b) => {
      var L, A, B;
      const N = [];
      return b !== 1 && N.push((((L = z.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((A = z.slot2) == null ? void 0 : A.itemId) ?? "").trim()), b !== 3 && N.push((((B = z.slot3) == null ? void 0 : B.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((b) => !fe(1).includes(b.id)), e.microchipItemsSlot2 = ae.filter((b) => !fe(2).includes(b.id)), e.microchipItemsSlot3 = ae.filter((b) => !fe(3).includes(b.id)), e.microchipSlots = ce.map((b) => {
      const N = z[b] ?? {}, L = (N.itemId ?? "").trim(), A = pe.find((B) => B.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (A == null ? void 0 : A.name) || N.name || ve,
        img: (A == null ? void 0 : A.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = z[N] ?? {}, A = (L.itemId ?? "").trim(), B = ae.find((ue) => ue.id === A);
      e[`microchip${b}ItemId`] = A, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || L.name || ve, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((b) => {
      var Me, it, nt, Ge;
      const N = b.id;
      let L = null;
      for (const Ve of ce)
        if ((((Me = z[Ve]) == null ? void 0 : Me.itemId) ?? "").trim() === N) {
          L = Ve;
          break;
        }
      const A = !!L, B = ((it = b == null ? void 0 : b.system) == null ? void 0 : it.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", st = Number((nt = b == null ? void 0 : b.system) == null ? void 0 : nt.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Ie = (((Ge = b == null ? void 0 : b.system) == null ? void 0 : Ge.description) ?? "").trim(), _e = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ue,
        description: _e,
        kp: st,
        isActive: re,
        slotKey: L ?? "",
        equipped: A
      };
    });
    const ze = (((as = e.weaponsTable) == null ? void 0 : as.length) ?? 0) > 0 || (((rs = e.armorTable) == null ? void 0 : rs.length) ?? 0) > 0 || (((os = e.microchipsTable) == null ? void 0 : os.length) ?? 0) > 0 || (((cs = e.itemsTable) == null ? void 0 : cs.length) ?? 0) > 0;
    e.showEquipmentDropZone = !ze;
    const je = this.actor.system.abilities ?? {}, $e = (((ls = this.actor.items) == null ? void 0 : ls.contents) ?? []).map((b) => {
      var N, L, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = b.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), Ke = new Map($e.map((b) => [b.id, b])), ot = "— Nincs képesség —", Ue = (b) => {
      const N = je[b] ?? {}, L = (N.itemId ?? "").trim(), A = L ? Ke.get(L) : null, B = (A == null ? void 0 : A.description) ?? "", ue = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: L,
        displayName: (A == null ? void 0 : A.name) || N.name || ot,
        img: (A == null ? void 0 : A.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = Ue("faji"), e.abilityHatterSlot = Ue("hatter");
    const Ze = (b) => {
      const N = je[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Be = (b) => b.map((N) => {
      const L = Ke.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Be(Ze("passive")), e.abilityActiveList = Be(Ze("active"));
    const ct = ((us = e.system) == null ? void 0 : us.resources) ?? {}, ee = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ye = (ms = (ds = e.system) == null ? void 0 : ds.combat) == null ? void 0 : ms.initiativeResult, ie = typeof ye == "number" ? ye : -1, lt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], xe = (fs = (ps = e.system) == null ? void 0 : ps.combat) == null ? void 0 : fs.initiativeRanges, Ce = Array.isArray(xe) ? xe.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], He = (Ce.length > 0 ? Ce : lt).slice().sort((b, N) => b.min - N.min), Ye = Ce.map((b) => b.min), Ft = Ye.length ? Math.min(...Ye) : 0, At = Ye.length ? Math.max(...Ye) : 0;
    e.initiativeRanges = Ce.map((b) => ({ ...b, isFirst: b.min === Ft, isLast: b.min === At }));
    let ft = 0;
    if (typeof ie == "number" && ie >= 0 && He.length > 0) {
      const b = He[0], N = He[He.length - 1];
      let L = null;
      ie <= b.max ? L = b : ie >= N.min ? L = N : L = He.find((A) => ie >= A.min && ie <= A.max), L && (ft = L.kp);
    }
    e.kpDots = ee.map((b, N) => {
      const L = N + 1, A = !!Number(ct[b]), B = L <= ft;
      return { index: L, used: A, usable: B };
    });
    const Et = !!((gs = (ys = game.combat) == null ? void 0 : ys.combatants) != null && gs.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = Et, e.canEditInitiative = !!((hs = game.user) != null && hs.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var y, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: d } = await import("./roll-sheet-C5tH7PLh.mjs");
      d(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var d, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const v = (c.dataset.slot ?? "").trim();
        if (!v) return;
        l = (((((h = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = c.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-C5tH7PLh.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, l = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const d = `system.resources.kpDot${l}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${l}`]);
      await this.actor.update({ [d]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var d;
      const c = i ? i.currentTarget : (d = e.querySelector) == null ? void 0 : d.call(e, 'input[name="system.resources.stress.value"]');
      if (!c) return;
      const l = Number(c.value) || 0;
      c.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
    const u = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', u), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var d, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = ((g = (h = (d = foundry.applications) == null ? void 0 : d.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
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
      const c = i.currentTarget, l = c.dataset.skill, d = ((g = c.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-C5tH7PLh.mjs");
      h(this.actor, l, d);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, T, O, _, C, j;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), d = l == null ? void 0 : l.dataset.slot;
      if (!d) return;
      const g = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[d]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const v = ((O = (T = this.actor.items).get) == null ? void 0 : O.call(T, g)) ?? ((C = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : C.call(_, (K) => K.id === g));
      (j = v == null ? void 0 : v.sheet) == null || j.render(!0);
    });
    const p = (i, c) => {
      var h;
      const l = i.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (d) {
        if (i.classList.contains("karakter-weapon-label") && (c.altKey || c.shiftKey || c.ctrlKey || c.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (h = d.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), p(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), p(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const c = i.currentTarget, l = c.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d) return;
      let h = Number(c.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await d.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor, h = d.items.get(l);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = d.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((_) => w.includes(_)) : [], O = T.find((_) => {
          var C;
          return (((C = v[_]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (O) {
          const _ = T.filter((C) => C !== O);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${O}.itemId`] = "", g[`system.weapons.${O}.name`] = "", g[`system.weapons.${O}.damage`] = "", g[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(g).length && await d.update(g), await d.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var O, _;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
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
          [`system.weapons.${C}.name`]: (d == null ? void 0 : d.name) ?? "",
          [`system.weapons.${C}.damage`]: ((O = d == null ? void 0 : d.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((_ = d == null ? void 0 : d.system) == null ? void 0 : _.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (w) {
        const C = k.filter((j) => j !== w);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await d.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const c = i.currentTarget;
      if (c.disabled) return;
      const l = c.closest(".karakter-microchip-slot-select-wrap"), d = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !d && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const c = i.currentTarget, l = c.closest(".karakter-microchip-slot-select-wrap"), d = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), h = d == null ? void 0 : d.dataset.slot;
      if (!h) return;
      const g = (c.dataset.itemId ?? "").trim(), v = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (c.dataset.itemImg ?? "").trim(), w = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = v);
      let T = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      k ? (T || (T = document.createElement("img"), T.className = "karakter-microchip-slot-thumb", T.alt = "", d == null || d.insertBefore(T, w)), T.src = k, T.style.display = "") : T && T.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
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
      const d = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = d[w]) == null ? void 0 : T.itemId) ?? "").trim() === c;
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
      c.addEventListener("dragover", (d) => this._onMicrochipSlotDragOver(d, l)), c.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), c.addEventListener("drop", (d) => this._onMicrochipSlotDrop(d, l));
    }), t.find(".karakter-ability-slot-single").each((i, c) => {
      const l = c.dataset.slot;
      l && (c.addEventListener("dragover", (d) => this._onAbilitySingleDragOver(d, l)), c.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), c.addEventListener("drop", (d) => {
        var h;
        (h = d.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, c) => {
      const l = c.dataset.area;
      l && (c.addEventListener("dragover", (d) => this._onAbilityAreaDragOver(d, l)), c.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), c.addEventListener("drop", (d) => {
        var h;
        (h = d.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
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
      const d = this.actor.system.abilities ?? {}, g = (Array.isArray((v = d[c]) == null ? void 0 : v.items) ? d[c].items.slice() : []).filter((k) => k !== l);
      await this.actor.update({ [`system.abilities.${c}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      (h = d == null ? void 0 : d.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      l && await this._postAbilityToChat(l);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      d && (d.type === "Kepesseg" || d.type === "ability" ? await this._postAbilityToChat(l) : (d.type === "MikroChip" || d.type === "Egyeb") && await this._postItemToChat(l));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, c) => {
      this._resizeWeaponQuantityInput(c);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = (c.value ?? "").trim();
      await d.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      !d || d.type !== "Pancel" || (await d.update({ "system.equipped": c.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var O, _;
      const c = i.currentTarget, l = (c.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
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
          [`system.weapons.${C}.name`]: d.name ?? "",
          [`system.weapons.${C}.damage`]: ((O = d.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((_ = d.system) == null ? void 0 : _.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (w) {
        const C = k.filter((j) => j !== w);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await d.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor, h = d.items.get(l), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = d.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((_) => w.includes(_)) : [], O = T.find((_) => {
          var C;
          return (((C = v[_]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (O) {
          const _ = T.filter((C) => C !== O);
          g["system.weapons.slotOrder"] = _.join(","), g[`system.weapons.${O}.itemId`] = "", g[`system.weapons.${O}.name`] = "", g[`system.weapons.${O}.damage`] = "", g[`system.weapons.${O}.bonus`] = "";
        }
      }
      Object.keys(g).length && await d.update(g), await d.deleteEmbeddedDocuments("Item", [l]);
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
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Targy") return;
      const h = (c.value ?? "").trim();
      await d.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const m = this, a = (i) => {
      var d, h, g, v;
      if (!i) return;
      const c = m._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((h = (d = c.system) == null ? void 0 : d.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      m.actor.update(c).then(() => {
        l && setTimeout(() => m.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, o = (i) => {
      var c, l, d;
      return i && (((l = (c = m.element) == null ? void 0 : c.contains) == null ? void 0 : l.call(c, i)) || m.id && ((d = i.closest) == null ? void 0 : d.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var g;
      const c = i.target;
      if (!c || !c.form) return;
      const l = c.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const d = c.form;
      if (!o(d)) return;
      const h = i.relatedTarget;
      h && (d.contains(h) || m.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), a(d));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var p, m, a;
    const e = {};
    for (const o of s.elements) {
      if (!o.name || o.disabled || o.type === "radio" && !o.checked || o.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      o.type === "checkbox" ? y = o.checked : o.type === "number" ? y = o.value === "" ? 0 : Number(o.value) : y = o.value ?? "", foundry.utils.setProperty(e, o.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((p = this.actor.system) == null ? void 0 : p.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    for (const o of u) {
      const y = ((a = n[o]) == null ? void 0 : a.value) ?? 0, r = f[o] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${o}`, Q._healthStatusFromRatio(r, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, u, p, m, a, o, y, r, i, c, l, d;
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
            const _ = foundry.utils.mergeObject(g.toObject(), { type: "Kepesseg" });
            v = ((f = (await this.actor.createEmbeddedDocuments("Item", [_]))[0]) == null ? void 0 : f.id) ?? v;
          }
          const k = (((u = g.system) == null ? void 0 : u.kind) ?? "passive").toString();
          if (k === "module") {
            (m = (p = ui.notifications) == null ? void 0 : p.warn) == null || m.call(p, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
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
          const T = k === "active" ? "active" : "passive", O = Array.isArray((a = w[T]) == null ? void 0 : a.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          O.includes(v) || O.push(v), await this.actor.update({ [`system.abilities.${T}.items`]: O });
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
          const v = this.actor, k = ((y = g.parent) == null ? void 0 : y.id) !== v.id;
          let w = g.id;
          if (k) {
            const T = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            w = ((r = (await v.createEmbeddedDocuments("Item", [T]))[0]) == null ? void 0 : r.id) ?? w;
          }
          if (k) {
            const T = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, O = (T.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = O ? O.split(/\s*,\s*/).filter((K) => _.includes(K)) : [], j = C.filter((K) => {
              var U;
              return (((U = T[K]) == null ? void 0 : U.itemId) ?? "").trim() === w;
            });
            if (j.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((z) => !j.includes(z)).join(",")
              };
              for (const z of j)
                U[`system.weapons.${z}.itemId`] = "", U[`system.weapons.${z}.name`] = "", U[`system.weapons.${z}.damage`] = "", U[`system.weapons.${z}.bonus`] = "";
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
          ((d = g.parent) == null ? void 0 : d.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, u, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((u = s.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var p, m, a, o, y, r;
    s.preventDefault(), s.stopPropagation(), (p = s.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "Fegyver") return;
    if (((o = f.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(f.toObject(), { system: { ...f.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const u = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: u,
      [`system.weapons.${e}.name`]: f.name,
      [`system.weapons.${e}.damage`]: ((y = f.system) == null ? void 0 : y.damage) ?? "",
      [`system.weapons.${e}.bonus`]: ((r = f.system) == null ? void 0 : r.bonus) ?? ""
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
    var a, o;
    s.preventDefault(), (a = s.currentTarget) == null || a.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((o = s.dataTransfer) == null ? void 0 : o.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, r) => {
      const i = typeof y.sort == "number" ? y.sort : 0, c = typeof r.sort == "number" ? r.sort : 0;
      return i - c;
    }).map((y) => y.id), u = f.indexOf(t), p = f.indexOf(e);
    if (u === -1 || p === -1) return;
    f.splice(u, 1), f.splice(p, 0, t);
    const m = f.map((y, r) => ({
      _id: y,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", m);
  }
  _onInventoryAreaDragOver(s) {
    var n, f, u;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (u = s.currentTarget) == null || u.classList.add("karakter-actions-table-drag-over"));
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
    var m, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var o, y, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: a,
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
    var u, p, m;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((m = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : m.id) ?? f;
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
    var m, a, o, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((o = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : o.id) ?? f;
    }
    const u = this.actor.system.abilities ?? {}, p = Array.isArray((y = u[e]) == null ? void 0 : y.items) ? u[e].items.slice() : Array.isArray(u[e]) ? u[e].slice() : [];
    p.includes(f) || p.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: p });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, u, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((u = s.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var p, m, a, o, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "MikroChip") return;
    let u = f.id;
    ((o = f.parent) == null ? void 0 : o.id) !== this.actor.id && (u = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? u), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: u,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(n) || 0;
    const u = this._getSkillHealthStatus(s);
    u === 1 ? f -= 6 : u === 2 && (f -= 3);
    const m = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, a = new Roll(m);
    await a.evaluate({ async: !0 });
    const { resultType: o, label: y } = Gt(a), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: o, critLabel: y } },
      rollMode: r
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
    var u;
    const s = Number(((u = this.actor.system.skills) == null ? void 0 : u.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    var k, w;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, f = this.actor.items.filter((T) => T.type === "Fegyver");
    let u = null;
    t.itemId && (u = f.find((T) => T.id === t.itemId) ?? null);
    const p = u && u.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, a = ((k = u == null ? void 0 : u.system) == null ? void 0 : k.type) || "kinetic", o = (((w = u == null ? void 0 : u.system) == null ? void 0 : w.skillKey) ?? "").trim(), y = o && n[o] !== void 0 ? o : a === "explosive" ? "grenadeUse" : "firearms", r = Number(n[y] || 0) || 0, i = m + r, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, d = new Roll(l);
    await d.evaluate({ async: !0 });
    const { resultType: h, label: g } = Gt(d), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, a, o, y, r, i, c, l, d, h;
    const t = this.actor;
    if (!t) return;
    let n = ((a = (m = t.items).get) == null ? void 0 : a.call(m, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const u = new Roll(f);
    await u.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
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
    form: foundry.utils.mergeObject(((Ns = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Fs = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Es = (As = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : As.window) == null ? void 0 : Es.contentClasses) ?? [],
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
function zi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ps, $s, xs, Rs;
const ge = class ge extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, u, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((u = s.querySelector) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, c = n.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      c && l && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const u = await super.render(s, e), p = this.element, m = this.form ?? this.element, a = f.scrollState, o = f.focus, y = typeof (a == null ? void 0 : a.formScrollTop) == "number" || typeof (a == null ? void 0 : a.windowScrollTop) == "number", r = () => {
      var i, c;
      if (this._applyScrollState(p, a), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const l = ((i = m.querySelector) == null ? void 0 : i.call(m, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (c = m.querySelector) == null ? void 0 : c.call(m, `[name="${CSS.escape(o.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = o.selectionStart ?? 0, l.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(p, a);
    };
    return (y || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), u;
  }
  async _prepareContext(s) {
    var Ue, Ze, Be, ct, ee, ye, ie, lt, xe, Ce, ut, He, Ye, Ft, At, ft, Et, yt, gt, ht, bt, vt, kt, wt, It, St, Xe, Tt, Dt, Qe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Ue = this.actor) == null ? void 0 : Ue.system), e.showDeathSkull = !1, e.sizeForSelect = (((Be = (Ze = e.system) == null ? void 0 : Ze.identity) == null ? void 0 : Be.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, u = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, p = (lt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && lt.call(ie, "halfcover") ? 3 : 0, m = (Ce = (xe = t == null ? void 0 : t.statuses) == null ? void 0 : xe.has) != null && Ce.call(xe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + u + p + m;
    const a = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], o = ((He = t == null ? void 0 : t.system) == null ? void 0 : He.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (o.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((S) => y.includes(S)) : [], c = a.filter((S) => S.type === "Fegyver"), l = c.map((S) => ({ id: S.id, name: S.name, img: S.img })), d = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((S) => !h.includes(S)), v = [...h, ...g], k = v.filter((S) => {
      var x;
      const P = (((x = o[S]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && c.some((G) => G.id === P);
    });
    e.weaponSlots = k.map((S) => {
      const P = o[S] ?? {}, x = (P.itemId ?? "").trim(), G = l.find((we) => we.id === x), ke = c.find((we) => we.id === x), ne = (ke == null ? void 0 : ke.system) ?? {}, qe = ne.size === "thrown", Oe = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: S,
        itemId: x,
        displayName: (G == null ? void 0 : G.name) || P.name || d,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: qe,
        rangeStr: Oe
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, T = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((S) => {
      var Ot;
      const P = S.id;
      let x = null, G = {};
      for (const dt of v)
        if ((((Ot = o[dt]) == null ? void 0 : Ot.itemId) ?? "").trim() === P) {
          x = dt, G = o[dt] ?? {};
          break;
        }
      const ke = !!x, ne = (S == null ? void 0 : S.system) ?? {}, qe = typeof ne.range == "string" ? (ne.range || "").trim() : "", Oe = ne.type ?? "", we = (w[Oe] ?? Oe) || "—", Re = ne.size ?? "", et = (T[Re] ?? Re) || "", tt = [we, et].filter(Boolean).join(", ") || we || "—", Pt = Oe === "projectile" || Re === "thrown", $t = ne.quantity != null ? String(ne.quantity).trim() : "1", xt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", Rt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? d,
        img: (S == null ? void 0 : S.img) ?? "",
        bonus: xt,
        damage: Rt,
        rangeStr: qe || "—",
        typeAndSize: tt,
        quantity: $t,
        isProjectile: Pt,
        equipped: ke,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const O = a.filter((S) => S.type === "Pancel");
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
        level: zi((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const _ = ((Ft = (Ye = t == null ? void 0 : t.system) == null ? void 0 : Ye.gear) == null ? void 0 : Ft.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], j = a.filter((S) => S.type === "MikroChip");
    e.microchipsTable = j.map((S) => {
      var Oe, we, Re, et;
      const P = S.id;
      let x = null;
      for (const tt of C)
        if ((((Oe = _[tt]) == null ? void 0 : Oe.itemId) ?? "").trim() === P) {
          x = tt;
          break;
        }
      const G = ((we = S == null ? void 0 : S.system) == null ? void 0 : we.abilityType) ?? "", ke = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((Re = S == null ? void 0 : S.system) == null ? void 0 : Re.description) ?? "").trim(), qe = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        typeLabel: ke,
        description: qe,
        kp: Number((et = S == null ? void 0 : S.system) == null ? void 0 : et.replaceCost) >= 0 ? Number(S.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const K = a.filter((S) => S.type === "Targy");
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
    const U = a.filter((S) => S.type === "Egyeb");
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
    const z = (((At = e.weaponsTable) == null ? void 0 : At.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((Et = e.microchipsTable) == null ? void 0 : Et.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !z;
    const W = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = a.filter((S) => S.type === "Kepesseg" || S.type === "ability").map((S) => {
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
    }, R = (S) => (S || []).map((P) => {
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
    e.abilityPassiveList = R(oe("passive")), e.abilityActiveList = R(oe("active"));
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
    ], se = (Xe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Xe.initiativeRanges, le = Array.isArray(se) ? se.map((S) => ({ min: Number(S.min) ?? 0, max: Number(S.max) ?? 0, kp: Math.min(10, Math.max(0, Number(S.kp) ?? 0)) })) : [], ae = (le.length > 0 ? le : V).slice().sort((S, P) => S.min - P.min), ve = 3;
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
    const ze = ae.length > 0 ? ae[ae.length - 1] : null, je = Math.min(10, ze ? ze.kp : 6), Ke = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, je)).map((S, P) => {
      const x = P + 1, G = !!Number(De[S]), ke = x <= fe;
      return { index: x, used: G, usable: ke };
    }), ot = Math.ceil(Ke.length / 2);
    return e.kpDotsRow1 = Ke.slice(0, ot), e.kpDotsRow2 = Ke.slice(ot), e.canEditInitiative = !!((Tt = game.user) != null && Tt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((Qe = (Dt = e.system) == null ? void 0 : Dt.combat) == null ? void 0 : Qe.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var a, o, y;
    super._attachFrameListeners(s);
    const e = ((a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (r) => {
      var l, d, h;
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const i = ((h = (d = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : d.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (r) => {
      var l, d, h;
      r.preventDefault();
      const i = (d = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (h = c == null ? void 0 : c.sheet) == null || h.render(!0);
    });
    const n = (r) => {
      var l, d;
      const i = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (d = c == null ? void 0 : c.sheet) == null || d.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (r) => {
      var d, h, g, v;
      r.preventDefault();
      const i = (h = (d = r.currentTarget) == null ? void 0 : d.closest) == null ? void 0 : h.call(d, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (r) => {
      var d;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = (((d = i == null ? void 0 : i.dataset) == null ? void 0 : d.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-C5tH7PLh.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var l, d, h, g, v;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((d = i == null ? void 0 : i.dataset) != null && d.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-C5tH7PLh.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (r) => {
      var d, h;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((h = (d = this.actor.system) == null ? void 0 : d.resources) == null ? void 0 : h[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var h, g;
      r.preventDefault();
      const i = r.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: d } = await import("./roll-sheet-C5tH7PLh.mjs");
      d(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      var c, l;
      r.preventDefault();
      const i = (l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (r) => {
      var l, d, h, g;
      r.preventDefault();
      const i = (((d = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId) ?? ((g = (h = r.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, v, k, w, T, O;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, c = (w = (k = r.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((T = this.actor.system) == null ? void 0 : T.abilities) ?? {}, h = (Array.isArray((O = l[i]) == null ? void 0 : O.items) ? l[i].items.slice() : []).filter((_) => _ !== c);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      var c, l;
      if (r.preventDefault(), !r.altKey) return;
      const i = (l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      var g, v;
      if (r.preventDefault(), !r.altKey) return;
      const i = r.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, d = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      d && (h[`system.weapons.${d}.itemId`] = "", h[`system.weapons.${d}.name`] = "", h[`system.weapons.${d}.damage`] = "", h[`system.weapons.${d}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      var c, l;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var h, g, v, k;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((g = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, d = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = c[w]) == null ? void 0 : T.itemId) ?? "").trim() === i;
      });
      d && await this.actor.update({
        [`system.gear.microchips.${d}.itemId`]: "",
        [`system.gear.microchips.${d}.name`]: "",
        [`system.gear.microchips.${d}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (r) => {
      var l, d;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((d = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      !c || c.type !== "Targy" && c.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (o = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : o.call(e, f)) == null || y.forEach((r) => {
      var i;
      (((i = r.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (r.draggable = !0);
    }), t.on("dragstart", f, (r) => {
      var h, g, v;
      const i = r.currentTarget, c = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const d = l.uuid;
      r.dataTransfer && (r.dataTransfer.setData("text/plain", d), r.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: d })), r.dataTransfer.effectAllowed = "copyMove"), typeof ((v = r.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && r.dataTransfer.setDragImage(i, 0, 0);
    });
    const u = this, p = (r) => {
      if (!r) return;
      const i = u._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && u.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, m = (r) => {
      var i, c, l;
      return r && (((c = (i = u.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || u.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(u.id)}`)));
    };
    u._votvNpcBlur = (r) => {
      var h;
      const i = r.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!m(l)) return;
      const d = r.relatedTarget;
      d && (l.contains(d) || u.id && ((h = d.closest) != null && h.call(d, `#${CSS.escape(u.id)}`))) || p(l);
    }, document.body.addEventListener("blur", u._votvNpcBlur, !0), u._votvNpcItemHookRegistered || (u._votvNpcItemUpdateHook = (r, i, c) => {
      var l;
      u.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === u.actor.id && u.render(!0);
    }, u._votvNpcItemDeleteHook = (r, i, c) => {
      var l;
      u.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === u.actor.id && u.render(!0);
    }, Hooks.on("updateItem", u._votvNpcItemUpdateHook), Hooks.on("deleteItem", u._votvNpcItemDeleteHook), u._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const u = this._getFormDataForUpdate(e);
      Object.keys(u).length > 0 && await this.actor.update(u).catch((p) => console.warn("VoidNpcSheet save on preClose failed", p));
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
    var w, T, O, _, C;
    const e = this.actor;
    if (!e) return;
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((T = e.system) == null ? void 0 : T.skills) ?? {}, u = ((O = e.items) == null ? void 0 : O.filter((j) => j.type === "Fegyver")) ?? [];
    let p = null;
    n.itemId && (p = u.find((j) => j.id === n.itemId) ?? null);
    const m = p && p.name || n.name || "Fegyver", a = Number(n.bonus || 0) || 0, o = ((_ = p == null ? void 0 : p.system) == null ? void 0 : _.type) || "kinetic", y = (((C = p == null ? void 0 : p.system) == null ? void 0 : C.skillKey) ?? "").trim(), r = y && f[y] !== void 0 ? y : o === "explosive" ? "grenadeUse" : "firearms", i = Number(f[r] || 0) || 0, c = a + i, d = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(d);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Gt(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, a, o, y, r, i, c, l, d, h;
    const t = this.actor;
    if (!t) return;
    const n = ((a = (m = t.items).get) == null ? void 0 : a.call(m, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const u = new Roll(f);
    await u.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
  async _onDropItem(s, e) {
    var o, y, r, i, c, l, d, h, g, v, k, w, T, O, _, C, j, K, U;
    if (!this.actor) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const n = ((z) => {
      var Z;
      if (!z) return null;
      const W = z.uuid ?? z.documentUuid ?? ((Z = z.data) == null ? void 0 : Z.uuid) ?? (typeof z == "string" ? z : null);
      if (W) return W;
      if (typeof z == "object") {
        for (const J of Object.values(z))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    if (f.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const u = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const z = (((l = f.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (z === "module") {
        (h = (d = ui.notifications) == null ? void 0 : d.warn) == null || h.call(d, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let W = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== u.id) {
        const oe = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        W = ((v = (await u.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : v.id) ?? W;
      }
      const Z = ((k = u.system) == null ? void 0 : k.abilities) ?? {}, J = z === "active" ? "active" : "passive", Y = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(W) || Y.push(W), await u.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((T = f.parent) == null ? void 0 : T.id) === u.id) return;
    const p = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const a = (O = (await u.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : O.id;
    if (f.type === "Fegyver" && a) {
      const z = ((_ = u.system) == null ? void 0 : _.weapons) ?? {}, W = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (z.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((R) => W.includes(R)) : [];
      let Y = W.find((R) => {
        var te;
        return !(((te = z[R]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = W.find((R) => !J.includes(R)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((R) => W.includes(R));
      await u.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: a,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = f.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((j = f.system) == null ? void 0 : j.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && a) {
      const z = ((U = (K = u.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = z[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await u.update({
        [`system.gear.microchips.${Z}.itemId`]: a,
        [`system.gear.microchips.${Z}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var o, y, r, i, c, l;
    const e = (y = (o = this.actor) == null ? void 0 : o.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var m, a, o, y, r, i;
    const e = (a = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : a.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((o = e.system) == null ? void 0 : o.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const c = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        l > 0 && (f = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((i = this.actor) == null ? void 0 : i.name) ?? void 0 }),
      content: p,
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
        const u = (n.value ?? "").trim();
        if (u === "") continue;
        f = Number(u) || 0;
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
    form: foundry.utils.mergeObject(((Ps = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject((($s = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : $s.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Rs = (xs = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : xs.window) == null ? void 0 : Rs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Vt = ge;
function ji(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ms, zs, js, Ks;
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
    var n, f, u, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((u = s.querySelector) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const f = this.element, u = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const d = document.activeElement, h = u.contains(d), g = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      h && g && (p.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const m = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const a = this.element, o = this.form ?? this.element, y = p.scrollState, r = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var d, h;
      if (this._applyScrollState(a, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((d = o.querySelector) == null ? void 0 : d.call(o, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(a, y);
    };
    return (i || r) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), m;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (a) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, a)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${a}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const p = Number(f == null ? void 0 : f.value) || 0, m = Number(u == null ? void 0 : u.value) || 0;
    n.textContent = String(p + m);
  }
  async _prepareContext(s) {
    var j, K, U, z, W, Z, J, Y, oe, R, te, de, De;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((j = e.system) == null ? void 0 : j.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, u = "— Nincs fegyver —", p = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = p.map((D) => {
      const E = (D == null ? void 0 : D.system) ?? {}, V = E.type ?? "", se = (n[V] ?? V) || "—", le = E.size ?? "", pe = (f[le] ?? le) || "", ae = [se, pe].filter(Boolean).join(", ") || se || "—", ve = V === "projectile" || le === "thrown", ce = E.quantity != null ? String(E.quantity).trim() : "1", fe = (typeof E.range == "string" ? (E.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? u,
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
    const m = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = m.map((D) => {
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
    const a = (((z = this.actor.items) == null ? void 0 : z.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = a.map((D) => {
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
    const o = (((W = this.actor.items) == null ? void 0 : W.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = o.map((D) => {
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
    const y = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", r = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === y).sort((D, E) => {
      const V = typeof D.sort == "number" ? D.sort : 0, se = typeof E.sort == "number" ? E.sort : 0;
      return V - se;
    }), i = [];
    let c = 0, l = 0, d = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of r) {
      const E = (D == null ? void 0 : D.system) ?? {}, V = Number(E.level ?? 0) || 0, se = (E.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (d += le);
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
        var Ce, ut;
        const ie = (((Ce = ee.system) == null ? void 0 : Ce.kind) ?? "passive").toString(), lt = Number(((ut = ee.system) == null ? void 0 : ut.kp) ?? 0) || 0, xe = ie === "species";
        return {
          id: ee.id,
          ref: ye,
          name: ee.name,
          img: ee.img,
          kind: ie,
          kpDisplay: xe ? 0 : lt
        };
      });
      if (y === "Helyiseg") {
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
      const fe = E.health ?? {}, ze = Number(fe.max ?? 0) || 0, je = Number(fe.value ?? 0) || 0;
      let $e;
      if (ze <= 0)
        $e = void 0;
      else if (je <= 0)
        $e = 0;
      else {
        const ee = je / ze;
        ee > 2 / 3 ? $e = 3 : ee > 1 / 3 ? $e = 2 : $e = 1;
      }
      const Ke = (E.hit ?? "").toString().trim(), ot = (E.speed ?? "").toString().trim().replace(",", "."), Ue = Number(ot);
      Number.isFinite(Ue) && (c += Ue);
      const Ze = (E.range ?? "").toString().trim().replace(",", "."), Be = Number(Ze);
      Number.isFinite(Be) && (l += Be);
      const ct = (E.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: V,
        hpMax: ze,
        hpValue: je,
        hpStatus: $e,
        hit: Ke,
        damage: ct,
        abilities: ce,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = d, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = r.length;
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
    const _ = (((oe = e.weaponsTable) == null ? void 0 : oe.length) ?? 0) > 0 || (((R = e.armorTable) == null ? void 0 : R.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((de = e.itemsTable) == null ? void 0 : de.length) ?? 0) > 0;
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
    var p;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.form ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (m) => {
      var y, r, i;
      m.preventDefault(), m.stopPropagation();
      const a = ((i = (r = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (m) => {
      var y, r, i;
      m.preventDefault();
      const a = (r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (m) => {
      var y, r;
      if (m.preventDefault(), !m.altKey) return;
      const a = (r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      !a || !this.actor.items.get(a) || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".jarmu-item-quantity-input", async (m) => {
      var r;
      const a = m.currentTarget, o = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (a.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (m) => {
      var y, r;
      const a = (r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "Pancel" || await o.update({ "system.equipped": m.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (m) => {
      var o, y, r, i;
      m.preventDefault();
      const a = (y = (o = m.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId;
      a && ((i = (r = this.actor.items.get(a)) == null ? void 0 : r.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (m) => {
      var o, y;
      if (m.preventDefault(), !m.altKey) return;
      const a = (y = (o = m.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId;
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-item-chat", async (m) => {
      var y, r, i, c;
      m.preventDefault();
      const a = (((r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId) ?? ((c = (i = m.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "MikroChip" && o.type !== "Egyeb" || await this._postItemToChat(a);
    }), t.on("click", ".jarmu-unit-damage-button", async (m) => {
      var y;
      m.preventDefault(), m.stopPropagation();
      const a = m.currentTarget, o = (((y = a == null ? void 0 : a.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      o && await this._rollUnitDamage(o);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (m) => {
      var r, i;
      const a = m.currentTarget, o = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      n._draggingUnitId = o;
      const y = (i = m.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", o), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(a, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (m) => {
      var r, i, c, l;
      const a = (i = (r = m.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : i.itemId, o = n._draggingUnitId;
      if (!o || !a || o === a) return;
      m.preventDefault();
      const y = (c = m.originalEvent) == null ? void 0 : c.dataTransfer;
      y && (y.dropEffect = "move"), (l = m.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (m) => {
      var a;
      (a = m.currentTarget) == null || a.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (m) => {
      var g, v, k, w;
      m.preventDefault(), (g = m.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const a = (k = (v = m.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : k.itemId;
      let o = n._draggingUnitId;
      const y = (w = m.originalEvent) == null ? void 0 : w.dataTransfer;
      if (!o && y && (o = y.getData("text/plain")), n._draggingUnitId = null, !o || !a || o === a) return;
      const r = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((T) => T.type === r).sort((T, O) => {
        const _ = typeof T.sort == "number" ? T.sort : 0, C = typeof O.sort == "number" ? O.sort : 0;
        return _ - C;
      }).map((T) => T.id), l = c.indexOf(o), d = c.indexOf(a);
      if (l === -1 || d === -1) return;
      c.splice(l, 1), c.splice(d, 0, o);
      const h = c.map((T, O) => ({
        _id: T,
        sort: (O + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (m) => {
      var r, i, c, l, d, h, g, v, k, w;
      m.preventDefault();
      const a = (l = (c = (i = (r = m.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : l.abilityRef, o = (v = (g = (h = (d = m.currentTarget) == null ? void 0 : d.closest) == null ? void 0 : h.call(d, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (a)
        try {
          y = await fromUuid(a);
        } catch {
          y = null;
        }
      !y && o && (y = ((k = game.items) == null ? void 0 : k.get(o)) ?? null), (w = y == null ? void 0 : y.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (m) => {
      var i, c, l, d;
      m.preventDefault();
      const a = (c = (i = m.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), o = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.abilityRef, y = (d = a == null ? void 0 : a.dataset) == null ? void 0 : d.abilityId, r = o || y;
      r && await this._postUnitAbilityToChat(r);
    });
    const f = (m) => {
      if (!m) return;
      const a = this._getFormDataForUpdate(m);
      Object.keys(a).length !== 0 && this.actor.update(a).catch((o) => console.warn("VoidJarmuSheet save failed", o));
    }, u = (m) => {
      var a, o, y;
      return m && (((o = (a = this.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, m)) || this.id && ((y = m.closest) == null ? void 0 : y.call(m, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (m) => {
      var i;
      const a = m.target;
      if (!a || !a.form) return;
      const o = a.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const y = a.form;
      if (!u(y)) return;
      const r = m.relatedTarget;
      r && (y.contains(r) || this.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (m) => {
      var l, d, h;
      const a = m.currentTarget, o = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (a.value ?? "").trim(), i = r === "" ? 0 : Number(r), c = (d = a.closest) == null ? void 0 : d.call(a, ".jarmu-unit-row");
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
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (m) => {
      var i;
      const a = m.currentTarget, o = (i = a == null ? void 0 : a.dataset) == null ? void 0 : i.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Jarmuegyseg" && y.type !== "Helyiseg") return;
      const r = (a.value ?? "").trim();
      await y.update({ "system.hit": r });
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
    var m, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var p, m, a, o, y, r, i, c, l;
    const e = this.actor;
    if (!e) return;
    const t = ((m = (p = e.items).get) == null ? void 0 : m.call(p, s)) ?? ((o = (a = e.items.contents) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (d) => d.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (l = (r = ui.notifications) == null ? void 0 : r.warn) == null || l.call(
        r,
        ((c = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : c.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
      );
      return;
    }
    const f = new Roll(n);
    await f.evaluate({ async: !0 });
    const u = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: u
    });
  }
  async _postUnitAbilityToChat(s) {
    var o, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var m, a;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((m = e == null ? void 0 : e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
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
    const f = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(n.type)) return super._onDropItem(s, e);
    if (((a = n.parent) == null ? void 0 : a.id) === f.id) return;
    const p = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [p]);
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
    window: foundry.utils.mergeObject(((zs = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : zs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ks = (js = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : js.window) == null ? void 0 : Ks.contentClasses) ?? [],
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
function Ls(I) {
  var e;
  return (((e = I == null ? void 0 : I.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var f;
    return t + Ki((f = n.system) == null ? void 0 : f.veszely);
  }, 0);
}
var Us;
const rt = class rt extends jt {
  _attachFrameListeners(s) {
    var p;
    super._attachFrameListeners(s);
    const e = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element;
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
    }, f = { Kicsi: -10, Közepes: 0, Nagy: 10 }, u = () => {
      var _, C, j, K, U, z, W;
      const a = ((_ = e.querySelector) == null ? void 0 : _.call(e, "form")) ?? e, o = (C = a.querySelector) == null ? void 0 : C.call(a, 'select[name="system.identity.assignment"]'), y = (j = a.querySelector) == null ? void 0 : j.call(a, 'select[name="system.identity.subAssignment"]'), r = (K = a.querySelector) == null ? void 0 : K.call(a, "input.bazis-threat-total"), i = (U = a.querySelector) == null ? void 0 : U.call(a, 'input[name="system.combat.threatBonus"]');
      if (!o || !r || !i) return;
      const c = o.value ?? "", l = (y == null ? void 0 : y.value) ?? "", d = t[c] ?? 0, h = n[l] ?? 0, g = (((W = (z = this.actor) == null ? void 0 : z.items) == null ? void 0 : W.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", k = f[v] ?? 0, w = Number(i.value ?? 0) || 0, T = Ls(this.actor), O = d + h + k + w + T;
      r.value = O;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', u);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, f = n.identity ?? {}, u = n.combat ?? {}, p = f.assignment ?? "", m = f.subAssignment ?? "", a = {
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
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, r = a[p] ?? 0, i = o[m] ?? 0, c = e.sizeForSelect ?? "Kicsi", l = y[c] ?? 0, d = Number(u.threatBonus ?? 0) || 0, h = Ls(this.actor), g = r + i + l + d + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...u, threat: g, threatBonus: d } },
        { inplace: !1 }
      ), e.bazisThreatBase = r;
    }
    return e;
  }
};
X(rt, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(rt, rt, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Us = M(rt, rt, "DEFAULT_OPTIONS")) == null ? void 0 : Us.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Wt = rt;
var Bs, Hs, Gs, Vs;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  async _prepareContext(s) {
    var u;
    const e = await super._prepareContext(s) ?? {}, t = this.actor;
    e.actor = t;
    const n = foundry.utils.deepClone(t.system ?? {});
    e.system = n;
    const f = (((u = t.items) == null ? void 0 : u.contents) ?? []).filter((p) => p.type === "Egyeb");
    return e.egyebList = f.map((p) => {
      const a = ((p.system ?? {}).description ?? "").trim(), o = a ? a.length > 80 ? `${a.slice(0, 77)}…` : a : "";
      return {
        itemId: p.id,
        actorId: t.id,
        name: p.name ?? "—",
        img: p.img ?? "",
        description: o
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var p;
    super._attachFrameListeners(s);
    const e = this, t = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, n = t ? $(t) : $([]);
    if (!this.isEditable) return;
    n.on("click", ".vallalkozas-employee-add", async (m) => {
      var y;
      if (m.preventDefault(), !this.actor) return;
      const a = this.actor.system ?? {}, o = Array.isArray((y = a.vallalkozas) == null ? void 0 : y.employees) ? a.vallalkozas.employees.slice() : [];
      o.push({ type: "", level: 0, count: 0, bonus: "" }), await this.actor.update({ "system.vallalkozas.employees": o });
    }), n.on("click", ".karakter-item-chat", async (m) => {
      var y, r, i, c;
      m.preventDefault();
      const a = (((r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId) ?? ((c = (i = m.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      o && (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(a);
    }), n.on("click", ".vallalkozas-egyeb-delete", async (m) => {
      var o, y;
      if (m.preventDefault(), !m.altKey || !this.actor) return;
      const a = (((y = (o = m.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    });
    const f = (m) => {
      if (!m || !this.actor) return;
      const a = e._getFormDataForUpdate(m);
      Object.keys(a).length !== 0 && e.actor.update(a).catch((o) => console.warn("VoidVallalkozasSheet save failed", o));
    }, u = (m) => {
      var a, o, y;
      return m && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, m)) || e.id && ((y = m.closest) == null ? void 0 : y.call(m, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (m) => {
      var o, y, r;
      const a = ((o = m.target) == null ? void 0 : o.form) ?? ((r = (y = m.target) == null ? void 0 : y.closest) == null ? void 0 : r.call(y, "form"));
      u(a) && f(a);
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
    var m, a, o;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
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
    form: foundry.utils.mergeObject(((Bs = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Bs.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Hs = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Vs = (Gs = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.window) == null ? void 0 : Vs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Jt = be;
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
var Ws;
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
    e._votvProfileImgClick = (u) => {
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = u.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (u) => {
      if (!u) return;
      const p = e._getFormDataForUpdate(u);
      Object.keys(p).length !== 0 && e.document.update(p).catch((m) => console.warn("VoidWeaponSheet save failed", m));
    }, f = (u) => {
      var p, m, a;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, a, o;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((o = (a = u.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
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
X(Le, "PARTS", foundry.utils.mergeObject(M(Le, Le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(Le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Le, Le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ws = M(Le, Le, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.form) ?? {}, { submitOnChange: !1 })
}));
let Zt = Le;
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
    e._votvProfileImgClick = (u) => {
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = u.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (u) => {
      if (!u) return;
      const p = e._getFormDataForUpdate(u);
      Object.keys(p).length !== 0 && e.document.update(p).catch((m) => console.warn("VoidShieldSheet save failed", m));
    }, f = (u) => {
      var p, m, a;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, a, o;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((o = (a = u.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
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
X(Ne, "PARTS", foundry.utils.mergeObject(M(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Js = M(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : Js.form) ?? {}, { submitOnChange: !1 })
}));
let Yt = Ne;
var Zs;
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
    e._votvProfileImgClick = (u) => {
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = u.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (u) => {
      if (!u) return;
      const p = e._getFormDataForUpdate(u);
      Object.keys(p).length !== 0 && e.document.update(p).catch((m) => console.warn("VoidMicrochipSheet save failed", m));
    }, f = (u) => {
      var p, m, a;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, a, o;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((o = (a = u.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
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
  form: foundry.utils.mergeObject(((Zs = M(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Zs.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Fe;
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
    e._votvProfileImgClick = (u) => {
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = u.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (u) => {
      if (!u) return;
      const p = e._getFormDataForUpdate(u);
      Object.keys(p).length !== 0 && e.document.update(p).catch((m) => console.warn("VoidAbilitySheet save failed", m));
    }, f = (u) => {
      var p, m, a;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, a, o;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((o = (a = u.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
    }, e._votvInput = (u) => {
      var a;
      const p = u.target;
      if ((p == null ? void 0 : p.name) === "name") return;
      const m = (p == null ? void 0 : p.form) ?? ((a = p == null ? void 0 : p.closest) == null ? void 0 : a.call(p, "form"));
      f(m) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(m), 300));
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
X(Ae, "PARTS", foundry.utils.mergeObject(M(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ys = M(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !0 })
}));
let Qt = Ae;
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
    e._votvProfileImgClick = (u) => {
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = u.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (u) => {
      if (!u) return;
      const p = e._getFormDataForUpdate(u);
      Object.keys(p).length !== 0 && e.document.update(p).catch((m) => console.warn("VoidTargySheet save failed", m));
    }, f = (u) => {
      var p, m, a;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, a, o;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((o = (a = u.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
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
X(Ee, "PARTS", foundry.utils.mergeObject(M(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Xs = M(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (u) => {
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = u.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
        type: "image",
        current: e.document.img || "",
        callback: (d) => {
          d && e.document.update({ img: d });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (u) => {
      if (!u) return;
      const p = e._getFormDataForUpdate(u);
      Object.keys(p).length !== 0 && e.document.update(p).catch((m) => console.warn("VoidEgyebSheet save failed", m));
    }, f = (u) => {
      var p, m, a;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((a = u.closest) == null ? void 0 : a.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, a, o;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((o = (a = u.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
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
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Qs = M(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !1 })
}));
let ts = Pe;
var ei, ti;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var m, a, o, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (a = this.document) == null ? void 0 : a.name,
      "id=",
      (o = this.document) == null ? void 0 : o.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (r) => {
      var i, c, l;
      try {
        const d = typeof r.composedPath == "function" ? r.composedPath() : [];
        if (!(this.element && d.includes(this.element) || this.id && ((c = (i = r.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", r);
        let g = null;
        try {
          g = TextEditor.getDragEventData(r);
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
      } catch (d) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", d);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (r) => {
      var d, h, g, v, k, w;
      r.preventDefault();
      const i = (h = (d = r.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef, c = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && c && (l = ((k = game.items) == null ? void 0 : k.get(c)) ?? null), (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (r) => {
      var d, h, g, v;
      r.preventDefault();
      const i = (h = (d = r.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef, c = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, l = i || c;
      l && await this._postAbilityToChat(l);
    }), n.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, v, k;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, l = Array.isArray((k = c.abilities) == null ? void 0 : k.items) ? c.abilities.items.slice() : [], d = l.indexOf(i), h = d >= 0 ? [...l.slice(0, d), ...l.slice(d + 1)] : l;
      await this.document.update({ "system.abilities.items": h });
    });
    const f = (y = t == null ? void 0 : t.querySelector) == null ? void 0 : y.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (r) => {
      r.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const u = (r) => {
      if (!r) return;
      const i = e._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, p = (r) => {
      var i, c, l;
      return r && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || e.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, l, d;
      const i = ((c = r.target) == null ? void 0 : c.form) ?? ((d = (l = r.target) == null ? void 0 : l.closest) == null ? void 0 : d.call(l, "form"));
      p(i) && u(i);
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
    const p = (await Promise.all(
      f.map(async (m) => {
        var a;
        if (!m) return null;
        try {
          const o = await fromUuid(m);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (a = game.items) == null ? void 0 : a.get(m);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((m, a) => ({ doc: m, ref: f[a] })).filter((m) => !!m.doc && !!m.ref).map(({ doc: m, ref: a }) => {
      var i, c;
      const o = (((i = m.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((c = m.system) == null ? void 0 : c.kp) ?? 0) || 0, r = o === "species";
      return {
        id: m.id,
        ref: a,
        name: m.name,
        img: m.img,
        kind: o,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: r ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", p), e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var o, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
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
    var t, n, f;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const u = e.uuid ?? e.id, p = this.document.system ?? {}, m = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return m.push(u), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", m), await this.document.update({ "system.abilities.items": m }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
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
    form: foundry.utils.mergeObject(((ei = M(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ti = M(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : ti.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ss = Se;
var si, ii;
const Te = class Te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var m, a;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (o) => {
      var c, l, d, h, g, v;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, r = (h = (d = o.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && r && (i = ((g = game.items) == null ? void 0 : g.get(r)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (o) => {
      var c, l, d, h;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, r = (h = (d = o.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemId, i = y || r;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (o) => {
      var d, h, g;
      if (o.preventDefault(), !o.altKey) return;
      const y = (h = (d = o.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef;
      if (!y) return;
      const r = this.document.system ?? {}, i = Array.isArray((g = r.abilities) == null ? void 0 : g.items) ? r.abilities.items.slice() : [], c = i.indexOf(y), l = c >= 0 ? [...i.slice(0, c), ...i.slice(c + 1)] : i;
      await this.document.update({ "system.abilities.items": l });
    });
    const f = (a = t == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (o) => {
      o.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (o) => {
      var y, r, i;
      try {
        const c = typeof o.composedPath == "function" ? o.composedPath() : [];
        if (!(this.element && c.includes(this.element) || this.id && ((r = (y = o.target) == null ? void 0 : y.closest) == null ? void 0 : r.call(y, `#${CSS.escape(this.id)}`)))) return;
        let d = null;
        try {
          d = TextEditor.getDragEventData(o);
        } catch {
        }
        if (!d || d.type !== "Item") return;
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
        })(d);
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
    const u = (o) => {
      if (!o) return;
      const y = e._getFormDataForUpdate(o);
      Object.keys(y).length !== 0 && e.document.update(y).catch((r) => console.warn("VoidHelyisegSheet save failed", r));
    }, p = (o) => {
      var y, r, i;
      return o && (((r = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : r.call(y, o)) || e.id && ((i = o.closest) == null ? void 0 : i.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var r, i, c;
      const y = ((r = o.target) == null ? void 0 : r.form) ?? ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
      p(y) && u(y);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, f = Array.isArray(n.items) ? n.items : [], p = (await Promise.all(
      f.map(async (m) => {
        var a;
        if (!m) return null;
        try {
          const o = await fromUuid(m);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (a = game.items) == null ? void 0 : a.get(m);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((m, a) => ({ doc: m, ref: f[a] })).filter((m) => !!m.doc && !!m.ref).map(({ doc: m, ref: a }) => {
      var i, c;
      const o = (((i = m.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((c = m.system) == null ? void 0 : c.kp) ?? 0) || 0, r = o === "species";
      return {
        id: m.id,
        ref: a,
        name: m.name,
        img: m.img,
        kind: o,
        kpDisplay: r ? 0 : y
      };
    });
    return e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var o, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, n, f;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const u = e.uuid ?? e.id, p = this.document.system ?? {}, m = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return m.push(u), await this.document.update({ "system.abilities.items": m }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
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
    form: foundry.utils.mergeObject(((si = M(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : si.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ii = M(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : ii.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let is = Te;
const ni = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function ai(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, n, f, u, p, m;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = gi, CONFIG.Actor.dataModels.Npc = Nt, CONFIG.Actor.dataModels.Jarmu = vi, CONFIG.Actor.dataModels.Bazis = Ii, CONFIG.Actor.dataModels.Vallalkozas = Ri, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ss, CONFIG.Item.dataModels.weapon = Ss, CONFIG.Item.dataModels.Pancel = Di, CONFIG.Item.dataModels.MikroChip = Oi, CONFIG.Item.dataModels.Kepesseg = Os, CONFIG.Item.dataModels.ability = Os, CONFIG.Item.dataModels.Targy = Ci, CONFIG.Item.dataModels.Egyeb = Li, CONFIG.Item.dataModels.Jarmuegyseg = Fi, CONFIG.Item.dataModels.Helyiseg = $i, (f = CONFIG.Actor).trackableAttributes ?? (f.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (u = CONFIG.Actor).typeLabels ?? (u.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás", (p = CONFIG.Combat).initiative ?? (p.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Vt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", jt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Wt, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Jt, {
    types: ["Vallalkozas"],
    makeDefault: !0,
    label: "VOTV.VallalkozasSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Zt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Yt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", es, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ts, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", ss, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", is, {
    types: ["Helyiseg"],
    makeDefault: !0,
    label: "VOTV.HelyisegSheet"
  });
  const s = "systems/vacuum-of-the-void/assets/blank.svg";
  Hooks.on("preCreateActor", (a, o, y) => {
    ((o == null ? void 0 : o.type) === "Bazis" || (o == null ? void 0 : o.type) === "Vallalkozas") && (o.img = s);
  }), Hooks.on("preUpdateActor", (a, o, y) => {
    ((a == null ? void 0 : a.type) === "Bazis" || (a == null ? void 0 : a.type) === "Vallalkozas") && Object.prototype.hasOwnProperty.call(o ?? {}, "img") && (o.img = s);
  }), Hooks.on("ready", () => {
    var y;
    const a = s, o = (((y = game.actors) == null ? void 0 : y.contents) ?? []).filter(
      (r) => (r.type === "Bazis" || r.type === "Vallalkozas") && (r.img ?? "").toString().trim() !== a
    );
    o.length && o.forEach((r) => r.update({ img: a }).catch(() => {
    }));
  }), Hooks.on("updateActor", (a, o, y, r) => {
    if ((a == null ? void 0 : a.type) !== "Karakter" || !(a != null && a.id)) return;
    const i = a.id;
    setTimeout(() => {
      var h, g, v, k;
      const c = (h = game.actors) == null ? void 0 : h.get(i);
      if (!c || c.type !== "Karakter") return;
      const l = Lt.getTotalSpeedRaw(c), d = (g = c.effects) == null ? void 0 : g.find((w) => w.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !d) {
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
      } else l > 0 && d && d.delete().then(() => {
        var T, O;
        const w = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const _ of w)
          ((O = _ == null ? void 0 : _.document) == null ? void 0 : O.actorId) === i && typeof _.draw == "function" && _.draw();
      }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", w));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (a, o, y, r) => {
    var T, O, _, C, j, K, U, z, W, Z, J, Y, oe;
    const i = a == null ? void 0 : a.id;
    if (!i) return;
    if ((a.type === "Karakter" || a.type === "Npc") && ((T = o == null ? void 0 : o.system) != null && T.combat) && "initiativeResult" in o.system.combat) {
      const R = Number((_ = (O = a.system) == null ? void 0 : O.combat) == null ? void 0 : _.initiativeResult), te = Number.isFinite(R) ? R : 0, de = game.combat;
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
      const R = ai((z = (U = a.system) == null ? void 0 : U.identity) == null ? void 0 : z.size);
      a.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", a.name, te));
    }
    const c = document.activeElement, l = c && (c.tagName === "INPUT" && c.type !== "checkbox" && c.type !== "radio" || c.tagName === "TEXTAREA" || c.isContentEditable), d = [], h = (W = game.actors) == null ? void 0 : W.get(i);
    h != null && h.apps && d.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of g) {
      if (((Z = R.document) == null ? void 0 : Z.id) !== i || ((J = R.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = R.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" && te !== "VoidVallalkozasSheet" || d.includes(R) || d.push(R);
    }
    if (l && d.some((R) => {
      const te = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return te && te.contains(c);
    })) return;
    const k = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, w = k && Date.now() - k.at < e ? k.appId : null;
    setTimeout(() => {
      for (const R of d)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== w && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (a, o, y, r) => {
    var d, h, g;
    const i = a == null ? void 0 : a.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || a.type !== "Fegyver") return;
    const c = ((d = i.system) == null ? void 0 : d.weapons) ?? {}, l = {};
    for (const [v, k] of Object.entries(c)) {
      if (!v.startsWith("slot")) continue;
      const w = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !w || w !== a.id || (l[`system.weapons.${v}.name`] = a.name ?? "", l[`system.weapons.${v}.damage`] = ((h = a.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${v}.bonus`] = ((g = a.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, k, w, T, O, _, C, j, K, U, z, W, Z, J, Y, oe, R, te, de, De, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), u = (w = (k = f == null ? void 0 : f.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!u) return;
    const p = u.actorId ?? ((T = f == null ? void 0 : f.speaker) == null ? void 0 : T.actor) ?? "";
    if (!p) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((O = game.actors) == null ? void 0 : O.get(u.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(p));
    if (m || (m = ((j = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : j.flatMap((V) => {
      var se;
      return ((se = V.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === p || V.id === u.actorId))) ?? null), !m) return;
    const a = u.itemId ? ((U = (K = m.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, u.itemId)) ?? ((Z = (W = (z = m.items) == null ? void 0 : z.contents) == null ? void 0 : W.find) == null ? void 0 : Z.call(W, (E) => E.id === u.itemId)) : null;
    let o = (u.damageFormula ?? "").trim();
    if (o || (o = (((J = a == null ? void 0 : a.system) == null ? void 0 : J.damage) ?? "").trim()), !o && u.slotKey && (o = (((((Y = m.system) == null ? void 0 : Y.weapons) ?? {})[u.slotKey] ?? {}).damage ?? "").trim()), !o) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (R = game.i18n) == null ? void 0 : R.localize) == null ? void 0 : te.call(R, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(o);
    await y.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = u.targetName || "", c = u.hitLocationName || "", l = ((a == null ? void 0 : a.name) ?? (u.slotKey ? ((D = (((De = m.system) == null ? void 0 : De.weapons) ?? {})[u.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let d = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (d += ` (${c})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: d,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var u, p, m, a, o, y;
      if (!((p = (u = e.target) == null ? void 0 : u.closest) != null && p.call(u, "#actors"))) return;
      const t = (a = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : a.call(m, "[data-document-id]"), n = (o = t == null ? void 0 : t.getAttribute) == null ? void 0 : o.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, u;
    const e = ((t = game.actors) == null ? void 0 : t.filter((p) => p.type === "Karakter")) ?? [];
    for (const p of e) {
      const m = Lt.getTotalSpeedRaw(p), a = (n = p.effects) == null ? void 0 : n.find((o) => o.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !a) {
        const o = ((u = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : u.img) ?? "";
        await p.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: o,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: p.uuid
        }]).catch(() => {
        });
      } else m > 0 && a && await a.delete().catch(() => {
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
      const f = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: ni },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, u = await n.create(f);
      u && console.log("Vacuum of the Void | Default scene created:", u.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var u, p, m, a, o, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((u = game.actors) == null ? void 0 : u.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of t)
      try {
        const i = r.prototypeToken, c = ((p = i == null ? void 0 : i.bar1) == null ? void 0 : p.attribute) ?? "", l = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (c || l) && await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", r.name, i);
      }
    for (const r of game.scenes ?? []) {
      const i = ((a = r.tokens) == null ? void 0 : a.filter((c) => {
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
    }, f = ((o = game.actors) == null ? void 0 : o.filter((r) => r.type === "Npc")) ?? [];
    for (const r of f)
      try {
        await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "resources.health"
        });
      } catch (i) {
        console.warn("Vacuum of the Void | NPC prototype update failed for", r.name, i);
      }
    for (const r of game.scenes ?? []) {
      const i = ((y = r.tokens) == null ? void 0 : y.filter((c) => {
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
Hooks.on("preCreateToken", (I, s, e) => {
  var u, p, m, a, o, y, r, i, c;
  const t = (u = game.votv) == null ? void 0 : u._dragSourceActorId, n = t ?? I.actorId ?? ((p = I._source) == null ? void 0 : p.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (m = game.actors) == null ? void 0 : m.get(n) : I.actor ?? null;
  if (f) {
    if (f.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((o = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : o.call(a, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
    if (f.type === "Vallalkozas")
      return (r = ui == null ? void 0 : ui.notifications) == null || r.warn("Vállalkozás nem helyezhető tokenként a térképre."), !1;
    if (f.type === "Karakter") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0,
        "bar1.attribute": "",
        "bar2.attribute": "",
        displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
      });
      return;
    }
    if (f.type === "Jarmu") {
      I.updateSource({
        ...t ? { actorId: t } : {},
        actorLink: !0
      });
      return;
    }
    if (f.type === "Npc") {
      const l = ai((c = (i = f.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
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
  var f, u, p;
  const t = I.actorId ? (f = game.actors) == null ? void 0 : f.get(I.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((p = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : p.call(u, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = I.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && I.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (I, s, e) => {
  const t = I.actor;
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
function ri(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Bi).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || ri(I);
});
function oi() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], u = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const p of u)
      !p || I.has(p.id) || (I.add(p.id), typeof p.render == "function" && p.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(oi, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && ri(I), setTimeout(oi, 0);
});
Hooks.on("renderSidebarTab", (I, s, e) => {
  if ((I == null ? void 0 : I.id) !== "combat") return;
  const t = s[0] ?? s;
  if (!(t != null && t.querySelectorAll)) return;
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((f) => {
    f.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (I, s, e) => {
  var f;
  const t = I == null ? void 0 : I.object, n = ((f = t == null ? void 0 : t.document) == null ? void 0 : f.actor) ?? (t == null ? void 0 : t.actor);
  if ((n == null ? void 0 : n.type) === "Karakter") {
    const u = s[0] ?? s;
    u != null && u.classList && u.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (I, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || I.updateSource({
    width: 3840,
    height: 2160,
    "background.src": ni,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var y, r, i, c;
  const t = ((y = I.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, u = t.weaponAttack, p = t.weapon, m = t.vsDefense, a = t.vsDefenseInfo;
  if (!n && !f && !u && !m) return;
  const o = (r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, ".dice-roll");
  if (o) {
    if (n && o.classList.add(`votv-${n}`), f) {
      const l = o.querySelector(".votv-crit-label");
      if (l)
        l.textContent = f;
      else {
        const d = o.querySelector(".dice-total"), h = (d == null ? void 0 : d.parentElement) ?? o, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = f, h.appendChild(g);
      }
    }
    if (u && p && (p.actorId || (i = I.speaker) != null && i.actor)) {
      const l = o.querySelector(".dice-total"), d = (l == null ? void 0 : l.parentElement) ?? o;
      if (!o.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!p.isHit, k = p.targetName || "Célpont";
        g.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, d.appendChild(g);
      }
      if (p.isHit && !o.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = p.hitLocationRoll, w = p.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(p.actorId ?? ((c = I.speaker) == null ? void 0 : c.actor) ?? ""), v.dataset.itemId = String(p.itemId ?? ""), v.dataset.slotKey = String(p.slotKey ?? ""), v.dataset.targetName = String(p.targetName ?? ""), v.dataset.hitLocationName = String(p.hitLocationName ?? ""), v.dataset.messageId = String(I.id ?? ""), d.appendChild(v);
      }
    }
    if (!u && m && a) {
      const l = o.querySelector(".dice-total"), d = (l == null ? void 0 : l.parentElement) ?? o, h = !!a.isHit, g = a.targetName || "Célpont", v = a.hitLocationRoll, k = a.hitLocationName;
      let w = o.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", d.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const T = o.querySelector(".votv-defense-hitloc");
      if (h && v != null && k) {
        let O = T;
        O || (O = document.createElement("div"), O.className = "votv-defense-hitloc", d.appendChild(O)), O.textContent = `Találati Hely ${v} - ${k}`;
      } else T && T.remove();
    }
  }
});
export {
  Lt as V,
  Gt as c
};
//# sourceMappingURL=vacuum-of-the-void-DTH05tEN.mjs.map
