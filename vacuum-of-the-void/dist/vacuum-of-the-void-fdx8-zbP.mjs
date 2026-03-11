var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (S, s, e) => s in S ? Hs(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var se = (S, s, e) => Vs(S, typeof s != "symbol" ? s + "" : s, e);
var U = (S, s, e) => Gs(Bs(S), e, s);
const { HTMLField: Ws, NumberField: F, SchemaField: H, StringField: C, BooleanField: pe, ArrayField: It } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
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
        initiativeRanges: new It(
          new H({
            min: new F({ required: !1, integer: !0, initial: 0 }),
            max: new F({ required: !1, integer: !0, initial: 0 }),
            kp: new F({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
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
        armor: new It(
          new H({
            name: new C({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new C({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new C({ required: !1, blank: !0, initial: "" }),
            level: new C({ required: !1, blank: !0, initial: "" }),
            other: new C({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new It(
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
          items: new It(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new H({
          items: new It(
            new C({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new H({
        biography: new Ws({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Pt, SchemaField: Js } = foundry.data.fields;
class Ys extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Js({
        body: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Pt({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Xs, StringField: ms, NumberField: Qs } = foundry.data.fields;
class Zs extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Xs({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new ms({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new ms({ required: !1, blank: !0, initial: "" }),
        /** Jármű maximális raktárkapacitása. */
        storage: new Qs({
          required: !1,
          integer: !0,
          min: 0,
          initial: 0
        })
      })
    };
  }
}
const { BooleanField: ei, NumberField: hi, StringField: Ue } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new ei({ required: !1, initial: !1 }),
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
const { BooleanField: ti, StringField: Ft } = foundry.data.fields;
class si extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ti({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Ft({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Ft({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Ft({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Ft({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: $t, StringField: fs } = foundry.data.fields;
class ii extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      abilityType: new fs({
        required: !0,
        blank: !1,
        options: ["passive", "active"],
        initial: "passive"
      }),
      description: new fs({
        required: !1,
        blank: !0,
        initial: ""
      }),
      cost: new $t({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new $t({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new $t({ required: !1, integer: !0, min: 0, initial: 1 })
    };
  }
}
const { NumberField: ni, StringField: ys } = foundry.data.fields;
class gs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ys({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background", "module"],
        initial: "passive"
      }),
      description: new ys({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ni({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: hs } = foundry.data.fields;
class ai extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new hs({ required: !1, blank: !0, initial: "" }),
      quantity: new hs({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ri } = foundry.data.fields;
class oi extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ri({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: xt, StringField: rt, SchemaField: bs, ArrayField: ci } = foundry.data.fields;
class li extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new xt({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new bs({
        max: new xt({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new xt({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new bs({
        items: new ci(
          new rt({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new rt({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new rt({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new rt({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new rt({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new rt({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Rt(S) {
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
      const y = !n && o >= 0 && (r.number === 3 || r.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of h) {
        if (!v || v.discarded || v.hidden) continue;
        const k = Number(v.result ?? v);
        Number.isFinite(k) && y.push(k);
      }
    }
  };
  f(S.terms, 1);
  const c = s.filter((a) => a === 6).length, p = s.filter((a) => a === 1).length, d = e.filter((a) => a === 6).length, l = t.filter((a) => a === 6).length, m = c + d, g = p + l;
  return m > 0 && m === g ? { resultType: null, label: null } : m >= 3 ? { resultType: "critical", label: "Brutális Siker" } : m === 2 ? { resultType: "critical", label: "Kritikus Siker" } : g >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : g === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function di(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var vs, ks, ws, Is;
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
    var n, f, c, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = c.contains(u), y = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && y && (p.focus = {
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
    const l = this.element, m = this.form ?? this.element, g = p.scrollState, a = p.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var u, h;
      if (this._applyScrollState(l, g), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const y = ((u = m.querySelector) == null ? void 0 : u.call(m, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = m.querySelector) == null ? void 0 : h.call(m, `[name="${CSS.escape(a.name)}"]`) : null);
        y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA") && (y.focus({ preventScroll: !0 }), typeof y.selectionStart == "number" && (y.selectionStart = a.selectionStart ?? 0, y.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(l, g);
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
        var p;
        return c.type === "Pancel" && ((p = c.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const p = String(((f = c.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(p);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var p;
        return c.type === "Pancel" && ((p = c.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let e = 0;
    for (const c of s) {
      const p = String(((f = c.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), d = Number(p);
      Number.isFinite(d) && (e += d);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (c) => {
        var p;
        return c.type === "Pancel" && ((p = c.system) == null ? void 0 : p.equipped) === !0;
      }
    );
    let t = 0;
    for (const c of e) {
      const p = String(((f = c.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), d = Number(p);
      Number.isFinite(d) && (t += d);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var m, g, a, i, o, r, u, h, y;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((g = (m = e.hitLocations) == null ? void 0 : m.legs) == null ? void 0 : g.value) ?? 0, n = ((a = e.currentHealth) == null ? void 0 : a.legs) ?? 0, f = ee._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const c = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let p;
    f === 1 ? p = -6 : f === 2 ? p = -3 : p = c, p += ee._getTotalArmorSpeedPenaltyStatic(s);
    const d = Number(((u = (r = s.system) == null ? void 0 : r.combat) == null ? void 0 : u.speed) ?? 0) || 0, l = Number(((y = (h = s.system) == null ? void 0 : h.combat) == null ? void 0 : y.speedBonus) ?? 0) || 0;
    return d + l + (Number.isFinite(p) ? p : 0);
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
    var g, a, i, o, r, u, h, y, v, k, w, D;
    const e = s ?? this.form ?? this.element;
    let t = (g = e == null ? void 0 : e.querySelector) == null ? void 0 : g.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((u = (r = this.actor) == null ? void 0 : r.system) == null ? void 0 : u.resources) ?? {}, f = ((y = (h = n.hitLocations) == null ? void 0 : h.legs) == null ? void 0 : y.value) ?? 0, c = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, p = ee._healthStatusFromRatio(c, f), d = Number(((D = (w = (k = this.actor) == null ? void 0 : k.system) == null ? void 0 : w.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let l;
    p === 0 ? l = 0 : p === 1 ? l = -6 : p === 2 ? l = -3 : l = d;
    const m = this._getTotalArmorSpeedPenalty();
    l += m, t.textContent = String(l);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var l, m, g, a, i, o, r, u, h, y, v, k, w;
    const e = s ?? this.form ?? this.element;
    let t = (l = e == null ? void 0 : e.querySelector) == null ? void 0 : l.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((a = (g = (m = this.actor) == null ? void 0 : m.system) == null ? void 0 : g.combat) == null ? void 0 : a.givenProtection) ?? 0) || 0, f = (r = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && r.call(o, "lookaround") ? 1 : 0, c = (y = (h = (u = this.actor) == null ? void 0 : u.statuses) == null ? void 0 : h.has) != null && y.call(h, "halfcover") ? 3 : 0, p = (w = (k = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : k.has) != null && w.call(k, "threequarteredcover") ? 6 : 0, d = n + this._getTotalArmorProtectionBonus() + f + c + p;
    t.textContent = String(d);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (g) => {
      var a;
      return ((a = e == null ? void 0 : e.querySelector) == null ? void 0 : a.call(e, g)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${g}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), c = t('input[name="system.combat.defense"]'), p = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const d = Number(c == null ? void 0 : c.value) || 0, l = Number(p == null ? void 0 : p.value) || 0, m = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(d + l + m);
  }
  _writeTotalSpeed(s = null) {
    var r, u, h, y, v, k, w, D;
    const e = s ?? this.form ?? this.element, t = (_) => {
      var O;
      return ((O = e == null ? void 0 : e.querySelector) == null ? void 0 : O.call(e, _)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${_}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), c = t('input[name="system.combat.speed"]'), p = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((h = (u = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : u.has) != null && h.call(u, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const d = ((v = (y = this.actor) == null ? void 0 : y.system) == null ? void 0 : v.resources) ?? {}, l = ((w = (k = d.hitLocations) == null ? void 0 : k.legs) == null ? void 0 : w.value) ?? 0, m = ((D = d.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (ee._healthStatusFromRatio(m, l) === 0) {
      n.textContent = "0";
      return;
    }
    const a = Number(c == null ? void 0 : c.value) || 0, i = Number(p == null ? void 0 : p.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(a + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var c, p, d, l;
    const e = ee.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((c = this.actor.system) == null ? void 0 : c.resources) ?? {}, n = ((d = (p = t.hitLocations) == null ? void 0 : p[e]) == null ? void 0 : d.value) ?? 0, f = ((l = t.currentHealth) == null ? void 0 : l[e]) ?? 0;
    return ee._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var p, d, l, m;
    const t = ee.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((p = s == null ? void 0 : s.system) == null ? void 0 : p.resources) ?? {}, f = ((l = (d = n.hitLocations) == null ? void 0 : d[t]) == null ? void 0 : l.value) ?? 0, c = ((m = n.currentHealth) == null ? void 0 : m[t]) ?? 0;
    return ee._healthStatusFromRatio(c, f);
  }
  async _prepareContext(s) {
    var ct, lt, ut, dt, mt, pt, ft, yt, gt, We, ht, bt, Je, I, E, P, G, ke, ne, Ce, Te, we, $e, Ye, Xe, Ct, qt, Nt, Lt, vt, nt, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, as, rs, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((ut = (lt = (ct = this.actor.system) == null ? void 0 : ct.resources) == null ? void 0 : lt.stress) == null ? void 0 : ut.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, c = n.currentHealth ?? {}, p = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of p) {
      const L = ((dt = f[b]) == null ? void 0 : dt.value) ?? 0, N = c[b] ?? 0;
      e.computedHealthStatus[b] = ee._healthStatusFromRatio(N, L);
    }
    const d = (Number(c.head) || 0) === 0, m = ["torso", "arms", "legs"].filter((b) => (Number(c[b]) || 0) === 0).length;
    e.showDeathSkull = d || m >= 2;
    const g = e.computedHealthStatus.legs ?? 3, a = Number(((pt = (mt = this.actor.system) == null ? void 0 : mt.combat) == null ? void 0 : pt.givenSpeed) ?? 0) || 0;
    let i;
    g === 0 ? i = 0 : g === 1 ? i = -6 : g === 2 ? i = -3 : i = a;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const r = Number(((yt = (ft = this.actor.system) == null ? void 0 : ft.combat) == null ? void 0 : yt.givenProtection) ?? 0) || 0, u = (ht = (We = (gt = this.actor) == null ? void 0 : gt.statuses) == null ? void 0 : We.has) != null && ht.call(We, "lookaround") ? 1 : 0, h = (I = (Je = (bt = this.actor) == null ? void 0 : bt.statuses) == null ? void 0 : Je.has) != null && I.call(Je, "halfcover") ? 3 : 0, y = (G = (P = (E = this.actor) == null ? void 0 : E.statuses) == null ? void 0 : P.has) != null && G.call(P, "threequarteredcover") ? 6 : 0, v = r + this._getTotalArmorProtectionBonus() + u + h + y;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const k = ((ke = e.system) == null ? void 0 : ke.combat) ?? {};
    e.totalDefense = (Number(k.defense) || 0) + (Number(k.defenseBonus) || 0) + (Number(k.givenProtection) || 0);
    const w = Number(k.givenSpeed);
    let D = (Number(k.speed) || 0) + (Number(k.speedBonus) || 0) + (Number.isFinite(w) ? w : 0);
    g === 0 && (D = 0), (Te = (Ce = (ne = this.actor) == null ? void 0 : ne.statuses) == null ? void 0 : Ce.has) != null && Te.call(Ce, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: ($e = (we = e.system) == null ? void 0 : we.combat) == null ? void 0 : $e.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const _ = ee.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, L] of Object.entries(_)) {
      const N = e.computedHealthStatus[L];
      e.skillHealthStatus[b] = N, e.skillDisabled[b] = N === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const O = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (O.slotOrder ?? "").trim(), K = j ? j.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], B = (Ye = this.actor.system.gear) == null ? void 0 : Ye.microchips, R = B && typeof B == "object" && !Array.isArray(B) ? B : {}, Y = (((Xe = R.slot1) == null ? void 0 : Xe.itemId) ?? "").trim(), Z = (((Ct = R.slot2) == null ? void 0 : Ct.itemId) ?? "").trim(), J = (((qt = R.slot3) == null ? void 0 : qt.itemId) ?? "").trim(), M = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, L) => {
      const N = typeof b.sort == "number" ? b.sort : 0, A = typeof L.sort == "number" ? L.sort : 0;
      return N - A;
    }).map((b) => {
      var xe, Ze, et, Ke, ze, kt;
      const L = b.type === "Fegyver", N = b.type === "MikroChip";
      let A = 0, z = "", de = null;
      for (let at = 0; at < K.length; at++) {
        const wt = K[at];
        if ((((xe = O[wt]) == null ? void 0 : xe.itemId) ?? "") === b.id) {
          A = at + 1, z = ((Ze = O[wt]) == null ? void 0 : Ze.bonus) ?? "", de = wt;
          break;
        }
      }
      let re = null;
      N && (Y === b.id ? re = "slot1" : Z === b.id ? re = "slot2" : J === b.id && (re = "slot3"));
      const Qe = L && ((et = b.system) != null && et.damage) ? b.system.damage : "", Ie = L && typeof ((Ke = b.system) == null ? void 0 : Ke.range) == "string" ? (b.system.range || "").trim() : "", De = de ? Number((ze = O[de]) == null ? void 0 : ze.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: L,
        slotAssignment: A,
        slotBonus: z,
        slotKey: de,
        microchipSlotKey: re,
        isEquipped: !!(de || re),
        damage: Qe,
        rangeStr: Ie,
        slotBonusNum: De,
        quantity: Number(((kt = b.system) == null ? void 0 : kt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = M;
    const W = (((Nt = this.actor.items) == null ? void 0 : Nt.contents) ?? []).filter((b) => b.type === "Fegyver"), ce = W.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = ce;
    const ve = "— Nincs fegyver —", T = K.filter((b) => {
      const N = ((O[b] ?? {}).itemId ?? "").trim();
      return N ? !!W.find((z) => z.id === N) : !1;
    });
    e.weaponSlots = T.map((b, L) => {
      const N = O[b] ?? {}, A = (N.itemId ?? "").trim(), z = ce.find((De) => De.id === A), de = W.find((De) => De.id === A), re = (de == null ? void 0 : de.system) ?? {}, Qe = re.size === "thrown", Ie = (typeof re.range == "string" ? (re.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: A,
        slotNum: L + 1,
        displayName: (z == null ? void 0 : z.name) || N.name || ve,
        img: (z == null ? void 0 : z.img) || "",
        bonus: Number(N.bonus) || 0,
        damage: N.damage ?? "",
        isThrown: Qe,
        rangeStr: Ie
      };
    });
    const x = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, V = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = W.map((b) => {
      var ls, us, ds;
      const L = b.id;
      let N = null, A = {};
      for (const Et of K)
        if ((((ls = O[Et]) == null ? void 0 : ls.itemId) ?? "").trim() === L) {
          N = Et, A = O[Et] ?? {};
          break;
        }
      const z = !!N, de = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : z, re = (b == null ? void 0 : b.system) ?? {}, Qe = typeof re.range == "string" ? (re.range || "").trim() : "", Ie = re.type ?? "", De = (x[Ie] ?? Ie) || "—", xe = re.size ?? "", Ze = (V[xe] ?? xe) || "", et = [De, Ze].filter(Boolean).join(", ") || De || "—", Ke = Ie === "projectile" || xe === "thrown", ze = re.quantity, kt = ze != null ? String(ze).trim() : "1", at = String(A.bonus ?? "").trim(), wt = String(re.bonus ?? "").trim(), Us = at || wt || "0";
      return {
        slotKey: N ?? "",
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? ve,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: A.damage ?? re.damage ?? "",
        rangeStr: Qe || "—",
        typeLabel: De,
        typeAndSize: et,
        quantity: kt,
        quantityDisplay: Ke ? kt : "—",
        isProjectile: Ke,
        equipped: de,
        special: (re.special ?? "").trim() || "—"
      };
    });
    const Q = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = Q.map((b) => {
      var A, z;
      const L = (b == null ? void 0 : b.system) ?? {}, N = ((A = b.system) == null ? void 0 : A.equipped) !== void 0 && ((z = b.system) == null ? void 0 : z.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (L.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (L.speedPenalty ?? "").toString().trim() || "—",
        level: di((L.level ?? "").toString().trim()),
        special: (L.special ?? L.other ?? "").toString().trim() || "—",
        equipped: N
      };
    });
    const oe = (((vt = this.actor.items) == null ? void 0 : vt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = oe.map((b) => {
      const L = (b == null ? void 0 : b.system) ?? {}, N = (L.description ?? "").trim(), A = N ? N.length > 60 ? N.slice(0, 57) + "…" : N : "—", z = L.quantity != null ? String(L.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: z,
        description: A
      };
    });
    const le = (((nt = this.actor.items) == null ? void 0 : nt.contents) ?? []).filter((b) => b.type === "Egyeb");
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
    const me = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), ie = me.map((b) => ({ id: b.id, name: b.name, img: b.img })), ge = "— Nincs Mikro-Chip —", ue = ["slot1", "slot2", "slot3"], Re = (b) => {
      var N, A, z;
      const L = [];
      return b !== 1 && L.push((((N = R.slot1) == null ? void 0 : N.itemId) ?? "").trim()), b !== 2 && L.push((((A = R.slot2) == null ? void 0 : A.itemId) ?? "").trim()), b !== 3 && L.push((((z = R.slot3) == null ? void 0 : z.itemId) ?? "").trim()), L.filter(Boolean);
    };
    e.microchipItemsSlot1 = ie.filter((b) => !Re(1).includes(b.id)), e.microchipItemsSlot2 = ie.filter((b) => !Re(2).includes(b.id)), e.microchipItemsSlot3 = ie.filter((b) => !Re(3).includes(b.id)), e.microchipSlots = ue.map((b) => {
      const L = R[b] ?? {}, N = (L.itemId ?? "").trim(), A = me.find((z) => z.id === N);
      return {
        slotKey: b,
        itemId: N,
        displayName: (A == null ? void 0 : A.name) || L.name || ge,
        img: (A == null ? void 0 : A.img) || "",
        active: L.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const L = `slot${b}`, N = R[L] ?? {}, A = (N.itemId ?? "").trim(), z = ie.find((de) => de.id === A);
      e[`microchip${b}ItemId`] = A, e[`microchip${b}DisplayName`] = (z == null ? void 0 : z.name) || N.name || ge, e[`microchip${b}Img`] = (z == null ? void 0 : z.img) || "";
    }), e.microchipsTable = me.map((b) => {
      var xe, Ze, et, Ke;
      const L = b.id;
      let N = null;
      for (const ze of ue)
        if ((((xe = R[ze]) == null ? void 0 : xe.itemId) ?? "").trim() === L) {
          N = ze;
          break;
        }
      const A = !!N, z = ((Ze = b == null ? void 0 : b.system) == null ? void 0 : Ze.abilityType) ?? "", de = z === "active" ? "Aktív" : z === "passive" ? "Passzív" : z || "—", re = z === "active", Qe = Number((et = b == null ? void 0 : b.system) == null ? void 0 : et.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, Ie = (((Ke = b == null ? void 0 : b.system) == null ? void 0 : Ke.description) ?? "").trim(), De = Ie ? Ie.length > 60 ? Ie.slice(0, 57) + "…" : Ie : "—";
      return {
        itemId: L,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: de,
        description: De,
        kp: Qe,
        isActive: re,
        slotKey: N ?? "",
        equipped: A
      };
    });
    const He = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !He;
    const tt = this.actor.system.abilities ?? {}, Tt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var L, N, A;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((L = b.system) == null ? void 0 : L.kind) ?? "passive",
        description: ((N = b.system) == null ? void 0 : N.description) ?? "",
        kp: Number(((A = b.system) == null ? void 0 : A.kp) ?? 0) || 0
      };
    }), Pe = new Map(Tt.map((b) => [b.id, b])), Be = "— Nincs képesség —", Me = (b) => {
      const L = tt[b] ?? {}, N = (L.itemId ?? "").trim(), A = N ? Pe.get(N) : null, z = (A == null ? void 0 : A.description) ?? "", de = (A == null ? void 0 : A.kp) ?? 0;
      return {
        itemId: N,
        displayName: (A == null ? void 0 : A.name) || L.name || Be,
        img: (A == null ? void 0 : A.img) || "",
        description: z,
        kp: de
      };
    };
    e.abilityFajiSlot = Me("faji"), e.abilityHatterSlot = Me("hatter");
    const st = (b) => {
      const L = tt[b];
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
    e.abilityPassiveList = Ge(st("passive")), e.abilityActiveList = Ge(st("active"));
    const te = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, he = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], ae = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, be = typeof ae == "number" ? ae : -1, it = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], _e = (as = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : as.initiativeRanges, Oe = Array.isArray(_e) ? _e.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], je = (Oe.length > 0 ? Oe : it).slice().sort((b, L) => b.min - L.min), Ve = Oe.map((b) => b.min), Dt = Ve.length ? Math.min(...Ve) : 0, _t = Ve.length ? Math.max(...Ve) : 0;
    e.initiativeRanges = Oe.map((b) => ({ ...b, isFirst: b.min === Dt, isLast: b.min === _t }));
    let ot = 0;
    if (typeof be == "number" && be >= 0 && je.length > 0) {
      const b = je[0], L = je[je.length - 1];
      let N = null;
      be <= b.max ? N = b : be >= L.min ? N = L : N = je.find((A) => be >= A.min && be <= A.max), N && (ot = N.kp);
    }
    e.kpDots = he.map((b, L) => {
      const N = L + 1, A = !!Number(te[b]), z = N <= ot;
      return { index: N, used: A, usable: z };
    });
    const Ot = !!((os = (rs = game.combat) == null ? void 0 : rs.combatants) != null && os.some((b) => {
      var L;
      return ((L = b.actor) == null ? void 0 : L.type) === "Karakter";
    }));
    return e.showHarcSection = Ot, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof ae == "number", e.initiativeResult = e.showInitiativeResult ? ae : "", e;
  }
  _attachFrameListeners(s) {
    var g, a;
    super._attachFrameListeners(s);
    const e = this.form ?? ((g = s == null ? void 0 : s.querySelector) == null ? void 0 : g.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const r = (i.currentTarget.dataset.slot ?? "").trim();
      if (!r) return;
      const { openRollSheetForWeapon: u } = await import("./roll-sheet-BOgyFG1E.mjs");
      u(this.actor, r);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var u, h, y;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let r = (o.dataset.itemId ?? "").trim();
      if (!r) {
        const v = (o.dataset.slot ?? "").trim();
        if (!v) return;
        r = (((((h = (u = this.actor) == null ? void 0 : u.system) == null ? void 0 : h.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      r && await this._rollWeaponDamage(r, ((y = o.dataset.slot) == null ? void 0 : y.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-BOgyFG1E.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var y, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, r = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(r) || r < 1 || r > 6) return;
      const u = `system.resources.kpDot${r}`, h = !!Number((v = (y = this.actor.system) == null ? void 0 : y.resources) == null ? void 0 : v[`kpDot${r}`]);
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
      var u, h, y;
      i.preventDefault(), i.stopPropagation();
      const o = ((y = (h = (u = foundry.applications) == null ? void 0 : u.apps) == null ? void 0 : h.FilePicker) == null ? void 0 : y.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var y;
      i.preventDefault();
      const o = i.currentTarget, r = o.dataset.skill, u = ((y = o.textContent) == null ? void 0 : y.trim()) || r, { openRollSheetForSkill: h } = await import("./roll-sheet-BOgyFG1E.mjs");
      h(this.actor, r, u);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var k, w, D, _, O, q, j;
      i.preventDefault();
      const r = i.currentTarget.closest(".karakter-weapon-slot"), u = r == null ? void 0 : r.dataset.slot;
      if (!u) return;
      const y = (((w = (((k = this.actor.system) == null ? void 0 : k.weapons) ?? {})[u]) == null ? void 0 : w.itemId) ?? "").trim();
      if (!y) return;
      const v = ((_ = (D = this.actor.items).get) == null ? void 0 : _.call(D, y)) ?? ((q = (O = this.actor.items.contents) == null ? void 0 : O.find) == null ? void 0 : q.call(O, (K) => K.id === y));
      (j = v == null ? void 0 : v.sheet) == null || j.render(!0);
    });
    const p = (i, o) => {
      var h;
      const r = i.dataset.itemId;
      if (!r) return;
      const u = this.actor.items.get(r);
      if (u) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const y = i.dataset.weaponSlot;
          y && this._rollWeapon(y);
          return;
        }
        (h = u.sheet) == null || h.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), p(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), p(i.currentTarget, i);
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
      const y = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = D.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === r;
        });
        if (_) {
          const O = D.filter((q) => q !== _);
          y["system.weapons.slotOrder"] = O.join(","), y[`system.weapons.${_}.itemId`] = "", y[`system.weapons.${_}.name`] = "", y[`system.weapons.${_}.damage`] = "", y[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(y).length && await u.update(y), await u.deleteEmbeddedDocuments("Item", [r]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var _, O;
      const o = i.currentTarget, r = (o.dataset.itemId ?? "").trim();
      if (!r) return;
      const u = this.actor.items.get(r);
      if (!u || u.type !== "Fegyver") return;
      const h = this.actor.system.weapons ?? {}, y = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = y ? y.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], w = k.find((q) => {
        var j;
        return (((j = h[q]) == null ? void 0 : j.itemId) ?? "").trim() === r;
      }) ?? null;
      if (o.checked) {
        if (w) return;
        let q = k.find((K) => {
          var B;
          return !((B = h[K]) != null && B.itemId);
        });
        const j = new Set(k);
        if (!q) {
          const K = v.find((B) => !j.has(B));
          if (!K) return;
          q = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: r,
          [`system.weapons.${q}.name`]: (u == null ? void 0 : u.name) ?? "",
          [`system.weapons.${q}.damage`]: ((_ = u == null ? void 0 : u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = u == null ? void 0 : u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (w) {
        const q = k.filter((j) => j !== w);
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
      const y = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((q = o.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", k = (o.dataset.itemImg ?? "").trim(), w = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-display-text");
      w && (w.textContent = v);
      let D = r == null ? void 0 : r.querySelector(".karakter-microchip-slot-thumb");
      k ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", u == null || u.insertBefore(D, w)), D.src = k, D.style.display = "") : D && D.remove(), r == null || r.classList.remove("karakter-microchip-slot-open");
      const _ = y ? this.actor.items.get(y) : null, O = {
        [`system.gear.microchips.${h}.itemId`]: y,
        [`system.gear.microchips.${h}.name`]: (_ == null ? void 0 : _.name) ?? ""
      };
      y && (O[`system.gear.microchips.${h}.active`] = !0), await this.actor.update(O);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, k;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const r = this.actor.items.get(o);
      if (!r || r.type !== "MikroChip") return;
      const u = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, y = ["slot1", "slot2", "slot3"].find((w) => {
        var D;
        return (((D = u[w]) == null ? void 0 : D.itemId) ?? "").trim() === o;
      });
      y && await this.actor.update({
        [`system.gear.microchips.${y}.itemId`]: "",
        [`system.gear.microchips.${y}.name`]: "",
        [`system.gear.microchips.${y}.active`]: !1
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
      const u = this.actor.system.abilities ?? {}, y = (Array.isArray((v = u[o]) == null ? void 0 : v.items) ? u[o].items.slice() : []).filter((k) => k !== r);
      await this.actor.update({ [`system.abilities.${o}.items`]: y });
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
        const y = this.form ?? this.element, v = y == null ? void 0 : y.querySelector(`.karakter-weapon-quantity-input[data-item-id="${r}"]`);
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
      const h = this.actor.system.weapons ?? {}, y = (h.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], k = y ? y.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], w = k.find((q) => {
        var j;
        return (((j = h[q]) == null ? void 0 : j.itemId) ?? "").trim() === r;
      }) ?? null;
      if (o.checked) {
        if (w) return;
        let q = k.find((K) => {
          var B;
          return !((B = h[K]) != null && B.itemId);
        });
        const j = new Set(k);
        if (!q) {
          const K = v.find((B) => !j.has(B));
          if (!K) return;
          q = K, k.push(K);
        }
        await this.actor.update({
          "system.weapons.slotOrder": k.join(","),
          [`system.weapons.${q}.itemId`]: r,
          [`system.weapons.${q}.name`]: u.name ?? "",
          [`system.weapons.${q}.damage`]: ((_ = u.system) == null ? void 0 : _.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((O = u.system) == null ? void 0 : O.bonus) ?? ""
        }), await u.update({ "system.equipped": !0 });
      } else if (w) {
        const q = k.filter((j) => j !== w);
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
      const u = this.actor, h = u.items.get(r), y = {};
      if ((h == null ? void 0 : h.type) === "Fegyver") {
        const v = u.system.weapons ?? {}, k = (v.slotOrder ?? "").trim(), w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = k ? k.split(/\s*,\s*/).filter((O) => w.includes(O)) : [], _ = D.find((O) => {
          var q;
          return (((q = v[O]) == null ? void 0 : q.itemId) ?? "").trim() === r;
        });
        if (_) {
          const O = D.filter((q) => q !== _);
          y["system.weapons.slotOrder"] = O.join(","), y[`system.weapons.${_}.itemId`] = "", y[`system.weapons.${_}.name`] = "", y[`system.weapons.${_}.damage`] = "", y[`system.weapons.${_}.bonus`] = "";
        }
      }
      Object.keys(y).length && await u.update(y), await u.deleteEmbeddedDocuments("Item", [r]);
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
        const y = this.form ?? this.element, v = y == null ? void 0 : y.querySelector(`.karakter-item-quantity-input[data-item-id="${r}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const d = this, l = (i) => {
      var u, h, y, v;
      if (!i) return;
      const o = d._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const r = ((h = (u = o.system) == null ? void 0 : u.resources) == null ? void 0 : h.currentHealth) != null || ((v = (y = o.system) == null ? void 0 : y.resources) == null ? void 0 : v.hitLocations) != null;
      d.actor.update(o).then(() => {
        r && setTimeout(() => d.render(!0), 260);
      }).catch((k) => console.warn("VoidKarakterSheet save failed", k));
    }, m = (i) => {
      var o, r, u;
      return i && (((r = (o = d.element) == null ? void 0 : o.contains) == null ? void 0 : r.call(o, i)) || d.id && ((u = i.closest) == null ? void 0 : u.call(i, `#${CSS.escape(d.id)}`)));
    };
    d._votvBlur = (i) => {
      var y;
      const o = i.target;
      if (!o || !o.form) return;
      const r = o.tagName;
      if (r !== "INPUT" && r !== "TEXTAREA" && r !== "SELECT") return;
      const u = o.form;
      if (!m(u)) return;
      const h = i.relatedTarget;
      h && (u.contains(h) || d.id && ((y = h.closest) != null && y.call(h, `#${CSS.escape(d.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: d.id, at: Date.now() }), l(u));
    }, document.body.addEventListener("blur", d._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var p, d, l;
    const e = {};
    for (const m of s.elements) {
      if (!m.name || m.disabled || m.type === "radio" && !m.checked || m.name.startsWith("system.resources.healthStatus.")) continue;
      let g;
      m.type === "checkbox" ? g = m.checked : m.type === "number" ? g = m.value === "" ? 0 : Number(m.value) : g = m.value ?? "", foundry.utils.setProperty(e, m.name, g);
    }
    const t = foundry.utils.mergeObject(
      ((p = this.actor.system) == null ? void 0 : p.resources) ?? {},
      ((d = foundry.utils.expandObject(e).system) == null ? void 0 : d.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, c = ["head", "torso", "arms", "legs"];
    for (const m of c) {
      const g = ((l = n[m]) == null ? void 0 : l.value) ?? 0, a = f[m] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${m}`, ee._healthStatusFromRatio(a, g));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, c, p, d, l, m, g, a, i, o, r, u;
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!h && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            h = y;
            break;
          }
      }
      if (h) {
        const y = await fromUuid(h);
        if (y && y.documentName === "Item" && (y.type === "Kepesseg" || y.type === "ability")) {
          let v = y.id;
          if (((n = y.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const O = foundry.utils.mergeObject(y.toObject(), { type: "Kepesseg" });
            v = ((f = (await this.actor.createEmbeddedDocuments("Item", [O]))[0]) == null ? void 0 : f.id) ?? v;
          }
          const k = (((c = y.system) == null ? void 0 : c.kind) ?? "passive").toString();
          if (k === "module") {
            (d = (p = ui.notifications) == null ? void 0 : p.warn) == null || d.call(p, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
            return;
          }
          const w = this.actor.system.abilities ?? {};
          if (k === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": v,
              "system.abilities.faji.name": y.name
            });
            return;
          }
          if (k === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": v,
              "system.abilities.hatter.name": y.name
            });
            return;
          }
          const D = k === "active" ? "active" : "passive", _ = Array.isArray((l = w[D]) == null ? void 0 : l.items) ? w[D].items.slice() : Array.isArray(w[D]) ? w[D].slice() : [];
          _.includes(v) || _.push(v), await this.actor.update({ [`system.abilities.${D}.items`]: _ });
          return;
        }
      }
    }
    if (e) {
      let h = e.uuid ?? e.documentUuid ?? ((m = e.data) == null ? void 0 : m.uuid) ?? (typeof e == "string" ? e : null);
      if (!h && typeof e == "object") {
        for (const y of Object.values(e))
          if (typeof y == "string" && y.includes(".") && y.startsWith("Item.")) {
            h = y;
            break;
          }
      }
      if (h) {
        const y = await fromUuid(h);
        if (y && y.documentName === "Item" && y.type === "Fegyver") {
          const v = this.actor, k = ((g = y.parent) == null ? void 0 : g.id) !== v.id;
          let w = y.id;
          if (k) {
            const D = foundry.utils.mergeObject(y.toObject(), { system: { ...y.toObject().system ?? {}, equipped: !1 } });
            w = ((a = (await v.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : a.id) ?? w;
          }
          if (k) {
            const D = ((i = v.system) == null ? void 0 : i.weapons) ?? {}, _ = (D.slotOrder ?? "").trim(), O = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], q = _ ? _.split(/\s*,\s*/).filter((K) => O.includes(K)) : [], j = q.filter((K) => {
              var B;
              return (((B = D[K]) == null ? void 0 : B.itemId) ?? "").trim() === w;
            });
            if (j.length > 0) {
              const B = {
                "system.weapons.slotOrder": q.filter((R) => !j.includes(R)).join(",")
              };
              for (const R of j)
                B[`system.weapons.${R}.itemId`] = "", B[`system.weapons.${R}.name`] = "", B[`system.weapons.${R}.damage`] = "", B[`system.weapons.${R}.bonus`] = "";
              await v.update(B);
            }
          }
          return;
        }
        if (y && y.documentName === "Item" && y.type === "Pancel") {
          const v = this.actor;
          if (((o = y.parent) == null ? void 0 : o.id) !== v.id) {
            const k = foundry.utils.mergeObject(y.toObject(), { system: { ...y.toObject().system ?? {}, equipped: !1 } });
            await v.createEmbeddedDocuments("Item", [k]);
          }
          return;
        }
        if (y && y.documentName === "Item" && y.type === "MikroChip") {
          const v = this.actor;
          ((r = y.parent) == null ? void 0 : r.id) !== v.id && await v.createEmbeddedDocuments("Item", [y.toObject()]);
          return;
        }
        if (y && y.documentName === "Item" && (y.type === "Targy" || y.type === "Egyeb")) {
          const v = this.actor;
          ((u = y.parent) == null ? void 0 : u.id) !== v.id && await v.createEmbeddedDocuments("Item", [y.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, c, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var p, d, l, m, g, a;
    s.preventDefault(), s.stopPropagation(), (p = s.currentTarget) == null || p.classList.remove("karakter-weapon-slot-drag-over");
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
    if (((m = f.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(f.toObject(), { system: { ...f.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const c = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: c,
      [`system.weapons.${e}.name`]: f.name,
      [`system.weapons.${e}.damage`]: ((g = f.system) == null ? void 0 : g.damage) ?? "",
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
    var l, m;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((m = s.dataTransfer) == null ? void 0 : m.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((g, a) => {
      const i = typeof g.sort == "number" ? g.sort : 0, o = typeof a.sort == "number" ? a.sort : 0;
      return i - o;
    }).map((g) => g.id), c = f.indexOf(t), p = f.indexOf(e);
    if (c === -1 || p === -1) return;
    f.splice(c, 1), f.splice(p, 0, t);
    const d = f.map((g, a) => ({
      _id: g,
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
    var d, l, m;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const g = ((l = e.system) == null ? void 0 : l.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const a = Number(((m = e.system) == null ? void 0 : m.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var m, g, a;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((m = e.system) == null ? void 0 : m.kind) ?? "passive", n = Number(((g = e.system) == null ? void 0 : g.kp) ?? 0) || 0, f = (((a = e.system) == null ? void 0 : a.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${p}
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
    var c, p, d;
    s.preventDefault(), (c = s.currentTarget) == null || c.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((p = n.parent) == null ? void 0 : p.id) !== this.actor.id) {
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
    var d, l, m, g;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((l = n.parent) == null ? void 0 : l.id) !== this.actor.id) {
      const a = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((m = (await this.actor.createEmbeddedDocuments("Item", [a]))[0]) == null ? void 0 : m.id) ?? f;
    }
    const c = this.actor.system.abilities ?? {}, p = Array.isArray((g = c[e]) == null ? void 0 : g.items) ? c[e].items.slice() : Array.isArray(c[e]) ? c[e].slice() : [];
    p.includes(f) || p.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: p });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, c, p;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((c = s.dataTransfer) == null ? void 0 : c.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (p = s.currentTarget) == null || p.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var p, d, l, m, g;
    s.preventDefault(), (p = s.currentTarget) == null || p.classList.remove("karakter-microchip-slot-drag-over");
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
    ((m = f.parent) == null ? void 0 : m.id) !== this.actor.id && (c = ((g = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : g.id) ?? c), await this.actor.update({
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
    const { resultType: m, label: g } = Rt(l), a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: m, critLabel: g } },
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
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, f = this.actor.items.filter((D) => D.type === "Fegyver");
    let c = null;
    t.itemId && (c = f.find((D) => D.id === t.itemId) ?? null);
    const p = c && c.name || t.name || `Fegyver (${s})`, d = Number(t.bonus || 0) || 0, l = ((k = c == null ? void 0 : c.system) == null ? void 0 : k.type) || "kinetic", m = (((w = c == null ? void 0 : c.system) == null ? void 0 : w.skillKey) ?? "").trim(), g = m && n[m] !== void 0 ? m : l === "explosive" ? "grenadeUse" : "firearms", a = Number(n[g] || 0) || 0, i = d + a, r = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, u = new Roll(r);
    await u.evaluate({ async: !0 });
    const { resultType: h, label: y } = Rt(u), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return u.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${p} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: y } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, l, m, g, a, i, o, r, u, h;
    const t = this.actor;
    if (!t) return;
    let n = ((l = (d = t.items).get) == null ? void 0 : l.call(d, s)) ?? ((g = (m = t.items.contents) == null ? void 0 : m.find) == null ? void 0 : g.call(m, (y) => y.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((u = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : u.call(r, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(f);
    await c.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
};
se(ee, "PARTS", foundry.utils.mergeObject(
  U(ee, ee, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), se(ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ee, ee, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = U(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = U(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = U(ee, ee, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
se(ee, "BODY_PART_BY_SKILL", {
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
let St = ee;
function mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ss, Ts, Ds, _s;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, c, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    const c = await super.render(s, e), p = this.element, d = this.form ?? this.element, l = f.scrollState, m = f.focus, g = typeof (l == null ? void 0 : l.formScrollTop) == "number" || typeof (l == null ? void 0 : l.windowScrollTop) == "number", a = () => {
      var i, o;
      if (this._applyScrollState(p, l), (m == null ? void 0 : m.name) != null || (m == null ? void 0 : m.id) != null) {
        const r = ((i = d.querySelector) == null ? void 0 : i.call(d, m.id ? `#${CSS.escape(m.id)}` : null)) ?? (m.name ? (o = d.querySelector) == null ? void 0 : o.call(d, `[name="${CSS.escape(m.name)}"]`) : null);
        r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && (r.focus({ preventScroll: !0 }), typeof r.selectionStart == "number" && (r.selectionStart = m.selectionStart ?? 0, r.selectionEnd = m.selectionEnd ?? m.selectionStart ?? 0));
      }
      this._applyScrollState(p, l);
    };
    return (g || m) && (requestAnimationFrame(a), setTimeout(a, 0), setTimeout(a, 50), setTimeout(a, 150), setTimeout(a, 300), setTimeout(a, 450)), c;
  }
  async _prepareContext(s) {
    var Me, st, Ge, te, he, ae, be, it, _e, Oe, At, je, Ve, Dt, _t, ot, Ot, ct, lt, ut, dt, mt, pt, ft, yt, gt, We, ht, bt, Je;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Me = this.actor) == null ? void 0 : Me.system), e.showDeathSkull = !1, e.sizeForSelect = (((Ge = (st = e.system) == null ? void 0 : st.identity) == null ? void 0 : Ge.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((te = e.system) == null ? void 0 : te.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, c = (ae = (he = t == null ? void 0 : t.statuses) == null ? void 0 : he.has) != null && ae.call(he, "lookaround") ? 1 : 0, p = (it = (be = t == null ? void 0 : t.statuses) == null ? void 0 : be.has) != null && it.call(be, "halfcover") ? 3 : 0, d = (Oe = (_e = t == null ? void 0 : t.statuses) == null ? void 0 : _e.has) != null && Oe.call(_e, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + c + p + d;
    const l = ((At = t == null ? void 0 : t.items) == null ? void 0 : At.contents) ?? [], m = ((je = t == null ? void 0 : t.system) == null ? void 0 : je.weapons) ?? {}, g = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], a = (m.slotOrder ?? "").trim(), i = a ? a.split(/\s*,\s*/).filter((I) => g.includes(I)) : [], o = l.filter((I) => I.type === "Fegyver"), r = o.map((I) => ({ id: I.id, name: I.name, img: I.img })), u = "— Nincs fegyver —", h = i.length > 0 ? i : g, y = g.filter((I) => !h.includes(I)), v = [...h, ...y], k = v.filter((I) => {
      var P;
      const E = (((P = m[I]) == null ? void 0 : P.itemId) ?? "").trim();
      return E && o.some((G) => G.id === E);
    });
    e.weaponSlots = k.map((I) => {
      const E = m[I] ?? {}, P = (E.itemId ?? "").trim(), G = r.find((we) => we.id === P), ke = o.find((we) => we.id === P), ne = (ke == null ? void 0 : ke.system) ?? {}, Ce = ne.size === "thrown", Te = (typeof ne.range == "string" ? (ne.range || "").trim() : "") || "—";
      return {
        slotKey: I,
        itemId: P,
        displayName: (G == null ? void 0 : G.name) || E.name || u,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: Ce,
        rangeStr: Te
      };
    });
    const w = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((I) => {
      var vt;
      const E = I.id;
      let P = null, G = {};
      for (const nt of v)
        if ((((vt = m[nt]) == null ? void 0 : vt.itemId) ?? "").trim() === E) {
          P = nt, G = m[nt] ?? {};
          break;
        }
      const ke = !!P, ne = (I == null ? void 0 : I.system) ?? {}, Ce = typeof ne.range == "string" ? (ne.range || "").trim() : "", Te = ne.type ?? "", we = (w[Te] ?? Te) || "—", $e = ne.size ?? "", Ye = (D[$e] ?? $e) || "", Xe = [we, Ye].filter(Boolean).join(", ") || we || "—", Ct = Te === "projectile" || $e === "thrown", qt = ne.quantity != null ? String(ne.quantity).trim() : "1", Nt = String(ne.bonus ?? G.bonus ?? "").trim() || "0", Lt = (ne.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: P ?? "",
        itemId: E,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? u,
        img: (I == null ? void 0 : I.img) ?? "",
        bonus: Nt,
        damage: Lt,
        rangeStr: Ce || "—",
        typeAndSize: Xe,
        quantity: qt,
        isProjectile: Ct,
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
        level: mi((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: P
      };
    });
    const O = ((Dt = (Ve = t == null ? void 0 : t.system) == null ? void 0 : Ve.gear) == null ? void 0 : Dt.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], j = l.filter((I) => I.type === "MikroChip");
    e.microchipsTable = j.map((I) => {
      var Te, we, $e, Ye;
      const E = I.id;
      let P = null;
      for (const Xe of q)
        if ((((Te = O[Xe]) == null ? void 0 : Te.itemId) ?? "").trim() === E) {
          P = Xe;
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
        kp: Number((Ye = I == null ? void 0 : I.system) == null ? void 0 : Ye.replaceCost) >= 0 ? Number(I.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: P ?? "",
        equipped: !!P
      };
    });
    const K = l.filter((I) => I.type === "Targy");
    e.itemsTable = K.map((I) => {
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
    const B = l.filter((I) => I.type === "Egyeb");
    e.egyebList = B.map((I) => {
      const P = (((I == null ? void 0 : I.system) ?? {}).description ?? "").trim(), G = P ? P.length > 80 ? P.slice(0, 77) + "…" : P : "";
      return {
        itemId: I.id,
        actorId: t.id,
        name: (I == null ? void 0 : I.name) ?? "—",
        img: (I == null ? void 0 : I.img) ?? "",
        description: G
      };
    });
    const R = (((_t = e.weaponsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((ot = e.armorTable) == null ? void 0 : ot.length) ?? 0) > 0 || (((Ot = e.microchipsTable) == null ? void 0 : Ot.length) ?? 0) > 0 || (((ct = e.itemsTable) == null ? void 0 : ct.length) ?? 0) > 0 || (((lt = e.egyebList) == null ? void 0 : lt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !R;
    const Y = ((ut = t == null ? void 0 : t.system) == null ? void 0 : ut.abilities) ?? {}, Z = l.filter((I) => I.type === "Kepesseg" || I.type === "ability").map((I) => {
      var E, P, G;
      return {
        id: I.id,
        name: I.name,
        img: I.img,
        description: ((E = I.system) == null ? void 0 : E.description) ?? "",
        kp: Number(((P = I.system) == null ? void 0 : P.kp) ?? 0) || 0,
        kind: (((G = I.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), J = new Map(Z.map((I) => [I.id, I])), X = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = X, e.abilityHatterSlot = X;
    const M = (I) => {
      const E = Y[I];
      return E ? Array.isArray(E == null ? void 0 : E.items) ? E.items : Array.isArray(E) ? E : [] : [];
    }, W = (I) => (I || []).map((E) => {
      const P = J.get(E);
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
    e.abilityPassiveList = W(M("passive")), e.abilityActiveList = W(M("active"));
    const ce = t == null ? void 0 : t.id, ve = !!((mt = (dt = game.combat) == null ? void 0 : dt.combatants) != null && mt.some(
      (I) => {
        var E;
        return (((E = I.actor) == null ? void 0 : E.id) ?? I.actorId) === ce;
      }
    ));
    e.showHarcSection = ve;
    const T = ((pt = e.system) == null ? void 0 : pt.resources) ?? {}, x = (yt = (ft = e.system) == null ? void 0 : ft.combat) == null ? void 0 : yt.initiativeResult, V = typeof x == "number" ? x : -1, Q = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], oe = (We = (gt = e.system) == null ? void 0 : gt.combat) == null ? void 0 : We.initiativeRanges, le = Array.isArray(oe) ? oe.map((I) => ({ min: Number(I.min) ?? 0, max: Number(I.max) ?? 0, kp: Math.min(10, Math.max(0, Number(I.kp) ?? 0)) })) : [], ie = (le.length > 0 ? le : Q).slice().sort((I, E) => I.min - E.min), ge = 3;
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
    const He = ie.length > 0 ? ie[ie.length - 1] : null, tt = Math.min(10, He ? He.kp : 6), Pe = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, tt)).map((I, E) => {
      const P = E + 1, G = !!Number(T[I]), ke = P <= Re;
      return { index: P, used: G, usable: ke };
    }), Be = Math.ceil(Pe.length / 2);
    return e.kpDotsRow1 = Pe.slice(0, Be), e.kpDotsRow2 = Pe.slice(Be), e.canEditInitiative = !!((ht = game.user) != null && ht.isGM), e.showInitiativeResult = typeof x == "number", e.initiativeResult = e.showInitiativeResult ? x : "", e.speedUnitForSelect = ((Je = (bt = e.system) == null ? void 0 : bt.combat) == null ? void 0 : Je.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var l, m, g;
    super._attachFrameListeners(s);
    const e = ((l = s == null ? void 0 : s.querySelector) == null ? void 0 : l.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (a) => {
      var r, u, h;
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const i = ((h = (u = (r = foundry.applications) == null ? void 0 : r.apps) == null ? void 0 : u.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (y) => {
          y && this.actor.update({ img: y });
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
      var u, h, y, v;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".karakter-weapon-slot"), o = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const r = this.actor.items.get(o);
      (v = r == null ? void 0 : r.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (a) => {
      var u;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = (((u = i == null ? void 0 : i.dataset) == null ? void 0 : u.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: r } = await import("./roll-sheet-BOgyFG1E.mjs");
      r(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (a) => {
      var r, u, h, y, v;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget;
      let o = (((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      !o && ((u = i == null ? void 0 : i.dataset) != null && u.slot) && (o = (((((y = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : y.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (a) => {
      if (a.preventDefault(), a.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BOgyFG1E.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (a) => {
      var u, h;
      a.preventDefault(), a.stopPropagation();
      const i = a.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const r = !!Number((h = (u = this.actor.system) == null ? void 0 : u.resources) == null ? void 0 : h[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: r ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (a) => {
      var h, y;
      a.preventDefault();
      const i = a.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.skill) ?? "").trim(), r = ((y = i == null ? void 0 : i.textContent) == null ? void 0 : y.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: u } = await import("./roll-sheet-BOgyFG1E.mjs");
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
      var y, v, k, w, D, _;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (y = a.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : v.area, o = (w = (k = a.currentTarget) == null ? void 0 : k.dataset) == null ? void 0 : w.itemId;
      if (!i || !o || !this.actor) return;
      const r = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, h = (Array.isArray((_ = r[i]) == null ? void 0 : _.items) ? r[i].items.slice() : []).filter((O) => O !== o);
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
      var y, v;
      if (a.preventDefault(), !a.altKey) return;
      const i = a.currentTarget, o = (((y = i == null ? void 0 : i.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const r = this.actor, u = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), h = {};
      u && (h[`system.weapons.${u}.itemId`] = "", h[`system.weapons.${u}.name`] = "", h[`system.weapons.${u}.damage`] = "", h[`system.weapons.${u}.bonus`] = ""), Object.keys(h).length && await r.update(h), await r.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (a) => {
      var o, r;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((r = (o = a.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : r.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (a) => {
      var h, y, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (((y = (h = a.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((k = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : k.microchips) ?? {}, u = ["slot1", "slot2", "slot3"].find((w) => {
        var D;
        return (((D = o[w]) == null ? void 0 : D.itemId) ?? "").trim() === i;
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
    (g = (m = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : m.call(e, f)) == null || g.forEach((a) => {
      var i;
      (((i = a.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (a.draggable = !0);
    }), t.on("dragstart", f, (a) => {
      var h, y, v;
      const i = a.currentTarget, o = (y = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) == null ? void 0 : y.trim();
      if (!o || !this.actor) return;
      const r = this.actor.items.get(o);
      if (!r) return;
      const u = r.uuid;
      a.dataTransfer && (a.dataTransfer.setData("text/plain", u), a.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: u })), a.dataTransfer.effectAllowed = "copyMove"), typeof ((v = a.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && a.dataTransfer.setDragImage(i, 0, 0);
    });
    const c = this, p = (a) => {
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
      u && (r.contains(u) || c.id && ((h = u.closest) != null && h.call(u, `#${CSS.escape(c.id)}`))) || p(r);
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
      Object.keys(c).length > 0 && await this.actor.update(c).catch((p) => console.warn("VoidNpcSheet save on preClose failed", p));
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
    var w, D, _, O, q;
    const e = this.actor;
    if (!e) return;
    const n = (((w = e.system) == null ? void 0 : w.weapons) ?? {})[s] ?? {}, f = ((D = e.system) == null ? void 0 : D.skills) ?? {}, c = ((_ = e.items) == null ? void 0 : _.filter((j) => j.type === "Fegyver")) ?? [];
    let p = null;
    n.itemId && (p = c.find((j) => j.id === n.itemId) ?? null);
    const d = p && p.name || n.name || "Fegyver", l = Number(n.bonus || 0) || 0, m = ((O = p == null ? void 0 : p.system) == null ? void 0 : O.type) || "kinetic", g = (((q = p == null ? void 0 : p.system) == null ? void 0 : q.skillKey) ?? "").trim(), a = g && f[g] !== void 0 ? g : m === "explosive" ? "grenadeUse" : "firearms", i = Number(f[a] || 0) || 0, o = l + i, u = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, h = new Roll(u);
    await h.evaluate({ async: !0 });
    const { resultType: y, label: v } = Rt(h), k = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return h.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${d} – találat`,
      flags: { "vacuum-of-the-void": { resultType: y, critLabel: v } },
      rollMode: k
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var d, l, m, g, a, i, o, r, u, h;
    const t = this.actor;
    if (!t) return;
    const n = ((l = (d = t.items).get) == null ? void 0 : l.call(d, s)) ?? ((g = (m = t.items.contents) == null ? void 0 : m.find) == null ? void 0 : g.call(m, (y) => y.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((a = n.system) == null ? void 0 : a.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (h = (o = ui.notifications) == null ? void 0 : o.warn) == null || h.call(o, ((u = (r = game.i18n) == null ? void 0 : r.localize) == null ? void 0 : u.call(r, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const c = new Roll(f);
    await c.evaluate({ async: !0 });
    const p = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return c.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: p
    });
  }
  async _onDropItem(s, e) {
    var m, g, a, i, o, r, u, h, y, v, k, w, D, _, O, q, j, K, B;
    if (!this.actor) return (m = super._onDropItem) == null ? void 0 : m.call(this, s, e);
    const n = ((R) => {
      var Z;
      if (!R) return null;
      const Y = R.uuid ?? R.documentUuid ?? ((Z = R.data) == null ? void 0 : Z.uuid) ?? (typeof R == "string" ? R : null);
      if (Y) return Y;
      if (typeof R == "object") {
        for (const J of Object.values(R))
          if (typeof J == "string" && J.includes(".") && J.startsWith("Item.")) return J;
      }
      return null;
    })(e);
    if (!n) return (g = super._onDropItem) == null ? void 0 : g.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (a = super._onDropItem) == null ? void 0 : a.call(this, s, e);
    if (f.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const c = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      const R = (((r = f.system) == null ? void 0 : r.kind) ?? "passive").toString();
      if (R === "module") {
        (h = (u = ui.notifications) == null ? void 0 : u.warn) == null || h.call(u, "Modul típusú képességet csak Járműegység lapra lehet húzni.");
        return;
      }
      let Y = f.id;
      if (((y = f.parent) == null ? void 0 : y.id) !== c.id) {
        const M = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        Y = ((v = (await c.createEmbeddedDocuments("Item", [M]))[0]) == null ? void 0 : v.id) ?? Y;
      }
      const Z = ((k = c.system) == null ? void 0 : k.abilities) ?? {}, J = R === "active" ? "active" : "passive", X = Array.isArray((w = Z[J]) == null ? void 0 : w.items) ? Z[J].items.slice() : Array.isArray(Z[J]) ? Z[J].slice() : [];
      X.includes(Y) || X.push(Y), await c.update({ [`system.abilities.${J}.items`]: X }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((D = f.parent) == null ? void 0 : D.id) === c.id) return;
    const p = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(p, { system: { ...p.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const l = (_ = (await c.createEmbeddedDocuments("Item", [p]))[0]) == null ? void 0 : _.id;
    if (f.type === "Fegyver" && l) {
      const R = ((O = c.system) == null ? void 0 : O.weapons) ?? {}, Y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], Z = (R.slotOrder ?? "").trim(), J = Z ? Z.split(/\s*,\s*/).filter((W) => Y.includes(W)) : [];
      let X = Y.find((W) => {
        var ce;
        return !(((ce = R[W]) == null ? void 0 : ce.itemId) ?? "").trim();
      });
      X || (X = Y.find((W) => !J.includes(W)) ?? "slot1");
      const M = J.includes(X) ? J : [...J, X].filter((W) => Y.includes(W));
      await c.update({
        "system.weapons.slotOrder": M.join(","),
        [`system.weapons.${X}.itemId`]: l,
        [`system.weapons.${X}.name`]: f.name ?? "",
        [`system.weapons.${X}.damage`]: ((q = f.system) == null ? void 0 : q.damage) ?? "",
        [`system.weapons.${X}.bonus`]: ((j = f.system) == null ? void 0 : j.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && l) {
      const R = ((B = (K = c.system) == null ? void 0 : K.gear) == null ? void 0 : B.microchips) ?? {}, Z = ["slot1", "slot2", "slot3"].find((J) => {
        var X;
        return !(((X = R[J]) == null ? void 0 : X.itemId) ?? "").trim();
      });
      Z && await c.update({
        [`system.gear.microchips.${Z}.itemId`]: l,
        [`system.gear.microchips.${Z}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var m, g, a, i, o, r;
    const e = (g = (m = this.actor) == null ? void 0 : m.items) == null ? void 0 : g.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((a = e.system) == null ? void 0 : a.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${p}
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
    var d, l, m, g, a, i;
    const e = (l = (d = this.actor) == null ? void 0 : d.items) == null ? void 0 : l.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((m = e.system) == null ? void 0 : m.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const o = ((g = e.system) == null ? void 0 : g.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const r = Number(((a = e.system) == null ? void 0 : a.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
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
se(fe, "PARTS", foundry.utils.mergeObject(
  U(fe, fe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), se(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(fe, fe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = U(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = fe;
function pi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Os, Cs, qs, Ns;
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
    var n, f, c, p;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((c = s.querySelector) == null ? void 0 : c.call(s, ".votv-scroll")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, ".window-content")) ?? null;
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
    let p = { scrollState: {}, focus: null };
    if (f) {
      p.scrollState = this._saveScrollState(f);
      const u = document.activeElement, h = c.contains(u), y = u && (u.tagName === "INPUT" && u.type !== "checkbox" && u.type !== "radio" || u.tagName === "TEXTAREA");
      h && y && (p.focus = {
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
    const l = this.element, m = this.form ?? this.element, g = p.scrollState, a = p.focus, i = typeof (g == null ? void 0 : g.formScrollTop) == "number" || typeof (g == null ? void 0 : g.windowScrollTop) == "number", o = () => {
      var u, h;
      if (this._applyScrollState(l, g), (a == null ? void 0 : a.name) != null || (a == null ? void 0 : a.id) != null) {
        const y = ((u = m.querySelector) == null ? void 0 : u.call(m, a.id ? `#${CSS.escape(a.id)}` : null)) ?? (a.name ? (h = m.querySelector) == null ? void 0 : h.call(m, `[name="${CSS.escape(a.name)}"]`) : null);
        y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA") && (y.focus({ preventScroll: !0 }), typeof y.selectionStart == "number" && (y.selectionStart = a.selectionStart ?? 0, y.selectionEnd = a.selectionEnd ?? a.selectionStart ?? 0));
      }
      this._applyScrollState(l, g);
    };
    return (i || a) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), d;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (l) => {
      var m;
      return ((m = e == null ? void 0 : e.querySelector) == null ? void 0 : m.call(e, l)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${l}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), c = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const p = Number(f == null ? void 0 : f.value) || 0, d = Number(c == null ? void 0 : c.value) || 0;
    n.textContent = String(p + d);
  }
  async _prepareContext(s) {
    var q, j, K, B, R, Y, Z, J, X, M, W, ce, ve;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((q = e.system) == null ? void 0 : q.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, c = "— Nincs fegyver —", p = (((j = this.actor.items) == null ? void 0 : j.contents) ?? []).filter((T) => T.type === "Fegyver");
    e.weaponsTable = p.map((T) => {
      const x = (T == null ? void 0 : T.system) ?? {}, V = x.type ?? "", Q = (n[V] ?? V) || "—", oe = x.size ?? "", le = (f[oe] ?? oe) || "", me = [Q, le].filter(Boolean).join(", ") || Q || "—", ie = V === "projectile" || oe === "thrown", ge = x.quantity != null ? String(x.quantity).trim() : "1", ue = (typeof x.range == "string" ? (x.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: T.id,
        actorId: this.actor.id,
        name: (T == null ? void 0 : T.name) ?? c,
        img: (T == null ? void 0 : T.img) ?? "",
        bonus: String(x.bonus ?? "").trim() || "0",
        damage: x.damage ?? "",
        rangeStr: ue || "—",
        typeLabel: Q,
        typeAndSize: me,
        quantity: ge,
        quantityDisplay: ie ? ge : "—",
        isProjectile: ie,
        equipped: !1,
        special: (x.special ?? "").trim() || "—"
      };
    });
    const d = (((K = this.actor.items) == null ? void 0 : K.contents) ?? []).filter((T) => T.type === "Pancel");
    e.armorTable = d.map((T) => {
      var Q;
      const x = (T == null ? void 0 : T.system) ?? {}, V = !!((Q = T.system) != null && Q.equipped);
      return {
        itemId: T.id,
        actorId: this.actor.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: pi((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: V
      };
    });
    const l = (((B = this.actor.items) == null ? void 0 : B.contents) ?? []).filter((T) => T.type === "MikroChip");
    e.microchipsTable = l.map((T) => {
      var ie, ge, ue;
      const x = ((ie = T == null ? void 0 : T.system) == null ? void 0 : ie.abilityType) ?? "", V = x === "active" ? "Aktív" : x === "passive" ? "Passzív" : x || "—", Q = x === "active", oe = Number((ge = T == null ? void 0 : T.system) == null ? void 0 : ge.replaceCost) >= 0 ? Number(T.system.replaceCost) : 0, le = (((ue = T == null ? void 0 : T.system) == null ? void 0 : ue.description) ?? "").trim(), me = le ? le.length > 60 ? le.slice(0, 57) + "…" : le : "—";
      return {
        itemId: T.id,
        actorId: this.actor.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        typeLabel: V,
        description: me,
        kp: oe,
        isActive: Q,
        slotKey: "",
        equipped: !1
      };
    });
    const m = (((R = this.actor.items) == null ? void 0 : R.contents) ?? []).filter((T) => T.type === "Targy");
    e.itemsTable = m.map((T) => {
      const x = (T == null ? void 0 : T.system) ?? {}, V = (x.description ?? "").trim(), Q = V ? V.length > 60 ? V.slice(0, 57) + "…" : V : "—", oe = x.quantity != null ? String(x.quantity).trim() : "1";
      return {
        itemId: T.id,
        actorId: this.actor.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        quantity: oe,
        description: Q
      };
    });
    const g = (((Y = this.actor.items) == null ? void 0 : Y.contents) ?? []).filter((T) => T.type === "Jarmuegyseg").sort((T, x) => {
      const V = typeof T.sort == "number" ? T.sort : 0, Q = typeof x.sort == "number" ? x.sort : 0;
      return V - Q;
    }), a = [];
    let i = 0, o = 0, r = 0;
    const u = Number(((J = (Z = this.actor.system) == null ? void 0 : Z.vehicle) == null ? void 0 : J.storage) ?? 0) || 0;
    for (const T of g) {
      const x = (T == null ? void 0 : T.system) ?? {}, V = x.health ?? {}, Q = Number(x.level ?? 0) || 0, oe = Number(V.max ?? 0) || 0, le = Number(V.value ?? 0) || 0;
      let me;
      if (oe <= 0)
        me = void 0;
      else if (le <= 0)
        me = 0;
      else {
        const te = le / oe;
        te > 2 / 3 ? me = 3 : te > 1 / 3 ? me = 2 : me = 1;
      }
      const ie = (x.hit ?? "").toString().trim(), ge = (x.speed ?? "").toString().trim().replace(",", "."), ue = Number(ge);
      Number.isFinite(ue) && (i += ue);
      const Re = (x.range ?? "").toString().trim().replace(",", "."), He = Number(Re);
      Number.isFinite(He) && (o += He);
      const tt = (x.damage ?? "").toString().trim(), Tt = (x.storage ?? "").toString().trim().replace(",", "."), Pe = Number(Tt);
      Number.isFinite(Pe) && (r += Pe);
      const Be = x.abilities ?? {}, Me = Array.isArray(Be.items) ? Be.items : [], Ge = (await Promise.all(
        Me.map(async (te) => {
          var he;
          if (!te) return null;
          try {
            const ae = await fromUuid(te);
            if (ae && (ae.type === "Kepesseg" || ae.type === "ability")) return ae;
          } catch {
            const ae = (he = game.items) == null ? void 0 : he.get(te);
            if (ae && (ae.type === "Kepesseg" || ae.type === "ability")) return ae;
          }
          return null;
        })
      )).map((te, he) => ({ doc: te, ref: Me[he] })).filter((te) => !!te.doc && !!te.ref).map(({ doc: te, ref: he }) => {
        var _e, Oe;
        const ae = (((_e = te.system) == null ? void 0 : _e.kind) ?? "passive").toString(), be = Number(((Oe = te.system) == null ? void 0 : Oe.kp) ?? 0) || 0, it = ae === "species";
        return {
          id: te.id,
          ref: he,
          name: te.name,
          img: te.img,
          kind: ae,
          kpDisplay: it ? 0 : be
        };
      });
      a.push({
        itemId: T.id,
        actorId: this.actor.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        level: Q,
        hpMax: oe,
        hpValue: le,
        hpStatus: me,
        hit: ie,
        damage: tt,
        abilities: Ge
      });
    }
    e.unitsTable = a, e.totalStorageUsed = r, e.vehicleStorageMax = u;
    const h = g.length;
    let y = "Kicsi", v = 0, k = 0;
    h >= 11 ? (y = "Nagy", v = -4, k = -6) : h >= 6 ? (y = "Közepes", v = -2, k = -3) : (y = "Kicsi", v = 0, k = 0), e.sizeForSelect = y, e.unitCount = h, e.sizeSpeedPenalty = v, e.sizeDefensePenalty = k;
    const w = i + v, D = o;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: w },
        vehicle: { toolsRange: D, storage: u },
        identity: { size: y }
      },
      { inplace: !1 }
    );
    const _ = (((X = e.weaponsTable) == null ? void 0 : X.length) ?? 0) > 0 || (((M = e.armorTable) == null ? void 0 : M.length) ?? 0) > 0 || (((W = e.microchipsTable) == null ? void 0 : W.length) ?? 0) > 0 || (((ce = e.itemsTable) == null ? void 0 : ce.length) ?? 0) > 0;
    e.showEquipmentDropZone = !_;
    const O = (((ve = this.actor.items) == null ? void 0 : ve.contents) ?? []).filter((T) => T.type === "Egyeb");
    return e.egyebList = O.map((T) => {
      const V = (((T == null ? void 0 : T.system) ?? {}).description ?? "").trim(), Q = V ? V.length > 80 ? V.slice(0, 77) + "…" : V : "";
      return {
        itemId: T.id,
        actorId: this.actor.id,
        name: (T == null ? void 0 : T.name) ?? "—",
        img: (T == null ? void 0 : T.img) ?? "",
        description: Q
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
      var g, a, i;
      d.preventDefault(), d.stopPropagation();
      const l = ((i = (a = (g = foundry.applications) == null ? void 0 : g.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new l({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (d) => {
      var g, a, i;
      d.preventDefault();
      const l = (a = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : a.itemId;
      if (!l) return;
      const m = this.actor.items.get(l);
      (i = m == null ? void 0 : m.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (d) => {
      var g, a;
      if (d.preventDefault(), !d.altKey) return;
      const l = (a = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : a.itemId;
      !l || !this.actor.items.get(l) || await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("change", ".jarmu-item-quantity-input", async (d) => {
      var a;
      const l = d.currentTarget, m = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!m) return;
      const g = this.actor.items.get(m);
      !g || g.type !== "Targy" && g.type !== "Fegyver" || await g.update({ "system.quantity": (l.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (d) => {
      var g, a;
      const l = (a = (g = d.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : a.itemId;
      if (!l) return;
      const m = this.actor.items.get(l);
      !m || m.type !== "Pancel" || await m.update({ "system.equipped": d.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (d) => {
      var m, g, a, i;
      d.preventDefault();
      const l = (g = (m = d.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : g.itemId;
      l && ((i = (a = this.actor.items.get(l)) == null ? void 0 : a.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (d) => {
      var m, g;
      if (d.preventDefault(), !d.altKey) return;
      const l = (g = (m = d.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : g.itemId;
      l && await this.actor.deleteEmbeddedDocuments("Item", [l]);
    }), t.on("click", ".karakter-item-chat", async (d) => {
      var m, g;
      d.preventDefault();
      const l = (g = (m = d.currentTarget) == null ? void 0 : m.dataset) == null ? void 0 : g.itemId;
      l && await this._postItemToChat(l);
    }), t.on("click", ".jarmu-unit-damage-button", async (d) => {
      var g;
      d.preventDefault(), d.stopPropagation();
      const l = d.currentTarget, m = (((g = l == null ? void 0 : l.dataset) == null ? void 0 : g.itemId) ?? "").trim();
      m && await this._rollUnitDamage(m);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (d) => {
      var a, i;
      const l = d.currentTarget, m = (a = l == null ? void 0 : l.dataset) == null ? void 0 : a.itemId;
      if (!m) return;
      n._draggingUnitId = m;
      const g = (i = d.originalEvent) == null ? void 0 : i.dataTransfer;
      g && (g.setData("text/plain", m), g.effectAllowed = "move", typeof g.setDragImage == "function" && g.setDragImage(l, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (d) => {
      var a, i, o, r;
      const l = (i = (a = d.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : i.itemId, m = n._draggingUnitId;
      if (!m || !l || m === l) return;
      d.preventDefault();
      const g = (o = d.originalEvent) == null ? void 0 : o.dataTransfer;
      g && (g.dropEffect = "move"), (r = d.currentTarget) == null || r.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (d) => {
      var l;
      (l = d.currentTarget) == null || l.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (d) => {
      var h, y, v, k;
      d.preventDefault(), (h = d.currentTarget) == null || h.classList.remove("karakter-actions-row-drag-over");
      const l = (v = (y = d.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : v.itemId;
      let m = n._draggingUnitId;
      const g = (k = d.originalEvent) == null ? void 0 : k.dataTransfer;
      if (!m && g && (m = g.getData("text/plain")), n._draggingUnitId = null, !m || !l || m === l) return;
      const i = this.actor.items.contents.filter((w) => w.type === "Jarmuegyseg").sort((w, D) => {
        const _ = typeof w.sort == "number" ? w.sort : 0, O = typeof D.sort == "number" ? D.sort : 0;
        return _ - O;
      }).map((w) => w.id), o = i.indexOf(m), r = i.indexOf(l);
      if (o === -1 || r === -1) return;
      i.splice(o, 1), i.splice(r, 0, m);
      const u = i.map((w, D) => ({
        _id: w,
        sort: (D + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", u);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (d) => {
      var a, i, o, r, u, h, y, v, k, w;
      d.preventDefault();
      const l = (r = (o = (i = (a = d.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : i.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : o.dataset) == null ? void 0 : r.abilityRef, m = (v = (y = (h = (u = d.currentTarget) == null ? void 0 : u.closest) == null ? void 0 : h.call(u, ".jarmu-unit-ability-pill")) == null ? void 0 : y.dataset) == null ? void 0 : v.abilityId;
      let g = null;
      if (l)
        try {
          g = await fromUuid(l);
        } catch {
          g = null;
        }
      !g && m && (g = ((k = game.items) == null ? void 0 : k.get(m)) ?? null), (w = g == null ? void 0 : g.sheet) == null || w.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (d) => {
      var i, o, r, u;
      d.preventDefault();
      const l = (o = (i = d.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, ".jarmu-unit-ability-pill"), m = (r = l == null ? void 0 : l.dataset) == null ? void 0 : r.abilityRef, g = (u = l == null ? void 0 : l.dataset) == null ? void 0 : u.abilityId, a = m || g;
      a && await this._postUnitAbilityToChat(a);
    });
    const f = (d) => {
      if (!d) return;
      const l = this._getFormDataForUpdate(d);
      Object.keys(l).length !== 0 && this.actor.update(l).catch((m) => console.warn("VoidJarmuSheet save failed", m));
    }, c = (d) => {
      var l, m, g;
      return d && (((m = (l = this.element) == null ? void 0 : l.contains) == null ? void 0 : m.call(l, d)) || this.id && ((g = d.closest) == null ? void 0 : g.call(d, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (d) => {
      var i;
      const l = d.target;
      if (!l || !l.form) return;
      const m = l.tagName;
      if (m !== "INPUT" && m !== "TEXTAREA" && m !== "SELECT") return;
      const g = l.form;
      if (!c(g)) return;
      const a = d.relatedTarget;
      a && (g.contains(a) || this.id && ((i = a.closest) != null && i.call(a, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(g));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (d) => {
      var r, u, h;
      const l = d.currentTarget, m = (r = l == null ? void 0 : l.dataset) == null ? void 0 : r.itemId;
      if (!m) return;
      const g = this.actor.items.get(m);
      if (!g || g.type !== "Jarmuegyseg") return;
      const a = (l.value ?? "").trim(), i = a === "" ? 0 : Number(a), o = (u = l.closest) == null ? void 0 : u.call(l, ".jarmu-unit-row");
      if (o) {
        const y = (h = o.querySelector) == null ? void 0 : h.call(o, ".jarmu-unit-hp-max"), v = (y == null ? void 0 : y.textContent) ?? "", k = Number((v ?? "").trim()) || 0;
        let w;
        if (k <= 0)
          w = void 0;
        else if (!Number.isFinite(i) || i <= 0)
          w = 0;
        else {
          const D = i / k;
          D > 2 / 3 ? w = 3 : D > 1 / 3 ? w = 2 : w = 1;
        }
        w === void 0 ? o.removeAttribute("data-hp-status") : o.dataset.hpStatus = String(w);
      }
      await g.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (d) => {
      var i;
      const l = d.currentTarget, m = (i = l == null ? void 0 : l.dataset) == null ? void 0 : i.itemId;
      if (!m) return;
      const g = this.actor.items.get(m);
      if (!g || g.type !== "Jarmuegyseg") return;
      const a = (l.value ?? "").trim();
      await g.update({ "system.hit": a });
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
    var d, l, m;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((d = e.system) == null ? void 0 : d.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const g = ((l = e.system) == null ? void 0 : l.abilityType) ?? "passive";
      if (n = (g === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", g === "active") {
        const a = Number(((m = e.system) == null ? void 0 : m.replaceCost) ?? 0) || 0;
        a > 0 && (f = `<p><strong>KP:</strong> ${a}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const c = t ? `<p>${t}</p>` : "", p = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${c}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: p,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var p, d, l, m, g, a, i, o, r;
    const e = this.actor;
    if (!e) return;
    const t = ((d = (p = e.items).get) == null ? void 0 : d.call(p, s)) ?? ((m = (l = e.items.contents) == null ? void 0 : l.find) == null ? void 0 : m.call(l, (u) => u.id === s));
    if (!t || t.type !== "Jarmuegyseg") return;
    const n = (((g = t.system) == null ? void 0 : g.damage) ?? "").trim();
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
    var m, g, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((m = game.items) == null ? void 0 : m.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${p}
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
      for (const m of Object.values(e))
        if (typeof m == "string" && m.includes(".") && m.startsWith("Item.")) {
          t = m;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const f = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"].includes(n.type)) return super._onDropItem(s, e);
    if (((l = n.parent) == null ? void 0 : l.id) === f.id) return;
    const p = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [p]);
  }
};
se(ye, "PARTS", foundry.utils.mergeObject(
  U(ye, ye, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), se(ye, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(ye, ye, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ns = (qs = U(ye, ye, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ns.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let jt = ye;
const fi = [
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
var Ls;
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
      var l, m, g, a, i, o, r;
      if (!e.isEditable || !((m = (l = c.target) == null ? void 0 : l.closest) != null && m.call(l, ".profile")) && ((a = (g = c.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const p = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(c);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidWeaponSheet save failed", d));
    }, f = (c) => {
      var p, d, l;
      return c && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, m;
      const p = ((d = c.target) == null ? void 0 : d.form) ?? ((m = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = fi, e;
  }
};
se(qe, "PARTS", foundry.utils.mergeObject(U(qe, qe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), se(qe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(qe, qe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ls = U(qe, qe, "DEFAULT_OPTIONS")) == null ? void 0 : Ls.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = qe;
var Fs;
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
      var l, m, g, a, i, o, r;
      if (!e.isEditable || !((m = (l = c.target) == null ? void 0 : l.closest) != null && m.call(l, ".profile")) && ((a = (g = c.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const p = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(c);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidShieldSheet save failed", d));
    }, f = (c) => {
      var p, d, l;
      return c && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, m;
      const p = ((d = c.target) == null ? void 0 : d.form) ?? ((m = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
se(Ne, "PARTS", foundry.utils.mergeObject(U(Ne, Ne, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), se(Ne, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ne, Ne, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Fs = U(Ne, Ne, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let zt = Ne;
var As;
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
      var l, m, g, a, i, o, r;
      if (!e.isEditable || !((m = (l = c.target) == null ? void 0 : l.closest) != null && m.call(l, ".profile")) && ((a = (g = c.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const p = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(c);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidMicrochipSheet save failed", d));
    }, f = (c) => {
      var p, d, l;
      return c && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, m;
      const p = ((d = c.target) == null ? void 0 : d.form) ?? ((m = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
se(Le, "PARTS", foundry.utils.mergeObject(U(Le, Le, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), se(Le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Le, Le, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((As = U(Le, Le, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let Ut = Le;
var Es;
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
      var l, m, g, a, i, o, r;
      if (!e.isEditable || !((m = (l = c.target) == null ? void 0 : l.closest) != null && m.call(l, ".profile")) && ((a = (g = c.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const p = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(c);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidAbilitySheet save failed", d));
    }, f = (c) => {
      var p, d, l;
      return c && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, m;
      const p = ((d = c.target) == null ? void 0 : d.form) ?? ((m = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
      f(p) && n(p);
    }, e._votvInput = (c) => {
      var l;
      const p = c.target;
      if ((p == null ? void 0 : p.name) === "name") return;
      const d = (p == null ? void 0 : p.form) ?? ((l = p == null ? void 0 : p.closest) == null ? void 0 : l.call(p, "form"));
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
se(Fe, "PARTS", foundry.utils.mergeObject(U(Fe, Fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), se(Fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Fe, Fe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Es = U(Fe, Fe, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !0 })
}));
let Ht = Fe;
var Ps;
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
      var l, m, g, a, i, o, r;
      if (!e.isEditable || !((m = (l = c.target) == null ? void 0 : l.closest) != null && m.call(l, ".profile")) && ((a = (g = c.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const p = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(c);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidTargySheet save failed", d));
    }, f = (c) => {
      var p, d, l;
      return c && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, m;
      const p = ((d = c.target) == null ? void 0 : d.form) ?? ((m = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
se(Ae, "PARTS", foundry.utils.mergeObject(U(Ae, Ae, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), se(Ae, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ae, Ae, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ps = U(Ae, Ae, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = Ae;
var $s;
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
      var l, m, g, a, i, o, r;
      if (!e.isEditable || !((m = (l = c.target) == null ? void 0 : l.closest) != null && m.call(l, ".profile")) && ((a = (g = c.target) == null ? void 0 : g.getAttribute) == null ? void 0 : a.call(g, "data-edit")) !== "img") return;
      c.preventDefault(), c.stopPropagation();
      const p = ((r = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : r.implementation) ?? globalThis.FilePicker;
      new p({
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
      const p = e._getFormDataForUpdate(c);
      Object.keys(p).length !== 0 && e.document.update(p).catch((d) => console.warn("VoidEgyebSheet save failed", d));
    }, f = (c) => {
      var p, d, l;
      return c && (((d = (p = e.element) == null ? void 0 : p.contains) == null ? void 0 : d.call(p, c)) || e.id && ((l = c.closest) == null ? void 0 : l.call(c, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (c) => {
      var d, l, m;
      const p = ((d = c.target) == null ? void 0 : d.form) ?? ((m = (l = c.target) == null ? void 0 : l.closest) == null ? void 0 : m.call(l, "form"));
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
se(Ee, "PARTS", foundry.utils.mergeObject(U(Ee, Ee, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), se(Ee, "DEFAULT_OPTIONS", foundry.utils.mergeObject(U(Ee, Ee, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = U(Ee, Ee, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Gt = Ee;
var xs, Rs;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var d, l, m, g;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (l = this.document) == null ? void 0 : l.name,
      "id=",
      (m = this.document) == null ? void 0 : m.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (a) => {
      var i, o, r;
      try {
        const u = typeof a.composedPath == "function" ? a.composedPath() : [];
        if (!(this.element && u.includes(this.element) || this.id && ((o = (i = a.target) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", a);
        let y = null;
        try {
          y = TextEditor.getDragEventData(a);
        } catch (D) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", D);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", y), !y || y.type !== "Item") return;
        const k = ((D) => {
          var O;
          if (!D) return null;
          const _ = D.uuid ?? D.documentUuid ?? ((O = D.data) == null ? void 0 : O.uuid) ?? (typeof D == "string" ? D : null);
          if (_) return _;
          if (typeof D == "object") {
            for (const q of Object.values(D))
              if (typeof q == "string" && q.includes(".") && q.startsWith("Item.")) return q;
          }
          return null;
        })(y);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", k), !k) return;
        const w = await fromUuid(k);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", w == null ? void 0 : w.id, w == null ? void 0 : w.type), !w || w.documentName !== "Item") return;
        if (w.type === "Kepesseg" || w.type === "ability") {
          const D = w.uuid ?? w.id, _ = this.document.system ?? {}, O = Array.isArray((r = _.abilities) == null ? void 0 : r.items) ? _.abilities.items.slice() : [];
          O.push(D), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", O), await this.document.update({ "system.abilities.items": O });
        }
      } catch (u) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", u);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (a) => {
      var u, h, y, v, k, w;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, o = (v = (y = a.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : v.itemId;
      let r = null;
      if (i)
        try {
          r = await fromUuid(i);
        } catch {
          r = null;
        }
      !r && o && (r = ((k = game.items) == null ? void 0 : k.get(o)) ?? null), (w = r == null ? void 0 : r.sheet) == null || w.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (a) => {
      var u, h, y, v;
      a.preventDefault();
      const i = (h = (u = a.currentTarget) == null ? void 0 : u.dataset) == null ? void 0 : h.itemRef, o = (v = (y = a.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : v.itemId, r = i || o;
      r && await this._postAbilityToChat(r);
    }), n.on("click", ".karakter-ability-pill-remove", async (a) => {
      var y, v, k;
      if (a.preventDefault(), !a.altKey) return;
      const i = (v = (y = a.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const o = this.document.system ?? {}, r = Array.isArray((k = o.abilities) == null ? void 0 : k.items) ? o.abilities.items.slice() : [], u = r.indexOf(i), h = u >= 0 ? [...r.slice(0, u), ...r.slice(u + 1)] : r;
      await this.document.update({ "system.abilities.items": h });
    });
    const f = (g = t == null ? void 0 : t.querySelector) == null ? void 0 : g.call(t, ".karakter-ability-area[data-area='abilities']");
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
    }, p = (a) => {
      var i, o, r;
      return a && (((o = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, a)) || e.id && ((r = a.closest) == null ? void 0 : r.call(a, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (a) => {
      var o, r, u;
      const i = ((o = a.target) == null ? void 0 : o.form) ?? ((u = (r = a.target) == null ? void 0 : r.closest) == null ? void 0 : u.call(r, "form"));
      p(i) && c(i);
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
        var l;
        if (!d) return null;
        try {
          const m = await fromUuid(d);
          if (m && (m.type === "Kepesseg" || m.type === "ability")) return m;
        } catch {
          const m = (l = game.items) == null ? void 0 : l.get(d);
          if (m && (m.type === "Kepesseg" || m.type === "ability")) return m;
        }
        return null;
      })
    )).map((d, l) => ({ doc: d, ref: f[l] })).filter((d) => !!d.doc && !!d.ref).map(({ doc: d, ref: l }) => {
      var i, o;
      const m = (((i = d.system) == null ? void 0 : i.kind) ?? "passive").toString(), g = Number(((o = d.system) == null ? void 0 : o.kp) ?? 0) || 0, a = m === "species";
      return {
        id: d.id,
        ref: l,
        name: d.name,
        img: d.img,
        kind: m,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: a ? 0 : g
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", p), e.system = t, e.abilityList = p, e;
  }
  async _postAbilityToChat(s) {
    var m, g, a, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((m = game.items) == null ? void 0 : m.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((g = e.system) == null ? void 0 : g.kind) ?? "passive", n = Number(((a = e.system) == null ? void 0 : a.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), c = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", p = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", d = f ? `<p>${f}</p>` : "", l = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${c}</p>
      ${p}
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
      const c = e.uuid ?? e.id, p = this.document.system ?? {}, d = Array.isArray((n = p.abilities) == null ? void 0 : n.items) ? p.abilities.items.slice() : [];
      return d.push(c), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", d), await this.document.update({ "system.abilities.items": d }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
se(Se, "PARTS", foundry.utils.mergeObject(U(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), se(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  U(Se, Se, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((xs = U(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Rs = U(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Vt = Se;
const Ms = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function js(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, f, c, p;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Wt, CONFIG.Actor.dataModels.Jarmu = Zs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = si, CONFIG.Item.dataModels.MikroChip = ii, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ai, CONFIG.Item.dataModels.Egyeb = oi, CONFIG.Item.dataModels.Jarmuegyseg = li, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (f = CONFIG.Actor).typeLabels ?? (f.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (c = CONFIG.Combat).initiative ?? (c.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (p = CONFIG.Item).typeLabels ?? (p.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", St, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", jt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", zt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ut, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Bt, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Vt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), Hooks.on("updateActor", (d, l, m, g) => {
    if ((d == null ? void 0 : d.type) !== "Karakter" || !(d != null && d.id)) return;
    const a = d.id;
    setTimeout(() => {
      var u, h, y, v;
      const i = (u = game.actors) == null ? void 0 : u.get(a);
      if (!i || i.type !== "Karakter") return;
      const o = St.getTotalSpeedRaw(i), r = (h = i.effects) == null ? void 0 : h.find((k) => k.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !r) {
        const k = ((v = (y = CONFIG.statusEffects) == null ? void 0 : y.find((w) => w.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: k,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, _;
          const w = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const O of w)
            ((_ = O == null ? void 0 : O.document) == null ? void 0 : _.actorId) === a && typeof O.draw == "function" && O.draw();
        }).catch((w) => console.warn("Vacuum of the Void | Immobilized effect create failed:", w));
      } else o > 0 && r && r.delete().then(() => {
        var w, D;
        const k = ((w = canvas.tokens) == null ? void 0 : w.placeables) ?? [];
        for (const _ of k)
          ((D = _ == null ? void 0 : _.document) == null ? void 0 : D.actorId) === a && typeof _.draw == "function" && _.draw();
      }).catch((k) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", k));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (d, l, m, g) => {
    var w, D, _, O, q, j, K, B, R, Y, Z, J, X;
    const a = d == null ? void 0 : d.id;
    if (!a) return;
    if ((d.type === "Karakter" || d.type === "Npc") && ((w = l == null ? void 0 : l.system) != null && w.combat) && "initiativeResult" in l.system.combat) {
      const M = Number((_ = (D = d.system) == null ? void 0 : D.combat) == null ? void 0 : _.initiativeResult), W = Number.isFinite(M) ? M : 0, ce = game.combat;
      if (ce) {
        const ve = ((O = ce.combatants) == null ? void 0 : O.contents) ?? Array.from(ce.combatants ?? []);
        for (const T of ve)
          if (((q = T.actor) == null ? void 0 : q.id) === a || T.actorId === a) {
            ce.updateEmbeddedDocuments("Combatant", [{ _id: T.id, initiative: W }]).catch(() => {
            });
            break;
          }
      }
    }
    if (d.type === "Npc" && ((j = l == null ? void 0 : l.system) != null && j.identity) && "size" in l.system.identity) {
      const M = js((B = (K = d.system) == null ? void 0 : K.identity) == null ? void 0 : B.size);
      d.update({
        "prototypeToken.width": M,
        "prototypeToken.height": M
      }).catch((W) => console.warn("Vacuum of the Void | NPC token size update failed for", d.name, W));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), r = [], u = (R = game.actors) == null ? void 0 : R.get(a);
    u != null && u.apps && r.push(...Array.from(u.apps));
    const h = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const M of h) {
      if (((Y = M.document) == null ? void 0 : Y.id) !== a || ((Z = M.document) == null ? void 0 : Z.documentName) !== "Actor") continue;
      const W = (J = M.constructor) == null ? void 0 : J.name;
      W !== "VoidKarakterSheet" && W !== "VoidJarmuSheet" || r.includes(M) || r.push(M);
    }
    if (o && r.some((M) => {
      const W = (M == null ? void 0 : M.form) ?? (M == null ? void 0 : M.element);
      return W && W.contains(i);
    })) return;
    const v = (X = game.votv) == null ? void 0 : X._lastKarakterSheetBlurSave, k = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const M of r)
        !(M != null && M.rendered) || typeof M.render != "function" || M.id !== k && M.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (d, l, m, g) => {
    var r, u, h;
    const a = d == null ? void 0 : d.parent;
    if (!a || a.documentName !== "Actor" || a.type !== "Karakter" || d.type !== "Fegyver") return;
    const i = ((r = a.system) == null ? void 0 : r.weapons) ?? {}, o = {};
    for (const [y, v] of Object.entries(i)) {
      if (!y.startsWith("slot")) continue;
      const k = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !k || k !== d.id || (o[`system.weapons.${y}.name`] = d.name ?? "", o[`system.weapons.${y}.damage`] = ((u = d.system) == null ? void 0 : u.damage) ?? "", o[`system.weapons.${y}.bonus`] = ((h = d.system) == null ? void 0 : h.bonus) ?? "");
    }
    Object.keys(o).length && a.update(o);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var h, y, v, k, w, D, _, O, q, j, K, B, R, Y, Z, J, X, M, W, ce, ve, T, x;
    const t = (y = (h = e.target) == null ? void 0 : h.closest) == null ? void 0 : y.call(h, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), c = (w = (k = f == null ? void 0 : f.flags) == null ? void 0 : k["vacuum-of-the-void"]) == null ? void 0 : w.weapon;
    if (!c) return;
    const p = c.actorId ?? ((D = f == null ? void 0 : f.speaker) == null ? void 0 : D.actor) ?? "";
    if (!p) return;
    e.preventDefault(), e.stopPropagation();
    let d = ((_ = game.actors) == null ? void 0 : _.get(c.actorId)) ?? ((O = game.actors) == null ? void 0 : O.get(p));
    if (d || (d = ((j = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : j.flatMap((Q) => {
      var oe;
      return ((oe = Q.tokens) == null ? void 0 : oe.contents) ?? [];
    }).map((Q) => Q.actor).find((Q) => Q && (Q.id === p || Q.id === c.actorId))) ?? null), !d) return;
    const l = c.itemId ? ((B = (K = d.items) == null ? void 0 : K.get) == null ? void 0 : B.call(K, c.itemId)) ?? ((Z = (Y = (R = d.items) == null ? void 0 : R.contents) == null ? void 0 : Y.find) == null ? void 0 : Z.call(Y, (V) => V.id === c.itemId)) : null;
    let m = (c.damageFormula ?? "").trim();
    if (m || (m = (((J = l == null ? void 0 : l.system) == null ? void 0 : J.damage) ?? "").trim()), !m && c.slotKey && (m = (((((X = d.system) == null ? void 0 : X.weapons) ?? {})[c.slotKey] ?? {}).damage ?? "").trim()), !m) {
      (ve = (M = ui.notifications) == null ? void 0 : M.warn) == null || ve.call(M, ((ce = (W = game.i18n) == null ? void 0 : W.localize) == null ? void 0 : ce.call(W, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const g = new Roll(m);
    await g.evaluate({ async: !0 });
    const a = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = c.targetName || "", o = c.hitLocationName || "", r = ((l == null ? void 0 : l.name) ?? (c.slotKey ? ((x = (((T = d.system) == null ? void 0 : T.weapons) ?? {})[c.slotKey]) == null ? void 0 : x.name) ?? "" : "")) || "Fegyver";
    let u = i ? `${r} – sebzés – ${i}` : `${r} – sebzés`;
    o && (u += ` (${o})`), await g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: d }),
      flavor: u,
      flags: { "vacuum-of-the-void": {} },
      rollMode: a
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var c, p, d, l, m, g;
      if (!((p = (c = e.target) == null ? void 0 : c.closest) != null && p.call(c, "#actors"))) return;
      const t = (l = (d = e.target) == null ? void 0 : d.closest) == null ? void 0 : l.call(d, "[data-document-id]"), n = (m = t == null ? void 0 : t.getAttribute) == null ? void 0 : m.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((g = game.actors) != null && g.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, c;
    const e = ((t = game.actors) == null ? void 0 : t.filter((p) => p.type === "Karakter")) ?? [];
    for (const p of e) {
      const d = St.getTotalSpeedRaw(p), l = (n = p.effects) == null ? void 0 : n.find((m) => m.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (d <= 0 && !l) {
        const m = ((c = (f = CONFIG.statusEffects) == null ? void 0 : f.find((g) => g.id === "immobilized")) == null ? void 0 : c.img) ?? "";
        await p.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: m,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: p.uuid
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
        background: { src: Ms },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, c = await n.create(f);
      c && console.log("Vacuum of the Void | Default scene created:", c.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var c, p, d, l, m, g;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((c = game.actors) == null ? void 0 : c.filter((a) => a.type === "Karakter")) ?? [];
    for (const a of t)
      try {
        const i = a.prototypeToken, o = ((p = i == null ? void 0 : i.bar1) == null ? void 0 : p.attribute) ?? "", r = ((d = i == null ? void 0 : i.bar2) == null ? void 0 : d.attribute) ?? "";
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
    }, f = ((m = game.actors) == null ? void 0 : m.filter((a) => a.type === "Npc")) ?? [];
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
      const i = ((g = a.tokens) == null ? void 0 : g.filter((o) => {
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
  var c, p, d, l;
  const t = (c = game.votv) == null ? void 0 : c._dragSourceActorId, n = t ?? S.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (p = game.actors) == null ? void 0 : p.get(n) : null;
  if (f) {
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
      const m = js((l = (d = f.system) == null ? void 0 : d.identity) == null ? void 0 : l.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: m,
        height: m
      });
    }
  }
});
Hooks.on("preCreateCombatant", (S, s, e) => {
  const t = S.initiative;
  (t == null || typeof t == "number" && isNaN(t)) && S.updateSource({ initiative: 0 });
});
Hooks.on("createCombatant", (S, s, e) => {
  const t = S.actor;
  !t || t.type !== "Karakter" && t.type !== "Npc" || t.update({ "system.combat.initiativeResult": null }).catch((n) => {
    console.warn("Vacuum of the Void | Clear initiative on combat join failed:", n);
  });
});
const yi = {
  "system.resources.kpDot1": 0,
  "system.resources.kpDot2": 0,
  "system.resources.kpDot3": 0,
  "system.resources.kpDot4": 0,
  "system.resources.kpDot5": 0,
  "system.resources.kpDot6": 0
};
function Ks(S) {
  const s = S == null ? void 0 : S.combatants, e = (s == null ? void 0 : s.contents) ?? (s ? Array.from(s) : []);
  for (const t of e) {
    const n = t.actor;
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(yi).catch((f) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, f);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ks(S);
});
function zs() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((f) => f.type === "Karakter" || f.type === "Npc")) ?? []) {
    const f = n.apps ?? [], c = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const p of c)
      !p || S.has(p.id) || (S.add(p.id), typeof p.render == "function" && p.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const f = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    f !== "Karakter" && f !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
  }
}
Hooks.on("deleteCombat", () => {
  setTimeout(zs, 100);
});
Hooks.on("updateCombat", (S, s, e) => {
  (s == null ? void 0 : s.round) != null && Ks(S), setTimeout(zs, 0);
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
    "background.src": Ms,
    backgroundColor: "#0f0f0f",
    "grid.type": 0
  });
});
Hooks.on("renderChatMessageHTML", (S, s, e) => {
  var g, a, i, o;
  const t = ((g = S.flags) == null ? void 0 : g["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, c = t.weaponAttack, p = t.weapon, d = t.vsDefense, l = t.vsDefenseInfo;
  if (!n && !f && !c && !d) return;
  const m = (a = s == null ? void 0 : s.querySelector) == null ? void 0 : a.call(s, ".dice-roll");
  if (m) {
    if (n && m.classList.add(`votv-${n}`), f) {
      const r = m.querySelector(".votv-crit-label");
      if (r)
        r.textContent = f;
      else {
        const u = m.querySelector(".dice-total"), h = (u == null ? void 0 : u.parentElement) ?? m, y = document.createElement("div");
        y.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, y.textContent = f, h.appendChild(y);
      }
    }
    if (c && p && (p.actorId || (i = S.speaker) != null && i.actor)) {
      const r = m.querySelector(".dice-total"), u = (r == null ? void 0 : r.parentElement) ?? m;
      if (!m.querySelector(".votv-weapon-outcome")) {
        const y = document.createElement("div");
        y.className = "votv-weapon-outcome";
        const v = !!p.isHit, k = p.targetName || "Célpont";
        y.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, u.appendChild(y);
      }
      if (p.isHit && !m.querySelector(".votv-weapon-damage-chat")) {
        const v = document.createElement("button");
        v.type = "button", v.className = "votv-weapon-damage-chat";
        const k = p.hitLocationRoll, w = p.hitLocationName;
        v.textContent = k != null && w ? `Sebzés (Találati Hely ${k} - ${w})` : "Sebzés", v.dataset.actorId = String(p.actorId ?? ((o = S.speaker) == null ? void 0 : o.actor) ?? ""), v.dataset.itemId = String(p.itemId ?? ""), v.dataset.slotKey = String(p.slotKey ?? ""), v.dataset.targetName = String(p.targetName ?? ""), v.dataset.hitLocationName = String(p.hitLocationName ?? ""), v.dataset.messageId = String(S.id ?? ""), u.appendChild(v);
      }
    }
    if (!c && d && l) {
      const r = m.querySelector(".dice-total"), u = (r == null ? void 0 : r.parentElement) ?? m;
      if (!m.querySelector(".votv-defense-outcome")) {
        const y = document.createElement("div");
        y.className = "votv-defense-outcome";
        const v = !!l.isHit, k = l.targetName || "Célpont";
        y.textContent = v ? `Találat – ${k}` : `Nem talált – ${k}`, u.appendChild(y);
      }
    }
  }
});
export {
  St as V,
  Rt as c
};
//# sourceMappingURL=vacuum-of-the-void-fdx8-zbP.mjs.map
