var Hs = Object.defineProperty;
var Bs = Object.getPrototypeOf;
var Gs = Reflect.get;
var Vs = (S, s, e) => s in S ? Hs(S, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : S[s] = e;
var Z = (S, s, e) => Vs(S, typeof s != "symbol" ? s + "" : s, e);
var H = (S, s, e) => Gs(Bs(S), e, s);
const { HTMLField: Ws, NumberField: F, SchemaField: B, StringField: O, BooleanField: oe, ArrayField: ht } = foundry.data.fields;
class Vt extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      identity: new B({
        name: new O({ required: !1, blank: !0, initial: "" }),
        player: new O({ required: !1, blank: !0, initial: "" }),
        level: new F({ required: !1, integer: !0, min: 1, initial: 1 }),
        species: new O({ required: !1, blank: !0, initial: "" }),
        assignment: new O({ required: !1, blank: !0, initial: "" }),
        subAssignment: new O({ required: !1, blank: !0, initial: "" }),
        background: new O({ required: !1, blank: !0, initial: "" }),
        languages: new O({ required: !1, blank: !0, initial: "" }),
        /** NPC méret (pl. Apró, Kicsi, Közepes, Nagy, Óriási) – token mérethez használt */
        size: new O({ required: !1, blank: !0, initial: "" })
      }),
      resources: new B({
        health: new B({
          value: new F({ required: !0, integer: !0, min: 0, initial: 0 }),
          max: new F({ required: !0, integer: !0, min: 0, initial: 0 })
        }),
        hitLocations: new B({
          head: new B({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new oe({ required: !1, initial: !1 }),
            box2: new oe({ required: !1, initial: !1 }),
            box3: new oe({ required: !1, initial: !1 })
          }),
          torso: new B({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new oe({ required: !1, initial: !1 }),
            box2: new oe({ required: !1, initial: !1 }),
            box3: new oe({ required: !1, initial: !1 })
          }),
          arms: new B({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new oe({ required: !1, initial: !1 }),
            box2: new oe({ required: !1, initial: !1 }),
            box3: new oe({ required: !1, initial: !1 })
          }),
          legs: new B({
            value: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
            box1: new oe({ required: !1, initial: !1 }),
            box2: new oe({ required: !1, initial: !1 }),
            box3: new oe({ required: !1, initial: !1 })
          })
        }),
        currentHealth: new B({
          head: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, initial: 0 })
        }),
        healthStatus: new B({
          head: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          torso: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          arms: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 }),
          legs: new F({ required: !1, integer: !0, min: 0, max: 3, initial: 0 })
        }),
        stress: new B({
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
      combat: new B({
        defense: new F({ required: !1, integer: !1, initial: 0 }),
        defenseBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenProtection: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        speed: new F({ required: !1, integer: !1, initial: 0 }),
        /** Sebesség mértékegység (NPC header: m vagy TE). */
        speedUnit: new O({ required: !1, blank: !0, initial: "m" }),
        speedBonus: new F({ required: !1, integer: !1, initial: 0 }),
        givenSpeed: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        /** Kezdeményezés dobás eredménye; csak dobás után jelenik meg a Harc mezőben (readonly). */
        initiativeResult: new F({ required: !1, integer: !0, initial: void 0 }),
        /** Kezdeményezés → KP: range tábla (min–max : KP); a dobás eredménye melyik range-be esik, annyi KP jár. */
        initiativeRanges: new ht(
          new B({
            min: new F({ required: !1, integer: !0, initial: 0 }),
            max: new F({ required: !1, integer: !0, initial: 0 }),
            kp: new F({ required: !1, integer: !0, min: 0, max: 10, initial: 0 })
          }),
          { required: !1, initial: [] }
        )
      }),
      skills: new B({
        deception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        medicalCare: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        endurance: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        perception: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        cooking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // Alap Gyorsgondolkodás jártasság (PC-k és egyéb referenciák használják)
        quickThinking: new F({ required: !1, integer: !0, min: 0, initial: 0 }),
        // NPC header mezők – itt szöveg is lehet, ezért StringField
        quickThinking1: new O({ required: !1, blank: !0, initial: "" }),
        quickThinking2: new O({ required: !1, blank: !0, initial: "" }),
        quickThinking3: new O({ required: !1, blank: !0, initial: "" }),
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
      weapons: new B({
        slotOrder: new O({ required: !1, blank: !0, initial: "slot1" }),
        slot1: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot2: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot3: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot4: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot5: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot6: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot7: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot8: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot9: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        }),
        slot10: new B({
          name: new O({ required: !1, blank: !0, initial: "" }),
          bonus: new O({ required: !1, blank: !0, initial: "" }),
          damage: new O({ required: !1, blank: !0, initial: "" }),
          itemId: new O({ required: !1, blank: !0, initial: "" })
        })
      }),
      gear: new B({
        microchips: new B({
          slot1: new B({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new oe({ required: !1, initial: !1 })
          }),
          slot2: new B({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new oe({ required: !1, initial: !1 })
          }),
          slot3: new B({
            itemId: new O({ required: !1, blank: !0, initial: "" }),
            name: new O({ required: !1, blank: !0, initial: "" }),
            active: new oe({ required: !1, initial: !1 })
          })
        }),
        equipment: new O({ required: !1, blank: !0, initial: "" }),
        armor: new ht(
          new B({
            name: new O({ required: !1, blank: !0, initial: "" }),
            protectionBonus: new O({ required: !1, blank: !0, initial: "" }),
            speedPenalty: new O({ required: !1, blank: !0, initial: "" }),
            level: new O({ required: !1, blank: !0, initial: "" }),
            other: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        ),
        generalItems: new ht(
          new B({
            name: new O({ required: !1, blank: !0, initial: "" }),
            quantity: new F({ required: !1, integer: !0, min: 0, initial: 1 }),
            description: new O({ required: !1, blank: !0, initial: "" })
          }),
          { required: !1, initial: [] }
        )
      }),
      abilities: new B({
        faji: new B({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        hatter: new B({
          itemId: new O({ required: !1, blank: !0, initial: "" }),
          name: new O({ required: !1, blank: !0, initial: "" })
        }),
        passive: new B({
          items: new ht(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        }),
        active: new B({
          items: new ht(
            new O({ required: !1, blank: !0 }),
            { required: !1, initial: [] }
          )
        })
      }),
      notes: new B({
        biography: new Ws({ required: !1, blank: !0 })
      })
    };
  }
}
const { NumberField: Et, SchemaField: Js } = foundry.data.fields;
class Ys extends Vt {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      attributes: new Js({
        body: new Et({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        mind: new Et({ required: !0, integer: !0, min: 3, max: 18, initial: 10 }),
        soul: new Et({ required: !0, integer: !0, min: 3, max: 18, initial: 10 })
      })
    };
  }
}
const { SchemaField: Xs, StringField: ms } = foundry.data.fields;
class Qs extends Vt {
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
const { BooleanField: Zs, NumberField: gi, StringField: Fe } = foundry.data.fields;
class ps extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox; a fegyver lapon nem jelenik meg). */
      equipped: new Zs({ required: !1, initial: !1 }),
      type: new Fe({
        required: !0,
        blank: !1,
        options: ["kinetic", "projectile", "blade", "explosive", "other"],
        initial: "kinetic"
      }),
      size: new Fe({
        required: !0,
        blank: !1,
        options: ["light", "medium", "heavy", "thrown"],
        initial: "light"
      }),
      bonus: new Fe({ required: !1, blank: !0, initial: "" }),
      damage: new Fe({
        required: !1,
        blank: !0,
        initial: ""
      }),
      range: new Fe({ required: !1, blank: !0, initial: "" }),
      special: new Fe({ required: !1, blank: !0, initial: "" }),
      quantity: new Fe({ required: !1, blank: !0, initial: "1" }),
      /** Jártasság kulcs (pl. grenadeUse, firearms) – ezt a bónuszt adja hozzá a támadáshoz. Alapértelmezett: Kézifegyver Használat. */
      skillKey: new Fe({ required: !1, blank: !0, initial: "grenadeUse" })
    };
  }
}
const { BooleanField: ei, StringField: Nt } = foundry.data.fields;
class ti extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Felszerelve a karakteren (karakter lap checkbox). */
      equipped: new ei({ required: !1, initial: !1 }),
      /** Védelem bónusz (a táblázatban: Védelem Bónusz). */
      protectionBonus: new Nt({ required: !1, blank: !0, initial: "" }),
      /** Sebesség levonás (a táblázatban: Sebesség Levonás). */
      speedPenalty: new Nt({ required: !1, blank: !0, initial: "" }),
      /** Szint: Alap, 1., 2., 3. (alapértelmezett Alap). */
      level: new Nt({ required: !1, blank: !0, initial: "Alap" }),
      /** Speciális (a táblázatban: Speciális). */
      special: new Nt({ required: !1, blank: !0, initial: "" })
    };
  }
}
const { NumberField: Pt, StringField: fs } = foundry.data.fields;
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
      cost: new Pt({ required: !1, integer: !0, min: 0, initial: 1250 }),
      replaceCost: new Pt({ required: !1, integer: !0, min: 0, initial: 3 }),
      quantity: new Pt({ required: !1, integer: !0, min: 0, initial: 1 })
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
const { NumberField: $t, StringField: Xe, SchemaField: bs, ArrayField: oi } = foundry.data.fields;
class ci extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      /** Szint (0–3). */
      level: new $t({ required: !0, integer: !0, min: 0, max: 3, initial: 0 }),
      /** Életerő: max / aktuális. */
      health: new bs({
        max: new $t({ required: !0, integer: !0, min: 0, initial: 0 }),
        value: new $t({ required: !0, integer: !0, min: 0, initial: 0 })
      }),
      /** Képességek: hivatkozott Képesség itemek UUID listája. */
      abilities: new bs({
        items: new oi(
          new Xe({ required: !1, blank: !0 }),
          { required: !1, initial: [] }
        )
      }),
      /** Sebesség (szabad szöveg, opcionális). */
      speed: new Xe({ required: !1, blank: !0, initial: "" }),
      /** Hatótáv (szabad szöveg, opcionális). */
      range: new Xe({ required: !1, blank: !0, initial: "" }),
      /** Raktár (szabad szöveg, opcionális). */
      storage: new Xe({ required: !1, blank: !0, initial: "" }),
      /** Sebzés (szabad szöveg, opcionális). */
      damage: new Xe({ required: !1, blank: !0, initial: "" }),
      /** Találati érték (szabad szöveg, opcionális). */
      hit: new Xe({ required: !1, blank: !0, initial: "" })
    };
  }
}
function xt(S) {
  if (!S || !Array.isArray(S.terms)) return { resultType: null, label: null };
  const s = [], e = [], t = [];
  let n = !1;
  const p = (r, i = 1) => {
    if (!Array.isArray(r)) return;
    let o = i;
    for (const c of r) {
      if (!c) continue;
      if (Array.isArray(c.terms)) {
        p(c.terms, o);
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
  p(S.terms, 1);
  const l = s.filter((r) => r === 6).length, m = s.filter((r) => r === 1).length, u = e.filter((r) => r === 6).length, d = t.filter((r) => r === 6).length, f = l + u, y = m + d;
  return f > 0 && f === y ? { resultType: null, label: null } : f >= 3 ? { resultType: "critical", label: "Brutális Siker" } : f === 2 ? { resultType: "critical", label: "Kritikus Siker" } : y >= 3 ? { resultType: "fumble", label: "Brutális Sikertelenség" } : y === 2 ? { resultType: "fumble", label: "Kritikus Sikertelenség" } : { resultType: null, label: null };
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
    var n, p, l, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    const p = this.element, l = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (p) {
      m.scrollState = this._saveScrollState(p);
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
    const d = this.element, f = this.form ?? this.element, y = m.scrollState, r = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var a, g;
      if (this._applyScrollState(d, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const h = ((a = f.querySelector) == null ? void 0 : a.call(f, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (g = f.querySelector) == null ? void 0 : g.call(f, `[name="${CSS.escape(r.name)}"]`) : null);
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
    const p = Math.floor(n / 3), l = Math.floor(2 * n / 3);
    return t <= p ? 1 : t <= l ? 2 : 3;
  }
  /** Összes felszerelt páncél sebesség levonásának összege (m). Negatív érték = levonás. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorSpeedPenalty() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var m;
        return l.type === "Pancel" && ((m = l.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const m = String(((p = l.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(m);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Összes felszerelt páncél védelmi bónuszának összege. Tizedesvessző (,) is elfogadott. */
  _getTotalArmorProtectionBonus() {
    var t, n, p;
    const s = (((n = (t = this.actor) == null ? void 0 : t.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var m;
        return l.type === "Pancel" && ((m = l.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let e = 0;
    for (const l of s) {
      const m = String(((p = l.system) == null ? void 0 : p.protectionBonus) ?? "").trim().replace(",", "."), u = Number(m);
      Number.isFinite(u) && (e += u);
    }
    return e;
  }
  /** Static: páncél sebesség levonás összege egy actorról (összesített sebesség számításhoz). */
  static _getTotalArmorSpeedPenaltyStatic(s) {
    var n, p;
    const e = (((n = s == null ? void 0 : s.items) == null ? void 0 : n.contents) ?? []).filter(
      (l) => {
        var m;
        return l.type === "Pancel" && ((m = l.system) == null ? void 0 : m.equipped) === !0;
      }
    );
    let t = 0;
    for (const l of e) {
      const m = String(((p = l.system) == null ? void 0 : p.speedPenalty) ?? "").trim().replace(",", "."), u = Number(m);
      Number.isFinite(u) && (t += u);
    }
    return t;
  }
  /**
   * Összesített sebesség számított értéke (státusz nélkül). Ha Mozgásképtelen van, ezt ne használd kijelzésre.
   * @returns {number}
   */
  static getTotalSpeedRaw(s) {
    var f, y, r, i, o, c, a, g, h;
    if (!(s != null && s.system)) return 0;
    const e = s.system.resources ?? {}, t = ((y = (f = e.hitLocations) == null ? void 0 : f.legs) == null ? void 0 : y.value) ?? 0, n = ((r = e.currentHealth) == null ? void 0 : r.legs) ?? 0, p = J._healthStatusFromRatio(n, t);
    if (p === 0) return 0;
    const l = Number(((o = (i = s.system) == null ? void 0 : i.combat) == null ? void 0 : o.givenSpeed) ?? 0) || 0;
    let m;
    p === 1 ? m = -6 : p === 2 ? m = -3 : m = l, m += J._getTotalArmorSpeedPenaltyStatic(s);
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
    const n = ((a = (c = this.actor) == null ? void 0 : c.system) == null ? void 0 : a.resources) ?? {}, p = ((h = (g = n.hitLocations) == null ? void 0 : g.legs) == null ? void 0 : h.value) ?? 0, l = ((v = n.currentHealth) == null ? void 0 : v.legs) ?? 0, m = J._healthStatusFromRatio(l, p), u = Number(((D = (T = (I = this.actor) == null ? void 0 : I.system) == null ? void 0 : T.combat) == null ? void 0 : D.givenSpeed) ?? 0) || 0;
    let d;
    m === 0 ? d = 0 : m === 1 ? d = -6 : m === 2 ? d = -3 : d = u;
    const f = this._getTotalArmorSpeedPenalty();
    d += f, t.textContent = String(d);
  }
  /** Kapott védelem kijelzés: tárolt givenProtection + páncélok + Körültekintés (+1) + Fél-fedezék (+3) + Háromnegyed-fedezék (+6). */
  _writeEffectiveGivenProtection(s = null) {
    var d, f, y, r, i, o, c, a, g, h, v, I, T;
    const e = s ?? this.form ?? this.element;
    let t = (d = e == null ? void 0 : e.querySelector) == null ? void 0 : d.call(e, ".karakter-given-defense-effective");
    if (!t && this.id && (t = document.querySelector(`#${CSS.escape(this.id)} .karakter-given-defense-effective`)), !t) return;
    const n = Number(((r = (y = (f = this.actor) == null ? void 0 : f.system) == null ? void 0 : y.combat) == null ? void 0 : r.givenProtection) ?? 0) || 0, p = (c = (o = (i = this.actor) == null ? void 0 : i.statuses) == null ? void 0 : o.has) != null && c.call(o, "lookaround") ? 1 : 0, l = (h = (g = (a = this.actor) == null ? void 0 : a.statuses) == null ? void 0 : g.has) != null && h.call(g, "halfcover") ? 3 : 0, m = (T = (I = (v = this.actor) == null ? void 0 : v.statuses) == null ? void 0 : I.has) != null && T.call(I, "threequarteredcover") ? 6 : 0, u = n + this._getTotalArmorProtectionBonus() + p + l + m;
    t.textContent = String(u);
  }
  /** Összesített védelem/sebesség kijelzés: Alap + Ideiglenes + Kapott, a DOM-ból olvasva. */
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (y) => {
      var r;
      return ((r = e == null ? void 0 : e.querySelector) == null ? void 0 : r.call(e, y)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${y}`) : null);
    }, n = t(".karakter-total-defense-effective"), p = t(".karakter-given-defense-effective"), l = t('input[name="system.combat.defense"]'), m = t('input[name="system.combat.defenseBonus"]');
    if (!n) return;
    const u = Number(l == null ? void 0 : l.value) || 0, d = Number(m == null ? void 0 : m.value) || 0, f = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(u + d + f);
  }
  _writeTotalSpeed(s = null) {
    var c, a, g, h, v, I, T, D;
    const e = s ?? this.form ?? this.element, t = (C) => {
      var _;
      return ((_ = e == null ? void 0 : e.querySelector) == null ? void 0 : _.call(e, C)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${C}`) : null);
    }, n = t(".karakter-total-speed-effective"), p = t(".karakter-given-speed-effective"), l = t('input[name="system.combat.speed"]'), m = t('input[name="system.combat.speedBonus"]');
    if (!n) return;
    if ((g = (a = (c = this.actor) == null ? void 0 : c.statuses) == null ? void 0 : a.has) != null && g.call(a, "immobilized")) {
      n.textContent = "0";
      return;
    }
    const u = ((v = (h = this.actor) == null ? void 0 : h.system) == null ? void 0 : v.resources) ?? {}, d = ((T = (I = u.hitLocations) == null ? void 0 : I.legs) == null ? void 0 : T.value) ?? 0, f = ((D = u.currentHealth) == null ? void 0 : D.legs) ?? 0;
    if (J._healthStatusFromRatio(f, d) === 0) {
      n.textContent = "0";
      return;
    }
    const r = Number(l == null ? void 0 : l.value) || 0, i = Number(m == null ? void 0 : m.value) || 0, o = Number(p == null ? void 0 : p.textContent) || 0;
    n.textContent = String(r + i + o);
  }
  /** Return health status 0–3 for the body part linked to this skill, or undefined if not linked. */
  _getSkillHealthStatus(s) {
    var l, m, u, d;
    const e = J.BODY_PART_BY_SKILL[s];
    if (e == null) return;
    const t = ((l = this.actor.system) == null ? void 0 : l.resources) ?? {}, n = ((u = (m = t.hitLocations) == null ? void 0 : m[e]) == null ? void 0 : u.value) ?? 0, p = ((d = t.currentHealth) == null ? void 0 : d[e]) ?? 0;
    return J._healthStatusFromRatio(p, n);
  }
  /** Static: health status 0–3 for skill on an actor (used by roll sheet without sheet instance). */
  static _getSkillHealthStatusStatic(s, e) {
    var m, u, d, f;
    const t = J.BODY_PART_BY_SKILL[e];
    if (t == null) return;
    const n = ((m = s == null ? void 0 : s.system) == null ? void 0 : m.resources) ?? {}, p = ((d = (u = n.hitLocations) == null ? void 0 : u[t]) == null ? void 0 : d.value) ?? 0, l = ((f = n.currentHealth) == null ? void 0 : f[t]) ?? 0;
    return J._healthStatusFromRatio(l, p);
  }
  async _prepareContext(s) {
    var it, nt, at, rt, ot, ct, lt, ut, dt, Me, mt, pt, je, k, x, R, G, de, te, be, ge, me, Oe, Ke, ze, Ot, Ct, qt, Lt, ft, Je, Jt, Yt, Xt, Qt, Zt, es, ts, ss, is, ns, as, rs, os, cs;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = Number((at = (nt = (it = this.actor.system) == null ? void 0 : it.resources) == null ? void 0 : nt.stress) == null ? void 0 : at.value) || 0;
    e.stressOver10 = t > 10;
    const n = this.actor.system.resources ?? {}, p = n.hitLocations ?? {}, l = n.currentHealth ?? {}, m = ["head", "torso", "arms", "legs"];
    e.computedHealthStatus = {};
    for (const b of m) {
      const N = ((rt = p[b]) == null ? void 0 : rt.value) ?? 0, L = l[b] ?? 0;
      e.computedHealthStatus[b] = J._healthStatusFromRatio(L, N);
    }
    const u = (Number(l.head) || 0) === 0, f = ["torso", "arms", "legs"].filter((b) => (Number(l[b]) || 0) === 0).length;
    e.showDeathSkull = u || f >= 2;
    const y = e.computedHealthStatus.legs ?? 3, r = Number(((ct = (ot = this.actor.system) == null ? void 0 : ot.combat) == null ? void 0 : ct.givenSpeed) ?? 0) || 0;
    let i;
    y === 0 ? i = 0 : y === 1 ? i = -6 : y === 2 ? i = -3 : i = r;
    const o = this._getTotalArmorSpeedPenalty();
    i += o, e.effectiveGivenSpeed = i;
    const c = Number(((ut = (lt = this.actor.system) == null ? void 0 : lt.combat) == null ? void 0 : ut.givenProtection) ?? 0) || 0, a = (mt = (Me = (dt = this.actor) == null ? void 0 : dt.statuses) == null ? void 0 : Me.has) != null && mt.call(Me, "lookaround") ? 1 : 0, g = (k = (je = (pt = this.actor) == null ? void 0 : pt.statuses) == null ? void 0 : je.has) != null && k.call(je, "halfcover") ? 3 : 0, h = (G = (R = (x = this.actor) == null ? void 0 : x.statuses) == null ? void 0 : R.has) != null && G.call(R, "threequarteredcover") ? 6 : 0, v = c + this._getTotalArmorProtectionBonus() + a + g + h;
    e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(this.actor.system),
      { combat: { givenSpeed: i, givenProtection: v } },
      { inplace: !1 }
    );
    const I = ((de = e.system) == null ? void 0 : de.combat) ?? {};
    e.totalDefense = (Number(I.defense) || 0) + (Number(I.defenseBonus) || 0) + (Number(I.givenProtection) || 0);
    const T = Number(I.givenSpeed);
    let D = (Number(I.speed) || 0) + (Number(I.speedBonus) || 0) + (Number.isFinite(T) ? T : 0);
    y === 0 && (D = 0), (ge = (be = (te = this.actor) == null ? void 0 : te.statuses) == null ? void 0 : be.has) != null && ge.call(be, "immobilized") && (e.effectiveGivenSpeed = 0, e.system = foundry.utils.mergeObject(
      foundry.utils.duplicate(e.system ?? this.actor.system),
      { combat: { givenSpeed: 0, givenProtection: (Oe = (me = e.system) == null ? void 0 : me.combat) == null ? void 0 : Oe.givenProtection } },
      { inplace: !1 }
    ), D = 0), e.totalSpeed = D;
    const C = J.BODY_PART_BY_SKILL;
    e.skillHealthStatus = {}, e.skillDisabled = {}, e.skillHasHealthTint = {};
    for (const [b, N] of Object.entries(C)) {
      const L = e.computedHealthStatus[N];
      e.skillHealthStatus[b] = L, e.skillDisabled[b] = L === 0 ? " disabled" : "", e.skillHasHealthTint[b] = !0;
    }
    const _ = this.actor.system.weapons ?? {}, q = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], j = (_.slotOrder ?? "").trim(), E = j ? j.split(/\s*,\s*/).filter((b) => q.includes(b)) : [], w = (Ke = this.actor.system.gear) == null ? void 0 : Ke.microchips, A = w && typeof w == "object" && !Array.isArray(w) ? w : {}, M = (((ze = A.slot1) == null ? void 0 : ze.itemId) ?? "").trim(), z = (((Ot = A.slot2) == null ? void 0 : Ot.itemId) ?? "").trim(), Q = (((Ct = A.slot3) == null ? void 0 : Ct.itemId) ?? "").trim(), K = this.actor.items.contents.filter((b) => b.type !== "Kepesseg" && b.type !== "ability").slice().sort((b, N) => {
      const L = typeof b.sort == "number" ? b.sort : 0, P = typeof N.sort == "number" ? N.sort : 0;
      return L - P;
    }).map((b) => {
      var Ce, He, Be, Ne, Ae, yt;
      const N = b.type === "Fegyver", L = b.type === "MikroChip";
      let P = 0, U = "", ne = null;
      for (let Ye = 0; Ye < E.length; Ye++) {
        const gt = E[Ye];
        if ((((Ce = _[gt]) == null ? void 0 : Ce.itemId) ?? "") === b.id) {
          P = Ye + 1, U = ((He = _[gt]) == null ? void 0 : He.bonus) ?? "", ne = gt;
          break;
        }
      }
      let se = null;
      L && (M === b.id ? se = "slot1" : z === b.id ? se = "slot2" : Q === b.id && (se = "slot3"));
      const Ue = N && ((Be = b.system) != null && Be.damage) ? b.system.damage : "", pe = N && typeof ((Ne = b.system) == null ? void 0 : Ne.range) == "string" ? (b.system.range || "").trim() : "", he = ne ? Number((Ae = _[ne]) == null ? void 0 : Ae.bonus) || 0 : "";
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        type: b.type,
        isWeapon: N,
        slotAssignment: P,
        slotBonus: U,
        slotKey: ne,
        microchipSlotKey: se,
        isEquipped: !!(ne || se),
        damage: Ue,
        rangeStr: pe,
        slotBonusNum: he,
        quantity: Number(((yt = b.system) == null ? void 0 : yt.quantity) ?? 1) || 1
      };
    });
    e.actionsTable = K;
    const V = (((qt = this.actor.items) == null ? void 0 : qt.contents) ?? []).filter((b) => b.type === "Fegyver"), ee = V.map((b) => ({ id: b.id, name: b.name, img: b.img }));
    e.weaponItems = ee;
    const re = "— Nincs fegyver —", ue = E.filter((b) => {
      const L = ((_[b] ?? {}).itemId ?? "").trim();
      return L ? !!V.find((U) => U.id === L) : !1;
    });
    e.weaponSlots = ue.map((b, N) => {
      const L = _[b] ?? {}, P = (L.itemId ?? "").trim(), U = ee.find((he) => he.id === P), ne = V.find((he) => he.id === P), se = (ne == null ? void 0 : ne.system) ?? {}, Ue = se.size === "thrown", pe = (typeof se.range == "string" ? (se.range || "").trim() : "") || "—";
      return {
        slotKey: b,
        itemId: P,
        slotNum: N + 1,
        displayName: (U == null ? void 0 : U.name) || L.name || re,
        img: (U == null ? void 0 : U.img) || "",
        bonus: Number(L.bonus) || 0,
        damage: L.damage ?? "",
        isThrown: Ue,
        rangeStr: pe
      };
    });
    const Y = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, ie = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = V.map((b) => {
      var ls, us, ds;
      const N = b.id;
      let L = null, P = {};
      for (const Ft of E)
        if ((((ls = _[Ft]) == null ? void 0 : ls.itemId) ?? "").trim() === N) {
          L = Ft, P = _[Ft] ?? {};
          break;
        }
      const U = !!L, ne = ((us = b.system) == null ? void 0 : us.equipped) !== void 0 && ((ds = b.system) == null ? void 0 : ds.equipped) !== null ? !!b.system.equipped : U, se = (b == null ? void 0 : b.system) ?? {}, Ue = typeof se.range == "string" ? (se.range || "").trim() : "", pe = se.type ?? "", he = (Y[pe] ?? pe) || "—", Ce = se.size ?? "", He = (ie[Ce] ?? Ce) || "", Be = [he, He].filter(Boolean).join(", ") || he || "—", Ne = pe === "projectile" || Ce === "thrown", Ae = se.quantity, yt = Ae != null ? String(Ae).trim() : "1", Ye = String(P.bonus ?? "").trim(), gt = String(se.bonus ?? "").trim(), Us = Ye || gt || "0";
      return {
        slotKey: L ?? "",
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? re,
        img: (b == null ? void 0 : b.img) ?? "",
        bonus: Us,
        damage: P.damage ?? se.damage ?? "",
        rangeStr: Ue || "—",
        typeLabel: he,
        typeAndSize: Be,
        quantity: yt,
        quantityDisplay: Ne ? yt : "—",
        isProjectile: Ne,
        equipped: ne,
        special: (se.special ?? "").trim() || "—"
      };
    });
    const X = (((Lt = this.actor.items) == null ? void 0 : Lt.contents) ?? []).filter((b) => b.type === "Pancel");
    e.armorTable = X.map((b) => {
      var P, U;
      const N = (b == null ? void 0 : b.system) ?? {}, L = ((P = b.system) == null ? void 0 : P.equipped) !== void 0 && ((U = b.system) == null ? void 0 : U.equipped) !== null ? !!b.system.equipped : !1;
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
    const De = (((ft = this.actor.items) == null ? void 0 : ft.contents) ?? []).filter((b) => b.type === "Targy");
    e.itemsTable = De.map((b) => {
      const N = (b == null ? void 0 : b.system) ?? {}, L = (N.description ?? "").trim(), P = L ? L.length > 60 ? L.slice(0, 57) + "…" : L : "—", U = N.quantity != null ? String(N.quantity).trim() : "1";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        quantity: U,
        description: P
      };
    });
    const qe = (((Je = this.actor.items) == null ? void 0 : Je.contents) ?? []).filter((b) => b.type === "Egyeb");
    e.egyebList = qe.map((b) => {
      const L = (((b == null ? void 0 : b.system) ?? {}).description ?? "").trim(), P = L ? L.length > 80 ? L.slice(0, 77) + "…" : L : "";
      return {
        itemId: b.id,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        description: P
      };
    });
    const Ee = (((Jt = this.actor.items) == null ? void 0 : Jt.contents) ?? []).filter((b) => b.type === "MikroChip"), ae = Ee.map((b) => ({ id: b.id, name: b.name, img: b.img })), Qe = "— Nincs Mikro-Chip —", _e = ["slot1", "slot2", "slot3"], Ge = (b) => {
      var L, P, U;
      const N = [];
      return b !== 1 && N.push((((L = A.slot1) == null ? void 0 : L.itemId) ?? "").trim()), b !== 2 && N.push((((P = A.slot2) == null ? void 0 : P.itemId) ?? "").trim()), b !== 3 && N.push((((U = A.slot3) == null ? void 0 : U.itemId) ?? "").trim()), N.filter(Boolean);
    };
    e.microchipItemsSlot1 = ae.filter((b) => !Ge(1).includes(b.id)), e.microchipItemsSlot2 = ae.filter((b) => !Ge(2).includes(b.id)), e.microchipItemsSlot3 = ae.filter((b) => !Ge(3).includes(b.id)), e.microchipSlots = _e.map((b) => {
      const N = A[b] ?? {}, L = (N.itemId ?? "").trim(), P = Ee.find((U) => U.id === L);
      return {
        slotKey: b,
        itemId: L,
        displayName: (P == null ? void 0 : P.name) || N.name || Qe,
        img: (P == null ? void 0 : P.img) || "",
        active: N.active === !0
      };
    }), ["1", "2", "3"].forEach((b) => {
      const N = `slot${b}`, L = A[N] ?? {}, P = (L.itemId ?? "").trim(), U = ae.find((ne) => ne.id === P);
      e[`microchip${b}ItemId`] = P, e[`microchip${b}DisplayName`] = (U == null ? void 0 : U.name) || L.name || Qe, e[`microchip${b}Img`] = (U == null ? void 0 : U.img) || "";
    }), e.microchipsTable = Ee.map((b) => {
      var Ce, He, Be, Ne;
      const N = b.id;
      let L = null;
      for (const Ae of _e)
        if ((((Ce = A[Ae]) == null ? void 0 : Ce.itemId) ?? "").trim() === N) {
          L = Ae;
          break;
        }
      const P = !!L, U = ((He = b == null ? void 0 : b.system) == null ? void 0 : He.abilityType) ?? "", ne = U === "active" ? "Aktív" : U === "passive" ? "Passzív" : U || "—", se = U === "active", Ue = Number((Be = b == null ? void 0 : b.system) == null ? void 0 : Be.replaceCost) >= 0 ? Number(b.system.replaceCost) : 0, pe = (((Ne = b == null ? void 0 : b.system) == null ? void 0 : Ne.description) ?? "").trim(), he = pe ? pe.length > 60 ? pe.slice(0, 57) + "…" : pe : "—";
      return {
        itemId: N,
        actorId: this.actor.id,
        name: (b == null ? void 0 : b.name) ?? "—",
        img: (b == null ? void 0 : b.img) ?? "",
        typeLabel: ne,
        description: he,
        kp: Ue,
        isActive: se,
        slotKey: L ?? "",
        equipped: P
      };
    });
    const vt = (((Yt = e.weaponsTable) == null ? void 0 : Yt.length) ?? 0) > 0 || (((Xt = e.armorTable) == null ? void 0 : Xt.length) ?? 0) > 0 || (((Qt = e.microchipsTable) == null ? void 0 : Qt.length) ?? 0) > 0 || (((Zt = e.itemsTable) == null ? void 0 : Zt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !vt;
    const kt = this.actor.system.abilities ?? {}, Wt = (((es = this.actor.items) == null ? void 0 : es.contents) ?? []).map((b) => {
      var N, L, P;
      return {
        id: b.id,
        name: b.name,
        img: b.img,
        kind: ((N = b.system) == null ? void 0 : N.kind) ?? "passive",
        description: ((L = b.system) == null ? void 0 : L.description) ?? "",
        kp: Number(((P = b.system) == null ? void 0 : P.kp) ?? 0) || 0
      };
    }), Ve = new Map(Wt.map((b) => [b.id, b])), wt = "— Nincs képesség —", Ze = (b) => {
      const N = kt[b] ?? {}, L = (N.itemId ?? "").trim(), P = L ? Ve.get(L) : null, U = (P == null ? void 0 : P.description) ?? "", ne = (P == null ? void 0 : P.kp) ?? 0;
      return {
        itemId: L,
        displayName: (P == null ? void 0 : P.name) || N.name || wt,
        img: (P == null ? void 0 : P.img) || "",
        description: U,
        kp: ne
      };
    };
    e.abilityFajiSlot = Ze("faji"), e.abilityHatterSlot = Ze("hatter");
    const et = (b) => {
      const N = kt[b];
      return N ? Array.isArray(N == null ? void 0 : N.items) ? N.items : Array.isArray(N) ? N : [] : [];
    }, tt = (b) => b.map((N) => {
      const L = Ve.get(N);
      return L ? {
        id: L.id,
        name: L.name,
        img: L.img,
        description: L.description,
        kp: L.kp
      } : null;
    }).filter(Boolean);
    e.abilityPassiveList = tt(et("passive")), e.abilityActiveList = tt(et("active"));
    const It = ((ts = e.system) == null ? void 0 : ts.resources) ?? {}, We = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6"], Pe = (is = (ss = e.system) == null ? void 0 : ss.combat) == null ? void 0 : is.initiativeResult, ye = typeof Pe == "number" ? Pe : -1, St = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], $e = (as = (ns = e.system) == null ? void 0 : ns.combat) == null ? void 0 : as.initiativeRanges, xe = Array.isArray($e) ? $e.map((b) => ({ min: Number(b.min) ?? 0, max: Number(b.max) ?? 0, kp: Math.min(10, Math.max(0, Number(b.kp) ?? 0)) })) : [], Le = (xe.length > 0 ? xe : St).slice().sort((b, N) => b.min - N.min), Re = xe.map((b) => b.min), Tt = Re.length ? Math.min(...Re) : 0, Dt = Re.length ? Math.max(...Re) : 0;
    e.initiativeRanges = xe.map((b) => ({ ...b, isFirst: b.min === Tt, isLast: b.min === Dt }));
    let st = 0;
    if (typeof ye == "number" && ye >= 0 && Le.length > 0) {
      const b = Le[0], N = Le[Le.length - 1];
      let L = null;
      ye <= b.max ? L = b : ye >= N.min ? L = N : L = Le.find((P) => ye >= P.min && ye <= P.max), L && (st = L.kp);
    }
    e.kpDots = We.map((b, N) => {
      const L = N + 1, P = !!Number(It[b]), U = L <= st;
      return { index: L, used: P, usable: U };
    });
    const _t = !!((os = (rs = game.combat) == null ? void 0 : rs.combatants) != null && os.some((b) => {
      var N;
      return ((N = b.actor) == null ? void 0 : N.type) === "Karakter";
    }));
    return e.showHarcSection = _t, e.canEditInitiative = !!((cs = game.user) != null && cs.isGM), e.showInitiativeResult = typeof Pe == "number", e.initiativeResult = e.showInitiativeResult ? Pe : "", e;
  }
  _attachFrameListeners(s) {
    var y, r;
    super._attachFrameListeners(s);
    const e = this.form ?? ((y = s == null ? void 0 : s.querySelector) == null ? void 0 : y.call(s, "form.votv.karakter-sheet")) ?? s ?? this.element, t = $(e);
    if ($(document).off("click.votv-weapon-dropdown"), $(document).off("click.votv-microchip-dropdown"), t.on("click", ".karakter-weapon-attack", async (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = (i.currentTarget.dataset.slot ?? "").trim();
      if (!c) return;
      const { openRollSheetForWeapon: a } = await import("./roll-sheet-BVjGEqOG.mjs");
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
      const { openRollSheetForSkill: o } = await import("./roll-sheet-BVjGEqOG.mjs");
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
    const p = (r = e.querySelector) == null ? void 0 : r.call(e, 'input[name="system.resources.stress.value"]');
    p && n({ currentTarget: p });
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
      const o = i.currentTarget, c = o.dataset.skill, a = ((h = o.textContent) == null ? void 0 : h.trim()) || c, { openRollSheetForSkill: g } = await import("./roll-sheet-BVjGEqOG.mjs");
      g(this.actor, c, a);
    }), t.on("click", ".karakter-roll-morale-d8", (i) => {
      i.preventDefault(), this._rollMorale();
    }), t.on("click", ".karakter-weapon-slot-display", (i) => {
      var I, T, D, C, _, q, j;
      i.preventDefault();
      const c = i.currentTarget.closest(".karakter-weapon-slot"), a = c == null ? void 0 : c.dataset.slot;
      if (!a) return;
      const h = (((T = (((I = this.actor.system) == null ? void 0 : I.weapons) ?? {})[a]) == null ? void 0 : T.itemId) ?? "").trim();
      if (!h) return;
      const v = ((C = (D = this.actor.items).get) == null ? void 0 : C.call(D, h)) ?? ((q = (_ = this.actor.items.contents) == null ? void 0 : _.find) == null ? void 0 : q.call(_, (E) => E.id === h));
      (j = v == null ? void 0 : v.sheet) == null || j.render(!0);
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
        var j;
        return (((j = g[q]) == null ? void 0 : j.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let q = I.find((E) => {
          var w;
          return !((w = g[E]) != null && w.itemId);
        });
        const j = new Set(I);
        if (!q) {
          const E = v.find((w) => !j.has(w));
          if (!E) return;
          q = E, I.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: (a == null ? void 0 : a.name) ?? "",
          [`system.weapons.${q}.damage`]: ((C = a == null ? void 0 : a.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = a == null ? void 0 : a.system) == null ? void 0 : _.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const q = I.filter((j) => j !== T);
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
        var j;
        return (((j = g[q]) == null ? void 0 : j.itemId) ?? "").trim() === c;
      }) ?? null;
      if (o.checked) {
        if (T) return;
        let q = I.find((E) => {
          var w;
          return !((w = g[E]) != null && w.itemId);
        });
        const j = new Set(I);
        if (!q) {
          const E = v.find((w) => !j.has(w));
          if (!E) return;
          q = E, I.push(E);
        }
        await this.actor.update({
          "system.weapons.slotOrder": I.join(","),
          [`system.weapons.${q}.itemId`]: c,
          [`system.weapons.${q}.name`]: a.name ?? "",
          [`system.weapons.${q}.damage`]: ((C = a.system) == null ? void 0 : C.damage) ?? "",
          [`system.weapons.${q}.bonus`]: ((_ = a.system) == null ? void 0 : _.bonus) ?? ""
        }), await a.update({ "system.equipped": !0 });
      } else if (T) {
        const q = I.filter((j) => j !== T);
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
    }, f = (i) => {
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
      if (!f(a)) return;
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
    for (const f of s.elements) {
      if (!f.name || f.disabled || f.type === "radio" && !f.checked || f.name.startsWith("system.resources.healthStatus.")) continue;
      let y;
      f.type === "checkbox" ? y = f.checked : f.type === "number" ? y = f.value === "" ? 0 : Number(f.value) : y = f.value ?? "", foundry.utils.setProperty(e, f.name, y);
    }
    const t = foundry.utils.mergeObject(
      ((m = this.actor.system) == null ? void 0 : m.resources) ?? {},
      ((u = foundry.utils.expandObject(e).system) == null ? void 0 : u.resources) ?? {}
    ), n = t.hitLocations ?? {}, p = t.currentHealth ?? {}, l = ["head", "torso", "arms", "legs"];
    for (const f of l) {
      const y = ((d = n[f]) == null ? void 0 : d.value) ?? 0, r = p[f] ?? 0;
      foundry.utils.setProperty(e, `system.resources.healthStatus.${f}`, J._healthStatusFromRatio(r, y));
    }
    return e;
  }
  async _onDropItem(s, e) {
    var t, n, p, l, m, u, d, f, y, r, i, o;
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
            g = ((p = (await this.actor.createEmbeddedDocuments("Item", [D]))[0]) == null ? void 0 : p.id) ?? g;
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
            v = ((f = (await g.createEmbeddedDocuments("Item", [I]))[0]) == null ? void 0 : f.id) ?? v;
          }
          if (h) {
            const I = ((y = g.system) == null ? void 0 : y.weapons) ?? {}, T = (I.slotOrder ?? "").trim(), D = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], C = T ? T.split(/\s*,\s*/).filter((q) => D.includes(q)) : [], _ = C.filter((q) => {
              var j;
              return (((j = I[q]) == null ? void 0 : j.itemId) ?? "").trim() === v;
            });
            if (_.length > 0) {
              const j = {
                "system.weapons.slotOrder": C.filter((E) => !_.includes(E)).join(",")
              };
              for (const E of _)
                j[`system.weapons.${E}.itemId`] = "", j[`system.weapons.${E}.name`] = "", j[`system.weapons.${E}.damage`] = "", j[`system.weapons.${E}.bonus`] = "";
              await g.update(j);
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
    var p, l, m;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-weapon-slot-drag-over"));
  }
  async _onWeaponSlotDrop(s, e) {
    var m, u, d, f, y, r;
    s.preventDefault(), s.stopPropagation(), (m = s.currentTarget) == null || m.classList.remove("karakter-weapon-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "Fegyver") return;
    if (((f = p.parent) == null ? void 0 : f.id) !== this.actor.id) {
      const i = foundry.utils.mergeObject(p.toObject(), { system: { ...p.toObject().system ?? {}, equipped: !1 } });
      await this.actor.createEmbeddedDocuments("Item", [i]);
      return;
    }
    const l = p.id;
    await this.actor.update({
      [`system.weapons.${e}.itemId`]: l,
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
    var d, f;
    s.preventDefault(), (d = s.currentTarget) == null || d.classList.remove("karakter-actions-row-drag-over");
    const t = this._draggingInventoryItemId || ((f = s.dataTransfer) == null ? void 0 : f.getData("text/plain"));
    if (this._draggingInventoryItemId = null, !t || !e || t === e) return;
    const p = this.actor.items.contents.slice().sort((y, r) => {
      const i = typeof y.sort == "number" ? y.sort : 0, o = typeof r.sort == "number" ? r.sort : 0;
      return i - o;
    }).map((y) => y.id), l = p.indexOf(t), m = p.indexOf(e);
    if (l === -1 || m === -1) return;
    p.splice(l, 1), p.splice(m, 0, t);
    const u = p.map((y, r) => ({
      _id: y,
      sort: (r + 1) * 10
    }));
    await this.actor.updateEmbeddedDocuments("Item", u);
  }
  _onInventoryAreaDragOver(s) {
    var n, p, l;
    const e = ((n = s.dataTransfer) == null ? void 0 : n.getData("text/plain")) || ((p = s.dataTransfer) == null ? void 0 : p.getData("application/json")) || "";
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
    var u, d, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postAbilityToChat(s) {
    var f, y, r;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((f = e.system) == null ? void 0 : f.kind) ?? "passive", n = Number(((y = e.system) == null ? void 0 : y.kp) ?? 0) || 0, p = (((r = e.system) == null ? void 0 : r.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", d = `
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
    var l, m, u;
    s.preventDefault(), (l = s.currentTarget) == null || l.classList.remove("karakter-ability-slot-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((m = n.parent) == null ? void 0 : m.id) !== this.actor.id) {
      const d = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((u = (await this.actor.createEmbeddedDocuments("Item", [d]))[0]) == null ? void 0 : u.id) ?? p;
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
    var u, d, f, y;
    s.preventDefault(), (u = s.currentTarget) == null || u.classList.remove("karakter-ability-area-drag-over");
    const t = this._parseAbilityDrop(s);
    if (!t || !t.uuid) return;
    const n = await fromUuid(t.uuid);
    if (!n || n.type !== "Kepesseg" && n.type !== "ability") return;
    let p = n.id;
    if (((d = n.parent) == null ? void 0 : d.id) !== this.actor.id) {
      const r = foundry.utils.mergeObject(n.toObject(), { type: "Kepesseg" });
      p = ((f = (await this.actor.createEmbeddedDocuments("Item", [r]))[0]) == null ? void 0 : f.id) ?? p;
    }
    const l = this.actor.system.abilities ?? {}, m = Array.isArray((y = l[e]) == null ? void 0 : y.items) ? l[e].items.slice() : Array.isArray(l[e]) ? l[e].slice() : [];
    m.includes(p) || m.push(p), await this.actor.update({ [`system.abilities.${e}.items`]: m });
  }
  _onMicrochipSlotDragOver(s, e) {
    var p, l, m;
    const t = ((p = s.dataTransfer) == null ? void 0 : p.getData("text/plain")) || ((l = s.dataTransfer) == null ? void 0 : l.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    (n == null ? void 0 : n.type) === "Item" && (s.preventDefault(), (m = s.currentTarget) == null || m.classList.add("karakter-microchip-slot-drag-over"));
  }
  async _onMicrochipSlotDrop(s, e) {
    var m, u, d, f, y;
    s.preventDefault(), (m = s.currentTarget) == null || m.classList.remove("karakter-microchip-slot-drag-over");
    const t = ((u = s.dataTransfer) == null ? void 0 : u.getData("text/plain")) || ((d = s.dataTransfer) == null ? void 0 : d.getData("application/json")) || "";
    let n;
    try {
      n = typeof t == "string" ? JSON.parse(t) : t;
    } catch {
      return;
    }
    if ((n == null ? void 0 : n.type) !== "Item" || !(n != null && n.uuid)) return;
    const p = await fromUuid(n.uuid);
    if (!p || p.type !== "MikroChip") return;
    let l = p.id;
    ((f = p.parent) == null ? void 0 : f.id) !== this.actor.id && (l = ((y = (await this.actor.createEmbeddedDocuments("Item", [p.toObject()]))[0]) == null ? void 0 : y.id) ?? l), await this.actor.update({
      [`system.gear.microchips.${e}.itemId`]: l,
      [`system.gear.microchips.${e}.name`]: p.name,
      [`system.gear.microchips.${e}.active`]: !0
    });
  }
  async _rollSkill(s, e) {
    const n = (this.actor.system.skills ?? {})[s] ?? 0;
    let p = Number(n) || 0;
    const l = this._getSkillHealthStatus(s);
    l === 1 ? p -= 6 : l === 2 && (p -= 3);
    const u = `3d6${p !== 0 ? p > 0 ? `+${p}` : `${p}` : ""}`, d = new Roll(u);
    await d.evaluate({ async: !0 });
    const { resultType: f, label: y } = xt(d), r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return d.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: e,
      flags: { "vacuum-of-the-void": { resultType: f, critLabel: y } },
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
    var l;
    const s = Number(((l = this.actor.system.skills) == null ? void 0 : l.quickThinking) ?? 0) || 0, t = `1d20${s !== 0 ? s > 0 ? `+${s}` : `${s}` : ""}`, n = new Roll(t);
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
    var I, T;
    const t = (this.actor.system.weapons ?? {})[s] ?? {}, n = this.actor.system.skills ?? {}, p = this.actor.items.filter((D) => D.type === "Fegyver");
    let l = null;
    t.itemId && (l = p.find((D) => D.id === t.itemId) ?? null);
    const m = l && l.name || t.name || `Fegyver (${s})`, u = Number(t.bonus || 0) || 0, d = ((I = l == null ? void 0 : l.system) == null ? void 0 : I.type) || "kinetic", f = (((T = l == null ? void 0 : l.system) == null ? void 0 : T.skillKey) ?? "").trim(), y = f && n[f] !== void 0 ? f : d === "explosive" ? "grenadeUse" : "firearms", r = Number(n[y] || 0) || 0, i = u + r, c = `3d6${i !== 0 ? i > 0 ? `+${i}` : `${i}` : ""}`, a = new Roll(c);
    await a.evaluate({ async: !0 });
    const { resultType: g, label: h } = xt(a), v = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return a.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `${m} – találat`,
      flags: { "vacuum-of-the-void": { resultType: g, critLabel: h } },
      rollMode: v
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, d, f, y, r, i, o, c, a, g;
    const t = this.actor;
    if (!t) return;
    let n = ((d = (u = t.items).get) == null ? void 0 : d.call(u, s)) ?? ((y = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : y.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (g = (o = ui.notifications) == null ? void 0 : o.warn) == null || g.call(o, ((a = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : a.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(p);
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
Z(J, "PARTS", foundry.utils.mergeObject(
  H(J, J, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs" }
  },
  { inplace: !1 }
)), Z(J, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(J, J, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "Karakter"],
    template: "systems/vacuum-of-the-void/templates/actor/karakter-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((vs = H(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : vs.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((ks = H(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : ks.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Is = (ws = H(J, J, "DEFAULT_OPTIONS")) == null ? void 0 : ws.window) == null ? void 0 : Is.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
)), /** Skill key → body part; used for health-based UI and roll penalties. */
Z(J, "BODY_PART_BY_SKILL", {
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
let bt = J;
function di(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Ss, Ts, Ds, _s;
const ce = class ce extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ActorSheetV2
) {
  get actor() {
    return this.document;
  }
  /** A lap fő görgethető tartója: form (.votv.karakter-sheet) vagy .votv-scroll / .window-content. */
  _getScrollContainers(s) {
    var n, p, l, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.karakter-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
      const i = document.activeElement, o = n.contains(i), c = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA");
      o && c && (p.focus = {
        name: i.name || null,
        id: i.id || null,
        selectionStart: "selectionStart" in i ? i.selectionStart : 0,
        selectionEnd: "selectionEnd" in i ? i.selectionEnd : 0
      });
    }
    const l = await super.render(s, e), m = this.element, u = this.form ?? this.element, d = p.scrollState, f = p.focus, y = typeof (d == null ? void 0 : d.formScrollTop) == "number" || typeof (d == null ? void 0 : d.windowScrollTop) == "number", r = () => {
      var i, o;
      if (this._applyScrollState(m, d), (f == null ? void 0 : f.name) != null || (f == null ? void 0 : f.id) != null) {
        const c = ((i = u.querySelector) == null ? void 0 : i.call(u, f.id ? `#${CSS.escape(f.id)}` : null)) ?? (f.name ? (o = u.querySelector) == null ? void 0 : o.call(u, `[name="${CSS.escape(f.name)}"]`) : null);
        c && (c.tagName === "INPUT" || c.tagName === "TEXTAREA") && (c.focus({ preventScroll: !0 }), typeof c.selectionStart == "number" && (c.selectionStart = f.selectionStart ?? 0, c.selectionEnd = f.selectionEnd ?? f.selectionStart ?? 0));
      }
      this._applyScrollState(m, d);
    };
    return (y || f) && (requestAnimationFrame(r), setTimeout(r, 0), setTimeout(r, 50), setTimeout(r, 150), setTimeout(r, 300), setTimeout(r, 450)), l;
  }
  async _prepareContext(s) {
    var Ze, et, tt, It, We, Pe, ye, St, $e, xe, At, Le, Re, Tt, Dt, st, _t, it, nt, at, rt, ot, ct, lt, ut, dt, Me, mt, pt, je;
    const e = await super._prepareContext(s) ?? {};
    e.actor = e.actor ?? this.actor, e.system = e.system ?? ((Ze = this.actor) == null ? void 0 : Ze.system), e.showDeathSkull = !1, e.sizeForSelect = (((tt = (et = e.system) == null ? void 0 : et.identity) == null ? void 0 : tt.size) ?? "").trim() || "Közepes";
    const t = this.actor, n = ((It = e.system) == null ? void 0 : It.combat) ?? {}, p = Number(n.givenProtection ?? 0) || 0, l = (Pe = (We = t == null ? void 0 : t.statuses) == null ? void 0 : We.has) != null && Pe.call(We, "lookaround") ? 1 : 0, m = (St = (ye = t == null ? void 0 : t.statuses) == null ? void 0 : ye.has) != null && St.call(ye, "halfcover") ? 3 : 0, u = (xe = ($e = t == null ? void 0 : t.statuses) == null ? void 0 : $e.has) != null && xe.call($e, "threequarteredcover") ? 6 : 0;
    e.effectiveGivenProtection = p + l + m + u;
    const d = ((At = t == null ? void 0 : t.items) == null ? void 0 : At.contents) ?? [], f = ((Le = t == null ? void 0 : t.system) == null ? void 0 : Le.weapons) ?? {}, y = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], r = (f.slotOrder ?? "").trim(), i = r ? r.split(/\s*,\s*/).filter((k) => y.includes(k)) : [], o = d.filter((k) => k.type === "Fegyver"), c = o.map((k) => ({ id: k.id, name: k.name, img: k.img })), a = "— Nincs fegyver —", g = i.length > 0 ? i : y, h = y.filter((k) => !g.includes(k)), v = [...g, ...h], I = v.filter((k) => {
      var R;
      const x = (((R = f[k]) == null ? void 0 : R.itemId) ?? "").trim();
      return x && o.some((G) => G.id === x);
    });
    e.weaponSlots = I.map((k) => {
      const x = f[k] ?? {}, R = (x.itemId ?? "").trim(), G = c.find((me) => me.id === R), de = o.find((me) => me.id === R), te = (de == null ? void 0 : de.system) ?? {}, be = te.size === "thrown", ge = (typeof te.range == "string" ? (te.range || "").trim() : "") || "—";
      return {
        slotKey: k,
        itemId: R,
        displayName: (G == null ? void 0 : G.name) || x.name || a,
        img: (G == null ? void 0 : G.img) || "",
        isThrown: be,
        rangeStr: ge
      };
    });
    const T = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, D = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" };
    e.weaponsTable = o.map((k) => {
      var ft;
      const x = k.id;
      let R = null, G = {};
      for (const Je of v)
        if ((((ft = f[Je]) == null ? void 0 : ft.itemId) ?? "").trim() === x) {
          R = Je, G = f[Je] ?? {};
          break;
        }
      const de = !!R, te = (k == null ? void 0 : k.system) ?? {}, be = typeof te.range == "string" ? (te.range || "").trim() : "", ge = te.type ?? "", me = (T[ge] ?? ge) || "—", Oe = te.size ?? "", Ke = (D[Oe] ?? Oe) || "", ze = [me, Ke].filter(Boolean).join(", ") || me || "—", Ot = ge === "projectile" || Oe === "thrown", Ct = te.quantity != null ? String(te.quantity).trim() : "1", qt = String(te.bonus ?? G.bonus ?? "").trim() || "0", Lt = (te.damage ?? G.damage ?? "").trim() || "";
      return {
        slotKey: R ?? "",
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? a,
        img: (k == null ? void 0 : k.img) ?? "",
        bonus: qt,
        damage: Lt,
        rangeStr: be || "—",
        typeAndSize: ze,
        quantity: Ct,
        isProjectile: Ot,
        equipped: de,
        special: (te.special ?? "").trim() || "—"
      };
    });
    const C = d.filter((k) => k.type === "Pancel");
    e.armorTable = C.map((k) => {
      var G;
      const x = (k == null ? void 0 : k.system) ?? {}, R = ((G = k.system) == null ? void 0 : G.equipped) === !0;
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        protectionBonus: (x.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (x.speedPenalty ?? "").toString().trim() || "—",
        level: di((x.level ?? "").toString().trim()),
        special: (x.special ?? x.other ?? "").toString().trim() || "—",
        equipped: R
      };
    });
    const _ = ((Tt = (Re = t == null ? void 0 : t.system) == null ? void 0 : Re.gear) == null ? void 0 : Tt.microchips) ?? {}, q = ["slot1", "slot2", "slot3"], j = d.filter((k) => k.type === "MikroChip");
    e.microchipsTable = j.map((k) => {
      var ge, me, Oe, Ke;
      const x = k.id;
      let R = null;
      for (const ze of q)
        if ((((ge = _[ze]) == null ? void 0 : ge.itemId) ?? "").trim() === x) {
          R = ze;
          break;
        }
      const G = ((me = k == null ? void 0 : k.system) == null ? void 0 : me.abilityType) ?? "", de = G === "active" ? "Aktív" : G === "passive" ? "Passzív" : G || "—", te = (((Oe = k == null ? void 0 : k.system) == null ? void 0 : Oe.description) ?? "").trim(), be = te ? te.length > 60 ? te.slice(0, 57) + "…" : te : "—";
      return {
        itemId: x,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        typeLabel: de,
        description: be,
        kp: Number((Ke = k == null ? void 0 : k.system) == null ? void 0 : Ke.replaceCost) >= 0 ? Number(k.system.replaceCost) : 0,
        isActive: G === "active",
        slotKey: R ?? "",
        equipped: !!R
      };
    });
    const E = d.filter((k) => k.type === "Targy");
    e.itemsTable = E.map((k) => {
      const x = (k == null ? void 0 : k.system) ?? {}, R = (x.description ?? "").trim(), G = R ? R.length > 60 ? R.slice(0, 57) + "…" : R : "—";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        quantity: x.quantity != null ? String(x.quantity).trim() : "1",
        description: G
      };
    });
    const w = d.filter((k) => k.type === "Egyeb");
    e.egyebList = w.map((k) => {
      const R = (((k == null ? void 0 : k.system) ?? {}).description ?? "").trim(), G = R ? R.length > 80 ? R.slice(0, 77) + "…" : R : "";
      return {
        itemId: k.id,
        actorId: t.id,
        name: (k == null ? void 0 : k.name) ?? "—",
        img: (k == null ? void 0 : k.img) ?? "",
        description: G
      };
    });
    const A = (((Dt = e.weaponsTable) == null ? void 0 : Dt.length) ?? 0) > 0 || (((st = e.armorTable) == null ? void 0 : st.length) ?? 0) > 0 || (((_t = e.microchipsTable) == null ? void 0 : _t.length) ?? 0) > 0 || (((it = e.itemsTable) == null ? void 0 : it.length) ?? 0) > 0 || (((nt = e.egyebList) == null ? void 0 : nt.length) ?? 0) > 0;
    e.showEquipmentDropZone = !A;
    const M = ((at = t == null ? void 0 : t.system) == null ? void 0 : at.abilities) ?? {}, z = d.filter((k) => k.type === "Kepesseg" || k.type === "ability").map((k) => {
      var x, R, G;
      return {
        id: k.id,
        name: k.name,
        img: k.img,
        description: ((x = k.system) == null ? void 0 : x.description) ?? "",
        kp: Number(((R = k.system) == null ? void 0 : R.kp) ?? 0) || 0,
        kind: (((G = k.system) == null ? void 0 : G.kind) ?? "passive").toString()
      };
    }), Q = new Map(z.map((k) => [k.id, k])), W = { itemId: "", displayName: "— Nincs képesség —", img: "", description: "", kp: 0 };
    e.abilityFajiSlot = W, e.abilityHatterSlot = W;
    const K = (k) => {
      const x = M[k];
      return x ? Array.isArray(x == null ? void 0 : x.items) ? x.items : Array.isArray(x) ? x : [] : [];
    }, V = (k) => (k || []).map((x) => {
      const R = Q.get(x);
      if (!R) return null;
      const G = R.kind === "species";
      return {
        id: R.id,
        name: R.name,
        img: R.img,
        description: R.description,
        // Faji képességnél ne jelenjen meg a KP mennyiség
        kp: G ? 0 : R.kp
      };
    }).filter(Boolean);
    e.abilityPassiveList = V(K("passive")), e.abilityActiveList = V(K("active"));
    const ee = t == null ? void 0 : t.id, re = !!((ot = (rt = game.combat) == null ? void 0 : rt.combatants) != null && ot.some(
      (k) => {
        var x;
        return (((x = k.actor) == null ? void 0 : x.id) ?? k.actorId) === ee;
      }
    ));
    e.showHarcSection = re;
    const ue = ((ct = e.system) == null ? void 0 : ct.resources) ?? {}, Y = (ut = (lt = e.system) == null ? void 0 : lt.combat) == null ? void 0 : ut.initiativeResult, ie = typeof Y == "number" ? Y : -1, X = [
      { min: 0, max: 6, kp: 2 },
      { min: 7, max: 12, kp: 3 },
      { min: 13, max: 18, kp: 4 },
      { min: 19, max: 24, kp: 5 },
      { min: 25, max: 999, kp: 6 }
    ], De = (Me = (dt = e.system) == null ? void 0 : dt.combat) == null ? void 0 : Me.initiativeRanges, qe = Array.isArray(De) ? De.map((k) => ({ min: Number(k.min) ?? 0, max: Number(k.max) ?? 0, kp: Math.min(10, Math.max(0, Number(k.kp) ?? 0)) })) : [], ae = (qe.length > 0 ? qe : X).slice().sort((k, x) => k.min - x.min), Qe = 3;
    let _e = qe.length > 0 ? qe : [];
    _e.length < Qe && (_e = [..._e, ...Array(Qe - _e.length).fill({ min: 0, max: 0, kp: 0 })]), e.initiativeRanges = _e.map((k, x) => ({
      ...k,
      isFirst: x === 0,
      isLast: x === _e.length - 1
    }));
    let Ge = 0;
    if (typeof ie == "number" && ie >= 0 && ae.length > 0) {
      const k = ae[0], x = ae[ae.length - 1];
      let R = null;
      ie <= k.max ? R = k : ie >= x.min ? R = x : R = ae.find((G) => ie >= G.min && ie <= G.max), R && (Ge = R.kp);
    }
    const vt = ae.length > 0 ? ae[ae.length - 1] : null, kt = Math.min(10, vt ? vt.kp : 6), Ve = ["kpDot1", "kpDot2", "kpDot3", "kpDot4", "kpDot5", "kpDot6", "kpDot7", "kpDot8", "kpDot9", "kpDot10"].slice(0, Math.max(1, kt)).map((k, x) => {
      const R = x + 1, G = !!Number(ue[k]), de = R <= Ge;
      return { index: R, used: G, usable: de };
    }), wt = Math.ceil(Ve.length / 2);
    return e.kpDotsRow1 = Ve.slice(0, wt), e.kpDotsRow2 = Ve.slice(wt), e.canEditInitiative = !!((mt = game.user) != null && mt.isGM), e.showInitiativeResult = typeof Y == "number", e.initiativeResult = e.showInitiativeResult ? Y : "", e.speedUnitForSelect = ((je = (pt = e.system) == null ? void 0 : pt.combat) == null ? void 0 : je.speedUnit) ?? "m", e;
  }
  _attachFrameListeners(s) {
    var d, f, y;
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
      const { openRollSheetForWeapon: c } = await import("./roll-sheet-BVjGEqOG.mjs");
      c(this.actor, o);
    }), t.on("click", ".karakter-weapon-damage", async (r) => {
      var c, a, g, h, v;
      r.preventDefault(), r.stopPropagation();
      const i = r.currentTarget;
      let o = (((c = i == null ? void 0 : i.dataset) == null ? void 0 : c.itemId) ?? "").trim();
      !o && ((a = i == null ? void 0 : i.dataset) != null && a.slot) && (o = (((((h = (g = this.actor) == null ? void 0 : g.system) == null ? void 0 : h.weapons) ?? {})[i.dataset.slot] ?? {}).itemId ?? "").trim()), !(!o || !this.actor) && await this._rollWeaponDamage(o, (((v = i == null ? void 0 : i.dataset) == null ? void 0 : v.slot) ?? "").trim());
    }), t.on("click", ".karakter-harc-initiative", async (r) => {
      if (r.preventDefault(), r.stopPropagation(), !this.actor) return;
      const { openRollSheetForSkill: i } = await import("./roll-sheet-BVjGEqOG.mjs");
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
      const { openRollSheetForSkill: a } = await import("./roll-sheet-BVjGEqOG.mjs");
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
    const p = ".karakter-equipment-row[data-item-id], .karakter-ability-pill[data-item-id], .karakter-notes-egyeb-row[data-item-id]";
    (y = (f = e == null ? void 0 : e.querySelectorAll) == null ? void 0 : f.call(e, p)) == null || y.forEach((r) => {
      var i;
      (((i = r.dataset) == null ? void 0 : i.itemId) ?? "").trim() && (r.draggable = !0);
    }), t.on("dragstart", p, (r) => {
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
    var t, n, p;
    const e = this.form ?? ((n = (t = this.element) == null ? void 0 : t.querySelector) == null ? void 0 : n.call(t, "form.votv.npc-sheet"));
    if (e && this.actor) {
      const l = this._getFormDataForUpdate(e);
      Object.keys(l).length > 0 && await this.actor.update(l).catch((m) => console.warn("VoidNpcSheet save on preClose failed", m));
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
    var T, D, C, _, q;
    const e = this.actor;
    if (!e) return;
    const n = (((T = e.system) == null ? void 0 : T.weapons) ?? {})[s] ?? {}, p = ((D = e.system) == null ? void 0 : D.skills) ?? {}, l = ((C = e.items) == null ? void 0 : C.filter((j) => j.type === "Fegyver")) ?? [];
    let m = null;
    n.itemId && (m = l.find((j) => j.id === n.itemId) ?? null);
    const u = m && m.name || n.name || "Fegyver", d = Number(n.bonus || 0) || 0, f = ((_ = m == null ? void 0 : m.system) == null ? void 0 : _.type) || "kinetic", y = (((q = m == null ? void 0 : m.system) == null ? void 0 : q.skillKey) ?? "").trim(), r = y && p[y] !== void 0 ? y : f === "explosive" ? "grenadeUse" : "firearms", i = Number(p[r] || 0) || 0, o = d + i, a = `3d6${o !== 0 ? o > 0 ? `+${o}` : `${o}` : ""}`, g = new Roll(a);
    await g.evaluate({ async: !0 });
    const { resultType: h, label: v } = xt(g), I = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC;
    return g.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: e, alias: (e == null ? void 0 : e.name) ?? void 0 }),
      flavor: `${u} – találat`,
      flags: { "vacuum-of-the-void": { resultType: h, critLabel: v } },
      rollMode: I
    });
  }
  /** Sebzés gomb: fegyver sebzés formuláját dobja. */
  async _rollWeaponDamage(s, e = "") {
    var u, d, f, y, r, i, o, c, a, g;
    const t = this.actor;
    if (!t) return;
    const n = ((d = (u = t.items).get) == null ? void 0 : d.call(u, s)) ?? ((y = (f = t.items.contents) == null ? void 0 : f.find) == null ? void 0 : y.call(f, (h) => h.id === s));
    if (!n || n.type !== "Fegyver") return;
    let p = (((r = n.system) == null ? void 0 : r.damage) ?? "").trim();
    if (!p && e && (p = (((((i = t.system) == null ? void 0 : i.weapons) ?? {})[e] ?? {}).damage ?? "").trim()), !p) {
      (g = (o = ui.notifications) == null ? void 0 : o.warn) == null || g.call(o, ((a = (c = game.i18n) == null ? void 0 : c.localize) == null ? void 0 : a.call(c, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const l = new Roll(p);
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
    var f, y, r, i, o, c, a, g, h, v, I, T, D, C, _, q, j;
    if (!this.actor) return (f = super._onDropItem) == null ? void 0 : f.call(this, s, e);
    const n = ((E) => {
      var A;
      if (!E) return null;
      const w = E.uuid ?? E.documentUuid ?? ((A = E.data) == null ? void 0 : A.uuid) ?? (typeof E == "string" ? E : null);
      if (w) return w;
      if (typeof E == "object") {
        for (const M of Object.values(E))
          if (typeof M == "string" && M.includes(".") && M.startsWith("Item.")) return M;
      }
      return null;
    })(e);
    if (!n) return (y = super._onDropItem) == null ? void 0 : y.call(this, s, e);
    const p = await fromUuid(n);
    if (!p || p.documentName !== "Item") return (r = super._onDropItem) == null ? void 0 : r.call(this, s, e);
    if (p.type === "Pancel") {
      (o = (i = ui.notifications) == null ? void 0 : i.info) == null || o.call(i, "Az NPC-khez nem rendelhető páncél. Helyette írd át a Védelmi Értékét.");
      return;
    }
    const l = this.actor;
    if (p.type === "Kepesseg" || p.type === "ability") {
      let E = p.id;
      if (((c = p.parent) == null ? void 0 : c.id) !== l.id) {
        const Q = foundry.utils.mergeObject(p.toObject(), { type: "Kepesseg" });
        E = ((a = (await l.createEmbeddedDocuments("Item", [Q]))[0]) == null ? void 0 : a.id) ?? E;
      }
      const w = (((g = p.system) == null ? void 0 : g.kind) ?? "passive").toString(), A = ((h = l.system) == null ? void 0 : h.abilities) ?? {}, M = w === "active" ? "active" : "passive", z = Array.isArray((v = A[M]) == null ? void 0 : v.items) ? A[M].items.slice() : Array.isArray(A[M]) ? A[M].slice() : [];
      z.includes(E) || z.push(E), await l.update({ [`system.abilities.${M}.items`]: z }), typeof this.render == "function" && this.render(!0);
      return;
    }
    if (((I = p.parent) == null ? void 0 : I.id) === l.id) return;
    const m = p.toObject();
    p.type === "Fegyver" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 }), p.type === "Pancel" && foundry.utils.mergeObject(m, { system: { ...m.system ?? {}, equipped: !0 } }, { inplace: !0 });
    const d = (T = (await l.createEmbeddedDocuments("Item", [m]))[0]) == null ? void 0 : T.id;
    if (p.type === "Fegyver" && d) {
      const E = ((D = l.system) == null ? void 0 : D.weapons) ?? {}, w = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10"], A = (E.slotOrder ?? "").trim(), M = A ? A.split(/\s*,\s*/).filter((W) => w.includes(W)) : [];
      let z = w.find((W) => {
        var K;
        return !(((K = E[W]) == null ? void 0 : K.itemId) ?? "").trim();
      });
      z || (z = w.find((W) => !M.includes(W)) ?? "slot1");
      const Q = M.includes(z) ? M : [...M, z].filter((W) => w.includes(W));
      await l.update({
        "system.weapons.slotOrder": Q.join(","),
        [`system.weapons.${z}.itemId`]: d,
        [`system.weapons.${z}.name`]: p.name ?? "",
        [`system.weapons.${z}.damage`]: ((C = p.system) == null ? void 0 : C.damage) ?? "",
        [`system.weapons.${z}.bonus`]: ((_ = p.system) == null ? void 0 : _.bonus) ?? ""
      });
    }
    if (p.type === "MikroChip" && d) {
      const E = ((j = (q = l.system) == null ? void 0 : q.gear) == null ? void 0 : j.microchips) ?? {}, A = ["slot1", "slot2", "slot3"].find((M) => {
        var z;
        return !(((z = E[M]) == null ? void 0 : z.itemId) ?? "").trim();
      });
      A && await l.update({
        [`system.gear.microchips.${A}.itemId`]: d,
        [`system.gear.microchips.${A}.name`]: p.name ?? ""
      });
    }
    typeof this.render == "function" && this.render(!0);
  }
  async _postAbilityToChat(s) {
    var f, y, r, i, o, c;
    const e = (y = (f = this.actor) == null ? void 0 : f.items) == null ? void 0 : y.get(s);
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((r = e.system) == null ? void 0 : r.kind) ?? "passive", n = Number(((i = e.system) == null ? void 0 : i.kp) ?? 0) || 0, p = (((o = e.system) == null ? void 0 : o.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", d = `
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
    var u, d, f, y, r, i;
    const e = (d = (u = this.actor) == null ? void 0 : u.items) == null ? void 0 : d.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((f = e.system) == null ? void 0 : f.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const o = ((y = e.system) == null ? void 0 : y.abilityType) ?? "passive";
      if (n = (o === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", o === "active") {
        const c = Number(((r = e.system) == null ? void 0 : r.replaceCost) ?? 0) || 0;
        c > 0 && (p = `<p><strong>KP:</strong> ${c}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
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
      let p;
      if (n.type === "checkbox")
        p = n.checked;
      else if (n.type === "number") {
        if (n.value === "") continue;
        p = Number(n.value);
      } else if (n.name === "system.resources.kp" || n.name === "system.resources.kp2" || n.name === "system.resources.kp3") {
        const l = (n.value ?? "").trim();
        if (l === "") continue;
        p = Number(l) || 0;
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
Z(ce, "PARTS", foundry.utils.mergeObject(
  H(ce, ce, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs" }
  },
  { inplace: !1 }
)), Z(ce, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(ce, ce, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "npc-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/npc-sheet.hbs",
    width: 900,
    minWidth: 800,
    height: 720,
    form: foundry.utils.mergeObject(((Ss = H(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Ss.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Ts = H(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Ts.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((_s = (Ds = H(ce, ce, "DEFAULT_OPTIONS")) == null ? void 0 : Ds.window) == null ? void 0 : _s.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Rt = ce;
function mi(S) {
  return S ? S === "1" ? "1. szint" : S === "2" ? "2. szint" : S === "3" ? "3. szint" : S === "Alap" ? "Alap" : S : "Alap";
}
var Os, Cs, qs, Ls;
const le = class le extends foundry.applications.api.HandlebarsApplicationMixin(
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
    var n, p, l, m;
    if (!s) return { form: null, windowContent: null };
    const e = ((n = s.querySelector) == null ? void 0 : n.call(s, "form.votv.jarmu-sheet")) ?? ((p = s.querySelector) == null ? void 0 : p.call(s, "form.votv")) ?? null, t = ((l = s.querySelector) == null ? void 0 : l.call(s, ".votv-scroll")) ?? ((m = s.querySelector) == null ? void 0 : m.call(s, ".window-content")) ?? null;
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
    const p = this.element, l = this.form ?? this.element;
    let m = { scrollState: {}, focus: null };
    if (p) {
      m.scrollState = this._saveScrollState(p);
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
    const d = this.element, f = this.form ?? this.element, y = m.scrollState, r = m.focus, i = typeof (y == null ? void 0 : y.formScrollTop) == "number" || typeof (y == null ? void 0 : y.windowScrollTop) == "number", o = () => {
      var a, g;
      if (this._applyScrollState(d, y), (r == null ? void 0 : r.name) != null || (r == null ? void 0 : r.id) != null) {
        const h = ((a = f.querySelector) == null ? void 0 : a.call(f, r.id ? `#${CSS.escape(r.id)}` : null)) ?? (r.name ? (g = f.querySelector) == null ? void 0 : g.call(f, `[name="${CSS.escape(r.name)}"]`) : null);
        h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA") && (h.focus({ preventScroll: !0 }), typeof h.selectionStart == "number" && (h.selectionStart = r.selectionStart ?? 0, h.selectionEnd = r.selectionEnd ?? r.selectionStart ?? 0));
      }
      this._applyScrollState(d, y);
    };
    return (i || r) && (requestAnimationFrame(o), setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 150), setTimeout(o, 300), setTimeout(o, 450)), u;
  }
  _writeTotalDefense(s = null) {
    const e = s ?? this.form ?? this.element, t = (d) => {
      var f;
      return ((f = e == null ? void 0 : e.querySelector) == null ? void 0 : f.call(e, d)) ?? (this.id ? document.querySelector(`#${CSS.escape(this.id)} ${d}`) : null);
    }, n = t(".jarmu-total-defense-effective"), p = t('input[name="system.combat.defense"]'), l = t('input[name="system.combat.givenProtection"]');
    if (!n) return;
    const m = Number(p == null ? void 0 : p.value) || 0, u = Number(l == null ? void 0 : l.value) || 0;
    n.textContent = String(m + u);
  }
  async _prepareContext(s) {
    var c, a, g, h, v, I, T, D, C, _, q, j, E;
    let e = await super._prepareContext(s);
    e = e ?? {}, e.actor = e.actor ?? this.actor, e.system = e.system ?? this.actor.system;
    const t = ((c = e.system) == null ? void 0 : c.combat) ?? {};
    e.totalDefense = (Number(t.defense) || 0) + (Number(t.givenProtection) || 0), e.sizeForSelect = (((g = (a = e.system) == null ? void 0 : a.identity) == null ? void 0 : g.size) ?? "").trim() || "Közepes";
    const n = { kinetic: "Kinetikus", projectile: "Lövedékes", blade: "Pengés", explosive: "Robbanó", other: "Egyéb" }, p = { light: "Könnyű", medium: "Közepes", heavy: "Nehéz", thrown: "Dobható" }, l = "— Nincs fegyver —", m = (((h = this.actor.items) == null ? void 0 : h.contents) ?? []).filter((w) => w.type === "Fegyver");
    e.weaponsTable = m.map((w) => {
      const A = (w == null ? void 0 : w.system) ?? {}, M = A.type ?? "", z = (n[M] ?? M) || "—", Q = A.size ?? "", W = (p[Q] ?? Q) || "", K = [z, W].filter(Boolean).join(", ") || z || "—", V = M === "projectile" || Q === "thrown", ee = A.quantity != null ? String(A.quantity).trim() : "1", re = (typeof A.range == "string" ? (A.range || "").trim() : "") || "—";
      return {
        slotKey: "",
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? l,
        img: (w == null ? void 0 : w.img) ?? "",
        bonus: String(A.bonus ?? "").trim() || "0",
        damage: A.damage ?? "",
        rangeStr: re || "—",
        typeLabel: z,
        typeAndSize: K,
        quantity: ee,
        quantityDisplay: V ? ee : "—",
        isProjectile: V,
        equipped: !1,
        special: (A.special ?? "").trim() || "—"
      };
    });
    const u = (((v = this.actor.items) == null ? void 0 : v.contents) ?? []).filter((w) => w.type === "Pancel");
    e.armorTable = u.map((w) => {
      var z;
      const A = (w == null ? void 0 : w.system) ?? {}, M = !!((z = w.system) != null && z.equipped);
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        protectionBonus: (A.protectionBonus ?? "").toString().trim() || "—",
        speedPenalty: (A.speedPenalty ?? "").toString().trim() || "—",
        level: mi((A.level ?? "").toString().trim()),
        special: (A.special ?? A.other ?? "").toString().trim() || "—",
        equipped: M
      };
    });
    const d = (((I = this.actor.items) == null ? void 0 : I.contents) ?? []).filter((w) => w.type === "MikroChip");
    e.microchipsTable = d.map((w) => {
      var V, ee, re;
      const A = ((V = w == null ? void 0 : w.system) == null ? void 0 : V.abilityType) ?? "", M = A === "active" ? "Aktív" : A === "passive" ? "Passzív" : A || "—", z = A === "active", Q = Number((ee = w == null ? void 0 : w.system) == null ? void 0 : ee.replaceCost) >= 0 ? Number(w.system.replaceCost) : 0, W = (((re = w == null ? void 0 : w.system) == null ? void 0 : re.description) ?? "").trim(), K = W ? W.length > 60 ? W.slice(0, 57) + "…" : W : "—";
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        typeLabel: M,
        description: K,
        kp: Q,
        isActive: z,
        slotKey: "",
        equipped: !1
      };
    });
    const f = (((T = this.actor.items) == null ? void 0 : T.contents) ?? []).filter((w) => w.type === "Targy");
    e.itemsTable = f.map((w) => {
      const A = (w == null ? void 0 : w.system) ?? {}, M = (A.description ?? "").trim(), z = M ? M.length > 60 ? M.slice(0, 57) + "…" : M : "—", Q = A.quantity != null ? String(A.quantity).trim() : "1";
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        quantity: Q,
        description: z
      };
    });
    const y = (((D = this.actor.items) == null ? void 0 : D.contents) ?? []).filter((w) => w.type === "Jarmuegyseg"), r = [];
    for (const w of y) {
      const A = (w == null ? void 0 : w.system) ?? {}, M = A.health ?? {}, z = Number(A.level ?? 0) || 0, Q = Number(M.max ?? 0) || 0, W = Number(M.value ?? 0) || 0, K = (A.hit ?? "").toString().trim(), V = A.abilities ?? {}, ee = Array.isArray(V.items) ? V.items : [], ue = (await Promise.all(
        ee.map(async (Y) => {
          var ie;
          if (!Y) return null;
          try {
            const X = await fromUuid(Y);
            if (X && (X.type === "Kepesseg" || X.type === "ability")) return X;
          } catch {
            const X = (ie = game.items) == null ? void 0 : ie.get(Y);
            if (X && (X.type === "Kepesseg" || X.type === "ability")) return X;
          }
          return null;
        })
      )).map((Y, ie) => ({ doc: Y, ref: ee[ie] })).filter((Y) => !!Y.doc && !!Y.ref).map(({ doc: Y, ref: ie }) => {
        var Ee, ae;
        const X = (((Ee = Y.system) == null ? void 0 : Ee.kind) ?? "passive").toString(), De = Number(((ae = Y.system) == null ? void 0 : ae.kp) ?? 0) || 0, qe = X === "species";
        return {
          id: Y.id,
          ref: ie,
          name: Y.name,
          img: Y.img,
          kind: X,
          kpDisplay: qe ? 0 : De
        };
      });
      r.push({
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        level: z,
        hpMax: Q,
        hpValue: W,
        hit: K,
        abilities: ue
      });
    }
    e.unitsTable = r;
    const i = (((C = e.weaponsTable) == null ? void 0 : C.length) ?? 0) > 0 || (((_ = e.armorTable) == null ? void 0 : _.length) ?? 0) > 0 || (((q = e.microchipsTable) == null ? void 0 : q.length) ?? 0) > 0 || (((j = e.itemsTable) == null ? void 0 : j.length) ?? 0) > 0;
    e.showEquipmentDropZone = !i;
    const o = (((E = this.actor.items) == null ? void 0 : E.contents) ?? []).filter((w) => w.type === "Egyeb");
    return e.egyebList = o.map((w) => {
      const M = (((w == null ? void 0 : w.system) ?? {}).description ?? "").trim(), z = M ? M.length > 80 ? M.slice(0, 77) + "…" : M : "";
      return {
        itemId: w.id,
        actorId: this.actor.id,
        name: (w == null ? void 0 : w.name) ?? "—",
        img: (w == null ? void 0 : w.img) ?? "",
        description: z
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
      const f = this.actor.items.get(d);
      (i = f == null ? void 0 : f.sheet) == null || i.render(!0);
    }), t.on("click", ".jarmu-item-delete", async (u) => {
      var y, r;
      if (u.preventDefault(), !u.altKey) return;
      const d = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      !d || !this.actor.items.get(d) || await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("change", ".jarmu-item-quantity-input", async (u) => {
      var r;
      const d = u.currentTarget, f = (r = d == null ? void 0 : d.dataset) == null ? void 0 : r.itemId;
      if (!f) return;
      const y = this.actor.items.get(f);
      !y || y.type !== "Targy" && y.type !== "Fegyver" || await y.update({ "system.quantity": (d.value ?? "").trim() });
    }), t.on("change", ".jarmu-armor-equipped-checkbox", async (u) => {
      var y, r;
      const d = (r = (y = u.currentTarget) == null ? void 0 : y.dataset) == null ? void 0 : r.itemId;
      if (!d) return;
      const f = this.actor.items.get(d);
      !f || f.type !== "Pancel" || await f.update({ "system.equipped": u.currentTarget.checked });
    }), t.on("click", ".jarmu-egyeb-name, .jarmu-egyeb-icon", (u) => {
      var f, y, r, i;
      u.preventDefault();
      const d = (y = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : y.itemId;
      d && ((i = (r = this.actor.items.get(d)) == null ? void 0 : r.sheet) == null || i.render(!0));
    }), t.on("click", ".jarmu-egyeb-delete", async (u) => {
      var f, y;
      if (u.preventDefault(), !u.altKey) return;
      const d = (y = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : y.itemId;
      d && await this.actor.deleteEmbeddedDocuments("Item", [d]);
    }), t.on("click", ".karakter-item-chat", async (u) => {
      var f, y;
      u.preventDefault();
      const d = (y = (f = u.currentTarget) == null ? void 0 : f.dataset) == null ? void 0 : y.itemId;
      d && await this._postItemToChat(d);
    }), t.on("click", ".jarmu-unit-ability-name, .jarmu-unit-ability-icon", async (u) => {
      var r, i, o, c, a, g, h, v, I, T;
      u.preventDefault();
      const d = (c = (o = (i = (r = u.currentTarget) == null ? void 0 : r.closest) == null ? void 0 : i.call(r, ".jarmu-unit-ability-pill")) == null ? void 0 : o.dataset) == null ? void 0 : c.abilityRef, f = (v = (h = (g = (a = u.currentTarget) == null ? void 0 : a.closest) == null ? void 0 : g.call(a, ".jarmu-unit-ability-pill")) == null ? void 0 : h.dataset) == null ? void 0 : v.abilityId;
      let y = null;
      if (d)
        try {
          y = await fromUuid(d);
        } catch {
          y = null;
        }
      !y && f && (y = ((I = game.items) == null ? void 0 : I.get(f)) ?? null), (T = y == null ? void 0 : y.sheet) == null || T.render(!0);
    }), t.on("click", ".jarmu-unit-ability-chat", async (u) => {
      var i, o, c, a;
      u.preventDefault();
      const d = (o = (i = u.currentTarget) == null ? void 0 : i.closest) == null ? void 0 : o.call(i, ".jarmu-unit-ability-pill"), f = (c = d == null ? void 0 : d.dataset) == null ? void 0 : c.abilityRef, y = (a = d == null ? void 0 : d.dataset) == null ? void 0 : a.abilityId, r = f || y;
      r && await this._postUnitAbilityToChat(r);
    });
    const n = this, p = (u) => {
      if (!u) return;
      const d = n._getFormDataForUpdate(u);
      Object.keys(d).length !== 0 && n.actor.update(d).catch((f) => console.warn("VoidJarmuSheet save failed", f));
    }, l = (u) => {
      var d, f, y;
      return u && (((f = (d = n.element) == null ? void 0 : d.contains) == null ? void 0 : f.call(d, u)) || n.id && ((y = u.closest) == null ? void 0 : y.call(u, `#${CSS.escape(n.id)}`)));
    };
    n._votvJarmuBlur = (u) => {
      var i;
      const d = u.target;
      if (!d || !d.form) return;
      const f = d.tagName;
      if (f !== "INPUT" && f !== "TEXTAREA" && f !== "SELECT") return;
      const y = d.form;
      if (!l(y)) return;
      const r = u.relatedTarget;
      r && (y.contains(r) || n.id && ((i = r.closest) != null && i.call(r, `#${CSS.escape(n.id)}`))) || (game.votv && (game.votv._lastKarakterSheetBlurSave = { appId: n.id, at: Date.now() }), p(y));
    }, document.body.addEventListener("blur", n._votvJarmuBlur, !0), t.on("change", ".jarmu-unit-hp-current", async (u) => {
      var o;
      const d = u.currentTarget, f = (o = d == null ? void 0 : d.dataset) == null ? void 0 : o.itemId;
      if (!f) return;
      const y = this.actor.items.get(f);
      if (!y || y.type !== "Jarmuegyseg") return;
      const r = (d.value ?? "").trim(), i = r === "" ? 0 : Number(r);
      await y.update({ "system.health.value": Number.isFinite(i) ? i : 0 });
    }), t.on("change", ".jarmu-unit-hit-input", async (u) => {
      var i;
      const d = u.currentTarget, f = (i = d == null ? void 0 : d.dataset) == null ? void 0 : i.itemId;
      if (!f) return;
      const y = this.actor.items.get(f);
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
    var u, d, f;
    const e = this.actor.items.get(s);
    if (!e || e.type !== "MikroChip" && e.type !== "Egyeb") return;
    const t = (((u = e.system) == null ? void 0 : u.description) ?? "").trim();
    let n, p = "";
    if (e.type === "MikroChip") {
      const y = ((d = e.system) == null ? void 0 : d.abilityType) ?? "passive";
      if (n = (y === "active" ? "Aktív" : "Passzív") + " Mikro-Chip", y === "active") {
        const r = Number(((f = e.system) == null ? void 0 : f.replaceCost) ?? 0) || 0;
        r > 0 && (p = `<p><strong>KP:</strong> ${r}</p>`);
      }
    } else
      n = "Egyéb Információ";
    const l = t ? `<p>${t}</p>` : "", m = `
      <h2>${e.name}</h2>
      <p><strong>Típus:</strong> ${n}</p>
      ${p}
      ${l}
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: m,
      flags: { "vacuum-of-the-void": { itemId: e.id, itemType: e.type } }
    });
  }
  async _postUnitAbilityToChat(s) {
    var f, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", d = `
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
      for (const f of Object.values(e))
        if (typeof f == "string" && f.includes(".") && f.startsWith("Item.")) {
          t = f;
          break;
        }
    }
    if (!t) return super._onDropItem(s, e);
    const n = await fromUuid(t);
    if (!n || n.documentName !== "Item") return super._onDropItem(s, e);
    const p = this.actor;
    if (!["Fegyver", "Pancel", "MikroChip", "Targy", "Egyeb", "Jarmuegyseg"].includes(n.type)) return super._onDropItem(s, e);
    if (((d = n.parent) == null ? void 0 : d.id) === p.id) return;
    const m = foundry.utils.mergeObject(n.toObject(), {
      system: { ...n.toObject().system ?? {}, equipped: n.type === "Pancel" ? !1 : void 0 }
    });
    await p.createEmbeddedDocuments("Item", [m]);
  }
};
Z(le, "PARTS", foundry.utils.mergeObject(
  H(le, le, "PARTS") ?? {},
  {
    content: { template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs" }
  },
  { inplace: !1 }
)), Z(le, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(le, le, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "actor", "jarmu-sheet"],
    template: "systems/vacuum-of-the-void/templates/actor/jarmu-sheet.hbs",
    width: 1e3,
    minWidth: 1e3,
    height: 800,
    form: foundry.utils.mergeObject(((Os = H(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Os.form) ?? {}, { submitOnChange: !1 }),
    window: foundry.utils.mergeObject(((Cs = H(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : Cs.window) ?? {}, {
      resizable: !0,
      contentClasses: [
        ...((Ls = (qs = H(le, le, "DEFAULT_OPTIONS")) == null ? void 0 : qs.window) == null ? void 0 : Ls.contentClasses) ?? [],
        "votv-scroll"
      ]
    })
  },
  { inplace: !1 }
));
let Mt = le;
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
const ve = class ve extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, f, y, r, i, o, c;
      if (!e.isEditable || !((f = (d = l.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
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
    }, p = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, f;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(m) && n(m);
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
Z(ve, "PARTS", foundry.utils.mergeObject(H(ve, ve, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs" }
})), Z(ve, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ve, ve, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Fegyver"],
  template: "systems/vacuum-of-the-void/templates/item/weapon-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((Ns = H(ve, ve, "DEFAULT_OPTIONS")) == null ? void 0 : Ns.form) ?? {}, { submitOnChange: !1 })
}));
let jt = ve;
var As;
const ke = class ke extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, f, y, r, i, o, c;
      if (!e.isEditable || !((f = (d = l.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
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
    }, p = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, f;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(m) && n(m);
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
Z(ke, "PARTS", foundry.utils.mergeObject(H(ke, ke, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs" }
})), Z(ke, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(ke, ke, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Pancel"],
  template: "systems/vacuum-of-the-void/templates/item/shield-sheet.hbs",
  width: 550,
  minWidth: 550,
  height: 400,
  form: foundry.utils.mergeObject(((As = H(ke, ke, "DEFAULT_OPTIONS")) == null ? void 0 : As.form) ?? {}, { submitOnChange: !1 })
}));
let Kt = ke;
var Fs;
const we = class we extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, f, y, r, i, o, c;
      if (!e.isEditable || !((f = (d = l.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
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
    }, p = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, f;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(m) && n(m);
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
Z(we, "PARTS", foundry.utils.mergeObject(H(we, we, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs" }
})), Z(we, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(we, we, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "MikroChip"],
  template: "systems/vacuum-of-the-void/templates/item/microchip-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Fs = H(we, we, "DEFAULT_OPTIONS")) == null ? void 0 : Fs.form) ?? {}, { submitOnChange: !1 })
}));
let zt = we;
var Es;
const Ie = class Ie extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, f, y, r, i, o, c;
      if (!e.isEditable || !((f = (d = l.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
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
    }, p = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, f;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(m) && n(m);
    }, e._votvInput = (l) => {
      var d;
      const m = l.target;
      if ((m == null ? void 0 : m.name) === "name") return;
      const u = (m == null ? void 0 : m.form) ?? ((d = m == null ? void 0 : m.closest) == null ? void 0 : d.call(m, "form"));
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
Z(Ie, "PARTS", foundry.utils.mergeObject(H(Ie, Ie, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs" }
})), Z(Ie, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(Ie, Ie, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Kepesseg", "kepesseg"],
  template: "systems/vacuum-of-the-void/templates/item/ability-sheet.hbs",
  width: 500,
  minWidth: 500,
  height: 420,
  form: foundry.utils.mergeObject(((Es = H(Ie, Ie, "DEFAULT_OPTIONS")) == null ? void 0 : Es.form) ?? {}, { submitOnChange: !0 })
}));
let Ut = Ie;
var Ps;
const Se = class Se extends foundry.applications.api.HandlebarsApplicationMixin(
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
      var d, f, y, r, i, o, c;
      if (!e.isEditable || !((f = (d = l.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
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
    }, p = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, f;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(m) && n(m);
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
Z(Se, "PARTS", foundry.utils.mergeObject(H(Se, Se, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs" }
})), Z(Se, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(Se, Se, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Targy"],
  template: "systems/vacuum-of-the-void/templates/item/targy-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject(((Ps = H(Se, Se, "DEFAULT_OPTIONS")) == null ? void 0 : Ps.form) ?? {}, { submitOnChange: !1 })
}));
let Ht = Se;
var $s;
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
      var d, f, y, r, i, o, c;
      if (!e.isEditable || !((f = (d = l.target) == null ? void 0 : d.closest) != null && f.call(d, ".profile")) && ((r = (y = l.target) == null ? void 0 : y.getAttribute) == null ? void 0 : r.call(y, "data-edit")) !== "img") return;
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
    }, p = (l) => {
      var m, u, d;
      return l && (((u = (m = e.element) == null ? void 0 : m.contains) == null ? void 0 : u.call(m, l)) || e.id && ((d = l.closest) == null ? void 0 : d.call(l, `#${CSS.escape(e.id)}`)));
    };
    e._votvChange = (l) => {
      var u, d, f;
      const m = ((u = l.target) == null ? void 0 : u.form) ?? ((f = (d = l.target) == null ? void 0 : d.closest) == null ? void 0 : f.call(d, "form"));
      p(m) && n(m);
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
Z(Te, "PARTS", foundry.utils.mergeObject(H(Te, Te, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs" }
})), Z(Te, "DEFAULT_OPTIONS", foundry.utils.mergeObject(H(Te, Te, "DEFAULT_OPTIONS"), {
  classes: ["vacuum-of-the-void", "sheet", "item", "Egyeb"],
  template: "systems/vacuum-of-the-void/templates/item/egyeb-sheet.hbs",
  width: 480,
  minWidth: 400,
  height: 360,
  form: foundry.utils.mergeObject((($s = H(Te, Te, "DEFAULT_OPTIONS")) == null ? void 0 : $s.form) ?? {}, { submitOnChange: !1 })
}));
let Bt = Te;
var xs, Rs;
const fe = class fe extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.sheets.ItemSheetV2
) {
  get item() {
    return this.document;
  }
  _attachFrameListeners(s) {
    var u, d, f, y;
    super._attachFrameListeners(s);
    const e = this, t = this.form ?? ((u = s == null ? void 0 : s.querySelector) == null ? void 0 : u.call(s, "form.votv-jarmuegyseg-sheet")) ?? s ?? this.element, n = t ? $(t) : $([]);
    console.log(
      "VOTV JarmuEgysegSheet _attachFrameListeners for",
      (d = this.document) == null ? void 0 : d.name,
      "id=",
      (f = this.document) == null ? void 0 : f.id,
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
    const p = (y = t == null ? void 0 : t.querySelector) == null ? void 0 : y.call(t, ".karakter-ability-area[data-area='abilities']");
    if (p && (p.addEventListener("dragover", (r) => {
      r.preventDefault(), p.classList.add("karakter-ability-area-drag-over");
    }), p.addEventListener("dragleave", () => {
      p.classList.remove("karakter-ability-area-drag-over");
    }), p.addEventListener("drop", () => {
      p.classList.remove("karakter-ability-area-drag-over");
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
    const t = foundry.utils.deepClone(this.document.system ?? {}), n = t.abilities ?? {}, p = Array.isArray(n.items) ? n.items : [];
    console.log("VOTV JarmuEgysegSheet _prepareContext refs=", p);
    const m = (await Promise.all(
      p.map(async (u) => {
        var d;
        if (!u) return null;
        try {
          const f = await fromUuid(u);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        } catch {
          const f = (d = game.items) == null ? void 0 : d.get(u);
          if (f && (f.type === "Kepesseg" || f.type === "ability")) return f;
        }
        return null;
      })
    )).map((u, d) => ({ doc: u, ref: p[d] })).filter((u) => !!u.doc && !!u.ref).map(({ doc: u, ref: d }) => {
      var i, o;
      const f = (((i = u.system) == null ? void 0 : i.kind) ?? "passive").toString(), y = Number(((o = u.system) == null ? void 0 : o.kp) ?? 0) || 0, r = f === "species";
      return {
        id: u.id,
        ref: d,
        name: u.name,
        img: u.img,
        kind: f,
        // Faji (species) képességnél ne jelenjen meg a KP mennyiség,
        // aktív/passzív stb. esetén igen.
        kpDisplay: r ? 0 : y
      };
    });
    return console.log("VOTV JarmuEgysegSheet _prepareContext abilityItems=", m), e.system = t, e.abilityList = m, e;
  }
  async _postAbilityToChat(s) {
    var f, y, r, i;
    if (!s) return;
    let e = null;
    try {
      e = await fromUuid(s);
    } catch {
      e = ((f = game.items) == null ? void 0 : f.get(s)) ?? null;
    }
    if (!e || e.type !== "Kepesseg" && e.type !== "ability") return;
    const t = ((y = e.system) == null ? void 0 : y.kind) ?? "passive", n = Number(((r = e.system) == null ? void 0 : r.kp) ?? 0) || 0, p = (((i = e.system) == null ? void 0 : i.description) ?? "").trim(), l = t === "active" ? "Aktív" : t === "species" ? "Faji" : t === "background" ? "Háttér" : "Passzív", m = n > 0 ? `<p><strong>KP:</strong> ${n}</p>` : "", u = p ? `<p>${p}</p>` : "", d = `
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
    var t, n, p;
    if (console.log("VOTV JarmuEgysegSheet _onDropDocument doc=", e), !e || e.documentName !== "Item")
      return (t = super._onDropDocument) == null ? void 0 : t.call(this, s, e);
    if (e.type === "Kepesseg" || e.type === "ability") {
      const l = e.uuid ?? e.id, m = this.document.system ?? {}, u = Array.isArray((n = m.abilities) == null ? void 0 : n.items) ? m.abilities.items.slice() : [];
      return u.push(l), console.log("VOTV JarmuEgysegSheet _onDropDocument updating abilities.items to", u), await this.document.update({ "system.abilities.items": u }), e;
    }
    return (p = super._onDropDocument) == null ? void 0 : p.call(this, s, e);
  }
};
Z(fe, "PARTS", foundry.utils.mergeObject(H(fe, fe, "PARTS") ?? {}, {
  content: { template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs" }
})), Z(fe, "DEFAULT_OPTIONS", foundry.utils.mergeObject(
  H(fe, fe, "DEFAULT_OPTIONS"),
  {
    classes: ["vacuum-of-the-void", "sheet", "item", "Jarmuegyseg"],
    template: "systems/vacuum-of-the-void/templates/item/jarmuegyseg-sheet.hbs",
    width: 560,
    minWidth: 520,
    height: 480,
    form: foundry.utils.mergeObject(((xs = H(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : xs.form) ?? {}, { submitOnChange: !1 }),
    dragDrop: [
      ...((Rs = H(fe, fe, "DEFAULT_OPTIONS")) == null ? void 0 : Rs.dragDrop) ?? [],
      {
        dragSelector: null,
        dropSelector: ".karakter-ability-area[data-area='abilities']"
      }
    ]
  },
  { inplace: !1 }
));
let Gt = fe;
const Ms = "systems/vacuum-of-the-void/assets/void-bg.jpg";
function js(S) {
  return S === "Apró" ? 0.5 : S === "Nagy" ? 2 : S === "Óriási" ? 3 : 1;
}
Hooks.once("init", () => {
  var e, t, n, p, l, m;
  console.log("Vacuum of the Void | Initializing system"), game.votv = {
    systemId: "vacuum-of-the-void",
    checks: {
      // 3d6-based checks scaffold
      defaultFormula: "3d6",
      targetType: "under-or-equal"
    },
    _dragSourceActorId: null
  }, (e = CONFIG.Actor).dataModels ?? (e.dataModels = {}), CONFIG.Actor.dataModels.Karakter = Ys, CONFIG.Actor.dataModels.Npc = Vt, CONFIG.Actor.dataModels.Jarmu = Qs, (t = CONFIG.Item).dataModels ?? (t.dataModels = {}), CONFIG.Item.dataModels.Fegyver = ps, CONFIG.Item.dataModels.weapon = ps, CONFIG.Item.dataModels.Pancel = ti, CONFIG.Item.dataModels.MikroChip = si, CONFIG.Item.dataModels.Kepesseg = gs, CONFIG.Item.dataModels.ability = gs, CONFIG.Item.dataModels.Targy = ni, CONFIG.Item.dataModels.Egyeb = ri, CONFIG.Item.dataModels.Jarmuegyseg = ci, (n = CONFIG.Actor).trackableAttributes ?? (n.trackableAttributes = {}), CONFIG.Actor.trackableAttributes.Karakter = {
    bar: ["resources.health"],
    value: []
  }, CONFIG.Actor.trackableAttributes.Npc = {
    bar: ["", "resources.health"],
    value: []
  }, (p = CONFIG.Actor).typeLabels ?? (p.typeLabels = {}), CONFIG.Actor.typeLabels.Karakter = "Karakter", CONFIG.Actor.typeLabels.Npc = "NPC", CONFIG.Actor.typeLabels.Jarmu = "Jármű", (l = CONFIG.Combat).initiative ?? (l.initiative = {}), CONFIG.Combat.initiative.formula = "1d20", (m = CONFIG.Item).typeLabels ?? (m.typeLabels = {}), CONFIG.Item.typeLabels.Fegyver = "Fegyver", CONFIG.Item.typeLabels.weapon = "Fegyver", CONFIG.Item.typeLabels.Pancel = "Páncél", CONFIG.Item.typeLabels.MikroChip = "Mikro-Chip", CONFIG.Item.typeLabels.Kepesseg = "Képesség", CONFIG.Item.typeLabels.ability = "Képesség", CONFIG.Item.typeLabels.Targy = "Tárgy", CONFIG.Item.typeLabels.Egyeb = "Egyéb Információ", CONFIG.Item.typeLabels.Jarmuegyseg = "Járműegység";
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
  ], foundry.documents.collections.Actors.unregisterSheet("core", foundry.applications.sheets.ActorSheetV2), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", bt, {
    types: ["Karakter"],
    makeDefault: !0,
    label: "VOTV.KarakterSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Rt, {
    types: ["Npc"],
    makeDefault: !0,
    label: "VOTV.NpcSheet"
  }), foundry.documents.collections.Actors.registerSheet("vacuum-of-the-void", Mt, {
    types: ["Jarmu"],
    makeDefault: !0,
    label: "VOTV.JarmuSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", jt, {
    types: ["Fegyver", "weapon"],
    makeDefault: !0,
    label: "VOTV.FegyverSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Kt, {
    types: ["Pancel"],
    makeDefault: !0,
    label: "VOTV.PancelSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", zt, {
    types: ["MikroChip"],
    makeDefault: !0,
    label: "VOTV.MikroChipSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ut, {
    types: ["Kepesseg", "ability"],
    makeDefault: !0,
    label: "VOTV.KepessegSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Ht, {
    types: ["Targy"],
    makeDefault: !0,
    label: "VOTV.TargySheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Bt, {
    types: ["Egyeb"],
    makeDefault: !0,
    label: "VOTV.EgyebSheet"
  }), foundry.documents.collections.Items.registerSheet("vacuum-of-the-void", Gt, {
    types: ["Jarmuegyseg"],
    makeDefault: !0,
    label: "VOTV.JarmuEgysegSheet"
  }), Hooks.on("updateActor", (u, d, f, y) => {
    if ((u == null ? void 0 : u.type) !== "Karakter" || !(u != null && u.id)) return;
    const r = u.id;
    setTimeout(() => {
      var a, g, h, v;
      const i = (a = game.actors) == null ? void 0 : a.get(r);
      if (!i || i.type !== "Karakter") return;
      const o = bt.getTotalSpeedRaw(i), c = (g = i.effects) == null ? void 0 : g.find((I) => I.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
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
  Hooks.on("updateActor", (u, d, f, y) => {
    var T, D, C, _, q, j, E, w, A, M, z, Q, W;
    const r = u == null ? void 0 : u.id;
    if (!r) return;
    if ((u.type === "Karakter" || u.type === "Npc") && ((T = d == null ? void 0 : d.system) != null && T.combat) && "initiativeResult" in d.system.combat) {
      const K = Number((C = (D = u.system) == null ? void 0 : D.combat) == null ? void 0 : C.initiativeResult), V = Number.isFinite(K) ? K : 0, ee = game.combat;
      if (ee) {
        const re = ((_ = ee.combatants) == null ? void 0 : _.contents) ?? Array.from(ee.combatants ?? []);
        for (const ue of re)
          if (((q = ue.actor) == null ? void 0 : q.id) === r || ue.actorId === r) {
            ee.updateEmbeddedDocuments("Combatant", [{ _id: ue.id, initiative: V }]).catch(() => {
            });
            break;
          }
      }
    }
    if (u.type === "Npc" && ((j = d == null ? void 0 : d.system) != null && j.identity) && "size" in d.system.identity) {
      const K = js((w = (E = u.system) == null ? void 0 : E.identity) == null ? void 0 : w.size);
      u.update({
        "prototypeToken.width": K,
        "prototypeToken.height": K
      }).catch((V) => console.warn("Vacuum of the Void | NPC token size update failed for", u.name, V));
    }
    const i = document.activeElement, o = i && (i.tagName === "INPUT" && i.type !== "checkbox" && i.type !== "radio" || i.tagName === "TEXTAREA" || i.isContentEditable), c = [], a = (A = game.actors) == null ? void 0 : A.get(r);
    a != null && a.apps && c.push(...Array.from(a.apps));
    const g = Object.values((ui == null ? void 0 : ui.windows) ?? {});
    for (const K of g) {
      if (((M = K.document) == null ? void 0 : M.id) !== r || ((z = K.document) == null ? void 0 : z.documentName) !== "Actor") continue;
      const V = (Q = K.constructor) == null ? void 0 : Q.name;
      V !== "VoidKarakterSheet" && V !== "VoidJarmuSheet" || c.includes(K) || c.push(K);
    }
    if (o && c.some((K) => {
      const V = (K == null ? void 0 : K.form) ?? (K == null ? void 0 : K.element);
      return V && V.contains(i);
    })) return;
    const v = (W = game.votv) == null ? void 0 : W._lastKarakterSheetBlurSave, I = v && Date.now() - v.at < s ? v.appId : null;
    setTimeout(() => {
      for (const K of c)
        !(K != null && K.rendered) || typeof K.render != "function" || K.id !== I && K.render(!0);
    }, 0);
  }), Hooks.on("updateItem", (u, d, f, y) => {
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
    var g, h, v, I, T, D, C, _, q, j, E, w, A, M, z, Q, W, K, V, ee, re, ue, Y;
    const t = (h = (g = e.target) == null ? void 0 : g.closest) == null ? void 0 : h.call(g, ".votv-weapon-damage-chat");
    if (!t || t.disabled) return;
    const n = (t.dataset.messageId ?? "").trim();
    if (!n) return;
    const p = (v = game.messages) == null ? void 0 : v.get(n), l = (T = (I = p == null ? void 0 : p.flags) == null ? void 0 : I["vacuum-of-the-void"]) == null ? void 0 : T.weapon;
    if (!l) return;
    const m = l.actorId ?? ((D = p == null ? void 0 : p.speaker) == null ? void 0 : D.actor) ?? "";
    if (!m) return;
    e.preventDefault(), e.stopPropagation();
    let u = ((C = game.actors) == null ? void 0 : C.get(l.actorId)) ?? ((_ = game.actors) == null ? void 0 : _.get(m));
    if (u || (u = ((j = (q = game.scenes) == null ? void 0 : q.contents) == null ? void 0 : j.flatMap((X) => {
      var De;
      return ((De = X.tokens) == null ? void 0 : De.contents) ?? [];
    }).map((X) => X.actor).find((X) => X && (X.id === m || X.id === l.actorId))) ?? null), !u) return;
    const d = l.itemId ? ((w = (E = u.items) == null ? void 0 : E.get) == null ? void 0 : w.call(E, l.itemId)) ?? ((z = (M = (A = u.items) == null ? void 0 : A.contents) == null ? void 0 : M.find) == null ? void 0 : z.call(M, (ie) => ie.id === l.itemId)) : null;
    let f = (l.damageFormula ?? "").trim();
    if (f || (f = (((Q = d == null ? void 0 : d.system) == null ? void 0 : Q.damage) ?? "").trim()), !f && l.slotKey && (f = (((((W = u.system) == null ? void 0 : W.weapons) ?? {})[l.slotKey] ?? {}).damage ?? "").trim()), !f) {
      (re = (K = ui.notifications) == null ? void 0 : K.warn) == null || re.call(K, ((ee = (V = game.i18n) == null ? void 0 : V.localize) == null ? void 0 : ee.call(V, "votv.weapon.no-damage")) ?? "A fegyvernek nincs sebzés formulája.");
      return;
    }
    const y = new Roll(f);
    await y.evaluate({ async: !0 });
    const r = game.settings.get("core", "rollMode") ?? CONST.DICE_ROLL_MODES.PUBLIC, i = l.targetName || "", o = l.hitLocationName || "", c = ((d == null ? void 0 : d.name) ?? (l.slotKey ? ((Y = (((ue = u.system) == null ? void 0 : ue.weapons) ?? {})[l.slotKey]) == null ? void 0 : Y.name) ?? "" : "")) || "Fegyver";
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
      var l, m, u, d, f, y;
      if (!((m = (l = e.target) == null ? void 0 : l.closest) != null && m.call(l, "#actors"))) return;
      const t = (d = (u = e.target) == null ? void 0 : u.closest) == null ? void 0 : d.call(u, "[data-document-id]"), n = (f = t == null ? void 0 : t.getAttribute) == null ? void 0 : f.call(t, "data-document-id");
      if (!n) return;
      const p = n.includes(".") ? n.split(".").pop() : n;
      p && ((y = game.actors) != null && y.get(p)) && (game.votv._dragSourceActorId = p);
    },
    !0
  ), (async () => {
    var t, n, p, l;
    const e = ((t = game.actors) == null ? void 0 : t.filter((m) => m.type === "Karakter")) ?? [];
    for (const m of e) {
      const u = bt.getTotalSpeedRaw(m), d = (n = m.effects) == null ? void 0 : n.find((f) => f.getFlag("vacuum-of-the-void", "immobilizedFromSpeed") === !0);
      if (u <= 0 && !d) {
        const f = ((l = (p = CONFIG.statusEffects) == null ? void 0 : p.find((y) => y.id === "immobilized")) == null ? void 0 : l.img) ?? "";
        await m.createEmbeddedDocuments("ActiveEffect", [{
          name: "Mozgásképtelen",
          icon: f,
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
      const p = {
        name: "Vacuum of the Void",
        width: 3840,
        height: 2160,
        background: { src: Ms },
        backgroundColor: "#0f0f0f",
        grid: { type: 0 }
      }, l = await n.create(p);
      l && console.log("Vacuum of the Void | Default scene created:", l.id);
    } catch (n) {
      console.warn("Vacuum of the Void | Default scene creation failed:", n);
    }
  })(), (async () => {
    var l, m, u, d, f, y;
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
    }, p = ((f = game.actors) == null ? void 0 : f.filter((r) => r.type === "Npc")) ?? [];
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
  const p = n ? (m = game.actors) == null ? void 0 : m.get(n) : null;
  if (p) {
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
      const f = js((d = (u = p.system) == null ? void 0 : u.identity) == null ? void 0 : d.size);
      S.updateSource({
        ...t ? { actorId: t } : {},
        "bar1.attribute": "",
        "bar2.attribute": "resources.health",
        width: f,
        height: f
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
    !n || n.type !== "Karakter" && n.type !== "Npc" || n.update(fi).catch((p) => {
      console.warn("Vacuum of the Void | KP reset failed for", n.name, p);
    });
  }
}
Hooks.on("combatRound", (S, s, e) => {
  (e == null ? void 0 : e.direction) <= 0 || Ks(S);
});
function zs() {
  var s, e, t;
  const S = /* @__PURE__ */ new Set();
  for (const n of ((s = game.actors) == null ? void 0 : s.filter((p) => p.type === "Karakter" || p.type === "Npc")) ?? []) {
    const p = n.apps ?? [], l = p.contents ? Array.from(p.contents) : Array.from(p);
    for (const m of l)
      !m || S.has(m.id) || (S.add(m.id), typeof m.render == "function" && m.render(!0));
  }
  for (const n of Object.values((ui == null ? void 0 : ui.windows) ?? {})) {
    if (((e = n == null ? void 0 : n.document) == null ? void 0 : e.documentName) !== "Actor") continue;
    const p = (t = n == null ? void 0 : n.document) == null ? void 0 : t.type;
    p !== "Karakter" && p !== "Npc" || S.has(n.id) || (S.add(n.id), typeof n.render == "function" && n.render(!0));
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
  t.querySelectorAll("[data-action='rollAll'], [data-action='rollNPCs'], [data-action='rollInitiative']").forEach((p) => {
    p.style.display = "none";
  });
});
Hooks.on("renderTokenHUD", (S, s, e) => {
  var p;
  const t = S == null ? void 0 : S.object, n = ((p = t == null ? void 0 : t.document) == null ? void 0 : p.actor) ?? (t == null ? void 0 : t.actor);
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
  var d, f, y, r;
  const t = ((d = S.flags) == null ? void 0 : d["vacuum-of-the-void"]) ?? {}, n = t.resultType, p = t.critLabel, l = t.weaponAttack, m = t.weapon;
  if (!n && !p && !l) return;
  const u = (f = s == null ? void 0 : s.querySelector) == null ? void 0 : f.call(s, ".dice-roll");
  if (u) {
    if (n && u.classList.add(`votv-${n}`), p) {
      const i = u.querySelector(".votv-crit-label");
      if (i)
        i.textContent = p;
      else {
        const o = u.querySelector(".dice-total"), c = (o == null ? void 0 : o.parentElement) ?? u, a = document.createElement("div");
        a.className = `votv-crit-label votv-crit-label-${n || "neutral"}`, a.textContent = p, c.appendChild(a);
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
  bt as V,
  xt as c
};
//# sourceMappingURL=vacuum-of-the-void-D_VdAH2P.mjs.map
