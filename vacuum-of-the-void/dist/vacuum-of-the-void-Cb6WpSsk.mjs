var ti = Object.defineProperty;
var si = Object.getPrototypeOf;
var ii = Reflect.get;
var ni = (S, s, e) => s in S ? ti(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var te = (S, s, e) => ni(S, typeof s != "symbol" ? s + "" : s, e);
var j = (S, s, e) => ii(si(S), e, s);
const { HTMLField: ai, NumberField: F, SchemaField: H, StringField: C, BooleanField: pe, ArrayField: Dt } = foundry.data.fields;
class xt extends foundry.abstract.TypeDataModel {
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
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
          }),
          torso: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
          }),
          arms: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
          }),
          legs: new H({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new pe({ required: !1, initial: !1 }),
            box2: new pe({ required: !1, initial: !1 }),
            box3: new pe({ required: !1, initial: !1 })
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
        initiativeRanges: new Dt(
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
            active: new pe({ required: !1, initial: !1 })
          }),
          slot2: new H({
            itemId: new C({ required: !1, blank: !0, initial: "" }),
            name: new C({ required: !1, blank: !0, initial: "" }),
            active: new pe({ required: !1, initial: !1 })
          }),
          slot3: new H({
            itemId: new C({ required: !1, blank: !0, initial: "" }),
            name: new C({ required: !1, blank: !0, initial: "" }),
            active: new pe({ required: !1, initial: !1 })
          })
        }),
        equipment: new C({ required: !1, blank: !0, initial: "" }),
        armor: new Dt(
          new H({
            name: new C({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new C({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new C({ required: !1, blank: !0, initial: "" }),
            level: new C({ required: !1, blank: !0, initial: "" }),
            other: new C({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new Dt(
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
          items: new Dt(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new Dt(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new ai({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: jt, SchemaField: ri } = foundry.data.fields;
class oi extends xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ri({
        body: new jt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new jt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new jt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: ci, StringField: hs, NumberField: li } = foundry.data.fields;
class di extends xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new ci({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new hs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new hs({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new li({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: mi, StringField: bs, NumberField: pi } = foundry.data.fields;
class fi extends xt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new mi({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new bs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new bs({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
        storage: new pi({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: yi, NumberField: Fi, StringField: Be } = foundry.data.fields;
class vs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new yi({ required: !1, initial: !1 }),
      type: new Be({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Be({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Be({ required: !1, blank: !0, initial: "" }),
      damage: new Be({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Be({ required: !1, blank: !0, initial: "" }),
      special: new Be({ required: !1, blank: !0, initial: "" }),
      quantity: new Be({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Be({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: gi, StringField: Pt } = foundry.data.fields;
class hi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new gi({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Pt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Pt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Pt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Pt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: zt, StringField: ks } = foundry.data.fields;
class bi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ks({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ks({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new zt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new zt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new zt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: vi, StringField: ws } = foundry.data.fields;
class Is extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ws({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new ws({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new vi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ss } = foundry.data.fields;
class ki extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ss({ required: !1, blank: !0, initial: "" }),
      quantity: new Ss({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: wi } = foundry.data.fields;
class Ii extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new wi({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Kt, StringField: ct, SchemaField: Ts, ArrayField: Si } = foundry.data.fields;
class Ti extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Kt({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new Ts({
        max: new Kt({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new Kt({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ts({
        items: new Si(
          new ct({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new ct({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new ct({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new ct({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new ct({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new ct({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ut, StringField: lt, SchemaField: Ds, ArrayField: Di } = foundry.data.fields;
class Ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ut({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new Ds({
        max: new Ut({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new Ut({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ds({
        items: new Di(
          new lt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new lt({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new lt({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new lt({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new lt({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new lt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Bt(S) {
  if (!S || !Array.isArray(S.terms)) return { resultType: null, label: null };
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
      const m = typeof o.faces == "number" ? o.faces : void 0, h = Array.isArray(o.results) ? o.results : null;
      if (!m || !h || m === 8 || m !== 6) continue;
      const g = !n && r >= 0 && (o.number === 3 || o.number === "3") ? (n = !0, s) : r >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && g.push(k);
      }
    }
  };
  f(S.terms, 1);
  const l = s.filter((a) => a === 6).length, p = s.filter((a) => a === 1).length, d = e.filter((a) => a === 6).length, c = t.filter((a) => a === 6).length, u = l + d, y = p + c;
  return u > 0 && u === y ? { resultType: null, label: null } : u >= 3 ? { resultType: "critical", label: "Brutális Siker" } : u === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function _i(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Os, Cs, qs, Ls;
const ee = class ee extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, l, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const f = this.element, l = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const m = document.activeElement, h = l.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (p.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const c = this.element, u = this.form ?? this.element, y = p.scrollState, a = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", r = () => {
      var m, h;
      if (this._applyScrollState(c, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((m = u.querySelector) == null ? void 0 : m.call(u, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = u.querySelector) == null ? void 0 : h.call(u, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(c, y);
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
    const f = Math.floor(n / 3), l = Math.floor(2 * n / 3);
    return t <= f ? 1 : t <= l ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var p;
        return l.type === "Pancel" && ((p = l.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const p = String(((f = l.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(p);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var p;
        return l.type === "Pancel" && ((p = l.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const p = String(((f = l.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), d = Number(p);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var p;
        return l.type === "Pancel" && ((p = l.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let t = 0;
    for (const l of e) {
      const p = String(((f = l.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(p);
      Number.isFinite(d) && (t += d);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var u, y, a, i, r, o, m, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (u = e.hitLocations) == null ? void 0 : u.legs) == null ? void 0 : y.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, f = ee._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const l = Number(((r = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : r.givenSpeed) ?? 0) || 0;
    let p;
    f === 1 ? p = -6 : f === 2 ? p = -3 : p = l, p += ee._getTotalArmorSpeedPenaltyStatic(s);
    const d = Number(((m = (o = s.system) == null ? void 0 : o.combat) == null ? void 0 : m.speed) ?? 0) || 0, c = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return d + c + (Number.isFinite(p) ? p : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : ee.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, a, i, r, o, m, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((r = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && r.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((m = (o = this.actor) == null ? void 0 : o.system) == null ? void 0 : m.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, l = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, p = ee._healthStatusFromRatio(l, f), d = Number(((T = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : T.givenSpeed) ?? 0) || 0;
    let c;
    p === 0 ? c = 0 : p === 1 ? c = -6 : p === 2 ? c = -3 : c = d;
    const u = this._getTotalArmorSpeedPenalty();
    c += u, t.textContent = String(c);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var c, u, y, a, i, r, o, m, h, g, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (y = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : y.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, f = (o = (r = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : r.has) != null && o.call(r, "lookaround") ? 1 : 0, l = (g = (h = (m = this.actor) == null ? void 0 : m.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, p = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, d = n + this._getTotalArmorProtectionBonus() + f + l + p;
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), l = t('input[name="system.combat.defense"]'), p = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const d = Number(l == null ? void 0 : l.value) || 0, c = Number(p == null ? void 0 : p.value) || 0, u = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(d + c + u);
  }
  _writeTotalSpeed(s = null) {
    var o, m, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), l = t('input[name="system.combat.speed"]'), p = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (m = (o = this.actor) == null ? void 0 : o.statuses) == null ? void 0 : m.has) != null && h.call(m, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const d = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, c = ((w = (k = d.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, u = ((T = d.currentHealth) == null ? void 0 : T.legs) ?? 0;
    if (ee._healthStatusFromRatio(u, c) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(l == null ? void 0 : l.value) || 0, i = Number(p == null ? void 0 : p.value) || 0, r = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(a + i + r);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, p, d, c;
    const e = ee.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, n = ((d = (p = t.hitLocations) == null ? void 0 : p[e]) == null ? void 0 : d.value) ?? 0, f = ((c = t.currentHealth) == null ? void 0 : c[e]) ?? 0;
    return ee._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var p, d, c, u;
    const t = ee.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((p = s == null ? void 0 : s.system) == null ? void 0 : p.resources) ?? {}, f = ((c = (d = n.hitLocations) == null ? void 0 : d[t]) == null ? void 0 : c.value) ?? 0, l = ((u = n.currentHealth) == null ? void 0 : u[t]) ?? 0;
    return ee._healthStatusFromRatio(l, f);
  }
  async _prepareContext(s) {
    var dt, mt, pt, ft, yt, gt, ht, bt, vt, Je, kt, wt, Ze, I, E, P, G, ke, ne, qe, De, we, xe, Ye, Xe, Nt, Ft, At, Et, It, rt, es, ts, ss, is, ns, as, rs, os, cs, ls, us, ds, ms, ps;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((pt = (mt = (dt = this.actor.system) == null ? void 0 : dt.resources) == null ? void 0 : mt.stress) == null ? void 0 : pt.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, l = n.currentHealth ?? {}, p = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of p) {
      const N = ((ft = f[b]) == null ? void 0 : ft.value) ?? 0, L = l[b] ?? 0;
      e.computedHealthStatus[b] = ee._healthStatusFromRatio(L, N);
    }
    const d = (Number(l.head) || 0) === 0, u = ["torso", "arms", "legs"].filter((b) => (Number(l[b]) || 0) === 0).length;
    e.showDeathSkull = d || u >= 2;
    const y = e.computedHealthStatus.legs ?? 3, a = Number(((gt = (yt = this.actor.system) == null ? void 0 : yt.combat) == null ? void 0 : gt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = a;
    const r = this._getTotalArmorSpeedPenalty();
    i += r, e.effectiveGivenSpeed = i;
    const o = Number(((bt = (ht = this.actor.system) == null ? void 0 : ht.combat) == null ? void 0 : bt.givenProtection) ?? 0) || 0, m = (kt = (Je = (vt = this.actor) == null ? void 0 : vt.statuses) == null ? void 0 : Je.has) != null && kt.call(Je, "lookaround") ? 1 : 0, h = (I = (Ze = (wt = this.actor) == null ? void 0 : wt.statuses) == null ? void 0 : Ze.has) != null && I.call(Ze, "halfcover") ? 3 : 0, g = (G = (P = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : P.has) != null && G.call(P, "threequarteredcover") ? 6 : 0, v = o + this._getTotalArmorProtectionBonus() + m + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let T = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    y === 0 && (T = 0), (De = (qe = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : qe.has) != null && De.call(qe, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (xe = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : xe.givenProtection } },
      { inplace: !1 }
    ), T = 0), e.totalSpeed = T;
    const _ = ee.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(_)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = L, e.skillDisabled[b] = L === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (O.slotOrder ?? "").trim(), z = M ? M.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], U = (Ye = this.actor.system.gear) == null ? void 0 : Ye.microchips, x = U && typeof U == "object" && !Array.isArray(U) ? U : {}, J = (((Xe = x.slot1) == null ? void 0 : Xe.itemId) ?? "").trim(), Q = (((Nt = x.slot2) == null ? void 0 : Nt.itemId) ?? "").trim(), Z = (((Ft = x.slot3) == null ? void 0 : Ft.itemId) ?? "").trim(), K = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, A = typeof N.sort == "number" ? N.sort : 0;
      return L - A;
    }).map((b) => {
      var Re, et, tt, Ke, Ue, St;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let A = 0, B = "", de = null;
      for (let ot = 0; ot < z.length; ot++) {
        const Tt = z[ot];
        if ((((Re = O[Tt]) == null ? void 0 : Re.itemId) ?? "") === b.id) {
          A = ot + 1, B = ((et = O[Tt]) == null ? void 0 : et.bonus) ?? "", de = Tt;
          break;
        }
      }
      let re = null;
      L && (J === b.id ? re = "slot1" : Q === b.id ? re = "slot2" : Z === b.id && (re = "slot3"));
      const Qe = N && ((tt = b.system) != null && tt.damage) ? b.system.damage : "", Ie = N && typeof ((Ke = b.system) == null ? void 0 : Ke.range) == "string" ? (b.system.range || "").trim() : "", _e = de ? Number((Ue = O[de]) == null ? void 0 : Ue.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: N,
        slotAssignment: A,
        slotBonus: B,
        slotKey: de,
        microchipSlotKey: re,
        isEquipped: !!(de || re),
        damage: Qe,
        rangeStr: Ie,
        slotBonusNum: _e,
        quantity: Number(((St = b.system) == null ? void 0 : St.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = K;
    const V = (((At = this.actor.items) == null ? void 0 : At.contents) ?? []).filter((b) => b.type === "Fegyver"), ce = V.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = ce;
    const ve = "— Nincs fegyver —", D = z.filter((b) => {
      const L = ((O[b] ?? {}).itemId ?? "").trim();
      return L ? !!V.find((B) => B.id === L) : !1;
    });
    e.weaponSlots = D.map((b, N) => {
      const L = O[b] ?? {}, A = (L.itemId ?? "").trim(), B = ce.find((_e) => _e.id === A), de = V.find((_e) => _e.id === A), re = (de == null ? void 0 : de.system) ?? {}, Qe = re.size === "thrown", Ie = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: A,
        slotNum: N + 1,
        displayName: (B == null ? void 0 : B.name) || L.name || ve,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: Qe,
        rangeStr: Ie
      };
    });
    const R = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, W = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((b) => {
      var fs, ys, gs;
      const N = b.id;
      let L = null, A = {};
      for (const Mt of z)
        if ((((fs = O[Mt]) == null ? void 0 : fs.itemId) ?? "").trim() === N) {
          L = Mt, A = O[Mt] ?? {};
          break;
        }
      const B = !!L, de = ((ys = b.system) == null ? void 0 : ys.equipped) !== void 0 && ((gs = b.system) == null ? void 0 : gs.equipped) !== null ? !!b.system.equipped : B, re = (b == null ? void 0 : b.system) ?? {}, Qe = typeof re.range == "string" ? (re.range || "").trim() : "", Ie = re.type ?? "", _e = (R[Ie] ?? Ie) || "—", Re = re.size ?? "", et = (W[Re] ?? Re) || "", tt = [_e, et].filter(Boolean).join(", ") || _e || "—", Ke = Ie === "projectile" || Re === "thrown", Ue = re.quantity, St = Ue != null ? String(Ue).trim() : "1", ot = String(A.bonus ?? "").trim(), Tt = String(re.bonus ?? "").trim(), ei = ot || Tt || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? ve,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: ei,
        damage: A.damage ?? re.damage ?? "",
        rangeStr: Qe || "—",
        typeLabel: _e,
        typeAndSize: tt,
        quantity: St,
        quantityDisplay: Ke ? St : "—",
        isProjectile: Ke,
        equipped: de,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const X = (((Et = this.actor.items) == null ? void 0 : Et.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = X.map((b) => {
      var A, B;
      const N = (b == null ? void 0 : b.system) ?? {}, L = ((A = b.system) == null ? void 0 : A.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: _i((N.level ?? "").toString().trim()),
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: L
      };
    });
    const oe = (((It = this.actor.items) == null ? void 0 : It.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = oe.map((b) => {
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
    const le = (((rt = this.actor.items) == null ? void 0 : rt.contents) ?? []).filter((b) => b.type === "Egyeb");
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
    const me = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).filter((b) => b.type === "MikroChip"), ie = me.map((b) => ({ id: b.id, name: b.name, img: b.img })), ge = "— Nincs Mikro-Chip —", ue = ["slot1", "slot2", "slot3"], Me = (b) => {
      var L, A, B;
      const N = [];
      return b !== 1 && N.push((((L = x.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((A = x.slot2) == null ? void 0 : A.itemId) ?? "").trim()), b !== 3 && N.push((((B = x.slot3) == null ? void 0 : B.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((b) => !Me(1).includes(b.id)), e.microchipItemsSlot2 = ie.filter((b) => !Me(2).includes(b.id)), e.microchipItemsSlot3 = ie.filter((b) => !Me(3).includes(b.id)), e.microchipSlots = ue.map((b) => {
      const N = x[b] ?? {}, L = (N.itemId ?? "").trim(), A = me.find((B) => B.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (A == null ? void 0 : A.name) || N.name || ge,
        img: (A == null ? void 0 : A.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = x[N] ?? {}, A = (L.itemId ?? "").trim(), B = ie.find((de) => de.id === A);
      e[`microchip${b}ItemId`] = A, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || L.name || ge, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = me.map((b) => {
      var Re, et, tt, Ke;
      const N = b.id;
      let L = null;
      for (const Ue of ue)
        if ((((Re = x[Ue]) == null ? void 0 : Re.itemId) ?? "").trim() === N) {
          L = Ue;
          break;
        }
      const A = !!L, B = ((et = b == null ? void 0 : b.system) == null ? void 0 : et.abilityType) ?? "", de = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", Qe = Number((tt = b == null ? void 0 : b.system) == null ? void 0 : tt.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Ie = (((Ke = b == null ? void 0 : b.system) == null ? void 0 : Ke.description) ?? "").trim(), _e = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: de,
        description: _e,
        kp: Qe,
        isActive: re,
        slotKey: L ?? "",
        equipped: A
      };
    });
    const He = (((ts = e.weaponsTable) == null ? void 0 : ts.length) ?? 0) > 0 || (((ss = e.armorTable) == null ? void 0 : ss.length) ?? 0) > 0 || (((is = e.microchipsTable) == null ? void 0 : is.length) ?? 0) > 0 || (((ns = e.itemsTable) == null ? void 0 : ns.length) ?? 0) > 0;
    e.showEquipmentDropZone = !He;
    const it = this.actor.system.abilities ?? {}, Ot = (((as = this.actor.items) == null ? void 0 : as.contents) ?? []).map((b) => {
      var N, L, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = b.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), $e = new Map(Ot.map((b) => [b.id, b])), Ge = "— Nincs képesség —", je = (b) => {
      const N = it[b] ?? {}, L = (N.itemId ?? "").trim(), A = L ? $e.get(L) : null, B = (A == null ? void 0 : A.description) ?? "", de = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: L,
        displayName: (A == null ? void 0 : A.name) || N.name || Ge,
        img: (A == null ? void 0 : A.img) || "",
        description: B,
        kp: de
      };
    };
    e.abilityFajiSlot = je("faji"), e.abilityHatterSlot = je("hatter");
    const nt = (b) => {
      const N = it[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Ve = (b) => b.map((N) => {
      const L = $e.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ve(nt("passive")), e.abilityActiveList = Ve(nt("active"));
    const se = ((rs = e.system) == null ? void 0 : rs.resources) ?? {}, he = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ae = (cs = (os = e.system) == null ? void 0 : os.combat) == null ? void 0 : cs.initiativeResult, be = typeof ae == "number" ? ae : -1, at = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], Oe = (us = (ls = e.system) == null ? void 0 : ls.combat) == null ? void 0 : us.initiativeRanges, Ce = Array.isArray(Oe) ? Oe.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], ze = (Ce.length > 0 ? Ce : at).slice().sort((b, N) => b.min - N.min), We = Ce.map((b) => b.min), Ct = We.length ? Math.min(...We) : 0, qt = We.length ? Math.max(...We) : 0;
    e.initiativeRanges = Ce.map((b) => ({ ...b, isFirst: b.min === Ct, isLast: b.min === qt }));
    let ut = 0;
    if (typeof be == "number" && be >= 0 && ze.length > 0) {
      const b = ze[0], N = ze[ze.length - 1];
      let L = null;
      be <= b.max ? L = b : be >= N.min ? L = N : L = ze.find((A) => be >= A.min && be <= A.max), L && (ut = L.kp);
    }
    e.kpDots = he.map((b, N) => {
      const L = N + 1, A = !!Number(se[b]), B = L <= ut;
      return { index: L, used: A, usable: B };
    });
    const Lt = !!((ms = (ds = game.combat) == null ? void 0 : ds.combatants) != null && ms.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = Lt, e.canEditInitiative = !!((ps = game.user) != null && ps.isGM), e.showInitiativeResult = typeof ae == "number", e.initiativeResult = e.showInitiativeResult ? ae : "", e;
  }
  _attachFrameListeners(s) {
    var y, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const o = (i.currentTarget.dataset.slot ?? "").trim();
      if (!o) return;
      const { openRollSheetForWeapon: m } = await import("./roll-sheet-CXE0a4Jd.mjs");
      m(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var m, h, g;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget;
      let o = (r.dataset.itemId ?? "").trim();
      if (!o) {
        const v = (r.dataset.slot ?? "").trim();
        if (!v) return;
        o = (((((h = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      o && await this._rollWeaponDamage(o, ((g = r.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: r } = await import("./roll-sheet-CXE0a4Jd.mjs");
      r(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const r = i.currentTarget, o = parseInt(r.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 6) return;
      const m = `system.resources.kpDot${o}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${o}`]);
      await this.actor.update({ [m]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var m;
      const r = i ? i.currentTarget : (m = e.querySelector) == null ? void 0 : m.call(e, 'input[name="system.resources.stress.value"]');
      if (!r) return;
      const o = Number(r.value) || 0;
      r.classList.toggle("karakter-stress-over-10", o > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
    const l = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', l), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var m, h, g;
      i.preventDefault(), i.stopPropagation();
      const r = ((g = (h = (m = foundry.applications) == null ? void 0 : m.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
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
      const r = i.currentTarget, o = r.dataset.skill, m = ((g = r.textContent) == null ? void 0 : g.trim()) || o, { openRollSheetForSkill: h } = await import("./roll-sheet-CXE0a4Jd.mjs");
      h(this.actor, o, m);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, T, _, O, q, M;
      i.preventDefault();
      const o = i.currentTarget.closest(".karakter-weapon-slot"), m = o == null ? void 0 : o.dataset.slot;
      if (!m) return;
      const g = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[m]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const v = ((_ = (T = this.actor.items).get) == null ? void 0 : _.call(T, g)) ?? ((q = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : q.call(O, (z) => z.id === g));
      (M = v == null ? void 0 : v.sheet) == null || M.render(!0);
    });
    const p = (i, r) => {
      var h;
      const o = i.dataset.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      if (m) {
        if (i.classList.contains("karakter-weapon-label") && (r.altKey || r.shiftKey || r.ctrlKey || r.metaKey)) {
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
      const r = i.currentTarget, o = r.dataset.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      if (!m) return;
      let h = Number(r.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await m.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const m = this.actor, h = m.items.get(o);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = m.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = T.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === o;
        });
        if (_) {
          const O = T.filter((q) => q !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const m = this.actor.items.get(o);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], w = k.find((q) => {
        var M;
        return (((M = h[q]) == null ? void 0 : M.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (w) return;
        let q = k.find((z) => {
          var U;
          return !((U = h[z]) != null && U.itemId);
        });
        const M = new Set(k);
        if (!q) {
          const z = v.find((U) => !M.has(U));
          if (!z) return;
          q = z, k.push(z);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: o,
          [`system.weapons.${q}.name`]: (m == null ? void 0 : m.name) ?? "",
          [`system.weapons.${q}.damage`]: ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = m == null ? void 0 : m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (w) {
        const q = k.filter((M) => M !== w);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const r = i.currentTarget;
      if (r.disabled) return;
      const o = r.closest(".karakter-microchip-slot-select-wrap"), m = o == null ? void 0 : o.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !m && o && o.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const r = i.currentTarget, o = r.closest(".karakter-microchip-slot-select-wrap"), m = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display"), h = m == null ? void 0 : m.dataset.slot;
      if (!h) return;
      const g = (r.dataset.itemId ?? "").trim(), v = (r.dataset.itemName ?? ((q = r.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (r.dataset.itemImg ?? "").trim(), w = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = v);
      let T = o == null ? void 0 : o.querySelector(".karakter-microchip-slot-thumb");
      k ? (T || (T = document.createElement("img"), T.className = "karakter-microchip-slot-thumb", T.alt = "", m == null || m.insertBefore(T, w)), T.src = k, T.style.display = "") : T && T.remove(), o == null || o.classList.remove("karakter-microchip-slot-open");
      const _ = g ? this.actor.items.get(g) : null, O = {
        [`system.gear.microchips.${h}.itemId`]: g,
        [`system.gear.microchips.${h}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      g && (O[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, k;
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const o = this.actor.items.get(r);
      if (!o || o.type !== "MikroChip") return;
      const m = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = m[w]) == null ? void 0 : T.itemId) ?? "").trim() === r;
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
      r.addEventListener("dragover", (m) => this._onMicrochipSlotDragOver(m, o)), r.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), r.addEventListener("drop", (m) => this._onMicrochipSlotDrop(m, o));
    }), t.find(".karakter-ability-slot-single").each((i, r) => {
      const o = r.dataset.slot;
      o && (r.addEventListener("dragover", (m) => this._onAbilitySingleDragOver(m, o)), r.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), r.addEventListener("drop", (m) => {
        var h;
        (h = m.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, r) => {
      const o = r.dataset.area;
      o && (r.addEventListener("dragover", (m) => this._onAbilityAreaDragOver(m, o)), r.addEventListener("dragleave", (m) => {
        var h;
        return (h = m.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), r.addEventListener("drop", (m) => {
        var h;
        (h = m.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
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
      const m = this.actor.system.abilities ?? {}, g = (Array.isArray((v = m[r]) == null ? void 0 : v.items) ? m[r].items.slice() : []).filter((k) => k !== o);
      await this.actor.update({ [`system.abilities.${r}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      (h = m == null ? void 0 : m.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      o && await this._postAbilityToChat(o);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const m = this.actor.items.get(o);
      m && (m.type === "Kepesseg" || m.type === "ability" ? await this._postAbilityToChat(o) : (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(o));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, r) => {
      this._resizeWeaponQuantityInput(r);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const m = this.actor.items.get(o);
      if (!m || m.type !== "Fegyver") return;
      const h = (r.value ?? "").trim();
      await m.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const m = this.actor.items.get(o);
      !m || m.type !== "Pancel" || (await m.update({ "system.equipped": r.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const r = i.currentTarget, o = (r.dataset.itemId ?? "").trim();
      if (!o) return;
      const m = this.actor.items.get(o);
      if (!m || m.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], w = k.find((q) => {
        var M;
        return (((M = h[q]) == null ? void 0 : M.itemId) ?? "").trim() === o;
      }) ?? null;
      if (r.checked) {
        if (w) return;
        let q = k.find((z) => {
          var U;
          return !((U = h[z]) != null && U.itemId);
        });
        const M = new Set(k);
        if (!q) {
          const z = v.find((U) => !M.has(U));
          if (!z) return;
          q = z, k.push(z);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: o,
          [`system.weapons.${q}.name`]: m.name ?? "",
          [`system.weapons.${q}.damage`]: ((_ = m.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = m.system) == null ? void 0 : O.bonus) ?? ""
        }), await m.update({ "system.equipped": !0 });
      } else if (w) {
        const q = k.filter((M) => M !== w);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await m.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const m = this.actor, h = m.items.get(o), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = m.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = T.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === o;
        });
        if (_) {
          const O = T.filter((q) => q !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await m.update(g), await m.deleteEmbeddedDocuments("Item", [o]);
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
      const m = this.actor.items.get(o);
      if (!m || m.type !== "Targy") return;
      const h = (r.value ?? "").trim();
      await m.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${o}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const d = this, c = (i) => {
      var m, h, g, v;
      if (!i) return;
      const r = d._getFormDataForUpdate(i);
      if (Object.keys(r).length === 0) return;
      const o = ((h = (m = r.system) == null ? void 0 : m.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = r.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      d.actor.update(r).then(() => {
        o && setTimeout(() => d.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, u = (i) => {
      var r, o, m;
      return i && (((o = (r = d.element) == null ? void 0 : r.contains) == null ? void 0 : o.call(r, i)) || d.id && ((m = i.closest) == null ? void 0 : m.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      var g;
      const r = i.target;
      if (!r || !r.form) return;
      const o = r.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const m = r.form;
      if (!u(m)) return;
      const h = i.relatedTarget;
      h && (m.contains(h) || d.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(d.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), c(m));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var p, d, c;
    const e = {};
    for (const u of s.elements) {
      if (!u.name || u.disabled || u.type === "radio" && !u.checked || u.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      u.type === "checkbox" ? y = u.checked : u.type === "number" ? y = u.value === "" ? 0 : Number(u.value) : y = u.value ?? "", foundry.utils.setProperty(e, u.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((p = this.actor.system) == null ? void 0 : p.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const u of l) {
      const y = ((c = n[u]) == null ? void 0 : c.value) ?? 0, a = f[u] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${u}`, ee._healthStatusFromRatio(a, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, l, p, d, c, u, y, a, i, r, o, m;
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
          const k = (((l = g.system) == null ? void 0 : l.kind) ?? "passive").toString();
          if (k === "module") {
            (d = (p = ui.notifications) == null ? void 0 : p.warn) == null || d.call(p, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
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
          const T = k === "active" ? "active" : "passive", _ = Array.isArray((c = w[T]) == null ? void 0 : c.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          _.includes(v) || _.push(v), await this.actor.update({ [`system.abilities.${T}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((u = e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
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
            w = ((a = (await v.createEmbeddedDocuments("Item", [T]))[0]) == null ? void 0 : a.id) ?? w;
          }
          if (k) {
            const T = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (T.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = _ ? _.split(/\s*,\s*/).filter((z) => O.includes(z)) : [], M = q.filter((z) => {
              var U;
              return (((U = T[z]) == null ? void 0 : U.itemId) ?? "").trim() === w;
            });
            if (M.length > 0) {
              const U = {
                "system.weapons.slotOrder": q.filter((x) => !M.includes(x)).join(",")
              };
              for (const x of M)
                U[`system.weapons.${x}.itemId`] = "", U[`system.weapons.${x}.name`] = "", U[`system.weapons.${x}.damage`] = "", U[`system.weapons.${x}.bonus`] = "";
              await v.update(U);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const v = this.actor;
          if (((r = g.parent) == null ? void 0 : r.id) !== v.id) {
            const k = foundry.utils.mergeObject(g.toObject(), { system: { ...g.toObject().system ?? {}, equipped: !1 } });
            await v.createEmbeddedDocuments("Item", [k]);
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
          ((m = g.parent) == null ? void 0 : m.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, l, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var p, d, c, u, y, a;
    s.preventDefault(), s.stopPropagation(), (p = s.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "Fegyver") return;
    if (((u = f.parent) == null ? void 0 : u.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(f.toObject(), { system: { ...f.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const l = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
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
    var c, u;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, a) => {
      const i = typeof y.sort == "number" ? y.sort : 0, r = typeof a.sort == "number" ? a.sort : 0;
      return i - r;
    }).map((y) => y.id), l = f.indexOf(t), p = f.indexOf(e);
    if (l === -1 || p === -1) return;
    f.splice(l, 1), f.splice(p, 0, t);
    const d = f.map((y, a) => ({
      _id: y,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(s) {
    var n, f, l;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
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
    var d, c, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((c = e.system) == null ? void 0 : c.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var u, y, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((u = e.system) == null ? void 0 : u.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: c,
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
    var l, p, d;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const c = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((d = (await this.actor.createEmbeddedDocuments("Item", [c]))[0]) == null ? void 0 : d.id) ?? f;
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
    var d, c, u, y;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((c = n.parent) == null ? void 0 : c.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((u = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : u.id) ?? f;
    }
    const l = this.actor.system.abilities ?? {}, p = Array.isArray((y = l[e]) == null ? void 0 : y.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    p.includes(f) || p.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: p });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, l, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var p, d, c, u, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "MikroChip") return;
    let l = f.id;
    ((u = f.parent) == null ? void 0 : u.id) !== this.actor.id && (l = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(n) || 0;
    const l = this._getSkillHealthStatus(s);
    l === 1 ? f -= 6 : l === 2 && (f -= 3);
    const d = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, c = new Roll(d);
    await c.evaluate({ async: !0 });
    const { resultType: u, label: y } = Bt(c), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: u, critLabel: y } },
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
    var l;
    const s = Number(((l = this.actor.system.skills) == null ? void 0 : l.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    let l = null;
    t.itemId && (l = f.find((T) => T.id === t.itemId) ?? null);
    const p = l && l.name || t.name || `Fegyver (${s})`, d = Number(t.bonus || 0) || 0, c = ((k = l == null ? void 0 : l.system) == null ? void 0 : k.type) || "kinetic", u = (((w = l == null ? void 0 : l.system) == null ? void 0 : w.skillKey) ?? "").trim(), y = u && n[u] !== void 0 ? u : c === "explosive" ? "grenadeUse" : "firearms", a = Number(n[y] || 0) || 0, i = d + a, o = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, m = new Roll(o);
    await m.evaluate({ async: !0 });
    const { resultType: h, label: g } = Bt(m), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return m.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, c, u, y, a, i, r, o, m, h;
    const t = this.actor;
    if (!t) return;
    let n = ((c = (d = t.items).get) == null ? void 0 : c.call(d, s)) ?? ((y = (u = t.items.contents) == null ? void 0 : u.find) == null ? void 0 : y.call(u, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (r = ui.notifications) == null ? void 0 : r.warn) == null || h.call(r, ((m = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : m.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(f);
    await l.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
};
te(ee, "PARTS", foundry.utils.mergeObject(
  j(ee, ee, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), te(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(ee, ee, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = j(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
te(ee, "BODY_PART_BY_SKILL", {
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
let _t = ee;
function Oi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ns, Fs, As, Es;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, l, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const l = await super.render(s, e), p = this.element, d = this.form ?? this.element, c = f.scrollState, u = f.focus, y = typeof (c == null ? void 0 : c.formScrollTop) == "number" || typeof (c == null ? void 0 : c.windowScrollTop) == "number", a = () => {
      var i, r;
      if (this._applyScrollState(p, c), (u == null ? void 0 : u.name) != null || (u == null ? void 0 : u.id) != null) {
        const o = ((i = d.querySelector) == null ? void 0 : i.call(d, u.id ? `#${CSS.escape(u.id)}` : null)) ?? (u.name ? (r = d.querySelector) == null ? void 0 : r.call(d, `[name="${CSS.escape(u.name)}"]`) : null);
        o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && (o.focus({ preventScroll: !0 }), typeof o.selectionStart == "number" && (o.selectionStart = u.selectionStart ?? 0, o.selectionEnd = u.selectionEnd ?? u.selectionStart ?? 0));
      }
      this._applyScrollState(p, c);
    };
    return (y || u) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), l;
  }
  async _prepareContext(s) {
    var je, nt, Ve, se, he, ae, be, at, Oe, Ce, Rt, ze, We, Ct, qt, ut, Lt, dt, mt, pt, ft, yt, gt, ht, bt, vt, Je, kt, wt, Ze;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((je = this.actor) == null ? void 0 : je.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ve = (nt = e.system) == null ? void 0 : nt.identity) == null ? void 0 : Ve.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((se = e.system) == null ? void 0 : se.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, l = (ae = (he = t == null ? void 0 : t.statuses) == null ? void 0 : he.has) != null && ae.call(he, "lookaround") ? 1 : 0, p = (at = (be = t == null ? void 0 : t.statuses) == null ? void 0 : be.has) != null && at.call(be, "halfcover") ? 3 : 0, d = (Ce = (Oe = t == null ? void 0 : t.statuses) == null ? void 0 : Oe.has) != null && Ce.call(Oe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + l + p + d;
    const c = ((Rt = t == null ? void 0 : t.items) == null ? void 0 : Rt.contents) ?? [], u = ((ze = t == null ? void 0 : t.system) == null ? void 0 : ze.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (u.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((I) => y.includes(I)) : [], r = c.filter((I) => I.type === "Fegyver"), o = r.map((I) => ({ id: I.id, name: I.name, img: I.img })), m = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((I) => !h.includes(I)), v = [...h, ...g], k = v.filter((I) => {
      var P;
      const E = (((P = u[I]) == null ? void 0 : P.itemId) ?? "").trim();
      return E && r.some((G) => G.id === E);
    });
    e.weaponSlots = k.map((I) => {
      const E = u[I] ?? {}, P = (E.itemId ?? "").trim(), G = o.find((we) => we.id === P), ke = r.find((we) => we.id === P), ne = (ke == null ? void 0 : ke.system) ?? {}, qe = ne.size === "thrown", De = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: I,
        itemId: P,
        displayName: (G == null ? void 0 : G.name) || E.name || m,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: qe,
        rangeStr: De
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, T = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = r.map((I) => {
      var It;
      const E = I.id;
      let P = null, G = {};
      for (const rt of v)
        if ((((It = u[rt]) == null ? void 0 : It.itemId) ?? "").trim() === E) {
          P = rt, G = u[rt] ?? {};
          break;
        }
      const ke = !!P, ne = (I == null ? void 0 : I.system) ?? {}, qe = typeof ne.range == "string" ? (ne.range || "").trim() : "", De = ne.type ?? "", we = (w[De] ?? De) || "—", xe = ne.size ?? "", Ye = (T[xe] ?? xe) || "", Xe = [we, Ye].filter(Boolean).join(", ") || we || "—", Nt = De === "projectile" || xe === "thrown", Ft = ne.quantity != null ? String(ne.quantity).trim() : "1", At = String(ne.bonus ?? G.bonus ?? "").trim() || "0", Et = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: P ?? "",
        itemId: E,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? m,
        img: (I == null ? void 0 : I.img) ?? "",
        bonus: At,
        damage: Et,
        rangeStr: qe || "—",
        typeAndSize: Xe,
        quantity: Ft,
        isProjectile: Nt,
        equipped: ke,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const _ = c.filter((I) => I.type === "Pancel");
    e.armorTable = _.map((I) => {
      var G;
      const E = (I == null ? void 0 : I.system) ?? {}, P = ((G = I.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: I.id,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: Oi((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: P
      };
    });
    const O = ((Ct = (We = t == null ? void 0 : t.system) == null ? void 0 : We.gear) == null ? void 0 : Ct.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], M = c.filter((I) => I.type === "MikroChip");
    e.microchipsTable = M.map((I) => {
      var De, we, xe, Ye;
      const E = I.id;
      let P = null;
      for (const Xe of q)
        if ((((De = O[Xe]) == null ? void 0 : De.itemId) ?? "").trim() === E) {
          P = Xe;
          break;
        }
      const G = ((we = I == null ? void 0 : I.system) == null ? void 0 : we.abilityType) ?? "", ke = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((xe = I == null ? void 0 : I.system) == null ? void 0 : xe.description) ?? "").trim(), qe = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        typeLabel: ke,
        description: qe,
        kp: Number((Ye = I == null ? void 0 : I.system) == null ? void 0 : Ye.replaceCost) >= 0 ? Number(I.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: P ?? "",
        equipped: !!P
      };
    });
    const z = c.filter((I) => I.type === "Targy");
    e.itemsTable = z.map((I) => {
      const E = (I == null ? void 0 : I.system) ?? {}, P = (E.description ?? "").trim(), G = P ? P.length > 60 ? P.slice(0, 57) + "…" : P : "—";
      return {
        itemId: I.id,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        quantity: E.quantity != null ? String(E.quantity).trim() : "1",
        description: G
      };
    });
    const U = c.filter((I) => I.type === "Egyeb");
    e.egyebList = U.map((I) => {
      const P = (((I == null ? void 0 : I.system) ?? {}).description ?? "").trim(), G = P ? P.length > 80 ? P.slice(0, 77) + "…" : P : "";
      return {
        itemId: I.id,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        description: G
      };
    });
    const x = (((qt = e.weaponsTable) == null ? void 0 : qt.length) ?? 0) > 0 || (((ut = e.armorTable) == null ? void 0 : ut.length) ?? 0) > 0 || (((Lt = e.microchipsTable) == null ? void 0 : Lt.length) ?? 0) > 0 || (((dt = e.itemsTable) == null ? void 0 : dt.length) ?? 0) > 0 || (((mt = e.egyebList) == null ? void 0 : mt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !x;
    const J = ((pt = t == null ? void 0 : t.system) == null ? void 0 : pt.abilities) ?? {}, Q = c.filter((I) => I.type === "Kepesseg" || I.type === "ability").map((I) => {
      var E, P, G;
      return {
        id: I.id,
        name: I.name,
        img: I.img,
        description: ((E = I.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((P = I.system) == null ? void 0 : P.kp) ?? 0) || 0,
        kind: (((G = I.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), Z = new Map(Q.map((I) => [I.id, I])), Y = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Y, e.abilityHatterSlot = Y;
    const K = (I) => {
      const E = J[I];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, V = (I) => (I || []).map((E) => {
      const P = Z.get(E);
      if (!P) return null;
      const G = P.kind === "species";
      return {
        id: P.id,
        name: P.name,
        img: P.img,
        description: P.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: G ? 0 : P.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = V(K("passive")), e.abilityActiveList = V(K("active"));
    const ce = t == null ? void 0 : t.id, ve = !!((yt = (ft = game.combat) == null ? void 0 : ft.combatants) != null && yt.some(
      (I) => {
        var E;
        return (((E = I.actor) == null ? void 0 : E.id) ?? I.actorId) === ce;
      }
    ));
    e.showHarcSection = ve;
    const D = ((gt = e.system) == null ? void 0 : gt.resources) ?? {}, R = (bt = (ht = e.system) == null ? void 0 : ht.combat) == null ? void 0 : bt.initiativeResult, W = typeof R == "number" ? R : -1, X = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], oe = (Je = (vt = e.system) == null ? void 0 : vt.combat) == null ? void 0 : Je.initiativeRanges, le = Array.isArray(oe) ? oe.map((I) => ({ min: Number(I.min) ?? 0, max: Number(I.max) ?? 0, kp: Math.min(10, Math.max(0, Number(I.kp) ?? 0)) })) : [], ie = (le.length > 0 ? le : X).slice().sort((I, E) => I.min - E.min), ge = 3;
    let ue = le.length > 0 ? le : [];
    ue.length < ge && (ue = [...ue, ...Array(ge - ue.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ue.map((I, E) => ({
      ...I,
      isFirst: E === 0,
      isLast: E === ue.length - 1
    }));
    let Me = 0;
    if (typeof W == "number" && W >= 0 && ie.length > 0) {
      const I = ie[0], E = ie[ie.length - 1];
      let P = null;
      W <= I.max ? P = I : W >= E.min ? P = E : P = ie.find((G) => W >= G.min && W <= G.max), P && (Me = P.kp);
    }
    const He = ie.length > 0 ? ie[ie.length - 1] : null, it = Math.min(10, He ? He.kp : 6), $e = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, it)).map((I, E) => {
      const P = E + 1, G = !!Number(D[I]), ke = P <= Me;
      return { index: P, used: G, usable: ke };
    }), Ge = Math.ceil($e.length / 2);
    return e.kpDotsRow1 = $e.slice(0, Ge), e.kpDotsRow2 = $e.slice(Ge), e.canEditInitiative = !!((kt = game.user) != null && kt.isGM), e.showInitiativeResult = typeof R == "number", e.initiativeResult = e.showInitiativeResult ? R : "", e.speedUnitForSelect = ((Ze = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : Ze.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var c, u, y;
    super._attachFrameListeners(s);
    const e = ((c = s == null ? void 0 : s.querySelector) == null ? void 0 : c.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var o, m, h;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((h = (m = (o = foundry.applications) == null ? void 0 : o.apps) == null ? void 0 : m.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var o, m, h;
      a.preventDefault();
      const i = (m = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : m.itemId;
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      (h = r == null ? void 0 : r.sheet) == null || h.render(!0);
    });
    const n = (a) => {
      var o, m;
      const i = (o = a == null ? void 0 : a.dataset) == null ? void 0 : o.itemId;
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      (m = r == null ? void 0 : r.sheet) == null || m.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var m, h, g, v;
      a.preventDefault();
      const i = (h = (m = a.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".karakter-weapon-slot"), r = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      (v = o == null ? void 0 : o.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var m;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, r = (((m = i == null ? void 0 : i.dataset) == null ? void 0 : m.slot) ?? "").trim();
      if (!r || !this.actor) return;
      const { openRollSheetForWeapon: o } = await import("./roll-sheet-CXE0a4Jd.mjs");
      o(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var o, m, h, g, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let r = (((o = i == null ? void 0 : i.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !r && ((m = i == null ? void 0 : i.dataset) != null && m.slot) && (r = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!r || !this.actor) && await this._rollWeaponDamage(r, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-CXE0a4Jd.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var m, h;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, r = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(r) || r < 1 || r > 10 || !this.actor) return;
      const o = !!Number((h = (m = this.actor.system) == null ? void 0 : m.resources) == null ? void 0 : h[`kpDot${r}`]);
      await this.actor.update({ [`system.resources.kpDot${r}`]: o ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h, g;
      a.preventDefault();
      const i = a.currentTarget, r = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), o = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || r;
      if (!r || !this.actor) return;
      const { openRollSheetForSkill: m } = await import("./roll-sheet-CXE0a4Jd.mjs");
      m(this.actor, r, o);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var r, o;
      a.preventDefault();
      const i = (o = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var o, m;
      a.preventDefault();
      const i = (((m = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : m.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      r && (r.type === "Kepesseg" || r.type === "ability" ? await this._postAbilityToChat(i) : (r.type === "MikroChip" || r.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, k, w, T, _;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, r = (w = (k = a.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !r || !this.actor) return;
      const o = ((T = this.actor.system) == null ? void 0 : T.abilities) ?? {}, h = (Array.isArray((_ = o[i]) == null ? void 0 : _.items) ? o[i].items.slice() : []).filter((O) => O !== r);
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
      const o = this.actor, m = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      m && (h[`system.weapons.${m}.itemId`] = "", h[`system.weapons.${m}.name`] = "", h[`system.weapons.${m}.damage`] = "", h[`system.weapons.${m}.bonus`] = ""), Object.keys(h).length && await o.update(h), await o.deleteEmbeddedDocuments("Item", [r]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var r, o;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((o = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var h, g, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((g = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, m = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = r[w]) == null ? void 0 : T.itemId) ?? "").trim() === i;
      });
      m && await this.actor.update({
        [`system.gear.microchips.${m}.itemId`]: "",
        [`system.gear.microchips.${m}.name`]: "",
        [`system.gear.microchips.${m}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var o, m;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((m = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : m.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const r = this.actor.items.get(i);
      !r || r.type !== "Targy" && r.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (u = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : u.call(e, f)) == null || y.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", f, (a) => {
      var h, g, v;
      const i = a.currentTarget, r = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!r || !this.actor) return;
      const o = this.actor.items.get(r);
      if (!o) return;
      const m = o.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", m), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: m })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const l = this, p = (a) => {
      if (!a) return;
      const i = l._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && l.actor.update(i).catch((r) => console.warn("VoidNpcSheet save failed", r));
    }, d = (a) => {
      var i, r, o;
      return a && (((r = (i = l.element) == null ? void 0 : i.contains) == null ? void 0 : r.call(i, a)) || l.id && ((o = a.closest) == null ? void 0 : o.call(a, `#${CSS.escape(l.id)}`)));
    };
    l._votvNpcBlur = (a) => {
      var h;
      const i = a.target;
      if (!i || !i.form) return;
      const r = i.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const o = i.form;
      if (!d(o)) return;
      const m = a.relatedTarget;
      m && (o.contains(m) || l.id && ((h = m.closest) != null && h.call(m, `#${CSS.escape(l.id)}`))) || p(o);
    }, document.body.addEventListener("blur", l._votvNpcBlur, !0), l._votvNpcItemHookRegistered || (l._votvNpcItemUpdateHook = (a, i, r) => {
      var o;
      l.actor && ((o = a == null ? void 0 : a.parent) == null ? void 0 : o.id) === l.actor.id && l.render(!0);
    }, l._votvNpcItemDeleteHook = (a, i, r) => {
      var o;
      l.actor && ((o = a == null ? void 0 : a.parent) == null ? void 0 : o.id) === l.actor.id && l.render(!0);
    }, Hooks.on("updateItem", l._votvNpcItemUpdateHook), Hooks.on("deleteItem", l._votvNpcItemDeleteHook), l._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const l = this._getFormDataForUpdate(e);
      Object.keys(l).length > 0 && await this.actor.update(l).catch((p) => console.warn("VoidNpcSheet save on preClose failed", p));
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
    var w, T, _, O, q;
    const e = this.actor;
    if (!e) return;
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((T = e.system) == null ? void 0 : T.skills) ?? {}, l = ((_ = e.items) == null ? void 0 : _.filter((M) => M.type === "Fegyver")) ?? [];
    let p = null;
    n.itemId && (p = l.find((M) => M.id === n.itemId) ?? null);
    const d = p && p.name || n.name || "Fegyver", c = Number(n.bonus || 0) || 0, u = ((O = p == null ? void 0 : p.system) == null ? void 0 : O.type) || "kinetic", y = (((q = p == null ? void 0 : p.system) == null ? void 0 : q.skillKey) ?? "").trim(), a = y && f[y] !== void 0 ? y : u === "explosive" ? "grenadeUse" : "firearms", i = Number(f[a] || 0) || 0, r = c + i, m = `3d6${r !== 0 ? r > 0 ? `+${r}` : `${r}` : ""}`, h = new Roll(m);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Bt(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, c, u, y, a, i, r, o, m, h;
    const t = this.actor;
    if (!t) return;
    const n = ((c = (d = t.items).get) == null ? void 0 : c.call(d, s)) ?? ((y = (u = t.items.contents) == null ? void 0 : u.find) == null ? void 0 : y.call(u, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (r = ui.notifications) == null ? void 0 : r.warn) == null || h.call(r, ((m = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : m.call(o, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(f);
    await l.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
  async _onDropItem(s, e) {
    var u, y, a, i, r, o, m, h, g, v, k, w, T, _, O, q, M, z, U;
    if (!this.actor) return (u = super._onDropItem) == null ? void 0 : u.call(this, s, e);
    const n = ((x) => {
      var Q;
      if (!x) return null;
      const J = x.uuid ?? x.documentUuid ?? ((Q = x.data) == null ? void 0 : Q.uuid) ?? (typeof x == "string" ? x : null);
      if (J) return J;
      if (typeof x == "object") {
        for (const Z of Object.values(x))
          if (typeof Z == "string" && Z.includes(".") && Z.startsWith("Item.")) return Z;
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
    const l = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const x = (((o = f.system) == null ? void 0 : o.kind) ?? "passive").toString();
      if (x === "module") {
        (h = (m = ui.notifications) == null ? void 0 : m.warn) == null || h.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let J = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== l.id) {
        const K = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        J = ((v = (await l.createEmbeddedDocuments("Item", [K]))[0]) == null ? void 0 : v.id) ?? J;
      }
      const Q = ((k = l.system) == null ? void 0 : k.abilities) ?? {}, Z = x === "active" ? "active" : "passive", Y = Array.isArray((w = Q[Z]) == null ? void 0 : w.items) ? Q[Z].items.slice() : Array.isArray(Q[Z]) ? Q[Z].slice() : [];
      Y.includes(J) || Y.push(J), await l.update({ [`system.abilities.${Z}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((T = f.parent) == null ? void 0 : T.id) === l.id) return;
    const p = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const c = (_ = (await l.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && c) {
      const x = ((O = l.system) == null ? void 0 : O.weapons) ?? {}, J = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Q = (x.slotOrder ?? "").trim(), Z = Q ? Q.split(/\s*,\s*/).filter((V) => J.includes(V)) : [];
      let Y = J.find((V) => {
        var ce;
        return !(((ce = x[V]) == null ? void 0 : ce.itemId) ?? "").trim();
      });
      Y || (Y = J.find((V) => !Z.includes(V)) ?? "slot1");
      const K = Z.includes(Y) ? Z : [...Z, Y].filter((V) => J.includes(V));
      await l.update({
        "system.weapons.slotOrder": K.join(","),
        [`system.weapons.${Y}.itemId`]: c,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((q = f.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((M = f.system) == null ? void 0 : M.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && c) {
      const x = ((U = (z = l.system) == null ? void 0 : z.gear) == null ? void 0 : U.microchips) ?? {}, Q = ["slot1", "slot2", "slot3"].find((Z) => {
        var Y;
        return !(((Y = x[Z]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Q && await l.update({
        [`system.gear.microchips.${Q}.itemId`]: c,
        [`system.gear.microchips.${Q}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var u, y, a, i, r, o;
    const e = (y = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((o = this.actor) == null ? void 0 : o.name) ?? void 0 }),
      content: c,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var d, c, u, y, a, i;
    const e = (c = (d = this.actor) == null ? void 0 : d.items) == null ? void 0 : c.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const r = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (r === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", r === "active") {
        const o = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        o > 0 && (f = `<p><strong>KP:</strong> ${o}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${l}
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
        const l = (n.value ?? "").trim();
        if (l === "") continue;
        f = Number(l) || 0;
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
te(fe, "PARTS", foundry.utils.mergeObject(
  j(fe, fe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), te(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(fe, fe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ns = j(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Fs = j(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Es = (As = j(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : As.window) == null ? void 0 : Es.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ht = fe;
function Ci(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ps, $s, xs, Rs;
const ye = class ye extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, l, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const f = this.element, l = this.form ?? this.element;
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const m = document.activeElement, h = l.contains(m), g = m && (m.tagName === "INPUT" && m.type !== "checkbox" && m.type !== "radio" || m.tagName === "TEXTAREA");
      h && g && (p.focus = {
        name: m.name || null,
        id: m.id || null,
        selectionStart: "selectionStart" in m ? m.selectionStart : 0,
        selectionEnd: "selectionEnd" in m ? m.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const c = this.element, u = this.form ?? this.element, y = p.scrollState, a = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", r = () => {
      var m, h;
      if (this._applyScrollState(c, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((m = u.querySelector) == null ? void 0 : m.call(u, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = u.querySelector) == null ? void 0 : h.call(u, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(c, y);
    };
    return (i || a) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), d;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (c) => {
      var u;
      return ((u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, c)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${c}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const p = Number(f == null ? void 0 : f.value) || 0, d = Number(l == null ? void 0 : l.value) || 0;
    n.textContent = String(p + d);
  }
  async _prepareContext(s) {
    var q, M, z, U, x, J, Q, Z, Y, K, V, ce, ve;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((q = e.system) == null ? void 0 : q.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, l = "— Nincs fegyver —", p = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = p.map((D) => {
      const R = (D == null ? void 0 : D.system) ?? {}, W = R.type ?? "", X = (n[W] ?? W) || "—", oe = R.size ?? "", le = (f[oe] ?? oe) || "", me = [X, le].filter(Boolean).join(", ") || X || "—", ie = W === "projectile" || oe === "thrown", ge = R.quantity != null ? String(R.quantity).trim() : "1", ue = (typeof R.range == "string" ? (R.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? l,
        img: (D == null ? void 0 : D.img) ?? "",
        bonus: String(R.bonus ?? "").trim() || "0",
        damage: R.damage ?? "",
        rangeStr: ue || "—",
        typeLabel: X,
        typeAndSize: me,
        quantity: ge,
        quantityDisplay: ie ? ge : "—",
        isProjectile: ie,
        equipped: !1,
        special: (R.special ?? "").trim() || "—"
      };
    });
    const d = (((z = this.actor.items) == null ? void 0 : z.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = d.map((D) => {
      var X;
      const R = (D == null ? void 0 : D.system) ?? {}, W = !!((X = D.system) != null && X.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (R.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (R.speedPenalty ?? "").toString().trim() || "—",
        level: Ci((R.level ?? "").toString().trim()),
        special: (R.special ?? R.other ?? "").toString().trim() || "—",
        equipped: W
      };
    });
    const c = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = c.map((D) => {
      var ie, ge, ue;
      const R = ((ie = D == null ? void 0 : D.system) == null ? void 0 : ie.abilityType) ?? "", W = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", X = R === "active", oe = Number((ge = D == null ? void 0 : D.system) == null ? void 0 : ge.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, le = (((ue = D == null ? void 0 : D.system) == null ? void 0 : ue.description) ?? "").trim(), me = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: W,
        description: me,
        kp: oe,
        isActive: X,
        slotKey: "",
        equipped: !1
      };
    });
    const u = (((x = this.actor.items) == null ? void 0 : x.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = u.map((D) => {
      const R = (D == null ? void 0 : D.system) ?? {}, W = (R.description ?? "").trim(), X = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—", oe = R.quantity != null ? String(R.quantity).trim() : "1";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        quantity: oe,
        description: X
      };
    });
    const y = (((J = this.actor.items) == null ? void 0 : J.contents) ?? []).filter((D) => D.type === "Jarmuegyseg").sort((D, R) => {
      const W = typeof D.sort == "number" ? D.sort : 0, X = typeof R.sort == "number" ? R.sort : 0;
      return W - X;
    }), a = [];
    let i = 0, r = 0, o = 0;
    const m = Number(((Z = (Q = this.actor.system) == null ? void 0 : Q.vehicle) == null ? void 0 : Z.storage) ?? 0) || 0;
    for (const D of y) {
      const R = (D == null ? void 0 : D.system) ?? {}, W = R.health ?? {}, X = Number(R.level ?? 0) || 0, oe = Number(W.max ?? 0) || 0, le = Number(W.value ?? 0) || 0;
      let me;
      if (oe <= 0)
        me = void 0;
      else if (le <= 0)
        me = 0;
      else {
        const se = le / oe;
        se > 2 / 3 ? me = 3 : se > 1 / 3 ? me = 2 : me = 1;
      }
      const ie = (R.hit ?? "").toString().trim(), ge = (R.speed ?? "").toString().trim().replace(",", "."), ue = Number(ge);
      Number.isFinite(ue) && (i += ue);
      const Me = (R.range ?? "").toString().trim().replace(",", "."), He = Number(Me);
      Number.isFinite(He) && (r += He);
      const it = (R.damage ?? "").toString().trim(), Ot = (R.storage ?? "").toString().trim().replace(",", "."), $e = Number(Ot);
      Number.isFinite($e) && (o += $e);
      const Ge = R.abilities ?? {}, je = Array.isArray(Ge.items) ? Ge.items : [], Ve = (await Promise.all(
        je.map(async (se) => {
          var he;
          if (!se) return null;
          try {
            const ae = await fromUuid(se);
            if (ae && (ae.type === "Kepesseg" || ae.type === "ability")) return ae;
          } catch {
            const ae = (he = game.items) == null ? void 0 : he.get(se);
            if (ae && (ae.type === "Kepesseg" || ae.type === "ability")) return ae;
          }
          return null;
        })
      )).map((se, he) => ({ doc: se, ref: je[he] })).filter((se) => !!se.doc && !!se.ref).map(({ doc: se, ref: he }) => {
        var Oe, Ce;
        const ae = (((Oe = se.system) == null ? void 0 : Oe.kind) ?? "passive").toString(), be = Number(((Ce = se.system) == null ? void 0 : Ce.kp) ?? 0) || 0, at = ae === "species";
        return {
          id: se.id,
          ref: he,
          name: se.name,
          img: se.img,
          kind: ae,
          kpDisplay: at ? 0 : be
        };
      });
      a.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: X,
        hpMax: oe,
        hpValue: le,
        hpStatus: me,
        hit: ie,
        damage: it,
        abilities: Ve
      });
    }
    e.unitsTable = a, e.totalStorageUsed = o, e.vehicleStorageMax = m;
    const h = y.length;
    let g = "Kicsi", v = 0, k = 0;
    h >= 11 ? (g = "Nagy", v = -4, k = -6) : h >= 6 ? (g = "Közepes", v = -2, k = -3) : (g = "Kicsi", v = 0, k = 0), e.sizeForSelect = g, e.unitCount = h, e.sizeSpeedPenalty = v, e.sizeDefensePenalty = k;
    const w = i + v, T = r;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: w },
        vehicle: { toolsRange: T, storage: m },
        identity: { size: g }
      },
      { inplace: !1 }
    );
    const _ = (((Y = e.weaponsTable) == null ? void 0 : Y.length) ?? 0) > 0 || (((K = e.armorTable) == null ? void 0 : K.length) ?? 0) > 0 || (((V = e.microchipsTable) == null ? void 0 : V.length) ?? 0) > 0 || (((ce = e.itemsTable) == null ? void 0 : ce.length) ?? 0) > 0;
    e.showEquipmentDropZone = !_;
    const O = (((ve = this.actor.items) == null ? void 0 : ve.contents) ?? []).filter((D) => D.type === "Egyeb");
    return e.egyebList = O.map((D) => {
      const W = (((D == null ? void 0 : D.system) ?? {}).description ?? "").trim(), X = W ? W.length > 80 ? W.slice(0, 77) + "…" : W : "";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        description: X
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var p;
    super._attachFrameListeners(s);
    const e = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (d) => {
      var y, a, i;
      d.preventDefault(), d.stopPropagation();
      const c = ((i = (a = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new c({
        type: "image",
        current: this.actor.img || "",
        callback: (r) => {
          r && this.actor.update({ img: r });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (d) => {
      var y, a, i;
      d.preventDefault();
      const c = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      (i = u == null ? void 0 : u.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (d) => {
      var y, a;
      if (d.preventDefault(), !d.altKey) return;
      const c = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      !c || !this.actor.items.get(c) || await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".jarmu-item-quantity-input", async (d) => {
      var a;
      const c = d.currentTarget, u = (a = c == null ? void 0 : c.dataset) == null ? void 0 : a.itemId;
      if (!u) return;
      const y = this.actor.items.get(u);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (c.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (d) => {
      var y, a;
      const c = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!c) return;
      const u = this.actor.items.get(c);
      !u || u.type !== "Pancel" || await u.update({ "system.equipped": d.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (d) => {
      var u, y, a, i;
      d.preventDefault();
      const c = (y = (u = d.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : y.itemId;
      c && ((i = (a = this.actor.items.get(c)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (d) => {
      var u, y;
      if (d.preventDefault(), !d.altKey) return;
      const c = (y = (u = d.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : y.itemId;
      c && await this.actor.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-item-chat", async (d) => {
      var u, y;
      d.preventDefault();
      const c = (y = (u = d.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : y.itemId;
      c && await this._postItemToChat(c);
    }), t.on("click", ".jarmu-unit-damage-button", async (d) => {
      var y;
      d.preventDefault(), d.stopPropagation();
      const c = d.currentTarget, u = (((y = c == null ? void 0 : c.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      u && await this._rollUnitDamage(u);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (d) => {
      var a, i;
      const c = d.currentTarget, u = (a = c == null ? void 0 : c.dataset) == null ? void 0 : a.itemId;
      if (!u) return;
      n._draggingUnitId = u;
      const y = (i = d.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", u), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(c, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (d) => {
      var a, i, r, o;
      const c = (i = (a = d.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : i.itemId, u = n._draggingUnitId;
      if (!u || !c || u === c) return;
      d.preventDefault();
      const y = (r = d.originalEvent) == null ? void 0 : r.dataTransfer;
      y && (y.dropEffect = "move"), (o = d.currentTarget) == null || o.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (d) => {
      var c;
      (c = d.currentTarget) == null || c.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (d) => {
      var h, g, v, k;
      d.preventDefault(), (h = d.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
      const c = (v = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let u = n._draggingUnitId;
      const y = (k = d.originalEvent) == null ? void 0 : k.dataTransfer;
      if (!u && y && (u = y.getData("text/plain")), n._draggingUnitId = null, !u || !c || u === c) return;
      const i = this.actor.items.contents.filter((w) => w.type === "Jarmuegyseg").sort((w, T) => {
        const _ = typeof w.sort == "number" ? w.sort : 0, O = typeof T.sort == "number" ? T.sort : 0;
        return _ - O;
      }).map((w) => w.id), r = i.indexOf(u), o = i.indexOf(c);
      if (r === -1 || o === -1) return;
      i.splice(r, 1), i.splice(o, 0, u);
      const m = i.map((w, T) => ({
        _id: w,
        sort: (T + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", m);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (d) => {
      var a, i, r, o, m, h, g, v, k, w;
      d.preventDefault();
      const c = (o = (r = (i = (a = d.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : i.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : r.dataset) == null ? void 0 : o.abilityRef, u = (v = (g = (h = (m = d.currentTarget) == null ? void 0 : m.closest) == null ? void 0 : h.call(m, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (c)
        try {
          y = await fromUuid(c);
        } catch {
          y = null;
        }
      !y && u && (y = ((k = game.items) == null ? void 0 : k.get(u)) ?? null), (w = y == null ? void 0 : y.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (d) => {
      var i, r, o, m;
      d.preventDefault();
      const c = (r = (i = d.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : r.call(i, ".jarmu-unit-ability-pill"), u = (o = c == null ? void 0 : c.dataset) == null ? void 0 : o.abilityRef, y = (m = c == null ? void 0 : c.dataset) == null ? void 0 : m.abilityId, a = u || y;
      a && await this._postUnitAbilityToChat(a);
    });
    const f = (d) => {
      if (!d) return;
      const c = this._getFormDataForUpdate(d);
      Object.keys(c).length !== 0 && this.actor.update(c).catch((u) => console.warn("VoidJarmuSheet save failed", u));
    }, l = (d) => {
      var c, u, y;
      return d && (((u = (c = this.element) == null ? void 0 : c.contains) == null ? void 0 : u.call(c, d)) || this.id && ((y = d.closest) == null ? void 0 : y.call(d, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (d) => {
      var i;
      const c = d.target;
      if (!c || !c.form) return;
      const u = c.tagName;
      if (u !== "INPUT" && u !== "TEXTAREA" && u !== "SELECT") return;
      const y = c.form;
      if (!l(y)) return;
      const a = d.relatedTarget;
      a && (y.contains(a) || this.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (d) => {
      var o, m, h;
      const c = d.currentTarget, u = (o = c == null ? void 0 : c.dataset) == null ? void 0 : o.itemId;
      if (!u) return;
      const y = this.actor.items.get(u);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (c.value ?? "").trim(), i = a === "" ? 0 : Number(a), r = (m = c.closest) == null ? void 0 : m.call(c, ".jarmu-unit-row");
      if (r) {
        const g = (h = r.querySelector) == null ? void 0 : h.call(r, ".jarmu-unit-hp-max"), v = (g == null ? void 0 : g.textContent) ?? "", k = Number((v ?? "").trim()) || 0;
        let w;
        if (k <= 0)
          w = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          w = 0;
        else {
          const T = i / k;
          T > 2 / 3 ? w = 3 : T > 1 / 3 ? w = 2 : w = 1;
        }
        w === void 0 ? r.removeAttribute("data-hp-status") : r.dataset.hpStatus = String(w);
      }
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (d) => {
      var i;
      const c = d.currentTarget, u = (i = c == null ? void 0 : c.dataset) == null ? void 0 : i.itemId;
      if (!u) return;
      const y = this.actor.items.get(u);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (c.value ?? "").trim();
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
    var d, c, u;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((c = e.system) == null ? void 0 : c.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((u = e.system) == null ? void 0 : u.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var p, d, c, u, y, a, i, r, o;
    const e = this.actor;
    if (!e) return;
    const t = ((d = (p = e.items).get) == null ? void 0 : d.call(p, s)) ?? ((u = (c = e.items.contents) == null ? void 0 : c.find) == null ? void 0 : u.call(c, (m) => m.id === s));
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
    const l = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: l
    });
  }
  async _postUnitAbilityToChat(s) {
    var u, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((u = game.items) == null ? void 0 : u.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: c,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var d, c;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((d = e == null ? void 0 : e.data) == null ? void 0 : d.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const u of Object.values(e))
        if (typeof u == "string" && u.includes(".") && u.startsWith("Item.")) {
          t = u;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"].includes(n.type)) return super._onDropItem(s, e);
    if (((c = n.parent) == null ? void 0 : c.id) === f.id) return;
    const p = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [p]);
  }
};
te(ye, "PARTS", foundry.utils.mergeObject(
  j(ye, ye, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), te(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(ye, ye, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ps = j(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject((($s = j(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : $s.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Rs = (xs = j(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : xs.window) == null ? void 0 : Rs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let $t = ye;
var Ms;
const st = class st extends $t {
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
    }, f = { Kicsi: -10, Közepes: 0, Nagy: 10 }, l = () => {
      var _, O, q, M, z, U, x;
      const c = ((_ = e.querySelector) == null ? void 0 : _.call(e, "form")) ?? e, u = (O = c.querySelector) == null ? void 0 : O.call(c, 'select[name="system.identity.assignment"]'), y = (q = c.querySelector) == null ? void 0 : q.call(c, 'select[name="system.identity.subAssignment"]'), a = (M = c.querySelector) == null ? void 0 : M.call(c, "input.bazis-threat-total"), i = (z = c.querySelector) == null ? void 0 : z.call(c, 'input[name="system.combat.threatBonus"]');
      if (!u || !a || !i) return;
      const r = u.value ?? "", o = (y == null ? void 0 : y.value) ?? "", m = t[r] ?? 0, h = n[o] ?? 0, g = (((x = (U = this.actor) == null ? void 0 : U.items) == null ? void 0 : x.contents) ?? []).filter((J) => J.type === "Jarmuegyseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", k = f[v] ?? 0, w = Number(i.value ?? 0) || 0, T = m + h + k + w;
      a.value = T;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', l);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, f = n.identity ?? {}, l = n.combat ?? {}, p = f.assignment ?? "", d = f.subAssignment ?? "", c = {
        "Középső Rendszerek": -10,
        "Köztársasági Ágak": 10,
        "Peremvidék, vagy azon túl": 30
      }, u = {
        "Polgári Zóna": 10,
        "Ipari Zóna": 10,
        "Bánya Zóna": 10,
        "Katonai Zóna": -10,
        "Kutató Zóna": -10,
        "Elhagyott Zóna": 30,
        "Zónán kívüli terület": 30
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, a = c[p] ?? 0, i = u[d] ?? 0, r = e.sizeForSelect ?? "Kicsi", o = y[r] ?? 0, m = Number(l.threatBonus ?? 0) || 0, h = a + i + o + m;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...l, threat: h, threatBonus: m } },
        { inplace: !1 }
      ), e.bazisThreatBase = a;
    }
    return e;
  }
};
te(st, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(st, st, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Ms = j(st, st, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Gt = st;
const qi = [
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
var js;
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
    e._votvProfileImgClick = (l) => {
      var c, u, y, a, i, r, o;
      if (!e.isEditable || !((u = (c = l.target) == null ? void 0 : c.closest) != null && u.call(c, ".profile")) && ((a = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const p = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const n = (l) => {
      if (!l) return;
      const p = e._getFormDataForUpdate(l);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, f = (l) => {
      var p, d, c;
      return l && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var d, c, u;
      const p = ((d = l.target) == null ? void 0 : d.form) ?? ((u = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = qi, e;
  }
};
te(Le, "PARTS", foundry.utils.mergeObject(j(Le, Le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), te(Le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Le, Le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((js = j(Le, Le, "DEFAULT_OPTIONS")) == null ? void 0 : js.form) ?? {}, { submitOnChange: !1 })
}));
let Vt = Le;
var zs;
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
    e._votvProfileImgClick = (l) => {
      var c, u, y, a, i, r, o;
      if (!e.isEditable || !((u = (c = l.target) == null ? void 0 : c.closest) != null && u.call(c, ".profile")) && ((a = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const p = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const n = (l) => {
      if (!l) return;
      const p = e._getFormDataForUpdate(l);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, f = (l) => {
      var p, d, c;
      return l && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var d, c, u;
      const p = ((d = l.target) == null ? void 0 : d.form) ?? ((u = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "form"));
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
te(Ne, "PARTS", foundry.utils.mergeObject(j(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), te(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((zs = j(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : zs.form) ?? {}, { submitOnChange: !1 })
}));
let Wt = Ne;
var Ks;
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
    e._votvProfileImgClick = (l) => {
      var c, u, y, a, i, r, o;
      if (!e.isEditable || !((u = (c = l.target) == null ? void 0 : c.closest) != null && u.call(c, ".profile")) && ((a = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const p = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const n = (l) => {
      if (!l) return;
      const p = e._getFormDataForUpdate(l);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, f = (l) => {
      var p, d, c;
      return l && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var d, c, u;
      const p = ((d = l.target) == null ? void 0 : d.form) ?? ((u = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "form"));
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
te(Fe, "PARTS", foundry.utils.mergeObject(j(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), te(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ks = j(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.form) ?? {}, { submitOnChange: !1 })
}));
let Jt = Fe;
var Us;
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
    e._votvProfileImgClick = (l) => {
      var c, u, y, a, i, r, o;
      if (!e.isEditable || !((u = (c = l.target) == null ? void 0 : c.closest) != null && u.call(c, ".profile")) && ((a = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const p = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const n = (l) => {
      if (!l) return;
      const p = e._getFormDataForUpdate(l);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, f = (l) => {
      var p, d, c;
      return l && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var d, c, u;
      const p = ((d = l.target) == null ? void 0 : d.form) ?? ((u = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "form"));
      f(p) && n(p);
    }, e._votvInput = (l) => {
      var c;
      const p = l.target;
      if ((p == null ? void 0 : p.name) === "name") return;
      const d = (p == null ? void 0 : p.form) ?? ((c = p == null ? void 0 : p.closest) == null ? void 0 : c.call(p, "form"));
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
te(Ae, "PARTS", foundry.utils.mergeObject(j(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), te(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Us = j(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Us.form) ?? {}, { submitOnChange: !0 })
}));
let Zt = Ae;
var Bs;
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
    e._votvProfileImgClick = (l) => {
      var c, u, y, a, i, r, o;
      if (!e.isEditable || !((u = (c = l.target) == null ? void 0 : c.closest) != null && u.call(c, ".profile")) && ((a = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const p = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const n = (l) => {
      if (!l) return;
      const p = e._getFormDataForUpdate(l);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, f = (l) => {
      var p, d, c;
      return l && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var d, c, u;
      const p = ((d = l.target) == null ? void 0 : d.form) ?? ((u = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "form"));
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
te(Ee, "PARTS", foundry.utils.mergeObject(j(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), te(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Bs = j(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Bs.form) ?? {}, { submitOnChange: !1 })
}));
let Yt = Ee;
var Hs;
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
    e._votvProfileImgClick = (l) => {
      var c, u, y, a, i, r, o;
      if (!e.isEditable || !((u = (c = l.target) == null ? void 0 : c.closest) != null && u.call(c, ".profile")) && ((a = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const p = ((o = (r = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : o.implementation) ?? globalThis.FilePicker;
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
    const n = (l) => {
      if (!l) return;
      const p = e._getFormDataForUpdate(l);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, f = (l) => {
      var p, d, c;
      return l && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, l)) || e.id && ((c = l.closest) == null ? void 0 : c.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var d, c, u;
      const p = ((d = l.target) == null ? void 0 : d.form) ?? ((u = (c = l.target) == null ? void 0 : c.closest) == null ? void 0 : u.call(c, "form"));
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
te(Pe, "PARTS", foundry.utils.mergeObject(j(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), te(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Hs = j(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Pe;
var Gs, Vs;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var d, c, u, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (c = this.document) == null ? void 0 : c.name,
      "id=",
      (u = this.document) == null ? void 0 : u.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, r, o;
      try {
        const m = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && m.includes(this.element) || this.id && ((r = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : r.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", a);
        let g = null;
        try {
          g = TextEditor.getDragEventData(a);
        } catch (T) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", T);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", g), !g || g.type !== "Item") return;
        const k = ((T) => {
          var O;
          if (!T) return null;
          const _ = T.uuid ?? T.documentUuid ?? ((O = T.data) == null ? void 0 : O.uuid) ?? (typeof T == "string" ? T : null);
          if (_) return _;
          if (typeof T == "object") {
            for (const q of Object.values(T))
              if (typeof q == "string" && q.includes(".") && q.startsWith("Item.")) return q;
          }
          return null;
        })(g);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", k), !k) return;
        const w = await fromUuid(k);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", w == null ? void 0 : w.id, w == null ? void 0 : w.type), !w || w.documentName !== "Item") return;
        if (w.type === "Kepesseg" || w.type === "ability") {
          const T = w.uuid ?? w.id, _ = this.document.system ?? {}, O = Array.isArray((o = _.abilities) == null ? void 0 : o.items) ? _.abilities.items.slice() : [];
          O.push(T), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (m) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", m);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var m, h, g, v, k, w;
      a.preventDefault();
      const i = (h = (m = a.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, r = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let o = null;
      if (i)
        try {
          o = await fromUuid(i);
        } catch {
          o = null;
        }
      !o && r && (o = ((k = game.items) == null ? void 0 : k.get(r)) ?? null), (w = o == null ? void 0 : o.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var m, h, g, v;
      a.preventDefault();
      const i = (h = (m = a.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef, r = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, o = i || r;
      o && await this._postAbilityToChat(o);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const r = this.document.system ?? {}, o = Array.isArray((k = r.abilities) == null ? void 0 : k.items) ? r.abilities.items.slice() : [], m = o.indexOf(i), h = m >= 0 ? [...o.slice(0, m), ...o.slice(m + 1)] : o;
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
    const l = (a) => {
      if (!a) return;
      const i = e._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && e.document.update(i).catch((r) => console.warn("VoidJarmuEgysegSheet save failed", r));
    }, p = (a) => {
      var i, r, o;
      return a && (((r = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : r.call(i, a)) || e.id && ((o = a.closest) == null ? void 0 : o.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var r, o, m;
      const i = ((r = a.target) == null ? void 0 : r.form) ?? ((m = (o = a.target) == null ? void 0 : o.closest) == null ? void 0 : m.call(o, "form"));
      p(i) && l(i);
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
      f.map(async (d) => {
        var c;
        if (!d) return null;
        try {
          const u = await fromUuid(d);
          if (u && (u.type === "Kepesseg" || u.type === "ability")) return u;
        } catch {
          const u = (c = game.items) == null ? void 0 : c.get(d);
          if (u && (u.type === "Kepesseg" || u.type === "ability")) return u;
        }
        return null;
      })
    )).map((d, c) => ({ doc: d, ref: f[c] })).filter((d) => !!d.doc && !!d.ref).map(({ doc: d, ref: c }) => {
      var i, r;
      const u = (((i = d.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((r = d.system) == null ? void 0 : r.kp) ?? 0) || 0, a = u === "species";
      return {
        id: d.id,
        ref: c,
        name: d.name,
        img: d.img,
        kind: u,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", p), e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var u, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((u = game.items) == null ? void 0 : u.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: c,
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
      const l = e.uuid ?? e.id, p = this.document.system ?? {}, d = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return d.push(l), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", d), await this.document.update({ "system.abilities.items": d }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
te(Se, "PARTS", foundry.utils.mergeObject(j(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), te(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Se, Se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((Gs = j(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Vs = j(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Qt = Se;
var Ws, Js;
const Te = class Te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var d, c;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (u) => {
      var r, o, m, h, g, v;
      u.preventDefault();
      const y = (o = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemRef, a = (h = (m = u.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && a && (i = ((g = game.items) == null ? void 0 : g.get(a)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (u) => {
      var r, o, m, h;
      u.preventDefault();
      const y = (o = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : o.itemRef, a = (h = (m = u.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemId, i = y || a;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (u) => {
      var m, h, g;
      if (u.preventDefault(), !u.altKey) return;
      const y = (h = (m = u.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : h.itemRef;
      if (!y) return;
      const a = this.document.system ?? {}, i = Array.isArray((g = a.abilities) == null ? void 0 : g.items) ? a.abilities.items.slice() : [], r = i.indexOf(y), o = r >= 0 ? [...i.slice(0, r), ...i.slice(r + 1)] : i;
      await this.document.update({ "system.abilities.items": o });
    });
    const f = (c = t == null ? void 0 : t.querySelector) == null ? void 0 : c.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (u) => {
      u.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const l = (u) => {
      if (!u) return;
      const y = e._getFormDataForUpdate(u);
      Object.keys(y).length !== 0 && e.document.update(y).catch((a) => console.warn("VoidHelyisegSheet save failed", a));
    }, p = (u) => {
      var y, a, i;
      return u && (((a = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : a.call(y, u)) || e.id && ((i = u.closest) == null ? void 0 : i.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var a, i, r;
      const y = ((a = u.target) == null ? void 0 : a.form) ?? ((r = (i = u.target) == null ? void 0 : i.closest) == null ? void 0 : r.call(i, "form"));
      p(y) && l(y);
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
      f.map(async (d) => {
        var c;
        if (!d) return null;
        try {
          const u = await fromUuid(d);
          if (u && (u.type === "Kepesseg" || u.type === "ability")) return u;
        } catch {
          const u = (c = game.items) == null ? void 0 : c.get(d);
          if (u && (u.type === "Kepesseg" || u.type === "ability")) return u;
        }
        return null;
      })
    )).map((d, c) => ({ doc: d, ref: f[c] })).filter((d) => !!d.doc && !!d.ref).map(({ doc: d, ref: c }) => {
      var i, r;
      const u = (((i = d.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((r = d.system) == null ? void 0 : r.kp) ?? 0) || 0, a = u === "species";
      return {
        id: d.id,
        ref: c,
        name: d.name,
        img: d.img,
        kind: u,
        kpDisplay: a ? 0 : y
      };
    });
    return e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var u, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((u = game.items) == null ? void 0 : u.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", c = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${p}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: c,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, n, f;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const l = e.uuid ?? e.id, p = this.document.system ?? {}, d = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return d.push(l), await this.document.update({ "system.abilities.items": d }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
te(Te, "PARTS", foundry.utils.mergeObject(j(Te, Te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), te(Te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Te, Te, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((Ws = j(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Js = j(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : Js.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let _s = Te;
const Zs = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Ys(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, f, l, p;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = oi, CONFIG.Actor.dataModels.Npc = xt, CONFIG.Actor.dataModels.Jarmu = di, CONFIG.Actor.dataModels.Bazis = fi, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vs, CONFIG.Item.dataModels.weapon = vs, CONFIG.Item.dataModels.Pancel = hi, CONFIG.Item.dataModels.MikroChip = bi, CONFIG.Item.dataModels.Kepesseg = Is, CONFIG.Item.dataModels.ability = Is, CONFIG.Item.dataModels.Targy = ki, CONFIG.Item.dataModels.Egyeb = Ii, CONFIG.Item.dataModels.Jarmuegyseg = Ti, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (f = CONFIG.Actor).typeLabels ?? (f.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", (l = CONFIG.Combat).initiative ?? (l.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (p = CONFIG.Item).typeLabels ?? (p.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", _t, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", $t, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Vt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Wt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Jt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Zt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Yt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), Hooks.on("updateActor", (d, c, u, y) => {
    if ((d == null ? void 0 : d.type) !== "Karakter" || !(d != null && d.id)) return;
    const a = d.id;
    setTimeout(() => {
      var m, h, g, v;
      const i = (m = game.actors) == null ? void 0 : m.get(a);
      if (!i || i.type !== "Karakter") return;
      const r = _t.getTotalSpeedRaw(i), o = (h = i.effects) == null ? void 0 : h.find((k) => k.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (r <= 0 && !o) {
        const k = ((v = (g = CONFIG.statusEffects) == null ? void 0 : g.find((w) => w.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: k,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var T, _;
          const w = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
          for (const O of w)
            ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === a && typeof O.draw == "function" && O.draw();
        }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect create failed:", w));
      } else r > 0 && o && o.delete().then(() => {
        var w, T;
        const k = ((w = canvas.tokens) == null ? void 0 : w.placeables) ?? [];
        for (const _ of k)
          ((T = _ == null ? void 0 : _.document) == null ? void 0 : T.actorId) === a && typeof _.draw == "function" && _.draw();
      }).catch((k) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", k));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (d, c, u, y) => {
    var w, T, _, O, q, M, z, U, x, J, Q, Z, Y;
    const a = d == null ? void 0 : d.id;
    if (!a) return;
    if ((d.type === "Karakter" || d.type === "Npc") && ((w = c == null ? void 0 : c.system) != null && w.combat) && "initiativeResult" in c.system.combat) {
      const K = Number((_ = (T = d.system) == null ? void 0 : T.combat) == null ? void 0 : _.initiativeResult), V = Number.isFinite(K) ? K : 0, ce = game.combat;
      if (ce) {
        const ve = ((O = ce.combatants) == null ? void 0 : O.contents) ?? Array.from(ce.combatants ?? []);
        for (const D of ve)
          if (((q = D.actor) == null ? void 0 : q.id) === a || D.actorId === a) {
            ce.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: V }]).catch(() => {
            });
            break;
          }
      }
    }
    if (d.type === "Npc" && ((M = c == null ? void 0 : c.system) != null && M.identity) && "size" in c.system.identity) {
      const K = Ys((U = (z = d.system) == null ? void 0 : z.identity) == null ? void 0 : U.size);
      d.update({
        "prototypeToken.width": K,
        "prototypeToken.height": K
      }).catch((V) => console.warn("Vacuum of the Void | NPC token size update failed for", d.name, V));
    }
    const i = document.activeElement, r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), o = [], m = (x = game.actors) == null ? void 0 : x.get(a);
    m != null && m.apps && o.push(...Array.from(m.apps));
    const h = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const K of h) {
      if (((J = K.document) == null ? void 0 : J.id) !== a || ((Q = K.document) == null ? void 0 : Q.documentName) !== "Actor") continue;
      const V = (Z = K.constructor) == null ? void 0 : Z.name;
      V !== "VoidKarakterSheet" && V !== "VoidJarmuSheet" && V !== "VoidBazisSheet" || o.includes(K) || o.push(K);
    }
    if (r && o.some((K) => {
      const V = (K == null ? void 0 : K.form) ?? (K == null ? void 0 : K.element);
      return V && V.contains(i);
    })) return;
    const v = (Y = game.votv) == null ? void 0 : Y._lastKarakterSheetBlurSave, k = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const K of o)
        !(K != null && K.rendered) || typeof K.render != "function" || K.id !== k && K.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (d, c, u, y) => {
    var o, m, h;
    const a = d == null ? void 0 : d.parent;
    if (!a || a.documentName !== "Actor" || a.type !== "Karakter" || d.type !== "Fegyver") return;
    const i = ((o = a.system) == null ? void 0 : o.weapons) ?? {}, r = {};
    for (const [g, v] of Object.entries(i)) {
      if (!g.startsWith("slot")) continue;
      const k = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !k || k !== d.id || (r[`system.weapons.${g}.name`] = d.name ?? "", r[`system.weapons.${g}.damage`] = ((m = d.system) == null ? void 0 : m.damage) ?? "", r[`system.weapons.${g}.bonus`] = ((h = d.system) == null ? void 0 : h.bonus) ?? "");
    }
    Object.keys(r).length && a.update(r);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, k, w, T, _, O, q, M, z, U, x, J, Q, Z, Y, K, V, ce, ve, D, R;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), l = (w = (k = f == null ? void 0 : f.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!l) return;
    const p = l.actorId ?? ((T = f == null ? void 0 : f.speaker) == null ? void 0 : T.actor) ?? "";
    if (!p) return;
    e.preventDefault(), e.stopPropagation();
    let d = ((_ = game.actors) == null ? void 0 : _.get(l.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(p));
    if (d || (d = ((M = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : M.flatMap((X) => {
      var oe;
      return ((oe = X.tokens) == null ? void 0 : oe.contents) ?? [];
    }).map((X) => X.actor).find((X) => X && (X.id === p || X.id === l.actorId))) ?? null), !d) return;
    const c = l.itemId ? ((U = (z = d.items) == null ? void 0 : z.get) == null ? void 0 : U.call(z, l.itemId)) ?? ((Q = (J = (x = d.items) == null ? void 0 : x.contents) == null ? void 0 : J.find) == null ? void 0 : Q.call(J, (W) => W.id === l.itemId)) : null;
    let u = (l.damageFormula ?? "").trim();
    if (u || (u = (((Z = c == null ? void 0 : c.system) == null ? void 0 : Z.damage) ?? "").trim()), !u && l.slotKey && (u = (((((Y = d.system) == null ? void 0 : Y.weapons) ?? {})[l.slotKey] ?? {}).damage ?? "").trim()), !u) {
      (ve = (K = ui.notifications) == null ? void 0 : K.warn) == null || ve.call(K, ((ce = (V = game.i18n) == null ? void 0 : V.localize) == null ? void 0 : ce.call(V, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(u);
    await y.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = l.targetName || "", r = l.hitLocationName || "", o = ((c == null ? void 0 : c.name) ?? (l.slotKey ? ((R = (((D = d.system) == null ? void 0 : D.weapons) ?? {})[l.slotKey]) == null ? void 0 : R.name) ?? "" : "")) || "Fegyver";
    let m = i ? `${o} – sebzés – ${i}` : `${o} – sebzés`;
    r && (m += ` (${r})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: d }),
      flavor: m,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var l, p, d, c, u, y;
      if (!((p = (l = e.target) == null ? void 0 : l.closest) != null && p.call(l, "#actors"))) return;
      const t = (c = (d = e.target) == null ? void 0 : d.closest) == null ? void 0 : c.call(d, "[data-document-id]"), n = (u = t == null ? void 0 : t.getAttribute) == null ? void 0 : u.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, l;
    const e = ((t = game.actors) == null ? void 0 : t.filter((p) => p.type === "Karakter")) ?? [];
    for (const p of e) {
      const d = _t.getTotalSpeedRaw(p), c = (n = p.effects) == null ? void 0 : n.find((u) => u.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (d <= 0 && !c) {
        const u = ((l = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : l.img) ?? "";
        await p.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: u,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: p.uuid
        }]).catch(() => {
        });
      } else d > 0 && c && await c.delete().catch(() => {
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
        background: { src: Zs },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, l = await n.create(f);
      l && console.log("Vacuum of the Void | Default scene created:", l.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var l, p, d, c, u, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((l = game.actors) == null ? void 0 : l.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, r = ((p = i == null ? void 0 : i.bar1) == null ? void 0 : p.attribute) ?? "", o = ((d = i == null ? void 0 : i.bar2) == null ? void 0 : d.attribute) ?? "";
        (r || o) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((c = a.tokens) == null ? void 0 : c.filter((r) => {
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
    }, f = ((u = game.actors) == null ? void 0 : u.filter((a) => a.type === "Npc")) ?? [];
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
Hooks.on("preCreateToken", (S, s, e) => {
  var l, p, d, c, u, y, a, i;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, n = t ?? S.actorId ?? ((p = S._source) == null ? void 0 : p.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (d = game.actors) == null ? void 0 : d.get(n) : S.actor ?? null;
  if (f) {
    if (f.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((u = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : u.call(c, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
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
      const r = Ys((i = (a = f.system) == null ? void 0 : a.identity) == null ? void 0 : i.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: r,
        height: r
      });
    }
  }
});
Hooks.on("preCreateCombatant", (S, s, e) => {
  var f, l, p;
  const t = S.actorId ? (f = game.actors) == null ? void 0 : f.get(S.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((p = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : p.call(l, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = S.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const Li = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Xs(S) {
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Li).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Xs(S);
});
function Qs() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], l = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const p of l)
      !p || S.has(p.id) || (S.add(p.id), typeof p.render == "function" && p.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(Qs, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && Xs(S), setTimeout(Qs, 0);
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
    const l = s[0] ?? s;
    l != null && l.classList && l.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (S, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || S.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Zs,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var y, a, i, r;
  const t = ((y = S.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, l = t.weaponAttack, p = t.weapon, d = t.vsDefense, c = t.vsDefenseInfo;
  if (!n && !f && !l && !d) return;
  const u = (a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, ".dice-roll");
  if (u) {
    if (n && u.classList.add(`votv-${n}`), f) {
      const o = u.querySelector(".votv-crit-label");
      if (o)
        o.textContent = f;
      else {
        const m = u.querySelector(".dice-total"), h = (m == null ? void 0 : m.parentElement) ?? u, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = f, h.appendChild(g);
      }
    }
    if (l && p && (p.actorId || (i = S.speaker) != null && i.actor)) {
      const o = u.querySelector(".dice-total"), m = (o == null ? void 0 : o.parentElement) ?? u;
      if (!u.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!p.isHit, k = p.targetName || "Célpont";
        g.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, m.appendChild(g);
      }
      if (p.isHit && !u.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = p.hitLocationRoll, w = p.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(p.actorId ?? ((r = S.speaker) == null ? void 0 : r.actor) ?? ""), v.dataset.itemId = String(p.itemId ?? ""), v.dataset.slotKey = String(p.slotKey ?? ""), v.dataset.targetName = String(p.targetName ?? ""), v.dataset.hitLocationName = String(p.hitLocationName ?? ""), v.dataset.messageId = String(S.id ?? ""), m.appendChild(v);
      }
    }
    if (!l && d && c) {
      const o = u.querySelector(".dice-total"), m = (o == null ? void 0 : o.parentElement) ?? u, h = !!c.isHit, g = c.targetName || "Célpont", v = c.hitLocationRoll, k = c.hitLocationName;
      let w = u.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", m.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const T = u.querySelector(".votv-defense-hitloc");
      if (h && v != null && k) {
        let _ = T;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", m.appendChild(_)), _.textContent = `Találati Hely ${v} - ${k}`;
      } else T && T.remove();
    }
  }
});
export {
  _t as V,
  Bt as c
};
//# sourceMappingURL=vacuum-of-the-void-Cb6WpSsk.mjs.map
