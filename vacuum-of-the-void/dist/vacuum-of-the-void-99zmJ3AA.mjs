var li = Object.defineProperty;
var di = Object.getPrototypeOf;
var mi = Reflect.get;
var pi = (S, s, e) => s in S ? li(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var X = (S, s, e) => pi(S, typeof s != "symbol" ? s + "" : s, e);
var j = (S, s, e) => mi(di(S), e, s);
const { HTMLField: fi, NumberField: A, SchemaField: H, StringField: q, BooleanField: me, ArrayField: qt } = foundry.data.fields;
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
        biography: new fi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Bt, SchemaField: yi } = foundry.data.fields;
class gi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new yi({
        body: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: hi, StringField: Ts, NumberField: bi } = foundry.data.fields;
class vi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new hi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new Ts({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new Ts({ required: !1, blank: !0, initial: "" }),
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
const { SchemaField: ki, StringField: Ds, NumberField: wi } = foundry.data.fields;
class Ii extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new ki({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new Ds({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new Ds({ required: !1, blank: !0, initial: "" }),
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
const { BooleanField: Si, NumberField: Gi, StringField: Ze } = foundry.data.fields;
class _s extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Si({ required: !1, initial: !1 }),
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
const { NumberField: Ht, StringField: Os } = foundry.data.fields;
class _i extends foundry.abstract.TypeDataModel {
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
const { NumberField: Oi, StringField: Cs } = foundry.data.fields;
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
      kp: new Oi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ns } = foundry.data.fields;
class Ci extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ns({ required: !1, blank: !0, initial: "" }),
      quantity: new Ns({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: qi } = foundry.data.fields;
class Ni extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new qi({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Gt, StringField: pt, SchemaField: Ls, ArrayField: Li } = foundry.data.fields;
class Ai extends foundry.abstract.TypeDataModel {
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
        items: new Li(
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
const { NumberField: Fi, StringField: Rt, SchemaField: Ei, ArrayField: Pi } = foundry.data.fields;
class $i extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Fi({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ei({
        items: new Pi(
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
class xi extends Lt {
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
  f(S.terms, 1);
  const d = s.filter((r) => r === 6).length, p = s.filter((r) => r === 1).length, u = e.filter((r) => r === 6).length, a = t.filter((r) => r === 6).length, o = d + u, y = p + a;
  return o > 0 && o === y ? { resultType: null, label: null } : o >= 3 ? { resultType: "critical", label: "Brutális Siker" } : o === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function zi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Fs, Es, Ps, $s;
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
    var n, f, d, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const f = this.element, d = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const m = document.activeElement, h = d.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (p.focus = {
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
    const a = this.element, o = this.form ?? this.element, y = p.scrollState, r = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(a, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((m = o.querySelector) == null ? void 0 : m.call(o, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(a, y);
    };
    return (i || r) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const f = Math.floor(n / 3), d = Math.floor(2 * n / 3);
    return t <= f ? 1 : t <= d ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var p;
        return d.type === "Pancel" && ((p = d.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const p = String(((f = d.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), u = Number(p);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var p;
        return d.type === "Pancel" && ((p = d.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const d of s) {
      const p = String(((f = d.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), u = Number(p);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (d) => {
        var p;
        return d.type === "Pancel" && ((p = d.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let t = 0;
    for (const d of e) {
      const p = String(((f = d.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), u = Number(p);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var o, y, r, i, c, l, m, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (o = e.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : y.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, f = Q._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const d = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let p;
    f === 1 ? p = -6 : f === 2 ? p = -3 : p = d, p += Q._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((m = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : m.speed) ?? 0) || 0, a = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return u + a + (Number.isFinite(p) ? p : 0);
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
    var y, r, i, c, l, m, h, g, v, w, k, I;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((m = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : m.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, d = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, p = Q._healthStatusFromRatio(d, f), u = Number(((I = (k = (w = this.actor) == null ? void 0 : w.system) == null ? void 0 : k.combat) == null ? void 0 : I.givenSpeed) ?? 0) || 0;
    let a;
    p === 0 ? a = 0 : p === 1 ? a = -6 : p === 2 ? a = -3 : a = u;
    const o = this._getTotalArmorSpeedPenalty();
    a += o, t.textContent = String(a);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var a, o, y, r, i, c, l, m, h, g, v, w, k;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (y = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : y.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, f = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, d = (g = (h = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, p = (k = (w = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : w.has) != null && k.call(w, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + f + d + p;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), d = t('input[name="system.combat.defense"]'), p = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(d == null ? void 0 : d.value) || 0, a = Number(p == null ? void 0 : p.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(u + a + o);
  }
  _writeTotalSpeed(s = null) {
    var l, m, h, g, v, w, k, I;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), d = t('input[name="system.combat.speed"]'), p = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (m = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : m.has) != null && h.call(m, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, a = ((k = (w = u.hitLocations) == null ? void 0 : w.legs) == null ? void 0 : k.value) ?? 0, o = ((I = u.currentHealth) == null ? void 0 : I.legs) ?? 0;
    if (Q._healthStatusFromRatio(o, a) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(d == null ? void 0 : d.value) || 0, i = Number(p == null ? void 0 : p.value) || 0, c = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(r + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var d, p, u, a;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((d = this.actor.system) == null ? void 0 : d.resources) ?? {}, n = ((u = (p = t.hitLocations) == null ? void 0 : p[e]) == null ? void 0 : u.value) ?? 0, f = ((a = t.currentHealth) == null ? void 0 : a[e]) ?? 0;
    return Q._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var p, u, a, o;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((p = s == null ? void 0 : s.system) == null ? void 0 : p.resources) ?? {}, f = ((a = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : a.value) ?? 0, d = ((o = n.currentHealth) == null ? void 0 : o[t]) ?? 0;
    return Q._healthStatusFromRatio(d, f);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et, T, z, M, G, Ie, ne, Le, Ce, Se, Re, tt, st, Pt, $t, xt, zt, _t, dt, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs, bs, vs, ks;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, d = n.currentHealth ?? {}, p = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of p) {
      const L = ((bt = f[b]) == null ? void 0 : bt.value) ?? 0, N = d[b] ?? 0;
      e.computedHealthStatus[b] = Q._healthStatusFromRatio(N, L);
    }
    const u = (Number(d.head) || 0) === 0, o = ["torso", "arms", "legs"].filter((b) => (Number(d[b]) || 0) === 0).length;
    e.showDeathSkull = u || o >= 2;
    const y = e.computedHealthStatus.legs ?? 3, r = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = r;
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
    const O = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = (O.slotOrder ?? "").trim(), K = E ? E.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], U = (tt = this.actor.system.gear) == null ? void 0 : tt.microchips, P = U && typeof U == "object" && !Array.isArray(U) ? U : {}, W = (((st = P.slot1) == null ? void 0 : st.itemId) ?? "").trim(), Z = (((Pt = P.slot2) == null ? void 0 : Pt.itemId) ?? "").trim(), J = ((($t = P.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const N = typeof b.sort == "number" ? b.sort : 0, F = typeof L.sort == "number" ? L.sort : 0;
      return N - F;
    }).map((b) => {
      var je, nt, rt, Ve, Je, Ot;
      const L = b.type === "Fegyver", N = b.type === "MikroChip";
      let F = 0, B = "", ue = null;
      for (let mt = 0; mt < K.length; mt++) {
        const Ct = K[mt];
        if ((((je = O[Ct]) == null ? void 0 : je.itemId) ?? "") === b.id) {
          F = mt + 1, B = ((nt = O[Ct]) == null ? void 0 : nt.bonus) ?? "", ue = Ct;
          break;
        }
      }
      let ae = null;
      N && (W === b.id ? ae = "slot1" : Z === b.id ? ae = "slot2" : J === b.id && (ae = "slot3"));
      const it = L && ((rt = b.system) != null && rt.damage) ? b.system.damage : "", Te = L && typeof ((Ve = b.system) == null ? void 0 : Ve.range) == "string" ? (b.system.range || "").trim() : "", qe = ue ? Number((Je = O[ue]) == null ? void 0 : Je.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: F,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: ae,
        isEquipped: !!(ue || ae),
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
      const N = O[b] ?? {}, F = (N.itemId ?? "").trim(), B = te.find((qe) => qe.id === F), ue = R.find((qe) => qe.id === F), ae = (ue == null ? void 0 : ue.system) ?? {}, it = ae.size === "thrown", Te = (typeof ae.range == "string" ? (ae.range || "").trim() : "") || "—";
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
      const B = !!N, ue = ((Is = b.system) == null ? void 0 : Is.equipped) !== void 0 && ((Ss = b.system) == null ? void 0 : Ss.equipped) !== null ? !!b.system.equipped : B, ae = (b == null ? void 0 : b.system) ?? {}, it = typeof ae.range == "string" ? (ae.range || "").trim() : "", Te = ae.type ?? "", qe = (D[Te] ?? Te) || "—", je = ae.size ?? "", nt = (x[je] ?? je) || "", rt = [qe, nt].filter(Boolean).join(", ") || qe || "—", Ve = Te === "projectile" || je === "thrown", Je = ae.quantity, Ot = Je != null ? String(Je).trim() : "1", mt = String(F.bonus ?? "").trim(), Ct = String(ae.bonus ?? "").trim(), ci = mt || Ct || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? de,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: ci,
        damage: F.damage ?? ae.damage ?? "",
        rangeStr: it || "—",
        typeLabel: qe,
        typeAndSize: rt,
        quantity: Ot,
        quantityDisplay: Ve ? Ot : "—",
        isProjectile: Ve,
        equipped: ue,
        special: (ae.special ?? "").trim() || "—"
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
        level: zi((L.level ?? "").toString().trim()),
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
    const pe = (((os = this.actor.items) == null ? void 0 : os.contents) ?? []).filter((b) => b.type === "MikroChip"), re = pe.map((b) => ({ id: b.id, name: b.name, img: b.img })), we = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (b) => {
      var N, F, B;
      const L = [];
      return b !== 1 && L.push((((N = P.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && L.push((((F = P.slot2) == null ? void 0 : F.itemId) ?? "").trim()), b !== 3 && L.push((((B = P.slot3) == null ? void 0 : B.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((b) => !fe(1).includes(b.id)), e.microchipItemsSlot2 = re.filter((b) => !fe(2).includes(b.id)), e.microchipItemsSlot3 = re.filter((b) => !fe(3).includes(b.id)), e.microchipSlots = ce.map((b) => {
      const L = P[b] ?? {}, N = (L.itemId ?? "").trim(), F = pe.find((B) => B.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (F == null ? void 0 : F.name) || L.name || we,
        img: (F == null ? void 0 : F.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, N = P[L] ?? {}, F = (N.itemId ?? "").trim(), B = re.find((ue) => ue.id === F);
      e[`microchip${b}ItemId`] = F, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || N.name || we, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((b) => {
      var je, nt, rt, Ve;
      const L = b.id;
      let N = null;
      for (const Je of ce)
        if ((((je = P[Je]) == null ? void 0 : je.itemId) ?? "").trim() === L) {
          N = Je;
          break;
        }
      const F = !!N, B = ((nt = b == null ? void 0 : b.system) == null ? void 0 : nt.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", ae = B === "active", it = Number((rt = b == null ? void 0 : b.system) == null ? void 0 : rt.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Te = (((Ve = b == null ? void 0 : b.system) == null ? void 0 : Ve.description) ?? "").trim(), qe = Te ? Te.length > 60 ? Te.slice(0, 57) + "…" : Te : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ue,
        description: qe,
        kp: it,
        isActive: ae,
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
    const Et = !!((vs = (bs = game.combat) == null ? void 0 : bs.combatants) != null && vs.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Et, e.canEditInitiative = !!((ks = game.user) != null && ks.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var y, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-CCNCcLQp.mjs");
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
      const { openRollSheetForSkill: c } = await import("./roll-sheet-CCNCcLQp.mjs");
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
    const f = (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
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
      const c = i.currentTarget, l = c.dataset.skill, m = ((g = c.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-CCNCcLQp.mjs");
      h(this.actor, l, m);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var w, k, I, _, O, C, E;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), m = l == null ? void 0 : l.dataset.slot;
      if (!m) return;
      const g = (((k = (((w = this.actor.system) == null ? void 0 : w.weapons) ?? {})[m]) == null ? void 0 : k.itemId) ?? "").trim();
      if (!g) return;
      const v = ((_ = (I = this.actor.items).get) == null ? void 0 : _.call(I, g)) ?? ((C = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (K) => K.id === g));
      (E = v == null ? void 0 : v.sheet) == null || E.render(!0);
    });
    const p = (i, c) => {
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
      i.preventDefault(), p(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), p(i.currentTarget, i);
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
        var E;
        return (((E = h[C]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (k) return;
        let C = w.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const E = new Set(w);
        if (!C) {
          const K = v.find((U) => !E.has(U));
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
        const C = w.filter((E) => E !== k);
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
        var E;
        return (((E = h[C]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (k) return;
        let C = w.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const E = new Set(w);
        if (!C) {
          const K = v.find((U) => !E.has(U));
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
        const C = w.filter((E) => E !== k);
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
    const u = this, a = (i) => {
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
      h && (m.contains(h) || u.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), a(m));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var p, u, a;
    const e = {};
    for (const o of s.elements) {
      if (!o.name || o.disabled || o.type === "radio" && !o.checked || o.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      o.type === "checkbox" ? y = o.checked : o.type === "number" ? y = o.value === "" ? 0 : Number(o.value) : y = o.value ?? "", foundry.utils.setProperty(e, o.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((p = this.actor.system) == null ? void 0 : p.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, d = ["head", "torso", "arms", "legs"];
    for (const o of d) {
      const y = ((a = n[o]) == null ? void 0 : a.value) ?? 0, r = f[o] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${o}`, Q._healthStatusFromRatio(r, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, d, p, u, a, o, y, r, i, c, l, m;
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
          const w = (((d = g.system) == null ? void 0 : d.kind) ?? "passive").toString();
          if (w === "module") {
            (u = (p = ui.notifications) == null ? void 0 : p.warn) == null || u.call(p, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
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
          const I = w === "active" ? "active" : "passive", _ = Array.isArray((a = k[I]) == null ? void 0 : a.items) ? k[I].items.slice() : Array.isArray(k[I]) ? k[I].slice() : [];
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
            k = ((r = (await v.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : r.id) ?? k;
          }
          if (w) {
            const I = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (I.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = _ ? _.split(/\s*,\s*/).filter((K) => O.includes(K)) : [], E = C.filter((K) => {
              var U;
              return (((U = I[K]) == null ? void 0 : U.itemId) ?? "").trim() === k;
            });
            if (E.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((P) => !E.includes(P)).join(",")
              };
              for (const P of E)
                U[`system.weapons.${P}.itemId`] = "", U[`system.weapons.${P}.name`] = "", U[`system.weapons.${P}.damage`] = "", U[`system.weapons.${P}.bonus`] = "";
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
    var f, d, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var p, u, a, o, y, r;
    s.preventDefault(), s.stopPropagation(), (p = s.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    const d = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: d,
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
    }).map((y) => y.id), d = f.indexOf(t), p = f.indexOf(e);
    if (d === -1 || p === -1) return;
    f.splice(d, 1), f.splice(p, 0, t);
    const u = f.map((y, r) => ({
      _id: y,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(s) {
    var n, f, d;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
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
    var u, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${d}
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
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let p = "";
    t === "active" && n > 0 ? p = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (p = `<p><strong>KP:</strong> ${n}</p>`);
    const u = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${p}
      ${u}
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
    var d, p, u;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((u = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : u.id) ?? f;
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
    var u, a, o, y;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((o = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : o.id) ?? f;
    }
    const d = this.actor.system.abilities ?? {}, p = Array.isArray((y = d[e]) == null ? void 0 : y.items) ? d[e].items.slice() : Array.isArray(d[e]) ? d[e].slice() : [];
    p.includes(f) || p.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: p });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, d, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var p, u, a, o, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "MikroChip") return;
    let d = f.id;
    ((o = f.parent) == null ? void 0 : o.id) !== this.actor.id && (d = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? d), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: d,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(n) || 0;
    const d = this._getSkillHealthStatus(s);
    d === 1 ? f -= 6 : d === 2 && (f -= 3);
    const u = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, a = new Roll(u);
    await a.evaluate({ async: !0 });
    const { resultType: o, label: y } = Vt(a), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
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
    var d;
    const s = Number(((d = this.actor.system.skills) == null ? void 0 : d.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    var w, k;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, f = this.actor.items.filter((I) => I.type === "Fegyver");
    let d = null;
    t.itemId && (d = f.find((I) => I.id === t.itemId) ?? null);
    const p = d && d.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, a = ((w = d == null ? void 0 : d.system) == null ? void 0 : w.type) || "kinetic", o = (((k = d == null ? void 0 : d.system) == null ? void 0 : k.skillKey) ?? "").trim(), y = o && n[o] !== void 0 ? o : a === "explosive" ? "grenadeUse" : "firearms", r = Number(n[y] || 0) || 0, i = u + r, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, m = new Roll(l);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: g } = Vt(m), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, a, o, y, r, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    let n = ((a = (u = t.items).get) == null ? void 0 : a.call(u, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(f);
    await d.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
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
    form: foundry.utils.mergeObject(((Fs = j(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Es = j(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Es.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...(($s = (Ps = j(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.window) == null ? void 0 : $s.contentClasses) ?? [],
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
function Mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var xs, zs, Ms, Rs;
const he = class he extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, d, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const d = await super.render(s, e), p = this.element, u = this.form ?? this.element, a = f.scrollState, o = f.focus, y = typeof (a == null ? void 0 : a.formScrollTop) == "number" || typeof (a == null ? void 0 : a.windowScrollTop) == "number", r = () => {
      var i, c;
      if (this._applyScrollState(p, a), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const l = ((i = u.querySelector) == null ? void 0 : i.call(u, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (c = u.querySelector) == null ? void 0 : c.call(u, `[name="${CSS.escape(o.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = o.selectionStart ?? 0, l.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(p, a);
    };
    return (y || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), d;
  }
  async _prepareContext(s) {
    var He, Ye, Ge, ct, ee, ye, ie, lt, Me, Ne, ut, We, Xe, At, Ft, ft, Et, yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((He = this.actor) == null ? void 0 : He.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, d = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, p = (lt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && lt.call(ie, "halfcover") ? 3 : 0, u = (Ne = (Me = t == null ? void 0 : t.statuses) == null ? void 0 : Me.has) != null && Ne.call(Me, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + d + p + u;
    const a = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], o = ((We = t == null ? void 0 : t.system) == null ? void 0 : We.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (o.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((T) => y.includes(T)) : [], c = a.filter((T) => T.type === "Fegyver"), l = c.map((T) => ({ id: T.id, name: T.name, img: T.img })), m = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((T) => !h.includes(T)), v = [...h, ...g], w = v.filter((T) => {
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
      const Ie = !!M, ne = (T == null ? void 0 : T.system) ?? {}, Le = typeof ne.range == "string" ? (ne.range || "").trim() : "", Ce = ne.type ?? "", Se = (k[Ce] ?? Ce) || "—", Re = ne.size ?? "", tt = (I[Re] ?? Re) || "", st = [Se, tt].filter(Boolean).join(", ") || Se || "—", Pt = Ce === "projectile" || Re === "thrown", $t = ne.quantity != null ? String(ne.quantity).trim() : "1", xt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", zt = (ne.damage ?? G.damage ?? "").trim() || "";
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
        isProjectile: Pt,
        equipped: Ie,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const _ = a.filter((T) => T.type === "Pancel");
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
        level: Mi((z.level ?? "").toString().trim()),
        special: (z.special ?? z.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const O = ((At = (Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.gear) == null ? void 0 : At.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], E = a.filter((T) => T.type === "MikroChip");
    e.microchipsTable = E.map((T) => {
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
    const K = a.filter((T) => T.type === "Targy");
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
    const U = a.filter((T) => T.type === "Egyeb");
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
    const P = (((Ft = e.weaponsTable) == null ? void 0 : Ft.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((Et = e.microchipsTable) == null ? void 0 : Et.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !P;
    const W = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = a.filter((T) => T.type === "Kepesseg" || T.type === "ability").map((T) => {
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
    ], se = (Qe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Qe.initiativeRanges, le = Array.isArray(se) ? se.map((T) => ({ min: Number(T.min) ?? 0, max: Number(T.max) ?? 0, kp: Math.min(10, Math.max(0, Number(T.kp) ?? 0)) })) : [], re = (le.length > 0 ? le : V).slice().sort((T, z) => T.min - z.min), we = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < we && (ce = [...ce, ...Array(we - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((T, z) => ({
      ...T,
      isFirst: z === 0,
      isLast: z === ce.length - 1
    }));
    let fe = 0;
    if (typeof x == "number" && x >= 0 && re.length > 0) {
      const T = re[0], z = re[re.length - 1];
      let M = null;
      x <= T.max ? M = T : x >= z.min ? M = z : M = re.find((G) => x >= G.min && x <= G.max), M && (fe = M.kp);
    }
    const Ke = re.length > 0 ? re[re.length - 1] : null, Ue = Math.min(10, Ke ? Ke.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, Ue)).map((T, z) => {
      const M = z + 1, G = !!Number(Oe[T]), Ie = M <= fe;
      return { index: M, used: G, usable: Ie };
    }), ot = Math.ceil(Be.length / 2);
    return e.kpDotsRow1 = Be.slice(0, ot), e.kpDotsRow2 = Be.slice(ot), e.canEditInitiative = !!((Tt = game.user) != null && Tt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((et = (Dt = e.system) == null ? void 0 : Dt.combat) == null ? void 0 : et.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var a, o, y;
    super._attachFrameListeners(s);
    const e = ((a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (r) => {
      var l, m, h;
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const i = ((h = (m = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (r) => {
      var l, m, h;
      r.preventDefault();
      const i = (m = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (h = c == null ? void 0 : c.sheet) == null || h.render(!0);
    });
    const n = (r) => {
      var l, m;
      const i = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      (m = c == null ? void 0 : c.sheet) == null || m.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (r) => {
      var m, h, g, v;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (r) => {
      var m;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-CCNCcLQp.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var l, m, h, g, v;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((m = i == null ? void 0 : i.dataset) != null && m.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CCNCcLQp.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (r) => {
      var m, h;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 10 || !this.actor) return;
      const l = !!Number((h = (m = this.actor.system) == null ? void 0 : m.resources) == null ? void 0 : h[`kpDot${c}`]);
      await this.actor.update({ [`system.resources.kpDot${c}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var h, g;
      r.preventDefault();
      const i = r.currentTarget, c = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || c;
      if (!c || !this.actor) return;
      const { openRollSheetForSkill: m } = await import("./roll-sheet-CCNCcLQp.mjs");
      m(this.actor, c, l);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      var c, l;
      r.preventDefault();
      const i = (l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (r) => {
      var l, m, h, g;
      r.preventDefault();
      const i = (((m = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId) ?? ((g = (h = r.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const c = this.actor.items.get(i);
      c && (c.type === "Kepesseg" || c.type === "ability" ? await this._postAbilityToChat(i) : (c.type === "MikroChip" || c.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, v, w, k, I, _;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, c = (k = (w = r.currentTarget) == null ? void 0 : w.dataset) == null ? void 0 : k.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((I = this.actor.system) == null ? void 0 : I.abilities) ?? {}, h = (Array.isArray((_ = l[i]) == null ? void 0 : _.items) ? l[i].items.slice() : []).filter((O) => O !== c);
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
      const l = this.actor, m = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      m && (h[`system.weapons.${m}.itemId`] = "", h[`system.weapons.${m}.name`] = "", h[`system.weapons.${m}.damage`] = "", h[`system.weapons.${m}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      var c, l;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var h, g, v, w;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((g = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
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
    }), t.on("click", ".karakter-item-delete", async (r) => {
      var l, m;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((m = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : m.itemId) ?? "").trim();
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
      const m = l.uuid;
      r.dataTransfer && (r.dataTransfer.setData("text/plain", m), r.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: m })), r.dataTransfer.effectAllowed = "copyMove"), typeof ((v = r.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && r.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, p = (r) => {
      if (!r) return;
      const i = d._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && d.actor.update(i).catch((c) => console.warn("VoidNpcSheet save failed", c));
    }, u = (r) => {
      var i, c, l;
      return r && (((c = (i = d.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || d.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(d.id)}`)));
    };
    d._votvNpcBlur = (r) => {
      var h;
      const i = r.target;
      if (!i || !i.form) return;
      const c = i.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const l = i.form;
      if (!u(l)) return;
      const m = r.relatedTarget;
      m && (l.contains(m) || d.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(d.id)}`))) || p(l);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0), d._votvNpcItemHookRegistered || (d._votvNpcItemUpdateHook = (r, i, c) => {
      var l;
      d.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, d._votvNpcItemDeleteHook = (r, i, c) => {
      var l;
      d.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, Hooks.on("updateItem", d._votvNpcItemUpdateHook), Hooks.on("deleteItem", d._votvNpcItemDeleteHook), d._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const d = this._getFormDataForUpdate(e);
      Object.keys(d).length > 0 && await this.actor.update(d).catch((p) => console.warn("VoidNpcSheet save on preClose failed", p));
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
    var k, I, _, O, C;
    const e = this.actor;
    if (!e) return;
    const n = (((k = e.system) == null ? void 0 : k.weapons) ?? {})[s] ?? {}, f = ((I = e.system) == null ? void 0 : I.skills) ?? {}, d = ((_ = e.items) == null ? void 0 : _.filter((E) => E.type === "Fegyver")) ?? [];
    let p = null;
    n.itemId && (p = d.find((E) => E.id === n.itemId) ?? null);
    const u = p && p.name || n.name || "Fegyver", a = Number(n.bonus || 0) || 0, o = ((O = p == null ? void 0 : p.system) == null ? void 0 : O.type) || "kinetic", y = (((C = p == null ? void 0 : p.system) == null ? void 0 : C.skillKey) ?? "").trim(), r = y && f[y] !== void 0 ? y : o === "explosive" ? "grenadeUse" : "firearms", i = Number(f[r] || 0) || 0, c = a + i, m = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(m);
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
    var u, a, o, y, r, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    const n = ((a = (u = t.items).get) == null ? void 0 : a.call(u, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (c = ui.notifications) == null ? void 0 : c.warn) == null || h.call(c, ((m = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : m.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const d = new Roll(f);
    await d.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
  async _onDropItem(s, e) {
    var o, y, r, i, c, l, m, h, g, v, w, k, I, _, O, C, E, K, U;
    if (!this.actor) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const n = ((P) => {
      var Z;
      if (!P) return null;
      const W = P.uuid ?? P.documentUuid ?? ((Z = P.data) == null ? void 0 : Z.uuid) ?? (typeof P == "string" ? P : null);
      if (W) return W;
      if (typeof P == "object") {
        for (const J of Object.values(P))
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
    const d = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const P = (((l = f.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (P === "module") {
        (h = (m = ui.notifications) == null ? void 0 : m.warn) == null || h.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let W = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== d.id) {
        const oe = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        W = ((v = (await d.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : v.id) ?? W;
      }
      const Z = ((w = d.system) == null ? void 0 : w.abilities) ?? {}, J = P === "active" ? "active" : "passive", Y = Array.isArray((k = Z[J]) == null ? void 0 : k.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(W) || Y.push(W), await d.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = f.parent) == null ? void 0 : I.id) === d.id) return;
    const p = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const a = (_ = (await d.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && a) {
      const P = ((O = d.system) == null ? void 0 : O.weapons) ?? {}, W = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (P.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((R) => W.includes(R)) : [];
      let Y = W.find((R) => {
        var te;
        return !(((te = P[R]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = W.find((R) => !J.includes(R)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((R) => W.includes(R));
      await d.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: a,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = f.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((E = f.system) == null ? void 0 : E.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && a) {
      const P = ((U = (K = d.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = P[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await d.update({
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
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let p = "";
    t === "active" && n > 0 ? p = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (p = `<p><strong>KP:</strong> ${n}</p>`);
    const u = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${p}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var u, a, o, y, r, i;
    const e = (a = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : a.get(s);
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
    const d = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${d}
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
        const d = (n.value ?? "").trim();
        if (d === "") continue;
        f = Number(d) || 0;
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
    form: foundry.utils.mergeObject(((xs = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((zs = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : zs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Rs = (Ms = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.window) == null ? void 0 : Rs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Jt = he;
function Ri(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var js, Ks, Us, Bs;
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
    var n, f, d, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const f = this.element, d = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const m = document.activeElement, h = d.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (p.focus = {
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
    const a = this.element, o = this.form ?? this.element, y = p.scrollState, r = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
      var m, h;
      if (this._applyScrollState(a, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((m = o.querySelector) == null ? void 0 : m.call(o, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = o.querySelector) == null ? void 0 : h.call(o, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(a, y);
    };
    return (i || r) && (requestAnimationFrame(c), setTimeout(c, 0), setTimeout(c, 50), setTimeout(c, 150), setTimeout(c, 300), setTimeout(c, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (a) => {
      var o;
      return ((o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, a)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${a}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const p = Number(f == null ? void 0 : f.value) || 0, u = Number(d == null ? void 0 : d.value) || 0;
    n.textContent = String(p + u);
  }
  async _prepareContext(s) {
    var E, K, U, P, W, Z, J, Y, oe, R, te, de, Oe;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((E = e.system) == null ? void 0 : E.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, d = "— Nincs fegyver —", p = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = p.map((D) => {
      const x = (D == null ? void 0 : D.system) ?? {}, V = x.type ?? "", se = (n[V] ?? V) || "—", le = x.size ?? "", pe = (f[le] ?? le) || "", re = [se, pe].filter(Boolean).join(", ") || se || "—", we = V === "projectile" || le === "thrown", ce = x.quantity != null ? String(x.quantity).trim() : "1", fe = (typeof x.range == "string" ? (x.range || "").trim() : "") || "—";
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
        typeAndSize: re,
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
        level: Ri((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: V
      };
    });
    const a = (((P = this.actor.items) == null ? void 0 : P.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = a.map((D) => {
      var we, ce, fe;
      const x = ((we = D == null ? void 0 : D.system) == null ? void 0 : we.abilityType) ?? "", V = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—", se = x === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), re = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: V,
        description: re,
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
    const y = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", r = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === y).sort((D, x) => {
      const V = typeof D.sort == "number" ? D.sort : 0, se = typeof x.sort == "number" ? x.sort : 0;
      return V - se;
    }), i = [];
    let c = 0, l = 0, m = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of r) {
      const x = (D == null ? void 0 : D.system) ?? {}, V = Number(x.level ?? 0) || 0, se = (x.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (m += le);
      const pe = x.abilities ?? {}, re = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
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
    const g = r.length;
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
    var p;
    super._attachFrameListeners(s);
    const e = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.form ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (u) => {
      var y, r, i;
      u.preventDefault(), u.stopPropagation();
      const a = ((i = (r = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (c) => {
          c && this.actor.update({ img: c });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (u) => {
      var y, r, i;
      u.preventDefault();
      const a = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var y, r;
      if (u.preventDefault(), !u.altKey) return;
      const a = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      !a || !this.actor.items.get(a) || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var r;
      const a = u.currentTarget, o = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (a.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var y, r;
      const a = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!a) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "Pancel" || await o.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var o, y, r, i;
      u.preventDefault();
      const a = (y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId;
      a && ((i = (r = this.actor.items.get(a)) == null ? void 0 : r.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var o, y;
      if (u.preventDefault(), !u.altKey) return;
      const a = (y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId;
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var y, r, i, c;
      u.preventDefault();
      const a = (((r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId) ?? ((c = (i = u.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      !o || o.type !== "MikroChip" && o.type !== "Egyeb" || await this._postItemToChat(a);
    }), t.on("click", ".jarmu-unit-damage-button", async (u) => {
      var y;
      u.preventDefault(), u.stopPropagation();
      const a = u.currentTarget, o = (((y = a == null ? void 0 : a.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      o && await this._rollUnitDamage(o);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (u) => {
      var r, i;
      const a = u.currentTarget, o = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      n._draggingUnitId = o;
      const y = (i = u.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", o), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(a, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (u) => {
      var r, i, c, l;
      const a = (i = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : i.itemId, o = n._draggingUnitId;
      if (!o || !a || o === a) return;
      u.preventDefault();
      const y = (c = u.originalEvent) == null ? void 0 : c.dataTransfer;
      y && (y.dropEffect = "move"), (l = u.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (u) => {
      var a;
      (a = u.currentTarget) == null || a.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (u) => {
      var g, v, w, k;
      u.preventDefault(), (g = u.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const a = (w = (v = u.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : w.itemId;
      let o = n._draggingUnitId;
      const y = (k = u.originalEvent) == null ? void 0 : k.dataTransfer;
      if (!o && y && (o = y.getData("text/plain")), n._draggingUnitId = null, !o || !a || o === a) return;
      const r = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((I) => I.type === r).sort((I, _) => {
        const O = typeof I.sort == "number" ? I.sort : 0, C = typeof _.sort == "number" ? _.sort : 0;
        return O - C;
      }).map((I) => I.id), l = c.indexOf(o), m = c.indexOf(a);
      if (l === -1 || m === -1) return;
      c.splice(l, 1), c.splice(m, 0, o);
      const h = c.map((I, _) => ({
        _id: I,
        sort: (_ + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (u) => {
      var r, i, c, l, m, h, g, v, w, k;
      u.preventDefault();
      const a = (l = (c = (i = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : l.abilityRef, o = (v = (g = (h = (m = u.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (a)
        try {
          y = await fromUuid(a);
        } catch {
          y = null;
        }
      !y && o && (y = ((w = game.items) == null ? void 0 : w.get(o)) ?? null), (k = y == null ? void 0 : y.sheet) == null || k.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (u) => {
      var i, c, l, m;
      u.preventDefault();
      const a = (c = (i = u.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), o = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.abilityRef, y = (m = a == null ? void 0 : a.dataset) == null ? void 0 : m.abilityId, r = o || y;
      r && await this._postUnitAbilityToChat(r);
    });
    const f = (u) => {
      if (!u) return;
      const a = this._getFormDataForUpdate(u);
      Object.keys(a).length !== 0 && this.actor.update(a).catch((o) => console.warn("VoidJarmuSheet save failed", o));
    }, d = (u) => {
      var a, o, y;
      return u && (((o = (a = this.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, u)) || this.id && ((y = u.closest) == null ? void 0 : y.call(u, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (u) => {
      var i;
      const a = u.target;
      if (!a || !a.form) return;
      const o = a.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const y = a.form;
      if (!d(y)) return;
      const r = u.relatedTarget;
      r && (y.contains(r) || this.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var l, m, h;
      const a = u.currentTarget, o = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (a.value ?? "").trim(), i = r === "" ? 0 : Number(r), c = (m = a.closest) == null ? void 0 : m.call(a, ".jarmu-unit-row");
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
      const a = u.currentTarget, o = (i = a == null ? void 0 : a.dataset) == null ? void 0 : i.itemId;
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
    var u, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var p, u, a, o, y, r, i, c, l;
    const e = this.actor;
    if (!e) return;
    const t = ((u = (p = e.items).get) == null ? void 0 : u.call(p, s)) ?? ((o = (a = e.items.contents) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (m) => m.id === s));
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
    const d = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: d
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let p = "";
    t === "active" && n > 0 ? p = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (p = `<p><strong>KP:</strong> ${n}</p>`);
    const u = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${p}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: a,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var u, a;
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
    const f = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(n.type)) return super._onDropItem(s, e);
    if (((a = n.parent) == null ? void 0 : a.id) === f.id) return;
    const p = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [p]);
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
    form: foundry.utils.mergeObject(((js = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : js.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ks = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Bs = (Us = j(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Us.window) == null ? void 0 : Bs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Kt = be;
function ji(S) {
  if (S == null) return 0;
  const s = String(S).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function As(S) {
  var e;
  return (((e = S == null ? void 0 : S.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var f;
    return t + ji((f = n.system) == null ? void 0 : f.veszely);
  }, 0);
}
var Hs;
const at = class at extends Kt {
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
    }, f = { Kicsi: -10, Közepes: 0, Nagy: 10 }, d = () => {
      var O, C, E, K, U, P, W;
      const a = ((O = e.querySelector) == null ? void 0 : O.call(e, "form")) ?? e, o = (C = a.querySelector) == null ? void 0 : C.call(a, 'select[name="system.identity.assignment"]'), y = (E = a.querySelector) == null ? void 0 : E.call(a, 'select[name="system.identity.subAssignment"]'), r = (K = a.querySelector) == null ? void 0 : K.call(a, "input.bazis-threat-total"), i = (U = a.querySelector) == null ? void 0 : U.call(a, 'input[name="system.combat.threatBonus"]');
      if (!o || !r || !i) return;
      const c = o.value ?? "", l = (y == null ? void 0 : y.value) ?? "", m = t[c] ?? 0, h = n[l] ?? 0, g = (((W = (P = this.actor) == null ? void 0 : P.items) == null ? void 0 : W.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", w = f[v] ?? 0, k = Number(i.value ?? 0) || 0, I = As(this.actor), _ = m + h + w + k + I;
      r.value = _;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', d);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, f = n.identity ?? {}, d = n.combat ?? {}, p = f.assignment ?? "", u = f.subAssignment ?? "", a = {
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
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, r = a[p] ?? 0, i = o[u] ?? 0, c = e.sizeForSelect ?? "Kicsi", l = y[c] ?? 0, m = Number(d.threatBonus ?? 0) || 0, h = As(this.actor), g = r + i + l + m + h;
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
  j(at, at, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Hs = j(at, at, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Zt = at;
var Gs, Ws, Vs, Js;
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  _getScrollContainers(s) {
    var n, f, d, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.vallalkozas-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((d = s.querySelector) == null ? void 0 : d.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    var a, o, y;
    const t = this.element, n = this.form ?? this.element;
    let f = { scrollState: {}, focus: null };
    if (t) {
      f.scrollState = this._saveScrollState(t);
      const r = document.activeElement, i = (a = n == null ? void 0 : n.contains) == null ? void 0 : a.call(n, r), c = r && (r.tagName === "INPUT" && r.type !== "checkbox" && r.type !== "radio" || r.tagName === "TEXTAREA");
      i && c && (f.focus = {
        name: r.name || null,
        id: r.id || null,
        selectionStart: "selectionStart" in r ? r.selectionStart : 0,
        selectionEnd: "selectionEnd" in r ? r.selectionEnd : 0
      });
    }
    const d = await super.render(s, e), p = this.element, u = this.form ?? this.element;
    if (p && this._applyScrollState(p, f.scrollState), f.focus && u) {
      let r = null;
      if (f.focus.name && (r = ((o = u.querySelector) == null ? void 0 : o.call(u, `[name="${CSS.escape(f.focus.name)}"]`)) ?? null), !r && f.focus.id && (r = ((y = u.querySelector) == null ? void 0 : y.call(u, `#${CSS.escape(f.focus.id)}`)) ?? null), r && typeof r.focus == "function" && (r.focus(), "setSelectionRange" in r))
        try {
          r.setSelectionRange(f.focus.selectionStart ?? 0, f.focus.selectionEnd ?? 0);
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
    }, p = "— Nincs fegyver —", u = ((m = t.items) == null ? void 0 : m.contents) ?? [], a = u.filter((k) => k.type === "Fegyver");
    e.weaponsTable = a.map((k) => {
      const I = k.system ?? {}, _ = I.type ?? "", O = (f[_] ?? _) || "—", C = I.size ?? "", E = (d[C] ?? C) || "", K = [O, E].filter(Boolean).join(", ") || O || "—", U = _ === "projectile" || C === "thrown", P = I.quantity != null ? String(I.quantity).trim() : "1", W = (typeof I.range == "string" ? (I.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: k.id,
        actorId: t.id,
        name: k.name ?? p,
        img: k.img ?? "",
        bonus: String(I.bonus ?? "").trim() || "0",
        damage: I.damage ?? "",
        rangeStr: W || "—",
        typeLabel: O,
        typeAndSize: K,
        quantity: P,
        quantityDisplay: U ? P : "—",
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
      var U, P, W;
      const I = ((U = k.system) == null ? void 0 : U.abilityType) ?? "", _ = I === "active" ? "Aktív" : I === "passive" ? "Passzív" : I || "—", O = I === "active", C = Number((P = k.system) == null ? void 0 : P.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0, E = (((W = k.system) == null ? void 0 : W.description) ?? "").trim(), K = E ? E.length > 60 ? `${E.slice(0, 57)}…` : E : "—";
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
    const r = u.filter((k) => k.type === "Targy");
    e.itemsTable = r.map((k) => {
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
        const C = Number(O.baseRoll ?? 0) || 0, E = C > 0 ? C * k : Number(O.difficulty ?? 0) || 0, K = E - I;
        return {
          ...O,
          baseRoll: C,
          difficulty: E,
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
    var p;
    super._attachFrameListeners(s);
    const e = this, t = ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, n = t ? $(t) : $([]);
    if (!this.isEditable) return;
    n.on("click", ".vallalkozas-employee-add", async (u) => {
      var y;
      if (u.preventDefault(), !this.actor) return;
      const a = this.actor.system ?? {}, o = Array.isArray((y = a.vallalkozas) == null ? void 0 : y.employees) ? a.vallalkozas.employees.slice() : [];
      o.push({ type: "", level: 0, count: 0, bonus: "" }), await this.actor.update({ "system.vallalkozas.employees": o });
    }), n.on("click", ".vallalkozas-employee-delete", async (u) => {
      var i, c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const a = ((c = (i = u.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", o = Number(a), y = this.actor.system ?? {}, r = Array.isArray((l = y.vallalkozas) == null ? void 0 : l.employees) ? y.vallalkozas.employees.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= r.length || (r.splice(o, 1), await this.actor.update({ "system.vallalkozas.employees": r }));
    }), n.on("click", ".vallalkozas-production-add", async (u) => {
      var y;
      if (u.preventDefault(), !this.actor) return;
      const a = this.actor.system ?? {}, o = Array.isArray((y = a.vallalkozas) == null ? void 0 : y.productionLines) ? a.vallalkozas.productionLines.slice() : [];
      o.push({ product: "", count: 0, time: "" }), await this.actor.update({ "system.vallalkozas.productionLines": o });
    }), n.on("click", ".vallalkozas-production-delete", async (u) => {
      var i, c, l;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const a = ((c = (i = u.currentTarget) == null ? void 0 : i.dataset) == null ? void 0 : c.index) ?? "", o = Number(a), y = this.actor.system ?? {}, r = Array.isArray((l = y.vallalkozas) == null ? void 0 : l.productionLines) ? y.vallalkozas.productionLines.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= r.length || (r.splice(o, 1), await this.actor.update({ "system.vallalkozas.productionLines": r }));
    }), n.on("click", ".vallalkozas-mission-add", async (u) => {
      if (u.preventDefault(), !this.actor) return;
      const o = (this.actor.system ?? {}).vallalkozas ?? {}, y = Array.isArray(o.militiaMissions) ? o.militiaMissions.slice() : [], r = Number(o.level ?? 1) || 1, i = Number(o.militiaPower ?? 0) || 0, c = Math.floor(Math.random() * 100) + 1, l = c * r, m = l - i;
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
      const a = ((l = (c = u.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.index) ?? "", o = Number(a), r = (this.actor.system ?? {}).vallalkozas ?? {}, i = Array.isArray(r.militiaMissions) ? r.militiaMissions.slice() : [];
      !Number.isInteger(o) || o < 0 || o >= i.length || (i.splice(o, 1), await this.actor.update({ "system.vallalkozas.militiaMissions": i }));
    }), n.on("click", ".karakter-item-chat", async (u) => {
      var y, r, i, c;
      u.preventDefault();
      const a = (((r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId) ?? ((c = (i = u.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "data-item-id")) ?? "").trim();
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      o && (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(a);
    }), n.on("click", ".vallalkozas-egyeb-delete", async (u) => {
      var o, y;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const a = (((y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), n.on("click", ".vallalkozas-raktar-table .karakter-inventory-item-name, .vallalkozas-raktar-table .karakter-equipment-icon", (u) => {
      var y, r, i;
      u.preventDefault();
      const a = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!a || !this.actor) return;
      const o = this.actor.items.get(a);
      (i = o == null ? void 0 : o.sheet) == null || i.render(!0);
    }), n.on("change", ".vallalkozas-item-quantity-input", async (u) => {
      var i;
      const a = u.currentTarget, o = (((i = a == null ? void 0 : a.dataset) == null ? void 0 : i.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Targy") return;
      const r = (a.value ?? "").trim();
      await y.update({ "system.quantity": r });
    }), n.on("click", ".vallalkozas-item-delete", async (u) => {
      var o, y;
      if (u.preventDefault(), !u.altKey || !this.actor) return;
      const a = (((y = (o = u.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      a && await this.actor.deleteEmbeddedDocuments("Item", [a]);
    });
    const f = (u) => {
      if (!u || !this.actor) return;
      const a = e._getFormDataForUpdate(u);
      Object.keys(a).length !== 0 && e.actor.update(a).catch((o) => console.warn("VoidVallalkozasSheet save failed", o));
    }, d = (u) => {
      var a, o, y;
      return u && (((o = (a = e.element) == null ? void 0 : a.contains) == null ? void 0 : o.call(a, u)) || e.id && ((y = u.closest) == null ? void 0 : y.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var o, y, r;
      const a = ((o = u.target) == null ? void 0 : o.form) ?? ((r = (y = u.target) == null ? void 0 : y.closest) == null ? void 0 : r.call(y, "form"));
      d(a) && f(a);
    }, document.body.addEventListener("change", e._votvChange, !0);
  }
  async _onDropItem(s, e) {
    var a, o, y;
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
    const f = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb"].includes(n.type)) return super._onDropItem(s, e);
    if (((y = n.parent) == null ? void 0 : y.id) === f.id) return;
    const p = n.toObject(), u = foundry.utils.mergeObject(p, {
      system: { ...p.system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [u]);
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
    var u, a, o;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const d = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
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
    form: foundry.utils.mergeObject(((Gs = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Ws = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Js = (Vs = j(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.window) == null ? void 0 : Js.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Yt = ve;
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
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && e.document.update(p).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, f = (d) => {
      var p, u, a;
      return d && (((u = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : u.call(p, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const p = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ki, e;
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
  form: foundry.utils.mergeObject(((Zs = j(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Zs.form) ?? {}, { submitOnChange: !1 })
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
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && e.document.update(p).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, f = (d) => {
      var p, u, a;
      return d && (((u = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : u.call(p, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const p = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
X(Fe, "PARTS", foundry.utils.mergeObject(j(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ys = j(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 })
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
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && e.document.update(p).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, f = (d) => {
      var p, u, a;
      return d && (((u = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : u.call(p, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const p = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
X(Ee, "PARTS", foundry.utils.mergeObject(j(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xs = j(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !1 })
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
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && e.document.update(p).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, f = (d) => {
      var p, u, a;
      return d && (((u = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : u.call(p, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const p = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      f(p) && n(p);
    }, e._votvInput = (d) => {
      var a;
      const p = d.target;
      if ((p == null ? void 0 : p.name) === "name") return;
      const u = (p == null ? void 0 : p.form) ?? ((a = p == null ? void 0 : p.closest) == null ? void 0 : a.call(p, "form"));
      f(u) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(u), 300));
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
X(Pe, "PARTS", foundry.utils.mergeObject(j(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qs = j(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !0 })
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
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && e.document.update(p).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, f = (d) => {
      var p, u, a;
      return d && (((u = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : u.call(p, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const p = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
X($e, "PARTS", foundry.utils.mergeObject(j($e, $e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X($e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j($e, $e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ei = j($e, $e, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !1 })
}));
let ss = $e;
var ti;
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
      var a, o, y, r, i, c, l;
      if (!e.isEditable || !((o = (a = d.target) == null ? void 0 : a.closest) != null && o.call(a, ".profile")) && ((r = (y = d.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      d.preventDefault(), d.stopPropagation();
      const p = ((l = (c = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : c.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(d);
      Object.keys(p).length !== 0 && e.document.update(p).catch((u) => console.warn("VoidEgyebSheet save failed", u));
    }, f = (d) => {
      var p, u, a;
      return d && (((u = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : u.call(p, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const p = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
X(xe, "PARTS", foundry.utils.mergeObject(j(xe, xe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(xe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(xe, xe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ti = j(xe, xe, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 })
}));
let is = xe;
var si, ii;
const De = class De extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, a, o, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
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
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (r) => {
      var m, h, g, v, w, k;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && c && (l = ((w = game.items) == null ? void 0 : w.get(c)) ?? null), (k = l == null ? void 0 : l.sheet) == null || k.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (r) => {
      var m, h, g, v;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, l = i || c;
      l && await this._postAbilityToChat(l);
    }), n.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, v, w;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, l = Array.isArray((w = c.abilities) == null ? void 0 : w.items) ? c.abilities.items.slice() : [], m = l.indexOf(i), h = m >= 0 ? [...l.slice(0, m), ...l.slice(m + 1)] : l;
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
    const d = (r) => {
      if (!r) return;
      const i = e._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && e.document.update(i).catch((c) => console.warn("VoidJarmuEgysegSheet save failed", c));
    }, p = (r) => {
      var i, c, l;
      return r && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || e.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, l, m;
      const i = ((c = r.target) == null ? void 0 : c.form) ?? ((m = (l = r.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      p(i) && d(i);
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
      f.map(async (u) => {
        var a;
        if (!u) return null;
        try {
          const o = await fromUuid(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (a = game.items) == null ? void 0 : a.get(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((u, a) => ({ doc: u, ref: f[a] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: a }) => {
      var i, c;
      const o = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((c = u.system) == null ? void 0 : c.kp) ?? 0) || 0, r = o === "species";
      return {
        id: u.id,
        ref: a,
        name: u.name,
        img: u.img,
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let p = "";
    t === "active" && n > 0 ? p = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (p = `<p><strong>KP:</strong> ${n}</p>`);
    const u = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${p}
      ${u}
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
      const d = e.uuid ?? e.id, p = this.document.system ?? {}, u = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return u.push(d), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
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
    form: foundry.utils.mergeObject(((si = j(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : si.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ii = j(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : ii.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ns = De;
var ni, ri;
const _e = class _e extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, a;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (o) => {
      var c, l, m, h, g, v;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, r = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && r && (i = ((g = game.items) == null ? void 0 : g.get(r)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (o) => {
      var c, l, m, h;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, r = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId, i = y || r;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (o) => {
      var m, h, g;
      if (o.preventDefault(), !o.altKey) return;
      const y = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef;
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
      Object.keys(y).length !== 0 && e.document.update(y).catch((r) => console.warn("VoidHelyisegSheet save failed", r));
    }, p = (o) => {
      var y, r, i;
      return o && (((r = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : r.call(y, o)) || e.id && ((i = o.closest) == null ? void 0 : i.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var r, i, c;
      const y = ((r = o.target) == null ? void 0 : r.form) ?? ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
      p(y) && d(y);
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
      f.map(async (u) => {
        var a;
        if (!u) return null;
        try {
          const o = await fromUuid(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        } catch {
          const o = (a = game.items) == null ? void 0 : a.get(u);
          if (o && (o.type === "Kepesseg" || o.type === "ability")) return o;
        }
        return null;
      })
    )).map((u, a) => ({ doc: u, ref: f[a] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: a }) => {
      var i, c;
      const o = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((c = u.system) == null ? void 0 : c.kp) ?? 0) || 0, r = o === "species";
      return {
        id: u.id,
        ref: a,
        name: u.name,
        img: u.img,
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let p = "";
    t === "active" && n > 0 ? p = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (p = `<p><strong>KP:</strong> ${n}</p>`);
    const u = f ? `<p>${f}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${p}
      ${u}
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
      const d = e.uuid ?? e.id, p = this.document.system ?? {}, u = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return u.push(d), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
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
    form: foundry.utils.mergeObject(((ni = j(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : ni.form) ?? {}, { submitOnChange: !1 }),
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
let rs = _e;
const ai = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function oi(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, n, f, d, p, u;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = gi, CONFIG.Actor.dataModels.Npc = Lt, CONFIG.Actor.dataModels.Jarmu = vi, CONFIG.Actor.dataModels.Bazis = Ii, CONFIG.Actor.dataModels.Vallalkozas = xi, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = _s, CONFIG.Item.dataModels.weapon = _s, CONFIG.Item.dataModels.Pancel = Di, CONFIG.Item.dataModels.MikroChip = _i, CONFIG.Item.dataModels.Kepesseg = qs, CONFIG.Item.dataModels.ability = qs, CONFIG.Item.dataModels.Targy = Ci, CONFIG.Item.dataModels.Egyeb = Ni, CONFIG.Item.dataModels.Jarmuegyseg = Ai, CONFIG.Item.dataModels.Helyiseg = $i, (f = CONFIG.Actor).trackableAttributes ?? (f.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (d = CONFIG.Actor).typeLabels ?? (d.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", CONFIG.Actor.typeLabels.Vallalkozas = "Vállalkozás", (p = CONFIG.Combat).initiative ?? (p.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (u = CONFIG.Item).typeLabels ?? (u.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", rs, {
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
  Hooks.on("updateActor", (a, o, y, r) => {
    var I, _, O, C, E, K, U, P, W, Z, J, Y, oe;
    const i = a == null ? void 0 : a.id;
    if (!i) return;
    if ((a.type === "Karakter" || a.type === "Npc") && ((I = o == null ? void 0 : o.system) != null && I.combat) && "initiativeResult" in o.system.combat) {
      const R = Number((O = (_ = a.system) == null ? void 0 : _.combat) == null ? void 0 : O.initiativeResult), te = Number.isFinite(R) ? R : 0, de = game.combat;
      if (de) {
        const Oe = ((C = de.combatants) == null ? void 0 : C.contents) ?? Array.from(de.combatants ?? []);
        for (const D of Oe)
          if (((E = D.actor) == null ? void 0 : E.id) === i || D.actorId === i) {
            de.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: te }]).catch(() => {
            });
            break;
          }
      }
    }
    if (a.type === "Npc" && ((K = o == null ? void 0 : o.system) != null && K.identity) && "size" in o.system.identity) {
      const R = oi((P = (U = a.system) == null ? void 0 : U.identity) == null ? void 0 : P.size);
      a.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", a.name, te));
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
  }), Hooks.on("updateItem", (a, o, y, r) => {
    var m, h, g;
    const i = a == null ? void 0 : a.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || a.type !== "Fegyver") return;
    const c = ((m = i.system) == null ? void 0 : m.weapons) ?? {}, l = {};
    for (const [v, w] of Object.entries(c)) {
      if (!v.startsWith("slot")) continue;
      const k = ((w == null ? void 0 : w.itemId) ?? "").trim();
      !k || k !== a.id || (l[`system.weapons.${v}.name`] = a.name ?? "", l[`system.weapons.${v}.damage`] = ((h = a.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${v}.bonus`] = ((g = a.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, w, k, I, _, O, C, E, K, U, P, W, Z, J, Y, oe, R, te, de, Oe, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), d = (k = (w = f == null ? void 0 : f.flags) == null ? void 0 : w["vacuum-of-the-void"]) == null ? void 0 : k.weapon;
    if (!d) return;
    const p = d.actorId ?? ((I = f == null ? void 0 : f.speaker) == null ? void 0 : I.actor) ?? "";
    if (!p) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((_ = game.actors) == null ? void 0 : _.get(d.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(p));
    if (u || (u = ((E = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : E.flatMap((V) => {
      var se;
      return ((se = V.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === p || V.id === d.actorId))) ?? null), !u) return;
    const a = d.itemId ? ((U = (K = u.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, d.itemId)) ?? ((Z = (W = (P = u.items) == null ? void 0 : P.contents) == null ? void 0 : W.find) == null ? void 0 : Z.call(W, (x) => x.id === d.itemId)) : null;
    let o = (d.damageFormula ?? "").trim();
    if (o || (o = (((J = a == null ? void 0 : a.system) == null ? void 0 : J.damage) ?? "").trim()), !o && d.slotKey && (o = (((((Y = u.system) == null ? void 0 : Y.weapons) ?? {})[d.slotKey] ?? {}).damage ?? "").trim()), !o) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (R = game.i18n) == null ? void 0 : R.localize) == null ? void 0 : te.call(R, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(o);
    await y.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = d.targetName || "", c = d.hitLocationName || "", l = ((a == null ? void 0 : a.name) ?? (d.slotKey ? ((D = (((Oe = u.system) == null ? void 0 : Oe.weapons) ?? {})[d.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let m = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    c && (m += ` (${c})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: u }),
      flavor: m,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var d, p, u, a, o, y;
      if (!((p = (d = e.target) == null ? void 0 : d.closest) != null && p.call(d, "#actors"))) return;
      const t = (a = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : a.call(u, "[data-document-id]"), n = (o = t == null ? void 0 : t.getAttribute) == null ? void 0 : o.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, d;
    const e = ((t = game.actors) == null ? void 0 : t.filter((p) => p.type === "Karakter")) ?? [];
    for (const p of e) {
      const u = Nt.getTotalSpeedRaw(p), a = (n = p.effects) == null ? void 0 : n.find((o) => o.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !a) {
        const o = ((d = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : d.img) ?? "";
        await p.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: o,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: p.uuid
        }]).catch(() => {
        });
      } else u > 0 && a && await a.delete().catch(() => {
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
      const f = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: ai },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, d = await n.create(f);
      d && console.log("Vacuum of the Void | Default scene created:", d.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var d, p, u, a, o, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((d = game.actors) == null ? void 0 : d.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of t)
      try {
        const i = r.prototypeToken, c = ((p = i == null ? void 0 : i.bar1) == null ? void 0 : p.attribute) ?? "", l = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
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
Hooks.on("preCreateToken", (S, s, e) => {
  var d, p, u, a, o, y, r, i, c;
  const t = (d = game.votv) == null ? void 0 : d._dragSourceActorId, n = t ?? S.actorId ?? ((p = S._source) == null ? void 0 : p.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (u = game.actors) == null ? void 0 : u.get(n) : S.actor ?? null;
  if (f) {
    if (f.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((o = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : o.call(a, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
    if (f.type === "Vallalkozas")
      return (r = ui == null ? void 0 : ui.notifications) == null || r.warn("Vállalkozás nem helyezhető tokenként a térképre."), !1;
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
      const l = oi((c = (i = f.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
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
  var f, d, p;
  const t = S.actorId ? (f = game.actors) == null ? void 0 : f.get(S.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((p = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : p.call(d, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = S.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const Ui = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Bi(S) {
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    n && (n.type !== "Karakter" && n.type !== "Npc" || n.update(Ui).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    }));
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || (Bi(S), setTimeout(as, 0));
});
function as() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], d = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const p of d)
      !p || S.has(p.id) || (S.add(p.id), typeof p.render == "function" && p.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(as, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && setTimeout(as, 0);
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
  const t = S == null ? void 0 : S.object, n = ((f = t == null ? void 0 : t.document) == null ? void 0 : f.actor) ?? (t == null ? void 0 : t.actor);
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
    "background.src": ai,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var y, r, i, c;
  const t = ((y = S.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, d = t.weaponAttack, p = t.weapon, u = t.vsDefense, a = t.vsDefenseInfo;
  if (!n && !f && !d && !u) return;
  const o = (r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, ".dice-roll");
  if (o) {
    if (n && o.classList.add(`votv-${n}`), f) {
      const l = o.querySelector(".votv-crit-label");
      if (l)
        l.textContent = f;
      else {
        const m = o.querySelector(".dice-total"), h = (m == null ? void 0 : m.parentElement) ?? o, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = f, h.appendChild(g);
      }
    }
    if (d && p && (p.actorId || (i = S.speaker) != null && i.actor)) {
      const l = o.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? o;
      if (!o.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!p.isHit, w = p.targetName || "Célpont";
        g.textContent = v ? `Találat – ${w}` : `Nem talált – ${w}`, m.appendChild(g);
      }
      if (p.isHit && !o.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const w = p.hitLocationRoll, k = p.hitLocationName;
        v.textContent = w != null && k ? `Sebzés (Találati Hely ${w} - ${k})` : "Sebzés", v.dataset.actorId = String(p.actorId ?? ((c = S.speaker) == null ? void 0 : c.actor) ?? ""), v.dataset.itemId = String(p.itemId ?? ""), v.dataset.slotKey = String(p.slotKey ?? ""), v.dataset.targetName = String(p.targetName ?? ""), v.dataset.hitLocationName = String(p.hitLocationName ?? ""), v.dataset.messageId = String(S.id ?? ""), m.appendChild(v);
      }
    }
    if (!d && u && a) {
      const l = o.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? o, h = !!a.isHit, g = a.targetName || "Célpont", v = a.hitLocationRoll, w = a.hitLocationName;
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
//# sourceMappingURL=vacuum-of-the-void-99zmJ3AA.mjs.map
