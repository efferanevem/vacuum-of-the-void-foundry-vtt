var ai = Object.defineProperty;
var oi = Object.getPrototypeOf;
var ci = Reflect.get;
var li = (I, s, e) => s in I ? ai(I, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[s] = e;
var X = (I, s, e) => li(I, typeof s != "symbol" ? s + "" : s, e);
var M = (I, s, e) => ci(oi(I), e, s);
const { HTMLField: di, NumberField: A, SchemaField: H, StringField: L, BooleanField: me, ArrayField: _t } = foundry.data.fields;
class Mt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new H({
        name: new L({ required: !1, blank: !0, initial: "" }),
        player: new L({ required: !1, blank: !0, initial: "" }),
        level: new A({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new L({ required: !1, blank: !0, initial: "" }),
        assignment: new L({ required: !1, blank: !0, initial: "" }),
        subAssignment: new L({ required: !1, blank: !0, initial: "" }),
        background: new L({ required: !1, blank: !0, initial: "" }),
        languages: new L({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new L({ required: !1, blank: !0, initial: "" })
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
        speedUnit: new L({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new A({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new _t(
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
        quickThinking1: new L({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new L({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new L({ required: !1, blank: !0, initial: "" }),
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
        slotOrder: new L({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new H({
          name: new L({ required: !1, blank: !0, initial: "" }),
          bonus: new L({ required: !1, blank: !0, initial: "" }),
          damage: new L({ required: !1, blank: !0, initial: "" }),
          itemId: new L({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new H({
        microchips: new H({
          slot1: new H({
            itemId: new L({ required: !1, blank: !0, initial: "" }),
            name: new L({ required: !1, blank: !0, initial: "" }),
            active: new me({ required: !1, initial: !1 })
          }),
          slot2: new H({
            itemId: new L({ required: !1, blank: !0, initial: "" }),
            name: new L({ required: !1, blank: !0, initial: "" }),
            active: new me({ required: !1, initial: !1 })
          }),
          slot3: new H({
            itemId: new L({ required: !1, blank: !0, initial: "" }),
            name: new L({ required: !1, blank: !0, initial: "" }),
            active: new me({ required: !1, initial: !1 })
          })
        }),
        equipment: new L({ required: !1, blank: !0, initial: "" }),
        armor: new _t(
          new H({
            name: new L({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new L({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new L({ required: !1, blank: !0, initial: "" }),
            level: new L({ required: !1, blank: !0, initial: "" }),
            other: new L({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new _t(
          new H({
            name: new L({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new L({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new H({
        faji: new H({
          itemId: new L({ required: !1, blank: !0, initial: "" }),
          name: new L({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new H({
          itemId: new L({ required: !1, blank: !0, initial: "" }),
          name: new L({ required: !1, blank: !0, initial: "" })
        }),
        passive: new H({
          items: new _t(
            new L({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new _t(
            new L({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new di({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: zt, SchemaField: mi } = foundry.data.fields;
class pi extends Mt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new mi({
        body: new zt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new zt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new zt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: fi, StringField: bs, NumberField: yi } = foundry.data.fields;
class gi extends Mt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new fi({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new bs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new bs({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new yi({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: hi, StringField: vs, NumberField: bi } = foundry.data.fields;
class vi extends Mt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new hi({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new vs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new vs({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
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
const { BooleanField: ki, NumberField: zi, StringField: Ve } = foundry.data.fields;
class ks extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new ki({ required: !1, initial: !1 }),
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
const { BooleanField: wi, StringField: $t } = foundry.data.fields;
class Ii extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new wi({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new $t({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new $t({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new $t({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new $t({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Kt, StringField: ws } = foundry.data.fields;
class Si extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new ws({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new ws({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Kt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Kt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Kt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: Ti, StringField: Is } = foundry.data.fields;
class Ss extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new Is({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new Is({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new Ti({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: Ts } = foundry.data.fields;
class Di extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Ts({ required: !1, blank: !0, initial: "" }),
      quantity: new Ts({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: Oi } = foundry.data.fields;
class _i extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Oi({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Ut, StringField: dt, SchemaField: Ds, ArrayField: Ci } = foundry.data.fields;
class Li extends foundry.abstract.TypeDataModel {
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
        items: new Ci(
          new dt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new dt({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new dt({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new dt({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new dt({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new dt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: qi, StringField: xt, SchemaField: Ni, ArrayField: Ai } = foundry.data.fields;
class Fi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new qi({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new Ni({
        items: new Ai(
          new xt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Raktár (szabad szöveg, opcionális; a Bázis raktárkapacitás összegéhez). */
      storage: new xt({ required: !1, blank: !0, initial: "" }),
      /** Veszély (opcionális, pl. +15%). */
      veszely: new xt({ required: !1, blank: !0, initial: "" }),
      /** Cépont szám (szabad szöveg, opcionális; a Bázis táblázatban). */
      hit: new xt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Bt(I) {
  if (!I || !Array.isArray(I.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (a, i = 1) => {
    if (!Array.isArray(a)) return;
    let o = i;
    for (const l of a) {
      if (!l) continue;
      if (Array.isArray(l.terms)) {
        f(l.terms, o);
        continue;
      }
      if (typeof l.operator == "string") {
        o = l.operator === "-" ? -1 : 1;
        continue;
      }
      const d = typeof l.faces == "number" ? l.faces : void 0, h = Array.isArray(l.results) ? l.results : null;
      if (!d || !h || d === 8 || d !== 6) continue;
      const g = !n && o >= 0 && (l.number === 3 || l.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && g.push(k);
      }
    }
  };
  f(I.terms, 1);
  const u = s.filter((a) => a === 6).length, m = s.filter((a) => a === 1).length, p = e.filter((a) => a === 6).length, r = t.filter((a) => a === 6).length, c = u + p, y = m + r;
  return c > 0 && c === y ? { resultType: null, label: null } : c >= 3 ? { resultType: "critical", label: "Brutális Siker" } : c === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function Ei(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var Cs, Ls, qs, Ns;
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
    var n, f, u, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((u = s.querySelector) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const d = document.activeElement, h = u.contains(d), g = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      h && g && (m.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const r = this.element, c = this.form ?? this.element, y = m.scrollState, a = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var d, h;
      if (this._applyScrollState(r, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((d = c.querySelector) == null ? void 0 : d.call(c, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = c.querySelector) == null ? void 0 : h.call(c, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(r, y);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), p;
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
        var m;
        return u.type === "Pancel" && ((m = u.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const u of s) {
      const m = String(((f = u.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (u) => {
        var m;
        return u.type === "Pancel" && ((m = u.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const u of s) {
      const m = String(((f = u.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (e += p);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (u) => {
        var m;
        return u.type === "Pancel" && ((m = u.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let t = 0;
    for (const u of e) {
      const m = String(((f = u.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), p = Number(m);
      Number.isFinite(p) && (t += p);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var c, y, a, i, o, l, d, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (c = e.hitLocations) == null ? void 0 : c.legs) == null ? void 0 : y.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, f = Q._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const u = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let m;
    f === 1 ? m = -6 : f === 2 ? m = -3 : m = u, m += Q._getTotalArmorSpeedPenaltyStatic(s);
    const p = Number(((d = (l = s.system) == null ? void 0 : l.combat) == null ? void 0 : d.speed) ?? 0) || 0, r = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return p + r + (Number.isFinite(m) ? m : 0);
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
    var y, a, i, o, l, d, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((d = (l = this.actor) == null ? void 0 : l.system) == null ? void 0 : d.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, u = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, m = Q._healthStatusFromRatio(u, f), p = Number(((T = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : T.givenSpeed) ?? 0) || 0;
    let r;
    m === 0 ? r = 0 : m === 1 ? r = -6 : m === 2 ? r = -3 : r = p;
    const c = this._getTotalArmorSpeedPenalty();
    r += c, t.textContent = String(r);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var r, c, y, a, i, o, l, d, h, g, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (y = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : y.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, f = (l = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && l.call(o, "lookaround") ? 1 : 0, u = (g = (h = (d = this.actor) == null ? void 0 : d.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, m = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, p = n + this._getTotalArmorProtectionBonus() + f + u + m;
    t.textContent = String(p);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), u = t('input[name="system.combat.defense"]'), m = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const p = Number(u == null ? void 0 : u.value) || 0, r = Number(m == null ? void 0 : m.value) || 0, c = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(p + r + c);
  }
  _writeTotalSpeed(s = null) {
    var l, d, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element, t = (O) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, O)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${O}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), u = t('input[name="system.combat.speed"]'), m = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (d = (l = this.actor) == null ? void 0 : l.statuses) == null ? void 0 : d.has) != null && h.call(d, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const p = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, r = ((w = (k = p.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, c = ((T = p.currentHealth) == null ? void 0 : T.legs) ?? 0;
    if (Q._healthStatusFromRatio(c, r) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(u == null ? void 0 : u.value) || 0, i = Number(m == null ? void 0 : m.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(a + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var u, m, p, r;
    const e = Q.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((u = this.actor.system) == null ? void 0 : u.resources) ?? {}, n = ((p = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : p.value) ?? 0, f = ((r = t.currentHealth) == null ? void 0 : r[e]) ?? 0;
    return Q._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var m, p, r, c;
    const t = Q.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((m = s == null ? void 0 : s.system) == null ? void 0 : m.resources) ?? {}, f = ((r = (p = n.hitLocations) == null ? void 0 : p[t]) == null ? void 0 : r.value) ?? 0, u = ((c = n.currentHealth) == null ? void 0 : c[t]) ?? 0;
    return Q._healthStatusFromRatio(u, f);
  }
  async _prepareContext(s) {
    var pt, ft, yt, gt, ht, bt, vt, kt, wt, Ye, It, St, Xe, S, P, x, G, ke, ne, Le, Oe, we, Re, Qe, et, At, Ft, Et, Pt, Tt, lt, ts, ss, is, ns, rs, as, os, cs, ls, us, ds, ms, ps, fs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((yt = (ft = (pt = this.actor.system) == null ? void 0 : pt.resources) == null ? void 0 : ft.stress) == null ? void 0 : yt.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, u = n.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of m) {
      const N = ((gt = f[b]) == null ? void 0 : gt.value) ?? 0, q = u[b] ?? 0;
      e.computedHealthStatus[b] = Q._healthStatusFromRatio(q, N);
    }
    const p = (Number(u.head) || 0) === 0, c = ["torso", "arms", "legs"].filter((b) => (Number(u[b]) || 0) === 0).length;
    e.showDeathSkull = p || c >= 2;
    const y = e.computedHealthStatus.legs ?? 3, a = Number(((bt = (ht = this.actor.system) == null ? void 0 : ht.combat) == null ? void 0 : bt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = a;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const l = Number(((kt = (vt = this.actor.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.givenProtection) ?? 0) || 0, d = (It = (Ye = (wt = this.actor) == null ? void 0 : wt.statuses) == null ? void 0 : Ye.has) != null && It.call(Ye, "lookaround") ? 1 : 0, h = (S = (Xe = (St = this.actor) == null ? void 0 : St.statuses) == null ? void 0 : Xe.has) != null && S.call(Xe, "halfcover") ? 3 : 0, g = (G = (x = (P = this.actor) == null ? void 0 : P.statuses) == null ? void 0 : x.has) != null && G.call(x, "threequarteredcover") ? 6 : 0, v = l + this._getTotalArmorProtectionBonus() + d + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let T = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    y === 0 && (T = 0), (Oe = (Le = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Le.has) != null && Oe.call(Le, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Re = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : Re.givenProtection } },
      { inplace: !1 }
    ), T = 0), e.totalSpeed = T;
    const O = Q.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(O)) {
      const q = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = q, e.skillDisabled[b] = q === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, C = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], z = (_.slotOrder ?? "").trim(), K = z ? z.split(/\s*,\s*/).filter((b) => C.includes(b)) : [], U = (Qe = this.actor.system.gear) == null ? void 0 : Qe.microchips, j = U && typeof U == "object" && !Array.isArray(U) ? U : {}, V = (((et = j.slot1) == null ? void 0 : et.itemId) ?? "").trim(), Z = (((At = j.slot2) == null ? void 0 : At.itemId) ?? "").trim(), J = (((Ft = j.slot3) == null ? void 0 : Ft.itemId) ?? "").trim(), oe = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const q = typeof b.sort == "number" ? b.sort : 0, F = typeof N.sort == "number" ? N.sort : 0;
      return q - F;
    }).map((b) => {
      var Me, st, it, Ge, We, Dt;
      const N = b.type === "Fegyver", q = b.type === "MikroChip";
      let F = 0, B = "", ue = null;
      for (let ut = 0; ut < K.length; ut++) {
        const Ot = K[ut];
        if ((((Me = _[Ot]) == null ? void 0 : Me.itemId) ?? "") === b.id) {
          F = ut + 1, B = ((st = _[Ot]) == null ? void 0 : st.bonus) ?? "", ue = Ot;
          break;
        }
      }
      let ae = null;
      q && (V === b.id ? ae = "slot1" : Z === b.id ? ae = "slot2" : J === b.id && (ae = "slot3"));
      const tt = N && ((it = b.system) != null && it.damage) ? b.system.damage : "", Ie = N && typeof ((Ge = b.system) == null ? void 0 : Ge.range) == "string" ? (b.system.range || "").trim() : "", _e = ue ? Number((We = _[ue]) == null ? void 0 : We.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: N,
        slotAssignment: F,
        slotBonus: B,
        slotKey: ue,
        microchipSlotKey: ae,
        isEquipped: !!(ue || ae),
        damage: tt,
        rangeStr: Ie,
        slotBonusNum: _e,
        quantity: Number(((Dt = b.system) == null ? void 0 : Dt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = oe;
    const R = (((Et = this.actor.items) == null ? void 0 : Et.contents) ?? []).filter((b) => b.type === "Fegyver"), te = R.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = te;
    const de = "— Nincs fegyver —", De = K.filter((b) => {
      const q = ((_[b] ?? {}).itemId ?? "").trim();
      return q ? !!R.find((B) => B.id === q) : !1;
    });
    e.weaponSlots = De.map((b, N) => {
      const q = _[b] ?? {}, F = (q.itemId ?? "").trim(), B = te.find((_e) => _e.id === F), ue = R.find((_e) => _e.id === F), ae = (ue == null ? void 0 : ue.system) ?? {}, tt = ae.size === "thrown", Ie = (typeof ae.range == "string" ? (ae.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: F,
        slotNum: N + 1,
        displayName: (B == null ? void 0 : B.name) || q.name || de,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(q.bonus) || 0,
        damage: q.damage ?? "",
        isThrown: tt,
        rangeStr: Ie
      };
    });
    const D = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, E = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = R.map((b) => {
      var ys, gs, hs;
      const N = b.id;
      let q = null, F = {};
      for (const jt of K)
        if ((((ys = _[jt]) == null ? void 0 : ys.itemId) ?? "").trim() === N) {
          q = jt, F = _[jt] ?? {};
          break;
        }
      const B = !!q, ue = ((gs = b.system) == null ? void 0 : gs.equipped) !== void 0 && ((hs = b.system) == null ? void 0 : hs.equipped) !== null ? !!b.system.equipped : B, ae = (b == null ? void 0 : b.system) ?? {}, tt = typeof ae.range == "string" ? (ae.range || "").trim() : "", Ie = ae.type ?? "", _e = (D[Ie] ?? Ie) || "—", Me = ae.size ?? "", st = (E[Me] ?? Me) || "", it = [_e, st].filter(Boolean).join(", ") || _e || "—", Ge = Ie === "projectile" || Me === "thrown", We = ae.quantity, Dt = We != null ? String(We).trim() : "1", ut = String(F.bonus ?? "").trim(), Ot = String(ae.bonus ?? "").trim(), ri = ut || Ot || "0";
      return {
        slotKey: q ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? de,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: ri,
        damage: F.damage ?? ae.damage ?? "",
        rangeStr: tt || "—",
        typeLabel: _e,
        typeAndSize: it,
        quantity: Dt,
        quantityDisplay: Ge ? Dt : "—",
        isProjectile: Ge,
        equipped: ue,
        special: (ae.special ?? "").trim() || "—"
      };
    });
    const W = (((Pt = this.actor.items) == null ? void 0 : Pt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = W.map((b) => {
      var F, B;
      const N = (b == null ? void 0 : b.system) ?? {}, q = ((F = b.system) == null ? void 0 : F.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: Ei((N.level ?? "").toString().trim()),
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: q
      };
    });
    const se = (((Tt = this.actor.items) == null ? void 0 : Tt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = se.map((b) => {
      const N = (b == null ? void 0 : b.system) ?? {}, q = (N.description ?? "").trim(), F = q ? q.length > 60 ? q.slice(0, 57) + "…" : q : "—", B = N.quantity != null ? String(N.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: B,
        description: F
      };
    });
    const le = (((lt = this.actor.items) == null ? void 0 : lt.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = le.map((b) => {
      const q = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), F = q ? q.length > 80 ? q.slice(0, 77) + "…" : q : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: F
      };
    });
    const pe = (((ts = this.actor.items) == null ? void 0 : ts.contents) ?? []).filter((b) => b.type === "MikroChip"), re = pe.map((b) => ({ id: b.id, name: b.name, img: b.img })), ve = "— Nincs Mikro-Chip —", ce = ["slot1", "slot2", "slot3"], fe = (b) => {
      var q, F, B;
      const N = [];
      return b !== 1 && N.push((((q = j.slot1) == null ? void 0 : q.itemId) ?? "").trim()), b !== 2 && N.push((((F = j.slot2) == null ? void 0 : F.itemId) ?? "").trim()), b !== 3 && N.push((((B = j.slot3) == null ? void 0 : B.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = re.filter((b) => !fe(1).includes(b.id)), e.microchipItemsSlot2 = re.filter((b) => !fe(2).includes(b.id)), e.microchipItemsSlot3 = re.filter((b) => !fe(3).includes(b.id)), e.microchipSlots = ce.map((b) => {
      const N = j[b] ?? {}, q = (N.itemId ?? "").trim(), F = pe.find((B) => B.id === q);
      return {
        slotKey: b,
        itemId: q,
        displayName: (F == null ? void 0 : F.name) || N.name || ve,
        img: (F == null ? void 0 : F.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, q = j[N] ?? {}, F = (q.itemId ?? "").trim(), B = re.find((ue) => ue.id === F);
      e[`microchip${b}ItemId`] = F, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || q.name || ve, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = pe.map((b) => {
      var Me, st, it, Ge;
      const N = b.id;
      let q = null;
      for (const We of ce)
        if ((((Me = j[We]) == null ? void 0 : Me.itemId) ?? "").trim() === N) {
          q = We;
          break;
        }
      const F = !!q, B = ((st = b == null ? void 0 : b.system) == null ? void 0 : st.abilityType) ?? "", ue = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", ae = B === "active", tt = Number((it = b == null ? void 0 : b.system) == null ? void 0 : it.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Ie = (((Ge = b == null ? void 0 : b.system) == null ? void 0 : Ge.description) ?? "").trim(), _e = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ue,
        description: _e,
        kp: tt,
        isActive: ae,
        slotKey: q ?? "",
        equipped: F
      };
    });
    const je = (((ss = e.weaponsTable) == null ? void 0 : ss.length) ?? 0) > 0 || (((is = e.armorTable) == null ? void 0 : is.length) ?? 0) > 0 || (((ns = e.microchipsTable) == null ? void 0 : ns.length) ?? 0) > 0 || (((rs = e.itemsTable) == null ? void 0 : rs.length) ?? 0) > 0;
    e.showEquipmentDropZone = !je;
    const ze = this.actor.system.abilities ?? {}, $e = (((as = this.actor.items) == null ? void 0 : as.contents) ?? []).map((b) => {
      var N, q, F;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((q = b.system) == null ? void 0 : q.description) ?? "",
        kp: Number(((F = b.system) == null ? void 0 : F.kp) ?? 0) || 0
      };
    }), Ke = new Map($e.map((b) => [b.id, b])), rt = "— Nincs képesség —", Ue = (b) => {
      const N = ze[b] ?? {}, q = (N.itemId ?? "").trim(), F = q ? Ke.get(q) : null, B = (F == null ? void 0 : F.description) ?? "", ue = (F == null ? void 0 : F.kp) ?? 0;
      return {
        itemId: q,
        displayName: (F == null ? void 0 : F.name) || N.name || rt,
        img: (F == null ? void 0 : F.img) || "",
        description: B,
        kp: ue
      };
    };
    e.abilityFajiSlot = Ue("faji"), e.abilityHatterSlot = Ue("hatter");
    const Je = (b) => {
      const N = ze[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Be = (b) => b.map((N) => {
      const q = Ke.get(N);
      return q ? {
        id: q.id,
        name: q.name,
        img: q.img,
        description: q.description,
        kp: q.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Be(Je("passive")), e.abilityActiveList = Be(Je("active"));
    const at = ((os = e.system) == null ? void 0 : os.resources) ?? {}, ee = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ye = (ls = (cs = e.system) == null ? void 0 : cs.combat) == null ? void 0 : ls.initiativeResult, ie = typeof ye == "number" ? ye : -1, ot = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], xe = (ds = (us = e.system) == null ? void 0 : us.combat) == null ? void 0 : ds.initiativeRanges, Ce = Array.isArray(xe) ? xe.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], He = (Ce.length > 0 ? Ce : ot).slice().sort((b, N) => b.min - N.min), Ze = Ce.map((b) => b.min), Lt = Ze.length ? Math.min(...Ze) : 0, qt = Ze.length ? Math.max(...Ze) : 0;
    e.initiativeRanges = Ce.map((b) => ({ ...b, isFirst: b.min === Lt, isLast: b.min === qt }));
    let mt = 0;
    if (typeof ie == "number" && ie >= 0 && He.length > 0) {
      const b = He[0], N = He[He.length - 1];
      let q = null;
      ie <= b.max ? q = b : ie >= N.min ? q = N : q = He.find((F) => ie >= F.min && ie <= F.max), q && (mt = q.kp);
    }
    e.kpDots = ee.map((b, N) => {
      const q = N + 1, F = !!Number(at[b]), B = q <= mt;
      return { index: q, used: F, usable: B };
    });
    const Nt = !!((ps = (ms = game.combat) == null ? void 0 : ms.combatants) != null && ps.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = Nt, e.canEditInitiative = !!((fs = game.user) != null && fs.isGM), e.showInitiativeResult = typeof ye == "number", e.initiativeResult = e.showInitiativeResult ? ye : "", e;
  }
  _attachFrameListeners(s) {
    var y, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const l = (i.currentTarget.dataset.slot ?? "").trim();
      if (!l) return;
      const { openRollSheetForWeapon: d } = await import("./roll-sheet-4Zq1kD47.mjs");
      d(this.actor, l);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var d, h, g;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let l = (o.dataset.itemId ?? "").trim();
      if (!l) {
        const v = (o.dataset.slot ?? "").trim();
        if (!v) return;
        l = (((((h = (d = this.actor) == null ? void 0 : d.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      l && await this._rollWeaponDamage(l, ((g = o.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-4Zq1kD47.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, l = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(l) || l < 1 || l > 6) return;
      const d = `system.resources.kpDot${l}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${l}`]);
      await this.actor.update({ [d]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var d;
      const o = i ? i.currentTarget : (d = e.querySelector) == null ? void 0 : d.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const l = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", l > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
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
      const o = ((g = (h = (d = foundry.applications) == null ? void 0 : d.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var g;
      i.preventDefault();
      const o = i.currentTarget, l = o.dataset.skill, d = ((g = o.textContent) == null ? void 0 : g.trim()) || l, { openRollSheetForSkill: h } = await import("./roll-sheet-4Zq1kD47.mjs");
      h(this.actor, l, d);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, T, O, _, C, z;
      i.preventDefault();
      const l = i.currentTarget.closest(".karakter-weapon-slot"), d = l == null ? void 0 : l.dataset.slot;
      if (!d) return;
      const g = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[d]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const v = ((O = (T = this.actor.items).get) == null ? void 0 : O.call(T, g)) ?? ((C = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : C.call(_, (K) => K.id === g));
      (z = v == null ? void 0 : v.sheet) == null || z.render(!0);
    });
    const m = (i, o) => {
      var h;
      const l = i.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (d) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (h = d.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, l = o.dataset.itemId;
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d) return;
      let h = Number(o.value);
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
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], w = k.find((C) => {
        var z;
        return (((z = h[C]) == null ? void 0 : z.itemId) ?? "").trim() === l;
      }) ?? null;
      if (o.checked) {
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
          [`system.weapons.${C}.damage`]: ((O = d == null ? void 0 : d.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((_ = d == null ? void 0 : d.system) == null ? void 0 : _.bonus) ?? ""
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
      const o = i.currentTarget;
      if (o.disabled) return;
      const l = o.closest(".karakter-microchip-slot-select-wrap"), d = l == null ? void 0 : l.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !d && l && l.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var C;
      i.preventDefault();
      const o = i.currentTarget, l = o.closest(".karakter-microchip-slot-select-wrap"), d = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display"), h = d == null ? void 0 : d.dataset.slot;
      if (!h) return;
      const g = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((C = o.textContent) == null ? void 0 : C.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (o.dataset.itemImg ?? "").trim(), w = l == null ? void 0 : l.querySelector(".karakter-microchip-slot-display-text");
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
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      if (!l || l.type !== "MikroChip") return;
      const d = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = d[w]) == null ? void 0 : T.itemId) ?? "").trim() === o;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const l = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${o}.active`]: l }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const l = o.dataset.slot;
      o.addEventListener("dragover", (d) => this._onMicrochipSlotDragOver(d, l)), o.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (d) => this._onMicrochipSlotDrop(d, l));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const l = o.dataset.slot;
      l && (o.addEventListener("dragover", (d) => this._onAbilitySingleDragOver(d, l)), o.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (d) => {
        var h;
        (h = d.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const l = o.dataset.area;
      l && (o.addEventListener("dragover", (d) => this._onAbilityAreaDragOver(d, l)), o.addEventListener("dragleave", (d) => {
        var h;
        return (h = d.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (d) => {
        var h;
        (h = d.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
      }));
    }), t.on("click", ".karakter-ability-slot-clear", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.slot;
      o && await this.actor.update({
        [`system.abilities.${o}.itemId`]: "",
        [`system.abilities.${o}.name`]: ""
      });
    }), t.on("click", ".karakter-ability-pill-remove", async (i) => {
      var v;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.area, l = i.currentTarget.dataset.itemId;
      if (!o || !l) return;
      const d = this.actor.system.abilities ?? {}, g = (Array.isArray((v = d[o]) == null ? void 0 : v.items) ? d[o].items.slice() : []).filter((k) => k !== l);
      await this.actor.update({ [`system.abilities.${o}.items`]: g });
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
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = (o.value ?? "").trim();
      await d.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      !d || d.type !== "Pancel" || (await d.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var O, _;
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((C) => v.includes(C)) : [], w = k.find((C) => {
        var z;
        return (((z = h[C]) == null ? void 0 : z.itemId) ?? "").trim() === l;
      }) ?? null;
      if (o.checked) {
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
          [`system.weapons.${C}.damage`]: ((O = d.system) == null ? void 0 : O.damage) ?? "",
          [`system.weapons.${C}.bonus`]: ((_ = d.system) == null ? void 0 : _.bonus) ?? ""
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
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const l = this.actor.items.get(o);
      !l || l.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const o = i.currentTarget, l = (o.dataset.itemId ?? "").trim();
      if (!l) return;
      const d = this.actor.items.get(l);
      if (!d || d.type !== "Targy") return;
      const h = (o.value ?? "").trim();
      await d.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${l}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const p = this, r = (i) => {
      var d, h, g, v;
      if (!i) return;
      const o = p._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const l = ((h = (d = o.system) == null ? void 0 : d.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = o.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      p.actor.update(o).then(() => {
        l && setTimeout(() => p.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, c = (i) => {
      var o, l, d;
      return i && (((l = (o = p.element) == null ? void 0 : o.contains) == null ? void 0 : l.call(o, i)) || p.id && ((d = i.closest) == null ? void 0 : d.call(i, `#${CSS.escape(p.id)}`)));
    };
    p._votvBlur = (i) => {
      var g;
      const o = i.target;
      if (!o || !o.form) return;
      const l = o.tagName;
      if (l !== "INPUT" && l !== "TEXTAREA" && l !== "SELECT") return;
      const d = o.form;
      if (!c(d)) return;
      const h = i.relatedTarget;
      h && (d.contains(h) || p.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(p.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: p.id, at: Date.now() }), r(d));
    }, document.body.addEventListener("blur", p._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var m, p, r;
    const e = {};
    for (const c of s.elements) {
      if (!c.name || c.disabled || c.type === "radio" && !c.checked || c.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      c.type === "checkbox" ? y = c.checked : c.type === "number" ? y = c.value === "" ? 0 : Number(c.value) : y = c.value ?? "", foundry.utils.setProperty(e, c.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((p = foundry.utils.expandObject(e).system) == null ? void 0 : p.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, u = ["head", "torso", "arms", "legs"];
    for (const c of u) {
      const y = ((r = n[c]) == null ? void 0 : r.value) ?? 0, a = f[c] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${c}`, Q._healthStatusFromRatio(a, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, u, m, p, r, c, y, a, i, o, l, d;
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
            (p = (m = ui.notifications) == null ? void 0 : m.warn) == null || p.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
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
          const T = k === "active" ? "active" : "passive", O = Array.isArray((r = w[T]) == null ? void 0 : r.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          O.includes(v) || O.push(v), await this.actor.update({ [`system.abilities.${T}.items`]: O });
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
            w = ((a = (await v.createEmbeddedDocuments("Item", [T]))[0]) == null ? void 0 : a.id) ?? w;
          }
          if (k) {
            const T = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, O = (T.slotOrder ?? "").trim(), _ = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = O ? O.split(/\s*,\s*/).filter((K) => _.includes(K)) : [], z = C.filter((K) => {
              var U;
              return (((U = T[K]) == null ? void 0 : U.itemId) ?? "").trim() === w;
            });
            if (z.length > 0) {
              const U = {
                "system.weapons.slotOrder": C.filter((j) => !z.includes(j)).join(",")
              };
              for (const j of z)
                U[`system.weapons.${j}.itemId`] = "", U[`system.weapons.${j}.name`] = "", U[`system.weapons.${j}.damage`] = "", U[`system.weapons.${j}.bonus`] = "";
              await v.update(U);
            }
          }
          return;
        }
        if (g && g.documentName === "Item" && g.type === "Pancel") {
          const v = this.actor;
          if (((o = g.parent) == null ? void 0 : o.id) !== v.id) {
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
    var f, u, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((u = s.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var m, p, r, c, y, a;
    s.preventDefault(), s.stopPropagation(), (m = s.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    var r, c;
    s.preventDefault(), (r = s.currentTarget) == null || r.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((c = s.dataTransfer) == null ? void 0 : c.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, a) => {
      const i = typeof y.sort == "number" ? y.sort : 0, o = typeof a.sort == "number" ? a.sort : 0;
      return i - o;
    }).map((y) => y.id), u = f.indexOf(t), m = f.indexOf(e);
    if (u === -1 || m === -1) return;
    f.splice(u, 1), f.splice(m, 0, t);
    const p = f.map((y, a) => ({
      _id: y,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", p);
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
    var p, r, c;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((c = e.system) == null ? void 0 : c.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var c, y, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((c = e.system) == null ? void 0 : c.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${m}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: r,
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
    var u, m, p;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((p = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : p.id) ?? f;
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
    var p, r, c, y;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((r = n.parent) == null ? void 0 : r.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((c = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : c.id) ?? f;
    }
    const u = this.actor.system.abilities ?? {}, m = Array.isArray((y = u[e]) == null ? void 0 : y.items) ? u[e].items.slice() : Array.isArray(u[e]) ? u[e].slice() : [];
    m.includes(f) || m.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, u, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((u = s.dataTransfer) == null ? void 0 : u.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var m, p, r, c, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((r = s.dataTransfer) == null ? void 0 : r.getData("application/json")) || "";
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
    const p = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, r = new Roll(p);
    await r.evaluate({ async: !0 });
    const { resultType: c, label: y } = Bt(r), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return r.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: c, critLabel: y } },
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
    const m = u && u.name || t.name || `Fegyver (${s})`, p = Number(t.bonus || 0) || 0, r = ((k = u == null ? void 0 : u.system) == null ? void 0 : k.type) || "kinetic", c = (((w = u == null ? void 0 : u.system) == null ? void 0 : w.skillKey) ?? "").trim(), y = c && n[c] !== void 0 ? c : r === "explosive" ? "grenadeUse" : "firearms", a = Number(n[y] || 0) || 0, i = p + a, l = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, d = new Roll(l);
    await d.evaluate({ async: !0 });
    const { resultType: h, label: g } = Bt(d), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, r, c, y, a, i, o, l, d, h;
    const t = this.actor;
    if (!t) return;
    let n = ((r = (p = t.items).get) == null ? void 0 : r.call(p, s)) ?? ((y = (c = t.items.contents) == null ? void 0 : c.find) == null ? void 0 : y.call(c, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const u = new Roll(f);
    await u.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
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
    form: foundry.utils.mergeObject(((Cs = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ls = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : Ls.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ns = (qs = M(Q, Q, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ns.contentClasses) ?? [],
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
let Ct = Q;
function Pi(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var As, Fs, Es, Ps;
const ge = class ge extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, u, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((u = s.querySelector) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, o = n.contains(i), l = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      o && l && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const u = await super.render(s, e), m = this.element, p = this.form ?? this.element, r = f.scrollState, c = f.focus, y = typeof (r == null ? void 0 : r.formScrollTop) == "number" || typeof (r == null ? void 0 : r.windowScrollTop) == "number", a = () => {
      var i, o;
      if (this._applyScrollState(m, r), (c == null ? void 0 : c.name) != null || (c == null ? void 0 : c.id) != null) {
        const l = ((i = p.querySelector) == null ? void 0 : i.call(p, c.id ? `#${CSS.escape(c.id)}` : null)) ?? (c.name ? (o = p.querySelector) == null ? void 0 : o.call(p, `[name="${CSS.escape(c.name)}"]`) : null);
        l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA") && (l.focus({ preventScroll: !0 }), typeof l.selectionStart == "number" && (l.selectionStart = c.selectionStart ?? 0, l.selectionEnd = c.selectionEnd ?? c.selectionStart ?? 0));
      }
      this._applyScrollState(m, r);
    };
    return (y || c) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), u;
  }
  async _prepareContext(s) {
    var Ue, Je, Be, at, ee, ye, ie, ot, xe, Ce, ct, He, Ze, Lt, qt, mt, Nt, pt, ft, yt, gt, ht, bt, vt, kt, wt, Ye, It, St, Xe;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Ue = this.actor) == null ? void 0 : Ue.system), e.showDeathSkull = !1, e.sizeForSelect = (((Be = (Je = e.system) == null ? void 0 : Je.identity) == null ? void 0 : Be.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((at = e.system) == null ? void 0 : at.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, u = (ye = (ee = t == null ? void 0 : t.statuses) == null ? void 0 : ee.has) != null && ye.call(ee, "lookaround") ? 1 : 0, m = (ot = (ie = t == null ? void 0 : t.statuses) == null ? void 0 : ie.has) != null && ot.call(ie, "halfcover") ? 3 : 0, p = (Ce = (xe = t == null ? void 0 : t.statuses) == null ? void 0 : xe.has) != null && Ce.call(xe, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + u + m + p;
    const r = ((ct = t == null ? void 0 : t.items) == null ? void 0 : ct.contents) ?? [], c = ((He = t == null ? void 0 : t.system) == null ? void 0 : He.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (c.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((S) => y.includes(S)) : [], o = r.filter((S) => S.type === "Fegyver"), l = o.map((S) => ({ id: S.id, name: S.name, img: S.img })), d = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((S) => !h.includes(S)), v = [...h, ...g], k = v.filter((S) => {
      var x;
      const P = (((x = c[S]) == null ? void 0 : x.itemId) ?? "").trim();
      return P && o.some((G) => G.id === P);
    });
    e.weaponSlots = k.map((S) => {
      const P = c[S] ?? {}, x = (P.itemId ?? "").trim(), G = l.find((we) => we.id === x), ke = o.find((we) => we.id === x), ne = (ke == null ? void 0 : ke.system) ?? {}, Le = ne.size === "thrown", Oe = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: S,
        itemId: x,
        displayName: (G == null ? void 0 : G.name) || P.name || d,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Le,
        rangeStr: Oe
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, T = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((S) => {
      var Tt;
      const P = S.id;
      let x = null, G = {};
      for (const lt of v)
        if ((((Tt = c[lt]) == null ? void 0 : Tt.itemId) ?? "").trim() === P) {
          x = lt, G = c[lt] ?? {};
          break;
        }
      const ke = !!x, ne = (S == null ? void 0 : S.system) ?? {}, Le = typeof ne.range == "string" ? (ne.range || "").trim() : "", Oe = ne.type ?? "", we = (w[Oe] ?? Oe) || "—", Re = ne.size ?? "", Qe = (T[Re] ?? Re) || "", et = [we, Qe].filter(Boolean).join(", ") || we || "—", At = Oe === "projectile" || Re === "thrown", Ft = ne.quantity != null ? String(ne.quantity).trim() : "1", Et = String(ne.bonus ?? G.bonus ?? "").trim() || "0", Pt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: x ?? "",
        itemId: P,
        actorId: t.id,
        name: (S == null ? void 0 : S.name) ?? d,
        img: (S == null ? void 0 : S.img) ?? "",
        bonus: Et,
        damage: Pt,
        rangeStr: Le || "—",
        typeAndSize: et,
        quantity: Ft,
        isProjectile: At,
        equipped: ke,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const O = r.filter((S) => S.type === "Pancel");
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
        level: Pi((P.level ?? "").toString().trim()),
        special: (P.special ?? P.other ?? "").toString().trim() || "—",
        equipped: x
      };
    });
    const _ = ((Lt = (Ze = t == null ? void 0 : t.system) == null ? void 0 : Ze.gear) == null ? void 0 : Lt.microchips) ?? {}, C = ["slot1", "slot2", "slot3"], z = r.filter((S) => S.type === "MikroChip");
    e.microchipsTable = z.map((S) => {
      var Oe, we, Re, Qe;
      const P = S.id;
      let x = null;
      for (const et of C)
        if ((((Oe = _[et]) == null ? void 0 : Oe.itemId) ?? "").trim() === P) {
          x = et;
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
        kp: Number((Qe = S == null ? void 0 : S.system) == null ? void 0 : Qe.replaceCost) >= 0 ? Number(S.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: x ?? "",
        equipped: !!x
      };
    });
    const K = r.filter((S) => S.type === "Targy");
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
    const U = r.filter((S) => S.type === "Egyeb");
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
    const j = (((qt = e.weaponsTable) == null ? void 0 : qt.length) ?? 0) > 0 || (((mt = e.armorTable) == null ? void 0 : mt.length) ?? 0) > 0 || (((Nt = e.microchipsTable) == null ? void 0 : Nt.length) ?? 0) > 0 || (((pt = e.itemsTable) == null ? void 0 : pt.length) ?? 0) > 0 || (((ft = e.egyebList) == null ? void 0 : ft.length) ?? 0) > 0;
    e.showEquipmentDropZone = !j;
    const V = ((yt = t == null ? void 0 : t.system) == null ? void 0 : yt.abilities) ?? {}, Z = r.filter((S) => S.type === "Kepesseg" || S.type === "ability").map((S) => {
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
      const P = V[S];
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
    const te = t == null ? void 0 : t.id, de = !!((ht = (gt = game.combat) == null ? void 0 : gt.combatants) != null && ht.some(
      (S) => {
        var P;
        return (((P = S.actor) == null ? void 0 : P.id) ?? S.actorId) === te;
      }
    ));
    e.showHarcSection = de;
    const De = ((bt = e.system) == null ? void 0 : bt.resources) ?? {}, D = (kt = (vt = e.system) == null ? void 0 : vt.combat) == null ? void 0 : kt.initiativeResult, E = typeof D == "number" ? D : -1, W = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], se = (Ye = (wt = e.system) == null ? void 0 : wt.combat) == null ? void 0 : Ye.initiativeRanges, le = Array.isArray(se) ? se.map((S) => ({ min: Number(S.min) ?? 0, max: Number(S.max) ?? 0, kp: Math.min(10, Math.max(0, Number(S.kp) ?? 0)) })) : [], re = (le.length > 0 ? le : W).slice().sort((S, P) => S.min - P.min), ve = 3;
    let ce = le.length > 0 ? le : [];
    ce.length < ve && (ce = [...ce, ...Array(ve - ce.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ce.map((S, P) => ({
      ...S,
      isFirst: P === 0,
      isLast: P === ce.length - 1
    }));
    let fe = 0;
    if (typeof E == "number" && E >= 0 && re.length > 0) {
      const S = re[0], P = re[re.length - 1];
      let x = null;
      E <= S.max ? x = S : E >= P.min ? x = P : x = re.find((G) => E >= G.min && E <= G.max), x && (fe = x.kp);
    }
    const je = re.length > 0 ? re[re.length - 1] : null, ze = Math.min(10, je ? je.kp : 6), Ke = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, ze)).map((S, P) => {
      const x = P + 1, G = !!Number(De[S]), ke = x <= fe;
      return { index: x, used: G, usable: ke };
    }), rt = Math.ceil(Ke.length / 2);
    return e.kpDotsRow1 = Ke.slice(0, rt), e.kpDotsRow2 = Ke.slice(rt), e.canEditInitiative = !!((It = game.user) != null && It.isGM), e.showInitiativeResult = typeof D == "number", e.initiativeResult = e.showInitiativeResult ? D : "", e.speedUnitForSelect = ((Xe = (St = e.system) == null ? void 0 : St.combat) == null ? void 0 : Xe.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var r, c, y;
    super._attachFrameListeners(s);
    const e = ((r = s == null ? void 0 : s.querySelector) == null ? void 0 : r.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var l, d, h;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((h = (d = (l = foundry.applications) == null ? void 0 : l.apps) == null ? void 0 : d.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var l, d, h;
      a.preventDefault();
      const i = (d = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (h = o == null ? void 0 : o.sheet) == null || h.render(!0);
    });
    const n = (a) => {
      var l, d;
      const i = (l = a == null ? void 0 : a.dataset) == null ? void 0 : l.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (d = o == null ? void 0 : o.sheet) == null || d.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var d, h, g, v;
      a.preventDefault();
      const i = (h = (d = a.currentTarget) == null ? void 0 : d.closest) == null ? void 0 : h.call(d, ".karakter-weapon-slot"), o = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const l = this.actor.items.get(o);
      (v = l == null ? void 0 : l.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var d;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = (((d = i == null ? void 0 : i.dataset) == null ? void 0 : d.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: l } = await import("./roll-sheet-4Zq1kD47.mjs");
      l(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var l, d, h, g, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let o = (((l = i == null ? void 0 : i.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !o && ((d = i == null ? void 0 : i.dataset) != null && d.slot) && (o = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-4Zq1kD47.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var d, h;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const l = !!Number((h = (d = this.actor.system) == null ? void 0 : d.resources) == null ? void 0 : h[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: l ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h, g;
      a.preventDefault();
      const i = a.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), l = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: d } = await import("./roll-sheet-4Zq1kD47.mjs");
      d(this.actor, o, l);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var o, l;
      a.preventDefault();
      const i = (l = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var l, d, h, g;
      a.preventDefault();
      const i = (((d = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId) ?? ((g = (h = a.currentTarget) == null ? void 0 : h.getAttribute) == null ? void 0 : g.call(h, "data-item-id")) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, k, w, T, O;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, o = (w = (k = a.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !o || !this.actor) return;
      const l = ((T = this.actor.system) == null ? void 0 : T.abilities) ?? {}, h = (Array.isArray((O = l[i]) == null ? void 0 : O.items) ? l[i].items.slice() : []).filter((_) => _ !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      var o, l;
      if (a.preventDefault(), !a.altKey) return;
      const i = (l = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      var g, v;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, o = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const l = this.actor, d = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      d && (h[`system.weapons.${d}.itemId`] = "", h[`system.weapons.${d}.name`] = "", h[`system.weapons.${d}.damage`] = "", h[`system.weapons.${d}.bonus`] = ""), Object.keys(h).length && await l.update(h), await l.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var o, l;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((l = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var h, g, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((g = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, d = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = o[w]) == null ? void 0 : T.itemId) ?? "").trim() === i;
      });
      d && await this.actor.update({
        [`system.gear.microchips.${d}.itemId`]: "",
        [`system.gear.microchips.${d}.name`]: "",
        [`system.gear.microchips.${d}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var l, d;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((d = (l = a.currentTarget) == null ? void 0 : l.dataset) == null ? void 0 : d.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (c = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : c.call(e, f)) == null || y.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", f, (a) => {
      var h, g, v;
      const i = a.currentTarget, o = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!o || !this.actor) return;
      const l = this.actor.items.get(o);
      if (!l) return;
      const d = l.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", d), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: d })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const u = this, m = (a) => {
      if (!a) return;
      const i = u._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && u.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, p = (a) => {
      var i, o, l;
      return a && (((o = (i = u.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || u.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(u.id)}`)));
    };
    u._votvNpcBlur = (a) => {
      var h;
      const i = a.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const l = i.form;
      if (!p(l)) return;
      const d = a.relatedTarget;
      d && (l.contains(d) || u.id && ((h = d.closest) != null && h.call(d, `#${CSS.escape(u.id)}`))) || m(l);
    }, document.body.addEventListener("blur", u._votvNpcBlur, !0), u._votvNpcItemHookRegistered || (u._votvNpcItemUpdateHook = (a, i, o) => {
      var l;
      u.actor && ((l = a == null ? void 0 : a.parent) == null ? void 0 : l.id) === u.actor.id && u.render(!0);
    }, u._votvNpcItemDeleteHook = (a, i, o) => {
      var l;
      u.actor && ((l = a == null ? void 0 : a.parent) == null ? void 0 : l.id) === u.actor.id && u.render(!0);
    }, Hooks.on("updateItem", u._votvNpcItemUpdateHook), Hooks.on("deleteItem", u._votvNpcItemDeleteHook), u._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const u = this._getFormDataForUpdate(e);
      Object.keys(u).length > 0 && await this.actor.update(u).catch((m) => console.warn("VoidNpcSheet save on preClose failed", m));
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
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((T = e.system) == null ? void 0 : T.skills) ?? {}, u = ((O = e.items) == null ? void 0 : O.filter((z) => z.type === "Fegyver")) ?? [];
    let m = null;
    n.itemId && (m = u.find((z) => z.id === n.itemId) ?? null);
    const p = m && m.name || n.name || "Fegyver", r = Number(n.bonus || 0) || 0, c = ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.type) || "kinetic", y = (((C = m == null ? void 0 : m.system) == null ? void 0 : C.skillKey) ?? "").trim(), a = y && f[y] !== void 0 ? y : c === "explosive" ? "grenadeUse" : "firearms", i = Number(f[a] || 0) || 0, o = r + i, d = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, h = new Roll(d);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = Bt(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var p, r, c, y, a, i, o, l, d, h;
    const t = this.actor;
    if (!t) return;
    const n = ((r = (p = t.items).get) == null ? void 0 : r.call(p, s)) ?? ((y = (c = t.items.contents) == null ? void 0 : c.find) == null ? void 0 : y.call(c, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((d = (l = game.i18n) == null ? void 0 : l.localize) == null ? void 0 : d.call(l, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const u = new Roll(f);
    await u.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
  async _onDropItem(s, e) {
    var c, y, a, i, o, l, d, h, g, v, k, w, T, O, _, C, z, K, U;
    if (!this.actor) return (c = super._onDropItem) == null ? void 0 : c.call(this, s, e);
    const n = ((j) => {
      var Z;
      if (!j) return null;
      const V = j.uuid ?? j.documentUuid ?? ((Z = j.data) == null ? void 0 : Z.uuid) ?? (typeof j == "string" ? j : null);
      if (V) return V;
      if (typeof j == "object") {
        for (const J of Object.values(j))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    if (f.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const u = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const j = (((l = f.system) == null ? void 0 : l.kind) ?? "passive").toString();
      if (j === "module") {
        (h = (d = ui.notifications) == null ? void 0 : d.warn) == null || h.call(d, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let V = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== u.id) {
        const oe = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        V = ((v = (await u.createEmbeddedDocuments("Item", [oe]))[0]) == null ? void 0 : v.id) ?? V;
      }
      const Z = ((k = u.system) == null ? void 0 : k.abilities) ?? {}, J = j === "active" ? "active" : "passive", Y = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      Y.includes(V) || Y.push(V), await u.update({ [`system.abilities.${J}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((T = f.parent) == null ? void 0 : T.id) === u.id) return;
    const m = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const r = (O = (await u.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : O.id;
    if (f.type === "Fegyver" && r) {
      const j = ((_ = u.system) == null ? void 0 : _.weapons) ?? {}, V = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (j.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((R) => V.includes(R)) : [];
      let Y = V.find((R) => {
        var te;
        return !(((te = j[R]) == null ? void 0 : te.itemId) ?? "").trim();
      });
      Y || (Y = V.find((R) => !J.includes(R)) ?? "slot1");
      const oe = J.includes(Y) ? J : [...J, Y].filter((R) => V.includes(R));
      await u.update({
        "system.weapons.slotOrder": oe.join(","),
        [`system.weapons.${Y}.itemId`]: r,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((C = f.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((z = f.system) == null ? void 0 : z.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && r) {
      const j = ((U = (K = u.system) == null ? void 0 : K.gear) == null ? void 0 : U.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var Y;
        return !(((Y = j[J]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Z && await u.update({
        [`system.gear.microchips.${Z}.itemId`]: r,
        [`system.gear.microchips.${Z}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var c, y, a, i, o, l;
    const e = (y = (c = this.actor) == null ? void 0 : c.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${m}
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
    var p, r, c, y, a, i;
    const e = (r = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : r.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((c = e.system) == null ? void 0 : c.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const o = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const l = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        l > 0 && (f = `<p><strong>KP:</strong> ${l}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
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
    form: foundry.utils.mergeObject(((As = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Fs = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ps = (Es = M(ge, ge, "DEFAULT_OPTIONS")) == null ? void 0 : Es.window) == null ? void 0 : Ps.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Ht = ge;
function $i(I) {
  return I ? I === "1" ? "1. szint" : I === "2" ? "2. szint" : I === "3" ? "3. szint" : I === "Alap" ? "Alap" : I : "Alap";
}
var $s, xs, Rs, Ms;
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
    var n, f, u, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((u = s.querySelector) == null ? void 0 : u.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const d = document.activeElement, h = u.contains(d), g = d && (d.tagName === "INPUT" && d.type !== "checkbox" && d.type !== "radio" || d.tagName === "TEXTAREA");
      h && g && (m.focus = {
        name: d.name || null,
        id: d.id || null,
        selectionStart: "selectionStart" in d ? d.selectionStart : 0,
        selectionEnd: "selectionEnd" in d ? d.selectionEnd : 0
      });
    }
    const p = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const r = this.element, c = this.form ?? this.element, y = m.scrollState, a = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var d, h;
      if (this._applyScrollState(r, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((d = c.querySelector) == null ? void 0 : d.call(c, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = c.querySelector) == null ? void 0 : h.call(c, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(r, y);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), p;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (r) => {
      var c;
      return ((c = e == null ? void 0 : e.querySelector) == null ? void 0 : c.call(e, r)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${r}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), u = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const m = Number(f == null ? void 0 : f.value) || 0, p = Number(u == null ? void 0 : u.value) || 0;
    n.textContent = String(m + p);
  }
  async _prepareContext(s) {
    var z, K, U, j, V, Z, J, Y, oe, R, te, de, De;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((z = e.system) == null ? void 0 : z.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, u = "— Nincs fegyver —", m = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = m.map((D) => {
      const E = (D == null ? void 0 : D.system) ?? {}, W = E.type ?? "", se = (n[W] ?? W) || "—", le = E.size ?? "", pe = (f[le] ?? le) || "", re = [se, pe].filter(Boolean).join(", ") || se || "—", ve = W === "projectile" || le === "thrown", ce = E.quantity != null ? String(E.quantity).trim() : "1", fe = (typeof E.range == "string" ? (E.range || "").trim() : "") || "—";
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
        typeAndSize: re,
        quantity: ce,
        quantityDisplay: ve ? ce : "—",
        isProjectile: ve,
        equipped: !1,
        special: (E.special ?? "").trim() || "—"
      };
    });
    const p = (((U = this.actor.items) == null ? void 0 : U.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = p.map((D) => {
      var se;
      const E = (D == null ? void 0 : D.system) ?? {}, W = !!((se = D.system) != null && se.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: $i((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: W
      };
    });
    const r = (((j = this.actor.items) == null ? void 0 : j.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = r.map((D) => {
      var ve, ce, fe;
      const E = ((ve = D == null ? void 0 : D.system) == null ? void 0 : ve.abilityType) ?? "", W = E === "active" ? "Aktív" : E === "passive" ? "Passzív" : E || "—", se = E === "active", le = Number((ce = D == null ? void 0 : D.system) == null ? void 0 : ce.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, pe = (((fe = D == null ? void 0 : D.system) == null ? void 0 : fe.description) ?? "").trim(), re = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
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
    const c = (((V = this.actor.items) == null ? void 0 : V.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = c.map((D) => {
      const E = (D == null ? void 0 : D.system) ?? {}, W = (E.description ?? "").trim(), se = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—", le = E.quantity != null ? String(E.quantity).trim() : "1";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        quantity: le,
        description: se
      };
    });
    const y = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", a = (((Z = this.actor.items) == null ? void 0 : Z.contents) ?? []).filter((D) => D.type === y).sort((D, E) => {
      const W = typeof D.sort == "number" ? D.sort : 0, se = typeof E.sort == "number" ? E.sort : 0;
      return W - se;
    }), i = [];
    let o = 0, l = 0, d = 0;
    const h = Number(((Y = (J = this.actor.system) == null ? void 0 : J.vehicle) == null ? void 0 : Y.storage) ?? 0) || 0;
    for (const D of a) {
      const E = (D == null ? void 0 : D.system) ?? {}, W = Number(E.level ?? 0) || 0, se = (E.storage ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (d += le);
      const pe = E.abilities ?? {}, re = Array.isArray(pe.items) ? pe.items : [], ce = (await Promise.all(
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
        var Ce, ct;
        const ie = (((Ce = ee.system) == null ? void 0 : Ce.kind) ?? "passive").toString(), ot = Number(((ct = ee.system) == null ? void 0 : ct.kp) ?? 0) || 0, xe = ie === "species";
        return {
          id: ee.id,
          ref: ye,
          name: ee.name,
          img: ee.img,
          kind: ie,
          kpDisplay: xe ? 0 : ot
        };
      });
      if (y === "Helyiseg") {
        const ee = (E.hit ?? "").toString().trim();
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
      const fe = E.health ?? {}, je = Number(fe.max ?? 0) || 0, ze = Number(fe.value ?? 0) || 0;
      let $e;
      if (je <= 0)
        $e = void 0;
      else if (ze <= 0)
        $e = 0;
      else {
        const ee = ze / je;
        ee > 2 / 3 ? $e = 3 : ee > 1 / 3 ? $e = 2 : $e = 1;
      }
      const Ke = (E.hit ?? "").toString().trim(), rt = (E.speed ?? "").toString().trim().replace(",", "."), Ue = Number(rt);
      Number.isFinite(Ue) && (o += Ue);
      const Je = (E.range ?? "").toString().trim().replace(",", "."), Be = Number(Je);
      Number.isFinite(Be) && (l += Be);
      const at = (E.damage ?? "").toString().trim();
      i.push({
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        level: W,
        hpMax: je,
        hpValue: ze,
        hpStatus: $e,
        hit: Ke,
        damage: at,
        abilities: ce,
        isHelyiseg: !1
      });
    }
    e.unitsTable = i, e.totalStorageUsed = d, e.vehicleStorageMax = h, e.unitItemTypeLabel = this.actor.type === "Bazis" ? "Helyiség" : "Járműegység", e.unitAbilitiesColspan = this.actor.type === "Bazis" ? 4 : 5;
    const g = a.length;
    let v = "Kicsi", k = 0, w = 0;
    g >= 11 ? (v = "Nagy", k = -4, w = -6) : g >= 6 ? (v = "Közepes", k = -2, w = -3) : (v = "Kicsi", k = 0, w = 0), e.sizeForSelect = v, e.unitCount = g, e.sizeSpeedPenalty = k, e.sizeDefensePenalty = w;
    const T = o + k, O = l;
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
    var m;
    super._attachFrameListeners(s);
    const e = ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.form ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (p) => {
      var y, a, i;
      p.preventDefault(), p.stopPropagation();
      const r = ((i = (a = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new r({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (p) => {
      var y, a, i;
      p.preventDefault();
      const r = (a = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      (i = c == null ? void 0 : c.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (p) => {
      var y, a;
      if (p.preventDefault(), !p.altKey) return;
      const r = (a = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      !r || !this.actor.items.get(r) || await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".jarmu-item-quantity-input", async (p) => {
      var a;
      const r = p.currentTarget, c = (a = r == null ? void 0 : r.dataset) == null ? void 0 : a.itemId;
      if (!c) return;
      const y = this.actor.items.get(c);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (r.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (p) => {
      var y, a;
      const r = (a = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!r) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "Pancel" || await c.update({ "system.equipped": p.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (p) => {
      var c, y, a, i;
      p.preventDefault();
      const r = (y = (c = p.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : y.itemId;
      r && ((i = (a = this.actor.items.get(r)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (p) => {
      var c, y;
      if (p.preventDefault(), !p.altKey) return;
      const r = (y = (c = p.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : y.itemId;
      r && await this.actor.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-item-chat", async (p) => {
      var y, a, i, o;
      p.preventDefault();
      const r = (((a = (y = p.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId) ?? ((o = (i = p.currentTarget) == null ? void 0 : i.getAttribute) == null ? void 0 : o.call(i, "data-item-id")) ?? "").trim();
      if (!r || !this.actor) return;
      const c = this.actor.items.get(r);
      !c || c.type !== "MikroChip" && c.type !== "Egyeb" || await this._postItemToChat(r);
    }), t.on("click", ".jarmu-unit-damage-button", async (p) => {
      var y;
      p.preventDefault(), p.stopPropagation();
      const r = p.currentTarget, c = (((y = r == null ? void 0 : r.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      c && await this._rollUnitDamage(c);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (p) => {
      var a, i;
      const r = p.currentTarget, c = (a = r == null ? void 0 : r.dataset) == null ? void 0 : a.itemId;
      if (!c) return;
      n._draggingUnitId = c;
      const y = (i = p.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", c), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(r, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (p) => {
      var a, i, o, l;
      const r = (i = (a = p.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : i.itemId, c = n._draggingUnitId;
      if (!c || !r || c === r) return;
      p.preventDefault();
      const y = (o = p.originalEvent) == null ? void 0 : o.dataTransfer;
      y && (y.dropEffect = "move"), (l = p.currentTarget) == null || l.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (p) => {
      var r;
      (r = p.currentTarget) == null || r.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (p) => {
      var g, v, k, w;
      p.preventDefault(), (g = p.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const r = (k = (v = p.currentTarget) == null ? void 0 : v.dataset) == null ? void 0 : k.itemId;
      let c = n._draggingUnitId;
      const y = (w = p.originalEvent) == null ? void 0 : w.dataTransfer;
      if (!c && y && (c = y.getData("text/plain")), n._draggingUnitId = null, !c || !r || c === r) return;
      const a = this.actor.type === "Bazis" ? "Helyiseg" : "Jarmuegyseg", o = this.actor.items.contents.filter((T) => T.type === a).sort((T, O) => {
        const _ = typeof T.sort == "number" ? T.sort : 0, C = typeof O.sort == "number" ? O.sort : 0;
        return _ - C;
      }).map((T) => T.id), l = o.indexOf(c), d = o.indexOf(r);
      if (l === -1 || d === -1) return;
      o.splice(l, 1), o.splice(d, 0, c);
      const h = o.map((T, O) => ({
        _id: T,
        sort: (O + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", h);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (p) => {
      var a, i, o, l, d, h, g, v, k, w;
      p.preventDefault();
      const r = (l = (o = (i = (a = p.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : i.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : o.dataset) == null ? void 0 : l.abilityRef, c = (v = (g = (h = (d = p.currentTarget) == null ? void 0 : d.closest) == null ? void 0 : h.call(d, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (r)
        try {
          y = await fromUuid(r);
        } catch {
          y = null;
        }
      !y && c && (y = ((k = game.items) == null ? void 0 : k.get(c)) ?? null), (w = y == null ? void 0 : y.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (p) => {
      var i, o, l, d;
      p.preventDefault();
      const r = (o = (i = p.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, ".jarmu-unit-ability-pill"), c = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.abilityRef, y = (d = r == null ? void 0 : r.dataset) == null ? void 0 : d.abilityId, a = c || y;
      a && await this._postUnitAbilityToChat(a);
    });
    const f = (p) => {
      if (!p) return;
      const r = this._getFormDataForUpdate(p);
      Object.keys(r).length !== 0 && this.actor.update(r).catch((c) => console.warn("VoidJarmuSheet save failed", c));
    }, u = (p) => {
      var r, c, y;
      return p && (((c = (r = this.element) == null ? void 0 : r.contains) == null ? void 0 : c.call(r, p)) || this.id && ((y = p.closest) == null ? void 0 : y.call(p, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (p) => {
      var i;
      const r = p.target;
      if (!r || !r.form) return;
      const c = r.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const y = r.form;
      if (!u(y)) return;
      const a = p.relatedTarget;
      a && (y.contains(a) || this.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (p) => {
      var l, d, h;
      const r = p.currentTarget, c = (l = r == null ? void 0 : r.dataset) == null ? void 0 : l.itemId;
      if (!c) return;
      const y = this.actor.items.get(c);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (r.value ?? "").trim(), i = a === "" ? 0 : Number(a), o = (d = r.closest) == null ? void 0 : d.call(r, ".jarmu-unit-row");
      if (o) {
        const g = (h = o.querySelector) == null ? void 0 : h.call(o, ".jarmu-unit-hp-max"), v = (g == null ? void 0 : g.textContent) ?? "", k = Number((v ?? "").trim()) || 0;
        let w;
        if (k <= 0)
          w = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          w = 0;
        else {
          const T = i / k;
          T > 2 / 3 ? w = 3 : T > 1 / 3 ? w = 2 : w = 1;
        }
        w === void 0 ? o.removeAttribute("data-hp-status") : o.dataset.hpStatus = String(w);
      }
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (p) => {
      var i;
      const r = p.currentTarget, c = (i = r == null ? void 0 : r.dataset) == null ? void 0 : i.itemId;
      if (!c) return;
      const y = this.actor.items.get(c);
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
    var p, r, c;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((c = e.system) == null ? void 0 : c.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var m, p, r, c, y, a, i, o, l;
    const e = this.actor;
    if (!e) return;
    const t = ((p = (m = e.items).get) == null ? void 0 : p.call(m, s)) ?? ((c = (r = e.items.contents) == null ? void 0 : r.find) == null ? void 0 : c.call(r, (d) => d.id === s));
    if (!t || t.type !== "Jarmuegyseg" && t.type !== "Helyiseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (l = (a = ui.notifications) == null ? void 0 : a.warn) == null || l.call(
        a,
        ((o = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : o.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
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
    var c, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((c = game.items) == null ? void 0 : c.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${m}
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
    if (((r = n.parent) == null ? void 0 : r.id) === f.id) return;
    const m = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [m]);
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
    form: foundry.utils.mergeObject((($s = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((xs = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : xs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ms = (Rs = M(he, he, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.window) == null ? void 0 : Ms.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Rt = he;
function xi(I) {
  if (I == null) return 0;
  const s = String(I).trim().replace(/^\+/, "");
  if (s === "") return 0;
  const e = Number(s);
  return Number.isFinite(e) ? e : 0;
}
function Os(I) {
  var e;
  return (((e = I == null ? void 0 : I.items) == null ? void 0 : e.contents) ?? []).filter((t) => t.type === "Helyiseg").reduce((t, n) => {
    var f;
    return t + xi((f = n.system) == null ? void 0 : f.veszely);
  }, 0);
}
var js;
const nt = class nt extends Rt {
  _attachFrameListeners(s) {
    var m;
    super._attachFrameListeners(s);
    const e = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element;
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
      var _, C, z, K, U, j, V;
      const r = ((_ = e.querySelector) == null ? void 0 : _.call(e, "form")) ?? e, c = (C = r.querySelector) == null ? void 0 : C.call(r, 'select[name="system.identity.assignment"]'), y = (z = r.querySelector) == null ? void 0 : z.call(r, 'select[name="system.identity.subAssignment"]'), a = (K = r.querySelector) == null ? void 0 : K.call(r, "input.bazis-threat-total"), i = (U = r.querySelector) == null ? void 0 : U.call(r, 'input[name="system.combat.threatBonus"]');
      if (!c || !a || !i) return;
      const o = c.value ?? "", l = (y == null ? void 0 : y.value) ?? "", d = t[o] ?? 0, h = n[l] ?? 0, g = (((V = (j = this.actor) == null ? void 0 : j.items) == null ? void 0 : V.contents) ?? []).filter((Z) => Z.type === "Helyiseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", k = f[v] ?? 0, w = Number(i.value ?? 0) || 0, T = Os(this.actor), O = d + h + k + w + T;
      a.value = O;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', u);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, f = n.identity ?? {}, u = n.combat ?? {}, m = f.assignment ?? "", p = f.subAssignment ?? "", r = {
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
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, a = r[m] ?? 0, i = c[p] ?? 0, o = e.sizeForSelect ?? "Kicsi", l = y[o] ?? 0, d = Number(u.threatBonus ?? 0) || 0, h = Os(this.actor), g = a + i + l + d + h;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...u, threat: g, threatBonus: d } },
        { inplace: !1 }
      ), e.bazisThreatBase = a;
    }
    return e;
  }
};
X(nt, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  M(nt, nt, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((js = M(nt, nt, "DEFAULT_OPTIONS")) == null ? void 0 : js.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Gt = nt;
var zs, Ks, Us, Bs;
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
    const f = (((u = t.items) == null ? void 0 : u.contents) ?? []).filter((m) => m.type === "Egyeb");
    return e.egyebList = f.map((m) => {
      const r = ((m.system ?? {}).description ?? "").trim(), c = r ? r.length > 80 ? `${r.slice(0, 77)}…` : r : "";
      return {
        itemId: m.id,
        actorId: t.id,
        name: m.name ?? "—",
        img: m.img ?? "",
        description: c
      };
    }), e;
  }
  _attachFrameListeners(s) {
    var n;
    super._attachFrameListeners(s);
    const e = ((n = s == null ? void 0 : s.querySelector) == null ? void 0 : n.call(s, "form.votv.vallalkozas-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    this.isEditable && (t.on("click", ".karakter-item-chat", async (f) => {
      var p, r, c, y;
      f.preventDefault();
      const u = (((r = (p = f.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : r.itemId) ?? ((y = (c = f.currentTarget) == null ? void 0 : c.getAttribute) == null ? void 0 : y.call(c, "data-item-id")) ?? "").trim();
      if (!u || !this.actor) return;
      const m = this.actor.items.get(u);
      m && (m.type === "MikroChip" || m.type === "Egyeb") && await this._postItemToChat(u);
    }), t.on("click", ".vallalkozas-egyeb-delete", async (f) => {
      var m, p;
      if (f.preventDefault(), !f.altKey || !this.actor) return;
      const u = (((p = (m = f.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : p.itemId) ?? "").trim();
      u && await this.actor.deleteEmbeddedDocuments("Item", [u]);
    }));
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe. */
  async _postItemToChat(s) {
    var p, r, c;
    if (!this.actor) return;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((r = e.system) == null ? void 0 : r.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((c = e.system) == null ? void 0 : c.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const u = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
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
    form: foundry.utils.mergeObject(((zs = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : zs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ks = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Bs = (Us = M(be, be, "DEFAULT_OPTIONS")) == null ? void 0 : Us.window) == null ? void 0 : Bs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let _s = be;
const Ri = [
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
var Hs;
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
      var r, c, y, a, i, o, l;
      if (!e.isEditable || !((c = (r = u.target) == null ? void 0 : r.closest) != null && c.call(r, ".profile")) && ((a = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const m = ((l = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new m({
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
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((p) => console.warn("VoidWeaponSheet save failed", p));
    }, f = (u) => {
      var m, p, r;
      return u && (((p = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : p.call(m, u)) || e.id && ((r = u.closest) == null ? void 0 : r.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var p, r, c;
      const m = ((p = u.target) == null ? void 0 : p.form) ?? ((c = (r = u.target) == null ? void 0 : r.closest) == null ? void 0 : c.call(r, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = Ri, e;
  }
};
X(qe, "PARTS", foundry.utils.mergeObject(M(qe, qe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(qe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(qe, qe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Hs = M(qe, qe, "DEFAULT_OPTIONS")) == null ? void 0 : Hs.form) ?? {}, { submitOnChange: !1 })
}));
let Wt = qe;
var Gs;
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
      var r, c, y, a, i, o, l;
      if (!e.isEditable || !((c = (r = u.target) == null ? void 0 : r.closest) != null && c.call(r, ".profile")) && ((a = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const m = ((l = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new m({
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
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((p) => console.warn("VoidShieldSheet save failed", p));
    }, f = (u) => {
      var m, p, r;
      return u && (((p = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : p.call(m, u)) || e.id && ((r = u.closest) == null ? void 0 : r.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var p, r, c;
      const m = ((p = u.target) == null ? void 0 : p.form) ?? ((c = (r = u.target) == null ? void 0 : r.closest) == null ? void 0 : c.call(r, "form"));
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
X(Ne, "PARTS", foundry.utils.mergeObject(M(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Gs = M(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : Gs.form) ?? {}, { submitOnChange: !1 })
}));
let Vt = Ne;
var Ws;
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
      var r, c, y, a, i, o, l;
      if (!e.isEditable || !((c = (r = u.target) == null ? void 0 : r.closest) != null && c.call(r, ".profile")) && ((a = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const m = ((l = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new m({
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
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((p) => console.warn("VoidMicrochipSheet save failed", p));
    }, f = (u) => {
      var m, p, r;
      return u && (((p = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : p.call(m, u)) || e.id && ((r = u.closest) == null ? void 0 : r.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var p, r, c;
      const m = ((p = u.target) == null ? void 0 : p.form) ?? ((c = (r = u.target) == null ? void 0 : r.closest) == null ? void 0 : c.call(r, "form"));
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
X(Ae, "PARTS", foundry.utils.mergeObject(M(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Ws = M(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ws.form) ?? {}, { submitOnChange: !1 })
}));
let Jt = Ae;
var Vs;
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
      var r, c, y, a, i, o, l;
      if (!e.isEditable || !((c = (r = u.target) == null ? void 0 : r.closest) != null && c.call(r, ".profile")) && ((a = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const m = ((l = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new m({
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
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((p) => console.warn("VoidAbilitySheet save failed", p));
    }, f = (u) => {
      var m, p, r;
      return u && (((p = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : p.call(m, u)) || e.id && ((r = u.closest) == null ? void 0 : r.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var p, r, c;
      const m = ((p = u.target) == null ? void 0 : p.form) ?? ((c = (r = u.target) == null ? void 0 : r.closest) == null ? void 0 : c.call(r, "form"));
      f(m) && n(m);
    }, e._votvInput = (u) => {
      var r;
      const m = u.target;
      if ((m == null ? void 0 : m.name) === "name") return;
      const p = (m == null ? void 0 : m.form) ?? ((r = m == null ? void 0 : m.closest) == null ? void 0 : r.call(m, "form"));
      f(p) && (clearTimeout(e._votvInputDebounce), e._votvInputDebounce = setTimeout(() => n(p), 300));
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
X(Fe, "PARTS", foundry.utils.mergeObject(M(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Vs = M(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Vs.form) ?? {}, { submitOnChange: !0 })
}));
let Zt = Fe;
var Js;
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
      var r, c, y, a, i, o, l;
      if (!e.isEditable || !((c = (r = u.target) == null ? void 0 : r.closest) != null && c.call(r, ".profile")) && ((a = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const m = ((l = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new m({
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
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((p) => console.warn("VoidTargySheet save failed", p));
    }, f = (u) => {
      var m, p, r;
      return u && (((p = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : p.call(m, u)) || e.id && ((r = u.closest) == null ? void 0 : r.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var p, r, c;
      const m = ((p = u.target) == null ? void 0 : p.form) ?? ((c = (r = u.target) == null ? void 0 : r.closest) == null ? void 0 : c.call(r, "form"));
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
X(Ee, "PARTS", foundry.utils.mergeObject(M(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Js = M(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : Js.form) ?? {}, { submitOnChange: !1 })
}));
let Yt = Ee;
var Zs;
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
      var r, c, y, a, i, o, l;
      if (!e.isEditable || !((c = (r = u.target) == null ? void 0 : r.closest) != null && c.call(r, ".profile")) && ((a = (y = u.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      u.preventDefault(), u.stopPropagation();
      const m = ((l = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : l.implementation) ?? globalThis.FilePicker;
      new m({
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
      const m = e._getFormDataForUpdate(u);
      Object.keys(m).length !== 0 && e.document.update(m).catch((p) => console.warn("VoidEgyebSheet save failed", p));
    }, f = (u) => {
      var m, p, r;
      return u && (((p = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : p.call(m, u)) || e.id && ((r = u.closest) == null ? void 0 : r.call(u, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (u) => {
      var p, r, c;
      const m = ((p = u.target) == null ? void 0 : p.form) ?? ((c = (r = u.target) == null ? void 0 : r.closest) == null ? void 0 : c.call(r, "form"));
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
X(Pe, "PARTS", foundry.utils.mergeObject(M(Pe, Pe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(Pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(M(Pe, Pe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Zs = M(Pe, Pe, "DEFAULT_OPTIONS")) == null ? void 0 : Zs.form) ?? {}, { submitOnChange: !1 })
}));
let Xt = Pe;
var Ys, Xs;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var p, r, c, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (r = this.document) == null ? void 0 : r.name,
      "id=",
      (c = this.document) == null ? void 0 : c.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, o, l;
      try {
        const d = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && d.includes(this.element) || this.id && ((o = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", a);
        let g = null;
        try {
          g = TextEditor.getDragEventData(a);
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
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var d, h, g, v, k, w;
      a.preventDefault();
      const i = (h = (d = a.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef, o = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let l = null;
      if (i)
        try {
          l = await fromUuid(i);
        } catch {
          l = null;
        }
      !l && o && (l = ((k = game.items) == null ? void 0 : k.get(o)) ?? null), (w = l == null ? void 0 : l.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var d, h, g, v;
      a.preventDefault();
      const i = (h = (d = a.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef, o = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, l = i || o;
      l && await this._postAbilityToChat(l);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const o = this.document.system ?? {}, l = Array.isArray((k = o.abilities) == null ? void 0 : k.items) ? o.abilities.items.slice() : [], d = l.indexOf(i), h = d >= 0 ? [...l.slice(0, d), ...l.slice(d + 1)] : l;
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
    const u = (a) => {
      if (!a) return;
      const i = e._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && e.document.update(i).catch((o) => console.warn("VoidJarmuEgysegSheet save failed", o));
    }, m = (a) => {
      var i, o, l;
      return a && (((o = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || e.id && ((l = a.closest) == null ? void 0 : l.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var o, l, d;
      const i = ((o = a.target) == null ? void 0 : o.form) ?? ((d = (l = a.target) == null ? void 0 : l.closest) == null ? void 0 : d.call(l, "form"));
      m(i) && u(i);
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
      f.map(async (p) => {
        var r;
        if (!p) return null;
        try {
          const c = await fromUuid(p);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        } catch {
          const c = (r = game.items) == null ? void 0 : r.get(p);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        }
        return null;
      })
    )).map((p, r) => ({ doc: p, ref: f[r] })).filter((p) => !!p.doc && !!p.ref).map(({ doc: p, ref: r }) => {
      var i, o;
      const c = (((i = p.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((o = p.system) == null ? void 0 : o.kp) ?? 0) || 0, a = c === "species";
      return {
        id: p.id,
        ref: r,
        name: p.name,
        img: p.img,
        kind: c,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", m), e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var c, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((c = game.items) == null ? void 0 : c.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${m}
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
    var t, n, f;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const u = e.uuid ?? e.id, m = this.document.system ?? {}, p = Array.isArray((n = m.abilities) == null ? void 0 : n.items) ? m.abilities.items.slice() : [];
      return p.push(u), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", p), await this.document.update({ "system.abilities.items": p }), e;
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
    form: foundry.utils.mergeObject(((Ys = M(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Ys.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Xs = M(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Xs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Qt = Se;
var Qs, ei;
const Te = class Te extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var p, r;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, "form.votv-helyiseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    n.on("click", ".karakter-ability-open", async (c) => {
      var o, l, d, h, g, v;
      c.preventDefault();
      const y = (l = (o = c.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemRef, a = (h = (d = c.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemId;
      let i = null;
      if (y)
        try {
          i = await fromUuid(y);
        } catch {
          i = null;
        }
      !i && a && (i = ((g = game.items) == null ? void 0 : g.get(a)) ?? null), (v = i == null ? void 0 : i.sheet) == null || v.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (c) => {
      var o, l, d, h;
      c.preventDefault();
      const y = (l = (o = c.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : l.itemRef, a = (h = (d = c.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemId, i = y || a;
      i && await this._postAbilityToChat(i);
    }), n.on("click", ".karakter-ability-pill-remove", async (c) => {
      var d, h, g;
      if (c.preventDefault(), !c.altKey) return;
      const y = (h = (d = c.currentTarget) == null ? void 0 : d.dataset) == null ? void 0 : h.itemRef;
      if (!y) return;
      const a = this.document.system ?? {}, i = Array.isArray((g = a.abilities) == null ? void 0 : g.items) ? a.abilities.items.slice() : [], o = i.indexOf(y), l = o >= 0 ? [...i.slice(0, o), ...i.slice(o + 1)] : i;
      await this.document.update({ "system.abilities.items": l });
    });
    const f = (r = t == null ? void 0 : t.querySelector) == null ? void 0 : r.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (c) => {
      c.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), this._votvGlobalDrop || (this._votvGlobalDrop = async (c) => {
      var y, a, i;
      try {
        const o = typeof c.composedPath == "function" ? c.composedPath() : [];
        if (!(this.element && o.includes(this.element) || this.id && ((a = (y = c.target) == null ? void 0 : y.closest) == null ? void 0 : a.call(y, `#${CSS.escape(this.id)}`)))) return;
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
      } catch (o) {
        console.error("VoidHelyisegSheet global drop error", o);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), !this.isEditable) return;
    const u = (c) => {
      if (!c) return;
      const y = e._getFormDataForUpdate(c);
      Object.keys(y).length !== 0 && e.document.update(y).catch((a) => console.warn("VoidHelyisegSheet save failed", a));
    }, m = (c) => {
      var y, a, i;
      return c && (((a = (y = e.element) == null ? void 0 : y.contains) == null ? void 0 : a.call(y, c)) || e.id && ((i = c.closest) == null ? void 0 : i.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var a, i, o;
      const y = ((a = c.target) == null ? void 0 : a.form) ?? ((o = (i = c.target) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, "form"));
      m(y) && u(y);
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, f = Array.isArray(n.items) ? n.items : [], m = (await Promise.all(
      f.map(async (p) => {
        var r;
        if (!p) return null;
        try {
          const c = await fromUuid(p);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        } catch {
          const c = (r = game.items) == null ? void 0 : r.get(p);
          if (c && (c.type === "Kepesseg" || c.type === "ability")) return c;
        }
        return null;
      })
    )).map((p, r) => ({ doc: p, ref: f[r] })).filter((p) => !!p.doc && !!p.ref).map(({ doc: p, ref: r }) => {
      var i, o;
      const c = (((i = p.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((o = p.system) == null ? void 0 : o.kp) ?? 0) || 0, a = c === "species";
      return {
        id: p.id,
        ref: r,
        name: p.name,
        img: p.img,
        kind: c,
        kpDisplay: a ? 0 : y
      };
    });
    return e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var c, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((c = game.items) == null ? void 0 : c.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), u = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", p = f ? `<p>${f}</p>` : "", r = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${u}</p>
      ${m}
      ${p}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: r,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropDocument(s, e) {
    var t, n, f;
    if (!e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const u = e.uuid ?? e.id, m = this.document.system ?? {}, p = Array.isArray((n = m.abilities) == null ? void 0 : n.items) ? m.abilities.items.slice() : [];
      return p.push(u), await this.document.update({ "system.abilities.items": p }), e;
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
    form: foundry.utils.mergeObject(((Qs = M(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : Qs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((ei = M(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : ei.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let es = Te;
const ti = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function si(I) {
  return I === "Apró" ? 0.5 : I === "Nagy" ? 2 : I === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var t, n, f, u, m, p;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (t = CONFIG.Actor).dataModels ?? (t.dataModels = {}), CONFIG.Actor.dataModels.Karakter = pi, CONFIG.Actor.dataModels.Npc = Mt, CONFIG.Actor.dataModels.Jarmu = gi, CONFIG.Actor.dataModels.Bazis = vi, (n = CONFIG.Item).dataModels ?? (n.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ks, CONFIG.Item.dataModels.weapon = ks, CONFIG.Item.dataModels.Pancel = Ii, CONFIG.Item.dataModels.MikroChip = Si, CONFIG.Item.dataModels.Kepesseg = Ss, CONFIG.Item.dataModels.ability = Ss, CONFIG.Item.dataModels.Targy = Di, CONFIG.Item.dataModels.Egyeb = _i, CONFIG.Item.dataModels.Jarmuegyseg = Li, CONFIG.Item.dataModels.Helyiseg = Fi, (f = CONFIG.Actor).trackableAttributes ?? (f.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (u = CONFIG.Actor).typeLabels ?? (u.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", (m = CONFIG.Combat).initiative ?? (m.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (p = CONFIG.Item).typeLabels ?? (p.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység", CONFIG.Item.typeLabels.Helyiseg = "Helyiség";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ct, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Rt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Wt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Vt, {
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
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", es, {
    types: ["Helyiseg"],
    makeDefault: !0,
    label: "VOTV.HelyisegSheet"
  });
  const s = "systems/vacuum-of-the-void/assets/blank.svg";
  Hooks.on("preCreateActor", (r, c, y) => {
    (c == null ? void 0 : c.type) === "Bazis" && (c.img = s);
  }), Hooks.on("preUpdateActor", (r, c, y) => {
    (r == null ? void 0 : r.type) === "Bazis" && Object.prototype.hasOwnProperty.call(c ?? {}, "img") && (c.img = s);
  }), Hooks.on("ready", () => {
    var y;
    const r = s, c = (((y = game.actors) == null ? void 0 : y.contents) ?? []).filter(
      (a) => a.type === "Bazis" && (a.img ?? "").toString().trim() !== r
    );
    c.length && c.forEach((a) => a.update({ img: r }).catch(() => {
    }));
  }), Hooks.on("updateActor", (r, c, y, a) => {
    if ((r == null ? void 0 : r.type) !== "Karakter" || !(r != null && r.id)) return;
    const i = r.id;
    setTimeout(() => {
      var h, g, v, k;
      const o = (h = game.actors) == null ? void 0 : h.get(i);
      if (!o || o.type !== "Karakter") return;
      const l = Ct.getTotalSpeedRaw(o), d = (g = o.effects) == null ? void 0 : g.find((w) => w.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (l <= 0 && !d) {
        const w = ((k = (v = CONFIG.statusEffects) == null ? void 0 : v.find((T) => T.id === "immobilized")) == null ? void 0 : k.img) ?? "";
        o.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: w,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: o.uuid
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
  Hooks.on("updateActor", (r, c, y, a) => {
    var T, O, _, C, z, K, U, j, V, Z, J, Y, oe;
    const i = r == null ? void 0 : r.id;
    if (!i) return;
    if ((r.type === "Karakter" || r.type === "Npc") && ((T = c == null ? void 0 : c.system) != null && T.combat) && "initiativeResult" in c.system.combat) {
      const R = Number((_ = (O = r.system) == null ? void 0 : O.combat) == null ? void 0 : _.initiativeResult), te = Number.isFinite(R) ? R : 0, de = game.combat;
      if (de) {
        const De = ((C = de.combatants) == null ? void 0 : C.contents) ?? Array.from(de.combatants ?? []);
        for (const D of De)
          if (((z = D.actor) == null ? void 0 : z.id) === i || D.actorId === i) {
            de.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: te }]).catch(() => {
            });
            break;
          }
      }
    }
    if (r.type === "Npc" && ((K = c == null ? void 0 : c.system) != null && K.identity) && "size" in c.system.identity) {
      const R = si((j = (U = r.system) == null ? void 0 : U.identity) == null ? void 0 : j.size);
      r.update({
        "prototypeToken.width": R,
        "prototypeToken.height": R
      }).catch((te) => console.warn("Vacuum of the Void | NPC token size update failed for", r.name, te));
    }
    const o = document.activeElement, l = o && (o.tagName === "INPUT" && o.type !== "checkbox" && o.type !== "radio" || o.tagName === "TEXTAREA" || o.isContentEditable), d = [], h = (V = game.actors) == null ? void 0 : V.get(i);
    h != null && h.apps && d.push(...Array.from(h.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const R of g) {
      if (((Z = R.document) == null ? void 0 : Z.id) !== i || ((J = R.document) == null ? void 0 : J.documentName) !== "Actor") continue;
      const te = (Y = R.constructor) == null ? void 0 : Y.name;
      te !== "VoidKarakterSheet" && te !== "VoidJarmuSheet" && te !== "VoidBazisSheet" || d.includes(R) || d.push(R);
    }
    if (l && d.some((R) => {
      const te = (R == null ? void 0 : R.form) ?? (R == null ? void 0 : R.element);
      return te && te.contains(o);
    })) return;
    const k = (oe = game.votv) == null ? void 0 : oe._lastKarakterSheetBlurSave, w = k && Date.now() - k.at < e ? k.appId : null;
    setTimeout(() => {
      for (const R of d)
        !(R != null && R.rendered) || typeof R.render != "function" || R.id !== w && R.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (r, c, y, a) => {
    var d, h, g;
    const i = r == null ? void 0 : r.parent;
    if (!i || i.documentName !== "Actor" || i.type !== "Karakter" || r.type !== "Fegyver") return;
    const o = ((d = i.system) == null ? void 0 : d.weapons) ?? {}, l = {};
    for (const [v, k] of Object.entries(o)) {
      if (!v.startsWith("slot")) continue;
      const w = ((k == null ? void 0 : k.itemId) ?? "").trim();
      !w || w !== r.id || (l[`system.weapons.${v}.name`] = r.name ?? "", l[`system.weapons.${v}.damage`] = ((h = r.system) == null ? void 0 : h.damage) ?? "", l[`system.weapons.${v}.bonus`] = ((g = r.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(l).length && i.update(l);
  });
});
Hooks.on("ready", () => {
  var I, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, k, w, T, O, _, C, z, K, U, j, V, Z, J, Y, oe, R, te, de, De, D;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), u = (w = (k = f == null ? void 0 : f.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!u) return;
    const m = u.actorId ?? ((T = f == null ? void 0 : f.speaker) == null ? void 0 : T.actor) ?? "";
    if (!m) return;
    e.preventDefault(), e.stopPropagation();
    let p = ((O = game.actors) == null ? void 0 : O.get(u.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(m));
    if (p || (p = ((z = (C = game.scenes) == null ? void 0 : C.contents) == null ? void 0 : z.flatMap((W) => {
      var se;
      return ((se = W.tokens) == null ? void 0 : se.contents) ?? [];
    }).map((W) => W.actor).find((W) => W && (W.id === m || W.id === u.actorId))) ?? null), !p) return;
    const r = u.itemId ? ((U = (K = p.items) == null ? void 0 : K.get) == null ? void 0 : U.call(K, u.itemId)) ?? ((Z = (V = (j = p.items) == null ? void 0 : j.contents) == null ? void 0 : V.find) == null ? void 0 : Z.call(V, (E) => E.id === u.itemId)) : null;
    let c = (u.damageFormula ?? "").trim();
    if (c || (c = (((J = r == null ? void 0 : r.system) == null ? void 0 : J.damage) ?? "").trim()), !c && u.slotKey && (c = (((((Y = p.system) == null ? void 0 : Y.weapons) ?? {})[u.slotKey] ?? {}).damage ?? "").trim()), !c) {
      (de = (oe = ui.notifications) == null ? void 0 : oe.warn) == null || de.call(oe, ((te = (R = game.i18n) == null ? void 0 : R.localize) == null ? void 0 : te.call(R, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(c);
    await y.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = u.targetName || "", o = u.hitLocationName || "", l = ((r == null ? void 0 : r.name) ?? (u.slotKey ? ((D = (((De = p.system) == null ? void 0 : De.weapons) ?? {})[u.slotKey]) == null ? void 0 : D.name) ?? "" : "")) || "Fegyver";
    let d = i ? `${l} – sebzés – ${i}` : `${l} – sebzés`;
    o && (d += ` (${o})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: p }),
      flavor: d,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var u, m, p, r, c, y;
      if (!((m = (u = e.target) == null ? void 0 : u.closest) != null && m.call(u, "#actors"))) return;
      const t = (r = (p = e.target) == null ? void 0 : p.closest) == null ? void 0 : r.call(p, "[data-document-id]"), n = (c = t == null ? void 0 : t.getAttribute) == null ? void 0 : c.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, u;
    const e = ((t = game.actors) == null ? void 0 : t.filter((m) => m.type === "Karakter")) ?? [];
    for (const m of e) {
      const p = Ct.getTotalSpeedRaw(m), r = (n = m.effects) == null ? void 0 : n.find((c) => c.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (p <= 0 && !r) {
        const c = ((u = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : u.img) ?? "";
        await m.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: c,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: m.uuid
        }]).catch(() => {
        });
      } else p > 0 && r && await r.delete().catch(() => {
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
        background: { src: ti },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, u = await n.create(f);
      u && console.log("Vacuum of the Void | Default scene created:", u.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var u, m, p, r, c, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((u = game.actors) == null ? void 0 : u.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, o = ((m = i == null ? void 0 : i.bar1) == null ? void 0 : m.attribute) ?? "", l = ((p = i == null ? void 0 : i.bar2) == null ? void 0 : p.attribute) ?? "";
        (o || l) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((r = a.tokens) == null ? void 0 : r.filter((o) => {
        var l;
        return ((l = o.actor) == null ? void 0 : l.type) === "Karakter";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(e);
        } catch (l) {
          console.warn("Vacuum of the Void | Token update failed for", o.name, l);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, f = ((c = game.actors) == null ? void 0 : c.filter((a) => a.type === "Npc")) ?? [];
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
      const i = ((y = a.tokens) == null ? void 0 : y.filter((o) => {
        var l;
        return ((l = o.actor) == null ? void 0 : l.type) === "Npc";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(n);
        } catch (l) {
          console.warn("Vacuum of the Void | NPC token update failed for", o.name, l);
        }
    }
  })();
});
Hooks.on("preCreateToken", (I, s, e) => {
  var u, m, p, r, c, y, a, i;
  const t = (u = game.votv) == null ? void 0 : u._dragSourceActorId, n = t ?? I.actorId ?? ((m = I._source) == null ? void 0 : m.actorId) ?? (s == null ? void 0 : s.actorId) ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (p = game.actors) == null ? void 0 : p.get(n) : I.actor ?? null;
  if (f) {
    if (f.type === "Bazis")
      return (y = ui == null ? void 0 : ui.notifications) == null || y.warn(((c = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : c.call(r, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre."), !1;
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
      const o = si((i = (a = f.system) == null ? void 0 : a.identity) == null ? void 0 : i.size);
      I.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: o,
        height: o
      });
    }
  }
});
Hooks.on("preCreateCombatant", (I, s, e) => {
  var f, u, m;
  const t = I.actorId ? (f = game.actors) == null ? void 0 : f.get(I.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((m = (u = game.i18n) == null ? void 0 : u.localize) == null ? void 0 : m.call(u, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = I.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && I.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (I, s, e) => {
  const t = I.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const Mi = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function ii(I) {
  const s = I == null ? void 0 : I.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Mi).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (I, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || ii(I);
});
function ni() {
  var s, e, t;
  const I = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], u = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const m of u)
      !m || I.has(m.id) || (I.add(m.id), typeof m.render == "function" && m.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || I.has(n.id) || (I.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(ni, 100);
});
Hooks.on("updateCombat", (I, s, e) => {
  (s == null ? void 0 : s.round) != null && ii(I), setTimeout(ni, 0);
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
    "background.src": ti,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (I, s, e) => {
  var y, a, i, o;
  const t = ((y = I.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, u = t.weaponAttack, m = t.weapon, p = t.vsDefense, r = t.vsDefenseInfo;
  if (!n && !f && !u && !p) return;
  const c = (a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, ".dice-roll");
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
    if (u && m && (m.actorId || (i = I.speaker) != null && i.actor)) {
      const l = c.querySelector(".dice-total"), d = (l == null ? void 0 : l.parentElement) ?? c;
      if (!c.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!m.isHit, k = m.targetName || "Célpont";
        g.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, d.appendChild(g);
      }
      if (m.isHit && !c.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = m.hitLocationRoll, w = m.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(m.actorId ?? ((o = I.speaker) == null ? void 0 : o.actor) ?? ""), v.dataset.itemId = String(m.itemId ?? ""), v.dataset.slotKey = String(m.slotKey ?? ""), v.dataset.targetName = String(m.targetName ?? ""), v.dataset.hitLocationName = String(m.hitLocationName ?? ""), v.dataset.messageId = String(I.id ?? ""), d.appendChild(v);
      }
    }
    if (!u && p && r) {
      const l = c.querySelector(".dice-total"), d = (l == null ? void 0 : l.parentElement) ?? c, h = !!r.isHit, g = r.targetName || "Célpont", v = r.hitLocationRoll, k = r.hitLocationName;
      let w = c.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", d.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const T = c.querySelector(".votv-defense-hitloc");
      if (h && v != null && k) {
        let O = T;
        O || (O = document.createElement("div"), O.className = "votv-defense-hitloc", d.appendChild(O)), O.textContent = `Találati Hely ${v} - ${k}`;
      } else T && T.remove();
    }
  }
});
export {
  Ct as V,
  Bt as c
};
//# sourceMappingURL=vacuum-of-the-void-B4_M2JuI.mjs.map
