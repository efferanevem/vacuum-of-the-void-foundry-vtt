var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (S, s, e) => s in S ? Hs(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var X = (S, s, e) => Vs(S, typeof s != "symbol" ? s + "" : s, e);
var K = (S, s, e) => Gs(Bs(S), e, s);
const { HTMLField: Ws, NumberField: A, SchemaField: z, StringField: O, BooleanField: de, ArrayField: wt } = foundry.data.fields;
class Wt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new z({
        name: new O({ required: !1, blank: !0, initial: "" }),
        player: new O({ required: !1, blank: !0, initial: "" }),
        level: new A({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new O({ required: !1, blank: !0, initial: "" }),
        assignment: new O({ required: !1, blank: !0, initial: "" }),
        subAssignment: new O({ required: !1, blank: !0, initial: "" }),
        background: new O({ required: !1, blank: !0, initial: "" }),
        languages: new O({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new O({ required: !1, blank: !0, initial: "" })
      }),
      resources: new z({
        health: new z({
          value: new A({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new A({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new z({
          head: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          }),
          torso: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          }),
          arms: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          }),
          legs: new z({
            value: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new de({ required: !1, initial: !1 }),
            box2: new de({ required: !1, initial: !1 }),
            box3: new de({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new z({
          head: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new z({
          head: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new A({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new z({
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
      combat: new z({
        defense: new A({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new A({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new O({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new A({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new A({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new wt(
          new z({
            min: new A({ required: !1, integer: !0, initial: 0 }),
            max: new A({ required: !1, integer: !0, initial: 0 }),
            kp: new A({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new z({
        deception: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new A({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new O({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new O({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new O({ required: !1, blank: !0, initial: "" }),
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
      weapons: new z({
        slotOrder: new O({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new z({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new z({
        microchips: new z({
          slot1: new z({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new de({ required: !1, initial: !1 })
          }),
          slot2: new z({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new de({ required: !1, initial: !1 })
          }),
          slot3: new z({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new de({ required: !1, initial: !1 })
          })
        }),
        equipment: new O({ required: !1, blank: !0, initial: "" }),
        armor: new wt(
          new z({
            name: new O({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new O({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new O({ required: !1, blank: !0, initial: "" }),
            level: new O({ required: !1, blank: !0, initial: "" }),
            other: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new wt(
          new z({
            name: new O({ required: !1, blank: !0, initial: "" }),
            quantity: new A({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new z({
        faji: new z({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new z({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        passive: new z({
          items: new wt(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new z({
          items: new wt(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new z({
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
const { SchemaField: Xs, StringField: ms } = foundry.data.fields;
class Qs extends Wt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      vehicle: new Xs({
        /** Jármű típusa (pl. Légi, Földi). */
        type: new ms({ required: !1, blank: !0, initial: "" }),
        /** Eszközök hatótávolsága (TE). */
        toolsRange: new ms({ required: !1, blank: !0, initial: "" })
      })
    };
  }
}
const { BooleanField: Zs, NumberField: gi, StringField: Me } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Zs({ required: !1, initial: !1 }),
      type: new Me({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Me({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Me({ required: !1, blank: !0, initial: "" }),
      damage: new Me({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Me({ required: !1, blank: !0, initial: "" }),
      special: new Me({ required: !1, blank: !0, initial: "" }),
      quantity: new Me({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Me({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ei, StringField: At } = foundry.data.fields;
class ti extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ei({ required: !1, initial: !1 }),
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
const { NumberField: $t, StringField: fs } = foundry.data.fields;
class si extends foundry.abstract.TypeDataModel {
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
const { NumberField: ii, StringField: ys } = foundry.data.fields;
class gs extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      kind: new ys({
        required: !0,
        blank: !1,
        options: ["active", "passive", "species", "background"],
        initial: "passive"
      }),
      description: new ys({
        required: !1,
        blank: !0,
        initial: ""
      }),
      kp: new ii({
        required: !1,
        integer: !0,
        min: 0,
        initial: 0
      })
    };
  }
}
const { StringField: hs } = foundry.data.fields;
class ni extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new hs({ required: !1, blank: !0, initial: "" }),
      quantity: new hs({ required: !1, blank: !0, initial: "1" })
    };
  }
}
const { StringField: ai } = foundry.data.fields;
class ri extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new ai({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: xt, StringField: at, SchemaField: bs, ArrayField: oi } = foundry.data.fields;
class ci extends foundry.abstract.TypeDataModel {
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
        items: new oi(
          new at({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new at({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new at({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new at({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new at({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new at({ required: !1, blank: !0, initial: "" })
    };
  }
}
function Rt(S) {
  if (!S || !Array.isArray(S.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const f = (r, i = 1) => {
    if (!Array.isArray(r)) return;
    let o = i;
    for (const c of r) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        f(c.terms, o);
        continue;
      }
      if (typeof c.operator == "string") {
        o = c.operator === "-" ? -1 : 1;
        continue;
      }
      const a = typeof c.faces == "number" ? c.faces : void 0, g = Array.isArray(c.results) ? c.results : null;
      if (!a || !g || a === 8 || a !== 6) continue;
      const h = !n && o >= 0 && (c.number === 3 || c.number === "3") ? (n = !0, s) : o >= 0 ? e : t;
      for (const v of g) {
        if (!v || v.discarded || v.hidden) continue;
        const I = Number(v.result ?? v);
        Number.isFinite(I) && h.push(I);
      }
    }
  };
  f(S.terms, 1);
  const l = s.filter((r) => r === 6).length, m = s.filter((r) => r === 1).length, u = e.filter((r) => r === 6).length, d = t.filter((r) => r === 6).length, p = l + u, y = m + d;
  return p > 0 && p === y ? { resultType: null, label: null } : p >= 3 ? { resultType: "critical", label: "Brutális Siker" } : p === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
}
function li(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var vs, ks, ws, Is;
const J = class J extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, l, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const f = this.element, l = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const a = document.activeElement, g = l.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      g && h && (m.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 150);
    const d = this.element, p = this.form ?? this.element, y = m.scrollState, r = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var a, g;
      if (this._applyScrollState(d, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const h = ((a = p.querySelector) == null ? void 0 : a.call(p, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (g = p.querySelector) == null ? void 0 : g.call(p, `[name="${CSS.escape(r.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = r.selectionStart ?? 0, h.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(d, y);
    };
    return (i || r) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), u;
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
        var m;
        return l.type === "Pancel" && ((m = l.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const m = String(((f = l.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), u = Number(m);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, f;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var m;
        return l.type === "Pancel" && ((m = l.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const m = String(((f = l.system) == null ? void 0 : f.protectionBonus) ?? "").trim().replace(",", "."), u = Number(m);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, f;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var m;
        return l.type === "Pancel" && ((m = l.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let t = 0;
    for (const l of e) {
      const m = String(((f = l.system) == null ? void 0 : f.speedPenalty) ?? "").trim().replace(",", "."), u = Number(m);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var p, y, r, i, o, c, a, g, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (p = e.hitLocations) == null ? void 0 : p.legs) == null ? void 0 : y.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, f = J._healthStatusFromRatio(n, t);
    if (f === 0) return 0;
    const l = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let m;
    f === 1 ? m = -6 : f === 2 ? m = -3 : m = l, m += J._getTotalArmorSpeedPenaltyStatic(s);
    const u = Number(((a = (c = s.system) == null ? void 0 : c.combat) == null ? void 0 : a.speed) ?? 0) || 0, d = Number(((h = (g = s.system) == null ? void 0 : g.combat) == null ? void 0 : h.speedBonus) ?? 0) || 0;
    return u + d + (Number.isFinite(m) ? m : 0);
  }
  /**
   * Összesített sebesség (kijelzéshez): 0 ha Mozgásképtelen, különben getTotalSpeedRaw(actor).
   * @returns {number}
   */
  static getTotalSpeed(s) {
    var e, t;
    return (t = (e = s == null ? void 0 : s.statuses) == null ? void 0 : e.has) != null && t.call(e, "immobilized") ? 0 : J.getTotalSpeedRaw(s);
  }
  /** Kapott sebesség kijelzés: lábak állapotától 0 / -6 (kritikus) / -3 (sérült) / tárolt givenSpeed, mínusz páncélok levonása. Mozgásképtelen → 0. */
  _writeEffectiveGivenSpeed(s = null) {
    var y, r, i, o, c, a, g, h, v, I, T, D;
    const e = s ?? this.form ?? this.element;
    let t = (y = e == null ? void 0 : e.querySelector) == null ? void 0 : y.call(e, ".karakter-given-speed-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-speed-effective`)), !t) return;
    if ((o = (i = (r = this.actor) == null ? void 0 : r.statuses) == null ? void 0 : i.has) != null && o.call(i, "immobilized")) {
      t.textContent = "0";
      return;
    }
    const n = ((a = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : a.resources) ?? {}, f = ((h = (g = n.hitLocations) == null ? void 0 : g.legs) == null ? void 0 : h.value) ?? 0, l = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, m = J._healthStatusFromRatio(l, f), u = Number(((D = (T = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : T.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let d;
    m === 0 ? d = 0 : m === 1 ? d = -6 : m === 2 ? d = -3 : d = u;
    const p = this._getTotalArmorSpeedPenalty();
    d += p, t.textContent = String(d);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var d, p, y, r, i, o, c, a, g, h, v, I, T;
    const e = s ?? this.form ?? this.element;
    let t = (d = e == null ? void 0 : e.querySelector) == null ? void 0 : d.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (y = (p = this.actor) == null ? void 0 : p.system) == null ? void 0 : y.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, f = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, l = (h = (g = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : g.has) != null && h.call(g, "halfcover") ? 3 : 0, m = (T = (I = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : I.has) != null && T.call(I, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + f + l + m;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), f = t(".karakter-given-defense-effective"), l = t('input[name="system.combat.defense"]'), m = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(l == null ? void 0 : l.value) || 0, d = Number(m == null ? void 0 : m.value) || 0, p = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(u + d + p);
  }
  _writeTotalSpeed(s = null) {
    var c, a, g, h, v, I, T, D;
    const e = s ?? this.form ?? this.element, t = (C) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, C)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${C}`) : null);
    }, n = t(".karakter-total-speed-effective"), f = t(".karakter-given-speed-effective"), l = t('input[name="system.combat.speed"]'), m = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((g = (a = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : a.has) != null && g.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, d = ((T = (I = u.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : T.value) ?? 0, p = ((D = u.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (J._healthStatusFromRatio(p, d) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(l == null ? void 0 : l.value) || 0, i = Number(m == null ? void 0 : m.value) || 0, o = Number(f == null ? void 0 : f.textContent) || 0;
    n.textContent = String(r + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, m, u, d;
    const e = J.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, n = ((u = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : u.value) ?? 0, f = ((d = t.currentHealth) == null ? void 0 : d[e]) ?? 0;
    return J._healthStatusFromRatio(f, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var m, u, d, p;
    const t = J.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((m = s == null ? void 0 : s.system) == null ? void 0 : m.resources) ?? {}, f = ((d = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : d.value) ?? 0, l = ((p = n.currentHealth) == null ? void 0 : p[t]) ?? 0;
    return J._healthStatusFromRatio(l, f);
  }
  async _prepareContext(s) {
    var ot, ct, lt, ut, dt, mt, pt, ft, yt, Ve, gt, ht, We, w, x, R, U, ge, Z, Se, we, he, Ne, Je, Ye, Ct, qt, Lt, Nt, bt, it, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, as, rs, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((lt = (ct = (ot = this.actor.system) == null ? void 0 : ot.resources) == null ? void 0 : ct.stress) == null ? void 0 : lt.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, f = n.hitLocations ?? {}, l = n.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of m) {
      const N = ((ut = f[b]) == null ? void 0 : ut.value) ?? 0, L = l[b] ?? 0;
      e.computedHealthStatus[b] = J._healthStatusFromRatio(L, N);
    }
    const u = (Number(l.head) || 0) === 0, p = ["torso", "arms", "legs"].filter((b) => (Number(l[b]) || 0) === 0).length;
    e.showDeathSkull = u || p >= 2;
    const y = e.computedHealthStatus.legs ?? 3, r = Number(((mt = (dt = this.actor.system) == null ? void 0 : dt.combat) == null ? void 0 : mt.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = r;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const c = Number(((ft = (pt = this.actor.system) == null ? void 0 : pt.combat) == null ? void 0 : ft.givenProtection) ?? 0) || 0, a = (gt = (Ve = (yt = this.actor) == null ? void 0 : yt.statuses) == null ? void 0 : Ve.has) != null && gt.call(Ve, "lookaround") ? 1 : 0, g = (w = (We = (ht = this.actor) == null ? void 0 : ht.statuses) == null ? void 0 : We.has) != null && w.call(We, "halfcover") ? 3 : 0, h = (U = (R = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : R.has) != null && U.call(R, "threequarteredcover") ? 6 : 0, v = c + this._getTotalArmorProtectionBonus() + a + g + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const I = ((ge = e.system) == null ? void 0 : ge.combat) ?? {};
    e.totalDefense = (Number(I.defense) || 0) + (Number(I.defenseBonus) || 0) + (Number(I.givenProtection) || 0);
    const T = Number(I.givenSpeed);
    let D = (Number(I.speed) || 0) + (Number(I.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    y === 0 && (D = 0), (we = (Se = (Z = this.actor) == null ? void 0 : Z.statuses) == null ? void 0 : Se.has) != null && we.call(Se, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Ne = (he = e.system) == null ? void 0 : he.combat) == null ? void 0 : Ne.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const C = J.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(C)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = L, e.skillDisabled[b] = L === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], M = (_.slotOrder ?? "").trim(), F = M ? M.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], H = (Je = this.actor.system.gear) == null ? void 0 : Je.microchips, B = H && typeof H == "object" && !Array.isArray(H) ? H : {}, V = (((Ye = B.slot1) == null ? void 0 : Ye.itemId) ?? "").trim(), W = (((Ct = B.slot2) == null ? void 0 : Ct.itemId) ?? "").trim(), ce = (((qt = B.slot3) == null ? void 0 : qt.itemId) ?? "").trim(), k = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, P = typeof N.sort == "number" ? N.sort : 0;
      return L - P;
    }).map((b) => {
      var Ae, Qe, Ze, xe, Re, vt;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let P = 0, j = "", oe = null;
      for (let nt = 0; nt < F.length; nt++) {
        const kt = F[nt];
        if ((((Ae = _[kt]) == null ? void 0 : Ae.itemId) ?? "") === b.id) {
          P = nt + 1, j = ((Qe = _[kt]) == null ? void 0 : Qe.bonus) ?? "", oe = kt;
          break;
        }
      }
      let te = null;
      L && (V === b.id ? te = "slot1" : W === b.id ? te = "slot2" : ce === b.id && (te = "slot3"));
      const Xe = N && ((Ze = b.system) != null && Ze.damage) ? b.system.damage : "", be = N && typeof ((xe = b.system) == null ? void 0 : xe.range) == "string" ? (b.system.range || "").trim() : "", Ie = oe ? Number((Re = _[oe]) == null ? void 0 : Re.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: N,
        slotAssignment: P,
        slotBonus: j,
        slotKey: oe,
        microchipSlotKey: te,
        isEquipped: !!(oe || te),
        damage: Xe,
        rangeStr: be,
        slotBonusNum: Ie,
        quantity: Number(((vt = b.system) == null ? void 0 : vt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = k;
    const E = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Fegyver"), G = E.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = G;
    const Y = "— Nincs fegyver —", ee = F.filter((b) => {
      const L = ((_[b] ?? {}).itemId ?? "").trim();
      return L ? !!E.find((j) => j.id === L) : !1;
    });
    e.weaponSlots = ee.map((b, N) => {
      const L = _[b] ?? {}, P = (L.itemId ?? "").trim(), j = G.find((Ie) => Ie.id === P), oe = E.find((Ie) => Ie.id === P), te = (oe == null ? void 0 : oe.system) ?? {}, Xe = te.size === "thrown", be = (typeof te.range == "string" ? (te.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: P,
        slotNum: N + 1,
        displayName: (j == null ? void 0 : j.name) || L.name || Y,
        img: (j == null ? void 0 : j.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: Xe,
        rangeStr: be
      };
    });
    const ae = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, re = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = E.map((b) => {
      var ls, us, ds;
      const N = b.id;
      let L = null, P = {};
      for (const Ft of F)
        if ((((ls = _[Ft]) == null ? void 0 : ls.itemId) ?? "").trim() === N) {
          L = Ft, P = _[Ft] ?? {};
          break;
        }
      const j = !!L, oe = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : j, te = (b == null ? void 0 : b.system) ?? {}, Xe = typeof te.range == "string" ? (te.range || "").trim() : "", be = te.type ?? "", Ie = (ae[be] ?? be) || "—", Ae = te.size ?? "", Qe = (re[Ae] ?? Ae) || "", Ze = [Ie, Qe].filter(Boolean).join(", ") || Ie || "—", xe = be === "projectile" || Ae === "thrown", Re = te.quantity, vt = Re != null ? String(Re).trim() : "1", nt = String(P.bonus ?? "").trim(), kt = String(te.bonus ?? "").trim(), Us = nt || kt || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? Y,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: P.damage ?? te.damage ?? "",
        rangeStr: Xe || "—",
        typeLabel: Ie,
        typeAndSize: Ze,
        quantity: vt,
        quantityDisplay: xe ? vt : "—",
        isProjectile: xe,
        equipped: oe,
        special: (te.special ?? "").trim() || "—"
      };
    });
    const se = (((Nt = this.actor.items) == null ? void 0 : Nt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = se.map((b) => {
      var P, j;
      const N = (b == null ? void 0 : b.system) ?? {}, L = ((P = b.system) == null ? void 0 : P.equipped) !== void 0 && ((j = b.system) == null ? void 0 : j.equipped) !== null ? !!b.system.equipped : !1;
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        protectionBonus: (N.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (N.speedPenalty ?? "").toString().trim() || "—",
        level: li((N.level ?? "").toString().trim()),
        special: (N.special ?? N.other ?? "").toString().trim() || "—",
        equipped: L
      };
    });
    const le = (((bt = this.actor.items) == null ? void 0 : bt.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = le.map((b) => {
      const N = (b == null ? void 0 : b.system) ?? {}, L = (N.description ?? "").trim(), P = L ? L.length > 60 ? L.slice(0, 57) + "…" : L : "—", j = N.quantity != null ? String(N.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: j,
        description: P
      };
    });
    const fe = (((it = this.actor.items) == null ? void 0 : it.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = fe.map((b) => {
      const L = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), P = L ? L.length > 80 ? L.slice(0, 77) + "…" : L : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: P
      };
    });
    const je = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), ue = je.map((b) => ({ id: b.id, name: b.name, img: b.img })), Ee = "— Nincs Mikro-Chip —", ye = ["slot1", "slot2", "slot3"], Ke = (b) => {
      var L, P, j;
      const N = [];
      return b !== 1 && N.push((((L = B.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((P = B.slot2) == null ? void 0 : P.itemId) ?? "").trim()), b !== 3 && N.push((((j = B.slot3) == null ? void 0 : j.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = ue.filter((b) => !Ke(1).includes(b.id)), e.microchipItemsSlot2 = ue.filter((b) => !Ke(2).includes(b.id)), e.microchipItemsSlot3 = ue.filter((b) => !Ke(3).includes(b.id)), e.microchipSlots = ye.map((b) => {
      const N = B[b] ?? {}, L = (N.itemId ?? "").trim(), P = je.find((j) => j.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (P == null ? void 0 : P.name) || N.name || Ee,
        img: (P == null ? void 0 : P.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = B[N] ?? {}, P = (L.itemId ?? "").trim(), j = ue.find((oe) => oe.id === P);
      e[`microchip${b}ItemId`] = P, e[`microchip${b}DisplayName`] = (j == null ? void 0 : j.name) || L.name || Ee, e[`microchip${b}Img`] = (j == null ? void 0 : j.img) || "";
    }), e.microchipsTable = je.map((b) => {
      var Ae, Qe, Ze, xe;
      const N = b.id;
      let L = null;
      for (const Re of ye)
        if ((((Ae = B[Re]) == null ? void 0 : Ae.itemId) ?? "").trim() === N) {
          L = Re;
          break;
        }
      const P = !!L, j = ((Qe = b == null ? void 0 : b.system) == null ? void 0 : Qe.abilityType) ?? "", oe = j === "active" ? "Aktív" : j === "passive" ? "Passzív" : j || "—", te = j === "active", Xe = Number((Ze = b == null ? void 0 : b.system) == null ? void 0 : Ze.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, be = (((xe = b == null ? void 0 : b.system) == null ? void 0 : xe.description) ?? "").trim(), Ie = be ? be.length > 60 ? be.slice(0, 57) + "…" : be : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: oe,
        description: Ie,
        kp: Xe,
        isActive: te,
        slotKey: L ?? "",
        equipped: P
      };
    });
    const et = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !et;
    const ie = this.actor.system.abilities ?? {}, Le = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var N, L, P;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = b.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((P = b.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), ne = new Map(Le.map((b) => [b.id, b])), tt = "— Nincs képesség —", ze = (b) => {
      const N = ie[b] ?? {}, L = (N.itemId ?? "").trim(), P = L ? ne.get(L) : null, j = (P == null ? void 0 : P.description) ?? "", oe = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: L,
        displayName: (P == null ? void 0 : P.name) || N.name || tt,
        img: (P == null ? void 0 : P.img) || "",
        description: j,
        kp: oe
      };
    };
    e.abilityFajiSlot = ze("faji"), e.abilityHatterSlot = ze("hatter");
    const Fe = (b) => {
      const N = ie[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, Pe = (b) => b.map((N) => {
      const L = ne.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = Pe(Fe("passive")), e.abilityActiveList = Pe(Fe("active"));
    const St = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, st = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Ue = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, ke = typeof Ue == "number" ? Ue : -1, Tt = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], He = (as = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : as.initiativeRanges, Be = Array.isArray(He) ? He.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], $e = (Be.length > 0 ? Be : Tt).slice().sort((b, N) => b.min - N.min), Ge = Be.map((b) => b.min), Dt = Ge.length ? Math.min(...Ge) : 0, _t = Ge.length ? Math.max(...Ge) : 0;
    e.initiativeRanges = Be.map((b) => ({ ...b, isFirst: b.min === Dt, isLast: b.min === _t }));
    let rt = 0;
    if (typeof ke == "number" && ke >= 0 && $e.length > 0) {
      const b = $e[0], N = $e[$e.length - 1];
      let L = null;
      ke <= b.max ? L = b : ke >= N.min ? L = N : L = $e.find((P) => ke >= P.min && ke <= P.max), L && (rt = L.kp);
    }
    e.kpDots = st.map((b, N) => {
      const L = N + 1, P = !!Number(St[b]), j = L <= rt;
      return { index: L, used: P, usable: j };
    });
    const Ot = !!((os = (rs = game.combat) == null ? void 0 : rs.combatants) != null && os.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = Ot, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Ue == "number", e.initiativeResult = e.showInitiativeResult ? Ue : "", e;
  }
  _attachFrameListeners(s) {
    var y, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-DhZRxIFi.mjs");
      a(this.actor, c);
    }), t.on("click", ".karakter-weapon-damage", async (i) => {
      var a, g, h;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget;
      let c = (o.dataset.itemId ?? "").trim();
      if (!c) {
        const v = (o.dataset.slot ?? "").trim();
        if (!v) return;
        c = (((((g = (a = this.actor) == null ? void 0 : a.system) == null ? void 0 : g.weapons) ?? {})[v] ?? {}).itemId ?? "").trim();
      }
      c && await this._rollWeaponDamage(c, ((h = o.dataset.slot) == null ? void 0 : h.trim()) ?? "");
    }), t.on("click", ".karakter-harc-initiative", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const { openRollSheetForSkill: o } = await import("./roll-sheet-DhZRxIFi.mjs");
      o(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (i) => {
      var h, v;
      i.preventDefault(), i.stopPropagation();
      const o = i.currentTarget, c = parseInt(o.dataset.index, 10);
      if (!Number.isFinite(c) || c < 1 || c > 6) return;
      const a = `system.resources.kpDot${c}`, g = !!Number((v = (h = this.actor.system) == null ? void 0 : h.resources) == null ? void 0 : v[`kpDot${c}`]);
      await this.actor.update({ [a]: g ? 0 : 1 });
    }), !this.isEditable) return;
    const n = (i) => {
      var a;
      const o = i ? i.currentTarget : (a = e.querySelector) == null ? void 0 : a.call(e, 'input[name="system.resources.stress.value"]');
      if (!o) return;
      const c = Number(o.value) || 0;
      o.classList.toggle("karakter-stress-over-10", c > 10);
    };
    t.on("input change", 'input[name="system.resources.stress.value"]', n);
    const f = (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
    f && n({ currentTarget: f });
    const l = () => {
      this._writeTotalDefense(), this._writeTotalSpeed();
    };
    t.on("input change", 'input[name="system.combat.defense"], input[name="system.combat.defenseBonus"], input[name="system.combat.speed"], input[name="system.combat.speedBonus"]', l), this._writeEffectiveGivenSpeed(s), this._writeEffectiveGivenSpeed(e), this._writeEffectiveGivenProtection(s), this._writeEffectiveGivenProtection(e), this._writeTotalDefense(s), this._writeTotalDefense(e), this._writeTotalSpeed(s), this._writeTotalSpeed(e), requestAnimationFrame(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }), setTimeout(() => {
      this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed();
    }, 100), t.on("click", ".karakter-portrait-img", (i) => {
      var a, g, h;
      i.preventDefault(), i.stopPropagation();
      const o = ((h = (g = (a = foundry.applications) == null ? void 0 : a.apps) == null ? void 0 : g.FilePicker) == null ? void 0 : h.implementation) ?? globalThis.FilePicker;
      new o({
        type: "image",
        current: this.actor.img || "",
        callback: (v) => {
          v && this.actor.update({ img: v });
        }
      }).browse();
    }), t.on("click", ".karakter-skill-label", async (i) => {
      var h;
      i.preventDefault();
      const o = i.currentTarget, c = o.dataset.skill, a = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: g } = await import("./roll-sheet-DhZRxIFi.mjs");
      g(this.actor, c, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, D, C, _, q, M;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), a = c == null ? void 0 : c.dataset.slot;
      if (!a) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, h)) ?? ((q = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : q.call(_, (F) => F.id === h));
      (M = v == null ? void 0 : v.sheet) == null || M.render(!0);
    });
    const m = (i, o) => {
      var g;
      const c = i.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      if (a) {
        if (i.classList.contains("karakter-weapon-label") && (o.altKey || o.shiftKey || o.ctrlKey || o.metaKey)) {
          const h = i.dataset.weaponSlot;
          h && this._rollWeapon(h);
          return;
        }
        (g = a.sheet) == null || g.render(!0);
      }
    };
    t.on("click", ".karakter-inventory-item-name", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("click", ".karakter-inventory-item-icon", (i) => {
      i.preventDefault(), m(i.currentTarget, i);
    }), t.on("change", ".karakter-item-qty", async (i) => {
      const o = i.currentTarget, c = o.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a) return;
      let g = Number(o.value);
      (!Number.isFinite(g) || g < 0) && (g = 0), await a.update({ "system.quantity": g });
    }), t.on("click", ".karakter-item-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor, g = a.items.get(c);
      if (!g) return;
      const h = {};
      if ((g == null ? void 0 : g.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], C = D.find((_) => {
          var q;
          return (((q = v[_]) == null ? void 0 : q.itemId) ?? "").trim() === c;
        });
        if (C) {
          const _ = D.filter((q) => q !== C);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("change", ".karakter-weapon-equip-toggle", async (i) => {
      var C, _;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "Fegyver") return;
      const g = this.actor.system.weapons ?? {}, h = (g.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], T = I.find((q) => {
        var M;
        return (((M = g[q]) == null ? void 0 : M.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let q = I.find((F) => {
          var H;
          return !((H = g[F]) != null && H.itemId);
        });
        const M = new Set(I);
        if (!q) {
          const F = v.find((H) => !M.has(H));
          if (!F) return;
          q = F, I.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${q}.damage`]: ((C = a == null ? void 0 : a.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = a == null ? void 0 : a.system) == null ? void 0 : _.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const q = I.filter((M) => M !== T);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-microchip-slot-display", (i) => {
      i.preventDefault();
      const o = i.currentTarget;
      if (o.disabled) return;
      const c = o.closest(".karakter-microchip-slot-select-wrap"), a = c == null ? void 0 : c.classList.contains("karakter-microchip-slot-open");
      t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open"), !a && c && c.classList.add("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-slot-option", async (i) => {
      var q;
      i.preventDefault();
      const o = i.currentTarget, c = o.closest(".karakter-microchip-slot-select-wrap"), a = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display"), g = a == null ? void 0 : a.dataset.slot;
      if (!g) return;
      const h = (o.dataset.itemId ?? "").trim(), v = (o.dataset.itemName ?? ((q = o.textContent) == null ? void 0 : q.trim()) ?? "").trim() || "— Nincs Mikro-Chip —", I = (o.dataset.itemImg ?? "").trim(), T = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-display-text");
      T && (T.textContent = v);
      let D = c == null ? void 0 : c.querySelector(".karakter-microchip-slot-thumb");
      I ? (D || (D = document.createElement("img"), D.className = "karakter-microchip-slot-thumb", D.alt = "", a == null || a.insertBefore(D, T)), D.src = I, D.style.display = "") : D && D.remove(), c == null || c.classList.remove("karakter-microchip-slot-open");
      const C = h ? this.actor.items.get(h) : null, _ = {
        [`system.gear.microchips.${g}.itemId`]: h,
        [`system.gear.microchips.${g}.name`]: (C == null ? void 0 : C.name) ?? ""
      };
      h && (_[`system.gear.microchips.${g}.active`] = !0), await this.actor.update(_);
    }), $(document).on("click.votv-microchip-dropdown", (i) => {
      $(i.target).closest(".karakter-microchip-slot-select-wrap").length || t.find(".karakter-microchip-slot-select-wrap").removeClass("karakter-microchip-slot-open");
    }), t.on("click", ".karakter-microchip-delete", async (i) => {
      var v, I;
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      if (!c || c.type !== "MikroChip") return;
      const a = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, h = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = a[T]) == null ? void 0 : D.itemId) ?? "").trim() === o;
      });
      h && await this.actor.update({
        [`system.gear.microchips.${h}.itemId`]: "",
        [`system.gear.microchips.${h}.name`]: "",
        [`system.gear.microchips.${h}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("change", ".karakter-microchip-slot-active", async (i) => {
      const o = i.currentTarget.dataset.slot;
      if (!o) return;
      const c = i.currentTarget.checked;
      await this.actor.update({ [`system.gear.microchips.${o}.active`]: c }), this.render(!0);
    }), t.find(".karakter-microchip-slot").each((i, o) => {
      const c = o.dataset.slot;
      o.addEventListener("dragover", (a) => this._onMicrochipSlotDragOver(a, c)), o.addEventListener("dragleave", (a) => {
        var g;
        return (g = a.currentTarget) == null ? void 0 : g.classList.remove("karakter-microchip-slot-drag-over");
      }), o.addEventListener("drop", (a) => this._onMicrochipSlotDrop(a, c));
    }), t.find(".karakter-ability-slot-single").each((i, o) => {
      const c = o.dataset.slot;
      c && (o.addEventListener("dragover", (a) => this._onAbilitySingleDragOver(a, c)), o.addEventListener("dragleave", (a) => {
        var g;
        return (g = a.currentTarget) == null ? void 0 : g.classList.remove("karakter-ability-slot-drag-over");
      }), o.addEventListener("drop", (a) => {
        var g;
        (g = a.currentTarget) == null || g.classList.remove("karakter-ability-slot-drag-over");
      }));
    }), t.find(".karakter-ability-area").each((i, o) => {
      const c = o.dataset.area;
      c && (o.addEventListener("dragover", (a) => this._onAbilityAreaDragOver(a, c)), o.addEventListener("dragleave", (a) => {
        var g;
        return (g = a.currentTarget) == null ? void 0 : g.classList.remove("karakter-ability-area-drag-over");
      }), o.addEventListener("drop", (a) => {
        var g;
        (g = a.currentTarget) == null || g.classList.remove("karakter-ability-area-drag-over");
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
      const o = i.currentTarget.dataset.area, c = i.currentTarget.dataset.itemId;
      if (!o || !c) return;
      const a = this.actor.system.abilities ?? {}, h = (Array.isArray((v = a[o]) == null ? void 0 : v.items) ? a[o].items.slice() : []).filter((I) => I !== c);
      await this.actor.update({ [`system.abilities.${o}.items`]: h });
    }), t.on("click", ".karakter-ability-open", (i) => {
      var g;
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      (g = a == null ? void 0 : a.sheet) == null || g.render(!0);
    }), t.on("click", ".karakter-ability-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      c && await this._postAbilityToChat(c);
    }), t.on("click", ".karakter-item-chat", async (i) => {
      i.preventDefault();
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor.items.get(c);
      a && (a.type === "Kepesseg" || a.type === "ability" ? await this._postAbilityToChat(c) : (a.type === "MikroChip" || a.type === "Egyeb") && await this._postItemToChat(c));
    }), t.on("focus input blur", ".karakter-weapon-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-weapon-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-weapon-quantity-input", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "Fegyver") return;
      const g = (o.value ?? "").trim();
      await a.update({ "system.quantity": g }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-weapon-quantity-input[data-item-id="${c}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    }), t.on("change", ".karakter-armor-equipped-checkbox", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      !a || a.type !== "Pancel" || (await a.update({ "system.equipped": o.checked }), this._writeEffectiveGivenSpeed(), this._writeEffectiveGivenProtection(), this._writeTotalDefense(), this._writeTotalSpeed());
    }), t.on("change", ".karakter-weapon-equipped-checkbox", async (i) => {
      var C, _;
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "Fegyver") return;
      const g = this.actor.system.weapons ?? {}, h = (g.slotOrder ?? "").trim(), v = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], I = h ? h.split(/\s*,\s*/).filter((q) => v.includes(q)) : [], T = I.find((q) => {
        var M;
        return (((M = g[q]) == null ? void 0 : M.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let q = I.find((F) => {
          var H;
          return !((H = g[F]) != null && H.itemId);
        });
        const M = new Set(I);
        if (!q) {
          const F = v.find((H) => !M.has(H));
          if (!F) return;
          q = F, I.push(F);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: a.name ?? "",
          [`system.weapons.${q}.damage`]: ((C = a.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = a.system) == null ? void 0 : _.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const q = I.filter((M) => M !== T);
        await this.actor.update({
          "system.weapons.slotOrder": q.join(","),
          [`system.weapons.${T}.itemId`]: "",
          [`system.weapons.${T}.name`]: "",
          [`system.weapons.${T}.damage`]: "",
          [`system.weapons.${T}.bonus`]: ""
        }), await a.update({ "system.equipped": !1 });
      }
    }), t.on("click", ".karakter-weapon-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const c = i.currentTarget.dataset.itemId;
      if (!c) return;
      const a = this.actor, g = a.items.get(c), h = {};
      if ((g == null ? void 0 : g.type) === "Fegyver") {
        const v = a.system.weapons ?? {}, I = (v.slotOrder ?? "").trim(), T = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], D = I ? I.split(/\s*,\s*/).filter((_) => T.includes(_)) : [], C = D.find((_) => {
          var q;
          return (((q = v[_]) == null ? void 0 : q.itemId) ?? "").trim() === c;
        });
        if (C) {
          const _ = D.filter((q) => q !== C);
          h["system.weapons.slotOrder"] = _.join(","), h[`system.weapons.${C}.itemId`] = "", h[`system.weapons.${C}.name`] = "", h[`system.weapons.${C}.damage`] = "", h[`system.weapons.${C}.bonus`] = "";
        }
      }
      Object.keys(h).length && await a.update(h), await a.deleteEmbeddedDocuments("Item", [c]);
    }), t.on("click", ".karakter-armor-delete", async (i) => {
      if (i.preventDefault(), !i.altKey) return;
      const o = i.currentTarget.dataset.itemId;
      if (!o) return;
      const c = this.actor.items.get(o);
      !c || c.type !== "Pancel" || await this.actor.deleteEmbeddedDocuments("Item", [o]);
    }), t.on("focus input blur", ".karakter-item-quantity-input", (i) => {
      this._resizeWeaponQuantityInput(i.currentTarget);
    }), t.find(".karakter-item-quantity-input").each((i, o) => {
      this._resizeWeaponQuantityInput(o);
    }), t.on("change", ".karakter-item-quantity-input", async (i) => {
      const o = i.currentTarget, c = (o.dataset.itemId ?? "").trim();
      if (!c) return;
      const a = this.actor.items.get(c);
      if (!a || a.type !== "Targy") return;
      const g = (o.value ?? "").trim();
      await a.update({ "system.quantity": g }), setTimeout(() => {
        const h = this.form ?? this.element, v = h == null ? void 0 : h.querySelector(`.karakter-item-quantity-input[data-item-id="${c}"]`);
        v && this._resizeWeaponQuantityInput(v);
      }, 80);
    });
    const u = this, d = (i) => {
      var a, g, h, v;
      if (!i) return;
      const o = u._getFormDataForUpdate(i);
      if (Object.keys(o).length === 0) return;
      const c = ((g = (a = o.system) == null ? void 0 : a.resources) == null ? void 0 : g.currentHealth) != null || ((v = (h = o.system) == null ? void 0 : h.resources) == null ? void 0 : v.hitLocations) != null;
      u.actor.update(o).then(() => {
        c && setTimeout(() => u.render(!0), 260);
      }).catch((I) => console.warn("VoidKarakterSheet save failed", I));
    }, p = (i) => {
      var o, c, a;
      return i && (((c = (o = u.element) == null ? void 0 : o.contains) == null ? void 0 : c.call(o, i)) || u.id && ((a = i.closest) == null ? void 0 : a.call(i, `#${CSS.escape(u.id)}`)));
    };
    u._votvBlur = (i) => {
      var h;
      const o = i.target;
      if (!o || !o.form) return;
      const c = o.tagName;
      if (c !== "INPUT" && c !== "TEXTAREA" && c !== "SELECT") return;
      const a = o.form;
      if (!p(a)) return;
      const g = i.relatedTarget;
      g && (a.contains(g) || u.id && ((h = g.closest) != null && h.call(g, `#${CSS.escape(u.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: u.id, at: Date.now() }), d(a));
    }, document.body.addEventListener("blur", u._votvBlur, !0);
  }
  _tearDown(s) {
    var e;
    return document.body.removeEventListener("blur", this._votvBlur, !0), (e = super._tearDown) == null ? void 0 : e.call(this, s);
  }
  _getFormDataForUpdate(s) {
    var m, u, d;
    const e = {};
    for (const p of s.elements) {
      if (!p.name || p.disabled || p.type === "radio" && !p.checked || p.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      p.type === "checkbox" ? y = p.checked : p.type === "number" ? y = p.value === "" ? 0 : Number(p.value) : y = p.value ?? "", foundry.utils.setProperty(e, p.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), n = t.hitLocations ?? {}, f = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const p of l) {
      const y = ((d = n[p]) == null ? void 0 : d.value) ?? 0, r = f[p] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${p}`, J._healthStatusFromRatio(r, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, f, l, m, u, d, p, y, r, i, o;
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((t = e.data) == null ? void 0 : t.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            c = a;
            break;
          }
      }
      if (c) {
        const a = await fromUuid(c);
        if (a && a.documentName === "Item" && (a.type === "Kepesseg" || a.type === "ability")) {
          let g = a.id;
          if (((n = a.parent) == null ? void 0 : n.id) !== this.actor.id) {
            const D = foundry.utils.mergeObject(a.toObject(), { type: "Kepesseg" });
            g = ((f = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : f.id) ?? g;
          }
          const h = (((l = a.system) == null ? void 0 : l.kind) ?? "passive").toString(), v = this.actor.system.abilities ?? {};
          if (h === "species") {
            await this.actor.update({
              "system.abilities.faji.itemId": g,
              "system.abilities.faji.name": a.name
            });
            return;
          }
          if (h === "background") {
            await this.actor.update({
              "system.abilities.hatter.itemId": g,
              "system.abilities.hatter.name": a.name
            });
            return;
          }
          const I = h === "active" ? "active" : "passive", T = Array.isArray((m = v[I]) == null ? void 0 : m.items) ? v[I].items.slice() : Array.isArray(v[I]) ? v[I].slice() : [];
          T.includes(g) || T.push(g), await this.actor.update({ [`system.abilities.${I}.items`]: T });
          return;
        }
      }
    }
    if (e) {
      let c = e.uuid ?? e.documentUuid ?? ((u = e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
      if (!c && typeof e == "object") {
        for (const a of Object.values(e))
          if (typeof a == "string" && a.includes(".") && a.startsWith("Item.")) {
            c = a;
            break;
          }
      }
      if (c) {
        const a = await fromUuid(c);
        if (a && a.documentName === "Item" && a.type === "Fegyver") {
          const g = this.actor, h = ((d = a.parent) == null ? void 0 : d.id) !== g.id;
          let v = a.id;
          if (h) {
            const I = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            v = ((p = (await g.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : p.id) ?? v;
          }
          if (h) {
            const I = ((y = g.system) == null ? void 0 : y.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = T ? T.split(/\s*,\s*/).filter((q) => D.includes(q)) : [], _ = C.filter((q) => {
              var M;
              return (((M = I[q]) == null ? void 0 : M.itemId) ?? "").trim() === v;
            });
            if (_.length > 0) {
              const M = {
                "system.weapons.slotOrder": C.filter((F) => !_.includes(F)).join(",")
              };
              for (const F of _)
                M[`system.weapons.${F}.itemId`] = "", M[`system.weapons.${F}.name`] = "", M[`system.weapons.${F}.damage`] = "", M[`system.weapons.${F}.bonus`] = "";
              await g.update(M);
            }
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "Pancel") {
          const g = this.actor;
          if (((r = a.parent) == null ? void 0 : r.id) !== g.id) {
            const h = foundry.utils.mergeObject(a.toObject(), { system: { ...a.toObject().system ?? {}, equipped: !1 } });
            await g.createEmbeddedDocuments("Item", [h]);
          }
          return;
        }
        if (a && a.documentName === "Item" && a.type === "MikroChip") {
          const g = this.actor;
          ((i = a.parent) == null ? void 0 : i.id) !== g.id && await g.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
        if (a && a.documentName === "Item" && (a.type === "Targy" || a.type === "Egyeb")) {
          const g = this.actor;
          ((o = a.parent) == null ? void 0 : o.id) !== g.id && await g.createEmbeddedDocuments("Item", [a.toObject()]);
          return;
        }
      }
    }
    return super._onDropItem(s, e);
  }
  _onWeaponSlotDragOver(s, e) {
    var f, l, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var m, u, d, p, y, r;
    s.preventDefault(), s.stopPropagation(), (m = s.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    const l = f.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
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
    var d, p;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const f = this.actor.items.contents.slice().sort((y, r) => {
      const i = typeof y.sort == "number" ? y.sort : 0, o = typeof r.sort == "number" ? r.sort : 0;
      return i - o;
    }).map((y) => y.id), l = f.indexOf(t), m = f.indexOf(e);
    if (l === -1 || m === -1) return;
    f.splice(l, 1), f.splice(m, 0, t);
    const u = f.map((y, r) => ({
      _id: y,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
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
    var u, d, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((p = e.system) == null ? void 0 : p.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var p, y, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((p = e.system) == null ? void 0 : p.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, f = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = f ? `<p>${f}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${m}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: d,
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
    var l, m, u;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((u = (await this.actor.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : u.id) ?? f;
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
    var u, d, p, y;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let f = n.id;
    if (((d = n.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      f = ((p = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : p.id) ?? f;
    }
    const l = this.actor.system.abilities ?? {}, m = Array.isArray((y = l[e]) == null ? void 0 : y.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    m.includes(f) || m.push(f), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(s, e) {
    var f, l, m;
    const t = ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var m, u, d, p, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
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
    ((p = f.parent) == null ? void 0 : p.id) !== this.actor.id && (l = ((y = (await this.actor.createEmbeddedDocuments("Item", [f.toObject()]))[0]) == null ? void 0 : y.id) ?? l), await this.actor.update({
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
    const u = `3d6${f !== 0 ? f > 0 ? `+${f}` : `${f}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const { resultType: p, label: y } = Rt(d), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: p, critLabel: y } },
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
    var I, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, f = this.actor.items.filter((D) => D.type === "Fegyver");
    let l = null;
    t.itemId && (l = f.find((D) => D.id === t.itemId) ?? null);
    const m = l && l.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, d = ((I = l == null ? void 0 : l.system) == null ? void 0 : I.type) || "kinetic", p = (((T = l == null ? void 0 : l.system) == null ? void 0 : T.skillKey) ?? "").trim(), y = p && n[p] !== void 0 ? p : d === "explosive" ? "grenadeUse" : "firearms", r = Number(n[y] || 0) || 0, i = u + r, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(c);
    await a.evaluate({ async: !0 });
    const { resultType: g, label: h } = Rt(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, d, p, y, r, i, o, c, a, g;
    const t = this.actor;
    if (!t) return;
    let n = ((d = (u = t.items).get) == null ? void 0 : d.call(u, s)) ?? ((y = (p = t.items.contents) == null ? void 0 : p.find) == null ? void 0 : y.call(p, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (g = (o = ui.notifications) == null ? void 0 : o.warn) == null || g.call(o, ((a = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : a.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(f);
    await l.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
};
X(J, "PARTS", foundry.utils.mergeObject(
  K(J, J, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), X(J, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(J, J, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = K(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = K(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = K(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
X(J, "BODY_PART_BY_SKILL", {
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
let It = J;
function di(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ss, Ts, Ds, _s;
const me = class me extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, f, l, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, o = n.contains(i), c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      o && c && (f.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const l = await super.render(s, e), m = this.element, u = this.form ?? this.element, d = f.scrollState, p = f.focus, y = typeof (d == null ? void 0 : d.formScrollTop) == "number" || typeof (d == null ? void 0 : d.windowScrollTop) == "number", r = () => {
      var i, o;
      if (this._applyScrollState(m, d), (p == null ? void 0 : p.name) != null || (p == null ? void 0 : p.id) != null) {
        const c = ((i = u.querySelector) == null ? void 0 : i.call(u, p.id ? `#${CSS.escape(p.id)}` : null)) ?? (p.name ? (o = u.querySelector) == null ? void 0 : o.call(u, `[name="${CSS.escape(p.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = p.selectionStart ?? 0, c.selectionEnd = p.selectionEnd ?? p.selectionStart ?? 0));
      }
      this._applyScrollState(m, d);
    };
    return (y || p) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), l;
  }
  async _prepareContext(s) {
    var ze, Fe, Pe, St, st, Ue, ke, Tt, He, Be, Et, $e, Ge, Dt, _t, rt, Ot, ot, ct, lt, ut, dt, mt, pt, ft, yt, Ve, gt, ht, We;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((ze = this.actor) == null ? void 0 : ze.system), e.showDeathSkull = !1, e.sizeForSelect = (((Pe = (Fe = e.system) == null ? void 0 : Fe.identity) == null ? void 0 : Pe.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((St = e.system) == null ? void 0 : St.combat) ?? {}, f = Number(n.givenProtection ?? 0) || 0, l = (Ue = (st = t == null ? void 0 : t.statuses) == null ? void 0 : st.has) != null && Ue.call(st, "lookaround") ? 1 : 0, m = (Tt = (ke = t == null ? void 0 : t.statuses) == null ? void 0 : ke.has) != null && Tt.call(ke, "halfcover") ? 3 : 0, u = (Be = (He = t == null ? void 0 : t.statuses) == null ? void 0 : He.has) != null && Be.call(He, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = f + l + m + u;
    const d = ((Et = t == null ? void 0 : t.items) == null ? void 0 : Et.contents) ?? [], p = (($e = t == null ? void 0 : t.system) == null ? void 0 : $e.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (p.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((w) => y.includes(w)) : [], o = d.filter((w) => w.type === "Fegyver"), c = o.map((w) => ({ id: w.id, name: w.name, img: w.img })), a = "— Nincs fegyver —", g = i.length > 0 ? i : y, h = y.filter((w) => !g.includes(w)), v = [...g, ...h], I = v.filter((w) => {
      var R;
      const x = (((R = p[w]) == null ? void 0 : R.itemId) ?? "").trim();
      return x && o.some((U) => U.id === x);
    });
    e.weaponSlots = I.map((w) => {
      const x = p[w] ?? {}, R = (x.itemId ?? "").trim(), U = c.find((he) => he.id === R), ge = o.find((he) => he.id === R), Z = (ge == null ? void 0 : ge.system) ?? {}, Se = Z.size === "thrown", we = (typeof Z.range == "string" ? (Z.range || "").trim() : "") || "—";
      return {
        slotKey: w,
        itemId: R,
        displayName: (U == null ? void 0 : U.name) || x.name || a,
        img: (U == null ? void 0 : U.img) || "",
        isThrown: Se,
        rangeStr: we
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((w) => {
      var bt;
      const x = w.id;
      let R = null, U = {};
      for (const it of v)
        if ((((bt = p[it]) == null ? void 0 : bt.itemId) ?? "").trim() === x) {
          R = it, U = p[it] ?? {};
          break;
        }
      const ge = !!R, Z = (w == null ? void 0 : w.system) ?? {}, Se = typeof Z.range == "string" ? (Z.range || "").trim() : "", we = Z.type ?? "", he = (T[we] ?? we) || "—", Ne = Z.size ?? "", Je = (D[Ne] ?? Ne) || "", Ye = [he, Je].filter(Boolean).join(", ") || he || "—", Ct = we === "projectile" || Ne === "thrown", qt = Z.quantity != null ? String(Z.quantity).trim() : "1", Lt = String(Z.bonus ?? U.bonus ?? "").trim() || "0", Nt = (Z.damage ?? U.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: x,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? a,
        img: (w == null ? void 0 : w.img) ?? "",
        bonus: Lt,
        damage: Nt,
        rangeStr: Se || "—",
        typeAndSize: Ye,
        quantity: qt,
        isProjectile: Ct,
        equipped: ge,
        special: (Z.special ?? "").trim() || "—"
      };
    });
    const C = d.filter((w) => w.type === "Pancel");
    e.armorTable = C.map((w) => {
      var U;
      const x = (w == null ? void 0 : w.system) ?? {}, R = ((U = w.system) == null ? void 0 : U.equipped) === !0;
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: di((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const _ = ((Dt = (Ge = t == null ? void 0 : t.system) == null ? void 0 : Ge.gear) == null ? void 0 : Dt.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], M = d.filter((w) => w.type === "MikroChip");
    e.microchipsTable = M.map((w) => {
      var we, he, Ne, Je;
      const x = w.id;
      let R = null;
      for (const Ye of q)
        if ((((we = _[Ye]) == null ? void 0 : we.itemId) ?? "").trim() === x) {
          R = Ye;
          break;
        }
      const U = ((he = w == null ? void 0 : w.system) == null ? void 0 : he.abilityType) ?? "", ge = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", Z = (((Ne = w == null ? void 0 : w.system) == null ? void 0 : Ne.description) ?? "").trim(), Se = Z ? Z.length > 60 ? Z.slice(0, 57) + "…" : Z : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        typeLabel: ge,
        description: Se,
        kp: Number((Je = w == null ? void 0 : w.system) == null ? void 0 : Je.replaceCost) >= 0 ? Number(w.system.replaceCost) : 0,
        isActive: U === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const F = d.filter((w) => w.type === "Targy");
    e.itemsTable = F.map((w) => {
      const x = (w == null ? void 0 : w.system) ?? {}, R = (x.description ?? "").trim(), U = R ? R.length > 60 ? R.slice(0, 57) + "…" : R : "—";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: U
      };
    });
    const H = d.filter((w) => w.type === "Egyeb");
    e.egyebList = H.map((w) => {
      const R = (((w == null ? void 0 : w.system) ?? {}).description ?? "").trim(), U = R ? R.length > 80 ? R.slice(0, 77) + "…" : R : "";
      return {
        itemId: w.id,
        actorId: t.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        description: U
      };
    });
    const B = (((_t = e.weaponsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((rt = e.armorTable) == null ? void 0 : rt.length) ?? 0) > 0 || (((Ot = e.microchipsTable) == null ? void 0 : Ot.length) ?? 0) > 0 || (((ot = e.itemsTable) == null ? void 0 : ot.length) ?? 0) > 0 || (((ct = e.egyebList) == null ? void 0 : ct.length) ?? 0) > 0;
    e.showEquipmentDropZone = !B;
    const V = ((lt = t == null ? void 0 : t.system) == null ? void 0 : lt.abilities) ?? {}, W = d.filter((w) => w.type === "Kepesseg" || w.type === "ability").map((w) => {
      var x, R, U;
      return {
        id: w.id,
        name: w.name,
        img: w.img,
        description: ((x = w.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((R = w.system) == null ? void 0 : R.kp) ?? 0) || 0,
        kind: (((U = w.system) == null ? void 0 : U.kind) ?? "passive").toString()
      };
    }), ce = new Map(W.map((w) => [w.id, w])), Q = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = Q, e.abilityHatterSlot = Q;
    const k = (w) => {
      const x = V[w];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, E = (w) => (w || []).map((x) => {
      const R = ce.get(x);
      if (!R) return null;
      const U = R.kind === "species";
      return {
        id: R.id,
        name: R.name,
        img: R.img,
        description: R.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: U ? 0 : R.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = E(k("passive")), e.abilityActiveList = E(k("active"));
    const G = t == null ? void 0 : t.id, Y = !!((dt = (ut = game.combat) == null ? void 0 : ut.combatants) != null && dt.some(
      (w) => {
        var x;
        return (((x = w.actor) == null ? void 0 : x.id) ?? w.actorId) === G;
      }
    ));
    e.showHarcSection = Y;
    const ee = ((mt = e.system) == null ? void 0 : mt.resources) ?? {}, ae = (ft = (pt = e.system) == null ? void 0 : pt.combat) == null ? void 0 : ft.initiativeResult, re = typeof ae == "number" ? ae : -1, se = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], le = (Ve = (yt = e.system) == null ? void 0 : yt.combat) == null ? void 0 : Ve.initiativeRanges, fe = Array.isArray(le) ? le.map((w) => ({ min: Number(w.min) ?? 0, max: Number(w.max) ?? 0, kp: Math.min(10, Math.max(0, Number(w.kp) ?? 0)) })) : [], ue = (fe.length > 0 ? fe : se).slice().sort((w, x) => w.min - x.min), Ee = 3;
    let ye = fe.length > 0 ? fe : [];
    ye.length < Ee && (ye = [...ye, ...Array(Ee - ye.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = ye.map((w, x) => ({
      ...w,
      isFirst: x === 0,
      isLast: x === ye.length - 1
    }));
    let Ke = 0;
    if (typeof re == "number" && re >= 0 && ue.length > 0) {
      const w = ue[0], x = ue[ue.length - 1];
      let R = null;
      re <= w.max ? R = w : re >= x.min ? R = x : R = ue.find((U) => re >= U.min && re <= U.max), R && (Ke = R.kp);
    }
    const et = ue.length > 0 ? ue[ue.length - 1] : null, ie = Math.min(10, et ? et.kp : 6), ne = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, ie)).map((w, x) => {
      const R = x + 1, U = !!Number(ee[w]), ge = R <= Ke;
      return { index: R, used: U, usable: ge };
    }), tt = Math.ceil(ne.length / 2);
    return e.kpDotsRow1 = ne.slice(0, tt), e.kpDotsRow2 = ne.slice(tt), e.canEditInitiative = !!((gt = game.user) != null && gt.isGM), e.showInitiativeResult = typeof ae == "number", e.initiativeResult = e.showInitiativeResult ? ae : "", e.speedUnitForSelect = ((We = (ht = e.system) == null ? void 0 : ht.combat) == null ? void 0 : We.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var d, p, y;
    super._attachFrameListeners(s);
    const e = ((d = s == null ? void 0 : s.querySelector) == null ? void 0 : d.call(s, "form.votv.npc-sheet")) ?? s ?? this.form ?? this.element, t = e ? $(e) : $([]);
    t.on("click", ".karakter-portrait-img", (r) => {
      var c, a, g;
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const i = ((g = (a = (c = foundry.applications) == null ? void 0 : c.apps) == null ? void 0 : a.FilePicker) == null ? void 0 : g.implementation) ?? globalThis.FilePicker;
      new i({
        type: "image",
        current: this.actor.img || "",
        callback: (h) => {
          h && this.actor.update({ img: h });
        }
      }).browse();
    }), t.on("click", ".karakter-ability-open", (r) => {
      var c, a, g;
      r.preventDefault();
      const i = (a = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (g = o == null ? void 0 : o.sheet) == null || g.render(!0);
    });
    const n = (r) => {
      var c, a;
      const i = (c = r == null ? void 0 : r.dataset) == null ? void 0 : c.itemId;
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      (a = o == null ? void 0 : o.sheet) == null || a.render(!0);
    };
    t.on("click", ".karakter-inventory-item-name", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-inventory-item-icon", (r) => {
      r.preventDefault(), n(r.currentTarget);
    }), t.on("click", ".karakter-weapon-slot-display, .karakter-weapon-slot-display-text", (r) => {
      var a, g, h, v;
      r.preventDefault();
      const i = (g = (a = r.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : g.call(a, ".karakter-weapon-slot"), o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      (v = c == null ? void 0 : c.sheet) == null || v.render(!0);
    }), t.on("click", ".karakter-weapon-attack", async (r) => {
      var a;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, o = (((a = i == null ? void 0 : i.dataset) == null ? void 0 : a.slot) ?? "").trim();
      if (!o || !this.actor) return;
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-DhZRxIFi.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var c, a, g, h, v;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let o = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (o = (((((h = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-DhZRxIFi.mjs");
      i(this.actor, "quickThinking", "Kezdeményezés");
    }), t.on("click", ".karakter-kp-dot", async (r) => {
      var a, g;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget, o = parseInt(i.dataset.index, 10);
      if (!Number.isFinite(o) || o < 1 || o > 10 || !this.actor) return;
      const c = !!Number((g = (a = this.actor.system) == null ? void 0 : a.resources) == null ? void 0 : g[`kpDot${o}`]);
      await this.actor.update({ [`system.resources.kpDot${o}`]: c ? 0 : 1 });
    }), t.on("click", ".karakter-skill-label", async (r) => {
      var g, h;
      r.preventDefault();
      const i = r.currentTarget, o = (((g = i == null ? void 0 : i.dataset) == null ? void 0 : g.skill) ?? "").trim(), c = ((h = i == null ? void 0 : i.textContent) == null ? void 0 : h.trim()) || o;
      if (!o || !this.actor) return;
      const { openRollSheetForSkill: a } = await import("./roll-sheet-DhZRxIFi.mjs");
      a(this.actor, o, c);
    }), t.on("click", ".karakter-ability-chat", async (r) => {
      var o, c;
      r.preventDefault();
      const i = (c = (o = r.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId;
      i && await this._postAbilityToChat(i);
    }), t.on("click", ".karakter-item-chat", async (r) => {
      var c, a;
      r.preventDefault();
      const i = (((a = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      o && (o.type === "Kepesseg" || o.type === "ability" ? await this._postAbilityToChat(i) : (o.type === "MikroChip" || o.type === "Egyeb") && await this._postItemToChat(i));
    }), t.on("click", ".karakter-ability-pill-remove", async (r) => {
      var h, v, I, T, D, C;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.area, o = (T = (I = r.currentTarget) == null ? void 0 : I.dataset) == null ? void 0 : T.itemId;
      if (!i || !o || !this.actor) return;
      const c = ((D = this.actor.system) == null ? void 0 : D.abilities) ?? {}, g = (Array.isArray((C = c[i]) == null ? void 0 : C.items) ? c[i].items.slice() : []).filter((_) => _ !== o);
      await this.actor.update({ [`system.abilities.${i}.items`]: g }), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-ability-slot-clear", async (r) => {
      var o, c;
      if (r.preventDefault(), !r.altKey) return;
      const i = (c = (o = r.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.slot;
      i && (await this.actor.update({
        [`system.abilities.${i}.itemId`]: "",
        [`system.abilities.${i}.name`]: ""
      }), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-weapon-delete", async (r) => {
      var h, v;
      if (r.preventDefault(), !r.altKey) return;
      const i = r.currentTarget, o = (((h = i == null ? void 0 : i.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!o || !this.actor) return;
      const c = this.actor, a = (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slotKey) ?? "").trim(), g = {};
      a && (g[`system.weapons.${a}.itemId`] = "", g[`system.weapons.${a}.name`] = "", g[`system.weapons.${a}.damage`] = "", g[`system.weapons.${a}.bonus`] = ""), Object.keys(g).length && await c.update(g), await c.deleteEmbeddedDocuments("Item", [o]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-armor-delete", async (r) => {
      var o, c;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((c = (o = r.currentTarget) == null ? void 0 : o.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !i || !this.actor || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    }), t.on("click", ".karakter-microchip-delete", async (r) => {
      var g, h, v, I;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((h = (g = r.currentTarget) == null ? void 0 : g.dataset) == null ? void 0 : h.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = ((I = (v = this.actor.system) == null ? void 0 : v.gear) == null ? void 0 : I.microchips) ?? {}, a = ["slot1", "slot2", "slot3"].find((T) => {
        var D;
        return (((D = o[T]) == null ? void 0 : D.itemId) ?? "").trim() === i;
      });
      a && await this.actor.update({
        [`system.gear.microchips.${a}.itemId`]: "",
        [`system.gear.microchips.${a}.name`]: "",
        [`system.gear.microchips.${a}.active`]: !1
      }), await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0);
    }), t.on("click", ".karakter-item-delete", async (r) => {
      var c, a;
      if (r.preventDefault(), !r.altKey) return;
      const i = (((a = (c = r.currentTarget) == null ? void 0 : c.dataset) == null ? void 0 : a.itemId) ?? "").trim();
      if (!i || !this.actor) return;
      const o = this.actor.items.get(i);
      !o || o.type !== "Targy" && o.type !== "Egyeb" || (await this.actor.deleteEmbeddedDocuments("Item", [i]), typeof this.render == "function" && this.render(!0));
    });
    const f = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (p = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : p.call(e, f)) == null || y.forEach((r) => {
      var i;
      (((i = r.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (r.draggable = !0);
    }), t.on("dragstart", f, (r) => {
      var g, h, v;
      const i = r.currentTarget, o = (h = (g = i == null ? void 0 : i.dataset) == null ? void 0 : g.itemId) == null ? void 0 : h.trim();
      if (!o || !this.actor) return;
      const c = this.actor.items.get(o);
      if (!c) return;
      const a = c.uuid;
      r.dataTransfer && (r.dataTransfer.setData("text/plain", a), r.dataTransfer.setData("application/json", JSON.stringify({ type: "Item", uuid: a })), r.dataTransfer.effectAllowed = "copyMove"), typeof ((v = r.dataTransfer) == null ? void 0 : v.setDragImage) == "function" && i && r.dataTransfer.setDragImage(i, 0, 0);
    });
    const l = this, m = (r) => {
      if (!r) return;
      const i = l._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && l.actor.update(i).catch((o) => console.warn("VoidNpcSheet save failed", o));
    }, u = (r) => {
      var i, o, c;
      return r && (((o = (i = l.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, r)) || l.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(l.id)}`)));
    };
    l._votvNpcBlur = (r) => {
      var g;
      const i = r.target;
      if (!i || !i.form) return;
      const o = i.tagName;
      if (o !== "INPUT" && o !== "TEXTAREA" && o !== "SELECT") return;
      const c = i.form;
      if (!u(c)) return;
      const a = r.relatedTarget;
      a && (c.contains(a) || l.id && ((g = a.closest) != null && g.call(a, `#${CSS.escape(l.id)}`))) || m(c);
    }, document.body.addEventListener("blur", l._votvNpcBlur, !0), l._votvNpcItemHookRegistered || (l._votvNpcItemUpdateHook = (r, i, o) => {
      var c;
      l.actor && ((c = r == null ? void 0 : r.parent) == null ? void 0 : c.id) === l.actor.id && l.render(!0);
    }, l._votvNpcItemDeleteHook = (r, i, o) => {
      var c;
      l.actor && ((c = r == null ? void 0 : r.parent) == null ? void 0 : c.id) === l.actor.id && l.render(!0);
    }, Hooks.on("updateItem", l._votvNpcItemUpdateHook), Hooks.on("deleteItem", l._votvNpcItemDeleteHook), l._votvNpcItemHookRegistered = !0);
  }
  async _preClose(s) {
    var t, n, f;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const l = this._getFormDataForUpdate(e);
      Object.keys(l).length > 0 && await this.actor.update(l).catch((m) => console.warn("VoidNpcSheet save on preClose failed", m));
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
    var T, D, C, _, q;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, f = ((D = e.system) == null ? void 0 : D.skills) ?? {}, l = ((C = e.items) == null ? void 0 : C.filter((M) => M.type === "Fegyver")) ?? [];
    let m = null;
    n.itemId && (m = l.find((M) => M.id === n.itemId) ?? null);
    const u = m && m.name || n.name || "Fegyver", d = Number(n.bonus || 0) || 0, p = ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.type) || "kinetic", y = (((q = m == null ? void 0 : m.system) == null ? void 0 : q.skillKey) ?? "").trim(), r = y && f[y] !== void 0 ? y : p === "explosive" ? "grenadeUse" : "firearms", i = Number(f[r] || 0) || 0, o = d + i, a = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, g = new Roll(a);
    await g.evaluate({ async: !0 });
    const { resultType: h, label: v } = Rt(g), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, d, p, y, r, i, o, c, a, g;
    const t = this.actor;
    if (!t) return;
    const n = ((d = (u = t.items).get) == null ? void 0 : d.call(u, s)) ?? ((y = (p = t.items.contents) == null ? void 0 : p.find) == null ? void 0 : y.call(p, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let f = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!f && e && (f = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !f) {
      (g = (o = ui.notifications) == null ? void 0 : o.warn) == null || g.call(o, ((a = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : a.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(f);
    await l.evaluate({ async: !0 });
    const m = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return l.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: t, alias: (t == null ? void 0 : t.name) ?? void 0 }),
      flavor: `${n.name} – sebzés`,
      flags: { "vacuum-of-the-void": {} },
      rollMode: m
    });
  }
  async _onDropItem(s, e) {
    var p, y, r, i, o, c, a, g, h, v, I, T, D, C, _, q, M;
    if (!this.actor) return (p = super._onDropItem) == null ? void 0 : p.call(this, s, e);
    const n = ((F) => {
      var B;
      if (!F) return null;
      const H = F.uuid ?? F.documentUuid ?? ((B = F.data) == null ? void 0 : B.uuid) ?? (typeof F == "string" ? F : null);
      if (H) return H;
      if (typeof F == "object") {
        for (const V of Object.values(F))
          if (typeof V == "string" && V.includes(".") && V.startsWith("Item.")) return V;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const f = await fromUuid(n);
    if (!f || f.documentName !== "Item") return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    if (f.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const l = this.actor;
    if (f.type === "Kepesseg" || f.type === "ability") {
      let F = f.id;
      if (((c = f.parent) == null ? void 0 : c.id) !== l.id) {
        const ce = foundry.utils.mergeObject(f.toObject(), { type: "Kepesseg" });
        F = ((a = (await l.createEmbeddedDocuments("Item", [ce]))[0]) == null ? void 0 : a.id) ?? F;
      }
      const H = (((g = f.system) == null ? void 0 : g.kind) ?? "passive").toString(), B = ((h = l.system) == null ? void 0 : h.abilities) ?? {}, V = H === "active" ? "active" : "passive", W = Array.isArray((v = B[V]) == null ? void 0 : v.items) ? B[V].items.slice() : Array.isArray(B[V]) ? B[V].slice() : [];
      W.includes(F) || W.push(F), await l.update({ [`system.abilities.${V}.items`]: W }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = f.parent) == null ? void 0 : I.id) === l.id) return;
    const m = f.toObject();
    f.type === "Fegyver" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 }), f.type === "Pancel" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const d = (T = (await l.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : T.id;
    if (f.type === "Fegyver" && d) {
      const F = ((D = l.system) == null ? void 0 : D.weapons) ?? {}, H = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], B = (F.slotOrder ?? "").trim(), V = B ? B.split(/\s*,\s*/).filter((Q) => H.includes(Q)) : [];
      let W = H.find((Q) => {
        var k;
        return !(((k = F[Q]) == null ? void 0 : k.itemId) ?? "").trim();
      });
      W || (W = H.find((Q) => !V.includes(Q)) ?? "slot1");
      const ce = V.includes(W) ? V : [...V, W].filter((Q) => H.includes(Q));
      await l.update({
        "system.weapons.slotOrder": ce.join(","),
        [`system.weapons.${W}.itemId`]: d,
        [`system.weapons.${W}.name`]: f.name ?? "",
        [`system.weapons.${W}.damage`]: ((C = f.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${W}.bonus`]: ((_ = f.system) == null ? void 0 : _.bonus) ?? ""
      });
    }
    if (f.type === "MikroChip" && d) {
      const F = ((M = (q = l.system) == null ? void 0 : q.gear) == null ? void 0 : M.microchips) ?? {}, B = ["slot1", "slot2", "slot3"].find((V) => {
        var W;
        return !(((W = F[V]) == null ? void 0 : W.itemId) ?? "").trim();
      });
      B && await l.update({
        [`system.gear.microchips.${B}.itemId`]: d,
        [`system.gear.microchips.${B}.name`]: f.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var p, y, r, i, o, c;
    const e = (y = (p = this.actor) == null ? void 0 : p.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, f = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = f ? `<p>${f}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${m}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor, alias: ((c = this.actor) == null ? void 0 : c.name) ?? void 0 }),
      content: d,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  /** Egyéb információ vagy Mikro-Chip beküldése chatbe (Egyéb Információk szekció chat gombja). */
  async _postItemToChat(s) {
    var u, d, p, y, r, i;
    const e = (d = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : d.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((p = e.system) == null ? void 0 : p.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const o = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const c = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        c > 0 && (f = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${l}
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
X(me, "PARTS", foundry.utils.mergeObject(
  K(me, me, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), X(me, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(me, me, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = K(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = K(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = K(me, me, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = me;
function mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Os, Cs, qs, Ls;
const pe = class pe extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, f, l, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((f = s.querySelector) == null ? void 0 : f.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    var c;
    const t = (c = game.votv) == null ? void 0 : c._lastKarakterSheetBlurSave;
    if ((t == null ? void 0 : t.appId) === this.id && Date.now() - t.at < 200) return this;
    const f = this.element, l = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (f) {
      m.scrollState = this._saveScrollState(f);
      const a = document.activeElement, g = l.contains(a), h = a && (a.tagName === "INPUT" && a.type !== "checkbox" && a.type !== "radio" || a.tagName === "TEXTAREA");
      g && h && (m.focus = {
        name: a.name || null,
        id: a.id || null,
        selectionStart: "selectionStart" in a ? a.selectionStart : 0,
        selectionEnd: "selectionEnd" in a ? a.selectionEnd : 0
      });
    }
    const u = await super.render(s, e);
    requestAnimationFrame(() => {
      this._writeTotalDefense();
    }), setTimeout(() => this._writeTotalDefense(), 150);
    const d = this.element, p = this.form ?? this.element, y = m.scrollState, r = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var a, g;
      if (this._applyScrollState(d, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const h = ((a = p.querySelector) == null ? void 0 : a.call(p, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (g = p.querySelector) == null ? void 0 : g.call(p, `[name="${CSS.escape(r.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = r.selectionStart ?? 0, h.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(d, y);
    };
    return (i || r) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (d) => {
      var p;
      return ((p = e == null ? void 0 : e.querySelector) == null ? void 0 : p.call(e, d)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${d}`) : null);
    }, n = t(".jarmu-total-defense-effective"), f = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const m = Number(f == null ? void 0 : f.value) || 0, u = Number(l == null ? void 0 : l.value) || 0;
    n.textContent = String(m + u);
  }
  async _prepareContext(s) {
    var C, _, q, M, F, H, B, V, W, ce, Q;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((C = e.system) == null ? void 0 : C.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0);
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, f = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, l = "— Nincs fegyver —", m = (((_ = this.actor.items) == null ? void 0 : _.contents) ?? []).filter((k) => k.type === "Fegyver");
    e.weaponsTable = m.map((k) => {
      const E = (k == null ? void 0 : k.system) ?? {}, G = E.type ?? "", Y = (n[G] ?? G) || "—", ee = E.size ?? "", ae = (f[ee] ?? ee) || "", re = [Y, ae].filter(Boolean).join(", ") || Y || "—", se = G === "projectile" || ee === "thrown", le = E.quantity != null ? String(E.quantity).trim() : "1", fe = (typeof E.range == "string" ? (E.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? l,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: String(E.bonus ?? "").trim() || "0",
        damage: E.damage ?? "",
        rangeStr: fe || "—",
        typeLabel: Y,
        typeAndSize: re,
        quantity: le,
        quantityDisplay: se ? le : "—",
        isProjectile: se,
        equipped: !1,
        special: (E.special ?? "").trim() || "—"
      };
    });
    const u = (((q = this.actor.items) == null ? void 0 : q.contents) ?? []).filter((k) => k.type === "Pancel");
    e.armorTable = u.map((k) => {
      var Y;
      const E = (k == null ? void 0 : k.system) ?? {}, G = !!((Y = k.system) != null && Y.equipped);
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (E.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (E.speedPenalty ?? "").toString().trim() || "—",
        level: mi((E.level ?? "").toString().trim()),
        special: (E.special ?? E.other ?? "").toString().trim() || "—",
        equipped: G
      };
    });
    const d = (((M = this.actor.items) == null ? void 0 : M.contents) ?? []).filter((k) => k.type === "MikroChip");
    e.microchipsTable = d.map((k) => {
      var se, le, fe;
      const E = ((se = k == null ? void 0 : k.system) == null ? void 0 : se.abilityType) ?? "", G = E === "active" ? "Aktív" : E === "passive" ? "Passzív" : E || "—", Y = E === "active", ee = Number((le = k == null ? void 0 : k.system) == null ? void 0 : le.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0, ae = (((fe = k == null ? void 0 : k.system) == null ? void 0 : fe.description) ?? "").trim(), re = ae ? ae.length > 60 ? ae.slice(0, 57) + "…" : ae : "—";
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: G,
        description: re,
        kp: ee,
        isActive: Y,
        slotKey: "",
        equipped: !1
      };
    });
    const p = (((F = this.actor.items) == null ? void 0 : F.contents) ?? []).filter((k) => k.type === "Targy");
    e.itemsTable = p.map((k) => {
      const E = (k == null ? void 0 : k.system) ?? {}, G = (E.description ?? "").trim(), Y = G ? G.length > 60 ? G.slice(0, 57) + "…" : G : "—", ee = E.quantity != null ? String(E.quantity).trim() : "1";
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: ee,
        description: Y
      };
    });
    const y = (((H = this.actor.items) == null ? void 0 : H.contents) ?? []).filter((k) => k.type === "Jarmuegyseg").sort((k, E) => {
      const G = typeof k.sort == "number" ? k.sort : 0, Y = typeof E.sort == "number" ? E.sort : 0;
      return G - Y;
    }), r = [];
    let i = 0, o = 0;
    for (const k of y) {
      const E = (k == null ? void 0 : k.system) ?? {}, G = E.health ?? {}, Y = Number(E.level ?? 0) || 0, ee = Number(G.max ?? 0) || 0, ae = Number(G.value ?? 0) || 0, re = (E.hit ?? "").toString().trim(), se = (E.speed ?? "").toString().trim().replace(",", "."), le = Number(se);
      Number.isFinite(le) && (i += le);
      const fe = (E.range ?? "").toString().trim().replace(",", "."), je = Number(fe);
      Number.isFinite(je) && (o += je);
      const ue = (E.damage ?? "").toString().trim(), Ee = E.abilities ?? {}, ye = Array.isArray(Ee.items) ? Ee.items : [], et = (await Promise.all(
        ye.map(async (ie) => {
          var Le;
          if (!ie) return null;
          try {
            const ne = await fromUuid(ie);
            if (ne && (ne.type === "Kepesseg" || ne.type === "ability")) return ne;
          } catch {
            const ne = (Le = game.items) == null ? void 0 : Le.get(ie);
            if (ne && (ne.type === "Kepesseg" || ne.type === "ability")) return ne;
          }
          return null;
        })
      )).map((ie, Le) => ({ doc: ie, ref: ye[Le] })).filter((ie) => !!ie.doc && !!ie.ref).map(({ doc: ie, ref: Le }) => {
        var Fe, Pe;
        const ne = (((Fe = ie.system) == null ? void 0 : Fe.kind) ?? "passive").toString(), tt = Number(((Pe = ie.system) == null ? void 0 : Pe.kp) ?? 0) || 0, ze = ne === "species";
        return {
          id: ie.id,
          ref: Le,
          name: ie.name,
          img: ie.img,
          kind: ne,
          kpDisplay: ze ? 0 : tt
        };
      });
      r.push({
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        level: Y,
        hpMax: ee,
        hpValue: ae,
        hit: re,
        damage: ue,
        abilities: et
      });
    }
    e.unitsTable = r;
    const c = y.length;
    let a = "Kicsi", g = 0, h = 0;
    c >= 11 ? (a = "Nagy", g = -4, h = -6) : c >= 6 ? (a = "Közepes", g = -2, h = -3) : (a = "Kicsi", g = 0, h = 0), e.sizeForSelect = a, e.sizeSpeedPenalty = g, e.sizeDefensePenalty = h;
    const v = i + g, I = o;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system ?? {}),
      {
        combat: { speed: v },
        vehicle: { toolsRange: I },
        identity: { size: a }
      },
      { inplace: !1 }
    );
    const T = (((B = e.weaponsTable) == null ? void 0 : B.length) ?? 0) > 0 || (((V = e.armorTable) == null ? void 0 : V.length) ?? 0) > 0 || (((W = e.microchipsTable) == null ? void 0 : W.length) ?? 0) > 0 || (((ce = e.itemsTable) == null ? void 0 : ce.length) ?? 0) > 0;
    e.showEquipmentDropZone = !T;
    const D = (((Q = this.actor.items) == null ? void 0 : Q.contents) ?? []).filter((k) => k.type === "Egyeb");
    return e.egyebList = D.map((k) => {
      const G = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), Y = G ? G.length > 80 ? G.slice(0, 77) + "…" : G : "";
      return {
        itemId: k.id,
        actorId: this.actor.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: Y
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
    t.on("click", ".jarmu-portrait-img", (u) => {
      var y, r, i;
      u.preventDefault(), u.stopPropagation();
      const d = ((i = (r = (y = foundry.applications) == null ? void 0 : y.apps) == null ? void 0 : r.FilePicker) == null ? void 0 : i.implementation) ?? globalThis.FilePicker;
      new d({
        type: "image",
        current: this.actor.img || "",
        callback: (o) => {
          o && this.actor.update({ img: o });
        }
      }).browse();
    }), t.on("click", ".jarmu-inventory-item-name, .jarmu-inventory-item-icon", (u) => {
      var y, r, i;
      u.preventDefault();
      const d = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!d) return;
      const p = this.actor.items.get(d);
      (i = p == null ? void 0 : p.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var y, r;
      if (u.preventDefault(), !u.altKey) return;
      const d = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      !d || !this.actor.items.get(d) || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var r;
      const d = u.currentTarget, p = (r = d == null ? void 0 : d.dataset) == null ? void 0 : r.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (d.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var y, r;
      const d = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!d) return;
      const p = this.actor.items.get(d);
      !p || p.type !== "Pancel" || await p.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var p, y, r, i;
      u.preventDefault();
      const d = (y = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      d && ((i = (r = this.actor.items.get(d)) == null ? void 0 : r.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var p, y;
      if (u.preventDefault(), !u.altKey) return;
      const d = (y = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      d && await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var p, y;
      u.preventDefault();
      const d = (y = (p = u.currentTarget) == null ? void 0 : p.dataset) == null ? void 0 : y.itemId;
      d && await this._postItemToChat(d);
    }), t.on("click", ".jarmu-unit-damage-button", async (u) => {
      var y;
      u.preventDefault(), u.stopPropagation();
      const d = u.currentTarget, p = (((y = d == null ? void 0 : d.dataset) == null ? void 0 : y.itemId) ?? "").trim();
      p && await this._rollUnitDamage(p);
    });
    const n = this;
    this._draggingUnitId = null, t.on("dragstart", ".jarmu-unit-row", (u) => {
      var r, i;
      const d = u.currentTarget, p = (r = d == null ? void 0 : d.dataset) == null ? void 0 : r.itemId;
      if (!p) return;
      n._draggingUnitId = p;
      const y = (i = u.originalEvent) == null ? void 0 : i.dataTransfer;
      y && (y.setData("text/plain", p), y.effectAllowed = "move", typeof y.setDragImage == "function" && y.setDragImage(d, 0, 0));
    }), t.on("dragover", ".jarmu-unit-row", (u) => {
      var r, i, o, c;
      const d = (i = (r = u.currentTarget) == null ? void 0 : r.dataset) == null ? void 0 : i.itemId, p = n._draggingUnitId;
      if (!p || !d || p === d) return;
      u.preventDefault();
      const y = (o = u.originalEvent) == null ? void 0 : o.dataTransfer;
      y && (y.dropEffect = "move"), (c = u.currentTarget) == null || c.classList.add("karakter-actions-row-drag-over");
    }), t.on("dragleave", ".jarmu-unit-row", (u) => {
      var d;
      (d = u.currentTarget) == null || d.classList.remove("karakter-actions-row-drag-over");
    }), t.on("drop", ".jarmu-unit-row", async (u) => {
      var g, h, v, I;
      u.preventDefault(), (g = u.currentTarget) == null || g.classList.remove("karakter-actions-row-drag-over");
      const d = (v = (h = u.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemId;
      let p = n._draggingUnitId;
      const y = (I = u.originalEvent) == null ? void 0 : I.dataTransfer;
      if (!p && y && (p = y.getData("text/plain")), n._draggingUnitId = null, !p || !d || p === d) return;
      const i = this.actor.items.contents.filter((T) => T.type === "Jarmuegyseg").sort((T, D) => {
        const C = typeof T.sort == "number" ? T.sort : 0, _ = typeof D.sort == "number" ? D.sort : 0;
        return C - _;
      }).map((T) => T.id), o = i.indexOf(p), c = i.indexOf(d);
      if (o === -1 || c === -1) return;
      i.splice(o, 1), i.splice(c, 0, p);
      const a = i.map((T, D) => ({
        _id: T,
        sort: (D + 1) * 10
      }));
      await this.actor.updateEmbeddedDocuments("Item", a);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (u) => {
      var r, i, o, c, a, g, h, v, I, T;
      u.preventDefault();
      const d = (c = (o = (i = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : o.dataset) == null ? void 0 : c.abilityRef, p = (v = (h = (g = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : g.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : h.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (d)
        try {
          y = await fromUuid(d);
        } catch {
          y = null;
        }
      !y && p && (y = ((I = game.items) == null ? void 0 : I.get(p)) ?? null), (T = y == null ? void 0 : y.sheet) == null || T.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (u) => {
      var i, o, c, a;
      u.preventDefault();
      const d = (o = (i = u.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, ".jarmu-unit-ability-pill"), p = (c = d == null ? void 0 : d.dataset) == null ? void 0 : c.abilityRef, y = (a = d == null ? void 0 : d.dataset) == null ? void 0 : a.abilityId, r = p || y;
      r && await this._postUnitAbilityToChat(r);
    });
    const f = (u) => {
      if (!u) return;
      const d = this._getFormDataForUpdate(u);
      Object.keys(d).length !== 0 && this.actor.update(d).catch((p) => console.warn("VoidJarmuSheet save failed", p));
    }, l = (u) => {
      var d, p, y;
      return u && (((p = (d = this.element) == null ? void 0 : d.contains) == null ? void 0 : p.call(d, u)) || this.id && ((y = u.closest) == null ? void 0 : y.call(u, `#${CSS.escape(this.id)}`)));
    };
    this._votvJarmuBlur = (u) => {
      var i;
      const d = u.target;
      if (!d || !d.form) return;
      const p = d.tagName;
      if (p !== "INPUT" && p !== "TEXTAREA" && p !== "SELECT") return;
      const y = d.form;
      if (!l(y)) return;
      const r = u.relatedTarget;
      r && (y.contains(r) || this.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(this.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: this.id, at: Date.now() }), f(y));
    }, document.body.addEventListener("blur", this._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var o;
      const d = u.currentTarget, p = (o = d == null ? void 0 : d.dataset) == null ? void 0 : o.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (d.value ?? "").trim(), i = r === "" ? 0 : Number(r);
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (u) => {
      var i;
      const d = u.currentTarget, p = (i = d == null ? void 0 : d.dataset) == null ? void 0 : i.itemId;
      if (!p) return;
      const y = this.actor.items.get(p);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (d.value ?? "").trim();
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
    var u, d, p;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, f = "";
    if (e.type === "MikroChip") {
      const y = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((p = e.system) == null ? void 0 : p.replaceCost) ?? 0) || 0;
        r > 0 && (f = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${f}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  /** Járműegység sebzés gomb: az egység sebzés formuláját dobja. */
  async _rollUnitDamage(s) {
    var m, u, d, p, y, r, i, o, c;
    const e = this.actor;
    if (!e) return;
    const t = ((u = (m = e.items).get) == null ? void 0 : u.call(m, s)) ?? ((p = (d = e.items.contents) == null ? void 0 : d.find) == null ? void 0 : p.call(d, (a) => a.id === s));
    if (!t || t.type !== "Jarmuegyseg") return;
    const n = (((y = t.system) == null ? void 0 : y.damage) ?? "").trim();
    if (!n) {
      (c = (r = ui.notifications) == null ? void 0 : r.warn) == null || c.call(
        r,
        ((o = (i = game.i18n) == null ? void 0 : i.localize) == null ? void 0 : o.call(i, "votv.weapon.no-damage")) ?? "A járműegységnek nincs sebzés formulája."
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
    var p, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((p = game.items) == null ? void 0 : p.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = f ? `<p>${f}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${m}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: d,
      flags: { "vacuum-of-the-void": { abilityId: e.id } }
    });
  }
  async _onDropItem(s, e) {
    var u, d;
    let t = (e == null ? void 0 : e.uuid) ?? (e == null ? void 0 : e.documentUuid) ?? ((u = e == null ? void 0 : e.data) == null ? void 0 : u.uuid) ?? (typeof e == "string" ? e : null);
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
    if (((d = n.parent) == null ? void 0 : d.id) === f.id) return;
    const m = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await f.createEmbeddedDocuments("Item", [m]);
  }
};
X(pe, "PARTS", foundry.utils.mergeObject(
  K(pe, pe, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), X(pe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(pe, pe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = K(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = K(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = K(pe, pe, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let jt = pe;
const pi = [
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
var Ns;
const Te = class Te extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, p, y, r, i, o, c;
      if (!e.isEditable || !((p = (d = l.target) == null ? void 0 : d.closest) != null && p.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const m = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const m = e._getFormDataForUpdate(l);
      Object.keys(m).length !== 0 && e.document.update(m).catch((u) => console.warn("VoidWeaponSheet save failed", u));
    }, f = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, p;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((p = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "form"));
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
    return (typeof t.range != "string" || t.range === "[object Object]") && (t.range = ""), (t.skillKey === void 0 || t.skillKey === null || String(t.skillKey).trim() === "") && (t.skillKey = "grenadeUse"), e.system = t, e.skillOptions = pi, e;
  }
};
X(Te, "PARTS", foundry.utils.mergeObject(K(Te, Te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), X(Te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(Te, Te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = K(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = Te;
var As;
const De = class De extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, p, y, r, i, o, c;
      if (!e.isEditable || !((p = (d = l.target) == null ? void 0 : d.closest) != null && p.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const m = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const m = e._getFormDataForUpdate(l);
      Object.keys(m).length !== 0 && e.document.update(m).catch((u) => console.warn("VoidShieldSheet save failed", u));
    }, f = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, p;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((p = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "form"));
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
X(De, "PARTS", foundry.utils.mergeObject(K(De, De, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), X(De, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(De, De, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((As = K(De, De, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let zt = De;
var Es;
const _e = class _e extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, p, y, r, i, o, c;
      if (!e.isEditable || !((p = (d = l.target) == null ? void 0 : d.closest) != null && p.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const m = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const m = e._getFormDataForUpdate(l);
      Object.keys(m).length !== 0 && e.document.update(m).catch((u) => console.warn("VoidMicrochipSheet save failed", u));
    }, f = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, p;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((p = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "form"));
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
X(_e, "PARTS", foundry.utils.mergeObject(K(_e, _e, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), X(_e, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(_e, _e, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Es = K(_e, _e, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !1 })
}));
let Ut = _e;
var Fs;
const Oe = class Oe extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, p, y, r, i, o, c;
      if (!e.isEditable || !((p = (d = l.target) == null ? void 0 : d.closest) != null && p.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const m = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const m = e._getFormDataForUpdate(l);
      Object.keys(m).length !== 0 && e.document.update(m).catch((u) => console.warn("VoidAbilitySheet save failed", u));
    }, f = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, p;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((p = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "form"));
      f(m) && n(m);
    }, e._votvInput = (l) => {
      var d;
      const m = l.target;
      if ((m == null ? void 0 : m.name) === "name") return;
      const u = (m == null ? void 0 : m.form) ?? ((d = m == null ? void 0 : m.closest) == null ? void 0 : d.call(m, "form"));
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
X(Oe, "PARTS", foundry.utils.mergeObject(K(Oe, Oe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), X(Oe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(Oe, Oe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Fs = K(Oe, Oe, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !0 })
}));
let Ht = Oe;
var Ps;
const Ce = class Ce extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, p, y, r, i, o, c;
      if (!e.isEditable || !((p = (d = l.target) == null ? void 0 : d.closest) != null && p.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const m = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const m = e._getFormDataForUpdate(l);
      Object.keys(m).length !== 0 && e.document.update(m).catch((u) => console.warn("VoidTargySheet save failed", u));
    }, f = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, p;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((p = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "form"));
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
X(Ce, "PARTS", foundry.utils.mergeObject(K(Ce, Ce, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), X(Ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(Ce, Ce, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ps = K(Ce, Ce, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = Ce;
var $s;
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
    e._votvProfileImgClick = (l) => {
      var d, p, y, r, i, o, c;
      if (!e.isEditable || !((p = (d = l.target) == null ? void 0 : d.closest) != null && p.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
      l.preventDefault(), l.stopPropagation();
      const m = ((c = (o = (i = foundry.applications) == null ? void 0 : i.apps) == null ? void 0 : o.FilePicker) == null ? void 0 : c.implementation) ?? globalThis.FilePicker;
      new m({
        type: "image",
        current: e.document.img || "",
        callback: (a) => {
          a && e.document.update({ img: a });
        }
      }).browse();
    };
    const t = (s == null ? void 0 : s.nodeType) === 9 ? s.body ?? s.documentElement : s;
    if (t != null && t.addEventListener ? (t.addEventListener("click", e._votvProfileImgClick, !0), e._votvProfileClickRoot = t) : document.body.addEventListener("click", e._votvProfileImgClick, !0), !this.isEditable) return;
    const n = (l) => {
      if (!l) return;
      const m = e._getFormDataForUpdate(l);
      Object.keys(m).length !== 0 && e.document.update(m).catch((u) => console.warn("VoidEgyebSheet save failed", u));
    }, f = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, p;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((p = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : p.call(d, "form"));
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
X(qe, "PARTS", foundry.utils.mergeObject(K(qe, qe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), X(qe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(K(qe, qe, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = K(qe, qe, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Gt = qe;
var xs, Rs;
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, d, p, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (d = this.document) == null ? void 0 : d.name,
      "id=",
      (p = this.document) == null ? void 0 : p.id,
      "root=",
      t
    ), this._votvGlobalDrop || (this._votvGlobalDrop = async (r) => {
      var i, o, c;
      try {
        const a = typeof r.composedPath == "function" ? r.composedPath() : [];
        if (!(this.element && a.includes(this.element) || this.id && ((o = (i = r.target) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, `#${CSS.escape(this.id)}`)))) return;
        console.log("VOTV JarmuEgysegSheet global drop event=", r);
        let h = null;
        try {
          h = TextEditor.getDragEventData(r);
        } catch (D) {
          console.warn("VOTV JarmuEgysegSheet global drop: TextEditor.getDragEventData error", D);
        }
        if (console.log("VOTV JarmuEgysegSheet global drop data=", h), !h || h.type !== "Item") return;
        const I = ((D) => {
          var _;
          if (!D) return null;
          const C = D.uuid ?? D.documentUuid ?? ((_ = D.data) == null ? void 0 : _.uuid) ?? (typeof D == "string" ? D : null);
          if (C) return C;
          if (typeof D == "object") {
            for (const q of Object.values(D))
              if (typeof q == "string" && q.includes(".") && q.startsWith("Item.")) return q;
          }
          return null;
        })(h);
        if (console.log("VOTV JarmuEgysegSheet global drop uuid=", I), !I) return;
        const T = await fromUuid(I);
        if (console.log("VOTV JarmuEgysegSheet global drop doc=", T == null ? void 0 : T.id, T == null ? void 0 : T.type), !T || T.documentName !== "Item") return;
        if (T.type === "Kepesseg" || T.type === "ability") {
          const D = T.uuid ?? T.id, C = this.document.system ?? {}, _ = Array.isArray((c = C.abilities) == null ? void 0 : c.items) ? C.abilities.items.slice() : [];
          _.push(D), console.log("VOTV JarmuEgysegSheet global drop updating abilities.items to", _), await this.document.update({ "system.abilities.items": _ });
        }
      } catch (a) {
        console.error("VOTV JarmuEgysegSheet global drop handler error", a);
      }
    }, window.addEventListener("drop", this._votvGlobalDrop, !0)), n.on("click", ".karakter-ability-open", async (r) => {
      var a, g, h, v, I, T;
      r.preventDefault();
      const i = (g = (a = r.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : g.itemRef, o = (v = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemId;
      let c = null;
      if (i)
        try {
          c = await fromUuid(i);
        } catch {
          c = null;
        }
      !c && o && (c = ((I = game.items) == null ? void 0 : I.get(o)) ?? null), (T = c == null ? void 0 : c.sheet) == null || T.render(!0);
    }), n.on("click", ".karakter-ability-chat", async (r) => {
      var a, g, h, v;
      r.preventDefault();
      const i = (g = (a = r.currentTarget) == null ? void 0 : a.dataset) == null ? void 0 : g.itemRef, o = (v = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemId, c = i || o;
      c && await this._postAbilityToChat(c);
    }), n.on("click", ".karakter-ability-pill-remove", async (r) => {
      var h, v, I;
      if (r.preventDefault(), !r.altKey) return;
      const i = (v = (h = r.currentTarget) == null ? void 0 : h.dataset) == null ? void 0 : v.itemRef;
      if (!i) return;
      const o = this.document.system ?? {}, c = Array.isArray((I = o.abilities) == null ? void 0 : I.items) ? o.abilities.items.slice() : [], a = c.indexOf(i), g = a >= 0 ? [...c.slice(0, a), ...c.slice(a + 1)] : c;
      await this.document.update({ "system.abilities.items": g });
    });
    const f = (y = t == null ? void 0 : t.querySelector) == null ? void 0 : y.call(t, ".karakter-ability-area[data-area='abilities']");
    if (f && (f.addEventListener("dragover", (r) => {
      r.preventDefault(), f.classList.add("karakter-ability-area-drag-over");
    }), f.addEventListener("dragleave", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    }), f.addEventListener("drop", () => {
      f.classList.remove("karakter-ability-area-drag-over");
    })), !this.isEditable) return;
    const l = (r) => {
      if (!r) return;
      const i = e._getFormDataForUpdate(r);
      Object.keys(i).length !== 0 && e.document.update(i).catch((o) => console.warn("VoidJarmuEgysegSheet save failed", o));
    }, m = (r) => {
      var i, o, c;
      return r && (((o = (i = e.element) == null ? void 0 : i.contains) == null ? void 0 : o.call(i, r)) || e.id && ((c = r.closest) == null ? void 0 : c.call(r, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (r) => {
      var o, c, a;
      const i = ((o = r.target) == null ? void 0 : o.form) ?? ((a = (c = r.target) == null ? void 0 : c.closest) == null ? void 0 : a.call(c, "form"));
      m(i) && l(i);
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
      f.map(async (u) => {
        var d;
        if (!u) return null;
        try {
          const p = await fromUuid(u);
          if (p && (p.type === "Kepesseg" || p.type === "ability")) return p;
        } catch {
          const p = (d = game.items) == null ? void 0 : d.get(u);
          if (p && (p.type === "Kepesseg" || p.type === "ability")) return p;
        }
        return null;
      })
    )).map((u, d) => ({ doc: u, ref: f[d] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: d }) => {
      var i, o;
      const p = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((o = u.system) == null ? void 0 : o.kp) ?? 0) || 0, r = p === "species";
      return {
        id: u.id,
        ref: d,
        name: u.name,
        img: u.img,
        kind: p,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: r ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", m), e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var p, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((p = game.items) == null ? void 0 : p.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, f = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = f ? `<p>${f}</p>` : "", d = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${l}</p>
      ${m}
      ${u}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({}),
      content: d,
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
      const l = e.uuid ?? e.id, m = this.document.system ?? {}, u = Array.isArray((n = m.abilities) == null ? void 0 : n.items) ? m.abilities.items.slice() : [];
      return u.push(l), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (f = super._onDropDocument) == null ? void 0 : f.call(this, s, e);
  }
};
X(ve, "PARTS", foundry.utils.mergeObject(K(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), X(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  K(ve, ve, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((xs = K(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Rs = K(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Vt = ve;
const Ms = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function js(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, f, l, m;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Wt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ti, CONFIG.Item.dataModels.MikroChip = si, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ni, CONFIG.Item.dataModels.Egyeb = ri, CONFIG.Item.dataModels.Jarmuegyseg = ci, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (f = CONFIG.Actor).typeLabels ?? (f.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (l = CONFIG.Combat).initiative ?? (l.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", It, {
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
  }), Hooks.on("updateActor", (u, d, p, y) => {
    if ((u == null ? void 0 : u.type) !== "Karakter" || !(u != null && u.id)) return;
    const r = u.id;
    setTimeout(() => {
      var a, g, h, v;
      const i = (a = game.actors) == null ? void 0 : a.get(r);
      if (!i || i.type !== "Karakter") return;
      const o = It.getTotalSpeedRaw(i), c = (g = i.effects) == null ? void 0 : g.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (o <= 0 && !c) {
        const I = ((v = (h = CONFIG.statusEffects) == null ? void 0 : h.find((T) => T.id === "immobilized")) == null ? void 0 : v.img) ?? "";
        i.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: I,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: i.uuid
        }]).then(() => {
          var D, C;
          const T = ((D = canvas.tokens) == null ? void 0 : D.placeables) ?? [];
          for (const _ of T)
            ((C = _ == null ? void 0 : _.document) == null ? void 0 : C.actorId) === r && typeof _.draw == "function" && _.draw();
        }).catch((T) => console.warn("Vacuum of the Void | Immobilized effect create failed:", T));
      } else o > 0 && c && c.delete().then(() => {
        var T, D;
        const I = ((T = canvas.tokens) == null ? void 0 : T.placeables) ?? [];
        for (const C of I)
          ((D = C == null ? void 0 : C.document) == null ? void 0 : D.actorId) === r && typeof C.draw == "function" && C.draw();
      }).catch((I) => console.warn("Vacuum of the Void | Immobilized effect delete failed:", I));
    }, 0);
  });
  const s = 500;
  Hooks.on("updateActor", (u, d, p, y) => {
    var T, D, C, _, q, M, F, H, B, V, W, ce, Q;
    const r = u == null ? void 0 : u.id;
    if (!r) return;
    if ((u.type === "Karakter" || u.type === "Npc") && ((T = d == null ? void 0 : d.system) != null && T.combat) && "initiativeResult" in d.system.combat) {
      const k = Number((C = (D = u.system) == null ? void 0 : D.combat) == null ? void 0 : C.initiativeResult), E = Number.isFinite(k) ? k : 0, G = game.combat;
      if (G) {
        const Y = ((_ = G.combatants) == null ? void 0 : _.contents) ?? Array.from(G.combatants ?? []);
        for (const ee of Y)
          if (((q = ee.actor) == null ? void 0 : q.id) === r || ee.actorId === r) {
            G.updateEmbeddedDocuments("Combatant", [{ _id: ee.id, initiative: E }]).catch(() => {
            });
            break;
          }
      }
    }
    if (u.type === "Npc" && ((M = d == null ? void 0 : d.system) != null && M.identity) && "size" in d.system.identity) {
      const k = js((H = (F = u.system) == null ? void 0 : F.identity) == null ? void 0 : H.size);
      u.update({
        "prototypeToken.width": k,
        "prototypeToken.height": k
      }).catch((E) => console.warn("Vacuum of the Void | NPC token size update failed for", u.name, E));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], a = (B = game.actors) == null ? void 0 : B.get(r);
    a != null && a.apps && c.push(...Array.from(a.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const k of g) {
      if (((V = k.document) == null ? void 0 : V.id) !== r || ((W = k.document) == null ? void 0 : W.documentName) !== "Actor") continue;
      const E = (ce = k.constructor) == null ? void 0 : ce.name;
      E !== "VoidKarakterSheet" && E !== "VoidJarmuSheet" || c.includes(k) || c.push(k);
    }
    if (o && c.some((k) => {
      const E = (k == null ? void 0 : k.form) ?? (k == null ? void 0 : k.element);
      return E && E.contains(i);
    })) return;
    const v = (Q = game.votv) == null ? void 0 : Q._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const k of c)
        !(k != null && k.rendered) || typeof k.render != "function" || k.id !== I && k.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, d, p, y) => {
    var c, a, g;
    const r = u == null ? void 0 : u.parent;
    if (!r || r.documentName !== "Actor" || r.type !== "Karakter" || u.type !== "Fegyver") return;
    const i = ((c = r.system) == null ? void 0 : c.weapons) ?? {}, o = {};
    for (const [h, v] of Object.entries(i)) {
      if (!h.startsWith("slot")) continue;
      const I = ((v == null ? void 0 : v.itemId) ?? "").trim();
      !I || I !== u.id || (o[`system.weapons.${h}.name`] = u.name ?? "", o[`system.weapons.${h}.damage`] = ((a = u.system) == null ? void 0 : a.damage) ?? "", o[`system.weapons.${h}.bonus`] = ((g = u.system) == null ? void 0 : g.bonus) ?? "");
    }
    Object.keys(o).length && r.update(o);
  });
});
Hooks.on("ready", () => {
  var S, s;
  document.body.addEventListener("click", async (e) => {
    var g, h, v, I, T, D, C, _, q, M, F, H, B, V, W, ce, Q, k, E, G, Y, ee, ae;
    const t = (h = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : h.call(g, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const f = (v = game.messages) == null ? void 0 : v.get(n), l = (T = (I = f == null ? void 0 : f.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!l) return;
    const m = l.actorId ?? ((D = f == null ? void 0 : f.speaker) == null ? void 0 : D.actor) ?? "";
    if (!m) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((C = game.actors) == null ? void 0 : C.get(l.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(m));
    if (u || (u = ((M = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : M.flatMap((se) => {
      var le;
      return ((le = se.tokens) == null ? void 0 : le.contents) ?? [];
    }).map((se) => se.actor).find((se) => se && (se.id === m || se.id === l.actorId))) ?? null), !u) return;
    const d = l.itemId ? ((H = (F = u.items) == null ? void 0 : F.get) == null ? void 0 : H.call(F, l.itemId)) ?? ((W = (V = (B = u.items) == null ? void 0 : B.contents) == null ? void 0 : V.find) == null ? void 0 : W.call(V, (re) => re.id === l.itemId)) : null;
    let p = (l.damageFormula ?? "").trim();
    if (p || (p = (((ce = d == null ? void 0 : d.system) == null ? void 0 : ce.damage) ?? "").trim()), !p && l.slotKey && (p = (((((Q = u.system) == null ? void 0 : Q.weapons) ?? {})[l.slotKey] ?? {}).damage ?? "").trim()), !p) {
      (Y = (k = ui.notifications) == null ? void 0 : k.warn) == null || Y.call(k, ((G = (E = game.i18n) == null ? void 0 : E.localize) == null ? void 0 : G.call(E, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(p);
    await y.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = l.targetName || "", o = l.hitLocationName || "", c = ((d == null ? void 0 : d.name) ?? (l.slotKey ? ((ae = (((ee = u.system) == null ? void 0 : ee.weapons) ?? {})[l.slotKey]) == null ? void 0 : ae.name) ?? "" : "")) || "Fegyver";
    let a = i ? `${c} – sebzés – ${i}` : `${c} – sebzés`;
    o && (a += ` (${o})`), await y.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: u }),
      flavor: a,
      flags: { "vacuum-of-the-void": {} },
      rollMode: r
    });
  }, !0), document.body.addEventListener(
    "dragstart",
    (e) => {
      var l, m, u, d, p, y;
      if (!((m = (l = e.target) == null ? void 0 : l.closest) != null && m.call(l, "#actors"))) return;
      const t = (d = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : d.call(u, "[data-document-id]"), n = (p = t == null ? void 0 : t.getAttribute) == null ? void 0 : p.call(t, "data-document-id");
      if (!n) return;
      const f = n.includes(".") ? n.split(".").pop() : n;
      f && ((y = game.actors) != null && y.get(f)) && (game.votv._dragSourceActorId = f);
    },
    !0
  ), (async () => {
    var t, n, f, l;
    const e = ((t = game.actors) == null ? void 0 : t.filter((m) => m.type === "Karakter")) ?? [];
    for (const m of e) {
      const u = It.getTotalSpeedRaw(m), d = (n = m.effects) == null ? void 0 : n.find((p) => p.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !d) {
        const p = ((l = (f = CONFIG.statusEffects) == null ? void 0 : f.find((y) => y.id === "immobilized")) == null ? void 0 : l.img) ?? "";
        await m.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: p,
          statuses: ["immobilized"],
          flags: { "vacuum-of-the-void": { immobilizedFromSpeed: !0 } },
          origin: m.uuid
        }]).catch(() => {
        });
      } else u > 0 && d && await d.delete().catch(() => {
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
      }, l = await n.create(f);
      l && console.log("Vacuum of the Void | Default scene created:", l.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var l, m, u, d, p, y;
    const e = {
      "bar1.attribute": "",
      "bar2.attribute": "",
      displayBars: foundry.CONST.TOKEN_DISPLAY_MODES.NONE
    }, t = ((l = game.actors) == null ? void 0 : l.filter((r) => r.type === "Karakter")) ?? [];
    for (const r of t)
      try {
        const i = r.prototypeToken, o = ((m = i == null ? void 0 : i.bar1) == null ? void 0 : m.attribute) ?? "", c = ((u = i == null ? void 0 : i.bar2) == null ? void 0 : u.attribute) ?? "";
        (o || c) && await r.update({
          "prototypeToken.bar1.attribute": "",
          "prototypeToken.bar2.attribute": "",
          "prototypeToken.displayBars": foundry.CONST.TOKEN_DISPLAY_MODES.NONE
        });
      } catch (i) {
        console.warn("Vacuum of the Void | Prototype token update failed for", r.name, i);
      }
    for (const r of game.scenes ?? []) {
      const i = ((d = r.tokens) == null ? void 0 : d.filter((o) => {
        var c;
        return ((c = o.actor) == null ? void 0 : c.type) === "Karakter";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(e);
        } catch (c) {
          console.warn("Vacuum of the Void | Token update failed for", o.name, c);
        }
    }
    const n = {
      "bar1.attribute": "",
      "bar2.attribute": "resources.health"
    }, f = ((p = game.actors) == null ? void 0 : p.filter((r) => r.type === "Npc")) ?? [];
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
      const i = ((y = r.tokens) == null ? void 0 : y.filter((o) => {
        var c;
        return ((c = o.actor) == null ? void 0 : c.type) === "Npc";
      })) ?? [];
      for (const o of i)
        try {
          await o.update(n);
        } catch (c) {
          console.warn("Vacuum of the Void | NPC token update failed for", o.name, c);
        }
    }
  })();
});
Hooks.on("preCreateToken", (S, s, e) => {
  var l, m, u, d;
  const t = (l = game.votv) == null ? void 0 : l._dragSourceActorId, n = t ?? S.actorId ?? null;
  t && (game.votv._dragSourceActorId = null);
  const f = n ? (m = game.actors) == null ? void 0 : m.get(n) : null;
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
      const p = js((d = (u = f.system) == null ? void 0 : u.identity) == null ? void 0 : d.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: p,
        height: p
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
const fi = {
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
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(fi).catch((f) => {
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
    const f = n.apps ?? [], l = f.contents ? Array.from(f.contents) : Array.from(f);
    for (const m of l)
      !m || S.has(m.id) || (S.add(m.id), typeof m.render == "function" && m.render(!0));
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
    const l = s[0] ?? s;
    l != null && l.classList && l.classList.add("votv-karakter-token-hud");
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
  var d, p, y, r;
  const t = ((d = S.flags) == null ? void 0 : d["vacuum-of-the-void"]) ?? {}, n = t.resultType, f = t.critLabel, l = t.weaponAttack, m = t.weapon;
  if (!n && !f && !l) return;
  const u = (p = s == null ? void 0 : s.querySelector) == null ? void 0 : p.call(s, ".dice-roll");
  if (u) {
    if (n && u.classList.add(`votv-${n}`), f) {
      const i = u.querySelector(".votv-crit-label");
      if (i)
        i.textContent = f;
      else {
        const o = u.querySelector(".dice-total"), c = (o == null ? void 0 : o.parentElement) ?? u, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = f, c.appendChild(a);
      }
    }
    if (l && m && (m.actorId || (y = S.speaker) != null && y.actor)) {
      const i = u.querySelector(".dice-total"), o = (i == null ? void 0 : i.parentElement) ?? u;
      if (!u.querySelector(".votv-weapon-outcome")) {
        const a = document.createElement("div");
        a.className = "votv-weapon-outcome";
        const g = !!m.isHit, h = m.targetName || "Célpont";
        a.textContent = g ? `Találat – ${h}` : `Nem talált – ${h}`, o.appendChild(a);
      }
      if (m.isHit && !u.querySelector(".votv-weapon-damage-chat")) {
        const g = document.createElement("button");
        g.type = "button", g.className = "votv-weapon-damage-chat";
        const h = m.hitLocationRoll, v = m.hitLocationName;
        g.textContent = h != null && v ? `Sebzés (Találati Hely ${h} - ${v})` : "Sebzés", g.dataset.actorId = String(m.actorId ?? ((r = S.speaker) == null ? void 0 : r.actor) ?? ""), g.dataset.itemId = String(m.itemId ?? ""), g.dataset.slotKey = String(m.slotKey ?? ""), g.dataset.targetName = String(m.targetName ?? ""), g.dataset.hitLocationName = String(m.hitLocationName ?? ""), g.dataset.messageId = String(S.id ?? ""), o.appendChild(g);
      }
    }
  }
});
export {
  It as V,
  Rt as c
};
//# sourceMappingURL=vacuum-of-the-void-C9aaio-h.mjs.map
