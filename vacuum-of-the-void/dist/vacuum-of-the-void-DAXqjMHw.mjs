var Ws = Object.defineProperty;
var Js = Object.getPrototypeOf;
var Zs = Reflect.get;
var Ys = (S, s, e) => s in S ? Ws(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var te = (S, s, e) => Ys(S, typeof s != "symbol" ? s + "" : s, e);
var U = (S, s, e) => Zs(Js(S), e, s);
const { HTMLField: Xs, NumberField: F, SchemaField: H, StringField: C, BooleanField: pe, ArrayField: St } = foundry.data.fields;
class Pt extends foundry.abstract.TypeDataModel {
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
        initiativeRanges: new St(
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
        armor: new St(
          new H({
            name: new C({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new C({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new C({ required: !1, blank: !0, initial: "" }),
            level: new C({ required: !1, blank: !0, initial: "" }),
            other: new C({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new St(
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
          items: new St(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new St(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new Xs({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Rt, SchemaField: Qs } = foundry.data.fields;
class ei extends Pt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Qs({
        body: new Rt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Rt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Rt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: ti, StringField: fs, NumberField: si } = foundry.data.fields;
class ii extends Pt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new ti({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new fs({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new fs({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new si({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { SchemaField: ni, StringField: ys, NumberField: ai } = foundry.data.fields;
class ri extends Pt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new ni({
        /** Bázis típusa (pl. Űrállomás, Földi, Orbitális). */
        type: new ys({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE) – bázisról induló támadások/érzékelés. */
        toolsRange: new ys({ required: !1, blank: !0, initial: "" }),
        /** Bázis maximális raktárkapacitása. */
        storage: new ai({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: oi, NumberField: Ti, StringField: Ue } = foundry.data.fields;
class gs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new oi({ required: !1, initial: !1 }),
      type: new Ue({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Ue({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Ue({ required: !1, blank: !0, initial: "" }),
      damage: new Ue({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Ue({ required: !1, blank: !0, initial: "" }),
      special: new Ue({ required: !1, blank: !0, initial: "" }),
      quantity: new Ue({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Ue({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ci, StringField: At } = foundry.data.fields;
class li extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ci({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new At({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new At({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new At({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new At({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Mt, StringField: hs } = foundry.data.fields;
class di extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new hs({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new hs({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new Mt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Mt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Mt({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: mi, StringField: bs } = foundry.data.fields;
class vs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new bs({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new bs({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new mi({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: ks } = foundry.data.fields;
class pi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ks({ required: !1, blank: !0, initial: "" }),
      quantity: new ks({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: fi } = foundry.data.fields;
class yi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new fi({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: jt, StringField: ot, SchemaField: ws, ArrayField: gi } = foundry.data.fields;
class hi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new jt({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new ws({
        max: new jt({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new jt({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new ws({
        items: new gi(
          new ot({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new ot({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new ot({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new ot({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new ot({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new ot({ required: !1, blank: !0, initial: "" })
    };
  }
}
function zt(S) {
  if (!S || !Array.isArray(S.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (a, i = 1) => {
    if (!Array.isArray(a)) return;
    let o = i;
    for (const r of a) {
      if (!r) continue;
      if (Array.isArray(r.terms)) {
        f(r.terms, o);
        continue;
      }
      if (typeof r.operator == "string") {
        o = r.operator === "-" ? -1 : 1;
        continue;
      }
      const u = typeof r.faces == "number" ? r.faces : void 0, h = Array.isArray(r.results) ? r.results : null;
      if (!u || !h || u === 8 || u !== 6) continue;
      const g = !n && o >= 0 && (r.number === 3 || r.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && g.push(k);
      }
    }
  };
  f(S.terms, 1);
  const c = s.filter((a) => a === 6).length, m = s.filter((a) => a === 1).length, d = e.filter((a) => a === 6).length, l = t.filter((a) => a === 6).length, p = c + d, y = m + l;
  return p > 0 && p === y ? { resultType: null, label: null } : p >= 3 ? { resultType: "critical", label: "Brutális Siker" } : p === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function bi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Is, Ss, Ts, Ds;
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
    var n, f, c, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    var r;
    const t = (r = game.votv) == null ? void 0 : r._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const f = this.element, c = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = c.contains(u), g = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && g && (m.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const l = this.element, p = this.form ?? this.element, y = m.scrollState, a = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var u, h;
      if (this._applyScrollState(l, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((u = p.querySelector) == null ? void 0 : u.call(p, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = p.querySelector) == null ? void 0 : h.call(p, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(l, y);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), d;
  }
  /**
   * Compute health status 0–3 from current HP and max HP, using thirds of max.
   * Max 15 → 11–15 Egészséges, 6–10 Sérült, 1–5 Kritikus, 0 Használhatatlan.
   */
  static _healthStatusFromRatio(s, e) {
    const t = Number(s), n = Number(e);
    if (n <= 0 || t <= 0) return 0;
    const f = Math.floor(n / 3), c = Math.floor(2 * n / 3);
    return t <= f ? 1 : t <= c ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var m;
        return c.type === "Pancel" && ((m = c.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const m = String(((f = c.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(m);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var m;
        return c.type === "Pancel" && ((m = c.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const m = String(((f = c.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), d = Number(m);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var m;
        return c.type === "Pancel" && ((m = c.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let t = 0;
    for (const c of e) {
      const m = String(((f = c.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(m);
      Number.isFinite(d) && (t += d);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var p, y, a, i, o, r, u, h, g;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (p = e.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : y.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, f = ee._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const c = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let m;
    f === 1 ? m = -6 : f === 2 ? m = -3 : m = c, m += ee._getTotalArmorSpeedPenaltyStatic(s);
    const d = Number(((u = (r = s.system) == null ? void 0 : r.combat) == null ? void 0 : u.speed) ?? 0) || 0, l = Number(((g = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : g.speedBonus) ?? 0) || 0;
    return d + l + (Number.isFinite(m) ? m : 0);
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
    var y, a, i, o, r, u, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((u = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, f = ((g = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : g.value) ?? 0, c = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, m = ee._healthStatusFromRatio(c, f), d = Number(((T = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : T.givenSpeed) ?? 0) || 0;
    let l;
    m === 0 ? l = 0 : m === 1 ? l = -6 : m === 2 ? l = -3 : l = d;
    const p = this._getTotalArmorSpeedPenalty();
    l += p, t.textContent = String(l);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var l, p, y, a, i, o, r, u, h, g, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (y = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : y.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, f = (r = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && r.call(o, "lookaround") ? 1 : 0, c = (g = (h = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : h.has) != null && g.call(h, "halfcover") ? 3 : 0, m = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, d = n + this._getTotalArmorProtectionBonus() + f + c + m;
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), c = t('input[name="system.combat.defense"]'), m = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const d = Number(c == null ? void 0 : c.value) || 0, l = Number(m == null ? void 0 : m.value) || 0, p = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(d + l + p);
  }
  _writeTotalSpeed(s = null) {
    var r, u, h, g, v, k, w, T;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), c = t('input[name="system.combat.speed"]'), m = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (u = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : u.has) != null && h.call(u, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const d = ((v = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : v.resources) ?? {}, l = ((w = (k = d.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, p = ((T = d.currentHealth) == null ? void 0 : T.legs) ?? 0;
    if (ee._healthStatusFromRatio(p, l) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(c == null ? void 0 : c.value) || 0, i = Number(m == null ? void 0 : m.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(a + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, m, d, l;
    const e = ee.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, n = ((d = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : d.value) ?? 0, f = ((l = t.currentHealth) == null ? void 0 : l[e]) ?? 0;
    return ee._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var m, d, l, p;
    const t = ee.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((m = s == null ? void 0 : s.system) == null ? void 0 : m.resources) ?? {}, f = ((l = (d = n.hitLocations) == null ? void 0 : d[t]) == null ? void 0 : l.value) ?? 0, c = ((p = n.currentHealth) == null ? void 0 : p[t]) ?? 0;
    return ee._healthStatusFromRatio(c, f);
  }
  async _prepareContext(s) {
    var lt, ut, dt, mt, pt, ft, yt, gt, ht, We, bt, vt, Je, I, E, P, G, ke, ne, Ce, Te, we, $e, Ze, Ye, qt, Nt, Lt, Ft, kt, at, Yt, Xt, Qt, es, ts, ss, is, ns, as, rs, os, cs, ls, us;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((dt = (ut = (lt = this.actor.system) == null ? void 0 : lt.resources) == null ? void 0 : ut.stress) == null ? void 0 : dt.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, c = n.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of m) {
      const L = ((mt = f[b]) == null ? void 0 : mt.value) ?? 0, N = c[b] ?? 0;
      e.computedHealthStatus[b] = ee._healthStatusFromRatio(N, L);
    }
    const d = (Number(c.head) || 0) === 0, p = ["torso", "arms", "legs"].filter((b) => (Number(c[b]) || 0) === 0).length;
    e.showDeathSkull = d || p >= 2;
    const y = e.computedHealthStatus.legs ?? 3, a = Number(((ft = (pt = this.actor.system) == null ? void 0 : pt.combat) == null ? void 0 : ft.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = a;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const r = Number(((gt = (yt = this.actor.system) == null ? void 0 : yt.combat) == null ? void 0 : gt.givenProtection) ?? 0) || 0, u = (bt = (We = (ht = this.actor) == null ? void 0 : ht.statuses) == null ? void 0 : We.has) != null && bt.call(We, "lookaround") ? 1 : 0, h = (I = (Je = (vt = this.actor) == null ? void 0 : vt.statuses) == null ? void 0 : Je.has) != null && I.call(Je, "halfcover") ? 3 : 0, g = (G = (P = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : P.has) != null && G.call(P, "threequarteredcover") ? 6 : 0, v = r + this._getTotalArmorProtectionBonus() + u + h + g;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let T = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    y === 0 && (T = 0), (Te = (Ce = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Ce.has) != null && Te.call(Ce, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: ($e = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : $e.givenProtection } },
      { inplace: !1 }
    ), T = 0), e.totalSpeed = T;
    const _ = ee.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(_)) {
      const N = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (O.slotOrder ?? "").trim(), j = M ? M.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], K = (Ze = this.actor.system.gear) == null ? void 0 : Ze.microchips, x = K && typeof K == "object" && !Array.isArray(K) ? K : {}, J = (((Ye = x.slot1) == null ? void 0 : Ye.itemId) ?? "").trim(), Q = (((qt = x.slot2) == null ? void 0 : qt.itemId) ?? "").trim(), Z = (((Nt = x.slot3) == null ? void 0 : Nt.itemId) ?? "").trim(), z = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const N = typeof b.sort == "number" ? b.sort : 0, A = typeof L.sort == "number" ? L.sort : 0;
      return N - A;
    }).map((b) => {
      var xe, Qe, et, ze, Ke, wt;
      const L = b.type === "Fegyver", N = b.type === "MikroChip";
      let A = 0, B = "", de = null;
      for (let rt = 0; rt < j.length; rt++) {
        const It = j[rt];
        if ((((xe = O[It]) == null ? void 0 : xe.itemId) ?? "") === b.id) {
          A = rt + 1, B = ((Qe = O[It]) == null ? void 0 : Qe.bonus) ?? "", de = It;
          break;
        }
      }
      let re = null;
      N && (J === b.id ? re = "slot1" : Q === b.id ? re = "slot2" : Z === b.id && (re = "slot3"));
      const Xe = L && ((et = b.system) != null && et.damage) ? b.system.damage : "", Ie = L && typeof ((ze = b.system) == null ? void 0 : ze.range) == "string" ? (b.system.range || "").trim() : "", De = de ? Number((Ke = O[de]) == null ? void 0 : Ke.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: A,
        slotBonus: B,
        slotKey: de,
        microchipSlotKey: re,
        isEquipped: !!(de || re),
        damage: Xe,
        rangeStr: Ie,
        slotBonusNum: De,
        quantity: Number(((wt = b.system) == null ? void 0 : wt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = z;
    const W = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Fegyver"), ce = W.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = ce;
    const ve = "— Nincs fegyver —", D = j.filter((b) => {
      const N = ((O[b] ?? {}).itemId ?? "").trim();
      return N ? !!W.find((B) => B.id === N) : !1;
    });
    e.weaponSlots = D.map((b, L) => {
      const N = O[b] ?? {}, A = (N.itemId ?? "").trim(), B = ce.find((De) => De.id === A), de = W.find((De) => De.id === A), re = (de == null ? void 0 : de.system) ?? {}, Xe = re.size === "thrown", Ie = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: A,
        slotNum: L + 1,
        displayName: (B == null ? void 0 : B.name) || N.name || ve,
        img: (B == null ? void 0 : B.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: Xe,
        rangeStr: Ie
      };
    });
    const R = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, V = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = W.map((b) => {
      var ds, ms, ps;
      const L = b.id;
      let N = null, A = {};
      for (const xt of j)
        if ((((ds = O[xt]) == null ? void 0 : ds.itemId) ?? "").trim() === L) {
          N = xt, A = O[xt] ?? {};
          break;
        }
      const B = !!N, de = ((ms = b.system) == null ? void 0 : ms.equipped) !== void 0 && ((ps = b.system) == null ? void 0 : ps.equipped) !== null ? !!b.system.equipped : B, re = (b == null ? void 0 : b.system) ?? {}, Xe = typeof re.range == "string" ? (re.range || "").trim() : "", Ie = re.type ?? "", De = (R[Ie] ?? Ie) || "—", xe = re.size ?? "", Qe = (V[xe] ?? xe) || "", et = [De, Qe].filter(Boolean).join(", ") || De || "—", ze = Ie === "projectile" || xe === "thrown", Ke = re.quantity, wt = Ke != null ? String(Ke).trim() : "1", rt = String(A.bonus ?? "").trim(), It = String(re.bonus ?? "").trim(), Vs = rt || It || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? ve,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Vs,
        damage: A.damage ?? re.damage ?? "",
        rangeStr: Xe || "—",
        typeLabel: De,
        typeAndSize: et,
        quantity: wt,
        quantityDisplay: ze ? wt : "—",
        isProjectile: ze,
        equipped: de,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const X = (((Ft = this.actor.items) == null ? void 0 : Ft.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = X.map((b) => {
      var A, B;
      const L = (b == null ? void 0 : b.system) ?? {}, N = ((A = b.system) == null ? void 0 : A.equipped) !== void 0 && ((B = b.system) == null ? void 0 : B.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: bi((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const oe = (((kt = this.actor.items) == null ? void 0 : kt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = oe.map((b) => {
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
    const le = (((at = this.actor.items) == null ? void 0 : at.contents) ?? []).filter((b) => b.type === "Egyeb");
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
    const me = (((Yt = this.actor.items) == null ? void 0 : Yt.contents) ?? []).filter((b) => b.type === "MikroChip"), ie = me.map((b) => ({ id: b.id, name: b.name, img: b.img })), ge = "— Nincs Mikro-Chip —", ue = ["slot1", "slot2", "slot3"], Re = (b) => {
      var N, A, B;
      const L = [];
      return b !== 1 && L.push((((N = x.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && L.push((((A = x.slot2) == null ? void 0 : A.itemId) ?? "").trim()), b !== 3 && L.push((((B = x.slot3) == null ? void 0 : B.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((b) => !Re(1).includes(b.id)), e.microchipItemsSlot2 = ie.filter((b) => !Re(2).includes(b.id)), e.microchipItemsSlot3 = ie.filter((b) => !Re(3).includes(b.id)), e.microchipSlots = ue.map((b) => {
      const L = x[b] ?? {}, N = (L.itemId ?? "").trim(), A = me.find((B) => B.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (A == null ? void 0 : A.name) || L.name || ge,
        img: (A == null ? void 0 : A.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, N = x[L] ?? {}, A = (N.itemId ?? "").trim(), B = ie.find((de) => de.id === A);
      e[`microchip${b}ItemId`] = A, e[`microchip${b}DisplayName`] = (B == null ? void 0 : B.name) || N.name || ge, e[`microchip${b}Img`] = (B == null ? void 0 : B.img) || "";
    }), e.microchipsTable = me.map((b) => {
      var xe, Qe, et, ze;
      const L = b.id;
      let N = null;
      for (const Ke of ue)
        if ((((xe = x[Ke]) == null ? void 0 : xe.itemId) ?? "").trim() === L) {
          N = Ke;
          break;
        }
      const A = !!N, B = ((Qe = b == null ? void 0 : b.system) == null ? void 0 : Qe.abilityType) ?? "", de = B === "active" ? "Aktív" : B === "passive" ? "Passzív" : B || "—", re = B === "active", Xe = Number((et = b == null ? void 0 : b.system) == null ? void 0 : et.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Ie = (((ze = b == null ? void 0 : b.system) == null ? void 0 : ze.description) ?? "").trim(), De = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: de,
        description: De,
        kp: Xe,
        isActive: re,
        slotKey: N ?? "",
        equipped: A
      };
    });
    const Be = (((Xt = e.weaponsTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.armorTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((es = e.microchipsTable) == null ? void 0 : es.length) ?? 0) > 0 || (((ts = e.itemsTable) == null ? void 0 : ts.length) ?? 0) > 0;
    e.showEquipmentDropZone = !Be;
    const st = this.actor.system.abilities ?? {}, Dt = (((ss = this.actor.items) == null ? void 0 : ss.contents) ?? []).map((b) => {
      var L, N, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), Pe = new Map(Dt.map((b) => [b.id, b])), He = "— Nincs képesség —", Me = (b) => {
      const L = st[b] ?? {}, N = (L.itemId ?? "").trim(), A = N ? Pe.get(N) : null, B = (A == null ? void 0 : A.description) ?? "", de = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: N,
        displayName: (A == null ? void 0 : A.name) || L.name || He,
        img: (A == null ? void 0 : A.img) || "",
        description: B,
        kp: de
      };
    };
    e.abilityFajiSlot = Me("faji"), e.abilityHatterSlot = Me("hatter");
    const it = (b) => {
      const L = st[b];
      return L ? Array.isArray(L == null ? void 0 : L.items) ? L.items : Array.isArray(L) ? L : [] : [];
    }, Ge = (b) => b.map((L) => {
      const N = Pe.get(L);
      return N ? {
        id: N.id,
        name: N.name,
        img: N.img,
        description: N.description,
        kp: N.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Ge(it("passive")), e.abilityActiveList = Ge(it("active"));
    const se = ((is = e.system) == null ? void 0 : is.resources) ?? {}, he = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ae = (as = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : as.initiativeResult, be = typeof ae == "number" ? ae : -1, nt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], _e = (os = (rs = e.system) == null ? void 0 : rs.combat) == null ? void 0 : os.initiativeRanges, Oe = Array.isArray(_e) ? _e.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], je = (Oe.length > 0 ? Oe : nt).slice().sort((b, L) => b.min - L.min), Ve = Oe.map((b) => b.min), _t = Ve.length ? Math.min(...Ve) : 0, Ot = Ve.length ? Math.max(...Ve) : 0;
    e.initiativeRanges = Oe.map((b) => ({ ...b, isFirst: b.min === _t, isLast: b.min === Ot }));
    let ct = 0;
    if (typeof be == "number" && be >= 0 && je.length > 0) {
      const b = je[0], L = je[je.length - 1];
      let N = null;
      be <= b.max ? N = b : be >= L.min ? N = L : N = je.find((A) => be >= A.min && be <= A.max), N && (ct = N.kp);
    }
    e.kpDots = he.map((b, L) => {
      const N = L + 1, A = !!Number(se[b]), B = N <= ct;
      return { index: N, used: A, usable: B };
    });
    const Ct = !!((ls = (cs = game.combat) == null ? void 0 : cs.combatants) != null && ls.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Ct, e.canEditInitiative = !!((us = game.user) != null && us.isGM), e.showInitiativeResult = typeof ae == "number", e.initiativeResult = e.showInitiativeResult ? ae : "", e;
  }
  _attachFrameListeners(s) {
    var y, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const r = (i.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-haYwS7nf.mjs");
      u(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var u, h, g;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let r = (o.dataset.itemId ?? "").trim();
      if (!r) {
        const v = (o.dataset.slot ?? "").trim();
        if (!v) return;
        r = (((((h = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      r && await this._rollWeaponDamage(r, ((g = o.dataset.slot) == null ? void 0 : g.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-haYwS7nf.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var g, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, r = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(r) || r < 1 || r > 6) return;
      const u = `system.resources.kpDot${r}`, h = !!Number((v = (g = this.actor.system) == null ? void 0 : g.resources) == null ? void 0 : v[`kpDot${r}`]);
      await this.actor.update({ [u]: h ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var u;
      const o = i ? i.currentTarget : (u = e.querySelector) == null ? void 0 : u.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const r = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", r > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
    const c = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', c), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var u, h, g;
      i.preventDefault(), i.stopPropagation();
      const o = ((g = (h = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
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
      const o = i.currentTarget, r = o.dataset.skill, u = ((g = o.textContent) == null ? void 0 : g.trim()) || r, { openRollSheetForSkill: h } = await import("./roll-sheet-haYwS7nf.mjs");
      h(this.actor, r, u);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, T, _, O, q, M;
      i.preventDefault();
      const r = i.currentTarget.closest(".karakter-weapon-slot"), u = r == null ? void 0 : r.dataset.slot;
      if (!u) return;
      const g = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[u]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!g) return;
      const v = ((_ = (T = this.actor.items).get) == null ? void 0 : _.call(T, g)) ?? ((q = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : q.call(O, (j) => j.id === g));
      (M = v == null ? void 0 : v.sheet) == null || M.render(!0);
    });
    const m = (i, o) => {
      var h;
      const r = i.dataset.itemId;
      if (!r) return;
      const u = this.actor.items.get(r);
      if (u) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const g = i.dataset.weaponSlot;
          g && this._rollWeapon(g);
          return;
        }
        (h = u.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, r = o.dataset.itemId;
      if (!r) return;
      const u = this.actor.items.get(r);
      if (!u) return;
      let h = Number(o.value);
      (!Number.isFinite(h) || h < 0) && (h = 0), await u.update({ "system.quantity": h });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const u = this.actor, h = u.items.get(r);
      if (!h) return;
      const g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = T.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === r;
        });
        if (_) {
          const O = T.filter((q) => q !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const o = i.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const u = this.actor.items.get(r);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], w = k.find((q) => {
        var M;
        return (((M = h[q]) == null ? void 0 : M.itemId) ?? "").trim() === r;
      }) ?? null;
      if (o.checked) {
        if (w) return;
        let q = k.find((j) => {
          var K;
          return !((K = h[j]) != null && K.itemId);
        });
        const M = new Set(k);
        if (!q) {
          const j = v.find((K) => !M.has(K));
          if (!j) return;
          q = j, k.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: r,
          [`system.weapons.${q}.name`]: (u == null ? void 0 : u.name) ?? "",
          [`system.weapons.${q}.damage`]: ((_ = u == null ? void 0 : u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = u == null ? void 0 : u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (w) {
        const q = k.filter((M) => M !== w);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const r = o.closest(".karakter-microchip-slot-select-wrap"), u = r == null ? void 0 : r.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !u && r && r.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const o = i.currentTarget, r = o.closest(".karakter-microchip-slot-select-wrap"), u = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display"), h = u == null ? void 0 : u.dataset.slot;
      if (!h) return;
      const g = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((q = o.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (o.dataset.itemImg ?? "").trim(), w = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = v);
      let T = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-thumb");
      k ? (T || (T = document.createElement("img"), T.className = "karakter-microchip-slot-thumb", T.alt = "", u == null || u.insertBefore(T, w)), T.src = k, T.style.display = "") : T && T.remove(), r == null || r.classList.remove("karakter-microchip-slot-open");
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
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "MikroChip") return;
      const u = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, g = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = u[w]) == null ? void 0 : T.itemId) ?? "").trim() === o;
      });
      g && await this.actor.update({
        [`system.gear.microchips.${g}.itemId`]: "",
        [`system.gear.microchips.${g}.name`]: "",
        [`system.gear.microchips.${g}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const r = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${o}.active`]: r }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const r = o.dataset.slot;
      o.addEventListener("dragover", (u) => this._onMicrochipSlotDragOver(u, r)), o.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (u) => this._onMicrochipSlotDrop(u, r));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const r = o.dataset.slot;
      r && (o.addEventListener("dragover", (u) => this._onAbilitySingleDragOver(u, r)), o.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (u) => {
        var h;
        (h = u.currentTarget) == null || h.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const r = o.dataset.area;
      r && (o.addEventListener("dragover", (u) => this._onAbilityAreaDragOver(u, r)), o.addEventListener("dragleave", (u) => {
        var h;
        return (h = u.currentTarget) == null ? void 0 : h.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (u) => {
        var h;
        (h = u.currentTarget) == null || h.classList.remove("karakter-ability-area-drag-over");
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
      const o = i.currentTarget.dataset.area, r = i.currentTarget.dataset.itemId;
      if (!o || !r) return;
      const u = this.actor.system.abilities ?? {}, g = (Array.isArray((v = u[o]) == null ? void 0 : v.items) ? u[o].items.slice() : []).filter((k) => k !== r);
      await this.actor.update({ [`system.abilities.${o}.items`]: g });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var h;
      i.preventDefault();
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const u = this.actor.items.get(r);
      (h = u == null ? void 0 : u.sheet) == null || h.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.itemId;
      r && await this._postAbilityToChat(r);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const u = this.actor.items.get(r);
      u && (u.type === "Kepesseg" || u.type === "ability" ? await this._postAbilityToChat(r) : (u.type === "MikroChip" || u.type === "Egyeb") && await this._postItemToChat(r));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const u = this.actor.items.get(r);
      if (!u || u.type !== "Fegyver") return;
      const h = (o.value ?? "").trim();
      await u.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-weapon-quantity-input[data-item-id="${r}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const u = this.actor.items.get(r);
      !u || u.type !== "Pancel" || (await u.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var _, O;
      const o = i.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const u = this.actor.items.get(r);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, g = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = g ? g.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], w = k.find((q) => {
        var M;
        return (((M = h[q]) == null ? void 0 : M.itemId) ?? "").trim() === r;
      }) ?? null;
      if (o.checked) {
        if (w) return;
        let q = k.find((j) => {
          var K;
          return !((K = h[j]) != null && K.itemId);
        });
        const M = new Set(k);
        if (!q) {
          const j = v.find((K) => !M.has(K));
          if (!j) return;
          q = j, k.push(j);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: r,
          [`system.weapons.${q}.name`]: u.name ?? "",
          [`system.weapons.${q}.damage`]: ((_ = u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (w) {
        const q = k.filter((M) => M !== w);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${w}.itemId`]: "",
          [`system.weapons.${w}.name`]: "",
          [`system.weapons.${w}.damage`]: "",
          [`system.weapons.${w}.bonus`]: ""
        }), await u.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const r = i.currentTarget.dataset.itemId;
      if (!r) return;
      const u = this.actor, h = u.items.get(r), g = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], T = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = T.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === r;
        });
        if (_) {
          const O = T.filter((q) => q !== _);
          g["system.weapons.slotOrder"] = O.join(","), g[`system.weapons.${_}.itemId`] = "", g[`system.weapons.${_}.name`] = "", g[`system.weapons.${_}.damage`] = "", g[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(g).length && await u.update(g), await u.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      !r || r.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const o = i.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const u = this.actor.items.get(r);
      if (!u || u.type !== "Targy") return;
      const h = (o.value ?? "").trim();
      await u.update({ "system.quantity": h }), setTimeout(() => {
        const g = this.form ?? this.element, v = g == null ? void 0 : g.querySelector(`.karakter-item-quantity-input[data-item-id="${r}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const d = this, l = (i) => {
      var u, h, g, v;
      if (!i) return;
      const o = d._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const r = ((h = (u = o.system) == null ? void 0 : u.resources) == null ? void 0 : h.currentHealth) != null || ((v = (g = o.system) == null ? void 0 : g.resources) == null ? void 0 : v.hitLocations) != null;
      d.actor.update(o).then(() => {
        r && setTimeout(() => d.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, p = (i) => {
      var o, r, u;
      return i && (((r = (o = d.element) == null ? void 0 : o.contains) == null ? void 0 : r.call(o, i)) || d.id && ((u = i.closest) == null ? void 0 : u.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      var g;
      const o = i.target;
      if (!o || !o.form) return;
      const r = o.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const u = o.form;
      if (!p(u)) return;
      const h = i.relatedTarget;
      h && (u.contains(h) || d.id && ((g = h.closest) != null && g.call(h, `#${CSS.escape(d.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), l(u));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var m, d, l;
    const e = {};
    for (const p of s.elements) {
      if (!p.name || p.disabled || p.type === "radio" && !p.checked || p.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      p.type === "checkbox" ? y = p.checked : p.type === "number" ? y = p.value === "" ? 0 : Number(p.value) : y = p.value ?? "", foundry.utils.setProperty(e, p.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const p of c) {
      const y = ((l = n[p]) == null ? void 0 : l.value) ?? 0, a = f[p] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${p}`, ee._healthStatusFromRatio(a, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, c, m, d, l, p, y, a, i, o, r, u;
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
          const k = (((c = g.system) == null ? void 0 : c.kind) ?? "passive").toString();
          if (k === "module") {
            (d = (m = ui.notifications) == null ? void 0 : m.warn) == null || d.call(m, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
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
          const T = k === "active" ? "active" : "passive", _ = Array.isArray((l = w[T]) == null ? void 0 : l.items) ? w[T].items.slice() : Array.isArray(w[T]) ? w[T].slice() : [];
          _.includes(v) || _.push(v), await this.actor.update({ [`system.abilities.${T}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((p = e.data) == null ? void 0 : p.uuid) ?? (typeof e == "string" ? e : null);
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
            const T = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (T.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = _ ? _.split(/\s*,\s*/).filter((j) => O.includes(j)) : [], M = q.filter((j) => {
              var K;
              return (((K = T[j]) == null ? void 0 : K.itemId) ?? "").trim() === w;
            });
            if (M.length > 0) {
              const K = {
                "system.weapons.slotOrder": q.filter((x) => !M.includes(x)).join(",")
              };
              for (const x of M)
                K[`system.weapons.${x}.itemId`] = "", K[`system.weapons.${x}.name`] = "", K[`system.weapons.${x}.damage`] = "", K[`system.weapons.${x}.bonus`] = "";
              await v.update(K);
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
          ((r = g.parent) == null ? void 0 : r.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
        if (g && g.documentName === "Item" && (g.type === "Targy" || g.type === "Egyeb")) {
          const v = this.actor;
          ((u = g.parent) == null ? void 0 : u.id) !== v.id && await v.createEmbeddedDocuments("Item", [g.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, c, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var m, d, l, p, y, a;
    s.preventDefault(), s.stopPropagation(), (m = s.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "Fegyver") return;
    if (((p = f.parent) == null ? void 0 : p.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(f.toObject(), { system: { ...f.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const c = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
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
    var l, p;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, a) => {
      const i = typeof y.sort == "number" ? y.sort : 0, o = typeof a.sort == "number" ? a.sort : 0;
      return i - o;
    }).map((y) => y.id), c = f.indexOf(t), m = f.indexOf(e);
    if (c === -1 || m === -1) return;
    f.splice(c, 1), f.splice(m, 0, t);
    const d = f.map((y, a) => ({
      _id: y,
      sort: (a + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", d);
  }
  _onInventoryAreaDragOver(s) {
    var n, f, c;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((f = s.dataTransfer) == null ? void 0 : f.getData("application/json")) || "";
    let t = null;
    if (typeof e == "string" && e.trim())
      try {
        t = JSON.parse(e.trim());
      } catch {
      }
    else e && typeof e == "object" && (t = e);
    t && t.type !== "Item" || (s.preventDefault(), (c = s.currentTarget) == null || c.classList.add("karakter-actions-table-drag-over"));
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
    var d, l, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((l = e.system) == null ? void 0 : l.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((p = e.system) == null ? void 0 : p.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var p, y, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((p = e.system) == null ? void 0 : p.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: l,
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
    var c, m, d;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const l = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((d = (await this.actor.createEmbeddedDocuments("Item", [l]))[0]) == null ? void 0 : d.id) ?? f;
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
    var d, l, p, y;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((p = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : p.id) ?? f;
    }
    const c = this.actor.system.abilities ?? {}, m = Array.isArray((y = c[e]) == null ? void 0 : y.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    m.includes(f) || m.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, c, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var m, d, l, p, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((d = s.dataTransfer) == null ? void 0 : d.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const f = await fromUuid(n.uuid);
    if (!f || f.type !== "MikroChip") return;
    let c = f.id;
    ((p = f.parent) == null ? void 0 : p.id) !== this.actor.id && (c = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? c), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: c,
      [`system.gear.microchips.${e}.name`]: f.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let f = Number(n) || 0;
    const c = this._getSkillHealthStatus(s);
    c === 1 ? f -= 6 : c === 2 && (f -= 3);
    const d = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, l = new Roll(d);
    await l.evaluate({ async: !0 });
    const { resultType: p, label: y } = zt(l), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: y } },
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
    var c;
    const s = Number(((c = this.actor.system.skills) == null ? void 0 : c.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    let c = null;
    t.itemId && (c = f.find((T) => T.id === t.itemId) ?? null);
    const m = c && c.name || t.name || `Fegyver (${s})`, d = Number(t.bonus || 0) || 0, l = ((k = c == null ? void 0 : c.system) == null ? void 0 : k.type) || "kinetic", p = (((w = c == null ? void 0 : c.system) == null ? void 0 : w.skillKey) ?? "").trim(), y = p && n[p] !== void 0 ? p : l === "explosive" ? "grenadeUse" : "firearms", a = Number(n[y] || 0) || 0, i = d + a, r = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, u = new Roll(r);
    await u.evaluate({ async: !0 });
    const { resultType: h, label: g } = zt(u), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: g } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, l, p, y, a, i, o, r, u, h;
    const t = this.actor;
    if (!t) return;
    let n = ((l = (d = t.items).get) == null ? void 0 : l.call(d, s)) ?? ((y = (p = t.items.contents) == null ? void 0 : p.find) == null ? void 0 : y.call(p, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((u = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : u.call(r, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(f);
    await c.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
};
te(ee, "PARTS", foundry.utils.mergeObject(
  U(ee, ee, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), te(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ee, ee, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Is = U(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Is.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ss = U(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ds = (Ts = U(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) == null ? void 0 : Ds.contentClasses) ?? [],
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
let Tt = ee;
function vi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var _s, Os, Cs, qs;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, c, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, o = n.contains(i), r = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      o && r && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const c = await super.render(s, e), m = this.element, d = this.form ?? this.element, l = f.scrollState, p = f.focus, y = typeof (l == null ? void 0 : l.formScrollTop) == "number" || typeof (l == null ? void 0 : l.windowScrollTop) == "number", a = () => {
      var i, o;
      if (this._applyScrollState(m, l), (p == null ? void 0 : p.name) != null || (p == null ? void 0 : p.id) != null) {
        const r = ((i = d.querySelector) == null ? void 0 : i.call(d, p.id ? `#${CSS.escape(p.id)}` : null)) ?? (p.name ? (o = d.querySelector) == null ? void 0 : o.call(d, `[name="${CSS.escape(p.name)}"]`) : null);
        r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && (r.focus({ preventScroll: !0 }), typeof r.selectionStart == "number" && (r.selectionStart = p.selectionStart ?? 0, r.selectionEnd = p.selectionEnd ?? p.selectionStart ?? 0));
      }
      this._applyScrollState(m, l);
    };
    return (y || p) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), c;
  }
  async _prepareContext(s) {
    var Me, it, Ge, se, he, ae, be, nt, _e, Oe, $t, je, Ve, _t, Ot, ct, Ct, lt, ut, dt, mt, pt, ft, yt, gt, ht, We, bt, vt, Je;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Me = this.actor) == null ? void 0 : Me.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (it = e.system) == null ? void 0 : it.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((se = e.system) == null ? void 0 : se.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, c = (ae = (he = t == null ? void 0 : t.statuses) == null ? void 0 : he.has) != null && ae.call(he, "lookaround") ? 1 : 0, m = (nt = (be = t == null ? void 0 : t.statuses) == null ? void 0 : be.has) != null && nt.call(be, "halfcover") ? 3 : 0, d = (Oe = (_e = t == null ? void 0 : t.statuses) == null ? void 0 : _e.has) != null && Oe.call(_e, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + c + m + d;
    const l = (($t = t == null ? void 0 : t.items) == null ? void 0 : $t.contents) ?? [], p = ((je = t == null ? void 0 : t.system) == null ? void 0 : je.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (p.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((I) => y.includes(I)) : [], o = l.filter((I) => I.type === "Fegyver"), r = o.map((I) => ({ id: I.id, name: I.name, img: I.img })), u = "— Nincs fegyver —", h = i.length > 0 ? i : y, g = y.filter((I) => !h.includes(I)), v = [...h, ...g], k = v.filter((I) => {
      var P;
      const E = (((P = p[I]) == null ? void 0 : P.itemId) ?? "").trim();
      return E && o.some((G) => G.id === E);
    });
    e.weaponSlots = k.map((I) => {
      const E = p[I] ?? {}, P = (E.itemId ?? "").trim(), G = r.find((we) => we.id === P), ke = o.find((we) => we.id === P), ne = (ke == null ? void 0 : ke.system) ?? {}, Ce = ne.size === "thrown", Te = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: I,
        itemId: P,
        displayName: (G == null ? void 0 : G.name) || E.name || u,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Ce,
        rangeStr: Te
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, T = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((I) => {
      var kt;
      const E = I.id;
      let P = null, G = {};
      for (const at of v)
        if ((((kt = p[at]) == null ? void 0 : kt.itemId) ?? "").trim() === E) {
          P = at, G = p[at] ?? {};
          break;
        }
      const ke = !!P, ne = (I == null ? void 0 : I.system) ?? {}, Ce = typeof ne.range == "string" ? (ne.range || "").trim() : "", Te = ne.type ?? "", we = (w[Te] ?? Te) || "—", $e = ne.size ?? "", Ze = (T[$e] ?? $e) || "", Ye = [we, Ze].filter(Boolean).join(", ") || we || "—", qt = Te === "projectile" || $e === "thrown", Nt = ne.quantity != null ? String(ne.quantity).trim() : "1", Lt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", Ft = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: P ?? "",
        itemId: E,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? u,
        img: (I == null ? void 0 : I.img) ?? "",
        bonus: Lt,
        damage: Ft,
        rangeStr: Ce || "—",
        typeAndSize: Ye,
        quantity: Nt,
        isProjectile: qt,
        equipped: ke,
        special: (ne.special ?? "").trim() || "—"
      };
    });
    const _ = l.filter((I) => I.type === "Pancel");
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
        level: vi((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: P
      };
    });
    const O = ((_t = (Ve = t == null ? void 0 : t.system) == null ? void 0 : Ve.gear) == null ? void 0 : _t.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], M = l.filter((I) => I.type === "MikroChip");
    e.microchipsTable = M.map((I) => {
      var Te, we, $e, Ze;
      const E = I.id;
      let P = null;
      for (const Ye of q)
        if ((((Te = O[Ye]) == null ? void 0 : Te.itemId) ?? "").trim() === E) {
          P = Ye;
          break;
        }
      const G = ((we = I == null ? void 0 : I.system) == null ? void 0 : we.abilityType) ?? "", ke = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", ne = ((($e = I == null ? void 0 : I.system) == null ? void 0 : $e.description) ?? "").trim(), Ce = ne ? ne.length > 60 ? ne.slice(0, 57) + "…" : ne : "—";
      return {
        itemId: E,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        typeLabel: ke,
        description: Ce,
        kp: Number((Ze = I == null ? void 0 : I.system) == null ? void 0 : Ze.replaceCost) >= 0 ? Number(I.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: P ?? "",
        equipped: !!P
      };
    });
    const j = l.filter((I) => I.type === "Targy");
    e.itemsTable = j.map((I) => {
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
    const K = l.filter((I) => I.type === "Egyeb");
    e.egyebList = K.map((I) => {
      const P = (((I == null ? void 0 : I.system) ?? {}).description ?? "").trim(), G = P ? P.length > 80 ? P.slice(0, 77) + "…" : P : "";
      return {
        itemId: I.id,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        description: G
      };
    });
    const x = (((Ot = e.weaponsTable) == null ? void 0 : Ot.length) ?? 0) > 0 || (((ct = e.armorTable) == null ? void 0 : ct.length) ?? 0) > 0 || (((Ct = e.microchipsTable) == null ? void 0 : Ct.length) ?? 0) > 0 || (((lt = e.itemsTable) == null ? void 0 : lt.length) ?? 0) > 0 || (((ut = e.egyebList) == null ? void 0 : ut.length) ?? 0) > 0;
    e.showEquipmentDropZone = !x;
    const J = ((dt = t == null ? void 0 : t.system) == null ? void 0 : dt.abilities) ?? {}, Q = l.filter((I) => I.type === "Kepesseg" || I.type === "ability").map((I) => {
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
    const z = (I) => {
      const E = J[I];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, W = (I) => (I || []).map((E) => {
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
    e.abilityPassiveList = W(z("passive")), e.abilityActiveList = W(z("active"));
    const ce = t == null ? void 0 : t.id, ve = !!((pt = (mt = game.combat) == null ? void 0 : mt.combatants) != null && pt.some(
      (I) => {
        var E;
        return (((E = I.actor) == null ? void 0 : E.id) ?? I.actorId) === ce;
      }
    ));
    e.showHarcSection = ve;
    const D = ((ft = e.system) == null ? void 0 : ft.resources) ?? {}, R = (gt = (yt = e.system) == null ? void 0 : yt.combat) == null ? void 0 : gt.initiativeResult, V = typeof R == "number" ? R : -1, X = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], oe = (We = (ht = e.system) == null ? void 0 : ht.combat) == null ? void 0 : We.initiativeRanges, le = Array.isArray(oe) ? oe.map((I) => ({ min: Number(I.min) ?? 0, max: Number(I.max) ?? 0, kp: Math.min(10, Math.max(0, Number(I.kp) ?? 0)) })) : [], ie = (le.length > 0 ? le : X).slice().sort((I, E) => I.min - E.min), ge = 3;
    let ue = le.length > 0 ? le : [];
    ue.length < ge && (ue = [...ue, ...Array(ge - ue.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ue.map((I, E) => ({
      ...I,
      isFirst: E === 0,
      isLast: E === ue.length - 1
    }));
    let Re = 0;
    if (typeof V == "number" && V >= 0 && ie.length > 0) {
      const I = ie[0], E = ie[ie.length - 1];
      let P = null;
      V <= I.max ? P = I : V >= E.min ? P = E : P = ie.find((G) => V >= G.min && V <= G.max), P && (Re = P.kp);
    }
    const Be = ie.length > 0 ? ie[ie.length - 1] : null, st = Math.min(10, Be ? Be.kp : 6), Pe = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, st)).map((I, E) => {
      const P = E + 1, G = !!Number(D[I]), ke = P <= Re;
      return { index: P, used: G, usable: ke };
    }), He = Math.ceil(Pe.length / 2);
    return e.kpDotsRow1 = Pe.slice(0, He), e.kpDotsRow2 = Pe.slice(He), e.canEditInitiative = !!((bt = game.user) != null && bt.isGM), e.showInitiativeResult = typeof R == "number", e.initiativeResult = e.showInitiativeResult ? R : "", e.speedUnitForSelect = ((Je = (vt = e.system) == null ? void 0 : vt.combat) == null ? void 0 : Je.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var l, p, y;
    super._attachFrameListeners(s);
    const e = ((l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var r, u, h;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((h = (u = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (g) => {
          g && this.actor.update({ img: g });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (a) => {
      var r, u, h;
      a.preventDefault();
      const i = (u = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : u.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (h = o == null ? void 0 : o.sheet) == null || h.render(!0);
    });
    const n = (a) => {
      var r, u;
      const i = (r = a == null ? void 0 : a.dataset) == null ? void 0 : r.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (u = o == null ? void 0 : o.sheet) == null || u.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (a) => {
      a.preventDefault(), n(a.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (a) => {
      var u, h, g, v;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".karakter-weapon-slot"), o = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const r = this.actor.items.get(o);
      (v = r == null ? void 0 : r.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var u;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = (((u = i == null ? void 0 : i.dataset) == null ? void 0 : u.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-haYwS7nf.mjs");
      r(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var r, u, h, g, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let o = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      !o && ((u = i == null ? void 0 : i.dataset) != null && u.slot) && (o = (((((g = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : g.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-haYwS7nf.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var u, h;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const r = !!Number((h = (u = this.actor.system) == null ? void 0 : u.resources) == null ? void 0 : h[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: r ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h, g;
      a.preventDefault();
      const i = a.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), r = ((g = i == null ? void 0 : i.textContent) == null ? void 0 : g.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: u } = await import("./roll-sheet-haYwS7nf.mjs");
      u(this.actor, o, r);
    }), t.on("click", ".karakter-ability-chat", async (a) => {
      var o, r;
      a.preventDefault();
      const i = (r = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (a) => {
      var r, u;
      a.preventDefault();
      const i = (((u = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, k, w, T, _;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.area, o = (w = (k = a.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !o || !this.actor) return;
      const r = ((T = this.actor.system) == null ? void 0 : T.abilities) ?? {}, h = (Array.isArray((_ = r[i]) == null ? void 0 : _.items) ? r[i].items.slice() : []).filter((O) => O !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: h }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (a) => {
      var o, r;
      if (a.preventDefault(), !a.altKey) return;
      const i = (r = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (a) => {
      var g, v;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, o = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const r = this.actor, u = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      u && (h[`system.weapons.${u}.itemId`] = "", h[`system.weapons.${u}.name`] = "", h[`system.weapons.${u}.damage`] = "", h[`system.weapons.${u}.bonus`] = ""), Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var o, r;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((r = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var h, g, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((g = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, u = ["slot1", "slot2", "slot3"].find((w) => {
        var T;
        return (((T = o[w]) == null ? void 0 : T.itemId) ?? "").trim() === i;
      });
      u && await this.actor.update({
        [`system.gear.microchips.${u}.itemId`]: "",
        [`system.gear.microchips.${u}.name`]: "",
        [`system.gear.microchips.${u}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (a) => {
      var r, u;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((u = (r = a.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : u.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (p = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : p.call(e, f)) == null || y.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", f, (a) => {
      var h, g, v;
      const i = a.currentTarget, o = (g = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : g.trim();
      if (!o || !this.actor) return;
      const r = this.actor.items.get(o);
      if (!r) return;
      const u = r.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", u), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: u })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const c = this, m = (a) => {
      if (!a) return;
      const i = c._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && c.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, d = (a) => {
      var i, o, r;
      return a && (((o = (i = c.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || c.id && ((r = a.closest) == null ? void 0 : r.call(a, `#${CSS.escape(c.id)}`)));
    };
    c._votvNpcBlur = (a) => {
      var h;
      const i = a.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const r = i.form;
      if (!d(r)) return;
      const u = a.relatedTarget;
      u && (r.contains(u) || c.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(c.id)}`))) || m(r);
    }, document.body.addEventListener("blur", c._votvNpcBlur, !0), c._votvNpcItemHookRegistered || (c._votvNpcItemUpdateHook = (a, i, o) => {
      var r;
      c.actor && ((r = a == null ? void 0 : a.parent) == null ? void 0 : r.id) === c.actor.id && c.render(!0);
    }, c._votvNpcItemDeleteHook = (a, i, o) => {
      var r;
      c.actor && ((r = a == null ? void 0 : a.parent) == null ? void 0 : r.id) === c.actor.id && c.render(!0);
    }, Hooks.on("updateItem", c._votvNpcItemUpdateHook), Hooks.on("deleteItem", c._votvNpcItemDeleteHook), c._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const c = this._getFormDataForUpdate(e);
      Object.keys(c).length > 0 && await this.actor.update(c).catch((m) => console.warn("VoidNpcSheet save on preClose failed", m));
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
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((T = e.system) == null ? void 0 : T.skills) ?? {}, c = ((_ = e.items) == null ? void 0 : _.filter((M) => M.type === "Fegyver")) ?? [];
    let m = null;
    n.itemId && (m = c.find((M) => M.id === n.itemId) ?? null);
    const d = m && m.name || n.name || "Fegyver", l = Number(n.bonus || 0) || 0, p = ((O = m == null ? void 0 : m.system) == null ? void 0 : O.type) || "kinetic", y = (((q = m == null ? void 0 : m.system) == null ? void 0 : q.skillKey) ?? "").trim(), a = y && f[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", i = Number(f[a] || 0) || 0, o = l + i, u = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, h = new Roll(u);
    await h.evaluate({ async: !0 });
    const { resultType: g, label: v } = zt(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, l, p, y, a, i, o, r, u, h;
    const t = this.actor;
    if (!t) return;
    const n = ((l = (d = t.items).get) == null ? void 0 : l.call(d, s)) ?? ((y = (p = t.items.contents) == null ? void 0 : p.find) == null ? void 0 : y.call(p, (g) => g.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((u = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : u.call(r, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(f);
    await c.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
  async _onDropItem(s, e) {
    var p, y, a, i, o, r, u, h, g, v, k, w, T, _, O, q, M, j, K;
    if (!this.actor) return (p = super._onDropItem) == null ? void 0 : p.call(this, s, e);
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
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const c = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const x = (((r = f.system) == null ? void 0 : r.kind) ?? "passive").toString();
      if (x === "module") {
        (h = (u = ui.notifications) == null ? void 0 : u.warn) == null || h.call(u, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let J = f.id;
      if (((g = f.parent) == null ? void 0 : g.id) !== c.id) {
        const z = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        J = ((v = (await c.createEmbeddedDocuments("Item", [z]))[0]) == null ? void 0 : v.id) ?? J;
      }
      const Q = ((k = c.system) == null ? void 0 : k.abilities) ?? {}, Z = x === "active" ? "active" : "passive", Y = Array.isArray((w = Q[Z]) == null ? void 0 : w.items) ? Q[Z].items.slice() : Array.isArray(Q[Z]) ? Q[Z].slice() : [];
      Y.includes(J) || Y.push(J), await c.update({ [`system.abilities.${Z}.items`]: Y }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((T = f.parent) == null ? void 0 : T.id) === c.id) return;
    const m = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const l = (_ = (await c.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && l) {
      const x = ((O = c.system) == null ? void 0 : O.weapons) ?? {}, J = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Q = (x.slotOrder ?? "").trim(), Z = Q ? Q.split(/\s*,\s*/).filter((W) => J.includes(W)) : [];
      let Y = J.find((W) => {
        var ce;
        return !(((ce = x[W]) == null ? void 0 : ce.itemId) ?? "").trim();
      });
      Y || (Y = J.find((W) => !Z.includes(W)) ?? "slot1");
      const z = Z.includes(Y) ? Z : [...Z, Y].filter((W) => J.includes(W));
      await c.update({
        "system.weapons.slotOrder": z.join(","),
        [`system.weapons.${Y}.itemId`]: l,
        [`system.weapons.${Y}.name`]: f.name ?? "",
        [`system.weapons.${Y}.damage`]: ((q = f.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${Y}.bonus`]: ((M = f.system) == null ? void 0 : M.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && l) {
      const x = ((K = (j = c.system) == null ? void 0 : j.gear) == null ? void 0 : K.microchips) ?? {}, Q = ["slot1", "slot2", "slot3"].find((Z) => {
        var Y;
        return !(((Y = x[Z]) == null ? void 0 : Y.itemId) ?? "").trim();
      });
      Q && await c.update({
        [`system.gear.microchips.${Q}.itemId`]: l,
        [`system.gear.microchips.${Q}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var p, y, a, i, o, r;
    const e = (y = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((r = this.actor) == null ? void 0 : r.name) ?? void 0 }),
      content: l,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var d, l, p, y, a, i;
    const e = (l = (d = this.actor) == null ? void 0 : d.items) == null ? void 0 : l.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const o = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const r = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
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
        const c = (n.value ?? "").trim();
        if (c === "") continue;
        f = Number(c) || 0;
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
  U(fe, fe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), te(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(fe, fe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((_s = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : _s.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Os = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Os.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((qs = (Cs = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) == null ? void 0 : qs.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Kt = fe;
function ki(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ns, Ls, Fs, As;
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
    var n, f, c, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    var r;
    const t = (r = game.votv) == null ? void 0 : r._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const f = this.element, c = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = c.contains(u), g = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && g && (m.focus = {
        name: u.name || null,
        id: u.id || null,
        selectionStart: "selectionStart" in u ? u.selectionStart : 0,
        selectionEnd: "selectionEnd" in u ? u.selectionEnd : 0
      });
    }
    const d = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const l = this.element, p = this.form ?? this.element, y = m.scrollState, a = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var u, h;
      if (this._applyScrollState(l, y), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const g = ((u = p.querySelector) == null ? void 0 : u.call(p, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = p.querySelector) == null ? void 0 : h.call(p, `[name="${CSS.escape(a.name)}"]`) : null);
        g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA") && (g.focus({ preventScroll: !0 }), typeof g.selectionStart == "number" && (g.selectionStart = a.selectionStart ?? 0, g.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(l, y);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), d;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (l) => {
      var p;
      return ((p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, l)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${l}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), c = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const m = Number(f == null ? void 0 : f.value) || 0, d = Number(c == null ? void 0 : c.value) || 0;
    n.textContent = String(m + d);
  }
  async _prepareContext(s) {
    var q, M, j, K, x, J, Q, Z, Y, z, W, ce, ve;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((q = e.system) == null ? void 0 : q.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, c = "— Nincs fegyver —", m = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((D) => D.type === "Fegyver");
    e.weaponsTable = m.map((D) => {
      const R = (D == null ? void 0 : D.system) ?? {}, V = R.type ?? "", X = (n[V] ?? V) || "—", oe = R.size ?? "", le = (f[oe] ?? oe) || "", me = [X, le].filter(Boolean).join(", ") || X || "—", ie = V === "projectile" || oe === "thrown", ge = R.quantity != null ? String(R.quantity).trim() : "1", ue = (typeof R.range == "string" ? (R.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? c,
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
    const d = (((j = this.actor.items) == null ? void 0 : j.contents) ?? []).filter((D) => D.type === "Pancel");
    e.armorTable = d.map((D) => {
      var X;
      const R = (D == null ? void 0 : D.system) ?? {}, V = !!((X = D.system) != null && X.equipped);
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        protectionBonus: (R.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (R.speedPenalty ?? "").toString().trim() || "—",
        level: ki((R.level ?? "").toString().trim()),
        special: (R.special ?? R.other ?? "").toString().trim() || "—",
        equipped: V
      };
    });
    const l = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((D) => D.type === "MikroChip");
    e.microchipsTable = l.map((D) => {
      var ie, ge, ue;
      const R = ((ie = D == null ? void 0 : D.system) == null ? void 0 : ie.abilityType) ?? "", V = R === "active" ? "Aktív" : R === "passive" ? "Passzív" : R || "—", X = R === "active", oe = Number((ge = D == null ? void 0 : D.system) == null ? void 0 : ge.replaceCost) >= 0 ? Number(D.system.replaceCost) : 0, le = (((ue = D == null ? void 0 : D.system) == null ? void 0 : ue.description) ?? "").trim(), me = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: D.id,
        actorId: this.actor.id,
        name: (D == null ? void 0 : D.name) ?? "—",
        img: (D == null ? void 0 : D.img) ?? "",
        typeLabel: V,
        description: me,
        kp: oe,
        isActive: X,
        slotKey: "",
        equipped: !1
      };
    });
    const p = (((x = this.actor.items) == null ? void 0 : x.contents) ?? []).filter((D) => D.type === "Targy");
    e.itemsTable = p.map((D) => {
      const R = (D == null ? void 0 : D.system) ?? {}, V = (R.description ?? "").trim(), X = V ? V.length > 60 ? V.slice(0, 57) + "…" : V : "—", oe = R.quantity != null ? String(R.quantity).trim() : "1";
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
      const V = typeof D.sort == "number" ? D.sort : 0, X = typeof R.sort == "number" ? R.sort : 0;
      return V - X;
    }), a = [];
    let i = 0, o = 0, r = 0;
    const u = Number(((Z = (Q = this.actor.system) == null ? void 0 : Q.vehicle) == null ? void 0 : Z.storage) ?? 0) || 0;
    for (const D of y) {
      const R = (D == null ? void 0 : D.system) ?? {}, V = R.health ?? {}, X = Number(R.level ?? 0) || 0, oe = Number(V.max ?? 0) || 0, le = Number(V.value ?? 0) || 0;
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
      const Re = (R.range ?? "").toString().trim().replace(",", "."), Be = Number(Re);
      Number.isFinite(Be) && (o += Be);
      const st = (R.damage ?? "").toString().trim(), Dt = (R.storage ?? "").toString().trim().replace(",", "."), Pe = Number(Dt);
      Number.isFinite(Pe) && (r += Pe);
      const He = R.abilities ?? {}, Me = Array.isArray(He.items) ? He.items : [], Ge = (await Promise.all(
        Me.map(async (se) => {
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
      )).map((se, he) => ({ doc: se, ref: Me[he] })).filter((se) => !!se.doc && !!se.ref).map(({ doc: se, ref: he }) => {
        var _e, Oe;
        const ae = (((_e = se.system) == null ? void 0 : _e.kind) ?? "passive").toString(), be = Number(((Oe = se.system) == null ? void 0 : Oe.kp) ?? 0) || 0, nt = ae === "species";
        return {
          id: se.id,
          ref: he,
          name: se.name,
          img: se.img,
          kind: ae,
          kpDisplay: nt ? 0 : be
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
        damage: st,
        abilities: Ge
      });
    }
    e.unitsTable = a, e.totalStorageUsed = r, e.vehicleStorageMax = u;
    const h = y.length;
    let g = "Kicsi", v = 0, k = 0;
    h >= 11 ? (g = "Nagy", v = -4, k = -6) : h >= 6 ? (g = "Közepes", v = -2, k = -3) : (g = "Kicsi", v = 0, k = 0), e.sizeForSelect = g, e.unitCount = h, e.sizeSpeedPenalty = v, e.sizeDefensePenalty = k;
    const w = i + v, T = o;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: w },
        vehicle: { toolsRange: T, storage: u },
        identity: { size: g }
      },
      { inplace: !1 }
    );
    const _ = (((Y = e.weaponsTable) == null ? void 0 : Y.length) ?? 0) > 0 || (((z = e.armorTable) == null ? void 0 : z.length) ?? 0) > 0 || (((W = e.microchipsTable) == null ? void 0 : W.length) ?? 0) > 0 || (((ce = e.itemsTable) == null ? void 0 : ce.length) ?? 0) > 0;
    e.showEquipmentDropZone = !_;
    const O = (((ve = this.actor.items) == null ? void 0 : ve.contents) ?? []).filter((D) => D.type === "Egyeb");
    return e.egyebList = O.map((D) => {
      const V = (((D == null ? void 0 : D.system) ?? {}).description ?? "").trim(), X = V ? V.length > 80 ? V.slice(0, 77) + "…" : V : "";
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
    var m;
    super._attachFrameListeners(s);
    const e = this.form ?? ((m = s == null ? void 0 : s.querySelector) == null ? void 0 : m.call(s, "form.votv.jarmu-sheet")) ?? s ?? this.element, t = $(e);
    if (this._writeTotalDefense(s), this._writeTotalDefense(e), requestAnimationFrame(() => this._writeTotalDefense()), setTimeout(() => this._writeTotalDefense(), 100), t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.givenProtection"]', () => {
      this._writeTotalDefense();
    }), !this.isEditable) return;
    t.on("click", ".jarmu-portrait-img", (d) => {
      var y, a, i;
      d.preventDefault(), d.stopPropagation();
      const l = ((i = (a = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (d) => {
      var y, a, i;
      d.preventDefault();
      const l = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!l) return;
      const p = this.actor.items.get(l);
      (i = p == null ? void 0 : p.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (d) => {
      var y, a;
      if (d.preventDefault(), !d.altKey) return;
      const l = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      !l || !this.actor.items.get(l) || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".jarmu-item-quantity-input", async (d) => {
      var a;
      const l = d.currentTarget, p = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (l.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (d) => {
      var y, a;
      const l = (a = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : a.itemId;
      if (!l) return;
      const p = this.actor.items.get(l);
      !p || p.type !== "Pancel" || await p.update({ "system.equipped": d.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (d) => {
      var p, y, a, i;
      d.preventDefault();
      const l = (y = (p = d.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      l && ((i = (a = this.actor.items.get(l)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (d) => {
      var p, y;
      if (d.preventDefault(), !d.altKey) return;
      const l = (y = (p = d.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      l && await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-item-chat", async (d) => {
      var p, y;
      d.preventDefault();
      const l = (y = (p = d.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      l && await this._postItemToChat(l);
    }), t.on("click", ".jarmu-unit-damage-button", async (d) => {
      var y;
      d.preventDefault(), d.stopPropagation();
      const l = d.currentTarget, p = (((y = l == null ? void 0 : l.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      p && await this._rollUnitDamage(p);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (d) => {
      var a, i;
      const l = d.currentTarget, p = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!p) return;
      n._draggingUnitId = p;
      const y = (i = d.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", p), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(l, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (d) => {
      var a, i, o, r;
      const l = (i = (a = d.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : i.itemId, p = n._draggingUnitId;
      if (!p || !l || p === l) return;
      d.preventDefault();
      const y = (o = d.originalEvent) == null ? void 0 : o.dataTransfer;
      y && (y.dropEffect = "move"), (r = d.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (d) => {
      var l;
      (l = d.currentTarget) == null || l.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (d) => {
      var h, g, v, k;
      d.preventDefault(), (h = d.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
      const l = (v = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let p = n._draggingUnitId;
      const y = (k = d.originalEvent) == null ? void 0 : k.dataTransfer;
      if (!p && y && (p = y.getData("text/plain")), n._draggingUnitId = null, !p || !l || p === l) return;
      const i = this.actor.items.contents.filter((w) => w.type === "Jarmuegyseg").sort((w, T) => {
        const _ = typeof w.sort == "number" ? w.sort : 0, O = typeof T.sort == "number" ? T.sort : 0;
        return _ - O;
      }).map((w) => w.id), o = i.indexOf(p), r = i.indexOf(l);
      if (o === -1 || r === -1) return;
      i.splice(o, 1), i.splice(r, 0, p);
      const u = i.map((w, T) => ({
        _id: w,
        sort: (T + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", u);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (d) => {
      var a, i, o, r, u, h, g, v, k, w;
      d.preventDefault();
      const l = (r = (o = (i = (a = d.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : i.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : o.dataset) == null ? void 0 : r.abilityRef, p = (v = (g = (h = (u = d.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".jarmu-unit-ability-pill")) == null ? void 0 : g.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (l)
        try {
          y = await fromUuid(l);
        } catch {
          y = null;
        }
      !y && p && (y = ((k = game.items) == null ? void 0 : k.get(p)) ?? null), (w = y == null ? void 0 : y.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (d) => {
      var i, o, r, u;
      d.preventDefault();
      const l = (o = (i = d.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, ".jarmu-unit-ability-pill"), p = (r = l == null ? void 0 : l.dataset) == null ? void 0 : r.abilityRef, y = (u = l == null ? void 0 : l.dataset) == null ? void 0 : u.abilityId, a = p || y;
      a && await this._postUnitAbilityToChat(a);
    });
    const f = (d) => {
      if (!d) return;
      const l = this._getFormDataForUpdate(d);
      Object.keys(l).length !== 0 && this.actor.update(l).catch((p) => console.warn("VoidJarmuSheet save failed", p));
    }, c = (d) => {
      var l, p, y;
      return d && (((p = (l = this.element) == null ? void 0 : l.contains) == null ? void 0 : p.call(l, d)) || this.id && ((y = d.closest) == null ? void 0 : y.call(d, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (d) => {
      var i;
      const l = d.target;
      if (!l || !l.form) return;
      const p = l.tagName;
      if (p !== "INPUT" && p !== "TEXTAREA" && p !== "SELECT") return;
      const y = l.form;
      if (!c(y)) return;
      const a = d.relatedTarget;
      a && (y.contains(a) || this.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (d) => {
      var r, u, h;
      const l = d.currentTarget, p = (r = l == null ? void 0 : l.dataset) == null ? void 0 : r.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (l.value ?? "").trim(), i = a === "" ? 0 : Number(a), o = (u = l.closest) == null ? void 0 : u.call(l, ".jarmu-unit-row");
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
    }), t.on("change", ".jarmu-unit-hit-input", async (d) => {
      var i;
      const l = d.currentTarget, p = (i = l == null ? void 0 : l.dataset) == null ? void 0 : i.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      if (!y || y.type !== "Jarmuegyseg") return;
      const a = (l.value ?? "").trim();
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
    var d, l, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((l = e.system) == null ? void 0 : l.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const a = Number(((p = e.system) == null ? void 0 : p.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var m, d, l, p, y, a, i, o, r;
    const e = this.actor;
    if (!e) return;
    const t = ((d = (m = e.items).get) == null ? void 0 : d.call(m, s)) ?? ((p = (l = e.items.contents) == null ? void 0 : l.find) == null ? void 0 : p.call(l, (u) => u.id === s));
    if (!t || t.type !== "Jarmuegyseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (r = (a = ui.notifications) == null ? void 0 : a.warn) == null || r.call(
        a,
        ((o = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : o.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
      );
      return;
    }
    const f = new Roll(n);
    await f.evaluate({ async: !0 });
    const c = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return f.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${t.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: c
    });
  }
  async _postUnitAbilityToChat(s) {
    var p, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((p = game.items) == null ? void 0 : p.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: l,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var d, l;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((d = e == null ? void 0 : e.data) == null ? void 0 : d.uuid) ?? (typeof e == "string" ? e : null);
    if (!t && typeof e == "object") {
      for (const p of Object.values(e))
        if (typeof p == "string" && p.includes(".") && p.startsWith("Item.")) {
          t = p;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"].includes(n.type)) return super._onDropItem(s, e);
    if (((l = n.parent) == null ? void 0 : l.id) === f.id) return;
    const m = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [m]);
  }
};
te(ye, "PARTS", foundry.utils.mergeObject(
  U(ye, ye, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), te(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ye, ye, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Ns = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ls = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Ls.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((As = (Fs = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.window) == null ? void 0 : As.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Et = ye;
var Es;
const tt = class tt extends Et {
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
    }, f = { Kicsi: -10, Közepes: 0, Nagy: 10 }, c = () => {
      var _, O, q, M, j, K, x;
      const l = ((_ = e.querySelector) == null ? void 0 : _.call(e, "form")) ?? e, p = (O = l.querySelector) == null ? void 0 : O.call(l, 'select[name="system.identity.assignment"]'), y = (q = l.querySelector) == null ? void 0 : q.call(l, 'select[name="system.identity.subAssignment"]'), a = (M = l.querySelector) == null ? void 0 : M.call(l, "input.bazis-threat-total"), i = (j = l.querySelector) == null ? void 0 : j.call(l, 'input[name="system.combat.threatBonus"]');
      if (!p || !a || !i) return;
      const o = p.value ?? "", r = (y == null ? void 0 : y.value) ?? "", u = t[o] ?? 0, h = n[r] ?? 0, g = (((x = (K = this.actor) == null ? void 0 : K.items) == null ? void 0 : x.contents) ?? []).filter((J) => J.type === "Jarmuegyseg").length, v = g >= 11 ? "Nagy" : g >= 6 ? "Közepes" : "Kicsi", k = f[v] ?? 0, w = Number(i.value ?? 0) || 0, T = u + h + k + w;
      a.value = T;
    };
    $(e).on("change input", 'select[name="system.identity.assignment"], select[name="system.identity.subAssignment"], input[name="system.combat.threatBonus"]', c);
  }
  async _prepareContext(s) {
    var t;
    const e = await super._prepareContext(s);
    if (((t = e == null ? void 0 : e.actor) == null ? void 0 : t.type) === "Bazis") {
      const n = e.system ?? this.actor.system ?? {}, f = n.identity ?? {}, c = n.combat ?? {}, m = f.assignment ?? "", d = f.subAssignment ?? "", l = {
        "Középső Rendszerek": -10,
        "Köztársasági Ágak": 10,
        "Peremvidék, vagy azon túl": 30
      }, p = {
        "Polgári Zóna": 10,
        "Ipari Zóna": 10,
        "Bánya Zóna": 10,
        "Katonai Zóna": -10,
        "Kutató Zóna": -10,
        "Elhagyott Zóna": 30,
        "Zónán kívüli terület": 30
      }, y = { Kicsi: -10, Közepes: 0, Nagy: 10 }, a = l[m] ?? 0, i = p[d] ?? 0, o = e.sizeForSelect ?? "Kicsi", r = y[o] ?? 0, u = Number(c.threatBonus ?? 0) || 0, h = a + i + r + u;
      e.system = foundry.utils.mergeObject(
        foundry.utils.duplicate(n),
        { combat: { ...c, threat: h, threatBonus: u } },
        { inplace: !1 }
      ), e.bazisThreatBase = a;
    }
    return e;
  }
};
te(tt, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(tt, tt, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Bazis"],
    width: 1e3,
    height: 600,
    form: foundry.utils.mergeObject(((Es = U(tt, tt, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !0 })
  },
  { inplace: !1 }
));
let Ut = tt;
const wi = [
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
var Ps;
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, o, r;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = wi, e;
  }
};
te(qe, "PARTS", foundry.utils.mergeObject(U(qe, qe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), te(qe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(qe, qe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ps = U(qe, qe, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = qe;
var $s;
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, o, r;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
te(Ne, "PARTS", foundry.utils.mergeObject(U(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), te(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject((($s = U(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Ht = Ne;
var xs;
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, o, r;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
te(Le, "PARTS", foundry.utils.mergeObject(U(Le, Le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), te(Le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Le, Le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((xs = U(Le, Le, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 })
}));
let Gt = Le;
var Rs;
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, o, r;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
      f(m) && n(m);
    }, e._votvInput = (c) => {
      var l;
      const m = c.target;
      if ((m == null ? void 0 : m.name) === "name") return;
      const d = (m == null ? void 0 : m.form) ?? ((l = m == null ? void 0 : m.closest) == null ? void 0 : l.call(m, "form"));
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
te(Fe, "PARTS", foundry.utils.mergeObject(U(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), te(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Rs = U(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.form) ?? {}, { submitOnChange: !0 })
}));
let Vt = Fe;
var Ms;
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, o, r;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
te(Ae, "PARTS", foundry.utils.mergeObject(U(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), te(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ms = U(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ms.form) ?? {}, { submitOnChange: !1 })
}));
let Wt = Ae;
var js;
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
    e._votvProfileImgClick = (c) => {
      var l, p, y, a, i, o, r;
      if (!e.isEditable || !((p = (l = c.target) == null ? void 0 : l.closest) != null && p.call(l, ".profile")) && ((a = (y = c.target) == null ? void 0 : y.getAttribute) == null ? void 0 : a.call(y, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const m = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (u) => {
          u && e.document.update({ img: u });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (c) => {
      if (!c) return;
      const m = e._getFormDataForUpdate(c);
      Object.keys(m).length !== 0 && e.document.update(m).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, f = (c) => {
      var m, d, l;
      return c && (((d = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : d.call(m, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, p;
      const m = ((d = c.target) == null ? void 0 : d.form) ?? ((p = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : p.call(l, "form"));
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
te(Ee, "PARTS", foundry.utils.mergeObject(U(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), te(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((js = U(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : js.form) ?? {}, { submitOnChange: !1 })
}));
let Jt = Ee;
var zs, Ks;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var d, l, p, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (l = this.document) == null ? void 0 : l.name,
      "id=",
      (p = this.document) == null ? void 0 : p.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, o, r;
      try {
        const u = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && u.includes(this.element) || this.id && ((o = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(this.id)}`)))) return;
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
          const T = w.uuid ?? w.id, _ = this.document.system ?? {}, O = Array.isArray((r = _.abilities) == null ? void 0 : r.items) ? _.abilities.items.slice() : [];
          O.push(T), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (u) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", u);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var u, h, g, v, k, w;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, o = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId;
      let r = null;
      if (i)
        try {
          r = await fromUuid(i);
        } catch {
          r = null;
        }
      !r && o && (r = ((k = game.items) == null ? void 0 : k.get(o)) ?? null), (w = r == null ? void 0 : r.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var u, h, g, v;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, o = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemId, r = i || o;
      r && await this._postAbilityToChat(r);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var g, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (g = a.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const o = this.document.system ?? {}, r = Array.isArray((k = o.abilities) == null ? void 0 : k.items) ? o.abilities.items.slice() : [], u = r.indexOf(i), h = u >= 0 ? [...r.slice(0, u), ...r.slice(u + 1)] : r;
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
    const c = (a) => {
      if (!a) return;
      const i = e._getFormDataForUpdate(a);
      Object.keys(i).length !== 0 && e.document.update(i).catch((o) => console.warn("VoidJarmuEgysegSheet save failed", o));
    }, m = (a) => {
      var i, o, r;
      return a && (((o = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || e.id && ((r = a.closest) == null ? void 0 : r.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var o, r, u;
      const i = ((o = a.target) == null ? void 0 : o.form) ?? ((u = (r = a.target) == null ? void 0 : r.closest) == null ? void 0 : u.call(r, "form"));
      m(i) && c(i);
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
      f.map(async (d) => {
        var l;
        if (!d) return null;
        try {
          const p = await fromUuid(d);
          if (p && (p.type === "Kepesseg" || p.type === "ability")) return p;
        } catch {
          const p = (l = game.items) == null ? void 0 : l.get(d);
          if (p && (p.type === "Kepesseg" || p.type === "ability")) return p;
        }
        return null;
      })
    )).map((d, l) => ({ doc: d, ref: f[l] })).filter((d) => !!d.doc && !!d.ref).map(({ doc: d, ref: l }) => {
      var i, o;
      const p = (((i = d.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((o = d.system) == null ? void 0 : o.kp) ?? 0) || 0, a = p === "species";
      return {
        id: d.id,
        ref: l,
        name: d.name,
        img: d.img,
        kind: p,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", m), e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var p, y, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((p = game.items) == null ? void 0 : p.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${m}
      ${d}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: l,
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
      const c = e.uuid ?? e.id, m = this.document.system ?? {}, d = Array.isArray((n = m.abilities) == null ? void 0 : n.items) ? m.abilities.items.slice() : [];
      return d.push(c), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", d), await this.document.update({ "system.abilities.items": d }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
te(Se, "PARTS", foundry.utils.mergeObject(U(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), te(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(Se, Se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((zs = U(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : zs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Ks = U(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Ks.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Zt = Se;
const Us = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function Bs(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, f, c, m;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = ei, CONFIG.Actor.dataModels.Npc = Pt, CONFIG.Actor.dataModels.Jarmu = ii, CONFIG.Actor.dataModels.Bazis = ri, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = gs, CONFIG.Item.dataModels.weapon = gs, CONFIG.Item.dataModels.Pancel = li, CONFIG.Item.dataModels.MikroChip = di, CONFIG.Item.dataModels.Kepesseg = vs, CONFIG.Item.dataModels.ability = vs, CONFIG.Item.dataModels.Targy = pi, CONFIG.Item.dataModels.Egyeb = yi, CONFIG.Item.dataModels.Jarmuegyseg = hi, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (f = CONFIG.Actor).typeLabels ?? (f.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", CONFIG.Actor.typeLabels.Bazis = "Bázis", (c = CONFIG.Combat).initiative ?? (c.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Tt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Et, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Ut, {
    types: ["Bazis"],
    makeDefault: !0,
    label: "VOTV.BazisSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Bt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Gt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Vt, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Wt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Jt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Zt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), Hooks.on("updateActor", (d, l, p, y) => {
    if ((d == null ? void 0 : d.type) !== "Karakter" || !(d != null && d.id)) return;
    const a = d.id;
    setTimeout(() => {
      var u, h, g, v;
      const i = (u = game.actors) == null ? void 0 : u.get(a);
      if (!i || i.type !== "Karakter") return;
      const o = Tt.getTotalSpeedRaw(i), r = (h = i.effects) == null ? void 0 : h.find((k) => k.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !r) {
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
      } else o > 0 && r && r.delete().then(() => {
        var w, T;
        const k = ((w = canvas.tokens) == null ? void 0 : w.placeables) ?? [];
        for (const _ of k)
          ((T = _ == null ? void 0 : _.document) == null ? void 0 : T.actorId) === a && typeof _.draw == "function" && _.draw();
      }).catch((k) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", k));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (d, l, p, y) => {
    var w, T, _, O, q, M, j, K, x, J, Q, Z, Y;
    const a = d == null ? void 0 : d.id;
    if (!a) return;
    if ((d.type === "Karakter" || d.type === "Npc") && ((w = l == null ? void 0 : l.system) != null && w.combat) && "initiativeResult" in l.system.combat) {
      const z = Number((_ = (T = d.system) == null ? void 0 : T.combat) == null ? void 0 : _.initiativeResult), W = Number.isFinite(z) ? z : 0, ce = game.combat;
      if (ce) {
        const ve = ((O = ce.combatants) == null ? void 0 : O.contents) ?? Array.from(ce.combatants ?? []);
        for (const D of ve)
          if (((q = D.actor) == null ? void 0 : q.id) === a || D.actorId === a) {
            ce.updateEmbeddedDocuments("Combatant", [{ _id: D.id, initiative: W }]).catch(() => {
            });
            break;
          }
      }
    }
    if (d.type === "Npc" && ((M = l == null ? void 0 : l.system) != null && M.identity) && "size" in l.system.identity) {
      const z = Bs((K = (j = d.system) == null ? void 0 : j.identity) == null ? void 0 : K.size);
      d.update({
        "prototypeToken.width": z,
        "prototypeToken.height": z
      }).catch((W) => console.warn("Vacuum of the Void | NPC token size update failed for", d.name, W));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), r = [], u = (x = game.actors) == null ? void 0 : x.get(a);
    u != null && u.apps && r.push(...Array.from(u.apps));
    const h = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const z of h) {
      if (((J = z.document) == null ? void 0 : J.id) !== a || ((Q = z.document) == null ? void 0 : Q.documentName) !== "Actor") continue;
      const W = (Z = z.constructor) == null ? void 0 : Z.name;
      W !== "VoidKarakterSheet" && W !== "VoidJarmuSheet" || r.includes(z) || r.push(z);
    }
    if (o && r.some((z) => {
      const W = (z == null ? void 0 : z.form) ?? (z == null ? void 0 : z.element);
      return W && W.contains(i);
    })) return;
    const v = (Y = game.votv) == null ? void 0 : Y._lastKarakterSheetBlurSave, k = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const z of r)
        !(z != null && z.rendered) || typeof z.render != "function" || z.id !== k && z.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (d, l, p, y) => {
    var r, u, h;
    const a = d == null ? void 0 : d.parent;
    if (!a || a.documentName !== "Actor" || a.type !== "Karakter" || d.type !== "Fegyver") return;
    const i = ((r = a.system) == null ? void 0 : r.weapons) ?? {}, o = {};
    for (const [g, v] of Object.entries(i)) {
      if (!g.startsWith("slot")) continue;
      const k = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !k || k !== d.id || (o[`system.weapons.${g}.name`] = d.name ?? "", o[`system.weapons.${g}.damage`] = ((u = d.system) == null ? void 0 : u.damage) ?? "", o[`system.weapons.${g}.bonus`] = ((h = d.system) == null ? void 0 : h.bonus) ?? "");
    }
    Object.keys(o).length && a.update(o);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, g, v, k, w, T, _, O, q, M, j, K, x, J, Q, Z, Y, z, W, ce, ve, D, R;
    const t = (g = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), c = (w = (k = f == null ? void 0 : f.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!c) return;
    const m = c.actorId ?? ((T = f == null ? void 0 : f.speaker) == null ? void 0 : T.actor) ?? "";
    if (!m) return;
    e.preventDefault(), e.stopPropagation();
    let d = ((_ = game.actors) == null ? void 0 : _.get(c.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(m));
    if (d || (d = ((M = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : M.flatMap((X) => {
      var oe;
      return ((oe = X.tokens) == null ? void 0 : oe.contents) ?? [];
    }).map((X) => X.actor).find((X) => X && (X.id === m || X.id === c.actorId))) ?? null), !d) return;
    const l = c.itemId ? ((K = (j = d.items) == null ? void 0 : j.get) == null ? void 0 : K.call(j, c.itemId)) ?? ((Q = (J = (x = d.items) == null ? void 0 : x.contents) == null ? void 0 : J.find) == null ? void 0 : Q.call(J, (V) => V.id === c.itemId)) : null;
    let p = (c.damageFormula ?? "").trim();
    if (p || (p = (((Z = l == null ? void 0 : l.system) == null ? void 0 : Z.damage) ?? "").trim()), !p && c.slotKey && (p = (((((Y = d.system) == null ? void 0 : Y.weapons) ?? {})[c.slotKey] ?? {}).damage ?? "").trim()), !p) {
      (ve = (z = ui.notifications) == null ? void 0 : z.warn) == null || ve.call(z, ((ce = (W = game.i18n) == null ? void 0 : W.localize) == null ? void 0 : ce.call(W, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(p);
    await y.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = c.targetName || "", o = c.hitLocationName || "", r = ((l == null ? void 0 : l.name) ?? (c.slotKey ? ((R = (((D = d.system) == null ? void 0 : D.weapons) ?? {})[c.slotKey]) == null ? void 0 : R.name) ?? "" : "")) || "Fegyver";
    let u = i ? `${r} – sebzés – ${i}` : `${r} – sebzés`;
    o && (u += ` (${o})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: d }),
      flavor: u,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var c, m, d, l, p, y;
      if (!((m = (c = e.target) == null ? void 0 : c.closest) != null && m.call(c, "#actors"))) return;
      const t = (l = (d = e.target) == null ? void 0 : d.closest) == null ? void 0 : l.call(d, "[data-document-id]"), n = (p = t == null ? void 0 : t.getAttribute) == null ? void 0 : p.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, c;
    const e = ((t = game.actors) == null ? void 0 : t.filter((m) => m.type === "Karakter")) ?? [];
    for (const m of e) {
      const d = Tt.getTotalSpeedRaw(m), l = (n = m.effects) == null ? void 0 : n.find((p) => p.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (d <= 0 && !l) {
        const p = ((c = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : c.img) ?? "";
        await m.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: p,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: m.uuid
        }]).catch(() => {
        });
      } else d > 0 && l && await l.delete().catch(() => {
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
        background: { src: Us },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, c = await n.create(f);
      c && console.log("Vacuum of the Void | Default scene created:", c.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var c, m, d, l, p, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((c = game.actors) == null ? void 0 : c.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, o = ((m = i == null ? void 0 : i.bar1) == null ? void 0 : m.attribute) ?? "", r = ((d = i == null ? void 0 : i.bar2) == null ? void 0 : d.attribute) ?? "";
        (o || r) && await a.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", a.name, i);
      }
    for (const a of game.scenes ?? []) {
      const i = ((l = a.tokens) == null ? void 0 : l.filter((o) => {
        var r;
        return ((r = o.actor) == null ? void 0 : r.type) === "Karakter";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(e);
        } catch (r) {
          console.warn("Vacuum of the Void | Token update failed for", o.name, r);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, f = ((p = game.actors) == null ? void 0 : p.filter((a) => a.type === "Npc")) ?? [];
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
        var r;
        return ((r = o.actor) == null ? void 0 : r.type) === "Npc";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(n);
        } catch (r) {
          console.warn("Vacuum of the Void | NPC token update failed for", o.name, r);
        }
    }
  })();
});
Hooks.on("preCreateToken", (S, s, e) => {
  var c, m, d, l, p, y;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, n = t ?? S.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (m = game.actors) == null ? void 0 : m.get(n) : null;
  if (f) {
    if (f.type === "Bazis")
      throw new Error(((l = (d = game.i18n) == null ? void 0 : d.localize) == null ? void 0 : l.call(d, "VOTV.BazisNoToken")) ?? "Bázis nem helyezhető tokenként a térképre.");
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
      const a = Bs((y = (p = f.system) == null ? void 0 : p.identity) == null ? void 0 : y.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: a,
        height: a
      });
    }
  }
});
Hooks.on("preCreateCombatant", (S, s, e) => {
  var f, c, m;
  const t = S.actorId ? (f = game.actors) == null ? void 0 : f.get(S.actorId) : null;
  if ((t == null ? void 0 : t.type) === "Bazis")
    throw new Error(((m = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : m.call(c, "VOTV.BazisNoCombat")) ?? "Bázis nem vehet részt harcban.");
  const n = S.initiative;
  (n == null || typeof n == "number" && isNaN(n)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const Ii = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Hs(S) {
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(Ii).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Hs(S);
});
function Gs() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], c = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const m of c)
      !m || S.has(m.id) || (S.add(m.id), typeof m.render == "function" && m.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(Gs, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && Hs(S), setTimeout(Gs, 0);
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
    const c = s[0] ?? s;
    c != null && c.classList && c.classList.add("votv-karakter-token-hud");
  }
});
Hooks.on("preCreateScene", (S, s) => {
  var e;
  (e = s == null ? void 0 : s.background) != null && e.src || S.updateSource({
    width: 3840,
    height: 2160,
    "background.src": Us,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var y, a, i, o;
  const t = ((y = S.flags) == null ? void 0 : y["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, c = t.weaponAttack, m = t.weapon, d = t.vsDefense, l = t.vsDefenseInfo;
  if (!n && !f && !c && !d) return;
  const p = (a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, ".dice-roll");
  if (p) {
    if (n && p.classList.add(`votv-${n}`), f) {
      const r = p.querySelector(".votv-crit-label");
      if (r)
        r.textContent = f;
      else {
        const u = p.querySelector(".dice-total"), h = (u == null ? void 0 : u.parentElement) ?? p, g = document.createElement("div");
        g.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, g.textContent = f, h.appendChild(g);
      }
    }
    if (c && m && (m.actorId || (i = S.speaker) != null && i.actor)) {
      const r = p.querySelector(".dice-total"), u = (r == null ? void 0 : r.parentElement) ?? p;
      if (!p.querySelector(".votv-weapon-outcome")) {
        const g = document.createElement("div");
        g.className = "votv-weapon-outcome";
        const v = !!m.isHit, k = m.targetName || "Célpont";
        g.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, u.appendChild(g);
      }
      if (m.isHit && !p.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = m.hitLocationRoll, w = m.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(m.actorId ?? ((o = S.speaker) == null ? void 0 : o.actor) ?? ""), v.dataset.itemId = String(m.itemId ?? ""), v.dataset.slotKey = String(m.slotKey ?? ""), v.dataset.targetName = String(m.targetName ?? ""), v.dataset.hitLocationName = String(m.hitLocationName ?? ""), v.dataset.messageId = String(S.id ?? ""), u.appendChild(v);
      }
    }
    if (!c && d && l) {
      const r = p.querySelector(".dice-total"), u = (r == null ? void 0 : r.parentElement) ?? p, h = !!l.isHit, g = l.targetName || "Célpont", v = l.hitLocationRoll, k = l.hitLocationName;
      let w = p.querySelector(".votv-defense-outcome");
      w || (w = document.createElement("div"), w.className = "votv-defense-outcome", u.appendChild(w)), w.textContent = h ? `Találat – ${g}` : `Nem talált – ${g}`;
      const T = p.querySelector(".votv-defense-hitloc");
      if (h && v != null && k) {
        let _ = T;
        _ || (_ = document.createElement("div"), _.className = "votv-defense-hitloc", u.appendChild(_)), _.textContent = `Találati Hely ${v} - ${k}`;
      } else T && T.remove();
    }
  }
});
export {
  Tt as V,
  zt as c
};
//# sourceMappingURL=vacuum-of-the-void-DAXqjMHw.mjs.map
