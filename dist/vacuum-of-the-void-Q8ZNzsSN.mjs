var mi = Object.defineProperty;
var pi = Object.getPrototypeOf;
var fi = Reflect.get;
var yi = (S, s, e) => s in S ? mi(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var ee = (S, s, e) => yi(S, typeof s != "symbol" ? s + "" : s, e);
var R = (S, s, e) => fi(pi(S), e, s);
const { HTMLField: gi, NumberField: A, SchemaField: H, StringField: q, BooleanField: pe, ArrayField: qt } = foundry.data.fields;
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
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
          }),
          torso: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
          }),
          arms: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
          }),
          legs: new H({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
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
            active: new pe({ required: !1, initial: !1 })
          }),
          slot2: new H({
            itemId: new q({ required: !1, blank: !0, initial: "" }),
            name: new q({ required: !1, blank: !0, initial: "" }),
            active: new pe({ required: !1, initial: !1 })
          }),
          slot3: new H({
            itemId: new q({ required: !1, blank: !0, initial: "" }),
            name: new q({ required: !1, blank: !0, initial: "" }),
            active: new pe({ required: !1, initial: !1 })
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
        biography: new gi({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Bt, SchemaField: hi } = foundry.data.fields;
class bi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new hi({
        body: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Bt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: vi, StringField: Ss, NumberField: ki } = foundry.data.fields;
class wi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new vi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new Ss({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new Ss({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new ki({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: Ii, StringField: Ts, NumberField: Si } = foundry.data.fields;
class Ti extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Ii({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new Ts({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new Ts({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
        storage: new Si({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: Di, NumberField: Gi, StringField: Ze } = foundry.data.fields;
class Ds extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Di({ required: !1, initial: !1 }),
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
const { BooleanField: _i, StringField: Mt } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new _i({ required: !1, initial: !1 }),
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
class Ci extends foundry.abstract.TypeDataModel {
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
const { NumberField: qi, StringField: Os } = foundry.data.fields;
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
      kp: new qi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: qs } = foundry.data.fields;
class Ni extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new qs({ required: !1, blank: !0, initial: "" }),
      quantity: new qs({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Li } = foundry.data.fields;
class Ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Li({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Gt, StringField: pt, SchemaField: Ns, ArrayField: Fi } = foundry.data.fields;
class Pi extends foundry.abstract.TypeDataModel {
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
const { NumberField: Ei, StringField: Rt, SchemaField: $i, ArrayField: xi } = foundry.data.fields;
class zi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ei({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new $i({
        items: new xi(
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
const { SchemaField: jt, StringField: we, NumberField: he, ArrayField: Wt } = foundry.data.fields;
class Mi extends Lt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vallalkozas: new jt({
        /** Vállalkozás fajtája (Szolgáltatások, Gyártás, Milícia). */
        kind: new we({ required: !1, blank: !0, initial: "" }),
        /** Vállalkozás szintje (legalább 1). */
        level: new he({ required: !1, integer: !0, min: 1, initial: 1 }),
        /** Alkalmazottak aktuális száma. */
        employeesCurrent: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Alkalmazottak maximuma. */
        employeesMax: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Szint által adott bónuszok (szabad szöveg). */
        levelBonuses: new we({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás típusa (Szolgáltatások fajtánál). */
        servicesType: new we({ required: !1, blank: !0, initial: "" }),
        /** Szolgáltatás bevétel / idő: numerikus rész (cr). */
        servicesIncomeAmount: new he({ required: !1, integer: !1, initial: 0 }),
        /** Szolgáltatás bevétel / idő: időegység szövege (pl. nap, hét, hónap). */
        servicesIncomePeriod: new we({ required: !1, blank: !0, initial: "" }),
        /** Marketing típusa (Szolgáltatások fajtánál). */
        marketingType: new we({ required: !1, blank: !0, initial: "" }),
        /** Marketing ára / hét (cr). */
        marketingCostPerWeek: new he({ required: !1, integer: !1, initial: 0 }),
        /** Marketing profit (%). */
        marketingProfitPercent: new he({ required: !1, integer: !1, initial: 0 }),
        /** Alkalmazottak táblázat: Típus, Szint, Szám, Bónusz. */
        employees: new Wt(
          new jt({
            type: new we({ required: !1, blank: !0, initial: "" }),
            level: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
            count: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
            bonus: new we({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        /** Gyártási specializáció (Gyártás fajtánál). */
        manufacturingSpecialization: new we({ required: !1, blank: !0, initial: "" }),
        /** Gyártható dolgok listája (többsoros szabad szöveg). */
        manufacturingProducts: new we({ required: !1, blank: !0, initial: "" }),
        /** Gyártósor táblázat: Gyártott Termék, Szám, Gyártási Idő. */
        productionLines: new Wt(
          new jt({
            product: new we({ required: !1, blank: !0, initial: "" }),
            count: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
            time: new we({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        /** Milícia: Erő Pont. */
        militiaPower: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Milícia: Morál Pont. */
        militiaMorale: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Milícia küldetések táblázat: Helyszín, Nehézség, Rizikó, Zsákmány. */
        militiaMissions: new Wt(
          new jt({
            location: new we({ required: !1, blank: !0, initial: "" }),
            /** d100 eredeti dobás, amiből a nehézség számolódik (base * level). */
            baseRoll: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
            difficulty: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
            risk: new he({ required: !1, integer: !0, min: 0, initial: 0 }),
            loot: new we({ required: !1, blank: !0, initial: "" })
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
  const p = (r, i = 1) => {
    if (!Array.isArray(r)) return;
    let c = i;
    for (const l of r) {
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
      for (const k of h) {
        if (!k || k.discarded || k.hidden) continue;
        const I = Number(k.result ?? k);
        Number.isFinite(I) && g.push(I);
      }
    }
  };
  p(S.terms, 1);
  const d = s.filter((r) => r === 6).length, f = s.filter((r) => r === 1).length, u = e.filter((r) => r === 6).length, a = t.filter((r) => r === 6).length, o = d + u, y = f + a;
  return o > 0 && o === y ? { resultType: null, label: null } : o >= 3 ? { resultType: "critical", label: "Brutális Siker" } : o === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ri(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Fs, Ps, Es, $s;
const te = class te extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const a = this.element, o = this.form ?? this.element, y = f.scrollState, r = f.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
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
    var o, y, r, i, c, l, m, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (o = e.hitLocations) == null ? void 0 : o.legs) == null ? void 0 : y.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, p = te._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const d = Number(((c = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : c.givenSpeed) ?? 0) || 0;
    let f;
    p === 1 ? f = -6 : p === 2 ? f = -3 : f = d, f += te._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((m = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : m.speed) ?? 0) || 0, a = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return u + a + (Number.isFinite(f) ? f : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : te.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, r, i, c, l, m, h, g, k, I, v, w;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((c = (i = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : i.has) != null && c.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((m = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : m.resources) ?? {}, p = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, d = ((k = n.currentHealth) == null ? void 0 : k.legs) ?? 0, f = te._healthStatusFromRatio(d, p), u = Number(((w = (v = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : v.combat) == null ? void 0 : w.givenSpeed) ?? 0) || 0;
    let a;
    f === 0 ? a = 0 : f === 1 ? a = -6 : f === 2 ? a = -3 : a = u;
    const o = this._getTotalArmorSpeedPenalty();
    a += o, t.textContent = String(a);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var a, o, y, r, i, c, l, m, h, g, k, I, v;
    const e = s ?? this.form ?? this.element;
    let t = (a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (y = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : y.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, p = (l = (c = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : c.has) != null && l.call(c, "lookaround") ? 1 : 0, d = (g = (h = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, f = (v = (I = (k = this.actor) == null ? void 0 : k.statuses) == null ? void 0 : I.has) != null && v.call(I, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + p + d + f;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), d = t('input[name="system.combat.defense"]'), f = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(d == null ? void 0 : d.value) || 0, a = Number(f == null ? void 0 : f.value) || 0, o = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(u + a + o);
  }
  _writeTotalSpeed(s = null) {
    var l, m, h, g, k, I, v, w;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), d = t('input[name="system.combat.speed"]'), f = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (m = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : m.has) != null && h.call(m, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((k = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : k.resources) ?? {}, a = ((v = (I = u.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : v.value) ?? 0, o = ((w = u.currentHealth) == null ? void 0 : w.legs) ?? 0;
    if (te._healthStatusFromRatio(o, a) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(d == null ? void 0 : d.value) || 0, i = Number(f == null ? void 0 : f.value) || 0, c = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(r + i + c);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var d, f, u, a;
    const e = te.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((d = this.actor.system) == null ? void 0 : d.resources) ?? {}, n = ((u = (f = t.hitLocations) == null ? void 0 : f[e]) == null ? void 0 : u.value) ?? 0, p = ((a = t.currentHealth) == null ? void 0 : a[e]) ?? 0;
    return te._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var f, u, a, o;
    const t = te.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((f = s == null ? void 0 : s.system) == null ? void 0 : f.resources) ?? {}, p = ((a = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : a.value) ?? 0, d = ((o = n.currentHealth) == null ? void 0 : o[t]) ?? 0;
    return te._healthStatusFromRatio(d, p);
  }
  async _prepareContext(s) {
    var yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et, T, z, M, W, Se, re, Le, Ce, Te, Re, tt, st, Et, $t, xt, zt, _t, dt, as, os, cs, ls, us, ds, ms, ps, fs, ys, gs, hs, bs, vs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ht = (gt = (yt = this.actor.system) == null ? void 0 : yt.resources) == null ? void 0 : gt.stress) == null ? void 0 : ht.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, d = n.currentHealth ?? {}, f = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of f) {
      const L = ((bt = p[b]) == null ? void 0 : bt.value) ?? 0, N = d[b] ?? 0;
      e.computedHealthStatus[b] = te._healthStatusFromRatio(N, L);
    }
    const u = (Number(d.head) || 0) === 0, o = ["torso", "arms", "legs"].filter((b) => (Number(d[b]) || 0) === 0).length;
    e.showDeathSkull = u || o >= 2;
    const y = e.computedHealthStatus.legs ?? 3, r = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = r;
    const c = this._getTotalArmorSpeedPenalty();
    i += c, e.effectiveGivenSpeed = i;
    const l = Number(((It = (wt = this.actor.system) == null ? void 0 : wt.combat) == null ? void 0 : It.givenProtection) ?? 0) || 0, m = (Tt = (Qe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Qe.has) != null && Tt.call(Qe, "lookaround") ? 1 : 0, h = (T = (et = (Dt = this.actor) == null ? void 0 : Dt.statuses) == null ? void 0 : et.has) != null && T.call(et, "halfcover") ? 3 : 0, g = (W = (M = (z = this.actor) == null ? void 0 : z.statuses) == null ? void 0 : M.has) != null && W.call(M, "threequarteredcover") ? 6 : 0, k = l + this._getTotalArmorProtectionBonus() + m + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: k } },
      { inplace: !1 }
    );
    const I = ((Se = e.system) == null ? void 0 : Se.combat) ?? {};
    e.totalDefense = (Number(I.defense) || 0) + (Number(I.defenseBonus) || 0) + (Number(I.givenProtection) || 0);
    const v = Number(I.givenSpeed);
    let w = (Number(I.speed) || 0) + (Number(I.speedBonus) || 0) + (Number.isFinite(v) ? v : 0);
    y === 0 && (w = 0), (Ce = (Le = (re = this.actor) == null ? void 0 : re.statuses) == null ? void 0 : Le.has) != null && Ce.call(Le, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Re = (Te = e.system) == null ? void 0 : Te.combat) == null ? void 0 : Re.givenProtection } },
      { inplace: !1 }
    ), w = 0), e.totalSpeed = w;
    const _ = te.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(_)) {
      const N = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], E = (O.slotOrder ?? "").trim(), j = E ? E.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], K = (tt = this.actor.system.gear) == null ? void 0 : tt.microchips, x = K && typeof K == "object" && !Array.isArray(K) ? K : {}, V = (((st = x.slot1) == null ? void 0 : st.itemId) ?? "").trim(), Z = (((Et = x.slot2) == null ? void 0 : Et.itemId) ?? "").trim(), J = ((($t = x.slot3) == null ? void 0 : $t.itemId) ?? "").trim(), ce = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const N = typeof b.sort == "number" ? b.sort : 0, P = typeof L.sort == "number" ? L.sort : 0;
      return N - P;
    }).map((b) => {
      var je, nt, rt, Ve, Je, Ot;
      const L = b.type === "Fegyver", N = b.type === "MikroChip";
      let P = 0, B = "", me = null;
      for (let mt = 0; mt < j.length; mt++) {
        const Ct = j[mt];
        if ((((je = O[Ct]) == null ? void 0 : je.itemId) ?? "") === b.id) {
          P = mt + 1, B = ((nt = O[Ct]) == null ? void 0 : nt.bonus) ?? "", me = Ct;
          break;
        }
      }
      let oe = null;
      N && (V === b.id ? oe = "slot1" : Z === b.id ? oe = "slot2" : J === b.id && (oe = "slot3"));
      const it = L && ((rt = b.system) != null && rt.damage) ? b.system.damage : "", De = L && typeof ((Ve = b.system) == null ? void 0 : Ve.range) == "string" ? (b.system.range || "").trim() : "", qe = me ? Number((Je = O[me]) == null ? void 0 : Je.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: P,
        slotBonus: B,
        slotKey: me,
        microchipSlotKey: oe,
        isEquipped: !!(me || oe),
        damage: it,
        rangeStr: De,
        slotBonusNum: qe,
        quantity: Number(((Ot = b.system) == null ? void 0 : Ot.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = ce;
    const X = (((xt = this.actor.items) == null ? void 0 : xt.contents) ?? []).filter((b) => b.type === "Fegyver"), U = X.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = U;
    const Q = "— Nincs fegyver —", ue = j.filter((b) => {
      const N = ((O[b] ?? {}).itemId ?? "").trim();
      return N ? !!X.find((B) => B.id === N) : !1;
    });
    e.weaponSlots = ue.map((b, L) => {
      const N = O[b] ?? {}, P = (N.itemId ?? "").trim(), B = U.find((qe) => qe.id === P), me = X.find((qe) => qe.id === P), oe = (me == null ? void 0 : me.system) ?? {}, it = oe.size === "thrown", De = (typeof oe.range == "string" ? (oe.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: P,
        slotNum: L + 1,
        displayName: (B == null ? void 0 : B.name) || N.name || Q,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: it,
        rangeStr: De
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, F = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = X.map((b) => {
      var ks, ws, Is;
      const L = b.id;
      let N = null, P = {};
      for (const Ut of j)
        if ((((ks = O[Ut]) == null ? void 0 : ks.itemId) ?? "").trim() === L) {
          N = Ut, P = O[Ut] ?? {};
          break;
        }
      const B = !!N, me = ((ws = b.system) == null ? void 0 : ws.equipped) !== void 0 && ((Is = b.system) == null ? void 0 : Is.equipped) !== null ? !!b.system.equipped : B, oe = (b == null ? void 0 : b.system) ?? {}, it = typeof oe.range == "string" ? (oe.range || "").trim() : "", De = oe.type ?? "", qe = (D[De] ?? De) || "—", je = oe.size ?? "", nt = (F[je] ?? je) || "", rt = [qe, nt].filter(Boolean).join(", ") || qe || "—", Ve = De === "projectile" || je === "thrown", Je = oe.quantity, Ot = Je != null ? String(Je).trim() : "1", mt = String(P.bonus ?? "").trim(), Ct = String(oe.bonus ?? "").trim(), di = mt || Ct || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? Q,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: di,
        damage: P.damage ?? oe.damage ?? "",
        rangeStr: it || "—",
        typeLabel: qe,
        typeAndSize: rt,
        quantity: Ot,
        quantityDisplay: Ve ? Ot : "—",
        isProjectile: Ve,
        equipped: me,
        special: (oe.special ?? "").trim() || "—"
      };
    });
    const G = (((zt = this.actor.items) == null ? void 0 : zt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = G.map((b) => {
      var P, B;
      const L = (b == null ? void 0 : b.system) ?? {}, N = ((P = b.system) == null ? void 0 : P.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: Ri((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const ie = (((_t = this.actor.items) == null ? void 0 : _t.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = ie.map((b) => {
      const L = (b == null ? void 0 : b.system) ?? {}, N = (L.description ?? "").trim(), P = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", B = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: B,
        description: P
      };
    });
    const de = (((dt = this.actor.items) == null ? void 0 : dt.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = de.map((b) => {
      const N = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), P = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: P
      };
    });
    const fe = (((as = this.actor.items) == null ? void 0 : as.contents) ?? []).filter((b) => b.type === "MikroChip"), ae = fe.map((b) => ({ id: b.id, name: b.name, img: b.img })), Ie = "— Nincs Mikro-Chip —", le = ["slot1", "slot2", "slot3"], ye = (b) => {
      var N, P, B;
      const L = [];
      return b !== 1 && L.push((((N = x.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && L.push((((P = x.slot2) == null ? void 0 : P.itemId) ?? "").trim()), b !== 3 && L.push((((B = x.slot3) == null ? void 0 : B.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((b) => !ye(1).includes(b.id)), e.microchipItemsSlot2 = ae.filter((b) => !ye(2).includes(b.id)), e.microchipItemsSlot3 = ae.filter((b) => !ye(3).includes(b.id)), e.microchipSlots = le.map((b) => {
      const L = x[b] ?? {}, N = (L.itemId ?? "").trim(), P = fe.find((B) => B.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (P == null ? void 0 : P.name) || L.name || Ie,
        img: (P == null ? void 0 : P.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, N = x[L] ?? {}, P = (N.itemId ?? "").trim(), B = ae.find((me) => me.id === P);
      e[`microchip${b}ItemId`] = P, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || N.name || Ie, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = fe.map((b) => {
      var je, nt, rt, Ve;
      const L = b.id;
      let N = null;
      for (const Je of le)
        if ((((je = x[Je]) == null ? void 0 : je.itemId) ?? "").trim() === L) {
          N = Je;
          break;
        }
      const P = !!N, B = ((nt = b == null ? void 0 : b.system) == null ? void 0 : nt.abilityType) ?? "", me = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", oe = B === "active", it = Number((rt = b == null ? void 0 : b.system) == null ? void 0 : rt.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, De = (((Ve = b == null ? void 0 : b.system) == null ? void 0 : Ve.description) ?? "").trim(), qe = De ? De.length > 60 ? De.slice(0, 57) + "…" : De : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: me,
        description: qe,
        kp: it,
        isActive: oe,
        slotKey: N ?? "",
        equipped: P
      };
    });
    const Ke = (((os = e.weaponsTable) == null ? void 0 : os.length) ?? 0) > 0 || (((cs = e.armorTable) == null ? void 0 : cs.length) ?? 0) > 0 || (((ls = e.microchipsTable) == null ? void 0 : ls.length) ?? 0) > 0 || (((us = e.itemsTable) == null ? void 0 : us.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Ke;
    const Ue = this.actor.system.abilities ?? {}, ze = (((ds = this.actor.items) == null ? void 0 : ds.contents) ?? []).map((b) => {
      var L, N, P;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((P = b.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), Be = new Map(ze.map((b) => [b.id, b])), ot = "— Nincs képesség —", He = (b) => {
      const L = Ue[b] ?? {}, N = (L.itemId ?? "").trim(), P = N ? Be.get(N) : null, B = (P == null ? void 0 : P.description) ?? "", me = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: N,
        displayName: (P == null ? void 0 : P.name) || L.name || ot,
        img: (P == null ? void 0 : P.img) || "",
        description: B,
        kp: me
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
    const ct = ((ms = e.system) == null ? void 0 : ms.resources) ?? {}, se = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ge = (fs = (ps = e.system) == null ? void 0 : ps.combat) == null ? void 0 : fs.initiativeResult, ne = typeof ge == "number" ? ge : -1, lt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Me = (gs = (ys = e.system) == null ? void 0 : ys.combat) == null ? void 0 : gs.initiativeRanges, Ne = Array.isArray(Me) ? Me.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], We = (Ne.length > 0 ? Ne : lt).slice().sort((b, L) => b.min - L.min), Xe = Ne.map((b) => b.min), At = Xe.length ? Math.min(...Xe) : 0, Ft = Xe.length ? Math.max(...Xe) : 0;
    e.initiativeRanges = Ne.map((b) => ({ ...b, isFirst: b.min === At, isLast: b.min === Ft }));
    let ft = 0;
    if (typeof ne == "number" && ne >= 0 && We.length > 0) {
      const b = We[0], L = We[We.length - 1];
      let N = null;
      ne <= b.max ? N = b : ne >= L.min ? N = L : N = We.find((P) => ne >= P.min && ne <= P.max), N && (ft = N.kp);
    }
    e.kpDots = se.map((b, L) => {
      const N = L + 1, P = !!Number(ct[b]), B = N <= ft;
      return { index: N, used: P, usable: B };
    });
    const Pt = !!((bs = (hs = game.combat) == null ? void 0 : hs.combatants) != null && bs.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Pt, e.canEditInitiative = !!((vs = game.user) != null && vs.isGM), e.showInitiativeResult = typeof ge == "number", e.initiativeResult = e.showInitiativeResult ? ge : "", e;
  }
  _attachFrameListeners(s) {
    var y, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-CV9dTTcx.mjs");
      m(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var m, h, g;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget;
      let l = (c.dataset.itemId ?? "").trim();
      if (!l) {
        const k = (c.dataset.slot ?? "").trim();
        if (!k) return;
        l = (((((h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.weapons) ?? {})[k] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = c.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: c } = await import("./roll-sheet-CV9dTTcx.mjs");
      c(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, k;
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, l = parseInt(c.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const m = `system.resources.kpDot${l}`, h = !!Number((k = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : k[`kpDot${l}`]);
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
      const c = i.currentTarget, l = c.dataset.skill, m = ((g = c.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-CV9dTTcx.mjs");
      h(this.actor, l, m);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, v, w, _, O, C, E;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), m = l == null ? void 0 : l.dataset.slot;
      if (!m) return;
      const g = (((v = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[m]) == null ? void 0 : v.itemId) ?? "").trim();
      if (!g) return;
      const k = ((_ = (w = this.actor.items).get) == null ? void 0 : _.call(w, g)) ?? ((C = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (j) => j.id === g));
      (E = k == null ? void 0 : k.sheet) == null || E.render(!0);
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
        const k = m.system.weapons ?? {}, I = (k.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = I ? I.split(/\s*,\s*/).filter((O) => v.includes(O)) : [], _ = w.find((O) => {
          var C;
          return (((C = k[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = w.filter((C) => C !== _);
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
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = g ? g.split(/\s*,\s*/).filter((C) => k.includes(C)) : [], v = I.find((C) => {
        var E;
        return (((E = h[C]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (v) return;
        let C = I.find((j) => {
          var K;
          return !((K = h[j]) != null && K.itemId);
        });
        const E = new Set(I);
        if (!C) {
          const j = k.find((K) => !E.has(K));
          if (!j) return;
          C = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${C}.damage`]: ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = m == null ? void 0 : m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (v) {
        const C = I.filter((E) => E !== v);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${v}.itemId`]: "",
          [`system.weapons.${v}.name`]: "",
          [`system.weapons.${v}.damage`]: "",
          [`system.weapons.${v}.bonus`]: ""
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
      const g = (c.dataset.itemId ?? "").trim(), k = (c.dataset.itemName ?? ((C = c.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (c.dataset.itemImg ?? "").trim(), v = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      v && (v.textContent = k);
      let w = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      I ? (w || (w = document.createElement("img"), w.className = "karakter-microchip-slot-thumb", w.alt = "", m == null || m.insertBefore(w, v)), w.src = I, w.style.display = "") : w && w.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${h}.itemId`]: g,
        [`system.gear.microchips.${h}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (O[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var k, I;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const l = this.actor.items.get(c);
      if (!l || l.type !== "MikroChip") return;
      const m = ((I = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : I.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((v) => {
        var w;
        return (((w = m[v]) == null ? void 0 : w.itemId) ?? "").trim() === c;
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
      var k;
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!c || !l) return;
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((k = m[c]) == null ? void 0 : k.items) ? m[c].items.slice() : []).filter((I) => I !== l);
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
        const g = this.form ?? this.element, k = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        k && this._resizeWeaponQuantityInput(k);
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
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), k = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = g ? g.split(/\s*,\s*/).filter((C) => k.includes(C)) : [], v = I.find((C) => {
        var E;
        return (((E = h[C]) == null ? void 0 : E.itemId) ?? "").trim() === l;
      }) ?? null;
      if (c.checked) {
        if (v) return;
        let C = I.find((j) => {
          var K;
          return !((K = h[j]) != null && K.itemId);
        });
        const E = new Set(I);
        if (!C) {
          const j = k.find((K) => !E.has(K));
          if (!j) return;
          C = j, I.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: m.name ?? "",
          [`system.weapons.${C}.damage`]: ((_ = m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (v) {
        const C = I.filter((E) => E !== v);
        await this.actor.update({
          "system.weapons.slotOrder": C.join(","),
          [`system.weapons.${v}.itemId`]: "",
          [`system.weapons.${v}.name`]: "",
          [`system.weapons.${v}.damage`]: "",
          [`system.weapons.${v}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const m = this.actor, h = m.items.get(l), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const k = m.system.weapons ?? {}, I = (k.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], w = I ? I.split(/\s*,\s*/).filter((O) => v.includes(O)) : [], _ = w.find((O) => {
          var C;
          return (((C = k[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = w.filter((C) => C !== _);
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
        const g = this.form ?? this.element, k = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        k && this._resizeWeaponQuantityInput(k);
      }, 80);
    });
    const u = this, a = (i) => {
      var m, h, g, k;
      if (!i) return;
      const c = u._getFormDataForUpdate(i);
      if (Object.keys(c).length === 0) return;
      const l = ((h = (m = c.system) == null ? void 0 : m.resources) == null ? void 0 : h.currentHealth) != null || ((k = (g = c.system) == null ? void 0 : g.resources) == null ? void 0 : k.hitLocations) != null;
      u.actor.update(c).then(() => {
        l && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
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
    var f, u, a;
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
      const y = ((a = n[o]) == null ? void 0 : a.value) ?? 0, r = p[o] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${o}`, te._healthStatusFromRatio(r, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, d, f, u, a, o, y, r, i, c, l, m;
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
          const I = (((d = g.system) == null ? void 0 : d.kind) ?? "passive").toString();
          if (I === "module") {
            (u = (f = ui.notifications) == null ? void 0 : f.warn) == null || u.call(f, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
            return;
          }
          const v = this.actor.system.abilities ?? {};
          if (I === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": k,
              "system.abilities.faji.name": g.name
            });
            return;
          }
          if (I === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": k,
              "system.abilities.hatter.name": g.name
            });
            return;
          }
          const w = I === "active" ? "active" : "passive", _ = Array.isArray((a = v[w]) == null ? void 0 : a.items) ? v[w].items.slice() : Array.isArray(v[w]) ? v[w].slice() : [];
          _.includes(k) || _.push(k), await this.actor.update({ [`system.abilities.${w}.items`]: _ });
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
          const k = this.actor, I = ((y = g.parent) == null ? void 0 : y.id) !== k.id;
          let v = g.id;
          if (I) {
            const w = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            v = ((r = (await k.createEmbeddedDocuments("Item", [w]))[0]) == null ? void 0 : r.id) ?? v;
          }
          if (I) {
            const w = ((i = k.system) == null ? void 0 : i.weapons) ?? {}, _ = (w.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = _ ? _.split(/\s*,\s*/).filter((j) => O.includes(j)) : [], E = C.filter((j) => {
              var K;
              return (((K = w[j]) == null ? void 0 : K.itemId) ?? "").trim() === v;
            });
            if (E.length > 0) {
              const K = {
                "system.weapons.slotOrder": C.filter((x) => !E.includes(x)).join(",")
              };
              for (const x of E)
                K[`system.weapons.${x}.itemId`] = "", K[`system.weapons.${x}.name`] = "", K[`system.weapons.${x}.damage`] = "", K[`system.weapons.${x}.bonus`] = "";
              await k.update(K);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const k = this.actor;
          if (((c = g.parent) == null ? void 0 : c.id) !== k.id) {
            const I = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            await k.createEmbeddedDocuments("Item", [I]);
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
          ((m = g.parent) == null ? void 0 : m.id) !== k.id && await k.createEmbeddedDocuments("Item", [g.toObject()]);
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
    var f, u, a, o, y, r;
    s.preventDefault(), s.stopPropagation(), (f = s.currentTarget) == null || f.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    const p = this.actor.items.contents.slice().sort((y, r) => {
      const i = typeof y.sort == "number" ? y.sort : 0, c = typeof r.sort == "number" ? r.sort : 0;
      return i - c;
    }).map((y) => y.id), d = p.indexOf(t), f = p.indexOf(e);
    if (d === -1 || f === -1) return;
    p.splice(d, 1), p.splice(f, 0, t);
    const u = p.map((y, r) => ({
      _id: y,
      sort: (r + 1) * 10
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
    var u, a, o;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
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
    var o, y, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((o = e.system) == null ? void 0 : o.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, p = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
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
    var d, f, u;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((f = n.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((u = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : u.id) ?? p;
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
    var u, a, o, y;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((a = n.parent) == null ? void 0 : a.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((o = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : o.id) ?? p;
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
    var f, u, a, o, y;
    s.preventDefault(), (f = s.currentTarget) == null || f.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((a = s.dataTransfer) == null ? void 0 : a.getData("application/json")) || "";
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
    const u = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, a = new Roll(u);
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
    var I, v;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((w) => w.type === "Fegyver");
    let d = null;
    t.itemId && (d = p.find((w) => w.id === t.itemId) ?? null);
    const f = d && d.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, a = ((I = d == null ? void 0 : d.system) == null ? void 0 : I.type) || "kinetic", o = (((v = d == null ? void 0 : d.system) == null ? void 0 : v.skillKey) ?? "").trim(), y = o && n[o] !== void 0 ? o : a === "explosive" ? "grenadeUse" : "firearms", r = Number(n[y] || 0) || 0, i = u + r, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, m = new Roll(l);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: g } = Vt(m), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${f} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, a, o, y, r, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    let n = ((a = (u = t.items).get) == null ? void 0 : a.call(u, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
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
ee(te, "PARTS", foundry.utils.mergeObject(
  R(te, te, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(te, te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Fs = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ps = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...(($s = (Es = R(te, te, "DEFAULT_OPTIONS")) == null ? void 0 : Es.window) == null ? void 0 : $s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
ee(te, "BODY_PART_BY_SKILL", {
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
let Nt = te;
function ji(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var xs, zs, Ms, Rs;
const be = class be extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const d = await super.render(s, e), f = this.element, u = this.form ?? this.element, a = p.scrollState, o = p.focus, y = typeof (a == null ? void 0 : a.formScrollTop) == "number" || typeof (a == null ? void 0 : a.windowScrollTop) == "number", r = () => {
      var i, c;
      if (this._applyScrollState(f, a), (o == null ? void 0 : o.name) != null || (o == null ? void 0 : o.id) != null) {
        const l = ((i = u.querySelector) == null ? void 0 : i.call(u, o.id ? `#${CSS.escape(o.id)}` : null)) ?? (o.name ? (c = u.querySelector) == null ? void 0 : c.call(u, `[name="${CSS.escape(o.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = o.selectionStart ?? 0, l.selectionEnd = o.selectionEnd ?? o.selectionStart ?? 0));
      }
      this._applyScrollState(f, a);
    };
    return (y || o) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), d;
  }
  async _prepareContext(s) {
    var He, Ye, Ge, ct, se, ge, ne, lt, Me, Ne, ut, We, Xe, At, Ft, ft, Pt, yt, gt, ht, bt, vt, kt, wt, It, St, Qe, Tt, Dt, et;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((He = this.actor) == null ? void 0 : He.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (Ye = e.system) == null ? void 0 : Ye.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((ct = e.system) == null ? void 0 : ct.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, d = (ge = (se = t == null ? void 0 : t.statuses) == null ? void 0 : se.has) != null && ge.call(se, "lookaround") ? 1 : 0, f = (lt = (ne = t == null ? void 0 : t.statuses) == null ? void 0 : ne.has) != null && lt.call(ne, "halfcover") ? 3 : 0, u = (Ne = (Me = t == null ? void 0 : t.statuses) == null ? void 0 : Me.has) != null && Ne.call(Me, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + d + f + u;
    const a = ((ut = t == null ? void 0 : t.items) == null ? void 0 : ut.contents) ?? [], o = ((We = t == null ? void 0 : t.system) == null ? void 0 : We.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (o.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((T) => y.includes(T)) : [], c = a.filter((T) => T.type === "Fegyver"), l = c.map((T) => ({ id: T.id, name: T.name, img: T.img })), m = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((T) => !h.includes(T)), k = [...h, ...g], I = k.filter((T) => {
      var M;
      const z = (((M = o[T]) == null ? void 0 : M.itemId) ?? "").trim();
      return z && c.some((W) => W.id === z);
    });
    e.weaponSlots = I.map((T) => {
      const z = o[T] ?? {}, M = (z.itemId ?? "").trim(), W = l.find((Te) => Te.id === M), Se = c.find((Te) => Te.id === M), re = (Se == null ? void 0 : Se.system) ?? {}, Le = re.size === "thrown", Ce = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: T,
        itemId: M,
        displayName: (W == null ? void 0 : W.name) || z.name || m,
        img: (W == null ? void 0 : W.img) || "",
        isThrown: Le,
        rangeStr: Ce
      };
    });
    const v = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, w = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = c.map((T) => {
      var _t;
      const z = T.id;
      let M = null, W = {};
      for (const dt of k)
        if ((((_t = o[dt]) == null ? void 0 : _t.itemId) ?? "").trim() === z) {
          M = dt, W = o[dt] ?? {};
          break;
        }
      const Se = !!M, re = (T == null ? void 0 : T.system) ?? {}, Le = typeof re.range == "string" ? (re.range || "").trim() : "", Ce = re.type ?? "", Te = (v[Ce] ?? Ce) || "—", Re = re.size ?? "", tt = (w[Re] ?? Re) || "", st = [Te, tt].filter(Boolean).join(", ") || Te || "—", Et = Ce === "projectile" || Re === "thrown", $t = re.quantity != null ? String(re.quantity).trim() : "1", xt = String(re.bonus ?? W.bonus ?? "").trim() || "0", zt = (re.damage ?? W.damage ?? "").trim() || "";
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
        equipped: Se,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const _ = a.filter((T) => T.type === "Pancel");
    e.armorTable = _.map((T) => {
      var W;
      const z = (T == null ? void 0 : T.system) ?? {}, M = ((W = T.system) == null ? void 0 : W.equipped) === !0;
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        protectionBonus: (z.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (z.speedPenalty ?? "").toString().trim() || "—",
        level: ji((z.level ?? "").toString().trim()),
        special: (z.special ?? z.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const O = ((At = (Xe = t == null ? void 0 : t.system) == null ? void 0 : Xe.gear) == null ? void 0 : At.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], E = a.filter((T) => T.type === "MikroChip");
    e.microchipsTable = E.map((T) => {
      var Ce, Te, Re, tt;
      const z = T.id;
      let M = null;
      for (const st of C)
        if ((((Ce = O[st]) == null ? void 0 : Ce.itemId) ?? "").trim() === z) {
          M = st;
          break;
        }
      const W = ((Te = T == null ? void 0 : T.system) == null ? void 0 : Te.abilityType) ?? "", Se = W === "active" ? "Aktív" : W === "passive" ? "Passzív" : W || "—", re = (((Re = T == null ? void 0 : T.system) == null ? void 0 : Re.description) ?? "").trim(), Le = re ? re.length > 60 ? re.slice(0, 57) + "…" : re : "—";
      return {
        itemId: z,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        typeLabel: Se,
        description: Le,
        kp: Number((tt = T == null ? void 0 : T.system) == null ? void 0 : tt.replaceCost) >= 0 ? Number(T.system.replaceCost) : 0,
        isActive: W === "active",
        slotKey: M ?? "",
        equipped: !!M
      };
    });
    const j = a.filter((T) => T.type === "Targy");
    e.itemsTable = j.map((T) => {
      const z = (T == null ? void 0 : T.system) ?? {}, M = (z.description ?? "").trim(), W = M ? M.length > 60 ? M.slice(0, 57) + "…" : M : "—";
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        quantity: z.quantity != null ? String(z.quantity).trim() : "1",
        description: W
      };
    });
    const K = a.filter((T) => T.type === "Egyeb");
    e.egyebList = K.map((T) => {
      const M = (((T == null ? void 0 : T.system) ?? {}).description ?? "").trim(), W = M ? M.length > 80 ? M.slice(0, 77) + "…" : M : "";
      return {
        itemId: T.id,
        actorId: t.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        description: W
      };
    });
    const x = (((Ft = e.weaponsTable) == null ? void 0 : Ft.length) ?? 0) > 0 || (((ft = e.armorTable) == null ? void 0 : ft.length) ?? 0) > 0 || (((Pt = e.microchipsTable) == null ? void 0 : Pt.length) ?? 0) > 0 || (((yt = e.itemsTable) == null ? void 0 : yt.length) ?? 0) > 0 || (((gt = e.egyebList) == null ? void 0 : gt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !x;
    const V = ((ht = t == null ? void 0 : t.system) == null ? void 0 : ht.abilities) ?? {}, Z = a.filter((T) => T.type === "Kepesseg" || T.type === "ability").map((T) => {
      var z, M, W;
      return {
        id: T.id,
        name: T.name,
        img: T.img,
        description: ((z = T.system) == null ? void 0 : z.description) ?? "",
        kp: Number(((M = T.system) == null ? void 0 : M.kp) ?? 0) || 0,
        kind: (((W = T.system) == null ? void 0 : W.kind) ?? "passive").toString()
      };
    }), J = new Map(Z.map((T) => [T.id, T])), Y = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Y, e.abilityHatterSlot = Y;
    const ce = (T) => {
      const z = V[T];
      return z ? Array.isArray(z == null ? void 0 : z.items) ? z.items : Array.isArray(z) ? z : [] : [];
    }, X = (T) => (T || []).map((z) => {
      const M = J.get(z);
      if (!M) return null;
      const W = M.kind === "species";
      return {
        id: M.id,
        name: M.name,
        img: M.img,
        description: M.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: W ? 0 : M.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = X(ce("passive")), e.abilityActiveList = X(ce("active"));
    const U = t == null ? void 0 : t.id, Q = !!((vt = (bt = game.combat) == null ? void 0 : bt.combatants) != null && vt.some(
      (T) => {
        var z;
        return (((z = T.actor) == null ? void 0 : z.id) ?? T.actorId) === U;
      }
    ));
    e.showHarcSection = Q;
    const ue = ((kt = e.system) == null ? void 0 : kt.resources) ?? {}, D = (It = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : It.initiativeResult, F = typeof D == "number" ? D : -1, G = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], ie = (Qe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Qe.initiativeRanges, de = Array.isArray(ie) ? ie.map((T) => ({ min: Number(T.min) ?? 0, max: Number(T.max) ?? 0, kp: Math.min(10, Math.max(0, Number(T.kp) ?? 0)) })) : [], ae = (de.length > 0 ? de : G).slice().sort((T, z) => T.min - z.min), Ie = 3;
    let le = de.length > 0 ? de : [];
    le.length < Ie && (le = [...le, ...Array(Ie - le.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = le.map((T, z) => ({
      ...T,
      isFirst: z === 0,
      isLast: z === le.length - 1
    }));
    let ye = 0;
    if (typeof F == "number" && F >= 0 && ae.length > 0) {
      const T = ae[0], z = ae[ae.length - 1];
      let M = null;
      F <= T.max ? M = T : F >= z.min ? M = z : M = ae.find((W) => F >= W.min && F <= W.max), M && (ye = M.kp);
    }
    const Ke = ae.length > 0 ? ae[ae.length - 1] : null, Ue = Math.min(10, Ke ? Ke.kp : 6), Be = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, Ue)).map((T, z) => {
      const M = z + 1, W = !!Number(ue[T]), Se = M <= ye;
      return { index: M, used: W, usable: Se };
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
      var m, h, g, k;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".karakter-weapon-slot"), c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      (k = l == null ? void 0 : l.sheet) == null || k.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (r) => {
      var m;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, c = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.slot) ?? "").trim();
      if (!c || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-CV9dTTcx.mjs");
      l(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var l, m, h, g, k;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let c = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !c && ((m = i == null ? void 0 : i.dataset) != null && m.slot) && (c = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!c || !this.actor) && await this._rollWeaponDamage(c, (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CV9dTTcx.mjs");
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
      const { openRollSheetForSkill: m } = await import("./roll-sheet-CV9dTTcx.mjs");
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
      var g, k, I, v, w, _;
      if (r.preventDefault(), !r.altKey) return;
      const i = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.area, c = (v = (I = r.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : v.itemId;
      if (!i || !c || !this.actor) return;
      const l = ((w = this.actor.system) == null ? void 0 : w.abilities) ?? {}, h = (Array.isArray((_ = l[i]) == null ? void 0 : _.items) ? l[i].items.slice() : []).filter((O) => O !== c);
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
      var g, k;
      if (r.preventDefault(), !r.altKey) return;
      const i = r.currentTarget, c = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!c || !this.actor) return;
      const l = this.actor, m = (((k = i == null ? void 0 : i.dataset) == null ? void 0 : k.slotKey) ?? "").trim(), h = {};
      m && (h[`system.weapons.${m}.itemId`] = "", h[`system.weapons.${m}.name`] = "", h[`system.weapons.${m}.damage`] = "", h[`system.weapons.${m}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [c]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      var c, l;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((l = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var h, g, k, I;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((g = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const c = ((I = (k = this.actor.system) == null ? void 0 : k.gear) == null ? void 0 : I.microchips) ?? {}, m = ["slot1", "slot2", "slot3"].find((v) => {
        var w;
        return (((w = c[v]) == null ? void 0 : w.itemId) ?? "").trim() === i;
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
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (o = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : o.call(e, p)) == null || y.forEach((r) => {
      var i;
      (((i = r.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (r.draggable = !0);
    }), t.on("dragstart", p, (r) => {
      var h, g, k;
      const i = r.currentTarget, c = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!c || !this.actor) return;
      const l = this.actor.items.get(c);
      if (!l) return;
      const m = l.uuid;
      r.dataTransfer && (r.dataTransfer.setData("text/plain", m), r.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: m })), r.dataTransfer.effectAllowed = "copyMove"), typeof ((k = r.dataTransfer) == null ? void 0 : k.setDragImage) == "function" && i && r.dataTransfer.setDragImage(i, 0, 0);
    });
    const d = this, f = (r) => {
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
      m && (l.contains(m) || d.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(d.id)}`))) || f(l);
    }, document.body.addEventListener("blur", d._votvNpcBlur, !0), d._votvNpcItemHookRegistered || (d._votvNpcItemUpdateHook = (r, i, c) => {
      var l;
      d.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
    }, d._votvNpcItemDeleteHook = (r, i, c) => {
      var l;
      d.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === d.actor.id && d.render(!0);
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
    var v, w, _, O, C;
    const e = this.actor;
    if (!e) return;
    const n = (((v = e.system) == null ? void 0 : v.weapons) ?? {})[s] ?? {}, p = ((w = e.system) == null ? void 0 : w.skills) ?? {}, d = ((_ = e.items) == null ? void 0 : _.filter((E) => E.type === "Fegyver")) ?? [];
    let f = null;
    n.itemId && (f = d.find((E) => E.id === n.itemId) ?? null);
    const u = f && f.name || n.name || "Fegyver", a = Number(n.bonus || 0) || 0, o = ((O = f == null ? void 0 : f.system) == null ? void 0 : O.type) || "kinetic", y = (((C = f == null ? void 0 : f.system) == null ? void 0 : C.skillKey) ?? "").trim(), r = y && p[y] !== void 0 ? y : o === "explosive" ? "grenadeUse" : "firearms", i = Number(p[r] || 0) || 0, c = a + i, m = `3d6${c !== 0 ? c > 0 ? `+${c}` : `${c}` : ""}`, h = new Roll(m);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: k } = Vt(h), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: k } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, a, o, y, r, i, c, l, m, h;
    const t = this.actor;
    if (!t) return;
    const n = ((a = (u = t.items).get) == null ? void 0 : a.call(u, s)) ?? ((y = (o = t.items.contents) == null ? void 0 : o.find) == null ? void 0 : y.call(o, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
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
    var o, y, r, i, c, l, m, h, g, k, I, v, w, _, O, C, E, j, K;
    if (!this.actor) return (o = super._onDropItem) == null ? void 0 : o.call(this, s, e);
    const n = ((x) => {
      var Z;
      if (!x) return null;
      const V = x.uuid ?? x.documentUuid ?? ((Z = x.data) == null ? void 0 : Z.uuid) ?? (typeof x == "string" ? x : null);
      if (V) return V;
      if (typeof x == "object") {
        for (const J of Object.values(x))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    if (p.type === "Pancel") {
      (c = (i = ui.notifications) == null ? void 0 : i.info) == null || c.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const d = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      const x = (((l = p.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (x === "module") {
        (h = (m = ui.notifications) == null ? void 0 : m.warn) == null || h.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let V = p.id;
      if (((g = p.parent) == null ? void 0 : g.id) !== d.id) {
        const ce = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        V = ((k = (await d.createEmbeddedDocuments("Item", [ce]))[0]) == null ? void 0 : k.id) ?? V;
      }
      const Z = ((I = d.system) == null ? void 0 : I.abilities) ?? {}, J = x === "active" ? "active" : "passive", Y = Array.isArray((v = Z[J]) == null ? void 0 : v.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(V) || Y.push(V), await d.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((w = p.parent) == null ? void 0 : w.id) === d.id) return;
    const f = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(f, { system: { ...f.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(f, { system: { ...f.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const a = (_ = (await d.createEmbeddedDocuments("Item", [f]))[0]) == null ? void 0 : _.id;
    if (p.type === "Fegyver" && a) {
      const x = ((O = d.system) == null ? void 0 : O.weapons) ?? {}, V = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (x.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((X) => V.includes(X)) : [];
      let Y = V.find((X) => {
        var U;
        return !(((U = x[X]) == null ? void 0 : U.itemId) ?? "").trim();
      });
      Y || (Y = V.find((X) => !J.includes(X)) ?? "slot1");
      const ce = J.includes(Y) ? J : [...J, Y].filter((X) => V.includes(X));
      await d.update({
        "system.weapons.slotOrder": ce.join(","),
        [`system.weapons.${Y}.itemId`]: a,
        [`system.weapons.${Y}.name`]: p.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = p.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((E = p.system) == null ? void 0 : E.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && a) {
      const x = ((K = (j = d.system) == null ? void 0 : j.gear) == null ? void 0 : K.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = x[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await d.update({
        [`system.gear.microchips.${Z}.itemId`]: a,
        [`system.gear.microchips.${Z}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var o, y, r, i, c, l;
    const e = (y = (o = this.actor) == null ? void 0 : o.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((c = e.system) == null ? void 0 : c.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
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
    let n, p = "";
    if (e.type === "MikroChip") {
      const c = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (c === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", c === "active") {
        const l = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
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
ee(be, "PARTS", foundry.utils.mergeObject(
  R(be, be, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(be, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(be, be, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((xs = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((zs = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : zs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Rs = (Ms = R(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.window) == null ? void 0 : Rs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Jt = be;
function Ki(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var js, Ks, Us, Bs;
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
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
    const a = this.element, o = this.form ?? this.element, y = f.scrollState, r = f.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", c = () => {
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
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), d = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const f = Number(p == null ? void 0 : p.value) || 0, u = Number(d == null ? void 0 : d.value) || 0;
    n.textContent = String(f + u);
  }
  async _prepareContext(s) {
    var E, j, K, x, V, Z, J, Y, ce, X, U, Q, ue;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((E = e.system) == null ? void 0 : E.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, d = "— Nincs fegyver —", f = (((j = this.actor.items) == null ? void 0 : j.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = f.map((D) => {
      const F = (D == null ? void 0 : D.system) ?? {}, G = F.type ?? "", ie = (n[G] ?? G) || "—", de = F.size ?? "", fe = (p[de] ?? de) || "", ae = [ie, fe].filter(Boolean).join(", ") || ie || "—", Ie = G === "projectile" || de === "thrown", le = F.quantity != null ? String(F.quantity).trim() : "1", ye = (typeof F.range == "string" ? (F.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? d,
        img: (D == null ? void 0 : D.img) ?? "",
        bonus: String(F.bonus ?? "").trim() || "0",
        damage: F.damage ?? "",
        rangeStr: ye || "—",
        typeLabel: ie,
        typeAndSize: ae,
        quantity: le,
        quantityDisplay: Ie ? le : "—",
        isProjectile: Ie,
        equipped: !1,
        special: (F.special ?? "").trim() || "—"
      };
    });
    const u = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = u.map((D) => {
      var ie;
      const F = (D == null ? void 0 : D.system) ?? {}, G = !!((ie = D.system) != null && ie.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (F.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (F.speedPenalty ?? "").toString().trim() || "—",
        level: Ki((F.level ?? "").toString().trim()),
        special: (F.special ?? F.other ?? "").toString().trim() || "—",
        equipped: G
      };
    });
    const a = (((x = this.actor.items) == null ? void 0 : x.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = a.map((D) => {
      var Ie, le, ye;
      const F = ((Ie = D == null ? void 0 : D.system) == null ? void 0 : Ie.abilityType) ?? "", G = F === "active" ? "Aktív" : F === "passive" ? "Passzív" : F || "—", ie = F === "active", de = Number((le = D == null ? void 0 : D.system) == null ? void 0 : le.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, fe = (((ye = D == null ? void 0 : D.system) == null ? void 0 : ye.description) ?? "").trim(), ae = fe ? fe.length > 60 ? fe.slice(0, 57) + "…" : fe : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: G,
        description: ae,
        kp: de,
        isActive: ie,
        slotKey: "",
        equipped: !1
      };
    });
    const o = (((V = this.actor.items) == null ? void 0 : V.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = o.map((D) => {
      const F = (D == null ? void 0 : D.system) ?? {}, G = (F.description ?? "").trim(), ie = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—", de = F.quantity != null ? String(F.quantity).trim() : "1";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        quantity: de,
        description: ie
      };
    });
    const y = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", r = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === y).sort((D, F) => {
      const G = typeof D.sort == "number" ? D.sort : 0, ie = typeof F.sort == "number" ? F.sort : 0;
      return G - ie;
    }), i = [];
    let c = 0, l = 0, m = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of r) {
      const F = (D == null ? void 0 : D.system) ?? {}, G = Number(F.level ?? 0) || 0, ie = (F.storage ?? "").toString().trim().replace(",", "."), de = Number(ie);
      Number.isFinite(de) && (m += de);
      const fe = F.abilities ?? {}, ae = Array.isArray(fe.items) ? fe.items : [], le = (await Promise.all(
        ae.map(async (se) => {
          var ge;
          if (!se) return null;
          try {
            const ne = await fromUuid(se);
            if (ne && (ne.type === "Kepesseg" || ne.type === "ability")) return ne;
          } catch {
            const ne = (ge = game.items) == null ? void 0 : ge.get(se);
            if (ne && (ne.type === "Kepesseg" || ne.type === "ability")) return ne;
          }
          return null;
        })
      )).map((se, ge) => ({ doc: se, ref: ae[ge] })).filter((se) => !!se.doc && !!se.ref).map(({ doc: se, ref: ge }) => {
        var Ne, ut;
        const ne = (((Ne = se.system) == null ? void 0 : Ne.kind) ?? "passive").toString(), lt = Number(((ut = se.system) == null ? void 0 : ut.kp) ?? 0) || 0, Me = ne === "species";
        return {
          id: se.id,
          ref: ge,
          name: se.name,
          img: se.img,
          kind: ne,
          kpDisplay: Me ? 0 : lt
        };
      });
      if (y === "Helyiseg") {
        const se = (F.hit ?? "").toString().trim();
        i.push({
          itemId: D.id,
          actorId: this.actor.id,
          name: (D == null ? void 0 : D.name) ?? "—",
          img: (D == null ? void 0 : D.img) ?? "",
          level: G,
          hit: se,
          abilities: le,
          isHelyiseg: !0
        });
        continue;
      }
      const ye = F.health ?? {}, Ke = Number(ye.max ?? 0) || 0, Ue = Number(ye.value ?? 0) || 0;
      let ze;
      if (Ke <= 0)
        ze = void 0;
      else if (Ue <= 0)
        ze = 0;
      else {
        const se = Ue / Ke;
        se > 2 / 3 ? ze = 3 : se > 1 / 3 ? ze = 2 : ze = 1;
      }
      const Be = (F.hit ?? "").toString().trim(), ot = (F.speed ?? "").toString().trim().replace(",", "."), He = Number(ot);
      Number.isFinite(He) && (c += He);
      const Ye = (F.range ?? "").toString().trim().replace(",", "."), Ge = Number(Ye);
      Number.isFinite(Ge) && (l += Ge);
      const ct = (F.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: G,
        hpMax: Ke,
        hpValue: Ue,
        hpStatus: ze,
        hit: Be,
        damage: ct,
        abilities: le,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = m, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = r.length;
    let k = "Kicsi", I = 0, v = 0;
    g >= 11 ? (k = "Nagy", I = -4, v = -6) : g >= 6 ? (k = "Közepes", I = -2, v = -3) : (k = "Kicsi", I = 0, v = 0), e.sizeForSelect = k, e.unitCount = g, e.sizeSpeedPenalty = I, e.sizeDefensePenalty = v;
    const w = c + I, _ = l;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: w },
        vehicle: { toolsRange: _, storage: h },
        identity: { size: k }
      },
      { inplace: !1 }
    );
    const O = (((ce = e.weaponsTable) == null ? void 0 : ce.length) ?? 0) > 0 || (((X = e.armorTable) == null ? void 0 : X.length) ?? 0) > 0 || (((U = e.microchipsTable) == null ? void 0 : U.length) ?? 0) > 0 || (((Q = e.itemsTable) == null ? void 0 : Q.length) ?? 0) > 0;
    e.showEquipmentDropZone = !O;
    const C = (((ue = this.actor.items) == null ? void 0 : ue.contents) ?? []).filter((D) => D.type === "Egyeb");
    return e.egyebList = C.map((D) => {
      const G = (((D == null ? void 0 : D.system) ?? {}).description ?? "").trim(), ie = G ? G.length > 80 ? G.slice(0, 77) + "…" : G : "";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        description: ie
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
      var g, k, I, v;
      u.preventDefault(), (g = u.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const a = (I = (k = u.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : I.itemId;
      let o = n._draggingUnitId;
      const y = (v = u.originalEvent) == null ? void 0 : v.dataTransfer;
      if (!o && y && (o = y.getData("text/plain")), n._draggingUnitId = null, !o || !a || o === a) return;
      const r = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", c = this.actor.items.contents.filter((w) => w.type === r).sort((w, _) => {
        const O = typeof w.sort == "number" ? w.sort : 0, C = typeof _.sort == "number" ? _.sort : 0;
        return O - C;
      }).map((w) => w.id), l = c.indexOf(o), m = c.indexOf(a);
      if (l === -1 || m === -1) return;
      c.splice(l, 1), c.splice(m, 0, o);
      const h = c.map((w, _) => ({
        _id: w,
        sort: (_ + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (u) => {
      var r, i, c, l, m, h, g, k, I, v;
      u.preventDefault();
      const a = (l = (c = (i = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : c.dataset) == null ? void 0 : l.abilityRef, o = (k = (g = (h = (m = u.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : k.abilityId;
      let y = null;
      if (a)
        try {
          y = await fromUuid(a);
        } catch {
          y = null;
        }
      !y && o && (y = ((I = game.items) == null ? void 0 : I.get(o)) ?? null), (v = y == null ? void 0 : y.sheet) == null || v.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (u) => {
      var i, c, l, m;
      u.preventDefault();
      const a = (c = (i = u.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, ".jarmu-unit-ability-pill"), o = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.abilityRef, y = (m = a == null ? void 0 : a.dataset) == null ? void 0 : m.abilityId, r = o || y;
      r && await this._postUnitAbilityToChat(r);
    });
    const p = (u) => {
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
      r && (y.contains(r) || this.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), p(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var l, m, h;
      const a = u.currentTarget, o = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!o) return;
      const y = this.actor.items.get(o);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (a.value ?? "").trim(), i = r === "" ? 0 : Number(r), c = (m = a.closest) == null ? void 0 : m.call(a, ".jarmu-unit-row");
      if (c) {
        const g = (h = c.querySelector) == null ? void 0 : h.call(c, ".jarmu-unit-hp-max"), k = (g == null ? void 0 : g.textContent) ?? "", I = Number((k ?? "").trim()) || 0;
        let v;
        if (I <= 0)
          v = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          v = 0;
        else {
          const w = i / I;
          w > 2 / 3 ? v = 3 : w > 1 / 3 ? v = 2 : v = 1;
        }
        v === void 0 ? c.removeAttribute("data-hp-status") : c.dataset.hpStatus = String(v);
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
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
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
    var f, u, a, o, y, r, i, c, l;
    const e = this.actor;
    if (!e) return;
    const t = ((u = (f = e.items).get) == null ? void 0 : u.call(f, s)) ?? ((o = (a = e.items.contents) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (m) => m.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (l = (r = ui.notifications) == null ? void 0 : r.warn) == null || l.call(
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
    var o, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((o = game.items) == null ? void 0 : o.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
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
    const p = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(n.type)) return super._onDropItem(s, e);
    if (((a = n.parent) == null ? void 0 : a.id) === p.id) return;
    const f = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [f]);
  }
};
ee(ve, "PARTS", foundry.utils.mergeObject(
  R(ve, ve, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(ve, ve, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((js = R(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : js.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ks = R(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Bs = (Us = R(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Us.window) == null ? void 0 : Bs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Kt = ve;
function Ui(S) {
  if (S == null) return 0;
  const s = String(S).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function Ls(S) {
  var e;
  return (((e = S == null ? void 0 : S.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var p;
    return t + Ui((p = n.system) == null ? void 0 : p.veszely);
  }, 0);
}
var Hs;
const at = class at extends Kt {
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
      var O, C, E, j, K, x, V;
      const a = ((O = e.querySelector) == null ? void 0 : O.call(e, "form")) ?? e, o = (C = a.querySelector) == null ? void 0 : C.call(a, 'select[name="system.identity.assignment"]'), y = (E = a.querySelector) == null ? void 0 : E.call(a, 'select[name="system.identity.subAssignment"]'), r = (j = a.querySelector) == null ? void 0 : j.call(a, "input.bazis-threat-total"), i = (K = a.querySelector) == null ? void 0 : K.call(a, 'input[name="system.combat.threatBonus"]');
      if (!o || !r || !i) return;
      const c = o.value ?? "", l = (y == null ? void 0 : y.value) ?? "", m = t[c] ?? 0, h = n[l] ?? 0, g = (((V = (x = this.actor) == null ? void 0 : x.items) == null ? void 0 : V.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, k = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", I = p[k] ?? 0, v = Number(i.value ?? 0) || 0, w = Ls(this.actor), _ = m + h + I + v + w;
      r.value = _;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', d);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, p = n.identity ?? {}, d = n.combat ?? {}, f = p.assignment ?? "", u = p.subAssignment ?? "", a = {
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
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, r = a[f] ?? 0, i = o[u] ?? 0, c = e.sizeForSelect ?? "Kicsi", l = y[c] ?? 0, m = Number(d.threatBonus ?? 0) || 0, h = Ls(this.actor), g = r + i + l + m + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...d, threat: g, threatBonus: m } },
        { inplace: !1 }
      ), e.bazisThreatBase = r;
    }
    return e;
  }
};
ee(at, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(at, at, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Hs = R(at, at, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Zt = at;
var Gs, Ws, Vs, Js;
const ke = class ke extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var a, o, y;
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
    const d = await super.render(s, e), f = this.element, u = this.form ?? this.element;
    if (f && this._applyScrollState(f, p.scrollState), p.focus && u) {
      let r = null;
      if (p.focus.name && (r = ((o = u.querySelector) == null ? void 0 : o.call(u, `[name="${CSS.escape(p.focus.name)}"]`)) ?? null), !r && p.focus.id && (r = ((y = u.querySelector) == null ? void 0 : y.call(u, `#${CSS.escape(p.focus.id)}`)) ?? null), r && typeof r.focus == "function" && (r.focus(), "setSelectionRange" in r))
        try {
          r.setSelectionRange(p.focus.selectionStart ?? 0, p.focus.selectionEnd ?? 0);
        } catch {
        }
    }
    return d;
  }
  async _prepareContext(s) {
    var m, h, g, k, I;
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
    }, f = "— Nincs fegyver —", u = ((m = t.items) == null ? void 0 : m.contents) ?? [], a = u.filter((v) => v.type === "Fegyver");
    e.weaponsTable = a.map((v) => {
      const w = v.system ?? {}, _ = w.type ?? "", O = (p[_] ?? _) || "—", C = w.size ?? "", E = (d[C] ?? C) || "", j = [O, E].filter(Boolean).join(", ") || O || "—", K = _ === "projectile" || C === "thrown", x = w.quantity != null ? String(w.quantity).trim() : "1", V = (typeof w.range == "string" ? (w.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: v.id,
        actorId: t.id,
        name: v.name ?? f,
        img: v.img ?? "",
        bonus: String(w.bonus ?? "").trim() || "0",
        damage: w.damage ?? "",
        rangeStr: V || "—",
        typeLabel: O,
        typeAndSize: j,
        quantity: x,
        quantityDisplay: K ? x : "—",
        isProjectile: K,
        equipped: !1,
        special: (w.special ?? "").trim() || "—"
      };
    });
    const o = u.filter((v) => v.type === "Pancel");
    e.armorTable = o.map((v) => {
      var O;
      const w = v.system ?? {}, _ = !!((O = v.system) != null && O.equipped);
      return {
        itemId: v.id,
        actorId: t.id,
        name: v.name ?? "—",
        img: v.img ?? "",
        protectionBonus: (w.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (w.speedPenalty ?? "").toString().trim() || "—",
        level: (w.level ?? "").toString().trim() || "—",
        special: (w.special ?? w.other ?? "").toString().trim() || "—",
        equipped: _
      };
    });
    const y = u.filter((v) => v.type === "MikroChip");
    e.microchipsTable = y.map((v) => {
      var K, x, V;
      const w = ((K = v.system) == null ? void 0 : K.abilityType) ?? "", _ = w === "active" ? "Aktív" : w === "passive" ? "Passzív" : w || "—", O = w === "active", C = Number((x = v.system) == null ? void 0 : x.replaceCost) >= 0 ? Number(v.system.replaceCost) : 0, E = (((V = v.system) == null ? void 0 : V.description) ?? "").trim(), j = E ? E.length > 60 ? `${E.slice(0, 57)}…` : E : "—";
      return {
        itemId: v.id,
        actorId: t.id,
        name: v.name ?? "—",
        img: v.img ?? "",
        typeLabel: _,
        description: j,
        kp: C,
        isActive: O,
        slotKey: "",
        equipped: !1
      };
    });
    const r = u.filter((v) => v.type === "Targy");
    e.itemsTable = r.map((v) => {
      const w = v.system ?? {}, _ = (w.description ?? "").trim(), O = _ ? _.length > 60 ? `${_.slice(0, 57)}…` : _ : "—", C = w.quantity != null ? String(w.quantity).trim() : "1";
      return {
        itemId: v.id,
        actorId: t.id,
        name: v.name ?? "—",
        img: v.img ?? "",
        quantity: C,
        description: O
      };
    });
    const i = (((h = e.weaponsTable) == null ? void 0 : h.length) ?? 0) > 0 || (((g = e.armorTable) == null ? void 0 : g.length) ?? 0) > 0 || (((k = e.microchipsTable) == null ? void 0 : k.length) ?? 0) > 0 || (((I = e.itemsTable) == null ? void 0 : I.length) ?? 0) > 0;
    e.showEquipmentDropZone = !i;
    const c = u.filter((v) => v.type === "Egyeb");
    e.egyebList = c.map((v) => {
      const _ = ((v.system ?? {}).description ?? "").trim(), O = _ ? _.length > 80 ? `${_.slice(0, 77)}…` : _ : "";
      return {
        itemId: v.id,
        actorId: t.id,
        name: v.name ?? "—",
        img: v.img ?? "",
        description: O
      };
    });
    const l = n.vallalkozas ?? {};
    if (Array.isArray(l.militiaMissions)) {
      const v = Number(l.level ?? 1) || 1, w = Number(l.militiaPower ?? 0) || 0, _ = l.militiaMissions.map((O) => {
        const C = Number(O.baseRoll ?? 0) || 0, E = C > 0 ? C * v : Number(O.difficulty ?? 0) || 0, j = E - w;
        return {
          ...O,
          baseRoll: C,
          difficulty: E,
          risk: j
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
    const p = (u) => {
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
      d(a) && p(a);
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
    var u, a, o;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((a = e.system) == null ? void 0 : a.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((o = e.system) == null ? void 0 : o.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
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
ee(ke, "PARTS", foundry.utils.mergeObject(
  R(ke, ke, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(ke, ke, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Vallalkozas"],
    template: "systems/vacuum-of-the-void/templates/actor/vallalkozas-sheet.hbs",
    width: 800,
    minWidth: 700,
    height: 600,
    form: foundry.utils.mergeObject(((Gs = R(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.form) ?? {}, { submitOnChange: !0 }),
    window: foundry.utils.mergeObject(((Ws = R(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Js = (Vs = R(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.window) == null ? void 0 : Js.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Yt = ke;
const Bi = [
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
      var f, u, a;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Bi, e;
  }
};
ee(Ae, "PARTS", foundry.utils.mergeObject(R(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), ee(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Zs = R(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Zs.form) ?? {}, { submitOnChange: !1 })
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
      var f, u, a;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
ee(Fe, "PARTS", foundry.utils.mergeObject(R(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), ee(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ys = R(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 })
}));
let Qt = Fe;
var Xs;
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
      var f, u, a;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
ee(Pe, "PARTS", foundry.utils.mergeObject(R(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), ee(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Xs = R(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.form) ?? {}, { submitOnChange: !1 })
}));
let es = Pe;
var Qs;
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
      var f, u, a;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
      p(f) && n(f);
    }, e._votvInput = (d) => {
      var a;
      const f = d.target;
      if ((f == null ? void 0 : f.name) === "name") return;
      const u = (f == null ? void 0 : f.form) ?? ((a = f == null ? void 0 : f.closest) == null ? void 0 : a.call(f, "form"));
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
ee(Ee, "PARTS", foundry.utils.mergeObject(R(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), ee(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Qs = R(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !0 })
}));
let ts = Ee;
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
      var f, u, a;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
ee($e, "PARTS", foundry.utils.mergeObject(R($e, $e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), ee($e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R($e, $e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ei = R($e, $e, "DEFAULT_OPTIONS")) == null ? void 0 : ei.form) ?? {}, { submitOnChange: !1 })
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
      var f, u, a;
      return d && (((u = (f = e.element) == null ? void 0 : f.contains) == null ? void 0 : u.call(f, d)) || e.id && ((a = d.closest) == null ? void 0 : a.call(d, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (d) => {
      var u, a, o;
      const f = ((u = d.target) == null ? void 0 : u.form) ?? ((o = (a = d.target) == null ? void 0 : a.closest) == null ? void 0 : o.call(a, "form"));
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
ee(xe, "PARTS", foundry.utils.mergeObject(R(xe, xe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), ee(xe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(R(xe, xe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((ti = R(xe, xe, "DEFAULT_OPTIONS")) == null ? void 0 : ti.form) ?? {}, { submitOnChange: !1 })
}));
let is = xe;
var si, ii;
const _e = class _e extends foundry.applications.api.HandlebarsApplicationMixin(
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
        } catch (w) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", w);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", g), !g || g.type !== "Item") return;
        const I = ((w) => {
          var O;
          if (!w) return null;
          const _ = w.uuid ?? w.documentUuid ?? ((O = w.data) == null ? void 0 : O.uuid) ?? (typeof w == "string" ? w : null);
          if (_) return _;
          if (typeof w == "object") {
            for (const C of Object.values(w))
              if (typeof C == "string" && C.includes(".") && C.startsWith("Item.")) return C;
          }
          return null;
        })(g);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", I), !I) return;
        const v = await fromUuid(I);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", v == null ? void 0 : v.id, v == null ? void 0 : v.type), !v || v.documentName !== "Item") return;
        if (v.type === "Kepesseg" || v.type === "ability") {
          const w = v.uuid ?? v.id, _ = this.document.system ?? {}, O = Array.isArray((l = _.abilities) == null ? void 0 : l.items) ? _.abilities.items.slice() : [];
          O.push(w), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (m) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", m);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (r) => {
      var m, h, g, k, I, v;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && c && (l = ((I = game.items) == null ? void 0 : I.get(c)) ?? null), (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (r) => {
      var m, h, g, k;
      r.preventDefault();
      const i = (h = (m = r.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, c = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemId, l = i || c;
      l && await this._postAbilityToChat(l);
    }), n.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, k, I;
      if (r.preventDefault(), !r.altKey) return;
      const i = (k = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : k.itemRef;
      if (!i) return;
      const c = this.document.system ?? {}, l = Array.isArray((I = c.abilities) == null ? void 0 : I.items) ? c.abilities.items.slice() : [], m = l.indexOf(i), h = m >= 0 ? [...l.slice(0, m), ...l.slice(m + 1)] : l;
      await this.document.update({ "system.abilities.items": h });
    });
    const p = (y = t == null ? void 0 : t.querySelector) == null ? void 0 : y.call(t, ".karakter-ability-area[data-area='abilities']");
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
    }, f = (r) => {
      var i, c, l;
      return r && (((c = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : c.call(i, r)) || e.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var c, l, m;
      const i = ((c = r.target) == null ? void 0 : c.form) ?? ((m = (l = r.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
    )).map((u, a) => ({ doc: u, ref: p[a] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: a }) => {
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
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", f), e.system = t, e.abilityList = f, e;
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
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
ee(_e, "PARTS", foundry.utils.mergeObject(R(_e, _e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), ee(_e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(_e, _e, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((si = R(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : si.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ii = R(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : ii.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let ns = _e;
var ni, ri;
const Oe = class Oe extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var c, l, m, h, g, k;
      o.preventDefault();
      const y = (l = (c = o.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : l.itemRef, r = (h = (m = o.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && r && (i = ((g = game.items) == null ? void 0 : g.get(r)) ?? null), (k = i == null ? void 0 : i.sheet) == null || k.render(!0);
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
    const p = (a = t == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (o) => {
      o.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
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
        const g = ((I) => {
          var w;
          if (!I) return null;
          const v = I.uuid ?? I.documentUuid ?? ((w = I.data) == null ? void 0 : w.uuid) ?? (typeof I == "string" ? I : null);
          if (v) return v;
          if (typeof I == "object") {
            for (const _ of Object.values(I))
              if (typeof _ == "string" && _.includes(".") && _.startsWith("Item.")) return _;
          }
          return null;
        })(m);
        if (!g) return;
        const k = await fromUuid(g);
        if (!k || k.documentName !== "Item") return;
        if (k.type === "Kepesseg" || k.type === "ability") {
          const I = k.uuid ?? k.id, v = this.document.system ?? {}, w = Array.isArray((i = v.abilities) == null ? void 0 : i.items) ? v.abilities.items.slice() : [];
          w.push(I), await this.document.update({ "system.abilities.items": w });
        }
      } catch (c) {
        console.error("VoidHelyisegSheet global drop error", c);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), !this.isEditable) return;
    const d = (o) => {
      if (!o) return;
      const y = e._getFormDataForUpdate(o);
      Object.keys(y).length !== 0 && e.document.update(y).catch((r) => console.warn("VoidHelyisegSheet save failed", r));
    }, f = (o) => {
      var y, r, i;
      return o && (((r = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : r.call(y, o)) || e.id && ((i = o.closest) == null ? void 0 : i.call(o, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (o) => {
      var r, i, c;
      const y = ((r = o.target) == null ? void 0 : r.form) ?? ((c = (i = o.target) == null ? void 0 : i.closest) == null ? void 0 : c.call(i, "form"));
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
    )).map((u, a) => ({ doc: u, ref: p[a] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: a }) => {
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
    return e.system = t, e.abilityList = f, e;
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
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), d = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : t === "module" ? "Modul" : "Passzív";
    let f = "";
    t === "active" && n > 0 ? f = `<p><strong>KP:</strong> ${n}</p>` : t === "module" && n > 0 && (f = `<p><strong>KP:</strong> ${n}</p>`);
    const u = p ? `<p>${p}</p>` : "", a = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${d}</p>
      ${f}
      ${u}
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
      const d = e.uuid ?? e.id, f = this.document.system ?? {}, u = Array.isArray((n = f.abilities) == null ? void 0 : n.items) ? f.abilities.items.slice() : [];
      return u.push(d), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
ee(Oe, "PARTS", foundry.utils.mergeObject(R(Oe, Oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
})), ee(Oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  R(Oe, Oe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((ni = R(Oe, Oe, "DEFAULT_OPTIONS")) == null ? void 0 : ni.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ri = R(Oe, Oe, "DEFAULT_OPTIONS")) == null ? void 0 : ri.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let rs = Oe;
const ai = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function oi(S) {
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
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = bi, CONFIG.Actor.dataModels.Npc = Lt, CONFIG.Actor.dataModels.Jarmu = wi, CONFIG.Actor.dataModels.Bazis = Ti, CONFIG.Actor.dataModels.Vallalkozas = Mi, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = Ds, CONFIG.Item.dataModels.weapon = Ds, CONFIG.Item.dataModels.Pancel = Oi, CONFIG.Item.dataModels.MikroChip = Ci, CONFIG.Item.dataModels.Kepesseg = Cs, CONFIG.Item.dataModels.ability = Cs, CONFIG.Item.dataModels.Targy = Ni, CONFIG.Item.dataModels.Egyeb = Ai, CONFIG.Item.dataModels.Jarmuegyseg = Pi, CONFIG.Item.dataModels.Helyiseg = zi, (p = CONFIG.Actor).trackableAttributes ?? (p.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
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
      var h, g, k, I;
      const c = (h = game.actors) == null ? void 0 : h.get(i);
      if (!c || c.type !== "Karakter") return;
      const l = Nt.getTotalSpeedRaw(c), m = (g = c.effects) == null ? void 0 : g.find((v) => v.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !m) {
        const v = ((I = (k = CONFIG.statusEffects) == null ? void 0 : k.find((w) => w.id === "immobilized")) == null ? void 0 : I.img) ?? "";
        c.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: v,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: c.uuid
        }]).then(() => {
          var _, O;
          const w = ((_ = canvas.tokens) == null ? void 0 : _.placeables) ?? [];
          for (const C of w)
            ((O = C == null ? void 0 : C.document) == null ? void 0 : O.actorId) === i && typeof C.draw == "function" && C.draw();
        }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect create failed:", w));
      } else l > 0 && m && m.delete().then(() => {
        var w, _;
        const v = ((w = canvas.tokens) == null ? void 0 : w.placeables) ?? [];
        for (const O of v)
          ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === i && typeof O.draw == "function" && O.draw();
      }).catch((v) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", v));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (a, o, y, r) => {
    var _, O, C, E, j, K, x, V, Z, J, Y, ce, X;
    const i = a == null ? void 0 : a.id;
    if (!i || (() => {
      if (!o || typeof o != "object") return !1;
      const U = Object.keys(o);
      if (U.length !== 1 || U[0] !== "system") return !1;
      const Q = o.system ?? {};
      if (typeof Q != "object" || Array.isArray(Q)) return !1;
      const ue = Object.keys(Q);
      if (ue.length !== 1 || ue[0] !== "resources") return !1;
      const D = Q.resources ?? {};
      if (typeof D != "object" || Array.isArray(D)) return !1;
      const F = Object.keys(D);
      return F.length ? F.every((G) => typeof G == "string" && G.startsWith("kpDot")) : !1;
    })()) return;
    if ((a.type === "Karakter" || a.type === "Npc") && ((_ = o == null ? void 0 : o.system) != null && _.combat) && "initiativeResult" in o.system.combat) {
      const U = Number((C = (O = a.system) == null ? void 0 : O.combat) == null ? void 0 : C.initiativeResult), Q = Number.isFinite(U) ? U : 0, ue = game.combat;
      if (ue) {
        const D = ((E = ue.combatants) == null ? void 0 : E.contents) ?? Array.from(ue.combatants ?? []);
        for (const F of D)
          if (((j = F.actor) == null ? void 0 : j.id) === i || F.actorId === i) {
            ue.updateEmbeddedDocuments("Combatant", [{ _id: F.id, initiative: Q }]).catch(() => {
            });
            break;
          }
      }
    }
    if (a.type === "Npc" && ((K = o == null ? void 0 : o.system) != null && K.identity) && "size" in o.system.identity) {
      const U = oi((V = (x = a.system) == null ? void 0 : x.identity) == null ? void 0 : V.size);
      a.update({
        "prototypeToken.width": U,
        "prototypeToken.height": U
      }).catch((Q) => console.warn("Vacuum of the Void | NPC token size update failed for", a.name, Q));
    }
    const l = document.activeElement, m = l && (l.tagName === "INPUT" && l.type !== "checkbox" && l.type !== "radio" || l.tagName === "TEXTAREA" || l.isContentEditable), h = [], g = (Z = game.actors) == null ? void 0 : Z.get(i);
    g != null && g.apps && h.push(...Array.from(g.apps));
    const k = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const U of k) {
      if (((J = U.document) == null ? void 0 : J.id) !== i || ((Y = U.document) == null ? void 0 : Y.documentName) !== "Actor") continue;
      const Q = (ce = U.constructor) == null ? void 0 : ce.name;
      Q !== "VoidKarakterSheet" && Q !== "VoidJarmuSheet" && Q !== "VoidBazisSheet" && Q !== "VoidVallalkozasSheet" || h.includes(U) || h.push(U);
    }
    if (m && h.some((U) => {
      const Q = (U == null ? void 0 : U.form) ?? (U == null ? void 0 : U.element);
      return Q && Q.contains(l);
    })) return;
    const v = (X = game.votv) == null ? void 0 : X._lastKarakterSheetBlurSave, w = v && Date.now() - v.at < e ? v.appId : null;
    setTimeout(() => {
      for (const U of h)
        !(U != null && U.rendered) || typeof U.render != "function" || U.id !== w && U.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (a, o, y, r) => {
    var m, h, g;
    const i = a == null ? void 0 : a.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || a.type !== "Fegyver") return;
    const c = ((m = i.system) == null ? void 0 : m.weapons) ?? {}, l = {};
    for (const [k, I] of Object.entries(c)) {
      if (!k.startsWith("slot")) continue;
      const v = ((I == null ? void 0 : I.itemId) ?? "").trim();
      !v || v !== a.id || (l[`system.weapons.${k}.name`] = a.name ?? "", l[`system.weapons.${k}.damage`] = ((h = a.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${k}.bonus`] = ((g = a.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, k, I, v, w, _, O, C, E, j, K, x, V, Z, J, Y, ce, X, U, Q, ue, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (k = game.messages) == null ? void 0 : k.get(n), d = (v = (I = p == null ? void 0 : p.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : v.weapon;
    if (!d) return;
    const f = d.actorId ?? ((w = p == null ? void 0 : p.speaker) == null ? void 0 : w.actor) ?? "";
    if (!f) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((_ = game.actors) == null ? void 0 : _.get(d.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(f));
    if (u || (u = ((E = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : E.flatMap((G) => {
      var ie;
      return ((ie = G.tokens) == null ? void 0 : ie.contents) ?? [];
    }).map((G) => G.actor).find((G) => G && (G.id === f || G.id === d.actorId))) ?? null), !u) return;
    const a = d.itemId ? ((K = (j = u.items) == null ? void 0 : j.get) == null ? void 0 : K.call(j, d.itemId)) ?? ((Z = (V = (x = u.items) == null ? void 0 : x.contents) == null ? void 0 : V.find) == null ? void 0 : Z.call(V, (F) => F.id === d.itemId)) : null;
    let o = (d.damageFormula ?? "").trim();
    if (o || (o = (((J = a == null ? void 0 : a.system) == null ? void 0 : J.damage) ?? "").trim()), !o && d.slotKey && (o = (((((Y = u.system) == null ? void 0 : Y.weapons) ?? {})[d.slotKey] ?? {}).damage ?? "").trim()), !o) {
      (Q = (ce = ui.notifications) == null ? void 0 : ce.warn) == null || Q.call(ce, ((U = (X = game.i18n) == null ? void 0 : X.localize) == null ? void 0 : U.call(X, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(o);
    await y.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = d.targetName || "", c = d.hitLocationName || "", l = ((a == null ? void 0 : a.name) ?? (d.slotKey ? ((D = (((ue = u.system) == null ? void 0 : ue.weapons) ?? {})[d.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
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
      var d, f, u, a, o, y;
      if (!((f = (d = e.target) == null ? void 0 : d.closest) != null && f.call(d, "#actors"))) return;
      const t = (a = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : a.call(u, "[data-document-id]"), n = (o = t == null ? void 0 : t.getAttribute) == null ? void 0 : o.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((y = game.actors) != null && y.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, d;
    const e = ((t = game.actors) == null ? void 0 : t.filter((f) => f.type === "Karakter")) ?? [];
    for (const f of e) {
      const u = Nt.getTotalSpeedRaw(f), a = (n = f.effects) == null ? void 0 : n.find((o) => o.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !a) {
        const o = ((d = (p = CONFIG.statusEffects) == null ? void 0 : p.find((y) => y.id === "immobilized")) == null ? void 0 : d.img) ?? "";
        await f.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: o,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: f.uuid
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
      const p = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: ai },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, d = await n.create(p);
      d && console.log("Vacuum of the Void | Default scene created:", d.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var d, f, u, a, o, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((d = game.actors) == null ? void 0 : d.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of t)
      try {
        const i = r.prototypeToken, c = ((f = i == null ? void 0 : i.bar1) == null ? void 0 : f.attribute) ?? "", l = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
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
  var d, f, u, a, o, y, r, i, c;
  const t = (d = game.votv) == null ? void 0 : d._dragSourceActorId, n = t ?? S.actorId ?? ((f = S._source) == null ? void 0 : f.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const p = n ? (u = game.actors) == null ? void 0 : u.get(n) : S.actor ?? null;
  if (p) {
    if (p.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((o = (a = game.i18n) == null ? void 0 : a.localize) == null ? void 0 : o.call(a, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
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
      const l = oi((c = (i = p.system) == null ? void 0 : i.identity) == null ? void 0 : c.size);
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
const As = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function ci(S) {
  var t;
  for (const n of ((t = game.actors) == null ? void 0 : t.contents) ?? [])
    !n || n.type !== "Karakter" || n.update(As).catch((p) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, p);
    });
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const n of e) {
    const p = n.actor;
    !p || p.type !== "Npc" || p.update(As).catch((d) => {
      console.warn("Vacuum of the Void | KP reset failed for", p.name, d);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || ci(S);
});
function li() {
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
  setTimeout(li, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && ci(S), setTimeout(li, 0);
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
    "background.src": ai,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var y, r, i, c;
  const t = ((y = S.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, d = t.weaponAttack, f = t.weapon, u = t.vsDefense, a = t.vsDefenseInfo;
  if (!n && !p && !d && !u) return;
  const o = (r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, ".dice-roll");
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
        const k = !!f.isHit, I = f.targetName || "Célpont";
        g.textContent = k ? `Találat – ${I}` : `Nem talált – ${I}`, m.appendChild(g);
      }
      if (f.isHit && !o.querySelector(".votv-weapon-damage-chat")) {
        const k = document.createElement("button");
        k.type = "button", k.className = "votv-weapon-damage-chat";
        const I = f.hitLocationRoll, v = f.hitLocationName;
        k.textContent = I != null && v ? `Sebzés (Találati Hely ${I} - ${v})` : "Sebzés", k.dataset.actorId = String(f.actorId ?? ((c = S.speaker) == null ? void 0 : c.actor) ?? ""), k.dataset.itemId = String(f.itemId ?? ""), k.dataset.slotKey = String(f.slotKey ?? ""), k.dataset.targetName = String(f.targetName ?? ""), k.dataset.hitLocationName = String(f.hitLocationName ?? ""), k.dataset.messageId = String(S.id ?? ""), m.appendChild(k);
      }
    }
    if (!d && u && a) {
      const l = o.querySelector(".dice-total"), m = (l == null ? void 0 : l.parentElement) ?? o, h = !!a.isHit, g = a.targetName || "Célpont", k = a.hitLocationRoll, I = a.hitLocationName;
      let v = o.querySelector(".votv-defense-outcome");
      v || (v = document.createElement("div"), v.className = "votv-defense-outcome", m.appendChild(v)), v.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const w = o.querySelector(".votv-defense-hitloc");
      if (h && k != null && I) {
        let _ = w;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", m.appendChild(_)), _.textContent = `Találati Hely ${k} - ${I}`;
      } else w && w.remove();
    }
  }
});
export {
  Nt as V,
  Vt as c
};
//# sourceMappingURL=vacuum-of-the-void-Q8ZNzsSN.mjs.map
