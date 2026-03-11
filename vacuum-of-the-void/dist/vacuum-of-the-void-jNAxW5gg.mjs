var ei = Object.defineProperty;
var ti = Object.getPrototypeOf;
var si = Reflect.get;
var ii = (I, s, e) => s in I ? ei(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var ee = (I, s, e) => ii(I, typeof s != "symbol" ? s + "" : s, e);
var j = (I, s, e) => si(ti(I), e, s);
const { HTMLField: ni, NumberField: F, SchemaField: H, StringField: q, BooleanField: me, ArrayField: _t } = foundry.data.fields;
class Rt extends foundry.abstract.TypeDataModel {
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
        initiativeRanges: new _t(
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
        armor: new _t(
          new H({
            name: new q({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new q({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new q({ required: !1, blank: !0, initial: "" }),
            level: new q({ required: !1, blank: !0, initial: "" }),
            other: new q({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new _t(
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
          items: new _t(
            new q({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new _t(
            new q({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new ni({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: zt, SchemaField: ai } = foundry.data.fields;
class ri extends Rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new ai({
        body: new zt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new zt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new zt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: oi, StringField: hs, NumberField: ci } = foundry.data.fields;
class li extends Rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new oi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new hs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new hs({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new ci({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: di, StringField: bs, NumberField: mi } = foundry.data.fields;
class pi extends Rt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new di({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new bs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new bs({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
        storage: new mi({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: fi, NumberField: Pi, StringField: Ve } = foundry.data.fields;
class vs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new fi({ required: !1, initial: !1 }),
      type: new Ve({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ve({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ve({ required: !1, blank: !0, initial: "" }),
      damage: new Ve({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ve({ required: !1, blank: !0, initial: "" }),
      special: new Ve({ required: !1, blank: !0, initial: "" }),
      quantity: new Ve({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ve({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: yi, StringField: Pt } = foundry.data.fields;
class gi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new yi({ required: !1, initial: !1 }),
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
const { NumberField: jt, StringField: ks } = foundry.data.fields;
class hi extends foundry.abstract.TypeDataModel {
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
      cost: new jt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new jt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new jt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: bi, StringField: ws } = foundry.data.fields;
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
      kp: new bi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ss } = foundry.data.fields;
class vi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ss({ required: !1, blank: !0, initial: "" }),
      quantity: new Ss({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ki } = foundry.data.fields;
class wi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ki({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Kt, StringField: ut, SchemaField: Ts, ArrayField: Ii } = foundry.data.fields;
class Si extends foundry.abstract.TypeDataModel {
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
        items: new Ii(
          new ut({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new ut({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new ut({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new ut({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new ut({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new ut({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ti, StringField: $t, SchemaField: Di, ArrayField: _i } = foundry.data.fields;
class Oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new Ti({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Di({
        items: new _i(
          new $t({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Raktár (szabad szöveg, opcionális; a Bázis raktárkapacitás összegéhez). */
      storage: new $t({ required: !1, blank: !0, initial: "" }),
      /** Veszély (opcionális, pl. +15%). */
      veszely: new $t({ required: !1, blank: !0, initial: "" }),
      /** Cépont szám (szabad szöveg, opcionális; a Bázis táblázatban). */
      hit: new $t({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Ut(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (r, i = 1) => {
    if (!Array.isArray(r)) return;
    let a = i;
    for (const l of r) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        f(l.terms, a);
        continue;
      }
      if (typeof l.operator == "string") {
        a = l.operator === "-" ? -1 : 1;
        continue;
      }
      const d = typeof l.faces == "number" ? l.faces : void 0, h = Array.isArray(l.results) ? l.results : null;
      if (!d || !h || d === 8 || d !== 6) continue;
      const g = !n && a >= 0 && (l.number === 3 || l.number === "3") ? (n = !0, s) : a >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && g.push(k);
      }
    }
  };
  f(I.terms, 1);
  const u = s.filter((r) => r === 6).length, p = s.filter((r) => r === 1).length, m = e.filter((r) => r === 6).length, o = t.filter((r) => r === 6).length, c = u + m, y = p + o;
  return c > 0 && c === y ? { resultType: null, label: null } : c >= 3 ? { resultType: "critical", label: "Brutális Siker" } : c === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ci(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var _s, Os, Cs, qs;
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
    const o = this.element, c = this.form ?? this.element, y = p.scrollState, r = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", a = () => {
      var d, h;
      if (this._applyScrollState(o, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((d = c.querySelector) == null ? void 0 : d.call(c, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = c.querySelector) == null ? void 0 : h.call(c, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(o, y);
    };
    return (i || r) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), m;
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
    var c, y, r, i, a, l, d, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (c = e.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : y.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, f = X._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const u = Number(((a = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : a.givenSpeed) ?? 0) || 0;
    let p;
    f === 1 ? p = -6 : f === 2 ? p = -3 : p = u, p += X._getTotalArmorSpeedPenaltyStatic(s);
    const m = Number(((d = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : d.speed) ?? 0) || 0, o = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return m + o + (Number.isFinite(p) ? p : 0);
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
    var y, r, i, a, l, d, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((a = (i = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : i.has) != null && a.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((d = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : d.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, u = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, p = X._healthStatusFromRatio(u, f), m = Number(((T = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : T.givenSpeed) ?? 0) || 0;
    let o;
    p === 0 ? o = 0 : p === 1 ? o = -6 : p === 2 ? o = -3 : o = m;
    const c = this._getTotalArmorSpeedPenalty();
    o += c, t.textContent = String(o);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var o, c, y, r, i, a, l, d, h, g, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (y = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : y.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, f = (l = (a = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : a.has) != null && l.call(a, "lookaround") ? 1 : 0, u = (g = (h = (d = this.actor) == null ? void 0 : d.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, p = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, m = n + this._getTotalArmorProtectionBonus() + f + u + p;
    t.textContent = String(m);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), u = t('input[name="system.combat.defense"]'), p = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const m = Number(u == null ? void 0 : u.value) || 0, o = Number(p == null ? void 0 : p.value) || 0, c = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(m + o + c);
  }
  _writeTotalSpeed(s = null) {
    var l, d, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), u = t('input[name="system.combat.speed"]'), p = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (d = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : d.has) != null && h.call(d, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const m = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, o = ((w = (k = m.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, c = ((T = m.currentHealth) == null ? void 0 : T.legs) ?? 0;
    if (X._healthStatusFromRatio(c, o) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(u == null ? void 0 : u.value) || 0, i = Number(p == null ? void 0 : p.value) || 0, a = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(r + i + a);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var u, p, m, o;
    const e = X.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((u = this.actor.system) == null ? void 0 : u.resources) ?? {}, n = ((m = (p = t.hitLocations) == null ? void 0 : p[e]) == null ? void 0 : m.value) ?? 0, f = ((o = t.currentHealth) == null ? void 0 : o[e]) ?? 0;
    return X._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var p, m, o, c;
    const t = X.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((p = s == null ? void 0 : s.system) == null ? void 0 : p.resources) ?? {}, f = ((o = (m = n.hitLocations) == null ? void 0 : m[t]) == null ? void 0 : o.value) ?? 0, u = ((c = n.currentHealth) == null ? void 0 : c[t]) ?? 0;
    return X._healthStatusFromRatio(u, f);
  }
  async _prepareContext(s) {
    var mt, pt, ft, yt, gt, ht, bt, vt, kt, Ze, wt, It, Ye, S, P, x, G, ve, ne, Ce, De, ke, xe, Xe, Qe, Lt, Ft, At, Et, St, ct, es, ts, ss, is, ns, as, rs, os, cs, ls, us, ds, ms, ps;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ft = (pt = (mt = this.actor.system) == null ? void 0 : mt.resources) == null ? void 0 : pt.stress) == null ? void 0 : ft.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, u = n.currentHealth ?? {}, p = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of p) {
      const L = ((yt = f[b]) == null ? void 0 : yt.value) ?? 0, N = u[b] ?? 0;
      e.computedHealthStatus[b] = X._healthStatusFromRatio(N, L);
    }
    const m = (Number(u.head) || 0) === 0, c = ["torso", "arms", "legs"].filter((b) => (Number(u[b]) || 0) === 0).length;
    e.showDeathSkull = m || c >= 2;
    const y = e.computedHealthStatus.legs ?? 3, r = Number(((ht = (gt = this.actor.system) == null ? void 0 : gt.combat) == null ? void 0 : ht.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = r;
    const a = this._getTotalArmorSpeedPenalty();
    i += a, e.effectiveGivenSpeed = i;
    const l = Number(((vt = (bt = this.actor.system) == null ? void 0 : bt.combat) == null ? void 0 : vt.givenProtection) ?? 0) || 0, d = (wt = (Ze = (kt = this.actor) == null ? void 0 : kt.statuses) == null ? void 0 : Ze.has) != null && wt.call(Ze, "lookaround") ? 1 : 0, h = (S = (Ye = (It = this.actor) == null ? void 0 : It.statuses) == null ? void 0 : Ye.has) != null && S.call(Ye, "halfcover") ? 3 : 0, g = (G = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && G.call(x, "threequarteredcover") ? 6 : 0, v = l + this._getTotalArmorProtectionBonus() + d + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ve = e.system) == null ? void 0 : ve.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let T = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    y === 0 && (T = 0), (De = (Ce = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Ce.has) != null && De.call(Ce, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (xe = (ke = e.system) == null ? void 0 : ke.combat) == null ? void 0 : xe.givenProtection } },
      { inplace: !1 }
    ), T = 0), e.totalSpeed = T;
    const _ = X.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(_)) {
      const N = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], z = (O.slotOrder ?? "").trim(), K = z ? z.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], U = (Xe = this.actor.system.gear) == null ? void 0 : Xe.microchips, M = U && typeof U == "object" && !Array.isArray(U) ? U : {}, W = (((Qe = M.slot1) == null ? void 0 : Qe.itemId) ?? "").trim(), Z = (((Lt = M.slot2) == null ? void 0 : Lt.itemId) ?? "").trim(), J = (((Ft = M.slot3) == null ? void 0 : Ft.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const N = typeof b.sort == "number" ? b.sort : 0, A = typeof L.sort == "number" ? L.sort : 0;
      return N - A;
    }).map((b) => {
      var Re, tt, st, He, Ge, Tt;
      const L = b.type === "Fegyver", N = b.type === "MikroChip";
      let A = 0, B = "", ue = null;
      for (let lt = 0; lt < K.length; lt++) {
        const Dt = K[lt];
        if ((((Re = O[Dt]) == null ? void 0 : Re.itemId) ?? "") === b.id) {
          A = lt + 1, B = ((tt = O[Dt]) == null ? void 0 : tt.bonus) ?? "", ue = Dt;
          break;
        }
      }
      let re = null;
      N && (W === b.id ? re = "slot1" : Z === b.id ? re = "slot2" : J === b.id && (re = "slot3"));
      const et = L && ((st = b.system) != null && st.damage) ? b.system.damage : "", we = L && typeof ((He = b.system) == null ? void 0 : He.range) == "string" ? (b.system.range || "").trim() : "", _e = ue ? Number((Ge = O[ue]) == null ? void 0 : Ge.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: A,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: re,
        isEquipped: !!(ue || re),
        damage: et,
        rangeStr: we,
        slotBonusNum: _e,
        quantity: Number(((Tt = b.system) == null ? void 0 : Tt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const R = (((At = this.actor.items) == null ? void 0 : At.contents) ?? []).filter((b) => b.type === "Fegyver"), te = R.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", Te = K.filter((b) => {
      const N = ((O[b] ?? {}).itemId ?? "").trim();
      return N ? !!R.find((B) => B.id === N) : !1;
    });
    e.weaponSlots = Te.map((b, L) => {
      const N = O[b] ?? {}, A = (N.itemId ?? "").trim(), B = te.find((_e) => _e.id === A), ue = R.find((_e) => _e.id === A), re = (ue == null ? void 0 : ue.system) ?? {}, et = re.size === "thrown", we = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: A,
        slotNum: L + 1,
        displayName: (B == null ? void 0 : B.name) || N.name || de,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: et,
        rangeStr: we
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, E = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = R.map((b) => {
      var fs, ys, gs;
      const L = b.id;
      let N = null, A = {};
      for (const Mt of K)
        if ((((fs = O[Mt]) == null ? void 0 : fs.itemId) ?? "").trim() === L) {
          N = Mt, A = O[Mt] ?? {};
          break;
        }
      const B = !!N, ue = ((ys = b.system) == null ? void 0 : ys.equipped) !== void 0 && ((gs = b.system) == null ? void 0 : gs.equipped) !== null ? !!b.system.equipped : B, re = (b == null ? void 0 : b.system) ?? {}, et = typeof re.range == "string" ? (re.range || "").trim() : "", we = re.type ?? "", _e = (D[we] ?? we) || "—", Re = re.size ?? "", tt = (E[Re] ?? Re) || "", st = [_e, tt].filter(Boolean).join(", ") || _e || "—", He = we === "projectile" || Re === "thrown", Ge = re.quantity, Tt = Ge != null ? String(Ge).trim() : "1", lt = String(A.bonus ?? "").trim(), Dt = String(re.bonus ?? "").trim(), Qs = lt || Dt || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? de,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Qs,
        damage: A.damage ?? re.damage ?? "",
        rangeStr: et || "—",
        typeLabel: _e,
        typeAndSize: st,
        quantity: Tt,
        quantityDisplay: He ? Tt : "—",
        isProjectile: He,
        equipped: ue,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const V = (((Et = this.actor.items) == null ? void 0 : Et.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = V.map((b) => {
      var A, B;
      const L = (b == null ? void 0 : b.system) ?? {}, N = ((A = b.system) == null ? void 0 : A.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: Ci((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const se = (((St = this.actor.items) == null ? void 0 : St.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = se.map((b) => {
      const L = (b == null ? void 0 : b.system) ?? {}, N = (L.description ?? "").trim(), A = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", B = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: B,
        description: A
      };
    });
    const le = (((ct = this.actor.items) == null ? void 0 : ct.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = le.map((b) => {
      const N = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), A = N ? N.length > 80 ? N.slice(0, 77) + "…" : N : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: A
      };
    });
    const pe = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).filter((b) => b.type === "MikroChip"), ae = pe.map((b) => ({ id: b.id, name: b.name, img: b.img })), be = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (b) => {
      var N, A, B;
      const L = [];
      return b !== 1 && L.push((((N = M.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && L.push((((A = M.slot2) == null ? void 0 : A.itemId) ?? "").trim()), b !== 3 && L.push((((B = M.slot3) == null ? void 0 : B.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((b) => !fe(1).includes(b.id)), e.microchipItemsSlot2 = ae.filter((b) => !fe(2).includes(b.id)), e.microchipItemsSlot3 = ae.filter((b) => !fe(3).includes(b.id)), e.microchipSlots = ce.map((b) => {
      const L = M[b] ?? {}, N = (L.itemId ?? "").trim(), A = pe.find((B) => B.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (A == null ? void 0 : A.name) || L.name || be,
        img: (A == null ? void 0 : A.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, N = M[L] ?? {}, A = (N.itemId ?? "").trim(), B = ae.find((ue) => ue.id === A);
      e[`microchip${b}ItemId`] = A, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || N.name || be, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((b) => {
      var Re, tt, st, He;
      const L = b.id;
      let N = null;
      for (const Ge of ce)
        if ((((Re = M[Ge]) == null ? void 0 : Re.itemId) ?? "").trim() === L) {
          N = Ge;
          break;
        }
      const A = !!N, B = ((tt = b == null ? void 0 : b.system) == null ? void 0 : tt.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", et = Number((st = b == null ? void 0 : b.system) == null ? void 0 : st.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, we = (((He = b == null ? void 0 : b.system) == null ? void 0 : He.description) ?? "").trim(), _e = we ? we.length > 60 ? we.slice(0, 57) + "…" : we : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ue,
        description: _e,
        kp: et,
        isActive: re,
        slotKey: N ?? "",
        equipped: A
      };
    });
    const Me = (((ts = e.weaponsTable) == null ? void 0 : ts.length) ?? 0) > 0 || (((ss = e.armorTable) == null ? void 0 : ss.length) ?? 0) > 0 || (((is = e.microchipsTable) == null ? void 0 : is.length) ?? 0) > 0 || (((ns = e.itemsTable) == null ? void 0 : ns.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Me;
    const ze = this.actor.system.abilities ?? {}, Pe = (((as = this.actor.items) == null ? void 0 : as.contents) ?? []).map((b) => {
      var L, N, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), je = new Map(Pe.map((b) => [b.id, b])), nt = "— Nincs képesség —", Ke = (b) => {
      const L = ze[b] ?? {}, N = (L.itemId ?? "").trim(), A = N ? je.get(N) : null, B = (A == null ? void 0 : A.description) ?? "", ue = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: N,
        displayName: (A == null ? void 0 : A.name) || L.name || nt,
        img: (A == null ? void 0 : A.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = Ke("faji"), e.abilityHatterSlot = Ke("hatter");
    const We = (b) => {
      const L = ze[b];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Ue = (b) => b.map((L) => {
      const N = je.get(L);
      return N ? {
        id: N.id,
        name: N.name,
        img: N.img,
        description: N.description,
        kp: N.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ue(We("passive")), e.abilityActiveList = Ue(We("active"));
    const at = ((rs = e.system) == null ? void 0 : rs.resources) ?? {}, Q = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ye = (cs = (os = e.system) == null ? void 0 : os.combat) == null ? void 0 : cs.initiativeResult, ie = typeof ye == "number" ? ye : -1, rt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], $e = (us = (ls = e.system) == null ? void 0 : ls.combat) == null ? void 0 : us.initiativeRanges, Oe = Array.isArray($e) ? $e.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Be = (Oe.length > 0 ? Oe : rt).slice().sort((b, L) => b.min - L.min), Je = Oe.map((b) => b.min), Ct = Je.length ? Math.min(...Je) : 0, qt = Je.length ? Math.max(...Je) : 0;
    e.initiativeRanges = Oe.map((b) => ({ ...b, isFirst: b.min === Ct, isLast: b.min === qt }));
    let dt = 0;
    if (typeof ie == "number" && ie >= 0 && Be.length > 0) {
      const b = Be[0], L = Be[Be.length - 1];
      let N = null;
      ie <= b.max ? N = b : ie >= L.min ? N = L : N = Be.find((A) => ie >= A.min && ie <= A.max), N && (dt = N.kp);
    }
    e.kpDots = Q.map((b, L) => {
      const N = L + 1, A = !!Number(at[b]), B = N <= dt;
      return { index: N, used: A, usable: B };
    });
    const Nt = !!((ms = (ds = game.combat) == null ? void 0 : ds.combatants) != null && ms.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Nt, e.canEditInitiative = !!((ps = game.user) != null && ps.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var y, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: d } = await import("./roll-sheet-BowfRxqf.mjs");
      d(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var d, h, g;
      i.preventDefault(), i.stopPropagation();
      const a = i.currentTarget;
      let l = (a.dataset.itemId ?? "").trim();
      if (!l) {
        const v = (a.dataset.slot ?? "").trim();
        if (!v) return;
        l = (((((h = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = a.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: a } = await import("./roll-sheet-BowfRxqf.mjs");
      a(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const a = i.currentTarget, l = parseInt(a.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const d = `system.resources.kpDot${l}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${l}`]);
      await this.actor.update({ [d]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var d;
      const a = i ? i.currentTarget : (d = e.querySelector) == null ? void 0 : d.call(e, 'input[name="system.resources.stress.value"]');
      if (!a) return;
      const l = Number(a.value) || 0;
      a.classList.toggle("karakter-stress-over-10", l > 10);
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
      const a = ((g = (h = (d = foundry.applications) == null ? void 0 : d.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new a({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var g;
      i.preventDefault();
      const a = i.currentTarget, l = a.dataset.skill, d = ((g = a.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-BowfRxqf.mjs");
      h(this.actor, l, d);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, T, _, O, C, z;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), d = l == null ? void 0 : l.dataset.slot;
      if (!d) return;
      const g = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[d]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const v = ((_ = (T = this.actor.items).get) == null ? void 0 : _.call(T, g)) ?? ((C = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : C.call(O, (K) => K.id === g));
      (z = v == null ? void 0 : v.sheet) == null || z.render(!0);
    });
    const p = (i, a) => {
      var h;
      const l = i.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (d) {
        if (i.classList.contains("karakter-weapon-label") && (a.altKey || a.shiftKey || a.ctrlKey || a.metaKey)) {
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
      const a = i.currentTarget, l = a.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d) return;
      let h = Number(a.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await d.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const l = i.currentTarget.dataset.itemId;
      if (!l) return;
      const d = this.actor, h = d.items.get(l);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = d.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = T.find((O) => {
          var C;
          return (((C = v[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = T.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await d.update(g), await d.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], w = k.find((C) => {
        var z;
        return (((z = h[C]) == null ? void 0 : z.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (w) return;
        let C = k.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const z = new Set(k);
        if (!C) {
          const K = v.find((U) => !z.has(U));
          if (!K) return;
          C = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: (d == null ? void 0 : d.name) ?? "",
          [`system.weapons.${C}.damage`]: ((_ = d == null ? void 0 : d.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = d == null ? void 0 : d.system) == null ? void 0 : O.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (w) {
        const C = k.filter((z) => z !== w);
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
      const a = i.currentTarget;
      if (a.disabled) return;
      const l = a.closest(".karakter-microchip-slot-select-wrap"), d = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !d && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const a = i.currentTarget, l = a.closest(".karakter-microchip-slot-select-wrap"), d = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), h = d == null ? void 0 : d.dataset.slot;
      if (!h) return;
      const g = (a.dataset.itemId ?? "").trim(), v = (a.dataset.itemName ?? ((C = a.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (a.dataset.itemImg ?? "").trim(), w = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = v);
      let T = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-thumb");
      k ? (T || (T = document.createElement("img"), T.className = "karakter-microchip-slot-thumb", T.alt = "", d == null || d.insertBefore(T, w)), T.src = k, T.style.display = "") : T && T.remove(), l == null || l.classList.remove("karakter-microchip-slot-open");
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
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const l = this.actor.items.get(a);
      if (!l || l.type !== "MikroChip") return;
      const d = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = d[w]) == null ? void 0 : T.itemId) ?? "").trim() === a;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const a = i.currentTarget.dataset.slot;
      if (!a) return;
      const l = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${a}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, a) => {
      const l = a.dataset.slot;
      a.addEventListener("dragover", (d) => this._onMicrochipSlotDragOver(d, l)), a.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), a.addEventListener("drop", (d) => this._onMicrochipSlotDrop(d, l));
    }), t.find(".karakter-ability-slot-single").each((i, a) => {
      const l = a.dataset.slot;
      l && (a.addEventListener("dragover", (d) => this._onAbilitySingleDragOver(d, l)), a.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), a.addEventListener("drop", (d) => {
        var h;
        (h = d.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, a) => {
      const l = a.dataset.area;
      l && (a.addEventListener("dragover", (d) => this._onAbilityAreaDragOver(d, l)), a.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), a.addEventListener("drop", (d) => {
        var h;
        (h = d.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.slot;
      a && await this.actor.update({
        [`system.abilities.${a}.itemId`]: "",
        [`system.abilities.${a}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!a || !l) return;
      const d = this.actor.system.abilities ?? {}, g = (Array.isArray((v = d[a]) == null ? void 0 : v.items) ? d[a].items.slice() : []).filter((k) => k !== l);
      await this.actor.update({ [`system.abilities.${a}.items`]: g });
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
    }), t.find(".karakter-weapon-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = (a.value ?? "").trim();
      await d.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      !d || d.type !== "Pancel" || (await d.update({ "system.equipped": a.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], w = k.find((C) => {
        var z;
        return (((z = h[C]) == null ? void 0 : z.itemId) ?? "").trim() === l;
      }) ?? null;
      if (a.checked) {
        if (w) return;
        let C = k.find((K) => {
          var U;
          return !((U = h[K]) != null && U.itemId);
        });
        const z = new Set(k);
        if (!C) {
          const K = v.find((U) => !z.has(U));
          if (!K) return;
          C = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${C}.itemId`]: l,
          [`system.weapons.${C}.name`]: d.name ?? "",
          [`system.weapons.${C}.damage`]: ((_ = d.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((O = d.system) == null ? void 0 : O.bonus) ?? ""
        }), await d.update({ "system.equipped": !0 });
      } else if (w) {
        const C = k.filter((z) => z !== w);
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
        const v = d.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = T.find((O) => {
          var C;
          return (((C = v[O]) == null ? void 0 : C.itemId) ?? "").trim() === l;
        });
        if (_) {
          const O = T.filter((C) => C !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await d.update(g), await d.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const a = i.currentTarget.dataset.itemId;
      if (!a) return;
      const l = this.actor.items.get(a);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [a]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, a) => {
      this._resizeWeaponQuantityInput(a);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const a = i.currentTarget, l = (a.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Targy") return;
      const h = (a.value ?? "").trim();
      await d.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const m = this, o = (i) => {
      var d, h, g, v;
      if (!i) return;
      const a = m._getFormDataForUpdate(i);
      if (Object.keys(a).length === 0) return;
      const l = ((h = (d = a.system) == null ? void 0 : d.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = a.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      m.actor.update(a).then(() => {
        l && setTimeout(() => m.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, c = (i) => {
      var a, l, d;
      return i && (((l = (a = m.element) == null ? void 0 : a.contains) == null ? void 0 : l.call(a, i)) || m.id && ((d = i.closest) == null ? void 0 : d.call(i, `#${CSS.escape(m.id)}`)));
    };
    m._votvBlur = (i) => {
      var g;
      const a = i.target;
      if (!a || !a.form) return;
      const l = a.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const d = a.form;
      if (!c(d)) return;
      const h = i.relatedTarget;
      h && (d.contains(h) || m.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(m.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: m.id, at: Date.now() }), o(d));
    }, document.body.addEventListener("blur", m._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var p, m, o;
    const e = {};
    for (const c of s.elements) {
      if (!c.name || c.disabled || c.type === "radio" && !c.checked || c.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      c.type === "checkbox" ? y = c.checked : c.type === "number" ? y = c.value === "" ? 0 : Number(c.value) : y = c.value ?? "", foundry.utils.setProperty(e, c.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((p = this.actor.system) == null ? void 0 : p.resources) ?? {},
      ((m = foundry.utils.expandObject(e).system) == null ? void 0 : m.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    for (const c of u) {
      const y = ((o = n[c]) == null ? void 0 : o.value) ?? 0, r = f[c] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${c}`, X._healthStatusFromRatio(r, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, u, p, m, o, c, y, r, i, a, l, d;
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
          const T = k === "active" ? "active" : "passive", _ = Array.isArray((o = w[T]) == null ? void 0 : o.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          _.includes(v) || _.push(v), await this.actor.update({ [`system.abilities.${T}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((c = e.data) == null ? void 0 : c.uuid) ?? (typeof e == "string" ? e : null);
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
            const T = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (T.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = _ ? _.split(/\s*,\s*/).filter((K) => O.includes(K)) : [], z = C.filter((K) => {
              var U;
              return (((U = T[K]) == null ? void 0 : U.itemId) ?? "").trim() === w;
            });
            if (z.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((M) => !z.includes(M)).join(",")
              };
              for (const M of z)
                U[`system.weapons.${M}.itemId`] = "", U[`system.weapons.${M}.name`] = "", U[`system.weapons.${M}.damage`] = "", U[`system.weapons.${M}.bonus`] = "";
              await v.update(U);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const v = this.actor;
          if (((a = g.parent) == null ? void 0 : a.id) !== v.id) {
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
    var p, m, o, c, y, r;
    s.preventDefault(), s.stopPropagation(), (p = s.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "Fegyver") return;
    if (((c = f.parent) == null ? void 0 : c.id) !== this.actor.id) {
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
    var o, c;
    s.preventDefault(), (o = s.currentTarget) == null || o.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((c = s.dataTransfer) == null ? void 0 : c.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, r) => {
      const i = typeof y.sort == "number" ? y.sort : 0, a = typeof r.sort == "number" ? r.sort : 0;
      return i - a;
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
    var m, o, c;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((o = e.system) == null ? void 0 : o.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((c = e.system) == null ? void 0 : c.replaceCost) ?? 0) || 0;
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
    var c, y, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((c = e.system) == null ? void 0 : c.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: o,
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
      const o = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((m = (await this.actor.createEmbeddedDocuments("Item", [o]))[0]) == null ? void 0 : m.id) ?? f;
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
    var m, o, c, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((o = n.parent) == null ? void 0 : o.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((c = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : c.id) ?? f;
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
    var p, m, o, c, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain")) || ((o = s.dataTransfer) == null ? void 0 : o.getData("application/json")) || "";
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
    ((c = f.parent) == null ? void 0 : c.id) !== this.actor.id && (u = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? u), await this.actor.update({
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
    const m = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, o = new Roll(m);
    await o.evaluate({ async: !0 });
    const { resultType: c, label: y } = Ut(o), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return o.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: c, critLabel: y } },
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
    const p = u && u.name || t.name || `Fegyver (${s})`, m = Number(t.bonus || 0) || 0, o = ((k = u == null ? void 0 : u.system) == null ? void 0 : k.type) || "kinetic", c = (((w = u == null ? void 0 : u.system) == null ? void 0 : w.skillKey) ?? "").trim(), y = c && n[c] !== void 0 ? c : o === "explosive" ? "grenadeUse" : "firearms", r = Number(n[y] || 0) || 0, i = m + r, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, d = new Roll(l);
    await d.evaluate({ async: !0 });
    const { resultType: h, label: g } = Ut(d), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, o, c, y, r, i, a, l, d, h;
    const t = this.actor;
    if (!t) return;
    let n = ((o = (m = t.items).get) == null ? void 0 : o.call(m, s)) ?? ((y = (c = t.items.contents) == null ? void 0 : c.find) == null ? void 0 : y.call(c, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (a = ui.notifications) == null ? void 0 : a.warn) == null || h.call(a, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
ee(X, "PARTS", foundry.utils.mergeObject(
  j(X, X, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(X, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(X, X, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((_s = j(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : _s.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Os = j(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : Os.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((qs = (Cs = j(X, X, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) == null ? void 0 : qs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
ee(X, "BODY_PART_BY_SKILL", {
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
let Ot = X;
function qi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Ns, Ls, Fs, As;
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
      const i = document.activeElement, a = n.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      a && l && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const u = await super.render(s, e), p = this.element, m = this.form ?? this.element, o = f.scrollState, c = f.focus, y = typeof (o == null ? void 0 : o.formScrollTop) == "number" || typeof (o == null ? void 0 : o.windowScrollTop) == "number", r = () => {
      var i, a;
      if (this._applyScrollState(p, o), (c == null ? void 0 : c.name) != null || (c == null ? void 0 : c.id) != null) {
        const l = ((i = m.querySelector) == null ? void 0 : i.call(m, c.id ? `#${CSS.escape(c.id)}` : null)) ?? (c.name ? (a = m.querySelector) == null ? void 0 : a.call(m, `[name="${CSS.escape(c.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = c.selectionStart ?? 0, l.selectionEnd = c.selectionEnd ?? c.selectionStart ?? 0));
      }
      this._applyScrollState(p, o);
    };
    return (y || c) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), u;
  }
  async _prepareContext(s) {
    var Ke, We, Ue, at, Q, ye, ie, rt, $e, Oe, ot, Be, Je, Ct, qt, dt, Nt, mt, pt, ft, yt, gt, ht, bt, vt, kt, Ze, wt, It, Ye;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Ke = this.actor) == null ? void 0 : Ke.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ue = (We = e.system) == null ? void 0 : We.identity) == null ? void 0 : Ue.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((at = e.system) == null ? void 0 : at.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, u = (ye = (Q = t == null ? void 0 : t.statuses) == null ? void 0 : Q.has) != null && ye.call(Q, "lookaround") ? 1 : 0, p = (rt = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && rt.call(ie, "halfcover") ? 3 : 0, m = (Oe = ($e = t == null ? void 0 : t.statuses) == null ? void 0 : $e.has) != null && Oe.call($e, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + u + p + m;
    const o = ((ot = t == null ? void 0 : t.items) == null ? void 0 : ot.contents) ?? [], c = ((Be = t == null ? void 0 : t.system) == null ? void 0 : Be.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (c.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((S) => y.includes(S)) : [], a = o.filter((S) => S.type === "Fegyver"), l = a.map((S) => ({ id: S.id, name: S.name, img: S.img })), d = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((S) => !h.includes(S)), v = [...h, ...g], k = v.filter((S) => {
      var x;
      const P = (((x = c[S]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && a.some((G) => G.id === P);
    });
    e.weaponSlots = k.map((S) => {
      const P = c[S] ?? {}, x = (P.itemId ?? "").trim(), G = l.find((ke) => ke.id === x), ve = a.find((ke) => ke.id === x), ne = (ve == null ? void 0 : ve.system) ?? {}, Ce = ne.size === "thrown", De = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: S,
        itemId: x,
        displayName: (G == null ? void 0 : G.name) || P.name || d,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Ce,
        rangeStr: De
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, T = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = a.map((S) => {
      var St;
      const P = S.id;
      let x = null, G = {};
      for (const ct of v)
        if ((((St = c[ct]) == null ? void 0 : St.itemId) ?? "").trim() === P) {
          x = ct, G = c[ct] ?? {};
          break;
        }
      const ve = !!x, ne = (S == null ? void 0 : S.system) ?? {}, Ce = typeof ne.range == "string" ? (ne.range || "").trim() : "", De = ne.type ?? "", ke = (w[De] ?? De) || "—", xe = ne.size ?? "", Xe = (T[xe] ?? xe) || "", Qe = [ke, Xe].filter(Boolean).join(", ") || ke || "—", Lt = De === "projectile" || xe === "thrown", Ft = ne.quantity != null ? String(ne.quantity).trim() : "1", At = String(ne.bonus ?? G.bonus ?? "").trim() || "0", Et = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? d,
        img: (S == null ? void 0 : S.img) ?? "",
        bonus: At,
        damage: Et,
        rangeStr: Ce || "—",
        typeAndSize: Qe,
        quantity: Ft,
        isProjectile: Lt,
        equipped: ve,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const _ = o.filter((S) => S.type === "Pancel");
    e.armorTable = _.map((S) => {
      var G;
      const P = (S == null ? void 0 : S.system) ?? {}, x = ((G = S.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: S.id,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        protectionBonus: (P.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (P.speedPenalty ?? "").toString().trim() || "—",
        level: qi((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const O = ((Ct = (Je = t == null ? void 0 : t.system) == null ? void 0 : Je.gear) == null ? void 0 : Ct.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], z = o.filter((S) => S.type === "MikroChip");
    e.microchipsTable = z.map((S) => {
      var De, ke, xe, Xe;
      const P = S.id;
      let x = null;
      for (const Qe of C)
        if ((((De = O[Qe]) == null ? void 0 : De.itemId) ?? "").trim() === P) {
          x = Qe;
          break;
        }
      const G = ((ke = S == null ? void 0 : S.system) == null ? void 0 : ke.abilityType) ?? "", ve = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = (((xe = S == null ? void 0 : S.system) == null ? void 0 : xe.description) ?? "").trim(), Ce = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? "—",
        img: (S == null ? void 0 : S.img) ?? "",
        typeLabel: ve,
        description: Ce,
        kp: Number((Xe = S == null ? void 0 : S.system) == null ? void 0 : Xe.replaceCost) >= 0 ? Number(S.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const K = o.filter((S) => S.type === "Targy");
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
    const U = o.filter((S) => S.type === "Egyeb");
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
    const M = (((qt = e.weaponsTable) == null ? void 0 : qt.length) ?? 0) > 0 || (((dt = e.armorTable) == null ? void 0 : dt.length) ?? 0) > 0 || (((Nt = e.microchipsTable) == null ? void 0 : Nt.length) ?? 0) > 0 || (((mt = e.itemsTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((pt = e.egyebList) == null ? void 0 : pt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !M;
    const W = ((ft = t == null ? void 0 : t.system) == null ? void 0 : ft.abilities) ?? {}, Z = o.filter((S) => S.type === "Kepesseg" || S.type === "ability").map((S) => {
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
    const te = t == null ? void 0 : t.id, de = !!((gt = (yt = game.combat) == null ? void 0 : yt.combatants) != null && gt.some(
      (S) => {
        var P;
        return (((P = S.actor) == null ? void 0 : P.id) ?? S.actorId) === te;
      }
    ));
    e.showHarcSection = de;
    const Te = ((ht = e.system) == null ? void 0 : ht.resources) ?? {}, D = (vt = (bt = e.system) == null ? void 0 : bt.combat) == null ? void 0 : vt.initiativeResult, E = typeof D == "number" ? D : -1, V = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], se = (Ze = (kt = e.system) == null ? void 0 : kt.combat) == null ? void 0 : Ze.initiativeRanges, le = Array.isArray(se) ? se.map((S) => ({ min: Number(S.min) ?? 0, max: Number(S.max) ?? 0, kp: Math.min(10, Math.max(0, Number(S.kp) ?? 0)) })) : [], ae = (le.length > 0 ? le : V).slice().sort((S, P) => S.min - P.min), be = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < be && (ce = [...ce, ...Array(be - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((S, P) => ({
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
    const Me = ae.length > 0 ? ae[ae.length - 1] : null, ze = Math.min(10, Me ? Me.kp : 6), je = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, ze)).map((S, P) => {
      const x = P + 1, G = !!Number(Te[S]), ve = x <= fe;
      return { index: x, used: G, usable: ve };
    }), nt = Math.ceil(je.length / 2);
    return e.kpDotsRow1 = je.slice(0, nt), e.kpDotsRow2 = je.slice(nt), e.canEditInitiative = !!((wt = game.user) != null && wt.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((Ye = (It = e.system) == null ? void 0 : It.combat) == null ? void 0 : Ye.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var o, c, y;
    super._attachFrameListeners(s);
    const e = ((o = s == null ? void 0 : s.querySelector) == null ? void 0 : o.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
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
      const a = this.actor.items.get(i);
      (h = a == null ? void 0 : a.sheet) == null || h.render(!0);
    });
    const n = (r) => {
      var l, d;
      const i = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      (d = a == null ? void 0 : a.sheet) == null || d.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (r) => {
      var d, h, g, v;
      r.preventDefault();
      const i = (h = (d = r.currentTarget) == null ? void 0 : d.closest) == null ? void 0 : h.call(d, ".karakter-weapon-slot"), a = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const l = this.actor.items.get(a);
      (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (r) => {
      var d;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, a = (((d = i == null ? void 0 : i.dataset) == null ? void 0 : d.slot) ?? "").trim();
      if (!a || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-BowfRxqf.mjs");
      l(this.actor, a);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var l, d, h, g, v;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let a = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !a && ((d = i == null ? void 0 : i.dataset) != null && d.slot) && (a = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!a || !this.actor) && await this._rollWeaponDamage(a, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BowfRxqf.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (r) => {
      var d, h;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, a = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(a) || a < 1 || a > 10 || !this.actor) return;
      const l = !!Number((h = (d = this.actor.system) == null ? void 0 : d.resources) == null ? void 0 : h[`kpDot${a}`]);
      await this.actor.update({ [`system.resources.kpDot${a}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var h, g;
      r.preventDefault();
      const i = r.currentTarget, a = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || a;
      if (!a || !this.actor) return;
      const { openRollSheetForSkill: d } = await import("./roll-sheet-BowfRxqf.mjs");
      d(this.actor, a, l);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      var a, l;
      r.preventDefault();
      const i = (l = (a = r.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (r) => {
      var l, d, h, g;
      r.preventDefault();
      const i = (((d = (l = r.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId) ?? ((g = (h = r.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const a = this.actor.items.get(i);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(i) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, v, k, w, T, _;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, a = (w = (k = r.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !a || !this.actor) return;
      const l = ((T = this.actor.system) == null ? void 0 : T.abilities) ?? {}, h = (Array.isArray((_ = l[i]) == null ? void 0 : _.items) ? l[i].items.slice() : []).filter((O) => O !== a);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      var a, l;
      if (r.preventDefault(), !r.altKey) return;
      const i = (l = (a = r.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      var g, v;
      if (r.preventDefault(), !r.altKey) return;
      const i = r.currentTarget, a = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!a || !this.actor) return;
      const l = this.actor, d = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      d && (h[`system.weapons.${d}.itemId`] = "", h[`system.weapons.${d}.name`] = "", h[`system.weapons.${d}.damage`] = "", h[`system.weapons.${d}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [a]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      var a, l;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((l = (a = r.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var h, g, v, k;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((g = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const a = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, d = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = a[w]) == null ? void 0 : T.itemId) ?? "").trim() === i;
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
      const a = this.actor.items.get(i);
      !a || a.type !== "Targy" && a.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (c = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : c.call(e, f)) == null || y.forEach((r) => {
      var i;
      (((i = r.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (r.draggable = !0);
    }), t.on("dragstart", f, (r) => {
      var h, g, v;
      const i = r.currentTarget, a = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!a || !this.actor) return;
      const l = this.actor.items.get(a);
      if (!l) return;
      const d = l.uuid;
      r.dataTransfer && (r.dataTransfer.setData("text/plain", d), r.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: d })), r.dataTransfer.effectAllowed = "copyMove"), typeof ((v = r.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && r.dataTransfer.setDragImage(i, 0, 0);
    });
    const u = this, p = (r) => {
      if (!r) return;
      const i = u._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && u.actor.update(i).catch((a) => console.warn("VoidNpcSheet save failed", a));
    }, m = (r) => {
      var i, a, l;
      return r && (((a = (i = u.element) == null ? void 0 : i.contains) == null ? void 0 : a.call(i, r)) || u.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(u.id)}`)));
    };
    u._votvNpcBlur = (r) => {
      var h;
      const i = r.target;
      if (!i || !i.form) return;
      const a = i.tagName;
      if (a !== "INPUT" && a !== "TEXTAREA" && a !== "SELECT") return;
      const l = i.form;
      if (!m(l)) return;
      const d = r.relatedTarget;
      d && (l.contains(d) || u.id && ((h = d.closest) != null && h.call(d, `#${CSS.escape(u.id)}`))) || p(l);
    }, document.body.addEventListener("blur", u._votvNpcBlur, !0), u._votvNpcItemHookRegistered || (u._votvNpcItemUpdateHook = (r, i, a) => {
      var l;
      u.actor && ((l = r == null ? void 0 : r.parent) == null ? void 0 : l.id) === u.actor.id && u.render(!0);
    }, u._votvNpcItemDeleteHook = (r, i, a) => {
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
    var w, T, _, O, C;
    const e = this.actor;
    if (!e) return;
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((T = e.system) == null ? void 0 : T.skills) ?? {}, u = ((_ = e.items) == null ? void 0 : _.filter((z) => z.type === "Fegyver")) ?? [];
    let p = null;
    n.itemId && (p = u.find((z) => z.id === n.itemId) ?? null);
    const m = p && p.name || n.name || "Fegyver", o = Number(n.bonus || 0) || 0, c = ((O = p == null ? void 0 : p.system) == null ? void 0 : O.type) || "kinetic", y = (((C = p == null ? void 0 : p.system) == null ? void 0 : C.skillKey) ?? "").trim(), r = y && f[y] !== void 0 ? y : c === "explosive" ? "grenadeUse" : "firearms", i = Number(f[r] || 0) || 0, a = o + i, d = `3d6${a !== 0 ? a > 0 ? `+${a}` : `${a}` : ""}`, h = new Roll(d);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Ut(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var m, o, c, y, r, i, a, l, d, h;
    const t = this.actor;
    if (!t) return;
    const n = ((o = (m = t.items).get) == null ? void 0 : o.call(m, s)) ?? ((y = (c = t.items.contents) == null ? void 0 : c.find) == null ? void 0 : y.call(c, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (a = ui.notifications) == null ? void 0 : a.warn) == null || h.call(a, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
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
    var c, y, r, i, a, l, d, h, g, v, k, w, T, _, O, C, z, K, U;
    if (!this.actor) return (c = super._onDropItem) == null ? void 0 : c.call(this, s, e);
    const n = ((M) => {
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
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    if (f.type === "Pancel") {
      (a = (i = ui.notifications) == null ? void 0 : i.info) == null || a.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const u = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const M = (((l = f.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (M === "module") {
        (h = (d = ui.notifications) == null ? void 0 : d.warn) == null || h.call(d, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let W = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== u.id) {
        const oe = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        W = ((v = (await u.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : v.id) ?? W;
      }
      const Z = ((k = u.system) == null ? void 0 : k.abilities) ?? {}, J = M === "active" ? "active" : "passive", Y = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(W) || Y.push(W), await u.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((T = f.parent) == null ? void 0 : T.id) === u.id) return;
    const p = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const o = (_ = (await u.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && o) {
      const M = ((O = u.system) == null ? void 0 : O.weapons) ?? {}, W = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (M.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((R) => W.includes(R)) : [];
      let Y = W.find((R) => {
        var te;
        return !(((te = M[R]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = W.find((R) => !J.includes(R)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((R) => W.includes(R));
      await u.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: o,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = f.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((z = f.system) == null ? void 0 : z.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && o) {
      const M = ((U = (K = u.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = M[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await u.update({
        [`system.gear.microchips.${Z}.itemId`]: o,
        [`system.gear.microchips.${Z}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var c, y, r, i, a, l;
    const e = (y = (c = this.actor) == null ? void 0 : c.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((l = this.actor) == null ? void 0 : l.name) ?? void 0 }),
      content: o,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var m, o, c, y, r, i;
    const e = (o = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : o.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((c = e.system) == null ? void 0 : c.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const a = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (a === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", a === "active") {
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
ee(ge, "PARTS", foundry.utils.mergeObject(
  j(ge, ge, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(ge, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(ge, ge, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ns = j(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ls = j(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Ls.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((As = (Fs = j(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) == null ? void 0 : As.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Bt = ge;
function Ni(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Es, Ps, $s, xs;
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
    const o = this.element, c = this.form ?? this.element, y = p.scrollState, r = p.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", a = () => {
      var d, h;
      if (this._applyScrollState(o, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const g = ((d = c.querySelector) == null ? void 0 : d.call(c, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (h = c.querySelector) == null ? void 0 : h.call(c, `[name="${CSS.escape(r.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = r.selectionStart ?? 0, g.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(o, y);
    };
    return (i || r) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), m;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (o) => {
      var c;
      return ((c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, o)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${o}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const p = Number(f == null ? void 0 : f.value) || 0, m = Number(u == null ? void 0 : u.value) || 0;
    n.textContent = String(p + m);
  }
  async _prepareContext(s) {
    var z, K, U, M, W, Z, J, Y, oe, R, te, de, Te;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((z = e.system) == null ? void 0 : z.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, u = "— Nincs fegyver —", p = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = p.map((D) => {
      const E = (D == null ? void 0 : D.system) ?? {}, V = E.type ?? "", se = (n[V] ?? V) || "—", le = E.size ?? "", pe = (f[le] ?? le) || "", ae = [se, pe].filter(Boolean).join(", ") || se || "—", be = V === "projectile" || le === "thrown", ce = E.quantity != null ? String(E.quantity).trim() : "1", fe = (typeof E.range == "string" ? (E.range || "").trim() : "") || "—";
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
        quantityDisplay: be ? ce : "—",
        isProjectile: be,
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
        level: Ni((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: V
      };
    });
    const o = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = o.map((D) => {
      var be, ce, fe;
      const E = ((be = D == null ? void 0 : D.system) == null ? void 0 : be.abilityType) ?? "", V = E === "active" ? "Aktív" : E === "passive" ? "Passzív" : E || "—", se = E === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), ae = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
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
    const c = (((W = this.actor.items) == null ? void 0 : W.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = c.map((D) => {
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
    let a = 0, l = 0, d = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of r) {
      const E = (D == null ? void 0 : D.system) ?? {}, V = Number(E.level ?? 0) || 0, se = (E.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (d += le);
      const pe = E.abilities ?? {}, ae = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
        ae.map(async (Q) => {
          var ye;
          if (!Q) return null;
          try {
            const ie = await fromUuid(Q);
            if (ie && (ie.type === "Kepesseg" || ie.type === "ability")) return ie;
          } catch {
            const ie = (ye = game.items) == null ? void 0 : ye.get(Q);
            if (ie && (ie.type === "Kepesseg" || ie.type === "ability")) return ie;
          }
          return null;
        })
      )).map((Q, ye) => ({ doc: Q, ref: ae[ye] })).filter((Q) => !!Q.doc && !!Q.ref).map(({ doc: Q, ref: ye }) => {
        var Oe, ot;
        const ie = (((Oe = Q.system) == null ? void 0 : Oe.kind) ?? "passive").toString(), rt = Number(((ot = Q.system) == null ? void 0 : ot.kp) ?? 0) || 0, $e = ie === "species";
        return {
          id: Q.id,
          ref: ye,
          name: Q.name,
          img: Q.img,
          kind: ie,
          kpDisplay: $e ? 0 : rt
        };
      });
      if (y === "Helyiseg") {
        const Q = (E.hit ?? "").toString().trim();
        i.push({
          itemId: D.id,
          actorId: this.actor.id,
          name: (D == null ? void 0 : D.name) ?? "—",
          img: (D == null ? void 0 : D.img) ?? "",
          level: V,
          hit: Q,
          abilities: ce,
          isHelyiseg: !0
        });
        continue;
      }
      const fe = E.health ?? {}, Me = Number(fe.max ?? 0) || 0, ze = Number(fe.value ?? 0) || 0;
      let Pe;
      if (Me <= 0)
        Pe = void 0;
      else if (ze <= 0)
        Pe = 0;
      else {
        const Q = ze / Me;
        Q > 2 / 3 ? Pe = 3 : Q > 1 / 3 ? Pe = 2 : Pe = 1;
      }
      const je = (E.hit ?? "").toString().trim(), nt = (E.speed ?? "").toString().trim().replace(",", "."), Ke = Number(nt);
      Number.isFinite(Ke) && (a += Ke);
      const We = (E.range ?? "").toString().trim().replace(",", "."), Ue = Number(We);
      Number.isFinite(Ue) && (l += Ue);
      const at = (E.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: V,
        hpMax: Me,
        hpValue: ze,
        hpStatus: Pe,
        hit: je,
        damage: at,
        abilities: ce,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = d, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = r.length;
    let v = "Kicsi", k = 0, w = 0;
    g >= 11 ? (v = "Nagy", k = -4, w = -6) : g >= 6 ? (v = "Közepes", k = -2, w = -3) : (v = "Kicsi", k = 0, w = 0), e.sizeForSelect = v, e.unitCount = g, e.sizeSpeedPenalty = k, e.sizeDefensePenalty = w;
    const T = a + k, _ = l;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: T },
        vehicle: { toolsRange: _, storage: h },
        identity: { size: v }
      },
      { inplace: !1 }
    );
    const O = (((oe = e.weaponsTable) == null ? void 0 : oe.length) ?? 0) > 0 || (((R = e.armorTable) == null ? void 0 : R.length) ?? 0) > 0 || (((te = e.microchipsTable) == null ? void 0 : te.length) ?? 0) > 0 || (((de = e.itemsTable) == null ? void 0 : de.length) ?? 0) > 0;
    e.showEquipmentDropZone = !O;
    const C = (((Te = this.actor.items) == null ? void 0 : Te.contents) ?? []).filter((D) => D.type === "Egyeb");
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
      const o = ((i = (r = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: this.actor.img || "",
        callback: (a) => {
          a && this.actor.update({ img: a });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (m) => {
      var y, r, i;
      m.preventDefault();
      const o = (r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      (i = c == null ? void 0 : c.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (m) => {
      var y, r;
      if (m.preventDefault(), !m.altKey) return;
      const o = (r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      !o || !this.actor.items.get(o) || await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".jarmu-item-quantity-input", async (m) => {
      var r;
      const o = m.currentTarget, c = (r = o == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      if (!c) return;
      const y = this.actor.items.get(c);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (o.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (m) => {
      var y, r;
      const o = (r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      !c || c.type !== "Pancel" || await c.update({ "system.equipped": m.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (m) => {
      var c, y, r, i;
      m.preventDefault();
      const o = (y = (c = m.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : y.itemId;
      o && ((i = (r = this.actor.items.get(o)) == null ? void 0 : r.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (m) => {
      var c, y;
      if (m.preventDefault(), !m.altKey) return;
      const o = (y = (c = m.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : y.itemId;
      o && await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("click", ".karakter-item-chat", async (m) => {
      var y, r, i, a;
      m.preventDefault();
      const o = (((r = (y = m.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId) ?? ((a = (i = m.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : a.call(i, "data-item-id")) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      !c || c.type !== "MikroChip" && c.type !== "Egyeb" || await this._postItemToChat(o);
    }), t.on("click", ".jarmu-unit-damage-button", async (m) => {
      var y;
      m.preventDefault(), m.stopPropagation();
      const o = m.currentTarget, c = (((y = o == null ? void 0 : o.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      c && await this._rollUnitDamage(c);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (m) => {
      var r, i;
      const o = m.currentTarget, c = (r = o == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      if (!c) return;
      n._draggingUnitId = c;
      const y = (i = m.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", c), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(o, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (m) => {
      var r, i, a, l;
      const o = (i = (r = m.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : i.itemId, c = n._draggingUnitId;
      if (!c || !o || c === o) return;
      m.preventDefault();
      const y = (a = m.originalEvent) == null ? void 0 : a.dataTransfer;
      y && (y.dropEffect = "move"), (l = m.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (m) => {
      var o;
      (o = m.currentTarget) == null || o.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (m) => {
      var g, v, k, w;
      m.preventDefault(), (g = m.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const o = (k = (v = m.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : k.itemId;
      let c = n._draggingUnitId;
      const y = (w = m.originalEvent) == null ? void 0 : w.dataTransfer;
      if (!c && y && (c = y.getData("text/plain")), n._draggingUnitId = null, !c || !o || c === o) return;
      const r = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", a = this.actor.items.contents.filter((T) => T.type === r).sort((T, _) => {
        const O = typeof T.sort == "number" ? T.sort : 0, C = typeof _.sort == "number" ? _.sort : 0;
        return O - C;
      }).map((T) => T.id), l = a.indexOf(c), d = a.indexOf(o);
      if (l === -1 || d === -1) return;
      a.splice(l, 1), a.splice(d, 0, c);
      const h = a.map((T, _) => ({
        _id: T,
        sort: (_ + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (m) => {
      var r, i, a, l, d, h, g, v, k, w;
      m.preventDefault();
      const o = (l = (a = (i = (r = m.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : a.dataset) == null ? void 0 : l.abilityRef, c = (v = (g = (h = (d = m.currentTarget) == null ? void 0 : d.closest) == null ? void 0 : h.call(d, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (o)
        try {
          y = await fromUuid(o);
        } catch {
          y = null;
        }
      !y && c && (y = ((k = game.items) == null ? void 0 : k.get(c)) ?? null), (w = y == null ? void 0 : y.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (m) => {
      var i, a, l, d;
      m.preventDefault();
      const o = (a = (i = m.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : a.call(i, ".jarmu-unit-ability-pill"), c = (l = o == null ? void 0 : o.dataset) == null ? void 0 : l.abilityRef, y = (d = o == null ? void 0 : o.dataset) == null ? void 0 : d.abilityId, r = c || y;
      r && await this._postUnitAbilityToChat(r);
    });
    const f = (m) => {
      if (!m) return;
      const o = this._getFormDataForUpdate(m);
      Object.keys(o).length !== 0 && this.actor.update(o).catch((c) => console.warn("VoidJarmuSheet save failed", c));
    }, u = (m) => {
      var o, c, y;
      return m && (((c = (o = this.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, m)) || this.id && ((y = m.closest) == null ? void 0 : y.call(m, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (m) => {
      var i;
      const o = m.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const y = o.form;
      if (!u(y)) return;
      const r = m.relatedTarget;
      r && (y.contains(r) || this.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (m) => {
      var l, d, h;
      const o = m.currentTarget, c = (l = o == null ? void 0 : o.dataset) == null ? void 0 : l.itemId;
      if (!c) return;
      const y = this.actor.items.get(c);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (o.value ?? "").trim(), i = r === "" ? 0 : Number(r), a = (d = o.closest) == null ? void 0 : d.call(o, ".jarmu-unit-row");
      if (a) {
        const g = (h = a.querySelector) == null ? void 0 : h.call(a, ".jarmu-unit-hp-max"), v = (g == null ? void 0 : g.textContent) ?? "", k = Number((v ?? "").trim()) || 0;
        let w;
        if (k <= 0)
          w = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          w = 0;
        else {
          const T = i / k;
          T > 2 / 3 ? w = 3 : T > 1 / 3 ? w = 2 : w = 1;
        }
        w === void 0 ? a.removeAttribute("data-hp-status") : a.dataset.hpStatus = String(w);
      }
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (m) => {
      var i;
      const o = m.currentTarget, c = (i = o == null ? void 0 : o.dataset) == null ? void 0 : i.itemId;
      if (!c) return;
      const y = this.actor.items.get(c);
      if (!y || y.type !== "Jarmuegyseg" && y.type !== "Helyiseg") return;
      const r = (o.value ?? "").trim();
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
    var m, o, c;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((o = e.system) == null ? void 0 : o.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((c = e.system) == null ? void 0 : c.replaceCost) ?? 0) || 0;
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
    var p, m, o, c, y, r, i, a, l;
    const e = this.actor;
    if (!e) return;
    const t = ((m = (p = e.items).get) == null ? void 0 : m.call(p, s)) ?? ((c = (o = e.items.contents) == null ? void 0 : o.find) == null ? void 0 : c.call(o, (d) => d.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (l = (r = ui.notifications) == null ? void 0 : r.warn) == null || l.call(
        r,
        ((a = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : a.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
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
    var c, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((c = game.items) == null ? void 0 : c.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: o,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var m, o;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((m = e == null ? void 0 : e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const c of Object.values(e))
        if (typeof c == "string" && c.includes(".") && c.startsWith("Item.")) {
          t = c;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!(this.actor.type === "Bazis" ? ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Helyiseg"] : ["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"]).includes(n.type)) return super._onDropItem(s, e);
    if (((o = n.parent) == null ? void 0 : o.id) === f.id) return;
    const p = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [p]);
  }
};
ee(he, "PARTS", foundry.utils.mergeObject(
  j(he, he, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), ee(he, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(he, he, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Es = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ps = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((xs = ($s = j(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : $s.window) == null ? void 0 : xs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let xt = he;
function Li(I) {
  if (I == null) return 0;
  const s = String(I).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function Ds(I) {
  var e;
  return (((e = I == null ? void 0 : I.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var f;
    return t + Li((f = n.system) == null ? void 0 : f.veszely);
  }, 0);
}
var Rs;
const it = class it extends xt {
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
      var O, C, z, K, U, M, W;
      const o = ((O = e.querySelector) == null ? void 0 : O.call(e, "form")) ?? e, c = (C = o.querySelector) == null ? void 0 : C.call(o, 'select[name="system.identity.assignment"]'), y = (z = o.querySelector) == null ? void 0 : z.call(o, 'select[name="system.identity.subAssignment"]'), r = (K = o.querySelector) == null ? void 0 : K.call(o, "input.bazis-threat-total"), i = (U = o.querySelector) == null ? void 0 : U.call(o, 'input[name="system.combat.threatBonus"]');
      if (!c || !r || !i) return;
      const a = c.value ?? "", l = (y == null ? void 0 : y.value) ?? "", d = t[a] ?? 0, h = n[l] ?? 0, g = (((W = (M = this.actor) == null ? void 0 : M.items) == null ? void 0 : W.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", k = f[v] ?? 0, w = Number(i.value ?? 0) || 0, T = Ds(this.actor), _ = d + h + k + w + T;
      r.value = _;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', u);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, f = n.identity ?? {}, u = n.combat ?? {}, p = f.assignment ?? "", m = f.subAssignment ?? "", o = {
        "Középső Rendszerek": -10,
        "Köztársasági Ágak": 10,
        "Peremvidék, vagy azon túl": 30
      }, c = {
        "Polgári Zóna": 10,
        "Ipari Zóna": 10,
        "Bánya Zóna": 10,
        "Katonai Zóna": -10,
        "Kutató Zóna": -10,
        "Elhagyott Zóna": 30,
        "Zónán kívüli terület": 30
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, r = o[p] ?? 0, i = c[m] ?? 0, a = e.sizeForSelect ?? "Kicsi", l = y[a] ?? 0, d = Number(u.threatBonus ?? 0) || 0, h = Ds(this.actor), g = r + i + l + d + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...u, threat: g, threatBonus: d } },
        { inplace: !1 }
      ), e.bazisThreatBase = r;
    }
    return e;
  }
};
ee(it, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(it, it, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Rs = j(it, it, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Ht = it;
const Fi = [
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
var Ms;
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
    e._votvProfileImgClick = (u) => {
      var o, c, y, r, i, a, l;
      if (!e.isEditable || !((c = (o = u.target) == null ? void 0 : o.closest) != null && c.call(o, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
      var p, m, o;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, o, c;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((c = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Fi, e;
  }
};
ee(qe, "PARTS", foundry.utils.mergeObject(j(qe, qe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), ee(qe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(qe, qe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ms = j(qe, qe, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.form) ?? {}, { submitOnChange: !1 })
}));
let Gt = qe;
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
    e._votvProfileImgClick = (u) => {
      var o, c, y, r, i, a, l;
      if (!e.isEditable || !((c = (o = u.target) == null ? void 0 : o.closest) != null && c.call(o, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
      var p, m, o;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, o, c;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((c = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "form"));
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
ee(Ne, "PARTS", foundry.utils.mergeObject(j(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), ee(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((zs = j(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : zs.form) ?? {}, { submitOnChange: !1 })
}));
let Vt = Ne;
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
    e._votvProfileImgClick = (u) => {
      var o, c, y, r, i, a, l;
      if (!e.isEditable || !((c = (o = u.target) == null ? void 0 : o.closest) != null && c.call(o, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
      var p, m, o;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, o, c;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((c = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "form"));
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
ee(Le, "PARTS", foundry.utils.mergeObject(j(Le, Le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), ee(Le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Le, Le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((js = j(Le, Le, "DEFAULT_OPTIONS")) == null ? void 0 : js.form) ?? {}, { submitOnChange: !1 })
}));
let Wt = Le;
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
    e._votvProfileImgClick = (u) => {
      var o, c, y, r, i, a, l;
      if (!e.isEditable || !((c = (o = u.target) == null ? void 0 : o.closest) != null && c.call(o, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
      var p, m, o;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, o, c;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((c = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "form"));
      f(p) && n(p);
    }, e._votvInput = (u) => {
      var o;
      const p = u.target;
      if ((p == null ? void 0 : p.name) === "name") return;
      const m = (p == null ? void 0 : p.form) ?? ((o = p == null ? void 0 : p.closest) == null ? void 0 : o.call(p, "form"));
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
ee(Fe, "PARTS", foundry.utils.mergeObject(j(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), ee(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ks = j(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.form) ?? {}, { submitOnChange: !0 })
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
    e._votvProfileImgClick = (u) => {
      var o, c, y, r, i, a, l;
      if (!e.isEditable || !((c = (o = u.target) == null ? void 0 : o.closest) != null && c.call(o, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
      var p, m, o;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, o, c;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((c = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "form"));
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
ee(Ae, "PARTS", foundry.utils.mergeObject(j(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), ee(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Us = j(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Us.form) ?? {}, { submitOnChange: !1 })
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
    e._votvProfileImgClick = (u) => {
      var o, c, y, r, i, a, l;
      if (!e.isEditable || !((c = (o = u.target) == null ? void 0 : o.closest) != null && c.call(o, ".profile")) && ((r = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const p = ((l = (a = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
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
      var p, m, o;
      return u && (((m = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : m.call(p, u)) || e.id && ((o = u.closest) == null ? void 0 : o.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var m, o, c;
      const p = ((m = u.target) == null ? void 0 : m.form) ?? ((c = (o = u.target) == null ? void 0 : o.closest) == null ? void 0 : c.call(o, "form"));
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
ee(Ee, "PARTS", foundry.utils.mergeObject(j(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), ee(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(j(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Bs = j(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Bs.form) ?? {}, { submitOnChange: !1 })
}));
let Yt = Ee;
var Hs, Gs;
const Ie = class Ie extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var m, o, c, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (o = this.document) == null ? void 0 : o.name,
      "id=",
      (c = this.document) == null ? void 0 : c.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (r) => {
      var i, a, l;
      try {
        const d = typeof r.composedPath == "function" ? r.composedPath() : [];
        if (!(this.element && d.includes(this.element) || this.id && ((a = (i = r.target) == null ? void 0 : i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", r);
        let g = null;
        try {
          g = TextEditor.getDragEventData(r);
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
            for (const C of Object.values(T))
              if (typeof C == "string" && C.includes(".") && C.startsWith("Item.")) return C;
          }
          return null;
        })(g);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", k), !k) return;
        const w = await fromUuid(k);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", w == null ? void 0 : w.id, w == null ? void 0 : w.type), !w || w.documentName !== "Item") return;
        if (w.type === "Kepesseg" || w.type === "ability") {
          const T = w.uuid ?? w.id, _ = this.document.system ?? {}, O = Array.isArray((l = _.abilities) == null ? void 0 : l.items) ? _.abilities.items.slice() : [];
          O.push(T), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (d) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", d);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (r) => {
      var d, h, g, v, k, w;
      r.preventDefault();
      const i = (h = (d = r.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef, a = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && a && (l = ((k = game.items) == null ? void 0 : k.get(a)) ?? null), (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (r) => {
      var d, h, g, v;
      r.preventDefault();
      const i = (h = (d = r.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef, a = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, l = i || a;
      l && await this._postAbilityToChat(l);
    }), n.on("click", ".karakter-ability-pill-remove", async (r) => {
      var g, v, k;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const a = this.document.system ?? {}, l = Array.isArray((k = a.abilities) == null ? void 0 : k.items) ? a.abilities.items.slice() : [], d = l.indexOf(i), h = d >= 0 ? [...l.slice(0, d), ...l.slice(d + 1)] : l;
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
      Object.keys(i).length !== 0 && e.document.update(i).catch((a) => console.warn("VoidJarmuEgysegSheet save failed", a));
    }, p = (r) => {
      var i, a, l;
      return r && (((a = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : a.call(i, r)) || e.id && ((l = r.closest) == null ? void 0 : l.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var a, l, d;
      const i = ((a = r.target) == null ? void 0 : a.form) ?? ((d = (l = r.target) == null ? void 0 : l.closest) == null ? void 0 : d.call(l, "form"));
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
        var o;
        if (!m) return null;
        try {
          const c = await fromUuid(m);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        } catch {
          const c = (o = game.items) == null ? void 0 : o.get(m);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        }
        return null;
      })
    )).map((m, o) => ({ doc: m, ref: f[o] })).filter((m) => !!m.doc && !!m.ref).map(({ doc: m, ref: o }) => {
      var i, a;
      const c = (((i = m.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((a = m.system) == null ? void 0 : a.kp) ?? 0) || 0, r = c === "species";
      return {
        id: m.id,
        ref: o,
        name: m.name,
        img: m.img,
        kind: c,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: r ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", p), e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var c, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((c = game.items) == null ? void 0 : c.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: o,
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
ee(Ie, "PARTS", foundry.utils.mergeObject(j(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), ee(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Ie, Ie, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((Hs = j(Ie, Ie, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Gs = j(Ie, Ie, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Xt = Ie;
var Vs, Ws;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var m, o;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (c) => {
      var a, l, d, h, g, v;
      c.preventDefault();
      const y = (l = (a = c.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemRef, r = (h = (d = c.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && r && (i = ((g = game.items) == null ? void 0 : g.get(r)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (c) => {
      var a, l, d, h;
      c.preventDefault();
      const y = (l = (a = c.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : l.itemRef, r = (h = (d = c.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemId, i = y || r;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (c) => {
      var d, h, g;
      if (c.preventDefault(), !c.altKey) return;
      const y = (h = (d = c.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef;
      if (!y) return;
      const r = this.document.system ?? {}, i = Array.isArray((g = r.abilities) == null ? void 0 : g.items) ? r.abilities.items.slice() : [], a = i.indexOf(y), l = a >= 0 ? [...i.slice(0, a), ...i.slice(a + 1)] : i;
      await this.document.update({ "system.abilities.items": l });
    });
    const f = (o = t == null ? void 0 : t.querySelector) == null ? void 0 : o.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (c) => {
      c.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (c) => {
      var y, r, i;
      try {
        const a = typeof c.composedPath == "function" ? c.composedPath() : [];
        if (!(this.element && a.includes(this.element) || this.id && ((r = (y = c.target) == null ? void 0 : y.closest) == null ? void 0 : r.call(y, `#${CSS.escape(this.id)}`)))) return;
        let d = null;
        try {
          d = TextEditor.getDragEventData(c);
        } catch {
        }
        if (!d || d.type !== "Item") return;
        const g = ((k) => {
          var T;
          if (!k) return null;
          const w = k.uuid ?? k.documentUuid ?? ((T = k.data) == null ? void 0 : T.uuid) ?? (typeof k == "string" ? k : null);
          if (w) return w;
          if (typeof k == "object") {
            for (const _ of Object.values(k))
              if (typeof _ == "string" && _.includes(".") && _.startsWith("Item.")) return _;
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
      } catch (a) {
        console.error("VoidHelyisegSheet global drop error", a);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), !this.isEditable) return;
    const u = (c) => {
      if (!c) return;
      const y = e._getFormDataForUpdate(c);
      Object.keys(y).length !== 0 && e.document.update(y).catch((r) => console.warn("VoidHelyisegSheet save failed", r));
    }, p = (c) => {
      var y, r, i;
      return c && (((r = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : r.call(y, c)) || e.id && ((i = c.closest) == null ? void 0 : i.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var r, i, a;
      const y = ((r = c.target) == null ? void 0 : r.form) ?? ((a = (i = c.target) == null ? void 0 : i.closest) == null ? void 0 : a.call(i, "form"));
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
        var o;
        if (!m) return null;
        try {
          const c = await fromUuid(m);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        } catch {
          const c = (o = game.items) == null ? void 0 : o.get(m);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        }
        return null;
      })
    )).map((m, o) => ({ doc: m, ref: f[o] })).filter((m) => !!m.doc && !!m.ref).map(({ doc: m, ref: o }) => {
      var i, a;
      const c = (((i = m.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((a = m.system) == null ? void 0 : a.kp) ?? 0) || 0, r = c === "species";
      return {
        id: m.id,
        ref: o,
        name: m.name,
        img: m.img,
        kind: c,
        kpDisplay: r ? 0 : y
      };
    });
    return e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var c, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((c = game.items) == null ? void 0 : c.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", m = f ? `<p>${f}</p>` : "", o = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${p}
      ${m}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: o,
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
ee(Se, "PARTS", foundry.utils.mergeObject(j(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs" }
})), ee(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  j(Se, Se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Helyiseg"],
    template: "systems/vacuum-of-the-void/templates/item/helyiseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((Vs = j(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Ws = j(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Qt = Se;
const Js = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Zs(I) {
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
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ri, CONFIG.Actor.dataModels.Npc = Rt, CONFIG.Actor.dataModels.Jarmu = li, CONFIG.Actor.dataModels.Bazis = pi, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = vs, CONFIG.Item.dataModels.weapon = vs, CONFIG.Item.dataModels.Pancel = gi, CONFIG.Item.dataModels.MikroChip = hi, CONFIG.Item.dataModels.Kepesseg = Is, CONFIG.Item.dataModels.ability = Is, CONFIG.Item.dataModels.Targy = vi, CONFIG.Item.dataModels.Egyeb = wi, CONFIG.Item.dataModels.Jarmuegyseg = Si, CONFIG.Item.dataModels.Helyiseg = Oi, (f = CONFIG.Actor).trackableAttributes ?? (f.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (u = CONFIG.Actor).typeLabels ?? (u.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", (p = CONFIG.Combat).initiative ?? (p.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ot, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Bt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", xt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Vt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Wt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Jt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Zt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Yt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Xt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Qt, {
    types: ["Helyiseg"],
    makeDefault: !0,
    label: "VOTV.HelyisegSheet"
  });
  const s = "systems/vacuum-of-the-void/assets/blank.svg";
  Hooks.on("preCreateActor", (o, c, y) => {
    (c == null ? void 0 : c.type) === "Bazis" && (c.img = s);
  }), Hooks.on("preUpdateActor", (o, c, y) => {
    (o == null ? void 0 : o.type) === "Bazis" && Object.prototype.hasOwnProperty.call(c ?? {}, "img") && (c.img = s);
  }), Hooks.on("ready", () => {
    var y;
    const o = s, c = (((y = game.actors) == null ? void 0 : y.contents) ?? []).filter(
      (r) => r.type === "Bazis" && (r.img ?? "").toString().trim() !== o
    );
    c.length && c.forEach((r) => r.update({ img: o }).catch(() => {
    }));
  }), Hooks.on("updateActor", (o, c, y, r) => {
    if ((o == null ? void 0 : o.type) !== "Karakter" || !(o != null && o.id)) return;
    const i = o.id;
    setTimeout(() => {
      var h, g, v, k;
      const a = (h = game.actors) == null ? void 0 : h.get(i);
      if (!a || a.type !== "Karakter") return;
      const l = Ot.getTotalSpeedRaw(a), d = (g = a.effects) == null ? void 0 : g.find((w) => w.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !d) {
        const w = ((k = (v = CONFIG.statusEffects) == null ? void 0 : v.find((T) => T.id === "immobilized")) == null ? void 0 : k.img) ?? "";
        a.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: w,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: a.uuid
        }]).then(() => {
          var _, O;
          const T = ((_ = canvas.tokens) == null ? void 0 : _.placeables) ?? [];
          for (const C of T)
            ((O = C == null ? void 0 : C.document) == null ? void 0 : O.actorId) === i && typeof C.draw == "function" && C.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else l > 0 && d && d.delete().then(() => {
        var T, _;
        const w = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const O of w)
          ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === i && typeof O.draw == "function" && O.draw();
      }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", w));
    }, 0);
  });
  const e = 500;
  Hooks.on("updateActor", (o, c, y, r) => {
    var T, _, O, C, z, K, U, M, W, Z, J, Y, oe;
    const i = o == null ? void 0 : o.id;
    if (!i) return;
    if ((o.type === "Karakter" || o.type === "Npc") && ((T = c == null ? void 0 : c.system) != null && T.combat) && "initiativeResult" in c.system.combat) {
      const R = Number((O = (_ = o.system) == null ? void 0 : _.combat) == null ? void 0 : O.initiativeResult), te = Number.isFinite(R) ? R : 0, de = game.combat;
      if (de) {
        const Te = ((C = de.combatants) == null ? void 0 : C.contents) ?? Array.from(de.combatants ?? []);
        for (const D of Te)
          if (((z = D.actor) == null ? void 0 : z.id) === i || D.actorId === i) {
            de.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: te }]).catch(() => {
            });
            break;
          }
      }
    }
    if (o.type === "Npc" && ((K = c == null ? void 0 : c.system) != null && K.identity) && "size" in c.system.identity) {
      const R = Zs((M = (U = o.system) == null ? void 0 : U.identity) == null ? void 0 : M.size);
      o.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", o.name, te));
    }
    const a = document.activeElement, l = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA" || a.isContentEditable), d = [], h = (W = game.actors) == null ? void 0 : W.get(i);
    h != null && h.apps && d.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of g) {
      if (((Z = R.document) == null ? void 0 : Z.id) !== i || ((J = R.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = R.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" || d.includes(R) || d.push(R);
    }
    if (l && d.some((R) => {
      const te = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return te && te.contains(a);
    })) return;
    const k = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, w = k && Date.now() - k.at < e ? k.appId : null;
    setTimeout(() => {
      for (const R of d)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== w && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (o, c, y, r) => {
    var d, h, g;
    const i = o == null ? void 0 : o.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || o.type !== "Fegyver") return;
    const a = ((d = i.system) == null ? void 0 : d.weapons) ?? {}, l = {};
    for (const [v, k] of Object.entries(a)) {
      if (!v.startsWith("slot")) continue;
      const w = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !w || w !== o.id || (l[`system.weapons.${v}.name`] = o.name ?? "", l[`system.weapons.${v}.damage`] = ((h = o.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${v}.bonus`] = ((g = o.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, k, w, T, _, O, C, z, K, U, M, W, Z, J, Y, oe, R, te, de, Te, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), u = (w = (k = f == null ? void 0 : f.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!u) return;
    const p = u.actorId ?? ((T = f == null ? void 0 : f.speaker) == null ? void 0 : T.actor) ?? "";
    if (!p) return;
    e.preventDefault(), e.stopPropagation();
    let m = ((_ = game.actors) == null ? void 0 : _.get(u.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(p));
    if (m || (m = ((z = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : z.flatMap((V) => {
      var se;
      return ((se = V.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((V) => V.actor).find((V) => V && (V.id === p || V.id === u.actorId))) ?? null), !m) return;
    const o = u.itemId ? ((U = (K = m.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, u.itemId)) ?? ((Z = (W = (M = m.items) == null ? void 0 : M.contents) == null ? void 0 : W.find) == null ? void 0 : Z.call(W, (E) => E.id === u.itemId)) : null;
    let c = (u.damageFormula ?? "").trim();
    if (c || (c = (((J = o == null ? void 0 : o.system) == null ? void 0 : J.damage) ?? "").trim()), !c && u.slotKey && (c = (((((Y = m.system) == null ? void 0 : Y.weapons) ?? {})[u.slotKey] ?? {}).damage ?? "").trim()), !c) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (R = game.i18n) == null ? void 0 : R.localize) == null ? void 0 : te.call(R, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(c);
    await y.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = u.targetName || "", a = u.hitLocationName || "", l = ((o == null ? void 0 : o.name) ?? (u.slotKey ? ((D = (((Te = m.system) == null ? void 0 : Te.weapons) ?? {})[u.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let d = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    a && (d += ` (${a})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: m }),
      flavor: d,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var u, p, m, o, c, y;
      if (!((p = (u = e.target) == null ? void 0 : u.closest) != null && p.call(u, "#actors"))) return;
      const t = (o = (m = e.target) == null ? void 0 : m.closest) == null ? void 0 : o.call(m, "[data-document-id]"), n = (c = t == null ? void 0 : t.getAttribute) == null ? void 0 : c.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, u;
    const e = ((t = game.actors) == null ? void 0 : t.filter((p) => p.type === "Karakter")) ?? [];
    for (const p of e) {
      const m = Ot.getTotalSpeedRaw(p), o = (n = p.effects) == null ? void 0 : n.find((c) => c.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (m <= 0 && !o) {
        const c = ((u = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : u.img) ?? "";
        await p.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: c,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: p.uuid
        }]).catch(() => {
        });
      } else m > 0 && o && await o.delete().catch(() => {
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
        background: { src: Js },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, u = await n.create(f);
      u && console.log("Vacuum of the Void | Default scene created:", u.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var u, p, m, o, c, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((u = game.actors) == null ? void 0 : u.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of t)
      try {
        const i = r.prototypeToken, a = ((p = i == null ? void 0 : i.bar1) == null ? void 0 : p.attribute) ?? "", l = ((m = i == null ? void 0 : i.bar2) == null ? void 0 : m.attribute) ?? "";
        (a || l) && await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", r.name, i);
      }
    for (const r of game.scenes ?? []) {
      const i = ((o = r.tokens) == null ? void 0 : o.filter((a) => {
        var l;
        return ((l = a.actor) == null ? void 0 : l.type) === "Karakter";
      })) ?? [];
      for (const a of i)
        try {
          await a.update(e);
        } catch (l) {
          console.warn("Vacuum of the Void | Token update failed for", a.name, l);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, f = ((c = game.actors) == null ? void 0 : c.filter((r) => r.type === "Npc")) ?? [];
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
      const i = ((y = r.tokens) == null ? void 0 : y.filter((a) => {
        var l;
        return ((l = a.actor) == null ? void 0 : l.type) === "Npc";
      })) ?? [];
      for (const a of i)
        try {
          await a.update(n);
        } catch (l) {
          console.warn("Vacuum of the Void | NPC token update failed for", a.name, l);
        }
    }
  })();
});
Hooks.on("preCreateToken", (I, s, e) => {
  var u, p, m, o, c, y, r, i;
  const t = (u = game.votv) == null ? void 0 : u._dragSourceActorId, n = t ?? I.actorId ?? ((p = I._source) == null ? void 0 : p.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (m = game.actors) == null ? void 0 : m.get(n) : I.actor ?? null;
  if (f) {
    if (f.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((c = (o = game.i18n) == null ? void 0 : o.localize) == null ? void 0 : c.call(o, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
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
      const a = Zs((i = (r = f.system) == null ? void 0 : r.identity) == null ? void 0 : i.size);
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: a,
        height: a
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
const Ai = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Ys(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Ai).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ys(I);
});
function Xs() {
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
  setTimeout(Xs, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && Ys(I), setTimeout(Xs, 0);
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
    "background.src": Js,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var y, r, i, a;
  const t = ((y = I.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, u = t.weaponAttack, p = t.weapon, m = t.vsDefense, o = t.vsDefenseInfo;
  if (!n && !f && !u && !m) return;
  const c = (r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, ".dice-roll");
  if (c) {
    if (n && c.classList.add(`votv-${n}`), f) {
      const l = c.querySelector(".votv-crit-label");
      if (l)
        l.textContent = f;
      else {
        const d = c.querySelector(".dice-total"), h = (d == null ? void 0 : d.parentElement) ?? c, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = f, h.appendChild(g);
      }
    }
    if (u && p && (p.actorId || (i = I.speaker) != null && i.actor)) {
      const l = c.querySelector(".dice-total"), d = (l == null ? void 0 : l.parentElement) ?? c;
      if (!c.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!p.isHit, k = p.targetName || "Célpont";
        g.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, d.appendChild(g);
      }
      if (p.isHit && !c.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = p.hitLocationRoll, w = p.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(p.actorId ?? ((a = I.speaker) == null ? void 0 : a.actor) ?? ""), v.dataset.itemId = String(p.itemId ?? ""), v.dataset.slotKey = String(p.slotKey ?? ""), v.dataset.targetName = String(p.targetName ?? ""), v.dataset.hitLocationName = String(p.hitLocationName ?? ""), v.dataset.messageId = String(I.id ?? ""), d.appendChild(v);
      }
    }
    if (!u && m && o) {
      const l = c.querySelector(".dice-total"), d = (l == null ? void 0 : l.parentElement) ?? c, h = !!o.isHit, g = o.targetName || "Célpont", v = o.hitLocationRoll, k = o.hitLocationName;
      let w = c.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", d.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const T = c.querySelector(".votv-defense-hitloc");
      if (h && v != null && k) {
        let _ = T;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", d.appendChild(_)), _.textContent = `Találati Hely ${v} - ${k}`;
      } else T && T.remove();
    }
  }
});
export {
  Ot as V,
  Ut as c
};
//# sourceMappingURL=vacuum-of-the-void-jNAxW5gg.mjs.map
